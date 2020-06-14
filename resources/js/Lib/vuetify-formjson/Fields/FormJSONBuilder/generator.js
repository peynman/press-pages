import Blockly from 'blockly'
import GeneratVueJSObject from '../Blockly/generator'
import { EasyNestedObject } from '../mixins'
import { compile } from 'vue-template-compiler';

export default {
    mixins: [EasyNestedObject],
    data: () => ({
        formModel: {},
        formSchema: {}
    }),
    methods: {
        UpdatePageContent(body, options, sources) {
            const compiled = this.CompileFormJSONSchemaWithCode(this, body.schema, body.code);
            console.log(compiled);
            this[this.getFormSchemaPropName()] = {
                fields: compiled.fields,
                options: compiled.options,
            }
            this[this.getFormValuePropName()] = body.values && !Array.isArray(body.values) ? body.values : {}

            if (sources) {
                sources.forEach((src) => {
                    this.setNestedPathValue(this, src.path, src.resource)
                })
            }

            if (compiled.onFormInit) {
                compiled.onFormInit()
            }
        },
        getRoutePathPartAt (index) {
            let pathname = window.location.pathname
            if (pathname.startsWith('/')) {
                pathname = pathname.substr(1)
            }
            const parts = pathname.split('/')
            return parts[index];
        },
        gotoPage (page, data) {
            this.$emit('goto-page', page, data);
        },
        loadSchema (schema) {
            this.$emit('load-schema', schema)
        },
        authenticateUserWithToken (user, token) {
            this.$emit('update-user', user, token)
        },
        getFormValuePropName () {
            return 'formModel'
        },
        getFormSchemaPropName () {
            return 'formSchema'
        },
        webRequest (data) {
            console.log(data)
            return this.axios(data)
        },
        getWebAuthHeaders (headers) {
            const authHeaders = {}
            if (this.$store &&
                this.$store.state.tokens &&
                this.$store.state.tokens.api) {
                    authHeaders['Authorization'] = 'Bearer ' + this.$store.state.tokens.api
            }
            return {
                ...headers,
                ...authHeaders
            }
        },
        getAlertForResponse (response) {
            let data = response
            if (response.response) {
                data = response.response
            }
            if (data.data) {
                data = data.data
            }
            let validations = data.errors;
            if (data.validations) {
                validations = data.validations
            }

            let message = data.message
            if ((!message || message === '') && data.exception) {
                message = data.exception
            }

            const alert = {
                label: '',
                message,
                validations: validations,
                props: {
                    color: data.validations ? 'warning' : response.status === 200 ? 'success' : 'red',
                    type: response.status === 200 ? 'success' : 'error'
                },
                hidden: false,
            }
            return alert;
        },
        setFormValidations (errors) {
            let valErrors = errors
            if (errors.validations) {
                valErrors = errors.validations
            }

            const form = this[this.getFormSchemaPropName()]
            for (const errPath in valErrors) {
                const errPathParts = errPath.split('.')
                let ref = form
                errPathParts.forEach((part) => {
                    if (ref.fields) {
                        ref = ref.fields
                    }
                    ref = ref[part]
                })
                if (ref) {
                    if (!ref.props) {
                        ref.props = {}
                    }
                    ref.props['error-messages'] = valErrors[errPath]
                    ref.props['error'] = true
                }
            }
        },
        resetFormValidations () {
            const form = this[this.getFormSchemaPropName()].fields
            const iterateAndRemoveErrors = function(ref) {
                for (const prop in ref) {
                    if (ref[prop] && ref[prop].props && ref[prop].props['error-messages']) {
                        ref[prop].props['error-messages'] = []
                        ref[prop].props['error'] = false
                    } else if (typeof ref[prop] === 'object') {
                        iterateAndRemoveErrors(ref[prop])
                    }
                }
            }
            iterateAndRemoveErrors(form)
        },
        getStateFromNestedPath (path) {
            const parts = path.split('.')
            let ref = this
            let indexer = 0
            while (ref && indexer < parts.length) {
                ref = ref[parts[indexer++]]
            }
            return ref
        },
        setStateForNestedPath (path, value) {
            const parts = path.split('.')
            let ref = this
            let indexer = 0
            while (ref && indexer < parts.length - 1) {
                ref = ref[parts[indexer++]]
            }
            if (ref) {
                ref[parts[parts.length - 1]] = value
            }
        },
        appendStateForNestedPath (path, value) {
            const parts = path.split('.')
            let ref = this
            let indexer = 0
            while (ref && indexer < parts.length - 1) {
                ref = ref[parts[indexer++]]
            }
            if (ref) {
                if (ref[parts[parts.length - 1]]) {
                    ref[parts[parts.length - 1]] = Object.assign(ref[parts[parts.length - 1]], value)
                } else {
                    ref[parts[parts.length - 1]] = value
                }
            }
        },
        CompileFormJSONSchemaWithCode (component, schema, codeDom, blocklyBlocks) {
            let evalObj = {}
            try {
                evalObj = GeneratVueJSObject(Blockly, codeDom, blocklyBlocks)
            } catch (e) {
                const err = new Error(e.message)
                err.message = e.message
                err.lineNumber = e.lineNumber
                err.stack = e.stack
                throw err
            }
            const output = {}
            const iterateForVOn = function (root, outter) {
                for (const prop in root) {
                    if (prop === 'v-on') {
                        outter[prop] = {}
                        for (const event in root[prop]) {
                            if (evalObj[root[prop][event]]) {
                                outter[prop][event] = evalObj[root[prop][event]].bind(component)
                            }
                        }
                    } else if (typeof root[prop] === 'object') { // arrays are objects too
                        if (root[prop] === null) {
                            outter[prop] = null
                        } else {
                            if (Array.isArray(root[prop])) { // handle arrays, element by element
                                outter[prop] = []
                            } else {
                                outter[prop] = {}
                            }
                            iterateForVOn(root[prop], outter[prop])
                        }
                    } else {
                        outter[prop] = root[prop]
                    }
                }
            }
            iterateForVOn(schema, output)

            // bind functions in blockly code
            for (const func in evalObj) {
                if (typeof evalObj[func] === 'function') {
                    component[func] = evalObj[func].bind(component)
                }
            }
            if (evalObj.blockly) {
                component.blockly = evalObj.blockly
            }
            return output
        },
        DeCompileEvents (schema) {
            const output = {}
            const iterateForVOn = function (root, outter) {
                for (const prop in root) {
                    if (typeof root[prop] === 'function') {
                        outter[prop] = root[prop].name.substr('bound '.length)
                    } else if (typeof root[prop] === 'object') { // arrays are objects too
                        if (root[prop] === null) {
                            outter[prop] = null
                        } else {
                            if (Array.isArray(root[prop])) { // handle arrays, element by element
                                outter[prop] = []
                            } else {
                                outter[prop] = {}
                            }
                            iterateForVOn(root[prop], outter[prop])
                        }
                    } else {
                        outter[prop] = root[prop]
                    }
                }
            }
            iterateForVOn(schema, output)
            return output;
        }
    }
}

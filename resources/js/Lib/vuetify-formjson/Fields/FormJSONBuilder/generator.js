import Blockly from 'blockly'
import GeneratVueJSObject from '../Blockly/generator'
import {
    EasyNestedObject
} from '../mixins'
import {
    compile
} from 'vue-template-compiler';
import Echo from "laravel-echo";
import io from "socket.io-client";
window.io = io;

const deepCopy = function (obj) {
    if (typeof obj !== "object" || !obj)
        return obj;
    var copy;
    if (Array.isArray(obj)) {
        copy = [];
        for (var key = 0; key < obj.length; key++) {
            copy[key] = deepCopy(obj[key]);
        }
        return copy;
    }
    if (Object.prototype.toString.call(obj) !== "[object Object]")
        return obj;

    copy = {};
    for (var key in obj)
        copy[key] = deepCopy(obj[key]);
    return copy;
}

export default {
    mixins: [EasyNestedObject],
    data: () => ({
        formModel: {},
        formSchema: {},
        channelObjs: {},
        echo: null,
        isConnected: false
    }),
    methods: {
        UpdatePageContent(body, options, sources) {
            const compiled = this.CompileFormJSONSchemaWithCode(this, body.schema, body.code);
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

            if (window.echoConfig) {
                this.echo = new Echo({
                    broadcaster: "socket.io",
                    host: `${window.echoConfig.protocol}://${window.echoConfig.host}:${window.echoConfig.port}`,
                    authEndpoint: "/broadcast/auth",
                    encrypted: true,
                    auth: {
                        headers: this.getWebAuthHeaders({})
                    }
                });

                this.echo.connector.socket.on("connect", () => {
                    this.isConnected = true;
                    this.onFormChannels?.();
                });

                this.echo.connector.socket.on("disconnect", function () {
                    this.isConnected = false;
                    console.log("disconnected");
                });
            }

            const extraEvents = [
                'onFormInit',
                'onFormChannels'
            ]

            extraEvents.forEach((ev) => {
                if (compiled[ev]) {
                    this[ev] = compiled[ev].bind(this)
                }
            })

            this.onFormInit?.();
        },
        arrayMergeWithObjects(target, items, key, mode) {
            target.forEach((i) => {
                items.forEach((j) => {
                    if (i[key] == j[key]) {
                        if (mode === 'merge') {
                            for (const prop in j) {
                                i[prop] = j[prop]
                            }
                        }
                    }
                })
            })
        },
        registerChannelListener(event, channel, callback) {
            if (!this.channelObjs[channel] && this.$store.state.channels) {
                this.$store.state.channels.forEach(c => {
                    if (c.name === channel) {
                        switch (c.access) {
                            case "private":
                                this.channelObjs[c.name] = this.echo.private(c.name);
                                break;
                            case "public":
                                this.channelObjs[c.name] = this.echo.channel(c.name);
                                break;
                            case "presence":
                                this.channelObjs[c.name] = this.echo.join(c.name);
                                break;
                        }
                    }
                });
            }

            if (this.channelObjs[channel]) {
                this.channelObjs[channel].listen(event, callback);
            }

        },
        getRoutePathPartAt(index) {
            let pathname = window.location.pathname
            if (pathname.startsWith('/')) {
                pathname = pathname.substr(1)
            }
            const parts = pathname.split('/')
            return parts[index];
        },
        gotoPage(page, data) {
            this.$emit('goto-page', page, data);
        },
        loadSchema(schema) {
            this.$emit('load-schema', schema)
        },
        authenticateUserWithToken(user, token) {
            this.$emit('update-user', user, token)
        },
        getFormValuePropName() {
            return 'formModel'
        },
        getFormSchemaPropName() {
            return 'formSchema'
        },
        webRequest(data) {
            console.log(data)
            return this.axios(data)
        },
        getWebAuthHeaders(headers) {
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
        clearTemplate(targetPath, templates) {
            const target = deepCopy(this.getNestedPathValue(this[this.getFormSchemaPropName()], targetPath));
            let tl = templates.split(',');
            for (const prop in target) {
                if (!tl.includes(prop)) {
                    target[prop] = undefined;
                }
            }
            this.setNestedPathValue(this[this.getFormSchemaPropName()], targetPath, target);
        },
        makeTemplate(targetPath, template, sourcePath) {
            const target = deepCopy(this.getNestedPathValue(this.formSchema, targetPath));
            const deepIterate = function (targ, src) {
                for (const p in src) {
                    if (typeof src[p] === 'object') {
                        if (!targ[p]) {
                            if (Array.isArray(src[p])) {
                                targ[p] = []
                            } else {
                                targ[p] = {}
                            }
                        }
                        deepIterate(targ[p], src[p])
                    } else {
                        targ[p] = src[p]
                    }
                }
            }
            template.hidden = true;
            const source = this.getStateFromNestedPath(sourcePath);
            if (source && Array.isArray(source)) {
                source.forEach((item) => {
                    const copy = deepCopy(template)
                    copy.hidden = false;
                    deepIterate(copy, item)
                    target[item.id] = copy
                })
                this.setNestedPathValue(this[this.getFormSchemaPropName()], targetPath, target);
            }
        },
        duplicateObjectAndFilter(obj, callback) {
            const dup = Array.isArray(obj) ? [] : {}
            for (const key in obj) {
                if (callback(key, obj[key])) {
                    if (Array.isArray(obj)) {
                        dup.push(obj[key])
                    } else {
                        dup[key] = obj[key]
                    }
                }
            }
            return dup;
        },
        getAlertForResponse(response) {
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
        setFormValidations(errors) {
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
        resetFormValidations() {
            const form = this[this.getFormSchemaPropName()].fields
            const iterateAndRemoveErrors = function (ref) {
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
        getStateFromNestedPath(path) {
            const parts = path.split('.')
            let ref = this
            let indexer = 0
            while (ref && indexer < parts.length) {
                ref = ref[parts[indexer++]]
            }
            return ref
        },
        setStateForNestedPath(path, value) {
            const parts = path.split('.')
            let ref = this
            let indexer = 0
            while (ref && indexer < parts.length - 1) {
                if (!ref[parts[indexer++]]) {
                    ref[parts[indexer++]] = {}
                }
                ref = ref[parts[indexer++]]
            }
            if (ref) {
                ref[parts[parts.length - 1]] = value
            }
        },
        appendStateForNestedPath(path, value) {
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
        CompileFormJSONSchemaWithCode(component, schema, codeDom, blocklyBlocks) {
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
                    if (func === 'onFormInit') {
                        output[func] = evalObj[func].bind(component)
                        component[func] = output[func]
                    } else {
                        component[func] = evalObj[func].bind(component)
                    }
                }
            }
            if (evalObj.blockly) {
                component.blockly = evalObj.blockly
            }
            return output
        },
        DeCompileEvents(schema) {
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

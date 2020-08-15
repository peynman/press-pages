import { isNumber } from "lodash";

export default {
    data () {
        return {
            devalue: this.value
        }
    },
    computed: {
        fieldProps: function () {
            return {
                ...this.field.props,
            }
        },
        eventHandlers: function () {
            return this.field.props && this.field.props['v-on'] ? this.field.props['v-on'] : {}
        },
        rules: function() {
            const rules = [];
            if (this.field.validations) {
                for (const rule in this.field.validations) {
                    switch (rule) {
                    case 'required':
                        if (this.field.validations[rule]) {
                            rules.push((value) => !!value || 'پر کردن این قسمت الزامی است')
                        }
                        break;
                    case 'minLength':
                        if (isNumber(this.field.validations[rule])) {
                            rules.push((value) => value.length >= this.field.validations[rule] || 'حداقل تعداد کاراکتر ها ' + this.field.validations[rule] + ' است ' )
                        }
                        break;
                    case 'maxLength':
                        if (isNumber(this.field.validations[rule])) {
                            rules.push((value) => value.length <= this.field.validations[rule] || 'جداکثر تعداد کاراکتر ها ' + this.field.validations[rule] + ' است ' )
                        }
                        break;
                    case 'numeric':
                        if (this.field.validations[rule]) {
                            rules.push((value) => !isNaN(parseFloat(value)) && isFinite(value) || 'مقدار ورودی باید عدد باشد، لطفا مقدار مورد نظر را با حروف انگلیسی وارد کنید')
                        }
                        break;
                    case 'ascii':
                        if (this.field.validations[rule]) {
                            rules.push((value) => /^[\x00-\x7F]*$/.test(value) || 'لطفا این قسمت را با حروف انگلیسی پر کنید')
                        }
                        break;
                    case 'farsi':
                        if (this.field.validations[rule]) {
                            rules.push((value) => /^[\u0600-\u06FF ]*$/.test(value) || 'لطفا این قسمت را با حروف فارسی پر کنید')
                        }
                        break;
                    }
                }
            }

            return rules;
        }
    },
    watch: {
        value: {
            deep: true,
            handler () {
                this.devalue = this.value
            }
        }
    }
}

export const DecoratableComponent = {
    computed: {
        decorator: function () {
            const props = {}
            if (this.field.decorator && this.field.decorator.labels) {
                const labels = this.field.decorator.labels.split(',');
                for (const l in labels) {
                    props[labels[l]] = labels[l]
                }
            }
            return {
                id: 'id',
                title: 'title',
                label: ':id#:title',
                ...props,
                ...this.field.decorator
            }
        }
    },
    methods: {
        getDecorableLabel: function (item) {
            return this.getDecorableProperty(item, 'label')
        },

        getDecorableProperty: function (item, property) {
            const decorator = this.decorator
            const getNestedPathValue = function (item, path) {
                const parts = path.split('.')
                let val = item
                parts.forEach((p) => {
                    if (val) {
                        val = val[p]
                    }
                })
                return val
            }
            let label = decorator[property]
            for (const prop in decorator) {
                label = label.replace(
                    ':' + prop,
                    getNestedPathValue(item, decorator[prop])
                )
            }
            return label
        }
    }
}

export const EasyNestedObject = {
    methods: {
        setNestedPathValue: function (obj, path, val) {
            const parts = path.split('.')
            parts.forEach((p, indexer) => {
                if (indexer === parts.length - 1) {
                    obj[p] = val
                } else {
                    if (!obj[p]) {
                        obj[p] = {}
                    }
                    obj = obj[p]
                }
            })
        },
        appendNestedPathValue: function (obj, path, val) {
            const parts = path.split('.')
            parts.forEach((p, indexer) => {
                if (indexer === parts.length - 1) {
                    if (obj[p]) {
                        Object.assign(obj[p], val)
                    } else {
                        obj[p] = val
                    }
                } else {
                    if (!obj[p]) {
                        obj[p] = {}
                    }
                    obj = obj[p]
                }
            })
        },
        getNestedPathValue: function (item, path) {
            const parts = path.split('.')
            let val = item
            parts.forEach((p) => {
                if (p.length > 0) {
                    if (val) {
                        val = val[p]
                    }
                }
            })
            return val
        },
        isSetNested: function (obj, path) {
            const parts = path.split('.')
            let isSet = false
            parts.forEach((p, indexer) => {
                if (indexer === parts.length - 1) {
                    if (obj && obj[p]) {
                        isSet = true
                    }
                } else {
                    obj = obj[p]
                }
            })
            return isSet
        },
        flattenObject: function (obj, depth = -1) {
            const out = {}
            const iterate = (nested, path, level) => {
                for (const prop in nested) {
                    if (nested[prop] instanceof Object && (level <= 0 || level < depth)) {
                        iterate(nested[prop], path + '.' + prop, level + 1)
                    } else {
                        out[path + '.' + prop] = nested[prop]
                    }
                }
            }
            iterate(obj, '', 0)

            return out
        }
    }
}

export const JSONWorkspace = {
    methods: {
        startJSONDownload: function (data) {
            return () => {
                const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(data)
                const downloadAnchorNode = document.createElement('a')
                downloadAnchorNode.setAttribute('href', dataStr)
                downloadAnchorNode.setAttribute('download', 'schema.json')
                document.body.appendChild(downloadAnchorNode) // required for firefox
                downloadAnchorNode.click()
                downloadAnchorNode.remove()
            }
        },
        startJSONUpload: function (onUploaded) {
            return () => {
                const downloadAnchorNode = document.createElement('input')
                downloadAnchorNode.setAttribute('type', 'file')
                document.body.appendChild(downloadAnchorNode) // required for firefox
                downloadAnchorNode.click()
                downloadAnchorNode.addEventListener('change', function (event) {
                    const fileToRead = event.target
                    const files = fileToRead.files
                    if (files.length) {
                        const file = files[0]
                        const reader = new FileReader()
                        reader.onload = e => {
                            try {
                                const json = JSON.parse(e.target.result)
                                onUploaded(json)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                        reader.readAsText(file)
                    }
                },
                false
                )
                downloadAnchorNode.remove()
            }
        }
    }
}

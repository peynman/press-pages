export default {
    methods: {
        onUploaded(data) {
            const tree = this.getFormSchemaFromFormJSON({
                [data.schema.id]: data.schema
            })
            this.schema = {
                builder: tree
            }
            this.codeModel = data.code
            this[this.getFormValuePropName()] = data.values
            if (data.template && data.template.name) {
                this.template = data.template.name
                this.schema.builder[0].value.__template = data.template.props
            }
        },
        onDownload() {
            const formjson = this.getFormJSONFromSchema(this.schema.builder);
            const rootFieldsRenderer = formjson[this.schema.builder[0].model.id]
            const inputValue = {
                schema: {
                    ...rootFieldsRenderer
                },
                code: this.codeModel,
                values: this[this.getFormValuePropName()],
                template: {
                    name: this.template,
                    props: this.schema.builder[0].value ? this.schema.builder[0].value.__template : {}
                }
            }
            this.startJSONDownload(JSON.stringify(inputValue, null, 2))()
        },
        onReset() {
            this.$refs.confirm
                .open(
                    'Reset',
                    'Are you sure you want to reset the Schema and Actions?', {
                        color: 'red'
                    }
                )
                .then(confirm => {
                    if (confirm) {
                        this[this.getFormValuePropName()] = {}
                        const tree = this.field.tree ?
                            this.field.tree : {
                                id: 'formjson',
                                type: 'vf-fields-renderer',
                                children: []
                            }
                        this.schema = {
                            builder: [this.treeModel.parse(JSON.parse(JSON.stringify(tree)))]
                        }
                        this.codeModel = ''
                        this.tempate = null
                    }
                })
        },

        onResetValues() {
            this.$refs.confirm
                .open(
                    'Reset',
                    'Are you sure you want to reset Form Values?', {
                        color: 'red'
                    }
                )
                .then(confirm => {
                    if (confirm) {
                        const iterate = function (node, valueRef) {
                            if (node.children.length > 0) {
                                node.children.forEach((child) => {
                                    if (valueRef[child.model.id]) {
                                        if (child.model.type !== "vf-paragraph-input" &&
                                            typeof valueRef[child.model.id] !== "object" ||
                                            Array.isArray(valueRef[child.model.id])) {
                                            valueRef[child.model.id] = undefined
                                        } else if (child.children) {
                                            iterate(child, valueRef[child.model.id]);
                                        }
                                    }
                                })
                            }
                        }
                        // iterate on form value, reset all values for types except for paragraph
                        iterate(this.schema.builder[0], this[this.getFormValuePropName()])
                        this.updateFormJSONInput();
                    }
                })
        },

        onCopyToClipBoard(text) {
            function fallbackCopyTextToClipboard(text) {
                var textArea = document.createElement("textarea");
                textArea.value = text;

                // Avoid scrolling to bottom
                textArea.style.top = "0";
                textArea.style.left = "0";
                textArea.style.position = "fixed";

                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    var successful = document.execCommand('copy');
                    var msg = successful ? 'successful' : 'unsuccessful';
                    console.log('Fallback: Copying text command was ' + msg);
                } catch (err) {
                    console.error('Fallback: Oops, unable to copy', err);
                }

                document.body.removeChild(textArea);
            }

            if (!navigator.clipboard) {
                fallbackCopyTextToClipboard(text);
                return;
            }
            navigator.clipboard.writeText(text).then(function () {
                console.log('Async: Copying to clipboard was successful!');
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            });
        },

        onPasteFromClipboard(resolve) {
            navigator.clipboard.readText().then(resolve);
        }
    }
}

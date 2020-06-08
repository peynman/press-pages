export default {
    methods: {
        onUploaded (data) {
            const tree = this.getFormSchemaFromFormJSON({ [data.schema.id]: data.schema })
            this.schema = { builder: tree }
            this.codeModel = data.code
            this[this.getFormValuePropName()] = data.values
            this.template = data.template
        },
        onDownload () {
            const formjson = this.getFormJSONFromSchema(this.schema.builder);
            const rootFieldsRenderer = formjson[this.schema.builder[0].model.id]
            const inputValue = {
                schema: { ...rootFieldsRenderer },
                code: this.codeModel,
                values: this[this.getFormValuePropName()],
                template: {
                    name: this.template,
                    props: this.schema.builder[0].value ? this.schema.builder[0].value.__template: {}
                }
            }
            this.startJSONDownload(JSON.stringify(inputValue, null, 2))()
        },
        onReset () {
            this.$refs.confirm
                .open(
                    'Reset',
                    'Are you sure you want to reset the Schema and Actions?',
                    {
                        color: 'red'
                    }
                )
                .then(confirm => {
                    if (confirm) {
                        this[this.getFormValuePropName()] = {}
                        const tree = this.field.tree
                            ? this.field.tree
                            : {
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

        onResetValues () {
            this.$refs.confirm
                .open(
                    'Reset',
                    'Are you sure you want to reset Form Values?',
                    {
                        color: 'red'
                    }
                )
                .then(confirm => {
                    if (confirm) {
                        this[this.getFormValuePropName()] = {}
                        this.updateFormJSONInput();
                    }
                })
        }
    }
}

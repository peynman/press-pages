import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    CheckboxSettings,
    TextSettings
} from './comon'

import api from './../api'

export default class DatatableInputSettings extends BaseInputSettings {

    constructor (inputs) {
        super()
        this.inputs = inputs;
    }

    getInputSlots () {
        return [
            {
                id: 'columns',
                title: 'Column',
                inputs: this.inputs.filter((t) => t.id === 'column')
            },
            {
                id: 'crud',
                title: 'CRUD Create/Edit/Filter',
            },
            {
                id: 'forms',
                title: 'Datatable Form'
            }
        ]
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: api.VDataTable.events
            }
        ]
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
            table: {
                options: {
                    type: 'row',
                    formClass: 'col-12 ma-0 pa-0',
                },
                fields: {
                    query: {
                        options: {
                            type: 'row',
                            formClass: 'col-12 ma-0 pa-0'
                        },
                        fields: {
                            url: TextSettings('Remote API query URL'),
                            relations: {
                                type: 'input',
                                input: 'datatable',
                                label: 'Remote API query relations',
                                columns: {
                                    name: {
                                        id: 'name',
                                        label: 'Relation Name'
                                    },
                                    columns: {
                                        id: 'columns',
                                        label: 'Relation Columns'
                                    },
                                },
                                props: {
                                    'hide-footer': true,
                                    'dense': true,
                                    'show-select': true,
                                },
                                crud: {
                                    create: {
                                        fields: {
                                            name: {
                                                type: 'input',
                                                input: 'text',
                                                label: 'Relation Name'
                                            },
                                            columns: {
                                                type: 'input',
                                                input: 'text',
                                                label: 'Relation Columns',
                                                props: {
                                                    hint: 'Column names without space and with , as separator character'
                                                }
                                            },
                                        }
                                    }
                                }
                            },
                            appends: {
                                type: 'input',
                                input: 'datatable',
                                label: 'Remote API query attributes to append',
                                columns: {
                                    attribute: {
                                        id: 'attribute',
                                        label: 'Attribute Name'
                                    },
                                },
                                props: {
                                    'hide-footer': true,
                                    'dense': true,
                                    'show-select': true,
                                },
                                crud: {
                                    create: {
                                        fields: {
                                            attribute: {
                                                type: 'input',
                                                input: 'text',
                                                label: 'Attribute Name'
                                            },
                                        }
                                    }
                                }
                            },
                        }
                    },
                    'create-url': TextSettings('Remote Create Form URL'),
                    'reports-url': TextSettings('Remote url for Reports'),
                    'export-url': TextSettings('Remote url for downloading Exported file'),
                }
            },
            'hide-create': CheckboxSettings('Can not Create'),
            'hide-remove': CheckboxSettings('Can not Remove'),
            'hide-filters': CheckboxSettings('Can not Filter'),
            'hide-search': CheckboxSettings('Can not Search'),
            'hide-settings': CheckboxSettings('Can not change settings'),
            'hide-forms': CheckboxSettings('Can not fill forms'),
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    ...api.VDataTable.fields,
                    messages: MessagesTab
                }
            },
        }
    }
}

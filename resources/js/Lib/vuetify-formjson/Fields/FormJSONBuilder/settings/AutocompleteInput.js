import {
    CommonInputEssentials,
    BaseInputSettings,
    TextSettings,
    createEventsDatatableInputForSettingsForm
} from './comon'

import api from './../api'

export default class AutocompleteInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: api.VAutocomplete.events
            }
        ]
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
            objects: {
                type: 'input',
                input: 'datatable',
                label: 'Items',
                class: 'col-12 ma-0 pa-0',
                props: {
                    'disable-pagination': true,
                    dense: true
                },
                columns: [
                    {
                        column: 'id',
                        title: 'ID'
                    },
                    {
                        column: 'title',
                        title: 'Title'
                    }
                ],
                crud: {
                    create: {
                        fields: {
                            id: {
                                type: 'input',
                                input: 'text',
                                class: 'col-6 pe-0 ps-0',
                                label: 'ID'
                            },
                            title: {
                                type: 'input',
                                input: 'text',
                                class: 'col-6 pe-0 ps-0',
                                label: 'Title'
                            },
                            props: {
                                options: {
                                    type: 'row'
                                },
                                fields: {
                                    'v-on': createEventsDatatableInputForSettingsForm('Item events', api.VCheckbox.events)
                                }
                            }
                        }
                    },
                }
            },
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
                }
            },
            decorator: {
                options: {
                    formClass: 'ma-0 pa-0',
                },
                fields: {
                    label: {
                        type: 'input',
                        input: 'text',
                        label: 'Decorator Label',
                        class: 'col-12',
                    },
                    labels: {
                        type: 'input',
                        input: 'text',
                        label: 'Decorator Property Names',
                        class: 'col-12',
                        props: {
                            hint: 'comma separated property names'
                        }
                    },
                }
            },
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    ...api.VAutocomplete.fields,
                }
            }
        }
    }
}

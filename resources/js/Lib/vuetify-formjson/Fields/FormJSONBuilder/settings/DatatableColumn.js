import {
    CommonInputEssentials,
    BaseInputSettings,
    TextSettings,
    CheckboxSettings
} from './comon'

export default class DatatableColumnSettings extends BaseInputSettings {

    getInputSlots (item) {
        if (this.dic && this.dic[item.model.id]) {
            if (this.dic[item.model.id].tabs.fieldProperties.type === 'actions') {
                return [
                    {
                        id: 'actions',
                        title: 'Actions'
                    }
                ]
            }
        }
        return []
    }

    getInputEventGroupsList (item) {
        if (this.dic && this.dic[item.model.id]) {
            if (this.dic[item.model.id].tabs.fieldProperties.type === 'actions') {
                return [
                    {
                        id: 'props',
                        title: 'Column Events',
                        events: [
                            {
                                id: 'before-render',
                                title: 'Before Column is rendererd',
                            }
                        ]
                    }
                ]
            }
        }

        return []
    }

    onSettingsUpdated (vals, item) {
        if (!this.dic) {
            this.dic = {}
        }
        if (item) {
            this.dic[item.model.id] = vals
        }
    }

    getInputProperties (item) {
        const extras = {}
        if (this.dic && this.dic[item.model.id]) {
            const values = this.dic[item.model.id]
            const type = values.tabs && values.tabs.fieldProperties ? values.tabs.fieldProperties.type : null;
            if (type === 'custom') {
                extras.component = {
                    type: 'input',
                    input: 'text',
                    label: 'Component',
                    class: 'col-12 ma-0 pa-0',
                }
                extras.slot = {
                    type: 'input',
                    input: 'text',
                    label: 'Slot',
                    class: 'col-12 ma-0 pa-0',
                }
            } else if (type === 'nested-object') {
                extras['nested-path'] = {
                    type: 'input',
                    input: 'text',
                    label: 'Nested Path',
                    class: 'col-12 ma-0 pa-0',
                }
            } else if (type === 'hover-list') {
                extras['decorator'] = {
                    options: {
                        formClass: 'ma-0 pa-0'
                    },
                    fields: {
                        label: {
                            type: 'input',
                            input: 'text',
                            label: 'Decorator Label',
                        },
                        labels: {
                            type: 'input',
                            input: 'text',
                            label: 'Decorator Property Names',
                            props: {
                                hint: 'comma separated property names'
                            }
                        },
                    }
                }
            } else if (type === 'objects-map') {
                extras['decorator'] = {
                    options: {
                        formClass: 'ma-0 pa-0'
                    },
                    fields: {
                        label: {
                            type: 'input',
                            input: 'text',
                            label: 'Decorator Label',
                        },
                        labels: {
                            type: 'input',
                            input: 'text',
                            label: 'Decorator Property Names',
                            props: {
                                hint: 'comma separated property names'
                            }
                        },
                    }
                }
                extras['nested-path-key'] = {
                    type: 'input',
                    input: 'text',
                    label: 'Nested Path',
                    class: 'col-12 ma-0 pa-0',
                }
                extras['map'] = {
                    type: 'input',
                    input: 'datatable',
                    label: 'Objects',
                    columns: [
                        {
                            id: 'id',
                            label: 'ID'
                        },
                        {
                            id: 'title',
                            label: 'Title'
                        },
                        {
                            id: 'color',
                            label: 'Color'
                        }
                    ],
                    'hide-search': false,
                    props: {
                        'show-select': true,
                    },
                    crud: {
                        create: {
                            fields: {
                                id: TextSettings('ID'),
                                title: TextSettings('Title'),
                                color: {
                                    type:'input',
                                    input: 'color',
                                    label: 'Color',
                                }
                            },
                            options: {
                                type: 'col',
                            }
                        }
                    }
                }
            } else if (type === 'amount') {
                extras['currency'] = TextSettings('Currency')
                extras['show_type'] = CheckboxSettings('Show type')
                extras['positive'] = TextSettings('Positive value')
                extras['negative'] = TextSettings('Negative value')
            }
        }

        return {
            ...CommonInputEssentials,
            sortable: {
                type: 'input',
                input: 'checkbox',
                label: 'Sortable',
                class: 'col-12 ma-0 pa-0',
            },
            sort_name: {
                type: 'input',
                input: 'text',
                label: 'Sort key name',
                class: 'col-12 ma-0 pa-0',
            },
            align: {
                type: 'input',
                input: 'select',
                label: 'Align',
                class: 'col-6',
                objects: [
                    {
                        id: 'start',
                        title: 'Start'
                    },
                    {
                        id: 'end',
                        title: 'End'
                    },
                    {
                        id: 'center',
                        title: 'Center'
                    }
                ],
            },
            width: {
                type: 'input',
                input: 'text',
                label: 'Width',
                class: 'col-6',
            },
            type: {
                type: 'input',
                input: 'select',
                label: 'Column content type',
                class: 'col-12',
                objects: [
                    {
                        id: 'simple',
                        title: 'Simple'
                    },
                    {
                        id: 'nested-object',
                        title: 'Nested Object'
                    },
                    {
                        id: 'datetime',
                        title: 'DateTime'
                    },
                    {
                        id: 'hover-list',
                        title: 'Hover List'
                    },
                    {
                        id: 'expan-list',
                        title: 'Expandable List'
                    },
                    {
                        id: 'actions',
                        title: 'Actions'
                    },
                    {
                        id: 'amount',
                        title: 'Currency/Amount',
                    },
                    {
                        id: 'objects-map',
                        title: 'Objects Map',
                    },
                    {
                        id: 'custom',
                        title: 'Custom Component'
                    }
                ]
            },
            ...extras
        }
    }
}

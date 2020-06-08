import {
    CommonInputEssentials,
    BaseInputSettings
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
            if (values.type === 'custom') {
                extras.component = {
                    type: 'input',
                    input: 'text',
                    label: 'Component',
                }
                extras.slot = {
                    type: 'input',
                    input: 'text',
                    label: 'Slot'
                }
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
                        id: 'custom',
                        title: 'Custom Component'
                    }
                ]
            },
            ...extras
        }
    }
}

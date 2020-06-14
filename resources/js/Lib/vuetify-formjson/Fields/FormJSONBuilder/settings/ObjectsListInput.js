import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    createEventsDatatableInputForSettingsForm
} from './comon'

import api from './../api'

export default class ObjectsListInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: [
                    {
                        id: 'input',
                        title: 'Triggered when value inside the form is changed'
                    }
                ]
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
                create: {
                    title: 'Add item to select list',
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
                edit: {},
                remove: {}
            },
            decorator: {
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
            },
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    messages: MessagesTab
                }
            }
        }
    }
}

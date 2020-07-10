import {
    CommonInputEssentials,
    BaseInputSettings,
    MessagesTab,
    createEventsDatatableInputForSettingsForm,
    TextSettings
} from './comon'

import api from './../api'

export default class BitwiseFlagsInputSettings extends BaseInputSettings {
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
                        title: 'Triggered when value is changed'
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
                        id: 'id',
                        label: 'ID'
                    },
                    {
                        id: 'title',
                        label: 'Title'
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
                            }
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

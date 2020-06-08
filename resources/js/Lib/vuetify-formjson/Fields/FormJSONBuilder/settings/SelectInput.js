import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings
} from './comon'

import api from './../api'

export default class SwitchInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: api.VSelect.events
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
                    }
                },
                'hide-search': true,
            },
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    ...api.VSelect.fields,
                    messages: MessagesTab
                }
            }
        }
    }
}

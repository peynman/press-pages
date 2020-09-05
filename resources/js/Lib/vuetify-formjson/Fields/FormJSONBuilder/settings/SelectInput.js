import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    CheckboxSettings,
    TextSettings
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
                    dense: true,
                    'show-select': true,
                },
                'hide-search': true,
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
            },
            multiple: CheckboxSettings('Multiple'),
            already_selected: TextSettings('Already Selected'),
            decorator: {
                options: {
                    formClass: 'ma-0 pa-0'
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
                    ...api.VSelect.fields,
                    messages: MessagesTab
                }
            }
        }
    }
}

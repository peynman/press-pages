import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    TextSettings,
    CheckboxSettings
} from '../../vuetify-formjson/Fields/FormJSONBuilder/settings/comon'


export default class LoginCardSettings extends BaseInputSettings {
    getInputSlots() {
        return [
            {
                id: 'content',
                title: 'Content',
            },
        ]
    }

    getInputEventGroupsList() {
        return []
    }

    getInputProperties() {
        return {
            ...CommonInputEssentials,
            image: TextSettings('Card Image url'),
            maxWidth: TextSettings('Card Image Max Width'),
            maxHeight: TextSettings('Card Image Max Height'),
            xs: TextSettings('X-Small cols'),
            sm: TextSettings('Small cols'),
            md: TextSettings('Medium cols'),
            lg: TextSettings('Large cols'),
            options: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    formClass: TextSettings('Form Class'),
                    type: {
                        type: 'input',
                        input: 'select',
                        label: 'Type',
                        objects: [
                            {
                                id: 'row',
                                title: 'Row'
                            },
                            {
                                id: 'col',
                                title: 'Column'
                            },
                            {
                                id: 'component',
                                title: 'Custom Component'
                            }
                        ],
                        decorator: {
                            id: 'id',
                            title: 'title',
                            label: ':title'
                        }
                    },
                    component: TextSettings('Component'),
                    wrap: {
                        options: {
                            type: 'col',
                            formClass: 'ma-0 pa-0'
                        },
                        fields: {
                            enabled: CheckboxSettings('User Wrapper'),
                            class: TextSettings('Wrapper Class'),
                            props: TextSettings('Wrapper props in JSON String'),
                            component: TextSettings('Wrapper Component'),
                            inside: {
                                options: {
                                    type: 'col',
                                    formClass: 'ma-0 pa-0'
                                },
                                fields: {
                                    class: TextSettings('Wrapper inside Class'),
                                    component: TextSettings('Wrapper inside Component'),
                                    props: TextSettings('Wrapper inside props in JSON String'),
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

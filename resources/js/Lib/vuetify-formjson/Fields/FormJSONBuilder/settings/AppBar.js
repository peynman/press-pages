import {
    CommonInputEssentials,
    BaseInputSettings,
    TextSettings
} from './comon'

export default class AppBarTemplateSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return []
    }

    getInputProperties () {
        return {
            labels: {
                options: {
                    type: 'col',
                    formClass: 'pa-0'
                },
                fields: {
                    signin: TextSettings('Sign in string'),
                    singup: TextSettings('Sign up string'),
                },
            },
            guest_links: {
                type: 'input',
                input: 'datatable',
                label: 'Guest user AppBar links',
                columns: [
                    {
                        id: 'title',
                        label: 'Title'
                    },
                    {
                        id: 'url',
                        label: 'URL'
                    }
                ],
                props: {
                    'show-select': true,
                },
                crud: {
                    create: {
                        fields: {
                            title: TextSettings('Title'),
                            url: TextSettings('Url')
                        }
                    }
                }
            },
            user_links: {
                type: 'input',
                input: 'datatable',
                label: 'Signed user AppBar links',
                columns: [
                    {
                        id: 'title',
                        label: 'Title'
                    },
                    {
                        id: 'url',
                        label: 'URL'
                    }
                ],
                props: {
                    'show-select': true,
                },
                crud: {
                    create: {
                        fields: {
                            title: TextSettings('Title'),
                            url: TextSettings('Url')
                        }
                    }
                }
            },
        }
    }
}

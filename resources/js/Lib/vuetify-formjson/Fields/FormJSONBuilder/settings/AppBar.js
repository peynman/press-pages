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
                    tel: TextSettings('Phone number'),

                },
            },
            links: {
                options: {
                    type: 'col',
                    formClass: 'pa-0'
                },
                fields: {

                },
            },
        }
    }
}

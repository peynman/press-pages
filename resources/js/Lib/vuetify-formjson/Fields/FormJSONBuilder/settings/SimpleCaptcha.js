import {
    CommonInputEssentials,
    BaseInputSettings,
    TextSettings
} from './comon'

import api from './../api'

export default class SimpleCaptchaSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return []
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    ...api.VTextField.fields,
                }
            }
        }
    }
}

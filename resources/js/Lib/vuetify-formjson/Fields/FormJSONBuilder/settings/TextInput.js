import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    TextSettings,
    CheckboxSettings
} from './comon'

import api from './../api'

export default class TextInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: api.VTextField.events
            }
        ]
    }

    getInputValidations() {
        return {
            required: CheckboxSettings('Required'),
            numeric: CheckboxSettings('is Numeric'),
            minLength: TextSettings('Min characters length'),
            maxLength: TextSettings('Max characters length'),
            mask: TextSettings('Input mask'),
            removeMask: CheckboxSettings('Remove mask on dispatch'),
            farsi: CheckboxSettings('Farsi/Arabic characters only'),
            ascii: CheckboxSettings('ASCII characters only'),
        }
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
                    messages: MessagesTab
                }
            }
        }
    }
}

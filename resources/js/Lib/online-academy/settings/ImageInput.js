import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    TextSettings,
    CheckboxSettings
} from '../../vuetify-formjson/Fields/FormJSONBuilder/settings/comon'

import api from '../../vuetify-formjson/Fields/FormJSONBuilder/api/index'

export default class ImageInputSettings extends BaseInputSettings {
    getInputSlots() {
        return []
    }

    getInputEventGroupsList() {
        return []
    }

    getInputProperties() {
        return {
            ...CommonInputEssentials,
            src: TextSettings('Image src'),
            width: TextSettings('Image width'),
            height: TextSettings('Image height'),
            maxWidth: TextSettings('Max Image width'),
            maxHeight: TextSettings('Max Image height'),
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    ...api.VImg.fields
                }
            }
        }
    }
}

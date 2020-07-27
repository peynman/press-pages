import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    TextSettings,
    CheckboxSettings
} from '../../vuetify-formjson/Fields/FormJSONBuilder/settings/comon'


export default class CurrentCartSettings extends BaseInputSettings {
    getInputSlots() {
        return []
    }

    getInputEventGroupsList() {
        return []
    }

    getInputProperties() {
        return {
            ...CommonInputEssentials,
            gateways: TextSettings('Gateways'),
            hideTakhfif: CheckboxSettings('Hide Takhfif'),
            singleCartMode: CheckboxSettings('Single Cart Mode'),
        }
    }
}

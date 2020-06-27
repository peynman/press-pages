import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    TextSettings
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
        }
    }
}

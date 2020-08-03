import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    TextSettings
} from '../../vuetify-formjson/Fields/FormJSONBuilder/settings/comon'


export default class RevSliderSettings extends BaseInputSettings {
    getInputSlots() {
        return []
    }

    getInputEventGroupsList() {
        return []
    }

    getInputProperties() {
        return {
            ...CommonInputEssentials,
            url: TextSettings('Slider url'),
            width: TextSettings('Slider Width'),
            height: TextSettings('Slider height'),
        }
    }
}

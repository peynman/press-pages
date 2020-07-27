import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    TextSettings,
    CheckboxSettings
} from '../../vuetify-formjson/Fields/FormJSONBuilder/settings/comon'


export default class ProductVideoLinkSettings extends BaseInputSettings {
    getInputSlots() {
        return []
    }

    getInputEventGroupsList() {
        return []
    }

    getInputProperties() {
        return {
            ...CommonInputEssentials,
            url: TextSettings('Video url'),
            width: TextSettings('Player window width'),
            height: TextSettings('Player window height'),
            modePlain: CheckboxSettings('Video Player mode plain'),
        }
    }
}

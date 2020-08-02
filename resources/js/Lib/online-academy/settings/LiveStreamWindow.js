import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    TextSettings,
    CheckboxSettings
} from '../../vuetify-formjson/Fields/FormJSONBuilder/settings/comon'


export default class LiveStreamWindowSettings extends BaseInputSettings {
    getInputSlots() {
        return []
    }

    getInputEventGroupsList() {
        return []
    }

    getInputProperties() {
        return {
            ...CommonInputEssentials,
            key: TextSettings('Stream key'),
            is_remote: CheckboxSettings('is remote'),
            chat_frame: TextSettings('Chat iFrame url'),
            chat_height: TextSettings('Chat window height'),
        }
    }
}

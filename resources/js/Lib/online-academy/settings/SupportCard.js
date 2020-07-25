import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    TextSettings
} from '../../vuetify-formjson/Fields/FormJSONBuilder/settings/comon'


export default class SupportCardSettings extends BaseInputSettings {
    getInputSlots() {
        return []
    }

    getInputEventGroupsList() {
        return []
    }

    getInputProperties() {
        return {
            ...CommonInputEssentials,
            message: TextSettings('Support message'),
            img: TextSettings('Support Image'),
            xs: TextSettings('X-Small cols'),
            sm: TextSettings('Small cols'),
            md: TextSettings('Medium cols'),
            lg: TextSettings('Large cols'),
            hrefWhatsapp: TextSettings('WhatsApp href'),
            hrefTelegram: TextSettings('Telegram href'),
            hrefInstagram: TextSettings('Instagram href')
        }
    }
}

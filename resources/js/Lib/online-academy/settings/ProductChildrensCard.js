import {
    CommonInputEssentials,
    BaseInputSettings,
    TextSettings
} from '../../vuetify-formjson/Fields/FormJSONBuilder/settings/comon'


export default class ProductChildrensCardSettings extends BaseInputSettings {
    getInputSlots() {
        return []
    }

    getInputEventGroupsList() {
        return []
    }

    getInputProperties() {
        return {
            ...CommonInputEssentials,
            xs: TextSettings('X-Small cols'),
            sm: TextSettings('Small cols'),
            md: TextSettings('Medium cols'),
            lg: TextSettings('Large cols'),

        }
    }
}

import {
    CommonInputEssentials,
    BaseInputSettings,
    TextSettings,
    CheckboxSettings
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
            emptyMessage: TextSettings('Empty message'),
            sortStartTime: CheckboxSettings('Sort on session start time'),
            xs: TextSettings('X-Small cols'),
            sm: TextSettings('Small cols'),
            md: TextSettings('Medium cols'),
            lg: TextSettings('Large cols'),
        }
    }
}

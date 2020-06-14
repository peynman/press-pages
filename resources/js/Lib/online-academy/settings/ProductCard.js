import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings
} from '../../vuetify-formjson/Fields/FormJSONBuilder/settings/comon'


export default class ProductCardSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return []
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
        }
    }
}

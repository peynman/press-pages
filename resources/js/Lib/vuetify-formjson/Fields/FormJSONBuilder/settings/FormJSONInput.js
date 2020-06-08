import {
    CommonInputEssentials,
    BaseInputSettings,
    NumberSettings
} from './comon'

export default class FormJSONSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return []
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
            height: NumberSettings('Fixed Height')
        }
    }
}

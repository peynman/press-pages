import {
    CommonInputEssentials,
    BaseInputSettings,
    TextSettings
} from './comon'

export default class AppBarTemplateSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return []
    }

    getInputProperties () {
        return {
            align: TextSettings('Align content'),
            justify: TextSettings('Justify content'),
        }
    }
}

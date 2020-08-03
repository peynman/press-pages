import {
    CommonInputEssentials,
    BaseInputSettings,
    TextSettings,
    CheckboxSettings
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
            contClass: TextSettings('Container Class'),
            fluid: CheckboxSettings('Container fluid'),
            rowClass: TextSettings('Row Class'),
            colClass: TextSettings('Col Class'),
            rowAlign: TextSettings('Row Align'),
            rowJustify: TextSettings('Row Justify'),
        }
    }
}

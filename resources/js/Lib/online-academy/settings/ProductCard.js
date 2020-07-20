import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    TextSettings,
    CheckboxSettings
} from '../../vuetify-formjson/Fields/FormJSONBuilder/settings/comon'


export default class ProductCardSettings extends BaseInputSettings {
    getInputSlots() {
        return []
    }

    getInputEventGroupsList() {
        return []
    }

    getInputProperties() {
        return {
            ...CommonInputEssentials,
            data: {
                options: {
                    type: 'col',
                    formClass: 'ma-0 pa-0',
                },
                fields: {
                    title: TextSettings('Title'),
                }
            },
            compactMode: CheckboxSettings('Compact Mode'),
            noHover: CheckboxSettings('no Hover Details'),
            xs: TextSettings('X-Small cols'),
            sm: TextSettings('Small cols'),
            md: TextSettings('Medium cols'),
            lg: TextSettings('Large cols'),
        }
    }
}

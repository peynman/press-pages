import {
    CommonInputEssentials,
    BaseInputSettings,
    TextSettings
} from './comon'

export default class CenteredTemplateSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return []
    }

    getInputProperties () {
        return {
            'x-lg': {
                type: 'input',
                input: 'text',
                label: 'X Large width',
            },
            lg: {
                type: 'input',
                input: 'text',
                label: 'Large width',
            },
            md: {
                type: 'input',
                input: 'text',
                label: 'Medium width',
            },
            sm: {
                type: 'input',
                input: 'text',
                label: 'Small width',
            },
            'x-sm': {
                type: 'input',
                input: 'text',
                label: 'X Small width',
            },
        }
    }
}

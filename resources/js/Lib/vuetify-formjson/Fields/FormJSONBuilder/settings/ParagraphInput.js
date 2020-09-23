import {
    CommonInputEssentials,
    BaseInputSettings,
    CheckboxSettings,
    TextSettings
} from './comon'

export default class AutocompleteInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: [
                    {
                        id: 'input',
                        title: 'Triggerred when Input value is changed'
                    }
                ]
            }
        ]
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
            readonly: CheckboxSettings('Readonly', 'removes editor buttons from paragraph input and display in view mode'),
            mode: TextSettings('Highlighting mode'),
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {

                }
            }
        }
    }
}

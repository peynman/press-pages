import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings
} from './comon'

import api from './../api'

export default class ColorInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: api.VCheckbox.events
            }
        ]
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    ...api.VCheckbox.fields,
                    messages: MessagesTab
                }
            }
        }
    }
}

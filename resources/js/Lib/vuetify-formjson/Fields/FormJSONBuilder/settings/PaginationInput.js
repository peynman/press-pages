import {
    BaseInputSettings,
    TextSettings
} from './comon'

import api from './../api'

export default class TextInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: api.VPagination.events
            }
        ]
    }

    getInputProperties () {
        return {
            id: {
                type: 'input',
                input: 'text',
                label: 'ID',
                class: 'col-12 ma-0 ps-0 pe-0',
                updateKeyCodes: [13]
            },
            class: {
                type: 'input',
                input: 'text',
                label: 'Class',
                class: 'col-12 ma-0 ps-0 pe-0'
            },
            hidden: {
                type: 'input',
                input: 'checkbox',
                label: 'Hidden',
                class: 'col-12 ma-0 ps-0 pe-0'
            },
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    ...api.VPagination.fields,
                    'total-visible': TextSettings('Total Visible'),
                }
            }
        }
    }
}

import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    CheckboxSettings,
    TextSettings
} from './comon'

import api from './../api'

export default class FileUploadInputSettings extends BaseInputSettings {
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
                        id: 'finished',
                        title: 'on upload finished'
                    },
                    {
                        id: 'error',
                        title: 'on upload error'
                    }
                ]
            }
        ]
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
            singleFile: CheckboxSettings('Single file'),
            max_file_size: TextSettings('Max file size (1m, 2g, for ex.)'),
            filters: {
                type: 'input',
                input: 'datatable',
                label: 'Availabel extensions',
                columns: [
                    {
                        id: 'extensions',
                        title: 'Extensions'
                    },
                    {
                        id: 'title',
                        title: 'Title'
                    },
                ],
                crud: {
                    create: {
                        fields: {
                            mime_types: TextSettings('Extensions (jpeg,jpg,...)'),
                            title: TextSettings('Title'),
                        }
                    }
                },
                props: {
                    'show-select': true,
                    'hide-footer': true,
                }
            }
        }
    }
}

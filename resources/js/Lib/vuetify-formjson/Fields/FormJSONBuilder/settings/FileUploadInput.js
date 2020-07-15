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
            chunk_size: TextSettings('Chunk Size (200kb,...)'),
            max_retries: TextSettings('Max retries'),
            prevent_duplicates: CheckboxSettings('Prevent duplicates'),
            filters: {
                type: 'input',
                input: 'datatable',
                label: 'Availabel extensions',
                columns: [
                    {
                        id: 'title',
                        label: 'Title'
                    },
                    {
                        id: 'extensions',
                        label: 'Extensions'
                    },
                ],
                crud: {
                    create: {
                        fields: {
                            extensions: TextSettings('Extensions (jpeg,jpg,...)'),
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

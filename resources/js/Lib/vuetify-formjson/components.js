export const customComponents = {
    'vuetify-formjson': () => import(/* webpackChunkName: "formjson"*/ './VuetifyFormJSON.vue'),
    'vf-fields-renderer': () => import(/* webpackChunkName: "fields-renderer"*/ './Fields/FieldsRenderer.vue'),
    'vf-json-input': () => import(/* webpackChunkName: "json-input"*/ './Fields/JSONInput.vue'),
    'vf-radio-group-input': () => import(/* webpackChunkName: "common"*/ './Fields/RadioGroupInput.vue'),
    'vf-bitwise-flags-input': () => import(/* webpackChunkName: "bitwise-flags"*/ './Fields/BitwiseFlagsInput.vue'),
    'vf-text-input': () => import(/* webpackChunkName: "common"*/ './Fields/TextInput.vue'),
    'vf-multitext-input': () => import(/* webpackChunkName: "multitext"*/ './Fields/MultiTextInput.vue'),
    'vf-autocomplete-input': () => import(/* webpackChunkName: "autocomplete"*/ './Fields/AutocompleteInput.vue'),
    'vf-color-input': () => import(/* webpackChunkName: "color"*/ './Fields/ColorInput.vue'),
    'vf-switch-input': () => import(/* webpackChunkName: "switch"*/ './Fields/SwitchInput.vue'),
    'vf-button-group-input': () => import(/* webpackChunkName: "btn-gtroup"*/ './Fields/ButtonGroupInput.vue'),
    'vf-select-input': () => import(/* webpackChunkName: "select"*/ './Fields/SelectInput.vue'),
    'vf-range-input': () => import(/* webpackChunkName: "range"*/ './Fields/RangeInput.vue'),
    'vf-checkbox-input': () => import(/* webpackChunkName: "checkbox"*/ './Fields/CheckboxInput.vue'),
    'vf-objects-list-input': () => import(/* webpackChunkName: "objects-list"*/ './Fields/ObjectsListInput.vue'),
    'vf-image-upload-input': () => import(/* webpackChunkName: "image-upload"*/ './Fields/ImageUploadInput.vue'),
    'vf-datatable-input': () => import(/* webpackChunkName: "datetable"*/ './Fields/DataTableInput.vue'),
    'vf-button-input': () => import(/* webpackChunkName: "common"*/ './Fields/ButtonInput.vue'),
    'vf-buttons-list-input': () => import(/* webpackChunkName: "btn-list"*/ './Fields/ButtonsListInput.vue'),
    'vf-blockly-input': () => import(/* webpackChunkName: "blockly"*/ './Fields/Blockly/Blockly.vue'),
    'vf-markdown-input': () => import(/* webpackChunkName: "markdown"*/ './Fields/MarkdownInput/MarkdownInput.vue'),
    'vf-code-input': () => import(/* webpackChunkName: "code"*/ './Fields/CodeInput.vue'),
    'vf-multi-upload-input': () => import(/* webpackChunkName: "multi-upload"*/ './Fields/MultiUploadInput.vue'),
    'vf-datetime-input': () => import(/* webpackChunkName: "datetime"*/ './Fields/DateTimeInput.vue'),
    'vf-calendar-input': () => import(/* webpackChunkName: "calendar"*/ './Fields/CalendarInput.vue'),
    'vf-alert-input': () => import(/* webpackChunkName: "alert"*/ './Fields/AlertInput.vue'),
    'vf-pagination-input': () => import(/* webpackChunkName: "pagination"*/ './Fields/PaginationInput.vue'),
    'vf-simple-captcha-input': () => import(/* webpackChunkName: "simple-captcha"*/ './Fields/SimpleCaptcha.vue'),
    'vf-formjson-input': () => import(/* webpackChunkName: "builder"*/ './Fields/FormJSONBuilder/FormJSONBuilder.vue'),
    'vf-paragraph-input': () => import(/* webpackChunkName: "paragraph"*/ './Fields/Paragraph.vue'),
    'vf-group-expansion': () => import(/* webpackChunkName: "group-exp"*/ './Fields/GroupExpansion.vue'),
    'vf-group-single-exp': () => import(/* webpackChunkName: "group-single-exp"*/ './Fields/GroupSingleExpansion.vue'),
    'vf-group-tabs': () => import(/* webpackChunkName: "gorup-tabs"*/ './Fields/GroupTabs.vue'),
    'vf-group-treeview': () => import(/* webpackChunkName: "group-treeview"*/ './Fields/GroupTreeview.vue'),
    'vf-file-upload-input': () => import(/* webpackChunkName: "file-upload"*/ './Fields/FileUpload.vue')
}

export default {
    install (Vue, options) {
        const register = function (Vue, components) {
            for (const comp in components) {
                if (Object.prototype.hasOwnProperty.call(components, comp)) {
                    Vue.component(comp, components[comp])
                }
            }
        }

        register(Vue, customComponents)
    }
}

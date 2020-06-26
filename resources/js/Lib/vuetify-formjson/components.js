export const customComponents = {
    'vuetify-formjson': () => import('./VuetifyFormJSON.vue'),
    'vf-fields-renderer': () => import('./Fields/FieldsRenderer.vue'),
    'vf-json-input': () => import('./Fields/JSONInput.vue'),
    'vf-radio-group-input': () => import('./Fields/RadioGroupInput.vue'),
    'vf-bitwise-flags-input': () => import('./Fields/BitwiseFlagsInput.vue'),
    'vf-text-input': () => import('./Fields/TextInput.vue'),
    'vf-multitext-input': () => import('./Fields/MultiTextInput.vue'),
    'vf-autocomplete-input': () => import('./Fields/AutocompleteInput.vue'),
    'vf-color-input': () => import('./Fields/ColorInput.vue'),
    'vf-switch-input': () => import('./Fields/SwitchInput.vue'),
    'vf-button-group-input': () => import('./Fields/ButtonGroupInput.vue'),
    'vf-select-input': () => import('./Fields/SelectInput.vue'),
    'vf-range-input': () => import('./Fields/RangeInput.vue'),
    'vf-checkbox-input': () => import('./Fields/CheckboxInput.vue'),
    'vf-objects-list-input': () => import('./Fields/ObjectsListInput.vue'),
    'vf-image-upload-input': () => import('./Fields/ImageUploadInput.vue'),
    'vf-datatable-input': () => import('./Fields/DataTableInput.vue'),
    'vf-button-input': () => import('./Fields/ButtonInput.vue'),
    'vf-buttons-list-input': () => import('./Fields/ButtonsListInput.vue'),
    'vf-blockly-input': () => import('./Fields/Blockly/Blockly.vue'),
    'vf-markdown-input': () => import('./Fields/MarkdownInput/MarkdownInput.vue'),
    'vf-code-input': () => import('./Fields/CodeInput.vue'),
    'vf-multi-upload-input': () => import('./Fields/MultiUploadInput.vue'),
    'vf-datetime-input': () => import('./Fields/DateTimeInput.vue'),
    'vf-calendar-input': () => import('./Fields/CalendarInput.vue'),
    'vf-alert-input': () => import('./Fields/AlertInput.vue'),
    'vf-pagination-input': () => import('./Fields/PaginationInput.vue'),
    'vf-simple-captcha-input': () => import('./Fields/SimpleCaptcha.vue'),
    'vf-formjson-input': () => import('./Fields/FormJSONBuilder/FormJSONBuilder.vue'),
    'vf-paragraph-input': () => import('./Fields/Paragraph.vue'),
    'vf-group-expansion': () => import('./Fields/GroupExpansion.vue'),
    'vf-group-single-exp': () => import('./Fields/GroupSingleExpansion.vue'),
    'vf-group-tabs': () => import('./Fields/GroupTabs.vue'),
    'vf-group-treeview': () => import('./Fields/GroupTreeview.vue'),
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

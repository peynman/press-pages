import TextInputSettings from './settings/TextInput'
import SwitchInputSettings from './settings/SwitchInput'
import FieldsRendererSettings from './settings/FieldsRenderer'
import InputSelectSettings from './settings/SelectInput'
import RangeInputSettings from './settings/RangeInput'
import RadioGroupInputSettings from './settings/RadioGroupInput'

import ColorInputSettings from './settings/ColorInput'
import ButtonGroupInputSettings from './settings/ButtonGroupInput'
import AutocompleteInputSettings from './settings/AutocompleteInput'
import MultiTextInputSettings from './settings/MultiTextInput'
import JSONInputSettings from './settings/JSONInput'
import CheckboxInputSettings from './settings/CheckboxInput'
import ObjectsListInputSettings from './settings/ObjectsListInput'
import BitwiseFlagsInputSettings from './settings/BitwiseFlagsInput'
import ImageUploadInputSettings from './settings/ImageUploadInput'
import DatatableInputSettings from './settings/DatatableInput'
import ButtonInput from './settings/ButtonInput'
import DateTimeInputSettings from './settings/DateTimeInput'
import CalednarInputSettings from './settings/CalendarInput'
import MarkdownInputSettings from './settings/MarkdownInput'
import ParagraphInputSettings from './settings/ParagraphInput'
import AlertInputSettings from './settings/AlertInput'
import FormJSONSettings from './settings/FormJSONInput'

import AdminBarTemplateSettings from './settings/AdminBar'
import AppBarTemplateSettings from './settings/AppBar'
import CenteredTemplateSettings from './settings/Centered'

import GroupSingleExpansionSettings from './settings/GroupSingleExpansion'
import GroupExpansionSettings from './settings/GroupExpansion'
import GroupTabsSettings from './settings/GroupTabs'
import GroupTreeviewSettings from './settings/GroupTreeview'
import GroupSettings from './settings/Group'
import DatatableColumnSettings from './settings/DatatableColumn'

/**
 * A mixin component for FormJSON Builder
 *  implements all necessary methods and properties for
 *  a fully functioning FomrJSON Builder
 */
export default {
    props: {
        availableInputs: Array,
    },
    data () {

        const inputTypeSettings = {
            'vf-text-input': new TextInputSettings(),
            'vf-fields-renderer': new FieldsRendererSettings(),
            'vf-switch-input': new SwitchInputSettings(),
            'vf-select-input': new InputSelectSettings(),
            'vf-range-input': new RangeInputSettings(),
            'vf-radio-group-input': new RadioGroupInputSettings(),
            'vf-color-input': new ColorInputSettings(),
            'vf-button-group-input': new ButtonGroupInputSettings(),
            'vf-autocomplete-input': new AutocompleteInputSettings(),
            'vf-multi-text-input': new MultiTextInputSettings(),
            'vf-json-input': new JSONInputSettings(),
            'vf-checkbox-input': new CheckboxInputSettings(),
            'vf-bitwise-flags-input': new BitwiseFlagsInputSettings(),
            'vf-objects-list-input': new ObjectsListInputSettings(),
            'vf-datatable-input': new DatatableInputSettings(),
            'vf-group-single-exp': new GroupSingleExpansionSettings(),
            'vf-group-expansion': new GroupExpansionSettings(),
            'vf-group-tabs': new GroupTabsSettings(),
            'vf-group-treeview': new GroupTreeviewSettings(),
            'vf-button-input': new ButtonInput(),
            'vf-image-upload-input': new ImageUploadInputSettings(),
            'vf-datetime-input': new DateTimeInputSettings(),
            'vf-calendar-input': new CalednarInputSettings(),
            'vf-paragraph-input': new ParagraphInputSettings(),
            'vf-markdown-input': new MarkdownInputSettings(),
            'vf-alert-input': new AlertInputSettings(),
            'vf-formjson-input': new FormJSONSettings(),
            group: new GroupSettings(),
            column: new DatatableColumnSettings(),
            'Centered': new CenteredTemplateSettings(),
            'AdminBar': new AdminBarTemplateSettings(),
            'AppBar': new AppBarTemplateSettings()
        }


        const FormBuilderInputsList = []
        if (this.availableInputs) {
            FormBuilderInputsList.push(...this.availableInputs)
        } else {
            for (const key in inputTypeSettings) {
                const parts = key.split('-')
                if (parts[0] === 'vf') {
                    const title = parts.splice(1)
                    title[0] = title[0].slice(0, 1).toUpperCase() + title[0].slice(1)
                    FormBuilderInputsList.push({
                        id: key,
                        title: title.join(' '),
                    })
                }
            }
            FormBuilderInputsList.push({
                id: 'group',
                title: 'Group'
            })
            FormBuilderInputsList.push({
                id: 'column',
                title: 'DataTable Column'
            })
            FormBuilderInputsList.push({
                id: 'component',
                title: 'Custom Component'
            })
            FormBuilderInputsList.sort((a, b) => ('' + a.title).localeCompare(b.title))
        }
        inputTypeSettings['vf-datatable-input'].inputs = FormBuilderInputsList
        return {
            inputs: FormBuilderInputsList,
            inputTypeSettings
        }
    },
    methods: {
        getRemoveAction: function (items, item) {
            return {
                type: 'confirm',
                iconProps: {
                    small: true,
                    color: 'red'
                },
                icon: 'mdi-minus-box',
                props: {
                    small: true,
                    icon: true
                },
                confirm: 'Delete',
                message: 'Are you sure you want to remove item ' + item.model.id + '?',
                callback: (confirm) => {
                    if (confirm) {
                        item.drop()
                    }
                }
            }
        },
        getSettingsAction: function (items, item, onUpdated) {
            const fields = this.inputTypeSettings[item.model.type] ? this.inputTypeSettings[item.model.type] : {}
            const form = {
                type: 'drawer',
                onUpdated,
                iconProps: {
                    color: 'primary',
                    small: true
                },
                icon: 'mdi-settings',
                props: {
                    icon: true,
                    small: true
                },
                fields
            }
            if (fields.getSettingsFormFields) {
                form.fields = fields.getSettingsFormFields(item)
            }

            return form
        },
        getDuplicateAction: function (items, item) {
            return {
                type: 'button',
                icon: 'mdi-content-duplicate',
                iconProps: {
                    small: true
                },
                props: {
                    icon: true,
                    small: true,
                    click: () => {
                        const newCopy = JSON.parse(JSON.stringify({ ...item.model }))
                        newCopy.id = ('rnd' + Math.random() * Number.MAX_SAFE_INTEGER).substr(0, 10)
                        const newModel = this.treeModel.parse(newCopy)
                        newModel.value = JSON.parse(JSON.stringify({ ...item.value }))
                        this.appendNestedPathValue(newModel, 'value.settings.id', newCopy.id)
                        item.parent.addChild(newModel)
                    }
                }
            }
        },
        getMoveAction: function (items, item, inputs) {
            return {
                type: 'menu',
                iconProps: {
                    small: true,
                    color: 'red'
                },
                icon: 'mdi-format-vertical-align-center',
                props: {
                    small: true,
                    icon: true
                },
                formProps: {
                    options: {
                        type: 'component',
                        component: 'v-card',
                        formClass: 'ma-0 px-0 py-0',
                        wrap: {
                            component: 'v-list',
                            class: 'pa-0',
                            props: {
                                dense: true
                            },
                            inside: {
                                component: 'v-list-item',
                                props: {
                                    dense: true
                                }
                            }
                        }
                    }
                },
                fields: {
                    first: {
                        type: 'input',
                        input: 'button',
                        props: {
                            icon: true,
                            small: true,
                            click: () => {
                                item.setIndex(0)
                            }
                        },
                        iconProps: {
                            small: true
                        },
                        icon: 'mdi-format-vertical-align-top'
                    },
                    up: {
                        type: 'input',
                        input: 'button',
                        props: {
                            icon: true,
                            small: true,
                            click: () => {
                                if (item.getIndex() > 0) {
                                    item.setIndex(item.getIndex() - 1)
                                }
                            }
                        },
                        iconProps: {
                            small: true
                        },
                        icon: 'mdi-transfer-up'
                    },
                    down: {
                        type: 'input',
                        input: 'button',
                        props: {
                            icon: true,
                            small: true,
                            click: () => {
                                if (item.getIndex() < item.parent.children.length - 1) {
                                    item.setIndex(item.getIndex() + 1)
                                }
                            }
                        },
                        iconProps: {
                            small: true
                        },
                        icon: 'mdi-transfer-down'
                    },
                    bottom: {
                        type: 'input',
                        input: 'button',
                        props: {
                            icon: true,
                            small: true,
                            click: () => {
                                item.setIndex(item.parent.children.length - 1)
                            }
                        },
                        iconProps: {
                            small: true
                        },
                        icon: 'mdi-format-vertical-align-bottom'
                    }
                }
            }
        },
        getAddAction: function (items, itemParent, inputs) {
            if (!inputs) { inputs = this.inputs }
            return {
                type: 'dialog',
                icon: 'mdi-plus',
                iconProps: {
                    color: 'success',
                    small: true
                },
                props: {
                    icon: true,
                    small: true
                },
                formProps: {
                    options: {
                        type: 'component',
                        component: 'v-card'
                    }
                },
                fields: {
                    type: {
                        type: 'input',
                        input: 'buttons-list',
                        label: 'Field type',
                        class: 'mt-3',
                        decorator: {
                            id: 'id',
                            title: 'title',
                            label: ':title'
                        },
                        objects: inputs,
                        props: {
                            outlined: true,
                            class: 'ma-1'
                        },
                        once: true,
                        click: (clicked) => {
                            const newItem = {
                                id: ('rnd' + Math.random() * Number.MAX_SAFE_INTEGER).substr(0, 10),
                                title: clicked.title,
                                type: clicked.id
                            }
                            const newModel = this.treeModel.parse(newItem)
                            newModel.value = {
                                settings: {
                                    tabs: {
                                        fieldProperties: {
                                            id: newItem.id
                                        }
                                    }
                                },
                                slots: {
                                    slot: null
                                }
                            }

                            const itemParentTypeSettings = this.inputTypeSettings[itemParent.model.type]
                            if (itemParentTypeSettings && itemParentTypeSettings.getInputSlots(itemParent).length > 0) {
                                newModel.value.slots.slot = itemParentTypeSettings.getInputSlots(itemParent)[0].id
                            }

                            itemParent.addChild(newModel)
                        }
                    }
                }
            }
        },
        getChangeSlotAction: function (item, slots) {
            return {
                type: 'menu',
                iconProps: {
                    small: true,
                    color: 'secondary'
                },
                icon: 'mdi-widgets',
                props: {
                    small: true,
                    icon: true
                },
                formProps: {
                    options: {
                        type: 'component',
                        component: 'v-card',
                    }
                },
                fields: {
                    slot: {
                        type: 'input',
                        input: 'radio-group',
                        label: 'Component Slot',
                        objects: slots
                    }
                },
            }
        },

        /**
         * get [ActionsProvider] for formjson builder treeview items
         */
        getFormJSONBuilderActionProviderForTreeview () {
            return {
                hasAction: (slot, item) => {
                    return true
                },
                getActions: (slot, item) => {

                    const actions = {}
                    switch (slot) {
                    case 'append':
                        if (!item.isRoot()) {
                            actions.remove = this.getRemoveAction(
                                this.schema.builder,
                                item
                            )
                            actions.duplicate = this.getDuplicateAction(
                                this.schema.builder,
                                item
                            )
                            actions.move = this.getMoveAction(
                                this.schema.builder,
                                item
                            )
                        } else if (this.template && this.inputTypeSettings[this.template]) {
                            actions.__template = {
                                type: 'drawer',
                                iconProps: {
                                    color: 'cyan',
                                    small: true
                                },
                                icon: 'mdi-format-paint',
                                props: {
                                    icon: true,
                                    small: true
                                },
                                fields: this.inputTypeSettings[this.template].getInputProperties(item)
                            }
                        }
                        break
                    case 'prepend':
                        if (!item.isRoot()) {
                            const parentTypeSettings = this.inputTypeSettings[item.parent.model.type]
                            if (parentTypeSettings && parentTypeSettings.getInputSlots(item).length > 1) {
                                actions.slots = this.getChangeSlotAction(
                                    item,
                                    parentTypeSettings.getInputSlots(item)
                                )
                            }
                        }
                        if (item.model.type === 'vf-fields-renderer') {
                            actions.add = this.getAddAction(this.schema.builder, item)
                        }
                        if (this.inputTypeSettings[item.model.type] && this.inputTypeSettings[item.model.type].getInputSlots) {
                            if (this.inputTypeSettings[item.model.type].getInputSlots(item).length > 0) {
                                actions.add = this.getAddAction(this.schema.builder, item)
                            }
                        }
                        if (item.model.type.startsWith('group')) {
                            actions.add = this.getAddAction(this.schema.builder, item, this.inputs.filter((t) => !['group', 'column'].includes(t.id)))
                        }
                        if (item.model.type.startsWith('vf-group-')) {
                            actions.add = this.getAddAction(this.schema.builder, item, this.inputs.filter((t) => t.id === 'group'))
                        }
                        actions.settings = this.getSettingsAction(
                            this.schema.builder,
                            item,
                            vals => {
                                if (vals && vals.tabs && vals.tabs.fieldProperties && vals.tabs.fieldProperties.id) {
                                    if (item.model.id !== vals.tabs.fieldProperties.id) {
                                        item.model.id = vals.tabs.fieldProperties.id
                                    }
                                }
                                if (this.inputTypeSettings[item.model.type] && this.inputTypeSettings[item.model.type].onSettingsUpdated) {
                                    this.inputTypeSettings[item.model.type].onSettingsUpdated(vals, item)
                                }
                            }
                        )
                        break
                    }
                    return actions
                }
            }
        },

        /**
         * get properties object for a <vuetify-formjson> from treeview (formjson builder) items
         */
        getFormJSONFromSchema (schema) {
            const formjson = {}
            const iterateAndEvaluateItems = (items, ref) => {
                /**
                 * create child from each item type
                 * iterate on all items and their children
                 */
                items.forEach(item => {
                    /** the property field to store child objects */
                    let appendChildrenProperty = 'default'
                    /** item settings */
                    let itemTypeSettings = null

                    if (item.model.type && item.model.type !== 'vf-fields-renderer') {
                        itemTypeSettings = this.inputTypeSettings[item.model.type]
                        /** input type item */
                        if (item.model.type.endsWith('input')) {
                            const idSlices = item.model.type.split('-')
                            ref[item.model.id] = {
                                type: 'input',
                                input: idSlices.slice(1, idSlices.length - 1).join('-')
                            }
                        }
                        /** group type item */
                        else if (item.model.type.startsWith('vf-group-')) {
                            appendChildrenProperty = 'groups'
                            const idSlices = item.model.type.split('-')
                            ref[item.model.id] = {
                                type: 'group',
                                group: idSlices.slice(2).join('-'),
                                groups: {}
                            }
                        }
                        /** input/group inner slot */
                        else {
                            ref[item.model.id] = {
                                __custom_slot: item.model.type
                            }
                        }
                    } else {
                        /** its a vf-fields-renderer */
                        itemTypeSettings = this.inputTypeSettings['vf-fields-renderer']
                        ref[item.model.id] = {
                            id: item.model.id,
                            fields: {}
                        }
                        appendChildrenProperty = 'fields'
                    }

                    /** append item props from settings if
                     * there is a settings available from type */
                    if (itemTypeSettings) {
                        const itemSettings = itemTypeSettings.getInputPropsFromSettings((item.value && item.value.settings ? item.value.settings : {}));
                        ref[item.model.id] = {
                            ...ref[item.model.id],
                            ...itemSettings
                        }
                    }

                    // append template properties if target item has one
                    if (item.value.__template) {
                        ref[item.model.id] = {
                            ...ref[item.model.id],
                            __template: { ...item.value.__template }
                        }
                    }

                    // iterate childrens
                    if (item.children.length > 0) {
                        if (itemTypeSettings && itemTypeSettings.getInputSlots(item).length > 0) {
                            // iterate on slot childs
                            itemTypeSettings.getInputSlots(item).forEach((slot) => {
                                if (!ref[item.model.id][slot.id]) {
                                    ref[item.model.id][slot.id] = {}
                                }
                                iterateAndEvaluateItems(item.children.filter((child) => child.value && child.value.slots && child.value.slots.slot === slot.id), ref[item.model.id][slot.id])
                            })
                        }
                        // iterate on default slot
                        if (!ref[item.model.id][appendChildrenProperty]) {
                            ref[item.model.id][appendChildrenProperty] = {}
                        }

                        iterateAndEvaluateItems(
                            item.children.filter((child) => !child.value || !child.value.slots || !child.value.slots.slot),
                            ref[item.model.id][appendChildrenProperty]
                        )
                    }
                })
            }
            iterateAndEvaluateItems(schema, formjson)
            return formjson
        },

        /**
         * get treeview items for <vf-formjson-input> (formjson builder) from a <vuetify-formjson>(formjson) properties object
         * @param {Object} tree form json properties
         */
        getFormSchemaFromFormJSON (formjson) {
            const getTree = (data, emptyType = null, slot = null) => {
                const tree = []
                for (const prop in data) {
                    let itemType = 'vf-fields-renderer'
                    let itemId = prop

                    if (data[prop].type) {
                        switch (data[prop].type) {
                        case 'input':
                            itemType = 'vf-' + data[prop].input + '-input'
                            break
                        case 'group':
                            itemType = 'vf-group-' + data[prop].group
                            break
                        case 'component':
                            itemType = data[prop].component
                            break
                        default:
                            if (data[prop].__custom_slot) {
                                itemType = data[prop].__custom_slot
                            } else {
                                itemType = data[prop].type
                            }
                            break
                        }
                    } else if (data[prop].__custom_slot) {
                        itemType = data[prop].__custom_slot
                        itemId = data[prop].id
                    } else if (emptyType) {
                        itemType = emptyType
                        itemId = data[prop].id
                    } else {
                        itemId = data[prop].id
                    }
                    const newItem = {
                        id: itemId,
                        type: itemType
                    }
                    const newModel = this.treeModel.parse(newItem)
                    let children = []
                    if (data[prop].fields) {
                        children = getTree(data[prop].fields)
                    } else if (data[prop].groups) {
                        children = getTree(data[prop].groups, 'group')
                    }

                    const eventsVals = {}
                    let settingsVals = {}
                    // keep property names which contain inner slots and content from ending up in settingsVals
                    const notDataKeys = [
                        'fields',
                        'groups',
                        'components',
                        'v-on'
                    ]

                    // apply settings on item value before asking for InputSlots
                    for (const inner in data[prop]) {
                        if (notDataKeys.indexOf(inner) < 0) {
                            if (typeof data[prop][inner] === 'object') {
                                if (Array.isArray(data[prop][inner])) {
                                    settingsVals[inner] = []
                                } else {
                                    settingsVals[inner] = {}
                                }
                                for (const nested in data[prop][inner]) {
                                    if (nested !== 'v-on') {
                                        settingsVals[inner][nested] = data[prop][inner][nested]
                                    } else {
                                        if (!eventsVals[inner]) {
                                            eventsVals[inner] = []
                                        }
                                        for (const event in data[prop][inner][nested]) {
                                            eventsVals[inner].push({
                                                event: event,
                                                function: data[prop][inner][nested][event]
                                            })
                                        }
                                    }
                                }
                            } else {
                                settingsVals[inner] = data[prop][inner]
                            }
                        }
                    }

                    // add slotted children if exists
                    const itemTypeSettings = this.inputTypeSettings[itemType]
                    if (itemTypeSettings) {
                        if (itemTypeSettings.onSettingsUpdated) {
                            // update type on values
                            itemTypeSettings.onSettingsUpdated({
                                tabs: {
                                    fieldProperties: settingsVals,
                                    eventHandlers: eventsVals
                                }
                            }, newModel);
                        }
                        // now receive the slots and iterate on them
                        const slots = itemTypeSettings.getInputSlots(newModel);
                        slots.forEach((slot) => {
                            if (data[prop][slot.id]) {
                                children.push(...getTree(data[prop][slot.id], null, slot.id))
                            }
                        })

                        // add slots to notDataKeys
                        notDataKeys.push(...slots.map((i) => i.id))
                    }

                    children.forEach(child => {
                        newModel.addChild(child)
                    })

                    // apply settings on item value again to break children update chain
                    settingsVals = {}
                    for (const inner in data[prop]) {
                        if (notDataKeys.indexOf(inner) < 0) {
                            if (typeof data[prop][inner] === 'object') {
                                if (Array.isArray(data[prop][inner])) {
                                    settingsVals[inner] = []
                                } else {
                                    settingsVals[inner] = {}
                                }
                                for (const nested in data[prop][inner]) {
                                    if (nested !== 'v-on') {
                                        settingsVals[inner][nested] = data[prop][inner][nested]
                                    } else {
                                        if (!eventsVals[inner]) {
                                            eventsVals[inner] = []
                                        }
                                        for (const event in data[prop][inner][nested]) {
                                            eventsVals[inner].push({
                                                event: event,
                                                function: data[prop][inner][nested][event]
                                            })
                                        }
                                    }
                                }
                            } else {
                                settingsVals[inner] = data[prop][inner]
                            }
                        }
                    }
                    newModel.value = {
                        settings: {
                            tabs: {
                                fieldProperties: settingsVals,
                                eventHandlers: eventsVals
                            }
                        },
                        slots: {
                            slot: slot
                        }
                    }

                    tree.push(newModel)
                }
                return tree
            }
            const treeModel = getTree(formjson)
            return treeModel
        }
    }
}

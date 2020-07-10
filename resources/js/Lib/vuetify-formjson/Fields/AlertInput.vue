<template>
    <v-alert :class="`vf-input ${field.class ? field.class : ''}`" v-bind="fieldProps">
        <v-label v-if="field.label">{{ field.label }}</v-label>
        {{ field.message }}
        <v-list dense v-if="field.validations" class="mt-1">
            <v-list-item v-for="(valMsgs, valKey) in field.validations" :key="`${id}-validations-${valKey}`">
                <v-list-item-content v-for="(msg, index) in valMsgs" :key="`${id}-validations-${valKey}-${index}`">
                    <v-list-item-title :class="`${validationType}--text`" v-text="msg"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-alert>
</template>

<script>
import BaseComponent from './mixins'
import { VAlert, VList, VListGroup, VListItem, VLabel, VListItemContent, VListItemTitle } from 'vuetify/lib'
export default {
    components: {
        VAlert, VList, VListGroup, VListItem, VListItemContent, VListItemTitle, VLabel
    },
    mixins: [BaseComponent],
    name: 'vf-alert-input',
    props: {
        field: Object,
        id: String,
        value: Object
    },
    computed: {
        validationType () {
            return this.field.validations ? 'warning' : 'red'
        }
    }
}
</script>

<template>
  <v-pagination
    v-model="devalue"
    :class="`vf-input ${field.class ? field.class:''}`"
    v-bind="fieldProps"
    v-on="eventHandlers"
  >
  </v-pagination>
</template>
<script>
import BaseComponent from './mixins'
import { VPagination } from 'vuetify/lib'
export default {
    components: {
        VPagination
    },
    mixins: [BaseComponent],
    name: 'vf-pagination-input',
    props: {
        id: String,
        field: Object,
        value: [Object, String, Array]
    },
    methods: {
        updateInput: function (ev) {
            if (
                !this.field.updateKeyCodes ||
                this.field.updateKeyCodes.length === 0 ||
                this.field.updateKeyCodes.includes(ev.keyCode)
            ) { // update input on tab/enter pressed
                this.$emit('input', this.devalue)
            }
        }
    }
}
</script>

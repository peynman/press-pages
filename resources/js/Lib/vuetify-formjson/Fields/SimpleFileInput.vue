<template>
  <v-file-input :class="`vf-input ${field.class ? field.class : ''}`"
    v-model="devalue"
    :label="field.label"
    hide-details="auto"
    v-bind="fieldProps" v-on="eventHandlers">
  </v-file-input>
</template>

<script>
import BaseComponent from "./mixins";

export default {
    name: "VfSimpleFileInput",
    components: {},
    mixins: [BaseComponent],
    props: {
        id: String,
        field: Object,
        value: File
    },
    data: () => ({
    }),
    methods: {
    },
    watch: {
        devalue () {
            this.$emit('input', this.devalue);
        }
    }
};
</script>

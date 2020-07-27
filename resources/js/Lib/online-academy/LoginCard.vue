<template>
  <v-card
    shaped
    :class="`vf-input ${ field.class ? field.class : ''}`"
  >
    <v-row class="align-center justify-center">
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <v-img
          :max-width="field.maxWidth ? field.maxWidth : '300px'"
          :max-height="field.maxHeight ? field.maxHeight : '100%'"
          class="ma-auto"
          :src="field.image"
        />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <vf-fields-renderer
          v-model="devalue"
          :fields="field.content"
          :options="field.options"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
    name: "VfLoginCardInput",
    props: {
        field: Object,
        value: Object,
        id: String,
    },
    emits: ['input'],
    data: (vm) => {
        return {
            devalue: vm.value,
        }
    },
    watch: {
        devalue: {
            deeep: true,
            handle() {
                this.$emit('input', this.devalue);
            }
        }
    }
};
</script>

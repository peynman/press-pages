<template>
  <v-row class="align-center justify-center">
    <v-col cols="12" sm="12" md="4">
      <v-img :src="captcha" width="100" height="36px" class="ma-auto"></v-img>
    </v-col>
    <v-col cols="12" sm="12" md="8">
      <v-text-field
        v-model="devalue"
        :label="field.label"
        :class="`vf-input ${field.class ? field.class:''}`"
        v-bind="fieldProps"
        hide-details="auto"
        style="width: 100%"
        @keyup.native="updateInput($event)"
        v-on="eventHandlers"
      ></v-text-field>
    </v-col>
  </v-row>
</template>
<script>
import BaseComponent from "./mixins";
import { VTextField } from "vuetify/lib";
export default {
  components: {
    VTextField
  },
  mixins: [BaseComponent],
  name: "vf-simple-captcha-input",
  props: {
    id: String,
    field: Object,
    value: [Object, String, Array]
  },
  computed: {
    captcha() {
      return this.field.captcha?.img;
    }
  },
  methods: {
    updateInput: function(ev) {
      if (
        !this.field.updateKeyCodes ||
        this.field.updateKeyCodes.length === 0 ||
        this.field.updateKeyCodes.includes(ev.keyCode)
      ) {
        // update input on tab/enter pressed
        this.$emit("input", this.devalue);
      }
    }
  },
};
</script>

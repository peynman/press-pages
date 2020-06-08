<template>
    <v-content :id="id">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" v-bind="options">
            <vuetify-formjson v-bind="this[this.getFormSchemaPropName()]" v-model="formModel"></vuetify-formjson>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
import FormJSONRenderer from '../Lib/vuetify-formjson/Fields/FormJSONBuilder/generator'

export default {
    mixins: [FormJSONRenderer],
    name: 'page-template-centered',
  props: {
    id: String,
    options: {
      type: Object,
      default: () => ({
            md: 6,
            sm: 12
      })
    },
    sources: {
      type: Array,
      default: () => ([])
    },
    body: {
      type: Object,
      default: () => ({
        schema: {},
        code: "",
        values: {}
      })
    },
  },
  mounted () {
      console.log(this.options)
      if (this.body) {
          this.UpdatePageContent(this.body, this.options, this.sources)
      }
  },
  watch: {
      body () {
        this.UpdatePageContent(this.body, this.options, this.sources)
      }
  }
}
</script>

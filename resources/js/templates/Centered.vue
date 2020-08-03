<template>
    <v-content :id="id">
      <v-container :class="`${options && options.contClass ? options.contClass :''}`" fluid>
        <v-row align="center" justify="center" :class="`${options && options.rowClass ? options.rowClass :''}`">
          <v-col class="pa-0" cols="12" v-bind="options" :class="`${options && options.colClass ? options.colClass :''}`">
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

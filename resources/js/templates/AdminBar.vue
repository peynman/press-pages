<template>
  <v-content :id="id">
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-container>
        <v-card>
            <v-card-text>
                <vuetify-formjson v-bind="this[this.getFormSchemaPropName()]" v-model="formModel"></vuetify-formjson>
            </v-card-text>
        </v-card>
    </v-container>
  </v-content>
</template>

<script>
import FormJSONRenderer from "../Lib/vuetify-formjson/Fields/FormJSONBuilder/generator";

export default {
  mixins: [FormJSONRenderer],
  name: "page-template-admin-bar",
  props: {
    id: String,
    options: {
      type: Object,
      default: () => ({})
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
};
</script>

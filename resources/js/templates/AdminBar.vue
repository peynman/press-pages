<template>
  <v-content :id="id">
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>آکامی آنلاین</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="crud in cruds" :key="`action-${crud.id}`" :href="`/admin/${crud.id}`">
            <v-list-item-title>{{ crud.title }}</v-list-item-title>
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
      type: [Object, Array],
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
  data () {
      return {
          cruds: [
              {
                  id: 'users',
                  title: 'کاربران'
              },
              {
                  id: 'roles',
                  title: 'نقش ها'
              },
              {
                  id: 'domains',
                  title: 'دامنه ها'
              },
              {
                  id: 'forms',
                  title: 'فرم ها'
              },
              {
                  id: 'products',
                  title: 'محصولات'
              },
              {
                  id: 'product-types',
                  title: 'نوع محصولات'
              },
              {
                  id: 'product-categories',
                  title: 'دسته بندی محصولات'
              },
              {
                  id: 'sms-gateways',
                  title: 'درگاه پیامک'
              },
              {
                  id: 'sms-messages',
                  title: 'پیامک ها'
              },
              {
                  id: 'bank-gateways',
                  title: 'درگاه بانک'
              },
              {
                  id: 'bank-gateway-transactions',
                  title: 'تراکنش های بانک'
              },
              {
                  id: 'carts',
                  title: 'سبد های خرید'
              },
              {
                  id: 'wallet-transactions',
                  title: 'تراکنش های کیف پول'
              },
          ]
      }
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

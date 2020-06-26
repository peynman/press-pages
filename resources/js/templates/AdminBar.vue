<template>
  <v-main :id="id">
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>آنلاین آکادمی</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <!-- <v-list-item v-for="crud in cruds" :key="`action-${crud.id}`" :href="`/admin/${crud.id}`">
            <v-list-item-title>{{ crud.title }}</v-list-item-title>
          </v-list-item>-->
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
        <v-list nav dense>
          <v-list-item
            v-for="crud in cruds"
            :key="`${id}-admin-crud-link-${crud.id}`"
            :href="`/admin/${crud.id}`"
          >
            <v-list-item-icon>
              <v-icon>{{ crud.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ crud.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-container>
        <v-card>
          <v-card-text>
            <vuetify-formjson v-bind="this[this.getFormSchemaPropName()]" v-model="formModel"></vuetify-formjson>
          </v-card-text>
        </v-card>
      </v-container>
  </v-main>
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
      default: () => []
    },
    body: {
      type: Object,
      default: () => ({
        schema: {},
        code: "",
        values: {}
      })
    }
  },
  data() {
    return {
      drawer: false,
      availableCRUDS: [
        {
          id: "users",
          title: "کاربران",
          icon: "mdi-account"
        },
        {
          id: "roles",
          title: "نقش ها",
          icon: "mdi-account-alert"
        },
        {
          id: "domains",
          title: "دامنه ها",
          icon: "mdi-domain"
        },
        {
          id: "forms",
          title: "فرم ها",
          icon: "mdi-clipboard-arrow-right"
        },
        {
          id: "form-entries",
          title: "فرم های پر شده",
          icon: "mdi-clipboard-check-multiple"
        },
        {
          id: "pages",
          title: "صفحات سایت",
          icon: "mdi-file-document"
        },
        {
          id: "products",
          title: "محصولات",
          icon: "mdi-widgets"
        },
        {
          id: "product-types",
          title: "انواع محصولات",
          icon: "mdi-widgets-outline"
        },
        {
          id: "product-categories",
          title: "دسته بندی محصولات",
          icon: "mdi-selection-drag"
        },
        {
          id: "sms-gateways",
          title: "درگاه‌های پیامکی",
          icon: "mdi-cellphone-basic"
        },
        {
          id: "sms-messages",
          title: "پیامک ها",
          icon: "mdi-cellphone-arrow-down"
        },
        {
            id: 'phone-numbers',
            title: 'شماره های ثبت شده',
            icon: 'mdi-cellphone-text'
        },
        {
          id: "bank-gateways",
          title: "درگاه‌های بانکی",
          icon: "mdi-bank"
        },
        {
          id: "bank-gateway-transactions",
          title: "تراکنش های بانک",
          icon: "mdi-bank-transfer"
        },
        {
          id: "carts",
          title: "سبد های خرید",
          icon: "mdi-cart"
        },
        {
          id: "wallet-transactions",
          title: "تراکنش های کیف پول",
          icon: "mdi-cart-arrow-right"
        },
      ]
    };
  },
  computed: {
      user () {
          return this.$store.state.user;
      },
      cruds: function () {
          return this.availableCRUDS.filter((item) => (this.user?.permissions.filter((permString) => permString.startsWith(item.id).length > 0)))
      }
  },
  mounted() {
    if (this.body) {
      this.UpdatePageContent(this.body, this.options, this.sources);
    }
  },
  watch: {
    body() {
      this.UpdatePageContent(this.body, this.options, this.sources);
    }
  }
};
</script>

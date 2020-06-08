<template>
  <v-content :id="id">
    <v-app-bar
    dense
      app
      sticky
      color="rgba(84, 84, 84, 0.74)"
      dark
      scroll-target="#scrolling-techniques-2"
    >
    <v-btn
        elevation="0"
        @click="state(1)"
        :color="btnOne"
        large
        class="ma-0 px-5"
        tile
      >DASHBOARD</v-btn>
      <v-spacer></v-spacer>
      <v-menu offset-y dark>
        <template v-slot:activator="{ on }">
          <v-btn fab small class="success" v-on="on">
            <v-avatar size="35">
              <v-img src="../../public/logo.png"></v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            justify="space-between"
            @click="state(0)"
          >
            <v-icon>{{link.icon}}</v-icon>
            <v-list-item-title class="mx-10">{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn fab small class="mx-2 lighten-2 xsBtnCart">
        <v-icon small>mdi-cart</v-icon>
      </v-btn>
      <v-btn fab small class="mx-2 indigo lighten-4 xsbtn">
        <v-icon small>mdi-phone</v-icon>
      </v-btn>
    </v-app-bar>
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
import FormJSONRenderer from "../Lib/vuetify-formjson/Fields/FormJSONBuilder/generator";

export default {
  mixins: [FormJSONRenderer],
  name: "page-template-app-bar",
  props: {
    id: String,
    options: {
      type: Object,
      default: () => ({
        md: 6,
        sm: 12
      })
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
  data () {
      return {
          btnOne: "rgba(84, 84, 84, 0.74)",
      btnTWo: "rgba(84, 84, 84, 0.74)",
      btnThree: "rgba(84, 84, 84, 0.74)",

      drawer: false,
      links: [
        { icon: "mdi-account", text: " حساب کاربری", route: "/profile" },
        { icon: "mdi-bell", text: "اعلانات", route: "/notifications" },
        { icon: "mdi-cash-multiple", text: "مالی", route: "/peymentLog" },
        {
          icon: "mdi-card-bulleted-settings-outline",
          text: " کارنامه ها",
          route: "/reports"
        },
        { icon: "mdi-pencil", text: "درباره ما", route: "/about" },
        { icon: "mdi-exit-run", text: " خروج", route: "/login" }
      ]
      }
  }
};
</script>

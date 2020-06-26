<template>
  <v-main :id="id">
    <v-app-bar
      dense
      app
      sticky
      color="rgba(84, 84, 84, 0.74)"
      dark
      scroll-target="#scrolling-techniques-2"
    >
      <!-- guest user links -->
      <div v-if="options.guest_links">
        <v-btn
          v-for="(link, index) in options.guest_links"
          :key="`${id}-appbar-guest-link-${index}`"
          :href="link.url ? link.url : '#'"
          elevation="0"
          :color="btnOne"
          depressed
          large
          class="ma-0 ms-1 px-5"
          tile
        >{{ link.title }}</v-btn>
      </div>
      <!-- signed user links -->
      <div v-if="user && options.user_links">
        <v-btn
          v-for="(link, index) in options.user_links"
          :key="`${id}-appbar-user-link-${index}`"
          :href="link.url ? link.url.replace(':id', user.id) : '#'"
          elevation="0"
          :color="btnOne"
          depressed
          large
          class="ma-0 ms-1 px-5"
          tile
        >{{ link.title }}</v-btn>
      </div>
      <v-btn
        v-if="isAdmin"
        href="/admin/home"
        elevation="0"
        :color="btnOne"
        depressed
        large
        class="ma-0 ms-1 px-5"
        tile
      >پنل ادمین</v-btn>
      <v-spacer></v-spacer>
      <!-- user account/cart menu -->
      <div class="d-flex flex-row" v-if="user">
        <!-- account menu -->
        <v-menu offset-y dark>
          <template v-slot:activator="{ on }">
            <v-btn small rounded outlined color="success" class="my-auto mx-4" v-on="on">
              <span class="white--text">{{ user.name }}</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="link in links"
              :key="link.href"
              justify="space-between"
              :href="link.href"
            >
              <v-icon>{{link.icon}}</v-icon>
              <v-list-item-title class="mx-10">{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- cart menu -->
        <v-menu
          offset-y
          dark
          :close-on-content-click="false"
          v-if="user.current_cart && user.current_cart.items"
        >
          <template v-slot:activator="{ on }">
            <v-badge
              class="my-auto"
              :value="user.current_cart.items.length > 0"
              overlap
              left
              label
              offset-y="15"
              offset-x="15"
              :content="`${user.current_cart.items.length}`"
              color="green"
            >
              <v-btn v-on="on" fab small class="mx-2 lighten-2 xsBtnCart">
                <v-icon small>mdi-cart</v-icon>
              </v-btn>
            </v-badge>
          </template>
          <v-list two-line v-if="user.current_cart.items.length > 0">
            <v-list-item
              v-for="(item, index) in user.current_cart.items"
              :key="`${id}-app-bar-cart-items-${index}`"
              justify="space-between"
            >
              <template v-slot:default="{}">
                <v-list-item-content>
                  <v-list-item-title>{{ item.data.title }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip
                      dense
                      small
                      outlined
                      color="green"
                      class="mt-1 #363b5e--text my-auto"
                      style="text-decoration:none;"
                    >{{ getProductPriceString(item) }}</v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon small color="red" @click="toggleItemInCart(item)">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-btn
                  dark
                  outlined
                  rounded
                  block
                  class="mx-auto"
                  href="/me/current-cart"
                >تایید و صفحه پرداخت</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <div class="d-flex flex-column" v-if="user.balance">
          <label class="ma-auto" style="font-size: 10px;">موجودی شما</label>
          <label
            class="ma-auto"
            style="font-size: 12px;"
          >{{ user.balance.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} {{ user.balance.currency.title }}</label>
        </div>
      </div>
      <!-- sign in/up for guest user -->
      <div v-if="!user">
        <v-btn
          elevation="0"
          :color="btnOne"
          large
          class="ma-0 px-5"
          tile
          href="/signin"
        >{{ options.labels && options.labels.signin ? options.labels.signin : 'ورود به سایت' }}</v-btn>
        <v-btn
          elevation="0"
          :color="btnOne"
          large
          class="ma-0 px-5"
          tile
          href="/signup"
        >{{ options.labels && options.labels.signup ? options.labels.singup : 'ثبت نام' }}</v-btn>
      </div>
      <!-- social links alternate -->
      <v-btn fab small class="mx-2 indigo lighten-4 xsbtn">
        <v-icon small>mdi-phone</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container class="fill-height align-start" fluid>
      <v-row align="start" justify="center">
        <v-col cols="12" v-bind="options">
          <vuetify-formjson v-bind="this[this.getFormSchemaPropName()]" v-model="formModel"></vuetify-formjson>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import FormJSONRenderer from "../Lib/vuetify-formjson/Fields/FormJSONBuilder/generator";
import { UserCartEditor } from "./../Lib/online-academy/mixins";

export default {
  mixins: [FormJSONRenderer, UserCartEditor],
  name: "page-template-app-bar",
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
  computed: {
    user() {
      return this.$store.state.user;
    },
    isAdmin() {
      return (
        this.$store.state.user &&
        this.$store.state.user.roles &&
        this.$store.state.user.roles.filter(
          i => i.name === "super-role" || i.name === "affiliate"
        ).length > 0
      );
    }
  },
  data() {
    return {
      btnOne: "rgba(84, 84, 84, 0.74)",
      btnTWo: "rgba(84, 84, 84, 0.74)",
      btnThree: "rgba(84, 84, 84, 0.74)",

      drawer: false,
      links: [
        { icon: "mdi-cash-multiple", text: "مالی", href: "/banking" },
        { icon: "mdi-exit-run", text: "خروج", href: "/logout" }
      ]
    };
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

<style scoped>
</style>

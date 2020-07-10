<template>
  <v-main :id="id">
    <v-app-bar
      dense
      app
      fixed
      color="rgba(84, 84, 84, 0.74)"
      dark
      scroll-target="#scrolling-techniques-2"
    >
      <v-menu>
        <template v-slot:activator="{on}">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list nav dense>
          <v-list-item
            v-for="(nav, index) in navs"
            :key="`${id}-nav-link-${index}`"
            :href="nav.href"
            :two-line="!!nav.sub"
          >
            <v-list-item-icon>
              <v-icon>{{ nav.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ nav.title }}</v-list-item-title>
              <v-list-item-subtitle v-if="nav.sub">{{ nav.sub }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-title>آنلاین آکادمی</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- user account/cart menu -->
      <!-- account menu -->
      <v-menu offset-y dark>
        <template v-slot:activator="{ on }">
          <v-btn small rounded outlined color="success" class="my-auto ms-1" v-on="on">
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
      <v-btn
        v-if="user.current_cart && user.current_cart.items && user.current_cart.items.length > 0"
        href="/me/current-cart"
        elevation="0"
        color="green"
        depressed
        large
        class="ma-0 ms-1 px-5"
        tile
      >صفحه پرداخت</v-btn>
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
                <v-btn
                  icon
                  small
                  color="red"
                  @click="toggleItemInCart(item)"
                  :loading="loading[item.id]"
                >
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
              >تایید و صفحه جزییات پرداخت</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- sign in/up for guest user -->
      <v-btn
        v-if="!user"
        elevation="0"
        :color="btnOne"
        large
        class="ma-0 px-5"
        tile
        href="/signin"
      >{{ options.labels && options.labels.signin ? options.labels.signin : 'ورود به سایت' }}</v-btn>
      <v-btn
        v-if="!user"
        elevation="0"
        :color="btnOne"
        large
        class="ma-0 px-5"
        tile
        href="/signup"
      >{{ options.labels && options.labels.signup ? options.labels.singup : 'ثبت نام' }}</v-btn>
      <!-- social links alternate -->
      <v-btn
        fab
        small
        :class="`mx-2 xsbtn ${showMediaLinks ? 'indigo darken-4': 'indigo darken-4' }`"
        @click="showMediaLinks = !showMediaLinks"
      >
        <v-icon small>{{ showMediaLinks ? 'mdi-chevron-left' : 'mdi-phone' }}</v-icon>
      </v-btn>
      <v-slide-x-transition group tag="div" class="ma-auto">
        <v-btn
          v-show="showMediaLinks"
          key="tra-1"
          small
          class="mx-md-2"
          :href="`tel:${options.labels && options.labels.tel ? options.labels.tel : '+9802166400300'}`"
        >{{ options.labels && options.labels.telString ? options.labels.telString: 'تلفن تماس: ۰۲۱۶۶۴۰۰۳۰۰' }}</v-btn>
        <v-btn
          v-show="showMediaLinks"
          key="tra-2"
          fab
          small
          class="me-1 xsbtn"
          :href="`${options.links && options.links.instagram ? options.links.instagram : '#'}`"
        >
          <v-icon small>mdi-instagram</v-icon>
        </v-btn>
        <v-btn
          v-show="showMediaLinks"
          key="tra-4"
          fab
          small
          class="me-1 xsbtn"
          :href="`${options.links && options.links.instagram ? options.links.youtube : '#'}`"
        >
          <v-icon small>mdi-youtube</v-icon>
        </v-btn>
        <v-btn
          v-show="showMediaLinks"
          key="tra-5"
          fab
          small
          class="me-1 xsbtn"
          :href="`${options.links && options.links.instagram ? options.links.whatsapp : '#'}`"
        >
          <v-icon small>mdi-whatsapp</v-icon>
        </v-btn>
        <v-btn
          v-show="showMediaLinks"
          key="tra-6"
          fab
          small
          class="me-1 xsbtn"
          :href="`${options.links && options.links.instagram ? options.links.telegram : '#'}`"
        >
          <v-icon small>mdi-telegram</v-icon>
        </v-btn>
      </v-slide-x-transition>
    </v-app-bar>
    <v-container class="align-start" fluid>
      <v-row align="start" justify="center">
        <v-col cols="12" v-bind="options">
          <vuetify-formjson v-bind="this[this.getFormSchemaPropName()]" v-model="formModel"></vuetify-formjson>
        </v-col>
      </v-row>
    </v-container>
    <app-footer></app-footer>
  </v-main>
</template>

<script>
import FormJSONRenderer from "../Lib/vuetify-formjson/Fields/FormJSONBuilder/generator";
import { UserCartEditor } from "./../Lib/online-academy/mixins";
import Footer from "./Footer";

export default {
  mixins: [FormJSONRenderer, UserCartEditor],
  components: {
    [Footer.name]: Footer
  },
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
    },
    isCustomer() {
      return (
        this.$store.state.user &&
        this.$store.state.user.roles &&
        this.$store.state.user.roles.filter(
          i =>
            i.name === "super-role" ||
            i.name === "affiliate" ||
            i.name === "student"
        ).length > 0
      );
    },
    navs() {
      const navs = [
        {
          icon: "mdi-home",
          title: "خانه",
          href: "/"
        }
      ];
      if (this.isAdmin) {
        navs.push({
          icon: "mdi-alert-outline",
          title: "پنل ادمین",
          href: "/admin/home"
        });
      }
      if (this.user) {
        if (this.isCustomer) {
          navs.push({
            icon: "mdi-desk-lamp",
            title: "میز مطالعه من",
            href: "/me/desktop"
          });
          navs.push({
            icon: "mdi-bookshelf",
            title: "محصولات من",
            href: "/me/products"
          });
          navs.push({
            icon: "mdi-cart-arrow-right",
            title: "تراکنش های من",
            href: "/me/carts"
          });
          navs.push({
            icon: "mdi-gift",
            title: "اعتبار هدیه",
            href: "/me/forward"
          });
          navs.push({
            icon: "mdi-credit-card",
            title: "افزایش اعتبار",
            href: "/me/increase-credits",
            sub:
              "موجودی شما: " +
              this.user.balance.amount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              " " +
              this.user.balance.currency.title
          });
        }
      }
      navs.push(...[
        {
          icon: "mdi-police-badge",
          title: "قوانین و مقررات",
          href: "/terms"
        },
        {
          icon: "mdi-information",
          title: "درباره ما",
          href: "/about"
        }
      ]);
      return navs;
    }
  },
  data() {
    return {
      loading: {},
      btnOne: "rgba(84, 84, 84, 0.74)",
      btnTWo: "rgba(84, 84, 84, 0.74)",
      btnThree: "rgba(84, 84, 84, 0.74)",
      showMediaLinks: false,
      drawer: false,
      links: [
        { icon: "mdi-face-profile", text: "پروفایل من", href: "/me/forms/1" },
        {
          icon: "mdi-onepassword",
          text: "تغییر رمز عبور",
          href: "/me/password"
        },
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

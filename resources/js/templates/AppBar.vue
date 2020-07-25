<template>
  <v-main :id="id">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      right
      fixed
      style="min-width: 300px;"
    >
      <v-list
        nav
        dense
      >
        <v-list-item
          v-for="(nav, index) in navs"
          :key="`${id}-nav-link-${index}`"
          :href="nav.href ? nav.href:'#'"
          :two-line="!!nav.sub"
        >
          <v-list-item-icon>
            <v-icon>{{ nav.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-if="nav.title">
              {{ nav.title }}
            </v-list-item-title>
            <v-list-item-subtitle v-if="nav.sub">
              {{ nav.sub }}
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="nav.inputs">
              <vf-fields-renderer
                v-model="increaseWallet"
                class="mt-2"
                :fields="nav.inputs.fields"
                :options="nav.inputs.options"
              />
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      dense
      app
      fixed
      color="rgba(84, 84, 84, 0.74)"
      dark
      scroll-target="#scrolling-techniques-2"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>آنلاین آکادمی</v-toolbar-title>
      <v-spacer />
      <!-- user account/cart menu -->
      <!-- account menu -->
      <v-menu
        offset-y
        dark
      >
        <template #activator="{ on }">
          <v-btn
            small
            rounded
            outlined
            color="success"
            class="my-auto ms-1 no-letter-spacing"
            v-on="on"
          >
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
            <v-icon>{{ link.icon }}</v-icon>
            <v-list-item-title class="mx-10">
              {{ link.text }}
            </v-list-item-title>
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
        class="ma-0 ms-1 px-5 no-letter-spacing"
        tile
      >
        صفحه پرداخت
      </v-btn>
      <v-menu
        v-if="user.current_cart && user.current_cart.items"
        offset-y
        dark
        :close-on-content-click="false"
      >
        <template #activator="{ on }">
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
            <v-btn
              fab
              small
              class="mx-2 lighten-2 xsBtnCart"
              v-on="on"
            >
              <v-icon small>
                mdi-cart
              </v-icon>
            </v-btn>
          </v-badge>
        </template>
        <v-list
          v-if="user.current_cart.items.length > 0"
          two-line
        >
          <v-list-item
            v-for="(item, index) in user.current_cart.items"
            :key="`${id}-app-bar-cart-items-${index}`"
            justify="space-between"
          >
            <template #default="{}">
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
                  >
                    {{ getProductPriceString(item) }}
                  </v-chip>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  small
                  color="red"
                  :loading="loading[item.id]"
                  @click="toggleItemInCart(item)"
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
                class="mx-auto no-letter-spacing"
                href="/me/current-cart"
              >
                تایید و صفحه جزییات پرداخت
              </v-btn>
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
      >
        {{ options.labels && options.labels.signin ? options.labels.signin : 'ورود به سایت' }}
      </v-btn>
      <v-btn
        v-if="!user"
        elevation="0"
        :color="btnOne"
        large
        class="ma-0 px-5"
        tile
        href="/signup"
      >
        {{ options.labels && options.labels.signup ? options.labels.singup : 'ثبت نام' }}
      </v-btn>
      <!-- social links alternate -->
      <v-btn
        fab
        small
        :class="`mx-2 xsbtn ${showMediaLinks ? 'indigo darken-4': 'indigo darken-4' }`"
        @click="showMediaLinks = !showMediaLinks"
      >
        <v-icon small>
          {{ showMediaLinks ? 'mdi-chevron-left' : 'mdi-phone' }}
        </v-icon>
      </v-btn>
      <v-slide-x-transition
        group
        tag="div"
        class="ma-auto"
      >
        <v-btn
          v-show="showMediaLinks"
          key="tra-1"
          small
          class="mx-md-2"
          :href="`tel:${options.labels && options.labels.tel ? options.labels.tel : '+9802166400300'}`"
        >
          {{ options.labels && options.labels.telString ? options.labels.telString: 'تلفن تماس: ۰۲۱۶۶۴۰۰۳۰۰' }}
        </v-btn>
        <v-btn
          v-show="showMediaLinks"
          key="tra-2"
          fab
          small
          class="me-1 xsbtn"
          :href="`${options.links && options.links.instagram ? options.links.instagram : '#'}`"
        >
          <v-icon small>
            mdi-instagram
          </v-icon>
        </v-btn>
        <v-btn
          v-show="showMediaLinks"
          key="tra-4"
          fab
          small
          class="me-1 xsbtn"
          :href="`${options.links && options.links.instagram ? options.links.youtube : '#'}`"
        >
          <v-icon small>
            mdi-youtube
          </v-icon>
        </v-btn>
        <v-btn
          v-show="showMediaLinks"
          key="tra-5"
          fab
          small
          class="me-1 xsbtn"
          :href="`${options.links && options.links.instagram ? options.links.whatsapp : '#'}`"
        >
          <v-icon small>
            mdi-whatsapp
          </v-icon>
        </v-btn>
        <v-btn
          v-show="showMediaLinks"
          key="tra-6"
          fab
          small
          class="me-1 xsbtn"
          :href="`${options.links && options.links.instagram ? options.links.telegram : '#'}`"
        >
          <v-icon small>
            mdi-telegram
          </v-icon>
        </v-btn>
      </v-slide-x-transition>
    </v-app-bar>
    <v-container
      class="align-start"
      fluid
    >
      <v-row
        align="start"
        justify="center"
      >
        <v-col
          cols="12"
          v-bind="options"
        >
          <vuetify-formjson
            v-model="formModel"
            v-bind="this[this.getFormSchemaPropName()]"
          />
        </v-col>
      </v-row>
    </v-container>
    <app-footer />
  </v-main>
</template>

<script>
import FormJSONRenderer from "../Lib/vuetify-formjson/Fields/FormJSONBuilder/generator";
import { UserCartEditor } from "./../Lib/online-academy/mixins";
import Footer from "./Footer";

export default {
    name: "PageTemplateAppBar",
    components: {
        [Footer.name]: Footer
    },
    mixins: [FormJSONRenderer, UserCartEditor],
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
            loading: {},
            btnOne: "rgba(84, 84, 84, 0.74)",
            btnTWo: "rgba(84, 84, 84, 0.74)",
            btnThree: "rgba(84, 84, 84, 0.74)",
            showMediaLinks: false,
            drawer: false,
            increaseWallet: {},
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
                        inputs: {
                            options: {
                                formClass: "d-flex flex-column justify-end pa-0 ma-0"
                            },
                            fields: {
                                amount: {
                                    type: "input",
                                    input: "text",
                                    label: "افزایش اعتبار به تومان",
                                    props: {
                                        solo: true,
                                        dense: true,
                                        "hide-details": true,
                                        rounded: true
                                    },
                                },
                                submit: {
                                    type: "input",
                                    input: "button",
                                    label: "انتقال به بانک",
                                    class: 'mt-1',
                                    props: {
                                        dense: true,
                                        outlined: true,
                                        rounded: true,
                                        color: 'success',
                                        'v-on': {
                                            click: () => {
                                                if (parseInt(this.increaseWallet.amount) >= 10000) {
                                                    window.location = '/bank-gateways/' + this.user.balance.default_gateway + '/redirect/increase/' + this.increaseWallet.amount + '/currency/' + 1;
                                                } else {
                                                    window.alert('حداقل مبلغ افزایش موجودی ۱۰هزار تومان است')
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        sub:
              "موجودی شما: " +
              parseInt(this.user.balance.amount)
                  .toLocaleString('fa-IR')
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              " " +
              this.user.balance.currency.title
                    });
                }
            }
            navs.push(
                ...[
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
                ]
            );
            return navs;
        }
    },
    watch: {
        body() {
            this.UpdatePageContent(this.body, this.options, this.sources);
        }
    },
    mounted() {
        if (this.body) {
            this.UpdatePageContent(this.body, this.options, this.sources);
        }
    }
};
</script>

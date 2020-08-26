<template>
  <v-main
    :id="id"
  >
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
    >
      <template v-slot:extension v-if="showMediaLinks">
        <div class="d-flex flex-row fill-width">
            <v-spacer></v-spacer>
            <v-btn
            v-show="showMediaLinks"
            key="tra-1"
            small
            class="mx-2"
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
            :href="`${options.links && options.links.instagram ? options.links.instagram : 'https://www.instagram.com/onlineacademy.ir/'}`"
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
            :href="`${options.links && options.links.instagram ? options.links.youtube : 'https://www.aparat.com/onlineacademy'}`"
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
            :href="`${options.links && options.links.instagram ? options.links.whatsapp : 'https://api.whatsapp.com/send?phone=989361222120&text=%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86%20%D8%A2%DA%A9%D8%A7%D8%AF%D9%85%DB%8C'}`"
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
            :href="`${options.links && options.links.instagram ? options.links.telegram : 'http://telegram.me/online_academyir'}`"
            >
            <v-icon small>
                mdi-telegram
            </v-icon>
            </v-btn>
        </div>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>آنلاین آکادمی</v-toolbar-title>
      <v-spacer />
      <!-- user notifications/account/cart menu -->
      <!-- account menu -->
      <v-menu
        offset-y
        dark
        v-if="user"
      >
        <template #activator="{ on }">
          <v-btn
            small
            rounded
            outlined
            :color="profileComplete ? 'green': 'warning'"
            class="my-auto ms-1 no-letter-spacing"
            v-on="on"
          >
            <span class="white--text">{{ userNameString }}</span>
            <v-avatar :color="profileComplete ? 'green': 'warning'" size="32px" class="ms-2" >
                <img
                    v-if="userAvatar"
                    alt="Avatar"
                    :src="userAvatar"
                >
                <v-icon
                    v-if="!userAvatar"
                    color="white"
                    small
                >mdi-face-recognition</v-icon>
            </v-avatar>
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
      <!-- user notifications -->
      <v-menu
        v-if="user && user.notifications && user.notifications.length > 0"
        offset-y
        dark
      >
        <template #activator="{ on }">
          <v-btn
            fab
            small
            class="ms-2 lighten-2 xsBtnCart"
          >
            <v-icon
                color="white"
                small
            >mdi-clock</v-icon>
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
      <!-- carts menu -->
      <v-btn
        v-if="user && user.current_cart && user.current_cart.items && user.current_cart.items.length > 0"
        href="/me/current-cart"
        elevation="0"
        color="green"
        depressed
        class="ma-0 ms-1 px-5 no-letter-spacing"
        rounded
        small
      >
        صفحه پرداخت
      </v-btn>
      <v-menu
        v-if="user && user.current_cart && user.current_cart.items && user.current_cart.items.length > 0"
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
        :class="`ms-1 xsbtn ${showMediaLinks ? 'indigo darken-4': 'indigo darken-4' }`"
        @click="showMediaLinks = !showMediaLinks"
      >
        <v-icon small>
          {{ showMediaLinks ? 'mdi-chevron-up' : 'mdi-phone' }}
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-container
      :class="`${options && options.contClass ? options.contClass : 'align-start'}`"
      :fluid="options && options.fluid === false ? options.fluid : true"
      style="min-height: 50%;"
    >
      <v-row
        :align="options && options.rowAlign ? options.rowAlign : 'start'"
        :justify="options && options.rowJustify ? options.rowJustify : 'center'"
        :class="options && options.rowClass ? options.rowClass : ''"
      >
        <v-col
          cols="12"
          :class="options && options.colClass ? options.colClass : ''"
        >
          <vuetify-formjson
            v-model="formModel"
            v-bind="formSchema"
            :id="`${id}-appbar`"
          />
        </v-col>
      </v-row>
    </v-container>
    <app-footer />
  </v-main>
</template>

<script>
import FormJSONRenderer from "../Lib/vuetify-formjson/Fields/FormJSONBuilder/generator";
import { UserCartEditor, UserAwareComponent } from "./../Lib/online-academy/mixins";
import Footer from "./Footer";

export default {
    name: "PageTemplateAppBar",
    components: {
        [Footer.name]: Footer
    },
    mixins: [FormJSONRenderer, UserCartEditor, UserAwareComponent],
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
        };
    },
    computed: {
        userNameString () {
            if (this.user.profile?.data?.values?.firstname && this.user.profile?.data?.values?.lastname) {
                return this.user.profile?.data?.values?.firstname + ' ' + this.user.profile?.data?.values?.lastname;
            }

            return 'تکمیل پروفایل'
        },
        userAvatar () {
            return this.user.profile?.data?.values?.profile ?? false
        },
        links() {
            const profileFormIds = {
                support: 5,
            }
            const roles = this.user.roles.filter(i => Object.keys(profileFormIds).includes(i.name));
            console.log(roles);
            const profileFormId = roles && roles.length > 0 ?
                        (profileFormIds[roles[0].name] ? profileFormIds[roles[0].name] : '1') : '1';
            return [
                { icon: "mdi-face-profile", text: "پروفایل من", href: "/me/forms/" + profileFormId },
                {
                    icon: "mdi-onepassword",
                    text: "تغییر رمز عبور",
                    href: "/me/password"
                },
                { icon: "mdi-exit-run", text: "خروج", href: "/logout" }
            ]

        },
        profileComplete() {
            return this.user.profile?.data?.values?.firstname != null;
        },
        navs() {
            const navs = [];
            if (this.user) {
                if (this.isCustomer) {
                    navs.push({
                        icon: "mdi-desk-lamp",
                        title: "میز مطالعه من",
                        href: "/"
                    });
                }
            }
            navs.push({
                icon: "mdi-store",
                title: "کلاس‌های ۱۴۰۰",
                href: "/1400"
            });
            if (this.isAdmin) {
                navs.push({
                    icon: "mdi-alert-outline",
                    title: "پنل ادمین",
                    href: "/admin/home"
                });
            }
            navs.push({
                icon: "mdi-cart",
                title: "دوره‌های آنلاین آکادمی (محصولات)",
                href: "/home"
            });
            if (this.user) {
                if (this.isCustomer) {
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
                                    class: 'no-letter-spacing',
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
            // navs.push(
            //     ...[
            //         {
            //             icon: "mdi-police-badge",
            //             title: "قوانین و مقررات",
            //             href: "/terms"
            //         },
            //         {
            //             icon: "mdi-information",
            //             title: "درباره ما",
            //             href: "/about"
            //         }
            //     ]
            // );
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

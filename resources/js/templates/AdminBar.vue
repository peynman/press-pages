<template>
  <v-main :id="id">
    <v-app-bar color="rgba(84, 84, 84, 0.74)" app dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>آنلاین آکادمی</v-toolbar-title>
      <v-spacer></v-spacer>
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
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary right fixed style="min-width: 300px;">
      <AdminLinks :id="`${id}-links`" :groups="userGroups"></AdminLinks>
    </v-navigation-drawer>

      <v-card>
        <v-card-text>
          <vuetify-formjson v-bind="this[this.getFormSchemaPropName()]" v-model="formModel"></vuetify-formjson>
        </v-card-text>
      </v-card>
  </v-main>
</template>

<script>
import FormJSONRenderer from "../Lib/vuetify-formjson/Fields/FormJSONBuilder/generator";
import AdminLinks from "./AdminLinks.vue";

export default {
  mixins: [FormJSONRenderer],
  components: {
    AdminLinks
  },
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
      groups: [
        {
          id: "dashboards",
          title: "داشبرد ادمین",
          icon: "mdi-monitor-dashboard",
          links: [
            {
              icon: "mdi-home",
              title: "خانه ادمین",
              id: "dashboard_home",
              href: "/admin/home"
            }
          ]
        },
        {
          id: "accounts",
          icon: "mdi-account-box-multiple",
          title: "حساب‌های کاربری",
          links: [
            {
              id: "users",
              title: "کاربران",
              icon: "mdi-account",
              group: "accounts",
              extras: [
                {
                  icon: "mdi-chart-pie",
                  id: "reports",
                  color: "cyan lighten-3"
                },
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            },
            {
              id: "roles",
              title: "نقش ها",
              icon: "mdi-account-question",
              group: "accounts"
            },
            {
              id: "domains",
              title: "دامنه ها",
              icon: "mdi-domain",
              group: "accounts",
              extras: [
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            }
          ]
        },
        {
          id: "content",
          icon: "mdi-offer",
          title: "محتوای سایت",
          links: [
            {
              id: "forms",
              title: "فرم ها",
              icon: "mdi-clipboard-arrow-right",
              group: "content",
              extras: [
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            },
            {
              id: "form-entries",
              title: "فرم های پر شده",
              group: "content",
              icon: "mdi-clipboard-check-multiple"
            },
            {
              id: "pages",
              title: "صفحات سایت",
              group: "content",
              icon: "mdi-file-document",
              extras: [
                {
                  icon: "mdi-chart-pie",
                  id: "reports",
                  color: "cyan lighten-3"
                },
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            },
            {
              id: "filters",
              title: "فیلترهای سایت",
              group: "content",
              icon: "mdi-air-filter",
              extras: [
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            },
            {
              id: "file-uploads",
              title: "فایل‌های ارسالی",
              icon: "mdi-file",
              extras: [
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            }
          ]
        },
        {
          id: "products",
          icon: "mdi-widgets",
          title: "محصولات",
          links: [
            {
              id: "products",
              title: "محصولات",
              group: "products",
              icon: "mdi-widgets",
              extras: [
                {
                  icon: "mdi-chart-pie",
                  id: "reports",
                  color: "cyan lighten-3"
                },
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            },
            {
              id: "product-categories",
              title: "دسته بندی محصولات",
              icon: "mdi-selection-drag",
              group: "products",
              extras: [
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            },
            {
              id: "product-types",
              title: "انواع محصولات",
              group: "products",
              icon: "mdi-widgets-outline"
            }
          ]
        },
        {
          id: "contacts",
          icon: "mdi-contacts",
          title: "تماس و پشتیبانی",
          links: [
            {
              id: "sms-gateways",
              title: "درگاه‌های پیامکی",
              group: "contacts",
              icon: "mdi-cellphone-basic",
              extras: [
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            },
            {
              id: "sms-messages",
              title: "پیامک ها",
              group: "contacts",
              icon: "mdi-cellphone-arrow-down"
            },
            {
              id: "phone-numbers",
              title: "شماره های ثبت شده",
              group: "contacts",
              icon: "mdi-cellphone-text"
            }
          ]
        },
        {
          id: "ecommerce",
          icon: "mdi-credit-card-settings",
          title: "تجارت آنلاین",
          links: [
            {
              id: "bank-gateways",
              title: "درگاه‌های بانکی",
              group: "ecommerce",
              icon: "mdi-bank",
              extras: [
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            },
            {
              id: "bank-gateway-transactions",
              title: "تراکنش های بانک",
              group: "ecommerce",
              icon: "mdi-bank-transfer",
              extras: [
                {
                  icon: "mdi-chart-pie",
                  id: "reports",
                  color: "cyan lighten-3"
                }
              ]
            },
            {
              id: "carts",
              title: "سبد های خرید",
              icon: "mdi-cart",
              group: "ecommerce",
              extras: [
                {
                  icon: "mdi-chart-pie",
                  id: "reports",
                  color: "cyan lighten-3"
                },
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            },
            {
              id: "wallet-transactions",
              title: "تراکنش های کیف پول",
              icon: "mdi-cart-arrow-right",
              group: "ecommerce",
              extras: [
                {
                  icon: "mdi-chart-pie",
                  id: "reports",
                  color: "cyan lighten-3"
                },
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            },
            {
              id: "gift-codes",
              title: "کد هدیه",
              icon: "mdi-gift",
              group: "ecommerce",
              extras: [
                {
                  icon: "mdi-plus",
                  id: "create",
                  color: "green lighten-3"
                }
              ]
            }
          ]
        },
        {
          id: "system",
          icon: "mdi-settings",
          title: "مدیریت سیستم",
          links: [
            {
              id: "log-viewer",
              title: "لوگ سیستم",
              icon: "mdi-format-page-break",
              permission: "app.log-viewer"
            },
            {
              id: "horizon",
              title: "صف سیستم",
              icon: "mdi-format-list-checks",
              permission: "app.horizon"
            },
            {
              id: "telescope",
              title: "تلسکوپ",
              icon: "mdi-format-list-checks",
              permission: "app.telescope"
            },
            {
              id: "task-reports",
              title: "گزارش تسک‌های سیستم",
              icon: "mdi-clipboard-pulse"
            }
          ]
        }
      ],
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
    userGroups() {
      return this.groups
        .filter(g =>
          g.links
            ? g.links.filter(ig => this.isCrudAvailable(ig)).length > 0
            : this.isCrudAvailable(g)
        )
        .map(g =>
          g.links
            ? {
                ...g,
                links: g.links
                  .filter(ig => this.isCrudAvailable(ig))
                  .map(l => ({
                    ...l,
                    extras: l.extras?.filter(x =>
                      this.isCrudAvailable({
                        ...x,
                        permission: l.id + "." + x.id
                      })
                    )
                  }))
              }
            : { ...g }
        );
    }
  },
  methods: {
    isCrudAvailable: function(item) {
      const av = this.user.permissions.filter(
        permString =>
          permString.startsWith(item.permission ? item.permission : item.id) ||
          item.id.startsWith("dashboard")
      );
      return av.length > 0;
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

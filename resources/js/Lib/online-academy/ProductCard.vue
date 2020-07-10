<template>
  <v-col cols="12" lg="3" md="4" sm="6" xs="12">
    <v-lazy>
      <v-hover>
        <template v-slot:default="{hover}">
          <v-card
            class="pa-0 my-5 mx-auto rounded-product-card grey lighten-4 fill-height"
            style="position: relative"

          >
            <v-img class="white--text align-end" height="275px" :src="product.image" width="100%">
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn :href="`/products/${product.id}/details`">جزییات بیشتر</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-img>
            <v-card-title href="" style="word-break: break-word;"><a style="text-decoration: none; color: black;" :href="`/products/${product.id}/details`">{{product.title}}</a></v-card-title>
            <div class="ps-5">
              <vf-paragraph-input :field="{'readonly': true}" :value="product.subtitle"></vf-paragraph-input>
            </div>
            <v-avatar
              tile
              style="position: absolute; left: 50px; top: 260px; height:35px ; "
              size="50"
            >
              <img src="/images/logo.png" />
            </v-avatar>
            <v-card-text class="text--primary pa-0 mb-1">
              <div style="position: relative">
                <div
                  v-if="product.categories"
                  style="position: absolute; top: -15px; left: -7px; align-items: flex-end;"
                  class="d-flex flex-column"
                >
                  <p
                    class="ribbon mb-2"
                    v-for="(cat, index) in product.categories"
                    :key="`${id}-product-cats-${index}`"
                    v-show="!cat.data.dont_show"
                  >
                    <span
                      class="text px-3 py-0"
                      :style="{background: cat.data.color ? cat.data.color : '#9290DAB0', color: cat.data.dark ? cat.data.dark ? 'white':'black':'black'}"
                    >{{ cat.data.title }}</span>
                  </p>
                  <!-- <v-chip
              class="mb-1"
              dense
              v-for="(cat, index) in product.categories"
              :key="`${id}-product-cats-${index}`"
              :dark="cat.data.dark !== undefined || cat.data.dark !== null || cat.data.dark !== '' ? cat.data.dark : false"
              v-show="!cat.data.dont_show"
                  >{{ cat.data.title }}</v-chip>-->
                </div>
              </div>
              <div class="d-flex flex-column">
                <!-- teacher -->
                <div class="d-flex flex-row">
                  <v-btn
                    fab
                    small
                    elevation="0"
                    class="my-auto transparent"
                    color="deep-orange--text"
                  >
                    <v-icon class="my-0">mdi-account</v-icon>
                  </v-btn>
                  <span class="my-auto mx-2 deep-purple--text">{{product.person}}</span>
                </div>

                <!-- price -->
                <div class="d-flex flex-row">
                  <v-btn
                    fab
                    small
                    elevation="0"
                    class="transparent my-auto"
                    color="deep-orange--text"
                  >
                    <v-icon class="my-auto">mdi-cart</v-icon>
                  </v-btn>
                  <v-chip
                    dense
                    small
                    outlined
                    color="green"
                    class="mx-2 #363b5e--text my-auto"
                    style="text-decoration:none;"
                  >{{ getProductPriceString(field) }}</v-chip>
                  <v-chip
                    dense
                    dark
                    outlined
                    small
                    class="mx-2 my-auto red--text overline"
                    style="text-decoration: line-through;"
                    v-if="product.takhfif !== '' && !field.available"
                  >{{ getProductPriceOffString(field)}}</v-chip>
                </div>

                <!-- time & date -->
                <div class="d-flex flex-row">
                  <v-btn
                    fab
                    small
                    elevation="0"
                    class="transparent my-auto"
                    color="deep-orange--text"
                  >
                    <v-icon class="my-3">mdi-timeline-clock-outline</v-icon>
                  </v-btn>
                  <span class="mx-2 my-auto deep-purple--text">{{product.time}}</span>
                </div>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-badge
                color="green lighten-3 black--text"
                :content="field.data.online_class ? field.data.online_class : 'انلاین'"
                label
                overlap
                left
                offset-x="40"
                offset-y="15"
                class="ma-auto py-0 small-badge"
                :value="false"
              >
                <v-btn
                  class="my-2"
                  dark
                  rounded
                  :loading="loading"
                  @click="onProductAction()"
                  :color="actionBtnColor"
                >{{ actionBtnLabel }}</v-btn>
              </v-badge>
              <v-chip
                small
                outlined
                v-if="field.data.price_periodic && field.data.price_periodic.length > 0 && !field.available"
                class="deep-purple--text ma-auto"
              >امکان خرید اقساط</v-chip>
            </v-card-actions>
          </v-card>
        </template>
      </v-hover>
    </v-lazy>
  </v-col>
</template>

<style scoped>
.rounded-card {
  border-radius: 60px;
}
</style>

<script>
import { UserCartEditor } from "./mixins";

export default {
  mixins: [UserCartEditor],
  components: {
  },
  name: "vf-product-card-input",
  props: {
    field: Object,
    value: Object,
    id: String
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    actionBtnColor() {
      if (this.user) {
        if (this.field.available) {
          return "#57cc91";
        } else {
          let found = false;
          if (
            this.user.current_cart &&
            Array.isArray(this.user.current_cart.items)
          ) {
            this.user.current_cart.items.forEach(item => {
              if (item.id === this.product.id) {
                found = true;
              }
            });
            if (found) {
              return "#57cc91";
            }
          }
          if (!found) {
            return "#577891";
          }
        } /*  */
      } else {
        return "#577891";
      }
    },
    actionBtnLabel() {
      if (this.user) {
        if (this.field.available) {
          return "خریداری شد";
        } else {
          let found = false;
          if (
            this.user.current_cart &&
            Array.isArray(this.user.current_cart.items)
          ) {
            this.user.current_cart.items.forEach(item => {
              if (item.id === this.product.id) {
                found = true;
              }
            });
            if (found) {
              return this.field.data.added_to_cart
                ? this.field.data.added_to_cart
                : "حذف از سبد";
            }
          }
          if (!found) {
            return this.field.data.add_to_cart
              ? this.field.data.add_to_cart
              : "اضافه به سبد";
          }
        } /*  */
      } else {
        return this.field.data.signup_or_in_string
          ? this.field.data.signup_or_in_string
          : "ثبت نام";
      }
    }
  },
  methods: {
    onProductAction() {
      const host = this.$store.state.host;
      if (this.user) {
        if (this.field.available) {
        } else {
          this.toggleItemInCart(this.product);
        }
      } else {
        window.location = "/signup";
      }
    }
  },
  data() {
    // create empty product
    let product = {
      id: this.field.id,
      title: this.field.data.title,
      name: this.field.name,
      ...this.getProductPrice(this.field)
    };
    const courseProduct = this.field?.data?.types?.course;
    if (courseProduct) {
      product = {
        ...product,
        subtitle: courseProduct.paragraph,
        person: courseProduct.teacher,
        time: courseProduct.week_day + " " + courseProduct.time,
        image: courseProduct.image,
        isOnline: false,
        registered: false,
        once: this.field.data.singleSale,
        categories: this.field.categories,
        types: this.field.types,
        id: this.field.id,
        available: this.field.available
      };
    }
    return {
      product,
      loading: false
    };
  }
};
</script>

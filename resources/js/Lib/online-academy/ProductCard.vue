<template>
  <v-col cols="12" lg="3" md="4" sm="6" xs="12">
    <v-card
      class="pa-0 my-5 mx-auto rounded-product-card grey lighten-4 fill-height"
      style="position: relative"
    >
      <v-img class="white--text align-end" height="275px" :src="product.image" width="100%"></v-img>
      <v-card-title>{{product.title}}</v-card-title>
      <div class="ps-5">
        <vf-paragraph-input :field="{'readonly': true}" :value="product.subtitle"></vf-paragraph-input>
      </div>
      <v-avatar tile style="position: absolute; left: 50px; top: 260px; height:35px ; " size="50">
        <img src="/storage/images/logo.png" />
      </v-avatar>
      <v-card-text class="text--primary pa-0 mb-12">
        <div style="position: relative">
          <div
            v-if="product.categories"
            style="position: absolute; top: -15px; left: -15px; align-items: flex-end;"
            class="d-flex flex-column"
          >
            <v-chip
              class="mb-1"
              dense
              v-for="(cat, index) in product.categories"
              :key="`${id}-product-cats-${index}`"
              :color="cat.data.color ? cat.data.color : '#9290DAB0'"
              :dark="cat.data.dark !== undefined || cat.data.dark !== null || cat.data.dark !== '' ? cat.data.dark : false"
              v-show="!cat.data.dont_show"
            >{{ cat.data.title }}</v-chip>
          </div>
        </div>
        <div class="d-flex flex-column">
          <!-- teacher -->
          <div class="d-flex flex-row">
            <v-btn fab small elevation="0" class="my-auto transparent" color="deep-orange--text">
              <v-icon class="my-0">mdi-account</v-icon>
            </v-btn>
            <span class="my-auto mx-2 deep-purple--text">{{product.person}}</span>
          </div>

          <!-- price -->
          <div class="d-flex flex-row">
            <v-btn fab small elevation="0" class="transparent my-auto" color="deep-orange--text">
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
              class="mx-2 red--text overline"
              style="text-decoration: line-through;"
              v-if="product.takhfif !== ''"
            >{{product.price}}</v-chip>
          </div>

          <!-- time & date -->
          <div class="d-flex flex-row">
            <v-btn fab small elevation="0" class="transparent my-auto" color="deep-orange--text">
              <v-icon class="my-3">mdi-timeline-clock-outline</v-icon>
            </v-btn>
            <span class="mx-2 my-auto deep-purple--text">{{product.time}}</span>
          </div>
        </div>
      </v-card-text>
      <v-card-actions style="position:absolute; bottom: 0; width: 100%; min-height: 40px;">
        <v-badge
          color="green lighten-3 black--text"
          :content="field.data.online_class ? field.data.online_class : 'انلاین'"
          label
          overlap
          left
          offset-x="40"
          offset-y="15"
          class="ma-auto py-0 small-badge"
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
          class="deep-purple--text ma-auto"
        >{{ field.data.single_session ? field.data.single_session : 'تبت نام تک جلسه' }}</v-chip>
      </v-card-actions>
    </v-card>
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
        if (this.product.available) {
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
        if (this.product.available) {
          return this.field.data.access ? this.field.data.access : "نمایش";
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
        if (this.product.available) {
        } else {
          this.toggleItemInCart(this.product);
        }
      } else {
        host.onGoToPage("/signup", {});
      }
    }
  },
  data() {
    // create empty product
    let product = {
      title: this.field.data.title,
      name: this.field.name,
      ...this.getProductPrice(this.field)
    };
    const courseProduct =
      this.field && this.field.data && this.field.data.type_course;
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

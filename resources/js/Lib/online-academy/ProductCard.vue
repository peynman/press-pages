<template>
  <v-col
    cols="12"
    :lg="field.lg ? field.lg : 3"
    :md="field.md ? field.md : 4"
    :sm="field.sm ? field.sm : 6"
    :xs="field.xs ? field.xs : 12"
  >
    <v-lazy>
      <v-hover>
        <template #default="{hover}">
          <v-card
            class="pa-0 mb-5 mx-auto rounded-product-card grey lighten-4 fill-height"
            style="position: relative"
          >
            <!-- title image -->
            <v-img
              class="white--text align-end"
              height="275px"
              :src="product.image"
              width="100%"
            >
              <v-fade-transition>
                <v-overlay
                  v-if="hover && !field.noHover"
                  absolute
                  color="#036358"
                >
                  <v-btn :href="`/products/${product.id}/details`">
                    جزییات بیشتر
                  </v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-img>
            <!-- product title -->
            <v-card-title
              href=""
              style="word-break: break-word;"
            >
              <v-badge
                :value="isLive"
                :content="liveStreamsMessage"
                top
                end
                offset-y="10px"
                color="green"
              >
                <a
                  style="text-decoration: none; color: black;"
                  :href="`/products/${product.id}/details`"
                >{{ product.title }}</a>
              </v-badge>
            </v-card-title>
            <div class="ps-5">
              <vf-paragraph-input
                :field="{'readonly': true}"
                :value="product.subtitle"
              />
            </div>
            <!-- product details -->
            <v-card-text class="text--primary pa-0 mb-1">
              <ProductCategories :product="product" />
              <div class="d-flex flex-column">
                <!-- teacher -->
                <ProductTeacher :product="product" />
                <!-- time & date -->
                <ProductTime :product="product" />
                <!-- price -->
                <ProductPrice :product="product" />
              </div>
            </v-card-text>
            <ProductActions :product="product" />
          </v-card>
        </template>
      </v-hover>
    </v-lazy>
  </v-col>
</template>

<script>
import { UserCartEditor } from "./mixins";
import ProductPrice from './ProductPrice.vue';
import ProductActions from './ProductActions.vue';
import ProductTime from './ProductTime.vue';
import ProductTeacher from './ProductTeacher.vue'
import ProductCategories from './ProductCategories.vue';

export default {
    name: "VfProductCardInput",
    components: {
        ProductPrice,
        ProductActions,
        ProductTime,
        ProductTeacher,
        ProductCategories,
    },
    mixins: [UserCartEditor],
    props: {
        field: Object,
        value: Object,
        id: String
    },
    data() {
    // create empty product
        let product = {
            id: this.field.id,
            title: this.field.data.title,
            name: this.field.name,
            ...this.field,
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
            };
        }
        return {
            product,
            loading: false
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        isLive () {
            return this.product.data['live-streams'] && this.product.data['live-streams'] > 0;
        },
        liveStreamsMessage () {
            const onlines = this.product.data['live-streams'];
            return `کلاس آنلاین`;
        }
    },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 60px;
}
.product-logo {
    position: absolute; left: 50px; top: 260px; height:35px ;
}
</style>

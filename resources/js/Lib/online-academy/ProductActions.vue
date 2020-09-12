<template>
  <component
    :is="!field.compact ? 'VCardActions' : 'VCardActions'"
    :class="`justify-center ${field.compact ? 'd-flex flex-column' : ''}`"
  >
    <v-btn
      v-show="hasPrice && product.freeDetailLink && !product.noHover"
      small
      outlined
      rounded
      :href="`/products/${product.id}/details`"
      class="no-letter-spacing"
      :dense="field.compact"
    >
      مشاهده رایگان این جلسه
    </v-btn>
    <ProductPrice
      v-if="field.compact"
      :product="product"
      :field="{noIcon: true}"
    />
    <v-btn
      v-if="hasPrice"
      v-show="!isParentInCart"
      :class="field.compact ? '':'my-2'"
      dark
      rounded
      :dense="field.compact"
      :small="field.compact"
      :loading="loading"
      :color="actionBtnColor"
      @click="onProductAction()"
    >
      <span
        class="px-2"
        style="letter-spacing: 0"
      >{{ actionBtnLabel }}</span>
    </v-btn>
    <v-chip
      v-if="product.data.price_periodic && product.data.price_periodic.length > 0 && !product.available && !field.compact"
      small
      outlined
      class="deep-purple--text ma-auto"
    >
      امکان خرید اقساط
    </v-chip>
  </component>
</template>

<script>
import { UserCartEditor } from "./mixins";
import { VCardActions } from 'vuetify/lib';
import ProductPrice from './ProductPrice.vue';
export default {
    components: {
        VCardActions,
        ProductPrice,
    },
    mixins: [UserCartEditor],
    props: {
        product: Object,
        field: {
            type: Object,
            default: () => ({}),
        }
    },
    data: () => ({
        loading: false,
    }),
    computed: {
        user() {
            return this.$store.state.user;
        },
        hasPrice() {
            return this.product.data?.pricing?.length > 0
        },
        isParentInCart () {
            return this.product.parent_id != null && this.user.current_cart.items.map(i => i.id).includes(this.product.parent_id)
        },
        actionBtnColor() {
            if (this.user) {
                if (this.product.available‌‌) {
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
            }
            return "#577891";
        },
        actionBtnLabel() {
            if (this.user) {
                if (this.product.available) {
                    return "نمایش جلسات برگزارشده";
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
                            return "حذف از سبد";
                        }
                    }
                    if (!found) {
                        return "اضافه به سبد";
                    }
                } /*  */
            }
            return "ثبت نام";
        }
    },
    methods: {
        onProductAction() {
            const host = this.$store.state.host;
            if (this.user) {
                if (this.product.available) {
                    window.location = '/products/'+this.product.id+'/details';
                } else {
                    this.toggleItemInCart(this.product);
                }
            } else {
                window.location = "/signup";
            }
        }
    }
}
</script>

<template>
  <div
    v-if="hasPrice"
    class="d-flex flex-row"
    style="position: relative;"
  >
    <v-btn
      v-if="!field.noIcon"
      fab
      small
      dense
      elevation="0"
      class="transparent my-auto"
      color="deep-orange--text"
    >
      <v-icon class="my-auto">
        mdi-cart
      </v-icon>
    </v-btn>
    <v-chip
      dense
      outlined
      color="green"
      class="mx-2 #363b5e--text my-auto"
      style="text-decoration:none; overflow: visible;"
    >
      {{ getProductPriceString(product) }}
      <v-chip
        v-if="productPrice.takhfif && product.takhfif !== ''"
        dense
        dark
        x-small
        color="red"
        class="overline no-spacing"
        :style="`text-decoration: line-through; position: absolute; bottom: -12px; right: 0;`"
      >
        {{ getProductPriceOffString(product) }}
      </v-chip>
    </v-chip>
  </div>
</template>

<script>
import { UserCartEditor } from "./mixins";

export default {
    mixins: [UserCartEditor],
    props: {
        product: Object,
        field: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        productPrice () {
            return this.getProductPrice(this.product);
        },
        hasPrice() {
            return this.product.data?.pricing?.length > 0 && (!this.product.available ||  this.getProductPriceValue(this.product)?.amount == 0);
        }
    },
}
</script>

<style>
.v-chip.no-spacing .v-chip__content {
    letter-spacing: 0 !important;
}
</style>

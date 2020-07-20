<template>
  <div style="position: relative">
    <div
      v-if="product.categories"
      style="position: absolute; top: -15px; left: -7px; align-items: flex-end;"
      class="d-flex flex-column"
    >
      <p
        v-for="(cat, index) in product.categories"
        v-show="!cat.data.dont_show"
        :key="`${id}-product-cats-${index}`"
        class="ribbon mb-2"
      >
        <span
          class="text px-3 py-0"
          :style="{background: cat.data.color ? cat.data.color : '#9290DAB0', color: cat.data.dark ? cat.data.dark ? 'white':'black':'black'}"
        >{{ cat.data.title }}</span>
      </p>
    </div>
  </div>
</template>


<script>
export default {
    props: {
        product: Object,
        id: String,
    }
}
</script>

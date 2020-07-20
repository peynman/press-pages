<template>
  <div class="d-flex flex-row">
    <v-btn
      fab
      small
      elevation="0"
      class="transparent my-auto"
      color="deep-orange--text"
    >
      <v-icon class="my-3">
        mdi-timeline-clock-outline
      </v-icon>
    </v-btn>
    <span class="mx-2 my-auto deep-purple--text">{{ product.time }}</span>
  </div>
</template>

<script>
export default {
    props: {
        product: Object,
    }
}
</script>

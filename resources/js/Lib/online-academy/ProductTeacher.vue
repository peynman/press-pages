<template>
  <div class="d-flex flex-row">
    <v-btn
      fab
      small
      elevation="0"
      class="my-auto transparent"
      color="deep-orange--text"
    >
      <v-icon class="my-0">
        mdi-account
      </v-icon>
    </v-btn>
    <span class="my-auto mx-2 deep-purple--text">{{ product.person }}</span>
  </div>
</template>

<script>
export default {
    props: {
        product: Object,
    }
}
</script>

<template>
  <v-card shaped>
    <v-row class="align-center justify-center">
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <v-img
          max-width="300"
          class="ma-auto"
          src="/storage/images/logo-big.jpeg"
        />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <slot />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
    name: "VfLoginCardInput"
};
</script>

<template>
  <v-container
    class="align-start"
    fluid
  >
    <v-row
      align="start"
      justify="start"
    >
      <slot name="default" />
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'VfAppContent',
}
</script>

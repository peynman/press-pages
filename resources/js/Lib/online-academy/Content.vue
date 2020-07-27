<template>
  <v-container
    class="align-start"
    fluid
  >
    <v-row
      :align="align ? align : 'start'"
      :justify="justify ? justify : 'start'"
    >
      <slot name="default" />
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'VfAppContent',
    props: {
        justify: String,
        align: String,
    }
}
</script>

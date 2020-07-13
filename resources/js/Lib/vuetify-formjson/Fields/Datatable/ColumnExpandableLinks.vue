<template>
  <v-chip dense small>
    <v-chip class="px-1 me-2" color="secondary" small dense>#{{ item[column.id].id }}</v-chip>
    {{ item && item[column.id] ? item[column.id].name : '' }}
  </v-chip>
</template>

<script>
export default {
  name: "vf-datatable-column-expandable-links",
  props: {
    item: Object,
    column: Object
  }
};
</script>

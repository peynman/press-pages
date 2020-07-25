<template>
  <v-chip
    dense
    small
  >
    <v-chip
      class="px-1 me-2"
      color="secondary"
      small
      dense
    >
      #{{ itemID }}
    </v-chip>
    {{ itemTitle }}
  </v-chip>
</template>

<script>
export default {
    name: "VfDatatableColumnExpandableLinks",
    props: {
        item: Object,
        column: Object
    },
    computed: {
        itemID: function () {
            return this.item && this.item[this.column.id] ? this.item[this.column.id].id : '?';
        },
        itemTitle: function () {
            return this.item && this.item[this.column.id] ? this.item[this.column.id].name : '...';
        }
    }
};
</script>

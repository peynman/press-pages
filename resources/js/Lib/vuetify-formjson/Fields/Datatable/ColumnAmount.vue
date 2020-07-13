<template>
  <span>
    {{ amountString }}&nbsp;
    {{ column.currency }}
    <v-chip v-if="column.show_type" dense small>{{ typeString }}</v-chip>
  </span>
</template>

<script>
export default {
  name: "vf-datatable-column-amount",
  props: {
    item: Object,
    column: Object,
  },
  computed: {
      typeString() {
          if (parseFloat(this.item[this.column.id]) > 0) {
              return this.column.positive
          } else {
              return this.column.negative
          }
      },
      amountString () {
          return Math.abs(this.item[this.column.id]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      },
  }
};
</script>

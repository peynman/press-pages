<template>
  <span>
    {{ amountString }}&nbsp;
    {{ column.currency }}
    <v-chip v-if="column.show_type" dense small>{{ typeString }}</v-chip>
  </span>
</template>

<script>
import { EasyNestedObject } from './../mixins';

export default {
    mixins: [EasyNestedObject],
  name: "vf-datatable-column-amount",
  props: {
    item: Object,
    column: Object,
  },
  computed: {
      typeString() {
          if (parseFloat(this.getNestedPathValue(this.item, this.column.id)) > 0) {
              return this.column.positive
          } else {
              return this.column.negative
          }
      },
      amountString () {
          return Math.abs(this.getNestedPathValue(this.item, this.column.id)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      },
  }
};
</script>

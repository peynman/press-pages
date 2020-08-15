<template>
  <span>
    {{ amountString }}&nbsp;
    <v-chip
      v-if="column.show_type"
      dense
      small
    >{{ typeString }}</v-chip>
  </span>
</template>

<script>
import { EasyNestedObject } from './../mixins';

export default {
    name: "VfDatatableColumnAmount",
    mixins: [EasyNestedObject],
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
            const val = this.getNestedPathValue(this.item, this.column.id);
            if (val) {
                const v = Math.abs(this.getNestedPathValue(this.item, this.column.id));
                if (isNaN(v)) {
                    return this.getNestedPathValue(this.item, this.column.id);
                }
                return v.toLocaleString('fa-IR').replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ' + this.column.currency
            } else {
                return this.column.emptyMessage ? this.column.emptyMessage : '';
            }
        },
    }
};
</script>

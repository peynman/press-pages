<template>
  <v-chip
    dense
    small
    color="primary lighten-1"
    @click="onClick"
    dark
  >
    <v-chip
      v-if="isObject"
      class="px-1 me-2"
      color="primary lighten-2"
      small
      dense
    >
      #{{ itemID }}
    </v-chip>
    {{ isObject ? itemTitle : '#'+itemID }}
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
        isObject () {
            return this.item && (typeof this.item[this.column.id] === 'object') ? true: false;
        },
        itemID: function () {
            if (this.item && this.item[this.column.id]) {
                if (this.item[this.column.id].id) {
                    return this.item[this.column.id].id;
                } else {
                    return this.item[this.column.id];
                }
            }
            return '#'
        },
        itemTitle: function () {
            return this.item && this.item[this.column.id] ? this.item[this.column.id].name : '';
        }
    },
    methods: {
        onClick () {
            this.$emit('on-event', 'expand', [this.item, this.column])
        }
    }
};
</script>

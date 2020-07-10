<template>
  <div>
    <v-chip
      dense
      small
      v-for="(l, index) in list"
      :key="`${id}-list-${column.id}-${index}`"
    >{{ typeof l === 'object' ? getDecorableLabel(l) : list[l] }}</v-chip>
  </div>
</template>

<script>
import { EasyNestedObject } from "./../mixins";
export default {
  mixins: [EasyNestedObject],
  name: "vf-datatable-column-hover-links",
  props: {
    id: String,
    item: Object,
    column: Object
  },
  computed: {
    list() {
      const list = this.getNestedPathValue(this.item, this.column.id);
      if (Array.isArray(list) === false) {
        const arrList = [];
        for (const prop in list) {
          if (list[prop]) {
            arrList.push({
              id: prop
            });
          }
        }
        return arrList;
      }

      return list;
    },
    decorator: function() {
      const props = {};
      if (this.column.decorator && this.column.decorator.labels) {
        const labels = this.column.decorator.labels.split(",");
        for (const l in labels) {
          props[labels[l]] = labels[l];
        }
      }
      return {
        id: "id",
        title: "title",
        label: "#:id",
        ...props,
        ...this.column.decorator
      };
    }
  },
  methods: {
    getDecorableLabel: function(item) {
      return this.getDecorableProperty(item, "label");
    },

    getDecorableProperty: function(item, property) {
      const decorator = this.decorator;
      const getNestedPathValue = function(item, path) {
        const parts = path.split(".");
        let val = item;
        parts.forEach(p => {
          if (val) {
            val = val[p];
          }
        });
        return val;
      };
      let label = decorator[property];
      for (const prop in decorator) {
        label = label.replace(
          ":" + prop,
          getNestedPathValue(item, decorator[prop])
        );
      }
      return label;
    }
  }
};
</script>

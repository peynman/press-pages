<template>
  <vf-fields-renderer :fields="fields" :options="options"></vf-fields-renderer>
</template>

<script>
import clonedeep from "lodash.clonedeep";

export default {
  name: "vf-datatable-column-actions",
  props: {
    item: Object,
    column: Object
  },
  computed: {
    fields() {
      return this.columnInstance.actions;
    },

    options() {
      return {
        type: "row"
      };
    }
  },
  data() {
    const clone = clonedeep(this.column);
    const iterateForVOn = ref => {
      for (const prop in ref) {
        if (prop === "v-on") {
          const events = ref[prop];
          for (const event in events) {
            const handle = events[event];
            events[event] = e => {
              handle(this.item, this.column, e);
            };
          }
        } else if (typeof ref[prop] === "object") {
          iterateForVOn(ref[prop]);
        }
      }
    };
    iterateForVOn(clone.actions);

    return {
      columnInstance: clone
    };
  },
  mounted() {
    // call before-render on column if present
    if (this.columnInstance.props && this.columnInstance.props["v-on"]) {
      if (this.columnInstance.props["v-on"]["before-render"]) {
        this.columnInstance.props["v-on"]["before-render"](
          this.item,
          this.columnInstance
        );
      }
    }
  }
};
</script>

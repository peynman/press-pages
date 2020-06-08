<template>
  <vf-fields-renderer :fields="fields" :options="options"></vf-fields-renderer>
</template>

<script>
import clonedeep from 'lodash.clonedeep'

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
  data () {
      return {
          columnInstance: clonedeep(this.column)
      }
  },
  mounted() {
      // call before-render on column if present
    if (this.columnInstance.props && this.columnInstance.props["v-on"]) {
      if (this.columnInstance.props["v-on"]["before-render"]) {
        this.columnInstance.props["v-on"]["before-render"](this.item, this.columnInstance);
      }
    }
  }
};
</script>

<template>
  <div :class="`vf-input d-flex flex-column flex-grow-1 ${field.class ? field.class:''}`">
    <v-alert
      v-model="alert.show"
      :type="alert.type"
      :color="alert.color"
      dense
      transition="slide-y-transition"
      dismissible
      class
    >{{ alert.message }}</v-alert>
    <v-toolbar dense flat class="ma-0 pa-0">
      <v-btn
        icon
        small
        color="secondary"
        @click="showFilters = !showFilters"
        v-if="field.crud && field.crud.filter && !field['hide-filters']"
      >
        <v-icon small>mdi-filter-plus-outline</v-icon>
      </v-btn>
      <vf-datatable-dialog-create
        v-if="((field.crud && field.crud.create) || (field.table && field.table['create-url'])) && !field['hide-create']"
        :field="field.crud.create"
        :url="field.table && field.table['create-url'] ? field.table['create-url'] : null"
        :forceShow="showCreate"
        :edit-mode="editMode"
        v-model="createModel"
        @on-create="onCreateNew"
        @on-cancel="onCancelNew"
        @on-update="onUpdateNew"
      ></vf-datatable-dialog-create>
      <v-btn
        icon
        small
        :color="showSearch ? 'warning' : 'secondary'"
        @click="showSearch = !showSearch"
        v-if="!field['hide-search']"
      >
        <v-icon small>{{ showSearch ? 'mdi-close' : 'mdi-card-search' }}</v-icon>
      </v-btn>
      <v-btn
        icon
        small
        color="secondary"
        :loading="loading"
        v-if="!showSearch && field.table && field.table.query"
        @click="updateTable()"
      >
        <v-icon small>mdi-refresh</v-icon>
      </v-btn>
      <label v-if="!showSearch">{{field.label}}</label>
      <v-text-field
        v-show="showSearch && !field['hide-search']"
        dense
        ref="searchField"
        v-model="search"
        clearable
        hide-details
        placeholder="Search..."
      ></v-text-field>
      <vf-datatable-dialog-delete
        v-if="selected.length > 0 && !field['hide-remove']"
        :showDelete="showDelete"
        :field="field"
        :selected="selected"
        @accept="onRemoveSelected()"
      ></vf-datatable-dialog-delete>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="devalue"
      :search="search"
      :expanded.sync="expanded"
      :server-items-length="total"
      :options.sync="options"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :loading="loading"
      selectable-key
      v-model="selected"
      v-bind="fieldProps"
      @click:row="onToggleItem"
      v-on="eventHandlers"
    >
      <template v-slot:item.data-table-select="{item, isSelected, select}">
        <v-simple-checkbox class="d-inline" :value="isSelected" @input="select($event)"></v-simple-checkbox>
        <v-btn
          v-if="!field['hide-remove']"
          icon
          x-small
          color="red"
          @click="onRemoveSelected(item)"
        >
          <v-icon x-small>mdi-playlist-remove</v-icon>
        </v-btn>
        <v-btn v-if="!field['hide-edit']" icon x-small @click="onOpenEditDialog(item)">
          <v-icon x-small>mdi-playlist-edit</v-icon>
        </v-btn>
      </template>
      <template v-for="template in templates" v-slot:[getTemplateSlot(template)]="{item}">
        <component
          :is="template.component"
          :key="`${id}-${template.column.id}`"
          :item="item"
          :column="template.column"
        ></component>
      </template>
      <template v-for="header in headers" v-slot:[getHeaderSlot(header)]="{}">{{ header.text }}</template>
    </v-data-table>
  </div>
</template>

<script>
import VFSettingsDialog from "./Datatable/SettingsDialog.vue";
import VFDeleteDialog from "./Datatable/DeleteDialog.vue";
import VFCreateDialog from "./Datatable/CreateDialog.vue";
import BaseComponent from "./mixins";
import {
  VDataTable,
  VBtn,
  VIcon,
  VSimpleCheckbox,
  VToolbar,
  VSpacer,
  VAlert
} from "vuetify/lib";

import ColumnSimple from "./Datatable/ColumnSimple.vue";
import ColumnActions from "./Datatable/ColumnActions.vue";
import ColumnNestedObject from "./Datatable/ColumnNestedObject.vue";
import ColumnExpandableLinks from "./Datatable/ColumnExpandableLinks.vue";

export default {
  mixins: [BaseComponent],
  components: {
    VDataTable,
    VBtn,
    VIcon,
    VSimpleCheckbox,
    VToolbar,
    VSpacer,
    VAlert,
    [VFSettingsDialog.name]: VFSettingsDialog,
    [VFDeleteDialog.name]: VFDeleteDialog,
    [VFCreateDialog.name]: VFCreateDialog,
    ColumnSimple,
    ColumnActions,
    ColumnExpandableLinks
  },
  name: "vf-datatable-input",
  props: {
    field: Object,
    id: String,
    value: {
      type: Array,
      default: () => []
    }
  },
  data: vm => ({
    createModel: {},
    showAlert: false,
    showDelete: false,
    showCreate: false,
    showSearch: false,
    showFilters: false,
    loading: false,
    editMode: false,
    loadingId: 0,
    search: "",
    selected: [],
    expanded: [],
    options: {},
    total: vm.value.length,
    response: null,
    sortBy: null,
    sortDesc: null,
    expandTemplate: null,
    expandTemplateDefaultMetadata: null
  }),
  computed: {
    headers: function() {
      const headers = [];
      if (this.field.columns) {
        for (const indexer in this.field.columns) {
          const h = this.field.columns[indexer];
          headers.push({
            text: h.label,
            value: h.id,
            align: h.align || "start",
            sortable: h.sortable,
            divider: true,
            width: h.width
          });
        }
      }
      return headers;
    },
    templates: function() {
      const templates = [];
      if (this.field.columns) {
        for (const indexer in this.field.columns) {
          const h = this.field.columns[indexer];
          const template = {
            component: ColumnSimple,
            column: h
          };
          switch (h.type) {
            case "actions":
              template.component = ColumnActions;
              break;
            case 'nested-object':
              template.component = ColumnNestedObject;
              break;
            case "expan-list":
              template.component = ColumnExpandableLinks;
              break;
            default:
              break;
          }

          templates.push(template);
        }
      }
      return templates;
    },
    alert: function() {
      if (!this.response) {
        return {
          show: false
        };
      }

      return {
        show: this.response.status !== 200,
        color: this.response.status === 200 ? "blue-grey darken-1 " : "error",
        type: this.response.status !== 200 ? "error" : "success",
        message: this.response.data.message
          ? this.response.data.message
          : this.response.error,
        messages: this.response.data.errors
      };
    }
  },
  methods: {
    updateTable() {
      const sort = [];
      this.options.sortBy.forEach((s, index) => {
        sort.push({
          column: s,
          direction: this.options.sortDesc[index] ? "desc" : "asc"
        });
      });
      if (sort.length === 0 && this.field.columns.id) {
          sort.push({
          column: 'id',
          direction: "desc"
        });
      }

      if (this.field.table && this.field.table.query) {
        const headers = {
          Accept: "application/json",
          "Content-Type": "application/json"
        };
        if (
          this.$store &&
          this.$store.state.tokens &&
          this.$store.state.tokens.api
        ) {
          headers["Authorization"] = "Bearer " + this.$store.state.tokens.api;
        }

        this.loading = true;
        this.loadingId += 1;
        this.axios({
          url: this.field.table.query.url,
          method: "POST",
          headers,
          data: {
            ref_id: this.loadingId,
            page: this.options.page,
            limit: this.options.itemsPerPage,
            search: this.search,
            sort: sort,
            with: this.field.table.query.relations
              ? this.field.table.query.relations
              : []
          }
        })
          .then(response => {
            this.response = response;
            if (response.data.data && this.loadingId <= response.data.ref_id) {
              this.total = response.data.total;
              this.devalue = response.data.data;
            }
          })
          .catch(error => {
            this.response = error.response;
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        this.total = this.devalue.length;
        for (let item in this.devalue) {
          if (!this.devalue[item].id) {
            this.devalue[item].id =  "id#" + Math.random() * Number.MAX_SAFE_INTEGER
              "id#" + Math.random() * Number.MAX_SAFE_INTEGER;
          }
        }
      }
    },
    getTemplateSlot(template) {
      if (template && template.slot) {
        return template.slot;
      }

      return "item." + template.column.id;
    },
    getHeaderSlot(header) {
      return "header." + header.value;
    },
    onToggleItem(item) {
      this.toggleArray(this.expanded, item);
      // this.expandTemplate.params.metadata = this.expandTemplateDefaultMetadata;
    },
    onCloseItem(target) {
      this.putOffArray(this.expanded, target.item);
    },
    onExpandItem(target) {
      this.putOnArray(this.expanded, target.item);
      this.expandTemplate.params.metadata = target.link.metadata;
    },
    onRemoveSelected(item) {
      if (!item) {
        const self = this;
        this.devalue = this.devalue.filter(
          item => self.selected.filter(s => s.id === item.id).length === 0
        );
      } else {
        this.devalue = this.devalue.filter(i => i.id !== item.id);
      }
      this.selected = [];
    },
    onCreateNew() {
      this.devalue.unshift({
        id: "id#" + Math.random() * Number.MAX_SAFE_INTEGER,
        ...this.createModel
      });
      this.showCreate = false;
    },
    onUpdateNew() {
      this.devalue.forEach(item => {
        if (item.id === this.createModel.id) {
          for (const prop in this.createModel) {
            item[prop] = this.createModel[prop];
          }
        }
      });
      this.editMode = false;
      this.showCreate = false;
    },
    onCancelNew() {
      this.showCreate = false;
      this.editMode = false;
    },
    onOpenEditDialog(item) {
      this.createModel = Object.assign({}, item);
      this.editMode = true;
      this.showCreate = true;
    },
    toggleArray(arr, item) {
      const index = arr.indexOf(item);
      if (index >= 0) {
        arr.splice(index, 1);
      } else {
        arr.push(item);
      }
    }
  },
  watch: {
    devalue: {
      deep: true,
      handler() {
        this.$emit("input", this.devalue);
        if (!this.field.table || !this.field.table.query) {
          this.total = this.devalue.length;
        }
      }
    },
    showCreate: function() {},
    search: function(o, n) {
      this.updateTable();
    },
    options: {
      deep: true,
      handler() {
        this.updateTable();
      }
    },
    selected: {
      deep: true,
      handler() {}
    },
    showSearch() {
      if (this.showSearch) {
        this.$nextTick(() => {
          this.$refs.searchField.focus();
        });
      }
    }
  },
  mounted() {
    this.updateTable();
  }
};
</script>

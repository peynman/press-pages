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
    >
      {{ alert.message }}
    </v-alert>
    <v-toolbar
      dense
      flat
      class="ma-0 pa-0"
    >
      <v-btn
        v-if="!field['hide-settings']"
        x-small
        icon
        :color="showSettings ? 'warning':'secondary'"
        @click="showSettings = !showSettings"
      >
        <v-icon small>
          {{ showSettings ? 'mdi-close' : 'mdi-format-header-1' }}
        </v-icon>
      </v-btn>
      <v-btn
        v-if="field.crud && field.crud.filters && !field['hide-filters']"
        icon
        small
        :color="showFilters ? 'warning':'secondary'"
        @click="showFilters = !showFilters"
      >
        <v-icon small>
          {{ showFilters ? 'mdi-close' : 'mdi-filter-plus-outline' }}
        </v-icon>
      </v-btn>
      <v-btn
        v-if="field.table && field.table['reports-url']"
        x-small
        icon
        :href="field.table['reports-url']"
      >
        <v-icon small>
          mdi-chart-pie
        </v-icon>
      </v-btn>
      <vf-datatable-dialog-create
        v-if="((field.crud && field.crud.create) || (field.table && field.table['create-url'])) && !field['hide-create']"
        v-model="createModel"
        :field="field.crud.create"
        :url="field.table && field.table['create-url'] ? field.table['create-url'] : null"
        :force-show="showCreate"
        :edit-mode="editMode"
        @on-create="onCreateNew"
        @on-cancel="onCancelNew"
        @on-update="onUpdateNew"
      />
      <v-btn
        v-if="!field['hide-search']"
        icon
        small
        :color="showSearch ? 'warning' : 'secondary'"
        @click="showSearch = !showSearch"
      >
        <v-icon small>
          {{ showSearch ? 'mdi-close' : 'mdi-card-search' }}
        </v-icon>
      </v-btn>
      <v-btn
        v-if="!showSearch && field.table && field.table.query"
        icon
        small
        color="secondary"
        :loading="loading"
        @click="updateTable()"
      >
        <v-icon small>
          mdi-refresh
        </v-icon>
      </v-btn>
      <label v-if="!showSearch">{{ field.label }}</label>
      <v-text-field
        v-show="showSearch && !field['hide-search']"
        ref="searchField"
        v-model="search"
        dense
        clearable
        hide-details
        placeholder="Search..."
        @keyup.native="updateSearch($event)"
      />
      <vf-datatable-dialog-delete
        v-if="selected.length > 0 && !field['hide-remove']"
        :show-delete="showDelete"
        :field="field"
        :selected="selected"
        @accept="onRemoveSelected()"
      />
    </v-toolbar>
    <v-expand-transition>
      <v-card
        v-show="showSettings"
        flat
        class="mb-2"
      >
        <v-divider />
        <vf-fields-renderer
          v-model="customSettings"
          :value="customSettings"
          :fields="tableSettingsFields"
          :options="tableSettingsOptions"
        />
        <v-divider />
        <v-card-actions class="d-flex flex-row justify-start">
          <v-spacer />
          <v-btn
            :color="settingsSavedRecently ? 'green':'secondary'"
            outlined
            small
            dense
            class="my-auto"
            @click="saveSettings()"
          >
            ذخیره تنظیمات
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
    <v-expand-transition v-if="field.crud && field.crud.filters">
      <v-card
        v-show="showFilters"
        flat
        class="mb-2"
      >
        <v-divider />
        <vf-fields-renderer
          v-model="customFilters"
          :value="customFilters"
          :fields="field.crud.filters.fields"
          :options="field.crud.filters.options"
        />
        <v-divider />
        <v-card-actions class="d-flex flex-row justify-start">
          <v-btn
            color="primary"
            :disabled="loading"
            outlined
            small
            dense
            class="my-auto"
            @click="updateTable()"
          >
            اعمال فیلتر
          </v-btn>
          <v-btn
            color="warning"
            :disabled="loading"
            outlined
            small
            dense
            class="my-auto"
            @click="resetFilters()"
          >
            حذف فیلتر‌ها
          </v-btn>
          <v-spacer />
          <v-btn
            v-if="field.table['export-url']"
            color="secondary"
            :disabled="loading"
            :loading="exportLoading"
            outlined
            small
            dense
            class="my-auto"
            @click="downloadExport()"
          >
            دانلود کامل گزارش
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
    <v-data-table
      v-model="selected"
      :expanded.sync="expanded"
      :options.sync="options"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :headers="headers"
      :items="devalue"
      :search="search"
      :server-items-length="total"
      :loading="loading"
      :footer-props="{
        'items-per-page-options': [5, 10, 15, 30, 50, 100, 200]
      }"
      :items-per-page="100"
      selectable-key
      v-bind="fieldProps"
      @click:row="onToggleItem"
      v-on="eventHandlers"
    >
      <template v-slot:item.data-table-select="{item, isSelected, select}">
        <v-simple-checkbox
          class="d-inline"
          :value="isSelected"
          @input="select($event)"
        />
        <v-btn
          v-if="!field['hide-remove']"
          icon
          x-small
          color="red"
          @click="onRemoveSelected(item)"
        >
          <v-icon x-small>
            mdi-playlist-remove
          </v-icon>
        </v-btn>
        <v-btn
          v-if="!field['hide-edit']"
          icon
          x-small
          @click="onOpenEditDialog(item)"
        >
          <v-icon x-small>
            mdi-playlist-edit
          </v-icon>
        </v-btn>
      </template>
      <template
        v-for="template in templates"
        #[getTemplateSlot(template)]="{item}"
      >
        <component
          :is="template.component"
          :key="`${id}-${template.column.id}`"
          :item="item"
          :column="template.column"
        />
      </template>
      <template
        v-for="header in headers"
        #[getHeaderSlot(header)]="{}"
      >
        {{ header.text }}
      </template>
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
import ColumnHoverList from "./Datatable/ColumnHoverList.vue";
import ColumnDatetime from "./Datatable/ColumnDatetime.vue";
import ColumnAmount from "./Datatable/ColumnAmount.vue";
import ColumnObjectsMap from './Datatable/ColumnObjectsMap.vue';

export default {
    name: "VfDatatableInput",
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
        ColumnExpandableLinks,
        ColumnObjectsMap,
    },
    mixins: [BaseComponent],
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
        showSettings: false,
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
        expandTemplateDefaultMetadata: null,
        customFilters: {},
        customSettings: {},
        exportLoading: false,
    }),
    computed: {
        headers: function() {
            const headers = [];
            if (this.field.columns) {
                for (const indexer in this.field.columns) {
                    const h = this.field.columns[indexer];
                    if (this.customSettings && this.customSettings.hidden && this.customSettings.hidden[h.id]) {
                        continue;
                    }
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
                    case "nested-object":
                        template.component = ColumnNestedObject;
                        break;
                    case "expan-list":
                        template.component = ColumnExpandableLinks;
                        break;
                    case "hover-list":
                        template.component = ColumnHoverList;
                        break;
                    case "datetime":
                        template.component = ColumnDatetime;
                        break;
                    case "amount":
                        template.component = ColumnAmount;
                        break;
                    case 'objects-map':
                        template.component = ColumnObjectsMap;
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
        },
        tableSettingsFields () {
            const fields = {};
            if (this.field.columns) {
                const objects = [];
                for (const indexer in this.field.columns) {
                    const c = this.field.columns[indexer];
                    objects.push({
                        id: c.id,
                        title: c.label,
                    });
                }
                fields.hidden = {
                    type: 'input',
                    label: 'حذف نمایش سطون',
                    input: 'objects-list',
                    objects: objects,
                    decorator: {
                        label: ':title'
                    }
                }

            };
            return fields;
        },
        tableSettingsOptions () {
            return {
                type: 'col',
            }
        },
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
        if (this.field.table?.query?.url) {
            const settings = JSON.parse(localStorage.getItem('crud.datatable.' + this.field.table.query.url));
            if (settings) {
                this.customSettings = settings;
            }
        }
        this.updateTable();
    },
    methods: {
        downloadExport() {
            this.exportLoading = true;
            const sort = [];
            this.sortBy?.forEach((s, index) => {
                sort.push({
                    column: s,
                    direction: this.options.sortDesc[index] ? "desc" : "asc"
                });
            });
            if (sort.length === 0 && this.field.columns.id) {
                sort.push({
                    column: "id",
                    direction: "desc"
                });
            }
            const host = this.$store.state.host;
            this.axios({
                url: this.field.table['export-url'],
                method: 'POST',
                headers: host.getWebAuthHeaders({}),
                responseType: 'blob',
                data: {
                    ref_id: this.loadingId,
                    filters: this.customFilters,
                    sort: sort,
                    with: this.field.table.query.relations
                        ? this.field.table.query.relations
                        : [],
                    appends: this.field.table.query.appends ? this.field.table.query.appends : [],
                }
            }).then(response => {
                this.exportLoading = false;
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(new Blob([response.data]));
                a.href = url;
                a.download = 'datatable.csv';
                document.body.append(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            }).catch((err) => {
                this.exportLoading = false;
                console.log(err);
                host.showSnack(err.message);
            });
        },
        updateTable() {
            const sort = [];
            this.sortBy?.forEach((s, index) => {
                sort.push({
                    column: s,
                    direction: this.options.sortDesc[index] ? "desc" : "asc"
                });
            });
            if (sort.length === 0 && this.field.columns.id) {
                sort.push({
                    column: "id",
                    direction: "desc"
                });
            }

            if (this.field.table && this.field.table.query) {
                const host = this.$store.state.host;
                this.loading = true;
                this.loadingId += 1;
                this.axios({
                    url: this.field.table.query.url,
                    method: "POST",
                    headers: host.getWebAuthHeaders({
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }),
                    data: {
                        ref_id: this.loadingId,
                        page: this.options.page,
                        limit: this.options.itemsPerPage,
                        search: this.search,
                        filters: this.customFilters,
                        sort: sort,
                        with: this.field.table.query.relations
                            ? this.field.table.query.relations
                            : [],
                        appends: this.field.table.query.appends ? this.field.table.query.appends : [],
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
                        this.devalue[item].id =
              "id#" + Math.random() * Number.MAX_SAFE_INTEGER;
                        "id#" + Math.random() * Number.MAX_SAFE_INTEGER;
                    }
                }
            }
        },
        resetFilters() {
            this.customFilters = {};
            this.updateTable();
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
        },
        updateSearch(ev) {
            if (ev.keyCode === 13) {
                this.updateTable();
            }
        },
        saveSettings() {
            if (this.field.table?.query?.url) {
                localStorage.setItem('crud.datatable.' + this.field.table.query.url, JSON.stringify(this.customSettings));
                this.settingsSavedRecently = true;
            }
        }
    }
};
</script>

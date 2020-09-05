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
    <!-- Table Toolbar -->
    <!-- Table Settings -->
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
            class="my-auto no-letter-spacing"
            @click="saveSettings()"
          >
            ذخیره تنظیمات
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
    <!-- Table Forms -->
    <v-expand-transition>
      <v-card
        v-show="showForms"
        flat
        class="mb-2"
      >
        <v-tabs optional centered>
            <v-tabs-slider />
            <v-tab
                v-for="(act, actId) in field.forms"
                :key="`${id}-actions-tab-${actId}`"
                :href="`#${id}-actions-${actId}`"
                class="no-letter-spacing"
            >
                {{ act.label }}
            </v-tab>
            <v-tab-item
                v-for="(act, actId) in field.forms"
                :key="`${id}-actions-item-${actId}`"
                :value="`${id}-actions-${actId}`"
            >
                <vf-fields-renderer
                    :id="`${id}-actions-${actId}-fields`"
                    v-model="customForms[actId]"
                    :value="customForms[actId]"
                    :options="act.options"
                    :fields="getFormFields(actId, act.fields)"
                />
            </v-tab-item>
        </v-tabs>
      </v-card>
    </v-expand-transition>
    <!-- CRUD Filters -->
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
            class="my-auto no-letter-spacing"
            @click="updateFilters()"
          >
            اعمال فیلتر
          </v-btn>
          <v-btn
            color="warning"
            :disabled="loading"
            outlined
            small
            dense
            class="my-auto no-letter-spacing"
            @click="resetFilters()"
          >
            حذف فیلتر‌ها
          </v-btn>
          <v-spacer />
          <v-btn
            :color="filtersSavedRecently ? 'green':'secondary'"
            outlined
            small
            dense
            class="my-auto no-letter-spacing"
            @click="saveFilters()"
          >
            ذخیره فیلتر‌
          </v-btn>
          <v-btn
            v-if="field.table['export-url']"
            color="secondary"
            :disabled="loading"
            :loading="exportLoading"
            outlined
            small
            dense
            class="my-auto no-letter-spacing"
            @click="downloadExport()"
          >
            دانلود کامل گزارش
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
    <!-- Datatable -->
    <v-data-table
      v-model="selected"
      :expanded.sync="expanded"
      :options.sync="options"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :headers="headers"
      :items="devalue"
      :item-class= "getRowClass"
      :search="search"
      :server-items-length="total"
      :loading="loading"
      :footer-props="{
        'items-per-page-options': [5, 10, 15, 30, 50, 100, 200]
      }"
      :hide-default-footer="true"
      :items-per-page="30"
      selectable-key
      v-bind="datatableProps"
      @click:row="onToggleItem"
      v-on="eventHandlers"
    >
      <template v-slot:top>
            <v-toolbar
                dense
                flat
                class="ma-0 pa-0"
                >
                <v-btn
                    v-if="!field['hide-settings'] && field.table && field.table.query"
                    x-small
                    icon
                    :color="showSettings ? 'warning':'secondary'"
                    @click="showSettings = !showSettings"
                >
                    <v-icon small>
                    {{ showSettings ? 'mdi-close' : 'mdi-settings' }}
                    </v-icon>
                </v-btn>
                <v-btn
                    v-if="hasForm"
                    x-small
                    icon
                    :color="showForms ? 'warning':'secondary'"
                    @click="showForms = !showForms"
                >
                    <v-icon small>{{ showForms ? 'mdi-close':'mdi-check-box-outline'}}</v-icon>
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
                <vf-datatable-dialog-create
                    v-if="showCreateButton"
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
                    v-if="showReportsButton"
                    x-small
                    icon
                    :href="field.table['reports-url']"
                >
                    <v-icon small>
                    mdi-chart-pie
                    </v-icon>
                </v-btn>
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
                <v-spacer></v-spacer>
                <v-btn
                    v-if="customFilters && hasFilters && !field['hide-removable-filters']"
                    small
                    outlined
                    color="warning"
                    @click="resetFilters()"
                    class="my-auto no-letter-spacing"
                >
                    نمایش بدون فیلتر جدول
                </v-btn>
                <vf-datatable-dialog-delete
                    v-if="selected.length > 0 && !field['hide-remove'] && (!field.table || !field.table.query)"
                    :show-delete="showDelete"
                    :field="field"
                    :selected="selected"
                    @accept="onRemoveSelected()"
                />
                </v-toolbar>
      </template>
      <template v-slot:item.data-table-select="{item, isSelected, select}">
        <div class="d-flex flex-row justify-center align-center">
            <v-simple-checkbox
            class="d-inline"
            :value="isSelected"
            @input="select($event)"
            />
            <v-btn
            v-if="!field['hide-remove'] && (!field.table || !field.table.query)"
            icon
            x-small
            color="red"
            class="d-inline"
            @click="onRemoveSelected(item)"
            >
            <v-icon x-small>
                mdi-playlist-remove
            </v-icon>
            </v-btn>
            <v-btn
            v-if="!field['hide-edit'] && (!field.table || !field.table.query)"
            icon
            x-small
            class="d-inline"
            @click="onOpenEditDialog(item)"
            >
            <v-icon x-small>
                mdi-playlist-edit
            </v-icon>
            </v-btn>
        </div>
      </template>
      <template
        v-for="template in templates"
        #[`item.${template.column.id}`]="{item}"
      >
      <td :colspan="1" class="pa-0 ma-0">
        <component
          :is="template.component"
          :key="`${id}-${template.column.id}`"
          :item="item"
          :column="template.column"
          @on-event="template.onEvent"
        />
      </td>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="colSpans" class="pa-0 ma-0" style="background: white;">
            <component
                v-if="item.expand"
                :is="item.expand.component"
                :key="`${id}-expand-${item.id}`"
                :id="`${id}-expand-${item.id}`"
                :field="item"
            />
        </td>
      </template>
      <template
        v-for="header in headers"
        #[getHeaderSlot(header)]="{}"
      >
        {{ header.text }}
      </template>
      <template v-slot:footer="{props}">
        <div class="d-flex flex-row justify-center">
            <span class="mx-2 my-auto">نمایش</span>
            <v-select
                :disabled="totalPages == 0"
                v-model="options.itemsPerPage"
                :items="[5, 10, 30, 50, 100, 200]"
                solo
                dense
                small
                :hide-details="true"
                class="col-1 my-auto x-dense"
            ></v-select>
            <span class="mx-2 my-auto">رکورد در صفحه</span>
            <v-pagination class="my-auto" v-model="options.page" :length="totalPages" :total-visible="customSettings.vis_pages ? customSettings.vis_pages:10"></v-pagination>
            <span class="mx-2 my-auto">از مجموع {{ total }} رکورد</span>
        </div>
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
import ColumnBitwiseFlags from './Datatable/ColumnBitwiseFlags.vue';

import clonedeep from "lodash.clonedeep";

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
        ColumnBitwiseFlags
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
    data: vm => {
        const customForms = {};
        if (vm.field.forms) {
            for (const actid in vm.field.forms) {
                customForms[actid] = {}
            }
        }

        let customFilters = vm.field['default-filters'] ?? {};
        let customSettings = {}
        if (vm.field.table?.query?.url) {
            const settings = JSON.parse(localStorage.getItem('crud.datatable.' + vm.field.table.query.url));
            if (settings) {
                customSettings = settings;
            }

            if (! vm.field['default-filters']) {
                const filters = JSON.parse(localStorage.getItem('crud.datatable.filters.' + vm.field.table.query.url));
                if (filters && Object.keys(filters).length > 0) {
                    customFilters = filters;
                }
            }
        }

        var urlParams = new URLSearchParams(window.location.search);
        let page = urlParams.has('page') && !isNaN(parseInt(urlParams.get('page'))) && !hasFilters ? parseInt(urlParams.get('page')) : 1

        let hasFilters = false;
        if (! vm.field['default-filters']) {
            Object.keys(customFilters).forEach((k) => {
                if (customFilters[k]) {
                    if (Array.isArray(customFilters[k]) && customFilters[k].length > 0) {
                    } else if (typeof customFilters[k] === 'object') {
                        if (Object.keys(customFilters[k]).length > 0) {
                            hasFilters = true;
                        }
                    } else {
                        hasFilters = true;
                    }
                }
            })
        } else {
            // we are in default filters mode
            page = 0;
        }

        return {
            createModel: {},
            showAlert: false,
            showDelete: false,
            showCreate: false,
            showSearch: false,
            showFilters: false,
            showSettings: false,
            showForms: false,
            settingsSavedRecently: false,
            filtersSavedRecently: false,
            loading: false,
            editMode: false,
            loadingId: 0,
            search: "",
            selected: [],
            expanded: [],
            total: vm.value.length,
            totalPages: 0,
            response: null,
            sortBy: null,
            sortDesc: null,
            expandTemplate: null,
            expandTemplateDefaultMetadata: null,
            customFilters: customFilters,
            hasFilters: hasFilters,
            customSettings: customSettings,
            exportLoading: false,
            extraProps: {},
            editModelIndex: -1,
            customForms,
            options: {
                itemsPerPage: customSettings?.per_page ?? 30,
                page: page,
            },
        }
    },
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
                        column: h,
                        onEvent: () => {}
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
                        template.onEvent = (en, e) => {
                            switch (en) {
                                case 'expand':
                                    const item = e[0];
                                    const existsIndex = this.expanded.map((i) => i.id).indexOf(item.id);
                                    if (existsIndex >= 0) {
                                        this.expanded.splice(existsIndex, 1);
                                    } else {
                                        let expandComponent = null;
                                        switch (h.component) {
                                            case 'remote-table':
                                            break;
                                            default:
                                            expandComponent = h.component;
                                        }
                                        item.expand = {
                                            component: expandComponent,
                                            column: h,
                                        }
                                        this.expanded.push(item);
                                    }
                                break;
                            }
                        }
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
                    case 'bitwise-flags':
                        template.component = ColumnBitwiseFlags;
                        break;
                    default:
                        break;
                    }

                    templates.push(template);
                }
            }
            return templates;
        },
        colSpans () {
            return this.templates.length;
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
            const fields = {
                per_page: {
                    type: 'input',
                    input: 'text',
                    label: 'تعداد رکورد‌ها در صفحه',
                    validations: {
                        numeric: true,
                    }
                },
                vis_pages: {
                    type: 'input',
                    input: 'text',
                    label: 'تعداد صفحات قابل رجوع',
                    validations: {
                        numeric: true,
                    }
                }
            };
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
                    class: 'mt-2',
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
        datatableProps: function () {
            return {
                ...this.field.props,
                'show-select': this.field.props && this.field.props['show-select'] ? this.field.props['show-select'] : this.showForms
            }
        },
        hasForm () {
            return !this.field['hide-forms'] && this.field.forms && Object.keys(this.field.forms).length > 0;
        },
        showCreateButton () {
            let hasPermission = true;
            if (this.$store.state.user?.permissions && this.field.table && this.field.table['create-permissions']) {
                if (!this.$store.state.user.permissions.includes(this.field.table['create-permissions'])) {
                    hasPermission = false;
                }
            }
            return hasPermission &&
                     ((this.field.crud && this.field.crud.create) || (this.field.table && this.field.table['create-url'])) && !this.field['hide-create'];
        },
        showReportsButton () {
            let hasPermission = true;
            if (this.$store.state.user?.permissions && this.field.table && this.field.table['reports-permissions']) {
                if (!this.$store.state.user.permissions.includes(this.field.table['create-permissions'])) {
                    hasPermission = false;
                }
            }
            return hasPermission &&
                    this.field.table && this.field.table['reports-url'] && !this.field['hide-reports'];
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
        options: {
            deep: true,
            handler() {
                if (! this.loading) {
                    this.updateTable();
                }
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
    },
    methods: {
        getRowClass(item) {
            return ''
        },
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
                        limit: this.customSettings.per_page ? this.customSettings.per_page : this.options.itemsPerPage,
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
                            this.totalPages = Math.ceil(parseInt(response.data.total) / parseInt(response.data.per_page));
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
            this.hasFilters = false;
            this.updateTable();
        },
        updateFilters() {
            this.hasFilters = true;
            this.updateTable();
        },
        getTemplateSlot(template) {
            if (template && template.slot) {
                return template.slot;
            }

            return ;
        },
        getHeaderSlot(header) {
            return "header." + header.value;
        },
        onToggleItem(item) {
            // this.toggleArray(this.expanded, item);
            // this.expandTemplate.params.metadata = this.expandTemplateDefaultMetadata;
        },
        onCloseItem(target) {
            // this.putOffArray(this.expanded, target.item);
        },
        onExpandItem(target) {
            // this.putOnArray(this.expanded, target.item);
            // this.expandTemplate.params.metadata = target.link.metadata;
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
            const newClone = clonedeep(this.createModel);
            this.devalue.unshift({
                id: "id#" + Math.random() * Number.MAX_SAFE_INTEGER,
                ...newClone
            });
            this.showCreate = false;
        },
        onUpdateNew() {
            const newClone = clonedeep(this.createModel);
            if (this.editModelIndex >= 0) {
                const newValues = clonedeep(this.devalue);
                newValues[this.editModelIndex] = newClone;
                this.devalue = newValues;
            }
            this.editMode = false;
            this.showCreate = false;
        },
        onCancelNew() {
            this.showCreate = false;
            this.editMode = false;
        },
        onOpenEditDialog(item) {
            this.editModelIndex = -1;
            this.devalue.forEach((ii, i) => {
                if (item.id === ii.id) {
                    this.editModelIndex = i;
                }
            });
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
        },
        saveFilters() {
            if (this.field.table?.query?.url) {
                localStorage.setItem('crud.datatable.filters.' + this.field.table.query.url, JSON.stringify(this.customFilters));
                this.filtersSavedRecently = true;
            }
        },
        getFormFields(id, fields) {
            const clone = clonedeep(fields);
            const iterateForVOn = ref => {
                for (const prop in ref) {
                    if (prop === "v-on") {
                        const events = ref[prop];
                        for (const event in events) {
                            const handle = events[event];
                            events[event] = e => {
                                const values = clonedeep(this.customForms[id]);
                                values.selected = this.selected.map((s) => s.id)
                                handle(values, e);
                            };
                        }
                    } else if (typeof ref[prop] === "object") {
                        iterateForVOn(ref[prop]);
                    }
                }
            };
            iterateForVOn(clone);
            return clone;
        }
    }
};
</script>

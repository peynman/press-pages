<template>
  <v-autocomplete
    v-model="devalue"
    :label="field.label"
    :class="`vf-input ${field.class ? field.class:''}`"
    :items="avItems"
    :search-input.sync="search"
    :loading="loading"
    item-text="title"
    item-value="id"
    hide-details="auto"
    v-bind="fieldProps"
    v-on="eventHandlers"
    @keyup.native="updateInput($event)"
    @paste="onPaste()"
  >
    <template v-slot:item="{item}">
        <v-label>{{ getDecorableLabel(item) }}</v-label>
        <v-subheader v-if="decorator.subheader">{{ getDecorableProperty(item, 'subheader') }}</v-subheader>
    </template>
    <template v-slot:selection="{item}">
        <v-label>{{ getDecorableLabel(item) }}</v-label>
        <v-subheader v-if="decorator.subheader">{{ getDecorableProperty(item, 'subheader') }}</v-subheader>
    </template>
  </v-autocomplete>
</template>

<script>
import BaseComponent, { DecoratableComponent } from './mixins'
import { VAutocomplete } from 'vuetify/lib'
export default {
    components: {
        VAutocomplete
    },
    mixins: [BaseComponent, DecoratableComponent],
    name: 'vf-autocomplete-input',
    props: {
        id: String,
        field: Object,
        value: [Array, String, Number]
    },
    data: (vm) => ({
        search: '',
        loadingId: 0,
        loading: false,
        avItems: vm.value ? [{id:vm.value}] : [],
    }),
    methods: {
        updateSearch() {
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
                        page: 0,
                        limit: 100,
                        search: this.search,
                        with: this.field.table.query.relations
                            ? this.field.table.query.relations
                            : [],
                        appends: this.field.table.query.appends ? this.field.table.query.appends : [],
                    }
                }).then(response => {
                    this.response = response;
                    if (response.data.data && this.loadingId <= response.data.ref_id) {
                        this.avItems = response.data.data;

                        this.search = ''
                    }
                })
                .catch(error => {
                    this.response = error.response;
                })
                .finally(() => {
                    this.loading = false;
                });
            }
        },
        updateInput: function (ev) {
            if ([13].includes(ev.keyCode)
            ) {
                this.updateSearch();
            }
        },
    },
    watch: {
        devalue: {
            deep: true,
            handler () {
                this.$emit('input', this.devalue)
            }
        },
    }
}
</script>

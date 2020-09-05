<template>
  <v-card class="ma-1" flat background-color="grey lighten-2">
    <v-system-bar dark color="primary" v-if="field.label">{{ field.label }}</v-system-bar>
    <span class="caption" v-if="Object.keys(field.links).length == 0">امکانات بیشتری برای این رکورد موجود نیست</span>
    <v-tabs v-if="Object.keys(field.links).length > 0" optional dense icons-and-text centered background-color="grey lighten-2" v-model="selected">
      <v-tabs-slider/>
      <v-tab>
        <slot name="prepend"></slot>
      </v-tab>
      <v-tab
        class="no-letter-spacing"
        v-for="(link) in field.links"
        :key="`${id}-link-${link.id}`"
        :href="`#${id}-link-${link.id}`"
      >
        <div class="d-flex flex-row">
            <div class="d-flex flex-column">
                <v-icon v-show="link.icon">{{ link.icon }}</v-icon>
                <span v-show="link.title" class="caption">{{ link.title }}</span>
            </div>
            <component
                v-if="link.extraComponent"
                v-bind="link.extraComponent.props"
                :is="link.extraComponent.component"
                :class="link.extraComponent.class"
            >
            </component>
        </div>
      </v-tab>
      <v-tab disabled>
        <slot name="append"></slot>
      </v-tab>
      <v-tab-item
        v-for="(link) in field.links"
        :key="`${id}-link-content-${link.id}`"
        :id="`${id}-link-${link.id}`"
      >
        <v-card flat>
          <v-card-text class="ma-1 pa-0" background-color="white" >
              <v-progress-linear color="primary" v-show="link.loading" indeterminate></v-progress-linear>
              <vf-fields-renderer
                :id="`${id}-links-${link.id}`"
                :fields="link.fields"
                :options="link.options"
                :value="link.devalue"
                v-model="link.devalue"
               ></vf-fields-renderer>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import {
  VDialog,
  VBtn,
  VIcon,
  VCard,
  VCardText,
  VContainer
} from "vuetify/lib";
import { EasyNestedObject } from './../../vuetify-formjson/Fields/mixins'
import FormJSONRenderer from "./../../vuetify-formjson/Fields/FormJSONBuilder/generator";
import clonedeep from "lodash.clonedeep";

export default {
    mixins: [EasyNestedObject, FormJSONRenderer],
    components: {
        VDialog,
        VBtn,
        VIcon,
        VCard,
        VCardText,
        VContainer
    },
    name: 'object-links-card',
    props: {
        id: String,
        field: Object,
    },
    data: (vm) => ({
        selected: -1,
    }),
    methods: {
        getFormFromURL(link) {
            if (link.url) {
                console.log(link);
                function mergeDeep(...objects) {
                    const isObject = obj => obj && typeof obj === 'object';
                    return objects.reduce((prev, obj) => {
                        Object.keys(obj).forEach(key => {
                        const pVal = prev[key];
                        const oVal = obj[key];

                        if (Array.isArray(pVal) && Array.isArray(oVal)) {
                            prev[key] = pVal.concat(...oVal);
                        }
                        else if (isObject(pVal) && isObject(oVal)) {
                            prev[key] = mergeDeep(pVal, oVal);
                        }
                        else {
                            prev[key] = oVal;
                        }
                        });

                        return prev;
                    }, {});
                }
                const foundPage = (data) => {
                    this.UpdatePageContent(
                        data.body,
                        data.options,
                        data.sources
                    );
                    if (!this.$store.state.datatable_pages) {
                        this.$store.state.datatable_pages = {}
                    }
                    this.$store.state.datatable_pages[link.url] = clonedeep(data);
                    if (this.formSchema.fields['crud-datatable']) {
                        this.formSchema.fields['crud-datatable']['hide-search'] = true;
                        this.formSchema.fields['crud-datatable']['hide-create'] = true;
                        this.formSchema.fields['crud-datatable']['hide-settings'] = true;
                        this.formSchema.fields['crud-datatable']['hide-reports'] = true;
                        this.formSchema.fields['crud-datatable']['hide-removable-filters'] = true;
                        this.formSchema.fields['crud-datatable']['default-filters'] = link.filters
                    }

                    this.$nextTick(() => {
                        link.loading = false
                        link.fields = mergeDeep(this.formSchema.fields, link.schema?.fields ?? {})
                        link.options = mergeDeep(this.formSchema.options, link.schema?.options ?? {})
                        link.loaded = true
                        this.formModel = link.devalue;
                        this.$forceUpdate();
                    });
                }
                if (this.$store.state.datatable_pages && this.$store.state.datatable_pages[link.url]) {
                    foundPage(clonedeep(this.$store.state.datatable_pages[link.url]));
                } else {
                    link.loading = true;
                    const host = this.$store.state.host;
                    host.webRequest({
                        method: "GET",
                        url: link.url,
                        headers: host.getWebAuthHeaders({
                        Accept: "application/json",
                        "Content-Type": "application/json"
                        })
                    })
                    .then(response => {
                        foundPage(clonedeep(response.data))
                    })
                    .catch(err => {
                        host.showSnack(err.message);
                        link.loading = false;
                    });
                }
            }
        }
    },
    watch: {
        selected () {
            if (this.selected) {
                let index = -1;
                let selid = null;
                let indexer = 0;
                for (const prop in this.field.links) {
                    const i = this.field.links[prop];
                    if (i && i.id) {
                        if (this.selected.endsWith(i.id)) { index = indexer; selid = i.id; }
                    }
                    indexer++;
                }
                if (index >= 0) {
                    this.getFormFromURL(this.field.links[selid]);
                }
            }
        }
    },
}
</script>

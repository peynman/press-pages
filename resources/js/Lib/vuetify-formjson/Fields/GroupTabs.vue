<template>
  <v-tabs
    :class="`v-group ${field.class ? field.class:''}`"
    v-bind="fieldProps"
    v-on="eventHandlers"
  >
    <v-tabs-slider
      v-if="field.slider"
      :color="`${(field.slider.class ? field.slider.class : '')}`"
    />
    <v-tab
      class="no-letter-spacing"
      v-for="(item, key) in visibleGroups"
      :key="`${id}-tab-label-${key}`"
      :href="`#${id}-tab-${key}`"
      v-on="getTabEvents(item)"
    >
      <label>{{ item.label }}</label>
    </v-tab>
    <v-tab-item
      v-for="(item, key) in visibleGroups"
      :key="`${id}-tab-item-${key}`"
      :value="`${id}-tab-${key}`"
      v-on="getTabItemEvents(item)"
    >
      <vf-fields-renderer
        :id="`${id}-tab-fields`"
        v-model="devalue[key]"
        :options="item.options"
        :fields="item.fields"
        :on-updated="item['onUpdated']"
      />
    </v-tab-item>
  </v-tabs>
</template>

<script>
import BaseComponent from './mixins'
export default {
    name: 'VfGroupTabs',
    mixins: [BaseComponent],
    props: {
        field: Object,
        id: String,
        value: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        visibleGroups () {
            const groups = {};
            for (let group in this.field.groups) {
                if (!this.field.groups[group].hidden) {
                    groups[group] = this.field.groups[group];
                }
            }
            return groups;
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler: function () {
                this.$emit('input', this.devalue)
            }
        }
    },
    methods: {
        getTabItemEvents (item) {
            return {
                ...(item.tab && item.tab['v-on'] ? item.tab['v-on'] : {})
            }
        },
        getTabEvents (item) {
            return {
                ...(item.tabItem && item.tabItem['v-on'] ? item.tabItem['v-on'] : {})
            }
        }
    }
}
</script>

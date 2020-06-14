<template>
  <div :class="`vf-input d-flex flex-column ${field.class ? field.class:''}`">
    <label :class="field.props && field.props.error ? 'red--text':''">{{ field.label }}</label>
    <div class="row ma-0">
      <v-checkbox
        v-for="item in field.objects"
        :key="`${id}-checkbox-${item[decorator.id]}`"
        :class="`ma-0 pa-0 me-4 ${item.props ? item.props.class:null}`"
        :label="getDecorableLabel(item)"
        v-model="checkedIds[item[decorator.id]]"
        v-bind="getProps(item)"
        @change="onChanged"
        v-on="getEvents(item)"
      ></v-checkbox>
    </div>
    <div class="d-flex flex-column" v-if="field.props && field.props.error">
      <div
        v-for="(err,index) in field.props['error-messages']"
        :key="`${id}-error-${index}`"
        class="red--text"
      >{{ err }}</div>
    </div>
  </div>
</template>

<script>
import BaseComponent, { DecoratableComponent } from './mixins'
import { VCheckbox } from 'vuetify/lib'

export default {
    components: {
        VCheckbox
    },
    mixins: [BaseComponent, DecoratableComponent],
    name: 'vf-objects-list-input',
    props: {
        id: String,
        field: Object,
        value: {
            type: [Object, Array],
            default: () => ({})
        }
    },
    data () {
        const checkedIds = {};
        if (this.value) {
            if (Array.isArray(this.value)) {
                this.value.forEach((v) => {
                    checkedIds[v.id] = true;
                })
            } else {
                for (const p in this.value) {
                    const v = this.value[p]
                    checkedIds[v.id] = true;
                }
            }
        }
        return {
            checkedIds
        }
    },
    methods: {
        getProps: function (item) {
            return {
                ...(item.props ? item.props : {})
            }
        },
        getEvents: function (item) {
            return {
                ...(item.props && item.props['v-on'] ? item.props['v-on'] : {})
            }
        },
        onChanged () {
            const values = [];
            this.field.objects.forEach((o) => {
                if (this.checkedIds[o[this.decorator.id]]) {
                    values.push({
                        [this.decorator.id]: o[this.decorator.id]
                    })
                }
            })
            this.devalue = values;
        }
    },
    watch: {
        devalue: function () {
            this.$emit('input', this.devalue)
        }
    }
}
</script>

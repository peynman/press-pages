<template>
    <div>
        <v-chip dense small v-for="(l, index) in list" :key="`${id}-list-${column.id}-${index}`">{{ getDecorableLabel(l) }}</v-chip>
    </div>
</template>

<script>
import { EasyNestedObject } from './../mixins'
export default {
    mixins: [EasyNestedObject],
    name: 'vf-datatable-column-expandable-links',
    props: {
        id: String,
        item: Object,
        column: Object,
    },
    computed: {
        list () {
            return this.getNestedPathValue(this.item, this.column.id);
        },
        decorator: function () {
            const props = {}
            if (this.column.decorator && this.column.decorator.labels) {
                const labels = this.column.decorator.labels.split(',');
                for (const l in labels) {
                    props[labels[l]] = labels[l]
                }
            }
            return {
                id: 'id',
                title: 'title',
                label: '#:id',
                ...props,
                ...this.column.decorator
            }
        }
    },
    methods: {
        getDecorableLabel: function (item) {
            return this.getDecorableProperty(item, 'label')
        },

        getDecorableProperty: function (item, property) {
            const decorator = this.decorator
            const getNestedPathValue = function (item, path) {
                const parts = path.split('.')
                let val = item
                parts.forEach((p) => {
                    if (val) {
                        val = val[p]
                    }
                })
                return val
            }
            let label = decorator[property]
            for (const prop in decorator) {
                label = label.replace(
                    ':' + prop,
                    getNestedPathValue(item, decorator[prop])
                )
            }
            return label
        }
    }
}
</script>

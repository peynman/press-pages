<template>
    <span>{{ getNestedPathValue(item, column['nested-path']) }}</span>
</template>

<script>
export default {
    name: 'vf-datatable-column-nested-object',
    props: {
        item: Object,
        column: Object,
    },
    methods: {
        getNestedPathValue: function (item, path) {
            const parts = path.split('.')
            let val = item
            parts.forEach((p) => {
                if (p.length > 0) {
                    if (val) {
                        val = val[p]
                    }
                }
            })
            return val
        },
    }
}
</script>

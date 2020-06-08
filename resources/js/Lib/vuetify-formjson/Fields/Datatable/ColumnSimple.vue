<template>
    <span>{{ item[column.id] }}</span>
</template>

<script>
export default {
    name: 'vf-datatable-column-simple',
    props: {
        item: Object,
        column: Object,
    }
}
</script>

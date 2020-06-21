<template>
    <v-chip dense small >{{ item[column.id].name }}</v-chip>
</template>

<script>
export default {
    name: 'vf-datatable-column-expandable-links',
    props: {
        item: Object,
        column: Object,
    }
}
</script>

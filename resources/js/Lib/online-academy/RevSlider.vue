<template>
    <div :class="`vf-input ${field.class ? field.class:''}`">
        <iframe :src="field.url" frameborder="0"  :style="`width: ${field.width ? field.width : '100%'}; height: ${field.height ? field.height:'390px'};`"/>
    </div>
</template>

<script>
export default {
    name: "VfRevSliderInput",
    props: {
        field: Object,
        value: Object,
        id: String
    },
    computed: {
    }
};
</script>

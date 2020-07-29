<template>
  <v-img
    :class="`vf-input ${field.class ? field.class : ''}`"
    :width="field.width"
    :height="field.height"
    :style="`max-width: ${field.maxWidth ? field.maxWidth:'100%'}; max-height: ${field.maxHeight ? field.maxHeight:'100%'}`"
    :src="field.src"
    v-bind="field.props ? field.props: {}"
  />
</template>

<script>
export default {
    name: 'VfImageInput',
    props: {
        field: Object,
        value: Object,
        id: String
    },
}
</script>

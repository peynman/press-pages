<template>
  <div ref="markdownContent">
    content
  </div>
</template>

<script>
import './extensions/index.js';
import markdownConversionSvc from './services/markdownConversionSvc.js'

export default {
    name: 'VfStackeditInput',
    props: {
        field: Object,
        value: String,
        id: String
    },
    created() {
        markdownConversionSvc.init();
    },
    mounted() {
        const converter = markdownConversionSvc.createConverter({});
        console.log(markdownConversionSvc.parseSections(converter, 'd **asd as**d '))
    }
}
</script>

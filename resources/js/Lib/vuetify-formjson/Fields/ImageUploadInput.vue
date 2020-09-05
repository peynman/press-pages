<template>
  <div
    :class="`vf-input d-flex flex-column ${field.class ? field.class:''}`"
  >
    <label class="ma-1">{{field.label}}</label>
    <v-image-input style="direction: ltr;" v-model="devalue" :image-quality="0.1" v-bind="fixedFieldProps" v-on="eventHandlers" />
  </div>
</template>

<script>
import VuetifyImageInput from 'vuetify-image-input'
import BaseComponent from './mixins'
import { VDivider, VBtn, VIcon, VSlider } from 'vuetify/lib'

export default {
    mixins: [BaseComponent],
    components: {
        [VuetifyImageInput.name]: VuetifyImageInput,
        VDivider,
        VBtn,
        VIcon,
        VSlider,
    },
    name: 'vf-image-upload-input',
    props: {
        id: String,
        field: Object,
        value: [String, Object]
    },
    computed: {
        fixedFieldProps () {
            const props = this.field.props;
            if (this.field.props?.imageWidth) {
                props.imageWidth = parseInt(this.field.props?.imageWidth)
            }
            if (this.field.props?.imageMaxScaling) {
                props.imageMaxScaling = parseInt(this.field.props?.imageMaxScaling)
            }
            if (this.field.props?.imageHeight) {
                props.imageHeight = parseInt(this.field.props?.imageHeight)
            }
            return props;
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler () {
                this.$emit('input', this.devalue)
            }
        }
    },
}
</script>

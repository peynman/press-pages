<template>
  <div :class="`vf-input ${field.class ? field.class : ''}`">
    <v-btn
      outlined
      class="no-letter-spacing"
      @click="onStartDownload"
    >
      <v-icon
        v-if="field.icon"
        class="me-1"
      >
        {{ field.icon }}
      </v-icon>
      {{ field.label }}
    </v-btn>
  </div>
</template>

<script>
export default {
    name: 'VfProductDownloadLinkInput',
    props: {
        field: Object,
        value: Object,
        id: String
    },
    methods: {
        onStartDownload () {
            window.open(
                this.field.file_type === 'url' ?
                    this.field.file_id :
                    `/session/${this.field.session_id}/${this.field.file_type}/${this.field.file_id}/download`
            )
        }
    }
}
</script>

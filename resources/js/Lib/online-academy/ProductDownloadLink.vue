<template>
  <div :class="`vf-input ${field.class ? field.class : ''}`">
    <v-btn
      v-for="(item, index) in downloadItems"
      :key="`${id}-downlowd-item-${index}`"
      outlined
      class="no-letter-spacing ma-1"
      @click="onStartDownload(item)"
    >
      <v-icon
        v-if="field.icon"
        class="me-1"
      >
        {{ field.icon }}
      </v-icon>
      {{ field.label }}&nbsp;<span v-if="downloadItems.length > 1"> - شماره {{ index + 1 }} </span>
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
    computed: {
        downloadItems () {
            if (this.field.file_type === 'url') {
                return this.field.file_id.split(',');
            }

            return [`/session/${this.field.session_id}/${this.field.file_type}/${this.field.file_id}/download`]
        }
    },
    methods: {
        onStartDownload (url) {
            window.open(url);
        }
    }
}
</script>

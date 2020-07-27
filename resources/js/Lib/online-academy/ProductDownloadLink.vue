<template>
  <div :class="`vf-input ${field.class ? field.class : ''}`">
    <v-btn
      outlined
      @click="onVerifyACMeeting"
    >
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
        onVerifyACMeeting () {
            const host = this.$store.state.host;
            host.axios({
                method: 'POST',
                url: '/api/adobe-connect/verify/' + this.field.ac_meeting.id,
            })
        }
    }
}
</script>

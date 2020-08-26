<template>
  <div :class="`vf-input ${field.class ? field.class : ''}`">
    <v-btn
      v-if="!access"
      outlined
      class="no-letter-spacing"
      :loading="loading"
      @click="onVerifyACMeeting"
    >
        <v-icon class="me-1">mdi-play</v-icon>
        <span v-if="isEnded">دریافت مجوز نمایش از AdobeConnect</span>
        <span v-else>دریافت مجوز ورود به کلاس AdobeConnect</span>
    </v-btn>
    <v-btn
      v-if="access && !isEnded"
      outlined
      class="no-letter-spacing"
      color="green"
      @click="onOpenWindow"
    >
        <v-icon class="me-1">mdi-google-classroom</v-icon>
          ورود به کلاس AdobeConnect
    </v-btn>
    <v-btn
        outlined
        class="no-letter-spacing me-2"
        color="green"
        v-if="access && isEnded"
        @click="onOpenRecording(rec)"
        v-for="(rec, index) in field.recordings"
        :key="`${id}-recording-${index}`"
    >
        <v-icon class="me-1">md-play</v-icon>
        نمایش فایل ضبط شده در AdobeConnect <span v-if="field.recordings && field.recordings.length > 1">- شماره {{ index + 1 }}</span>
    </v-btn>
  </div>
</template>

<script>
export default {
    name: 'VfAcSessionLinkInput',
    props: {
        field: Object,
        value: Object,
        id: String
    },
    data: (vm) => ({
        loading: false,
        access: null,
    }),
    computed: {
        isEnded () {
            return this.field.status === 'ended'
        }
    },
    methods: {
        onVerifyACMeeting () {
            const host = this.$store.state.host;
            this.loading = true;
            host.axios({
                method: 'POST',
                url: '/api/adobe-connect/verify/' + this.field.ac_session_id,
                headers: host.getWebAuthHeaders({}),
            }).then((response) => {
                this.loading = false;
                if (response.data.url && response.data.sessions) {
                    this.access = response.data;
                }
            }).catch(err => {
                this.loading = false;
                host.showSnack(err.message);
            })
        },
        onOpenWindow() {
            window.open(this.access.url + '?session=' + this.access.sessions[this.access.server]);
        },
        onOpenRecording (rec) {
            const url = new URL(rec);
            const server = url.protocol + '//' + url.host;
            window.open(rec + '?session=' + this.access.sessions[server]);
        }
    }
}
</script>

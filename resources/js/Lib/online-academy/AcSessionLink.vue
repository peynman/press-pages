<template>
  <div :class="`vf-input ${field.class ? field.class : ''}`">
    <v-btn
      v-if="!access"
      outlined
      class="no-letter-spacing"
      :loading="loading"
      @click="onVerifyACMeeting"
    >
      دریافت مجوز ورود به کلاس AdobeConnect
    </v-btn>
    <v-btn
      v-if="access"
      outlined
      class="no-letter-spacing"
      color="green"
      @click="onOpenWindow"
    >
      ورود به کلاس AdobeConnect
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
                if (response.data.url && response.data.session) {
                    this.access = response.data;
                }
            }).catch(err => {
                this.loading = false;
                host.showSnack(err.message);
            })
        },
        onOpenWindow() {
            window.open(this.access.url + '?session=' + this.access.session);
        }
    }
}
</script>

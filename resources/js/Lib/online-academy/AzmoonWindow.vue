<template>
  <div :class="`vf-input ${field.class ? field.class:''}`">
    <v-btn
      outlined
      primary
      rouned
      class="no-letter-spacing"
      @click="dialog = true"
    >
      <v-icon class="me-2">
        {{ field.icon }}
      </v-icon> ورود به صفحه آزمون
    </v-btn>
    <v-dialog
      v-model="dialog"
      fullscreen
      class="grey lighten-4"
      style="width: 100%; height: 100%;"
    >
      <v-toolbar
        dense
        small
        dark
        color="primary"
      >
        {{ field.data.title }}
        <v-spacer />
        <v-btn
          icon
          small
          dense
          @click="dialog = false"
        >
          <v-icon small>
            mdi-close
          </v-icon>
        </v-btn>
      </v-toolbar>
      <v-lazy
        v-if="dialog"
        class="pa-2 grey lighten-4"
      >
        <v-sheet
          class="d-flex flex-column"
        >

        </v-sheet>
      </v-lazy>
    </v-dialog>
  </div>
</template>

<script>
export default {
    name: 'VfAzmoonInput',
    props: {
        // field is the product model in db
        // with its original role in formjson
        field: Object,
        value: Object,
        id: String,
    },
    data: () => ({
        dialog: false,
        openTime: null,
        boardContent: '',
    }),
    computed: {
    },
    watch: {
        dialog () {
            const host = this.$store.state.host;
            if (this.dialog) {
            } else {
            }
        }
    }
}
</script>

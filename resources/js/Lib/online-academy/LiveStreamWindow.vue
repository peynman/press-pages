<template>
  <div :class="`vf-input ${field.class ? field.class:''}`">
    <v-btn
      outlined
      primary
      rouned
      class="no-letter-spacing"
      @click="dialog = true"
    >
      <v-icon class="mx-2">
        mdi-google-classroom
      </v-icon> ورود به کلاس
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
          <v-row
            no-gutters
          >
            <vf-video-player-input
              :field="mainPlayerField"
            />
          </v-row>
          <v-row>
            <v-col
              cols="12"
              xsm="12"
              md="6"
            >
              <v-col
                v-for="(player, index) in extraPlayers"
                :key="`${id}-extra-player-${index}`"
                cols="12"
                sm="12"
              >
                <vf-video-player-input
                  :field="player"
                />
              </v-col>
            </v-col>
            <v-col
              cols="12"
              xsm="12"
              md="6"
            >
              <iframe
                :src="field.chat_frame"
                width="100%"
                :height="field.chat_height ? field.chat_height :'450'"
                allowtransparency="yes"
                allow="autoplay"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                scrolling="auto"
              />
            </v-col>
          </v-row>
        </v-sheet>
      </v-lazy>
    </v-dialog>
  </div>
</template>

<script>
export default {
    name: 'VfLivestreamInput',
    props: {
        // field is the product model in db
        // with its original role in formjson
        field: Object,
        value: Object,
        id: String,
    },
    data: () => ({
        dialog: false,
        boardContent: '',
    }),
    computed: {
        extraPlayers () {
            const extras = [];
            this.field.children?.forEach((f) => {
                extras.push({
                    url: f.is_remote ? f.key : '/livestream/live/' + f.key + '.m3u8',
                    modePlain: true,
                    autoPlay: true,
                    modeFrame: !f.is_remote || f.key?.endsWith('.m3u8') ? false: true,
                    class: '',
                    height: '320px',
                })
            })
            return extras;
        },
        mainPlayerField () {
            const field = {
                url: this.field.is_remote ? this.field.key : '/livestream/live/' + this.field.key + '.m3u8',
                modePlain: true,
                autoPlay: true,
                modeFrame: !this.field.is_remote || this.field.key?.endsWith('.m3u8') ? false: true,
                class: ''
            };
            return field;
        }
    },
}
</script>

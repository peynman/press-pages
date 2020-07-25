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
            <VfVideoPlayerInput
              :field="mainPlayerField"
            />
          </v-row>
          <v-row>
            <v-col
              v-for="(player, index) in extraPlayers"
              :key="`${id}-extra-player-${index}`"
              cols="12"
              sm="6"
            >
              <VfVideoPlayerInput
                :field="player"
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-card>
                <v-card-title>تخته ارتباط</v-card-title>
                <v-card-text>
                  <vf-stackedit-input
                    v-model="boardContent"
                    :field="{}"
                  />
                </v-card-text>
              </v-card>
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
    components: {
        'VfVideoPlayerInput': () => import(/* webpackChunkName: "video-player"*/ './VideoPlayer.vue'),
    },
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
                if (f.types.map((t) => t.name).includes('livestream')) {
                    extras.push({
                        url: f.data.types.livestream.is_remote ? f.data.types.livestream.key : '/livestream/live/' + f.data.types.livestream.key + '.m3u8',
                        modePlain: true,
                        class: '',
                        height: '320px',
                    })
                }
            })
            return extras;
        },
        mainPlayerField () {
            console.log(this.field.data.types.livestream.is_remote);
            const field = {
                url: this.field.data.types.livestream.is_remote ? this.field.data.types.livestream.key : '/livestream/live/' + this.field.data.types.livestream.key + '.m3u8',
                modePlain: true,
                autoPlay: true,
                class: ''
            };
            return field;
        }
    },
}
</script>

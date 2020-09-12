<template>
  <div :class="`vf-input ${field.class ? field.class:''}`">
    <v-system-bar color="primary" dark style="position: fixed; left: 0; right: 0; bottom: 0; z-index: 2;"
          v-if="minmized"
    >
          <span>{{ field.data.title }}</span>
          <v-spacer></v-spacer>
          <v-btn
            icon
            small
            dense
            @click="minmized = !minmized"
            >
              <v-icon small>{{ minmized ? 'mdi-window-maximize':'mdi-window-minimize' }}</v-icon>
        </v-btn>
        <v-btn
            icon
            small
            dense
            :disabled="minmized"
            @click="dialog = false"
        >
              <v-icon small>mdi-close</v-icon>
        </v-btn>
    </v-system-bar>
    <v-dialog
      v-model="dialog"
      fullscreen hide-overlay
      class="grey lighten-4"
      style="width: 100%; height: 100%;"
      transition="dialog-bottom-transition"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                outlined
                primary
                rouned
                class="no-letter-spacing"
                @click="dialog = true"
                v-bind="attrs"
                v-on="on"
            >
                <v-icon class="mx-2">
                    mdi-google-classroom
                </v-icon> ورود به کلاس
            </v-btn>
        </template>
      <v-system-bar color="primary" dark
            v-show="!minmized"
      >
          <span>{{ field.data.title }}</span>
          <v-spacer></v-spacer>
          <v-btn
            icon
            small
            dense
            @click="minmized = !minmized"
            >
              <v-icon small>{{ minmized ? 'mdi-window-maximize':'mdi-window-minimize' }}</v-icon>
        </v-btn>
        <v-btn
            icon
            small
            dense
            :disabled="minmized"
            @click="dialog = false"
        >
              <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-system-bar>
    <v-lazy
    >
      <v-sheet
            v-if="!minmized && dialog"
          class="d-flex flex-column"
        >
          <v-row
            no-gutters
          >
            <vf-video-player-input
              :field="mainPlayerField"
              :id="mainPlayerField.id"
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
                class="ma-0 pa-0"
              >
                <vf-video-player-input
                 :id="player.id"
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
        openTime: null,
        boardContent: '',
        minmized: false,
    }),
    computed: {
        extraPlayers () {
            const extras = [];
            this.field.children?.forEach((child) => {
                const f = {
                    ...child,
                    ...child.data?.types?.livestream ?? {},
                }
                extras.push({
                    id: this.id + '-extras-' + child.id,
                    url: f.is_remote ? f.key : '/livestream/live/' + f.key + '.m3u8',
                    modePlain: true,
                    autoPlay: true,
                    modeFrame: !f.is_remote || f.key?.endsWith('.m3u8') ? false: true,
                    class: 'col-12 pa-0 ma-0',
                    height: '320px',
                })
            })
            return extras;
        },
        mainPlayerField () {
            const field = {
                    id: this.id + '-main-' + this.field.id,
                url: this.field.is_remote ? this.field.key : '/livestream/live/' + this.field.key + '.m3u8',
                modePlain: true,
                autoPlay: true,
                modeFrame: !this.field.is_remote || this.field.key?.endsWith('.m3u8') ? false: true,
                class: 'col-12 pa-0 ma-0',
            };
            return field;
        }
    },
    watch: {
        dialog () {
            const host = this.$store.state.host;
            if (this.dialog) {
                if (this.minmized) {
                    this.minmized = false;
                }
                window.onbeforeunload = function() {
                    return true;
                };
                this.openTime = Date.now();
                host.axios({
                    url: `/api/course-session/${this.field.id}/presence-form`,
                    method: 'POST',
                    headers: host.getWebAuthHeaders({}),
                    data: {
                        duration: 1,
                    }
                }).catch(err => {
                    host.showSnack(err.message);
                });
                this.$forceUpdate();
            } else if (!this.minmized) {
                window.onbeforeunload = null;
                const dur = Math.abs(this.openTime - Date.now()) / 1000;
                host.axios({
                    url: `/api/course-session/${this.field.id}/presence-form`,
                    method: 'POST',
                    headers: host.getWebAuthHeaders({}),
                    data: {
                        duration: dur,
                    }
                }).then(response => {
                    host.showSnack('حضور شما در کلاس ثبت شد', 'green')
                }).catch(err => {
                    host.showSnack(err.message);
                });
            }
        },
        minmized () {
            if (this.minmized) {
                window.onbeforeunload = function() {
                    return true;
                };
                this.dialog = false;
                this.$forceUpdate();
            } else {
                this.dialog = true;
                window.onbeforeunload = null;
                this.$forceUpdate();
            }
        }
    }
}
</script>

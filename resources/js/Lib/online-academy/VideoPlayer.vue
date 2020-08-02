<template>
  <div
    style="width: 100%;"
    :class="`vf-input ${field.class?field.class:''}`"
  >
    <v-btn
      v-if="!field.modePlain"
      outlined
      primary
      rouned
      class="no-letter-spacing"
      @click="dialog = true"
    >
      <v-icon
        class="me-1"
      >
        mdi-play
      </v-icon> {{ field.label }}
    </v-btn>
    <v-dialog
      v-if="!field.modePlain"
      v-model="dialog"
    >
      <div v-if="field.modeFrame">
        <div class="h_iframe-aparat_embed_frame">
          <span style="display: block;padding-top: 57%" />
          <iframe
            scrolling="no"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            :src="videoSrc"
          />
        </div>
      </div>
      <div v-else>
        <video
          v-if="dialog"
          :id="`${id}-videojs-player`"
          controls
          :poster="videoPoster"
          class="video-js vjs-sublime-skin"
          :style="`min-width: ${videoWidth}; min-height: ${videoHeight}`"
        >
          <source
            :src="videoSrc"
            type="application/x-mpegURL"
          >
        </video>
      </div>
    </v-dialog>
    <div v-if="field.modeFrame">
      <div class="h_iframe-aparat_embed_frame">
        <span style="display: block;padding-top: 57%" />
        <iframe
          scrolling="no"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          :src="videoSrc"
        />
      </div>
    </div>
    <div v-else>
      <video
        v-if="field.modePlain"
        :id="`${id}-videojs-player`"
        controls
        :poster="videoPoster"
        class="video-js vjs-sublime-skin"
        :style="`min-width: ${videoWidth}; min-height: ${videoHeight}`"
      >
        <source
          :src="videoSrc"
          type="application/x-mpegURL"
        >
      </video>
    </div>
  </div>
  </div>
</template>

<script>
import videojs from 'video.js'

export default {
    name: 'VfVideoPlayerInput',
    props: {
        field: Object,
        value: Object,
        id: String
    },
    data() {
        return {
            player: null,
            dialog: false,
        }
    },
    computed: {
        videoWidth () {
            return this.field.width ?? '100%';
        },
        videoHeight () {
            return this.field.height ?? '390px';
        },
        videoSrc () {
            return this.field.url ?? '#';
        },
        videoPoster () {
            return this.field.poster_url ?? '#';
        }
    },
    watch: {
        dialog () {
            this.$nextTick(() => {
                if (this.dialog) {
                    if (!this.player && !this.field.modeFrame) {
                        this.player = videojs(`${this.id}-videojs-player`);
                    }
                } else {
                    if (this.player) {
                        this.player.dispose();
                    }
                }
                // this.player.hlsQualitySelector({
                //     displayCurrentQuality: true,
                // });
            })
        }
    },
    mounted () {
        if (this.field.modePlain) {
            if (!this.player) {
                this.player = videojs(`${this.id}-videojs-player`);
                if (this.field.autoPlay) {
                    this.player.play();
                }
            }
        }
    },
}
</script>
          </template></div></iframe>
      </div>
    </div>
  </div>
</template>

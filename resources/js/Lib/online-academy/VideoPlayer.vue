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
          <iframe
            style="width:100%; min-height: 390px;"
            scrolling="no"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            frameborder="0"
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
          :style="`min-width: ${videoWidth}; min-height: ${videoHeight}; max-width: 100%;`"
        >
          <source
            :src="videoSrc"
            type="application/x-mpegURL"
          >
        </video>
      </div>
    </v-dialog>
    <div v-if="field.modePlain">
        <div v-if="field.modeFrame">
            <div class="h_iframe-aparat_embed_frame">
                <iframe
                style="width:100%; min-height: 390px;"
                scrolling="no"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                frameborder="0"
                :src="videoSrc"
                />
            </div>
        </div>
        <div v-else>
            <video
                :id="`${id}-videojs-player`"
                controls
                :poster="videoPoster"
                class="video-js vjs-sublime-skin"
                :style="`min-width: ${videoWidth}; min-height: ${videoHeight}; max-width: 100%`"
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
            if (this.player && !this.dialog) {
                // this.player.dispose();
                this.player = null;
            }
            this.$nextTick(() => {
                if (this.dialog) {
                    if (!this.player && !this.field.modeFrame) {
                        this.player = videojs(`${this.id}-videojs-player`);
                        this.player.crossOrigin = 'anonymous';
                    }
                }
            });
        }
    },
    mounted () {
        if (this.field.modePlain) {
            if (!this.player && !this.field.modeFrame) {
                this.$nextTick(() => {
                    this.player = videojs(`${this.id}-videojs-player`);
                    this.player.crossOrigin = 'anonymous';
                    if (this.field.autoPlay) {
                        this.$nextTick(() => {
                            this.player.play();
                        })
                    }
                });
            }
        }
    },
}
</script>

<template>
  <div
    :class="`vf-input fill-width ${field.class?field.class:''}`"
  >
    <v-dialog
      v-if="!field.modePlain"
      v-model="dialog"
      fullscreen
      class="grey lighten-4"
      style="width: 100%; height: 100%;"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{on, attrs}">
        <v-btn
            outlined
            primary
            class="no-letter-spacing"
            v-on="on"
            v-bind="attrs"
        >
            <v-icon
                class="me-1"
            >
                mdi-play
            </v-icon>
            {{ field.label }}
        </v-btn>
      </template>
      <v-lazy v-model="dialog" style="width: 100%; height: 100%; background: white;">
        <v-card>
            <v-system-bar color="primary" dark>
                <span>{{ field.label }}</span>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    small
                    dense
                    @click="dialog = false"
                >
                    <v-icon small>mdi-close</v-icon>
                </v-btn>
            </v-system-bar>
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
                    :style="`min-width: ${videoWidth}; min-height: ${videoHeight}; max-width: 100%;`"
                >
                    <source
                        :src="videoSrc"
                        type="application/x-mpegURL"
                    >
                </video>
            </div>
        </v-card>
      </v-lazy>
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
                this.player.dispose();
                this.player = null;
                this.$forceUpdate();
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
    destroyed() {
        if (this.player && !this.dialog) {
                this.player.dispose();
                this.player = null;
        }
    },
}
</script>

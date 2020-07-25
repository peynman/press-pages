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
      <v-icon>mdi-play</v-icon> {{ field.label }}
    </v-btn>
    <v-dialog
      v-if="!field.modePlain"
      v-model="dialog"
    >
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
    </v-dialog>
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
                // console.log(vjs);
                if (!this.player) {
                    this.player = videojs(`${this.id}-videojs-player`);
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
    unmounted() {
        if (this.player) {
            console.log('dispose');
            this.player.dispose();
        }
    },
}
</script>

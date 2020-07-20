<template>
  <div :class="`vf-input ${field.class?field.class:''}`">
    <video
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
import 'videojs-hls-quality-selector';

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
    mounted () {
        this.player = videojs(`${this.id}-videojs-player`);
        this.player.hlsQualitySelector({
            displayCurrentQuality: true,
        });
    }
}
</script>

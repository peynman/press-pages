<template>
  <div
    v-if="isVideoLink"
    class="vf-input"
  >
    <v-btn
      outlined
      primary
      rouned
      class="no-letter-spacing"
      @click="dialog = true"
    >
      <v-icon>mdi-play</v-icon> {{ product.data.title }}
    </v-btn>
    <v-dialog v-model="dialog">
      <v-lazy v-if="dialog">
        <v-lazy v-if="isYouTube">
          <iframe
            id="player"
            type="text/html"
            :width="VodLinkWidth"
            :height="VodLinkHeight"
            :src="VodLinkURL"
            frameborder="0"
          />
        </v-lazy>
        <v-lazy v-else>
          <div
            class="kavimo_vis_rp"
            style="position:relative;padding-bottom:56.25%;"
          >
            <div
              class="kavimo_vis_rw"
              style="position:absolute;width:100%;height:100%;top:0;left:0;"
            >
              <iframe
                :width="VodLinkWidth"
                :height="VodLinkHeight"
                :src="VodLinkURL"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                allowfullscreen
                mozallowfullscreen
                webkitallowfullscreen
                oallowfullscreen
                msallowfullscreen
              />
            </div>
          </div>
        </v-lazy>
      </v-lazy>
    </v-dialog>
  </div>
</template>

<script>
export default {
    props: {
        product: Object,
    },
    data: () => ({
        dialog: false,
    }),
    computed: {
        isVideoLink () {
            return this.product.types.map((i) => i.name).includes('vod_link');
        },
        VodLinkURL () {
            return this.product.data.types.vod_link.url;
        },
        VodLinkWidth () {
            return this.product.data.types.vod_link.width ?? '100%';
        },
        VodLinkHeight () {
            return this.product.data.types.vod_link.height ?? '390px';
        },
        isYouTube() {
            return this.product.data.types.vod_link.tag !== 'kavimo';
        }
    },
    mounted() {
    }

}
</script>

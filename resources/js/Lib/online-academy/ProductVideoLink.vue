<template>
  <div
    :class="`vf-input ${field.class ? field.class : ''}`"
  >
    <v-btn
      v-if="!isModePlain"
      outlined
      primary
      rouned
      class="no-letter-spacing"
      @click="dialog = true"
    >
      <v-icon>mdi-play</v-icon> {{ field.label }}
    </v-btn>
    <v-dialog
      v-if="!isModePlain"
      v-model="dialog"
    >
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
    <v-lazy v-if="isModePlain">
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
  </div>
</template>

<script>
export default {
    name: 'VfProductVideoLinkInput',
    props: {
        field: Object,
        value: Object,
        id: String
    },
    data: () => ({
        dialog: false,
    }),
    computed: {
        VodLinkURL () {
            return this.field.url;
        },
        VodLinkWidth () {
            return this.field.width ?? '100%';
        },
        VodLinkHeight () {
            return this.field.height ?? '390px';
        },
        isYouTube() {
            return this.field.isYouTube;
        },
        isModePlain() {
            return this.field.modePlain;
        }
    },
    mounted() {
    }

}
</script>

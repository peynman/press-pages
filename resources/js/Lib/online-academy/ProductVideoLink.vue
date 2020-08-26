<template>
  <div
    :class="`vf-input ${field.class ? field.class : ''}`"
  >
    <v-dialog
      v-if="!isModePlain"
      v-model="dialog"
      fullscreen
      class="grey lighten-4"
      style="width: 100%; height: 100%;"
      transition="dialog-bottom-transition"
    >
        <template v-slot:activator="{on, attrs}">
            <v-btn
                v-if="!isModePlain"
                outlined
                primary
                rouned
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
      <v-lazy v-if="dialog">
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
            <div v-if="isYouTube">
                <iframe
                    id="player"
                    type="text/html"
                    :width="VodLinkWidth"
                    :height="VodLinkHeight"
                    :src="VodLinkURL"
                    frameborder="0"
                />
            </div>
            <div
                v-else
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
        </v-card>
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
            if (this.field.url.startsWith('http://') || this.field.url.startsWith('https://')) {
                return this.field.url;
            }
            const start = this.field.url.indexOf('http');
            const end = this.field.url.indexOf('"', start);
            const part = this.field.url.substring(start, end);
            return part;
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

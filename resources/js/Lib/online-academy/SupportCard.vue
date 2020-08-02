<template>
  <v-col
    cols="12"
    :md="field.md ? field.md : 6"
    :lg="field.lg ? field.lg : 6"
    :sm="field.sm ? field.sm : 6"
    :xs="field.xs ? field.xs : 6"
  >
    <v-card :class="`d-flex flex-row rounded-product-card grey lighten-4 ${field.class ? field.class : ''}`">
      <v-list-item>
        <v-list-item-avatar size="100">
          <v-img :src="imagePic" />
        </v-list-item-avatar>
        <v-list-item-action>
          <v-btn
            key="tra-2"
            small
            outlined
            rounded
            dense
            class="me-1 xsbtn"
            :href="field.hrefInstagram ? field.hrefInstagram : '#'"
          >
            <v-icon small>
              mdi-instagram
            </v-icon>
          </v-btn>
          <v-btn
            key="tra-5"
            small
            outlined
            rounded
            dense
            class="me-1 xsbtn"
            :href="field.hrefWhatsapp ? field.hrefWhatsapp : '#'"
          >
            <v-icon small>
              mdi-whatsapp
            </v-icon>
          </v-btn>
          <v-btn
            key="tra-6"
            small
            outlined
            rounded
            dense
            class="me-1 xsbtn"
            :href="field.hrefTelegram ? field.hrefTelegram : '#'"
          >
            <v-icon small>
              mdi-telegram
            </v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="ms-2 wrap-text">
            {{ field.label }}
          </v-list-item-title>
          <v-list-item-subtitle class="wrap-text">
            {{ field.message }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>
export default {
    name: "VfSupportCardInput",
    props: {
        field: Object,
        value: Object,
        id: String
    },
    computed: {
        imagePic() {
            return this.field.img ? this.field.img : "/images/avatar.png";
        },
    }
};
</script>

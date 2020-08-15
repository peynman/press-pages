<template>
  <v-col
    cols="12"
    :md="field.md ? field.md : 6"
    :lg="field.lg ? field.lg : 6"
    :sm="field.sm ? field.sm : 6"
    :xs="field.xs ? field.xs : 6"
  >
    <v-card :class="`d-flex flex-row rounded-product-card grey lighten-4 ${field.class ? field.class : ''}`">
    <v-list class="grey lighten-4 fill-width">
        <v-list-item class="fill-width">
            <v-list-item-avatar size="100">
            <v-img :src="imagePic" />
            </v-list-item-avatar>
            <v-list-item-content class="ms-3">
                <v-list-item-title>پشتیبان شما:</v-list-item-title>
            <v-list-item-title class="wrap-text">
                {{ label }}
            </v-list-item-title>
            <v-list-item-subtitle class="wrap-text">
                {{ message }}
            </v-list-item-subtitle>
            </v-list-item-content>
                <v-list-item-action>
                <v-btn
                    small
                    outlined
                    dense
                    icon
                    :href="hrefInstagram"
                    v-show="hrefInstagram !== '#'"
                >
                    <v-icon small>
                    mdi-instagram
                    </v-icon>
                </v-btn>
                <v-btn
                    small
                    outlined
                    icon
                    dense
                    :href="hrefWhatsapp"
                    v-show="hrefWhatsapp !== '#'"
                >
                    <v-icon small>
                    mdi-whatsapp
                    </v-icon>
                </v-btn>
                <v-btn
                    small
                    outlined
                    icon
                    dense
                    :href="hrefTelegram"
                    v-show="hrefTelegram !== '#'"
                >
                    <v-icon small>
                    mdi-telegram
                    </v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>
    </v-list>
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
        user() {
            return this.$store.state.user;
        },
        imagePic() {
            return this.user.support && this.user.support.image ?
                        this.user.support.image :
                        this.field.img ? this.field.img : "/images/avatar.png";
        },
        label () {
            return this.user.support && this.user.support.firstname ?
                this.user.support.firstname + ' ' + this.user.support.lastname :
                this.field.label
        },
        message() {
            return this.user.support && this.user.support.message ? this.user.support.message : this.field.label;
        },
        hrefTelegram () {
            return this.user.support && this.user.support.telegram_url ? this.user.support.telegram_url : this.field.hrefTelegram ? this.field.hrefTelegram : '#';

        },
        hrefInstagram () {
            return this.user.support && this.user.support.instagram_url ? this.user.support.instagram_url : this.field.hrefInstagram ? this.field.hrefInstagram : '#';
        },
        hrefWhatsapp () {
            return this.user.support && this.user.support.whatsapp_url ? this.user.support.whatsapp_url : this.field.hrefWhatsapp ? this.field.hrefWhatsapp : '#';
        }
    }
};
</script>

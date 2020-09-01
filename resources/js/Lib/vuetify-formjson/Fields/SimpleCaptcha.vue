<template>
<v-text-field v-model="devalue" :label="field.label" :class="`vf-input ${field.class ? field.class:''}`" v-bind="fieldProps" hide-details="auto" style="width: 100%" @keyup.native="updateInput($event)" v-on="eventHandlers">
    <template v-slot:prepend>
        <v-card>
            <v-img :src="captcha" width="100" height="36px" class="ma-auto"></v-img>
        </v-card>
    </template>
    <template v-slot:prepend-inner>
        <v-btn :loading="loading" icon class="ma-auto" @click="onRefreshCode();">
            <v-icon>mdi-refresh</v-icon>
        </v-btn>
    </template>
</v-text-field>
</template>

<script>
import BaseComponent from "./mixins";
import {
    VTextField
} from "vuetify/lib";
export default {
    components: {
        VTextField
    },
    mixins: [BaseComponent],
    name: "vf-simple-captcha-input",
    props: {
        id: String,
        field: Object,
        value: [Object, String, Array]
    },
    computed: {
        captcha() {
            return this.field.captcha?.img;
        }
    },
    data: () => ({
        loading: false,
    }),
    methods: {
        onRefreshCode: function () {
            this.loading = true;
            this.axios({
                url: '?refresh',
                data: {

                }
            }).then((response) => {
                this.loading = false;
                const host = this.$store.state.host;
                const sources = response.data.sources.filter((s) => s.path === 'captcha');
                let captcha = sources[0].resource;
                host.$refs.renderer.appendFormValues({
                    card: {
                        key: captcha.key
                    },
                    login: {
                        key: captcha.key
                    }
                });
                this.field.captcha.img = captcha.img;
                this.devalue = '';
            }).catch((err) => {
                this.loading = false;
                this.$store.state.host.showSnack(err.message);
            });
        },
        updateInput: function (ev) {
            if (
                !this.field.updateKeyCodes ||
                this.field.updateKeyCodes.length === 0 ||
                this.field.updateKeyCodes.includes(ev.keyCode)
            ) {
                // update input on tab/enter pressed
                this.$emit("input", this.devalue);
            }
        }
    }
};
</script>

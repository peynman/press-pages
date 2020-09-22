import Vue from 'vue'
import Vuetify from "vuetify/lib"
import { VBtn, VIcon, VSlider, VSpacer } from 'vuetify/lib'
import {
    Ripple
} from 'vuetify/lib/directives'

Vue.use(Vuetify, {
    directives: {
        Ripple,
    },
    components: {
        VBtn, VIcon, VSlider, VSpacer
    }
});

export default new Vuetify({
    rtl: true,
    options: {
        customProperties: true
    }
});

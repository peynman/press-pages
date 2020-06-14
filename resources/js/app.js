// App.js

require('./bootstrap');

import Vue from 'vue'
import axios from "axios"
import VueAxios from "vue-axios"

import vuetify from './Lib/vuetify'
import store from "./Lib/vuex"

import FormJSON from './Lib/vuetify-formjson'
import PageComponents from "./Lib/wrapper"
import Config, { PageStatus } from './config'
import App from './App.vue'

Vue.use(VueAxios, axios)
Vue.use(PageComponents)


import ProductCard from './Lib/online-academy/ProductCard.vue'
import ProductCardSettings from './Lib/online-academy/settings/ProductCard'
window.ExtraFormJSONComponents = {
    [ProductCard.name]: ProductCard,
}
window.ExtraFormJSONSettings = {
    [ProductCard.name]: new ProductCardSettings(),
};
for (const name in window.ExtraFormJSONComponents) {
    Vue.component(name, window.ExtraFormJSONComponents[name]);
}

Vue.use(FormJSON)

new Vue({
    el: '#App',
    store,
    vuetify,
    render: h => h(App),
});

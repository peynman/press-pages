// App.js

require('./bootstrap');

import Vue from 'vue'
import axios from "axios"
import VueAxios from "vue-axios"

import vuetify from './Lib/vuetify'
import store from "./Lib/vuex"
require('./Lib/formjson');

import App from './App.vue'

Vue.use(VueAxios, axios);

new Vue({
    el: '#App',
    store,
    vuetify,
    render: h => h(App),
});

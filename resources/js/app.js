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
Vue.use(FormJSON)

new Vue({
    el: '#App',
    store,
    vuetify,
    render: h => h(App),
});

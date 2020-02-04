// App.js

require('./bootstrap');

import Vue from 'vue';
import App from './pages/App.vue'

new Vue({
    el: '#App',
    render: h => h(App),
});

import Vue from 'vue'
import FormJSON from './vuetify-formjson'

window.ExtraFormJSONComponents = {
    'vf-product-card-input': () => import(/* webpackChunkName: "product-card"*/ './online-academy/ProductCard.vue'),
    'vf-current-cart-input': () => import(/* webpackChunkName: "current-cart"*/ './online-academy/CurrentCart.vue'),
    'vf-login-card-input': () => import(/* webpackChunkName: "login-card"*/ './online-academy/LoginCard.vue'),
    'vf-reports-chart-input': () => import(/* webpackChunkName: "reports-chart"*/ './online-academy/Reports/Chart.vue'),
    'vf-timer-card-input': () => import(/* webpackChunkName: "timer-card"*/  './online-academy/TimerCard.vue'),
    'vf-app-content': () => import(/* webpackChunkName: "app-content"*/  './online-academy/Content.vue')
}

import ProductCardSettings from './online-academy/settings/ProductCard'
import CurrentCartSettings from './online-academy/settings/CurrentCart'
import TimerCardSettings   from './online-academy/settings/TimerCard'
import ChartSettings       from './online-academy/Reports/settings/ChartSettings'

window.ExtraFormJSONSettings = {
    'vf-product-card-input': new ProductCardSettings(),
    'vf-current-cart-input': new CurrentCartSettings(),
    'vf-reports-chart-input': new ChartSettings(),
    'vf-timer-card-input': new TimerCardSettings(),
};

for (const name in window.ExtraFormJSONComponents) {
    if (Object.prototype.hasOwnProperty.call(window.ExtraFormJSONComponents, name)) {
        Vue.component(name, window.ExtraFormJSONComponents[name]);
    }
}

Vue.use(FormJSON);

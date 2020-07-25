
import Vue from 'vue'
import FormJSON from './vuetify-formjson'

window.ExtraFormJSONComponents = {
    'vf-product-card-input': () => import(/* webpackChunkName: "product-card"*/ './online-academy/ProductCard.vue'),
    'vf-current-cart-input': () => import(/* webpackChunkName: "current-cart"*/ './online-academy/CurrentCart.vue'),
    'vf-login-card-input': () => import(/* webpackChunkName: "login-card"*/ './online-academy/LoginCard.vue'),
    'vf-timer-card-input': () => import(/* webpackChunkName: "timer-card"*/  './online-academy/TimerCard.vue'),
    'vf-app-content': () => import(/* webpackChunkName: "app-content"*/  './online-academy/Content.vue'),
    'vf-product-childrens-card-input': () => import(/* webpackChunkName: "product-childrens-card"*/  './online-academy/ProductChildrensCard.vue'),
    'vf-login-card-input': () => import(/* webpackChunkName: "login-card"*/ './online-academy/LoginCard.vue'),
    'vf-support-card-input': () => import(/* webpackChunkName: "login-card"*/ './online-academy/SupportCard.vue'),
}

import ProductCardSettings from './online-academy/settings/ProductCard'
import CurrentCartSettings from './online-academy/settings/CurrentCart'
import TimerCardSettings   from './online-academy/settings/TimerCard'
import ProductChildrensCardSettings from './online-academy/settings/ProductChildrensCard'
import LoginCardSettings from './online-academy/settings/LoginCard'
import SupportCardSettings from './online-academy/settings/SupportCard'

window.ExtraFormJSONSettings = {
    'vf-product-card-input': new ProductCardSettings(),
    'vf-current-cart-input': new CurrentCartSettings(),
    'vf-timer-card-input': new TimerCardSettings(),
    'vf-product-childrens-card-input': new ProductChildrensCardSettings(),
    'vf-support-card-input': new SupportCardSettings(),
    'vf-login-card-input': new LoginCardSettings(),
};

for (const name in window.ExtraFormJSONComponents) {
    if (Object.prototype.hasOwnProperty.call(window.ExtraFormJSONComponents, name)) {
        Vue.component(name, window.ExtraFormJSONComponents[name]);
    }
}

Vue.use(FormJSON);

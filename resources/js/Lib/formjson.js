
import Vue from 'vue'
import FormJSON from './vuetify-formjson'

window.ExtraFormJSONComponents = {
    'vf-product-card-input': () => import(/* webpackChunkName: "product-card"*/ './online-academy/ProductCard.vue'),
    'vf-current-cart-input': () => import(/* webpackChunkName: "current-cart"*/ './online-academy/CurrentCart.vue'),
    'vf-login-card-input': () => import(/* webpackChunkName: "login-card"*/ './online-academy/LoginCard.vue'),
    'vf-timer-card-input': () => import(/* webpackChunkName: "timer-card"*/  './online-academy/TimerCard.vue'),
    'vf-app-content': () => import(/* webpackChunkName: "app-content"*/  './online-academy/Content.vue'),
    'vf-product-childrens-card-input': () => import(/* webpackChunkName: "product-childrens-card1"*/  './online-academy/ProductChildrensCard.vue'),
    'vf-support-card-input': () => import(/* webpackChunkName: "support-card"*/ './online-academy/SupportCard.vue'),
    'vf-cart-history-input': () => import(/* webpackChunkName: "cart-history"*/ './online-academy/CartHistory.vue'),
    'vf-product-video-link-input': () => import(/* webpackChunkName: "video-link"*/ './online-academy/ProductVideoLink.vue'),
    'vf-video-player-input': () => import(/* webpackChunkName: "video-player1"*/ './online-academy/VideoPlayer.vue'),
    'vf-livesstream-input': () => import(/* webpackChunkName: "live-window1"*/ './online-academy/LivestreamWindow.vue'),
    'vf-product-download-link-input': () => import(/* webpackChunkName: "product-download-link1"*/ './online-academy/ProductDownloadLink.vue'),
    'vf-ac-session-link-input': () => import(/* webpackChunkName: "ac-session-link"*/ './online-academy/AcSessionLink.vue'),
    'vf-image-input': () => import(/* webpackChunkName: "image-input"*/ './online-academy/ImageInput.vue'),
    'vf-week-calendar-input': () => import(/* webpackChunkName: "week-calendar-input"*/ './online-academy/WeekCalendar.vue'),
    'vf-rev-slider-input': () => import(/* webpackChunkName: "rev-slider"*/ './online-academy/RevSlider.vue'),
}

import ProductCardSettings from './online-academy/settings/ProductCard'
import CurrentCartSettings from './online-academy/settings/CurrentCart'
import TimerCardSettings   from './online-academy/settings/TimerCard'
import ProductChildrensCardSettings from './online-academy/settings/ProductChildrensCard'
import LoginCardSettings from './online-academy/settings/LoginCard'
import SupportCardSettings from './online-academy/settings/SupportCard'
import CartHistorySettings from './online-academy/settings/CartHistory'
import ProductDownloadLinkSettings from './online-academy/settings/ProductDownloadLink'
import ProductVideoLinkSettings from './online-academy/settings/ProductVideoLink'
import LivestreamWindowSettings from './online-academy/settings/LiveStreamWindow'
import VideoPlayerSettings from './online-academy/settings/VideoPlayer'
import LiveStreamWindowSettings from './online-academy/settings/LiveStreamWindow'
import ACSessionLinkSettings from './online-academy/settings/AcSessionLink'
import ImageInputSettings from './online-academy/settings/ImageInput'
import WeekCalendarSettings from './online-academy/settings/WeekCalendar'
import RevSliderSettings from './online-academy/settings/RevSlider'

window.ExtraFormJSONSettings = {
    'vf-product-card-input': new ProductCardSettings(),
    'vf-current-cart-input': new CurrentCartSettings(),
    'vf-timer-card-input': new TimerCardSettings(),
    'vf-product-childrens-card-input': new ProductChildrensCardSettings(),
    'vf-support-card-input': new SupportCardSettings(),
    'vf-login-card-input': new LoginCardSettings(),
    'vf-cart-history-input': new CartHistorySettings(),
    'vf-product-video-link-input': new ProductVideoLinkSettings(),
    'vf-product-download-link-input': new ProductDownloadLinkSettings(),
    'vf-video-player-input': new VideoPlayerSettings(),
    'vf-livesstream-input': new LiveStreamWindowSettings(),
    'vf-image-input': new ImageInputSettings(),
    'vf-week-calendar-input': new WeekCalendarSettings(),
    'vf-rev-slider-input': new RevSliderSettings(),
};

for (const name in window.ExtraFormJSONComponents) {
    if (Object.prototype.hasOwnProperty.call(window.ExtraFormJSONComponents, name)) {
        Vue.component(name, window.ExtraFormJSONComponents[name]);
    }
}

Vue.use(FormJSON);

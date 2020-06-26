
import Vue from 'vue'
import FormJSON from './vuetify-formjson'

import ProductCard from './online-academy/ProductCard.vue'
import ProductCardSettings from './online-academy/settings/ProductCard'

import CurrentCart from './online-academy/CurrentCart.vue'
import CurrentCartSettings from './online-academy/settings/CurrentCart'
import LoginCard from './online-academy/LoginCard.vue'

window.ExtraFormJSONComponents = {
    'vf-product-card-input': ProductCard,
    [CurrentCart.name]: CurrentCart,
    [LoginCard.name]: LoginCard,

}
window.ExtraFormJSONSettings = {
    [ProductCard.name]: new ProductCardSettings(),
    [CurrentCart.name]: new CurrentCartSettings(),
};

for (const name in window.ExtraFormJSONComponents) {
    Vue.component(name, window.ExtraFormJSONComponents[name]);
}

Vue.use(FormJSON);

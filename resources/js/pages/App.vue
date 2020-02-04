<template>
    <v-app
            class="purple lighten-5"
    >
        <component :is="content" v-bind="contentProps"/>
    </v-app>
</template>

<script>
    import Vue from 'vue'
    import Vuetify from 'vuetify'
    import Vuex, {mapState} from 'vuex'
    import VuetifyLib from 'vuetify/lib'
    import axios from 'axios';
    import VueAxios from 'vue-axios';
    import PageComponents from './Lib/wrapper'
    import DashboardComponents from 'peynman-larapress-dashboard'

    Vue.use(VueAxios, axios);
    Vue.use(Vuetify);
    Vue.use(Vuex);
    Vue.use(DashboardComponents);
    Vue.use(PageComponents);

    const store = new Vuex.Store({
        state: {
            config: {
                rtl: window.AppConfig.language.rtl,
            },
            page: {
                title: window.AppConfig.page.body.title,
                content: window.AppConfig.page.body.content,
            }
        },
        mutations: {
        },
        actions: {},
        getters: {
            isRTL: state => state.config.rtl,
        }
    });

    Vue.mixin({
        methods: {
            getMenuItemKey(item, index) {
                return item.component + item.props.title.replace(/\s+/g, '-').toLowerCase() + '-' + index;
            },
        }
    });

    const vuetify = new VuetifyLib({
        rtl: window.AppConfig.language.rtl,
    });
    export default {
        name: 'lpp-app',
        store,
        vuetify,
        computed: {
            ...mapState({
                content: (state) => state.page.content.component,
                contentProps: (state) => state.page.content.props,
            }),
        }
    }
</script>
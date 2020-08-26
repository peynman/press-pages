<template>
  <v-app class="larapress-app">
    <v-overlay :value="loading">
      <v-progress-circular
        indeterminate
        size="64"
      />
    </v-overlay>
    <v-snackbar
      v-for="(snack, index) in snacks"
      :key="index"
      v-model="snack.visible"
      :color="snack.color"
    >
        <div class="d-flex flex-row justify-space-between">
            <span>{{ snack.message }}</span>
            <v-btn
                color="white"
                icon
                @click="snack.visible = false"
            >
                <v-icon small>
                mdi-close
                </v-icon>
            </v-btn>
        </div>
    </v-snackbar>
    <component
      :is="template"
      v-if="template"
      ref="renderer"
      v-bind="templateProps"
      @goto-page="onGotoPage"
      @update-user="onUpdateUser"
    />
    <v-alert v-else>
      No template is defined in Page Body
    </v-alert>
  </v-app>
</template>

<script>
import CenteredTemplate from "./templates/Centered.vue";
import AppBarTemplate from "./templates/AppBar.vue";
import AdminTemplate from "./templates/AdminBar.vue";

import FormJSONRenderer from "./Lib/vuetify-formjson/Fields/FormJSONBuilder/generator";

export default {
    name: "App",
    components: {
        Centered: CenteredTemplate,
        AppBar: AppBarTemplate,
        AdminBar: AdminTemplate
    },
    mixins: [FormJSONRenderer],
    data() {
        return {
            template: null,
            templateProps: null,
            loading: false,
            snacks: [],
        };
    },
    computed: {},
    mounted() {
        if (window.PageConfig) {
            const params = new URLSearchParams(window.location.search);
            this.updatePageWithData(window.PageConfig);
        }

        this.$store.state.host = this;
    },
    methods: {
        onGotoPage(page, data) {
            this.loading = true;
            this.axios({
                url: page,
                method: "GET",
                headers: this.getWebAuthHeaders({ Accept: "application/json" })
            })
                .then(response => {
                    this.loading = false;
                    this.updatePageWithData(response.data);
                    window.history.pushState(
                        `${response.data.title
                            .toLowerCase()
                            .replace(/g /, "")}-${Date.now().toFixed()}`,
                        response.data.title,
                        page
                    );
                })
                .catch(error => {
                    if (error.response && error.response.message) {
                        this.snacks.push({
                            visible: true,
                            message: error.response.message
                        });
                    } else {
                        this.snacks.push({
                            visible: true,
                            message: "An error happened, this will be reported"
                        });
                    }
                });
        },

        onUpdateUser(user, token) {
            this.$store.state.user = user;
            this.$store.state.tokens = { api: token };
        },

        updatePageWithData(data) {
            window.document.title = data.title;
            this.templateProps = {
                body: data.body,
                options: data.body?.template?.props,
                sources: data.sources,
                id: 'page'
            };
            this.template = data.body?.template?.name;
            this.loading = false;

            if (this.$store.state.user === null || data.user != null) {
                this.onUpdateUser(data.user, data.tokens.api);
            }
            if (data.currencies) {
                this.$store.state.currencies = data.currencies;
            }
            if (data.channels) {
                this.$store.state.channels = data.channels;
            }
        },

        showSnack(message, color = 'red') {
            this.snacks.push({
                message,
                visible: true,
                color,
            });
        }
    }
};
</script>

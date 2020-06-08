<template>
  <v-app class="larapress-app">
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-snackbar v-for="(snack, index) in snacks" :key="index" v-model="snack.visible">
      {{ snack.message }}
      <v-btn color="red" icon @click="snack.visible = false">
        <v-icon small>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <component
      v-if="template"
      :is="template"
      v-bind="templateProps"
      @goto-page="onGotoPage"
    ></component>
  </v-app>
</template>

<script>
import CenteredTemplate from "./templates/Centered.vue";
import AppBarTemplate from "./templates/AppBar.vue";
import AdminTemplate from "./templates/AdminBar.vue";

import FormJSONRenderer from "./Lib/vuetify-formjson/Fields/FormJSONBuilder/generator";

export default {
  components: {
    Centered: CenteredTemplate,
    AppBar: AppBarTemplate,
    AdminBar: AdminTemplate
  },
  mixins: [FormJSONRenderer],
  name: "app",
  data() {
    return {
      template: null,
      templateProps: null,
      loading: false,
      snacks: [],
    };
  },
  computed: {},
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

    onUpdateUser(user, tokens) {
      this.$store.state.user = user;
      this.$store.state.tokens = tokens;
    },

    updatePageWithData(data) {
      window.document.title = data.title;
      if (typeof data.template === 'string') {
      this.template = data.template;
      this.templateProps = {
        body: data.body,
        options: {},
        sources: data.sources,
      };
      } else {
      this.template = data.template.name;
      this.templateProps = {
        body: data.body,
        options: data.template.props,
        sources: data.sources,
      };
      }
      this.loading = false;

    },

    showSnack(message) {
      this.snacks.push({
        message,
        visible: true
      });
    }
  },
  mounted() {
    if (window.PageConfig) {
      const params = new URLSearchParams(window.location.search);
      this.updatePageWithData(window.PageConfig);
      // set existing auth tokens from HTML datat
      if (window.PageConfig.tokens.api) {
        this.$store.state.tokens.api = window.PageConfig.tokens.api;
      }
    }
  }
};
</script>

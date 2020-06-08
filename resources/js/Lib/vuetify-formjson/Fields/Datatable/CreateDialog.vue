<template>
  <v-dialog v-model="showCreate" persisted max-width="800px" @click:outside="$emit('on-cancel')">
    <template v-slot:activator="{ on }">
      <v-btn :color="showCreate ? 'warning':'success'" :href="url" icon x-small text v-on="on" @click.stop.prevent="">
        <v-icon small>{{ showCreate ? 'mdi-close':'mdi-plus-box' }}</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <vf-fields-renderer
          v-if="field"
          ref="renderer"
          class="pa-2"
          :fields="field.fields"
          :options="field.options"
          v-model="devalue"
        ></vf-fields-renderer>
      </v-card-text>
      <v-card-actions v-if="field">
        <vf-fields-renderer v-bind="formActionFields"></vf-fields-renderer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {
  VDialog,
  VBtn,
  VIcon,
  VCard,
  VCardText,
  VContainer
} from "vuetify/lib";
export default {
  components: {
    VDialog,
    VBtn,
    VIcon,
    VCard,
    VCardText,
    VContainer
  },
  name: "vf-datatable-dialog-create",
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    url: String,
    field: Object,
    forceShow: Boolean,
    editMode: Boolean
  },
  data() {
    return {
      showCreate: false,
      devalue: this.value
    };
  },
  computed: {
    formActionFields: function() {
      return !this.editMode
        ? {
            options: {
              type: "row",
              formClass: "ma-0 pa-0"
            },
            fields: {
              addnclose: {
                type: "input",
                input: "button",
                label: "Add and Close",
                class: "col-4 ma-auto",
                action: "add_n_close",
                props: {
                  outlined: true,
                  color: "primary",
                  small: true,
                  click: () => {
                    this.$emit("on-create", this.devalue);
                    this.showCreate = false;
                  }
                }
              },
              addnnew: {
                type: "input",
                input: "button",
                label: "Add and New",
                class: "col-4 ma-auto",
                action: "add_n_new",
                props: {
                  outlined: true,
                  color: "primary",
                  small: true,
                  click: () => {
                    this.$emit("on-create", this.devalue);
                    this.devalue = Object.assign({});
                  }
                }
              },
              cancel: {
                type: "input",
                input: "button",
                label: "Cancel",
                class: "col-3 ma-auto",
                action: "close",
                props: {
                  outlined: true,
                  color: "warning",
                  small: true,
                  click: () => {
                    this.$emit("on-cancel");
                    this.showCreate = false;
                  }
                }
              }
            }
          }
        : {
            options: {},
            fields: {
              update: {
                type: "input",
                input: "button",
                label: "Update",
                class: "col-6 ma-auto",
                action: "update",
                props: {
                  outlined: true,
                  color: "primary",
                  small: true,
                  click: () => {
                    this.$emit("on-update", this.devalue);
                    this.devalue = Object.assign({});
                  }
                }
              },
              cancel: {
                type: "input",
                input: "button",
                label: "Cancel",
                class: "col-3 ma-auto",
                action: "close",
                props: {
                  outlined: true,
                  color: "warning",
                  small: true,
                  click: () => {
                    this.$emit("on-cancel", () => {
                      this.showCreate = false;
                    });
                  }
                }
              }
            }
          };
    }
  },
  watch: {
    devalue: {
      deep: true,
      handler() {
        this.$emit("input", this.devalue);
      }
    },
    value: {
      deep: true,
      handler() {
        this.devalue = this.value;
      }
    },
    forceShow: function() {
      this.showCreate = this.forceShow;
    }
  },
  mounted() {
    this.showCreate = this.forceShow;
  }
};
</script>

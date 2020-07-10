<template>
  <div :class="`vf-input ${field.class ? field.class : ''}`">
    <confirm ref="confirm"></confirm>
    <v-toolbar :dark="mode !== 'editor'" flat dense class="ma-0 pa-0">
      <label>
        <v-btn
          :color="mode === 'view' ? 'warning':'primary'"
          icon
          small
          @click="mode = mode === 'view' ? 'editor':'view'"
        >
          <v-icon small>mdi-eye</v-icon>
        </v-btn>
        <v-btn
          :color="mode === 'json' ? 'warning':'primary'"
          icon
          small
          @click="mode = mode === 'json' ? 'editor':'json'"
        >
          <v-icon small>mdi-code-array</v-icon>
        </v-btn>
        <v-btn
          :color="mode === 'blockly' ? 'warning':'primary'"
          icon
          small
          @click="mode = mode === 'blockly' ? 'editor':'blockly'"
        >
          <v-icon small>mdi-code-greater-than-or-equal</v-icon>
        </v-btn>
        {{ field.label }}
      </label>
      <v-spacer></v-spacer>
      <v-select
        style="max-width: 250px;"
        item-value="id"
        item-text="title"
        reverse
        rounded
        solo
        small
        chips
        flat
        hide-details
        v-model="template"
        label="Template"
        dense
        v-if="templates"
        :items="templates"
      ></v-select>
      <v-btn small icon @click="onResetValues" color="red">
        <v-icon small>mdi-database-refresh</v-icon>
      </v-btn>
      <v-btn small icon @click="onReset" color="red">
        <v-icon small>mdi-refresh</v-icon>
      </v-btn>
      <v-btn small icon @click="onDownload">
        <v-icon small>mdi-download</v-icon>
      </v-btn>
      <v-btn small icon @click="startJSONUpload(onUploaded)()">
        <v-icon small>mdi-upload</v-icon>
      </v-btn>
    </v-toolbar>
    <vf-fields-renderer
      v-show="mode === 'editor'"
      :options="{}"
      :fields="formBuilderTreeview"
      v-model="schema"
      :style="`${field.height ? `min-height: ${field.height}px`: ''}`"
    ></vf-fields-renderer>
    <div v-show="mode === 'view'">
      <v-system-bar dark :color="blocklyError ? 'red' : 'primary' ">
        Form Preview
        <span class="red--text text--lighten-3">{{ blocklyError ? '(has errors)':'' }}</span>
      </v-system-bar>
      <vuetify-formjson v-model="formModel" v-bind="this[this.getFormSchemaPropName()]"></vuetify-formjson>
    </div>
    <v-card light v-show="mode === 'blockly'" flat class="fill-height">
      <v-system-bar dark :color="blocklyError ? 'red' : 'primary' ">
        <v-btn class="right" icon small @click="blocklyPasteContent()">
          <v-icon small>mdi-content-paste</v-icon>
        </v-btn>
        <v-btn class="right" icon small @click="blocklyCopyContent()">
          <v-icon small>mdi-content-copy</v-icon>
        </v-btn>
        <v-btn class="right" icon small @click="showCode = !showCode">
          <v-icon small>{{ showCode ? 'mdi-eye':'mdi-code-braces-box' }}</v-icon>
        </v-btn>Define functions and callbacks
        <span
          class="red--text text--lighten-3"
        >{{ blocklyError ? '(has errors)':'' }}</span>
        <v-spacer></v-spacer>
        <v-dialog v-if="blocklyError" v-model="blocklyErrorDialog">
          <template v-slot:activator="{on}">
            <v-btn small icon v-on="on">
              <v-icon small>mdi-flask-remove-outline</v-icon>
            </v-btn>
          </template>
          <v-card dark color="red">
            <v-card-title>{{ blocklyError.message }}</v-card-title>
            <v-card-text>{{ blocklyError.stack }}</v-card-text>
          </v-card>
        </v-dialog>
      </v-system-bar>
      <v-card-text class="ma-0 pa-0 fill-height">
        <vf-blockly-input
          ref="blocklyEditor"
          v-if="! showCode"
          :field="blocklyField"
          v-model="codeModel"
          @selection="onBlocklySelectionChanged"
        ></vf-blockly-input>
        <vf-code-input v-if="showCode" v-model="blocklyJSCode" :field="{}"></vf-code-input>
      </v-card-text>
    </v-card>
    <v-card light v-if="mode === 'json'" flat class="fill-height">
      <v-system-bar dark color="primary">
        Manual FormBuilder edit
        <v-spacer></v-spacer>
        <v-btn class="right" dark icon small @click="applyManualEditor">
          <v-icon small>mdi-content-save</v-icon>
        </v-btn>
        <v-btn class="right" dark icon small @click="resetManualEditor">
          <v-icon small>mdi-refresh-circle</v-icon>
        </v-btn>
      </v-system-bar>
      <v-card-text class="ma-0 pa-0 fill-height">
        <vf-code-input
          class="fill-height"
          v-show="mode === 'json'"
          :field="{}"
          v-model="jsonString"
        ></vf-code-input>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import FormJSONBuilder from "./builder";
import { JSONWorkspace } from "./../mixins";
import confirm from "./../../Confirm.vue";
import TreeModel from "tree-model";
import Blockly from "blockly";
import FormJSONBuilderRenderer from "./generator";
import { GenerateJSCode } from "./../Blockly/generator";
import BuilderJSONWorkspaceButtons from "./workspace";
import {
  VCard,
  VCardTitle,
  VBtn,
  VIcon,
  VCardText,
  VSpacer,
  VToolbar,
  VDialog,
  VSystemBar
} from "vuetify/lib";

export default {
  components: {
    confirm,
    VCard,
    VCardTitle,
    VBtn,
    VIcon,
    VCardText,
    VSpacer,
    VToolbar,
    VDialog,
    VSystemBar
  },
  mixins: [
    FormJSONBuilder,
    FormJSONBuilderRenderer,
    JSONWorkspace,
    BuilderJSONWorkspaceButtons
  ],
  name: "vf-formjson-input",
  props: {
    id: String,
    field: Object,
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    const treeModel = new TreeModel({});
    const tree = this.field.tree
      ? this.field.tree
      : {
          id: "sample_form",
          type: "vf-fields-renderer",
          children: []
        };
    const items = [treeModel.parse(JSON.parse(JSON.stringify(tree)))]; // use a copy to keep this.tree intact
    return {
      treeModel,
      devalue: this.value,
      schema: {
        builder: items
      },
      formBuilderTreeview: {
        builder: {
          type: "group",
          group: "treeview",
          iconProps: {
            small: true
          },
          btnProps: {
            small: true
          },
          drawerProps: {
            width: 400,
            dark: false,
            "center-active": true
          },
          formProps: {
            class: "pa-4",
            options: {
              type: "col",
              dense: true,
              small: true
            }
          },
          class: "fill-height ma-2",
          decorator: {
            id: "model.id",
            title: "model.title",
            type: "model.type",
            label: "[:type] #:id"
          },
          actions: this.getFormJSONBuilderActionProviderForTreeview(),
          props: {
            dense: true,
            "item-key": "id",
            "item-text": "title",
            shaped: true,
            hoverable: true,
            rounded: true,
            "return-object": true,
            "selection-type": "independent",
            "multiple-active": false,
            transition: true
          }
        }
      },
      showCodeEditor: false,
      mode: "editor",
      codeModel: {},
      blocklyErrorDialog: false,
      blocklyField: {
        class: "fill-height"
      },
      currentSelectedBlocksCode: "",
      blocklyError: null,
      fullscreenCodeEditor: false,
      showCode: false,
      blocklyJSCode: "",
      jsonString: "",
      onFormInit: null,
      template: null,
      templates: this.field.templates
        ? this.field.templates
        : [
            {
              id: "Centered",
              title: "Centered"
            },
            {
              id: "AppBar",
              title: "App Navigation"
            },
            {
              id: "AdminBar",
              title: "Admin Navigation"
            }
          ]
    };
  },
  methods: {
    /**
     * update component value,
     * update internal values for current component state
     * update the preview form by compiling values
     */
    updateFormJSONInput() {
      const formjson = this.getFormJSONFromSchema(this.schema.builder);
      const formId = this.schema.builder[0].model.id;
      try {
        const compiledForm = this.CompileFormJSONSchemaWithCode(
          this,
          formjson,
          this.codeModel,
          {}
        );
        this[this.getFormSchemaPropName()] = {
          fields: compiledForm[formId].fields,
          options: compiledForm[formId].options,
          id: formId
        };
        this.blocklyError = null;
        this.onFormInit = compiledForm.onFormInit;
      } catch (e) {
        this.blocklyError = e;
      }

      this.$nextTick(() => {
          const workspace = this.getWorkspace();
          this.jsonString = JSON.stringify(workspace, null, 2);
          this.$emit("input", workspace);
      });
    },
    applyManualEditor() {
      try {
        this.onUploaded(JSON.parse(this.jsonString));
      } catch (e) {
        console.log(e);
      }
    },
    resetManualEditor() {
      this.jsonString = JSON.stringify(this.getWorkspace(), null, 2);
    },
    onBlocklySelectionChanged(code) {
      this.currentSelectedBlocksCode = code;
    },
    blocklyCopyContent() {
      this.onCopyToClipBoard(this.currentSelectedBlocksCode);
    },
    blocklyPasteContent() {
      this.onPasteFromClipboard(text => {
        this.$refs.blocklyEditor.pasteToWorkspace(text);
      });
    }
  },

  mounted() {
    if (this.devalue && this.devalue.code && this.devalue.schema) {
      this.onUploaded(this.devalue);
    } else {
      /**
       * set component init value
       */
      this.updateFormJSONInput();
    }
  },

  watch: {
    mode() {
      /**
       * blockly needs to be refreshed, when displayed for the first time,
       *  or window is resized after display
       */
      if (this.mode === "blockly") {
        this.$nextTick(() => {
          if (this.$refs.blocklyEditor) {
            this.$refs.blocklyEditor.refreshSize();
            this.$refs.blocklyEditor.updateBlocks();
          }
        });
      } else if (this.mode === "view") {
        // if (this.onFormInit) {
        //   this.onFormInit();
        // }
      }
    },

    /**
     * update component value when schema (treeview model) is chabged
     */
    schema: {
      deep: true,
      handler() {
        this.updateFormJSONInput();
        this.$emit("update:schema", this.schema);
      }
    },

    /**
     * update component value when code is changed
     */
    codeModel() {
      this.updateFormJSONInput();
      this.blocklyJSCode = GenerateJSCode(
        Blockly,
        this.codeModel,
        this.field.blocks
      );
      this.$emit("update:code", this.schema);
    },

    template() {
      this.updateFormJSONInput();
    },

    formModel: {
      deep: true,
      handler() {
        this.updateFormJSONInput();
        this.resetManualEditor();
      }
    }
  }
};
</script>

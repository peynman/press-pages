(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["builder"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Confirm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Confirm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Vuetify Confirm Dialog component
 *
 * Insert component where you want to use it:
 * <confirm ref="confirm"></confirm>
 *
 * Call it:
 * this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})
 * Or use await:
 * if (await this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' })) {
 *   // yes
 * }
 * else {
 *   // cancel
 * }
 *
 * Alternatively you can place it in main App component and access it globally via this.$root.$confirm
 * <template>
 *   <v-app>
 *     ...
 *     <confirm ref="confirm"></confirm>
 *   </v-app>
 * </template>
 *
 * mounted() {
 *   this.$root.$confirm = this.$refs.confirm.open
 * }
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VDialog: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VDialog"],
    VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VCard"],
    VToolbar: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VToolbar"],
    VSpacer: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VSpacer"],
    VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VBtn"],
    VCardActions: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VCardActions"],
    VCardText: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VCardText"],
    VToolbarTitle: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VToolbarTitle"]
  },
  data: function data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      message: null,
      title: null,
      options: {
        color: 'primary',
        width: 290,
        zIndex: 200
      }
    };
  },
  methods: {
    open: function open(title, message, options) {
      var _this = this;

      this.dialog = true;
      this.title = title;
      this.message = message;
      this.options = Object.assign(this.options, options);
      return new Promise(function (resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      });
    },
    agree: function agree() {
      this.resolve(true);
      this.dialog = false;
    },
    cancel: function cancel() {
      this.resolve(false);
      this.dialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/builder.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./resources/js/Lib/vuetify-formjson/Fields/mixins.js");
/* harmony import */ var _Confirm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Confirm.vue */ "./resources/js/Lib/vuetify-formjson/Confirm.vue");
/* harmony import */ var tree_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tree-model */ "./node_modules/tree-model/index.js");
/* harmony import */ var tree_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tree_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blockly */ "./node_modules/blockly/index.js");
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generator */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/generator.js");
/* harmony import */ var _Blockly_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Blockly/generator */ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/generator.js");
/* harmony import */ var _workspace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workspace */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/workspace.js");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    confirm: _Confirm_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_8__["VCard"],
    VCardTitle: vuetify_lib__WEBPACK_IMPORTED_MODULE_8__["VCardTitle"],
    VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_8__["VBtn"],
    VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_8__["VIcon"],
    VCardText: vuetify_lib__WEBPACK_IMPORTED_MODULE_8__["VCardText"],
    VSpacer: vuetify_lib__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],
    VToolbar: vuetify_lib__WEBPACK_IMPORTED_MODULE_8__["VToolbar"],
    VDialog: vuetify_lib__WEBPACK_IMPORTED_MODULE_8__["VDialog"],
    VSystemBar: vuetify_lib__WEBPACK_IMPORTED_MODULE_8__["VSystemBar"]
  },
  mixins: [_builder__WEBPACK_IMPORTED_MODULE_0__["default"], _generator__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins__WEBPACK_IMPORTED_MODULE_1__["JSONWorkspace"], _workspace__WEBPACK_IMPORTED_MODULE_7__["default"]],
  name: "vf-formjson-input",
  props: {
    id: String,
    field: Object,
    value: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    var treeModel = new tree_model__WEBPACK_IMPORTED_MODULE_3___default.a({});
    var tree = this.field.tree ? this.field.tree : {
      id: "sample_form",
      type: "vf-fields-renderer",
      children: []
    };
    var items = [treeModel.parse(JSON.parse(JSON.stringify(tree)))]; // use a copy to keep this.tree intact

    return {
      treeModel: treeModel,
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
            "class": "pa-4",
            options: {
              type: "col",
              dense: true,
              small: true
            }
          },
          "class": "fill-height ma-2",
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
        "class": "fill-height"
      },
      currentSelectedBlocksCode: "",
      blocklyError: null,
      fullscreenCodeEditor: false,
      showCode: false,
      blocklyJSCode: "",
      jsonString: "",
      onFormInit: null,
      template: null,
      templates: this.field.templates ? this.field.templates : [{
        id: "Centered",
        title: "Centered"
      }, {
        id: "AppBar",
        title: "App Navigation"
      }, {
        id: "AdminBar",
        title: "Admin Navigation"
      }]
    };
  },
  methods: {
    /**
     * update component value,
     * update internal values for current component state
     * update the preview form by compiling values
     */
    updateFormJSONInput: function updateFormJSONInput() {
      var _this = this;

      var formjson = this.getFormJSONFromSchema(this.schema.builder);
      var formId = this.schema.builder[0].model.id;

      try {
        var compiledForm = this.CompileFormJSONSchemaWithCode(this, formjson, this.codeModel, {});
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

      this.$nextTick(function () {
        var workspace = _this.getWorkspace();

        _this.jsonString = JSON.stringify(workspace, null, 2);

        _this.$emit("input", workspace);
      });
    },
    applyManualEditor: function applyManualEditor() {
      try {
        this.onUploaded(JSON.parse(this.jsonString));
      } catch (e) {
        console.log(e);
      }
    },
    resetManualEditor: function resetManualEditor() {
      this.jsonString = JSON.stringify(this.getWorkspace(), null, 2);
    },
    onBlocklySelectionChanged: function onBlocklySelectionChanged(code) {
      this.currentSelectedBlocksCode = code;
    },
    blocklyCopyContent: function blocklyCopyContent() {
      this.onCopyToClipBoard(this.currentSelectedBlocksCode);
    },
    blocklyPasteContent: function blocklyPasteContent() {
      var _this2 = this;

      this.onPasteFromClipboard(function (text) {
        _this2.$refs.blocklyEditor.pasteToWorkspace(text);
      });
    }
  },
  mounted: function mounted() {
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
    mode: function mode() {
      var _this3 = this;

      /**
       * blockly needs to be refreshed, when displayed for the first time,
       *  or window is resized after display
       */
      if (this.mode === "blockly") {
        this.$nextTick(function () {
          if (_this3.$refs.blocklyEditor) {
            _this3.$refs.blocklyEditor.refreshSize();

            _this3.$refs.blocklyEditor.updateBlocks();
          }
        });
      } else if (this.mode === "view") {// if (this.onFormInit) {
        //   this.onFormInit();
        // }
      }
    },

    /**
     * update component value when schema (treeview model) is chabged
     */
    schema: {
      deep: true,
      handler: function handler() {
        this.updateFormJSONInput();
        this.$emit("update:schema", this.schema);
      }
    },

    /**
     * update component value when code is changed
     */
    codeModel: function codeModel() {
      this.updateFormJSONInput();
      this.blocklyJSCode = Object(_Blockly_generator__WEBPACK_IMPORTED_MODULE_6__["GenerateJSCode"])(blockly__WEBPACK_IMPORTED_MODULE_4___default.a, this.codeModel, this.field.blocks);
      this.$emit("update:code", this.schema);
    },
    template: function template() {
      this.updateFormJSONInput();
    },
    formModel: {
      deep: true,
      handler: function handler() {
        this.updateFormJSONInput();
        this.resetManualEditor();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Confirm.vue?vue&type=template&id=62ccaf84&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Confirm.vue?vue&type=template&id=62ccaf84& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      style: { zIndex: _vm.options.zIndex },
      attrs: { "max-width": _vm.options.width },
      on: {
        keydown: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.cancel($event)
        }
      },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            {
              attrs: { dark: "", color: _vm.options.color, dense: "", flat: "" }
            },
            [
              _c("v-toolbar-title", { staticClass: "white--text" }, [
                _vm._v(_vm._s(_vm.title))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !!_vm.message,
                  expression: "!!message"
                }
              ],
              staticClass: "pa-4"
            },
            [_vm._v(_vm._s(_vm.message))]
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "pt-0" },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary darken-1", text: "" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.agree($event)
                    }
                  }
                },
                [_vm._v("Yes")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "grey", text: "" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.cancel($event)
                    }
                  }
                },
                [_vm._v("Cancel")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue?vue&type=template&id=07cd1165&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue?vue&type=template&id=07cd1165& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: "vf-input " + (_vm.field.class ? _vm.field.class : "") },
    [
      _c("confirm", { ref: "confirm" }),
      _vm._v(" "),
      _c(
        "v-toolbar",
        {
          staticClass: "ma-0 pa-0",
          attrs: { dark: _vm.mode !== "editor", flat: "", dense: "" }
        },
        [
          _c(
            "label",
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    color: _vm.mode === "view" ? "warning" : "primary",
                    icon: "",
                    small: ""
                  },
                  on: {
                    click: function($event) {
                      _vm.mode = _vm.mode === "view" ? "editor" : "view"
                    }
                  }
                },
                [_c("v-icon", { attrs: { small: "" } }, [_vm._v("mdi-eye")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    color: _vm.mode === "json" ? "warning" : "primary",
                    icon: "",
                    small: ""
                  },
                  on: {
                    click: function($event) {
                      _vm.mode = _vm.mode === "json" ? "editor" : "json"
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { small: "" } }, [
                    _vm._v("mdi-code-array")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    color: _vm.mode === "blockly" ? "warning" : "primary",
                    icon: "",
                    small: ""
                  },
                  on: {
                    click: function($event) {
                      _vm.mode = _vm.mode === "blockly" ? "editor" : "blockly"
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { small: "" } }, [
                    _vm._v("mdi-code-greater-than-or-equal")
                  ])
                ],
                1
              ),
              _vm._v("\n      " + _vm._s(_vm.field.label) + "\n    ")
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm.templates
            ? _c("v-select", {
                staticStyle: { "max-width": "250px" },
                attrs: {
                  "item-value": "id",
                  "item-text": "title",
                  reverse: "",
                  rounded: "",
                  solo: "",
                  small: "",
                  chips: "",
                  flat: "",
                  "hide-details": "",
                  label: "Template",
                  dense: "",
                  items: _vm.templates
                },
                model: {
                  value: _vm.template,
                  callback: function($$v) {
                    _vm.template = $$v
                  },
                  expression: "template"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { small: "", icon: "", color: "red" },
              on: { click: _vm.onResetValues }
            },
            [
              _c("v-icon", { attrs: { small: "" } }, [
                _vm._v("mdi-database-refresh")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { small: "", icon: "", color: "red" },
              on: { click: _vm.onReset }
            },
            [_c("v-icon", { attrs: { small: "" } }, [_vm._v("mdi-refresh")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { small: "", icon: "" }, on: { click: _vm.onDownload } },
            [_c("v-icon", { attrs: { small: "" } }, [_vm._v("mdi-download")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { small: "", icon: "" },
              on: {
                click: function($event) {
                  _vm.startJSONUpload(_vm.onUploaded)()
                }
              }
            },
            [_c("v-icon", { attrs: { small: "" } }, [_vm._v("mdi-upload")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("vf-fields-renderer", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.mode === "editor",
            expression: "mode === 'editor'"
          }
        ],
        style:
          "" +
          (_vm.field.height ? "min-height: " + _vm.field.height + "px" : ""),
        attrs: { options: {}, fields: _vm.formBuilderTreeview },
        model: {
          value: _vm.schema,
          callback: function($$v) {
            _vm.schema = $$v
          },
          expression: "schema"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.mode === "view",
              expression: "mode === 'view'"
            }
          ]
        },
        [
          _c(
            "v-system-bar",
            {
              attrs: { dark: "", color: _vm.blocklyError ? "red" : "primary" }
            },
            [
              _vm._v("\n      Form Preview\n      "),
              _c("span", { staticClass: "red--text text--lighten-3" }, [
                _vm._v(_vm._s(_vm.blocklyError ? "(has errors)" : ""))
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "vuetify-formjson",
            _vm._b(
              {
                model: {
                  value: _vm.formModel,
                  callback: function($$v) {
                    _vm.formModel = $$v
                  },
                  expression: "formModel"
                }
              },
              "vuetify-formjson",
              this[this.getFormSchemaPropName()],
              false
            )
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.mode === "blockly",
              expression: "mode === 'blockly'"
            }
          ],
          staticClass: "fill-height",
          attrs: { light: "", flat: "" }
        },
        [
          _c(
            "v-system-bar",
            {
              attrs: { dark: "", color: _vm.blocklyError ? "red" : "primary" }
            },
            [
              _c(
                "v-btn",
                {
                  staticClass: "right",
                  attrs: { icon: "", small: "" },
                  on: {
                    click: function($event) {
                      return _vm.blocklyPasteContent()
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { small: "" } }, [
                    _vm._v("mdi-content-paste")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "right",
                  attrs: { icon: "", small: "" },
                  on: {
                    click: function($event) {
                      return _vm.blocklyCopyContent()
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { small: "" } }, [
                    _vm._v("mdi-content-copy")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "right",
                  attrs: { icon: "", small: "" },
                  on: {
                    click: function($event) {
                      _vm.showCode = !_vm.showCode
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { small: "" } }, [
                    _vm._v(
                      _vm._s(_vm.showCode ? "mdi-eye" : "mdi-code-braces-box")
                    )
                  ])
                ],
                1
              ),
              _vm._v("Define functions and callbacks\n      "),
              _c("span", { staticClass: "red--text text--lighten-3" }, [
                _vm._v(_vm._s(_vm.blocklyError ? "(has errors)" : ""))
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm.blocklyError
                ? _c(
                    "v-dialog",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    { attrs: { small: "", icon: "" } },
                                    on
                                  ),
                                  [
                                    _c("v-icon", { attrs: { small: "" } }, [
                                      _vm._v("mdi-flask-remove-outline")
                                    ])
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        1872519304
                      ),
                      model: {
                        value: _vm.blocklyErrorDialog,
                        callback: function($$v) {
                          _vm.blocklyErrorDialog = $$v
                        },
                        expression: "blocklyErrorDialog"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { attrs: { dark: "", color: "red" } },
                        [
                          _c("v-card-title", [
                            _vm._v(_vm._s(_vm.blocklyError.message))
                          ]),
                          _vm._v(" "),
                          _c("v-card-text", [
                            _vm._v(_vm._s(_vm.blocklyError.stack))
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "ma-0 pa-0 fill-height" },
            [
              !_vm.showCode
                ? _c("vf-blockly-input", {
                    ref: "blocklyEditor",
                    attrs: { field: _vm.blocklyField },
                    on: { selection: _vm.onBlocklySelectionChanged },
                    model: {
                      value: _vm.codeModel,
                      callback: function($$v) {
                        _vm.codeModel = $$v
                      },
                      expression: "codeModel"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.showCode
                ? _c("vf-code-input", {
                    attrs: { field: {} },
                    model: {
                      value: _vm.blocklyJSCode,
                      callback: function($$v) {
                        _vm.blocklyJSCode = $$v
                      },
                      expression: "blocklyJSCode"
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.mode === "json"
        ? _c(
            "v-card",
            { staticClass: "fill-height", attrs: { light: "", flat: "" } },
            [
              _c(
                "v-system-bar",
                { attrs: { dark: "", color: "primary" } },
                [
                  _vm._v("\n      Manual FormBuilder edit\n      "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "right",
                      attrs: { dark: "", icon: "", small: "" },
                      on: { click: _vm.applyManualEditor }
                    },
                    [
                      _c("v-icon", { attrs: { small: "" } }, [
                        _vm._v("mdi-content-save")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "right",
                      attrs: { dark: "", icon: "", small: "" },
                      on: { click: _vm.resetManualEditor }
                    },
                    [
                      _c("v-icon", { attrs: { small: "" } }, [
                        _vm._v("mdi-refresh-circle")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "ma-0 pa-0 fill-height" },
                [
                  _c("vf-code-input", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.mode === "json",
                        expression: "mode === 'json'"
                      }
                    ],
                    staticClass: "fill-height",
                    attrs: { field: {} },
                    model: {
                      value: _vm.jsonString,
                      callback: function($$v) {
                        _vm.jsonString = $$v
                      },
                      expression: "jsonString"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Confirm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Confirm.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Confirm_vue_vue_type_template_id_62ccaf84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Confirm.vue?vue&type=template&id=62ccaf84& */ "./resources/js/Lib/vuetify-formjson/Confirm.vue?vue&type=template&id=62ccaf84&");
/* harmony import */ var _Confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Confirm.vue?vue&type=script&lang=js& */ "./resources/js/Lib/vuetify-formjson/Confirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Confirm_vue_vue_type_template_id_62ccaf84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Confirm_vue_vue_type_template_id_62ccaf84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_8__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_8__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/vuetify-formjson/Confirm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Confirm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Confirm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Confirm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Confirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Confirm.vue?vue&type=template&id=62ccaf84&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Confirm.vue?vue&type=template&id=62ccaf84& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_template_id_62ccaf84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Confirm.vue?vue&type=template&id=62ccaf84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Confirm.vue?vue&type=template&id=62ccaf84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_template_id_62ccaf84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_template_id_62ccaf84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormJSONBuilder_vue_vue_type_template_id_07cd1165___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormJSONBuilder.vue?vue&type=template&id=07cd1165& */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue?vue&type=template&id=07cd1165&");
/* harmony import */ var _FormJSONBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormJSONBuilder.vue?vue&type=script&lang=js& */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VSystemBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSystemBar */ "./node_modules/vuetify/lib/components/VSystemBar/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormJSONBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormJSONBuilder_vue_vue_type_template_id_07cd1165___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormJSONBuilder_vue_vue_type_template_id_07cd1165___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_8__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VSystemBar: vuetify_lib_components_VSystemBar__WEBPACK_IMPORTED_MODULE_10__["VSystemBar"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_11__["VToolbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormJSONBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormJSONBuilder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormJSONBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue?vue&type=template&id=07cd1165&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue?vue&type=template&id=07cd1165& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormJSONBuilder_vue_vue_type_template_id_07cd1165___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormJSONBuilder.vue?vue&type=template&id=07cd1165& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/FormJSONBuilder.vue?vue&type=template&id=07cd1165&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormJSONBuilder_vue_vue_type_template_id_07cd1165___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormJSONBuilder_vue_vue_type_template_id_07cd1165___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v-alert */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-alert.js");
/* harmony import */ var _v_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v-app */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-app.js");
/* harmony import */ var _v_app_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v-app-bar */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-app-bar.js");
/* harmony import */ var _v_app_bar_nav_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v-app-bar-nav-icon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-app-bar-nav-icon.js");
/* harmony import */ var _v_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./v-autocomplete */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-autocomplete.js");
/* harmony import */ var _v_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./v-avatar */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-avatar.js");
/* harmony import */ var _v_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./v-badge */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-badge.js");
/* harmony import */ var _v_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./v-banner */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-banner.js");
/* harmony import */ var _v_bottom_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./v-bottom-navigation */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-bottom-navigation.js");
/* harmony import */ var _v_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./v-bottom-sheet */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-bottom-sheet.js");
/* harmony import */ var _v_breadcrumbs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./v-breadcrumbs */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-breadcrumbs.js");
/* harmony import */ var _v_breadcrumbs_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./v-breadcrumbs-divider */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-breadcrumbs-divider.js");
/* harmony import */ var _v_breadcrumbs_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./v-breadcrumbs-item */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-breadcrumbs-item.js");
/* harmony import */ var _v_btn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./v-btn */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-btn.js");
/* harmony import */ var _v_btn_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./v-btn-toggle */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-btn-toggle.js");
/* harmony import */ var _v_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./v-calendar */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-calendar.js");
/* harmony import */ var _v_calendar_daily__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./v-calendar-daily */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-calendar-daily.js");
/* harmony import */ var _v_calendar_monthly__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./v-calendar-monthly */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-calendar-monthly.js");
/* harmony import */ var _v_calendar_weekly__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./v-calendar-weekly */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-calendar-weekly.js");
/* harmony import */ var _v_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./v-card */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card.js");
/* harmony import */ var _v_card_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./v-card-actions */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card-actions.js");
/* harmony import */ var _v_card_subtitle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./v-card-subtitle */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card-subtitle.js");
/* harmony import */ var _v_card_text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./v-card-text */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card-text.js");
/* harmony import */ var _v_card_title__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./v-card-title */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card-title.js");
/* harmony import */ var _v_carousel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./v-carousel */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-carousel.js");
/* harmony import */ var _v_carousel_item__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./v-carousel-item */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-carousel-item.js");
/* harmony import */ var _v_carousel_reverse_transition__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./v-carousel-reverse-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-carousel-reverse-transition.js");
/* harmony import */ var _v_carousel_transition__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./v-carousel-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-carousel-transition.js");
/* harmony import */ var _v_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./v-checkbox */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-checkbox.js");
/* harmony import */ var _v_chip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./v-chip */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-chip.js");
/* harmony import */ var _v_chip_group__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./v-chip-group */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-chip-group.js");
/* harmony import */ var _v_col__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./v-col */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-col.js");
/* harmony import */ var _v_color_picker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./v-color-picker */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-color-picker.js");
/* harmony import */ var _v_color_picker_canvas__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./v-color-picker-canvas */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-color-picker-canvas.js");
/* harmony import */ var _v_color_picker_swatches__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./v-color-picker-swatches */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-color-picker-swatches.js");
/* harmony import */ var _v_combobox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./v-combobox */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-combobox.js");
/* harmony import */ var _v_container__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./v-container */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-container.js");
/* harmony import */ var _v_content__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./v-content */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-content.js");
/* harmony import */ var _v_counter__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./v-counter */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-counter.js");
/* harmony import */ var _v_data__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./v-data */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data.js");
/* harmony import */ var _v_data_footer__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./v-data-footer */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data-footer.js");
/* harmony import */ var _v_data_iterator__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./v-data-iterator */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data-iterator.js");
/* harmony import */ var _v_data_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./v-data-table */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data-table.js");
/* harmony import */ var _v_data_table_header__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./v-data-table-header */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data-table-header.js");
/* harmony import */ var _v_date_picker__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./v-date-picker */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker.js");
/* harmony import */ var _v_date_picker_date_table__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./v-date-picker-date-table */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-date-table.js");
/* harmony import */ var _v_date_picker_header__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./v-date-picker-header */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-header.js");
/* harmony import */ var _v_date_picker_month_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./v-date-picker-month-table */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-month-table.js");
/* harmony import */ var _v_date_picker_title__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./v-date-picker-title */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-title.js");
/* harmony import */ var _v_date_picker_years__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./v-date-picker-years */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-years.js");
/* harmony import */ var _v_dialog__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./v-dialog */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-dialog.js");
/* harmony import */ var _v_dialog_bottom_transition__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./v-dialog-bottom-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-dialog-bottom-transition.js");
/* harmony import */ var _v_dialog_transition__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./v-dialog-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-dialog-transition.js");
/* harmony import */ var _v_divider__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./v-divider */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-divider.js");
/* harmony import */ var _v_edit_dialog__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./v-edit-dialog */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-edit-dialog.js");
/* harmony import */ var _v_expand_transition__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./v-expand-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expand-transition.js");
/* harmony import */ var _v_expand_x_transition__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./v-expand-x-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expand-x-transition.js");
/* harmony import */ var _v_expansion_panel__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./v-expansion-panel */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expansion-panel.js");
/* harmony import */ var _v_expansion_panel_content__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./v-expansion-panel-content */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expansion-panel-content.js");
/* harmony import */ var _v_expansion_panel_header__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./v-expansion-panel-header */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expansion-panel-header.js");
/* harmony import */ var _v_expansion_panels__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./v-expansion-panels */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expansion-panels.js");
/* harmony import */ var _v_fab_transition__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./v-fab-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-fab-transition.js");
/* harmony import */ var _v_fade_transition__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./v-fade-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-fade-transition.js");
/* harmony import */ var _v_file_input__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./v-file-input */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-file-input.js");
/* harmony import */ var _v_flex__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./v-flex */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-flex.js");
/* harmony import */ var _v_footer__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./v-footer */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-footer.js");
/* harmony import */ var _v_form__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./v-form */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-form.js");
/* harmony import */ var _v_hover__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./v-hover */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-hover.js");
/* harmony import */ var _v_icon__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./v-icon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-icon.js");
/* harmony import */ var _v_img__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./v-img */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-img.js");
/* harmony import */ var _v_input__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./v-input */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-input.js");
/* harmony import */ var _v_intersect__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./v-intersect */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-intersect.js");
/* harmony import */ var _v_item__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./v-item */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-item.js");
/* harmony import */ var _v_item_group__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./v-item-group */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-item-group.js");
/* harmony import */ var _v_label__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./v-label */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-label.js");
/* harmony import */ var _v_layout__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./v-layout */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-layout.js");
/* harmony import */ var _v_lazy__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./v-lazy */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-lazy.js");
/* harmony import */ var _v_list__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./v-list */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list.js");
/* harmony import */ var _v_list_group__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./v-list-group */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-group.js");
/* harmony import */ var _v_list_item__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./v-list-item */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item.js");
/* harmony import */ var _v_list_item_action__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./v-list-item-action */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-action.js");
/* harmony import */ var _v_list_item_action_text__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./v-list-item-action-text */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-action-text.js");
/* harmony import */ var _v_list_item_avatar__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./v-list-item-avatar */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-avatar.js");
/* harmony import */ var _v_list_item_content__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./v-list-item-content */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-content.js");
/* harmony import */ var _v_list_item_group__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./v-list-item-group */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-group.js");
/* harmony import */ var _v_list_item_icon__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./v-list-item-icon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-icon.js");
/* harmony import */ var _v_list_item_subtitle__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./v-list-item-subtitle */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-subtitle.js");
/* harmony import */ var _v_list_item_title__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./v-list-item-title */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-title.js");
/* harmony import */ var _v_menu__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./v-menu */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-menu.js");
/* harmony import */ var _v_menu_transition__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./v-menu-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-menu-transition.js");
/* harmony import */ var _v_messages__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./v-messages */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-messages.js");
/* harmony import */ var _v_mutate__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./v-mutate */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-mutate.js");
/* harmony import */ var _v_navigation_drawer__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./v-navigation-drawer */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-navigation-drawer.js");
/* harmony import */ var _v_overflow_btn__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./v-overflow-btn */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-overflow-btn.js");
/* harmony import */ var _v_overlay__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./v-overlay */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-overlay.js");
/* harmony import */ var _v_pagination__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./v-pagination */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-pagination.js");
/* harmony import */ var _v_parallax__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./v-parallax */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-parallax.js");
/* harmony import */ var _v_picker__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./v-picker */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-picker.js");
/* harmony import */ var _v_progress_circular__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./v-progress-circular */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-progress-circular.js");
/* harmony import */ var _v_progress_linear__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./v-progress-linear */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-progress-linear.js");
/* harmony import */ var _v_radio__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./v-radio */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-radio.js");
/* harmony import */ var _v_radio_group__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./v-radio-group */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-radio-group.js");
/* harmony import */ var _v_range_slider__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./v-range-slider */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-range-slider.js");
/* harmony import */ var _v_rating__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./v-rating */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-rating.js");
/* harmony import */ var _v_responsive__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./v-responsive */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-responsive.js");
/* harmony import */ var _v_row__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./v-row */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-row.js");
/* harmony import */ var _v_scale_transition__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./v-scale-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scale-transition.js");
/* harmony import */ var _v_scroll_x_reverse_transition__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./v-scroll-x-reverse-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scroll-x-reverse-transition.js");
/* harmony import */ var _v_scroll_x_transition__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./v-scroll-x-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scroll-x-transition.js");
/* harmony import */ var _v_scroll_y_reverse_transition__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./v-scroll-y-reverse-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scroll-y-reverse-transition.js");
/* harmony import */ var _v_scroll_y_transition__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./v-scroll-y-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scroll-y-transition.js");
/* harmony import */ var _v_select__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./v-select */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-select.js");
/* harmony import */ var _v_sheet__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./v-sheet */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-sheet.js");
/* harmony import */ var _v_simple_checkbox__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./v-simple-checkbox */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-simple-checkbox.js");
/* harmony import */ var _v_simple_table__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./v-simple-table */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-simple-table.js");
/* harmony import */ var _v_skeleton_loader__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./v-skeleton-loader */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-skeleton-loader.js");
/* harmony import */ var _v_slide_group__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./v-slide-group */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-group.js");
/* harmony import */ var _v_slide_item__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./v-slide-item */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-item.js");
/* harmony import */ var _v_slide_x_reverse_transition__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./v-slide-x-reverse-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-x-reverse-transition.js");
/* harmony import */ var _v_slide_x_transition__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./v-slide-x-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-x-transition.js");
/* harmony import */ var _v_slide_y_reverse_transition__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./v-slide-y-reverse-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-y-reverse-transition.js");
/* harmony import */ var _v_slide_y_transition__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./v-slide-y-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-y-transition.js");
/* harmony import */ var _v_slider__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./v-slider */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slider.js");
/* harmony import */ var _v_snackbar__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./v-snackbar */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-snackbar.js");
/* harmony import */ var _v_spacer__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./v-spacer */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-spacer.js");
/* harmony import */ var _v_sparkline__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./v-sparkline */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-sparkline.js");
/* harmony import */ var _v_speed_dial__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./v-speed-dial */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-speed-dial.js");
/* harmony import */ var _v_stepper__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./v-stepper */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper.js");
/* harmony import */ var _v_stepper_content__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./v-stepper-content */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper-content.js");
/* harmony import */ var _v_stepper_header__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./v-stepper-header */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper-header.js");
/* harmony import */ var _v_stepper_items__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./v-stepper-items */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper-items.js");
/* harmony import */ var _v_stepper_step__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./v-stepper-step */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper-step.js");
/* harmony import */ var _v_subheader__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./v-subheader */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-subheader.js");
/* harmony import */ var _v_switch__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./v-switch */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-switch.js");
/* harmony import */ var _v_system_bar__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./v-system-bar */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-system-bar.js");
/* harmony import */ var _v_tab__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./v-tab */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tab.js");
/* harmony import */ var _v_tab_item__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./v-tab-item */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tab-item.js");
/* harmony import */ var _v_tab_reverse_transition__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./v-tab-reverse-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tab-reverse-transition.js");
/* harmony import */ var _v_tab_transition__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./v-tab-transition */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tab-transition.js");
/* harmony import */ var _v_table_overflow__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./v-table-overflow */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-table-overflow.js");
/* harmony import */ var _v_tabs__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./v-tabs */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tabs.js");
/* harmony import */ var _v_tabs_items__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./v-tabs-items */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tabs-items.js");
/* harmony import */ var _v_tabs_slider__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./v-tabs-slider */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tabs-slider.js");
/* harmony import */ var _v_text_field__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./v-text-field */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-text-field.js");
/* harmony import */ var _v_textarea__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./v-textarea */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-textarea.js");
/* harmony import */ var _v_theme_provider__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./v-theme-provider */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-theme-provider.js");
/* harmony import */ var _v_time_picker__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./v-time-picker */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-time-picker.js");
/* harmony import */ var _v_time_picker_clock__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./v-time-picker-clock */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-time-picker-clock.js");
/* harmony import */ var _v_time_picker_title__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./v-time-picker-title */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-time-picker-title.js");
/* harmony import */ var _v_timeline__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./v-timeline */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-timeline.js");
/* harmony import */ var _v_timeline_item__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./v-timeline-item */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-timeline-item.js");
/* harmony import */ var _v_toolbar__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./v-toolbar */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-toolbar.js");
/* harmony import */ var _v_toolbar_items__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./v-toolbar-items */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-toolbar-items.js");
/* harmony import */ var _v_toolbar_title__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./v-toolbar-title */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-toolbar-title.js");
/* harmony import */ var _v_tooltip__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./v-tooltip */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tooltip.js");
/* harmony import */ var _v_treeview__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./v-treeview */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-treeview.js");
/* harmony import */ var _v_treeview_node__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./v-treeview-node */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-treeview-node.js");
/* harmony import */ var _v_virtual_table__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./v-virtual-table */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-virtual-table.js");
/* harmony import */ var _v_window__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./v-window */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-window.js");
/* harmony import */ var _v_window_item__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./v-window-item */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-window-item.js");
































































































































































/* harmony default export */ __webpack_exports__["default"] = ({
  VAlert: _v_alert__WEBPACK_IMPORTED_MODULE_0__["default"],
  VApp: _v_app__WEBPACK_IMPORTED_MODULE_1__["default"],
  VAppBar: _v_app_bar__WEBPACK_IMPORTED_MODULE_2__["default"],
  VAppBarNavIcon: _v_app_bar_nav_icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  VAutocomplete: _v_autocomplete__WEBPACK_IMPORTED_MODULE_4__["default"],
  VAvatar: _v_avatar__WEBPACK_IMPORTED_MODULE_5__["default"],
  VBadge: _v_badge__WEBPACK_IMPORTED_MODULE_6__["default"],
  VBanner: _v_banner__WEBPACK_IMPORTED_MODULE_7__["default"],
  VBottomNavigation: _v_bottom_navigation__WEBPACK_IMPORTED_MODULE_8__["default"],
  VBottomSheet: _v_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["default"],
  VBreadcrumbs: _v_breadcrumbs__WEBPACK_IMPORTED_MODULE_10__["default"],
  VBreadcrumbsDivider: _v_breadcrumbs_divider__WEBPACK_IMPORTED_MODULE_11__["default"],
  VBreadcrumbsItem: _v_breadcrumbs_item__WEBPACK_IMPORTED_MODULE_12__["default"],
  VBtn: _v_btn__WEBPACK_IMPORTED_MODULE_13__["default"],
  VBtnToggle: _v_btn_toggle__WEBPACK_IMPORTED_MODULE_14__["default"],
  VCalendar: _v_calendar__WEBPACK_IMPORTED_MODULE_15__["default"],
  VCalendarDaily: _v_calendar_daily__WEBPACK_IMPORTED_MODULE_16__["default"],
  VCalendarMonthly: _v_calendar_monthly__WEBPACK_IMPORTED_MODULE_17__["default"],
  VCalendarWeekly: _v_calendar_weekly__WEBPACK_IMPORTED_MODULE_18__["default"],
  VCard: _v_card__WEBPACK_IMPORTED_MODULE_19__["default"],
  VCardActions: _v_card_actions__WEBPACK_IMPORTED_MODULE_20__["default"],
  VCardSubtitle: _v_card_subtitle__WEBPACK_IMPORTED_MODULE_21__["default"],
  VCardText: _v_card_text__WEBPACK_IMPORTED_MODULE_22__["default"],
  VCardTitle: _v_card_title__WEBPACK_IMPORTED_MODULE_23__["default"],
  VCarousel: _v_carousel__WEBPACK_IMPORTED_MODULE_24__["default"],
  VCarouselItem: _v_carousel_item__WEBPACK_IMPORTED_MODULE_25__["default"],
  VCarouselReverseTransition: _v_carousel_reverse_transition__WEBPACK_IMPORTED_MODULE_26__["default"],
  VCarouselTransition: _v_carousel_transition__WEBPACK_IMPORTED_MODULE_27__["default"],
  VCheckbox: _v_checkbox__WEBPACK_IMPORTED_MODULE_28__["default"],
  VChip: _v_chip__WEBPACK_IMPORTED_MODULE_29__["default"],
  VChipGroup: _v_chip_group__WEBPACK_IMPORTED_MODULE_30__["default"],
  VCol: _v_col__WEBPACK_IMPORTED_MODULE_31__["default"],
  VColorPicker: _v_color_picker__WEBPACK_IMPORTED_MODULE_32__["default"],
  VColorPickerCanvas: _v_color_picker_canvas__WEBPACK_IMPORTED_MODULE_33__["default"],
  VColorPickerSwatches: _v_color_picker_swatches__WEBPACK_IMPORTED_MODULE_34__["default"],
  VCombobox: _v_combobox__WEBPACK_IMPORTED_MODULE_35__["default"],
  VContainer: _v_container__WEBPACK_IMPORTED_MODULE_36__["default"],
  VContent: _v_content__WEBPACK_IMPORTED_MODULE_37__["default"],
  VCounter: _v_counter__WEBPACK_IMPORTED_MODULE_38__["default"],
  VData: _v_data__WEBPACK_IMPORTED_MODULE_39__["default"],
  VDataFooter: _v_data_footer__WEBPACK_IMPORTED_MODULE_40__["default"],
  VDataIterator: _v_data_iterator__WEBPACK_IMPORTED_MODULE_41__["default"],
  VDataTable: _v_data_table__WEBPACK_IMPORTED_MODULE_42__["default"],
  VDataTableHeader: _v_data_table_header__WEBPACK_IMPORTED_MODULE_43__["default"],
  VDatePicker: _v_date_picker__WEBPACK_IMPORTED_MODULE_44__["default"],
  VDatePickerDateTable: _v_date_picker_date_table__WEBPACK_IMPORTED_MODULE_45__["default"],
  VDatePickerHeader: _v_date_picker_header__WEBPACK_IMPORTED_MODULE_46__["default"],
  VDatePickerMonthTable: _v_date_picker_month_table__WEBPACK_IMPORTED_MODULE_47__["default"],
  VDatePickerTitle: _v_date_picker_title__WEBPACK_IMPORTED_MODULE_48__["default"],
  VDatePickerYears: _v_date_picker_years__WEBPACK_IMPORTED_MODULE_49__["default"],
  VDialog: _v_dialog__WEBPACK_IMPORTED_MODULE_50__["default"],
  VDialogBottomTransition: _v_dialog_bottom_transition__WEBPACK_IMPORTED_MODULE_51__["default"],
  VDialogTransition: _v_dialog_transition__WEBPACK_IMPORTED_MODULE_52__["default"],
  VDivider: _v_divider__WEBPACK_IMPORTED_MODULE_53__["default"],
  VEditDialog: _v_edit_dialog__WEBPACK_IMPORTED_MODULE_54__["default"],
  VExpandTransition: _v_expand_transition__WEBPACK_IMPORTED_MODULE_55__["default"],
  VExpandXTransition: _v_expand_x_transition__WEBPACK_IMPORTED_MODULE_56__["default"],
  VExpansionPanel: _v_expansion_panel__WEBPACK_IMPORTED_MODULE_57__["default"],
  VExpansionPanelContent: _v_expansion_panel_content__WEBPACK_IMPORTED_MODULE_58__["default"],
  VExpansionPanelHeader: _v_expansion_panel_header__WEBPACK_IMPORTED_MODULE_59__["default"],
  VExpansionPanels: _v_expansion_panels__WEBPACK_IMPORTED_MODULE_60__["default"],
  VFabTransition: _v_fab_transition__WEBPACK_IMPORTED_MODULE_61__["default"],
  VFadeTransition: _v_fade_transition__WEBPACK_IMPORTED_MODULE_62__["default"],
  VFileInput: _v_file_input__WEBPACK_IMPORTED_MODULE_63__["default"],
  VFlex: _v_flex__WEBPACK_IMPORTED_MODULE_64__["default"],
  VFooter: _v_footer__WEBPACK_IMPORTED_MODULE_65__["default"],
  VForm: _v_form__WEBPACK_IMPORTED_MODULE_66__["default"],
  VHover: _v_hover__WEBPACK_IMPORTED_MODULE_67__["default"],
  VIcon: _v_icon__WEBPACK_IMPORTED_MODULE_68__["default"],
  VImg: _v_img__WEBPACK_IMPORTED_MODULE_69__["default"],
  VInput: _v_input__WEBPACK_IMPORTED_MODULE_70__["default"],
  VIntersect: _v_intersect__WEBPACK_IMPORTED_MODULE_71__["default"],
  VItem: _v_item__WEBPACK_IMPORTED_MODULE_72__["default"],
  VItemGroup: _v_item_group__WEBPACK_IMPORTED_MODULE_73__["default"],
  VLabel: _v_label__WEBPACK_IMPORTED_MODULE_74__["default"],
  VLayout: _v_layout__WEBPACK_IMPORTED_MODULE_75__["default"],
  VLazy: _v_lazy__WEBPACK_IMPORTED_MODULE_76__["default"],
  VList: _v_list__WEBPACK_IMPORTED_MODULE_77__["default"],
  VListGroup: _v_list_group__WEBPACK_IMPORTED_MODULE_78__["default"],
  VListItem: _v_list_item__WEBPACK_IMPORTED_MODULE_79__["default"],
  VListItemAction: _v_list_item_action__WEBPACK_IMPORTED_MODULE_80__["default"],
  VListItemActionText: _v_list_item_action_text__WEBPACK_IMPORTED_MODULE_81__["default"],
  VListItemAvatar: _v_list_item_avatar__WEBPACK_IMPORTED_MODULE_82__["default"],
  VListItemContent: _v_list_item_content__WEBPACK_IMPORTED_MODULE_83__["default"],
  VListItemGroup: _v_list_item_group__WEBPACK_IMPORTED_MODULE_84__["default"],
  VListItemIcon: _v_list_item_icon__WEBPACK_IMPORTED_MODULE_85__["default"],
  VListItemSubtitle: _v_list_item_subtitle__WEBPACK_IMPORTED_MODULE_86__["default"],
  VListItemTitle: _v_list_item_title__WEBPACK_IMPORTED_MODULE_87__["default"],
  VMenu: _v_menu__WEBPACK_IMPORTED_MODULE_88__["default"],
  VMenuTransition: _v_menu_transition__WEBPACK_IMPORTED_MODULE_89__["default"],
  VMessages: _v_messages__WEBPACK_IMPORTED_MODULE_90__["default"],
  VMutate: _v_mutate__WEBPACK_IMPORTED_MODULE_91__["default"],
  VNavigationDrawer: _v_navigation_drawer__WEBPACK_IMPORTED_MODULE_92__["default"],
  VOverflowBtn: _v_overflow_btn__WEBPACK_IMPORTED_MODULE_93__["default"],
  VOverlay: _v_overlay__WEBPACK_IMPORTED_MODULE_94__["default"],
  VPagination: _v_pagination__WEBPACK_IMPORTED_MODULE_95__["default"],
  VParallax: _v_parallax__WEBPACK_IMPORTED_MODULE_96__["default"],
  VPicker: _v_picker__WEBPACK_IMPORTED_MODULE_97__["default"],
  VProgressCircular: _v_progress_circular__WEBPACK_IMPORTED_MODULE_98__["default"],
  VProgressLinear: _v_progress_linear__WEBPACK_IMPORTED_MODULE_99__["default"],
  VRadio: _v_radio__WEBPACK_IMPORTED_MODULE_100__["default"],
  VRadioGroup: _v_radio_group__WEBPACK_IMPORTED_MODULE_101__["default"],
  VRangeSlider: _v_range_slider__WEBPACK_IMPORTED_MODULE_102__["default"],
  VRating: _v_rating__WEBPACK_IMPORTED_MODULE_103__["default"],
  VResponsive: _v_responsive__WEBPACK_IMPORTED_MODULE_104__["default"],
  VRow: _v_row__WEBPACK_IMPORTED_MODULE_105__["default"],
  VScaleTransition: _v_scale_transition__WEBPACK_IMPORTED_MODULE_106__["default"],
  VScrollXReverseTransition: _v_scroll_x_reverse_transition__WEBPACK_IMPORTED_MODULE_107__["default"],
  VScrollXTransition: _v_scroll_x_transition__WEBPACK_IMPORTED_MODULE_108__["default"],
  VScrollYReverseTransition: _v_scroll_y_reverse_transition__WEBPACK_IMPORTED_MODULE_109__["default"],
  VScrollYTransition: _v_scroll_y_transition__WEBPACK_IMPORTED_MODULE_110__["default"],
  VSelect: _v_select__WEBPACK_IMPORTED_MODULE_111__["default"],
  VSheet: _v_sheet__WEBPACK_IMPORTED_MODULE_112__["default"],
  VSimpleCheckbox: _v_simple_checkbox__WEBPACK_IMPORTED_MODULE_113__["default"],
  VSimpleTable: _v_simple_table__WEBPACK_IMPORTED_MODULE_114__["default"],
  VSkeletonLoader: _v_skeleton_loader__WEBPACK_IMPORTED_MODULE_115__["default"],
  VSlideGroup: _v_slide_group__WEBPACK_IMPORTED_MODULE_116__["default"],
  VSlideItem: _v_slide_item__WEBPACK_IMPORTED_MODULE_117__["default"],
  VSlideXReverseTransition: _v_slide_x_reverse_transition__WEBPACK_IMPORTED_MODULE_118__["default"],
  VSlideXTransition: _v_slide_x_transition__WEBPACK_IMPORTED_MODULE_119__["default"],
  VSlideYReverseTransition: _v_slide_y_reverse_transition__WEBPACK_IMPORTED_MODULE_120__["default"],
  VSlideYTransition: _v_slide_y_transition__WEBPACK_IMPORTED_MODULE_121__["default"],
  VSlider: _v_slider__WEBPACK_IMPORTED_MODULE_122__["default"],
  VSnackbar: _v_snackbar__WEBPACK_IMPORTED_MODULE_123__["default"],
  VSpacer: _v_spacer__WEBPACK_IMPORTED_MODULE_124__["default"],
  VSparkline: _v_sparkline__WEBPACK_IMPORTED_MODULE_125__["default"],
  VSpeedDial: _v_speed_dial__WEBPACK_IMPORTED_MODULE_126__["default"],
  VStepper: _v_stepper__WEBPACK_IMPORTED_MODULE_127__["default"],
  VStepperContent: _v_stepper_content__WEBPACK_IMPORTED_MODULE_128__["default"],
  VStepperHeader: _v_stepper_header__WEBPACK_IMPORTED_MODULE_129__["default"],
  VStepperItems: _v_stepper_items__WEBPACK_IMPORTED_MODULE_130__["default"],
  VStepperStep: _v_stepper_step__WEBPACK_IMPORTED_MODULE_131__["default"],
  VSubheader: _v_subheader__WEBPACK_IMPORTED_MODULE_132__["default"],
  VSwitch: _v_switch__WEBPACK_IMPORTED_MODULE_133__["default"],
  VSystemBar: _v_system_bar__WEBPACK_IMPORTED_MODULE_134__["default"],
  VTab: _v_tab__WEBPACK_IMPORTED_MODULE_135__["default"],
  VTabItem: _v_tab_item__WEBPACK_IMPORTED_MODULE_136__["default"],
  VTabReverseTransition: _v_tab_reverse_transition__WEBPACK_IMPORTED_MODULE_137__["default"],
  VTabTransition: _v_tab_transition__WEBPACK_IMPORTED_MODULE_138__["default"],
  VTableOverflow: _v_table_overflow__WEBPACK_IMPORTED_MODULE_139__["default"],
  VTabs: _v_tabs__WEBPACK_IMPORTED_MODULE_140__["default"],
  VTabsItems: _v_tabs_items__WEBPACK_IMPORTED_MODULE_141__["default"],
  VTabsSlider: _v_tabs_slider__WEBPACK_IMPORTED_MODULE_142__["default"],
  VTextField: _v_text_field__WEBPACK_IMPORTED_MODULE_143__["default"],
  VTextarea: _v_textarea__WEBPACK_IMPORTED_MODULE_144__["default"],
  VThemeProvider: _v_theme_provider__WEBPACK_IMPORTED_MODULE_145__["default"],
  VTimePicker: _v_time_picker__WEBPACK_IMPORTED_MODULE_146__["default"],
  VTimePickerClock: _v_time_picker_clock__WEBPACK_IMPORTED_MODULE_147__["default"],
  VTimePickerTitle: _v_time_picker_title__WEBPACK_IMPORTED_MODULE_148__["default"],
  VTimeline: _v_timeline__WEBPACK_IMPORTED_MODULE_149__["default"],
  VTimelineItem: _v_timeline_item__WEBPACK_IMPORTED_MODULE_150__["default"],
  VToolbar: _v_toolbar__WEBPACK_IMPORTED_MODULE_151__["default"],
  VToolbarItems: _v_toolbar_items__WEBPACK_IMPORTED_MODULE_152__["default"],
  VToolbarTitle: _v_toolbar_title__WEBPACK_IMPORTED_MODULE_153__["default"],
  VTooltip: _v_tooltip__WEBPACK_IMPORTED_MODULE_154__["default"],
  VTreeview: _v_treeview__WEBPACK_IMPORTED_MODULE_155__["default"],
  VTreeviewNode: _v_treeview_node__WEBPACK_IMPORTED_MODULE_156__["default"],
  VVirtualTable: _v_virtual_table__WEBPACK_IMPORTED_MODULE_157__["default"],
  VWindow: _v_window__WEBPACK_IMPORTED_MODULE_158__["default"],
  VWindowItem: _v_window_item__WEBPACK_IMPORTED_MODULE_159__["default"]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-alert.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-alert.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    border: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Border',
      props: {
        hint: '**COMPONENT (v-alert)** - Puts a border on the alert. Accepts **top** | **right** | **bottom** | **left**.',
        placeholder: 'undefined'
      }
    },
    'close-label': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Close-label',
      props: {
        hint: '**COMPONENT (v-alert)** - Text used for *aria-label* on **dismissible** alerts. Can also be customizing globally in [Internationalization](/customization/internationalization).',
        placeholder: '\'$vuetify.close\''
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    'colored-border': {
      type: 'input',
      input: 'switch',
      label: 'Colored-border',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-alert)** - Applies the defined **color** to the alert\'s border.'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-alert)** - Hides the alert icon and decreases component\'s height.'
      }
    },
    dismissible: {
      type: 'input',
      input: 'switch',
      label: 'Dismissible',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-alert)** - Adds a close icon that can hide the alert.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MIXIN (transitionable)** - Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MIXIN (transitionable)** - Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).',
        placeholder: 'undefined'
      }
    },
    outlined: {
      type: 'input',
      input: 'switch',
      label: 'Outlined',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-alert)** - Makes the background transparent and applies a thin border.'
      }
    },
    prominent: {
      type: 'input',
      input: 'switch',
      label: 'Prominent',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-alert)** - Displays a larger vertically centered icon to draw more attention.'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
        placeholder: '\'div\''
      }
    },
    text: {
      type: 'input',
      input: 'switch',
      label: 'Text',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-alert)** - Applies the defined **color** to text and a low opacity background of the same.'
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
      }
    },
    transition: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Transition',
      props: {
        hint: '**MIXIN (transitionable)** - Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.',
        placeholder: 'undefined'
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**COMPONENT (v-alert)** - Specify a **success**, **info**, **warning** or **error** alert. Uses the contextual color and has a pre-defined icon.',
        placeholder: 'undefined'
      }
    },
    value: {
      type: 'input',
      input: 'switch',
      label: 'Value',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (toggleable)** - Controls whether the component is visible or hidden.'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**GENERIC (undefined)** - The updated bound model'
  }],
  slots: [{
    id: 'append',
    title: '**SELF** - Slot for icon at end of alert.'
  }, {
    id: 'close',
    title: '**SELF** - Slot for icon used in **dismissible** prop.'
  }, {
    id: 'prepend',
    title: '**SELF** - Slot for icon at beginning of alert.'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-app-bar-nav-icon.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-app-bar-nav-icon.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-app-bar.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-app-bar.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Applies **position: absolute** to the component.'
      }
    },
    app: {
      type: 'input',
      input: 'switch',
      label: 'App',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (applicationable)** - Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-content` component to function properly. You can more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop'
      }
    },
    bottom: {
      type: 'input',
      input: 'switch',
      label: 'Bottom',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Aligns the component towards the bottom.'
      }
    },
    'clipped-left': {
      type: 'input',
      input: 'switch',
      label: 'Clipped-left',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-app-bar)** - Designates that the application\'s `v-navigation-drawer` that is positioned on the left is below the app-bar.'
      }
    },
    'clipped-right': {
      type: 'input',
      input: 'switch',
      label: 'Clipped-right',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-app-bar)** - Designates that the application\'s `v-navigation-drawer` that is positioned on the right is below the app-bar.'
      }
    },
    collapse: {
      type: 'input',
      input: 'switch',
      label: 'Collapse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Puts the toolbar into a collapsed state reducing its maximum width.'
      }
    },
    'collapse-on-scroll': {
      type: 'input',
      input: 'switch',
      label: 'Collapse-on-scroll',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-app-bar)** - Puts the app-bar into a collapsed state when scrolling.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop).'
      }
    },
    'elevate-on-scroll': {
      type: 'input',
      input: 'switch',
      label: 'Elevate-on-scroll',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-app-bar)** - Elevates the app-bar when scrolling.'
      }
    },
    extended: {
      type: 'input',
      input: 'switch',
      label: 'Extended',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**.'
      }
    },
    'fade-img-on-scroll': {
      type: 'input',
      input: 'switch',
      label: 'Fade-img-on-scroll',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-app-bar)** - When using the **src** prop or `img` slot, will fade the image when scrolling.'
      }
    },
    fixed: {
      type: 'input',
      input: 'switch',
      label: 'Fixed',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: fixed** to the component.'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Removes the toolbar\'s box-shadow.'
      }
    },
    floating: {
      type: 'input',
      input: 'switch',
      label: 'Floating',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Applies **display: inline-flex** to the component.'
      }
    },
    'hide-on-scroll': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-scroll',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-app-bar)** - Hides the app-bar when scrolling. Will still show the `extension` slot.'
      }
    },
    'inverted-scroll': {
      type: 'input',
      input: 'switch',
      label: 'Inverted-scroll',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-app-bar)** - Hides the app-bar when scrolling down and displays it when scrolling up.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    prominent: {
      type: 'input',
      input: 'switch',
      label: 'Prominent',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Increases the height of the toolbar content to 128px.'
      }
    },
    'scroll-off-screen': {
      type: 'input',
      input: 'switch',
      label: 'Scroll-off-screen',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-app-bar)** - Hides the app-bar when scrolling. Will **NOT** show the `extension` slot.'
      }
    },
    'scroll-target': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Scroll-target',
      props: {
        hint: '**MIXIN (scrollable)** - Designates the element to target for scrolling events. Uses `window` by default.',
        placeholder: 'undefined'
      }
    },
    "short": {
      type: 'input',
      input: 'switch',
      label: 'Short',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop).'
      }
    },
    'shrink-on-scroll': {
      type: 'input',
      input: 'switch',
      label: 'Shrink-on-scroll',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-app-bar)** - Shrinks a **prominent** toolbar to a **dense** or **short** (default) one when scrolling.'
      }
    },
    src: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Src',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Specifies a [v-img](/components/images) as the component\'s background.',
        placeholder: 'undefined'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
        placeholder: '\'header\''
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
      }
    },
    value: {
      type: 'input',
      input: 'switch',
      label: 'Value',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (toggleable)** - Controls whether the component is visible or hidden.'
      }
    }
  },
  slots: [{
    id: 'extension',
    title: '**SELF** - Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead.'
  }, {
    id: 'img',
    title: '**SELF** - Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind="props"`.'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-app.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-app.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-app)** - Sets the DOM id on the component',
        placeholder: '\'app\''
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-autocomplete.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-autocomplete.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'allow-overflow': {
      type: 'input',
      input: 'switch',
      label: 'Allow-overflow',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - Allow the menu to overflow off the screen'
      }
    },
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: '\'$dropdown\''
      }
    },
    'append-outer-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-outer-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Appends an icon to the outside the component\'s input, uses same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'auto-select-first': {
      type: 'input',
      input: 'switch',
      label: 'Auto-select-first',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - When searching, will always highlight the first option'
      }
    },
    autofocus: {
      type: 'input',
      input: 'switch',
      label: 'Autofocus',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Enables autofocus'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    'cache-items': {
      type: 'input',
      input: 'switch',
      label: 'Cache-items',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Keeps a local _unique_ copy of all items that have been passed through the **items** prop.'
      }
    },
    chips: {
      type: 'input',
      input: 'switch',
      label: 'Chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes display of selections to chips'
      }
    },
    'clear-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Clear-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applied when using **clearable** and the input is dirty',
        placeholder: '\'$clear\''
      }
    },
    clearable: {
      type: 'input',
      input: 'switch',
      label: 'Clearable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Add input clear functionality, default icon is Material Icons **clear**'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the dark theme variant to the component. This will default the components color to _white_ unless you\'ve configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    'deletable-chips': {
      type: 'input',
      input: 'switch',
      label: 'Deletable-chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Adds a remove icon to selected chips'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    'disable-lookup': {
      type: 'input',
      input: 'switch',
      label: 'Disable-lookup',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Disables keyboard lookup'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    filled: {
      type: 'input',
      input: 'switch',
      label: 'Filled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the alternate filled input style'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props'
      }
    },
    'full-width': {
      type: 'input',
      input: 'switch',
      label: 'Full-width',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Designates input type as full-width'
      }
    },
    'hide-no-data': {
      type: 'input',
      input: 'switch',
      label: 'Hide-no-data',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.'
      }
    },
    'hide-selected': {
      type: 'input',
      input: 'switch',
      label: 'Hide-selected',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Do not display in the select menu items that are already selected'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    'item-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-color',
      props: {
        hint: '**COMPONENT (v-select)** - Sets color of selected items',
        placeholder: '\'primary\''
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes select to multiple. Accepts array for value'
      }
    },
    'no-data-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'No-data-text',
      props: {
        hint: '**MIXIN (filterable)** - Display text when there is no data',
        placeholder: '\'$vuetify.noDataText\''
      }
    },
    'no-filter': {
      type: 'input',
      input: 'switch',
      label: 'No-filter',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - Do not apply filtering when searching. Useful when data is being filtered server side'
      }
    },
    'open-on-clear': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-clear',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state'
      }
    },
    outlined: {
      type: 'input',
      input: 'switch',
      label: 'Outlined',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the outlined style to the input'
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    placeholder: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Placeholder',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets the input’s placeholder text',
        placeholder: 'undefined'
      }
    },
    prefix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prefix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays prefix text',
        placeholder: 'undefined'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'prepend-inner-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-inner-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Prepends an icon inside the component\'s input, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    'return-object': {
      type: 'input',
      input: 'switch',
      label: 'Return-object',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes the selection behavior to return the object directly rather than the value specified with **item-value**'
      }
    },
    reverse: {
      type: 'input',
      input: 'switch',
      label: 'Reverse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reverses the input orientation'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Adds a border radius to the input'
      }
    },
    'search-input': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Search-input',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - Search value. Can be used with `.sync` modifier.',
        placeholder: 'undefined'
      }
    },
    shaped: {
      type: 'input',
      input: 'switch',
      label: 'Shaped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`'
      }
    },
    'single-line': {
      type: 'input',
      input: 'switch',
      label: 'Single-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Label does not move on focus/dirty'
      }
    },
    'small-chips': {
      type: 'input',
      input: 'switch',
      label: 'Small-chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes display of selections to chips with the **small** property'
      }
    },
    solo: {
      type: 'input',
      input: 'switch',
      label: 'Solo',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Changes the style of the input'
      }
    },
    'solo-inverted': {
      type: 'input',
      input: 'switch',
      label: 'Solo-inverted',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reduces element opacity until focused'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    suffix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Suffix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays suffix text',
        placeholder: 'undefined'
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets input type',
        placeholder: '\'text\''
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'click',
    title: '**COMPONENT (v-input)** - Emitted when input is clicked'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }, {
    id: 'blur',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is blurred'
  }, {
    id: 'click:clear',
    title: '**COMPONENT (v-text-field)** - Emitted when clearable icon clicked'
  }, {
    id: 'click:append-outer',
    title: '**COMPONENT (v-text-field)** - Emitted when appended outer icon is clicked'
  }, {
    id: 'click:prepend-inner',
    title: '**COMPONENT (v-text-field)** - Emitted when prepended inner icon is clicked'
  }, {
    id: 'focus',
    title: '**COMPONENT (v-text-field)** - Emitted when component is focused'
  }, {
    id: 'change',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is changed by user interaction'
  }, {
    id: 'input',
    title: '**GENERIC (v-text-field)** - The updated bound model'
  }, {
    id: 'keydown',
    title: '**COMPONENT (v-text-field)** - Emitted when **any** key is pressed'
  }, {
    id: 'update:search-input',
    title: '**COMPONENT (v-select)** - The `search-input.sync` event'
  }, {
    id: 'update:list-index',
    title: '**COMPONENT (v-select)** - Emitted when menu item is selected using keyboard arrows'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }, {
    id: 'append-outer',
    title: '**COMPONENT (v-text-field)** - Appends an item inside input content'
  }, {
    id: 'label',
    title: '**GENERIC (v-text-field)** - Replaces the default label'
  }, {
    id: 'prepend-inner',
    title: '**COMPONENT (v-text-field)** - Prepends an item inside input content'
  }, {
    id: 'progress',
    title: '**GENERIC (v-text-field)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
  }, {
    id: 'append-item',
    title: '**COMPONENT (v-select)** - Adds an item after menu content'
  }, {
    id: 'prepend-item',
    title: '**COMPONENT (v-select)** - Adds an item before menu content'
  }, {
    id: 'item',
    title: '**COMPONENT (v-select)** - Define a custom item appearance'
  }, {
    id: 'no-data',
    title: '**COMPONENT (v-select)** - Displayed when there are no filtered items'
  }, {
    id: 'selection',
    title: '**COMPONENT (v-select)** - Define a custom selection appearance'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-avatar.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-avatar.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    left: {
      type: 'input',
      input: 'switch',
      label: 'Left',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-avatar)** - Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons).'
      }
    },
    right: {
      type: 'input',
      input: 'switch',
      label: 'Right',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-avatar)** - Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons).'
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-avatar)** - Removes the component\'s border-radius.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-badge.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-badge.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    avatar: {
      type: 'input',
      input: 'switch',
      label: 'Avatar',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-badge)** - Removes badge padding for the use of the `v-avatar` in the **badge** slot.'
      }
    },
    bordered: {
      type: 'input',
      input: 'switch',
      label: 'Bordered',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-badge)** - Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property.'
      }
    },
    bottom: {
      type: 'input',
      input: 'switch',
      label: 'Bottom',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Aligns the component towards the bottom.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: '\'primary\''
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dot: {
      type: 'input',
      input: 'switch',
      label: 'Dot',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-badge)** - Reduce the size of the badge and hide its contents'
      }
    },
    icon: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Icon',
      props: {
        hint: '**COMPONENT (v-badge)** - Designates a specific icon used in the badge.',
        placeholder: 'undefined'
      }
    },
    inline: {
      type: 'input',
      input: 'switch',
      label: 'Inline',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-badge)** - Moves the badge to be inline with the wrapping element. Supports the usage of the **left** prop.'
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-badge)** - The **aria-label** used for the badge',
        placeholder: '\'$vuetify.badge\''
      }
    },
    left: {
      type: 'input',
      input: 'switch',
      label: 'Left',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Aligns the component towards the left.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MIXIN (transitionable)** - Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MIXIN (transitionable)** - Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).',
        placeholder: 'undefined'
      }
    },
    overlap: {
      type: 'input',
      input: 'switch',
      label: 'Overlap',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-badge)** - Overlaps the slotted content on top of the component.'
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-badge)** - Removes the component\'s border-radius.'
      }
    },
    transition: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Transition',
      props: {
        hint: '**SELF** - Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.',
        placeholder: '\'scale-rotate-transition\''
      }
    }
  },
  slots: [{
    id: 'badge',
    title: '**SELF** - The slot used for the badge\'s content.'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-banner.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-banner.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    app: {
      type: 'input',
      input: 'switch',
      label: 'App',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-banner)** - When used inside of `v-content`, will calculate top based upon application `v-toolbar` and `v-system-bar`.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    icon: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Icon',
      props: {
        hint: '**COMPONENT (v-banner)** - Designates a specific icon.',
        placeholder: 'undefined'
      }
    },
    'icon-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Icon-color',
      props: {
        hint: '**COMPONENT (v-banner)** - Designates a specific icon color.',
        placeholder: 'undefined'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    'single-line': {
      type: 'input',
      input: 'switch',
      label: 'Single-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-banner)** - Forces the banner onto a single line.'
      }
    },
    sticky: {
      type: 'input',
      input: 'switch',
      label: 'Sticky',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-banner)** - Applies **position: sticky** to the component (**Evergreen browsers only**). You can find more information on the [MDN documentation for sticky position](https://developer.mozilla.org/en-US/docs/Web/CSS/position).'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
        placeholder: '\'div\''
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
      }
    },
    value: {
      type: 'input',
      input: 'switch',
      label: 'Value',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (toggleable)** - Controls whether the component is visible or hidden.'
      }
    }
  },
  slots: [{
    id: 'actions',
    title: '**SELF** - The slot used for the action\'s content such as a [v-btn](/components/buttons). The **dismiss** function in this slots scope, when invoked, will close the banner.'
  }, {
    id: 'icon',
    title: '**SELF** - The slot used for the icon\'s content.'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-bottom-navigation.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-bottom-navigation.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: absolute** to the component.'
      }
    },
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MISSING DESCRIPTION** - v-bottom-navigation',
        placeholder: '\'v-btn--active\''
      }
    },
    app: {
      type: 'input',
      input: 'switch',
      label: 'App',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (applicationable)** - Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-content` component to function properly. You can more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**MISSING DESCRIPTION** - v-bottom-navigation',
        placeholder: 'undefined'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    fixed: {
      type: 'input',
      input: 'switch',
      label: 'Fixed',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: fixed** to the component.'
      }
    },
    grow: {
      type: 'input',
      input: 'switch',
      label: 'Grow',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-bottom-navigation'
      }
    },
    'hide-on-scroll': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-scroll',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-bottom-navigation'
      }
    },
    horizontal: {
      type: 'input',
      input: 'switch',
      label: 'Horizontal',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-bottom-navigation'
      }
    },
    'input-value': {
      type: 'input',
      input: 'switch',
      label: 'Input-value',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - toggleable'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    mandatory: {
      type: 'input',
      input: 'switch',
      label: 'Mandatory',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-bottom-navigation'
      }
    },
    'scroll-target': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Scroll-target',
      props: {
        hint: '**MIXIN (scrollable)** - Designates the element to target for scrolling events. Uses `window` by default.',
        placeholder: 'undefined'
      }
    },
    shift: {
      type: 'input',
      input: 'switch',
      label: 'Shift',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-bottom-navigation'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'update:input-value',
    title: '**MISSING DESCRIPTION** - undefined'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-bottom-sheet.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-bottom-sheet.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'content-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Content-class',
      props: {
        hint: '**MIXIN (detachable)** - Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targettable by classes passed directly on the component.',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (activatable)** - Disables the ability to open the component.'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    },
    fullscreen: {
      type: 'input',
      input: 'switch',
      label: 'Fullscreen',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - Changes layout for fullscreen display.'
      }
    },
    'hide-overlay': {
      type: 'input',
      input: 'switch',
      label: 'Hide-overlay',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (overlayable)** - Hides the display of the overlay.'
      }
    },
    inset: {
      type: 'input',
      input: 'switch',
      label: 'Inset',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-bottom-sheet)** - Reduces the sheet content maximum width to 70%.'
      }
    },
    'internal-activator': {
      type: 'input',
      input: 'switch',
      label: 'Internal-activator',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Detaches the menu content inside of the component as opposed to the document.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - Applies the light theme variant to the component.'
      }
    },
    'no-click-animation': {
      type: 'input',
      input: 'switch',
      label: 'No-click-animation',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - Disables the bounce effect when clicking outside of a `v-dialog`\'s content when using the **persistent** prop.'
      }
    },
    'open-on-hover': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-hover',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Designates whether component should activate when its activator is hovered.'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**COMPONENT (v-dialog)** - Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).',
        placeholder: '\'center center\''
      }
    },
    'overlay-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Overlay-color',
      props: {
        hint: '**MIXIN (overlayable)** - Sets the overlay color.',
        placeholder: 'undefined'
      }
    },
    persistent: {
      type: 'input',
      input: 'switch',
      label: 'Persistent',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - Clicking outside of the element will not deactivate it.'
      }
    },
    'retain-focus': {
      type: 'input',
      input: 'switch',
      label: 'Retain-focus',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard.'
      }
    },
    scrollable: {
      type: 'input',
      input: 'switch',
      label: 'Scrollable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable).'
      }
    },
    transition: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Transition',
      props: {
        hint: '**COMPONENT (v-dialog)** - Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.',
        placeholder: '\'bottom-sheet-transition\''
      }
    }
  },
  slots: [{
    id: 'activator',
    title: '**GENERIC (undefined)** - When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-breadcrumbs-divider.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-breadcrumbs-divider.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-breadcrumbs-item.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-breadcrumbs-item.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.',
        placeholder: '\'v-breadcrumbs__item--disabled\''
      }
    },
    append: {
      type: 'input',
      input: 'switch',
      label: 'Append',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Removes the ability to click or target the component.'
      }
    },
    exact: {
      type: 'input',
      input: 'switch',
      label: 'Exact',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Exactly match the link. Without this, \'/\' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.'
      }
    },
    'exact-active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Exact-active-class',
      props: {
        hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    },
    href: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Href',
      props: {
        hint: '**MIXIN (routable)** - Designates the component as anchor and applies the **href** attribute.',
        placeholder: 'undefined'
      }
    },
    link: {
      type: 'input',
      input: 'switch',
      label: 'Link',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Designates that the component is a link. This is automatic when using the **href** or **to** prop.'
      }
    },
    nuxt: {
      type: 'input',
      input: 'switch',
      label: 'Nuxt',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).'
      }
    },
    replace: {
      type: 'input',
      input: 'switch',
      label: 'Replace',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Applies the [v-ripple](/directives/ripples) directive.'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**MIXIN (routable)** - Specify a custom tag used on the root element.',
        placeholder: 'undefined'
      }
    },
    target: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Target',
      props: {
        hint: '**MIXIN (routable)** - Designates the target attribute. This should only be applied when using the **href** prop.',
        placeholder: 'undefined'
      }
    },
    to: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'To',
      props: {
        hint: '**MIXIN (routable)** - Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-breadcrumbs.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-breadcrumbs.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    divider: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Divider',
      props: {
        hint: '**COMPONENT (v-breadcrumbs)** - Specifies the dividing character between items.',
        placeholder: '\'/\''
      }
    },
    large: {
      type: 'input',
      input: 'switch',
      label: 'Large',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-breadcrumbs)** - Increase the font-size of the breadcrumb item text to 16px (14px default).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    }
  },
  slots: [{
    id: 'divider',
    title: '**SELF** - The slot used for dividers.'
  }, {
    id: 'item',
    title: '**SELF** - The slot used to override default `v-breadcrumbs-item` behavior when using the **items** prop.'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-btn-toggle.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-btn-toggle.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (base-item-group)** - The **active-class** applied to children when they are activated.',
        placeholder: '\'v-item--active\''
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn-toggle',
        placeholder: 'undefined'
      }
    },
    borderless: {
      type: 'input',
      input: 'switch',
      label: 'Borderless',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn-toggle'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn-toggle'
      }
    },
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn-toggle'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    mandatory: {
      type: 'input',
      input: 'switch',
      label: 'Mandatory',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Forces a value to always be selected (if available).'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Allow multiple selections. The **value** prop must be an _array_.'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn-toggle'
      }
    },
    shaped: {
      type: 'input',
      input: 'switch',
      label: 'Shaped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn-toggle'
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-btn-toggle)** - Removes the component\'s border-radius.'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**MISSING DESCRIPTION** - undefined'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-btn.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-btn.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: absolute** to the component.'
      }
    },
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.',
        placeholder: ''
      }
    },
    append: {
      type: 'input',
      input: 'switch',
      label: 'Append',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.'
      }
    },
    block: {
      type: 'input',
      input: 'switch',
      label: 'Block',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn'
      }
    },
    bottom: {
      type: 'input',
      input: 'switch',
      label: 'Bottom',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the bottom.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    depressed: {
      type: 'input',
      input: 'switch',
      label: 'Depressed',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Removes the ability to click or target the component.'
      }
    },
    exact: {
      type: 'input',
      input: 'switch',
      label: 'Exact',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Exactly match the link. Without this, \'/\' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.'
      }
    },
    'exact-active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Exact-active-class',
      props: {
        hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    },
    fab: {
      type: 'input',
      input: 'switch',
      label: 'Fab',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn'
      }
    },
    fixed: {
      type: 'input',
      input: 'switch',
      label: 'Fixed',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: fixed** to the component.'
      }
    },
    href: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Href',
      props: {
        hint: '**MIXIN (routable)** - Designates the component as anchor and applies the **href** attribute.',
        placeholder: 'undefined'
      }
    },
    icon: {
      type: 'input',
      input: 'switch',
      label: 'Icon',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn'
      }
    },
    large: {
      type: 'input',
      input: 'switch',
      label: 'Large',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component large.'
      }
    },
    left: {
      type: 'input',
      input: 'switch',
      label: 'Left',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the left.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    link: {
      type: 'input',
      input: 'switch',
      label: 'Link',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Designates that the component is a link. This is automatic when using the **href** or **to** prop.'
      }
    },
    loading: {
      type: 'input',
      input: 'switch',
      label: 'Loading',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn'
      }
    },
    nuxt: {
      type: 'input',
      input: 'switch',
      label: 'Nuxt',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).'
      }
    },
    outlined: {
      type: 'input',
      input: 'switch',
      label: 'Outlined',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn'
      }
    },
    replace: {
      type: 'input',
      input: 'switch',
      label: 'Replace',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.'
      }
    },
    'retain-focus-on-click': {
      type: 'input',
      input: 'switch',
      label: 'Retain-focus-on-click',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn'
      }
    },
    right: {
      type: 'input',
      input: 'switch',
      label: 'Right',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the right.'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Applies the [v-ripple](/directives/ripples) directive.'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn'
      }
    },
    small: {
      type: 'input',
      input: 'switch',
      label: 'Small',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component small.'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
        placeholder: '\'button\''
      }
    },
    target: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Target',
      props: {
        hint: '**MIXIN (routable)** - Designates the target attribute. This should only be applied when using the **href** prop.',
        placeholder: 'undefined'
      }
    },
    text: {
      type: 'input',
      input: 'switch',
      label: 'Text',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn'
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
      }
    },
    to: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'To',
      props: {
        hint: '**MIXIN (routable)** - Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    },
    top: {
      type: 'input',
      input: 'switch',
      label: 'Top',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the content towards the top.'
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**MISSING DESCRIPTION** - v-btn',
        placeholder: '\'button\''
      }
    },
    'x-large': {
      type: 'input',
      input: 'switch',
      label: 'X-large',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component extra large.'
      }
    },
    'x-small': {
      type: 'input',
      input: 'switch',
      label: 'X-small',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component extra small.'
      }
    }
  },
  events: [{
    id: 'click',
    title: '**GENERIC (undefined)** - Event that is emitted when the component is clicked'
  }],
  slots: [{
    id: 'loader',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-calendar-daily.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-calendar-daily.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    end: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'End',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-base',
        placeholder: 'undefined'
      }
    },
    'hide-header': {
      type: 'input',
      input: 'switch',
      label: 'Hide-header',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-base'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    locale: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Locale',
      props: {
        hint: '**MISSING DESCRIPTION** - localable',
        placeholder: 'undefined'
      }
    },
    'max-days': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Max-days',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-with-intervals',
        placeholder: '7'
      }
    },
    now: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Now',
      props: {
        hint: '**MISSING DESCRIPTION** - times',
        placeholder: 'undefined'
      }
    },
    'short-intervals': {
      type: 'input',
      input: 'switch',
      label: 'Short-intervals',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-with-intervals'
      }
    },
    'short-weekdays': {
      type: 'input',
      input: 'switch',
      label: 'Short-weekdays',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-base'
      }
    },
    start: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Start',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-base',
        placeholder: '\'2020-05-10\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-calendar-monthly.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-calendar-monthly.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    end: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'End',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-base',
        placeholder: 'undefined'
      }
    },
    'hide-header': {
      type: 'input',
      input: 'switch',
      label: 'Hide-header',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-base'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    locale: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Locale',
      props: {
        hint: '**MISSING DESCRIPTION** - localable',
        placeholder: 'undefined'
      }
    },
    now: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Now',
      props: {
        hint: '**MISSING DESCRIPTION** - times',
        placeholder: 'undefined'
      }
    },
    'short-months': {
      type: 'input',
      input: 'switch',
      label: 'Short-months',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-calendar-weekly'
      }
    },
    'short-weekdays': {
      type: 'input',
      input: 'switch',
      label: 'Short-weekdays',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-base'
      }
    },
    'show-month-on-first': {
      type: 'input',
      input: 'switch',
      label: 'Show-month-on-first',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-calendar-weekly'
      }
    },
    start: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Start',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-base',
        placeholder: '\'2020-05-10\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-calendar-weekly.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-calendar-weekly.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    end: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'End',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-base',
        placeholder: 'undefined'
      }
    },
    'hide-header': {
      type: 'input',
      input: 'switch',
      label: 'Hide-header',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-base'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    locale: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Locale',
      props: {
        hint: '**MISSING DESCRIPTION** - localable',
        placeholder: 'undefined'
      }
    },
    now: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Now',
      props: {
        hint: '**MISSING DESCRIPTION** - times',
        placeholder: 'undefined'
      }
    },
    'short-months': {
      type: 'input',
      input: 'switch',
      label: 'Short-months',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-calendar-weekly'
      }
    },
    'short-weekdays': {
      type: 'input',
      input: 'switch',
      label: 'Short-weekdays',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-base'
      }
    },
    'show-month-on-first': {
      type: 'input',
      input: 'switch',
      label: 'Show-month-on-first',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-calendar-weekly'
      }
    },
    start: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Start',
      props: {
        hint: '**MISSING DESCRIPTION** - calendar-base',
        placeholder: '\'2020-05-10\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-calendar.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-calendar.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    end: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'End',
      props: {
        hint: '**SELF** - The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.',
        placeholder: 'undefined'
      }
    },
    'event-end': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Event-end',
      props: {
        hint: '**SELF** - Set property of *event*\'s end timestamp.',
        placeholder: '\'end\''
      }
    },
    'event-height': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Event-height',
      props: {
        hint: '**SELF** - The height of an event in pixels in the `month` view and at the top of the `day` views.',
        placeholder: '20'
      }
    },
    'event-margin-bottom': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Event-margin-bottom',
      props: {
        hint: '**SELF** - Margin bottom for event',
        placeholder: '1'
      }
    },
    'event-more': {
      type: 'input',
      input: 'switch',
      label: 'Event-more',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Whether the more \'button\' is displayed on a calendar with too many events in a given day. It will say something like \'5 more\' and when clicked generates a `click:more` event.'
      }
    },
    'event-more-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Event-more-text',
      props: {
        hint: '**SELF** - The text to display in the more \'button\' given the number of hidden events.',
        placeholder: '\'$vuetify.calendar.moreEvents\''
      }
    },
    'event-ripple': {
      type: 'input',
      input: 'switch',
      label: 'Event-ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the `v-ripple` directive.'
      }
    },
    'event-start': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Event-start',
      props: {
        hint: '**SELF** - Set property of *event*\'s start timestamp.',
        placeholder: '\'start\''
      }
    },
    'hide-header': {
      type: 'input',
      input: 'switch',
      label: 'Hide-header',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - If the header at the top of the `day` view should be visible.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    locale: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Locale',
      props: {
        hint: '**SELF** - The locale of the calendar.',
        placeholder: 'undefined'
      }
    },
    'max-days': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Max-days',
      props: {
        hint: '**COMPONENT (v-calendar)** - The maximum number of days to display in the custom calendar if an `end` day is not set.',
        placeholder: '7'
      }
    },
    now: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Now',
      props: {
        hint: '**SELF** - Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now.',
        placeholder: 'undefined'
      }
    },
    'short-intervals': {
      type: 'input',
      input: 'switch',
      label: 'Short-intervals',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-calendar)** - If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM'
      }
    },
    'short-months': {
      type: 'input',
      input: 'switch',
      label: 'Short-months',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-calendar)** - Whether the short versions of a month should be used (Jan vs January).'
      }
    },
    'short-weekdays': {
      type: 'input',
      input: 'switch',
      label: 'Short-weekdays',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Whether the short versions of a weekday should be used (Mon vs Monday).'
      }
    },
    'show-month-on-first': {
      type: 'input',
      input: 'switch',
      label: 'Show-month-on-first',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-calendar)** - Whether the name of the month should be displayed on the first day of the month.'
      }
    },
    start: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Start',
      props: {
        hint: '**SELF** - The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.',
        placeholder: '\'2020-05-10\''
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**COMPONENT (v-calendar)** - A string which is one of `month`, `week`, `day`, `4day`, `custom-weekly`, and `custom-daily`. The custom types look at the `start` and `end` dates passed to the component as opposed to the `value`.',
        placeholder: '\'month\''
      }
    },
    value: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Value',
      props: {
        hint: '**COMPONENT (v-calendar)** - A date in the format of `YYYY-MM-DD` which determines what span of time for the calendar.',
        placeholder: 'undefined'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**SELF** - An alias to the `click:date` event used to support v-model.'
  }, {
    id: 'moved',
    title: '**SELF** - One of the functions `next`, `prev`, and `move` was called. The event passed is the day object calculated for the movement.'
  }, {
    id: 'change',
    title: '**SELF** - The range of days displayed on the calendar changed. This is triggered on initialization. The event passed is an object with start and end date objects.'
  }, {
    id: 'click:date',
    title: '**SELF** - The click event on the day of the month link. The event passed is the day & time object.'
  }, {
    id: 'contextmenu:date',
    title: '**SELF** - The right-click event on the day of the month link. The event passed is the day & time object.'
  }, {
    id: 'click:more',
    title: '**SELF** - The click event on the `X more` button on views with too many events in a day.'
  }, {
    id: 'click:day',
    title: '**SELF** - The click event on a day. The event passed is the day object.'
  }, {
    id: 'contextmenu:day',
    title: '**SELF** - The right-click event on a day. The event passed is the day object.'
  }, {
    id: 'mousedown:day',
    title: '**SELF** - The mousedown event on a day. The event passed is the day object.'
  }, {
    id: 'mousemove:day',
    title: '**SELF** - The mousemove event on a day. The event passed is the day object.'
  }, {
    id: 'mouseup:day',
    title: '**SELF** - The mouseup event on a day. The event passed is the day object.'
  }, {
    id: 'mouseenter:day',
    title: '**SELF** - The mouseenter event on a day. The event passed is the day object.'
  }, {
    id: 'mouseleave:day',
    title: '**SELF** - The mouseleave event on a day. The event passed is the day object.'
  }, {
    id: 'touchstart:day',
    title: '**SELF** - The touchstart event on a day. The event passed is the day object.'
  }, {
    id: 'touchmove:day',
    title: '**SELF** - The touchmove event on a day. The event passed is the day object.'
  }, {
    id: 'touchend:day',
    title: '**SELF** - The touchend event on a day. The event passed is the day object.'
  }, {
    id: 'click:time',
    title: '**SELF** - The click event at a specific time in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'contextmenu:time',
    title: '**SELF** - The right-click event at a specific time in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'mousedown:time',
    title: '**SELF** - The mousedown event at a specific time in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'mousemove:time',
    title: '**SELF** - The mousemove event at a specific time in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'mouseup:time',
    title: '**SELF** - The mouseup event at a specific time in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'mouseenter:time',
    title: '**SELF** - The mouseenter event at a specific time in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'mouseleave:time',
    title: '**SELF** - The mouseleave event at a specific time in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'touchstart:time',
    title: '**SELF** - The touchstart event at a specific time in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'touchmove:time',
    title: '**SELF** - The touchmove event at a specific time in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'touchend:time',
    title: '**SELF** - The touchend event at a specific time in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'click:interval',
    title: '**SELF** - The click event at a specific interval label in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'contextmenu:interval',
    title: '**SELF** - The right-click event at a specific interval label in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'mousedown:interval',
    title: '**SELF** - The mousedown event at a specific interval label in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'mousemove:interval',
    title: '**SELF** - The mousemove event at a specific interval label in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'mouseup:interval',
    title: '**SELF** - The mouseup event at a specific interval label in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'mouseenter:interval',
    title: '**SELF** - The mouseenter event at a specific interval label in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'mouseleave:interval',
    title: '**SELF** - The mouseleave event at a specific interval label in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'touchstart:interval',
    title: '**SELF** - The touchstart event at a specific interval label in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'touchmove:interval',
    title: '**SELF** - The touchmove event at a specific interval label in the `day` view. The event passed is the day & time object.'
  }, {
    id: 'touchend:interval',
    title: '**SELF** - The touchend event at a specific interval label in the `day` view. The event passed is the day & time object.'
  }],
  slots: [{
    id: 'event',
    title: '**SELF** - The content placed in an event. This ignores the `event-name` prop.'
  }, {
    id: 'day',
    title: '**SELF** - The content that is placed in a `week` or `month` view. The day & time object is passed through this slots scope.'
  }, {
    id: 'day-body',
    title: '**SELF** - The content that is placed in a `day` view in the scrollable interval container. The day & time object is passed through this slots scope.'
  }, {
    id: 'day-header',
    title: '**SELF** - The content that is placed in a `day` view in the top container. The day & time object is passed through this slots scope.'
  }, {
    id: 'day-label',
    title: '**SELF** - The content that is placed in the day of the month space in the `custom-weekly` or `month` view. The day & time object is passed through this slots scope.'
  }, {
    id: 'day-label-header',
    title: '**SELF** - The content that is placed in the day of the month space in the `week`, `day`, `4day`, or `custom-daily` view. The day & time object is passed through this slots scope.'
  }, {
    id: 'day-month',
    title: '**SELF** - The content that is placed in the month space in the `week` or `month` view. The day & time object is passed through this slots scope.'
  }, {
    id: 'interval',
    title: '**SELF** - The content that is placed in the interval space in the `day` view. The day & time object is passed through this slots scope.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card-actions.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card-actions.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card-subtitle.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card-subtitle.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card-text.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card-text.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card-title.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card-title.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card.js":
/*!********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-card.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    },
    append: {
      type: 'input',
      input: 'switch',
      label: 'Append',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Removes the ability to click or target the component.'
      }
    },
    exact: {
      type: 'input',
      input: 'switch',
      label: 'Exact',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Exactly match the link. Without this, \'/\' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.'
      }
    },
    'exact-active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Exact-active-class',
      props: {
        hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-card)** - Removes the card\'s elevation.'
      }
    },
    hover: {
      type: 'input',
      input: 'switch',
      label: 'Hover',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-card)** - Will apply an elevation of 4dp when hovered (default 2dp). You can find more information on the [elevation page](/styles/elevation).'
      }
    },
    href: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Href',
      props: {
        hint: '**MIXIN (routable)** - Designates the component as anchor and applies the **href** attribute.',
        placeholder: 'undefined'
      }
    },
    img: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Img',
      props: {
        hint: '**COMPONENT (v-card)** - Specifies an image background for the card. For more advanced implementations, it is recommended that you use the [v-img](/components/images) component. You can find a [v-img example here](#media-with-text).',
        placeholder: 'undefined'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    link: {
      type: 'input',
      input: 'switch',
      label: 'Link',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Designates that the component is a link. This is automatic when using the **href** or **to** prop.'
      }
    },
    nuxt: {
      type: 'input',
      input: 'switch',
      label: 'Nuxt',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).'
      }
    },
    outlined: {
      type: 'input',
      input: 'switch',
      label: 'Outlined',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-card)** - Removes card elevation shadow and adds a thin border.'
      }
    },
    raised: {
      type: 'input',
      input: 'switch',
      label: 'Raised',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-card)** - Specifies a higher default elevation (8dp). You can find more information on the [elevation page](/styles/elevation).'
      }
    },
    replace: {
      type: 'input',
      input: 'switch',
      label: 'Replace',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Applies the [v-ripple](/directives/ripples) directive.'
      }
    },
    shaped: {
      type: 'input',
      input: 'switch',
      label: 'Shaped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-card)** - Applies a large border radius on the top left and bottom right of the card.'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**MIXIN (routable)** - Specify a custom tag used on the root element.',
        placeholder: '\'div\''
      }
    },
    target: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Target',
      props: {
        hint: '**MIXIN (routable)** - Designates the target attribute. This should only be applied when using the **href** prop.',
        placeholder: 'undefined'
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
      }
    },
    to: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'To',
      props: {
        hint: '**MIXIN (routable)** - Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    }
  },
  events: [{
    id: 'click',
    title: '**SELF** - Emitted when component is clicked - Will trigger component to ripple when clicked unless the `.native` modifier is used'
  }],
  slots: [{
    id: 'progress',
    title: '**GENERIC (undefined)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-carousel-item.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-carousel-item.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (groupable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    },
    append: {
      type: 'input',
      input: 'switch',
      label: 'Append',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (groupable)** - Removes the ability to click or target the component.'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (bootable)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    },
    exact: {
      type: 'input',
      input: 'switch',
      label: 'Exact',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Exactly match the link. Without this, \'/\' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.'
      }
    },
    'exact-active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Exact-active-class',
      props: {
        hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    },
    href: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Href',
      props: {
        hint: '**MIXIN (routable)** - Designates the component as anchor and applies the **href** attribute.',
        placeholder: 'undefined'
      }
    },
    link: {
      type: 'input',
      input: 'switch',
      label: 'Link',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Designates that the component is a link. This is automatic when using the **href** or **to** prop.'
      }
    },
    nuxt: {
      type: 'input',
      input: 'switch',
      label: 'Nuxt',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).'
      }
    },
    replace: {
      type: 'input',
      input: 'switch',
      label: 'Replace',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Applies the [v-ripple](/directives/ripples) directive.'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**MIXIN (routable)** - Specify a custom tag used on the root element.',
        placeholder: 'undefined'
      }
    },
    target: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Target',
      props: {
        hint: '**MIXIN (routable)** - Designates the target attribute. This should only be applied when using the **href** prop.',
        placeholder: 'undefined'
      }
    },
    to: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'To',
      props: {
        hint: '**MIXIN (routable)** - Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-carousel-reverse-transition.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-carousel-reverse-transition.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - carousel-reverse-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - carousel-reverse-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - carousel-reverse-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - carousel-reverse-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - carousel-reverse-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-carousel-transition.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-carousel-transition.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - carousel-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - carousel-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - carousel-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - carousel-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - carousel-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-carousel.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-carousel.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**SELF** - The **active-class** applied to children when they are activated.',
        placeholder: '\'v-window-item--active\''
      }
    },
    continuous: {
      type: 'input',
      input: 'switch',
      label: 'Continuous',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - If `true`, window will "wrap around" from the last item to the first, and from the first item to the last'
      }
    },
    cycle: {
      type: 'input',
      input: 'switch',
      label: 'Cycle',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-carousel)** - Determines if the carousel should cycle through images.'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    'delimiter-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Delimiter-icon',
      props: {
        hint: '**COMPONENT (v-carousel)** - Sets icon for carousel delimiter',
        placeholder: '\'$delimiter\''
      }
    },
    'hide-delimiter-background': {
      type: 'input',
      input: 'switch',
      label: 'Hide-delimiter-background',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-carousel)** - Hides the bottom delimiter background.'
      }
    },
    'hide-delimiters': {
      type: 'input',
      input: 'switch',
      label: 'Hide-delimiters',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-carousel)** - Hides the carousel\'s bottom delimiters.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    mandatory: {
      type: 'input',
      input: 'switch',
      label: 'Mandatory',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Forces a value to always be selected (if available).'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Allow multiple selections. The **value** prop must be an _array_.'
      }
    },
    progress: {
      type: 'input',
      input: 'switch',
      label: 'Progress',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-carousel)** - Displays a carousel progress bar. Requires the **cycle** prop and **interval**.'
      }
    },
    'progress-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Progress-color',
      props: {
        hint: '**COMPONENT (v-carousel)** - Applies specified color to progress bar.',
        placeholder: 'undefined'
      }
    },
    reverse: {
      type: 'input',
      input: 'switch',
      label: 'Reverse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Reverse the normal transition direction.'
      }
    },
    'show-arrows': {
      type: 'input',
      input: 'switch',
      label: 'Show-arrows',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Display the "next" and "prev" buttons'
      }
    },
    'show-arrows-on-hover': {
      type: 'input',
      input: 'switch',
      label: 'Show-arrows-on-hover',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Display the "next" and "prev" buttons on hover. `show-arrows` MUST ALSO be set.'
      }
    },
    touchless: {
      type: 'input',
      input: 'switch',
      label: 'Touchless',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Disable touch support.'
      }
    },
    vertical: {
      type: 'input',
      input: 'switch',
      label: 'Vertical',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Uses a vertical transition when changing windows.'
      }
    },
    'vertical-delimiters': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Vertical-delimiters',
      props: {
        hint: '**COMPONENT (v-carousel)** - Displays carousel delimiters vertically.',
        placeholder: 'undefined'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**SELF** - Emitted when the component value is changed by user interaction'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-checkbox.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-checkbox.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    indeterminate: {
      type: 'input',
      input: 'switch',
      label: 'Indeterminate',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-checkbox'
      }
    },
    'indeterminate-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Indeterminate-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-checkbox',
        placeholder: '\'$checkboxIndeterminate\''
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    loading: {
      type: 'input',
      input: 'switch',
      label: 'Loading',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it\'s supported by the component) or the primary color'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - selectable'
      }
    },
    'off-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Off-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-checkbox',
        placeholder: '\'$checkboxOff\''
      }
    },
    'on-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'On-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-checkbox',
        placeholder: '\'$checkboxOn\''
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (rippleable)** - Applies the [v-ripple](/directives/ripples) directive.'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'click',
    title: '**COMPONENT (v-input)** - Emitted when input is clicked'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }, {
    id: 'update:indeterminate',
    title: '**MISSING DESCRIPTION** - undefined'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }, {
    id: 'label',
    title: '**GENERIC (undefined)** - Replaces the default label'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-chip-group.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-chip-group.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (base-item-group)** - The **active-class** applied to children when they are activated.',
        placeholder: '\'v-slide-item--active\''
      }
    },
    'center-active': {
      type: 'input',
      input: 'switch',
      label: 'Center-active',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Forces the selected chip to be centered'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    column: {
      type: 'input',
      input: 'switch',
      label: 'Column',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-chip-group)** - Remove horizontal pagination and wrap items as needed'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    mandatory: {
      type: 'input',
      input: 'switch',
      label: 'Mandatory',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Forces a value to always be selected (if available).'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Allow multiple selections. The **value** prop must be an _array_.'
      }
    },
    'next-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Next-icon',
      props: {
        hint: '**SELF** - Specify the icon to use for the next icon',
        placeholder: '\'$next\''
      }
    },
    'prev-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prev-icon',
      props: {
        hint: '**SELF** - Specify the icon to use for the prev icon',
        placeholder: '\'$prev\''
      }
    },
    'show-arrows': {
      type: 'input',
      input: 'switch',
      label: 'Show-arrows',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Force the display of the pagination arrows'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**SELF** - Emitted when the component value is changed by user interaction'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-chip.js":
/*!********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-chip.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    active: {
      type: 'input',
      input: 'switch',
      label: 'Active',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-chip)** - Determines whether the chip is visible or not.'
      }
    },
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.',
        placeholder: ''
      }
    },
    append: {
      type: 'input',
      input: 'switch',
      label: 'Append',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.'
      }
    },
    close: {
      type: 'input',
      input: 'switch',
      label: 'Close',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-chip)** - Adds remove button'
      }
    },
    'close-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Close-icon',
      props: {
        hint: '**COMPONENT (v-chip)** - Change the default icon used for **close** chips',
        placeholder: '\'$delete\''
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Disables the chip, making it un-selectable'
      }
    },
    draggable: {
      type: 'input',
      input: 'switch',
      label: 'Draggable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-chip)** - Makes the chip draggable'
      }
    },
    exact: {
      type: 'input',
      input: 'switch',
      label: 'Exact',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Exactly match the link. Without this, \'/\' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.'
      }
    },
    'exact-active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Exact-active-class',
      props: {
        hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    },
    filter: {
      type: 'input',
      input: 'switch',
      label: 'Filter',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-chip)** - Displays a selection icon when selected'
      }
    },
    'filter-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Filter-icon',
      props: {
        hint: '**COMPONENT (v-chip)** - Change the default icon used for **filter** chips',
        placeholder: '\'$complete\''
      }
    },
    href: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Href',
      props: {
        hint: '**MIXIN (routable)** - Designates the component as anchor and applies the **href** attribute.',
        placeholder: 'undefined'
      }
    },
    label: {
      type: 'input',
      input: 'switch',
      label: 'Label',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-chip)** - Removes circle edges'
      }
    },
    large: {
      type: 'input',
      input: 'switch',
      label: 'Large',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component large.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    link: {
      type: 'input',
      input: 'switch',
      label: 'Link',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Explicitly define the chip as a link'
      }
    },
    nuxt: {
      type: 'input',
      input: 'switch',
      label: 'Nuxt',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).'
      }
    },
    outlined: {
      type: 'input',
      input: 'switch',
      label: 'Outlined',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-chip)** - Removes background and applies border and text color'
      }
    },
    pill: {
      type: 'input',
      input: 'switch',
      label: 'Pill',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-chip)** - Remove `v-avatar` padding'
      }
    },
    replace: {
      type: 'input',
      input: 'switch',
      label: 'Replace',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Applies the [v-ripple](/directives/ripples) directive.'
      }
    },
    small: {
      type: 'input',
      input: 'switch',
      label: 'Small',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component small.'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**MIXIN (routable)** - Specify a custom tag used on the root element.',
        placeholder: '\'span\''
      }
    },
    target: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Target',
      props: {
        hint: '**MIXIN (routable)** - Designates the target attribute. This should only be applied when using the **href** prop.',
        placeholder: 'undefined'
      }
    },
    'text-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Text-color',
      props: {
        hint: '**GENERIC (v-chip)** - Applies a specified color to the control text',
        placeholder: 'undefined'
      }
    },
    to: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'To',
      props: {
        hint: '**MIXIN (routable)** - Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    },
    'x-large': {
      type: 'input',
      input: 'switch',
      label: 'X-large',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component extra large.'
      }
    },
    'x-small': {
      type: 'input',
      input: 'switch',
      label: 'X-small',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component extra small.'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**GENERIC (undefined)** - The updated bound model'
  }, {
    id: 'click',
    title: '**SELF** - Emitted when component is clicked, toggles chip if contained in a chip group - Will trigger component to ripple when clicked unless the `.native` modifier is used'
  }, {
    id: 'click:close',
    title: '**SELF** - Emitted when close icon is clicked'
  }, {
    id: 'update:active',
    title: '**SELF** - Emitted when close icon is clicked, sets active to `false`'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-col.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-col.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'align-self': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Align-self',
      props: {
        hint: '**MISSING DESCRIPTION** - v-col',
        placeholder: 'undefined'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**MISSING DESCRIPTION** - v-col',
        placeholder: '\'div\''
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-color-picker-canvas.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-color-picker-canvas.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-color-picker-canvas'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-color-picker-swatches.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-color-picker-swatches.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-color-picker.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-color-picker.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-color-picker)** - Disables picker'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-color-picker)** - Removes elevation'
      }
    },
    'hide-canvas': {
      type: 'input',
      input: 'switch',
      label: 'Hide-canvas',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-color-picker)** - Hides canvas'
      }
    },
    'hide-inputs': {
      type: 'input',
      input: 'switch',
      label: 'Hide-inputs',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-color-picker)** - Hides inputs'
      }
    },
    'hide-mode-switch': {
      type: 'input',
      input: 'switch',
      label: 'Hide-mode-switch',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-color-picker)** - Hides mode switch'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**SPECIAL (v-color-picker)** - Sets mode of inputs. Available modes are \'rgba\', \'hsla\', and \'hexa\'. Can be synced with the `.sync` modifier.',
        placeholder: '\'rgba\''
      }
    },
    'show-swatches': {
      type: 'input',
      input: 'switch',
      label: 'Show-swatches',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-color-picker)** - Displays color swatches'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**SPECIAL (undefined)** - Selected color. Depending on what you passed to the `value` prop this is either a string or an object'
  }, {
    id: 'update:color',
    title: '**SPECIAL (undefined)** - Selected color. This is the internal representation of the color, containing all values.'
  }, {
    id: 'update:mode',
    title: '**SPECIAL (undefined)** - Selected mode'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-combobox.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-combobox.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'allow-overflow': {
      type: 'input',
      input: 'switch',
      label: 'Allow-overflow',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - Allow the menu to overflow off the screen'
      }
    },
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: '\'$dropdown\''
      }
    },
    'append-outer-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-outer-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Appends an icon to the outside the component\'s input, uses same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'auto-select-first': {
      type: 'input',
      input: 'switch',
      label: 'Auto-select-first',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - When searching, will always highlight the first option'
      }
    },
    autofocus: {
      type: 'input',
      input: 'switch',
      label: 'Autofocus',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Enables autofocus'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    'cache-items': {
      type: 'input',
      input: 'switch',
      label: 'Cache-items',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Keeps a local _unique_ copy of all items that have been passed through the **items** prop.'
      }
    },
    chips: {
      type: 'input',
      input: 'switch',
      label: 'Chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes display of selections to chips'
      }
    },
    'clear-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Clear-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applied when using **clearable** and the input is dirty',
        placeholder: '\'$clear\''
      }
    },
    clearable: {
      type: 'input',
      input: 'switch',
      label: 'Clearable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Add input clear functionality, default icon is Material Icons **clear**'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    'deletable-chips': {
      type: 'input',
      input: 'switch',
      label: 'Deletable-chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Adds a remove icon to selected chips'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    'disable-lookup': {
      type: 'input',
      input: 'switch',
      label: 'Disable-lookup',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Disables keyboard lookup'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    filled: {
      type: 'input',
      input: 'switch',
      label: 'Filled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the alternate filled input style'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props'
      }
    },
    'full-width': {
      type: 'input',
      input: 'switch',
      label: 'Full-width',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Designates input type as full-width'
      }
    },
    'hide-no-data': {
      type: 'input',
      input: 'switch',
      label: 'Hide-no-data',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.'
      }
    },
    'hide-selected': {
      type: 'input',
      input: 'switch',
      label: 'Hide-selected',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Do not display in the select menu items that are already selected'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    'item-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-color',
      props: {
        hint: '**COMPONENT (v-select)** - Sets color of selected items',
        placeholder: '\'primary\''
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes select to multiple. Accepts array for value'
      }
    },
    'no-data-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'No-data-text',
      props: {
        hint: '**MIXIN (filterable)** - Display text when there is no data',
        placeholder: '\'$vuetify.noDataText\''
      }
    },
    'no-filter': {
      type: 'input',
      input: 'switch',
      label: 'No-filter',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - Do not apply filtering when searching. Useful when data is being filtered server side'
      }
    },
    'open-on-clear': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-clear',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state'
      }
    },
    outlined: {
      type: 'input',
      input: 'switch',
      label: 'Outlined',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the outlined style to the input'
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    placeholder: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Placeholder',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets the input’s placeholder text',
        placeholder: 'undefined'
      }
    },
    prefix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prefix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays prefix text',
        placeholder: 'undefined'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'prepend-inner-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-inner-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Prepends an icon inside the component\'s input, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    'return-object': {
      type: 'input',
      input: 'switch',
      label: 'Return-object',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes the selection behavior to return the object directly rather than the value specified with **item-value**'
      }
    },
    reverse: {
      type: 'input',
      input: 'switch',
      label: 'Reverse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reverses the input orientation'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Adds a border radius to the input'
      }
    },
    'search-input': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Search-input',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - Search value. Can be used with `.sync` modifier.',
        placeholder: 'undefined'
      }
    },
    shaped: {
      type: 'input',
      input: 'switch',
      label: 'Shaped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`'
      }
    },
    'single-line': {
      type: 'input',
      input: 'switch',
      label: 'Single-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Label does not move on focus/dirty'
      }
    },
    'small-chips': {
      type: 'input',
      input: 'switch',
      label: 'Small-chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes display of selections to chips with the **small** property'
      }
    },
    solo: {
      type: 'input',
      input: 'switch',
      label: 'Solo',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Changes the style of the input'
      }
    },
    'solo-inverted': {
      type: 'input',
      input: 'switch',
      label: 'Solo-inverted',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reduces element opacity until focused'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    suffix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Suffix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays suffix text',
        placeholder: 'undefined'
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets input type',
        placeholder: '\'text\''
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'click',
    title: '**COMPONENT (v-input)** - Emitted when input is clicked'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }, {
    id: 'blur',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is blurred'
  }, {
    id: 'click:clear',
    title: '**COMPONENT (v-text-field)** - Emitted when clearable icon clicked'
  }, {
    id: 'click:append-outer',
    title: '**COMPONENT (v-text-field)** - Emitted when appended outer icon is clicked'
  }, {
    id: 'click:prepend-inner',
    title: '**COMPONENT (v-text-field)** - Emitted when prepended inner icon is clicked'
  }, {
    id: 'focus',
    title: '**COMPONENT (v-text-field)** - Emitted when component is focused'
  }, {
    id: 'change',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is changed by user interaction'
  }, {
    id: 'input',
    title: '**GENERIC (v-text-field)** - The updated bound model'
  }, {
    id: 'keydown',
    title: '**COMPONENT (v-text-field)** - Emitted when **any** key is pressed'
  }, {
    id: 'update:search-input',
    title: '**COMPONENT (v-select)** - The `search-input.sync` event'
  }, {
    id: 'update:list-index',
    title: '**COMPONENT (v-select)** - Emitted when menu item is selected using keyboard arrows'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }, {
    id: 'append-outer',
    title: '**COMPONENT (v-text-field)** - Appends an item inside input content'
  }, {
    id: 'label',
    title: '**GENERIC (v-text-field)** - Replaces the default label'
  }, {
    id: 'prepend-inner',
    title: '**COMPONENT (v-text-field)** - Prepends an item inside input content'
  }, {
    id: 'progress',
    title: '**GENERIC (v-text-field)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
  }, {
    id: 'append-item',
    title: '**COMPONENT (v-select)** - Adds an item after menu content'
  }, {
    id: 'prepend-item',
    title: '**COMPONENT (v-select)** - Adds an item before menu content'
  }, {
    id: 'item',
    title: '**COMPONENT (v-select)** - Define a custom item appearance'
  }, {
    id: 'no-data',
    title: '**COMPONENT (v-select)** - Displayed when there are no filtered items'
  }, {
    id: 'selection',
    title: '**COMPONENT (v-select)** - Define a custom selection appearance'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-container.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-container.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    fluid: {
      type: 'input',
      input: 'switch',
      label: 'Fluid',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-container'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-container)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**MISSING DESCRIPTION** - v-container',
        placeholder: '\'div\''
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-content.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-content.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**MISSING DESCRIPTION** - v-content',
        placeholder: '\'main\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-counter.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-counter.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data-footer.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data-footer.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'disable-items-per-page': {
      type: 'input',
      input: 'switch',
      label: 'Disable-items-per-page',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-data-footer'
      }
    },
    'disable-pagination': {
      type: 'input',
      input: 'switch',
      label: 'Disable-pagination',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-data-footer'
      }
    },
    'first-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'First-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-data-footer',
        placeholder: '\'$first\''
      }
    },
    'items-per-page-all-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Items-per-page-all-text',
      props: {
        hint: '**MISSING DESCRIPTION** - v-data-footer',
        placeholder: '\'$vuetify.dataFooter.itemsPerPageAll\''
      }
    },
    'items-per-page-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Items-per-page-text',
      props: {
        hint: '**MISSING DESCRIPTION** - v-data-footer',
        placeholder: '\'$vuetify.dataFooter.itemsPerPageText\''
      }
    },
    'last-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Last-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-data-footer',
        placeholder: '\'$last\''
      }
    },
    'next-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Next-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-data-footer',
        placeholder: '\'$next\''
      }
    },
    'page-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Page-text',
      props: {
        hint: '**MISSING DESCRIPTION** - v-data-footer',
        placeholder: '\'$vuetify.dataFooter.pageText\''
      }
    },
    'prev-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prev-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-data-footer',
        placeholder: '\'$prev\''
      }
    },
    'show-current-page': {
      type: 'input',
      input: 'switch',
      label: 'Show-current-page',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-data-footer'
      }
    },
    'show-first-last-page': {
      type: 'input',
      input: 'switch',
      label: 'Show-first-last-page',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-data-footer'
      }
    }
  },
  events: [{
    id: 'update:options',
    title: '**MISSING DESCRIPTION** - undefined'
  }],
  slots: [{
    id: 'page-text',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'page-text',
    title: '**MISSING DESCRIPTION** - undefined'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data-iterator.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data-iterator.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    'disable-filtering': {
      type: 'input',
      input: 'switch',
      label: 'Disable-filtering',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - Disables filtering completely'
      }
    },
    'disable-pagination': {
      type: 'input',
      input: 'switch',
      label: 'Disable-pagination',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - Disables pagination completely'
      }
    },
    'disable-sort': {
      type: 'input',
      input: 'switch',
      label: 'Disable-sort',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - Disables sorting completely'
      }
    },
    'hide-default-footer': {
      type: 'input',
      input: 'switch',
      label: 'Hide-default-footer',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-data-iterator)** - Hides default footer'
      }
    },
    'item-key': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-key',
      props: {
        hint: '**SPECIAL (v-data)** - The property on each item that is used as a unique key',
        placeholder: '\'id\''
      }
    },
    'items-per-page': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Items-per-page',
      props: {
        hint: '**COMPONENT (v-data)** - Changes how many items per page should be visible. Can be used with `.sync` modifier',
        placeholder: '10'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    'loading-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Loading-text',
      props: {
        hint: '**SPECIAL (v-data-iterator)** - Text shown when `loading` is true and no items are provided',
        placeholder: '\'$vuetify.dataIterator.loadingText\''
      }
    },
    locale: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Locale',
      props: {
        hint: '**COMPONENT (v-data)** - Sets the locale of component. Used for translating internal text strings.',
        placeholder: '\'en-US\''
      }
    },
    'multi-sort': {
      type: 'input',
      input: 'switch',
      label: 'Multi-sort',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - If `true` then one can sort on multiple properties'
      }
    },
    'must-sort': {
      type: 'input',
      input: 'switch',
      label: 'Must-sort',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - If `true` then one can not disable sorting, it will always switch between ascending and descending'
      }
    },
    'no-data-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'No-data-text',
      props: {
        hint: '**SPECIAL (v-data-iterator)** - Text shown when no items are provided to the component',
        placeholder: '\'$vuetify.noDataText\''
      }
    },
    'no-results-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'No-results-text',
      props: {
        hint: '**SPECIAL (v-data-iterator)** - Text shown when `search` prop is used and there are no results',
        placeholder: '\'$vuetify.dataIterator.noResultsText\''
      }
    },
    page: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Page',
      props: {
        hint: '**COMPONENT (v-data)** - Changes which page of items is displayed. Can be used with `.sync` modifier',
        placeholder: '1'
      }
    },
    search: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Search',
      props: {
        hint: '**COMPONENT (v-data)** - Text input used to filter items',
        placeholder: 'undefined'
      }
    },
    'selectable-key': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Selectable-key',
      props: {
        hint: '**SPECIAL (v-data-iterator)** - The property on each item that is used to determine if it is selectable or not',
        placeholder: '\'isSelectable\''
      }
    },
    'server-items-length': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Server-items-length',
      props: {
        hint: '**COMPONENT (v-data)** - Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly',
        placeholder: '-1'
      }
    },
    'single-expand': {
      type: 'input',
      input: 'switch',
      label: 'Single-expand',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-data-iterator)** - Changes expansion mode to single expand'
      }
    },
    'single-select': {
      type: 'input',
      input: 'switch',
      label: 'Single-select',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-data-iterator)** - Changes selection mode to single select'
      }
    }
  },
  events: [{
    id: 'current-items',
    title: '**COMPONENT (v-data)** - The items on the current page'
  }, {
    id: 'page-count',
    title: '**COMPONENT (v-data)** - The total number of pages'
  }, {
    id: 'pagination',
    title: '**COMPONENT (v-data)** - Information about the current pagination'
  }, {
    id: 'update:options',
    title: '**COMPONENT (v-data)** - Information about the current options'
  }, {
    id: 'update:page',
    title: '**COMPONENT (v-data)** - The `.sync` event for `page` prop'
  }, {
    id: 'update:items-per-page',
    title: '**COMPONENT (v-data)** - The `.sync` event for `items-per-page` prop'
  }, {
    id: 'update:sort-by',
    title: '**COMPONENT (v-data)** - The `.sync` event for `sort-by` prop'
  }, {
    id: 'update:sort-desc',
    title: '**COMPONENT (v-data)** - The `.sync` event for `sort-desc` prop'
  }, {
    id: 'update:group-by',
    title: '**COMPONENT (v-data)** - The `.sync` event for `group-by` prop'
  }, {
    id: 'update:group-desc',
    title: '**COMPONENT (v-data)** - The `.sync` event for `group-desc` prop'
  }, {
    id: 'update:multi-sort',
    title: '**COMPONENT (v-data)** - The `.sync` event for `multi-sort` prop'
  }, {
    id: 'update:must-sort',
    title: '**COMPONENT (v-data)** - The `.sync` event for `must-sort` prop'
  }, {
    id: 'input',
    title: '**SPECIAL (v-data-iterator)** - Array of selected items'
  }, {
    id: 'update:expanded',
    title: '**SPECIAL (v-data-iterator)** - The `.sync` event for `expanded` prop'
  }, {
    id: 'item-selected',
    title: '**SPECIAL (v-data-iterator)** - Event emitted when an item is selected or deselected'
  }, {
    id: 'item-expanded',
    title: '**SPECIAL (v-data-iterator)** - Event emitted when an item is expanded or closed'
  }, {
    id: 'toggle-select-all',
    title: '**MISSING DESCRIPTION** - v-data-iterator'
  }],
  slots: [{
    id: 'loading',
    title: '**SPECIAL (data-iterator)** - Defines content for when `loading` is true and no items are provided'
  }, {
    id: 'no-data',
    title: '**SPECIAL (data-iterator)** - Defines content for when no items are provided'
  }, {
    id: 'no-results',
    title: '**SPECIAL (data-iterator)** - Defines content for when `search` is provided but no results are found'
  }, {
    id: 'default',
    title: '**SPECIAL (data-iterator)** - The default slot. Use this to render your items'
  }, {
    id: 'footer',
    title: '**SPECIAL (data-iterator)** - Defines a footer below the items'
  }, {
    id: 'footer.page-text',
    title: '**SPECIAL (data-iterator)** - This slot is forwarded to the default footer. See the `v-data-footer` API for more information'
  }, {
    id: 'header',
    title: '**MISSING DESCRIPTION** - data-iterator'
  }, {
    id: 'item',
    title: '**SPECIAL (data-iterator)** - Slot for each item'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data-table-header.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data-table-header.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    mobile: {
      type: 'input',
      input: 'switch',
      label: 'Mobile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-data-table-header'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data-table.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data-table.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'calculate-widths': {
      type: 'input',
      input: 'switch',
      label: 'Calculate-widths',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-data-table)** - Enables calculation of column widths. `widths` property will be available in select scoped slots'
      }
    },
    caption: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Caption',
      props: {
        hint: '**SPECIAL (v-data-table)** - Set the caption (using `<caption>`)',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-data-table)** - Decreases the height of rows'
      }
    },
    'disable-filtering': {
      type: 'input',
      input: 'switch',
      label: 'Disable-filtering',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - Disables filtering completely'
      }
    },
    'disable-pagination': {
      type: 'input',
      input: 'switch',
      label: 'Disable-pagination',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - Disables pagination completely'
      }
    },
    'disable-sort': {
      type: 'input',
      input: 'switch',
      label: 'Disable-sort',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - Disables sorting completely'
      }
    },
    'expand-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Expand-icon',
      props: {
        hint: '**SPECIAL (v-data-table)** - Icon used for expand toggle button.',
        placeholder: '\'$expand\''
      }
    },
    'fixed-header': {
      type: 'input',
      input: 'switch',
      label: 'Fixed-header',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-data-table)** - Fixed header to top of table. **NOTE:** Does not work in IE11'
      }
    },
    'headers-length': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Headers-length',
      props: {
        hint: '**SPECIAL (v-data-table)** - Can be used in combination with `hide-default-header` to specify the number of columns in the table to allow expansion rows and loading bar to function properly',
        placeholder: 'undefined'
      }
    },
    'hide-default-footer': {
      type: 'input',
      input: 'switch',
      label: 'Hide-default-footer',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT NESTED (v-data-iterator)** - Hides default footer'
      }
    },
    'hide-default-header': {
      type: 'input',
      input: 'switch',
      label: 'Hide-default-header',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-data-table)** - Hide the default headers'
      }
    },
    'item-key': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-key',
      props: {
        hint: '**COMPONENT (v-data)** - The field on each item object that designates a unique key. The value of this property has to be unique for each item.',
        placeholder: '\'id\''
      }
    },
    'items-per-page': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Items-per-page',
      props: {
        hint: '**COMPONENT (v-data)** - Changes how many items per page should be visible. Can be used with `.sync` modifier',
        placeholder: '10'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    loading: {
      type: 'input',
      input: 'switch',
      label: 'Loading',
      "class": 'col-4 mx-0'
    },
    'loading-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Loading-text',
      props: {
        hint: '**COMPONENT NESTED (v-data-iterator)** - Text shown when `loading` is true and no items are provided',
        placeholder: '\'$vuetify.dataIterator.loadingText\''
      }
    },
    locale: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Locale',
      props: {
        hint: '**COMPONENT (v-data)** - Sets the locale of component. Used for translating internal text strings.',
        placeholder: '\'en-US\''
      }
    },
    'multi-sort': {
      type: 'input',
      input: 'switch',
      label: 'Multi-sort',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - If `true` then one can sort on multiple properties'
      }
    },
    'must-sort': {
      type: 'input',
      input: 'switch',
      label: 'Must-sort',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - If `true` then one can not disable sorting, it will always switch between ascending and descending'
      }
    },
    'no-data-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'No-data-text',
      props: {
        hint: '**COMPONENT NESTED (v-data-iterator)** - Text shown when no items are provided to the component',
        placeholder: '\'$vuetify.noDataText\''
      }
    },
    'no-results-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'No-results-text',
      props: {
        hint: '**COMPONENT NESTED (v-data-iterator)** - Text shown when `search` prop is used and there are no results',
        placeholder: '\'$vuetify.dataIterator.noResultsText\''
      }
    },
    page: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Page',
      props: {
        hint: '**COMPONENT (v-data)** - Changes which page of items is displayed. Can be used with `.sync` modifier',
        placeholder: '1'
      }
    },
    search: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Search',
      props: {
        hint: '**COMPONENT (v-data)** - Text input used to filter items',
        placeholder: 'undefined'
      }
    },
    'selectable-key': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Selectable-key',
      props: {
        hint: '**COMPONENT NESTED (v-data-iterator)** - The property on each item that is used to determine if it is selectable or not',
        placeholder: '\'isSelectable\''
      }
    },
    'server-items-length': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Server-items-length',
      props: {
        hint: '**COMPONENT (v-data)** - Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly',
        placeholder: '-1'
      }
    },
    'show-expand': {
      type: 'input',
      input: 'switch',
      label: 'Show-expand',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-data-table)** - Shows the expand toggle in default rows'
      }
    },
    'show-group-by': {
      type: 'input',
      input: 'switch',
      label: 'Show-group-by',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-data-table)** - Shows the group by toggle in the header and enables grouped rows'
      }
    },
    'show-select': {
      type: 'input',
      input: 'switch',
      label: 'Show-select',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-data-table)** - Shows the select checkboxes in both the header and rows (if using default rows)'
      }
    },
    'single-expand': {
      type: 'input',
      input: 'switch',
      label: 'Single-expand',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT NESTED (v-data-iterator)** - Changes expansion mode to single expand'
      }
    },
    'single-select': {
      type: 'input',
      input: 'switch',
      label: 'Single-select',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT NESTED (v-data-iterator)** - Changes selection mode to single select'
      }
    }
  },
  events: [{
    id: 'click:row',
    title: '**SPECIAL (v-data-table)** - Emits when a table row is clicked. The item for the row is included. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`.'
  }, {
    id: 'current-items',
    title: '**COMPONENT (v-data)** - The items on the current page'
  }, {
    id: 'page-count',
    title: '**COMPONENT (v-data)** - The total number of pages'
  }, {
    id: 'pagination',
    title: '**COMPONENT (v-data)** - Information about the current pagination'
  }, {
    id: 'update:options',
    title: '**COMPONENT (v-data)** - Information about the current options'
  }, {
    id: 'update:page',
    title: '**COMPONENT (v-data)** - The `.sync` event for `page` prop'
  }, {
    id: 'update:items-per-page',
    title: '**COMPONENT (v-data)** - The `.sync` event for `items-per-page` prop'
  }, {
    id: 'update:sort-by',
    title: '**COMPONENT (v-data)** - The `.sync` event for `sort-by` prop'
  }, {
    id: 'update:sort-desc',
    title: '**COMPONENT (v-data)** - The `.sync` event for `sort-desc` prop'
  }, {
    id: 'update:group-by',
    title: '**COMPONENT (v-data)** - The `.sync` event for `group-by` prop'
  }, {
    id: 'update:group-desc',
    title: '**COMPONENT (v-data)** - The `.sync` event for `group-desc` prop'
  }, {
    id: 'update:multi-sort',
    title: '**COMPONENT (v-data)** - The `.sync` event for `multi-sort` prop'
  }, {
    id: 'update:must-sort',
    title: '**COMPONENT (v-data)** - The `.sync` event for `must-sort` prop'
  }, {
    id: 'input',
    title: '**COMPONENT NESTED (v-data-iterator)** - Array of selected items'
  }, {
    id: 'update:expanded',
    title: '**COMPONENT NESTED (v-data-iterator)** - The `.sync` event for `expanded` prop'
  }, {
    id: 'item-selected',
    title: '**COMPONENT NESTED (v-data-iterator)** - Event emitted when an item is selected or deselected'
  }, {
    id: 'item-expanded',
    title: '**COMPONENT NESTED (v-data-iterator)** - Event emitted when an item is expanded or closed'
  }, {
    id: 'toggle-select-all',
    title: '**MISSING DESCRIPTION** - v-data-iterator'
  }],
  slots: [{
    id: 'body.append',
    title: '**SPECIAL (undefined)** - Appends elements to the end of the default table `<tbody>`'
  }, {
    id: 'body.prepend',
    title: '**SPECIAL (undefined)** - Prepends elements to the start of the default table `<tbody>`'
  }, {
    id: 'body',
    title: '**SPECIAL (undefined)** - Slot to replace the default table `<tbody>`'
  }, {
    id: 'footer',
    title: '**SPECIAL (undefined)** - Slot to add a custom footer'
  }, {
    id: 'footer.page-text',
    title: '**SPECIAL (undefined)** - Slot to customize footer page text'
  }, {
    id: 'header',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'header.data-table-select',
    title: '**SPECIAL (undefined)** - Slot to replace the default `v-simple-checkbox` in header'
  }, {
    id: 'header.<name>',
    title: '**SPECIAL (undefined)** - Slot to customize a specific header column'
  }, {
    id: 'top',
    title: '**SPECIAL (undefined)** - Slot to add content above the table'
  }, {
    id: 'progress',
    title: '**SPECIAL (undefined)** - Slot to replace the default `<v-progress-linear>` component'
  }, {
    id: 'group',
    title: '**SPECIAL (undefined)** - Slot to replace the default rendering of grouped rows'
  }, {
    id: 'group.header',
    title: '**SPECIAL (undefined)** - Slot to customize the default rendering of group headers'
  }, {
    id: 'group.summary',
    title: '**SPECIAL (undefined)** - Slot to customize the default rendering of group summaries'
  }, {
    id: 'item',
    title: '**SPECIAL (undefined)** - Slot to replace the default rendering of a row'
  }, {
    id: 'item.data-table-select',
    title: '**SPECIAL (undefined)** - Slot to replace the default `v-simple-checkbox` used when selecting rows'
  }, {
    id: 'item.data-table-expand',
    title: '**SPECIAL (undefined)** - Slot to replace the default `v-icon` used when expanding rows'
  }, {
    id: 'item.<name>',
    title: '**SPECIAL (undefined)** - Slot to customize a specific column'
  }, {
    id: 'expanded-item',
    title: '**SPECIAL (undefined)** - Slot to customize expanded rows'
  }, {
    id: 'loading',
    title: '**SPECIAL (data-iterator)** - Defines content for when `loading` is true and no items are provided'
  }, {
    id: 'no-data',
    title: '**SPECIAL (data-iterator)** - Defines content for when no items are provided'
  }, {
    id: 'no-results',
    title: '**SPECIAL (data-iterator)** - Defines content for when `search` is provided but no results are found'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data.js":
/*!********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-data.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'disable-filtering': {
      type: 'input',
      input: 'switch',
      label: 'Disable-filtering',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - Disables filtering completely'
      }
    },
    'disable-pagination': {
      type: 'input',
      input: 'switch',
      label: 'Disable-pagination',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - Disables pagination completely'
      }
    },
    'disable-sort': {
      type: 'input',
      input: 'switch',
      label: 'Disable-sort',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - Disables sorting completely'
      }
    },
    'items-per-page': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Items-per-page',
      props: {
        hint: '**COMPONENT (v-data)** - Changes how many items per page should be visible. Can be used with `.sync` modifier',
        placeholder: '10'
      }
    },
    locale: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Locale',
      props: {
        hint: '**COMPONENT (v-data)** - Sets the locale of component. Used for translating internal text strings.',
        placeholder: '\'en-US\''
      }
    },
    'multi-sort': {
      type: 'input',
      input: 'switch',
      label: 'Multi-sort',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - If `true` then one can sort on multiple properties'
      }
    },
    'must-sort': {
      type: 'input',
      input: 'switch',
      label: 'Must-sort',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-data)** - If `true` then one can not disable sorting, it will always switch between ascending and descending'
      }
    },
    page: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Page',
      props: {
        hint: '**COMPONENT (v-data)** - Changes which page of items is displayed. Can be used with `.sync` modifier',
        placeholder: '1'
      }
    },
    search: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Search',
      props: {
        hint: '**COMPONENT (v-data)** - Text input used to filter items',
        placeholder: 'undefined'
      }
    },
    'server-items-length': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Server-items-length',
      props: {
        hint: '**COMPONENT (v-data)** - Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly',
        placeholder: '-1'
      }
    }
  },
  events: [{
    id: 'current-items',
    title: '**COMPONENT (v-data)** - The items on the current page'
  }, {
    id: 'page-count',
    title: '**COMPONENT (v-data)** - The total number of pages'
  }, {
    id: 'pagination',
    title: '**COMPONENT (v-data)** - Information about the current pagination'
  }, {
    id: 'update:options',
    title: '**COMPONENT (v-data)** - Information about the current options'
  }, {
    id: 'update:page',
    title: '**COMPONENT (v-data)** - The `.sync` event for `page` prop'
  }, {
    id: 'update:items-per-page',
    title: '**COMPONENT (v-data)** - The `.sync` event for `items-per-page` prop'
  }, {
    id: 'update:sort-by',
    title: '**COMPONENT (v-data)** - The `.sync` event for `sort-by` prop'
  }, {
    id: 'update:sort-desc',
    title: '**COMPONENT (v-data)** - The `.sync` event for `sort-desc` prop'
  }, {
    id: 'update:group-by',
    title: '**COMPONENT (v-data)** - The `.sync` event for `group-by` prop'
  }, {
    id: 'update:group-desc',
    title: '**COMPONENT (v-data)** - The `.sync` event for `group-desc` prop'
  }, {
    id: 'update:multi-sort',
    title: '**COMPONENT (v-data)** - The `.sync` event for `multi-sort` prop'
  }, {
    id: 'update:must-sort',
    title: '**COMPONENT (v-data)** - The `.sync` event for `must-sort` prop'
  }],
  slots: [{
    id: 'default',
    title: '**SELF** - The default slot. Use this to render your items'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-date-table.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-date-table.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    current: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Current',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    locale: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Locale',
      props: {
        hint: '**MISSING DESCRIPTION** - localable',
        placeholder: 'undefined'
      }
    },
    max: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Max',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable',
        placeholder: 'undefined'
      }
    },
    min: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Min',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable',
        placeholder: 'undefined'
      }
    },
    range: {
      type: 'input',
      input: 'switch',
      label: 'Range',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable'
      }
    },
    scrollable: {
      type: 'input',
      input: 'switch',
      label: 'Scrollable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable'
      }
    },
    'show-week': {
      type: 'input',
      input: 'switch',
      label: 'Show-week',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-date-table'
      }
    },
    'table-date': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Table-date',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable',
        placeholder: 'undefined'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-header.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-header.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-header'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    locale: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Locale',
      props: {
        hint: '**MISSING DESCRIPTION** - localable',
        placeholder: 'undefined'
      }
    },
    max: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Max',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-header',
        placeholder: 'undefined'
      }
    },
    min: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Min',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-header',
        placeholder: 'undefined'
      }
    },
    'next-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Next-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-header',
        placeholder: '\'$next\''
      }
    },
    'prev-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prev-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-header',
        placeholder: '\'$prev\''
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-header'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-month-table.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-month-table.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    current: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Current',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    locale: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Locale',
      props: {
        hint: '**MISSING DESCRIPTION** - localable',
        placeholder: 'undefined'
      }
    },
    max: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Max',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable',
        placeholder: 'undefined'
      }
    },
    min: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Min',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable',
        placeholder: 'undefined'
      }
    },
    range: {
      type: 'input',
      input: 'switch',
      label: 'Range',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable'
      }
    },
    scrollable: {
      type: 'input',
      input: 'switch',
      label: 'Scrollable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable'
      }
    },
    'table-date': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Table-date',
      props: {
        hint: '**MISSING DESCRIPTION** - themeable',
        placeholder: 'undefined'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-title.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-title.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    date: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Date',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-title',
        placeholder: 'undefined'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-title'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-title'
      }
    },
    'selecting-year': {
      type: 'input',
      input: 'switch',
      label: 'Selecting-year',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-title'
      }
    },
    value: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Value',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-title',
        placeholder: 'undefined'
      }
    },
    'year-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Year-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-title',
        placeholder: 'undefined'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-years.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker-years.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    locale: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Locale',
      props: {
        hint: '**MISSING DESCRIPTION** - localable',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-date-picker-years'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-date-picker.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Disables interaction with the picker'
      }
    },
    'full-width': {
      type: 'input',
      input: 'switch',
      label: 'Full-width',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (picker)** - Forces 100% width'
      }
    },
    'header-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Header-color',
      props: {
        hint: '**MIXIN (picker)** - Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color',
        placeholder: 'undefined'
      }
    },
    landscape: {
      type: 'input',
      input: 'switch',
      label: 'Landscape',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (picker)** - Orients picker horizontal'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    locale: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Locale',
      props: {
        hint: '**SELF** - Sets the locale. Accepts a string with a BCP 47 language tag.',
        placeholder: 'undefined'
      }
    },
    max: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Max',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Maximum allowed date/month (ISO 8601 format)',
        placeholder: 'undefined'
      }
    },
    min: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Min',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Minimum allowed date/month (ISO 8601 format)',
        placeholder: 'undefined'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Allow the selection of multiple dates'
      }
    },
    'next-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Next-icon',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Sets the icon for next month/year button',
        placeholder: '\'$next\''
      }
    },
    'no-title': {
      type: 'input',
      input: 'switch',
      label: 'No-title',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (picker)** - Hide the picker title'
      }
    },
    'picker-date': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Picker-date',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Displayed year/month',
        placeholder: 'undefined'
      }
    },
    'prev-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prev-icon',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Sets the icon for previous month/year button',
        placeholder: '\'$prev\''
      }
    },
    range: {
      type: 'input',
      input: 'switch',
      label: 'Range',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Allow the selection of date range'
      }
    },
    reactive: {
      type: 'input',
      input: 'switch',
      label: 'Reactive',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Updates the picker model when changing months/years automatically'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Makes the picker readonly (doesnt\'t allow to select new date)'
      }
    },
    scrollable: {
      type: 'input',
      input: 'switch',
      label: 'Scrollable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Allows changing displayed month with mouse scroll'
      }
    },
    'selected-items-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Selected-items-text',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Text used for translating the number of selected dates when using *multiple* prop. Can also be customizing globally in [Internationalization](/customization/internationalization).',
        placeholder: '\'$vuetify.datePicker.itemsSelected\''
      }
    },
    'show-week': {
      type: 'input',
      input: 'switch',
      label: 'Show-week',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Toggles visibility of the week numbers in the body of the calendar'
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Determines the type of the picker - `date` for date picker, `month` for month picker',
        placeholder: '\'date\''
      }
    },
    'year-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Year-icon',
      props: {
        hint: '**COMPONENT (v-date-picker)** - Sets the icon in the year selection button',
        placeholder: 'undefined'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**GENERIC (undefined)** - The updated bound model'
  }, {
    id: 'change',
    title: '**SELF** - Reactive date picker emits `input` even when any part of the date (year/month/day) changes, but `change` event is emitted only when the day (for date pickers) or month (for month pickers) changes. If `range` prop is set, date picker emits `change` when both [from, to] are selected.'
  }, {
    id: 'update:picker-date',
    title: '**SELF** - The `.sync` event for `picker-date` prop'
  }, {
    id: 'click:date',
    title: '**SELF** - Emitted when the date button is clicked'
  }, {
    id: 'click:month',
    title: '**SELF** - Emitted when the month button is clicked'
  }, {
    id: 'dblclick:date',
    title: '**SELF** - Emitted when the date button is double clicked'
  }, {
    id: 'dblclick:month',
    title: '**SELF** - Emitted when the month button is double clicked. Usable only for `month` pickers.'
  }],
  slots: [{
    id: 'default',
    title: '**SELF** - Displayed below the calendar, can be used for example for adding action button (`OK` and `Cancel`)'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-dialog-bottom-transition.js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-dialog-bottom-transition.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - dialog-bottom-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - dialog-bottom-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - dialog-bottom-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - dialog-bottom-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - dialog-bottom-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-dialog-transition.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-dialog-transition.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - dialog-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - dialog-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - dialog-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - dialog-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - dialog-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-dialog.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-dialog.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'content-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Content-class',
      props: {
        hint: '**MIXIN (detachable)** - Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targettable by classes passed directly on the component.',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (activatable)** - Disables the ability to open the component.'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    },
    fullscreen: {
      type: 'input',
      input: 'switch',
      label: 'Fullscreen',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - Changes layout for fullscreen display.'
      }
    },
    'hide-overlay': {
      type: 'input',
      input: 'switch',
      label: 'Hide-overlay',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (overlayable)** - Hides the display of the overlay.'
      }
    },
    'internal-activator': {
      type: 'input',
      input: 'switch',
      label: 'Internal-activator',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Detaches the menu content inside of the component as opposed to the document.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - Applies the light theme variant to the component.'
      }
    },
    'no-click-animation': {
      type: 'input',
      input: 'switch',
      label: 'No-click-animation',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - Disables the bounce effect when clicking outside of a `v-dialog`\'s content when using the **persistent** prop.'
      }
    },
    'open-on-hover': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-hover',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Designates whether component should activate when its activator is hovered.'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**COMPONENT (v-dialog)** - Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).',
        placeholder: '\'center center\''
      }
    },
    'overlay-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Overlay-color',
      props: {
        hint: '**MIXIN (overlayable)** - Sets the overlay color.',
        placeholder: 'undefined'
      }
    },
    persistent: {
      type: 'input',
      input: 'switch',
      label: 'Persistent',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - Clicking outside of the element will not deactivate it.'
      }
    },
    'retain-focus': {
      type: 'input',
      input: 'switch',
      label: 'Retain-focus',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard.'
      }
    },
    scrollable: {
      type: 'input',
      input: 'switch',
      label: 'Scrollable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-dialog)** - When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable).'
      }
    }
  },
  events: [{
    id: 'click:outside',
    title: '**SELF** - Event that fires when clicking outside an active dialog.'
  }, {
    id: 'input',
    title: '**GENERIC (undefined)** - The updated bound model'
  }, {
    id: 'keydown',
    title: '**SELF** - Event that fires when key is pressed. If dialog is active and not using the **persistent** prop, the **esc** key will deactivate it.'
  }],
  slots: [{
    id: 'activator',
    title: '**GENERIC (undefined)** - When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-divider.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-divider.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    inset: {
      type: 'input',
      input: 'switch',
      label: 'Inset',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-divider)** - Adds indentation (72px) for **normal** dividers, reduces max height for **vertical**.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    vertical: {
      type: 'input',
      input: 'switch',
      label: 'Vertical',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-divider)** - Displays dividers vertically'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-edit-dialog.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-edit-dialog.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-edit-dialog'
      }
    },
    large: {
      type: 'input',
      input: 'switch',
      label: 'Large',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-edit-dialog'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    persistent: {
      type: 'input',
      input: 'switch',
      label: 'Persistent',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-edit-dialog)** - Clicking outside will not dismiss the dialog'
      }
    },
    transition: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Transition',
      props: {
        hint: '**MISSING DESCRIPTION** - v-edit-dialog',
        placeholder: '\'slide-x-reverse-transition\''
      }
    }
  },
  events: [{
    id: 'cancel',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'close',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'open',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'save',
    title: '**MISSING DESCRIPTION** - undefined'
  }],
  slots: [{
    id: 'input',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expand-transition.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expand-transition.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - expand-transition',
        placeholder: '\'in-out\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expand-x-transition.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expand-x-transition.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - expand-x-transition',
        placeholder: '\'in-out\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expansion-panel-content.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expansion-panel-content.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (bootable)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expansion-panel-header.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expansion-panel-header.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    'disable-icon-rotate': {
      type: 'input',
      input: 'switch',
      label: 'Disable-icon-rotate',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-expansion-panel-header'
      }
    },
    'expand-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Expand-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-expansion-panel-header',
        placeholder: '\'$expand\''
      }
    },
    'hide-actions': {
      type: 'input',
      input: 'switch',
      label: 'Hide-actions',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-expansion-panel-header'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-expansion-panel-header'
      }
    }
  },
  events: [{
    id: 'click',
    title: '**GENERIC (undefined)** - Event that is emitted when the component is clicked'
  }],
  slots: [{
    id: 'actions',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expansion-panel.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expansion-panel.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (groupable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (groupable)** - Disables the expansion-panel content'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-expansion-panel)** - Makes the expansion-panel content read only.'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**SPECIAL (undefined)** - Toggles the value of the selected panel'
  }, {
    id: 'click',
    title: '**SPECIAL (undefined)** - Mouse click event'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expansion-panels.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-expansion-panels.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    accordion: {
      type: 'input',
      input: 'switch',
      label: 'Accordion',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-expansion-panels)** - Removes the margin around open panels'
      }
    },
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (base-item-group)** - The **active-class** applied to children when they are activated.',
        placeholder: '\'v-item--active\''
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-expansion-panels)** - Disables the entire expansion-panel'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-expansion-panels)** - Removes the expansion-panel\'s elevation and borders'
      }
    },
    focusable: {
      type: 'input',
      input: 'switch',
      label: 'Focusable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-expansion-panels)** - Makes the expansion-panel headers focusable'
      }
    },
    hover: {
      type: 'input',
      input: 'switch',
      label: 'Hover',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-expansion-panels)** - Applies a background-color shift on hover to expansion panel headers'
      }
    },
    inset: {
      type: 'input',
      input: 'switch',
      label: 'Inset',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-expansion-panels)** - Makes the expansion-panel open with a inset style'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    mandatory: {
      type: 'input',
      input: 'switch',
      label: 'Mandatory',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Forces a value to always be selected (if available).'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Allow multiple selections. The **value** prop must be an _array_.'
      }
    },
    popout: {
      type: 'input',
      input: 'switch',
      label: 'Popout',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-expansion-panels)** - Makes the expansion-panel open with an popout style'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-expansion-panels)** - Makes the entire expansion-panel read only.'
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-expansion-panels)** - Removes the border-radius'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-fab-transition.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-fab-transition.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - fab-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - fab-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - fab-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - fab-transition',
        placeholder: '\'out-in\''
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - fab-transition',
        placeholder: '\'center center\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-fade-transition.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-fade-transition.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - fade-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - fade-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - fade-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - fade-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - fade-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-file-input.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-file-input.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'append-outer-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-outer-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Appends an icon to the outside the component\'s input, uses same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    autofocus: {
      type: 'input',
      input: 'switch',
      label: 'Autofocus',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Enables autofocus'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    chips: {
      type: 'input',
      input: 'switch',
      label: 'Chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-file-input)** - Changes display of selections to chips'
      }
    },
    'clear-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Clear-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applied when using **clearable** and the input is dirty',
        placeholder: '\'$clear\''
      }
    },
    clearable: {
      type: 'input',
      input: 'switch',
      label: 'Clearable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Add input clear functionality, default icon is Material Icons **clear**'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    'counter-size-string': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Counter-size-string',
      props: {
        hint: '**COMPONENT (v-file-input)** - The text displayed when using the **counter** and **show-size** props. Can also be customized globally on the [internationalization page](/customization/internationalization).',
        placeholder: '\'$vuetify.fileInput.counterSize\''
      }
    },
    'counter-string': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Counter-string',
      props: {
        hint: '**COMPONENT (v-file-input)** - The text displayed when using the **counter** prop. Can also be customized globally on the [internationalization page](/customization/internationalization).',
        placeholder: '\'$vuetify.fileInput.counter\''
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    filled: {
      type: 'input',
      input: 'switch',
      label: 'Filled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the alternate filled input style'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props'
      }
    },
    'full-width': {
      type: 'input',
      input: 'switch',
      label: 'Full-width',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Designates input type as full-width'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-file-input)** - Adds the **multiple** attribute to the input, allowing multiple file selections.'
      }
    },
    outlined: {
      type: 'input',
      input: 'switch',
      label: 'Outlined',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the outlined style to the input'
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    placeholder: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Placeholder',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets the input’s placeholder text',
        placeholder: 'undefined'
      }
    },
    prefix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prefix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays prefix text',
        placeholder: 'undefined'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: '\'$file\''
      }
    },
    'prepend-inner-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-inner-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Prepends an icon inside the component\'s input, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    reverse: {
      type: 'input',
      input: 'switch',
      label: 'Reverse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reverses the input orientation'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Adds a border radius to the input'
      }
    },
    shaped: {
      type: 'input',
      input: 'switch',
      label: 'Shaped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`'
      }
    },
    'single-line': {
      type: 'input',
      input: 'switch',
      label: 'Single-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Label does not move on focus/dirty'
      }
    },
    'small-chips': {
      type: 'input',
      input: 'switch',
      label: 'Small-chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-file-input)** - Changes display of selections to chips with the **small** property'
      }
    },
    solo: {
      type: 'input',
      input: 'switch',
      label: 'Solo',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Changes the style of the input'
      }
    },
    'solo-inverted': {
      type: 'input',
      input: 'switch',
      label: 'Solo-inverted',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reduces element opacity until focused'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    suffix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Suffix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays suffix text',
        placeholder: 'undefined'
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets input type',
        placeholder: '\'file\''
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'click',
    title: '**COMPONENT (v-input)** - Emitted when input is clicked'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }, {
    id: 'blur',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is blurred'
  }, {
    id: 'click:clear',
    title: '**COMPONENT (v-text-field)** - Emitted when clearable icon clicked'
  }, {
    id: 'click:append-outer',
    title: '**COMPONENT (v-text-field)** - Emitted when appended outer icon is clicked'
  }, {
    id: 'click:prepend-inner',
    title: '**COMPONENT (v-text-field)** - Emitted when prepended inner icon is clicked'
  }, {
    id: 'focus',
    title: '**COMPONENT (v-text-field)** - Emitted when component is focused'
  }, {
    id: 'change',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is changed by user interaction'
  }, {
    id: 'input',
    title: '**GENERIC (v-text-field)** - The updated bound model'
  }, {
    id: 'keydown',
    title: '**COMPONENT (v-text-field)** - Emitted when **any** key is pressed'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }, {
    id: 'append-outer',
    title: '**COMPONENT (v-text-field)** - Appends an item inside input content'
  }, {
    id: 'label',
    title: '**GENERIC (v-text-field)** - Replaces the default label'
  }, {
    id: 'prepend-inner',
    title: '**COMPONENT (v-text-field)** - Prepends an item inside input content'
  }, {
    id: 'progress',
    title: '**GENERIC (v-text-field)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
  }, {
    id: 'selection',
    title: '**COMPONENT (v-file-input)** - Slot for defining a custom appearance for selected item(s). Provides the current **index**, **text** (truncated) and [file](https://developer.mozilla.org/en-US/docs/Web/API/File).'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-flex.js":
/*!********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-flex.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    '(size)(1-12)': {
      type: 'input',
      input: 'switch',
      label: '(size)(1-12)',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    },
    'align-self-baseline': {
      type: 'input',
      input: 'switch',
      label: 'Align-self-baseline',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    },
    'align-self-center': {
      type: 'input',
      input: 'switch',
      label: 'Align-self-center',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    },
    'align-self-end': {
      type: 'input',
      input: 'switch',
      label: 'Align-self-end',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    },
    'align-self-start': {
      type: 'input',
      input: 'switch',
      label: 'Align-self-start',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    },
    grow: {
      type: 'input',
      input: 'switch',
      label: 'Grow',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-flex)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    'offset-(size)(0-12)': {
      type: 'input',
      input: 'switch',
      label: 'Offset-(size)(0-12)',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    },
    'order-(size)(1-12)': {
      type: 'input',
      input: 'switch',
      label: 'Order-(size)(1-12)',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    },
    shrink: {
      type: 'input',
      input: 'switch',
      label: 'Shrink',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**MISSING DESCRIPTION** - v-flex',
        placeholder: '\'div\''
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-footer.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-footer.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: absolute** to the component.'
      }
    },
    app: {
      type: 'input',
      input: 'switch',
      label: 'App',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (applicationable)** - Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-content` component to function properly. You can more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    fixed: {
      type: 'input',
      input: 'switch',
      label: 'Fixed',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: fixed** to the component.'
      }
    },
    inset: {
      type: 'input',
      input: 'switch',
      label: 'Inset',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-footer'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    padless: {
      type: 'input',
      input: 'switch',
      label: 'Padless',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-footer'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
        placeholder: '\'div\''
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-form.js":
/*!********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-form.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'lazy-validation': {
      type: 'input',
      input: 'switch',
      label: 'Lazy-validation',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-form)** - If enabled, **value** will always be _true_ unless there are visible validation errors. You can still call `validate()` to manually trigger validation'
      }
    },
    value: {
      type: 'input',
      input: 'switch',
      label: 'Value',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-form)** - A boolean value representing the validity of the form.'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**GENERIC (undefined)** - The updated bound model'
  }, {
    id: 'submit',
    title: '**SELF** - Emitted when form is submitted'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-hover.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-hover.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-hover'
      }
    },
    value: {
      type: 'input',
      input: 'switch',
      label: 'Value',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (toggleable)** - Controls whether the component is visible or hidden.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-icon.js":
/*!********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-icon.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Makes icon smaller (20px)'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-icon)** - Disable the input'
      }
    },
    large: {
      type: 'input',
      input: 'switch',
      label: 'Large',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Makes the component large.'
      }
    },
    left: {
      type: 'input',
      input: 'switch',
      label: 'Left',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-icon)** - Places the icon on the left, when used inside a button'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    right: {
      type: 'input',
      input: 'switch',
      label: 'Right',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-icon)** - Places the icon on the right, when used inside a button'
      }
    },
    small: {
      type: 'input',
      input: 'switch',
      label: 'Small',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Makes the component small.'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**COMPONENT (v-icon)** - Specifies a custom tag to be used',
        placeholder: '\'i\''
      }
    },
    'x-large': {
      type: 'input',
      input: 'switch',
      label: 'X-large',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Makes the component extra large.'
      }
    },
    'x-small': {
      type: 'input',
      input: 'switch',
      label: 'X-small',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component extra small.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-img.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-img.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    alt: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Alt',
      props: {
        hint: '**MISSING DESCRIPTION** - v-img',
        placeholder: 'undefined'
      }
    },
    contain: {
      type: 'input',
      input: 'switch',
      label: 'Contain',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-img'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-img'
      }
    },
    gradient: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Gradient',
      props: {
        hint: '**MISSING DESCRIPTION** - v-img',
        placeholder: 'undefined'
      }
    },
    'lazy-src': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Lazy-src',
      props: {
        hint: '**MISSING DESCRIPTION** - v-img',
        placeholder: 'undefined'
      }
    },
    position: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Position',
      props: {
        hint: '**MISSING DESCRIPTION** - v-img',
        placeholder: '\'center center\''
      }
    },
    sizes: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Sizes',
      props: {
        hint: '**MISSING DESCRIPTION** - v-img',
        placeholder: 'undefined'
      }
    },
    src: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Src',
      props: {
        hint: '**MISSING DESCRIPTION** - v-img',
        placeholder: 'undefined'
      }
    },
    srcset: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Srcset',
      props: {
        hint: '**MISSING DESCRIPTION** - v-img',
        placeholder: 'undefined'
      }
    }
  },
  events: [{
    id: 'error',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'load',
    title: '**MISSING DESCRIPTION** - undefined'
  }],
  slots: [{
    id: 'placeholder',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-input.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-input.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the dark theme variant to the component. This will default the components color to _white_ unless you\'ve configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    loading: {
      type: 'input',
      input: 'switch',
      label: 'Loading',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it\'s supported by the component) or the primary color'
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'change',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-intersect.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-intersect.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-item-group.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-item-group.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (base-item-group)** - The **active-class** applied to children when they are activated.',
        placeholder: '\'v-item--active\''
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    mandatory: {
      type: 'input',
      input: 'switch',
      label: 'Mandatory',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Forces a value to always be selected (if available).'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Allow multiple selections. The **value** prop must be an _array_.'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**SELF** - Emitted when the component value is changed by user interaction'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-item.js":
/*!********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-item.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (groupable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (groupable)** - Removes the ability to click or target the component.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-label.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-label.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-label'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MISSING DESCRIPTION** - v-label',
        placeholder: '\'primary\''
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-label'
      }
    },
    focused: {
      type: 'input',
      input: 'switch',
      label: 'Focused',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-label'
      }
    },
    "for": {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'For',
      props: {
        hint: '**MISSING DESCRIPTION** - v-label',
        placeholder: 'undefined'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    value: {
      type: 'input',
      input: 'switch',
      label: 'Value',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-label'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-layout.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-layout.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    column: {
      type: 'input',
      input: 'switch',
      label: 'Column',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-layout)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    reverse: {
      type: 'input',
      input: 'switch',
      label: 'Reverse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    },
    row: {
      type: 'input',
      input: 'switch',
      label: 'Row',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    },
    wrap: {
      type: 'input',
      input: 'switch',
      label: 'Wrap',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - null'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-lazy.js":
/*!********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-lazy.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**MISSING DESCRIPTION** - VLazy',
        placeholder: '\'div\''
      }
    },
    transition: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Transition',
      props: {
        hint: '**MISSING DESCRIPTION** - VLazy',
        placeholder: '\'fade-transition\''
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-group.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-group.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-group',
        placeholder: 'undefined'
      }
    },
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-group',
        placeholder: '\'$expand\''
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: '\'primary\''
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-group'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (bootable)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    },
    group: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Group',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-group',
        placeholder: 'undefined'
      }
    },
    'no-action': {
      type: 'input',
      input: 'switch',
      label: 'No-action',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-group'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-group',
        placeholder: 'undefined'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-group'
      }
    },
    'sub-group': {
      type: 'input',
      input: 'switch',
      label: 'Sub-group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-group'
      }
    }
  },
  events: [{
    id: 'click',
    title: '**GENERIC (undefined)** - Event that is emitted when the component is clicked'
  }],
  slots: [{
    id: 'activator',
    title: '**GENERIC (undefined)** - When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation'
  }, {
    id: 'append-icon',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'prepend-icon',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-action-text.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-action-text.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-action.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-action.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-avatar.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-avatar.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    horizontal: {
      type: 'input',
      input: 'switch',
      label: 'Horizontal',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-item-avatar'
      }
    },
    left: {
      type: 'input',
      input: 'switch',
      label: 'Left',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-avatar)** - Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons).'
      }
    },
    right: {
      type: 'input',
      input: 'switch',
      label: 'Right',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-avatar)** - Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons).'
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-avatar)** - Removes the component\'s border-radius.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-content.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-content.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-group.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-group.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (base-item-group)** - The **active-class** applied to children when they are activated.',
        placeholder: '\'v-item--active\''
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    mandatory: {
      type: 'input',
      input: 'switch',
      label: 'Mandatory',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Forces a value to always be selected (if available).'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Allow multiple selections. The **value** prop must be an _array_.'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**SELF** - Emitted when the component value is changed by user interaction'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-icon.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-icon.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-subtitle.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-subtitle.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-title.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item-title.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list-item.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.',
        placeholder: ''
      }
    },
    append: {
      type: 'input',
      input: 'switch',
      label: 'Append',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-item'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Removes the ability to click or target the component.'
      }
    },
    exact: {
      type: 'input',
      input: 'switch',
      label: 'Exact',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Exactly match the link. Without this, \'/\' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.'
      }
    },
    'exact-active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Exact-active-class',
      props: {
        hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    },
    href: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Href',
      props: {
        hint: '**MIXIN (routable)** - Designates the component as anchor and applies the **href** attribute.',
        placeholder: 'undefined'
      }
    },
    inactive: {
      type: 'input',
      input: 'switch',
      label: 'Inactive',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-item'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    link: {
      type: 'input',
      input: 'switch',
      label: 'Link',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Designates that the component is a link. This is automatic when using the **href** or **to** prop.'
      }
    },
    nuxt: {
      type: 'input',
      input: 'switch',
      label: 'Nuxt',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).'
      }
    },
    replace: {
      type: 'input',
      input: 'switch',
      label: 'Replace',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Applies the [v-ripple](/directives/ripples) directive.'
      }
    },
    selectable: {
      type: 'input',
      input: 'switch',
      label: 'Selectable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-item'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**MIXIN (routable)** - Specify a custom tag used on the root element.',
        placeholder: '\'div\''
      }
    },
    target: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Target',
      props: {
        hint: '**MIXIN (routable)** - Designates the target attribute. This should only be applied when using the **href** prop.',
        placeholder: 'undefined'
      }
    },
    'three-line': {
      type: 'input',
      input: 'switch',
      label: 'Three-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-item'
      }
    },
    to: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'To',
      props: {
        hint: '**MIXIN (routable)** - Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    },
    'two-line': {
      type: 'input',
      input: 'switch',
      label: 'Two-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-list-item'
      }
    }
  },
  events: [{
    id: 'click',
    title: '**GENERIC (undefined)** - Event that is emitted when the component is clicked'
  }, {
    id: 'keydown',
    title: '**MISSING DESCRIPTION** - undefined'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list.js":
/*!********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-list.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-list)** - Lowers max height of list tiles'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-list)** - Disables all children `v-list-item` components'
      }
    },
    expand: {
      type: 'input',
      input: 'switch',
      label: 'Expand',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-list)** - Will only collapse when explicitly closed'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-list)** - Remove the highlighted background on active `v-list-item`s'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    nav: {
      type: 'input',
      input: 'switch',
      label: 'Nav',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-list)** - An alternative styling that reduces `v-list-item` width and rounds the corners. Typically used with **[v-navigation-drawer](/components/navigation-drawers)**'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-list)** - Rounds the `v-list-item` edges'
      }
    },
    shaped: {
      type: 'input',
      input: 'switch',
      label: 'Shaped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-list)** - Provides an alternative active style for `v-list-item`.'
      }
    },
    subheader: {
      type: 'input',
      input: 'switch',
      label: 'Subheader',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-list)** - Removes top padding. Used when previous sibling is a header'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
        placeholder: '\'div\''
      }
    },
    'three-line': {
      type: 'input',
      input: 'switch',
      label: 'Three-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-list)** - Increases list-item height for three lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.'
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
      }
    },
    'two-line': {
      type: 'input',
      input: 'switch',
      label: 'Two-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-list)** - Increases list-item height for two lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-menu-transition.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-menu-transition.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - menu-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - menu-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - menu-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - menu-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - menu-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-menu.js":
/*!********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-menu.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: absolute** to the component.'
      }
    },
    'allow-overflow': {
      type: 'input',
      input: 'switch',
      label: 'Allow-overflow',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (menuable)** - Removes overflow re-positioning for the content'
      }
    },
    auto: {
      type: 'input',
      input: 'switch',
      label: 'Auto',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-menu)** - Centers list on selected element'
      }
    },
    bottom: {
      type: 'input',
      input: 'switch',
      label: 'Bottom',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the bottom.'
      }
    },
    'close-on-click': {
      type: 'input',
      input: 'switch',
      label: 'Close-on-click',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-menu)** - Designates if menu should close on outside-activator click'
      }
    },
    'close-on-content-click': {
      type: 'input',
      input: 'switch',
      label: 'Close-on-content-click',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-menu)** - Designates if menu should close when its content is clicked'
      }
    },
    'content-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Content-class',
      props: {
        hint: '**MIXIN (detachable)** - Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targettable by classes passed directly on the component.',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    'disable-keys': {
      type: 'input',
      input: 'switch',
      label: 'Disable-keys',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-menu)** - Removes all keyboard interaction'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Disables the menu'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (bootable)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    },
    fixed: {
      type: 'input',
      input: 'switch',
      label: 'Fixed',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: fixed** to the component.'
      }
    },
    'internal-activator': {
      type: 'input',
      input: 'switch',
      label: 'Internal-activator',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Detaches the menu content inside of the component as opposed to the document.'
      }
    },
    left: {
      type: 'input',
      input: 'switch',
      label: 'Left',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the left.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the light theme variant to the component.'
      }
    },
    'offset-overflow': {
      type: 'input',
      input: 'switch',
      label: 'Offset-overflow',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (menuable)** - Causes the component to flip to the opposite side when repositioned due to overflow'
      }
    },
    'offset-x': {
      type: 'input',
      input: 'switch',
      label: 'Offset-x',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-menu)** - Offset the menu on the x-axis. Works in conjunction with direction left/right'
      }
    },
    'offset-y': {
      type: 'input',
      input: 'switch',
      label: 'Offset-y',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-menu)** - Offset the menu on the y-axis. Works in conjunction with direction top/bottom'
      }
    },
    'open-on-click': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-click',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Designates whether menu should open on activator click'
      }
    },
    'open-on-hover': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-hover',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Designates whether menu should open on activator hover'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**COMPONENT (v-menu)** - Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).',
        placeholder: '\'top left\''
      }
    },
    'position-x': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Position-x',
      props: {
        hint: '**MIXIN (menuable)** - Used to position the content when not using an activator slot',
        placeholder: 'undefined'
      }
    },
    'position-y': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Position-y',
      props: {
        hint: '**MIXIN (menuable)** - Used to position the content when not using an activator slot',
        placeholder: 'undefined'
      }
    },
    right: {
      type: 'input',
      input: 'switch',
      label: 'Right',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the right.'
      }
    },
    top: {
      type: 'input',
      input: 'switch',
      label: 'Top',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the content towards the top.'
      }
    }
  },
  slots: [{
    id: 'activator',
    title: '**GENERIC (undefined)** - When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-messages.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-messages.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-mutate.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-mutate.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-navigation-drawer.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-navigation-drawer.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies **position: absolute** to the component.'
      }
    },
    app: {
      type: 'input',
      input: 'switch',
      label: 'App',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (applicationable)** - Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-content` component to function properly. You can more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop'
      }
    },
    bottom: {
      type: 'input',
      input: 'switch',
      label: 'Bottom',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - Expands from the bottom of the screen on mobile devices'
      }
    },
    clipped: {
      type: 'input',
      input: 'switch',
      label: 'Clipped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - A clipped drawer rests under the application toolbar'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    'disable-resize-watcher': {
      type: 'input',
      input: 'switch',
      label: 'Disable-resize-watcher',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - Will automatically open/close drawer when resized depending if mobile or desktop.'
      }
    },
    'disable-route-watcher': {
      type: 'input',
      input: 'switch',
      label: 'Disable-route-watcher',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - Disables opening of navigation drawer when route changes'
      }
    },
    'expand-on-hover': {
      type: 'input',
      input: 'switch',
      label: 'Expand-on-hover',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - Collapses the drawer to a **mini-variant** until hovering with the mouse'
      }
    },
    fixed: {
      type: 'input',
      input: 'switch',
      label: 'Fixed',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies **position: fixed** to the component.'
      }
    },
    floating: {
      type: 'input',
      input: 'switch',
      label: 'Floating',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - A floating drawer has no visible container (no border-right)'
      }
    },
    'hide-overlay': {
      type: 'input',
      input: 'switch',
      label: 'Hide-overlay',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (overlayable)** - Hides the display of the overlay.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    'mini-variant': {
      type: 'input',
      input: 'switch',
      label: 'Mini-variant',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - Condenses navigation drawer width, also accepts the **.sync** modifier. With this, the drawer will re-open when clicking it'
      }
    },
    'overlay-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Overlay-color',
      props: {
        hint: '**MIXIN (overlayable)** - Sets the overlay color.',
        placeholder: 'undefined'
      }
    },
    permanent: {
      type: 'input',
      input: 'switch',
      label: 'Permanent',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - The drawer remains visible regardless of screen size'
      }
    },
    right: {
      type: 'input',
      input: 'switch',
      label: 'Right',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - Places the navigation drawer on the right'
      }
    },
    src: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Src',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - Specifies a [v-img](/components/images) as the component\'s background.',
        placeholder: 'undefined'
      }
    },
    stateless: {
      type: 'input',
      input: 'switch',
      label: 'Stateless',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - Remove all automated state functionality (resize, mobile, route) and manually control the drawer state'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - Specify a custom tag used on the root element.',
        placeholder: '\'aside\''
      }
    },
    temporary: {
      type: 'input',
      input: 'switch',
      label: 'Temporary',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - A temporary drawer sits above its application and uses a scrim (overlay) to darken the background'
      }
    },
    touchless: {
      type: 'input',
      input: 'switch',
      label: 'Touchless',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-navigation-drawer)** - Disable mobile touch functionality'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**GENERIC (undefined)** - The updated bound model'
  }, {
    id: 'transitionend',
    title: '**SELF** - Emits event object when transition is complete.'
  }, {
    id: 'update:mini-variant',
    title: '**SELF** - The `mini-variant.sync` event'
  }],
  slots: [{
    id: 'append',
    title: '**SELF** - A slot at the bottom of the drawer'
  }, {
    id: 'img',
    title: '**SELF** - Used to modify `v-img` properties when using the **src** prop'
  }, {
    id: 'prepend',
    title: '**SELF** - A slot at the top of the drawer'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-overflow-btn.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-overflow-btn.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'allow-overflow': {
      type: 'input',
      input: 'switch',
      label: 'Allow-overflow',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - Allow the menu to overflow off the screen'
      }
    },
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: '\'$dropdown\''
      }
    },
    'append-outer-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-outer-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Appends an icon to the outside the component\'s input, uses same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'auto-select-first': {
      type: 'input',
      input: 'switch',
      label: 'Auto-select-first',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - When searching, will always highlight the first option'
      }
    },
    autofocus: {
      type: 'input',
      input: 'switch',
      label: 'Autofocus',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Enables autofocus'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    'cache-items': {
      type: 'input',
      input: 'switch',
      label: 'Cache-items',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Keeps a local _unique_ copy of all items that have been passed through the **items** prop.'
      }
    },
    chips: {
      type: 'input',
      input: 'switch',
      label: 'Chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes display of selections to chips'
      }
    },
    'clear-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Clear-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applied when using **clearable** and the input is dirty',
        placeholder: '\'$clear\''
      }
    },
    clearable: {
      type: 'input',
      input: 'switch',
      label: 'Clearable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Add input clear functionality, default icon is Material Icons **clear**'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the dark theme variant to the component. This will default the components color to _white_ unless you\'ve configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    'deletable-chips': {
      type: 'input',
      input: 'switch',
      label: 'Deletable-chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Adds a remove icon to selected chips'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    'disable-lookup': {
      type: 'input',
      input: 'switch',
      label: 'Disable-lookup',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Disables keyboard lookup'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    },
    editable: {
      type: 'input',
      input: 'switch',
      label: 'Editable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-overflow-btn)** - Creates an editable button'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    filled: {
      type: 'input',
      input: 'switch',
      label: 'Filled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the alternate filled input style'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props'
      }
    },
    'full-width': {
      type: 'input',
      input: 'switch',
      label: 'Full-width',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Designates input type as full-width'
      }
    },
    'hide-no-data': {
      type: 'input',
      input: 'switch',
      label: 'Hide-no-data',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.'
      }
    },
    'hide-selected': {
      type: 'input',
      input: 'switch',
      label: 'Hide-selected',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Do not display in the select menu items that are already selected'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    'item-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-color',
      props: {
        hint: '**COMPONENT (v-select)** - Sets color of selected items',
        placeholder: '\'primary\''
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes select to multiple. Accepts array for value'
      }
    },
    'no-data-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'No-data-text',
      props: {
        hint: '**MIXIN (filterable)** - Display text when there is no data',
        placeholder: '\'$vuetify.noDataText\''
      }
    },
    'no-filter': {
      type: 'input',
      input: 'switch',
      label: 'No-filter',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - Do not apply filtering when searching. Useful when data is being filtered server side'
      }
    },
    'open-on-clear': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-clear',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state'
      }
    },
    outlined: {
      type: 'input',
      input: 'switch',
      label: 'Outlined',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the outlined style to the input'
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    placeholder: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Placeholder',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets the input’s placeholder text',
        placeholder: 'undefined'
      }
    },
    prefix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prefix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays prefix text',
        placeholder: 'undefined'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'prepend-inner-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-inner-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Prepends an icon inside the component\'s input, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    'return-object': {
      type: 'input',
      input: 'switch',
      label: 'Return-object',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes the selection behavior to return the object directly rather than the value specified with **item-value**'
      }
    },
    reverse: {
      type: 'input',
      input: 'switch',
      label: 'Reverse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reverses the input orientation'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Adds a border radius to the input'
      }
    },
    'search-input': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Search-input',
      props: {
        hint: '**COMPONENT (v-autocomplete)** - Search value. Can be used with `.sync` modifier.',
        placeholder: 'undefined'
      }
    },
    segmented: {
      type: 'input',
      input: 'switch',
      label: 'Segmented',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-overflow-btn)** - Creates a segmented button'
      }
    },
    shaped: {
      type: 'input',
      input: 'switch',
      label: 'Shaped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`'
      }
    },
    'single-line': {
      type: 'input',
      input: 'switch',
      label: 'Single-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Label does not move on focus/dirty'
      }
    },
    'small-chips': {
      type: 'input',
      input: 'switch',
      label: 'Small-chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes display of selections to chips with the **small** property'
      }
    },
    solo: {
      type: 'input',
      input: 'switch',
      label: 'Solo',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Changes the style of the input'
      }
    },
    'solo-inverted': {
      type: 'input',
      input: 'switch',
      label: 'Solo-inverted',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reduces element opacity until focused'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    suffix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Suffix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays suffix text',
        placeholder: 'undefined'
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets input type',
        placeholder: '\'text\''
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'click',
    title: '**COMPONENT (v-input)** - Emitted when input is clicked'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }, {
    id: 'blur',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is blurred'
  }, {
    id: 'click:clear',
    title: '**COMPONENT (v-text-field)** - Emitted when clearable icon clicked'
  }, {
    id: 'click:append-outer',
    title: '**COMPONENT (v-text-field)** - Emitted when appended outer icon is clicked'
  }, {
    id: 'click:prepend-inner',
    title: '**COMPONENT (v-text-field)** - Emitted when prepended inner icon is clicked'
  }, {
    id: 'focus',
    title: '**COMPONENT (v-text-field)** - Emitted when component is focused'
  }, {
    id: 'change',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is changed by user interaction'
  }, {
    id: 'input',
    title: '**GENERIC (v-text-field)** - The updated bound model'
  }, {
    id: 'keydown',
    title: '**COMPONENT (v-text-field)** - Emitted when **any** key is pressed'
  }, {
    id: 'update:search-input',
    title: '**COMPONENT (v-select)** - The `search-input.sync` event'
  }, {
    id: 'update:list-index',
    title: '**COMPONENT (v-select)** - Emitted when menu item is selected using keyboard arrows'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }, {
    id: 'append-outer',
    title: '**COMPONENT (v-text-field)** - Appends an item inside input content'
  }, {
    id: 'label',
    title: '**GENERIC (v-text-field)** - Replaces the default label'
  }, {
    id: 'prepend-inner',
    title: '**COMPONENT (v-text-field)** - Prepends an item inside input content'
  }, {
    id: 'progress',
    title: '**GENERIC (v-text-field)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
  }, {
    id: 'append-item',
    title: '**COMPONENT (v-select)** - Adds an item after menu content'
  }, {
    id: 'prepend-item',
    title: '**COMPONENT (v-select)** - Adds an item before menu content'
  }, {
    id: 'item',
    title: '**COMPONENT (v-select)** - Define a custom item appearance'
  }, {
    id: 'no-data',
    title: '**COMPONENT (v-select)** - Displayed when there are no filtered items'
  }, {
    id: 'selection',
    title: '**COMPONENT (v-select)** - Define a custom selection appearance'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-overlay.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-overlay.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-overlay)** - Applies **position: absolute** to the component.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: '\'#212121\''
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-pagination.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-pagination.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    circle: {
      type: 'input',
      input: 'switch',
      label: 'Circle',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-pagination)** - Shape pagination elements as circles'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-pagination)** - Disables component'
      }
    },
    length: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Length',
      props: {
        hint: '**COMPONENT (v-pagination)** - The length of the pagination component',
        placeholder: '0'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    'next-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Next-icon',
      props: {
        hint: '**COMPONENT (v-pagination)** - Specify the icon to use for the next icon',
        placeholder: '\'$next\''
      }
    },
    'prev-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prev-icon',
      props: {
        hint: '**COMPONENT (v-pagination)** - Specify the icon to use for the prev icon',
        placeholder: '\'$prev\''
      }
    },
    value: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Value',
      props: {
        hint: '**COMPONENT (v-pagination)** - Current selected page',
        placeholder: '0'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**GENERIC (undefined)** - The updated bound model'
  }, {
    id: 'next',
    title: '**SELF** - Emitted when going to next item'
  }, {
    id: 'previous',
    title: '**SELF** - Emitted when going to previous item'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-parallax.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-parallax.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    alt: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Alt',
      props: {
        hint: '**MISSING DESCRIPTION** - v-parallax',
        placeholder: 'undefined'
      }
    },
    src: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Src',
      props: {
        hint: '**MISSING DESCRIPTION** - v-parallax',
        placeholder: 'undefined'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-picker.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-picker.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    'full-width': {
      type: 'input',
      input: 'switch',
      label: 'Full-width',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-picker)** - Forces 100% width'
      }
    },
    landscape: {
      type: 'input',
      input: 'switch',
      label: 'Landscape',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-picker'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    'no-title': {
      type: 'input',
      input: 'switch',
      label: 'No-title',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-picker'
      }
    },
    transition: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Transition',
      props: {
        hint: '**MISSING DESCRIPTION** - v-picker',
        placeholder: '\'fade-transition\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-progress-circular.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-progress-circular.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    button: {
      type: 'input',
      input: 'switch',
      label: 'Button',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-progress-circular'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    indeterminate: {
      type: 'input',
      input: 'switch',
      label: 'Indeterminate',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-progress-circular'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-progress-linear.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-progress-linear.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: absolute** to the component.'
      }
    },
    active: {
      type: 'input',
      input: 'switch',
      label: 'Active',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-progress-linear'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**MISSING DESCRIPTION** - v-progress-linear',
        placeholder: 'undefined'
      }
    },
    bottom: {
      type: 'input',
      input: 'switch',
      label: 'Bottom',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the bottom.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: '\'primary\''
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    fixed: {
      type: 'input',
      input: 'switch',
      label: 'Fixed',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: fixed** to the component.'
      }
    },
    indeterminate: {
      type: 'input',
      input: 'switch',
      label: 'Indeterminate',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-progress-linear'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    query: {
      type: 'input',
      input: 'switch',
      label: 'Query',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-progress-linear'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-progress-linear'
      }
    },
    stream: {
      type: 'input',
      input: 'switch',
      label: 'Stream',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-progress-linear'
      }
    },
    striped: {
      type: 'input',
      input: 'switch',
      label: 'Striped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-progress-linear'
      }
    },
    top: {
      type: 'input',
      input: 'switch',
      label: 'Top',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the content towards the top.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-radio-group.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-radio-group.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (base-item-group)** - The **active-class** applied to children when they are activated.',
        placeholder: '\'v-item--active\''
      }
    },
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    column: {
      type: 'input',
      input: 'switch',
      label: 'Column',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-radio-group'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    loading: {
      type: 'input',
      input: 'switch',
      label: 'Loading',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it\'s supported by the component) or the primary color'
      }
    },
    mandatory: {
      type: 'input',
      input: 'switch',
      label: 'Mandatory',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Forces a value to always be selected (if available).'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Allow multiple selections. The **value** prop must be an _array_.'
      }
    },
    name: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Name',
      props: {
        hint: '**MISSING DESCRIPTION** - v-radio-group',
        placeholder: 'undefined'
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    row: {
      type: 'input',
      input: 'switch',
      label: 'Row',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-radio-group'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'change',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-radio.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-radio.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (groupable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-radio)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    name: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Name',
      props: {
        hint: '**MISSING DESCRIPTION** - v-radio',
        placeholder: 'undefined'
      }
    },
    'off-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Off-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-radio',
        placeholder: '\'$radioOff\''
      }
    },
    'on-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'On-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-radio',
        placeholder: '\'$radioOn\''
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (rippleable)** - Applies the [v-ripple](/directives/ripples) directive.'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'change',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }],
  slots: [{
    id: 'label',
    title: '**GENERIC (undefined)** - Replaces the default label'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-range-slider.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-range-slider.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    'inverse-label': {
      type: 'input',
      input: 'switch',
      label: 'Inverse-label',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-slider)** - Reverse the label position. Works with **rtl**.'
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    'thumb-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Thumb-color',
      props: {
        hint: '**COMPONENT (v-slider)** - Sets the thumb and thumb label color',
        placeholder: 'undefined'
      }
    },
    'track-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Track-color',
      props: {
        hint: '**COMPONENT (v-slider)** - Sets the track\'s color',
        placeholder: 'undefined'
      }
    },
    'track-fill-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Track-fill-color',
      props: {
        hint: '**COMPONENT (v-slider)** - Sets the track\'s fill color',
        placeholder: 'undefined'
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    },
    vertical: {
      type: 'input',
      input: 'switch',
      label: 'Vertical',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-slider)** - Changes slider direction to vertical'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'click',
    title: '**COMPONENT (v-input)** - Emitted when input is clicked'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }, {
    id: 'start',
    title: '**COMPONENT (v-slider)** - Slider value emitted at start of slider movement'
  }, {
    id: 'end',
    title: '**COMPONENT (v-slider)** - Slider value emitted at the end of slider movement'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }, {
    id: 'progress',
    title: '**GENERIC (v-slider)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
  }, {
    id: 'thumb-label',
    title: '**COMPONENT (v-slider)** - Replaces the content inside the thumb label'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-rating.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-rating.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-rating)** - The color used empty icons',
        placeholder: '\'accent\''
      }
    },
    clearable: {
      type: 'input',
      input: 'switch',
      label: 'Clearable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-rating)** - Allows for the component to be cleared. Triggers when the icon containing the current value is clicked.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: '\'primary\''
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-rating)** - Icons have a smaller size'
      }
    },
    'empty-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Empty-icon',
      props: {
        hint: '**COMPONENT (v-rating)** - The icon displayed when empty',
        placeholder: '\'$ratingEmpty\''
      }
    },
    'full-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Full-icon',
      props: {
        hint: '**COMPONENT (v-rating)** - The icon displayed when full',
        placeholder: '\'$ratingFull\''
      }
    },
    'half-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Half-icon',
      props: {
        hint: '**COMPONENT (v-rating)** - The icon displayed when half (requires **half-increments** prop)',
        placeholder: '\'$ratingHalf\''
      }
    },
    'half-increments': {
      type: 'input',
      input: 'switch',
      label: 'Half-increments',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-rating)** - Allows the selection of half increments'
      }
    },
    hover: {
      type: 'input',
      input: 'switch',
      label: 'Hover',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-rating)** - Provides visual feedback when hovering over icons'
      }
    },
    large: {
      type: 'input',
      input: 'switch',
      label: 'Large',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component large.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-rating)** - Removes all hover effects and pointer events'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (rippleable)** - Applies the [v-ripple](/directives/ripples) directive.'
      }
    },
    small: {
      type: 'input',
      input: 'switch',
      label: 'Small',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component small.'
      }
    },
    value: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Value',
      props: {
        hint: '**COMPONENT (v-rating)** - The rating value',
        placeholder: '0'
      }
    },
    'x-large': {
      type: 'input',
      input: 'switch',
      label: 'X-large',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component extra large.'
      }
    },
    'x-small': {
      type: 'input',
      input: 'switch',
      label: 'X-small',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (sizeable)** - Makes the component extra small.'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**SELF** - Emits the rating number when this value changes'
  }],
  slots: [{
    id: 'item',
    title: '**SELF** - The slot for rendered items'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-responsive.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-responsive.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {},
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-row.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-row.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    align: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Align',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'align-content': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Align-content',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'align-content-lg': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Align-content-lg',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'align-content-md': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Align-content-md',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'align-content-sm': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Align-content-sm',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'align-content-xl': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Align-content-xl',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'align-lg': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Align-lg',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'align-md': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Align-md',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'align-sm': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Align-sm',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'align-xl': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Align-xl',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row'
      }
    },
    justify: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Justify',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'justify-lg': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Justify-lg',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'justify-md': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Justify-md',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'justify-sm': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Justify-sm',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'justify-xl': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Justify-xl',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: 'undefined'
      }
    },
    'no-gutters': {
      type: 'input',
      input: 'switch',
      label: 'No-gutters',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**MISSING DESCRIPTION** - v-row',
        placeholder: '\'div\''
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scale-transition.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scale-transition.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scale-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scale-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scale-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - scale-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - scale-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scroll-x-reverse-transition.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scroll-x-reverse-transition.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-x-reverse-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-x-reverse-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-x-reverse-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-x-reverse-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-x-reverse-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scroll-x-transition.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scroll-x-transition.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-x-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-x-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-x-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-x-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-x-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scroll-y-reverse-transition.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scroll-y-reverse-transition.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-y-reverse-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-y-reverse-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-y-reverse-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-y-reverse-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-y-reverse-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scroll-y-transition.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-scroll-y-transition.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-y-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-y-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-y-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-y-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - scroll-y-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-select.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-select.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: '\'$dropdown\''
      }
    },
    'append-outer-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-outer-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Appends an icon to the outside the component\'s input, uses same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    autofocus: {
      type: 'input',
      input: 'switch',
      label: 'Autofocus',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Enables autofocus'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    'cache-items': {
      type: 'input',
      input: 'switch',
      label: 'Cache-items',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Keeps a local _unique_ copy of all items that have been passed through the **items** prop.'
      }
    },
    chips: {
      type: 'input',
      input: 'switch',
      label: 'Chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes display of selections to chips'
      }
    },
    'clear-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Clear-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applied when using **clearable** and the input is dirty',
        placeholder: '\'$clear\''
      }
    },
    clearable: {
      type: 'input',
      input: 'switch',
      label: 'Clearable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Add input clear functionality, default icon is Material Icons **clear**'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the dark theme variant to the component. This will default the components color to _white_ unless you\'ve configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    'deletable-chips': {
      type: 'input',
      input: 'switch',
      label: 'Deletable-chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Adds a remove icon to selected chips'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    'disable-lookup': {
      type: 'input',
      input: 'switch',
      label: 'Disable-lookup',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Disables keyboard lookup'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Disables the input'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    filled: {
      type: 'input',
      input: 'switch',
      label: 'Filled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the alternate filled input style'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props'
      }
    },
    'full-width': {
      type: 'input',
      input: 'switch',
      label: 'Full-width',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Designates input type as full-width'
      }
    },
    'hide-selected': {
      type: 'input',
      input: 'switch',
      label: 'Hide-selected',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Do not display in the select menu items that are already selected'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    'item-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-color',
      props: {
        hint: '**COMPONENT (v-select)** - Sets color of selected items',
        placeholder: '\'primary\''
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes select to multiple. Accepts array for value'
      }
    },
    'no-data-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'No-data-text',
      props: {
        hint: '**SELF** - Display text when there is no data',
        placeholder: '\'$vuetify.noDataText\''
      }
    },
    'open-on-clear': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-clear',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state'
      }
    },
    outlined: {
      type: 'input',
      input: 'switch',
      label: 'Outlined',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the outlined style to the input'
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    placeholder: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Placeholder',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets the input’s placeholder text',
        placeholder: 'undefined'
      }
    },
    prefix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prefix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays prefix text',
        placeholder: 'undefined'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'prepend-inner-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-inner-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Prepends an icon inside the component\'s input, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    'return-object': {
      type: 'input',
      input: 'switch',
      label: 'Return-object',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes the selection behavior to return the object directly rather than the value specified with **item-value**'
      }
    },
    reverse: {
      type: 'input',
      input: 'switch',
      label: 'Reverse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reverses the input orientation'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Adds a border radius to the input'
      }
    },
    shaped: {
      type: 'input',
      input: 'switch',
      label: 'Shaped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`'
      }
    },
    'single-line': {
      type: 'input',
      input: 'switch',
      label: 'Single-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Label does not move on focus/dirty'
      }
    },
    'small-chips': {
      type: 'input',
      input: 'switch',
      label: 'Small-chips',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-select)** - Changes display of selections to chips with the **small** property'
      }
    },
    solo: {
      type: 'input',
      input: 'switch',
      label: 'Solo',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Changes the style of the input'
      }
    },
    'solo-inverted': {
      type: 'input',
      input: 'switch',
      label: 'Solo-inverted',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reduces element opacity until focused'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    suffix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Suffix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays suffix text',
        placeholder: 'undefined'
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets input type',
        placeholder: '\'text\''
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'click',
    title: '**COMPONENT (v-input)** - Emitted when input is clicked'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }, {
    id: 'blur',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is blurred'
  }, {
    id: 'click:clear',
    title: '**COMPONENT (v-text-field)** - Emitted when clearable icon clicked'
  }, {
    id: 'click:append-outer',
    title: '**COMPONENT (v-text-field)** - Emitted when appended outer icon is clicked'
  }, {
    id: 'click:prepend-inner',
    title: '**COMPONENT (v-text-field)** - Emitted when prepended inner icon is clicked'
  }, {
    id: 'focus',
    title: '**COMPONENT (v-text-field)** - Emitted when component is focused'
  }, {
    id: 'change',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is changed by user interaction'
  }, {
    id: 'input',
    title: '**GENERIC (v-text-field)** - The updated bound model'
  }, {
    id: 'keydown',
    title: '**COMPONENT (v-text-field)** - Emitted when **any** key is pressed'
  }, {
    id: 'update:search-input',
    title: '**COMPONENT (v-select)** - The `search-input.sync` event'
  }, {
    id: 'update:list-index',
    title: '**COMPONENT (v-select)** - Emitted when menu item is selected using keyboard arrows'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }, {
    id: 'append-outer',
    title: '**COMPONENT (v-text-field)** - Appends an item inside input content'
  }, {
    id: 'label',
    title: '**GENERIC (v-text-field)** - Replaces the default label'
  }, {
    id: 'prepend-inner',
    title: '**COMPONENT (v-text-field)** - Prepends an item inside input content'
  }, {
    id: 'progress',
    title: '**GENERIC (v-text-field)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
  }, {
    id: 'append-item',
    title: '**COMPONENT (v-select)** - Adds an item after menu content'
  }, {
    id: 'prepend-item',
    title: '**COMPONENT (v-select)** - Adds an item before menu content'
  }, {
    id: 'item',
    title: '**COMPONENT (v-select)** - Define a custom item appearance'
  }, {
    id: 'no-data',
    title: '**COMPONENT (v-select)** - Displayed when there are no filtered items'
  }, {
    id: 'selection',
    title: '**COMPONENT (v-select)** - Define a custom selection appearance'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-sheet.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-sheet.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
        placeholder: 'div'
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-simple-checkbox.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-simple-checkbox.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MISSING DESCRIPTION** - v-simple-checkbox',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-simple-checkbox'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-simple-checkbox'
      }
    },
    indeterminate: {
      type: 'input',
      input: 'switch',
      label: 'Indeterminate',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-simple-checkbox'
      }
    },
    'indeterminate-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Indeterminate-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-simple-checkbox',
        placeholder: '\'$checkboxIndeterminate\''
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-simple-checkbox'
      }
    },
    'off-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Off-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-simple-checkbox',
        placeholder: '\'$checkboxOff\''
      }
    },
    'on-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'On-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-simple-checkbox',
        placeholder: '\'$checkboxOn\''
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-simple-checkbox'
      }
    },
    value: {
      type: 'input',
      input: 'switch',
      label: 'Value',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-simple-checkbox'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**GENERIC (undefined)** - The updated bound model'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-simple-table.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-simple-table.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-simple-table)** - Decreases paddings to render a dense table'
      }
    },
    'fixed-header': {
      type: 'input',
      input: 'switch',
      label: 'Fixed-header',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-simple-table)** - Sets table header to fixed mode'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-skeleton-loader.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-skeleton-loader.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    boilerplate: {
      type: 'input',
      input: 'switch',
      label: 'Boilerplate',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Remove the loading animation from the skeleton'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    loading: {
      type: 'input',
      input: 'switch',
      label: 'Loading',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies a loading animation with a on-hover loading cursor. A value of **false** will only work when there is content in the `default` slot.'
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Removes the component\'s border-radius.'
      }
    },
    transition: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Transition',
      props: {
        hint: '**MISSING DESCRIPTION** - VSkeletonLoader',
        placeholder: 'undefined'
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**SELF** - A string delimited list of skeleton components to create such as `type="text@3"` or `type="card, list-item"`. Will recursively generate a corresponding skeleton from the provided string. Also supports short-hand for multiple elements such as **article@3** and **paragraph@2** which will generate 3 _article_ skeletons and 2 _paragraph_ skeletons. Please see below for a list of available pre-defined options.',
        placeholder: 'undefined'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-group.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-group.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (base-item-group)** - The **active-class** applied to children when they are activated.',
        placeholder: '\'v-slide-item--active\''
      }
    },
    'center-active': {
      type: 'input',
      input: 'switch',
      label: 'Center-active',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Forces the selected component to be centered'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    mandatory: {
      type: 'input',
      input: 'switch',
      label: 'Mandatory',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Forces a value to always be selected (if available).'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Allow multiple selections. The **value** prop must be an _array_.'
      }
    },
    'next-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Next-icon',
      props: {
        hint: '**SELF** - The appended slot when arrows are shown',
        placeholder: '\'$next\''
      }
    },
    'prev-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prev-icon',
      props: {
        hint: '**SELF** - The prepended slot when arrows are shown',
        placeholder: '\'$prev\''
      }
    },
    'show-arrows': {
      type: 'input',
      input: 'switch',
      label: 'Show-arrows',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Always show pagination arrows'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**SELF** - Emitted when the component value is changed by user interaction'
  }, {
    id: 'click:location',
    title: '**SELF** - Emitted when a slide item is selected inside of the slide group'
  }],
  slots: [{
    id: 'next',
    title: '**SELF** - The next slot'
  }, {
    id: 'prev',
    title: '**SELF** - The prev slot'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-item.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-item.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (groupable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (groupable)** - Removes the ability to click or target the component.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-x-reverse-transition.js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-x-reverse-transition.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-x-reverse-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-x-reverse-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-x-reverse-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-x-reverse-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-x-reverse-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-x-transition.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-x-transition.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-x-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-x-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-x-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-x-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-x-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-y-reverse-transition.js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-y-reverse-transition.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-y-reverse-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-y-reverse-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-y-reverse-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-y-reverse-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-y-reverse-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-y-transition.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slide-y-transition.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-y-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-y-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-y-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-y-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - slide-y-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slider.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-slider.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the dark theme variant to the component. This will default the components color to _white_ unless you\'ve configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    'inverse-label': {
      type: 'input',
      input: 'switch',
      label: 'Inverse-label',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-slider)** - Reverse the label position. Works with **rtl**.'
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    'thumb-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Thumb-color',
      props: {
        hint: '**COMPONENT (v-slider)** - Sets the thumb and thumb label color',
        placeholder: 'undefined'
      }
    },
    'track-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Track-color',
      props: {
        hint: '**COMPONENT (v-slider)** - Sets the track\'s color',
        placeholder: 'undefined'
      }
    },
    'track-fill-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Track-fill-color',
      props: {
        hint: '**COMPONENT (v-slider)** - Sets the track\'s fill color',
        placeholder: 'undefined'
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    },
    vertical: {
      type: 'input',
      input: 'switch',
      label: 'Vertical',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-slider)** - Changes slider direction to vertical'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'click',
    title: '**COMPONENT (v-input)** - Emitted when input is clicked'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }, {
    id: 'start',
    title: '**COMPONENT (v-slider)** - Slider value emitted at start of slider movement'
  }, {
    id: 'end',
    title: '**COMPONENT (v-slider)** - Slider value emitted at the end of slider movement'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }, {
    id: 'progress',
    title: '**GENERIC (v-slider)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
  }, {
    id: 'thumb-label',
    title: '**COMPONENT (v-slider)** - Replaces the content inside the thumb label'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-snackbar.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-snackbar.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: absolute** to the component.'
      }
    },
    bottom: {
      type: 'input',
      input: 'switch',
      label: 'Bottom',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the bottom.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    left: {
      type: 'input',
      input: 'switch',
      label: 'Left',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the left.'
      }
    },
    'multi-line': {
      type: 'input',
      input: 'switch',
      label: 'Multi-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-snackbar)** - Gives the snackbar a larger minimum height.'
      }
    },
    right: {
      type: 'input',
      input: 'switch',
      label: 'Right',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the right.'
      }
    },
    timeout: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Timeout',
      props: {
        hint: '**COMPONENT (v-snackbar)** - Time (in milliseconds) to wait until snackbar is automatically hidden.  Use 0 to keep open indefinitely.',
        placeholder: '6000'
      }
    },
    top: {
      type: 'input',
      input: 'switch',
      label: 'Top',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the content towards the top.'
      }
    },
    vertical: {
      type: 'input',
      input: 'switch',
      label: 'Vertical',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-snackbar)** - Stacks snackbar content on top of the actions (button).'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**GENERIC (undefined)** - The updated bound model'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-spacer.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-spacer.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-sparkline.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-sparkline.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'auto-draw': {
      type: 'input',
      input: 'switch',
      label: 'Auto-draw',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Trace the length of the line when first rendered'
      }
    },
    'auto-draw-duration': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Auto-draw-duration',
      props: {
        hint: '**SELF** - Amount of time (in ms) to run the trace animation',
        placeholder: '2000'
      }
    },
    'auto-draw-easing': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Auto-draw-easing',
      props: {
        hint: '**SELF** - The easing function to use for the trace animation',
        placeholder: '\'ease\''
      }
    },
    'auto-line-width': {
      type: 'input',
      input: 'switch',
      label: 'Auto-line-width',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Automatically expand bars to use space eficiently'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: '\'primary\''
      }
    },
    fill: {
      type: 'input',
      input: 'switch',
      label: 'Fill',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Using the **fill** property allows you to better customize the look and feel of your sparkline.'
      }
    },
    'gradient-direction': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Gradient-direction',
      props: {
        hint: '**SELF** - The direction the gradient should run',
        placeholder: '\'top\''
      }
    },
    'show-labels': {
      type: 'input',
      input: 'switch',
      label: 'Show-labels',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Show labels below each data point'
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**SELF** - Choose between a trendline or bars',
        placeholder: '\'trend\''
      }
    }
  },
  slots: [{
    id: 'label',
    title: '**GENERIC (undefined)** - Replaces the default label'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-speed-dial.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-speed-dial.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: absolute** to the component.'
      }
    },
    bottom: {
      type: 'input',
      input: 'switch',
      label: 'Bottom',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the bottom.'
      }
    },
    direction: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Direction',
      props: {
        hint: '**MISSING DESCRIPTION** - v-speed-dial',
        placeholder: '\'top\''
      }
    },
    fixed: {
      type: 'input',
      input: 'switch',
      label: 'Fixed',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: fixed** to the component.'
      }
    },
    left: {
      type: 'input',
      input: 'switch',
      label: 'Left',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the left.'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MIXIN (transitionable)** - Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).',
        placeholder: 'undefined'
      }
    },
    'open-on-hover': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-hover',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-speed-dial'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MIXIN (transitionable)** - Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).',
        placeholder: 'undefined'
      }
    },
    right: {
      type: 'input',
      input: 'switch',
      label: 'Right',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the right.'
      }
    },
    top: {
      type: 'input',
      input: 'switch',
      label: 'Top',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the content towards the top.'
      }
    },
    transition: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Transition',
      props: {
        hint: '**MIXIN (transitionable)** - Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.',
        placeholder: '\'scale-transition\''
      }
    }
  },
  slots: [{
    id: 'activator',
    title: '**GENERIC (undefined)** - When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper-content.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper-content.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {},
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper-header.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper-header.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper-items.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper-items.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper-step.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper-step.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: '\'primary\''
      }
    },
    complete: {
      type: 'input',
      input: 'switch',
      label: 'Complete',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-stepper-step'
      }
    },
    'complete-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Complete-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-stepper-step',
        placeholder: '\'$complete\''
      }
    },
    'edit-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Edit-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-stepper-step',
        placeholder: '\'$edit\''
      }
    },
    editable: {
      type: 'input',
      input: 'switch',
      label: 'Editable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-stepper-step'
      }
    },
    'error-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Error-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-stepper-step',
        placeholder: '\'$error\''
      }
    }
  },
  events: [{
    id: 'click',
    title: '**GENERIC (undefined)** - Event that is emitted when the component is clicked'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-stepper.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'alt-labels': {
      type: 'input',
      input: 'switch',
      label: 'Alt-labels',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-stepper)** - Places the labels beneath the step'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    'non-linear': {
      type: 'input',
      input: 'switch',
      label: 'Non-linear',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-stepper)** - Allow user to jump to any step'
      }
    },
    vertical: {
      type: 'input',
      input: 'switch',
      label: 'Vertical',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-stepper)** - Display steps vertically'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**SPECIAL (undefined)** - Emitted when step is changed by user interaction'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-subheader.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-subheader.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    inset: {
      type: 'input',
      input: 'switch',
      label: 'Inset',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-subheader)** - Adds indentation (72px)'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-switch.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-switch.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-switch'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    inset: {
      type: 'input',
      input: 'switch',
      label: 'Inset',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-switch'
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - selectable'
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (rippleable)** - Applies the [v-ripple](/directives/ripples) directive.'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'change',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }, {
    id: 'label',
    title: '**GENERIC (undefined)** - Replaces the default label'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-system-bar.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-system-bar.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: absolute** to the component.'
      }
    },
    app: {
      type: 'input',
      input: 'switch',
      label: 'App',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (applicationable)** - Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-content` component to function properly. You can more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    fixed: {
      type: 'input',
      input: 'switch',
      label: 'Fixed',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: fixed** to the component.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    'lights-out': {
      type: 'input',
      input: 'switch',
      label: 'Lights-out',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-system-bar)** - Reduces the system bar opacity.'
      }
    },
    window: {
      type: 'input',
      input: 'switch',
      label: 'Window',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-system-bar)** - Increases the system bar height to 32px (24px default).'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tab-item.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tab-item.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (groupable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (groupable)** - Removes the ability to click or target the component.'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (bootable)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-tab-item)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tab-reverse-transition.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tab-reverse-transition.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - tab-reverse-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - tab-reverse-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - tab-reverse-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - tab-reverse-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - tab-reverse-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tab-transition.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tab-transition.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    group: {
      type: 'input',
      input: 'switch',
      label: 'Group',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - tab-transition'
      }
    },
    'hide-on-leave': {
      type: 'input',
      input: 'switch',
      label: 'Hide-on-leave',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - tab-transition'
      }
    },
    'leave-absolute': {
      type: 'input',
      input: 'switch',
      label: 'Leave-absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - tab-transition'
      }
    },
    mode: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Mode',
      props: {
        hint: '**MISSING DESCRIPTION** - tab-transition',
        placeholder: 'undefined'
      }
    },
    origin: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Origin',
      props: {
        hint: '**MISSING DESCRIPTION** - tab-transition',
        placeholder: '\'top center 0\''
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tab.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tab.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**SELF** - The **active-class** applied to children when they are activated.'
      }
    },
    append: {
      type: 'input',
      input: 'switch',
      label: 'Append',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Removes the ability to click or target the component.'
      }
    },
    exact: {
      type: 'input',
      input: 'switch',
      label: 'Exact',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Exactly match the link. Without this, \'/\' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.'
      }
    },
    'exact-active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Exact-active-class',
      props: {
        hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    },
    href: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Href',
      props: {
        hint: '**MIXIN (routable)** - Designates the component as anchor and applies the **href** attribute.',
        placeholder: 'undefined'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the light theme variant to the component.'
      }
    },
    link: {
      type: 'input',
      input: 'switch',
      label: 'Link',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Designates that the component is a link. This is automatic when using the **href** or **to** prop.'
      }
    },
    nuxt: {
      type: 'input',
      input: 'switch',
      label: 'Nuxt',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).'
      }
    },
    replace: {
      type: 'input',
      input: 'switch',
      label: 'Replace',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.'
      }
    },
    ripple: {
      type: 'input',
      input: 'switch',
      label: 'Ripple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (routable)** - Applies the [v-ripple](/directives/ripples) directive.'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**MIXIN (routable)** - Specify a custom tag used on the root element.',
        placeholder: 'undefined'
      }
    },
    target: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Target',
      props: {
        hint: '**MIXIN (routable)** - Designates the target attribute. This should only be applied when using the **href** prop.',
        placeholder: 'undefined'
      }
    },
    to: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'To',
      props: {
        hint: '**MIXIN (routable)** - Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.',
        placeholder: 'undefined'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**SPECIAL (undefined)** - Emitted when tab becomes active'
  }, {
    id: 'click',
    title: '**SPECIAL (undefined)** - Emitted when the component is clicked'
  }, {
    id: 'keydown',
    title: '**SPECIAL (undefined)** - Emitted when **enter** key is pressed'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-table-overflow.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-table-overflow.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tabs-items.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tabs-items.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (base-item-group)** - The **active-class** applied to children when they are activated.',
        placeholder: '\'v-window-item--active\''
      }
    },
    continuous: {
      type: 'input',
      input: 'switch',
      label: 'Continuous',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - If `true`, window will "wrap around" from the last item to the first, and from the first item to the last'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    mandatory: {
      type: 'input',
      input: 'switch',
      label: 'Mandatory',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Forces a value to always be selected (if available).'
      }
    },
    multiple: {
      type: 'input',
      input: 'switch',
      label: 'Multiple',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (base-item-group)** - Allow multiple selections. The **value** prop must be an _array_.'
      }
    },
    reverse: {
      type: 'input',
      input: 'switch',
      label: 'Reverse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Reverse the normal transition direction.'
      }
    },
    'show-arrows': {
      type: 'input',
      input: 'switch',
      label: 'Show-arrows',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Display the "next" and "prev" buttons'
      }
    },
    'show-arrows-on-hover': {
      type: 'input',
      input: 'switch',
      label: 'Show-arrows-on-hover',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Display the "next" and "prev" buttons on hover. `show-arrows` MUST ALSO be set.'
      }
    },
    touchless: {
      type: 'input',
      input: 'switch',
      label: 'Touchless',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Disable touch support.'
      }
    },
    vertical: {
      type: 'input',
      input: 'switch',
      label: 'Vertical',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Uses a vertical transition when changing windows.'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**MISSING DESCRIPTION** - undefined'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tabs-slider.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tabs-slider.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tabs.js":
/*!********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tabs.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**COMPONENT (v-tabs)** - The **active-class** applied to children when they are activated.',
        placeholder: 'undefined'
      }
    },
    'align-with-title': {
      type: 'input',
      input: 'switch',
      label: 'Align-with-title',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-tabs)** - Make `v-tabs` lined up with the toolbar title'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-tabs)** - Changes the background color of the component.',
        placeholder: 'undefined'
      }
    },
    'center-active': {
      type: 'input',
      input: 'switch',
      label: 'Center-active',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-tabs)** - Forces the selected tab to be centered'
      }
    },
    centered: {
      type: 'input',
      input: 'switch',
      label: 'Centered',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-tabs)** - Centers the tabs'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    'fixed-tabs': {
      type: 'input',
      input: 'switch',
      label: 'Fixed-tabs',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-tabs)** - `v-tabs-item` min-width 160px, max-width 360px'
      }
    },
    grow: {
      type: 'input',
      input: 'switch',
      label: 'Grow',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-tabs)** - Force `v-tab`\'s to take up all available space'
      }
    },
    'hide-slider': {
      type: 'input',
      input: 'switch',
      label: 'Hide-slider',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-tabs)** - Hide\'s the generated `v-tabs-slider`'
      }
    },
    'icons-and-text': {
      type: 'input',
      input: 'switch',
      label: 'Icons-and-text',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-tabs)** - Will stack icon and text vertically'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the light theme variant to the component.'
      }
    },
    'next-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Next-icon',
      props: {
        hint: '**COMPONENT (v-tabs)** - Right pagination icon',
        placeholder: '\'$next\''
      }
    },
    optional: {
      type: 'input',
      input: 'switch',
      label: 'Optional',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-tabs)** - Does not require an active item. Useful when using `v-tab` as a `router-link`'
      }
    },
    'prev-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prev-icon',
      props: {
        hint: '**COMPONENT (v-tabs)** - Left pagination icon',
        placeholder: '\'$prev\''
      }
    },
    right: {
      type: 'input',
      input: 'switch',
      label: 'Right',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-tabs)** - Aligns tabs to the right'
      }
    },
    'show-arrows': {
      type: 'input',
      input: 'switch',
      label: 'Show-arrows',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-tabs)** - Show pagination arrows if the tab items overflow their container. For mobile devices, arrows will only display when using this prop.'
      }
    },
    'slider-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Slider-color',
      props: {
        hint: '**COMPONENT (v-tabs)** - Changes the background color of an auto-generated `v-tabs-slider`',
        placeholder: 'undefined'
      }
    },
    vertical: {
      type: 'input',
      input: 'switch',
      label: 'Vertical',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-tabs)** - Stacks tabs on top of each other vertically.'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**SPECIAL (undefined)** - Emitted when tab is changed by user interaction'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-text-field.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-text-field.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'append-outer-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-outer-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Appends an icon to the outside the component\'s input, uses same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    autofocus: {
      type: 'input',
      input: 'switch',
      label: 'Autofocus',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Enables autofocus'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    'clear-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Clear-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applied when using **clearable** and the input is dirty',
        placeholder: '\'$clear\''
      }
    },
    clearable: {
      type: 'input',
      input: 'switch',
      label: 'Clearable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Add input clear functionality, default icon is Material Icons **clear**'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the dark theme variant to the component. This will default the components color to _white_ unless you\'ve configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    filled: {
      type: 'input',
      input: 'switch',
      label: 'Filled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the alternate filled input style'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props'
      }
    },
    'full-width': {
      type: 'input',
      input: 'switch',
      label: 'Full-width',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Designates input type as full-width'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    outlined: {
      type: 'input',
      input: 'switch',
      label: 'Outlined',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the outlined style to the input'
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    placeholder: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Placeholder',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets the input’s placeholder text',
        placeholder: 'undefined'
      }
    },
    prefix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prefix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays prefix text',
        placeholder: 'undefined'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'prepend-inner-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-inner-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Prepends an icon inside the component\'s input, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    reverse: {
      type: 'input',
      input: 'switch',
      label: 'Reverse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reverses the input orientation'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Adds a border radius to the input'
      }
    },
    shaped: {
      type: 'input',
      input: 'switch',
      label: 'Shaped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`'
      }
    },
    'single-line': {
      type: 'input',
      input: 'switch',
      label: 'Single-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Label does not move on focus/dirty'
      }
    },
    solo: {
      type: 'input',
      input: 'switch',
      label: 'Solo',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Changes the style of the input'
      }
    },
    'solo-inverted': {
      type: 'input',
      input: 'switch',
      label: 'Solo-inverted',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reduces element opacity until focused'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    suffix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Suffix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays suffix text',
        placeholder: 'undefined'
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets input type',
        placeholder: '\'text\''
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'click',
    title: '**COMPONENT (v-input)** - Emitted when input is clicked'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }, {
    id: 'blur',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is blurred'
  }, {
    id: 'click:clear',
    title: '**COMPONENT (v-text-field)** - Emitted when clearable icon clicked'
  }, {
    id: 'click:append-outer',
    title: '**COMPONENT (v-text-field)** - Emitted when appended outer icon is clicked'
  }, {
    id: 'click:prepend-inner',
    title: '**COMPONENT (v-text-field)** - Emitted when prepended inner icon is clicked'
  }, {
    id: 'focus',
    title: '**COMPONENT (v-text-field)** - Emitted when component is focused'
  }, {
    id: 'change',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is changed by user interaction'
  }, {
    id: 'input',
    title: '**GENERIC (v-text-field)** - The updated bound model'
  }, {
    id: 'keydown',
    title: '**COMPONENT (v-text-field)** - Emitted when **any** key is pressed'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }, {
    id: 'append-outer',
    title: '**COMPONENT (v-text-field)** - Appends an item inside input content'
  }, {
    id: 'label',
    title: '**GENERIC (v-text-field)** - Replaces the default label'
  }, {
    id: 'prepend-inner',
    title: '**COMPONENT (v-text-field)** - Prepends an item inside input content'
  }, {
    id: 'progress',
    title: '**GENERIC (v-text-field)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-textarea.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-textarea.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'append-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'append-outer-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Append-outer-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Appends an icon to the outside the component\'s input, uses same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'auto-grow': {
      type: 'input',
      input: 'switch',
      label: 'Auto-grow',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-textarea'
      }
    },
    autofocus: {
      type: 'input',
      input: 'switch',
      label: 'Autofocus',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Enables autofocus'
      }
    },
    'background-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Background-color',
      props: {
        hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
        placeholder: 'undefined'
      }
    },
    'clear-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Clear-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applied when using **clearable** and the input is dirty',
        placeholder: '\'$clear\''
      }
    },
    clearable: {
      type: 'input',
      input: 'switch',
      label: 'Clearable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Add input clear functionality, default icon is Material Icons **clear**'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Reduces the input height'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Disable the input'
      }
    },
    error: {
      type: 'input',
      input: 'switch',
      label: 'Error',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
      }
    },
    filled: {
      type: 'input',
      input: 'switch',
      label: 'Filled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the alternate filled input style'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props'
      }
    },
    'full-width': {
      type: 'input',
      input: 'switch',
      label: 'Full-width',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Designates input type as full-width'
      }
    },
    hint: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hint',
      props: {
        hint: '**COMPONENT (v-input)** - Hint text',
        placeholder: 'undefined'
      }
    },
    id: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Id',
      props: {
        hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
        placeholder: 'undefined'
      }
    },
    label: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Label',
      props: {
        hint: '**COMPONENT (v-input)** - Sets input label'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    'no-resize': {
      type: 'input',
      input: 'switch',
      label: 'No-resize',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-textarea'
      }
    },
    outlined: {
      type: 'input',
      input: 'switch',
      label: 'Outlined',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Applies the outlined style to the input'
      }
    },
    'persistent-hint': {
      type: 'input',
      input: 'switch',
      label: 'Persistent-hint',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
      }
    },
    placeholder: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Placeholder',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets the input’s placeholder text',
        placeholder: 'undefined'
      }
    },
    prefix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prefix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays prefix text',
        placeholder: 'undefined'
      }
    },
    'prepend-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-icon',
      props: {
        hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    'prepend-inner-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Prepend-inner-icon',
      props: {
        hint: '**COMPONENT (v-text-field)** - Prepends an icon inside the component\'s input, uses the same syntax as `v-icon`',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts input in readonly state'
      }
    },
    reverse: {
      type: 'input',
      input: 'switch',
      label: 'Reverse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reverses the input orientation'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Adds a border radius to the input'
      }
    },
    shaped: {
      type: 'input',
      input: 'switch',
      label: 'Shaped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`'
      }
    },
    'single-line': {
      type: 'input',
      input: 'switch',
      label: 'Single-line',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (v-text-field)** - Label does not move on focus/dirty'
      }
    },
    solo: {
      type: 'input',
      input: 'switch',
      label: 'Solo',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Changes the style of the input'
      }
    },
    'solo-inverted': {
      type: 'input',
      input: 'switch',
      label: 'Solo-inverted',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-text-field)** - Reduces element opacity until focused'
      }
    },
    success: {
      type: 'input',
      input: 'switch',
      label: 'Success',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
      }
    },
    suffix: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Suffix',
      props: {
        hint: '**COMPONENT (v-text-field)** - Displays suffix text',
        placeholder: 'undefined'
      }
    },
    type: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Type',
      props: {
        hint: '**COMPONENT (v-text-field)** - Sets input type',
        placeholder: '\'text\''
      }
    },
    'validate-on-blur': {
      type: 'input',
      input: 'switch',
      label: 'Validate-on-blur',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (validatable)** - Delays validation until blur event'
      }
    }
  },
  events: [{
    id: 'update:error',
    title: '**MIXIN (validatable)** - The `error.sync` event'
  }, {
    id: 'click',
    title: '**COMPONENT (v-input)** - Emitted when input is clicked'
  }, {
    id: 'mousedown',
    title: '**COMPONENT (v-input)** - Emitted when click is pressed'
  }, {
    id: 'mouseup',
    title: '**COMPONENT (v-input)** - Emitted when click is released'
  }, {
    id: 'click:append',
    title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
  }, {
    id: 'click:prepend',
    title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
  }, {
    id: 'blur',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is blurred'
  }, {
    id: 'click:clear',
    title: '**COMPONENT (v-text-field)** - Emitted when clearable icon clicked'
  }, {
    id: 'click:append-outer',
    title: '**COMPONENT (v-text-field)** - Emitted when appended outer icon is clicked'
  }, {
    id: 'click:prepend-inner',
    title: '**COMPONENT (v-text-field)** - Emitted when prepended inner icon is clicked'
  }, {
    id: 'focus',
    title: '**COMPONENT (v-text-field)** - Emitted when component is focused'
  }, {
    id: 'change',
    title: '**COMPONENT (v-text-field)** - Emitted when the input is changed by user interaction'
  }, {
    id: 'input',
    title: '**GENERIC (v-text-field)** - The updated bound model'
  }, {
    id: 'keydown',
    title: '**COMPONENT (v-text-field)** - Emitted when **any** key is pressed'
  }],
  slots: [{
    id: 'append',
    title: '**COMPONENT (v-input)** - Adds an item after input content'
  }, {
    id: 'default',
    title: '**GENERIC (v-input)** - The default Vue slot.'
  }, {
    id: 'prepend',
    title: '**COMPONENT (v-input)** - Adds an item before input content'
  }, {
    id: 'message',
    title: '**COMPONENT (v-input)** - Customize the messages slot.'
  }, {
    id: 'append-outer',
    title: '**COMPONENT (v-text-field)** - Appends an item inside input content'
  }, {
    id: 'label',
    title: '**GENERIC (v-text-field)** - Replaces the default label'
  }, {
    id: 'prepend-inner',
    title: '**COMPONENT (v-text-field)** - Prepends an item inside input content'
  }, {
    id: 'progress',
    title: '**GENERIC (v-text-field)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-theme-provider.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-theme-provider.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    root: {
      type: 'input',
      input: 'switch',
      label: 'Root',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-theme-provider'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-time-picker-clock.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-time-picker-clock.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    ampm: {
      type: 'input',
      input: 'switch',
      label: 'Ampm',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-clock'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-clock'
      }
    },
    "double": {
      type: 'input',
      input: 'switch',
      label: 'Double',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-clock'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    max: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Max',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-clock',
        placeholder: 'undefined'
      }
    },
    min: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Min',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-clock',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-clock'
      }
    },
    rotate: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Rotate',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-clock',
        placeholder: '0'
      }
    },
    scrollable: {
      type: 'input',
      input: 'switch',
      label: 'Scrollable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-clock'
      }
    },
    step: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Step',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-clock',
        placeholder: '1'
      }
    },
    value: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Value',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-clock',
        placeholder: 'undefined'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-time-picker-title.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-time-picker-title.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    ampm: {
      type: 'input',
      input: 'switch',
      label: 'Ampm',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-title'
      }
    },
    'ampm-readonly': {
      type: 'input',
      input: 'switch',
      label: 'Ampm-readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-title'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-title'
      }
    },
    hour: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Hour',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-title',
        placeholder: 'undefined'
      }
    },
    minute: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Minute',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-title',
        placeholder: 'undefined'
      }
    },
    period: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Period',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-title',
        placeholder: 'undefined'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-title'
      }
    },
    second: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Second',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-title',
        placeholder: 'undefined'
      }
    },
    selecting: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Selecting',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-title',
        placeholder: 'undefined'
      }
    },
    'use-seconds': {
      type: 'input',
      input: 'switch',
      label: 'Use-seconds',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-time-picker-title'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-time-picker.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-time-picker.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'ampm-in-title': {
      type: 'input',
      input: 'switch',
      label: 'Ampm-in-title',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-time-picker)** - Place AM/PM switch in title, not near the clock.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-time-picker)** - disables picker'
      }
    },
    format: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Format',
      props: {
        hint: '**SPECIAL (v-time-picker)** - Defines the format of a time displayed in picker. Available options are `ampm` and `24hr`.',
        placeholder: '\'ampm\''
      }
    },
    'full-width': {
      type: 'input',
      input: 'switch',
      label: 'Full-width',
      "class": 'col-4 mx-0',
      props: {
        hint: '**GENERIC (picker)** - Forces 100% width'
      }
    },
    'header-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Header-color',
      props: {
        hint: '**MIXIN (picker)** - Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color',
        placeholder: 'undefined'
      }
    },
    landscape: {
      type: 'input',
      input: 'switch',
      label: 'Landscape',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (picker)** - Orients picker horizontal'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    max: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Max',
      props: {
        hint: '**SPECIAL (v-time-picker)** - Maximum allowed time',
        placeholder: 'undefined'
      }
    },
    min: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Min',
      props: {
        hint: '**SPECIAL (v-time-picker)** - Minimum allowed time',
        placeholder: 'undefined'
      }
    },
    'no-title': {
      type: 'input',
      input: 'switch',
      label: 'No-title',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (picker)** - Hide the picker title'
      }
    },
    readonly: {
      type: 'input',
      input: 'switch',
      label: 'Readonly',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-time-picker)** - Puts picker in readonly state'
      }
    },
    scrollable: {
      type: 'input',
      input: 'switch',
      label: 'Scrollable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-time-picker)** - Allows changing hour/minute with mouse scroll'
      }
    },
    'use-seconds': {
      type: 'input',
      input: 'switch',
      label: 'Use-seconds',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-time-picker)** - Toggles the use of seconds in picker'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**GENERIC (undefined)** - The updated bound model'
  }, {
    id: 'change',
    title: '**SELF** - Emitted when the time selection is done (when user changes the minute for HH:MM picker and the second for HH:MM:SS picker'
  }, {
    id: 'click:hour',
    title: '**SELF** - Emitted when user selects the hour'
  }, {
    id: 'click:minute',
    title: '**SELF** - Emitted when user selects the minute'
  }, {
    id: 'click:second',
    title: '**SELF** - Emitted when user selects the second'
  }, {
    id: 'update:period',
    title: '**SELF** - Emitted when user clicks the AM/PM button'
  }],
  slots: [{
    id: 'default',
    title: '**SELF** - Displayed below the clock, can be used for example for adding action button (`OK` and `Cancel`)'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-timeline-item.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-timeline-item.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: '\'primary\''
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    'fill-dot': {
      type: 'input',
      input: 'switch',
      label: 'Fill-dot',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-timeline-item'
      }
    },
    'hide-dot': {
      type: 'input',
      input: 'switch',
      label: 'Hide-dot',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-timeline-item'
      }
    },
    icon: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-timeline-item',
        placeholder: 'undefined'
      }
    },
    'icon-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Icon-color',
      props: {
        hint: '**MISSING DESCRIPTION** - v-timeline-item',
        placeholder: 'undefined'
      }
    },
    large: {
      type: 'input',
      input: 'switch',
      label: 'Large',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-timeline-item'
      }
    },
    left: {
      type: 'input',
      input: 'switch',
      label: 'Left',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-timeline-item'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    right: {
      type: 'input',
      input: 'switch',
      label: 'Right',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-timeline-item'
      }
    },
    small: {
      type: 'input',
      input: 'switch',
      label: 'Small',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-timeline-item'
      }
    }
  },
  slots: [{
    id: 'icon',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'opposite',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-timeline.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-timeline.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'align-top': {
      type: 'input',
      input: 'switch',
      label: 'Align-top',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-timeline)** - Align caret and dot of timeline items to the top'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-timeline)** - Hide opposite slot content, and position all items to one side of timeline'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    reverse: {
      type: 'input',
      input: 'switch',
      label: 'Reverse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SPECIAL (v-timeline)** - Reverse direction of timeline items'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-toolbar-items.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-toolbar-items.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-toolbar-title.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-toolbar-title.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-toolbar.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-toolbar.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Applies **position: absolute** to the component.'
      }
    },
    bottom: {
      type: 'input',
      input: 'switch',
      label: 'Bottom',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Aligns the component towards the bottom.'
      }
    },
    collapse: {
      type: 'input',
      input: 'switch',
      label: 'Collapse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Puts the toolbar into a collapsed state reducing its maximum width.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop).'
      }
    },
    extended: {
      type: 'input',
      input: 'switch',
      label: 'Extended',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**.'
      }
    },
    flat: {
      type: 'input',
      input: 'switch',
      label: 'Flat',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Removes the toolbar\'s box-shadow.'
      }
    },
    floating: {
      type: 'input',
      input: 'switch',
      label: 'Floating',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Applies **display: inline-flex** to the component.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    prominent: {
      type: 'input',
      input: 'switch',
      label: 'Prominent',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Increases the height of the toolbar content to 128px.'
      }
    },
    "short": {
      type: 'input',
      input: 'switch',
      label: 'Short',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop).'
      }
    },
    src: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Src',
      props: {
        hint: '**COMPONENT (v-toolbar)** - Specifies a [v-img](/components/images) as the component\'s background.',
        placeholder: 'undefined'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
        placeholder: '\'header\''
      }
    },
    tile: {
      type: 'input',
      input: 'switch',
      label: 'Tile',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
      }
    }
  },
  slots: [{
    id: 'extension',
    title: '**SELF** - Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead.'
  }, {
    id: 'img',
    title: '**SELF** - Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind="props"`.'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tooltip.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-tooltip.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    absolute: {
      type: 'input',
      input: 'switch',
      label: 'Absolute',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: absolute** to the component.'
      }
    },
    'allow-overflow': {
      type: 'input',
      input: 'switch',
      label: 'Allow-overflow',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (menuable)** - Removes overflow re-positioning for the content'
      }
    },
    bottom: {
      type: 'input',
      input: 'switch',
      label: 'Bottom',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the bottom.'
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: 'undefined'
      }
    },
    'content-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Content-class',
      props: {
        hint: '**MIXIN (detachable)** - Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targettable by classes passed directly on the component.',
        placeholder: 'undefined'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Disables the tooltip'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (bootable)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    },
    fixed: {
      type: 'input',
      input: 'switch',
      label: 'Fixed',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Applies **position: fixed** to the component.'
      }
    },
    'internal-activator': {
      type: 'input',
      input: 'switch',
      label: 'Internal-activator',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Designates whether to use an internal activator'
      }
    },
    left: {
      type: 'input',
      input: 'switch',
      label: 'Left',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the left.'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Applies the light theme variant to the component.'
      }
    },
    'offset-overflow': {
      type: 'input',
      input: 'switch',
      label: 'Offset-overflow',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (menuable)** - Causes the component to flip to the opposite side when repositioned due to overflow'
      }
    },
    'open-on-click': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-click',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Designates whether the tooltip should open on activator click'
      }
    },
    'open-on-hover': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-hover',
      "class": 'col-4 mx-0',
      props: {
        hint: '**SELF** - Designates whether the tooltip should open on activator hover'
      }
    },
    'position-x': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Position-x',
      props: {
        hint: '**MIXIN (menuable)** - Used to position the content when not using an activator slot',
        placeholder: 'undefined'
      }
    },
    'position-y': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Position-y',
      props: {
        hint: '**MIXIN (menuable)** - Used to position the content when not using an activator slot',
        placeholder: 'undefined'
      }
    },
    right: {
      type: 'input',
      input: 'switch',
      label: 'Right',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the component towards the right.'
      }
    },
    tag: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Tag',
      props: {
        hint: '**COMPONENT (v-tooltip)** - Specifies a custom tag for the activator wrapper',
        placeholder: '\'span\''
      }
    },
    top: {
      type: 'input',
      input: 'switch',
      label: 'Top',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (positionable)** - Aligns the content towards the top.'
      }
    },
    transition: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Transition',
      props: {
        hint: '**COMPONENT (v-tooltip)** - Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.',
        placeholder: 'undefined'
      }
    }
  },
  slots: [{
    id: 'activator',
    title: '**GENERIC (undefined)** - When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation'
  }, {
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-treeview-node.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-treeview-node.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    activatable: {
      type: 'input',
      input: 'switch',
      label: 'Activatable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node'
      }
    },
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node',
        placeholder: '\'v-treeview-node--active\''
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
        placeholder: '\'primary\''
      }
    },
    'expand-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Expand-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node',
        placeholder: '\'$subgroup\''
      }
    },
    'indeterminate-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Indeterminate-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node',
        placeholder: '\'$checkboxIndeterminate\''
      }
    },
    'item-children': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-children',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node',
        placeholder: '\'children\''
      }
    },
    'item-disabled': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-disabled',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node',
        placeholder: '\'disabled\''
      }
    },
    'item-key': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-key',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node',
        placeholder: '\'id\''
      }
    },
    'item-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-text',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node',
        placeholder: '\'name\''
      }
    },
    level: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Level',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node',
        placeholder: 'undefined'
      }
    },
    'loading-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Loading-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node',
        placeholder: '\'$loading\''
      }
    },
    'off-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Off-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node',
        placeholder: '\'$checkboxOff\''
      }
    },
    'on-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'On-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node',
        placeholder: '\'$checkboxOn\''
      }
    },
    'open-on-click': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-click',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node'
      }
    },
    selectable: {
      type: 'input',
      input: 'switch',
      label: 'Selectable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node'
      }
    },
    'selected-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Selected-color',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node',
        placeholder: '\'accent\''
      }
    },
    shaped: {
      type: 'input',
      input: 'switch',
      label: 'Shaped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node'
      }
    },
    transition: {
      type: 'input',
      input: 'switch',
      label: 'Transition',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview-node'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-treeview.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-treeview.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    activatable: {
      type: 'input',
      input: 'switch',
      label: 'Activatable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview'
      }
    },
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'v-treeview-node--active\''
      }
    },
    color: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Color',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'primary\''
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview'
      }
    },
    'expand-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Expand-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'$subgroup\''
      }
    },
    hoverable: {
      type: 'input',
      input: 'switch',
      label: 'Hoverable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview'
      }
    },
    'indeterminate-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Indeterminate-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'$checkboxIndeterminate\''
      }
    },
    'item-children': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-children',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'children\''
      }
    },
    'item-disabled': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-disabled',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'disabled\''
      }
    },
    'item-key': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-key',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'id\''
      }
    },
    'item-text': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Item-text',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'name\''
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    'loading-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Loading-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'$loading\''
      }
    },
    'multiple-active': {
      type: 'input',
      input: 'switch',
      label: 'Multiple-active',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview'
      }
    },
    'off-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Off-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'$checkboxOff\''
      }
    },
    'on-icon': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'On-icon',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'$checkboxOn\''
      }
    },
    'open-all': {
      type: 'input',
      input: 'switch',
      label: 'Open-all',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview'
      }
    },
    'open-on-click': {
      type: 'input',
      input: 'switch',
      label: 'Open-on-click',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview'
      }
    },
    'return-object': {
      type: 'input',
      input: 'switch',
      label: 'Return-object',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview'
      }
    },
    rounded: {
      type: 'input',
      input: 'switch',
      label: 'Rounded',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview'
      }
    },
    search: {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Search',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: 'undefined'
      }
    },
    selectable: {
      type: 'input',
      input: 'switch',
      label: 'Selectable',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview'
      }
    },
    'selected-color': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Selected-color',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'accent\''
      }
    },
    'selection-type': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Selection-type',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview',
        placeholder: '\'leaf\''
      }
    },
    shaped: {
      type: 'input',
      input: 'switch',
      label: 'Shaped',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview'
      }
    },
    transition: {
      type: 'input',
      input: 'switch',
      label: 'Transition',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MISSING DESCRIPTION** - v-treeview'
      }
    }
  },
  events: [{
    id: 'input',
    title: '**GENERIC (undefined)** - The updated bound model'
  }, {
    id: 'update:active',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'update:open',
    title: '**MISSING DESCRIPTION** - undefined'
  }],
  slots: [{
    id: 'append',
    title: '**MISSING DESCRIPTION** - undefined'
  }, {
    id: 'label',
    title: '**GENERIC (undefined)** - Replaces the default label'
  }, {
    id: 'prepend',
    title: '**MISSING DESCRIPTION** - undefined'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-virtual-table.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-virtual-table.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'chunk-size': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Chunk-size',
      props: {
        hint: '**MISSING DESCRIPTION** - v-virtual-table',
        placeholder: '25'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    dense: {
      type: 'input',
      input: 'switch',
      label: 'Dense',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT NESTED (v-simple-table)** - Decreases paddings to render a dense table'
      }
    },
    'fixed-header': {
      type: 'input',
      input: 'switch',
      label: 'Fixed-header',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT NESTED (v-simple-table)** - Sets table header to fixed mode'
      }
    },
    'header-height': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Header-height',
      props: {
        hint: '**MISSING DESCRIPTION** - v-virtual-table',
        placeholder: '48'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    'row-height': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Row-height',
      props: {
        hint: '**MISSING DESCRIPTION** - v-virtual-table',
        placeholder: '48'
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-window-item.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-window-item.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**MIXIN (groupable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.'
      }
    },
    disabled: {
      type: 'input',
      input: 'switch',
      label: 'Disabled',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (groupable)** - Removes the ability to click or target the component.'
      }
    },
    eager: {
      type: 'input',
      input: 'switch',
      label: 'Eager',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (bootable)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
      }
    }
  },
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-window.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/v-window.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    'active-class': {
      type: 'input',
      input: 'text',
      "class": 'col-12 mx-0',
      label: 'Active-class',
      props: {
        hint: '**SELF** - The **active-class** applied to children when they are activated.',
        placeholder: '\'v-window-item--active\''
      }
    },
    continuous: {
      type: 'input',
      input: 'switch',
      label: 'Continuous',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - If `true`, window will "wrap around" from the last item to the first, and from the first item to the last'
      }
    },
    dark: {
      type: 'input',
      input: 'switch',
      label: 'Dark',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
      }
    },
    light: {
      type: 'input',
      input: 'switch',
      label: 'Light',
      "class": 'col-4 mx-0',
      props: {
        hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
      }
    },
    reverse: {
      type: 'input',
      input: 'switch',
      label: 'Reverse',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Reverse the normal transition direction.'
      }
    },
    'show-arrows': {
      type: 'input',
      input: 'switch',
      label: 'Show-arrows',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Display the "next" and "prev" buttons'
      }
    },
    'show-arrows-on-hover': {
      type: 'input',
      input: 'switch',
      label: 'Show-arrows-on-hover',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Display the "next" and "prev" buttons on hover. `show-arrows` MUST ALSO be set.'
      }
    },
    touchless: {
      type: 'input',
      input: 'switch',
      label: 'Touchless',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Disable touch support.'
      }
    },
    vertical: {
      type: 'input',
      input: 'switch',
      label: 'Vertical',
      "class": 'col-4 mx-0',
      props: {
        hint: '**COMPONENT (v-window)** - Uses a vertical transition when changing windows.'
      }
    }
  },
  events: [{
    id: 'change',
    title: '**SELF** - Emitted when the component value is changed by user interaction'
  }],
  slots: [{
    id: 'default',
    title: '**GENERIC (undefined)** - The default Vue slot.'
  }]
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/builder.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/builder.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/TextInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/TextInput.js");
/* harmony import */ var _settings_SwitchInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/SwitchInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/SwitchInput.js");
/* harmony import */ var _settings_FieldsRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/FieldsRenderer */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/FieldsRenderer.js");
/* harmony import */ var _settings_SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/SelectInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/SelectInput.js");
/* harmony import */ var _settings_RangeInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/RangeInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/RangeInput.js");
/* harmony import */ var _settings_RadioGroupInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/RadioGroupInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/RadioGroupInput.js");
/* harmony import */ var _settings_ColorInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/ColorInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ColorInput.js");
/* harmony import */ var _settings_ButtonGroupInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/ButtonGroupInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ButtonGroupInput.js");
/* harmony import */ var _settings_AutocompleteInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/AutocompleteInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/AutocompleteInput.js");
/* harmony import */ var _settings_MultiTextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/MultiTextInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/MultiTextInput.js");
/* harmony import */ var _settings_JSONInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/JSONInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/JSONInput.js");
/* harmony import */ var _settings_CheckboxInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/CheckboxInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/CheckboxInput.js");
/* harmony import */ var _settings_ObjectsListInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/ObjectsListInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ObjectsListInput.js");
/* harmony import */ var _settings_BitwiseFlagsInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/BitwiseFlagsInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/BitwiseFlagsInput.js");
/* harmony import */ var _settings_ImageUploadInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./settings/ImageUploadInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ImageUploadInput.js");
/* harmony import */ var _settings_DatatableInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings/DatatableInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/DatatableInput.js");
/* harmony import */ var _settings_ButtonInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings/ButtonInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ButtonInput.js");
/* harmony import */ var _settings_DateTimeInput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./settings/DateTimeInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/DateTimeInput.js");
/* harmony import */ var _settings_CalendarInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/CalendarInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/CalendarInput.js");
/* harmony import */ var _settings_MarkdownInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./settings/MarkdownInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/MarkdownInput.js");
/* harmony import */ var _settings_ParagraphInput__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./settings/ParagraphInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ParagraphInput.js");
/* harmony import */ var _settings_AlertInput__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./settings/AlertInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/AlertInput.js");
/* harmony import */ var _settings_FormJSONInput__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./settings/FormJSONInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/FormJSONInput.js");
/* harmony import */ var _settings_PaginationInput__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./settings/PaginationInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/PaginationInput.js");
/* harmony import */ var _settings_SimpleCaptcha__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./settings/SimpleCaptcha */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/SimpleCaptcha.js");
/* harmony import */ var _settings_FileUploadInput__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./settings/FileUploadInput */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/FileUploadInput.js");
/* harmony import */ var _settings_AdminBar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./settings/AdminBar */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/AdminBar.js");
/* harmony import */ var _settings_AppBar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./settings/AppBar */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/AppBar.js");
/* harmony import */ var _settings_Centered__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./settings/Centered */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/Centered.js");
/* harmony import */ var _settings_GroupSingleExpansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./settings/GroupSingleExpansion */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/GroupSingleExpansion.js");
/* harmony import */ var _settings_GroupExpansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./settings/GroupExpansion */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/GroupExpansion.js");
/* harmony import */ var _settings_GroupTabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./settings/GroupTabs */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/GroupTabs.js");
/* harmony import */ var _settings_GroupTreeview__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./settings/GroupTreeview */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/GroupTreeview.js");
/* harmony import */ var _settings_Group__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./settings/Group */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/Group.js");
/* harmony import */ var _settings_DatatableColumn__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./settings/DatatableColumn */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/DatatableColumn.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




































/**
 * A mixin component for FormJSON Builder
 *  implements all necessary methods and properties for
 *  a fully functioning FomrJSON Builder
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    availableInputs: Array
  },
  data: function data() {
    var inputTypeSettings = {
      'vf-text-input': new _settings_TextInput__WEBPACK_IMPORTED_MODULE_0__["default"](),
      'vf-fields-renderer': new _settings_FieldsRenderer__WEBPACK_IMPORTED_MODULE_2__["default"](),
      'vf-switch-input': new _settings_SwitchInput__WEBPACK_IMPORTED_MODULE_1__["default"](),
      'vf-select-input': new _settings_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"](),
      'vf-range-input': new _settings_RangeInput__WEBPACK_IMPORTED_MODULE_4__["default"](),
      'vf-radio-group-input': new _settings_RadioGroupInput__WEBPACK_IMPORTED_MODULE_5__["default"](),
      'vf-color-input': new _settings_ColorInput__WEBPACK_IMPORTED_MODULE_6__["default"](),
      'vf-button-group-input': new _settings_ButtonGroupInput__WEBPACK_IMPORTED_MODULE_7__["default"](),
      'vf-autocomplete-input': new _settings_AutocompleteInput__WEBPACK_IMPORTED_MODULE_8__["default"](),
      'vf-multi-text-input': new _settings_MultiTextInput__WEBPACK_IMPORTED_MODULE_9__["default"](),
      'vf-json-input': new _settings_JSONInput__WEBPACK_IMPORTED_MODULE_10__["default"](),
      'vf-checkbox-input': new _settings_CheckboxInput__WEBPACK_IMPORTED_MODULE_11__["default"](),
      'vf-bitwise-flags-input': new _settings_BitwiseFlagsInput__WEBPACK_IMPORTED_MODULE_13__["default"](),
      'vf-objects-list-input': new _settings_ObjectsListInput__WEBPACK_IMPORTED_MODULE_12__["default"](),
      'vf-datatable-input': new _settings_DatatableInput__WEBPACK_IMPORTED_MODULE_15__["default"](),
      'vf-group-single-exp': new _settings_GroupSingleExpansion__WEBPACK_IMPORTED_MODULE_29__["default"](),
      'vf-group-expansion': new _settings_GroupExpansion__WEBPACK_IMPORTED_MODULE_30__["default"](),
      'vf-group-tabs': new _settings_GroupTabs__WEBPACK_IMPORTED_MODULE_31__["default"](),
      'vf-group-treeview': new _settings_GroupTreeview__WEBPACK_IMPORTED_MODULE_32__["default"](),
      'vf-button-input': new _settings_ButtonInput__WEBPACK_IMPORTED_MODULE_16__["default"](),
      'vf-image-upload-input': new _settings_ImageUploadInput__WEBPACK_IMPORTED_MODULE_14__["default"](),
      'vf-datetime-input': new _settings_DateTimeInput__WEBPACK_IMPORTED_MODULE_17__["default"](),
      'vf-calendar-input': new _settings_CalendarInput__WEBPACK_IMPORTED_MODULE_18__["default"](),
      'vf-paragraph-input': new _settings_ParagraphInput__WEBPACK_IMPORTED_MODULE_20__["default"](),
      'vf-markdown-input': new _settings_MarkdownInput__WEBPACK_IMPORTED_MODULE_19__["default"](),
      'vf-alert-input': new _settings_AlertInput__WEBPACK_IMPORTED_MODULE_21__["default"](),
      'vf-formjson-input': new _settings_FormJSONInput__WEBPACK_IMPORTED_MODULE_22__["default"](),
      'vf-simple-captcha-input': new _settings_SimpleCaptcha__WEBPACK_IMPORTED_MODULE_24__["default"](),
      'vf-file-upload-input': new _settings_FileUploadInput__WEBPACK_IMPORTED_MODULE_25__["default"](),
      group: new _settings_Group__WEBPACK_IMPORTED_MODULE_33__["default"](),
      column: new _settings_DatatableColumn__WEBPACK_IMPORTED_MODULE_34__["default"](),
      'Centered': new _settings_Centered__WEBPACK_IMPORTED_MODULE_28__["default"](),
      'AdminBar': new _settings_AdminBar__WEBPACK_IMPORTED_MODULE_26__["default"](),
      'AppBar': new _settings_AppBar__WEBPACK_IMPORTED_MODULE_27__["default"](),
      'vf-pagination-input': new _settings_PaginationInput__WEBPACK_IMPORTED_MODULE_23__["default"]()
    };
    var FormBuilderInputsList = [];

    if (this.availableInputs) {
      FormBuilderInputsList.push.apply(FormBuilderInputsList, _toConsumableArray(this.availableInputs));
    } else {
      for (var key in inputTypeSettings) {
        var parts = key.split('-');

        if (parts[0] === 'vf') {
          var title = parts.splice(1);
          title[0] = title[0].slice(0, 1).toUpperCase() + title[0].slice(1);
          FormBuilderInputsList.push({
            id: key,
            title: title.join(' '),
            group: 'form'
          });
        }
      }

      for (var _key in window.ExtraFormJSONSettings) {
        var _parts = _key.split('-');

        if (_parts[0] === 'vf') {
          var _title = _parts.splice(1);

          _title[0] = _title[0].slice(0, 1).toUpperCase() + _title[0].slice(1);
          inputTypeSettings[_key] = window.ExtraFormJSONSettings[_key];
          FormBuilderInputsList.push({
            id: _key,
            title: _title.join(' '),
            group: 'website'
          });
        }
      }

      FormBuilderInputsList.push({
        id: 'group',
        title: 'Group',
        group: 'form'
      });
      FormBuilderInputsList.push({
        id: 'column',
        title: 'DataTable Column',
        group: 'form'
      });
      FormBuilderInputsList.push({
        id: 'component',
        title: 'Custom Component',
        group: 'form'
      });
      FormBuilderInputsList.sort(function (a, b) {
        return ('' + a.title).localeCompare(b.title);
      });
    }

    inputTypeSettings['vf-datatable-input'].inputs = FormBuilderInputsList;
    return {
      inputs: FormBuilderInputsList,
      inputTypeSettings: inputTypeSettings
    };
  },
  methods: {
    getRemoveAction: function getRemoveAction(items, item) {
      return {
        type: 'confirm',
        iconProps: {
          small: true,
          color: 'red'
        },
        icon: 'mdi-minus-box',
        props: {
          small: true,
          icon: true
        },
        confirm: 'Delete',
        message: 'Are you sure you want to remove item ' + item.model.id + '?',
        callback: function callback(confirm) {
          if (confirm) {
            item.drop();
          }
        }
      };
    },
    getSettingsAction: function getSettingsAction(items, item, onUpdated) {
      var fields = this.inputTypeSettings[item.model.type] ? this.inputTypeSettings[item.model.type] : {};
      var form = {
        type: 'drawer',
        onUpdated: onUpdated,
        iconProps: {
          color: 'primary',
          small: true
        },
        icon: 'mdi-settings',
        props: {
          icon: true,
          small: true
        },
        fields: fields
      };

      if (fields.getSettingsFormFields) {
        form.fields = fields.getSettingsFormFields(item);
      }

      return form;
    },
    getDuplicateAction: function getDuplicateAction(items, item) {
      var _this = this;

      return {
        type: 'button',
        icon: 'mdi-content-duplicate',
        iconProps: {
          small: true
        },
        props: {
          icon: true,
          small: true,
          click: function click() {
            var newCopy = JSON.parse(JSON.stringify(_objectSpread({}, item.model)));
            newCopy.id = ('rnd' + Math.random() * Number.MAX_SAFE_INTEGER).substr(0, 10);

            var newModel = _this.treeModel.parse(newCopy);

            newModel.value = JSON.parse(JSON.stringify(_objectSpread({}, item.value)));

            _this.appendNestedPathValue(newModel, 'value.settings.id', newCopy.id);

            item.parent.addChild(newModel);
          }
        }
      };
    },
    getMoveAction: function getMoveAction(items, item, inputs) {
      return {
        type: 'menu',
        iconProps: {
          small: true,
          color: 'red'
        },
        icon: 'mdi-format-vertical-align-center',
        props: {
          small: true,
          icon: true
        },
        formProps: {
          options: {
            type: 'component',
            component: 'v-card',
            formClass: 'ma-0 px-0 py-0',
            wrap: {
              component: 'v-list',
              "class": 'pa-0',
              props: {
                dense: true
              },
              inside: {
                component: 'v-list-item',
                props: {
                  dense: true
                }
              }
            }
          }
        },
        fields: {
          first: {
            type: 'input',
            input: 'button',
            props: {
              icon: true,
              small: true,
              click: function click() {
                item.setIndex(0);
              }
            },
            iconProps: {
              small: true
            },
            icon: 'mdi-format-vertical-align-top'
          },
          up: {
            type: 'input',
            input: 'button',
            props: {
              icon: true,
              small: true,
              click: function click() {
                if (item.getIndex() > 0) {
                  item.setIndex(item.getIndex() - 1);
                }
              }
            },
            iconProps: {
              small: true
            },
            icon: 'mdi-transfer-up'
          },
          down: {
            type: 'input',
            input: 'button',
            props: {
              icon: true,
              small: true,
              click: function click() {
                if (item.getIndex() < item.parent.children.length - 1) {
                  item.setIndex(item.getIndex() + 1);
                }
              }
            },
            iconProps: {
              small: true
            },
            icon: 'mdi-transfer-down'
          },
          bottom: {
            type: 'input',
            input: 'button',
            props: {
              icon: true,
              small: true,
              click: function click() {
                item.setIndex(item.parent.children.length - 1);
              }
            },
            iconProps: {
              small: true
            },
            icon: 'mdi-format-vertical-align-bottom'
          }
        }
      };
    },
    getAddAction: function getAddAction(items, itemParent, inputs) {
      var _this2 = this;

      if (!inputs) {
        inputs = this.inputs;
      }

      return {
        type: 'dialog',
        icon: 'mdi-plus',
        iconProps: {
          color: 'success',
          small: true
        },
        props: {
          icon: true,
          small: true
        },
        formProps: {
          options: {
            type: 'component',
            component: 'v-card'
          }
        },
        fields: {
          type: {
            type: 'input',
            input: 'buttons-list',
            label: 'Add a new field to Form Builder',
            "class": 'mt-3',
            groups: [{
              id: 'form',
              title: 'FormJSON'
            }, {
              id: 'website',
              title: 'Website'
            }],
            decorator: {
              id: 'id',
              title: 'title',
              label: ':title'
            },
            objects: inputs,
            props: {
              outlined: true,
              "class": 'ma-1'
            },
            once: true,
            click: function click(clicked) {
              var newItem = {
                id: ('rnd' + Math.random() * Number.MAX_SAFE_INTEGER).substr(0, 10),
                title: clicked.title,
                type: clicked.id
              };

              var newModel = _this2.treeModel.parse(newItem);

              newModel.value = {
                settings: {
                  tabs: {
                    fieldProperties: {
                      id: newItem.id
                    }
                  }
                },
                slots: {
                  slot: null
                }
              };
              var itemParentTypeSettings = _this2.inputTypeSettings[itemParent.model.type];

              if (itemParentTypeSettings && itemParentTypeSettings.getInputSlots(itemParent).length > 0) {
                newModel.value.slots.slot = itemParentTypeSettings.getInputSlots(itemParent)[0].id;
              }

              itemParent.addChild(newModel);
            }
          }
        }
      };
    },
    getChangeSlotAction: function getChangeSlotAction(item, slots) {
      return {
        type: 'menu',
        iconProps: {
          small: true,
          color: 'secondary'
        },
        icon: 'mdi-widgets',
        props: {
          small: true,
          icon: true
        },
        formProps: {
          options: {
            type: 'component',
            component: 'v-card'
          }
        },
        fields: {
          slot: {
            type: 'input',
            input: 'radio-group',
            label: 'Component Slot',
            objects: slots
          }
        }
      };
    },

    /**
     * get [ActionsProvider] for formjson builder treeview items
     */
    getFormJSONBuilderActionProviderForTreeview: function getFormJSONBuilderActionProviderForTreeview() {
      var _this3 = this;

      return {
        hasAction: function hasAction(slot, item) {
          return true;
        },
        getActions: function getActions(slot, item) {
          var actions = {};

          switch (slot) {
            case 'append':
              if (!item.isRoot()) {
                actions.remove = _this3.getRemoveAction(_this3.schema.builder, item);
                actions.duplicate = _this3.getDuplicateAction(_this3.schema.builder, item);
                actions.move = _this3.getMoveAction(_this3.schema.builder, item);
              } else if (_this3.template && _this3.inputTypeSettings[_this3.template]) {
                actions.__template = {
                  type: 'drawer',
                  iconProps: {
                    color: 'cyan',
                    small: true
                  },
                  icon: 'mdi-format-paint',
                  props: {
                    icon: true,
                    small: true
                  },
                  fields: _this3.inputTypeSettings[_this3.template].getInputProperties(item)
                };
              }

              break;

            case 'prepend':
              if (!item.isRoot()) {
                var parentTypeSettings = _this3.inputTypeSettings[item.parent.model.type];

                if (parentTypeSettings && parentTypeSettings.getInputSlots(item).length > 1) {
                  actions.slots = _this3.getChangeSlotAction(item, parentTypeSettings.getInputSlots(item));
                }
              }

              if (item.model.type === 'vf-fields-renderer') {
                actions.add = _this3.getAddAction(_this3.schema.builder, item);
              }

              if (_this3.inputTypeSettings[item.model.type] && _this3.inputTypeSettings[item.model.type].getInputSlots) {
                if (_this3.inputTypeSettings[item.model.type].getInputSlots(item).length > 0) {
                  actions.add = _this3.getAddAction(_this3.schema.builder, item);
                }
              }

              if (item.model.type.startsWith('group')) {
                actions.add = _this3.getAddAction(_this3.schema.builder, item, _this3.inputs.filter(function (t) {
                  return !['group', 'column'].includes(t.id);
                }));
              }

              if (item.model.type.startsWith('vf-group-')) {
                actions.add = _this3.getAddAction(_this3.schema.builder, item, _this3.inputs.filter(function (t) {
                  return t.id === 'group';
                }));
              }

              actions.settings = _this3.getSettingsAction(_this3.schema.builder, item, function (vals) {
                if (vals && vals.tabs && vals.tabs.fieldProperties && vals.tabs.fieldProperties.id) {
                  if (item.model.id !== vals.tabs.fieldProperties.id) {
                    item.model.id = vals.tabs.fieldProperties.id;
                  }
                }

                if (_this3.inputTypeSettings[item.model.type] && _this3.inputTypeSettings[item.model.type].onSettingsUpdated) {
                  _this3.inputTypeSettings[item.model.type].onSettingsUpdated(vals, item);
                }
              });
              break;
          }

          return actions;
        }
      };
    },

    /**
     * get properties object for a <vuetify-formjson> from treeview (formjson builder) items
     */
    getFormJSONFromSchema: function getFormJSONFromSchema(schema) {
      var _this4 = this;

      var formjson = {};

      var iterateAndEvaluateItems = function iterateAndEvaluateItems(items, ref) {
        /**
         * create child from each item type
         * iterate on all items and their children
         */
        items.forEach(function (item) {
          /** the property field to store child objects */
          var appendChildrenProperty = 'default';
          /** item settings */

          var itemTypeSettings = null;

          if (item.model.type && item.model.type !== 'vf-fields-renderer') {
            itemTypeSettings = _this4.inputTypeSettings[item.model.type];
            /** input type item */

            if (item.model.type.endsWith('input')) {
              var idSlices = item.model.type.split('-');
              ref[item.model.id] = {
                type: 'input',
                input: idSlices.slice(1, idSlices.length - 1).join('-')
              };
            }
            /** group type item */
            else if (item.model.type.startsWith('vf-group-')) {
                appendChildrenProperty = 'groups';

                var _idSlices = item.model.type.split('-');

                ref[item.model.id] = {
                  type: 'group',
                  group: _idSlices.slice(2).join('-'),
                  groups: {}
                };
              }
              /** input/group inner slot */
              else {
                  ref[item.model.id] = {
                    __custom_slot: item.model.type
                  };
                }
          } else {
            /** its a vf-fields-renderer */
            itemTypeSettings = _this4.inputTypeSettings['vf-fields-renderer'];
            ref[item.model.id] = {
              id: item.model.id,
              fields: {}
            };
            appendChildrenProperty = 'fields';
          }
          /** append item props from settings if
           * there is a settings available from type */


          if (itemTypeSettings) {
            var itemSettings = itemTypeSettings.getInputPropsFromSettings(item.value && item.value.settings ? item.value.settings : {});
            ref[item.model.id] = _objectSpread(_objectSpread({}, ref[item.model.id]), itemSettings);
          } // append template properties if target item has one


          if (item.value && item.value.__template) {
            ref[item.model.id] = _objectSpread(_objectSpread({}, ref[item.model.id]), {}, {
              __template: _objectSpread({}, item.value.__template)
            });
          } // iterate childrens


          if (item.children.length > 0) {
            if (itemTypeSettings && itemTypeSettings.getInputSlots(item).length > 0) {
              // iterate on slot childs
              itemTypeSettings.getInputSlots(item).forEach(function (slot) {
                if (!ref[item.model.id][slot.id]) {
                  ref[item.model.id][slot.id] = {};
                }

                iterateAndEvaluateItems(item.children.filter(function (child) {
                  return child.value && child.value.slots && child.value.slots.slot === slot.id;
                }), ref[item.model.id][slot.id]);
              });
            } // iterate on default slot


            if (!ref[item.model.id][appendChildrenProperty]) {
              ref[item.model.id][appendChildrenProperty] = {};
            }

            iterateAndEvaluateItems(item.children.filter(function (child) {
              return !child.value || !child.value.slots || !child.value.slots.slot;
            }), ref[item.model.id][appendChildrenProperty]);
          }
        });
      };

      iterateAndEvaluateItems(schema, formjson);
      return formjson;
    },

    /**
     * get treeview items for <vf-formjson-input> (formjson builder) from a <vuetify-formjson>(formjson) properties object
     * @param {Object} tree form json properties
     */
    getFormSchemaFromFormJSON: function getFormSchemaFromFormJSON(formjson) {
      var _this5 = this;

      var getTree = function getTree(data) {
        var emptyType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var slot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var tree = [];

        var _loop = function _loop(prop) {
          var itemType = 'vf-fields-renderer';
          var itemId = prop;

          if (data[prop].type) {
            switch (data[prop].type) {
              case 'input':
                itemType = 'vf-' + data[prop].input + '-input';
                break;

              case 'group':
                itemType = 'vf-group-' + data[prop].group;
                break;

              case 'component':
                itemType = data[prop].component;
                break;

              default:
                if (data[prop].__custom_slot) {
                  itemType = data[prop].__custom_slot;
                } else {
                  itemType = data[prop].type;
                }

                break;
            }
          } else if (data[prop].__custom_slot) {
            itemType = data[prop].__custom_slot;
            itemId = data[prop].id;
          } else if (emptyType) {
            itemType = emptyType;
            itemId = data[prop].id;
          } else {
            itemId = data[prop].id;
          }

          var newItem = {
            id: itemId,
            type: itemType
          };

          var newModel = _this5.treeModel.parse(newItem);

          var children = [];

          if (data[prop].fields) {
            children = getTree(data[prop].fields);
          } else if (data[prop].groups) {
            children = getTree(data[prop].groups, 'group');
          }

          var eventsVals = {};
          var settingsVals = {}; // keep property names which contain inner slots and content from ending up in settingsVals

          var notDataKeys = ['fields', 'groups', 'components', 'v-on']; // apply settings on item value before asking for InputSlots

          for (var inner in data[prop]) {
            if (notDataKeys.indexOf(inner) < 0) {
              if (_typeof(data[prop][inner]) === 'object') {
                if (Array.isArray(data[prop][inner])) {
                  settingsVals[inner] = [];
                } else {
                  settingsVals[inner] = {};
                }

                for (var nested in data[prop][inner]) {
                  if (nested !== 'v-on') {
                    settingsVals[inner][nested] = data[prop][inner][nested];
                  } else {
                    if (!eventsVals[inner]) {
                      eventsVals[inner] = [];
                    }

                    for (var event in data[prop][inner][nested]) {
                      eventsVals[inner].push({
                        event: event,
                        "function": data[prop][inner][nested][event]
                      });
                    }
                  }
                }
              } else {
                settingsVals[inner] = data[prop][inner];
              }
            }
          } // add slotted children if exists


          var itemTypeSettings = _this5.inputTypeSettings[itemType];

          if (itemTypeSettings) {
            if (itemTypeSettings.onSettingsUpdated) {
              // update type on values
              itemTypeSettings.onSettingsUpdated({
                tabs: {
                  fieldProperties: settingsVals,
                  eventHandlers: eventsVals
                }
              }, newModel);
            } // now receive the slots and iterate on them


            var slots = itemTypeSettings.getInputSlots(newModel);
            slots.forEach(function (slot) {
              if (data[prop][slot.id]) {
                var _children;

                (_children = children).push.apply(_children, _toConsumableArray(getTree(data[prop][slot.id], null, slot.id)));
              }
            }); // add slots to notDataKeys

            notDataKeys.push.apply(notDataKeys, _toConsumableArray(slots.map(function (i) {
              return i.id;
            })));
          }

          children.forEach(function (child) {
            newModel.addChild(child);
          }); // apply settings on item value again to break children update chain

          eventsVals = {};
          settingsVals = {};

          for (var _inner in data[prop]) {
            if (notDataKeys.indexOf(_inner) < 0) {
              if (_typeof(data[prop][_inner]) === 'object') {
                if (Array.isArray(data[prop][_inner])) {
                  settingsVals[_inner] = [];
                } else {
                  settingsVals[_inner] = {};
                }

                for (var _nested in data[prop][_inner]) {
                  if (_nested !== 'v-on') {
                    settingsVals[_inner][_nested] = data[prop][_inner][_nested];
                  } else {
                    if (!eventsVals[_inner]) {
                      eventsVals[_inner] = [];
                    }

                    for (var _event in data[prop][_inner][_nested]) {
                      eventsVals[_inner].push({
                        event: _event,
                        "function": data[prop][_inner][_nested][_event]
                      });
                    }
                  }
                }
              } else {
                settingsVals[_inner] = data[prop][_inner];
              }
            }
          }

          newModel.value = {
            settings: {
              tabs: {
                fieldProperties: settingsVals,
                eventHandlers: JSON.parse(JSON.stringify(eventsVals)),
                validations: settingsVals.validations
              }
            },
            slots: {
              slot: slot
            }
          };
          tree.push(newModel);
        };

        for (var prop in data) {
          _loop(prop);
        }

        return tree;
      };

      var treeModel = getTree(formjson);
      return treeModel;
    }
  }
});

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/AdminBar.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/AdminBar.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminBarTemplateSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AdminBarTemplateSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(AdminBarTemplateSettings, _BaseInputSettings);

  var _super = _createSuper(AdminBarTemplateSettings);

  function AdminBarTemplateSettings() {
    _classCallCheck(this, AdminBarTemplateSettings);

    return _super.apply(this, arguments);
  }

  _createClass(AdminBarTemplateSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return {};
    }
  }]);

  return AdminBarTemplateSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/AlertInput.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/AlertInput.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlertInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var AlertInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(AlertInputSettings, _BaseInputSettings);

  var _super = _createSuper(AlertInputSettings);

  function AlertInputSettings() {
    _classCallCheck(this, AlertInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(AlertInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VAlert.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        message: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Message'),
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VAlert.fields)
        }
      });
    }
  }]);

  return AlertInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/AppBar.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/AppBar.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppBarTemplateSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AppBarTemplateSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(AppBarTemplateSettings, _BaseInputSettings);

  var _super = _createSuper(AppBarTemplateSettings);

  function AppBarTemplateSettings() {
    _classCallCheck(this, AppBarTemplateSettings);

    return _super.apply(this, arguments);
  }

  _createClass(AppBarTemplateSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return {
        labels: {
          options: {
            type: 'col',
            formClass: 'pa-0'
          },
          fields: {
            signin: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Sign in string'),
            singup: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Sign up string'),
            tel: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Phone number')
          }
        },
        links: {
          options: {
            type: 'col',
            formClass: 'pa-0'
          },
          fields: {}
        }
      };
    }
  }]);

  return AppBarTemplateSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/AutocompleteInput.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/AutocompleteInput.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutocompleteInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var AutocompleteInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(AutocompleteInputSettings, _BaseInputSettings);

  var _super = _createSuper(AutocompleteInputSettings);

  function AutocompleteInputSettings() {
    _classCallCheck(this, AutocompleteInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(AutocompleteInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VAutocomplete.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        objects: {
          type: 'input',
          input: 'datatable',
          label: 'Items',
          "class": 'col-12 ma-0 pa-0',
          props: {
            'disable-pagination': true,
            dense: true
          },
          columns: [{
            column: 'id',
            title: 'ID'
          }, {
            column: 'title',
            title: 'Title'
          }],
          create: {
            title: 'Add item to select list',
            fields: {
              id: {
                type: 'input',
                input: 'text',
                "class": 'col-6 pe-0 ps-0',
                label: 'ID'
              },
              title: {
                type: 'input',
                input: 'text',
                "class": 'col-6 pe-0 ps-0',
                label: 'Title'
              },
              props: {
                options: {
                  type: 'row'
                },
                fields: {
                  'v-on': Object(_comon__WEBPACK_IMPORTED_MODULE_0__["createEventsDatatableInputForSettingsForm"])('Item events', _api__WEBPACK_IMPORTED_MODULE_1__["default"].VCheckbox.events)
                }
              }
            }
          },
          edit: {},
          remove: {}
        },
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VAutocomplete.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return AutocompleteInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/BitwiseFlagsInput.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/BitwiseFlagsInput.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BitwiseFlagsInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var BitwiseFlagsInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(BitwiseFlagsInputSettings, _BaseInputSettings);

  var _super = _createSuper(BitwiseFlagsInputSettings);

  function BitwiseFlagsInputSettings() {
    _classCallCheck(this, BitwiseFlagsInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(BitwiseFlagsInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: [{
          id: 'input',
          title: 'Triggered when value is changed'
        }]
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        objects: {
          type: 'input',
          input: 'datatable',
          label: 'Items',
          "class": 'col-12 ma-0 pa-0',
          props: {
            'disable-pagination': true,
            dense: true
          },
          columns: [{
            id: 'id',
            label: 'ID'
          }, {
            id: 'title',
            label: 'Title'
          }],
          crud: {
            create: {
              fields: {
                id: {
                  type: 'input',
                  input: 'text',
                  "class": 'col-6 pe-0 ps-0',
                  label: 'ID'
                },
                title: {
                  type: 'input',
                  input: 'text',
                  "class": 'col-6 pe-0 ps-0',
                  label: 'Title'
                }
              }
            }
          }
        },
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          }
        }
      });
    }
  }]);

  return BitwiseFlagsInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ButtonGroupInput.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ButtonGroupInput.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroupInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ButtonGroupInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(ButtonGroupInputSettings, _BaseInputSettings);

  var _super = _createSuper(ButtonGroupInputSettings);

  function ButtonGroupInputSettings() {
    _classCallCheck(this, ButtonGroupInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(ButtonGroupInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VBtnToggle.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        objects: {
          type: 'input',
          input: 'datatable',
          label: 'Items',
          "class": 'col-12 ma-0 pa-0',
          props: {
            'disable-pagination': true,
            dense: true
          },
          columns: [{
            column: 'id',
            title: 'ID'
          }, {
            column: 'title',
            title: 'Title'
          }],
          create: {
            title: 'Add item to select list',
            fields: {
              id: {
                type: 'input',
                input: 'text',
                "class": 'col-6 pe-0 ps-0',
                label: 'ID'
              },
              title: {
                type: 'input',
                input: 'text',
                "class": 'col-6 pe-0 ps-0',
                label: 'Title'
              },
              props: {
                options: {
                  type: 'row'
                },
                fields: {
                  'v-on': Object(_comon__WEBPACK_IMPORTED_MODULE_0__["createEventsDatatableInputForSettingsForm"])('Item events', _api__WEBPACK_IMPORTED_MODULE_1__["default"].VCheckbox.events)
                }
              }
            }
          },
          edit: {},
          remove: {}
        },
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VBtnToggle.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return ButtonGroupInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ButtonInput.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ButtonInput.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ButtonInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(ButtonInputSettings, _BaseInputSettings);

  var _super = _createSuper(ButtonInputSettings);

  function ButtonInputSettings() {
    _classCallCheck(this, ButtonInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(ButtonInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VBtn.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        icon: {
          type: 'input',
          input: 'text',
          label: 'Icon'
        },
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VBtn.fields)
        },
        iconProps: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VIcon.fields)
        }
      });
    }
  }]);

  return ButtonInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/CalendarInput.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/CalendarInput.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ColorInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(ColorInputSettings, _BaseInputSettings);

  var _super = _createSuper(ColorInputSettings);

  function ColorInputSettings() {
    _classCallCheck(this, ColorInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(ColorInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          }
        }
      });
    }
  }]);

  return ColorInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/Centered.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/Centered.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CenteredTemplateSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CenteredTemplateSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(CenteredTemplateSettings, _BaseInputSettings);

  var _super = _createSuper(CenteredTemplateSettings);

  function CenteredTemplateSettings() {
    _classCallCheck(this, CenteredTemplateSettings);

    return _super.apply(this, arguments);
  }

  _createClass(CenteredTemplateSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return {
        'x-lg': {
          type: 'input',
          input: 'text',
          label: 'X Large width'
        },
        lg: {
          type: 'input',
          input: 'text',
          label: 'Large width'
        },
        md: {
          type: 'input',
          input: 'text',
          label: 'Medium width'
        },
        sm: {
          type: 'input',
          input: 'text',
          label: 'Small width'
        },
        'x-sm': {
          type: 'input',
          input: 'text',
          label: 'X Small width'
        }
      };
    }
  }]);

  return CenteredTemplateSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/CheckboxInput.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/CheckboxInput.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ColorInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(ColorInputSettings, _BaseInputSettings);

  var _super = _createSuper(ColorInputSettings);

  function ColorInputSettings() {
    _classCallCheck(this, ColorInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(ColorInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VCheckbox.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VCheckbox.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return ColorInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ColorInput.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ColorInput.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ColorInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(ColorInputSettings, _BaseInputSettings);

  var _super = _createSuper(ColorInputSettings);

  function ColorInputSettings() {
    _classCallCheck(this, ColorInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(ColorInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTextField.events
      }, {
        id: 'pickerProps',
        title: 'Color Picker events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VColorPicker.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VDataTable.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        },
        pickerProps: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VColorPicker.fields)
        }
      });
    }
  }]);

  return ColorInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/DatatableColumn.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/DatatableColumn.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatatableColumnSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DatatableColumnSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(DatatableColumnSettings, _BaseInputSettings);

  var _super = _createSuper(DatatableColumnSettings);

  function DatatableColumnSettings() {
    _classCallCheck(this, DatatableColumnSettings);

    return _super.apply(this, arguments);
  }

  _createClass(DatatableColumnSettings, [{
    key: "getInputSlots",
    value: function getInputSlots(item) {
      if (this.dic && this.dic[item.model.id]) {
        if (this.dic[item.model.id].tabs.fieldProperties.type === 'actions') {
          return [{
            id: 'actions',
            title: 'Actions'
          }];
        }
      }

      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList(item) {
      if (this.dic && this.dic[item.model.id]) {
        if (this.dic[item.model.id].tabs.fieldProperties.type === 'actions') {
          return [{
            id: 'props',
            title: 'Column Events',
            events: [{
              id: 'before-render',
              title: 'Before Column is rendererd'
            }]
          }];
        }
      }

      return [];
    }
  }, {
    key: "onSettingsUpdated",
    value: function onSettingsUpdated(vals, item) {
      if (!this.dic) {
        this.dic = {};
      }

      if (item) {
        this.dic[item.model.id] = vals;
      }
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties(item) {
      var extras = {};

      if (this.dic && this.dic[item.model.id]) {
        var values = this.dic[item.model.id];
        var type = values.tabs && values.tabs.fieldProperties ? values.tabs.fieldProperties.type : null;

        if (type === 'custom') {
          extras.component = {
            type: 'input',
            input: 'text',
            label: 'Component',
            "class": 'col-12 ma-0 pa-0'
          };
          extras.slot = {
            type: 'input',
            input: 'text',
            label: 'Slot',
            "class": 'col-12 ma-0 pa-0'
          };
        } else if (type === 'nested-object') {
          extras['nested-path'] = {
            type: 'input',
            input: 'text',
            label: 'Nested Path',
            "class": 'col-12 ma-0 pa-0'
          };
        } else if (type === 'hover-list') {
          extras['decorator'] = {
            options: {
              formClass: 'ma-0 pa-0'
            },
            fields: {
              label: {
                type: 'input',
                input: 'text',
                label: 'Decorator Label'
              },
              labels: {
                type: 'input',
                input: 'text',
                label: 'Decorator Property Names',
                props: {
                  hint: 'comma separated property names'
                }
              }
            }
          };
        } else if (type === 'amount') {
          extras['currency'] = Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Currency');
          extras['show_type'] = Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Show type');
          extras['positive'] = Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Positive value');
          extras['negative'] = Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Negative value');
        }
      }

      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        sortable: {
          type: 'input',
          input: 'checkbox',
          label: 'Sortable',
          "class": 'col-12 ma-0 pa-0'
        },
        sort_name: {
          type: 'input',
          input: 'text',
          label: 'Sort key name',
          "class": 'col-12 ma-0 pa-0'
        },
        align: {
          type: 'input',
          input: 'select',
          label: 'Align',
          "class": 'col-6',
          objects: [{
            id: 'start',
            title: 'Start'
          }, {
            id: 'end',
            title: 'End'
          }, {
            id: 'center',
            title: 'Center'
          }]
        },
        width: {
          type: 'input',
          input: 'text',
          label: 'Width',
          "class": 'col-6'
        },
        type: {
          type: 'input',
          input: 'select',
          label: 'Column content type',
          "class": 'col-12',
          objects: [{
            id: 'simple',
            title: 'Simple'
          }, {
            id: 'nested-object',
            title: 'Nested Object'
          }, {
            id: 'datetime',
            title: 'DateTime'
          }, {
            id: 'hover-list',
            title: 'Hover List'
          }, {
            id: 'expan-list',
            title: 'Expandable List'
          }, {
            id: 'actions',
            title: 'Actions'
          }, {
            id: 'amount',
            title: 'Currency/Amount'
          }, {
            id: 'custom',
            title: 'Custom Component'
          }]
        }
      }, extras);
    }
  }]);

  return DatatableColumnSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/DatatableInput.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/DatatableInput.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatatableInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var DatatableInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(DatatableInputSettings, _BaseInputSettings);

  var _super = _createSuper(DatatableInputSettings);

  function DatatableInputSettings(inputs) {
    var _this;

    _classCallCheck(this, DatatableInputSettings);

    _this = _super.call(this);
    _this.inputs = inputs;
    return _this;
  }

  _createClass(DatatableInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [{
        id: 'columns',
        title: 'Column',
        inputs: this.inputs.filter(function (t) {
          return t.id === 'column';
        })
      }, {
        id: 'crud',
        title: 'CRUD Create/Edit/Filter'
      }];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VDataTable.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        table: {
          options: {
            type: 'row',
            formClass: 'col-12 ma-0 pa-0'
          },
          fields: {
            query: {
              options: {
                type: 'row',
                formClass: 'col-12 ma-0 pa-0'
              },
              fields: {
                url: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Remote API query URL'),
                relations: {
                  type: 'input',
                  input: 'datatable',
                  label: 'Remote API query relations',
                  columns: {
                    name: {
                      id: 'name',
                      label: 'Relation Name'
                    },
                    columns: {
                      id: 'columns',
                      label: 'Relation Columns'
                    }
                  },
                  props: {
                    'hide-footer': true,
                    'dense': true,
                    'show-select': true
                  },
                  crud: {
                    create: {
                      fields: {
                        name: {
                          type: 'input',
                          input: 'text',
                          label: 'Relation Name'
                        },
                        columns: {
                          type: 'input',
                          input: 'text',
                          label: 'Relation Columns',
                          props: {
                            hint: 'Column names without space and with , as separator character'
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            'create-url': Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Remote Create Form URL'),
            'reports-url': Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Remote url for Reports')
          }
        },
        'hide-create': Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Can not Create'),
        'hide-remove': Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Can not Remove'),
        'hide-filters': Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Can not Filter'),
        'hide-search': Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Can not Search'),
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VDataTable.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return DatatableInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/DateTimeInput.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/DateTimeInput.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BitwiseFlagsInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var BitwiseFlagsInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(BitwiseFlagsInputSettings, _BaseInputSettings);

  var _super = _createSuper(BitwiseFlagsInputSettings);

  function BitwiseFlagsInputSettings() {
    _classCallCheck(this, BitwiseFlagsInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(BitwiseFlagsInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _toConsumableArray(_api__WEBPACK_IMPORTED_MODULE_1__["default"].VTextField.events)
      }, {
        id: 'dateProps',
        title: 'Date Picker Events',
        events: [_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VDatePicker.events)]
      }, {
        id: 'timeProps',
        title: 'Time Picker Events',
        events: [_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTimePicker.events)]
      }, {
        id: 'calendarProps',
        title: 'Calendar Picker Events',
        events: [_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VSelect.events)]
      }, {
        id: 'timezoneProps',
        title: 'Timezone Picker Events',
        events: [_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VAutocomplete.events)]
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        hideTimezones: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Hide Timezones'),
        hideCalendars: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Hide Calendars'),
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTextField.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        },
        dateProps: {
          fields: _objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VDatePicker.fields)
        },
        timeProps: {
          fields: _objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTimePicker.fields)
        },
        timezoneProps: {
          fields: _objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VSelect.fields)
        },
        calendarProps: {
          fields: _objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VAutocomplete.fields)
        }
      });
    }
  }]);

  return BitwiseFlagsInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/FieldsRenderer.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/FieldsRenderer.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FieldsRenderSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var FieldsRenderSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(FieldsRenderSettings, _BaseInputSettings);

  var _super = _createSuper(FieldsRenderSettings);

  function FieldsRenderSettings() {
    _classCallCheck(this, FieldsRenderSettings);

    return _super.apply(this, arguments);
  }

  _createClass(FieldsRenderSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'options',
        title: 'Component events',
        events: [{
          id: 'input',
          title: 'Triggered when value inside the form is changed'
        }]
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties(item) {
      return {
        id: {
          type: 'input',
          input: 'text',
          label: 'ID',
          "class": 'col-12 ma-0 ps-0 pe-0',
          updateKeyCodes: [13]
        },
        options: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: {
            formClass: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Form Class'),
            type: {
              type: 'input',
              input: 'select',
              label: 'Type',
              objects: [{
                id: 'row',
                title: 'Row'
              }, {
                id: 'col',
                title: 'Column'
              }, {
                id: 'component',
                title: 'Custom Component'
              }],
              decorator: {
                id: 'id',
                title: 'title',
                label: ':title'
              }
            },
            component: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Component'),
            wrap: {
              options: {
                type: 'col',
                formClass: 'ma-0 pa-0'
              },
              fields: {
                enabled: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('User Wrapper'),
                "class": Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Wrapper Class'),
                props: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Wrapper props in JSON String'),
                component: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Wrapper Component'),
                inside: {
                  options: {
                    type: 'col',
                    formClass: 'ma-0 pa-0'
                  },
                  fields: {
                    "class": Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Wrapper inside Class'),
                    component: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Wrapper inside Component'),
                    props: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Wrapper inside props in JSON String')
                  }
                }
              }
            }
          }
        }
      };
    }
  }]);

  return FieldsRenderSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/FileUploadInput.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/FileUploadInput.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileUploadInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var FileUploadInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(FileUploadInputSettings, _BaseInputSettings);

  var _super = _createSuper(FileUploadInputSettings);

  function FileUploadInputSettings() {
    _classCallCheck(this, FileUploadInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(FileUploadInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: [{
          id: 'finished',
          title: 'on upload finished'
        }, {
          id: 'error',
          title: 'on upload error'
        }]
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        singleFile: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Single file'),
        max_file_size: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Max file size (1m, 2g, for ex.)'),
        filters: {
          type: 'input',
          input: 'datatable',
          label: 'Availabel extensions',
          columns: [{
            id: 'extensions',
            title: 'Extensions'
          }, {
            id: 'title',
            title: 'Title'
          }],
          crud: {
            create: {
              fields: {
                mime_types: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Extensions (jpeg,jpg,...)'),
                title: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Title')
              }
            }
          },
          props: {
            'show-select': true,
            'hide-footer': true
          }
        }
      });
    }
  }]);

  return FileUploadInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/FormJSONInput.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/FormJSONInput.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormJSONSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var FormJSONSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(FormJSONSettings, _BaseInputSettings);

  var _super = _createSuper(FormJSONSettings);

  function FormJSONSettings() {
    _classCallCheck(this, FormJSONSettings);

    return _super.apply(this, arguments);
  }

  _createClass(FormJSONSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        height: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["NumberSettings"])('Fixed Height')
      });
    }
  }]);

  return FormJSONSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/Group.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/Group.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupExpansionSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var GroupExpansionSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(GroupExpansionSettings, _BaseInputSettings);

  var _super = _createSuper(GroupExpansionSettings);

  function GroupExpansionSettings() {
    _classCallCheck(this, GroupExpansionSettings);

    return _super.apply(this, arguments);
  }

  _createClass(GroupExpansionSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [{
        id: 'fields',
        title: 'Fields'
      }];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return {
        id: {
          type: 'input',
          input: 'text',
          label: 'ID',
          "class": 'col-12 ma-0 ps-0 pe-0',
          updateKeyCodes: [13]
        },
        label: {
          type: 'input',
          input: 'text',
          label: 'Label',
          "class": 'col-12 ma-0 ps-0 pe-0'
        },
        hidden: {
          type: 'input',
          input: 'switch',
          label: 'Hidden',
          "class": 'col-12 ma-0 ps-0 pe-0'
        },
        options: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: {
            formClass: TextSettings('Form Class'),
            type: {
              type: 'input',
              input: 'select',
              label: 'Type',
              objects: [{
                id: 'row',
                title: 'Row'
              }, {
                id: 'col',
                title: 'Column'
              }, {
                id: 'component',
                title: 'Custom Component'
              }],
              decorator: {
                id: 'id',
                title: 'title',
                label: ':title'
              }
            },
            component: TextSettings('Component'),
            wrap: {
              options: {
                type: 'col',
                formClass: 'ma-0 pa-0'
              },
              fields: {
                enabled: CheckboxSettings('User Wrapper'),
                "class": TextSettings('Wrapper Class'),
                props: TextSettings('Wrapper props in JSON String'),
                component: TextSettings('Wrapper Component'),
                inside: {
                  options: {
                    type: 'col',
                    formClass: 'ma-0 pa-0'
                  },
                  fields: {
                    "class": TextSettings('Wrapper inside Class'),
                    component: TextSettings('Wrapper inside Component'),
                    props: TextSettings('Wrapper inside props in JSON String')
                  }
                }
              }
            }
          }
        }
      };
    }
  }]);

  return GroupExpansionSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/GroupExpansion.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/GroupExpansion.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupExpansionSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var GroupExpansionSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(GroupExpansionSettings, _BaseInputSettings);

  var _super = _createSuper(GroupExpansionSettings);

  function GroupExpansionSettings() {
    _classCallCheck(this, GroupExpansionSettings);

    return _super.apply(this, arguments);
  }

  _createClass(GroupExpansionSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VExpansionPanel.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VExpansionPanel.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return GroupExpansionSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/GroupSingleExpansion.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/GroupSingleExpansion.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupSingleExpansionSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var GroupSingleExpansionSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(GroupSingleExpansionSettings, _BaseInputSettings);

  var _super = _createSuper(GroupSingleExpansionSettings);

  function GroupSingleExpansionSettings() {
    _classCallCheck(this, GroupSingleExpansionSettings);

    return _super.apply(this, arguments);
  }

  _createClass(GroupSingleExpansionSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VExpansionPanel.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VExpansionPanel.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return GroupSingleExpansionSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/GroupTabs.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/GroupTabs.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupTabsSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var GroupTabsSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(GroupTabsSettings, _BaseInputSettings);

  var _super = _createSuper(GroupTabsSettings);

  function GroupTabsSettings() {
    _classCallCheck(this, GroupTabsSettings);

    return _super.apply(this, arguments);
  }

  _createClass(GroupTabsSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTab.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTab.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return GroupTabsSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/GroupTreeview.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/GroupTreeview.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupTreeviewSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var GroupTreeviewSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(GroupTreeviewSettings, _BaseInputSettings);

  var _super = _createSuper(GroupTreeviewSettings);

  function GroupTreeviewSettings() {
    _classCallCheck(this, GroupTreeviewSettings);

    return _super.apply(this, arguments);
  }

  _createClass(GroupTreeviewSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTreeview.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTreeview.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return GroupTreeviewSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ImageUploadInput.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ImageUploadInput.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageUploadInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ImageUploadInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(ImageUploadInputSettings, _BaseInputSettings);

  var _super = _createSuper(ImageUploadInputSettings);

  function ImageUploadInputSettings() {
    _classCallCheck(this, ImageUploadInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(ImageUploadInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: {
            fullWidth: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["SwitchSettings"])('Full width'),
            fullHeight: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["SwitchSettings"])('Full height'),
            hideActions: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["SwitchSettings"])('Hide Actions'),
            clearable: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["SwitchSettings"])('Clearable'),
            clearIcon: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Clear Icon'),
            disabled: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["SwitchSettings"])('Disabled'),
            readonly: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Readonly'),
            debounce: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Debounce'),
            flipHorizontallyIcon: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Flip Horizontally Icon'),
            flipVerticallyIcon: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Flip Vertically Icon Style'),
            imageQuality: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Image Quality'),
            imageFormat: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Image Format'),
            imageWidth: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Image Width'),
            imageHeight: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Image Height'),
            imageMaxScaling: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Image Max Scaling'),
            imageMinScaling: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Image Min Scaling'),
            imageBackgroundColor: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["ColorSettings"])('Image Background Color'),
            overlayBackgroundColor: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["ColorSettings"])('Overlay Background Color'),
            overlayBorderColor: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["ColorSettings"])('Overlay Border Color'),
            overlayBorderWidth: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Overlay Border Width'),
            overlayPadding: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Overlay Padding'),
            rotateClockwiseIcon: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Overlay Padding'),
            rotateCounterClockwiseIcon: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Overlay Padding'),
            scalingSliderColor: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["ColorSettings"])('Scaling Slider Color'),
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          }
        }
      });
    }
  }]);

  return ImageUploadInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/JSONInput.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/JSONInput.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JSONInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var JSONInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(JSONInputSettings, _BaseInputSettings);

  var _super = _createSuper(JSONInputSettings);

  function JSONInputSettings() {
    _classCallCheck(this, JSONInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(JSONInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: [{
          id: 'change:error',
          title: 'Triggers when there is an error in json string'
        }, {
          id: 'change:success',
          title: 'Triggers when json is changed and is valid'
        }]
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          }
        }
      });
    }
  }]);

  return JSONInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/MarkdownInput.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/MarkdownInput.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutocompleteInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AutocompleteInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(AutocompleteInputSettings, _BaseInputSettings);

  var _super = _createSuper(AutocompleteInputSettings);

  function AutocompleteInputSettings() {
    _classCallCheck(this, AutocompleteInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(AutocompleteInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: [{
          id: 'input',
          title: 'Triggerred when Input value is changed'
        }]
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: {}
        }
      });
    }
  }]);

  return AutocompleteInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/MultiTextInput.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/MultiTextInput.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiTextInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var MultiTextInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(MultiTextInputSettings, _BaseInputSettings);

  var _super = _createSuper(MultiTextInputSettings);

  function MultiTextInputSettings() {
    _classCallCheck(this, MultiTextInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(MultiTextInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTextField.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        objects: {
          type: 'input',
          input: 'datatable',
          label: 'Items',
          "class": 'col-12 ma-0 pa-0',
          props: {
            'disable-pagination': true,
            dense: true
          },
          columns: [{
            column: 'id',
            title: 'ID'
          }, {
            column: 'title',
            title: 'Title'
          }],
          create: {
            title: 'Add item to multi text select list',
            fields: {
              id: {
                type: 'input',
                input: 'text',
                "class": 'col-6 pe-0 ps-0',
                label: 'ID'
              },
              title: {
                type: 'input',
                input: 'text',
                "class": 'col-6 pe-0 ps-0',
                label: 'Title'
              }
            }
          },
          edit: {},
          remove: {}
        },
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTextField.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return MultiTextInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ObjectsListInput.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ObjectsListInput.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectsListInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ObjectsListInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(ObjectsListInputSettings, _BaseInputSettings);

  var _super = _createSuper(ObjectsListInputSettings);

  function ObjectsListInputSettings() {
    _classCallCheck(this, ObjectsListInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(ObjectsListInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: [{
          id: 'input',
          title: 'Triggered when value inside the form is changed'
        }]
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        objects: {
          type: 'input',
          input: 'datatable',
          label: 'Items',
          "class": 'col-12 ma-0 pa-0',
          props: {
            'disable-pagination': true,
            dense: true,
            'show-select': true
          },
          'hide-search': true,
          columns: [{
            column: 'id',
            title: 'ID'
          }, {
            column: 'title',
            title: 'Title'
          }],
          crud: {
            create: {
              title: 'Add item to select list',
              fields: {
                id: {
                  type: 'input',
                  input: 'text',
                  "class": 'col-6 pe-0 ps-0',
                  label: 'ID'
                },
                title: {
                  type: 'input',
                  input: 'text',
                  "class": 'col-6 pe-0 ps-0',
                  label: 'Title'
                },
                props: {
                  options: {
                    type: 'row'
                  },
                  fields: {
                    'v-on': Object(_comon__WEBPACK_IMPORTED_MODULE_0__["createEventsDatatableInputForSettingsForm"])('Item events', _api__WEBPACK_IMPORTED_MODULE_1__["default"].VCheckbox.events)
                  }
                }
              }
            }
          }
        },
        decorator: {
          options: {
            formClass: 'ma-0 pa-0'
          },
          fields: {
            label: {
              type: 'input',
              input: 'text',
              label: 'Decorator Label'
            },
            labels: {
              type: 'input',
              input: 'text',
              label: 'Decorator Property Names',
              props: {
                hint: 'comma separated property names'
              }
            }
          }
        },
        props: {
          options: {
            type: 'col',
            formClass: 'ma-0 pa-0'
          },
          fields: {
            "class": Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Items class'),
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          }
        }
      });
    }
  }]);

  return ObjectsListInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/PaginationInput.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/PaginationInput.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TextInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(TextInputSettings, _BaseInputSettings);

  var _super = _createSuper(TextInputSettings);

  function TextInputSettings() {
    _classCallCheck(this, TextInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(TextInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VPagination.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return {
        id: {
          type: 'input',
          input: 'text',
          label: 'ID',
          "class": 'col-12 ma-0 ps-0 pe-0',
          updateKeyCodes: [13]
        },
        "class": {
          type: 'input',
          input: 'text',
          label: 'Class',
          "class": 'col-12 ma-0 ps-0 pe-0'
        },
        hidden: {
          type: 'input',
          input: 'checkbox',
          label: 'Hidden',
          "class": 'col-12 ma-0 ps-0 pe-0'
        },
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VPagination.fields), {}, {
            'total-visible': Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Total Visible')
          })
        }
      };
    }
  }]);

  return TextInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ParagraphInput.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/ParagraphInput.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutocompleteInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AutocompleteInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(AutocompleteInputSettings, _BaseInputSettings);

  var _super = _createSuper(AutocompleteInputSettings);

  function AutocompleteInputSettings() {
    _classCallCheck(this, AutocompleteInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(AutocompleteInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: [{
          id: 'input',
          title: 'Triggerred when Input value is changed'
        }]
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        readonly: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Readonly', 'removes editor buttons from paragraph input and display in view mode'),
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: {}
        }
      });
    }
  }]);

  return AutocompleteInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/RadioGroupInput.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/RadioGroupInput.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioGroupInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var RadioGroupInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(RadioGroupInputSettings, _BaseInputSettings);

  var _super = _createSuper(RadioGroupInputSettings);

  function RadioGroupInputSettings() {
    _classCallCheck(this, RadioGroupInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(RadioGroupInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VRadioGroup.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VRadioGroup.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return RadioGroupInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/RangeInput.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/RangeInput.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RangeInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var RangeInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(RangeInputSettings, _BaseInputSettings);

  var _super = _createSuper(RangeInputSettings);

  function RangeInputSettings() {
    _classCallCheck(this, RangeInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(RangeInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VRangeSlider.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VRangeSlider.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return RangeInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/SelectInput.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/SelectInput.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwitchInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SwitchInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(SwitchInputSettings, _BaseInputSettings);

  var _super = _createSuper(SwitchInputSettings);

  function SwitchInputSettings() {
    _classCallCheck(this, SwitchInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(SwitchInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VSelect.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        objects: {
          type: 'input',
          input: 'datatable',
          label: 'Items',
          "class": 'col-12 ma-0 pa-0',
          props: {
            'disable-pagination': true,
            dense: true,
            'show-select': true
          },
          'hide-search': true,
          columns: [{
            id: 'id',
            label: 'ID'
          }, {
            id: 'title',
            label: 'Title'
          }],
          crud: {
            create: {
              fields: {
                id: {
                  type: 'input',
                  input: 'text',
                  "class": 'col-6 pe-0 ps-0',
                  label: 'ID'
                },
                title: {
                  type: 'input',
                  input: 'text',
                  "class": 'col-6 pe-0 ps-0',
                  label: 'Title'
                }
              }
            }
          }
        },
        multiple: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Multiple'),
        decorator: {
          options: {
            formClass: 'ma-0 pa-0'
          },
          fields: {
            label: {
              type: 'input',
              input: 'text',
              label: 'Decorator Label'
            },
            labels: {
              type: 'input',
              input: 'text',
              label: 'Decorator Property Names',
              props: {
                hint: 'comma separated property names'
              }
            }
          }
        },
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VSelect.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return SwitchInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/SimpleCaptcha.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/SimpleCaptcha.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleCaptchaSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SimpleCaptchaSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(SimpleCaptchaSettings, _BaseInputSettings);

  var _super = _createSuper(SimpleCaptchaSettings);

  function SimpleCaptchaSettings() {
    _classCallCheck(this, SimpleCaptchaSettings);

    return _super.apply(this, arguments);
  }

  _createClass(SimpleCaptchaSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTextField.fields)
        }
      });
    }
  }]);

  return SimpleCaptchaSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/SwitchInput.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/SwitchInput.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwitchInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SwitchInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(SwitchInputSettings, _BaseInputSettings);

  var _super = _createSuper(SwitchInputSettings);

  function SwitchInputSettings() {
    _classCallCheck(this, SwitchInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(SwitchInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VSwitch.events
      }];
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VSwitch.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return SwitchInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/TextInput.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/TextInput.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextInputSettings; });
/* harmony import */ var _comon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comon */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/settings/comon.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api */ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TextInputSettings = /*#__PURE__*/function (_BaseInputSettings) {
  _inherits(TextInputSettings, _BaseInputSettings);

  var _super = _createSuper(TextInputSettings);

  function TextInputSettings() {
    _classCallCheck(this, TextInputSettings);

    return _super.apply(this, arguments);
  }

  _createClass(TextInputSettings, [{
    key: "getInputSlots",
    value: function getInputSlots() {
      return [];
    }
  }, {
    key: "getInputEventGroupsList",
    value: function getInputEventGroupsList() {
      return [{
        id: 'props',
        title: 'Component events',
        events: _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTextField.events
      }];
    }
  }, {
    key: "getInputValidations",
    value: function getInputValidations() {
      return {
        required: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Required'),
        numeric: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('is Numeric'),
        minLength: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Min characters length'),
        maxLength: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Max characters length'),
        mask: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["TextSettings"])('Input mask'),
        removeMask: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Remove mask on dispatch'),
        farsi: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('Farsi/Arabic characters only'),
        ascii: Object(_comon__WEBPACK_IMPORTED_MODULE_0__["CheckboxSettings"])('ASCII characters only')
      };
    }
  }, {
    key: "getInputProperties",
    value: function getInputProperties() {
      return _objectSpread(_objectSpread({}, _comon__WEBPACK_IMPORTED_MODULE_0__["CommonInputEssentials"]), {}, {
        props: {
          options: {
            type: 'row',
            formClass: 'ma-0 pa-0'
          },
          fields: _objectSpread(_objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_1__["default"].VTextField.fields), {}, {
            messages: _comon__WEBPACK_IMPORTED_MODULE_0__["MessagesTab"]
          })
        }
      });
    }
  }]);

  return TextInputSettings;
}(_comon__WEBPACK_IMPORTED_MODULE_0__["BaseInputSettings"]);



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/workspace.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FormJSONBuilder/workspace.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onUploaded: function onUploaded(data) {
      var tree = this.getFormSchemaFromFormJSON(_defineProperty({}, data.schema.id, data.schema));
      this.schema = {
        builder: tree
      };
      this.codeModel = data.code;
      this[this.getFormValuePropName()] = data.values;

      if (data.template && data.template.name) {
        this.template = data.template.name;
        this.schema.builder[0].value.__template = data.template.props;
      }
    },
    getWorkspace: function getWorkspace() {
      var formjson = this.getFormJSONFromSchema(this.schema.builder);
      var rootFieldsRenderer = formjson[this.schema.builder[0].model.id];
      var inputValue = {
        schema: _objectSpread({}, rootFieldsRenderer),
        code: this.codeModel,
        values: this[this.getFormValuePropName()],
        template: {
          name: this.template,
          props: this.schema.builder[0].value ? this.schema.builder[0].value.__template : {}
        }
      };
      return inputValue;
    },
    onDownload: function onDownload() {
      this.startJSONDownload(JSON.stringify(this.getWorkspace(), null, 2))();
    },
    onReset: function onReset() {
      var _this = this;

      this.$refs.confirm.open('Reset', 'Are you sure you want to reset the Schema and Actions?', {
        color: 'red'
      }).then(function (confirm) {
        if (confirm) {
          _this[_this.getFormValuePropName()] = {};
          var tree = _this.field.tree ? _this.field.tree : {
            id: 'formjson',
            type: 'vf-fields-renderer',
            children: []
          };
          _this.schema = {
            builder: [_this.treeModel.parse(JSON.parse(JSON.stringify(tree)))]
          };
          _this.codeModel = '';
          _this.tempate = null;
        }
      });
    },
    onResetValues: function onResetValues() {
      var _this2 = this;

      this.$refs.confirm.open('Reset', 'Are you sure you want to reset Form Values?', {
        color: 'red'
      }).then(function (confirm) {
        if (confirm) {
          var iterate = function iterate(node, valueRef) {
            if (node.children.length > 0) {
              node.children.forEach(function (child) {
                if (valueRef[child.model.id]) {
                  if (child.model.type !== "vf-paragraph-input" && _typeof(valueRef[child.model.id]) !== "object" || Array.isArray(valueRef[child.model.id])) {
                    valueRef[child.model.id] = undefined;
                  } else if (child.children) {
                    iterate(child, valueRef[child.model.id]);
                  }
                }
              });
            }
          }; // iterate on form value, reset all values for types except for paragraph


          iterate(_this2.schema.builder[0], _this2[_this2.getFormValuePropName()]);

          _this2.updateFormJSONInput();
        }
      });
    },
    onCopyToClipBoard: function onCopyToClipBoard(text) {
      function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text; // Avoid scrolling to bottom

        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
      }

      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
      }

      navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
      }, function (err) {
        console.error('Async: Could not copy text: ', err);
      });
    },
    onPasteFromClipboard: function onPasteFromClipboard(resolve) {
      navigator.clipboard.readText().then(resolve);
    }
  }
});

/***/ })

}]);
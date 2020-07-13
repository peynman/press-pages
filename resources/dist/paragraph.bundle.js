(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paragraph"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins */ "./resources/js/Lib/vuetify-formjson/Fields/mixins.js");
/* harmony import */ var _MarkdownInput_AceEditor_ace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownInput/AceEditor/ace */ "./resources/js/Lib/vuetify-formjson/Fields/MarkdownInput/AceEditor/ace.js");
/* harmony import */ var _MarkdownInput_AceEditor_ace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MarkdownInput_AceEditor_ace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MarkdownInput_AceEditor_mode_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownInput/AceEditor/mode-markdown */ "./resources/js/Lib/vuetify-formjson/Fields/MarkdownInput/AceEditor/mode-markdown.js");
/* harmony import */ var _MarkdownInput_AceEditor_mode_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MarkdownInput_AceEditor_mode_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MarkdownInput_AceEditor_theme_eclipse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownInput/AceEditor/theme-eclipse */ "./resources/js/Lib/vuetify-formjson/Fields/MarkdownInput/AceEditor/theme-eclipse.js");
/* harmony import */ var _MarkdownInput_AceEditor_theme_eclipse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MarkdownInput_AceEditor_theme_eclipse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MarkdownInput_MarkdownItColor_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownInput/MarkdownItColor/index */ "./resources/js/Lib/vuetify-formjson/Fields/MarkdownInput/MarkdownItColor/index.js");
/* harmony import */ var _MarkdownInput_mermaid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MarkdownInput/mermaid */ "./resources/js/Lib/vuetify-formjson/Fields/MarkdownInput/mermaid.js");
/* harmony import */ var _MarkdownInput_formjson__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MarkdownInput/formjson */ "./resources/js/Lib/vuetify-formjson/Fields/MarkdownInput/formjson.js");
/* harmony import */ var _MarkdownInput_mathlive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MarkdownInput/mathlive */ "./resources/js/Lib/vuetify-formjson/Fields/MarkdownInput/mathlive.js");
/* harmony import */ var markdown_it_attrs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! markdown-it-attrs */ "./node_modules/markdown-it-attrs/index.js");
/* harmony import */ var markdown_it_attrs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(markdown_it_attrs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
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
// import MathLive from 'dist/mathlive.mjs'











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_10__["VBtn"],
    VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_10__["VIcon"],
    VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_10__["VCard"]
  },
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  name: 'vf-paragraph-input',
  props: {
    id: String,
    field: Object,
    value: {
      type: String,
      "default": function _default() {
        return '';
      }
    }
  },
  data: function data(vm) {
    return {
      dialog: false,
      markdownEditor: null,
      mathfieldEditor: null,
      mathKeyboardVisible: false,
      aceEditor: null,
      aceUpdate: false,
      // break devalue update <=> ace text update loop
      mode: vm.field.readonly ? 'view' : 'editor'
    };
  },
  computed: {
    modeIcon: function modeIcon() {
      return this.mode === 'editor' ? 'mdi-code-braces' : 'mdi-eye';
    }
  },
  methods: {
    toggleVirtualMathKeyboard: function toggleVirtualMathKeyboard(to) {
      if (this.mathfieldEditor) {
        if (this.mathfieldEditor.virtualKeyboardVisible !== to) {
          this.mathfieldEditor.$perform(['toggleVirtualKeyboard']);
        }

        this.mathKeyboardVisible = this.mathfieldEditor.virtualKeyboardVisible;
      }
    },
    insertMathToMarkdown: function insertMathToMarkdown() {
      if (this.mathfieldEditor) {
        this.aceEditor.session.insert(this.aceEditor.getCursorPosition(), '$$' + this.mathfieldEditor.$text() + '$$');
      }
    },
    updateMarkdownText: function updateMarkdownText() {
      var markdownHtml = this.markdownEditor.render(this.devalue);
      var child = this.$refs.editorView.lastElementChild;

      while (child) {
        this.$refs.editorView.removeChild(child);
        child = this.$refs.editorView.lastElementChild;
      }

      this.$refs.editorView.insertAdjacentHTML('beforeend', markdownHtml);

      if (!this.aceUpdate) {
        this.aceEditor.session.setValue(this.devalue);
      } else {
        this.aceUpdate = false;
      }
    }
  },
  watch: {
    devalue: {
      deep: true,
      handler: function handler() {
        this.updateMarkdownText();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.aceEditor = _MarkdownInput_AceEditor_ace__WEBPACK_IMPORTED_MODULE_1___default.a.edit(this.$refs.editorCode, {
      mode: 'ace/mode/markdown',
      selectionStyle: 'text',
      theme: 'ace/theme/eclipse',
      maxLines: Infinity
    });
    this.aceEditor.session.on('change', function (delta) {
      _this.aceUpdate = true;

      _this.$nextTick(function () {
        _this.devalue = _this.aceEditor.session.getValue();

        _this.$emit('input', _this.devalue);
      });
    });
    this.aceEditor.session.setValue(this.devalue); // eslint-disable-next-line new-cap

    this.markdownEditor = new markdown_it__WEBPACK_IMPORTED_MODULE_4___default.a(this.field.markdownProps ? this.field.markdownProps : {});
    this.markdownEditor.use(_MarkdownInput_MarkdownItColor_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
      inline: true
    });
    this.markdownEditor.use(_MarkdownInput_mermaid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      host: this
    });
    this.markdownEditor.use(_MarkdownInput_formjson__WEBPACK_IMPORTED_MODULE_7__["default"], {
      host: this
    });
    this.markdownEditor.use(_MarkdownInput_mathlive__WEBPACK_IMPORTED_MODULE_8__["default"], {
      host: this
    });
    this.markdownEditor.use(markdown_it_attrs__WEBPACK_IMPORTED_MODULE_9___default.a, {
      // optional, these are default options
      leftDelimiter: '{',
      rightDelimiter: '}',
      allowedAttributes: [] // empty array = all attributes are allowed

    }); // init ace editor before calling update

    this.updateMarkdownText();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue?vue&type=template&id=fe246938&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue?vue&type=template&id=fe246938& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      class:
        "vf-input d-flex flex-column flex-grow-1 " +
        (_vm.field.class ? _vm.field.class : "")
    },
    [
      _vm.mode !== "view"
        ? _c("label", [_vm._v(_vm._s(_vm.field.label))])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.field.readonly,
              expression: "!field.readonly"
            }
          ]
        },
        [
          _c(
            "v-btn",
            {
              attrs: { fab: "", small: "", icon: "" },
              on: {
                click: function() {
                  _vm.mode = _vm.mode === "editor" ? "view" : "editor"
                  _vm.toggleVirtualMathKeyboard(
                    _vm.dialog && _vm.mode === "editor"
                  )
                }
              }
            },
            [
              _c("v-icon", { attrs: { small: "" } }, [
                _vm._v(_vm._s(_vm.modeIcon))
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.mode === "view" || _vm.field.readonly,
            expression: "mode === 'view' || field.readonly"
          }
        ],
        ref: "editorView",
        staticClass: "fill-height",
        staticStyle: { width: "100%" }
      }),
      _vm._v(" "),
      _c(
        "v-card",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.mode === "editor" && !_vm.field.readonly,
              expression: "mode === 'editor' && !field.readonly"
            }
          ],
          staticClass: "fill-hight mx-2",
          staticStyle: {
            position: "relative",
            width: "100%",
            "min-height": "100px",
            overflow: "scroll"
          }
        },
        [
          _c("div", {
            ref: "editorCode",
            style:
              "position: absolute; width: 100%; left: 0; right: 0; top: 0; bottom: 0; " +
              (_vm.field.height ? "height: " + _vm.field.height : "")
          })
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/MarkdownInput/mathlive.js":
/*!****************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/MarkdownInput/mathlive.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mathlive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mathlive */ "./node_modules/mathlive/dist/mathlive.mjs");


var MathLivePlugin = function MathLivePlugin(md, pluginOptions) {
  var temp = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
    var token = tokens[idx];
    var code = token.content.trim();

    if (token.info === 'mathlive') {
      var id = ('mathlive-' + Math.random() * Number.MAX_SAFE_INTEGER).substr(0, 20);
      pluginOptions.host.$nextTick(function () {
        mathlive__WEBPACK_IMPORTED_MODULE_0__["default"].renderMathInElement(document.getElementById(id), options.mathlive);
      });
      return "<pre id=\"".concat(id, "\">$$").concat(code, "$$</pre>");
    }

    return temp(tokens, idx, options, env, slf);
  };

  var mathLiveRender = function mathLiveRender(state, silent) {
    var variableStartPos = state.pos;

    if (state.src.charAt(variableStartPos) !== '$') {
      return false;
    }

    variableStartPos++;

    if (state.src.charAt(variableStartPos) !== '$') {
      return false;
    }

    variableStartPos++;
    var variableEnd = state.src.indexOf('$$', variableStartPos);
    var markup = state.src.slice(state.pos, variableStartPos);

    if (variableEnd !== -1) {
      if (!silent) {
        var token = state.push('markdown-it-mathlive', 'span', 0);
        token.content = state.src.slice(variableStartPos, variableEnd - 1);
        token.markdown = markup;
      }

      state.pos = variableEnd + 2;
      return true;
    }

    if (!silent) {
      state.pending += markup;
    }

    state.pos = variableStartPos;
    return true;
  };

  md.inline.ruler.push('markdown-it-mathlive', mathLiveRender, {
    alt: []
  });

  md.renderer.rules['markdown-it-mathlive'] = function (tokens, idx, options, env, slf) {
    var token = tokens[idx];
    var code = token.content.trim();
    var id = ('mathlive-' + Math.random() * Number.MAX_SAFE_INTEGER).substr(0, 20);
    pluginOptions.host.$nextTick(function () {
      mathlive__WEBPACK_IMPORTED_MODULE_0__["default"].renderMathInElement(document.getElementById(id), options.mathlive);
    });
    return "<span id=\"".concat(id, "\">$$").concat(code, "$$</span>");
  };
};

/* harmony default export */ __webpack_exports__["default"] = (MathLivePlugin);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paragraph_vue_vue_type_template_id_fe246938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paragraph.vue?vue&type=template&id=fe246938& */ "./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue?vue&type=template&id=fe246938&");
/* harmony import */ var _Paragraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paragraph.vue?vue&type=script&lang=js& */ "./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Paragraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Paragraph_vue_vue_type_template_id_fe246938___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Paragraph_vue_vue_type_template_id_fe246938___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paragraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Paragraph.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paragraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue?vue&type=template&id=fe246938&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue?vue&type=template&id=fe246938& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paragraph_vue_vue_type_template_id_fe246938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Paragraph.vue?vue&type=template&id=fe246938& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/Paragraph.vue?vue&type=template&id=fe246938&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paragraph_vue_vue_type_template_id_fe246938___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paragraph_vue_vue_type_template_id_fe246938___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
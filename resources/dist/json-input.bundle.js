(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["json-input"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsoneditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsoneditor */ "./node_modules/jsoneditor/index.js");
/* harmony import */ var jsoneditor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsoneditor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins */ "./resources/js/Lib/vuetify-formjson/Fields/mixins.js");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    VDivider: vuetify_lib__WEBPACK_IMPORTED_MODULE_2__["VDivider"],
    VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_2__["VBtn"],
    VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_2__["VIcon"]
  },
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]],
  name: 'vf-json-input',
  props: {
    id: String,
    field: Object,
    value: [Object, String]
  },
  data: function data() {
    return {
      options: {
        mode: 'code'
      },
      editor: null,
      ignoreUpdate: false
    };
  },
  methods: {
    setMode: function setMode(mode) {
      this.options.mode = mode;
      this.editor.setMode(mode);
    }
  },
  watch: {
    devalue: {
      deep: true,
      handler: function handler() {
        var pos = this.editor.getTextSelection();
        this.editor.set(this.devalue);
        this.editor.setTextSelection(pos.start, pos.end);
      }
    }
  },
  mounted: function mounted() {
    var component = this;
    var container = this.$refs.editor;

    var options = _objectSpread(_objectSpread({}, this.options), {}, {
      onChange: function onChange() {
        try {
          this.devalue = component.editor.get();
          this.ignoreUpdate = true;
          component.$emit('input', this.devalue);
        } catch (ex) {// console.error(ex);
        }
      }
    });

    if (container) {
      this.editor = new jsoneditor__WEBPACK_IMPORTED_MODULE_0___default.a(container, options);

      if (this.devalue) {
        if (typeof this.devalue === 'string') {
          this.editor.set(JSON.parse(this.devalue));
        } else {
          this.editor.set(this.devalue);
        }
      } else {
        this.editor.set({});
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue?vue&type=template&id=2491dbd8&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue?vue&type=template&id=2491dbd8& ***!
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
        "vf-input d-flex flex-grow-1 flex-column " +
        (_vm.field.class ? _vm.field.class : "")
    },
    [
      _c(
        "div",
        { staticClass: "d-flex flex-row align-center mb-1" },
        [
          _c(
            "label",
            {
              class:
                _vm.field.props && _vm.field.props.error
                  ? "red--text me-1"
                  : "me-1"
            },
            [_vm._v(_vm._s(_vm.field.label))]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                text: "",
                icon: "",
                color: _vm.options.mode === "code" ? "primary" : "secondary"
              },
              on: {
                click: function($event) {
                  return _vm.setMode("code")
                }
              }
            },
            [
              _c("v-icon", [
                _vm._v(
                  _vm._s(
                    _vm.field.icons && _vm.field.icons.code
                      ? _vm.field.icons.code
                      : "mdi-code-array"
                  )
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                text: "",
                icon: "",
                color: _vm.options.mode === "tree" ? "primary" : "secondary"
              },
              on: {
                click: function($event) {
                  return _vm.setMode("tree")
                }
              }
            },
            [
              _c("v-icon", [
                _vm._v(
                  _vm._s(
                    _vm.field.icons && _vm.field.icons.edit
                      ? _vm.field.icons.edit
                      : "mdi-file-document-edit"
                  )
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                text: "",
                icon: "",
                color: _vm.options.mode === "form" ? "primary" : "secondary"
              },
              on: {
                click: function($event) {
                  return _vm.setMode("form")
                }
              }
            },
            [
              _c("v-icon", [
                _vm._v(
                  _vm._s(
                    _vm.field.icons && _vm.field.icons.view
                      ? _vm.field.icons.view
                      : "mdi-eye"
                  )
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", {
        ref: "editor",
        style:
          "width: 100%; height: " +
          (_vm.field.height ? _vm.field.height : "400px") +
          ";"
      }),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _vm.field.props && _vm.field.props.error
        ? _c(
            "div",
            { staticClass: "d-flex flex-column" },
            _vm._l(_vm.field.props["error-messages"], function(err, i) {
              return _c(
                "div",
                { key: "error-message-" + i, staticClass: "red--text" },
                [_vm._v(_vm._s(err))]
              )
            }),
            0
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JSONInput_vue_vue_type_template_id_2491dbd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSONInput.vue?vue&type=template&id=2491dbd8& */ "./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue?vue&type=template&id=2491dbd8&");
/* harmony import */ var _JSONInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JSONInput.vue?vue&type=script&lang=js& */ "./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JSONInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JSONInput_vue_vue_type_template_id_2491dbd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JSONInput_vue_vue_type_template_id_2491dbd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JSONInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./JSONInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JSONInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue?vue&type=template&id=2491dbd8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue?vue&type=template&id=2491dbd8& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JSONInput_vue_vue_type_template_id_2491dbd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./JSONInput.vue?vue&type=template&id=2491dbd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/JSONInput.vue?vue&type=template&id=2491dbd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JSONInput_vue_vue_type_template_id_2491dbd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JSONInput_vue_vue_type_template_id_2491dbd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["switch"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins */ "./resources/js/Lib/vuetify-formjson/Fields/mixins.js");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
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
    VSwitch: vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["VSwitch"]
  },
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  name: 'vf-switch-input',
  props: {
    id: String,
    field: Object,
    value: [Object, Boolean]
  },
  methods: {
    updateInput: function updateInput() {
      this.$emit('input', this.devalue);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue?vue&type=template&id=2e5def6c&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue?vue&type=template&id=2e5def6c& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-switch",
    _vm._g(
      _vm._b(
        {
          class: "vf-input " + (_vm.field.class ? _vm.field.class : ""),
          attrs: { label: _vm.field.label, "hide-details": "auto" },
          on: { change: _vm.updateInput },
          model: {
            value: _vm.devalue,
            callback: function($$v) {
              _vm.devalue = $$v
            },
            expression: "devalue"
          }
        },
        "v-switch",
        _vm.fieldProps,
        false
      ),
      _vm.eventHandlers
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchInput_vue_vue_type_template_id_2e5def6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=template&id=2e5def6c& */ "./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue?vue&type=template&id=2e5def6c&");
/* harmony import */ var _SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=script&lang=js& */ "./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchInput_vue_vue_type_template_id_2e5def6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchInput_vue_vue_type_template_id_2e5def6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VSwitch: vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_4__["VSwitch"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue?vue&type=template&id=2e5def6c&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue?vue&type=template&id=2e5def6c& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_2e5def6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=template&id=2e5def6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/SwitchInput.vue?vue&type=template&id=2e5def6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_2e5def6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_2e5def6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
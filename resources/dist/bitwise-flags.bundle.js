(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bitwise-flags"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins */ "./resources/js/Lib/vuetify-formjson/Fields/mixins.js");
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  name: 'vf-bitwise-flags-input',
  props: {
    id: String,
    field: Object,
    value: Number
  },
  data: function data() {
    return {
      innerValue: this.getInnerValues()
    };
  },
  methods: {
    getInnerValues: function getInnerValues() {
      var _this$field$objects,
          _this = this;

      var newInner = {};
      (_this$field$objects = this.field.objects) === null || _this$field$objects === void 0 ? void 0 : _this$field$objects.forEach(function (i) {
        if ((_this.value & i.id) !== 0) {
          newInner[i.id] = true;
        }
      });
      return newInner;
    }
  },
  watch: {
    devalue: function devalue() {
      this.innerValue = this.getInnerValues();
    },
    innerValue: {
      deep: true,
      handler: function handler() {
        var flag = 0;

        for (var prop in this.innerValue) {
          if (Object.prototype.hasOwnProperty.call(this.innerValue, prop)) {
            if (this.innerValue[prop]) {
              flag += parseInt(prop);
            }
          }
        }

        this.devalue = flag;
        this.$emit('input', this.devalue);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue?vue&type=template&id=59c3e88a&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue?vue&type=template&id=59c3e88a& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("vf-objects-list-input", {
    staticClass: "mt-2",
    attrs: { field: _vm.field, id: _vm.id + "-bitwise" },
    model: {
      value: _vm.innerValue,
      callback: function($$v) {
        _vm.innerValue = $$v
      },
      expression: "innerValue"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue":
/*!************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BitwiseFlagsInput_vue_vue_type_template_id_59c3e88a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BitwiseFlagsInput.vue?vue&type=template&id=59c3e88a& */ "./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue?vue&type=template&id=59c3e88a&");
/* harmony import */ var _BitwiseFlagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BitwiseFlagsInput.vue?vue&type=script&lang=js& */ "./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BitwiseFlagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BitwiseFlagsInput_vue_vue_type_template_id_59c3e88a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BitwiseFlagsInput_vue_vue_type_template_id_59c3e88a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BitwiseFlagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BitwiseFlagsInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BitwiseFlagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue?vue&type=template&id=59c3e88a&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue?vue&type=template&id=59c3e88a& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BitwiseFlagsInput_vue_vue_type_template_id_59c3e88a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BitwiseFlagsInput.vue?vue&type=template&id=59c3e88a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/BitwiseFlagsInput.vue?vue&type=template&id=59c3e88a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BitwiseFlagsInput_vue_vue_type_template_id_59c3e88a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BitwiseFlagsInput_vue_vue_type_template_id_59c3e88a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
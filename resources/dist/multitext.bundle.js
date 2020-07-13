(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multitext"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins */ "./resources/js/Lib/vuetify-formjson/Fields/mixins.js");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    VTooltip: vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["VTooltip"],
    VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["VBtn"],
    VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["VIcon"]
  },
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  name: 'vf-multitext-input',
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
    return {
      currIndex: 0
    };
  },
  computed: {
    modes: function modes() {
      if (this.field.modes) {
        return this.field.modes;
      }

      return [];
    },
    current: function current() {
      if (this.modes.length > 0 && this.currIndex >= 0) {
        return this.modes[this.currIndex];
      }

      return null;
    },
    appendMode: function appendMode() {
      return this.field.slot ? this.field.slot : 'prepend';
    }
  },
  methods: {
    updateInput: function updateInput() {
      this.$emit('input', this.devalue);
    },
    nextMode: function nextMode() {
      this.currIndex = this.currIndex === this.modes.length - 1 ? 0 : this.currIndex + 1;
    },
    resetValue: function resetValue() {
      var _this = this;

      if (_typeof(this.devalue) === 'object' && this.devalue.id) {
        var indexer = 0;
        this.modes.forEach(function (m) {
          if (m.id === self.devalue.id) {
            _this.currIndex = indexer;
          }

          indexer++;
        });
      }
    }
  },
  watch: {
    value: {
      deep: true,
      handler: function handler() {
        this.devalue = this.value;
        this.resetValue();
      }
    }
  },
  created: function created() {
    this.resetValue();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue?vue&type=template&id=063f665e&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue?vue&type=template&id=063f665e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-text-field",
    _vm._g(
      _vm._b(
        {
          ref: "inputValue",
          class: "vf-input " + (_vm.field.class ? _vm.field.class : ""),
          attrs: { label: _vm.field.label, "hide-details": "auto" },
          on: {
            input: function($event) {
              return _vm.updateInput()
            }
          },
          scopedSlots: _vm._u(
            [
              {
                key: _vm.appendMode,
                fn: function() {
                  return [
                    _c(
                      "v-tooltip",
                      {
                        attrs: { top: "" },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "w70 flex-row",
                                      attrs: {
                                        small: "",
                                        dense: "",
                                        rounded: "",
                                        outlined: "",
                                        color: "secondary"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.nextMode()
                                        }
                                      }
                                    },
                                    on
                                  ),
                                  [
                                    _vm._v(
                                      "\n          " +
                                        _vm._s(
                                          _vm.current.abbr
                                            ? _vm.current.abbr
                                            : _vm.current.title
                                        ) +
                                        "\n          "
                                    ),
                                    _c("v-icon", { attrs: { small: "" } }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.field.icon
                                            ? _vm.field.icon
                                            : "chevron_right"
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.current.title))])
                      ]
                    )
                  ]
                },
                proxy: true
              }
            ],
            null,
            true
          ),
          model: {
            value: _vm.devalue[_vm.current ? _vm.current.id : ""],
            callback: function($$v) {
              _vm.$set(_vm.devalue, _vm.current ? _vm.current.id : "", $$v)
            },
            expression: "devalue[current ? current.id: '']"
          }
        },
        "v-text-field",
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

/***/ "./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultiTextInput_vue_vue_type_template_id_063f665e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiTextInput.vue?vue&type=template&id=063f665e& */ "./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue?vue&type=template&id=063f665e&");
/* harmony import */ var _MultiTextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiTextInput.vue?vue&type=script&lang=js& */ "./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MultiTextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultiTextInput_vue_vue_type_template_id_063f665e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultiTextInput_vue_vue_type_template_id_063f665e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["VTextField"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_7__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiTextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiTextInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiTextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue?vue&type=template&id=063f665e&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue?vue&type=template&id=063f665e& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiTextInput_vue_vue_type_template_id_063f665e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiTextInput.vue?vue&type=template&id=063f665e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/MultiTextInput.vue?vue&type=template&id=063f665e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiTextInput_vue_vue_type_template_id_063f665e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiTextInput_vue_vue_type_template_id_063f665e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
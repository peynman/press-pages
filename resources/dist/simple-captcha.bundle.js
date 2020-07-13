(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["simple-captcha"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["VTextField"]
  },
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  name: "vf-simple-captcha-input",
  props: {
    id: String,
    field: Object,
    value: [Object, String, Array]
  },
  computed: {
    captcha: function captcha() {
      var _this$field$captcha;

      return (_this$field$captcha = this.field.captcha) === null || _this$field$captcha === void 0 ? void 0 : _this$field$captcha.img;
    }
  },
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    onRefreshCode: function onRefreshCode() {
      var _this = this;

      this.loading = true;
      this.axios({
        url: '?refresh',
        data: {}
      }).then(function (response) {
        _this.loading = false;
        var host = _this.$store.state.host;
        var sources = response.data.sources.filter(function (s) {
          return s.path === 'captcha';
        });
        var captcha = sources[0].resource;
        host.$refs.renderer.appendFormValue({
          key: captcha.key
        });
        _this.field.captcha.img = captcha.img;
        _this.devalue = '';
      })["catch"](function (err) {
        _this.loading = false;

        _this.$store.state.host.showSnack(err.message);
      });
    },
    updateInput: function updateInput(ev) {
      if (!this.field.updateKeyCodes || this.field.updateKeyCodes.length === 0 || this.field.updateKeyCodes.includes(ev.keyCode)) {
        // update input on tab/enter pressed
        this.$emit("input", this.devalue);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue?vue&type=template&id=7591925e&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue?vue&type=template&id=7591925e& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
          class: "vf-input " + (_vm.field.class ? _vm.field.class : ""),
          staticStyle: { width: "100%" },
          attrs: { label: _vm.field.label, "hide-details": "auto" },
          nativeOn: {
            keyup: function($event) {
              return _vm.updateInput($event)
            }
          },
          scopedSlots: _vm._u([
            {
              key: "prepend",
              fn: function() {
                return [
                  _c(
                    "v-card",
                    [
                      _c("v-img", {
                        staticClass: "ma-auto",
                        attrs: {
                          src: _vm.captcha,
                          width: "100",
                          height: "36px"
                        }
                      })
                    ],
                    1
                  )
                ]
              },
              proxy: true
            },
            {
              key: "prepend-inner",
              fn: function() {
                return [
                  _c(
                    "v-btn",
                    {
                      staticClass: "ma-auto",
                      attrs: { loading: _vm.loading, icon: "" },
                      on: {
                        click: function($event) {
                          return _vm.onRefreshCode()
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-refresh")])],
                    1
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.devalue,
            callback: function($$v) {
              _vm.devalue = $$v
            },
            expression: "devalue"
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

/***/ "./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue":
/*!********************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SimpleCaptcha_vue_vue_type_template_id_7591925e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleCaptcha.vue?vue&type=template&id=7591925e& */ "./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue?vue&type=template&id=7591925e&");
/* harmony import */ var _SimpleCaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleCaptcha.vue?vue&type=script&lang=js& */ "./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SimpleCaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimpleCaptcha_vue_vue_type_template_id_7591925e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SimpleCaptcha_vue_vue_type_template_id_7591925e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__["VImg"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleCaptcha.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue?vue&type=template&id=7591925e&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue?vue&type=template&id=7591925e& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCaptcha_vue_vue_type_template_id_7591925e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleCaptcha.vue?vue&type=template&id=7591925e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/SimpleCaptcha.vue?vue&type=template&id=7591925e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCaptcha_vue_vue_type_template_id_7591925e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCaptcha_vue_vue_type_template_id_7591925e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
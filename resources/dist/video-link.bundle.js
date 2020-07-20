(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-link"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductVideoLink.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/online-academy/ProductVideoLink.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    session: Object
  },
  computed: {
    isVideoLink: function isVideoLink() {
      return this.session.types.map(function (i) {
        return i.name;
      }).includes('vod_link');
    },
    VodLinkURL: function VodLinkURL() {
      return this.session.data.types.vod_link.url;
    },
    VodLinkWidth: function VodLinkWidth() {
      var _this$session$data$ty;

      return (_this$session$data$ty = this.session.data.types.vod_link.width) !== null && _this$session$data$ty !== void 0 ? _this$session$data$ty : '100%';
    },
    VodLinkHeight: function VodLinkHeight() {
      var _this$session$data$ty2;

      return (_this$session$data$ty2 = this.session.data.types.vod_link.height) !== null && _this$session$data$ty2 !== void 0 ? _this$session$data$ty2 : '390px';
    },
    isYouTube: function isYouTube() {
      return this.session.data.types.vod_link.tag !== 'kavimo';
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductVideoLink.vue?vue&type=template&id=6834bccb&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/online-academy/ProductVideoLink.vue?vue&type=template&id=6834bccb& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.isVideoLink
    ? _c(
        "div",
        [
          _vm.isYouTube
            ? _c("v-lazy", [
                _c("iframe", {
                  attrs: {
                    id: "player",
                    type: "text/html",
                    width: _vm.VodLinkWidth,
                    height: _vm.VodLinkHeight,
                    src: _vm.VodLinkURL,
                    frameborder: "0"
                  }
                })
              ])
            : _c("v-lazy", [
                _c(
                  "div",
                  {
                    staticClass: "kavimo_vis_rp",
                    staticStyle: {
                      position: "relative",
                      "padding-bottom": "56.25%"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "kavimo_vis_rw",
                        staticStyle: {
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          top: "0",
                          left: "0"
                        }
                      },
                      [
                        _c("iframe", {
                          attrs: {
                            width: _vm.VodLinkWidth,
                            height: _vm.VodLinkHeight,
                            src: _vm.VodLinkURL,
                            allowtransparency: "true",
                            frameborder: "0",
                            scrolling: "no",
                            allowfullscreen: "",
                            mozallowfullscreen: "",
                            webkitallowfullscreen: "",
                            oallowfullscreen: "",
                            msallowfullscreen: ""
                          }
                        })
                      ]
                    )
                  ]
                )
              ])
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductVideoLink.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductVideoLink.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductVideoLink_vue_vue_type_template_id_6834bccb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductVideoLink.vue?vue&type=template&id=6834bccb& */ "./resources/js/Lib/online-academy/ProductVideoLink.vue?vue&type=template&id=6834bccb&");
/* harmony import */ var _ProductVideoLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductVideoLink.vue?vue&type=script&lang=js& */ "./resources/js/Lib/online-academy/ProductVideoLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VLazy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VLazy */ "./node_modules/vuetify/lib/components/VLazy/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductVideoLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductVideoLink_vue_vue_type_template_id_6834bccb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductVideoLink_vue_vue_type_template_id_6834bccb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VLazy: vuetify_lib_components_VLazy__WEBPACK_IMPORTED_MODULE_4__["VLazy"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/online-academy/ProductVideoLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductVideoLink.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductVideoLink.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVideoLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductVideoLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductVideoLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVideoLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductVideoLink.vue?vue&type=template&id=6834bccb&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductVideoLink.vue?vue&type=template&id=6834bccb& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVideoLink_vue_vue_type_template_id_6834bccb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductVideoLink.vue?vue&type=template&id=6834bccb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductVideoLink.vue?vue&type=template&id=6834bccb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVideoLink_vue_vue_type_template_id_6834bccb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVideoLink_vue_vue_type_template_id_6834bccb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
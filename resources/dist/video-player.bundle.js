(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-player"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/VideoPlayer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/online-academy/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");
/* harmony import */ var videojs_hls_quality_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! videojs-hls-quality-selector */ "./node_modules/videojs-hls-quality-selector/dist/videojs-hls-quality-selector.es.js");
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
  name: 'VfVideoPlayerInput',
  props: {
    field: Object,
    value: Object,
    id: String
  },
  data: function data() {
    return {
      player: null
    };
  },
  computed: {
    videoWidth: function videoWidth() {
      var _this$field$width;

      return (_this$field$width = this.field.width) !== null && _this$field$width !== void 0 ? _this$field$width : '100%';
    },
    videoHeight: function videoHeight() {
      var _this$field$height;

      return (_this$field$height = this.field.height) !== null && _this$field$height !== void 0 ? _this$field$height : '390px';
    },
    videoSrc: function videoSrc() {
      var _this$field$url;

      return (_this$field$url = this.field.url) !== null && _this$field$url !== void 0 ? _this$field$url : '#';
    },
    videoPoster: function videoPoster() {
      var _this$field$poster_ur;

      return (_this$field$poster_ur = this.field.poster_url) !== null && _this$field$poster_ur !== void 0 ? _this$field$poster_ur : '#';
    }
  },
  mounted: function mounted() {
    this.player = Object(video_js__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(this.id, "-videojs-player"));
    this.player.hlsQualitySelector({
      displayCurrentQuality: true
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/VideoPlayer.vue?vue&type=template&id=ea505d32&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/online-academy/VideoPlayer.vue?vue&type=template&id=ea505d32& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "video",
        {
          staticClass: "video-js vjs-sublime-skin",
          style:
            "min-width: " + _vm.videoWidth + "; min-height: " + _vm.videoHeight,
          attrs: {
            id: _vm.id + "-videojs-player",
            controls: "",
            poster: _vm.videoPoster
          }
        },
        [
          _c("source", {
            attrs: { src: _vm.videoSrc, type: "application/x-mpegURL" }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Lib/online-academy/VideoPlayer.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Lib/online-academy/VideoPlayer.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoPlayer_vue_vue_type_template_id_ea505d32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=template&id=ea505d32& */ "./resources/js/Lib/online-academy/VideoPlayer.vue?vue&type=template&id=ea505d32&");
/* harmony import */ var _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=script&lang=js& */ "./resources/js/Lib/online-academy/VideoPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoPlayer_vue_vue_type_template_id_ea505d32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideoPlayer_vue_vue_type_template_id_ea505d32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/online-academy/VideoPlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/online-academy/VideoPlayer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Lib/online-academy/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/VideoPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/online-academy/VideoPlayer.vue?vue&type=template&id=ea505d32&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Lib/online-academy/VideoPlayer.vue?vue&type=template&id=ea505d32& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_ea505d32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPlayer.vue?vue&type=template&id=ea505d32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/VideoPlayer.vue?vue&type=template&id=ea505d32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_ea505d32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_ea505d32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 2:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
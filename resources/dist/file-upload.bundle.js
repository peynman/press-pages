(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["file-upload"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins */ "./resources/js/Lib/vuetify-formjson/Fields/mixins.js");
/* harmony import */ var plupload_js_plupload_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! plupload/js/plupload.dev */ "./node_modules/plupload/js/plupload.dev.js");
/* harmony import */ var plupload_js_plupload_dev__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(plupload_js_plupload_dev__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  name: "vf-file-upload-input",
  props: {
    id: String,
    field: Object,
    value: [Object, String, Array, Number]
  },
  data: function data() {
    return {
      uploader: null,
      files: []
    };
  },
  methods: {
    startUpload: function startUpload() {
      console.log("upload");
      this.uploader.start();
    },
    pauseUpload: function pauseUpload() {
      this.uploader.stop();
    }
  },
  mounted: function mounted() {
    var _this = this;

    var host = this.$store.state.host;
    var opt = {
      url: "/api/file-uploads",
      method: "POST",
      runtime: "html5",
      headers: host.getWebAuthHeaders({}),
      browse_button: window.document.getElementById("".concat(this.id, "-browse")),
      container: window.document.getElementById("".concat(this.id, "-container")),
      filters: {
        mime_types: this.field.filetrs ? this.field.filters : [{
          title: "Image",
          extenstions: "jpg,png,jpeg"
        }],
        prevent_duplicates: true,
        max_file_size: this.field.max_file_size
      },
      init: {
        PostInit: function PostInit(uploader) {
          _this.$emit("init", uploader);
        },
        FilesAdded: function FilesAdded(up, files) {
          if (_this.field.singleFile) {
            _this.files = files;
          } else {
            var _this$files;

            (_this$files = _this.files).push.apply(_this$files, _toConsumableArray(files));
          }

          _this.$emit("added", up, files);
        },
        UploadProgress: function UploadProgress(up, file) {
          console.log(file);

          _this.$emit("progress", up, file);
        },
        FileUploaded: function FileUploaded(up, file, result) {
          _this.$emit("uploaded", up, file, result);
        },
        BeforeUpload: function BeforeUpload(up, file) {
          _this.uploader.settings.multipart_params = _this.field.multipart_params;
          console.log('multipart', _this.uploader.settings);
        },
        UploadComplete: function UploadComplete(up, files) {
          console.log(files);

          _this.$emit("finished", up, files);
        },
        Error: function Error(up, err) {
          console.log('error', err);
          host.showSnack(err);

          _this.$emit("error", up, err);
        }
      }
    };
    this.uploader = new plupload_js_plupload_dev__WEBPACK_IMPORTED_MODULE_1___default.a.Uploader(opt);
    this.uploader.init();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue?vue&type=template&id=469d1417&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue?vue&type=template&id=469d1417& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
        "vf-input " +
        (_vm.field.class ? _vm.field.class : "d-flex flex-column mt-3")
    },
    [
      _c(
        "div",
        {
          staticClass: "d-flex flex-row justify-space-between",
          attrs: { id: _vm.id + "-container" }
        },
        [
          _c("label", [_vm._v(_vm._s(_vm.field.label))]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "v-btn",
                {
                  ref: "browse",
                  attrs: {
                    text: "",
                    small: "",
                    id: _vm.id + "-browse",
                    color: "primary",
                    href: "javascript:;"
                  }
                },
                [_vm._v("Browse")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "", small: "", color: "success" },
                  on: {
                    click: function($event) {
                      return _vm.startUpload()
                    }
                  }
                },
                [_vm._v("Start")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "", small: "", color: "warning" },
                  on: {
                    click: function($event) {
                      return _vm.pauseUpload()
                    }
                  }
                },
                [_vm._v("Pause")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "v-list",
        { attrs: { dense: "" } },
        [
          _vm._l(_vm.files, function(file, index) {
            return _c(
              "v-list-item",
              { key: _vm.id + "-file-" + index },
              [
                _c(
                  "v-list-item-avatar",
                  { attrs: { size: "80" } },
                  [
                    _c(
                      "v-progress-circular",
                      {
                        staticClass: "ma-auto",
                        attrs: { value: file.percent, size: "70" }
                      },
                      [_vm._v("%" + _vm._s(file.percent))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-list-item-content",
                  [
                    _c("v-list-item-title", [_vm._v(_vm._s(file.name))]),
                    _vm._v(" "),
                    _c("v-list-item-subtitle", [
                      _c("strong", [_vm._v("Type")]),
                      _vm._v("\n          " + _vm._s(file.type) + "\n        ")
                    ]),
                    _vm._v(" "),
                    _c("v-list-item-subtitle", [
                      _c("strong", [_vm._v("Size")]),
                      _vm._v(
                        "\n          " + _vm._s(file.size) + " bytes\n        "
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _vm.files.length === 0
            ? _c(
                "v-list-item",
                [_c("v-list-item-title", [_vm._v("فایلی وجود ندرد")])],
                1
              )
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileUpload_vue_vue_type_template_id_469d1417___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileUpload.vue?vue&type=template&id=469d1417& */ "./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue?vue&type=template&id=469d1417&");
/* harmony import */ var _FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileUpload.vue?vue&type=script&lang=js& */ "./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileUpload_vue_vue_type_template_id_469d1417___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileUpload_vue_vue_type_template_id_469d1417___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__["VListItemTitle"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__["VProgressCircular"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue?vue&type=template&id=469d1417&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue?vue&type=template&id=469d1417& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_469d1417___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileUpload.vue?vue&type=template&id=469d1417& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/FileUpload.vue?vue&type=template&id=469d1417&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_469d1417___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_469d1417___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blockly"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../mixins */ "./resources/js/Lib/vuetify-formjson/Fields/mixins.js");
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockly */ "./node_modules/blockly/index.js");
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbox */ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/toolbox.js");
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
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  name: "vf-blockly-input",
  props: {
    id: String,
    field: Object,
    value: [String, Array, Object]
  },
  data: function data() {
    return {
      ignoreChange: false,
      windowWidth: 0,
      windowHeight: 0
    };
  },
  methods: {
    onWindowResize: function onWindowResize(event) {
      var blocklyArea = this.$refs.blockArea;
      var element = blocklyArea;
      var x = 0;
      var y = 0;

      do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
      } while (element);

      var blocklyDiv = this.$refs.blockEditor;
      blocklyDiv.style.left = x + "px";
      blocklyDiv.style.top = y + "px";
      blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
      blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
      blockly__WEBPACK_IMPORTED_MODULE_1___default.a.svgResize(this.blockEditor);
    },
    refreshSize: function refreshSize() {
      this.onWindowResize(null);
    },
    updateBlocks: function updateBlocks() {
      if (this.value && this.value !== "") {
        try {
          blockly__WEBPACK_IMPORTED_MODULE_1___default.a.Xml.clearWorkspaceAndLoadFromXml(blockly__WEBPACK_IMPORTED_MODULE_1___default.a.Xml.textToDom(this.value), this.blockEditor);
        } catch (e) {}
      }
    },
    pasteToWorkspace: function pasteToWorkspace(xml) {
      var dom = blockly__WEBPACK_IMPORTED_MODULE_1___default.a.Xml.textToDom(xml);
      var block = blockly__WEBPACK_IMPORTED_MODULE_1___default.a.Xml.domToBlock(dom, this.blockEditor);
      console.log("domToWorkspace", dom, block);
      blockly__WEBPACK_IMPORTED_MODULE_1___default.a.Events.fire(new blockly__WEBPACK_IMPORTED_MODULE_1___default.a.Events.Create(block));
      this.refreshSize();
    }
  },
  mounted: function mounted() {
    var _this = this;

    var blockContainer = this.$refs.blockEditor;

    if (blockContainer) {
      var BlocklyToolbox = Object(_toolbox__WEBPACK_IMPORTED_MODULE_2__["default"])(blockly__WEBPACK_IMPORTED_MODULE_1___default.a, {
        blocks: this.field.blocks ? this.field.blocks : null
      });
      this.blockEditor = blockly__WEBPACK_IMPORTED_MODULE_1___default.a.inject(blockContainer, {
        toolbox: BlocklyToolbox,
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2
        }
      });
      this.blockEditor.addChangeListener(function (event) {
        if (event.element === "click" && event.blockId) {
          var block = _this.blockEditor.getBlockById(event.blockId);

          var blockDom = blockly__WEBPACK_IMPORTED_MODULE_1___default.a.Xml.blockToDom(block);

          _this.$emit("selection", blockly__WEBPACK_IMPORTED_MODULE_1___default.a.Xml.domToText(blockDom));
        }

        var dom = blockly__WEBPACK_IMPORTED_MODULE_1___default.a.Xml.workspaceToDom(_this.blockEditor);
        _this.devalue = blockly__WEBPACK_IMPORTED_MODULE_1___default.a.Xml.domToText(dom);

        _this.$emit("input", _this.devalue);
      });

      if (this.value && this.value !== "") {
        try {
          blockly__WEBPACK_IMPORTED_MODULE_1___default.a.Xml.clearWorkspaceAndLoadFromXml(blockly__WEBPACK_IMPORTED_MODULE_1___default.a.Xml.textToDom(this.value), this.blockEditor);
        } catch (e) {}
      }

      blockly__WEBPACK_IMPORTED_MODULE_1___default.a.svgResize(this.blockEditor);
    }

    this.$nextTick(function () {
      window.addEventListener("resize", this.onWindowResize);
      this.onWindowResize();
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue?vue&type=template&id=61a3ff0a&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue?vue&type=template&id=61a3ff0a& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
        "vf-input vf-blockly-input d-flex flex-column " +
        (_vm.field.class ? _vm.field.class : "")
    },
    [
      _c("label", [_vm._v(_vm._s(_vm.field.label))]),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "blockArea",
          staticClass: "fill-height",
          staticStyle: { width: "100%", "min-height": "500px", height: "100%" }
        },
        [_c("div", { ref: "blockEditor" })]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blockly_vue_vue_type_template_id_61a3ff0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blockly.vue?vue&type=template&id=61a3ff0a& */ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue?vue&type=template&id=61a3ff0a&");
/* harmony import */ var _Blockly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blockly.vue?vue&type=script&lang=js& */ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Blockly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blockly_vue_vue_type_template_id_61a3ff0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blockly_vue_vue_type_template_id_61a3ff0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blockly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blockly.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blockly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue?vue&type=template&id=61a3ff0a&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue?vue&type=template&id=61a3ff0a& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blockly_vue_vue_type_template_id_61a3ff0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blockly.vue?vue&type=template&id=61a3ff0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/Blockly/Blockly.vue?vue&type=template&id=61a3ff0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blockly_vue_vue_type_template_id_61a3ff0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blockly_vue_vue_type_template_id_61a3ff0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
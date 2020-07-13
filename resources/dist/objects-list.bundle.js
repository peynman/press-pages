(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["objects-list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins */ "./resources/js/Lib/vuetify-formjson/Fields/mixins.js");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VCheckbox: vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["VCheckbox"]
  },
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins__WEBPACK_IMPORTED_MODULE_0__["DecoratableComponent"]],
  name: "vf-objects-list-input",
  props: {
    id: String,
    field: Object,
    value: {
      type: [Object, Array],
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    var checkedIds = {};

    if (this.field.objects) {
      this.field.objects.forEach(function (o) {
        checkedIds[o.id] = false;
      });
    }

    if (this.value) {
      if (Array.isArray(this.value)) {
        this.value.forEach(function (v) {
          checkedIds[v.id] = true;
        });
      } else {
        for (var p in this.value) {
          var v = this.value[p];

          if (_typeof(v) === "object") {
            checkedIds[v.id] = true;
          } else {
            checkedIds[p] = v;
          }
        }
      }
    }

    return {
      checkedIds: checkedIds
    };
  },
  methods: {
    getProps: function getProps(item) {
      return _objectSpread({}, item.props ? item.props : {});
    },
    getEvents: function getEvents(item) {
      return _objectSpread({}, item.props && item.props["v-on"] ? item.props["v-on"] : {});
    },
    onChanged: function onChanged() {
      var _this = this;

      var values = Array.isArray(this.value) ? [] : {};

      if (this.field.objects) {
        var _this$field$objects;

        (_this$field$objects = this.field.objects) === null || _this$field$objects === void 0 ? void 0 : _this$field$objects.forEach(function (o) {
          if (_this.checkedIds[o[_this.decorator.id]]) {
            if (Array.isArray(values)) {
              values.push(_defineProperty({}, _this.decorator.id, o[_this.decorator.id]));
            } else {
              var _values$o$_this$decor;

              values[o[_this.decorator.id]] = (_values$o$_this$decor = {}, _defineProperty(_values$o$_this$decor, _this.decorator.id, o[_this.decorator.id]), _defineProperty(_values$o$_this$decor, _this.decorator.title, _this.getDecorableLabel(o)), _values$o$_this$decor);
            }
          }
        });
      }

      this.devalue = values;
    }
  },
  watch: {
    devalue: function devalue() {
      this.$emit("input", this.devalue);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue?vue&type=template&id=147da592&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue?vue&type=template&id=147da592& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
        "vf-input d-flex flex-column " +
        (_vm.field.class ? _vm.field.class : "")
    },
    [
      _c(
        "label",
        { class: _vm.field.props && _vm.field.props.error ? "red--text" : "" },
        [_vm._v(_vm._s(_vm.field.label))]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row ma-0" },
        _vm._l(_vm.field.objects, function(item) {
          return _c(
            "v-checkbox",
            _vm._g(
              _vm._b(
                {
                  key: _vm.id + "-checkbox-" + item[_vm.decorator.id],
                  class:
                    "ma-0 pa-0 me-4 " +
                    (_vm.field.props && _vm.field.props.class
                      ? _vm.field.props.class
                      : null),
                  attrs: { label: _vm.getDecorableLabel(item) },
                  on: { change: _vm.onChanged },
                  model: {
                    value: _vm.checkedIds[item[_vm.decorator.id]],
                    callback: function($$v) {
                      _vm.$set(_vm.checkedIds, item[_vm.decorator.id], $$v)
                    },
                    expression: "checkedIds[item[decorator.id]]"
                  }
                },
                "v-checkbox",
                _vm.getProps(item),
                false
              ),
              _vm.getEvents(item)
            )
          )
        }),
        1
      ),
      _vm._v(" "),
      _vm.field.props && _vm.field.props.error
        ? _c(
            "div",
            { staticClass: "d-flex flex-column" },
            _vm._l(_vm.field.props["error-messages"], function(err, index) {
              return _c(
                "div",
                { key: _vm.id + "-error-" + index, staticClass: "red--text" },
                [_vm._v(_vm._s(err))]
              )
            }),
            0
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ObjectsListInput_vue_vue_type_template_id_147da592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectsListInput.vue?vue&type=template&id=147da592& */ "./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue?vue&type=template&id=147da592&");
/* harmony import */ var _ObjectsListInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectsListInput.vue?vue&type=script&lang=js& */ "./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ObjectsListInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ObjectsListInput_vue_vue_type_template_id_147da592___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ObjectsListInput_vue_vue_type_template_id_147da592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_4__["VCheckbox"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectsListInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ObjectsListInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectsListInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue?vue&type=template&id=147da592&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue?vue&type=template&id=147da592& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectsListInput_vue_vue_type_template_id_147da592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ObjectsListInput.vue?vue&type=template&id=147da592& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/ObjectsListInput.vue?vue&type=template&id=147da592&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectsListInput_vue_vue_type_template_id_147da592___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectsListInput_vue_vue_type_template_id_147da592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
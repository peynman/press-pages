(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fields-renderer"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VRow: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VRow"],
    VCol: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VCol"],
    VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VCard"],
    VCardActions: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VCardActions"],
    VCardText: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VCardText"],
    VCardTitle: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VCardTitle"],
    VList: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VList"],
    VListItem: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VListItem"],
    VListItemTitle: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VListItemTitle"],
    VListItemContent: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VListItemContent"],
    VCarousel: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VCarousel"],
    VCarouselItem: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VCarouselItem"],
    VSlideGroup: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VSlideGroup"],
    VSlideItem: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VSlideItem"]
  },
  name: "vf-fields-renderer",
  props: {
    id: String,
    fields: [Object, Array],
    value: {
      type: [Object, Array],
      "default": function _default() {
        return {};
      }
    },
    options: Object,
    onUpdated: Function
  },
  data: function data() {
    var wrapProps = this.options && this.options.wrap && this.options.wrap.props ? this.options.wrap.props : {};
    var wrapInnerProps = {};

    if (typeof wrapProps === "string") {
      try {
        wrapProps = JSON.parse(wrapProps);
      } catch (e) {
        wrapProps = {};
      }
    }

    return {
      devalue: this.value ? this.value : {},
      wrapProps: wrapProps,
      wrapInnerProps: wrapInnerProps
    };
  },
  computed: {
    visibleFields: function visibleFields() {
      var filter = function filter(obj, predicate) {
        var result = {};
        var key;

        for (key in obj) {
          if (obj[key] && !predicate(obj[key])) {
            result[key] = obj[key];
          }
        }

        return result;
      };

      return filter(this.fields, function (i) {
        return i.hidden === true;
      });
    }
  },
  watch: {
    devalue: {
      deep: true,
      handler: function handler() {
        if (this.onUpdated) {
          this.onUpdated(this.devalue);
        }

        if (this.options && this.options["v-on"] && this.options["v-on"].input) {
          this.options["v-on"].input(this.devalue);
        }

        this.$emit("input", this.devalue);
      }
    },
    value: {
      deep: true,
      handler: function handler() {
        if (this.value) {
          this.devalue = this.value;
        } else {
          this.devalue = {};
        }
      }
    }
  },
  methods: {
    getRootComponent: function getRootComponent() {
      if (this.options) {
        switch (this.options.type) {
          case "col":
            return vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VCol"];

          case "component":
            return this.options.component;
        }
      }

      return vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VRow"];
    },
    getRootComponentProps: function getRootComponentProps() {
      if (this.options) {
        if (this.options.props) {
          return this.options.props;
        }
      }

      return {};
    },
    isVisibleField: function isVisibleField(field) {
      return field.visible !== false;
    },
    getComponentPropsForField: function getComponentPropsForField(field, key) {
      if (!field.type || field.type === "row" || field.type === "col") {
        return {
          fields: field.fields,
          options: _objectSpread({
            type: field.type ? field.type : "row",
            props: field.props
          }, field.options)
        };
      }

      var props = {
        field: _objectSpread({}, field),
        id: "".concat(this.id, "-field-").concat(key)
      };

      if (this.options) {
        if (this.options["class"]) {
          props.field["class"] = this.options["class"] + (props.field["class"] ? " " + props.field["class"] : "");
        }

        if (this.options.props) {
          props.field.props = _objectSpread(_objectSpread({}, this.options.props), props.field.props ? props.field.props : {});
        }
      }

      return props;
    },
    getComponentForField: function getComponentForField(field) {
      if (field.type === "input" && field.input) {
        return "vf-".concat(field.input, "-input");
      } else if (field.type === "group" && field.group) {
        return "vf-group-".concat(field.group);
      } else if (field.type === "component") {
        return field.component;
      } else if (field.fields) {
        return "vf-fields-renderer";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue?vue&type=template&id=4ecaf396&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue?vue&type=template&id=4ecaf396& ***!
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
    _vm.getRootComponent(),
    _vm._b(
      {
        tag: "component",
        class:
          "" +
          (_vm.options && _vm.options.formClass ? _vm.options.formClass : "")
      },
      "component",
      _vm.getRootComponentProps(),
      false
    ),
    [
      _vm.options &&
      _vm.options.wrap &&
      _vm.options.wrap.enabled !== false &&
      _vm.options.wrap.inside
        ? _c(
            _vm.options.wrap.component,
            _vm._b(
              { tag: "component", class: _vm.options.wrap.class },
              "component",
              _vm.wrapProps,
              false
            ),
            _vm._l(_vm.visibleFields, function(field, key) {
              return _c(
                _vm.options.wrap.inside.component,
                _vm._b(
                  {
                    key: _vm.id + "-properties-" + key,
                    tag: "component",
                    class: _vm.options.wrap.inside.class
                  },
                  "component",
                  _vm.options.wrap.inside.props,
                  false
                ),
                [
                  _c(
                    _vm.getComponentForField(field),
                    _vm._b(
                      {
                        ref: key,
                        refInFor: true,
                        tag: "component",
                        model: {
                          value: _vm.devalue[key],
                          callback: function($$v) {
                            _vm.$set(_vm.devalue, key, $$v)
                          },
                          expression: "devalue[key]"
                        }
                      },
                      "component",
                      _vm.getComponentPropsForField(field),
                      false
                    )
                  )
                ],
                1
              )
            }),
            1
          )
        : _vm._l(_vm.visibleFields, function(field, key) {
            return _c(
              _vm.getComponentForField(field),
              _vm._b(
                {
                  key: _vm.id + "-properties-" + key,
                  ref: key,
                  refInFor: true,
                  tag: "component",
                  model: {
                    value: _vm.devalue[key],
                    callback: function($$v) {
                      _vm.$set(_vm.devalue, key, $$v)
                    },
                    expression: "devalue[key]"
                  }
                },
                "component",
                _vm.getComponentPropsForField(field),
                false
              )
            )
          })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FieldsRenderer_vue_vue_type_template_id_4ecaf396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldsRenderer.vue?vue&type=template&id=4ecaf396& */ "./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue?vue&type=template&id=4ecaf396&");
/* harmony import */ var _FieldsRenderer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldsRenderer.vue?vue&type=script&lang=js& */ "./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FieldsRenderer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FieldsRenderer_vue_vue_type_template_id_4ecaf396___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FieldsRenderer_vue_vue_type_template_id_4ecaf396___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsRenderer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FieldsRenderer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsRenderer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue?vue&type=template&id=4ecaf396&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue?vue&type=template&id=4ecaf396& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsRenderer_vue_vue_type_template_id_4ecaf396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FieldsRenderer.vue?vue&type=template&id=4ecaf396& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/vuetify-formjson/Fields/FieldsRenderer.vue?vue&type=template&id=4ecaf396&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsRenderer_vue_vue_type_template_id_4ecaf396___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsRenderer_vue_vue_type_template_id_4ecaf396___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
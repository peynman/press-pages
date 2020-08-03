(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-childrens-card1"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductSessionTitle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductSessionTitle.vue */ "./resources/js/Lib/online-academy/ProductSessionTitle.vue");
/* harmony import */ var _ProductSessionContent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductSessionContent.vue */ "./resources/js/Lib/online-academy/ProductSessionContent.vue");
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
  name: "VfProductChildrensCardInput",
  components: {
    ProductSessionTitle: _ProductSessionTitle_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProductSessionContent: _ProductSessionContent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [],
  props: {
    field: Object,
    value: Object,
    id: String
  },
  data: function data(vm) {
    return {};
  },
  computed: {
    sessions: function sessions() {
      if (this.field.children) {
        return this.field.children.filter(function (child) {
          return child.types.map(function (t) {
            return t.name;
          }).includes('session');
        }).sort(function (a, b) {
          return a.priority;
        }).map(function (c) {
          return _objectSpread({}, c);
        });
      }

      return [];
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductSessionContent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/online-academy/ProductSessionContent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    session: Object,
    id: String
  },
  computed: {
    fileUpload: function fileUpload() {
      return {
        label: 'ارسال تکلیف',
        url: '/api/course-session/' + this.session.id + '/upload-form',
        multipart_params: {}
      };
    },
    hasForm: function hasForm() {
      var _this$session$data$ty;

      return (_this$session$data$ty = this.session.data.types.session) === null || _this$session$data$ty === void 0 ? void 0 : _this$session$data$ty.sendForm;
    },
    contents: function contents() {
      var getSessionContent = function getSessionContent(session) {
        var _session$data$types, _session$data$types2, _session$data$types3, _session$data$types4, _session$data$types5, _session$data$types5$, _session$data$types7, _session$data$types7$, _session$data$types9, _session$data$types10, _session$data$types11;

        var contents = [];

        for (var t in session.types) {
          var type = session.types[t];

          switch (type.name) {
            case 'vod_link':
              contents.push({
                component: 'vf-product-video-link-input',
                props: {
                  field: {
                    label: session.data.title,
                    url: (_session$data$types = session.data.types) === null || _session$data$types === void 0 ? void 0 : _session$data$types.vod_link.url,
                    width: (_session$data$types2 = session.data.types) === null || _session$data$types2 === void 0 ? void 0 : _session$data$types2.vod_link.width,
                    height: (_session$data$types3 = session.data.types) === null || _session$data$types3 === void 0 ? void 0 : _session$data$types3.vod_link.height,
                    isYoutube: ((_session$data$types4 = session.data.types) === null || _session$data$types4 === void 0 ? void 0 : _session$data$types4.vod_link.tag) !== 'kavimo'
                  },
                  id: 'session-' + session.id + '-v-link'
                }
              });
              break;

            case 'vod_hls':
              contents.push({
                component: 'vf-video-player-input',
                props: {
                  field: _objectSpread({
                    label: session.data.title,
                    url: '/vod/' + session.id + '/link/' + session.data.types.vod_hls.file_id + '/stream'
                  }, session.data.types.vod_hls),
                  id: 'session-' + session.id + '-hls-' + session.data.types.vod_hls.file_id
                }
              });
              break;

            case 'livestream':
              if (((_session$data$types5 = session.data.types) === null || _session$data$types5 === void 0 ? void 0 : (_session$data$types5$ = _session$data$types5.livestream) === null || _session$data$types5$ === void 0 ? void 0 : _session$data$types5$.status) === 'live') {
                var _session$data$types6;

                contents.push({
                  component: 'vf-livesstream-input',
                  props: {
                    field: _objectSpread(_objectSpread({}, session), (_session$data$types6 = session.data.types) === null || _session$data$types6 === void 0 ? void 0 : _session$data$types6.livestream)
                  }
                });
              }

              break;

            case 'ac_meeting':
              if (((_session$data$types7 = session.data.types) === null || _session$data$types7 === void 0 ? void 0 : (_session$data$types7$ = _session$data$types7.ac_meeting) === null || _session$data$types7$ === void 0 ? void 0 : _session$data$types7$.status) === 'live') {
                var _session$data$types8;

                contents.push({
                  component: 'vf-ac-session-link-input',
                  props: {
                    field: _objectSpread(_objectSpread({
                      label: session.data.title
                    }, session), {}, {
                      ac_session_id: session.id
                    }, (_session$data$types8 = session.data.types) === null || _session$data$types8 === void 0 ? void 0 : _session$data$types8.ac_meeting)
                  }
                });
              }

              break;

            case 'file_pdf':
              contents.push({
                component: 'vf-product-download-link-input',
                props: {
                  field: _objectSpread(_objectSpread(_objectSpread({
                    label: 'جزوه'
                  }, session), {}, {
                    session_id: session.id
                  }, (_session$data$types9 = session.data.types) === null || _session$data$types9 === void 0 ? void 0 : _session$data$types9.file_pdf), {}, {
                    icon: 'mdi-file-document-edit',
                    file_type: ((_session$data$types10 = session.data.types) === null || _session$data$types10 === void 0 ? void 0 : (_session$data$types11 = _session$data$types10.file_pdf) === null || _session$data$types11 === void 0 ? void 0 : _session$data$types11.linked_file) ? 'url' : 'pdf'
                  })
                }
              });
              break;
          }
        }

        return contents;
      };

      var contents = getSessionContent(this.session);

      if (this.session.children) {
        this.session.children.forEach(function (child) {
          contents.push.apply(contents, _toConsumableArray(getSessionContent(child)));
        });
      }

      return contents;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductSessionTitle.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/online-academy/ProductSessionTitle.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductActions_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductActions.vue */ "./resources/js/Lib/online-academy/ProductActions.vue");
/* harmony import */ var moment_jalaali__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-jalaali */ "./node_modules/moment-jalaali/index.js");
/* harmony import */ var moment_jalaali__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_jalaali__WEBPACK_IMPORTED_MODULE_1__);
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


Object.getPrototypeOf(moment_jalaali__WEBPACK_IMPORTED_MODULE_1___default.a.localeData())._jMonths = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ProductActions: _ProductActions_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    session: Object,
    id: String
  },
  computed: {
    showParent: function showParent() {
      return this.session.parent != null;
    },
    parentTitle: function parentTitle() {
      var _this$session$parent, _this$session$parent$;

      return (_this$session$parent = this.session.parent) === null || _this$session$parent === void 0 ? void 0 : (_this$session$parent$ = _this$session$parent.data) === null || _this$session$parent$ === void 0 ? void 0 : _this$session$parent$.title;
    },
    badges: function badges() {
      return this.session.types.filter(function (t) {
        return ['vod_hls', 'vod_link', 'file_pdf'].includes(t.name);
      }).map(function (t) {
        return {
          title: t.name === 'file_pdf' ? 'جزوه' : 'فایل ضبظ شده',
          color: 'primary'
        };
      });
    },
    startTime: function startTime() {
      var _this$session$data, _this$session$data$ty, _this$session$data$ty2;

      return moment_jalaali__WEBPACK_IMPORTED_MODULE_1___default()((_this$session$data = this.session.data) === null || _this$session$data === void 0 ? void 0 : (_this$session$data$ty = _this$session$data.types) === null || _this$session$data$ty === void 0 ? void 0 : (_this$session$data$ty2 = _this$session$data$ty.session) === null || _this$session$data$ty2 === void 0 ? void 0 : _this$session$data$ty2.start_at, 'YYYY/MM/DDTHH:mm:ssZ', true);
    },
    endTime: function endTime() {
      var _this$session$data2, _this$session$data2$t, _this$session$data2$t2;

      return moment_jalaali__WEBPACK_IMPORTED_MODULE_1___default()((_this$session$data2 = this.session.data) === null || _this$session$data2 === void 0 ? void 0 : (_this$session$data2$t = _this$session$data2.types) === null || _this$session$data2$t === void 0 ? void 0 : (_this$session$data2$t2 = _this$session$data2$t.session) === null || _this$session$data2$t2 === void 0 ? void 0 : _this$session$data2$t2.start_at, 'YYYY/MM/DDTHH:mm:ssZ', true);
    },
    isStarted: function isStarted() {
      var _this$session$data$ty3, _this$session$data$ty4, _this$session$data$ty5, _this$session$data$ty6;

      return ((_this$session$data$ty3 = this.session.data.types) === null || _this$session$data$ty3 === void 0 ? void 0 : (_this$session$data$ty4 = _this$session$data$ty3.livestream) === null || _this$session$data$ty4 === void 0 ? void 0 : _this$session$data$ty4.status) === 'live' || ((_this$session$data$ty5 = this.session.data.types) === null || _this$session$data$ty5 === void 0 ? void 0 : (_this$session$data$ty6 = _this$session$data$ty5.ac_meeting) === null || _this$session$data$ty6 === void 0 ? void 0 : _this$session$data$ty6.status) === 'live';
    },
    isEnded: function isEnded() {
      var _this$session$data$ty7, _this$session$data$ty8, _this$session$data$ty9, _this$session$data$ty10;

      return ((_this$session$data$ty7 = this.session.data.types) === null || _this$session$data$ty7 === void 0 ? void 0 : (_this$session$data$ty8 = _this$session$data$ty7.livestream) === null || _this$session$data$ty8 === void 0 ? void 0 : _this$session$data$ty8.status) === 'ended' || ((_this$session$data$ty9 = this.session.data.types) === null || _this$session$data$ty9 === void 0 ? void 0 : (_this$session$data$ty10 = _this$session$data$ty9.ac_meeting) === null || _this$session$data$ty10 === void 0 ? void 0 : _this$session$data$ty10.status) === 'ended';
    },
    remainTime: function remainTime() {
      var duration = moment_jalaali__WEBPACK_IMPORTED_MODULE_1___default.a.duration(this.startTime.diff(moment_jalaali__WEBPACK_IMPORTED_MODULE_1___default()())); //Get Days and subtract from duration

      var days = duration.asDays();
      var hours = duration.asHours();

      if (hours > 10) {
        return this.startTime.locale('fa').format('dddd jDD jMMMM ساعت HH:mm');
      }

      var minutes = duration.asMinutes();
      var msg = [];

      if (days > 1) {
        msg.push("".concat(Math.floor(days), " \u0631\u0648\u0632"));
      }

      if (hours > 1) {
        msg.push("".concat(Math.floor(hours), " \u0633\u0627\u0639\u062A"));
      }

      if (minutes > 0) {
        msg.push("".concat(Math.floor(minutes % 60), " \u062F\u0642\u06CC\u0642\u0647"));
      }

      return msg.join(' و ') + (msg.length > 0 ? ' مانده تا شروع کلاس' : '');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.rounded-product-card .v-expansion-panel::before {\n   box-shadow: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive [/\\\\](fa(\\.js)?)$":
/*!***********************************************************!*\
  !*** ./node_modules/moment/locale sync [/\\](fa(\.js)?)$ ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive [/\\\\](fa(\\.js)?)$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductChildrensCard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=template&id=00c51a8c&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=template&id=00c51a8c& ***!
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
    "v-col",
    {
      class: "vf-input " + (_vm.field.class ? _vm.field.class : ""),
      attrs: {
        cols: "12",
        md: _vm.field.md ? _vm.field.md : 8,
        lg: _vm.field.lg ? _vm.field.lg : 9,
        sm: _vm.field.sm ? _vm.field.sm : 12,
        xs: _vm.field.xs ? _vm.field.xs : 12
      }
    },
    [
      _c(
        "v-card",
        { staticClass: "rounded-product-card grey lighten-4 " },
        [
          _vm.field.label
            ? _c("v-card-title", [
                _vm._v("\n      " + _vm._s(_vm.field.label) + "\n    ")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-expansion-panels",
                { staticClass: "elevation-0", attrs: { accordion: "" } },
                _vm._l(_vm.sessions, function(session, i) {
                  return _c(
                    "v-expansion-panel",
                    { key: i, attrs: { readonly: !session.available } },
                    [
                      _c("v-expansion-panel-header", {
                        staticClass: "grey lighten-4",
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var open = ref.open
                                return [
                                  _c("ProductSessionTitle", {
                                    attrs: { session: session }
                                  })
                                ]
                              }
                            },
                            {
                              key: "actions",
                              fn: function() {
                                return [
                                  _c("v-icon", { staticClass: "ms-2" }, [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          session.available
                                            ? "mdi-chevron-down"
                                            : "mdi-lock"
                                        ) +
                                        "\n              "
                                    )
                                  ])
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          true
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel-content",
                        { staticClass: "grey\n            lighten-4" },
                        [
                          _c("ProductSessionContent", {
                            attrs: { session: session }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              !_vm.sessions || _vm.sessions.length === 0
                ? _c("v-label", [
                    _vm._v(
                      "\n        " + _vm._s(_vm.field.emptyMessage) + "\n      "
                    )
                  ])
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductSessionContent.vue?vue&type=template&id=bca5f186&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/online-academy/ProductSessionContent.vue?vue&type=template&id=bca5f186& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "d-flex flex-column" },
    [
      _vm._l(_vm.contents, function(content, index) {
        return _c(
          content.component,
          _vm._b(
            {
              key: _vm.id + "-content-" + index,
              tag: "component",
              staticClass: "mb-2"
            },
            "component",
            content.props,
            false
          )
        )
      }),
      _vm._v(" "),
      _vm.hasForm
        ? _c("vf-file-upload-input", { attrs: { field: _vm.fileUpload } })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductSessionTitle.vue?vue&type=template&id=44e3289c&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Lib/online-academy/ProductSessionTitle.vue?vue&type=template&id=44e3289c& ***!
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
  return _c("div", { staticClass: "d-flex flex-row" }, [
    _c(
      "div",
      { staticClass: "ma-auto d-flex flex-row" },
      [
        _c("div", { staticClass: "d-flex flex-column me-2" }, [
          _vm.showParent
            ? _c("label", { staticStyle: { "margin-bottom": "10px" } }, [
                _vm._v("\n        " + _vm._s(_vm.parentTitle) + "\n      ")
              ])
            : _vm._e(),
          _vm._v("\n      " + _vm._s(_vm.session.data.title) + "\n    ")
        ]),
        _vm._v(" "),
        _vm.isStarted
          ? _c(
              "v-chip",
              {
                staticClass: "green my-auto",
                attrs: { dense: "", small: "", dark: "" }
              },
              [_vm._v("\n      آنلاین\n    ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.isEnded
          ? _c(
              "v-chip",
              {
                staticClass: "secondary my-auto",
                attrs: { dense: "", small: "", dark: "" }
              },
              [_vm._v("\n      برگزار شد\n    ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.startTime.isValid() &&
        !_vm.isEnded &&
        !_vm.isStarted &&
        _vm.remainTime !== ""
          ? _c(
              "v-chip",
              { staticClass: "my-auto", attrs: { dense: "", small: "" } },
              [_vm._v("\n      " + _vm._s(_vm.remainTime) + "\n    ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.badges, function(badge, index) {
          return _c(
            "v-chip",
            {
              key: "$" + _vm.id + "-badges-" + index,
              staticClass: "my-auto",
              attrs: { color: badge.color, small: "", dense: "" }
            },
            [_vm._v("\n      " + _vm._s(badge.title) + "\n    ")]
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "ma-auto d-flex flex-row justify-end",
        staticStyle: { flex: "1" }
      },
      [
        !_vm.session.available
          ? _c("ProductActions", {
              attrs: { product: _vm.session, field: { compact: true } }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductChildrensCard.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductChildrensCard.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductChildrensCard_vue_vue_type_template_id_00c51a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductChildrensCard.vue?vue&type=template&id=00c51a8c& */ "./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=template&id=00c51a8c&");
/* harmony import */ var _ProductChildrensCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductChildrensCard.vue?vue&type=script&lang=js& */ "./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductChildrensCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductChildrensCard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VLabel */ "./node_modules/vuetify/lib/components/VLabel/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductChildrensCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductChildrensCard_vue_vue_type_template_id_00c51a8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductChildrensCard_vue_vue_type_template_id_00c51a8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VExpansionPanel: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_7__["VExpansionPanel"],VExpansionPanelContent: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_7__["VExpansionPanelContent"],VExpansionPanelHeader: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_7__["VExpansionPanelHeader"],VExpansionPanels: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_7__["VExpansionPanels"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VLabel: vuetify_lib_components_VLabel__WEBPACK_IMPORTED_MODULE_9__["VLabel"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/online-academy/ProductChildrensCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductChildrensCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductChildrensCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductChildrensCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductChildrensCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductChildrensCard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductChildrensCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductChildrensCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductChildrensCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductChildrensCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductChildrensCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=template&id=00c51a8c&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=template&id=00c51a8c& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductChildrensCard_vue_vue_type_template_id_00c51a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductChildrensCard.vue?vue&type=template&id=00c51a8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductChildrensCard.vue?vue&type=template&id=00c51a8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductChildrensCard_vue_vue_type_template_id_00c51a8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductChildrensCard_vue_vue_type_template_id_00c51a8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductSessionContent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductSessionContent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductSessionContent_vue_vue_type_template_id_bca5f186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductSessionContent.vue?vue&type=template&id=bca5f186& */ "./resources/js/Lib/online-academy/ProductSessionContent.vue?vue&type=template&id=bca5f186&");
/* harmony import */ var _ProductSessionContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductSessionContent.vue?vue&type=script&lang=js& */ "./resources/js/Lib/online-academy/ProductSessionContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductSessionContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductSessionContent_vue_vue_type_template_id_bca5f186___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductSessionContent_vue_vue_type_template_id_bca5f186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/online-academy/ProductSessionContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductSessionContent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductSessionContent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSessionContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductSessionContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductSessionContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSessionContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductSessionContent.vue?vue&type=template&id=bca5f186&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductSessionContent.vue?vue&type=template&id=bca5f186& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSessionContent_vue_vue_type_template_id_bca5f186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductSessionContent.vue?vue&type=template&id=bca5f186& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductSessionContent.vue?vue&type=template&id=bca5f186&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSessionContent_vue_vue_type_template_id_bca5f186___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSessionContent_vue_vue_type_template_id_bca5f186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductSessionTitle.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductSessionTitle.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductSessionTitle_vue_vue_type_template_id_44e3289c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductSessionTitle.vue?vue&type=template&id=44e3289c& */ "./resources/js/Lib/online-academy/ProductSessionTitle.vue?vue&type=template&id=44e3289c&");
/* harmony import */ var _ProductSessionTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductSessionTitle.vue?vue&type=script&lang=js& */ "./resources/js/Lib/online-academy/ProductSessionTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductSessionTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductSessionTitle_vue_vue_type_template_id_44e3289c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductSessionTitle_vue_vue_type_template_id_44e3289c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_4__["VChip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Lib/online-academy/ProductSessionTitle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductSessionTitle.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductSessionTitle.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSessionTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductSessionTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductSessionTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSessionTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Lib/online-academy/ProductSessionTitle.vue?vue&type=template&id=44e3289c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Lib/online-academy/ProductSessionTitle.vue?vue&type=template&id=44e3289c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSessionTitle_vue_vue_type_template_id_44e3289c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductSessionTitle.vue?vue&type=template&id=44e3289c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Lib/online-academy/ProductSessionTitle.vue?vue&type=template&id=44e3289c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSessionTitle_vue_vue_type_template_id_44e3289c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSessionTitle_vue_vue_type_template_id_44e3289c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~image-upload"],{

/***/ "./node_modules/@seregpie/claw/Claw.js":
/*!*********************************************!*\
  !*** ./node_modules/@seregpie/claw/Claw.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";function e(t){return void 0===t}function t(){}var o={t:t,n:t,o:t,i:t,e:t,u:t};function l(t,n,o,i){return Math.hypot(o-t,i-n)}var d={mousedown:function(t){this.t(t)},mousemove:function(t){this.n(t)},mouseup:function(t){this.o(t)},touchend:function(t){this.i(t)},touchmove:function(t){this.e(t)},touchstart:function(t){this.u(t)}},n=function(){function t(t,n){var o=this;void 0===n&&(n={});var i=n.delay;void 0===i&&(i=500);var e=n.distance;void 0===e&&(e=1),this.target=t,Object.assign(this,{delay:i,distance:e}),this.c(),this.r={};var u,c,r,s=(u=d,c=function(t){return t.bind(o)},r={},Object.entries(u).forEach(function(t){var n=t[0],o=t[1];r[n]=c(o)}),r),a=s.mousedown,h=s.mousemove,f=s.mouseup,v=s.touchend,m=s.touchmove,p=s.touchstart;this.s={mousedown:a,touchend:v,touchmove:m,touchstart:p},this.a={mousemove:h,mouseup:f}}var n={isIdle:{configurable:!0}};return t.prototype.h=function(){var i=this;Object.entries(this.s).forEach(function(t){var n=t[0],o=t[1];i.target.addEventListener(n,o)}),Object.entries(this.a).forEach(function(t){var n=t[0],o=t[1];window.addEventListener(n,o)})},t.prototype.f=function(){var i=this;Object.entries(this.s).forEach(function(t){var n=t[0],o=t[1];i.target.removeEventListener(n,o)}),Object.entries(this.a).forEach(function(t){var n=t[0],o=t[1];window.removeEventListener(n,o)})},t.prototype.on=function(t,n){this.isIdle&&this.h(),t=t.toLowerCase();var o=this.r[t];return o||(this.r[t]=o=[]),o.push(n),this},t.prototype.off=function(t,n){if(e(t))this.r={};else if(t=t.toLowerCase(),e(n))delete this.r[t];else{var o=this.r[t];if(o){var i=o.indexOf(n);0<=i&&(o.splice(i,1),o.length||delete this.r[t])}}return this.isIdle&&this.f(),this},t.prototype.trigger=function(t,n){t=t.toLowerCase();var o=this.r[t];return o&&o.forEach(function(t){t(n)}),this},n.isIdle.get=function(){return function(t){for(var n in t)if(o=t,i=n,Object.prototype.hasOwnProperty.call(o,i))return!1;var o,i;return!0}(this.r)},t.prototype.v=function(t){this.m=Object.assign({},o,t)},t.prototype.c=function(){var f,v,m,p,n,d=this,T=function(n){return function(t){t.preventDefault(),0<t.touches.length&&(m=t.touches[0].clientX,p=t.touches[0].clientY),n()}},_=function(n){return function(t){t.preventDefault(),m=t.clientX,p=t.clientY,n()}},b=function(n){return function(t){1===t.which&&_(n)(t)}},t=function(){v=Date.now();var s=m,a=p,h=setTimeout(function(){v=Date.now(),d.trigger("holdStart",{pointerType:f,timeStamp:v,x:s,y:a});var t=v,n=function(){v=Date.now(),d.trigger("holdEnd",{initialTimeStamp:t,pointerType:f,timeStamp:v,x:s,y:a}),d.c()},o=function(){l(s,a,m,p)>=d.distance&&n()},i={};switch(f){case"touch":Object.assign(i,{u:T(n),e:T(o),i:T(n)});break;case"mouse":Object.assign(i,{n:_(o),o:b(n)})}d.v(i)},d.delay),t=function(){if(v=Date.now(),l(s,a,m,p)>=d.distance){clearTimeout(h),d.trigger("panStart",{pointerType:f,timeStamp:v,x:s,y:a});var t=v,n=t,o=s,i=a,e=function(){d.trigger("pan",{initialTimeStamp:t,initialX:s,initialY:a,pointerType:f,previousTimeStamp:n,previousX:o,previousY:i,timeStamp:v,x:m,y:p})};e();var u=function(){v=Date.now(),e(),n=v,o=m,i=p},c=function(){v=Date.now(),d.trigger("panEnd",{initialTimeStamp:t,initialX:s,initialY:a,pointerType:f,timeStamp:v,x:m,y:p}),d.c()},r={};switch(f){case"touch":Object.assign(r,{u:T(c),e:T(u),i:T(c)});break;case"mouse":Object.assign(r,{n:_(u),o:b(c)})}d.v(r)}},n=function(){clearTimeout(h),v=Date.now(),d.trigger("tap",{pointerType:f,timeStamp:v,x:m,y:p}),d.c()},o={};switch(f){case"touch":Object.assign(o,{u:T(function(){clearTimeout(h),d.c()}),e:T(t),i:T(n)});break;case"mouse":Object.assign(o,{n:_(t),o:b(n)})}d.v(o)};this.v({u:(n=function(){f="touch",t()},function(t){1===t.touches.length&&T(n)(t)}),t:b(function(){f="mouse",t()})})},Object.defineProperties(t.prototype,n),t}();return Object.keys(o).forEach(function(t){Object.defineProperty(n.prototype,t,{get:function(){return this.m[t]}})}),n});


/***/ }),

/***/ "./node_modules/vueclaw/VueClaw.js":
/*!*****************************************!*\
  !*** ./node_modules/vueclaw/VueClaw.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(a,b){ true?module.exports=b(__webpack_require__(/*! @seregpie/claw */ "./node_modules/@seregpie/claw/Claw.js")):undefined})(this,function(a){"use strict";a=a&&a.hasOwnProperty("default")?a["default"]:a;var b=new Map,c={name:"Claw",bind:function(c,d){var e=d.arg,f=d.value,g=b.get(c);g||b.set(c,g=new a(c)),g.on(e,f)},update:function(a,c){var d=c.arg,e=c.value,f=b.get(a);f.off(d),f.on(d,e)},unbind:function(a,c){var d=c.arg,e=b.get(a);e.off(d),e.isIdle&&b.delete(a)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.directive(c.name,c),c});


/***/ }),

/***/ "./node_modules/vuetify-image-input/index.js":
/*!***************************************************!*\
  !*** ./node_modules/vuetify-image-input/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! vueclaw */ "./node_modules/vueclaw/VueClaw.js")):undefined}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={functional:!0,render:function(t,e){var i=e.listeners,n=e.parent,a=e.props;return t("VBtn",{class:"ma-1",props:{disabled:n.disabled,flat:!0,icon:!0},on:i},[t("VIcon",{style:a.iconStyle},a.icon)])}};function i(){}var n={data:function(){return{cancel:i,dragging:!1,error:null,failed:!1,file:null,loaded:!1,loading:!1,progress:0,result:null}},methods:{load:function(t){var e,n=this;(e=function(){n.cancel();var e=new FileReader,i=new Promise((function(i,a){e.addEventListener("progress",(function(e){var i=e.loaded;n.progress=i,n.$emit("progress",{file:t,loaded:i})})),e.addEventListener("load",(function(){var a=e.result;Object.assign(n,{loaded:!0,result:a}),n.$emit("load",{file:t,result:a}),i()})),e.addEventListener("abort",(function(){n.$emit("cancel",{file:t}),i()})),e.addEventListener("error",a)}));return e.readAsDataURL(t),Object.assign(n,{cancel:function(){1===e.readyState&&e.abort()},error:null,failed:!1,file:t,loaded:!1,loading:!1,progress:0,result:null}),i},new Promise((function(t){t(e())}))).catch((function(e){Object.assign(n,{error:e,failed:!0}),n.$emit("error",{error:e,file:t})})).finally((function(){Object.assign(n,{cancel:i,loading:!1})}))},onChange:function(t){t.preventDefault();var e=t.target.files;e&&e.length&&this.load(e[0])},onClick:function(t){t.preventDefault();var e=this.$refs.input;e&&(e.value=null,e.click())},onDragEnter:function(t){t.preventDefault(),this.dragging=!0},onDragLeave:function(t){t.preventDefault(),this.dragging=!1},onDragOver:function(t){t.preventDefault()},onDrop:function(t){t.preventDefault(),this.dragging=!1;var e=t.dataTransfer.files;e&&e.length&&this.load(e[0])}},render:function(t){var e=this,i=e.$scopedSlots,n=e.cancel,a=e.dragging,r=e.error,o=e.failed,l=e.file,c=e.loaded,d=e.loading,s=e.onChange,g=e.onClick,u=e.onDragEnter,p=e.onDragLeave,h=e.onDragOver,f=e.onDrop,y=e.progress,m=e.result;return t("div",[t("input",{style:{display:"none"},attrs:{type:"file"},on:{change:s},ref:"input"}),i.default({cancel:n,dragging:a,error:r,failed:o,file:l,loaded:c,loading:d,onClick:g,onDragEnter:u,onDragLeave:p,onDragOver:h,onDrop:f,progress:y,result:m})])}};var a={functional:!0,inject:{theme:{default:{isDark:!1}}},render:function(t,e){var i=e.data,a=e.injections,r=e.listeners,o=e.parent,l=o.disabled,c=o.uploadIcon,d=o.uploadIconStyle,s=a.theme,g=r.load,u=i.style;return t(n,{style:u,scopedSlots:{default:function(e){e.cancel,e.dragging,e.failed,e.loading;var i=e.onClick,n=e.onDragEnter,a=e.onDragLeave,r=e.onDragOver,o=e.onDrop;e.progress;return t("div",Object.assign({},{style:Object.assign({},{alignItems:"center",border:"1px dashed rgba("+(s.isDark?"255,255,255,0.7":"0,0,0,0.54")+")",borderRadius:"6px",display:"flex",height:"100%",justifyContent:"center",width:"100%"},l?{}:{cursor:"pointer"})},l?{}:{on:{click:i,dragenter:n,dragleave:a,dragover:r,drop:o}}),[t("VIcon",{large:!0,style:d},c)])}},on:{load:function(t){var e=t.result;g(e)}}})}};function r(t,e,i){return Math.min(Math.max(t,e),i)}var o={checkeredBackground:function(){return["url('data:image/svg+xml;base64,"+btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill-opacity="0.2"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>')+"')","center center / 16px 16px","repeat","#fff"].join(" ")},computedMaxCroppingLeft:function(){return Math.max(0,this.scaledRotatedInternalImageWidthDifference)},computedMaxCroppingTop:function(){return Math.max(0,this.scaledRotatedInternalImageHeightDifference)},computedMaxScaling:function(){return Math.max(this.imageMaxScaling,this.computedMinScaling)},computedMinCroppingLeft:function(){return Math.min(0,this.scaledRotatedInternalImageWidthDifference)},computedMinCroppingTop:function(){return Math.min(0,this.scaledRotatedInternalImageHeightDifference)},computedMinScaling:function(){switch(this.imageMinScaling){case"cover":return Math.max(this.relativeRotatedInternalImageWidth,this.relativeRotatedInternalImageHeight);case"contain":return Math.min(this.relativeRotatedInternalImageWidth,this.relativeRotatedInternalImageHeight)}return 0},croppingLeft:{get:function(){return Math.round(r(this.scaledRotatedInternalImageWidthDifference*this.dirtyOriginLeft,this.computedMinCroppingLeft,this.computedMaxCroppingLeft))},set:function(t){var e=this.scaledRotatedInternalImageWidthDifference;this.dirtyOriginLeft=e?t/e:.5}},croppingTop:{get:function(){return Math.round(r(this.scaledRotatedInternalImageHeightDifference*this.dirtyOriginTop,this.computedMinCroppingTop,this.computedMaxCroppingTop))},set:function(t){var e=this.scaledRotatedInternalImageHeightDifference;this.dirtyOriginTop=e?t/e:.5}},relativeRotatedInternalImageHeight:function(){return this.imageHeight/this.rotatedInternalImageHeight},relativeRotatedInternalImageWidth:function(){return this.imageWidth/this.rotatedInternalImageWidth},rotatedInternalImageHeight:function(){return this.rotated?this.internalImageWidth:this.internalImageHeight},rotatedInternalImageWidth:function(){return this.rotated?this.internalImageHeight:this.internalImageWidth},scaledRotatedInternalImageHeight:function(){return Math.round(this.scaling*this.rotatedInternalImageHeight)},scaledRotatedInternalImageHeightDifference:function(){return this.imageHeight-this.scaledRotatedInternalImageHeight},scaledRotatedInternalImageWidth:function(){return Math.round(this.scaling*this.rotatedInternalImageWidth)},scaledRotatedInternalImageWidthDifference:function(){return this.imageWidth-this.scaledRotatedInternalImageWidth},scaling:{get:function(){return r(this.dirtyScaling,this.computedMinScaling,this.computedMaxScaling)},set:function(t){this.dirtyScaling=t}},updateImageData:function(){var t=this,e=this,i=e.croppingLeft,n=e.croppingTop,a=e.debounce,r=e.flippedHorizontally,o=e.flippedVertically,l=e.imageBackgroundColor,c=e.imageFormat,d=e.imageHeight,s=e.imageQuality,g=e.imageWidth,u=e.internalImageData,p=e.internalImageHeight,h=e.internalImageWidth,f=e.rotated,y=e.scaling;return setTimeout((function(){var e;if(u){var a=new Image;a.src=u;var m=document.createElement("canvas"),I=m.getContext("2d");m.width=g,m.height=d,l&&(I.fillStyle=l,I.fillRect(0,0,g,d)),I.translate(i,n),I.scale(y,y),f&&(I.translate(p,0),I.rotate(Math.PI/2)),r&&(I.translate(h,0),I.scale(-1,1)),o&&(I.translate(0,p),I.scale(1,-1)),I.drawImage(a,0,0),r&&(I.translate(g,0),I.scale(-1,1)),o&&(I.translate(0,d),I.scale(1,-1)),e=m.toDataURL("image/"+c,s)}else e=null;t.imageData=e}),a)}},l="VImageInput";var c={type:Boolean,default:!1},d={type:String,default:"$vuetify.icons.clear"},s={type:Number,default:0},g={type:Boolean,default:!1},u={type:String,default:"mdi-flip-horizontal"},p={type:String,default:"mdi-flip-vertical"},h={type:Boolean,default:!1},f={type:Boolean,default:!1},y={type:Boolean,default:!1},m={type:String,default:"png"},I={type:Number,default:256},v={type:Number,default:1},C={type:String,default:"cover"},S={type:Number,default:256},w={type:String,default:"rgba(0,0,0,0.5)"},D={type:String,default:"#fff"},b={type:String,default:"4px"},M={type:String,default:"50px"},k={type:Boolean,default:!1},x={type:String,default:"mdi-rotate-right"},H={type:String,default:"mdi-rotate-left"},O={type:String,default:"mdi-upload"},B={clearable:c,clearIcon:d,clearIconStyle:Object,debounce:s,disabled:g,flipHorizontallyIcon:u,flipHorizontallyIconStyle:Object,flipVerticallyIcon:p,flipVerticallyIconStyle:Object,fullHeight:h,fullWidth:f,hideActions:y,imageBackgroundColor:String,imageFormat:m,imageHeight:I,imageMaxScaling:v,imageMinScaling:C,imageQuality:{},imageWidth:S,name:String,overlayBackgroundColor:w,overlayBorderColor:D,overlayBorderWidth:b,overlayPadding:M,readonly:k,rotateClockwiseIcon:x,rotateClockwiseIconStyle:Object,rotateCounterClockwiseIcon:H,rotateCounterClockwiseIconStyle:Object,scalingSliderColor:String,uploadIcon:O,uploadIconStyle:Object,value:String,backgroundColor:{},maxScaling:{},minScaling:{},rotateCounterclockwiseIcon:{},rotateCounterclockwiseIconStyle:{}};var R={name:l,components:{MyActionButton:e,MyClearButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.clearIcon,iconStyle:i.clearIconStyle},on:{click:i.clear}})}},MyFileUpload:a,MyFlipHorizontallyButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.flipHorizontallyIcon,iconStyle:i.flipHorizontallyIconStyle},on:{click:i.flipHorizontally}})}},MyFlipVerticallyButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.flipVerticallyIcon,iconStyle:i.flipVerticallyIconStyle},on:{click:i.flipVertically}})}},MyRotateClockwiseButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.rotateClockwiseIcon,iconStyle:i.rotateClockwiseIconStyle},on:{click:i.rotateClockwise}})}},MyRotateCounterClockwiseButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.rotateCounterClockwiseIcon,iconStyle:i.rotateCounterClockwiseIconStyle},on:{click:i.rotateCounterClockwise}})}},MyScalingSlider:{functional:!0,render:function(t,e){var i=e.parent;return t("VSlider",{class:"mx-2 my-1",props:{color:i.scalingSliderColor,disabled:i.disabled,hideDetails:!0,max:i.computedMaxScaling,min:i.computedMinScaling,step:.001,value:i.scaling},on:{input:i.scaleTo}})}}},directives:{Claw:t},inject:{theme:{default:{isDark:!1}}},props:B,data:function(){return{dirtyOriginLeft:.5,dirtyOriginTop:.5,dirtyScaling:0,flippedHorizontally:!1,flippedVertically:!1,imageData:null,internalImageData:null,internalImageHeight:0,internalImageWidth:0,rotated:!1}},computed:o,watch:{imageData:function(t){this.$emit("input",t)},updateImageData:function(t,e){clearTimeout(e)},value:{handler:function(t){this.load(t)},immediate:!0}},created:function(){var t=this.$props,e=this.constructor.super.util.warn;Object.entries({imageBackgroundColor:"backgroundColor",imageMaxScaling:"maxScaling",imageMinScaling:"minScaling",rotateCounterClockwiseIcon:"rotateCounterclockwiseIcon",rotateCounterClockwiseIconStyle:"rotateCounterclockwiseIconStyle"}).forEach((function(i){var n=i[0],a=i[1];void 0!==t[a]&&e("["+l+"]: The property '"+a+"' has been renamed to '"+n+"'.")}))},methods:{clear:function(){this.internalImageData=null},flipHorizontally:function(){this.rotated?this.flippedVertically=!this.flippedVertically:this.flippedHorizontally=!this.flippedHorizontally,this.dirtyOriginLeft=1-this.dirtyOriginLeft},flipVertically:function(){this.rotated?this.flippedHorizontally=!this.flippedHorizontally:this.flippedVertically=!this.flippedVertically,this.dirtyOriginTop=1-this.dirtyOriginTop},load:function(t){var e=this;if((this.imageData||t)&&this.imageData!==t){var i=new Image;i.addEventListener("load",(function(){var n=i.naturalWidth,a=i.naturalHeight;e.internalImageData=n&&a?t:null,e.internalImageWidth=n,e.internalImageHeight=a,e.flippedHorizontally=!1,e.flippedVertically=!1,e.rotated=!1,e.scaling=0,e.dirtyOriginLeft=.5,e.dirtyOriginTop=.5})),i.src=t}},onPan:function(t){this.croppingLeft+=t.x-t.previousX,this.croppingTop+=t.y-t.previousY},rotateClockwise:function(){this.rotated?(this.rotated=!1,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically):this.rotated=!0;var t=this.dirtyOriginTop;this.dirtyOriginTop=this.dirtyOriginLeft,this.dirtyOriginLeft=1-t},rotateCounterClockwise:function(){this.rotated?this.rotated=!1:(this.rotated=!0,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically);var t=this.dirtyOriginLeft;this.dirtyOriginLeft=this.dirtyOriginTop,this.dirtyOriginTop=1-t},scaleTo:function(t){this.scaling=t}},render:function(t){return t("div",{style:Object.assign({},{display:["-ms-inline-grid","inline-grid"],gridColumns:"1fr auto",gridRows:"1fr auto",gridTemplateColumns:"1fr auto",gridTemplateRows:"1fr auto"},this.fullHeight?{height:"100%"}:{},this.fullWidth?{width:"100%"}:{})},[t("div",{style:{gridColumn:1,gridRow:1,overflow:"hidden",position:"relative"}},[t("div",Object.assign({},{style:Object.assign({},{alignItems:"center",background:this.checkeredBackground,display:"flex",height:"100%",justifyContent:"center",overflow:"hidden",padding:"calc("+this.overlayPadding+" + "+this.overlayBorderWidth+")",position:"relative",width:"100%",zIndex:0},this.internalImageData||this.readonly?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},this.internalImageData?this.disabled||this.readonly?{}:{directives:[{name:"Claw",arg:"pan",value:this.onPan}]}:{}),[t("div",{style:{boxShadow:"0 0 4000px 4000px "+this.overlayBackgroundColor,maxHeight:"100%",maxWidth:"100%",outline:this.overlayBorderWidth+" solid "+this.overlayBorderColor,pointerEvents:"none"}},[t("div",{style:Object.assign({},{height:this.imageHeight+"px",position:"relative",width:this.imageWidth+"px",zIndex:-1},this.imageBackgroundColor?{backgroundColor:this.imageBackgroundColor}:{})},(this.internalImageData?[t("img",{style:{pointerEvents:"none",position:"absolute",transform:["translate("+this.croppingLeft+"px,"+this.croppingTop+"px)","scale("+this.scaling+")"].concat(this.rotated?["translateX("+this.internalImageHeight+"px)","rotate(90deg)"]:[],this.flippedVertically?["translateY("+this.internalImageHeight+"px)","scaleY(-1)"]:[],this.flippedHorizontally?["translateX("+this.internalImageWidth+"px)","scaleX(-1)"]:[]).join(" "),transformOrigin:"0 0"},attrs:{src:this.internalImageData}})]:[]).concat(this.internalImageData&&this.imageData?[t("input",{attrs:{name:this.name,type:"hidden",value:this.imageData}})]:[]))])])].concat(this.internalImageData||this.readonly?[]:[t("MyFileUpload",{style:{bottom:0,left:0,position:"absolute",right:0,top:0},on:{load:this.load}})])),t("div",{style:Object.assign({},{display:"flex",flexDirection:"column",gridColumn:2,gridRow:1,justifyContent:"center"},this.internalImageData?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},(this.clearable?[t("MyClearButton"),t("VSpacer")]:[]).concat(this.hideActions||this.readonly?[]:[t("MyRotateClockwiseButton"),t("MyRotateCounterClockwiseButton"),t("MyFlipHorizontallyButton"),t("MyFlipVerticallyButton")])),t("div",{style:Object.assign({},{gridColumn:1,gridRow:2},this.internalImageData?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},this.hideActions||this.readonly?[]:[t("MyScalingSlider")])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(R.name,R),R}));


/***/ })

}]);
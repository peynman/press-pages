(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{384:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this;var e=t.$createElement;var i=t._self._c||e;return i("div",{class:"vf-input d-flex flex-column "+(t.field.class?t.field.class:"")},[i("label",{staticClass:"ma-1"},[t._v(t._s(t.field.label))]),t._v(" "),i("v-image-input",t._g(t._b({staticStyle:{direction:"ltr"},attrs:{"image-quality":.1},model:{value:t.devalue,callback:function(e){t.devalue=e},expression:"devalue"}},"v-image-input",t.fixedFieldProps,false),t.eventHandlers))],1)};var a=[];var r=i(692);var o=i.n(r);var l=i(124);var c=i(114);var s=i(69);var d=i(61);var u=i(154);var g;function p(t,e,i){if(e in t){Object.defineProperty(t,e,{value:i,enumerable:true,configurable:true,writable:true})}else{t[e]=i}return t}var h={mixins:[l["d"]],components:(g={},p(g,o.a.name,o.a),p(g,"VDivider",c["a"]),p(g,"VBtn",s["a"]),p(g,"VIcon",d["a"]),p(g,"VSlider",u["a"]),g),name:"vf-image-upload-input",props:{id:String,field:Object,value:String},computed:{fixedFieldProps:function t(){var e,i,n;var a=this.field.props;if((e=this.field.props)===null||e===void 0?void 0:e.imageWidth){var r;a.imageWidth=parseInt((r=this.field.props)===null||r===void 0?void 0:r.imageWidth)}if((i=this.field.props)===null||i===void 0?void 0:i.imageMaxScaling){var o;a.imageMaxScaling=parseInt((o=this.field.props)===null||o===void 0?void 0:o.imageMaxScaling)}if((n=this.field.props)===null||n===void 0?void 0:n.imageHeight){var l;a.imageHeight=parseInt((l=this.field.props)===null||l===void 0?void 0:l.imageHeight)}return a}},watch:{devalue:{deep:true,handler:function t(){this.$emit("input",this.devalue)}}}};var f=h;var m=i(27);var v=Object(m["a"])(f,n,a,false,null,null,null);var y=e["default"]=v.exports},692:function(t,e,i){!function(e,n){true?t.exports=n(i(693)):undefined}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={functional:!0,render:function(t,e){var i=e.listeners,n=e.parent,a=e.props;return t("VBtn",{class:"ma-1",props:{disabled:n.disabled,flat:!0,icon:!0},on:i},[t("VIcon",{style:a.iconStyle},a.icon)])}};function i(){}var n={data:function(){return{cancel:i,dragging:!1,error:null,failed:!1,file:null,loaded:!1,loading:!1,progress:0,result:null}},methods:{load:function(t){var e,n=this;(e=function(){n.cancel();var e=new FileReader,i=new Promise((function(i,a){e.addEventListener("progress",(function(e){var i=e.loaded;n.progress=i,n.$emit("progress",{file:t,loaded:i})})),e.addEventListener("load",(function(){var a=e.result;Object.assign(n,{loaded:!0,result:a}),n.$emit("load",{file:t,result:a}),i()})),e.addEventListener("abort",(function(){n.$emit("cancel",{file:t}),i()})),e.addEventListener("error",a)}));return e.readAsDataURL(t),Object.assign(n,{cancel:function(){1===e.readyState&&e.abort()},error:null,failed:!1,file:t,loaded:!1,loading:!1,progress:0,result:null}),i},new Promise((function(t){t(e())}))).catch((function(e){Object.assign(n,{error:e,failed:!0}),n.$emit("error",{error:e,file:t})})).finally((function(){Object.assign(n,{cancel:i,loading:!1})}))},onChange:function(t){t.preventDefault();var e=t.target.files;e&&e.length&&this.load(e[0])},onClick:function(t){t.preventDefault();var e=this.$refs.input;e&&(e.value=null,e.click())},onDragEnter:function(t){t.preventDefault(),this.dragging=!0},onDragLeave:function(t){t.preventDefault(),this.dragging=!1},onDragOver:function(t){t.preventDefault()},onDrop:function(t){t.preventDefault(),this.dragging=!1;var e=t.dataTransfer.files;e&&e.length&&this.load(e[0])}},render:function(t){var e=this,i=e.$scopedSlots,n=e.cancel,a=e.dragging,r=e.error,o=e.failed,l=e.file,c=e.loaded,s=e.loading,d=e.onChange,u=e.onClick,g=e.onDragEnter,p=e.onDragLeave,h=e.onDragOver,f=e.onDrop,m=e.progress,v=e.result;return t("div",[t("input",{style:{display:"none"},attrs:{type:"file"},on:{change:d},ref:"input"}),i.default({cancel:n,dragging:a,error:r,failed:o,file:l,loaded:c,loading:s,onClick:u,onDragEnter:g,onDragLeave:p,onDragOver:h,onDrop:f,progress:m,result:v})])}};var a={functional:!0,inject:{theme:{default:{isDark:!1}}},render:function(t,e){var i=e.data,a=e.injections,r=e.listeners,o=e.parent,l=o.disabled,c=o.uploadIcon,s=o.uploadIconStyle,d=a.theme,u=r.load,g=i.style;return t(n,{style:g,scopedSlots:{default:function(e){e.cancel,e.dragging,e.failed,e.loading;var i=e.onClick,n=e.onDragEnter,a=e.onDragLeave,r=e.onDragOver,o=e.onDrop;e.progress;return t("div",Object.assign({},{style:Object.assign({},{alignItems:"center",border:"1px dashed rgba("+(d.isDark?"255,255,255,0.7":"0,0,0,0.54")+")",borderRadius:"6px",display:"flex",height:"100%",justifyContent:"center",width:"100%"},l?{}:{cursor:"pointer"})},l?{}:{on:{click:i,dragenter:n,dragleave:a,dragover:r,drop:o}}),[t("VIcon",{large:!0,style:s},c)])}},on:{load:function(t){var e=t.result;u(e)}}})}};function r(t,e,i){return Math.min(Math.max(t,e),i)}var o={checkeredBackground:function(){return["url('data:image/svg+xml;base64,"+btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill-opacity="0.2"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>')+"')","center center / 16px 16px","repeat","#fff"].join(" ")},computedMaxCroppingLeft:function(){return Math.max(0,this.scaledRotatedInternalImageWidthDifference)},computedMaxCroppingTop:function(){return Math.max(0,this.scaledRotatedInternalImageHeightDifference)},computedMaxScaling:function(){return Math.max(this.imageMaxScaling,this.computedMinScaling)},computedMinCroppingLeft:function(){return Math.min(0,this.scaledRotatedInternalImageWidthDifference)},computedMinCroppingTop:function(){return Math.min(0,this.scaledRotatedInternalImageHeightDifference)},computedMinScaling:function(){switch(this.imageMinScaling){case"cover":return Math.max(this.relativeRotatedInternalImageWidth,this.relativeRotatedInternalImageHeight);case"contain":return Math.min(this.relativeRotatedInternalImageWidth,this.relativeRotatedInternalImageHeight)}return 0},croppingLeft:{get:function(){return Math.round(r(this.scaledRotatedInternalImageWidthDifference*this.dirtyOriginLeft,this.computedMinCroppingLeft,this.computedMaxCroppingLeft))},set:function(t){var e=this.scaledRotatedInternalImageWidthDifference;this.dirtyOriginLeft=e?t/e:.5}},croppingTop:{get:function(){return Math.round(r(this.scaledRotatedInternalImageHeightDifference*this.dirtyOriginTop,this.computedMinCroppingTop,this.computedMaxCroppingTop))},set:function(t){var e=this.scaledRotatedInternalImageHeightDifference;this.dirtyOriginTop=e?t/e:.5}},relativeRotatedInternalImageHeight:function(){return this.imageHeight/this.rotatedInternalImageHeight},relativeRotatedInternalImageWidth:function(){return this.imageWidth/this.rotatedInternalImageWidth},rotatedInternalImageHeight:function(){return this.rotated?this.internalImageWidth:this.internalImageHeight},rotatedInternalImageWidth:function(){return this.rotated?this.internalImageHeight:this.internalImageWidth},scaledRotatedInternalImageHeight:function(){return Math.round(this.scaling*this.rotatedInternalImageHeight)},scaledRotatedInternalImageHeightDifference:function(){return this.imageHeight-this.scaledRotatedInternalImageHeight},scaledRotatedInternalImageWidth:function(){return Math.round(this.scaling*this.rotatedInternalImageWidth)},scaledRotatedInternalImageWidthDifference:function(){return this.imageWidth-this.scaledRotatedInternalImageWidth},scaling:{get:function(){return r(this.dirtyScaling,this.computedMinScaling,this.computedMaxScaling)},set:function(t){this.dirtyScaling=t}},updateImageData:function(){var t=this,e=this,i=e.croppingLeft,n=e.croppingTop,a=e.debounce,r=e.flippedHorizontally,o=e.flippedVertically,l=e.imageBackgroundColor,c=e.imageFormat,s=e.imageHeight,d=e.imageQuality,u=e.imageWidth,g=e.internalImageData,p=e.internalImageHeight,h=e.internalImageWidth,f=e.rotated,m=e.scaling;return setTimeout((function(){var e;if(g){var a=new Image;a.src=g;var v=document.createElement("canvas"),y=v.getContext("2d");v.width=u,v.height=s,l&&(y.fillStyle=l,y.fillRect(0,0,u,s)),y.translate(i,n),y.scale(m,m),f&&(y.translate(p,0),y.rotate(Math.PI/2)),r&&(y.translate(h,0),y.scale(-1,1)),o&&(y.translate(0,p),y.scale(1,-1)),y.drawImage(a,0,0),r&&(y.translate(u,0),y.scale(-1,1)),o&&(y.translate(0,s),y.scale(1,-1)),e=v.toDataURL("image/"+c,d)}else e=null;t.imageData=e}),a)}},l="VImageInput";var c={type:Boolean,default:!1},s={type:String,default:"$vuetify.icons.clear"},d={type:Number,default:0},u={type:Boolean,default:!1},g={type:String,default:"mdi-flip-horizontal"},p={type:String,default:"mdi-flip-vertical"},h={type:Boolean,default:!1},f={type:Boolean,default:!1},m={type:Boolean,default:!1},v={type:String,default:"png"},y={type:Number,default:256},I={type:Number,default:1},w={type:String,default:"cover"},b={type:Number,default:256},S={type:String,default:"rgba(0,0,0,0.5)"},C={type:String,default:"#fff"},D={type:String,default:"4px"},x={type:String,default:"50px"},O={type:Boolean,default:!1},M={type:String,default:"mdi-rotate-right"},k={type:String,default:"mdi-rotate-left"},H={type:String,default:"mdi-upload"},j={clearable:c,clearIcon:s,clearIconStyle:Object,debounce:d,disabled:u,flipHorizontallyIcon:g,flipHorizontallyIconStyle:Object,flipVerticallyIcon:p,flipVerticallyIconStyle:Object,fullHeight:h,fullWidth:f,hideActions:m,imageBackgroundColor:String,imageFormat:v,imageHeight:y,imageMaxScaling:I,imageMinScaling:w,imageQuality:{},imageWidth:b,name:String,overlayBackgroundColor:S,overlayBorderColor:C,overlayBorderWidth:D,overlayPadding:x,readonly:O,rotateClockwiseIcon:M,rotateClockwiseIconStyle:Object,rotateCounterClockwiseIcon:k,rotateCounterClockwiseIconStyle:Object,scalingSliderColor:String,uploadIcon:H,uploadIconStyle:Object,value:String,backgroundColor:{},maxScaling:{},minScaling:{},rotateCounterclockwiseIcon:{},rotateCounterclockwiseIconStyle:{}};var T={name:l,components:{MyActionButton:e,MyClearButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.clearIcon,iconStyle:i.clearIconStyle},on:{click:i.clear}})}},MyFileUpload:a,MyFlipHorizontallyButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.flipHorizontallyIcon,iconStyle:i.flipHorizontallyIconStyle},on:{click:i.flipHorizontally}})}},MyFlipVerticallyButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.flipVerticallyIcon,iconStyle:i.flipVerticallyIconStyle},on:{click:i.flipVertically}})}},MyRotateClockwiseButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.rotateClockwiseIcon,iconStyle:i.rotateClockwiseIconStyle},on:{click:i.rotateClockwise}})}},MyRotateCounterClockwiseButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.rotateCounterClockwiseIcon,iconStyle:i.rotateCounterClockwiseIconStyle},on:{click:i.rotateCounterClockwise}})}},MyScalingSlider:{functional:!0,render:function(t,e){var i=e.parent;return t("VSlider",{class:"mx-2 my-1",props:{color:i.scalingSliderColor,disabled:i.disabled,hideDetails:!0,max:i.computedMaxScaling,min:i.computedMinScaling,step:.001,value:i.scaling},on:{input:i.scaleTo}})}}},directives:{Claw:t},inject:{theme:{default:{isDark:!1}}},props:j,data:function(){return{dirtyOriginLeft:.5,dirtyOriginTop:.5,dirtyScaling:0,flippedHorizontally:!1,flippedVertically:!1,imageData:null,internalImageData:null,internalImageHeight:0,internalImageWidth:0,rotated:!1}},computed:o,watch:{imageData:function(t){this.$emit("input",t)},updateImageData:function(t,e){clearTimeout(e)},value:{handler:function(t){this.load(t)},immediate:!0}},created:function(){var t=this.$props,e=this.constructor.super.util.warn;Object.entries({imageBackgroundColor:"backgroundColor",imageMaxScaling:"maxScaling",imageMinScaling:"minScaling",rotateCounterClockwiseIcon:"rotateCounterclockwiseIcon",rotateCounterClockwiseIconStyle:"rotateCounterclockwiseIconStyle"}).forEach((function(i){var n=i[0],a=i[1];void 0!==t[a]&&e("["+l+"]: The property '"+a+"' has been renamed to '"+n+"'.")}))},methods:{clear:function(){this.internalImageData=null},flipHorizontally:function(){this.rotated?this.flippedVertically=!this.flippedVertically:this.flippedHorizontally=!this.flippedHorizontally,this.dirtyOriginLeft=1-this.dirtyOriginLeft},flipVertically:function(){this.rotated?this.flippedHorizontally=!this.flippedHorizontally:this.flippedVertically=!this.flippedVertically,this.dirtyOriginTop=1-this.dirtyOriginTop},load:function(t){var e=this;if((this.imageData||t)&&this.imageData!==t){var i=new Image;i.addEventListener("load",(function(){var n=i.naturalWidth,a=i.naturalHeight;e.internalImageData=n&&a?t:null,e.internalImageWidth=n,e.internalImageHeight=a,e.flippedHorizontally=!1,e.flippedVertically=!1,e.rotated=!1,e.scaling=0,e.dirtyOriginLeft=.5,e.dirtyOriginTop=.5})),i.src=t}},onPan:function(t){this.croppingLeft+=t.x-t.previousX,this.croppingTop+=t.y-t.previousY},rotateClockwise:function(){this.rotated?(this.rotated=!1,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically):this.rotated=!0;var t=this.dirtyOriginTop;this.dirtyOriginTop=this.dirtyOriginLeft,this.dirtyOriginLeft=1-t},rotateCounterClockwise:function(){this.rotated?this.rotated=!1:(this.rotated=!0,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically);var t=this.dirtyOriginLeft;this.dirtyOriginLeft=this.dirtyOriginTop,this.dirtyOriginTop=1-t},scaleTo:function(t){this.scaling=t}},render:function(t){return t("div",{style:Object.assign({},{display:["-ms-inline-grid","inline-grid"],gridColumns:"1fr auto",gridRows:"1fr auto",gridTemplateColumns:"1fr auto",gridTemplateRows:"1fr auto"},this.fullHeight?{height:"100%"}:{},this.fullWidth?{width:"100%"}:{})},[t("div",{style:{gridColumn:1,gridRow:1,overflow:"hidden",position:"relative"}},[t("div",Object.assign({},{style:Object.assign({},{alignItems:"center",background:this.checkeredBackground,display:"flex",height:"100%",justifyContent:"center",overflow:"hidden",padding:"calc("+this.overlayPadding+" + "+this.overlayBorderWidth+")",position:"relative",width:"100%",zIndex:0},this.internalImageData||this.readonly?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},this.internalImageData?this.disabled||this.readonly?{}:{directives:[{name:"Claw",arg:"pan",value:this.onPan}]}:{}),[t("div",{style:{boxShadow:"0 0 4000px 4000px "+this.overlayBackgroundColor,maxHeight:"100%",maxWidth:"100%",outline:this.overlayBorderWidth+" solid "+this.overlayBorderColor,pointerEvents:"none"}},[t("div",{style:Object.assign({},{height:this.imageHeight+"px",position:"relative",width:this.imageWidth+"px",zIndex:-1},this.imageBackgroundColor?{backgroundColor:this.imageBackgroundColor}:{})},(this.internalImageData?[t("img",{style:{pointerEvents:"none",position:"absolute",transform:["translate("+this.croppingLeft+"px,"+this.croppingTop+"px)","scale("+this.scaling+")"].concat(this.rotated?["translateX("+this.internalImageHeight+"px)","rotate(90deg)"]:[],this.flippedVertically?["translateY("+this.internalImageHeight+"px)","scaleY(-1)"]:[],this.flippedHorizontally?["translateX("+this.internalImageWidth+"px)","scaleX(-1)"]:[]).join(" "),transformOrigin:"0 0"},attrs:{src:this.internalImageData}})]:[]).concat(this.internalImageData&&this.imageData?[t("input",{attrs:{name:this.name,type:"hidden",value:this.imageData}})]:[]))])])].concat(this.internalImageData||this.readonly?[]:[t("MyFileUpload",{style:{bottom:0,left:0,position:"absolute",right:0,top:0},on:{load:this.load}})])),t("div",{style:Object.assign({},{display:"flex",flexDirection:"column",gridColumn:2,gridRow:1,justifyContent:"center"},this.internalImageData?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},(this.clearable?[t("MyClearButton"),t("VSpacer")]:[]).concat(this.hideActions||this.readonly?[]:[t("MyRotateClockwiseButton"),t("MyRotateCounterClockwiseButton"),t("MyFlipHorizontallyButton"),t("MyFlipVerticallyButton")])),t("div",{style:Object.assign({},{gridColumn:1,gridRow:2},this.internalImageData?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},this.hideActions||this.readonly?[]:[t("MyScalingSlider")])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(T.name,T),T}))},693:function(t,e,i){(function(e,n){true?t.exports=n(i(694)):undefined})(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t["default"]:t;var e=new Map,i={name:"Claw",bind:function(i,n){var a=n.arg,r=n.value,o=e.get(i);o||e.set(i,o=new t(i)),o.on(a,r)},update:function(t,i){var n=i.arg,a=i.value,r=e.get(t);r.off(n),r.on(n,a)},unbind:function(t,i){var n=i.arg,a=e.get(t);a.off(n),a.isIdle&&e.delete(t)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.directive(i.name,i),i}))},694:function(t,e,i){!function(e,i){true?t.exports=i():undefined}(this,(function(){"use strict";function t(t){return void 0===t}function e(){}var i={t:e,n:e,o:e,i:e,e:e,u:e};function n(t,e,i,n){return Math.hypot(i-t,n-e)}var a={mousedown:function(t){this.t(t)},mousemove:function(t){this.n(t)},mouseup:function(t){this.o(t)},touchend:function(t){this.i(t)},touchmove:function(t){this.e(t)},touchstart:function(t){this.u(t)}},r=function(){function e(t,e){var i=this;void 0===e&&(e={});var n=e.delay;void 0===n&&(n=500);var r=e.distance;void 0===r&&(r=1),this.target=t,Object.assign(this,{delay:n,distance:r}),this.c(),this.r={};var o,l,c,s=(o=a,l=function(t){return t.bind(i)},c={},Object.entries(o).forEach((function(t){var e=t[0],i=t[1];c[e]=l(i)})),c),d=s.mousedown,u=s.mousemove,g=s.mouseup,p=s.touchend,h=s.touchmove,f=s.touchstart;this.s={mousedown:d,touchend:p,touchmove:h,touchstart:f},this.a={mousemove:u,mouseup:g}}var r={isIdle:{configurable:!0}};return e.prototype.h=function(){var t=this;Object.entries(this.s).forEach((function(e){var i=e[0],n=e[1];t.target.addEventListener(i,n)})),Object.entries(this.a).forEach((function(t){var e=t[0],i=t[1];window.addEventListener(e,i)}))},e.prototype.f=function(){var t=this;Object.entries(this.s).forEach((function(e){var i=e[0],n=e[1];t.target.removeEventListener(i,n)})),Object.entries(this.a).forEach((function(t){var e=t[0],i=t[1];window.removeEventListener(e,i)}))},e.prototype.on=function(t,e){this.isIdle&&this.h(),t=t.toLowerCase();var i=this.r[t];return i||(this.r[t]=i=[]),i.push(e),this},e.prototype.off=function(e,i){if(t(e))this.r={};else if(e=e.toLowerCase(),t(i))delete this.r[e];else{var n=this.r[e];if(n){var a=n.indexOf(i);0<=a&&(n.splice(a,1),n.length||delete this.r[e])}}return this.isIdle&&this.f(),this},e.prototype.trigger=function(t,e){t=t.toLowerCase();var i=this.r[t];return i&&i.forEach((function(t){t(e)})),this},r.isIdle.get=function(){return function(t){for(var e in t)if(i=t,n=e,Object.prototype.hasOwnProperty.call(i,n))return!1;var i,n;return!0}(this.r)},e.prototype.v=function(t){this.m=Object.assign({},i,t)},e.prototype.c=function(){var t,e,i,a,r,o=this,l=function(t){return function(e){e.preventDefault(),0<e.touches.length&&(i=e.touches[0].clientX,a=e.touches[0].clientY),t()}},c=function(t){return function(e){e.preventDefault(),i=e.clientX,a=e.clientY,t()}},s=function(t){return function(e){1===e.which&&c(t)(e)}},d=function(){e=Date.now();var r=i,d=a,u=setTimeout((function(){e=Date.now(),o.trigger("holdStart",{pointerType:t,timeStamp:e,x:r,y:d});var u=e,g=function(){e=Date.now(),o.trigger("holdEnd",{initialTimeStamp:u,pointerType:t,timeStamp:e,x:r,y:d}),o.c()},p=function(){n(r,d,i,a)>=o.distance&&g()},h={};switch(t){case"touch":Object.assign(h,{u:l(g),e:l(p),i:l(g)});break;case"mouse":Object.assign(h,{n:c(p),o:s(g)})}o.v(h)}),o.delay),g=function(){if(e=Date.now(),n(r,d,i,a)>=o.distance){clearTimeout(u),o.trigger("panStart",{pointerType:t,timeStamp:e,x:r,y:d});var g=e,p=g,h=r,f=d,m=function(){o.trigger("pan",{initialTimeStamp:g,initialX:r,initialY:d,pointerType:t,previousTimeStamp:p,previousX:h,previousY:f,timeStamp:e,x:i,y:a})};m();var v=function(){e=Date.now(),m(),p=e,h=i,f=a},y=function(){e=Date.now(),o.trigger("panEnd",{initialTimeStamp:g,initialX:r,initialY:d,pointerType:t,timeStamp:e,x:i,y:a}),o.c()},I={};switch(t){case"touch":Object.assign(I,{u:l(y),e:l(v),i:l(y)});break;case"mouse":Object.assign(I,{n:c(v),o:s(y)})}o.v(I)}},p=function(){clearTimeout(u),e=Date.now(),o.trigger("tap",{pointerType:t,timeStamp:e,x:i,y:a}),o.c()},h={};switch(t){case"touch":Object.assign(h,{u:l((function(){clearTimeout(u),o.c()})),e:l(g),i:l(p)});break;case"mouse":Object.assign(h,{n:c(g),o:s(p)})}o.v(h)};this.v({u:(r=function(){t="touch",d()},function(t){1===t.touches.length&&l(r)(t)}),t:s((function(){t="mouse",d()}))})},Object.defineProperties(e.prototype,r),e}();return Object.keys(i).forEach((function(t){Object.defineProperty(r.prototype,t,{get:function(){return this.m[t]}})})),r}))}}]);
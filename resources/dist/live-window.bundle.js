(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{c8kn:function(e,i,t){"use strict";t.r(i);function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){o(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}var r={name:"VfLivestreamInput",props:{field:Object,value:Object,id:String},data:function(){return{dialog:!1,openTime:null,boardContent:"",minmized:!1}},computed:{extraPlayers:function(){var e,i=this,t=[];return null===(e=this.field.children)||void 0===e||e.forEach((function(e){var n,o,r,s,l=a(a({},e),null!==(n=null===(o=e.data)||void 0===o||null===(r=o.types)||void 0===r?void 0:r.livestream)&&void 0!==n?n:{});t.push({id:i.id+"-extras-"+e.id,url:l.is_remote?l.key:"/livestream/live/"+l.key+".m3u8",modePlain:!0,autoPlay:!0,modeFrame:!(!l.is_remote||(null===(s=l.key)||void 0===s?void 0:s.endsWith(".m3u8"))),class:"col-12 pa-0 ma-0",height:"320px"})})),t},mainPlayerField:function(){var e;return{id:this.id+"-main-"+this.field.id,url:this.field.is_remote?this.field.key:"/livestream/live/"+this.field.key+".m3u8",modePlain:!0,autoPlay:!0,modeFrame:!(!this.field.is_remote||(null===(e=this.field.key)||void 0===e?void 0:e.endsWith(".m3u8"))),class:"col-12 pa-0 ma-0"}},startTitle:function(){return this.canStart?"ورود به کلاس":"ابتدا در آزمون شرکت کنید"},canStart:function(){var e,i,t,n;if((null===(e=this.field.data)||void 0===e||null===(i=e.types)||void 0===i?void 0:i.azmoon)&&((null===(t=this.field.data)||void 0===t||null===(n=t.types)||void 0===n?void 0:n.azmoon.is_required)&&!this.field.azmoon_result))return!1;return!0}},watch:{dialog:function(){var e=this.$store.state.host;if(this.dialog)this.minmized&&(this.minmized=!1),window.onbeforeunload=function(){return!0},this.openTime=Date.now(),e.axios({url:"/api/course-session/".concat(this.field.id,"/presence-form"),method:"POST",headers:e.getWebAuthHeaders({}),data:{duration:1}}).catch((function(i){e.showSnack(i.message)})),this.$forceUpdate();else if(!this.minmized){window.onbeforeunload=null;var i=Math.abs(this.openTime-Date.now())/1e3;e.axios({url:"/api/course-session/".concat(this.field.id,"/presence-form"),method:"POST",headers:e.getWebAuthHeaders({}),data:{duration:i}}).then((function(i){e.showSnack("حضور شما در کلاس ثبت شد","green")})).catch((function(i){e.showSnack(i.message)}))}},minmized:function(){this.minmized?(window.onbeforeunload=function(){return!0},this.dialog=!1,this.$forceUpdate()):(this.dialog=!0,window.onbeforeunload=null,this.$forceUpdate())}}},s=t("KHd+"),l=t("ZUTo"),d=t.n(l),c=t("gzZi"),m=t("Yq0q"),u=t("FpqX"),v=t("Ey0z"),f=t("todF"),h=t("D9m0"),p=t("jdmY"),y=t("L6Q5"),b=t("r9mn"),g=Object(s.a)(r,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{class:"vf-input "+(e.field.class?e.field.class:"")},[e.minmized?t("v-system-bar",{staticStyle:{position:"fixed",left:"0",right:"0",bottom:"0","z-index":"2"},attrs:{color:"primary",dark:""}},[t("span",[e._v(e._s(e.field.data.title))]),e._v(" "),t("v-spacer"),e._v(" "),t("v-btn",{attrs:{icon:"",small:"",dense:""},on:{click:function(i){e.minmized=!e.minmized}}},[t("v-icon",{attrs:{small:""}},[e._v(e._s(e.minmized?"mdi-window-maximize":"mdi-window-minimize"))])],1),e._v(" "),t("v-btn",{attrs:{icon:"",small:"",dense:"",disabled:e.minmized},on:{click:function(i){e.dialog=!1}}},[t("v-icon",{attrs:{small:""}},[e._v("mdi-close")])],1)],1):e._e(),e._v(" "),t("v-dialog",{staticClass:"grey lighten-4",staticStyle:{width:"100%",height:"100%"},attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(i){var n=i.on,a=i.attrs;return[t("v-btn",e._g(e._b({staticClass:"no-letter-spacing",attrs:{outlined:"",primary:"",rouned:"",disabled:!e.canStart},on:{click:function(i){e.dialog=!0}}},"v-btn",a,!1),n),[t("v-icon",{staticClass:"mx-2"},[e._v("\n                  mdi-google-classroom\n              ")]),e._v(" "+e._s(e.startTitle)+"\n          ")],1)]}}]),model:{value:e.dialog,callback:function(i){e.dialog=i},expression:"dialog"}},[e._v(" "),t("v-system-bar",{directives:[{name:"show",rawName:"v-show",value:!e.minmized,expression:"!minmized"}],attrs:{color:"primary",dark:""}},[t("span",[e._v(e._s(e.field.data.title))]),e._v(" "),t("v-spacer"),e._v(" "),t("v-btn",{attrs:{icon:"",small:"",dense:""},on:{click:function(i){e.minmized=!e.minmized}}},[t("v-icon",{attrs:{small:""}},[e._v(e._s(e.minmized?"mdi-window-maximize":"mdi-window-minimize"))])],1),e._v(" "),t("v-btn",{attrs:{icon:"",small:"",dense:"",disabled:e.minmized},on:{click:function(i){e.dialog=!1}}},[t("v-icon",{attrs:{small:""}},[e._v("mdi-close")])],1)],1),e._v(" "),t("v-lazy",[!e.minmized&&e.dialog?t("v-sheet",{staticClass:"d-flex flex-column"},[t("v-row",{attrs:{"no-gutters":""}},[t("vf-video-player-input",{attrs:{field:e.mainPlayerField,id:e.mainPlayerField.id}})],1),e._v(" "),t("v-row",[t("v-col",{attrs:{cols:"12",xsm:"12",md:"6"}},e._l(e.extraPlayers,(function(i,n){return t("v-col",{key:e.id+"-extra-player-"+n,staticClass:"ma-0 pa-0",attrs:{cols:"12",sm:"12"}},[t("vf-video-player-input",{attrs:{id:i.id,field:i}})],1)})),1),e._v(" "),t("v-col",{attrs:{cols:"12",xsm:"12",md:"6"}},[t("iframe",{attrs:{src:e.field.chat_frame,width:"100%",height:e.field.chat_height?e.field.chat_height:"450",allowtransparency:"yes",allow:"autoplay",frameborder:"0",marginheight:"0",marginwidth:"0",scrolling:"auto"}})])],1)],1):e._e()],1)],1)],1)}),[],!1,null,null,null);i.default=g.exports;d()(g,{VBtn:c.a,VCol:m.a,VDialog:u.a,VIcon:v.a,VLazy:f.a,VRow:h.a,VSheet:p.a,VSpacer:y.a,VSystemBar:b.a})}}]);
//# sourceMappingURL=live-window.bundle.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{167:function(t,e,i){var a={"./fa":128,"./fa.js":128};function r(t){var e=s(t);return i(e)}function s(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id=167},905:function(t,e,i){"use strict";i.r(e);var a=i(127),r=i(628),s=i.n(r),n=i(168),d=i.n(n);i(170);function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={components:{},mixins:[a.d,a.a],name:"vf-report-chart-input",props:{id:String,field:Object,value:[Object,String,Array,Number]},data:function(t){return{data:t.field.data,duration:t.field.default_duration?t.field.default_duration:"1h",window:t.field.default_window?t.field.default_window:"1m",show:!1,loading:!1,autoupdate:!1,durations:[{id:"1m"},{id:"5m"},{id:"10m"},{id:"30m"},{id:"1h"},{id:"3h"},{id:"6h"},{id:"12h"},{id:"1d"},{id:"2d"},{id:"7d"},{id:"15d"},{id:"30d"},{id:"90d"},{id:"180d"},{id:"1y"},{id:"2y"}],windows:[{id:"1s"},{id:"10s"},{id:"30s"},{id:"1m"},{id:"5m"},{id:"10m"},{id:"15m"},{id:"30m"},{id:"1h"},{id:"3h"},{id:"6h"},{id:"12h"},{id:"1d"},{id:"7d"},{id:"30d"}],chart:null,extraFilters:{}}},computed:{datasets:function(){var t=this;if(!this.data)return[];var e=["rgba(54, 162, 235, 0.2)","rgba(255, 99, 132, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],i=["rgba(54, 162, 235, 1)","rgba(255, 99, 132, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"];if(this.field.report_groups&&this.field.report_groups.length>0){var a=this.field.report_groups.split(","),r=[];return a.forEach((function(a){var s={};t.data.map((function(t){s[t[a]]?s[t[a]]+=1:s[t[a]]=1}));var n=0,o=function(s){var o="";if(t.field.labels){var u=t.field.labels.filter((function(e){return e[t.field.report_label_key]==s}));if(u&&u[0]){var c=l({key:s},u[0]);o=t.getDecorableLabel(c)}}r.push({label:o,backgroundColor:e[n%6],borderColor:i[n%6],data:t.data.filter((function(t){return t[a]==s})).map((function(t){return{y:t._value?t._value:0,x:d()(t._time)}}))}),n++};for(var u in s)o(u)})),r}return[{data:this.data.map((function(t){return t._value})),backgroundColor:e,borderColor:i,borderWidth:1}]},labels:function(){var t=this;return this.field.is_x_time?this.data.map((function(t){return t._time})):this.data.map((function(e){if(t.field.labels){var i=t.field.labels.filter((function(i){return i[t.field.report_label_key]==e[t.field.report_item_key]}));if(i&&i[0]){var a=l(l({},e),i[0]);return t.getDecorableLabel(a)}}return e[t.field.report_item_key]}))}},methods:{updateReport:function(){var t=this;this.loading=!0;var e=this.$store.state.host,i=d()(),a=d()();if(this.duration.endsWith("m")){var r=parseInt(this.duration.substr(0,this.duration.length-1));i.add(-1*r,"minute")}else if(this.duration.endsWith("h")){var s=parseInt(this.duration.substr(0,this.duration.length-1));i.add(-1*s,"hour")}else if(this.duration.endsWith("d")){var n=parseInt(this.duration.substr(0,this.duration.length-1));i.add(-1*n,"day")}else if(this.duration.endsWith("s")){var o=parseInt(this.duration.substr(0,this.duration.length-1));i.add(-1*o,"secoonds")}var l,u=this.field.filters?this.extraFilters:{};(this.field.query_filters&&this.field.query_filters.forEach((function(t){u[t.filter]=t.value})),this.field.report_url)&&e.axios({url:this.field.report_url,method:"POST",headers:e.getWebAuthHeaders({}),data:{name:this.field.report_name,from:i.format("Y-MM-DDTH:mm:ssZ"),to:a.format("Y-MM-DDTH:mm:ssZ"),window:this.window,group:null===(l=this.field.group)||void 0===l?void 0:l.split(","),filters:u,func:this.field.func}}).then((function(e){t.loading=!1,t.data=e.data})).catch((function(i){t.loading=!1,e.showSnack(i.message)}))}},watch:{data:function(){this.data&&(this.chart&&this.chart.destroy(),this.chart=new s.a(this.$refs.chart,{type:this.field.report_type,data:{labels:this.labels,datasets:this.datasets},options:{scales:"bar"===this.field.report_type||"line"===this.field.report_type?{xAxes:[{type:"time",time:{unit:this.window.endsWith("d")?"day":this.window.endsWith("h")?"hour":this.window.endsWith("s")?"second":"minute",tooltipFormat:"jYYYY/jMM/jDD, h:mm:ss a",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"jMM/jDD",week:"ll",month:"jYYYY/jMM",quarter:"[Q]Q - jYYYY",year:"jYYYY"}}}]}:{},legend:{display:!0,position:"bottom"}}}))}},mounted:function(){s.a._adapters._date.override({format:function(t,e){return d()(t).locale("fa").format(e)}}),this.updateReport()}},f=i(26),h=i(27),m=i.n(h),p=i(72),v=i(114),b=i(55),_=i(117),w=i(115),g=i(16),y=i(62),x=i(116),j=i(74),O=i(118),k=i(11),C=i(22),Y=Object(f.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{class:"vf-input "+(this.field.class?this.field.class:""),staticStyle:{border:"solid 1px lightgray"}},[i("v-card-actions",{staticClass:"text-subtitle-1 pt-0",attrs:{dark:""}},[i("v-list",{staticClass:"px-0 mx-auto",attrs:{dense:""}},[i("v-list-item",{staticClass:"px-0"},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.field.label))]),t._v(" "),t.field.subtitle?i("v-list-item-subtitle",[t._v("\n            "+t._s(t.field.subtitle)+"\n            "),i("v-chip",{attrs:{dense:"",small:""}},[t._v(t._s(this.duration))]),t._v(" "),t.field.is_windowed?i("v-chip",{attrs:{dense:"",small:""}},[t._v(t._s(this.window))]):t._e()],1):t._e()],1),t._v(" "),i("v-list-item-action",{staticClass:"my-auto d-flex flex-row"},[i("v-btn",{attrs:{loading:t.loading,icon:"",small:""},on:{click:function(e){return t.updateReport()}}},[i("v-icon",{attrs:{small:""}},[t._v("mdi-refresh")])],1),t._v(" "),i("v-btn",{attrs:{icon:"",small:"",color:t.autoupdate?"success":"secondary"},on:{click:function(e){t.autoupdate=!t.autoupdate}}},[i("v-icon",{attrs:{small:""}},[t._v("mdi-refresh-circle")])],1),t._v(" "),i("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){t.show=!t.show}}},[i("v-icon",{attrs:{small:""}},[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"d-flex flex-column"})],1),t._v(" "),i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[i("v-divider"),t._v(" "),i("v-card-text",{staticClass:"d-flex flex-column"},[i("v-select",{staticClass:"mx-4 my-1",attrs:{items:t.durations,label:"بازه زمانی گزارش",flat:"",outlined:"",rounded:"","hide-details":"",dense:"","item-text":"id","item-value":"id"},model:{value:t.duration,callback:function(e){t.duration=e},expression:"duration"}}),t._v(" "),t.field.is_windowed?i("v-select",{staticClass:"mx-4 my-1",attrs:{items:t.windows,label:"پنجره تجمیع",flat:"",outlined:"",rounded:"","hide-details":"",dense:"","item-text":"id","item-value":"id"},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}}):t._e(),t._v(" "),t.field.filters?i("vf-fields-renderer",{attrs:{fields:t.field.filters,options:{type:"col"}},model:{value:t.extraFilters,callback:function(e){t.extraFilters=e},expression:"extraFilters"}}):t._e()],1)],1)]),t._v(" "),i("v-card-text",{staticClass:"pb-0"},[i("canvas",{ref:"chart",staticStyle:{height:"80%"}})])],1)}),[],!1,null,null,null);e.default=Y.exports;m()(Y,{VBtn:p.a,VCard:v.a,VCardActions:b.a,VCardText:b.b,VChip:_.a,VDivider:w.a,VExpandTransition:g.a,VIcon:y.a,VList:x.a,VListItem:j.a,VListItemAction:O.a,VListItemContent:k.a,VListItemSubtitle:k.b,VListItemTitle:k.c,VSelect:C.a})}}]);
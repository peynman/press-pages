(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{O7TI:function(t,e,i){"use strict";i.r(e);var r=i("I1Ao"),n=i("pnuC"),s=i.n(n),a=i("f0Wu"),l=i.n(a);function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var d={mixins:[r.b],name:"form-entry-links-card",props:{id:String,field:Object},data:function(){return{showDetails:!1}},computed:{itemId:function(){var t,e,i,r,n=(null===(t=this.field.expand)||void 0===t||null===(e=t.column)||void 0===e?void 0:e.id)?this.getNestedPathValue(this.field,null===(i=this.field.expand)||void 0===i||null===(r=i.column)||void 0===r?void 0:r.id):this.field.id;return"object"===f(n)?n.id:n},formType:function(){if(this.field.tags)if(this.field.tags.startsWith("course-")){if(this.field.tags.endsWith("-taklif"))return"taklif";if(this.field.tags.endsWith("-presence"))return"presence"}else{if(this.field.tags.startsWith("support-group-"))return"support";if(this.field.tags.startsWith("introducer-id-"))return"introducer"}return"general"},formTypeString:function(){return{general:"فرم عمومی",intoducer:"ثبت نام از طریق معرف",support:"تایین پشتیبان دانش آموز",presence:"حضور و غیاب دانش آموز در جلسه کلاس",taklif:"تکالیف ارسال شده توسط دانش آموز"}[this.formType]},label:function(){return"جزییات فرم پر شده با شناسه ".concat(this.itemId," توسط کاربر با شناسه ").concat(this.field.user_id)},formParams:function(){var t=[];for(var e in this.field.form.data.form.schema.fields){var i=this.field.form.data.form.schema.fields[e];i.validations&&i.validations.required&&t.push({key:e,value:this.field.data.values[e]})}return t},taklifFiles:function(){var t=[];return this.field.data.values.file_ids&&this.field.data.values.file_ids.forEach((function(e){t.push({id:e,title:"نمایش تکلیف با شناسه ".concat(e),link:"/file-uploads/download/"+e})})),t},presenceDuration:function(){var t=parseInt(1e3*this.field.data.values.duration);return s.a.duration(t).locale("fa").humanize({precision:3})},presenceFirstEnter:function(){var t,e=null!==(t=this.field.data.values.sessions)&&void 0!==t?t:[];return e.length>0?"در ساعت "+s()(l.a.utc(e[0].at).tz(l.a.tz.guess())).locale("fa").format("hh:mm:ss"):""},presenceLastExit:function(){var t,e=null!==(t=this.field.data.values.sessions)&&void 0!==t?t:[];return e.length>0?"در ساعت "+s()(l.a.utc(e[e.length-1].at).tz(l.a.tz.guess())).locale("fa").format("hh:mm:ss"):""},supportIds:function(){var t,e=[];return(null!==(t=this.field.data.values.support_ids)&&void 0!==t?t:[]).forEach((function(t){e.push(u(u({},t),{},{at:s()(l.a.utc(t.updated_at).tz(l.a.tz.guess())).locale("fa").format("jYYYY/jMM/jDD hh:mm:ss")}))})),e}}},v=i("KHd+"),m=i("ZUTo"),p=i.n(m),_=i("gzZi"),h=i("sK+t"),g=i("mdmw"),y=i("Ey0z"),b=i("iGBT"),j=i("2hOt"),w=i("XSMC"),O=i("NMP6"),k=i("H09D"),C=i("r9mn"),x=Object(v.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"ma-1",attrs:{flat:"","background-color":"grey lighten-2"}},[i("v-system-bar",{attrs:{dark:"",color:"primary"}},[t._v(t._s(t.label))]),t._v(" "),i("v-list",{attrs:{dense:"",color:"grey lighten-2"}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-icon",{staticClass:"ma-auto"},[i("v-icon",{attrs:{large:""}},[t._v("mdi-alien-outline")])],1),t._v(" "),i("v-list-item-content",{staticClass:"ms-2"},[i("v-list-item-title",[i("strong",[t._v("IP:")]),t._v(" "+t._s(t.field.data.ip))]),t._v(" "),i("v-list-item-subtitle",[i("strong",[t._v("Agent:")]),t._v(" "+t._s(t.field.data.agent))]),t._v(" "),i("v-list-item-subtitle",[i("strong",[t._v("نوع اطلاعات فرم:")]),t._v(" "+t._s(t.formTypeString))])],1),t._v(" "),i("v-list-item-icon",{staticClass:"ma-auto"},[i("v-icon",{attrs:{color:t.showDetails?"warning":"secondary",small:""},on:{click:function(e){t.showDetails=!t.showDetails}}},[t._v("mdi-eye")])],1)],1)],1),t._v(" "),t.showDetails?i("v-simple-table",{attrs:{dense:"","hide-default-footer":""},scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",[t._v("پارامتر")]),t._v(" "),i("th",[t._v("مقدار")])])]),t._v(" "),i("tbody",t._l(t.formParams,(function(e,r){return i("tr",{key:t.id+"-form-"+t.itemId+"-"+r},[i("td",[t._v(t._s(e.key))]),t._v(" "),i("td",[i("span",{staticStyle:{overflow:"hidden","max-width":"40%"}},[t._v(t._s(e.value))])])])})),0)]},proxy:!0}],null,!1,426332211)}):t._e(),t._v(" "),t.showDetails&&0==t.formParams.length?i("div",{staticClass:"text-center ma-3"},[t._v("\n        پارامتری برای نمایش مستقیم ثبت نشده است\n    ")]):t._e(),t._v(" "),"taklif"===t.formType?i("v-card-text",{staticClass:"d-flex flex-column"},[i("span",{staticClass:"caption"},[t._v("فایل‌‌های ارسال شده توسط دانش آموز با شناسه "+t._s(t.field.user_id)+" برای جلسه با شناسه "+t._s(t.field.data.values.product_id))]),t._v(" "),i("div",{staticClass:"d-flex flex-row"},t._l(t.taklifFiles,(function(e){return i("v-btn",{key:t.id+"-taklif-"+t.itemId+"-"+e.id,staticClass:"no-letter-spacing ma-2",attrs:{outlined:"",small:"",href:e.link,target:"_blank"}},[t._v("\n                "+t._s(e.title)+"\n            ")])})),1)]):t._e(),t._v(" "),"presence"===t.formType?i("v-card-text",{staticClass:"d-flex flex-column"},[i("span",{staticClass:"caption"},[t._v("حضور و غیاب دانش آموز با شناسه "+t._s(t.field.user_id)+" برای جلسه با شناسه "+t._s(t.field.data.values.product_id))]),t._v(" "),i("v-list",{staticClass:"ma-2",attrs:{dense:"",color:"grey lighten-3"}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("v-list-item-title",[t._v("مدت حضور در کلاس: "+t._s(t.presenceDuration))]),t._v(" "),i("v-list-item-subtitle",[t._v("اولین ورود: "+t._s(t.presenceFirstEnter))]),t._v(" "),i("v-list-item-subtitle",[t._v("اخرین خروج: "+t._s(t.presenceLastExit))])],1)],1)],1)],1):t._e(),t._v(" "),"support"===t.formType?i("v-card-text",{staticClass:"d-flex flex-column"},[i("span",{staticClass:"caption"},[t._v("تاریخچه و پشتیبان دانش آموز با شناسه "+t._s(t.field.user_id))]),t._v(" "),i("v-list",{staticClass:"ma-2",attrs:{dense:"",color:"grey lighten-3"}},t._l(t.supportIds,(function(e,r){return i("v-list-item",{key:t.id+"-support-group-"+r,attrs:{"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",[t._v("تغییر پشتیبان به شناسه #"+t._s(e.support_user_id)+" "+t._s(e.support_name))]),t._v(" "),i("v-list-item-subtitle",[t._v("تغییر در تاریخ "+t._s(e.at))])],1)],1)})),1)],1):t._e()],1)}),[],!1,null,null,null);e.default=x.exports;p()(x,{VBtn:_.a,VCard:h.a,VCardText:g.b,VIcon:y.a,VList:b.a,VListItem:j.a,VListItemContent:w.a,VListItemIcon:O.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VSimpleTable:k.a,VSystemBar:C.a})},UFej:function(t,e,i){var r={"./fa":"jfSC","./fa.js":"jfSC"};function n(t){var e=s(t);return i(e)}function s(t){if(!i.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id="UFej"},sfId:function(t,e){function i(t){return 0===n(t).leap}function r(t,e){return e<=6?31:e<=11||i(t)?30:29}function n(t){var e,i,r,n,s,a,l=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178],o=l.length,f=t+621,d=-14,v=l[0];if(t<v||t>=l[o-1])throw new Error("Invalid Jalaali year "+t);for(a=1;a<o&&(i=(e=l[a])-v,!(t<e));a+=1)d=d+8*u(i,33)+u(c(i,33),4),v=e;return d=d+8*u(s=t-v,33)+u(c(s,33)+3,4),4===c(i,33)&&i-s==4&&(d+=1),n=20+d-(u(f,4)-u(3*(u(f,100)+1),4)-150),i-s<6&&(s=s-i+33*u(i+4,33)),-1===(r=c(c(s+1,33)-1,4))&&(r=4),{leap:r,gy:f,march:n}}function s(t,e,i){var r=n(t);return l(r.gy,3,r.march)+31*(e-1)-u(e,7)*(e-7)+i-1}function a(t){var e,i=o(t).gy,r=i-621,s=n(r);if((e=t-l(i,3,s.march))>=0){if(e<=185)return{jy:r,jm:1+u(e,31),jd:c(e,31)+1};e-=186}else r-=1,e+=179,1===s.leap&&(e+=1);return{jy:r,jm:7+u(e,30),jd:c(e,30)+1}}function l(t,e,i){var r=u(1461*(t+u(e-8,6)+100100),4)+u(153*c(e+9,12)+2,5)+i-34840408;return r=r-u(3*u(t+100100+u(e-8,6),100),4)+752}function o(t){var e,i,r,n;return e=(e=4*t+139361631)+4*u(3*u(4*t+183187720,146097),4)-3908,i=5*u(c(e,1461),4)+308,r=u(c(i,153),5)+1,n=c(u(i,153),12)+1,{gy:u(e,1461)-100100+u(8-n,6),gm:n,gd:r}}function u(t,e){return~~(t/e)}function c(t,e){return t-~~(t/e)*e}t.exports={toJalaali:function(t,e,i){"[object Date]"===Object.prototype.toString.call(t)&&(i=t.getDate(),e=t.getMonth()+1,t=t.getFullYear());return a(l(t,e,i))},toGregorian:function(t,e,i){return o(s(t,e,i))},isValidJalaaliDate:function(t,e,i){return t>=-61&&t<=3177&&e>=1&&e<=12&&i>=1&&i<=r(t,e)},isLeapJalaaliYear:i,jalaaliMonthLength:r,jalCal:n,j2d:s,d2j:a,g2d:l,d2g:o}}}]);
//# sourceMappingURL=extra-form-link.bundle.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1157:function(i,t,e){"use strict";e.r(t);var l={name:"VfProductVideoLinkInput",props:{field:Object,value:Object,id:String},data:function(){return{dialog:!1}},computed:{VodLinkURL:function(){return this.field.url},VodLinkWidth:function(){var i;return null!==(i=this.field.width)&&void 0!==i?i:"100%"},VodLinkHeight:function(){var i;return null!==(i=this.field.height)&&void 0!==i?i:"390px"},isYouTube:function(){return this.field.isYouTube},isModePlain:function(){return this.field.modePlain}},mounted:function(){}},o=e(26),a=e(27),n=e.n(a),s=e(68),r=e(422),d=e(59),c=e(414),u=Object(o.a)(l,(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{class:"vf-input "+(i.field.class?i.field.class:"")},[i.isModePlain?i._e():e("v-btn",{staticClass:"no-letter-spacing",attrs:{outlined:"",primary:"",rouned:""},on:{click:function(t){i.dialog=!0}}},[e("v-icon",[i._v("mdi-play")]),i._v(" "+i._s(i.field.label)+"\n  ")],1),i._v(" "),i.isModePlain?i._e():e("v-dialog",{model:{value:i.dialog,callback:function(t){i.dialog=t},expression:"dialog"}},[i.dialog?e("v-lazy",[i.isYouTube?e("v-lazy",[e("iframe",{attrs:{id:"player",type:"text/html",width:i.VodLinkWidth,height:i.VodLinkHeight,src:i.VodLinkURL,frameborder:"0"}})]):e("v-lazy",[e("div",{staticClass:"kavimo_vis_rp",staticStyle:{position:"relative","padding-bottom":"56.25%"}},[e("div",{staticClass:"kavimo_vis_rw",staticStyle:{position:"absolute",width:"100%",height:"100%",top:"0",left:"0"}},[e("iframe",{attrs:{width:i.VodLinkWidth,height:i.VodLinkHeight,src:i.VodLinkURL,allowtransparency:"true",frameborder:"0",scrolling:"no",allowfullscreen:"",mozallowfullscreen:"",webkitallowfullscreen:"",oallowfullscreen:"",msallowfullscreen:""}})])])])],1):i._e()],1),i._v(" "),i.isModePlain?e("v-lazy",[i.isYouTube?e("v-lazy",[e("iframe",{attrs:{id:"player",type:"text/html",width:i.VodLinkWidth,height:i.VodLinkHeight,src:i.VodLinkURL,frameborder:"0"}})]):e("v-lazy",[e("div",{staticClass:"kavimo_vis_rp",staticStyle:{position:"relative","padding-bottom":"56.25%"}},[e("div",{staticClass:"kavimo_vis_rw",staticStyle:{position:"absolute",width:"100%",height:"100%",top:"0",left:"0"}},[e("iframe",{attrs:{width:i.VodLinkWidth,height:i.VodLinkHeight,src:i.VodLinkURL,allowtransparency:"true",frameborder:"0",scrolling:"no",allowfullscreen:"",mozallowfullscreen:"",webkitallowfullscreen:"",oallowfullscreen:"",msallowfullscreen:""}})])])])],1):i._e()],1)}),[],!1,null,null,null);t.default=u.exports;n()(u,{VBtn:s.a,VDialog:r.a,VIcon:d.a,VLazy:c.a})}}]);
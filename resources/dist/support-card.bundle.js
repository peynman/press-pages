(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"Q+Mh":function(t,s,e){"use strict";e.r(s);var r={name:"VfSupportCardInput",props:{field:Object,value:Object,id:String},data:function(){return{updatingSupport:!1,askedSupportUser:null,isValidSupportId:!1}},computed:{user:function(){return this.$store.state.user},imagePic:function(){return this.user.support&&this.user.support.image?this.user.support.image:this.field.img?this.field.img:"/images/avatar.png"},label:function(){return this.user.support&&this.user.support.firstname?this.user.support.firstname+" "+this.user.support.lastname:this.field.label},message:function(){return this.user.support&&this.user.support.message?this.user.support.message:this.field.message},canChangeSupport:function(){return null===this.user.support},hasSupport:function(){return this.user.support},hrefTelegram:function(){return this.user.support&&this.user.support.telegram_url?this.user.support.telegram_url:this.field.hrefTelegram?this.field.hrefTelegram:"#"},hrefInstagram:function(){return this.user.support&&this.user.support.instagram_url?this.user.support.instagram_url:this.field.hrefInstagram?this.field.hrefInstagram:"#"},hrefWhatsapp:function(){return this.user.support&&this.user.support.whatsapp_url?this.user.support.whatsapp_url:this.field.hrefWhatsapp?this.field.hrefWhatsapp:"#"}},methods:{updateSupportUser:function(){var t=this;this.updatingSupport=!0;var s=this.$store.state.host;s.axios({url:"/api/support-group/my/update",method:"POST",data:{support_user_id:this.askedSupportUser},headers:s.getWebAuthHeaders({})}).then((function(e){var r;console.log(e),t.updatingSupport=!1,(null===(r=e.data)||void 0===r?void 0:r.message)&&s.showSnack(e.data.message,"success"),t.user.support=e.data.support,t.$forceUpdate()})).catch((function(e){var r,a,i,p;(console.log(e),null===(r=e.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message)?s.showSnack(null===(i=e.response)||void 0===i||null===(p=i.data)||void 0===p?void 0:p.message):s.showSnack(e.message);t.updatingSupport=!1}))}},watch:{askedSupportUser:function(){this.askedSupportUser&&this.askedSupportUser.length>0&&!isNaN(parseFloat(this.askedSupportUser))&&isFinite(this.askedSupportUser)?this.isValidSupportId=!0:this.isValidSupportId=!1}}},a=e("KHd+"),i=e("ZUTo"),p=e.n(i),l=e("gzZi"),u=e("sK+t"),n=e("Yq0q"),o=e("Ey0z"),d=e("rdoz"),h=e("iGBT"),m=e("2hOt"),c=e("GADD"),f=e("gnBG"),v=e("XSMC"),g=e("hlRy"),S=Object(a.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-col",{attrs:{cols:"12",md:t.field.md?t.field.md:6,lg:t.field.lg?t.field.lg:6,sm:t.field.sm?t.field.sm:6,xs:t.field.xs?t.field.xs:6}},[e("v-card",{class:"d-flex flex-row rounded-product-card grey lighten-4 "+(t.field.class?t.field.class:"")},[e("v-list",{staticClass:"grey lighten-4 fill-width"},[e("v-list-item",{staticClass:"fill-width"},[e("v-list-item-avatar",{attrs:{size:"100"}},[e("v-img",{attrs:{src:t.imagePic}})],1),t._v(" "),e("v-list-item-content",{staticClass:"ms-3"},[e("v-list-item-title",[t._v("پشتیبان شما:")]),t._v(" "),t.hasSupport?e("v-list-item-title",{staticClass:"wrap-text"},[t._v("\n                      "+t._s(t.label)+"\n                  ")]):e("v-list-item-subtitle",{staticClass:"wrap-text my-1"},[e("v-text-field",{attrs:{solo:"",flat:"",dense:"",tile:"","hide-details":"",label:t.field.no_support_message?t.field.no_support_message:"شناسه پشتیبان خود را وارد کنید"},scopedSlots:t._u([{key:"append",fn:function(){return[e("v-btn",{attrs:{dense:"",small:"",color:"primary",loading:t.updatingSupport,disabled:!t.isValidSupportId},on:{click:t.updateSupportUser}},[t._v("ثبت")])]},proxy:!0}]),model:{value:t.askedSupportUser,callback:function(s){t.askedSupportUser=s},expression:"askedSupportUser"}})],1),t._v(" "),e("v-list-item-subtitle",{staticClass:"wrap-text"},[t._v("\n                      "+t._s(t.message)+"\n                  ")]),t._v(" "),e("v-list-item-subtitle",{staticClass:"wrap-text",staticStyle:{"font-size":"10px"}},[t._v("\n                      شماره های تماس با آنلاین آکادمی - واحد پشتیبانی: 02166400300 - واحد استودیو: 02166400147\n                  ")])],1),t._v(" "),e("v-list-item-action",[e("v-btn",{directives:[{name:"show",rawName:"v-show",value:"#"!==t.hrefInstagram,expression:"hrefInstagram !== '#'"}],attrs:{small:"",outlined:"",dense:"",icon:"",href:t.hrefInstagram}},[e("v-icon",{attrs:{small:""}},[t._v("\n                      mdi-instagram\n                      ")])],1),t._v(" "),e("v-btn",{directives:[{name:"show",rawName:"v-show",value:"#"!==t.hrefWhatsapp,expression:"hrefWhatsapp !== '#'"}],attrs:{small:"",outlined:"",icon:"",dense:"",href:t.hrefWhatsapp}},[e("v-icon",{attrs:{small:""}},[t._v("\n                      mdi-whatsapp\n                      ")])],1),t._v(" "),e("v-btn",{directives:[{name:"show",rawName:"v-show",value:"#"!==t.hrefTelegram,expression:"hrefTelegram !== '#'"}],attrs:{small:"",outlined:"",icon:"",dense:"",href:t.hrefTelegram}},[e("v-icon",{attrs:{small:""}},[t._v("\n                      mdi-telegram\n                      ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);s.default=S.exports;p()(S,{VBtn:l.a,VCard:u.a,VCol:n.a,VIcon:o.a,VImg:d.a,VList:h.a,VListItem:m.a,VListItemAction:c.a,VListItemAvatar:f.a,VListItemContent:v.a,VListItemSubtitle:v.b,VListItemTitle:v.c,VTextField:g.a})}}]);
//# sourceMappingURL=support-card.bundle.js.map
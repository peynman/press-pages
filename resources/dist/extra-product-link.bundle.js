(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"9Xpw":function(e,i,t){"use strict";t.r(i);function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){l(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o={mixins:[t("I1Ao").b],name:"product-links-card",props:{id:String,field:Object},computed:{itemId:function(){var e,i,t,n,r=(null===(e=this.field.expand)||void 0===e||null===(i=e.column)||void 0===i?void 0:i.id)?this.getNestedPathValue(this.field,null===(t=this.field.expand)||void 0===t||null===(n=t.column)||void 0===n?void 0:n.id):this.field.id;return"object"===s(r)?r.id:r},linksField:function(){var e={},i=[];return this.field.types&&((this.field.types.map((function(e){return e.name})).includes("course")||this.field.types.map((function(e){return e.name})).includes("session"))&&i.push.apply(i,[{id:"children",title:"محصولات زیرمجموعه",icon:"mdi-file-tree",url:"/admin/products",filters:{parent_id:this.field.id}},{id:"purchased",title:"خرید شده توسط",icon:"mdi-cart-arrow-down",url:"/admin/users",filters:{purchased_id:this.field.id}},{id:"in_list",title:"در لیست خرید",icon:"mdi-cart-plus",url:"/admin/users",filters:{in_cart_id:this.field.id}},{id:"send-sms",title:"ارسال پیامک به لیست خریداران",icon:"mdi-cellphone-play",url:"/admin/sms-messages/send",devalue:{type:"in_purchased_ids",ids:this.itemId}}]),this.field.types.map((function(e){return e.name})).includes("session")&&i.push.apply(i,[{id:"entry_presense",title:"حضور و غیاب",icon:"mdi-clipboard-check",url:"/admin/form-entries",filters:{tags:"course-"+this.field.id+"-presence"}},{id:"entry_taklif",title:"تکالیف ارسالی",icon:"mdi-clipboard-file",url:"/admin/form-entries",filters:{tags:"course-"+this.field.id+"-taklif"}}])),i.forEach((function(i){e[i.id]||(e[i.id]=r(r({},i),{},{fields:{},options:{},devalue:{},loaded:!1,loading:!1}))})),r(r({label:"جزییات محصول با شناسه ".concat(this.field.id)},this.field),{},{links:e})}}},d=t("KHd+"),c=Object(d.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("object-links-card",{attrs:{field:this.linksField,id:this.id}})}),[],!1,null,null,null);i.default=c.exports}}]);
//# sourceMappingURL=extra-product-link.bundle.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{u41X:function(e,t,a){"use strict";a.r(t);var i={name:"VfLoginCardInput",props:{field:Object,value:Object,id:String},emits:["input"],data:function(e){return{devalue:e.value}},watch:{devalue:{deeep:!0,handle:function(){this.$emit("input",this.devalue)}}}},l=a("KHd+"),s=a("ZUTo"),d=a.n(s),n=a("sK+t"),c=a("Yq0q"),o=a("rdoz"),r=a("D9m0"),u=Object(l.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{class:"vf-input "+(e.field.class?e.field.class:""),attrs:{shaped:""}},[a("v-row",{staticClass:"align-center justify-center"},[a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("v-img",{staticClass:"ma-auto",attrs:{"max-width":e.field.maxWidth?e.field.maxWidth:"300px","max-height":e.field.maxHeight?e.field.maxHeight:"100%",src:e.field.image}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("vf-fields-renderer",{attrs:{fields:e.field.content,options:e.field.options},model:{value:e.devalue,callback:function(t){e.devalue=t},expression:"devalue"}})],1)],1)],1)}),[],!1,null,null,null);t.default=u.exports;d()(u,{VCard:n.a,VCol:c.a,VImg:o.a,VRow:r.a})}}]);
//# sourceMappingURL=login-card.bundle.js.map
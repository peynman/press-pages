(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{uewR:function(e,t,n){"use strict";n.r(t);var a={name:"vuetify-formjson",props:{id:String,fields:[Object,Array],value:[Object,Array],options:Object},data:function(){return{devalue:this.value}},computed:{formId:function(){return this.id?this.id:"vf-random-"+Math.floor(1e4*Math.random())}},watch:{devalue:{deep:!0,handler:function(){this.$emit("input",this.devalue)}},value:{deep:!0,handler:function(){this.devalue=this.value}}}},i=n("KHd+"),u=Object(i.a)(a,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("vf-fields-renderer",{attrs:{options:e.options,id:e.formId,fields:e.fields},model:{value:e.devalue,callback:function(t){e.devalue=t},expression:"devalue"}})}),[],!1,null,null,null);t.default=u.exports}}]);
//# sourceMappingURL=formjson.bundle.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{duw9:function(e,t,i){"use strict";i.r(t);var a=i("I1Ao"),n=i("8kXO"),s=i.n(n),l=i("sK+t"),o={components:{VCard:l.a},mixins:[a.d],name:"vf-code-input",props:{id:String,field:Object,value:String},data:function(){return{aceEditor:null,aceUpdate:!0}},watch:{devalue:function(){this.aceUpdate?this.aceEditor.setValue(this.devalue):this.aceUpdate=!0}},mounted:function(){var e=this;this.aceEditor=s.a.edit(this.$refs.editorCode,{selectionStyle:"text"}),this.aceEditor.setValue(this.devalue),this.aceEditor.session.on("change",(function(t){e.$nextTick((function(){e.aceUpdate=!1,e.devalue=e.aceEditor.session.getValue(),e.$emit("input",e.devalue)}))}))}},d=i("KHd+"),c=i("ZUTo"),u=i.n(c),r=i("JMl+"),h=Object(d.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:"vf-input flex-column flex-grow-1 "+(e.field.class?e.field.class:""),staticStyle:{"min-height":"248px"}},[i("v-label",[e._v(e._s(e.field.label))]),e._v(" "),i("v-card",{staticClass:"px-2",staticStyle:{position:"relative",width:"100%",height:"100%","min-height":"248px"}},[i("div",{ref:"editorCode",style:"position: absolute; top: 2px; right: 2px; left: 2px; bottom: 2px;  "+(e.field.height?"height: "+e.field.height:"")})])],1)}),[],!1,null,null,null);t.default=h.exports;u()(h,{VCard:l.a,VLabel:r.a})}}]);
//# sourceMappingURL=code.bundle.js.map
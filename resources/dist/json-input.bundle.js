(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{qxVj:function(e,t,i){"use strict";i.r(t);var o=i("3PWe"),r=i.n(o),n=i("I1Ao"),s=i("zn5u"),d=i("gzZi"),c=i("Ey0z");function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){f(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function f(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var u={components:{VDivider:s.a,VBtn:d.a,VIcon:c.a},mixins:[n.d],name:"vf-json-input",props:{id:String,field:Object,value:[Object,String]},data:function(){return{options:{mode:"code"},editor:null,ignoreUpdate:!1}},methods:{setMode:function(e){this.options.mode=e,this.editor.setMode(e)}},watch:{devalue:{deep:!0,handler:function(){var e=this.editor.getTextSelection();this.editor.set(this.devalue),this.editor.setTextSelection(e.start,e.end)}}},mounted:function(){var e=this,t=this.$refs.editor,i=a(a({},this.options),{},{onChange:function(){try{this.devalue=e.editor.get(),this.ignoreUpdate=!0,e.$emit("input",this.devalue)}catch(e){}}});t&&(this.editor=new r.a(t,i),this.devalue?"string"==typeof this.devalue?this.editor.set(JSON.parse(this.devalue)):this.editor.set(this.devalue):this.editor.set({}))}},p=i("KHd+"),v=i("ZUTo"),h=i.n(v),m=Object(p.a)(u,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:"vf-input d-flex flex-grow-1 flex-column "+(e.field.class?e.field.class:"")},[i("div",{staticClass:"d-flex flex-row align-center mb-1"},[i("label",{class:e.field.props&&e.field.props.error?"red--text me-1":"me-1"},[e._v(e._s(e.field.label))]),e._v(" "),i("v-btn",{attrs:{text:"",icon:"",color:"code"===e.options.mode?"primary":"secondary"},on:{click:function(t){return e.setMode("code")}}},[i("v-icon",[e._v(e._s(e.field.icons&&e.field.icons.code?e.field.icons.code:"mdi-code-array"))])],1),e._v(" "),i("v-btn",{attrs:{text:"",icon:"",color:"tree"===e.options.mode?"primary":"secondary"},on:{click:function(t){return e.setMode("tree")}}},[i("v-icon",[e._v(e._s(e.field.icons&&e.field.icons.edit?e.field.icons.edit:"mdi-file-document-edit"))])],1),e._v(" "),i("v-btn",{attrs:{text:"",icon:"",color:"form"===e.options.mode?"primary":"secondary"},on:{click:function(t){return e.setMode("form")}}},[i("v-icon",[e._v(e._s(e.field.icons&&e.field.icons.view?e.field.icons.view:"mdi-eye"))])],1)],1),e._v(" "),i("div",{ref:"editor",style:"width: 100%; height: "+(e.field.height?e.field.height:"400px")+";"}),e._v(" "),i("v-divider"),e._v(" "),e.field.props&&e.field.props.error?i("div",{staticClass:"d-flex flex-column"},e._l(e.field.props["error-messages"],(function(t,o){return i("div",{key:"error-message-"+o,staticClass:"red--text"},[e._v(e._s(t))])})),0):e._e()],1)}),[],!1,null,null,null);t.default=m.exports;h()(m,{VBtn:d.a,VDivider:s.a,VIcon:c.a})}}]);
//# sourceMappingURL=json-input.bundle.js.map
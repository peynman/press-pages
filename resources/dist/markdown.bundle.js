(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{vFW6:function(e,t,i){"use strict";i.r(t);var a=i("I1Ao"),o=i("8kXO"),d=i.n(o),r=(i("o5up"),i("vGNq"),i("1M3H")),s=i.n(r),l=i("sK+t"),n=i("mdmw"),c=i("gzZi"),m=i("Ey0z"),h=i("L6Q5"),v=i("cdmR"),u=i("Kn9U"),f={components:{VCard:l.a,VCardTitle:n.c,VBtn:c.a,VIcon:m.a,VCardText:n.b,VSpacer:h.a,VToolbar:v.a,VToolbarTitle:u.a},mixins:[a.d],name:"vf-markdown-input",props:{id:String,field:Object,value:{type:String,default:function(){return""}}},data:function(e){return{dialog:!1,markdownEditor:null,mathfieldEditor:null,mathKeyboardVisible:!1,aceEditor:null,aceUpdate:!1,mode:e.field.renderOnly?"view":"editor"}},computed:{modeIcon:function(){return"editor"===this.mode?"mdi-code-braces":"mdi-eye"}},methods:{toggleVirtualMathKeyboard:function(e){this.mathfieldEditor&&(this.mathfieldEditor.virtualKeyboardVisible!==e&&this.mathfieldEditor.$perform(["toggleVirtualKeyboard"]),this.mathKeyboardVisible=this.mathfieldEditor.virtualKeyboardVisible)},updateMarkdownText:function(){for(var e=this.markdownEditor.render(this.devalue),t=this.$refs.editorView.lastElementChild;t;)this.$refs.editorView.removeChild(t),t=this.$refs.editorView.lastElementChild;this.$refs.editorView.insertAdjacentHTML("beforeend",e),this.aceUpdate?this.aceUpdate=!1:this.aceEditor.session.setValue(this.devalue)}},watch:{devalue:{deep:!0,handler:function(){this.updateMarkdownText(),this.$emit("input",this.devalue)}}},mounted:function(){var e=this;this.aceEditor=d.a.edit(this.$refs.editorCode,{mode:"ace/mode/markdown",selectionStyle:"text",theme:"ace/theme/eclipse"}),this.aceEditor.session.on("change",(function(t){e.aceUpdate=!0,e.$nextTick((function(){e.devalue=e.aceEditor.session.getValue()}))})),this.markdownEditor=new s.a(this.field.markdownProps?this.field.markdownProps:{}),this.updateMarkdownText()}},p=i("KHd+"),w=i("ZUTo"),b=i.n(w),g=Object(p.a)(f,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:"vf-input d-flex flex-column flex-grow-1 "+(e.field.class?e.field.class:""),staticStyle:{"min-height":"248px"}},[i("v-toolbar",{directives:[{name:"show",rawName:"v-show",value:!e.field.renderOnly,expression:"!field.renderOnly"}],staticClass:"flex-grow-0",attrs:{flat:"",dense:""}},[i("v-toolbar-title",[e._v(e._s(e.field.label))]),e._v(" "),i("v-spacer"),e._v(" "),i("v-btn",{attrs:{small:"",icon:""},on:{click:function(){e.dialog=!e.dialog,e.toggleVirtualMathKeyboard(e.dialog)}}},[i("v-icon",{attrs:{small:""}},[e._v(e._s(e.dialog&&"editor"===e.mode?"mdi-close":"mdi-function-variant"))])],1),e._v(" "),i("v-btn",{attrs:{small:"",icon:""},on:{click:function(){e.mode="editor"===e.mode?"view":"editor",e.toggleVirtualMathKeyboard(e.dialog&&"editor"===e.mode)}}},[i("v-icon",{attrs:{small:""}},[e._v(e._s(e.modeIcon))])],1)],1),e._v(" "),i("v-card",{directives:[{name:"show",rawName:"v-show",value:e.dialog&&"editor"===e.mode,expression:"dialog && mode === 'editor'"}],staticClass:"mx-5 mb-5 px-3"},[i("v-card-title",{attrs:{dense:""}},[e._v("Create a math formula")]),e._v(" "),i("v-card-text",{staticStyle:{position:"relative"}},[i("div",{ref:"editorMath",style:"width: 100%; border: 2px solid gray; border-radius: 6px; padding: 5px"},[e._v("\n                f(x)=\n            ")]),e._v(" "),i("v-btn",{staticStyle:{position:"absolute",right:"60px",top:"12px"},attrs:{color:e.mathKeyboardVisible?"warning":"primary",icon:"",outlined:"",small:"",dense:""},on:{click:e.toggleVirtualMathKeyboard}},[i("v-icon",{attrs:{small:""}},[e._v(e._s(e.mathKeyboardVisible?"mdi-close":"mdi-keyboard"))])],1),e._v(" "),i("v-btn",{staticStyle:{position:"absolute",right:"30px",top:"12px"},attrs:{color:"success",outlined:"",icon:"",small:"",dense:""},on:{click:e.insertMathToMarkdown}},[i("v-icon",{attrs:{small:""}},[e._v("mdi-arrow-down")])],1)],1)],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"view"===e.mode,expression:"mode === 'view'"}],ref:"editorView",staticClass:"fill-height"}),e._v(" "),i("v-card",{directives:[{name:"show",rawName:"v-show",value:"editor"===e.mode,expression:"mode === 'editor'"}],staticClass:"fill-hight mx-2",staticStyle:{position:"relative"}},[i("div",{ref:"editorCode",style:"position: absolute; width: 100%; min-height: 200px; left: 5px;"+(e.field.height?"height: "+e.field.height:"")})])],1)}),[],!1,null,null,null);t.default=g.exports;b()(g,{VBtn:c.a,VCard:l.a,VCardText:n.b,VCardTitle:n.c,VIcon:m.a,VSpacer:h.a,VToolbar:v.a,VToolbarTitle:u.a})}}]);
//# sourceMappingURL=markdown.bundle.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"0gLc":function(e,t,i){"use strict";i.r(t);var r=i("I1Ao"),o=i("8kXO"),a=i.n(o),n=(i("o5up"),i("vGNq"),i("1M3H")),d=i.n(n),s=i("jRG1"),l=i("7mZW"),h=i("ZCeD"),c=i("a5u9"),m=function(e,t){var i=e.renderer.rules.fence.bind(e.renderer.rules);e.renderer.rules.fence=function(e,r,o,a,n){var d=e[r],s=d.content.trim();if("mathlive"===d.info){var l=("mathlive-"+Math.random()*Number.MAX_SAFE_INTEGER).substr(0,20);return t.host.$nextTick((function(){c.a.renderMathInElement(document.getElementById(l),o.mathlive)})),'<pre id="'.concat(l,'">$$').concat(s,"$$</pre>")}return i(e,r,o,a,n)};e.inline.ruler.push("markdown-it-mathlive",(function(e,t){var i=e.pos;if("$"!==e.src.charAt(i))return!1;if(i++,"$"!==e.src.charAt(i))return!1;i++;var r=e.src.indexOf("$$",i),o=e.src.slice(e.pos,i);if(-1!==r){if(!t){var a=e.push("markdown-it-mathlive","span",0);a.content=e.src.slice(i,r-1),a.markdown=o}return e.pos=r+2,!0}return t||(e.pending+=o),e.pos=i,!0}),{alt:[]}),e.renderer.rules["markdown-it-mathlive"]=function(e,i,r,o,a){var n=e[i].content.trim(),d=("mathlive-"+Math.random()*Number.MAX_SAFE_INTEGER).substr(0,20);return t.host.$nextTick((function(){c.a.renderMathInElement(document.getElementById(d),r.mathlive)})),'<span id="'.concat(d,'">$$').concat(n,"$$</span>")}},u=i("Nk9Y"),f=i.n(u),v=i("gzZi"),w=i("Ey0z"),p=i("sK+t"),E={components:{VBtn:v.a,VIcon:w.a,VCard:p.a},mixins:[r.d],name:"vf-paragraph-input",props:{id:String,field:Object,value:{type:String,default:function(){return""}}},data:function(e){return{dialog:!1,markdownEditor:null,mathfieldEditor:null,mathKeyboardVisible:!1,aceEditor:null,aceUpdate:!1,mode:e.field.readonly?"view":"editor"}},computed:{modeIcon:function(){return"editor"===this.mode?"mdi-code-braces":"mdi-eye"}},methods:{toggleVirtualMathKeyboard:function(e){this.mathfieldEditor&&(this.mathfieldEditor.virtualKeyboardVisible!==e&&this.mathfieldEditor.$perform(["toggleVirtualKeyboard"]),this.mathKeyboardVisible=this.mathfieldEditor.virtualKeyboardVisible)},insertMathToMarkdown:function(){this.mathfieldEditor&&this.aceEditor.session.insert(this.aceEditor.getCursorPosition(),"$$"+this.mathfieldEditor.$text()+"$$")},updateMarkdownText:function(){for(var e=this.markdownEditor.render(this.devalue),t=this.$refs.editorView.lastElementChild;t;)this.$refs.editorView.removeChild(t),t=this.$refs.editorView.lastElementChild;this.$refs.editorView.insertAdjacentHTML("beforeend",e),this.aceUpdate?this.aceUpdate=!1:this.aceEditor.session.setValue(this.devalue)}},watch:{devalue:{deep:!0,handler:function(){this.updateMarkdownText(),this.$emit("input",this.devalue)}}},mounted:function(){var e=this;this.aceEditor=a.a.edit(this.$refs.editorCode,{mode:"ace/mode/markdown",selectionStyle:"text",theme:"ace/theme/eclipse",maxLines:1/0}),this.aceEditor.session.on("change",(function(t){e.aceUpdate=!0,e.$nextTick((function(){e.devalue=e.aceEditor.session.getValue()}))})),this.aceEditor.session.setValue(this.devalue),this.markdownEditor=new d.a(this.field.markdownProps?this.field.markdownProps:{}),this.markdownEditor.use(s.a,{inline:!0}),this.markdownEditor.use(l.a,{host:this}),this.markdownEditor.use(h.a,{host:this}),this.markdownEditor.use(m,{host:this}),this.markdownEditor.use(f.a,{leftDelimiter:"{",rightDelimiter:"}",allowedAttributes:[]}),this.updateMarkdownText()}},b=i("KHd+"),g=i("ZUTo"),$=i.n(g),k=Object(b.a)(E,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:"vf-input d-flex flex-column flex-grow-1 "+(e.field.class?e.field.class:"")},["view"!==e.mode?i("label",[e._v(e._s(e.field.label))]):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.field.readonly,expression:"!field.readonly"}]},[i("v-btn",{attrs:{fab:"",small:"",icon:""},on:{click:function(){e.mode="editor"===e.mode?"view":"editor",e.toggleVirtualMathKeyboard(e.dialog&&"editor"===e.mode)}}},[i("v-icon",{attrs:{small:""}},[e._v(e._s(e.modeIcon))])],1)],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"view"===e.mode||e.field.readonly,expression:"mode === 'view' || field.readonly"}],ref:"editorView",staticClass:"fill-height",staticStyle:{width:"100%"}}),e._v(" "),i("v-card",{directives:[{name:"show",rawName:"v-show",value:"editor"===e.mode&&!e.field.readonly,expression:"mode === 'editor' && !field.readonly"}],staticClass:"fill-hight mx-2",staticStyle:{position:"relative",width:"100%","min-height":"100px",overflow:"scroll"}},[i("div",{ref:"editorCode",style:"position: absolute; width: 100%; left: 0; right: 0; top: 0; bottom: 0; "+(e.field.height?"height: "+e.field.height:"")})])],1)}),[],!1,null,null,null);t.default=k.exports;$()(k,{VBtn:v.a,VCard:p.a,VIcon:w.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{373:function(e,l,n){"use strict";n.r(l);var t=n(121),a=n(150),i={components:{VSlider:a.a},mixins:[t.d],name:"vf-range-input",props:{id:String,field:Object,value:Number},methods:{updateInput:function(){this.$emit("input",this.devalue)}}},s=n(26),u=n(27),d=n.n(u),r=Object(s.a)(i,(function(){var e=this,l=e.$createElement;return(e._self._c||l)("v-slider",e._g(e._b({class:"vf-input "+(e.field.class?e.field.class:""),attrs:{label:e.field.label,"thumb-label":"","hide-details":"auto"},on:{change:e.updateInput},model:{value:e.devalue,callback:function(l){e.devalue=l},expression:"devalue"}},"v-slider",e.fieldProps,!1),e.eventHandlers))}),[],!1,null,null,null);l.default=r.exports;d()(r,{VSlider:a.a})}}]);
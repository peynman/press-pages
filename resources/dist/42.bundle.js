(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{v0f0:function(e,t,l){"use strict";l.r(t);var a=l("I1Ao"),r=l("uXRr"),s={components:{VSelect:r.a},mixins:[a.d,a.a],name:"vf-select-input",props:{field:Object,id:String,value:[Array,String,Object,Number]},watch:{devalue:function(){this.$emit("input",this.devalue)}}},i=l("KHd+"),n=l("ZUTo"),u=l.n(n),c=l("JMl+"),o=l("4Mey"),d=Object(i.a)(s,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-select",e._g(e._b({class:"vf-input "+(e.field.class?e.field.class:""),attrs:{items:e.field.objects,label:e.field.label,multiple:e.field.multiple,"menu-props":{maxHeight:"400"},"hide-details":"auto","item-text":"title","item-value":"id"},scopedSlots:e._u([{key:"item",fn:function(t){var a=t.item;return[l("v-label",[e._v(e._s(e.getDecorableLabel(a)))]),e._v(" "),e.decorator.subheader?l("v-subheader",[e._v(e._s(e.getDecorableProperty(a,"subheader")))]):e._e()]}},{key:"selection",fn:function(t){var a=t.item;return[l("v-label",[e._v(e._s(e.getDecorableLabel(a)))]),e._v(" "),e.decorator.subheader?l("v-subheader",[e._v(e._s(e.getDecorableProperty(a,"subheader")))]):e._e()]}}]),model:{value:e.devalue,callback:function(t){e.devalue=t},expression:"devalue"}},"v-select",e.fieldProps,!1),e.eventHandlers))}),[],!1,null,null,null);t.default=d.exports;u()(d,{VLabel:c.a,VSelect:r.a,VSubheader:o.a})}}]);
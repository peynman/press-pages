(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{390:function(e,n,a){"use strict";a.r(n);var l=a(121),s=a(419),i=a(421),o=a(420),p=a(422),t={components:{VExpansionPanel:s.a,VExpansionPanelHeader:i.a,VExpansionPanelContent:o.a,VExpansionPanels:p.a},mixins:[l.d],name:"vf-group-single-exp",props:{field:Object,id:String,value:{type:Object,default:function(){return{}}}},watch:{devalue:{deep:!0,handler:function(){this.$emit("input",this.devalue)}}}},d=a(26),r=a(27),u=a.n(r),c=Object(d.a)(t,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("v-expansion-panels",e._g(e._b({class:"v-group "+(e.field.class?e.field.class:"")},"v-expansion-panels",e.fieldProps,!1),e.eventHandlers),[a("v-expansion-panel",[a("v-expansion-panel-header",[e._v(e._s(e.field.label))]),e._v(" "),a("v-expansion-panel-content",[a("vf-fields-renderer",{attrs:{options:e.field.options,fields:e.field.fields,id:e.id+"-fields"},model:{value:e.devalue,callback:function(n){e.devalue=n},expression:"devalue"}})],1)],1)],1)}),[],!1,null,null,null);n.default=c.exports;u()(c,{VExpansionPanel:s.a,VExpansionPanelContent:o.a,VExpansionPanelHeader:i.a,VExpansionPanels:p.a})}}]);
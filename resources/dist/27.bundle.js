(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{401:function(e,n,a){"use strict";a.r(n);var s=a(124),l=a(440),i=a(441),o=a(442),p=a(443),t={components:{VExpansionPanel:l.a,VExpansionPanels:i.a,VExpansionPanelContent:o.a,VExpansionPanelHeader:p.a},mixins:[s.d],name:"vf-group-expansions",props:{field:Object,id:String,value:{type:Object,default:function(){return{}}}},watch:{devalue:{deep:!0,handler:function(){this.$emit("input",this.devalue)}}}},d=a(24),r=a(25),u=a.n(r),c=Object(d.a)(t,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("v-expansion-panels",e._g(e._b({class:"v-group "+(e.field.class?e.field.class:"")},"v-expansion-panels",e.fieldProps,!1),e.eventHandlers),e._l(e.field.groups,(function(n,s){return a("v-expansion-panel",{key:e.id+"-group-expansion-"+s},[a("v-expansion-panel-header",[e._v(e._s(n.label))]),e._v(" "),a("v-expansion-panel-content",[a("vf-fields-renderer",{attrs:{"on-updated":n.onUpdated,options:n.options,fields:n.fields,id:e.id+"-expansion-fields"},model:{value:e.devalue[s],callback:function(n){e.$set(e.devalue,s,n)},expression:"devalue[key]"}})],1)],1)})),1)}),[],!1,null,null,null);n.default=c.exports;u()(c,{VExpansionPanel:l.a,VExpansionPanelContent:o.a,VExpansionPanelHeader:p.a,VExpansionPanels:i.a})}}]);
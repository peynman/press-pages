(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{363:function(e,t,o){"use strict";o.r(t);var n=o(405),i=o(403),s=o(110),r=o(53),p=o(112),a=o(70),l=o(11),c=o(424),u=o(425),d=o(39),f=o(441);function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function m(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?h(Object(o),!0).forEach((function(t){v(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function v(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var b={name:"VfFieldsRenderer",components:{VRow:n.a,VCol:i.a,VCard:s.a,VCardActions:r.a,VCardText:r.b,VCardTitle:r.c,VList:p.a,VListItem:a.a,VListItemTitle:l.c,VListItemContent:l.a,VCarousel:c.a,VCarouselItem:u.a,VSlideGroup:d.b,VSlideItem:f.a},props:{id:String,fields:[Object,Array],value:{type:[Object,Array],default:function(){return{}}},options:Object,onUpdated:Function},data:function(){var e=this.options&&this.options.wrap&&this.options.wrap.props?this.options.wrap.props:{};if("string"==typeof e)try{e=JSON.parse(e)}catch(t){e={}}return{devalue:this.value?this.value:{},wrapProps:e,wrapInnerProps:{}}},computed:{visibleFields:function(){return function(e,t){var o,n={};for(o in e)e[o]&&!t(e[o])&&(n[o]=e[o]);return n}(this.fields,(function(e){return!0===e.hidden}))}},watch:{devalue:{deep:!0,handler:function(){this.onUpdated&&this.onUpdated(this.devalue),this.options&&this.options["v-on"]&&this.options["v-on"].input&&this.options["v-on"].input(this.devalue),this.$emit("input",this.devalue)}},value:{deep:!0,handler:function(){this.value?this.devalue=this.value:this.devalue={}}}},methods:{getRootComponent:function(){if(this.options)switch(this.options.type){case"col":return i.a;case"component":return this.options.component}return n.a},getRootComponentProps:function(){return this.options&&this.options.props?this.options.props:{}},isVisibleField:function(e){return!1!==e.visible},getComponentPropsForField:function(e,t){if(!e.type||"row"===e.type||"col"===e.type)return{fields:e.fields,options:m({type:e.type?e.type:"row",props:e.props},e.options)};var o={field:m({},e),id:"".concat(this.id,"-field-").concat(t)};return this.options&&(this.options.class&&(o.field.class=this.options.class+(o.field.class?" "+o.field.class:"")),this.options.props&&(o.field.props=m(m({},this.options.props),o.field.props?o.field.props:{}))),o},getComponentForField:function(e){return"input"===e.type&&e.input?"vf-".concat(e.input,"-input"):"group"===e.type&&e.group?"vf-group-".concat(e.group):"component"===e.type?e.component:e.fields?"vf-fields-renderer":void 0}}},w=o(26),y=Object(w.a)(b,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o(e.getRootComponent(),e._b({directives:[{name:"show",rawName:"v-show",value:!e.options||!0!==e.options.hidden,expression:"!options || options.hidden !== true"}],tag:"component",class:""+(e.options&&e.options.formClass?e.options.formClass:"")},"component",e.getRootComponentProps(),!1),[e.options&&e.options.wrap&&!1!==e.options.wrap.enabled&&e.options.wrap.inside?o(e.options.wrap.component,e._b({tag:"component",class:e.options.wrap.class},"component",e.wrapProps,!1),e._l(e.visibleFields,(function(t,n){return o(e.options.wrap.inside.component,e._b({key:e.id+"-properties-"+n,tag:"component",class:e.options.wrap.inside.class},"component",e.options.wrap.inside.props,!1),[o(e.getComponentForField(t),e._b({ref:n,refInFor:!0,tag:"component",model:{value:e.devalue[n],callback:function(t){e.$set(e.devalue,n,t)},expression:"devalue[key]"}},"component",e.getComponentPropsForField(t),!1))],1)})),1):e._l(e.visibleFields,(function(t,n){return o(e.getComponentForField(t),e._b({key:e.id+"-properties-"+n,ref:n,refInFor:!0,tag:"component",model:{value:e.devalue[n],callback:function(t){e.$set(e.devalue,n,t)},expression:"devalue[key]"}},"component",e.getComponentPropsForField(t),!1))}))],2)}),[],!1,null,null,null);t.default=y.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{384:function(e,n,i){"use strict";i.r(n);var t={mixins:[i(127).d],name:"vf-bitwise-flags-input",props:{id:String,field:Object,value:Number},data:function(){return{innerValue:this.getInnerValues()}},methods:{getInnerValues:function(){var e,n=this,i={};return null===(e=this.field.objects)||void 0===e||e.forEach((function(e){0!=(n.value&e.id)&&(i[e.id]=!0)})),i}},watch:{devalue:function(){this.innerValue=this.getInnerValues()},innerValue:{deep:!0,handler:function(){var e=0;for(var n in this.innerValue)Object.prototype.hasOwnProperty.call(this.innerValue,n)&&this.innerValue[n]&&(e+=parseInt(n));this.devalue=e,this.$emit("input",this.devalue)}}}},a=i(26),l=Object(a.a)(t,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("vf-objects-list-input",{staticClass:"mt-2",attrs:{field:e.field,id:e.id+"-bitwise"},model:{value:e.innerValue,callback:function(n){e.innerValue=n},expression:"innerValue"}})}),[],!1,null,null,null);n.default=l.exports}}]);
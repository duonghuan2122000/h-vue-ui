(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f42b00f"],{"03c7":function(t,n,o){"use strict";o("cd68")},3559:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("h-dropdown",{attrs:{data:t.dropdownData}},[o("template",{slot:"dropdown-toggle"},[t._v(" Dropdown ")])],2)],1)},i=[],c=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"h-dropdown"},[o("div",{staticClass:"h-dropdown-toggle",on:{click:t.onClickDropdownToggle}},[t._t("dropdown-toggle")],2),o("div",{staticClass:"h-dropdown-content",class:{hide:!t.isShow}},t._l(t.data,(function(n,e){return o("div",{key:e,staticClass:"h-dropdown-item"},[t._t("dropdown-item",(function(){return[t._v(t._s(n))]}))],2)})),0)])},s=[],r={name:"HDropdown",props:{data:{type:Array}},data:function(){return{isShow:!1,currentItemIndex:-1}},methods:{_close:function(t){this.$el.contains(t.target)||(this.isShow=!1)},onClickDropdownToggle:function(){this.isShow=!this.isShow}},mounted:function(){document.addEventListener("click",this._close)},beforeDestroy:function(){document.removeEventListener("click",this._close)}},d=r,a=(o("03c7"),o("2877")),l=Object(a["a"])(d,c,s,!1,null,"280c3b7e",null),u=l.exports,p={components:{HDropdown:u},data:function(){return{dropdownData:["item 1","item 2","item 3","item 4","item 5"]}}},w=p,h=Object(a["a"])(w,e,i,!1,null,null,null);n["default"]=h.exports},cd68:function(t,n,o){}}]);
//# sourceMappingURL=chunk-3f42b00f.2836ab7b.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c14af94"],{"020a":function(t,e,n){},6208:function(t,e,n){"use strict";n("020a")},b082:function(t,e,n){},caad:function(t,e,n){"use strict";var i=n("23e7"),s=n("4d64").includes,o=n("44d2");i({target:"Array",proto:!0},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d412:function(t,e,n){"use strict";n("b082")},d5c8:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._g({staticClass:"h-button",class:"is-"+t.type},t.listener),[t._v(" "+t._s(t.text)+" ")])},s=[],o=(n("caad"),{name:"HButton",props:{type:{type:String,default:"primary",validator:function(t){return["primary","danger","success","warning","secondary"].includes(t)}},text:{type:String,default:function(){return""}}},computed:{listener:function(){var t=this;return{click:function(){t.$emit("click")}}}}}),a=o,l=(n("6208"),n("2877")),r=Object(l["a"])(a,i,s,!1,null,"bf9ffd4e",null);e["a"]=r.exports},dddc:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2"},[n("h-button",{attrs:{text:"Mở dialog"},on:{click:function(e){return t.setStateDialog(!0)}}}),t.showDialog?n("h-dialog",{on:{onClose:function(e){return t.setStateDialog(!1)}}},[n("div",{staticClass:"p-2"},[t._v(" Dialog "),n("p",[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")])])]):t._e(),n("pre",{staticClass:"my-1"},[t._v('<h-dialog v-if="showDialog" @onClose="setStateDialog(false)">\n  <div class="p-2">\n    Dialog\n  </div>\n</h-dialog>')]),n("p",[t._v("Các props:")]),t._m(0),n("p",[t._v("Các events:")]),t._m(1),n("p",[t._v("Slot")]),n("p",[t._v("Dialog có một slog: Dialog content")])],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{border:"1"}},[n("thead",[n("tr",[n("th",[t._v("Tên prop")]),n("th",[t._v("Kiểu dữ liệu")]),n("th",[t._v("Giá trị mặc định")]),n("th",[t._v("Mô tả")])])]),n("tbody")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{border:"1"}},[n("thead",[n("tr",[n("th",[t._v("Event")]),n("th",[t._v("Tham số")]),n("th",[t._v("Mô tả")])])]),n("tbody",[n("tr",[n("td",[t._v("onClose")]),n("td",[t._v("null")]),n("td",[t._v("Hàm được gọi khi đóng dialog")])])])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-dialog flex-row is-justify-content-center is-align-items-center"},[n("div",{staticClass:"h-dialog-background",on:{click:t.closeDialog}}),n("div",{staticClass:"h-dialog-content"},[n("div",{staticClass:"\n        h-dialog-close-button\n        flex-row\n        is-justify-content-center is-align-items-center\n      ",on:{click:t.closeDialog}},[t._v(" × ")]),t._t("default")],2)])},a=[],l={props:{},methods:{closeDialog:function(){this.$emit("onClose")}}},r=l,c=(n("d412"),n("2877")),u=Object(c["a"])(r,o,a,!1,null,"11170bc4",null),d=u.exports,h=n("d5c8"),p={components:{HDialog:d,HButton:h["a"]},data:function(){return{showDialog:!1}},methods:{setStateDialog:function(t){this.showDialog=t}}},g=p,f=Object(c["a"])(g,i,s,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-5c14af94.db1ccaa5.js.map
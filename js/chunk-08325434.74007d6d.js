(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08325434"],{"020a":function(t,n,e){},2078:function(t,n,e){"use strict";e("5d3a")},5899:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,n,e){var i=e("1d80"),o=e("5899"),r="["+o+"]",c=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),s=function(t){return function(n){var e=String(i(n));return 1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(a,"")),e}};t.exports={start:s(1),end:s(2),trim:s(3)}},"5d3a":function(t,n,e){},6208:function(t,n,e){"use strict";e("020a")},7156:function(t,n,e){var i=e("861d"),o=e("d2bb");t.exports=function(t,n,e){var r,c;return o&&"function"==typeof(r=n.constructor)&&r!==e&&i(c=r.prototype)&&c!==e.prototype&&o(t,c),t}},"8db4":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"p-2"},[e("h-button",{attrs:{text:"Hiển thị thông báo"},on:{click:function(n){t.showNotification=!0}}}),t.showNotification?e("h-notification",{attrs:{text:"Đây là thông báo được hiển thị cho việc test",type:"danger"},on:{onClose:function(n){t.showNotification=!1}}}):t._e(),e("pre",{staticClass:"my-1"},[t._v('<h-notification\n    v-if="showNotification"\n    text="Đây là thông báo được hiển thị cho việc test"\n    @onClose="showNotification = false"\n  />')]),e("p",[t._v("Các props:")]),t._m(0)],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{attrs:{border:"1"}},[e("thead",[e("tr",[e("th",[t._v("Tên prop")]),e("th",[t._v("Kiểu dữ liệu")]),e("th",[t._v("Giá trị mặc định")]),e("th",[t._v("Mô tả")])])]),e("tbody",[e("tr",[e("td",[t._v("show (bind 2 chiều)")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("Biến xác định trạng thái của notification")])]),e("tr",[e("td",[t._v("text")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Text của notification")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("string")]),e("td",[t._v("primary")]),e("td",[t._v("Loại notification: primary, success, warning và danger")])])])])}],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"h-notification flex-row",class:"is-"+t.type},[e("div",[t._v(" "+t._s(t.text)+" ")]),e("div",{staticClass:"\n      h-notification-close-button\n      ml-1\n      flex-row\n      is-justify-content-center is-align-items-center\n    ",on:{click:t.closeNotification}},[t._v(" × ")])])},c=[],a=(e("caad"),e("a9e3"),{name:"HNotification",props:{text:{type:String},type:{type:String,default:"primary",validator:function(t){return["primary","danger","success","warning"].includes(t)}},timeToHide:{type:Number,default:5e3},autoHide:{type:Boolean,default:!0}},data:function(){return{timeOut:null}},methods:{closeNotification:function(){this.$emit("onClose")}},mounted:function(){clearTimeout(this.timeOut),this.timeOut=setTimeout(this.closeNotification,this.timeToHide)},beforeDestroy:function(){clearTimeout(this.timeOut)}}),s=a,u=(e("2078"),e("2877")),f=Object(u["a"])(s,r,c,!1,null,"c115604c",null),l=f.exports,d=e("d5c8"),p={components:{HNotification:l,HButton:d["a"]},data:function(){return{showNotification:!1}}},h=p,v=Object(u["a"])(h,i,o,!1,null,null,null);n["default"]=v.exports},a9e3:function(t,n,e){"use strict";var i=e("83ab"),o=e("da84"),r=e("94ca"),c=e("6eeb"),a=e("5135"),s=e("c6b6"),u=e("7156"),f=e("c04e"),l=e("d039"),d=e("7c73"),p=e("241c").f,h=e("06cf").f,v=e("9bf2").f,_=e("58a8").trim,m="Number",g=o[m],y=g.prototype,N=s(d(y))==m,b=function(t){var n,e,i,o,r,c,a,s,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=_(u),n=u.charCodeAt(0),43===n||45===n){if(e=u.charCodeAt(2),88===e||120===e)return NaN}else if(48===n){switch(u.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+u}for(r=u.slice(2),c=r.length,a=0;a<c;a++)if(s=r.charCodeAt(a),s<48||s>o)return NaN;return parseInt(r,i)}return+u};if(r(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,w=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof w&&(N?l((function(){y.valueOf.call(e)})):s(e)!=m)?u(new g(b(n)),e,w):b(n)},I=i?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;I.length>E;E++)a(g,x=I[E])&&!a(w,x)&&v(w,x,h(g,x));w.prototype=y,y.constructor=w,c(o,m,w)}},caad:function(t,n,e){"use strict";var i=e("23e7"),o=e("4d64").includes,r=e("44d2");i({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d5c8:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",t._g({staticClass:"h-button",class:"is-"+t.type},t.listener),[t._v(" "+t._s(t.text)+" ")])},o=[],r=(e("caad"),{name:"HButton",props:{type:{type:String,default:"primary",validator:function(t){return["primary","danger","success","warning","secondary"].includes(t)}},text:{type:String,default:function(){return""}}},computed:{listener:function(){var t=this;return{click:function(){t.$emit("click")}}}}}),c=r,a=(e("6208"),e("2877")),s=Object(a["a"])(c,i,o,!1,null,"bf9ffd4e",null);n["a"]=s.exports}}]);
//# sourceMappingURL=chunk-08325434.74007d6d.js.map
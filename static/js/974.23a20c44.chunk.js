"use strict";(self.webpackChunkbtb_hurricane=self.webpackChunkbtb_hurricane||[]).push([[974],{1974:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(7696),r=a(3046),s=a(1835),c=a(8896),i=a(1222),d=a(6927),u=a(2745),l=a(2417),o=a(370),v=a(4505),b="https://asset-launch-api.iftas.tech";function h(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),a=t[0],h=t[1],p=(0,c.useState)(""),x=(0,s.Z)(p,2),f=x[0],m=x[1],B=(0,c.useState)(""),N=(0,s.Z)(B,2),j=N[0],g=N[1],T=(0,u.Z)().user,_=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat(b,"/btc/history?bsc_address=").concat(T.address));case 3:null!==(a=e.sent)&&void 0!==a&&null!==(t=a.data)&&void 0!==t&&t.ok?h(null===a||void 0===a?void 0:a.data.data):(0,l._b)(null===a||void 0===a||null===(r=a.data)||void 0===r?void 0:r.msg),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.prev=9,(0,l.$q)(),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,7,9,12]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,a,r,s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=2;break}return e.abrupt("return",(0,i.FN)("\u8bf7\u8f93\u5165TP wallet\u65b0\u5efa\u7684RGB/LN\u5730\u5740"));case 2:if(j){e.next=4;break}return e.abrupt("return",(0,i.FN)("\u8bf7\u8f93\u5165BTBT Beta4-5\u7684\u5730\u5740"));case 4:if(T.address){e.next=6;break}return e.abrupt("return",(0,i.FN)("\u672a\u8fde\u63a5\u94b1\u5305"));case 6:return t=window.btoa(JSON.stringify({old_btc_address:j,new_btc_address:f})),e.next=9,(0,l.Qy)(t,T.address);case 9:if(!(a=e.sent)){e.next=24;break}return(0,l.QP)(),e.prev=12,e.next=15,d.Z.post("".concat(b,"/btc/address"),{signature:a,signature_message:t});case 15:null!==(s=e.sent)&&void 0!==s&&null!==(r=s.data)&&void 0!==r&&r.ok?(m(""),g(""),(0,i.FN)("\u66ff\u6362\u6210\u529f"),_()):(0,l._b)(null===s||void 0===s||null===(c=s.data)||void 0===c?void 0:c.msg),e.next=21;break;case 19:e.prev=19,e.t0=e.catch(12);case 21:return e.prev=21,(0,l.$q)(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[12,19,21,24]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){T.address&&_()}),[T.address]),(0,v.jsxs)("div",{className:"bate-bg",children:[(0,v.jsx)("div",{className:"bate-title",children:"BTBT\u5347\u7ea7"}),(0,v.jsx)("div",{className:"bate-dec",children:"\u5c06\u60a8\u7684Beta4\u7248BTBT\u5347\u7ea7\u81f3Beta6\u7248"}),(0,v.jsx)("img",{className:"bate-img",src:"".concat(o.LP,"/hurricane/pageBanner.png")}),(0,v.jsx)("div",{className:"bate-inputdec",children:"\u539f\u63a5\u6536BTBT\u7684BTC\u5730\u5740"}),(0,v.jsx)("input",{value:j,onChange:function(e){return g(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u6216\u7c98\u8d34\u63a5\u6536BTBT Beta4-5\u7684\u5730\u5740",className:"bate-input"}),(0,v.jsx)("div",{className:"bate-inputdec",children:"TP RGB/LN\u7684BTC\u5730\u5740"}),(0,v.jsx)("input",{value:f,onChange:function(e){return m(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u6216\u7c98\u8d34TP wallet\u65b0\u5efa\u7684RGB/LN\u5730\u5740",className:"bate-input"}),(0,v.jsx)("div",{className:"bate-btn",onClick:k,children:"\u786e\u8ba4\u5347\u7ea7"}),(0,v.jsxs)("div",{className:"bate-record",children:[(0,v.jsx)("div",{className:"bate-recorddec",children:"\u5347\u7ea7\u8bb0\u5f55"}),(0,v.jsxs)("div",{className:"bate-recordtitle",children:[(0,v.jsx)("div",{children:"\u4ece"}),(0,v.jsx)("div",{children:"\u81f3"}),(0,v.jsx)("div",{children:"\u6570\u91cf(BTBT)"})]}),a.map((function(e){return(0,v.jsxs)("div",{className:"bate-recorditem",children:[(0,v.jsx)("div",{children:(0,l.z7)(e.old_btc_address)}),(0,v.jsx)("div",{children:(0,l.z7)(e.new_btc_address)}),(0,v.jsx)("div",{children:e.btbt_amount})]},e.old_btc_address)})),a.length?null:(0,v.jsx)(i.HY,{description:"\u6682\u65e0\u8bb0\u5f55"})]})]})}}}]);
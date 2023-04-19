"use strict";(self.webpackChunkleaderboard=self.webpackChunkleaderboard||[]).push([[826],{424:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: cornflowerblue;\r\n  font-size: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.25em;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  border: 1px solid #000;\r\n  box-shadow: 2px 2px;\r\n  padding: 7px;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.container-width {\r\n  width: 600px;\r\n}\r\n\r\nheader {\r\n  margin-top: 50px;\r\n  background-color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 25px;\r\n  background-color: #fff;\r\n}\r\n\r\n.left {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  gap: 15px;\r\n  padding: 5px;\r\n}\r\n\r\n.header-left {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.scores-list {\r\n  border: 1px solid #000;\r\n  padding: 10px;\r\n}\r\n\r\n.scores-list ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.scores-list li {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.scores-list li:nth-child(even) {\r\n  background-color: rgba(212, 218, 221, 0.89);\r\n}\r\n\r\n.right {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  width: 50%;\r\n\r\n  /* text-align: right; */\r\n  padding: 5px;\r\n}\r\n\r\n.frm-add-score {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  text-align: left;\r\n}\r\n\r\n.frm-add-score input {\r\n  width: 100%;\r\n  padding: 5px 7px;\r\n}\r\n\r\n.btn-cnt {\r\n  justify-content: right;\r\n  text-align: right;\r\n}\r\n",""]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var x=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:x,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),l=0;l<i.length;l++){var d=e(i[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},57:(n,r,e)=>{var t=e(379),o=e.n(t),i=e(795),a=e.n(i),c=e(569),s=e.n(c),l=e(565),d=e.n(l),p=e(216),u=e.n(p),f=e(589),x=e.n(f),h=e(424),m={};m.styleTagTransform=x(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),o()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals}},n=>{n(n.s=57)}]);
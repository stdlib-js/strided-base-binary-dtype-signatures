// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).signatures=n()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function i(){return e&&"symbol"==typeof Symbol.toStringTag}var r=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var l="function"==typeof Symbol?Symbol.toStringTag:"";var c,f=i()?function(t){var n,e,i;if(null==t)return r.call(t);e=t[l],n=u(t,l);try{t[l]=void 0}catch(n){return r.call(t)}return i=r.call(t),n?t[l]=e:delete t[l],i}:function(t){return r.call(t)};function a(t){return"[object Arguments]"===f(t)}c=function(){return a(arguments)}();var p=c,m="function"==typeof Object.defineProperty?Object.defineProperty:null;var g,y=Object.defineProperty,s=Object.prototype,b=s.toString,x=s.__defineGetter__,v=s.__defineSetter__,d=s.__lookupGetter__,h=s.__lookupSetter__;g=function(){try{return m({},"x",{}),!0}catch(t){return!1}}()?y:function(t,n,e){var i,r,o,u;if("object"!=typeof t||null===t||"[object Array]"===b.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===b.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((r="value"in e)&&(d.call(t,n)||h.call(t,n)?(i=t.__proto__,t.__proto__=s,delete t[n],t[n]=e.value,t.__proto__=i):t[n]=e.value),o="get"in e,u="set"in e,r&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&x&&x.call(t,n,e.get),u&&v&&v.call(t,n,e.set),t};var j=g;function w(t,n,e){j(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var O=String.prototype.valueOf;var S=i();function E(t){return"object"==typeof t&&(t instanceof String||(S?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function T(t){return _(t)||E(t)}function P(t){return"number"==typeof t}w(T,"isPrimitive",_),w(T,"isObject",E);var I=Number,A=I.prototype.toString;var V=i();function k(t){return"object"==typeof t&&(t instanceof I||(V?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function N(t){return P(t)||k(t)}function B(t){return t!=t}function F(t){return P(t)&&B(t)}function L(t){return k(t)&&B(t.valueOf())}function C(t){return F(t)||L(t)}w(N,"isPrimitive",P),w(N,"isObject",k),w(C,"isPrimitive",F),w(C,"isObject",L);var G=Number.POSITIVE_INFINITY,M=I.NEGATIVE_INFINITY,Y=Math.floor;function U(t){return Y(t)===t}function X(t){return t<G&&t>M&&U(t)}function H(t){return P(t)&&X(t)}function R(t){return k(t)&&X(t.valueOf())}function W(t){return H(t)||R(t)}w(W,"isPrimitive",H),w(W,"isObject",R);var z=Object.prototype.propertyIsEnumerable;var D=!z.call("beep","0");function q(t,n){var e;return null!=t&&(!(e=z.call(t,n))&&D&&T(t)?!F(n=+n)&&H(n)&&n>=0&&n<t.length:e)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var K=p?a:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!q(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}w(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,i;if(!J(n))return!1;if(0===(e=n.length))return!1;for(i=0;i<e;i++)if(!1===t(n[i]))return!1;return!0}}(Z));var $=q((function(){}),"prototype"),tt=!q({toString:null},"toString");function nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=9007199254740991}function et(t,n,e){var i,r;if(!nt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(i=t.length))return-1;if(3===arguments.length){if(!H(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=i)return-1;r=e}else(r=i+e)<0&&(r=0)}else r=0;if(C(n)){for(;r<i;r++)if(C(t[r]))return r}else for(;r<i;r++)if(t[r]===n)return r;return-1}var it=/./;function rt(t){return"boolean"==typeof t}var ot=Boolean.prototype.toString;var ut=i();function lt(t){return"object"==typeof t&&(t instanceof Boolean||(ut?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function ct(t){return rt(t)||lt(t)}function ft(){return new Function("return this;")()}w(ct,"isPrimitive",rt),w(ct,"isObject",lt);var at="object"==typeof self?self:null,pt="object"==typeof window?window:null,mt="object"==typeof global?global:null;var gt=function(t){if(arguments.length){if(!rt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ft()}if(at)return at;if(pt)return pt;if(mt)return mt;throw new Error("unexpected error. Unable to resolve global object.")}(),yt=gt.document&&gt.document.childNodes,st=Int8Array;function bt(){return/^\s*function\s*([^(]*)/i}var xt=/^\s*function\s*([^(]*)/i;function vt(t){var n,e,i,r;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(i=t.constructor).name)return i.name;if(n=xt.exec(i.toString()))return n[1]}return Z(r=t)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))?"Buffer":e}w(bt,"REGEXP",xt);var dt="function"==typeof it||"object"==typeof st||"function"==typeof yt?function(t){return vt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?vt(t).toLowerCase():n};function ht(t){return t.constructor&&t.constructor.prototype===t}var jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],wt="undefined"==typeof window?void 0:window;var _t=function(){var t;if("undefined"===dt(wt))return!1;for(t in wt)try{-1===et(jt,t)&&u(wt,t)&&null!==wt[t]&&"object"===dt(wt[t])&&ht(wt[t])}catch(t){return!0}return!1}(),Ot="undefined"!=typeof window;var St,Et=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];St=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return K(n)?t(Q.call(n)):t(n)}:t:function(t){var n,e,i,r,o,l,c;if(r=[],K(t)){for(c=0;c<t.length;c++)r.push(c.toString());return r}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)r.push(c.toString())}else{if(!1==(i="function"==typeof t)&&!Z(t))return r;e=$&&i}for(o in t)e&&"prototype"===o||!u(t,o)||r.push(String(o));if(tt)for(n=function(t){if(!1===Ot&&!_t)return ht(t);try{return ht(t)}catch(t){return!1}}(t),c=0;c<Et.length;c++)l=Et[c],n&&"constructor"===l||!u(t,l)||r.push(String(l));return r};var Tt=St;function Pt(t){return"function"===dt(t)}var It,At=Object.getPrototypeOf;It=Pt(Object.getPrototypeOf)?At:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Vt=It;var kt=Object.prototype;function Nt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!J(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Vt(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&Pt(n.constructor)&&"[object Function]"===f(n.constructor)&&u(n,"isPrototypeOf")&&Pt(n.isPrototypeOf)&&(n===kt||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}function Bt(t,n){var e,i,r,o,l,c,f,a=!0;if(!Z(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Nt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(u(n,"duplicates")&&!rt(a=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(i=(e=Tt(t)).length,l={},a)for(f=0;f<i;f++)u(l,o=t[r=e[f]])?(c=l[o],J(c)?l[o].push(r):l[o]=[c,r]):l[o]=r;else for(f=0;f<i;f++)l[t[r=e[f]]]=r;return l}var Ft=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Lt(){return Ft.slice()}var Ct=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Gt(){return Ct.slice()}function Mt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Yt(t,n,e){j(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}w(Gt,"enum",Mt),function(t,n){var e,i,r;for(e=Tt(n),r=0;r<e.length;r++)Yt(t,i=e[r],n[i])}(Gt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ut={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Xt(){return{bool:Ut.bool,int8:Ut.int8,uint8:Ut.uint8,uint8c:Ut.uint8c,int16:Ut.int16,uint16:Ut.uint16,int32:Ut.int32,uint32:Ut.uint32,int64:Ut.int64,uint64:Ut.uint64,float32:Ut.float32,float64:Ut.float64,complex64:Ut.complex64,complex128:Ut.complex128,binary:Ut.binary,generic:Ut.generic,notype:Ut.notype,userdefined_type:Ut.userdefined_type}}w(Lt,"enum",Xt),function(t,n){var e,i,r;for(e=Tt(n),r=0;r<e.length;r++)Yt(t,i=e[r],n[i])}(Lt,Xt());var Ht=Bt(Xt(),{duplicates:!1});var Rt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Wt(t){var n=typeof t;return"string"===n?null===function(t){var n=Rt[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Ht[t];return"string"==typeof n?n:null}(t):null}var zt={float64:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"float64",uint16:"float64",uint8:"float64",uint8c:"float64",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},float32:{float64:"float64",float32:"float32",int32:"float64",int16:"float32",int8:"float32",uint32:"float64",uint16:"float32",uint8:"float32",uint8c:"float32",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int32:{float64:"float64",float32:"float64",int32:"int32",int16:"int32",int8:"int32",uint32:"float64",uint16:"int32",uint8:"int32",uint8c:"int32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},int16:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int8",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint32:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"uint32",uint16:"uint32",uint8:"uint32",uint8c:"uint32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},uint16:{float64:"float64",float32:"float32",int32:"int32",int16:"int32",int8:"int32",uint32:"uint32",uint16:"uint16",uint8:"uint16",uint8c:"uint16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8c:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8c",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},generic:{float64:"generic",float32:"generic",int32:"generic",int16:"generic",int8:"generic",uint32:"generic",uint16:"generic",uint8:"generic",uint8c:"generic",complex64:"generic",complex128:"generic",binary:-1,generic:"generic"},binary:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:"binary",generic:-1}};function Dt(){var t,n,e,i,r,o,u,l,c;for(e={},n=(t=Tt(zt)).length,c=0;c<n;c++){for(r=t[c],u=zt[r],i={},l=0;l<n;l++)i[o=t[l]]=u[o];e[r]=i}return e}function qt(t,n){var e;return 0===arguments.length?Dt():(t=Wt(t),u(zt,t)&&u(e=zt[t],n=Wt(n))?e[n]:null)}var Jt,Kt={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Qt(){var t,n,e,i,r,o,u,l,c;for(e={},n=(t=Tt(Kt)).length,c=0;c<n;c++){for(r=t[c],u=Kt[r],i={},l=0;l<n;l++)i[o=t[l]]=u[o];e[r]=i}return e}function Zt(){var t,n,e,i,r,o,u,l,c;for(e={},n=(t=Tt(Kt)).length,c=0;c<n;c++){for(r=t[c],u=Kt[r],i=[],l=0;l<n;l++)1===u[o=t[l]]&&i.push(o);e[r]=i}return e}function $t(t){return 0===arguments.length?Qt():(void 0===Jt&&(Jt=Zt()),t=Wt(t),u(Jt,t)?Jt[t].slice():null)}var tn=Bt(Xt(),{duplicates:!1});function nn(t){var n=tn[t];return"string"==typeof n?n:null}var en=Xt();function rn(t){var n=en[t];return"number"==typeof n?n:null}function on(t){var n=typeof t;return"number"===n?nn(t)?t:null:"string"===n?rn(t):null}function un(){var t,n=arguments,e=n[0],i="https://stdlib.io/e/"+e+"?";for(t=1;t<n.length;t++)i+="&arg[]="+encodeURIComponent(n[t]);return i}function ln(t,n){var e,i,r,o,u,l,c;for(i=t.length,r=n.length,e=[],c=0,u=0;u<i&&!(c>=r);u++)for(o=t[u],l=c;l<r;l++)if(o===n[l]){c=l+1,e.push(o);break}return e}function cn(t){var n,e,i,r,o;for(n=[],i=0;i<t.length;i++){if(r=t[i],o=void 0,null===(e="string"===(o=typeof r)?rn(r)?r:null:"number"===o?nn(r):null))return new TypeError(un("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",t[i]));n.push(e)}return n}function fn(t,n){var e;for(e=0;e<t.length;e++)if(t[e]===n)return!0;return!1}return function(t,n,e,i){var r,o,u,l,c,f,a,p,m,g,y,s,b,x,v,d,h;if(u=arguments.length>3?i:{},(f=cn(t))instanceof Error)throw f;if(n===t)a=f;else if((a=cn(n))instanceof Error)throw a;if(e===t)p=f;else if(e===n)p=a;else if((p=cn(e))instanceof Error)throw p;for(p.sort(),r={},b=f.length,x=a.length,c=[],v=0;v<b;v++)for(m=f[v],d=0;d<x;d++)if(-1!==(y=qt(m,g=a[d]))&&null!==y)for(fn(p,y)&&c.push(m,g,y),void 0===(o=r[y])&&(o=ln(p,(o=$t(y)).sort()),r[y]=o),h=0;h<o.length;h++)(s=o[h])!==y&&c.push(m,g,s);if(u.enums){for(l=[],v=0;v<c.length;v++)l.push(on(c[v]));c=l}return c}}));
//# sourceMappingURL=index.js.map
"use strict";var j=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var d=j(function(B,M){
var x=require('@stdlib/ndarray-promotion-rules/dist'),N=require('@stdlib/ndarray-safe-casts/dist'),z=require('@stdlib/strided-base-dtype-resolve-enum/dist'),C=require('@stdlib/strided-base-dtype-resolve-str/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist');function S(a,r){var e,i,l,t,u,o,n;for(i=a.length,l=r.length,e=[],n=0,u=0;u<i&&!(n>=l);u++)for(t=a[u],o=n;o<l;o++)if(t===r[o]){n=o+1,e.push(t);break}return e}function k(a){var r,e,i;for(r=[],i=0;i<a.length;i++){if(e=C(a[i]),e===null)return new TypeError(R('1MfDj',a[i]));r.push(e)}return r}function T(a,r){var e;for(e=0;e<a.length;e++)if(a[e]===r)return!0;return!1}function U(a,r,e,i){var l,t,u,o,n,h,c,f,g,m,v,E,w,b,s,p,q;if(arguments.length>3?u=i:u={},h=k(a),h instanceof Error)throw h;if(r===a)c=h;else if(c=k(r),c instanceof Error)throw c;if(e===a)f=h;else if(e===r)f=c;else if(f=k(e),f instanceof Error)throw f;for(f.sort(),l={},w=h.length,b=c.length,n=[],s=0;s<w;s++)for(g=h[s],p=0;p<b;p++)if(m=c[p],v=x(g,m),!(v===-1||v===null))for(T(f,v)&&n.push(g,m,v),t=l[v],t===void 0&&(t=N(v),t=S(f,t.sort()),l[v]=t),q=0;q<t.length;q++)E=t[q],E!==v&&n.push(g,m,E);if(u.enums){for(o=[],s=0;s<n.length;s++)o.push(z(n[s]));n=o}return n}M.exports=U
});var V=d();module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
"use strict";var u=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=u(function(y,t){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),m=require('@stdlib/stats-strided-dstdevpn/dist').ndarray;function p(i){var r,e;return e=i[0],r=c(i[1]),m(s(e,0),r,o(e),q(e,0),d(e))}t.exports=p
});var f=require("path").join,l=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),j=v(),a,n=l(f(__dirname,"./native.js"));g(n)?a=j:a=n;module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

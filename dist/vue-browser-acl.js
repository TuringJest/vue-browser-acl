module.exports=function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="/",r(r.s=0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";function n(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function o(e){return Array.isArray(e)?e:Array.from(e)}function i(e,r){var t=document.createComment(" ");Object.defineProperty(t,"setAttribute",{value:function(){}}),r.text=" ",r.elm=t,r.isComment=!0,r.context=void 0,r.tag=void 0,r.data.directives=void 0,r.componentInstance&&(r.componentInstance.$el=t),e.parentNode&&e.parentNode.replaceChild(t,e)}Object.defineProperty(r,"__esModule",{value:!0});var a=t(2),c=t.n(a),u=t(3),l=t.n(u),s=function(){function e(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();r.default=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e="function"==typeof e?e:function(){return e};var u=Boolean(void 0===t.assumeCase||t.assumeCase),f=r;if(r instanceof l.a||(f=new l.a(a),r(f)),c.a.directive(t.directive||"can",function(r,t,a){var c,l=t.modifiers.disable?"disable":"hide",p=void 0,v=void 0,y=void 0;if(Array.isArray(t.value)){var d=o(t.value);p=d[0],v=d[1],y=d.slice(2)}else if("string"==typeof t.value){var m=t.value.split(" "),b=s(m,2);p=b[0],v=b[1],"string"==typeof v&&u&&v[0].match(/[a-z]/)&&(v=a.context[v]),y=[]}if(!p||!v)throw new Error("Missing verb or subject");var h=t.modifiers.some&&"some"||t.modifiers.every&&"every"||"can";(c=f)[h].apply(c,[e(),p,v].concat(n(y)))||("hide"===l?i(r,a):"disable"===l&&(r.disabled=!0))}),t.helper){var p="$"+(t.directive||"can");c.a.use({install:function(r){r.prototype[p]=function(){var r;return(r=f).can.apply(r,[e()].concat(Array.prototype.slice.call(arguments)))},r.prototype[p].every=function(){var r;return(r=f).every.apply(r,[e()].concat(Array.prototype.slice.call(arguments)))},r.prototype[p].some=function(){var r;return(r=f).some.apply(r,[e()].concat(Array.prototype.slice.call(arguments)))}}})}}},function(e,r){e.exports=require("vue")},function(e,r){e.exports=require("browser-acl")}]);
//# sourceMappingURL=vue-browser-acl.js.map
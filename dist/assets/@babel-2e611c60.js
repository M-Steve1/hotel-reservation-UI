var p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function c(e){if(e.__esModule)return e;var r=e.default;if(typeof r=="function"){var t=function n(){if(this instanceof n){var o=[null];o.push.apply(o,arguments);var i=Function.bind.apply(r,o);return new i}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),t}var f={exports:{}};(function(e){function r(t){return t&&t.__esModule?t:{default:t}}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(f);var l=f.exports;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function d(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}function u(e,r){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},u(e,r)}function y(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,u(e,r)}function _(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}export{a as _,d as a,s as b,p as c,y as d,_ as e,c as g,l as i};

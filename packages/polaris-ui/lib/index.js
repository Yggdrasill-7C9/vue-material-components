!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("ELEMENT",[],n):"object"==typeof exports?exports.ELEMENT=n():e.ELEMENT=n()}("undefined"!=typeof self?self:this,(function(){return(()=>{"use strict";var e={d:(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)},n={};e.d(n,{default:()=>d});var t=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",[e._v("\n  foo\n")])};t._withStripped=!0;function o(e,n,t,o,r,i,s,a){var c,f="function"==typeof e?e.options:e;if(n&&(f.render=n,f.staticRenderFns=t,f._compiled=!0),o&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},f._ssrRegister=c):r&&(c=a?function(){r.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(f.functional){f._injectStyles=c;var l=f.render;f.render=function(e,n){return c.call(n),l(e,n)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:f}}var r=o({name:"Foo"},t,[],!1,null,null,null);r.options.__file="components/Foo/src/Foo.vue";const i=r.exports;i.install=function(e){e.component(i.name,i)};const s=i;var a=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",[e._v("\n  bar\n")])};a._withStripped=!0;var c=o({name:"Bar"},a,[],!1,null,null,null);c.options.__file="components/Bar/src/Bar.vue";const f=c.exports;f.install=function(e){e.component(f.name,f)};const l=f,p=[s,l],u=function(e,n={}){p.forEach((n=>{e.component(n.name,n)}))};"undefined"!=typeof window&&window.Vue&&u(window.Vue);const d={install:u,Foo:s,Bar:l};return n=n.default})()}));
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8679:function(t,e,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function a(t){return n.isMemo(t)?u:c[t.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=u;var f=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&t(e,o,n)}var u=l(r);s&&(u=u.concat(s(r)));for(var c=a(e),v=a(r),b=0;b<u.length;++b){var h=u[b];if(!i[h]&&!(n&&n[h])&&!(v&&v[h])&&!(c&&c[h])){var m=p(r,h);try{f(e,h,m)}catch(g){}}}}return e}},3454:function(t,e,r){"use strict";var n,o;t.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},6840:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5062)}])},5062:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return tJ}});var n,o=r(5893);r(4744);var i=r(1688),u=r(2798),c=r(3935);let a=function(t){t()},f=()=>a;var l=r(7294);let s=(0,l.createContext)(null);r(8679),r(2973);let p={notify(){},get:()=>[]},d=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),y=d?l.useLayoutEffect:l.useEffect;var v=function({store:t,context:e,children:r,serverState:n}){let o=(0,l.useMemo)(()=>{let e=function(t,e){let r;let n=p;function o(){u.onStateChange&&u.onStateChange()}function i(){r||(r=e?e.addNestedSub(o):t.subscribe(o),n=function(){let t=f(),e=null,r=null;return{clear(){e=null,r=null},notify(){t(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){let t=[],r=e;for(;r;)t.push(r),r=r.next;return t},subscribe(t){let n=!0,o=r={callback:t,next:null,prev:r};return o.prev?o.prev.next=o:e=o,function(){n&&null!==e&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}())}let u={addNestedSub:function(t){return i(),n.subscribe(t)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:i,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=p)},getListeners:()=>n};return u}(t);return{store:t,subscription:e,getServerState:n?()=>n:void 0}},[t,n]),i=(0,l.useMemo)(()=>t.getState(),[t]);return y(()=>{let{subscription:e}=o;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),i!==t.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[o,i]),l.createElement((e||s).Provider,{value:o},r)};function b(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(t){return"'"+t+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function h(t){return!!t&&!!t[te]}function m(t){var e;return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===tr}(t)||Array.isArray(t)||!!t[tt]||!!(null===(e=t.constructor)||void 0===e?void 0:e[tt])||E(t)||j(t))}function g(t,e,r){void 0===r&&(r=!1),0===w(t)?(r?Object.keys:tn)(t).forEach(function(n){r&&"symbol"==typeof n||e(n,t[n],t)}):t.forEach(function(r,n){return e(n,r,t)})}function w(t){var e=t[te];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:E(t)?2:j(t)?3:0}function O(t,e){return 2===w(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function S(t,e,r){var n=w(t);2===n?t.set(e,r):3===n?t.add(r):t[e]=r}function P(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function E(t){return H&&t instanceof Map}function j(t){return Q&&t instanceof Set}function x(t){return t.o||t.t}function _(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=to(t);delete e[te];for(var r=tn(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function A(t,e){return void 0===e&&(e=!1),N(t)||h(t)||!m(t)||(w(t)>1&&(t.set=t.add=t.clear=t.delete=T),Object.freeze(t),e&&g(t,function(t,e){return A(e,!0)},!0)),t}function T(){b(2)}function N(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function C(t){var e=ti[t];return e||b(18,t),e}function k(t,e){e&&(C("Patches"),t.u=[],t.s=[],t.v=e)}function R(t){D(t),t.p.forEach(M),t.p=null}function D(t){t===G&&(G=t.l)}function I(t){return G={p:[],l:G,h:t,m:!0,_:0}}function M(t){var e=t[te];0===e.i||1===e.i?e.j():e.g=!0}function $(t,e){e._=e.p.length;var r=e.p[0],n=void 0!==t&&t!==r;return e.h.O||C("ES5").S(e,t,n),n?(r[te].P&&(R(e),b(4)),m(t)&&(t=L(e,t),e.l||q(e,t)),e.u&&C("Patches").M(r[te].t,t,e.u,e.s)):t=L(e,r,[]),R(e),e.u&&e.v(e.u,e.s),t!==Z?t:void 0}function L(t,e,r){if(N(e))return e;var n=e[te];if(!n)return g(e,function(o,i){return F(t,n,e,o,i,r)},!0),e;if(n.A!==t)return e;if(!n.P)return q(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=_(n.k):n.o,i=o,u=!1;3===n.i&&(i=new Set(o),o.clear(),u=!0),g(i,function(e,i){return F(t,n,o,e,i,r,u)}),q(t,o,!1),r&&t.u&&C("Patches").N(n,r,t.u,t.s)}return n.o}function F(t,e,r,n,o,i,u){if(h(o)){var c=L(t,o,i&&e&&3!==e.i&&!O(e.R,n)?i.concat(n):void 0);if(S(r,n,c),!h(c))return;t.m=!1}else u&&r.add(o);if(m(o)&&!N(o)){if(!t.h.D&&t._<1)return;L(t,o),e&&e.A.l||q(t,o)}}function q(t,e,r){void 0===r&&(r=!1),!t.l&&t.h.D&&t.m&&A(e,r)}function V(t,e){var r=t[te];return(r?x(r):t)[e]}function z(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function U(t){t.P||(t.P=!0,t.l&&U(t.l))}function W(t){t.o||(t.o=_(t.t))}function X(t,e,r){var n,o,i,u,c,a,f,l=E(e)?C("MapSet").F(e,r):j(e)?C("MapSet").T(e,r):t.O?(i=o={i:(n=Array.isArray(e))?1:0,A:r?r.A:G,P:!1,I:!1,R:{},l:r,t:e,k:null,o:null,j:null,C:!1},u=tu,n&&(i=[o],u=tc),a=(c=Proxy.revocable(i,u)).revoke,f=c.proxy,o.k=f,o.j=a,f):C("ES5").J(e,r);return(r?r.A:G).p.push(l),l}function K(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return _(t)}u.useSyncExternalStoreWithSelector,i.useSyncExternalStore,a=c.unstable_batchedUpdates;var B,G,J="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),H="undefined"!=typeof Map,Q="undefined"!=typeof Set,Y="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Z=J?Symbol.for("immer-nothing"):((B={})["immer-nothing"]=!0,B),tt=J?Symbol.for("immer-draftable"):"__$immer_draftable",te=J?Symbol.for("immer-state"):"__$immer_state",tr=""+Object.prototype.constructor,tn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,to=Object.getOwnPropertyDescriptors||function(t){var e={};return tn(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},ti={},tu={get:function(t,e){if(e===te)return t;var r,n,o=x(t);if(!O(o,e))return(n=z(o,e))?"value"in n?n.value:null===(r=n.get)||void 0===r?void 0:r.call(t.k):void 0;var i=o[e];return t.I||!m(i)?i:i===V(t.t,e)?(W(t),t.o[e]=X(t.A.h,i,t)):i},has:function(t,e){return e in x(t)},ownKeys:function(t){return Reflect.ownKeys(x(t))},set:function(t,e,r){var n=z(x(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=V(x(t),e),i=null==o?void 0:o[te];if(i&&i.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(P(r,o)&&(void 0!==r||O(t.t,e)))return!0;W(t),U(t)}return t.o[e]===r&&(void 0!==r||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return void 0!==V(t.t,e)||e in t.t?(t.R[e]=!1,W(t),U(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=x(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){b(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){b(12)}},tc={};g(tu,function(t,e){tc[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),tc.deleteProperty=function(t,e){return tc.set.call(this,t,e,void 0)},tc.set=function(t,e,r){return tu.set.call(this,t[0],e,r,t[0])};var ta=new(function(){function t(t){var e=this;this.O=Y,this.D=!0,this.produce=function(t,r,n){if("function"==typeof t&&"function"!=typeof r){var o,i=r;return r=t,function(t){var n=this;void 0===t&&(t=i);for(var o=arguments.length,u=Array(o>1?o-1:0),c=1;c<o;c++)u[c-1]=arguments[c];return e.produce(t,function(t){var e;return(e=r).call.apply(e,[n,t].concat(u))})}}if("function"!=typeof r&&b(6),void 0!==n&&"function"!=typeof n&&b(7),m(t)){var u=I(e),c=X(e,t,void 0),a=!0;try{o=r(c),a=!1}finally{a?R(u):D(u)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then(function(t){return k(u,n),$(t,u)},function(t){throw R(u),t}):(k(u,n),$(o,u))}if(!t||"object"!=typeof t){if(void 0===(o=r(t))&&(o=t),o===Z&&(o=void 0),e.D&&A(o,!0),n){var f=[],l=[];C("Patches").M(t,o,f,l),n(f,l)}return o}b(21,t)},this.produceWithPatches=function(t,r){if("function"==typeof t)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,function(e){return t.apply(void 0,[e].concat(o))})};var n,o,i=e.produce(t,r,function(t,e){n=t,o=e});return"undefined"!=typeof Promise&&i instanceof Promise?i.then(function(t){return[t,n,o]}):[i,n,o]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){m(t)||b(8),h(t)&&(h(e=t)||b(22,e),t=function t(e){if(!m(e))return e;var r,n=e[te],o=w(e);if(n){if(!n.P&&(n.i<4||!C("ES5").K(n)))return n.t;n.I=!0,r=K(e,o),n.I=!1}else r=K(e,o);return g(r,function(e,o){var i;n&&(2===w(i=n.t)?i.get(e):i[e])===o||S(r,e,t(o))}),3===o?new Set(r):r}(e));var e,r=I(this),n=X(this,t,void 0);return n[te].C=!0,D(r),n},e.finishDraft=function(t,e){var r=(t&&t[te]).A;return k(r,e),$(void 0,r)},e.setAutoFreeze=function(t){this.D=t},e.setUseProxies=function(t){t&&!Y&&b(20),this.O=t},e.applyPatches=function(t,e){for(r=e.length-1;r>=0;r--){var r,n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}r>-1&&(e=e.slice(r+1));var o=C("Patches").$;return h(t)?o(t,e):this.produce(t,function(t){return o(t,e)})},t}()),tf=ta.produce;function tl(t){return(tl="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ts(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function tp(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ts(Object(r),!0).forEach(function(e){!function(t,e,r){var n;n=function(t,e){if("object"!==tl(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==tl(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"===tl(n)?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ts(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function td(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}ta.produceWithPatches.bind(ta),ta.setAutoFreeze.bind(ta),ta.setUseProxies.bind(ta),ta.applyPatches.bind(ta),ta.createDraft.bind(ta),ta.finishDraft.bind(ta);var ty="function"==typeof Symbol&&Symbol.observable||"@@observable",tv=function(){return Math.random().toString(36).substring(7).split("").join(".")},tb={INIT:"@@redux/INIT"+tv(),REPLACE:"@@redux/REPLACE"+tv(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+tv()}};function th(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}function tm(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw Error(td(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=e.map(function(t){return t(o)});return n=th.apply(void 0,i)(r.dispatch),tp(tp({},r),{},{dispatch:n})}}}function tg(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(o){return"function"==typeof o?o(r,n,t):e(o)}}}}var tw=tg();tw.withExtraArgument=tg,r(3454);var tO=(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),tS=function(t,e){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(c){i=[6,c],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},tP=function(t,e){for(var r=0,n=e.length,o=t.length;r<n;r++,o++)t[o]=e[r];return t},tE=Object.defineProperty,tj=Object.defineProperties,tx=Object.getOwnPropertyDescriptors,t_=Object.getOwnPropertySymbols,tA=Object.prototype.hasOwnProperty,tT=Object.prototype.propertyIsEnumerable,tN=function(t,e,r){return e in t?tE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},tC=function(t,e){for(var r in e||(e={}))tA.call(e,r)&&tN(t,r,e[r]);if(t_)for(var n=0,o=t_(e);n<o.length;n++){var r=o[n];tT.call(e,r)&&tN(t,r,e[r])}return t},tk=function(t,e){return tj(t,tx(e))},tR="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?th:th.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var tD=function(t){function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=t.apply(this,r)||this;return Object.setPrototypeOf(o,e.prototype),o}return tO(e,t),Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.prototype.concat.apply(this,e)},e.prototype.prepend=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 1===t.length&&Array.isArray(t[0])?new(e.bind.apply(e,tP([void 0],t[0].concat(this)))):new(e.bind.apply(e,tP([void 0],t.concat(this))))},e}(Array);function tI(t){return m(t)?tf(t,function(){}):t}function tM(t,e){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(e){var o=e.apply(void 0,r);if(!o)throw Error("prepareAction did not return an object");return tC(tC({type:t,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:t,payload:r[0]}}return r.toString=function(){return""+t},r.type=t,r.match=function(e){return e.type===t},r}function t$(t){var e,r={},n=[],o={addCase:function(t,e){var n="string"==typeof t?t:t.type;if(n in r)throw Error("addCase cannot be called with two reducers for the same action type");return r[n]=e,o},addMatcher:function(t,e){return n.push({matcher:t,reducer:e}),o},addDefaultCase:function(t){return e=t,o}};return t(o),[r,n,e]}var tL=function(t){void 0===t&&(t=21);for(var e="",r=t;r--;)e+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return e},tF=["name","message","stack","code"],tq=function(t,e){this.payload=t,this.meta=e},tV=function(t,e){this.payload=t,this.meta=e},tz=function(t){if("object"==typeof t&&null!==t){for(var e={},r=0;r<tF.length;r++){var n=tF[r];"string"==typeof t[n]&&(e[n]=t[n])}return e}return{message:String(t)}};function tU(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}!function(){function t(t,e,r){var n=tM(t+"/fulfilled",function(t,e,r,n){return{payload:t,meta:tk(tC({},n||{}),{arg:r,requestId:e,requestStatus:"fulfilled"})}}),o=tM(t+"/pending",function(t,e,r){return{payload:void 0,meta:tk(tC({},r||{}),{arg:e,requestId:t,requestStatus:"pending"})}}),i=tM(t+"/rejected",function(t,e,n,o,i){return{payload:o,error:(r&&r.serializeError||tz)(t||"Rejected"),meta:tk(tC({},i||{}),{arg:n,requestId:e,rejectedWithValue:!!o,requestStatus:"rejected",aborted:(null==t?void 0:t.name)==="AbortError",condition:(null==t?void 0:t.name)==="ConditionError"})}}),u="undefined"!=typeof AbortController?AbortController:function(){function t(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return t.prototype.abort=function(){},t}();return Object.assign(function(t){return function(c,a,f){var l,s=(null==r?void 0:r.idGenerator)?r.idGenerator(t):tL(),p=new u;function d(t){l=t,p.abort()}var y=function(){var u,y;return u=this,y=function(){var u,y,v,b,h,m;return tS(this,function(g){switch(g.label){case 0:var w;if(g.trys.push([0,4,,5]),!(null!==(w=b=null==(u=null==r?void 0:r.condition)?void 0:u.call(r,t,{getState:a,extra:f}))&&"object"==typeof w&&"function"==typeof w.then))return[3,2];return[4,b];case 1:b=g.sent(),g.label=2;case 2:if(!1===b||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return h=new Promise(function(t,e){return p.signal.addEventListener("abort",function(){return e({name:"AbortError",message:l||"Aborted"})})}),c(o(s,t,null==(y=null==r?void 0:r.getPendingMeta)?void 0:y.call(r,{requestId:s,arg:t},{getState:a,extra:f}))),[4,Promise.race([h,Promise.resolve(e(t,{dispatch:c,getState:a,extra:f,requestId:s,signal:p.signal,abort:d,rejectWithValue:function(t,e){return new tq(t,e)},fulfillWithValue:function(t,e){return new tV(t,e)}})).then(function(e){if(e instanceof tq)throw e;return e instanceof tV?n(e.payload,s,t,e.meta):n(e,s,t)})])];case 3:return v=g.sent(),[3,5];case 4:return v=(m=g.sent())instanceof tq?i(null,s,t,m.payload,m.meta):i(m,s,t),[3,5];case 5:return r&&!r.dispatchConditionRejection&&i.match(v)&&v.meta.condition||c(v),[2,v]}})},new Promise(function(t,e){var r=function(t){try{o(y.next(t))}catch(r){e(r)}},n=function(t){try{o(y.throw(t))}catch(r){e(r)}},o=function(e){return e.done?t(e.value):Promise.resolve(e.value).then(r,n)};o((y=y.apply(u,null)).next())})}();return Object.assign(y,{abort:d,requestId:s,arg:t,unwrap:function(){return y.then(tU)}})}},{pending:o,rejected:i,fulfilled:n,typePrefix:t})}t.withTypes=function(){return t}}();var tW="listenerMiddleware";tM(tW+"/add"),tM(tW+"/removeAll"),tM(tW+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==r.g?r.g:globalThis),"undefined"!=typeof window&&window.requestAnimationFrame&&window.requestAnimationFrame,function(){function t(t,e){var r=o[t];return r?r.enumerable=e:o[t]=r={configurable:!0,enumerable:e,get:function(){var e=this[te];return tu.get(e,t)},set:function(e){var r=this[te];tu.set(r,t,e)}},r}function e(t){for(var e=t.length-1;e>=0;e--){var o=t[e][te];if(!o.P)switch(o.i){case 5:n(o)&&U(o);break;case 4:r(o)&&U(o)}}}function r(t){for(var e=t.t,r=t.k,n=tn(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==te){var u=e[i];if(void 0===u&&!O(e,i))return!0;var c=r[i],a=c&&c[te];if(a?a.t!==u:!P(c,u))return!0}}var f=!!e[te];return n.length!==tn(e).length+(f?0:1)}function n(t){var e=t.k;if(e.length!==t.t.length)return!0;var r=Object.getOwnPropertyDescriptor(e,e.length-1);if(r&&!r.get)return!0;for(var n=0;n<e.length;n++)if(!e.hasOwnProperty(n))return!0;return!1}var o={};ti.ES5||(ti.ES5={J:function(e,r){var n=Array.isArray(e),o=function(e,r){if(e){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,t(o,!0));return n}var i=to(r);delete i[te];for(var u=tn(i),c=0;c<u.length;c++){var a=u[c];i[a]=t(a,e||!!i[a].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,e),i={i:n?5:4,A:r?r.A:G,P:!1,I:!1,R:{},l:r,t:e,k:o,o:null,g:!1,C:!1};return Object.defineProperty(o,te,{value:i,writable:!0}),o},S:function(t,r,o){o?h(r)&&r[te].A===t&&e(t.p):(t.u&&function t(e){if(e&&"object"==typeof e){var r=e[te];if(r){var o=r.t,i=r.k,u=r.R,c=r.i;if(4===c)g(i,function(e){e!==te&&(void 0!==o[e]||O(o,e)?u[e]||t(i[e]):(u[e]=!0,U(r)))}),g(o,function(t){void 0!==i[t]||O(i,t)||(u[t]=!1,U(r))});else if(5===c){if(n(r)&&(U(r),u.length=!0),i.length<o.length)for(var a=i.length;a<o.length;a++)u[a]=!1;else for(var f=o.length;f<i.length;f++)u[f]=!0;for(var l=Math.min(i.length,o.length),s=0;s<l;s++)i.hasOwnProperty(s)||(u[s]=!0),void 0===u[s]&&t(i[s])}}}}(t.p[0]),e(t.p))},K:function(t){return 4===t.i?r(t):n(t)}})}();let tX=function(t){var e,r=t.name;if(!r)throw Error("`name` is a required option for createSlice");var n="function"==typeof t.initialState?t.initialState:tI(t.initialState),o=t.reducers||{},i=Object.keys(o),u={},c={},a={};function f(){var e="function"==typeof t.extraReducers?t$(t.extraReducers):[t.extraReducers],r=e[0],o=e[1],i=void 0===o?[]:o,u=e[2],a=void 0===u?void 0:u,f=tC(tC({},void 0===r?{}:r),c);return function(t,e,r,n){void 0===r&&(r=[]);var o,i="function"==typeof e?t$(e):[e,r,void 0],u=i[0],c=i[1],a=i[2];if("function"==typeof t)o=function(){return tI(t())};else{var f=tI(t);o=function(){return f}}function l(t,e){void 0===t&&(t=o());var r=tP([u[e.type]],c.filter(function(t){return(0,t.matcher)(e)}).map(function(t){return t.reducer}));return 0===r.filter(function(t){return!!t}).length&&(r=[a]),r.reduce(function(t,r){if(r){if(h(t)){var n=r(t,e);return void 0===n?t:n}if(m(t))return tf(t,function(t){return r(t,e)});var n=r(t,e);if(void 0===n){if(null===t)return t;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return t},t)}return l.getInitialState=o,l}(n,function(t){for(var e in f)t.addCase(e,f[e]);for(var r=0;r<i.length;r++){var n=i[r];t.addMatcher(n.matcher,n.reducer)}a&&t.addDefaultCase(a)})}return i.forEach(function(t){var e,n,i=o[t],f=r+"/"+t;"reducer"in i?(e=i.reducer,n=i.prepare):e=i,u[t]=e,c[f]=e,a[t]=n?tM(f,n):tM(f)}),{name:r,reducer:function(t,r){return e||(e=f()),e(t,r)},actions:a,caseReducers:u,getInitialState:function(){return e||(e=f()),e.getInitialState()}}}({name:"text",initialState:{value:""},reducers:{updateText:(t,e)=>{t.value=e.payload}}}),{updateText:tK}=tX.actions;var tB=tX.reducer;let tG=function(t){var e,r=function(t){var e,r,n,o;return void 0===(e=t)&&(e={}),n=void 0===(r=e.thunk)||r,e.immutableCheck,e.serializableCheck,o=new tD,n&&("boolean"==typeof n?o.push(tw):o.push(tw.withExtraArgument(n.extraArgument))),o},n=t||{},o=n.reducer,i=void 0===o?void 0:o,u=n.middleware,c=void 0===u?r():u,a=n.devTools,f=void 0===a||a,l=n.preloadedState,s=n.enhancers,p=void 0===s?void 0:s;if("function"==typeof i)e=i;else if(function(t){if("object"!=typeof t||null===t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return e===r}(i))e=function(t){for(var e,r=Object.keys(t),n={},o=0;o<r.length;o++){var i=r[o];"function"==typeof t[i]&&(n[i]=t[i])}var u=Object.keys(n);try{!function(t){Object.keys(t).forEach(function(e){var r=t[e];if(void 0===r(void 0,{type:tb.INIT}))throw Error(td(12));if(void 0===r(void 0,{type:tb.PROBE_UNKNOWN_ACTION()}))throw Error(td(13))})}(n)}catch(c){e=c}return function(t,r){if(void 0===t&&(t={}),e)throw e;for(var o=!1,i={},c=0;c<u.length;c++){var a=u[c],f=n[a],l=t[a],s=f(l,r);if(void 0===s)throw r&&r.type,Error(td(14));i[a]=s,o=o||s!==l}return(o=o||u.length!==Object.keys(t).length)?i:t}}(i);else throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var d=c;"function"==typeof d&&(d=d(r));var y=tm.apply(void 0,d),v=th;f&&(v=tR(tC({trace:!1},"object"==typeof f&&f)));var b=[y];return Array.isArray(p)?b=tP([y],p):"function"==typeof p&&(b=p(b)),function t(e,r,n){if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(td(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw Error(td(1));return n(t)(e,r)}if("function"!=typeof e)throw Error(td(2));var o,i=e,u=r,c=[],a=c,f=!1;function l(){a===c&&(a=c.slice())}function s(){if(f)throw Error(td(3));return u}function p(t){if("function"!=typeof t)throw Error(td(4));if(f)throw Error(td(5));var e=!0;return l(),a.push(t),function(){if(e){if(f)throw Error(td(6));e=!1,l();var r=a.indexOf(t);a.splice(r,1),c=null}}}function d(t){if(!function(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(t))throw Error(td(7));if(void 0===t.type)throw Error(td(8));if(f)throw Error(td(9));try{f=!0,u=i(u,t)}finally{f=!1}for(var e=c=a,r=0;r<e.length;r++)(0,e[r])();return t}return d({type:tb.INIT}),(o={dispatch:d,subscribe:p,getState:s,replaceReducer:function(t){if("function"!=typeof t)throw Error(td(10));i=t,d({type:tb.REPLACE})}})[ty]=function(){var t;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw Error(td(11));function e(){t.next&&t.next(s())}return e(),{unsubscribe:p(e)}}})[ty]=function(){return this},t},o}(e,void 0===l?void 0:l,v.apply(void 0,b))}({reducer:{text:tB}});function tJ(t){let{Component:e,pageProps:r}=t;return(0,o.jsx)(v,{store:tG,children:(0,o.jsx)(e,{...r})})}},4744:function(){},7663:function(t){!function(){var e={229:function(t){var e,r,n,o=t.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(n){r=u}}();var a=[],f=!1,l=-1;function s(){f&&n&&(f=!1,n.length?a=n.concat(a):l=-1,a.length&&p())}function p(){if(!f){var t=c(s);f=!0;for(var e=a.length;e;){for(n=a,a=[];++l<e;)n&&n[l].run();l=-1,e=a.length}n=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(n){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];a.push(new d(t,e)),1!==a.length||f||c(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}},u=!0;try{e[t](i,i.exports,n),u=!1}finally{u&&delete r[t]}return i.exports}n.ab="//";var o=n(229);t.exports=o}()},9921:function(t,e){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,s=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,m=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function O(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case l:case s:case i:case c:case u:case d:return t;default:switch(t=t&&t.$$typeof){case f:case p:case b:case v:case a:return t;default:return e}}case o:return e}}}function S(t){return O(t)===s}e.AsyncMode=l,e.ConcurrentMode=s,e.ContextConsumer=f,e.ContextProvider=a,e.Element=n,e.ForwardRef=p,e.Fragment=i,e.Lazy=b,e.Memo=v,e.Portal=o,e.Profiler=c,e.StrictMode=u,e.Suspense=d,e.isAsyncMode=function(t){return S(t)||O(t)===l},e.isConcurrentMode=S,e.isContextConsumer=function(t){return O(t)===f},e.isContextProvider=function(t){return O(t)===a},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===n},e.isForwardRef=function(t){return O(t)===p},e.isFragment=function(t){return O(t)===i},e.isLazy=function(t){return O(t)===b},e.isMemo=function(t){return O(t)===v},e.isPortal=function(t){return O(t)===o},e.isProfiler=function(t){return O(t)===c},e.isStrictMode=function(t){return O(t)===u},e.isSuspense=function(t){return O(t)===d},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===s||t===c||t===u||t===d||t===y||"object"==typeof t&&null!==t&&(t.$$typeof===b||t.$$typeof===v||t.$$typeof===a||t.$$typeof===f||t.$$typeof===p||t.$$typeof===m||t.$$typeof===g||t.$$typeof===w||t.$$typeof===h)},e.typeOf=O},9864:function(t,e,r){"use strict";t.exports=r(9921)},8359:function(t,e){"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},2973:function(t,e,r){"use strict";r(8359)},3250:function(t,e,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),o="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},i=n.useState,u=n.useEffect,c=n.useLayoutEffect,a=n.useDebugValue;function f(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!o(t,r)}catch(n){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var r=e(),n=i({inst:{value:r,getSnapshot:e}}),o=n[0].inst,l=n[1];return c(function(){o.value=r,o.getSnapshot=e,f(o)&&l({inst:o})},[t,r,e]),u(function(){return f(o)&&l({inst:o}),t(function(){f(o)&&l({inst:o})})},[t]),a(r),r};e.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},6742:function(t,e,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),o=r(1688),i="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},u=o.useSyncExternalStore,c=n.useRef,a=n.useEffect,f=n.useMemo,l=n.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,r,n,o){var s=c(null);if(null===s.current){var p={hasValue:!1,value:null};s.current=p}else p=s.current;s=f(function(){function t(t){if(!a){if(a=!0,u=t,t=n(t),void 0!==o&&p.hasValue){var e=p.value;if(o(e,t))return c=e}return c=t}if(e=c,i(u,t))return e;var r=n(t);return void 0!==o&&o(e,r)?e:(u=t,c=r)}var u,c,a=!1,f=void 0===r?null:r;return[function(){return t(e())},null===f?void 0:function(){return t(f())}]},[e,r,n,o]);var d=u(t,s[0],s[1]);return a(function(){p.hasValue=!0,p.value=d},[d]),l(d),d}},1688:function(t,e,r){"use strict";t.exports=r(3250)},2798:function(t,e,r){"use strict";t.exports=r(6742)}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(6840),e(880)}),_N_E=t.O()}]);
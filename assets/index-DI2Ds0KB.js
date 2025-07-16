function Bh(t,o){for(var i=0;i<o.length;i++){const l=o[i];if(typeof l!="string"&&!Array.isArray(l)){for(const u in l)if(u!=="default"&&!(u in t)){const d=Object.getOwnPropertyDescriptor(l,u);d&&Object.defineProperty(t,u,d.get?d:{enumerable:!0,get:()=>l[u]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=i(u);fetch(u.href,d)}})();function Ec(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ku={exports:{}},Mi={},Nu={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function G0(){if(yp)return Ne;yp=1;var t=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.iterator;function w(S){return S===null||typeof S!="object"?null:(S=g&&S[g]||S["@@iterator"],typeof S=="function"?S:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,R={};function b(S,z,ue){this.props=S,this.context=z,this.refs=R,this.updater=ue||k}b.prototype.isReactComponent={},b.prototype.setState=function(S,z){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,z,"setState")},b.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function B(){}B.prototype=b.prototype;function A(S,z,ue){this.props=S,this.context=z,this.refs=R,this.updater=ue||k}var j=A.prototype=new B;j.constructor=A,M(j,b.prototype),j.isPureReactComponent=!0;var H=Array.isArray,I=Object.prototype.hasOwnProperty,V={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function J(S,z,ue){var he,me={},we=null,_e=null;if(z!=null)for(he in z.ref!==void 0&&(_e=z.ref),z.key!==void 0&&(we=""+z.key),z)I.call(z,he)&&!N.hasOwnProperty(he)&&(me[he]=z[he]);var Ce=arguments.length-2;if(Ce===1)me.children=ue;else if(1<Ce){for(var Me=Array(Ce),it=0;it<Ce;it++)Me[it]=arguments[it+2];me.children=Me}if(S&&S.defaultProps)for(he in Ce=S.defaultProps,Ce)me[he]===void 0&&(me[he]=Ce[he]);return{$$typeof:t,type:S,key:we,ref:_e,props:me,_owner:V.current}}function ge(S,z){return{$$typeof:t,type:S.type,key:z,ref:S.ref,props:S.props,_owner:S._owner}}function Z(S){return typeof S=="object"&&S!==null&&S.$$typeof===t}function Te(S){var z={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ue){return z[ue]})}var Pe=/\/+/g;function Re(S,z){return typeof S=="object"&&S!==null&&S.key!=null?Te(""+S.key):z.toString(36)}function Oe(S,z,ue,he,me){var we=typeof S;(we==="undefined"||we==="boolean")&&(S=null);var _e=!1;if(S===null)_e=!0;else switch(we){case"string":case"number":_e=!0;break;case"object":switch(S.$$typeof){case t:case o:_e=!0}}if(_e)return _e=S,me=me(_e),S=he===""?"."+Re(_e,0):he,H(me)?(ue="",S!=null&&(ue=S.replace(Pe,"$&/")+"/"),Oe(me,z,ue,"",function(it){return it})):me!=null&&(Z(me)&&(me=ge(me,ue+(!me.key||_e&&_e.key===me.key?"":(""+me.key).replace(Pe,"$&/")+"/")+S)),z.push(me)),1;if(_e=0,he=he===""?".":he+":",H(S))for(var Ce=0;Ce<S.length;Ce++){we=S[Ce];var Me=he+Re(we,Ce);_e+=Oe(we,z,ue,Me,me)}else if(Me=w(S),typeof Me=="function")for(S=Me.call(S),Ce=0;!(we=S.next()).done;)we=we.value,Me=he+Re(we,Ce++),_e+=Oe(we,z,ue,Me,me);else if(we==="object")throw z=String(S),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return _e}function Ke(S,z,ue){if(S==null)return S;var he=[],me=0;return Oe(S,he,"","",function(we){return z.call(ue,we,me++)}),he}function Ge(S){if(S._status===-1){var z=S._result;z=z(),z.then(function(ue){(S._status===0||S._status===-1)&&(S._status=1,S._result=ue)},function(ue){(S._status===0||S._status===-1)&&(S._status=2,S._result=ue)}),S._status===-1&&(S._status=0,S._result=z)}if(S._status===1)return S._result.default;throw S._result}var Fe={current:null},Q={transition:null},G={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Q,ReactCurrentOwner:V};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:Ke,forEach:function(S,z,ue){Ke(S,function(){z.apply(this,arguments)},ue)},count:function(S){var z=0;return Ke(S,function(){z++}),z},toArray:function(S){return Ke(S,function(z){return z})||[]},only:function(S){if(!Z(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},Ne.Component=b,Ne.Fragment=i,Ne.Profiler=u,Ne.PureComponent=A,Ne.StrictMode=l,Ne.Suspense=h,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Ne.act=Y,Ne.cloneElement=function(S,z,ue){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var he=M({},S.props),me=S.key,we=S.ref,_e=S._owner;if(z!=null){if(z.ref!==void 0&&(we=z.ref,_e=V.current),z.key!==void 0&&(me=""+z.key),S.type&&S.type.defaultProps)var Ce=S.type.defaultProps;for(Me in z)I.call(z,Me)&&!N.hasOwnProperty(Me)&&(he[Me]=z[Me]===void 0&&Ce!==void 0?Ce[Me]:z[Me])}var Me=arguments.length-2;if(Me===1)he.children=ue;else if(1<Me){Ce=Array(Me);for(var it=0;it<Me;it++)Ce[it]=arguments[it+2];he.children=Ce}return{$$typeof:t,type:S.type,key:me,ref:we,props:he,_owner:_e}},Ne.createContext=function(S){return S={$$typeof:f,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:d,_context:S},S.Consumer=S},Ne.createElement=J,Ne.createFactory=function(S){var z=J.bind(null,S);return z.type=S,z},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(S){return{$$typeof:m,render:S}},Ne.isValidElement=Z,Ne.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:Ge}},Ne.memo=function(S,z){return{$$typeof:v,type:S,compare:z===void 0?null:z}},Ne.startTransition=function(S){var z=Q.transition;Q.transition={};try{S()}finally{Q.transition=z}},Ne.unstable_act=Y,Ne.useCallback=function(S,z){return Fe.current.useCallback(S,z)},Ne.useContext=function(S){return Fe.current.useContext(S)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(S){return Fe.current.useDeferredValue(S)},Ne.useEffect=function(S,z){return Fe.current.useEffect(S,z)},Ne.useId=function(){return Fe.current.useId()},Ne.useImperativeHandle=function(S,z,ue){return Fe.current.useImperativeHandle(S,z,ue)},Ne.useInsertionEffect=function(S,z){return Fe.current.useInsertionEffect(S,z)},Ne.useLayoutEffect=function(S,z){return Fe.current.useLayoutEffect(S,z)},Ne.useMemo=function(S,z){return Fe.current.useMemo(S,z)},Ne.useReducer=function(S,z,ue){return Fe.current.useReducer(S,z,ue)},Ne.useRef=function(S){return Fe.current.useRef(S)},Ne.useState=function(S){return Fe.current.useState(S)},Ne.useSyncExternalStore=function(S,z,ue){return Fe.current.useSyncExternalStore(S,z,ue)},Ne.useTransition=function(){return Fe.current.useTransition()},Ne.version="18.3.1",Ne}var vp;function Fl(){return vp||(vp=1,Nu.exports=G0()),Nu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function Y0(){if(xp)return Mi;xp=1;var t=Fl(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(m,h,v){var y,g={},w=null,k=null;v!==void 0&&(w=""+v),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(k=h.ref);for(y in h)l.call(h,y)&&!d.hasOwnProperty(y)&&(g[y]=h[y]);if(m&&m.defaultProps)for(y in h=m.defaultProps,h)g[y]===void 0&&(g[y]=h[y]);return{$$typeof:o,type:m,key:w,ref:k,props:g,_owner:u.current}}return Mi.Fragment=i,Mi.jsx=f,Mi.jsxs=f,Mi}var wp;function X0(){return wp||(wp=1,ku.exports=Y0()),ku.exports}var P=X0(),E=Fl();const Ur=Ec(E),q0=Bh({__proto__:null,default:Ur},[E]);var il={},$u={exports:{}},jt={},Tu={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function J0(){return Sp||(Sp=1,function(t){function o(Q,G){var Y=Q.length;Q.push(G);e:for(;0<Y;){var S=Y-1>>>1,z=Q[S];if(0<u(z,G))Q[S]=G,Q[Y]=z,Y=S;else break e}}function i(Q){return Q.length===0?null:Q[0]}function l(Q){if(Q.length===0)return null;var G=Q[0],Y=Q.pop();if(Y!==G){Q[0]=Y;e:for(var S=0,z=Q.length,ue=z>>>1;S<ue;){var he=2*(S+1)-1,me=Q[he],we=he+1,_e=Q[we];if(0>u(me,Y))we<z&&0>u(_e,me)?(Q[S]=_e,Q[we]=Y,S=we):(Q[S]=me,Q[he]=Y,S=he);else if(we<z&&0>u(_e,Y))Q[S]=_e,Q[we]=Y,S=we;else break e}}return G}function u(Q,G){var Y=Q.sortIndex-G.sortIndex;return Y!==0?Y:Q.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;t.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();t.unstable_now=function(){return f.now()-m}}var h=[],v=[],y=1,g=null,w=3,k=!1,M=!1,R=!1,b=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(Q){for(var G=i(v);G!==null;){if(G.callback===null)l(v);else if(G.startTime<=Q)l(v),G.sortIndex=G.expirationTime,o(h,G);else break;G=i(v)}}function H(Q){if(R=!1,j(Q),!M)if(i(h)!==null)M=!0,Ge(I);else{var G=i(v);G!==null&&Fe(H,G.startTime-Q)}}function I(Q,G){M=!1,R&&(R=!1,B(J),J=-1),k=!0;var Y=w;try{for(j(G),g=i(h);g!==null&&(!(g.expirationTime>G)||Q&&!Te());){var S=g.callback;if(typeof S=="function"){g.callback=null,w=g.priorityLevel;var z=S(g.expirationTime<=G);G=t.unstable_now(),typeof z=="function"?g.callback=z:g===i(h)&&l(h),j(G)}else l(h);g=i(h)}if(g!==null)var ue=!0;else{var he=i(v);he!==null&&Fe(H,he.startTime-G),ue=!1}return ue}finally{g=null,w=Y,k=!1}}var V=!1,N=null,J=-1,ge=5,Z=-1;function Te(){return!(t.unstable_now()-Z<ge)}function Pe(){if(N!==null){var Q=t.unstable_now();Z=Q;var G=!0;try{G=N(!0,Q)}finally{G?Re():(V=!1,N=null)}}else V=!1}var Re;if(typeof A=="function")Re=function(){A(Pe)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Ke=Oe.port2;Oe.port1.onmessage=Pe,Re=function(){Ke.postMessage(null)}}else Re=function(){b(Pe,0)};function Ge(Q){N=Q,V||(V=!0,Re())}function Fe(Q,G){J=b(function(){Q(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Q){Q.callback=null},t.unstable_continueExecution=function(){M||k||(M=!0,Ge(I))},t.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<Q?Math.floor(1e3/Q):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return i(h)},t.unstable_next=function(Q){switch(w){case 1:case 2:case 3:var G=3;break;default:G=w}var Y=w;w=G;try{return Q()}finally{w=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(Q,G){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var Y=w;w=Q;try{return G()}finally{w=Y}},t.unstable_scheduleCallback=function(Q,G,Y){var S=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?S+Y:S):Y=S,Q){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=Y+z,Q={id:y++,callback:G,priorityLevel:Q,startTime:Y,expirationTime:z,sortIndex:-1},Y>S?(Q.sortIndex=Y,o(v,Q),i(h)===null&&Q===i(v)&&(R?(B(J),J=-1):R=!0,Fe(H,Y-S))):(Q.sortIndex=z,o(h,Q),M||k||(M=!0,Ge(I))),Q},t.unstable_shouldYield=Te,t.unstable_wrapCallback=function(Q){var G=w;return function(){var Y=w;w=G;try{return Q.apply(this,arguments)}finally{w=Y}}}}(Fu)),Fu}var Ep;function Z0(){return Ep||(Ep=1,Tu.exports=J0()),Tu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function ey(){if(_p)return jt;_p=1;var t=Fl(),o=Z0();function i(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,u={};function d(e,r){f(e,r),f(e+"Capture",r)}function f(e,r){for(u[e]=r,e=0;e<r.length;e++)l.add(r[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},g={};function w(e){return h.call(g,e)?!0:h.call(y,e)?!1:v.test(e)?g[e]=!0:(y[e]=!0,!1)}function k(e,r,n,a){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,r,n,a){if(r===null||typeof r>"u"||k(e,r,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function R(e,r,n,a,s,c,p){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=c,this.removeEmptyString=p}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];b[r]=new R(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var B=/[\-:]([a-z])/g;function A(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(B,A);b[r]=new R(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(B,A);b[r]=new R(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(B,A);b[r]=new R(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function j(e,r,n,a){var s=b.hasOwnProperty(r)?b[r]:null;(s!==null?s.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,n,s,a)&&(n=null),a||s===null?w(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(r=s.attributeName,a=s.attributeNamespace,n===null?e.removeAttribute(r):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,a?e.setAttributeNS(a,r,n):e.setAttribute(r,n))))}var H=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),V=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),Te=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),Ke=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),Q=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=Q&&e[Q]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,S;function z(e){if(S===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);S=r&&r[1]||""}return`
`+S+e}var ue=!1;function he(e,r){if(!e||ue)return"";ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(L){var a=L}Reflect.construct(e,[],r)}else{try{r.call()}catch(L){a=L}e.call(r.prototype)}else{try{throw Error()}catch(L){a=L}e()}}catch(L){if(L&&a&&typeof L.stack=="string"){for(var s=L.stack.split(`
`),c=a.stack.split(`
`),p=s.length-1,x=c.length-1;1<=p&&0<=x&&s[p]!==c[x];)x--;for(;1<=p&&0<=x;p--,x--)if(s[p]!==c[x]){if(p!==1||x!==1)do if(p--,x--,0>x||s[p]!==c[x]){var C=`
`+s[p].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=p&&0<=x);break}}}finally{ue=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?z(e):""}function me(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=he(e.type,!1),e;case 11:return e=he(e.type.render,!1),e;case 1:return e=he(e.type,!0),e;default:return""}}function we(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case V:return"Portal";case ge:return"Profiler";case J:return"StrictMode";case Re:return"Suspense";case Oe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Te:return(e.displayName||"Context")+".Consumer";case Z:return(e._context.displayName||"Context")+".Provider";case Pe:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ke:return r=e.displayName||null,r!==null?r:we(e.type)||"Memo";case Ge:r=e._payload,e=e._init;try{return we(e(r))}catch{}}return null}function _e(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(r);case 8:return r===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Me(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function it(e){var r=Me(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),a=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,c=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return s.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function At(e){e._valueTracker||(e._valueTracker=it(e))}function Ie(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),a="";return e&&(a=Me(e)?e.checked?"true":"false":e.value),e=a,e!==n?(r.setValue(e),!0):!1}function Mt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kr(e,r){var n=r.checked;return Y({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function oo(e,r){var n=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;n=Ce(r.value!=null?r.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function pt(e,r){r=r.checked,r!=null&&j(e,"checked",r,!1)}function Bt(e,r){pt(e,r);var n=Ce(r.value),a=r.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?xr(e,r.type,n):r.hasOwnProperty("defaultValue")&&xr(e,r.type,Ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Xt(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xr(e,r,n){(r!=="number"||Mt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function Qr(e,r,n,a){if(e=e.options,r){r={};for(var s=0;s<n.length;s++)r["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=r.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ce(n),r=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}r!==null||e[s].disabled||(r=e[s])}r!==null&&(r.selected=!0)}}function Vo(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return Y({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xi(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(i(92));if(ar(n)){if(1<n.length)throw Error(i(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Ce(n)}}function wr(e,r){var n=Ce(r.value),a=Ce(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Gr(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Ko(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nn(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Ko(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var It,qt=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,a,s){MSApp.execUnsafeLocalFunction(function(){return e(r,n,a,s)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(It=It||document.createElement("div"),It.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=It.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Yr(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vl=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){Vl.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Sr[r]=Sr[e]})});function lr(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+r).trim():r+"px"}function Qo(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var a=n.indexOf("--")===0,s=lr(n,r[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,s):e[n]=s}}var qi=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function io(e,r){if(r){if(qi[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function Go(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ao=null;function Xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,Er=null,_r=null;function Ji(e){if(e=gi(e)){if(typeof lo!="function")throw Error(i(280));var r=e.stateNode;r&&(r=wa(r),lo(e.stateNode,e.type,r))}}function Yo(e){Er?_r?_r.push(e):_r=[e]:Er=e}function Zi(){if(Er){var e=Er,r=_r;if(_r=Er=null,Ji(e),r)for(e=0;e<r.length;e++)Ji(r[e])}}function Xo(e,r){return e(r)}function $n(){}var qr=!1;function ea(e,r,n){if(qr)return e(r,n);qr=!0;try{return Xo(e,r,n)}finally{qr=!1,(Er!==null||_r!==null)&&($n(),Zi())}}function Tn(e,r){var n=e.stateNode;if(n===null)return null;var a=wa(n);if(a===null)return null;n=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,r,typeof n));return n}var _=!1;if(m)try{var T={};Object.defineProperty(T,"passive",{get:function(){_=!0}}),window.addEventListener("test",T,T),window.removeEventListener("test",T,T)}catch{_=!1}function O(e,r,n,a,s,c,p,x,C){var L=Array.prototype.slice.call(arguments,3);try{r.apply(n,L)}catch(K){this.onError(K)}}var W=!1,ee=null,pe=!1,xe=null,le={onError:function(e){W=!0,ee=e}};function ce(e,r,n,a,s,c,p,x,C){W=!1,ee=null,O.apply(le,arguments)}function oe(e,r,n,a,s,c,p,x,C){if(ce.apply(this,arguments),W){if(W){var L=ee;W=!1,ee=null}else throw Error(i(198));pe||(pe=!0,xe=L)}}function ae(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function Ee(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function $e(e){if(ae(e)!==e)throw Error(i(188))}function ct(e){var r=e.alternate;if(!r){if(r=ae(e),r===null)throw Error(i(188));return r!==e?null:e}for(var n=e,a=r;;){var s=n.return;if(s===null)break;var c=s.alternate;if(c===null){if(a=s.return,a!==null){n=a;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===n)return $e(s),e;if(c===a)return $e(s),r;c=c.sibling}throw Error(i(188))}if(n.return!==a.return)n=s,a=c;else{for(var p=!1,x=s.child;x;){if(x===n){p=!0,n=s,a=c;break}if(x===a){p=!0,a=s,n=c;break}x=x.sibling}if(!p){for(x=c.child;x;){if(x===n){p=!0,n=c,a=s;break}if(x===a){p=!0,a=c,n=s;break}x=x.sibling}if(!p)throw Error(i(189))}}if(n.alternate!==a)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:r}function We(e){return e=ct(e),e!==null?Le(e):null}function Le(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Le(e);if(r!==null)return r;e=e.sibling}return null}var Xe=o.unstable_scheduleCallback,Fr=o.unstable_cancelCallback,Fn=o.unstable_shouldYield,sr=o.unstable_requestPaint,ze=o.unstable_now,qo=o.unstable_getCurrentPriorityLevel,Mr=o.unstable_ImmediatePriority,Cr=o.unstable_UserBlockingPriority,br=o.unstable_NormalPriority,so=o.unstable_LowPriority,De=o.unstable_IdlePriority,Qe=null,xt=null;function Mn(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Qe,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Kl,Jr=Math.log,ta=Math.LN2;function Kl(e){return e>>>=0,e===0?32:31-(Jr(e)/ta|0)|0}var ra=64,na=4194304;function Jo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oa(e,r){var n=e.pendingLanes;if(n===0)return 0;var a=0,s=e.suspendedLanes,c=e.pingedLanes,p=n&268435455;if(p!==0){var x=p&~s;x!==0?a=Jo(x):(c&=p,c!==0&&(a=Jo(c)))}else p=n&~s,p!==0?a=Jo(p):c!==0&&(a=Jo(c));if(a===0)return 0;if(r!==0&&r!==a&&(r&s)===0&&(s=a&-a,c=r&-r,s>=c||s===16&&(c&4194240)!==0))return r;if((a&4)!==0&&(a|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=a;0<r;)n=31-Ae(r),s=1<<n,a|=e[n],r&=~s;return a}function pg(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hg(e,r){for(var n=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes;0<c;){var p=31-Ae(c),x=1<<p,C=s[p];C===-1?((x&n)===0||(x&a)!==0)&&(s[p]=pg(x,r)):C<=r&&(e.expiredLanes|=x),c&=~x}}function Ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qc(){var e=ra;return ra<<=1,(ra&4194240)===0&&(ra=64),e}function Gl(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Zo(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Ae(r),e[r]=n}function mg(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Ae(n),c=1<<s;r[s]=0,a[s]=-1,e[s]=-1,n&=~c}}function Yl(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var a=31-Ae(n),s=1<<a;s&r|e[a]&r&&(e[a]|=r),n&=~s}}var Ue=0;function Gc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Yc,Xl,Xc,qc,Jc,ql=!1,ia=[],Zr=null,en=null,tn=null,ei=new Map,ti=new Map,rn=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zc(e,r){switch(e){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":ei.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(r.pointerId)}}function ri(e,r,n,a,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:r,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[s]},r!==null&&(r=gi(r),r!==null&&Xl(r)),e):(e.eventSystemFlags|=a,r=e.targetContainers,s!==null&&r.indexOf(s)===-1&&r.push(s),e)}function yg(e,r,n,a,s){switch(r){case"focusin":return Zr=ri(Zr,e,r,n,a,s),!0;case"dragenter":return en=ri(en,e,r,n,a,s),!0;case"mouseover":return tn=ri(tn,e,r,n,a,s),!0;case"pointerover":var c=s.pointerId;return ei.set(c,ri(ei.get(c)||null,e,r,n,a,s)),!0;case"gotpointercapture":return c=s.pointerId,ti.set(c,ri(ti.get(c)||null,e,r,n,a,s)),!0}return!1}function ed(e){var r=bn(e.target);if(r!==null){var n=ae(r);if(n!==null){if(r=n.tag,r===13){if(r=Ee(n),r!==null){e.blockedOn=r,Jc(e.priority,function(){Xc(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function aa(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Zl(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);ao=a,n.target.dispatchEvent(a),ao=null}else return r=gi(n),r!==null&&Xl(r),e.blockedOn=n,!1;r.shift()}return!0}function td(e,r,n){aa(e)&&n.delete(r)}function vg(){ql=!1,Zr!==null&&aa(Zr)&&(Zr=null),en!==null&&aa(en)&&(en=null),tn!==null&&aa(tn)&&(tn=null),ei.forEach(td),ti.forEach(td)}function ni(e,r){e.blockedOn===r&&(e.blockedOn=null,ql||(ql=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vg)))}function oi(e){function r(s){return ni(s,e)}if(0<ia.length){ni(ia[0],e);for(var n=1;n<ia.length;n++){var a=ia[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Zr!==null&&ni(Zr,e),en!==null&&ni(en,e),tn!==null&&ni(tn,e),ei.forEach(r),ti.forEach(r),n=0;n<rn.length;n++)a=rn[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)ed(n),n.blockedOn===null&&rn.shift()}var uo=H.ReactCurrentBatchConfig,la=!0;function xg(e,r,n,a){var s=Ue,c=uo.transition;uo.transition=null;try{Ue=1,Jl(e,r,n,a)}finally{Ue=s,uo.transition=c}}function wg(e,r,n,a){var s=Ue,c=uo.transition;uo.transition=null;try{Ue=4,Jl(e,r,n,a)}finally{Ue=s,uo.transition=c}}function Jl(e,r,n,a){if(la){var s=Zl(e,r,n,a);if(s===null)gs(e,r,a,sa,n),Zc(e,a);else if(yg(s,e,r,n,a))a.stopPropagation();else if(Zc(e,a),r&4&&-1<gg.indexOf(e)){for(;s!==null;){var c=gi(s);if(c!==null&&Yc(c),c=Zl(e,r,n,a),c===null&&gs(e,r,a,sa,n),c===s)break;s=c}s!==null&&a.stopPropagation()}else gs(e,r,a,null,n)}}var sa=null;function Zl(e,r,n,a){if(sa=null,e=Xr(a),e=bn(e),e!==null)if(r=ae(e),r===null)e=null;else if(n=r.tag,n===13){if(e=Ee(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return sa=e,null}function rd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qo()){case Mr:return 1;case Cr:return 4;case br:case so:return 16;case De:return 536870912;default:return 16}default:return 16}}var nn=null,es=null,ua=null;function nd(){if(ua)return ua;var e,r=es,n=r.length,a,s="value"in nn?nn.value:nn.textContent,c=s.length;for(e=0;e<n&&r[e]===s[e];e++);var p=n-e;for(a=1;a<=p&&r[n-a]===s[c-a];a++);return ua=s.slice(e,1<a?1-a:void 0)}function ca(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function da(){return!0}function od(){return!1}function Ht(e){function r(n,a,s,c,p){this._reactName=n,this._targetInst=s,this.type=a,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?da:od,this.isPropagationStopped=od,this}return Y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),r}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=Ht(co),ii=Y({},co,{view:0,detail:0}),Sg=Ht(ii),rs,ns,ai,fa=Y({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(rs=e.screenX-ai.screenX,ns=e.screenY-ai.screenY):ns=rs=0,ai=e),rs)},movementY:function(e){return"movementY"in e?e.movementY:ns}}),id=Ht(fa),Eg=Y({},fa,{dataTransfer:0}),_g=Ht(Eg),Cg=Y({},ii,{relatedTarget:0}),os=Ht(Cg),Pg=Y({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),kg=Ht(Pg),Ng=Y({},co,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$g=Ht(Ng),Tg=Y({},co,{data:0}),ad=Ht(Tg),Fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dg(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=bg[e])?!!r[e]:!1}function is(){return Dg}var Rg=Y({},ii,{key:function(e){if(e.key){var r=Fg[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=ca(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?ca(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ca(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lg=Ht(Rg),Og=Y({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ld=Ht(Og),jg=Y({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),zg=Ht(jg),Ag=Y({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bg=Ht(Ag),Ig=Y({},fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hg=Ht(Ig),Wg=[9,13,27,32],as=m&&"CompositionEvent"in window,li=null;m&&"documentMode"in document&&(li=document.documentMode);var Ug=m&&"TextEvent"in window&&!li,sd=m&&(!as||li&&8<li&&11>=li),ud=" ",cd=!1;function dd(e,r){switch(e){case"keyup":return Wg.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fo=!1;function Vg(e,r){switch(e){case"compositionend":return fd(r);case"keypress":return r.which!==32?null:(cd=!0,ud);case"textInput":return e=r.data,e===ud&&cd?null:e;default:return null}}function Kg(e,r){if(fo)return e==="compositionend"||!as&&dd(e,r)?(e=nd(),ua=es=nn=null,fo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return sd&&r.locale!=="ko"?null:r.data;default:return null}}var Qg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pd(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Qg[e.type]:r==="textarea"}function hd(e,r,n,a){Yo(a),r=ya(r,"onChange"),0<r.length&&(n=new ts("onChange","change",null,n,a),e.push({event:n,listeners:r}))}var si=null,ui=null;function Gg(e){bd(e,0)}function pa(e){var r=yo(e);if(Ie(r))return e}function Yg(e,r){if(e==="change")return r}var md=!1;if(m){var ls;if(m){var ss="oninput"in document;if(!ss){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),ss=typeof gd.oninput=="function"}ls=ss}else ls=!1;md=ls&&(!document.documentMode||9<document.documentMode)}function yd(){si&&(si.detachEvent("onpropertychange",vd),ui=si=null)}function vd(e){if(e.propertyName==="value"&&pa(ui)){var r=[];hd(r,ui,e,Xr(e)),ea(Gg,r)}}function Xg(e,r,n){e==="focusin"?(yd(),si=r,ui=n,si.attachEvent("onpropertychange",vd)):e==="focusout"&&yd()}function qg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pa(ui)}function Jg(e,r){if(e==="click")return pa(r)}function Zg(e,r){if(e==="input"||e==="change")return pa(r)}function e0(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var ur=typeof Object.is=="function"?Object.is:e0;function ci(e,r){if(ur(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var s=n[a];if(!h.call(r,s)||!ur(e[s],r[s]))return!1}return!0}function xd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wd(e,r){var n=xd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=r&&a>=r)return{node:n,offset:r-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xd(n)}}function Sd(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Sd(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Ed(){for(var e=window,r=Mt();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Mt(e.document)}return r}function us(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function t0(e){var r=Ed(),n=e.focusedElem,a=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Sd(n.ownerDocument.documentElement,n)){if(a!==null&&us(n)){if(r=a.start,e=a.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,c=Math.min(a.start,s);a=a.end===void 0?c:Math.min(a.end,s),!e.extend&&c>a&&(s=a,a=c,c=s),s=wd(n,c);var p=wd(n,a);s&&p&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(r=r.createRange(),r.setStart(s.node,s.offset),e.removeAllRanges(),c>a?(e.addRange(r),e.extend(p.node,p.offset)):(r.setEnd(p.node,p.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var r0=m&&"documentMode"in document&&11>=document.documentMode,po=null,cs=null,di=null,ds=!1;function _d(e,r,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ds||po==null||po!==Mt(a)||(a=po,"selectionStart"in a&&us(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),di&&ci(di,a)||(di=a,a=ya(cs,"onSelect"),0<a.length&&(r=new ts("onSelect","select",null,r,n),e.push({event:r,listeners:a}),r.target=po)))}function ha(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var ho={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},fs={},Cd={};m&&(Cd=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function ma(e){if(fs[e])return fs[e];if(!ho[e])return e;var r=ho[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Cd)return fs[e]=r[n];return e}var Pd=ma("animationend"),kd=ma("animationiteration"),Nd=ma("animationstart"),$d=ma("transitionend"),Td=new Map,Fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,r){Td.set(e,r),d(r,[e])}for(var ps=0;ps<Fd.length;ps++){var hs=Fd[ps],n0=hs.toLowerCase(),o0=hs[0].toUpperCase()+hs.slice(1);on(n0,"on"+o0)}on(Pd,"onAnimationEnd"),on(kd,"onAnimationIteration"),on(Nd,"onAnimationStart"),on("dblclick","onDoubleClick"),on("focusin","onFocus"),on("focusout","onBlur"),on($d,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));function Md(e,r,n){var a=e.type||"unknown-event";e.currentTarget=n,oe(a,r,void 0,e),e.currentTarget=null}function bd(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],s=a.event;a=a.listeners;e:{var c=void 0;if(r)for(var p=a.length-1;0<=p;p--){var x=a[p],C=x.instance,L=x.currentTarget;if(x=x.listener,C!==c&&s.isPropagationStopped())break e;Md(s,x,L),c=C}else for(p=0;p<a.length;p++){if(x=a[p],C=x.instance,L=x.currentTarget,x=x.listener,C!==c&&s.isPropagationStopped())break e;Md(s,x,L),c=C}}}if(pe)throw e=xe,pe=!1,xe=null,e}function qe(e,r){var n=r[Es];n===void 0&&(n=r[Es]=new Set);var a=e+"__bubble";n.has(a)||(Dd(r,e,2,!1),n.add(a))}function ms(e,r,n){var a=0;r&&(a|=4),Dd(n,e,a,r)}var ga="_reactListening"+Math.random().toString(36).slice(2);function pi(e){if(!e[ga]){e[ga]=!0,l.forEach(function(n){n!=="selectionchange"&&(i0.has(n)||ms(n,!1,e),ms(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[ga]||(r[ga]=!0,ms("selectionchange",!1,r))}}function Dd(e,r,n,a){switch(rd(r)){case 1:var s=xg;break;case 4:s=wg;break;default:s=Jl}n=s.bind(null,r,n,e),s=void 0,!_||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(r,n,{capture:!0,passive:s}):e.addEventListener(r,n,!0):s!==void 0?e.addEventListener(r,n,{passive:s}):e.addEventListener(r,n,!1)}function gs(e,r,n,a,s){var c=a;if((r&1)===0&&(r&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var x=a.stateNode.containerInfo;if(x===s||x.nodeType===8&&x.parentNode===s)break;if(p===4)for(p=a.return;p!==null;){var C=p.tag;if((C===3||C===4)&&(C=p.stateNode.containerInfo,C===s||C.nodeType===8&&C.parentNode===s))return;p=p.return}for(;x!==null;){if(p=bn(x),p===null)return;if(C=p.tag,C===5||C===6){a=c=p;continue e}x=x.parentNode}}a=a.return}ea(function(){var L=c,K=Xr(n),X=[];e:{var U=Td.get(e);if(U!==void 0){var ne=ts,se=e;switch(e){case"keypress":if(ca(n)===0)break e;case"keydown":case"keyup":ne=Lg;break;case"focusin":se="focus",ne=os;break;case"focusout":se="blur",ne=os;break;case"beforeblur":case"afterblur":ne=os;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=_g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=zg;break;case Pd:case kd:case Nd:ne=kg;break;case $d:ne=Bg;break;case"scroll":ne=Sg;break;case"wheel":ne=Hg;break;case"copy":case"cut":case"paste":ne=$g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=ld}var de=(r&4)!==0,at=!de&&e==="scroll",F=de?U!==null?U+"Capture":null:U;de=[];for(var $=L,D;$!==null;){D=$;var q=D.stateNode;if(D.tag===5&&q!==null&&(D=q,F!==null&&(q=Tn($,F),q!=null&&de.push(hi($,q,D)))),at)break;$=$.return}0<de.length&&(U=new ne(U,se,null,n,K),X.push({event:U,listeners:de}))}}if((r&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",U&&n!==ao&&(se=n.relatedTarget||n.fromElement)&&(bn(se)||se[Dr]))break e;if((ne||U)&&(U=K.window===K?K:(U=K.ownerDocument)?U.defaultView||U.parentWindow:window,ne?(se=n.relatedTarget||n.toElement,ne=L,se=se?bn(se):null,se!==null&&(at=ae(se),se!==at||se.tag!==5&&se.tag!==6)&&(se=null)):(ne=null,se=L),ne!==se)){if(de=id,q="onMouseLeave",F="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(de=ld,q="onPointerLeave",F="onPointerEnter",$="pointer"),at=ne==null?U:yo(ne),D=se==null?U:yo(se),U=new de(q,$+"leave",ne,n,K),U.target=at,U.relatedTarget=D,q=null,bn(K)===L&&(de=new de(F,$+"enter",se,n,K),de.target=D,de.relatedTarget=at,q=de),at=q,ne&&se)t:{for(de=ne,F=se,$=0,D=de;D;D=mo(D))$++;for(D=0,q=F;q;q=mo(q))D++;for(;0<$-D;)de=mo(de),$--;for(;0<D-$;)F=mo(F),D--;for(;$--;){if(de===F||F!==null&&de===F.alternate)break t;de=mo(de),F=mo(F)}de=null}else de=null;ne!==null&&Rd(X,U,ne,de,!1),se!==null&&at!==null&&Rd(X,at,se,de,!0)}}e:{if(U=L?yo(L):window,ne=U.nodeName&&U.nodeName.toLowerCase(),ne==="select"||ne==="input"&&U.type==="file")var fe=Yg;else if(pd(U))if(md)fe=Zg;else{fe=qg;var ye=Xg}else(ne=U.nodeName)&&ne.toLowerCase()==="input"&&(U.type==="checkbox"||U.type==="radio")&&(fe=Jg);if(fe&&(fe=fe(e,L))){hd(X,fe,n,K);break e}ye&&ye(e,U,L),e==="focusout"&&(ye=U._wrapperState)&&ye.controlled&&U.type==="number"&&xr(U,"number",U.value)}switch(ye=L?yo(L):window,e){case"focusin":(pd(ye)||ye.contentEditable==="true")&&(po=ye,cs=L,di=null);break;case"focusout":di=cs=po=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,_d(X,n,K);break;case"selectionchange":if(r0)break;case"keydown":case"keyup":_d(X,n,K)}var ve;if(as)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else fo?dd(e,n)&&(Se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Se="onCompositionStart");Se&&(sd&&n.locale!=="ko"&&(fo||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&fo&&(ve=nd()):(nn=K,es="value"in nn?nn.value:nn.textContent,fo=!0)),ye=ya(L,Se),0<ye.length&&(Se=new ad(Se,e,null,n,K),X.push({event:Se,listeners:ye}),ve?Se.data=ve:(ve=fd(n),ve!==null&&(Se.data=ve)))),(ve=Ug?Vg(e,n):Kg(e,n))&&(L=ya(L,"onBeforeInput"),0<L.length&&(K=new ad("onBeforeInput","beforeinput",null,n,K),X.push({event:K,listeners:L}),K.data=ve))}bd(X,r)})}function hi(e,r,n){return{instance:e,listener:r,currentTarget:n}}function ya(e,r){for(var n=r+"Capture",a=[];e!==null;){var s=e,c=s.stateNode;s.tag===5&&c!==null&&(s=c,c=Tn(e,n),c!=null&&a.unshift(hi(e,c,s)),c=Tn(e,r),c!=null&&a.push(hi(e,c,s))),e=e.return}return a}function mo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rd(e,r,n,a,s){for(var c=r._reactName,p=[];n!==null&&n!==a;){var x=n,C=x.alternate,L=x.stateNode;if(C!==null&&C===a)break;x.tag===5&&L!==null&&(x=L,s?(C=Tn(n,c),C!=null&&p.unshift(hi(n,C,x))):s||(C=Tn(n,c),C!=null&&p.push(hi(n,C,x)))),n=n.return}p.length!==0&&e.push({event:r,listeners:p})}var a0=/\r\n?/g,l0=/\u0000|\uFFFD/g;function Ld(e){return(typeof e=="string"?e:""+e).replace(a0,`
`).replace(l0,"")}function va(e,r,n){if(r=Ld(r),Ld(e)!==r&&n)throw Error(i(425))}function xa(){}var ys=null,vs=null;function xs(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ws=typeof setTimeout=="function"?setTimeout:void 0,s0=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,u0=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(e){return Od.resolve(null).then(e).catch(c0)}:ws;function c0(e){setTimeout(function(){throw e})}function Ss(e,r){var n=r,a=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(a===0){e.removeChild(s),oi(r);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=s}while(n);oi(r)}function an(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function jd(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var go=Math.random().toString(36).slice(2),Pr="__reactFiber$"+go,mi="__reactProps$"+go,Dr="__reactContainer$"+go,Es="__reactEvents$"+go,d0="__reactListeners$"+go,f0="__reactHandles$"+go;function bn(e){var r=e[Pr];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Dr]||n[Pr]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=jd(e);e!==null;){if(n=e[Pr])return n;e=jd(e)}return r}e=n,n=e.parentNode}return null}function gi(e){return e=e[Pr]||e[Dr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function wa(e){return e[mi]||null}var _s=[],vo=-1;function ln(e){return{current:e}}function Je(e){0>vo||(e.current=_s[vo],_s[vo]=null,vo--)}function Ye(e,r){vo++,_s[vo]=e.current,e.current=r}var sn={},_t=ln(sn),bt=ln(!1),Dn=sn;function xo(e,r){var n=e.type.contextTypes;if(!n)return sn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var s={},c;for(c in n)s[c]=r[c];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),s}function Dt(e){return e=e.childContextTypes,e!=null}function Sa(){Je(bt),Je(_t)}function zd(e,r,n){if(_t.current!==sn)throw Error(i(168));Ye(_t,r),Ye(bt,n)}function Ad(e,r,n){var a=e.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var s in a)if(!(s in r))throw Error(i(108,_e(e)||"Unknown",s));return Y({},n,a)}function Ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Dn=_t.current,Ye(_t,e),Ye(bt,bt.current),!0}function Bd(e,r,n){var a=e.stateNode;if(!a)throw Error(i(169));n?(e=Ad(e,r,Dn),a.__reactInternalMemoizedMergedChildContext=e,Je(bt),Je(_t),Ye(_t,e)):Je(bt),Ye(bt,n)}var Rr=null,_a=!1,Cs=!1;function Id(e){Rr===null?Rr=[e]:Rr.push(e)}function p0(e){_a=!0,Id(e)}function un(){if(!Cs&&Rr!==null){Cs=!0;var e=0,r=Ue;try{var n=Rr;for(Ue=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Rr=null,_a=!1}catch(s){throw Rr!==null&&(Rr=Rr.slice(e+1)),Xe(Mr,un),s}finally{Ue=r,Cs=!1}}return null}var wo=[],So=0,Ca=null,Pa=0,Jt=[],Zt=0,Rn=null,Lr=1,Or="";function Ln(e,r){wo[So++]=Pa,wo[So++]=Ca,Ca=e,Pa=r}function Hd(e,r,n){Jt[Zt++]=Lr,Jt[Zt++]=Or,Jt[Zt++]=Rn,Rn=e;var a=Lr;e=Or;var s=32-Ae(a)-1;a&=~(1<<s),n+=1;var c=32-Ae(r)+s;if(30<c){var p=s-s%5;c=(a&(1<<p)-1).toString(32),a>>=p,s-=p,Lr=1<<32-Ae(r)+s|n<<s|a,Or=c+e}else Lr=1<<c|n<<s|a,Or=e}function Ps(e){e.return!==null&&(Ln(e,1),Hd(e,1,0))}function ks(e){for(;e===Ca;)Ca=wo[--So],wo[So]=null,Pa=wo[--So],wo[So]=null;for(;e===Rn;)Rn=Jt[--Zt],Jt[Zt]=null,Or=Jt[--Zt],Jt[Zt]=null,Lr=Jt[--Zt],Jt[Zt]=null}var Wt=null,Ut=null,et=!1,cr=null;function Wd(e,r){var n=nr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Ud(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Wt=e,Ut=an(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Wt=e,Ut=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Rn!==null?{id:Lr,overflow:Or}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=nr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,Wt=e,Ut=null,!0):!1;default:return!1}}function Ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $s(e){if(et){var r=Ut;if(r){var n=r;if(!Ud(e,r)){if(Ns(e))throw Error(i(418));r=an(n.nextSibling);var a=Wt;r&&Ud(e,r)?Wd(a,n):(e.flags=e.flags&-4097|2,et=!1,Wt=e)}}else{if(Ns(e))throw Error(i(418));e.flags=e.flags&-4097|2,et=!1,Wt=e}}}function Vd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Wt=e}function ka(e){if(e!==Wt)return!1;if(!et)return Vd(e),et=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!xs(e.type,e.memoizedProps)),r&&(r=Ut)){if(Ns(e))throw Kd(),Error(i(418));for(;r;)Wd(e,r),r=an(r.nextSibling)}if(Vd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){Ut=an(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}Ut=null}}else Ut=Wt?an(e.stateNode.nextSibling):null;return!0}function Kd(){for(var e=Ut;e;)e=an(e.nextSibling)}function Eo(){Ut=Wt=null,et=!1}function Ts(e){cr===null?cr=[e]:cr.push(e)}var h0=H.ReactCurrentBatchConfig;function yi(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var a=n.stateNode}if(!a)throw Error(i(147,e));var s=a,c=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===c?r.ref:(r=function(p){var x=s.refs;p===null?delete x[c]:x[c]=p},r._stringRef=c,r)}if(typeof e!="string")throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Na(e,r){throw e=Object.prototype.toString.call(r),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Qd(e){var r=e._init;return r(e._payload)}function Gd(e){function r(F,$){if(e){var D=F.deletions;D===null?(F.deletions=[$],F.flags|=16):D.push($)}}function n(F,$){if(!e)return null;for(;$!==null;)r(F,$),$=$.sibling;return null}function a(F,$){for(F=new Map;$!==null;)$.key!==null?F.set($.key,$):F.set($.index,$),$=$.sibling;return F}function s(F,$){return F=yn(F,$),F.index=0,F.sibling=null,F}function c(F,$,D){return F.index=D,e?(D=F.alternate,D!==null?(D=D.index,D<$?(F.flags|=2,$):D):(F.flags|=2,$)):(F.flags|=1048576,$)}function p(F){return e&&F.alternate===null&&(F.flags|=2),F}function x(F,$,D,q){return $===null||$.tag!==6?($=wu(D,F.mode,q),$.return=F,$):($=s($,D),$.return=F,$)}function C(F,$,D,q){var fe=D.type;return fe===N?K(F,$,D.props.children,q,D.key):$!==null&&($.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Ge&&Qd(fe)===$.type)?(q=s($,D.props),q.ref=yi(F,$,D),q.return=F,q):(q=qa(D.type,D.key,D.props,null,F.mode,q),q.ref=yi(F,$,D),q.return=F,q)}function L(F,$,D,q){return $===null||$.tag!==4||$.stateNode.containerInfo!==D.containerInfo||$.stateNode.implementation!==D.implementation?($=Su(D,F.mode,q),$.return=F,$):($=s($,D.children||[]),$.return=F,$)}function K(F,$,D,q,fe){return $===null||$.tag!==7?($=Wn(D,F.mode,q,fe),$.return=F,$):($=s($,D),$.return=F,$)}function X(F,$,D){if(typeof $=="string"&&$!==""||typeof $=="number")return $=wu(""+$,F.mode,D),$.return=F,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case I:return D=qa($.type,$.key,$.props,null,F.mode,D),D.ref=yi(F,null,$),D.return=F,D;case V:return $=Su($,F.mode,D),$.return=F,$;case Ge:var q=$._init;return X(F,q($._payload),D)}if(ar($)||G($))return $=Wn($,F.mode,D,null),$.return=F,$;Na(F,$)}return null}function U(F,$,D,q){var fe=$!==null?$.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return fe!==null?null:x(F,$,""+D,q);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case I:return D.key===fe?C(F,$,D,q):null;case V:return D.key===fe?L(F,$,D,q):null;case Ge:return fe=D._init,U(F,$,fe(D._payload),q)}if(ar(D)||G(D))return fe!==null?null:K(F,$,D,q,null);Na(F,D)}return null}function ne(F,$,D,q,fe){if(typeof q=="string"&&q!==""||typeof q=="number")return F=F.get(D)||null,x($,F,""+q,fe);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case I:return F=F.get(q.key===null?D:q.key)||null,C($,F,q,fe);case V:return F=F.get(q.key===null?D:q.key)||null,L($,F,q,fe);case Ge:var ye=q._init;return ne(F,$,D,ye(q._payload),fe)}if(ar(q)||G(q))return F=F.get(D)||null,K($,F,q,fe,null);Na($,q)}return null}function se(F,$,D,q){for(var fe=null,ye=null,ve=$,Se=$=0,gt=null;ve!==null&&Se<D.length;Se++){ve.index>Se?(gt=ve,ve=null):gt=ve.sibling;var Be=U(F,ve,D[Se],q);if(Be===null){ve===null&&(ve=gt);break}e&&ve&&Be.alternate===null&&r(F,ve),$=c(Be,$,Se),ye===null?fe=Be:ye.sibling=Be,ye=Be,ve=gt}if(Se===D.length)return n(F,ve),et&&Ln(F,Se),fe;if(ve===null){for(;Se<D.length;Se++)ve=X(F,D[Se],q),ve!==null&&($=c(ve,$,Se),ye===null?fe=ve:ye.sibling=ve,ye=ve);return et&&Ln(F,Se),fe}for(ve=a(F,ve);Se<D.length;Se++)gt=ne(ve,F,Se,D[Se],q),gt!==null&&(e&&gt.alternate!==null&&ve.delete(gt.key===null?Se:gt.key),$=c(gt,$,Se),ye===null?fe=gt:ye.sibling=gt,ye=gt);return e&&ve.forEach(function(vn){return r(F,vn)}),et&&Ln(F,Se),fe}function de(F,$,D,q){var fe=G(D);if(typeof fe!="function")throw Error(i(150));if(D=fe.call(D),D==null)throw Error(i(151));for(var ye=fe=null,ve=$,Se=$=0,gt=null,Be=D.next();ve!==null&&!Be.done;Se++,Be=D.next()){ve.index>Se?(gt=ve,ve=null):gt=ve.sibling;var vn=U(F,ve,Be.value,q);if(vn===null){ve===null&&(ve=gt);break}e&&ve&&vn.alternate===null&&r(F,ve),$=c(vn,$,Se),ye===null?fe=vn:ye.sibling=vn,ye=vn,ve=gt}if(Be.done)return n(F,ve),et&&Ln(F,Se),fe;if(ve===null){for(;!Be.done;Se++,Be=D.next())Be=X(F,Be.value,q),Be!==null&&($=c(Be,$,Se),ye===null?fe=Be:ye.sibling=Be,ye=Be);return et&&Ln(F,Se),fe}for(ve=a(F,ve);!Be.done;Se++,Be=D.next())Be=ne(ve,F,Se,Be.value,q),Be!==null&&(e&&Be.alternate!==null&&ve.delete(Be.key===null?Se:Be.key),$=c(Be,$,Se),ye===null?fe=Be:ye.sibling=Be,ye=Be);return e&&ve.forEach(function(Q0){return r(F,Q0)}),et&&Ln(F,Se),fe}function at(F,$,D,q){if(typeof D=="object"&&D!==null&&D.type===N&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case I:e:{for(var fe=D.key,ye=$;ye!==null;){if(ye.key===fe){if(fe=D.type,fe===N){if(ye.tag===7){n(F,ye.sibling),$=s(ye,D.props.children),$.return=F,F=$;break e}}else if(ye.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Ge&&Qd(fe)===ye.type){n(F,ye.sibling),$=s(ye,D.props),$.ref=yi(F,ye,D),$.return=F,F=$;break e}n(F,ye);break}else r(F,ye);ye=ye.sibling}D.type===N?($=Wn(D.props.children,F.mode,q,D.key),$.return=F,F=$):(q=qa(D.type,D.key,D.props,null,F.mode,q),q.ref=yi(F,$,D),q.return=F,F=q)}return p(F);case V:e:{for(ye=D.key;$!==null;){if($.key===ye)if($.tag===4&&$.stateNode.containerInfo===D.containerInfo&&$.stateNode.implementation===D.implementation){n(F,$.sibling),$=s($,D.children||[]),$.return=F,F=$;break e}else{n(F,$);break}else r(F,$);$=$.sibling}$=Su(D,F.mode,q),$.return=F,F=$}return p(F);case Ge:return ye=D._init,at(F,$,ye(D._payload),q)}if(ar(D))return se(F,$,D,q);if(G(D))return de(F,$,D,q);Na(F,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,$!==null&&$.tag===6?(n(F,$.sibling),$=s($,D),$.return=F,F=$):(n(F,$),$=wu(D,F.mode,q),$.return=F,F=$),p(F)):n(F,$)}return at}var _o=Gd(!0),Yd=Gd(!1),$a=ln(null),Ta=null,Co=null,Fs=null;function Ms(){Fs=Co=Ta=null}function bs(e){var r=$a.current;Je($a),e._currentValue=r}function Ds(e,r,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),e===n)break;e=e.return}}function Po(e,r){Ta=e,Fs=Co=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Rt=!0),e.firstContext=null)}function er(e){var r=e._currentValue;if(Fs!==e)if(e={context:e,memoizedValue:r,next:null},Co===null){if(Ta===null)throw Error(i(308));Co=e,Ta.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return r}var On=null;function Rs(e){On===null?On=[e]:On.push(e)}function Xd(e,r,n,a){var s=r.interleaved;return s===null?(n.next=n,Rs(r)):(n.next=s.next,s.next=n),r.interleaved=n,jr(e,a)}function jr(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qd(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function dn(e,r,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(je&2)!==0){var s=a.pending;return s===null?r.next=r:(r.next=s.next,s.next=r),a.pending=r,jr(e,n)}return s=a.interleaved,s===null?(r.next=r,Rs(a)):(r.next=s.next,s.next=r),a.interleaved=r,jr(e,n)}function Fa(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,Yl(e,n)}}function Jd(e,r){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var s=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};c===null?s=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?s=c=r:c=c.next=r}else s=c=r;n={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Ma(e,r,n,a){var s=e.updateQueue;cn=!1;var c=s.firstBaseUpdate,p=s.lastBaseUpdate,x=s.shared.pending;if(x!==null){s.shared.pending=null;var C=x,L=C.next;C.next=null,p===null?c=L:p.next=L,p=C;var K=e.alternate;K!==null&&(K=K.updateQueue,x=K.lastBaseUpdate,x!==p&&(x===null?K.firstBaseUpdate=L:x.next=L,K.lastBaseUpdate=C))}if(c!==null){var X=s.baseState;p=0,K=L=C=null,x=c;do{var U=x.lane,ne=x.eventTime;if((a&U)===U){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var se=e,de=x;switch(U=r,ne=n,de.tag){case 1:if(se=de.payload,typeof se=="function"){X=se.call(ne,X,U);break e}X=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=de.payload,U=typeof se=="function"?se.call(ne,X,U):se,U==null)break e;X=Y({},X,U);break e;case 2:cn=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,U=s.effects,U===null?s.effects=[x]:U.push(x))}else ne={eventTime:ne,lane:U,tag:x.tag,payload:x.payload,callback:x.callback,next:null},K===null?(L=K=ne,C=X):K=K.next=ne,p|=U;if(x=x.next,x===null){if(x=s.shared.pending,x===null)break;U=x,x=U.next,U.next=null,s.lastBaseUpdate=U,s.shared.pending=null}}while(!0);if(K===null&&(C=X),s.baseState=C,s.firstBaseUpdate=L,s.lastBaseUpdate=K,r=s.shared.interleaved,r!==null){s=r;do p|=s.lane,s=s.next;while(s!==r)}else c===null&&(s.shared.lanes=0);An|=p,e.lanes=p,e.memoizedState=X}}function Zd(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var a=e[r],s=a.callback;if(s!==null){if(a.callback=null,a=n,typeof s!="function")throw Error(i(191,s));s.call(a)}}}var vi={},kr=ln(vi),xi=ln(vi),wi=ln(vi);function jn(e){if(e===vi)throw Error(i(174));return e}function Os(e,r){switch(Ye(wi,r),Ye(xi,e),Ye(kr,vi),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Nn(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Nn(r,e)}Je(kr),Ye(kr,r)}function ko(){Je(kr),Je(xi),Je(wi)}function ef(e){jn(wi.current);var r=jn(kr.current),n=Nn(r,e.type);r!==n&&(Ye(xi,e),Ye(kr,n))}function js(e){xi.current===e&&(Je(kr),Je(xi))}var rt=ln(0);function ba(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zs=[];function As(){for(var e=0;e<zs.length;e++)zs[e]._workInProgressVersionPrimary=null;zs.length=0}var Da=H.ReactCurrentDispatcher,Bs=H.ReactCurrentBatchConfig,zn=0,nt=null,dt=null,ht=null,Ra=!1,Si=!1,Ei=0,m0=0;function Ct(){throw Error(i(321))}function Is(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!ur(e[n],r[n]))return!1;return!0}function Hs(e,r,n,a,s,c){if(zn=c,nt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Da.current=e===null||e.memoizedState===null?x0:w0,e=n(a,s),Si){c=0;do{if(Si=!1,Ei=0,25<=c)throw Error(i(301));c+=1,ht=dt=null,r.updateQueue=null,Da.current=S0,e=n(a,s)}while(Si)}if(Da.current=ja,r=dt!==null&&dt.next!==null,zn=0,ht=dt=nt=null,Ra=!1,r)throw Error(i(300));return e}function Ws(){var e=Ei!==0;return Ei=0,e}function Nr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?nt.memoizedState=ht=e:ht=ht.next=e,ht}function tr(){if(dt===null){var e=nt.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var r=ht===null?nt.memoizedState:ht.next;if(r!==null)ht=r,dt=e;else{if(e===null)throw Error(i(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},ht===null?nt.memoizedState=ht=e:ht=ht.next=e}return ht}function _i(e,r){return typeof r=="function"?r(e):r}function Us(e){var r=tr(),n=r.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var a=dt,s=a.baseQueue,c=n.pending;if(c!==null){if(s!==null){var p=s.next;s.next=c.next,c.next=p}a.baseQueue=s=c,n.pending=null}if(s!==null){c=s.next,a=a.baseState;var x=p=null,C=null,L=c;do{var K=L.lane;if((zn&K)===K)C!==null&&(C=C.next={lane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),a=L.hasEagerState?L.eagerState:e(a,L.action);else{var X={lane:K,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null};C===null?(x=C=X,p=a):C=C.next=X,nt.lanes|=K,An|=K}L=L.next}while(L!==null&&L!==c);C===null?p=a:C.next=x,ur(a,r.memoizedState)||(Rt=!0),r.memoizedState=a,r.baseState=p,r.baseQueue=C,n.lastRenderedState=a}if(e=n.interleaved,e!==null){s=e;do c=s.lane,nt.lanes|=c,An|=c,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Vs(e){var r=tr(),n=r.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var a=n.dispatch,s=n.pending,c=r.memoizedState;if(s!==null){n.pending=null;var p=s=s.next;do c=e(c,p.action),p=p.next;while(p!==s);ur(c,r.memoizedState)||(Rt=!0),r.memoizedState=c,r.baseQueue===null&&(r.baseState=c),n.lastRenderedState=c}return[c,a]}function tf(){}function rf(e,r){var n=nt,a=tr(),s=r(),c=!ur(a.memoizedState,s);if(c&&(a.memoizedState=s,Rt=!0),a=a.queue,Ks(af.bind(null,n,a,e),[e]),a.getSnapshot!==r||c||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,Ci(9,of.bind(null,n,a,s,r),void 0,null),mt===null)throw Error(i(349));(zn&30)!==0||nf(n,r,s)}return s}function nf(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=nt.updateQueue,r===null?(r={lastEffect:null,stores:null},nt.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function of(e,r,n,a){r.value=n,r.getSnapshot=a,lf(r)&&sf(e)}function af(e,r,n){return n(function(){lf(r)&&sf(e)})}function lf(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!ur(e,n)}catch{return!0}}function sf(e){var r=jr(e,1);r!==null&&hr(r,e,1,-1)}function uf(e){var r=Nr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:e},r.queue=e,e=e.dispatch=v0.bind(null,nt,e),[r.memoizedState,e]}function Ci(e,r,n,a){return e={tag:e,create:r,destroy:n,deps:a,next:null},r=nt.updateQueue,r===null?(r={lastEffect:null,stores:null},nt.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,r.lastEffect=e)),e}function cf(){return tr().memoizedState}function La(e,r,n,a){var s=Nr();nt.flags|=e,s.memoizedState=Ci(1|r,n,void 0,a===void 0?null:a)}function Oa(e,r,n,a){var s=tr();a=a===void 0?null:a;var c=void 0;if(dt!==null){var p=dt.memoizedState;if(c=p.destroy,a!==null&&Is(a,p.deps)){s.memoizedState=Ci(r,n,c,a);return}}nt.flags|=e,s.memoizedState=Ci(1|r,n,c,a)}function df(e,r){return La(8390656,8,e,r)}function Ks(e,r){return Oa(2048,8,e,r)}function ff(e,r){return Oa(4,2,e,r)}function pf(e,r){return Oa(4,4,e,r)}function hf(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function mf(e,r,n){return n=n!=null?n.concat([e]):null,Oa(4,4,hf.bind(null,r,e),n)}function Qs(){}function gf(e,r){var n=tr();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Is(r,a[1])?a[0]:(n.memoizedState=[e,r],e)}function yf(e,r){var n=tr();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Is(r,a[1])?a[0]:(e=e(),n.memoizedState=[e,r],e)}function vf(e,r,n){return(zn&21)===0?(e.baseState&&(e.baseState=!1,Rt=!0),e.memoizedState=n):(ur(n,r)||(n=Qc(),nt.lanes|=n,An|=n,e.baseState=!0),r)}function g0(e,r){var n=Ue;Ue=n!==0&&4>n?n:4,e(!0);var a=Bs.transition;Bs.transition={};try{e(!1),r()}finally{Ue=n,Bs.transition=a}}function xf(){return tr().memoizedState}function y0(e,r,n){var a=mn(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},wf(e))Sf(r,n);else if(n=Xd(e,r,n,a),n!==null){var s=Tt();hr(n,e,a,s),Ef(n,r,a)}}function v0(e,r,n){var a=mn(e),s={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(wf(e))Sf(r,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=r.lastRenderedReducer,c!==null))try{var p=r.lastRenderedState,x=c(p,n);if(s.hasEagerState=!0,s.eagerState=x,ur(x,p)){var C=r.interleaved;C===null?(s.next=s,Rs(r)):(s.next=C.next,C.next=s),r.interleaved=s;return}}catch{}finally{}n=Xd(e,r,s,a),n!==null&&(s=Tt(),hr(n,e,a,s),Ef(n,r,a))}}function wf(e){var r=e.alternate;return e===nt||r!==null&&r===nt}function Sf(e,r){Si=Ra=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Ef(e,r,n){if((n&4194240)!==0){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,Yl(e,n)}}var ja={readContext:er,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},x0={readContext:er,useCallback:function(e,r){return Nr().memoizedState=[e,r===void 0?null:r],e},useContext:er,useEffect:df,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,La(4194308,4,hf.bind(null,r,e),n)},useLayoutEffect:function(e,r){return La(4194308,4,e,r)},useInsertionEffect:function(e,r){return La(4,2,e,r)},useMemo:function(e,r){var n=Nr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var a=Nr();return r=n!==void 0?n(r):r,a.memoizedState=a.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=y0.bind(null,nt,e),[a.memoizedState,e]},useRef:function(e){var r=Nr();return e={current:e},r.memoizedState=e},useState:uf,useDebugValue:Qs,useDeferredValue:function(e){return Nr().memoizedState=e},useTransition:function(){var e=uf(!1),r=e[0];return e=g0.bind(null,e[1]),Nr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var a=nt,s=Nr();if(et){if(n===void 0)throw Error(i(407));n=n()}else{if(n=r(),mt===null)throw Error(i(349));(zn&30)!==0||nf(a,r,n)}s.memoizedState=n;var c={value:n,getSnapshot:r};return s.queue=c,df(af.bind(null,a,c,e),[e]),a.flags|=2048,Ci(9,of.bind(null,a,c,n,r),void 0,null),n},useId:function(){var e=Nr(),r=mt.identifierPrefix;if(et){var n=Or,a=Lr;n=(a&~(1<<32-Ae(a)-1)).toString(32)+n,r=":"+r+"R"+n,n=Ei++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=m0++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},w0={readContext:er,useCallback:gf,useContext:er,useEffect:Ks,useImperativeHandle:mf,useInsertionEffect:ff,useLayoutEffect:pf,useMemo:yf,useReducer:Us,useRef:cf,useState:function(){return Us(_i)},useDebugValue:Qs,useDeferredValue:function(e){var r=tr();return vf(r,dt.memoizedState,e)},useTransition:function(){var e=Us(_i)[0],r=tr().memoizedState;return[e,r]},useMutableSource:tf,useSyncExternalStore:rf,useId:xf,unstable_isNewReconciler:!1},S0={readContext:er,useCallback:gf,useContext:er,useEffect:Ks,useImperativeHandle:mf,useInsertionEffect:ff,useLayoutEffect:pf,useMemo:yf,useReducer:Vs,useRef:cf,useState:function(){return Vs(_i)},useDebugValue:Qs,useDeferredValue:function(e){var r=tr();return dt===null?r.memoizedState=e:vf(r,dt.memoizedState,e)},useTransition:function(){var e=Vs(_i)[0],r=tr().memoizedState;return[e,r]},useMutableSource:tf,useSyncExternalStore:rf,useId:xf,unstable_isNewReconciler:!1};function dr(e,r){if(e&&e.defaultProps){r=Y({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Gs(e,r,n,a){r=e.memoizedState,n=n(a,r),n=n==null?r:Y({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var za={isMounted:function(e){return(e=e._reactInternals)?ae(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var a=Tt(),s=mn(e),c=zr(a,s);c.payload=r,n!=null&&(c.callback=n),r=dn(e,c,s),r!==null&&(hr(r,e,s,a),Fa(r,e,s))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var a=Tt(),s=mn(e),c=zr(a,s);c.tag=1,c.payload=r,n!=null&&(c.callback=n),r=dn(e,c,s),r!==null&&(hr(r,e,s,a),Fa(r,e,s))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=Tt(),a=mn(e),s=zr(n,a);s.tag=2,r!=null&&(s.callback=r),r=dn(e,s,a),r!==null&&(hr(r,e,a,n),Fa(r,e,a))}};function _f(e,r,n,a,s,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,p):r.prototype&&r.prototype.isPureReactComponent?!ci(n,a)||!ci(s,c):!0}function Cf(e,r,n){var a=!1,s=sn,c=r.contextType;return typeof c=="object"&&c!==null?c=er(c):(s=Dt(r)?Dn:_t.current,a=r.contextTypes,c=(a=a!=null)?xo(e,s):sn),r=new r(n,c),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=za,e.stateNode=r,r._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=c),r}function Pf(e,r,n,a){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,a),r.state!==e&&za.enqueueReplaceState(r,r.state,null)}function Ys(e,r,n,a){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Ls(e);var c=r.contextType;typeof c=="object"&&c!==null?s.context=er(c):(c=Dt(r)?Dn:_t.current,s.context=xo(e,c)),s.state=e.memoizedState,c=r.getDerivedStateFromProps,typeof c=="function"&&(Gs(e,r,c,n),s.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&za.enqueueReplaceState(s,s.state,null),Ma(e,n,s,a),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function No(e,r){try{var n="",a=r;do n+=me(a),a=a.return;while(a);var s=n}catch(c){s=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:r,stack:s,digest:null}}function Xs(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function qs(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var E0=typeof WeakMap=="function"?WeakMap:Map;function kf(e,r,n){n=zr(-1,n),n.tag=3,n.payload={element:null};var a=r.value;return n.callback=function(){Va||(Va=!0,fu=a),qs(e,r)},n}function Nf(e,r,n){n=zr(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var s=r.value;n.payload=function(){return a(s)},n.callback=function(){qs(e,r)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){qs(e,r),typeof a!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var p=r.stack;this.componentDidCatch(r.value,{componentStack:p!==null?p:""})}),n}function $f(e,r,n){var a=e.pingCache;if(a===null){a=e.pingCache=new E0;var s=new Set;a.set(r,s)}else s=a.get(r),s===void 0&&(s=new Set,a.set(r,s));s.has(n)||(s.add(n),e=O0.bind(null,e,r,n),r.then(e,e))}function Tf(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Ff(e,r,n,a,s){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=zr(-1,1),r.tag=2,dn(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var _0=H.ReactCurrentOwner,Rt=!1;function $t(e,r,n,a){r.child=e===null?Yd(r,null,n,a):_o(r,e.child,n,a)}function Mf(e,r,n,a,s){n=n.render;var c=r.ref;return Po(r,s),a=Hs(e,r,n,a,c,s),n=Ws(),e!==null&&!Rt?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Ar(e,r,s)):(et&&n&&Ps(r),r.flags|=1,$t(e,r,a,s),r.child)}function bf(e,r,n,a,s){if(e===null){var c=n.type;return typeof c=="function"&&!xu(c)&&c.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=c,Df(e,r,c,a,s)):(e=qa(n.type,null,a,r,r.mode,s),e.ref=r.ref,e.return=r,r.child=e)}if(c=e.child,(e.lanes&s)===0){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:ci,n(p,a)&&e.ref===r.ref)return Ar(e,r,s)}return r.flags|=1,e=yn(c,a),e.ref=r.ref,e.return=r,r.child=e}function Df(e,r,n,a,s){if(e!==null){var c=e.memoizedProps;if(ci(c,a)&&e.ref===r.ref)if(Rt=!1,r.pendingProps=a=c,(e.lanes&s)!==0)(e.flags&131072)!==0&&(Rt=!0);else return r.lanes=e.lanes,Ar(e,r,s)}return Js(e,r,n,a,s)}function Rf(e,r,n){var a=r.pendingProps,s=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(To,Vt),Vt|=n;else{if((n&1073741824)===0)return e=c!==null?c.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Ye(To,Vt),Vt|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=c!==null?c.baseLanes:n,Ye(To,Vt),Vt|=a}else c!==null?(a=c.baseLanes|n,r.memoizedState=null):a=n,Ye(To,Vt),Vt|=a;return $t(e,r,s,n),r.child}function Lf(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function Js(e,r,n,a,s){var c=Dt(n)?Dn:_t.current;return c=xo(r,c),Po(r,s),n=Hs(e,r,n,a,c,s),a=Ws(),e!==null&&!Rt?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Ar(e,r,s)):(et&&a&&Ps(r),r.flags|=1,$t(e,r,n,s),r.child)}function Of(e,r,n,a,s){if(Dt(n)){var c=!0;Ea(r)}else c=!1;if(Po(r,s),r.stateNode===null)Ba(e,r),Cf(r,n,a),Ys(r,n,a,s),a=!0;else if(e===null){var p=r.stateNode,x=r.memoizedProps;p.props=x;var C=p.context,L=n.contextType;typeof L=="object"&&L!==null?L=er(L):(L=Dt(n)?Dn:_t.current,L=xo(r,L));var K=n.getDerivedStateFromProps,X=typeof K=="function"||typeof p.getSnapshotBeforeUpdate=="function";X||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(x!==a||C!==L)&&Pf(r,p,a,L),cn=!1;var U=r.memoizedState;p.state=U,Ma(r,a,p,s),C=r.memoizedState,x!==a||U!==C||bt.current||cn?(typeof K=="function"&&(Gs(r,n,K,a),C=r.memoizedState),(x=cn||_f(r,n,x,a,U,C,L))?(X||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=C),p.props=a,p.state=C,p.context=L,a=x):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{p=r.stateNode,qd(e,r),x=r.memoizedProps,L=r.type===r.elementType?x:dr(r.type,x),p.props=L,X=r.pendingProps,U=p.context,C=n.contextType,typeof C=="object"&&C!==null?C=er(C):(C=Dt(n)?Dn:_t.current,C=xo(r,C));var ne=n.getDerivedStateFromProps;(K=typeof ne=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(x!==X||U!==C)&&Pf(r,p,a,C),cn=!1,U=r.memoizedState,p.state=U,Ma(r,a,p,s);var se=r.memoizedState;x!==X||U!==se||bt.current||cn?(typeof ne=="function"&&(Gs(r,n,ne,a),se=r.memoizedState),(L=cn||_f(r,n,L,a,U,se,C)||!1)?(K||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,se,C),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,se,C)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||x===e.memoizedProps&&U===e.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&U===e.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=se),p.props=a,p.state=se,p.context=C,a=L):(typeof p.componentDidUpdate!="function"||x===e.memoizedProps&&U===e.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&U===e.memoizedState||(r.flags|=1024),a=!1)}return Zs(e,r,n,a,c,s)}function Zs(e,r,n,a,s,c){Lf(e,r);var p=(r.flags&128)!==0;if(!a&&!p)return s&&Bd(r,n,!1),Ar(e,r,c);a=r.stateNode,_0.current=r;var x=p&&typeof n.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,e!==null&&p?(r.child=_o(r,e.child,null,c),r.child=_o(r,null,x,c)):$t(e,r,x,c),r.memoizedState=a.state,s&&Bd(r,n,!0),r.child}function jf(e){var r=e.stateNode;r.pendingContext?zd(e,r.pendingContext,r.pendingContext!==r.context):r.context&&zd(e,r.context,!1),Os(e,r.containerInfo)}function zf(e,r,n,a,s){return Eo(),Ts(s),r.flags|=256,$t(e,r,n,a),r.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Af(e,r,n){var a=r.pendingProps,s=rt.current,c=!1,p=(r.flags&128)!==0,x;if((x=p)||(x=e!==null&&e.memoizedState===null?!1:(s&2)!==0),x?(c=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ye(rt,s&1),e===null)return $s(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(p=a.children,e=a.fallback,c?(a=r.mode,c=r.child,p={mode:"hidden",children:p},(a&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=p):c=Ja(p,a,0,null),e=Wn(e,a,n,null),c.return=r,e.return=r,c.sibling=e,r.child=c,r.child.memoizedState=tu(n),r.memoizedState=eu,e):ru(r,p));if(s=e.memoizedState,s!==null&&(x=s.dehydrated,x!==null))return C0(e,r,p,a,x,s,n);if(c){c=a.fallback,p=r.mode,s=e.child,x=s.sibling;var C={mode:"hidden",children:a.children};return(p&1)===0&&r.child!==s?(a=r.child,a.childLanes=0,a.pendingProps=C,r.deletions=null):(a=yn(s,C),a.subtreeFlags=s.subtreeFlags&14680064),x!==null?c=yn(x,c):(c=Wn(c,p,n,null),c.flags|=2),c.return=r,a.return=r,a.sibling=c,r.child=a,a=c,c=r.child,p=e.child.memoizedState,p=p===null?tu(n):{baseLanes:p.baseLanes|n,cachePool:null,transitions:p.transitions},c.memoizedState=p,c.childLanes=e.childLanes&~n,r.memoizedState=eu,a}return c=e.child,e=c.sibling,a=yn(c,{mode:"visible",children:a.children}),(r.mode&1)===0&&(a.lanes=n),a.return=r,a.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=a,r.memoizedState=null,a}function ru(e,r){return r=Ja({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Aa(e,r,n,a){return a!==null&&Ts(a),_o(r,e.child,null,n),e=ru(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function C0(e,r,n,a,s,c,p){if(n)return r.flags&256?(r.flags&=-257,a=Xs(Error(i(422))),Aa(e,r,p,a)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(c=a.fallback,s=r.mode,a=Ja({mode:"visible",children:a.children},s,0,null),c=Wn(c,s,p,null),c.flags|=2,a.return=r,c.return=r,a.sibling=c,r.child=a,(r.mode&1)!==0&&_o(r,e.child,null,p),r.child.memoizedState=tu(p),r.memoizedState=eu,c);if((r.mode&1)===0)return Aa(e,r,p,null);if(s.data==="$!"){if(a=s.nextSibling&&s.nextSibling.dataset,a)var x=a.dgst;return a=x,c=Error(i(419)),a=Xs(c,a,void 0),Aa(e,r,p,a)}if(x=(p&e.childLanes)!==0,Rt||x){if(a=mt,a!==null){switch(p&-p){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(a.suspendedLanes|p))!==0?0:s,s!==0&&s!==c.retryLane&&(c.retryLane=s,jr(e,s),hr(a,e,s,-1))}return vu(),a=Xs(Error(i(421))),Aa(e,r,p,a)}return s.data==="$?"?(r.flags|=128,r.child=e.child,r=j0.bind(null,e),s._reactRetry=r,null):(e=c.treeContext,Ut=an(s.nextSibling),Wt=r,et=!0,cr=null,e!==null&&(Jt[Zt++]=Lr,Jt[Zt++]=Or,Jt[Zt++]=Rn,Lr=e.id,Or=e.overflow,Rn=r),r=ru(r,a.children),r.flags|=4096,r)}function Bf(e,r,n){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r),Ds(e.return,r,n)}function nu(e,r,n,a,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:s}:(c.isBackwards=r,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=s)}function If(e,r,n){var a=r.pendingProps,s=a.revealOrder,c=a.tail;if($t(e,r,a.children,n),a=rt.current,(a&2)!==0)a=a&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bf(e,n,r);else if(e.tag===19)Bf(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ye(rt,a),(r.mode&1)===0)r.memoizedState=null;else switch(s){case"forwards":for(n=r.child,s=null;n!==null;)e=n.alternate,e!==null&&ba(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=r.child,r.child=null):(s=n.sibling,n.sibling=null),nu(r,!1,s,n,c);break;case"backwards":for(n=null,s=r.child,r.child=null;s!==null;){if(e=s.alternate,e!==null&&ba(e)===null){r.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}nu(r,!0,n,null,c);break;case"together":nu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ba(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Ar(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),An|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(i(153));if(r.child!==null){for(e=r.child,n=yn(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function P0(e,r,n){switch(r.tag){case 3:jf(r),Eo();break;case 5:ef(r);break;case 1:Dt(r.type)&&Ea(r);break;case 4:Os(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,s=r.memoizedProps.value;Ye($a,a._currentValue),a._currentValue=s;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(Ye(rt,rt.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?Af(e,r,n):(Ye(rt,rt.current&1),e=Ar(e,r,n),e!==null?e.sibling:null);Ye(rt,rt.current&1);break;case 19:if(a=(n&r.childLanes)!==0,(e.flags&128)!==0){if(a)return If(e,r,n);r.flags|=128}if(s=r.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ye(rt,rt.current),a)break;return null;case 22:case 23:return r.lanes=0,Rf(e,r,n)}return Ar(e,r,n)}var Hf,ou,Wf,Uf;Hf=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ou=function(){},Wf=function(e,r,n,a){var s=e.memoizedProps;if(s!==a){e=r.stateNode,jn(kr.current);var c=null;switch(n){case"input":s=Kr(e,s),a=Kr(e,a),c=[];break;case"select":s=Y({},s,{value:void 0}),a=Y({},a,{value:void 0}),c=[];break;case"textarea":s=Vo(e,s),a=Vo(e,a),c=[];break;default:typeof s.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=xa)}io(n,a);var p;n=null;for(L in s)if(!a.hasOwnProperty(L)&&s.hasOwnProperty(L)&&s[L]!=null)if(L==="style"){var x=s[L];for(p in x)x.hasOwnProperty(p)&&(n||(n={}),n[p]="")}else L!=="dangerouslySetInnerHTML"&&L!=="children"&&L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&L!=="autoFocus"&&(u.hasOwnProperty(L)?c||(c=[]):(c=c||[]).push(L,null));for(L in a){var C=a[L];if(x=s?.[L],a.hasOwnProperty(L)&&C!==x&&(C!=null||x!=null))if(L==="style")if(x){for(p in x)!x.hasOwnProperty(p)||C&&C.hasOwnProperty(p)||(n||(n={}),n[p]="");for(p in C)C.hasOwnProperty(p)&&x[p]!==C[p]&&(n||(n={}),n[p]=C[p])}else n||(c||(c=[]),c.push(L,n)),n=C;else L==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,x=x?x.__html:void 0,C!=null&&x!==C&&(c=c||[]).push(L,C)):L==="children"?typeof C!="string"&&typeof C!="number"||(c=c||[]).push(L,""+C):L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&(u.hasOwnProperty(L)?(C!=null&&L==="onScroll"&&qe("scroll",e),c||x===C||(c=[])):(c=c||[]).push(L,C))}n&&(c=c||[]).push("style",n);var L=c;(r.updateQueue=L)&&(r.flags|=4)}},Uf=function(e,r,n,a){n!==a&&(r.flags|=4)};function Pi(e,r){if(!et)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Pt(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(r)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags&14680064,a|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=a,e.childLanes=n,r}function k0(e,r,n){var a=r.pendingProps;switch(ks(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(r),null;case 1:return Dt(r.type)&&Sa(),Pt(r),null;case 3:return a=r.stateNode,ko(),Je(bt),Je(_t),As(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ka(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,cr!==null&&(mu(cr),cr=null))),ou(e,r),Pt(r),null;case 5:js(r);var s=jn(wi.current);if(n=r.type,e!==null&&r.stateNode!=null)Wf(e,r,n,a,s),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(i(166));return Pt(r),null}if(e=jn(kr.current),ka(r)){a=r.stateNode,n=r.type;var c=r.memoizedProps;switch(a[Pr]=r,a[mi]=c,e=(r.mode&1)!==0,n){case"dialog":qe("cancel",a),qe("close",a);break;case"iframe":case"object":case"embed":qe("load",a);break;case"video":case"audio":for(s=0;s<fi.length;s++)qe(fi[s],a);break;case"source":qe("error",a);break;case"img":case"image":case"link":qe("error",a),qe("load",a);break;case"details":qe("toggle",a);break;case"input":oo(a,c),qe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!c.multiple},qe("invalid",a);break;case"textarea":Xi(a,c),qe("invalid",a)}io(n,c),s=null;for(var p in c)if(c.hasOwnProperty(p)){var x=c[p];p==="children"?typeof x=="string"?a.textContent!==x&&(c.suppressHydrationWarning!==!0&&va(a.textContent,x,e),s=["children",x]):typeof x=="number"&&a.textContent!==""+x&&(c.suppressHydrationWarning!==!0&&va(a.textContent,x,e),s=["children",""+x]):u.hasOwnProperty(p)&&x!=null&&p==="onScroll"&&qe("scroll",a)}switch(n){case"input":At(a),Xt(a,c,!0);break;case"textarea":At(a),Gr(a);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(a.onclick=xa)}a=s,r.updateQueue=a,a!==null&&(r.flags|=4)}else{p=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ko(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=p.createElement(n,{is:a.is}):(e=p.createElement(n),n==="select"&&(p=e,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):e=p.createElementNS(e,n),e[Pr]=r,e[mi]=a,Hf(e,r,!1,!1),r.stateNode=e;e:{switch(p=Go(n,a),n){case"dialog":qe("cancel",e),qe("close",e),s=a;break;case"iframe":case"object":case"embed":qe("load",e),s=a;break;case"video":case"audio":for(s=0;s<fi.length;s++)qe(fi[s],e);s=a;break;case"source":qe("error",e),s=a;break;case"img":case"image":case"link":qe("error",e),qe("load",e),s=a;break;case"details":qe("toggle",e),s=a;break;case"input":oo(e,a),s=Kr(e,a),qe("invalid",e);break;case"option":s=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},s=Y({},a,{value:void 0}),qe("invalid",e);break;case"textarea":Xi(e,a),s=Vo(e,a),qe("invalid",e);break;default:s=a}io(n,s),x=s;for(c in x)if(x.hasOwnProperty(c)){var C=x[c];c==="style"?Qo(e,C):c==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&qt(e,C)):c==="children"?typeof C=="string"?(n!=="textarea"||C!=="")&&Yr(e,C):typeof C=="number"&&Yr(e,""+C):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?C!=null&&c==="onScroll"&&qe("scroll",e):C!=null&&j(e,c,C,p))}switch(n){case"input":At(e),Xt(e,a,!1);break;case"textarea":At(e),Gr(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Ce(a.value));break;case"select":e.multiple=!!a.multiple,c=a.value,c!=null?Qr(e,!!a.multiple,c,!1):a.defaultValue!=null&&Qr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=xa)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Pt(r),null;case 6:if(e&&r.stateNode!=null)Uf(e,r,e.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(i(166));if(n=jn(wi.current),jn(kr.current),ka(r)){if(a=r.stateNode,n=r.memoizedProps,a[Pr]=r,(c=a.nodeValue!==n)&&(e=Wt,e!==null))switch(e.tag){case 3:va(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&va(a.nodeValue,n,(e.mode&1)!==0)}c&&(r.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Pr]=r,r.stateNode=a}return Pt(r),null;case 13:if(Je(rt),a=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(et&&Ut!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Kd(),Eo(),r.flags|=98560,c=!1;else if(c=ka(r),a!==null&&a.dehydrated!==null){if(e===null){if(!c)throw Error(i(318));if(c=r.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(i(317));c[Pr]=r}else Eo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Pt(r),c=!1}else cr!==null&&(mu(cr),cr=null),c=!0;if(!c)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(rt.current&1)!==0?ft===0&&(ft=3):vu())),r.updateQueue!==null&&(r.flags|=4),Pt(r),null);case 4:return ko(),ou(e,r),e===null&&pi(r.stateNode.containerInfo),Pt(r),null;case 10:return bs(r.type._context),Pt(r),null;case 17:return Dt(r.type)&&Sa(),Pt(r),null;case 19:if(Je(rt),c=r.memoizedState,c===null)return Pt(r),null;if(a=(r.flags&128)!==0,p=c.rendering,p===null)if(a)Pi(c,!1);else{if(ft!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(p=ba(e),p!==null){for(r.flags|=128,Pi(c,!1),a=p.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=n,n=r.child;n!==null;)c=n,e=a,c.flags&=14680066,p=c.alternate,p===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=p.childLanes,c.lanes=p.lanes,c.child=p.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=p.memoizedProps,c.memoizedState=p.memoizedState,c.updateQueue=p.updateQueue,c.type=p.type,e=p.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ye(rt,rt.current&1|2),r.child}e=e.sibling}c.tail!==null&&ze()>Fo&&(r.flags|=128,a=!0,Pi(c,!1),r.lanes=4194304)}else{if(!a)if(e=ba(p),e!==null){if(r.flags|=128,a=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Pi(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!et)return Pt(r),null}else 2*ze()-c.renderingStartTime>Fo&&n!==1073741824&&(r.flags|=128,a=!0,Pi(c,!1),r.lanes=4194304);c.isBackwards?(p.sibling=r.child,r.child=p):(n=c.last,n!==null?n.sibling=p:r.child=p,c.last=p)}return c.tail!==null?(r=c.tail,c.rendering=r,c.tail=r.sibling,c.renderingStartTime=ze(),r.sibling=null,n=rt.current,Ye(rt,a?n&1|2:n&1),r):(Pt(r),null);case 22:case 23:return yu(),a=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(r.flags|=8192),a&&(r.mode&1)!==0?(Vt&1073741824)!==0&&(Pt(r),r.subtreeFlags&6&&(r.flags|=8192)):Pt(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function N0(e,r){switch(ks(r),r.tag){case 1:return Dt(r.type)&&Sa(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return ko(),Je(bt),Je(_t),As(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return js(r),null;case 13:if(Je(rt),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Eo()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Je(rt),null;case 4:return ko(),null;case 10:return bs(r.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var Ia=!1,kt=!1,$0=typeof WeakSet=="function"?WeakSet:Set,ie=null;function $o(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){ot(e,r,a)}else n.current=null}function iu(e,r,n){try{n()}catch(a){ot(e,r,a)}}var Vf=!1;function T0(e,r){if(ys=la,e=Ed(),us(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var s=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,x=-1,C=-1,L=0,K=0,X=e,U=null;t:for(;;){for(var ne;X!==n||s!==0&&X.nodeType!==3||(x=p+s),X!==c||a!==0&&X.nodeType!==3||(C=p+a),X.nodeType===3&&(p+=X.nodeValue.length),(ne=X.firstChild)!==null;)U=X,X=ne;for(;;){if(X===e)break t;if(U===n&&++L===s&&(x=p),U===c&&++K===a&&(C=p),(ne=X.nextSibling)!==null)break;X=U,U=X.parentNode}X=ne}n=x===-1||C===-1?null:{start:x,end:C}}else n=null}n=n||{start:0,end:0}}else n=null;for(vs={focusedElem:e,selectionRange:n},la=!1,ie=r;ie!==null;)if(r=ie,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,ie=e;else for(;ie!==null;){r=ie;try{var se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var de=se.memoizedProps,at=se.memoizedState,F=r.stateNode,$=F.getSnapshotBeforeUpdate(r.elementType===r.type?de:dr(r.type,de),at);F.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var D=r.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(q){ot(r,r.return,q)}if(e=r.sibling,e!==null){e.return=r.return,ie=e;break}ie=r.return}return se=Vf,Vf=!1,se}function ki(e,r,n){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var s=a=a.next;do{if((s.tag&e)===e){var c=s.destroy;s.destroy=void 0,c!==void 0&&iu(r,n,c)}s=s.next}while(s!==a)}}function Ha(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==r)}}function au(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Kf(e){var r=e.alternate;r!==null&&(e.alternate=null,Kf(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Pr],delete r[mi],delete r[Es],delete r[d0],delete r[f0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qf(e){return e.tag===5||e.tag===3||e.tag===4}function Gf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=xa));else if(a!==4&&(e=e.child,e!==null))for(lu(e,r,n),e=e.sibling;e!==null;)lu(e,r,n),e=e.sibling}function su(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(su(e,r,n),e=e.sibling;e!==null;)su(e,r,n),e=e.sibling}var wt=null,fr=!1;function fn(e,r,n){for(n=n.child;n!==null;)Yf(e,r,n),n=n.sibling}function Yf(e,r,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Qe,n)}catch{}switch(n.tag){case 5:kt||$o(n,r);case 6:var a=wt,s=fr;wt=null,fn(e,r,n),wt=a,fr=s,wt!==null&&(fr?(e=wt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(fr?(e=wt,n=n.stateNode,e.nodeType===8?Ss(e.parentNode,n):e.nodeType===1&&Ss(e,n),oi(e)):Ss(wt,n.stateNode));break;case 4:a=wt,s=fr,wt=n.stateNode.containerInfo,fr=!0,fn(e,r,n),wt=a,fr=s;break;case 0:case 11:case 14:case 15:if(!kt&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){s=a=a.next;do{var c=s,p=c.destroy;c=c.tag,p!==void 0&&((c&2)!==0||(c&4)!==0)&&iu(n,r,p),s=s.next}while(s!==a)}fn(e,r,n);break;case 1:if(!kt&&($o(n,r),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(x){ot(n,r,x)}fn(e,r,n);break;case 21:fn(e,r,n);break;case 22:n.mode&1?(kt=(a=kt)||n.memoizedState!==null,fn(e,r,n),kt=a):fn(e,r,n);break;default:fn(e,r,n)}}function Xf(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $0),r.forEach(function(a){var s=z0.bind(null,e,a);n.has(a)||(n.add(a),a.then(s,s))})}}function pr(e,r){var n=r.deletions;if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];try{var c=e,p=r,x=p;e:for(;x!==null;){switch(x.tag){case 5:wt=x.stateNode,fr=!1;break e;case 3:wt=x.stateNode.containerInfo,fr=!0;break e;case 4:wt=x.stateNode.containerInfo,fr=!0;break e}x=x.return}if(wt===null)throw Error(i(160));Yf(c,p,s),wt=null,fr=!1;var C=s.alternate;C!==null&&(C.return=null),s.return=null}catch(L){ot(s,r,L)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)qf(r,e),r=r.sibling}function qf(e,r){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pr(r,e),$r(e),a&4){try{ki(3,e,e.return),Ha(3,e)}catch(de){ot(e,e.return,de)}try{ki(5,e,e.return)}catch(de){ot(e,e.return,de)}}break;case 1:pr(r,e),$r(e),a&512&&n!==null&&$o(n,n.return);break;case 5:if(pr(r,e),$r(e),a&512&&n!==null&&$o(n,n.return),e.flags&32){var s=e.stateNode;try{Yr(s,"")}catch(de){ot(e,e.return,de)}}if(a&4&&(s=e.stateNode,s!=null)){var c=e.memoizedProps,p=n!==null?n.memoizedProps:c,x=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{x==="input"&&c.type==="radio"&&c.name!=null&&pt(s,c),Go(x,p);var L=Go(x,c);for(p=0;p<C.length;p+=2){var K=C[p],X=C[p+1];K==="style"?Qo(s,X):K==="dangerouslySetInnerHTML"?qt(s,X):K==="children"?Yr(s,X):j(s,K,X,L)}switch(x){case"input":Bt(s,c);break;case"textarea":wr(s,c);break;case"select":var U=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!c.multiple;var ne=c.value;ne!=null?Qr(s,!!c.multiple,ne,!1):U!==!!c.multiple&&(c.defaultValue!=null?Qr(s,!!c.multiple,c.defaultValue,!0):Qr(s,!!c.multiple,c.multiple?[]:"",!1))}s[mi]=c}catch(de){ot(e,e.return,de)}}break;case 6:if(pr(r,e),$r(e),a&4){if(e.stateNode===null)throw Error(i(162));s=e.stateNode,c=e.memoizedProps;try{s.nodeValue=c}catch(de){ot(e,e.return,de)}}break;case 3:if(pr(r,e),$r(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(r.containerInfo)}catch(de){ot(e,e.return,de)}break;case 4:pr(r,e),$r(e);break;case 13:pr(r,e),$r(e),s=e.child,s.flags&8192&&(c=s.memoizedState!==null,s.stateNode.isHidden=c,!c||s.alternate!==null&&s.alternate.memoizedState!==null||(du=ze())),a&4&&Xf(e);break;case 22:if(K=n!==null&&n.memoizedState!==null,e.mode&1?(kt=(L=kt)||K,pr(r,e),kt=L):pr(r,e),$r(e),a&8192){if(L=e.memoizedState!==null,(e.stateNode.isHidden=L)&&!K&&(e.mode&1)!==0)for(ie=e,K=e.child;K!==null;){for(X=ie=K;ie!==null;){switch(U=ie,ne=U.child,U.tag){case 0:case 11:case 14:case 15:ki(4,U,U.return);break;case 1:$o(U,U.return);var se=U.stateNode;if(typeof se.componentWillUnmount=="function"){a=U,n=U.return;try{r=a,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(de){ot(a,n,de)}}break;case 5:$o(U,U.return);break;case 22:if(U.memoizedState!==null){ep(X);continue}}ne!==null?(ne.return=U,ie=ne):ep(X)}K=K.sibling}e:for(K=null,X=e;;){if(X.tag===5){if(K===null){K=X;try{s=X.stateNode,L?(c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(x=X.stateNode,C=X.memoizedProps.style,p=C!=null&&C.hasOwnProperty("display")?C.display:null,x.style.display=lr("display",p))}catch(de){ot(e,e.return,de)}}}else if(X.tag===6){if(K===null)try{X.stateNode.nodeValue=L?"":X.memoizedProps}catch(de){ot(e,e.return,de)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===e)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===e)break e;for(;X.sibling===null;){if(X.return===null||X.return===e)break e;K===X&&(K=null),X=X.return}K===X&&(K=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:pr(r,e),$r(e),a&4&&Xf(e);break;case 21:break;default:pr(r,e),$r(e)}}function $r(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Qf(n)){var a=n;break e}n=n.return}throw Error(i(160))}switch(a.tag){case 5:var s=a.stateNode;a.flags&32&&(Yr(s,""),a.flags&=-33);var c=Gf(e);su(e,c,s);break;case 3:case 4:var p=a.stateNode.containerInfo,x=Gf(e);lu(e,x,p);break;default:throw Error(i(161))}}catch(C){ot(e,e.return,C)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function F0(e,r,n){ie=e,Jf(e)}function Jf(e,r,n){for(var a=(e.mode&1)!==0;ie!==null;){var s=ie,c=s.child;if(s.tag===22&&a){var p=s.memoizedState!==null||Ia;if(!p){var x=s.alternate,C=x!==null&&x.memoizedState!==null||kt;x=Ia;var L=kt;if(Ia=p,(kt=C)&&!L)for(ie=s;ie!==null;)p=ie,C=p.child,p.tag===22&&p.memoizedState!==null?tp(s):C!==null?(C.return=p,ie=C):tp(s);for(;c!==null;)ie=c,Jf(c),c=c.sibling;ie=s,Ia=x,kt=L}Zf(e)}else(s.subtreeFlags&8772)!==0&&c!==null?(c.return=s,ie=c):Zf(e)}}function Zf(e){for(;ie!==null;){var r=ie;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:kt||Ha(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!kt)if(n===null)a.componentDidMount();else{var s=r.elementType===r.type?n.memoizedProps:dr(r.type,n.memoizedProps);a.componentDidUpdate(s,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var c=r.updateQueue;c!==null&&Zd(r,c,a);break;case 3:var p=r.updateQueue;if(p!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Zd(r,p,n)}break;case 5:var x=r.stateNode;if(n===null&&r.flags&4){n=x;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&n.focus();break;case"img":C.src&&(n.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var L=r.alternate;if(L!==null){var K=L.memoizedState;if(K!==null){var X=K.dehydrated;X!==null&&oi(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}kt||r.flags&512&&au(r)}catch(U){ot(r,r.return,U)}}if(r===e){ie=null;break}if(n=r.sibling,n!==null){n.return=r.return,ie=n;break}ie=r.return}}function ep(e){for(;ie!==null;){var r=ie;if(r===e){ie=null;break}var n=r.sibling;if(n!==null){n.return=r.return,ie=n;break}ie=r.return}}function tp(e){for(;ie!==null;){var r=ie;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Ha(4,r)}catch(C){ot(r,n,C)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var s=r.return;try{a.componentDidMount()}catch(C){ot(r,s,C)}}var c=r.return;try{au(r)}catch(C){ot(r,c,C)}break;case 5:var p=r.return;try{au(r)}catch(C){ot(r,p,C)}}}catch(C){ot(r,r.return,C)}if(r===e){ie=null;break}var x=r.sibling;if(x!==null){x.return=r.return,ie=x;break}ie=r.return}}var M0=Math.ceil,Wa=H.ReactCurrentDispatcher,uu=H.ReactCurrentOwner,rr=H.ReactCurrentBatchConfig,je=0,mt=null,lt=null,St=0,Vt=0,To=ln(0),ft=0,Ni=null,An=0,Ua=0,cu=0,$i=null,Lt=null,du=0,Fo=1/0,Br=null,Va=!1,fu=null,pn=null,Ka=!1,hn=null,Qa=0,Ti=0,pu=null,Ga=-1,Ya=0;function Tt(){return(je&6)!==0?ze():Ga!==-1?Ga:Ga=ze()}function mn(e){return(e.mode&1)===0?1:(je&2)!==0&&St!==0?St&-St:h0.transition!==null?(Ya===0&&(Ya=Qc()),Ya):(e=Ue,e!==0||(e=window.event,e=e===void 0?16:rd(e.type)),e)}function hr(e,r,n,a){if(50<Ti)throw Ti=0,pu=null,Error(i(185));Zo(e,n,a),((je&2)===0||e!==mt)&&(e===mt&&((je&2)===0&&(Ua|=n),ft===4&&gn(e,St)),Ot(e,a),n===1&&je===0&&(r.mode&1)===0&&(Fo=ze()+500,_a&&un()))}function Ot(e,r){var n=e.callbackNode;hg(e,r);var a=oa(e,e===mt?St:0);if(a===0)n!==null&&Fr(n),e.callbackNode=null,e.callbackPriority=0;else if(r=a&-a,e.callbackPriority!==r){if(n!=null&&Fr(n),r===1)e.tag===0?p0(np.bind(null,e)):Id(np.bind(null,e)),u0(function(){(je&6)===0&&un()}),n=null;else{switch(Gc(a)){case 1:n=Mr;break;case 4:n=Cr;break;case 16:n=br;break;case 536870912:n=De;break;default:n=br}n=dp(n,rp.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function rp(e,r){if(Ga=-1,Ya=0,(je&6)!==0)throw Error(i(327));var n=e.callbackNode;if(Mo()&&e.callbackNode!==n)return null;var a=oa(e,e===mt?St:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||r)r=Xa(e,a);else{r=a;var s=je;je|=2;var c=ip();(mt!==e||St!==r)&&(Br=null,Fo=ze()+500,In(e,r));do try{R0();break}catch(x){op(e,x)}while(!0);Ms(),Wa.current=c,je=s,lt!==null?r=0:(mt=null,St=0,r=ft)}if(r!==0){if(r===2&&(s=Ql(e),s!==0&&(a=s,r=hu(e,s))),r===1)throw n=Ni,In(e,0),gn(e,a),Ot(e,ze()),n;if(r===6)gn(e,a);else{if(s=e.current.alternate,(a&30)===0&&!b0(s)&&(r=Xa(e,a),r===2&&(c=Ql(e),c!==0&&(a=c,r=hu(e,c))),r===1))throw n=Ni,In(e,0),gn(e,a),Ot(e,ze()),n;switch(e.finishedWork=s,e.finishedLanes=a,r){case 0:case 1:throw Error(i(345));case 2:Hn(e,Lt,Br);break;case 3:if(gn(e,a),(a&130023424)===a&&(r=du+500-ze(),10<r)){if(oa(e,0)!==0)break;if(s=e.suspendedLanes,(s&a)!==a){Tt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ws(Hn.bind(null,e,Lt,Br),r);break}Hn(e,Lt,Br);break;case 4:if(gn(e,a),(a&4194240)===a)break;for(r=e.eventTimes,s=-1;0<a;){var p=31-Ae(a);c=1<<p,p=r[p],p>s&&(s=p),a&=~c}if(a=s,a=ze()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*M0(a/1960))-a,10<a){e.timeoutHandle=ws(Hn.bind(null,e,Lt,Br),a);break}Hn(e,Lt,Br);break;case 5:Hn(e,Lt,Br);break;default:throw Error(i(329))}}}return Ot(e,ze()),e.callbackNode===n?rp.bind(null,e):null}function hu(e,r){var n=$i;return e.current.memoizedState.isDehydrated&&(In(e,r).flags|=256),e=Xa(e,r),e!==2&&(r=Lt,Lt=n,r!==null&&mu(r)),e}function mu(e){Lt===null?Lt=e:Lt.push.apply(Lt,e)}function b0(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var s=n[a],c=s.getSnapshot;s=s.value;try{if(!ur(c(),s))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function gn(e,r){for(r&=~cu,r&=~Ua,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Ae(r),a=1<<n;e[n]=-1,r&=~a}}function np(e){if((je&6)!==0)throw Error(i(327));Mo();var r=oa(e,0);if((r&1)===0)return Ot(e,ze()),null;var n=Xa(e,r);if(e.tag!==0&&n===2){var a=Ql(e);a!==0&&(r=a,n=hu(e,a))}if(n===1)throw n=Ni,In(e,0),gn(e,r),Ot(e,ze()),n;if(n===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Hn(e,Lt,Br),Ot(e,ze()),null}function gu(e,r){var n=je;je|=1;try{return e(r)}finally{je=n,je===0&&(Fo=ze()+500,_a&&un())}}function Bn(e){hn!==null&&hn.tag===0&&(je&6)===0&&Mo();var r=je;je|=1;var n=rr.transition,a=Ue;try{if(rr.transition=null,Ue=1,e)return e()}finally{Ue=a,rr.transition=n,je=r,(je&6)===0&&un()}}function yu(){Vt=To.current,Je(To)}function In(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,s0(n)),lt!==null)for(n=lt.return;n!==null;){var a=n;switch(ks(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Sa();break;case 3:ko(),Je(bt),Je(_t),As();break;case 5:js(a);break;case 4:ko();break;case 13:Je(rt);break;case 19:Je(rt);break;case 10:bs(a.type._context);break;case 22:case 23:yu()}n=n.return}if(mt=e,lt=e=yn(e.current,null),St=Vt=r,ft=0,Ni=null,cu=Ua=An=0,Lt=$i=null,On!==null){for(r=0;r<On.length;r++)if(n=On[r],a=n.interleaved,a!==null){n.interleaved=null;var s=a.next,c=n.pending;if(c!==null){var p=c.next;c.next=s,a.next=p}n.pending=a}On=null}return e}function op(e,r){do{var n=lt;try{if(Ms(),Da.current=ja,Ra){for(var a=nt.memoizedState;a!==null;){var s=a.queue;s!==null&&(s.pending=null),a=a.next}Ra=!1}if(zn=0,ht=dt=nt=null,Si=!1,Ei=0,uu.current=null,n===null||n.return===null){ft=1,Ni=r,lt=null;break}e:{var c=e,p=n.return,x=n,C=r;if(r=St,x.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var L=C,K=x,X=K.tag;if((K.mode&1)===0&&(X===0||X===11||X===15)){var U=K.alternate;U?(K.updateQueue=U.updateQueue,K.memoizedState=U.memoizedState,K.lanes=U.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=Tf(p);if(ne!==null){ne.flags&=-257,Ff(ne,p,x,c,r),ne.mode&1&&$f(c,L,r),r=ne,C=L;var se=r.updateQueue;if(se===null){var de=new Set;de.add(C),r.updateQueue=de}else se.add(C);break e}else{if((r&1)===0){$f(c,L,r),vu();break e}C=Error(i(426))}}else if(et&&x.mode&1){var at=Tf(p);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),Ff(at,p,x,c,r),Ts(No(C,x));break e}}c=C=No(C,x),ft!==4&&(ft=2),$i===null?$i=[c]:$i.push(c),c=p;do{switch(c.tag){case 3:c.flags|=65536,r&=-r,c.lanes|=r;var F=kf(c,C,r);Jd(c,F);break e;case 1:x=C;var $=c.type,D=c.stateNode;if((c.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(pn===null||!pn.has(D)))){c.flags|=65536,r&=-r,c.lanes|=r;var q=Nf(c,x,r);Jd(c,q);break e}}c=c.return}while(c!==null)}lp(n)}catch(fe){r=fe,lt===n&&n!==null&&(lt=n=n.return);continue}break}while(!0)}function ip(){var e=Wa.current;return Wa.current=ja,e===null?ja:e}function vu(){(ft===0||ft===3||ft===2)&&(ft=4),mt===null||(An&268435455)===0&&(Ua&268435455)===0||gn(mt,St)}function Xa(e,r){var n=je;je|=2;var a=ip();(mt!==e||St!==r)&&(Br=null,In(e,r));do try{D0();break}catch(s){op(e,s)}while(!0);if(Ms(),je=n,Wa.current=a,lt!==null)throw Error(i(261));return mt=null,St=0,ft}function D0(){for(;lt!==null;)ap(lt)}function R0(){for(;lt!==null&&!Fn();)ap(lt)}function ap(e){var r=cp(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,r===null?lp(e):lt=r,uu.current=null}function lp(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=k0(n,r,Vt),n!==null){lt=n;return}}else{if(n=N0(n,r),n!==null){n.flags&=32767,lt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ft=6,lt=null;return}}if(r=r.sibling,r!==null){lt=r;return}lt=r=e}while(r!==null);ft===0&&(ft=5)}function Hn(e,r,n){var a=Ue,s=rr.transition;try{rr.transition=null,Ue=1,L0(e,r,n,a)}finally{rr.transition=s,Ue=a}return null}function L0(e,r,n,a){do Mo();while(hn!==null);if((je&6)!==0)throw Error(i(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var c=n.lanes|n.childLanes;if(mg(e,c),e===mt&&(lt=mt=null,St=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ka||(Ka=!0,dp(br,function(){return Mo(),null})),c=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||c){c=rr.transition,rr.transition=null;var p=Ue;Ue=1;var x=je;je|=4,uu.current=null,T0(e,n),qf(n,e),t0(vs),la=!!ys,vs=ys=null,e.current=n,F0(n),sr(),je=x,Ue=p,rr.transition=c}else e.current=n;if(Ka&&(Ka=!1,hn=e,Qa=s),c=e.pendingLanes,c===0&&(pn=null),Mn(n.stateNode),Ot(e,ze()),r!==null)for(a=e.onRecoverableError,n=0;n<r.length;n++)s=r[n],a(s.value,{componentStack:s.stack,digest:s.digest});if(Va)throw Va=!1,e=fu,fu=null,e;return(Qa&1)!==0&&e.tag!==0&&Mo(),c=e.pendingLanes,(c&1)!==0?e===pu?Ti++:(Ti=0,pu=e):Ti=0,un(),null}function Mo(){if(hn!==null){var e=Gc(Qa),r=rr.transition,n=Ue;try{if(rr.transition=null,Ue=16>e?16:e,hn===null)var a=!1;else{if(e=hn,hn=null,Qa=0,(je&6)!==0)throw Error(i(331));var s=je;for(je|=4,ie=e.current;ie!==null;){var c=ie,p=c.child;if((ie.flags&16)!==0){var x=c.deletions;if(x!==null){for(var C=0;C<x.length;C++){var L=x[C];for(ie=L;ie!==null;){var K=ie;switch(K.tag){case 0:case 11:case 15:ki(8,K,c)}var X=K.child;if(X!==null)X.return=K,ie=X;else for(;ie!==null;){K=ie;var U=K.sibling,ne=K.return;if(Kf(K),K===L){ie=null;break}if(U!==null){U.return=ne,ie=U;break}ie=ne}}}var se=c.alternate;if(se!==null){var de=se.child;if(de!==null){se.child=null;do{var at=de.sibling;de.sibling=null,de=at}while(de!==null)}}ie=c}}if((c.subtreeFlags&2064)!==0&&p!==null)p.return=c,ie=p;else e:for(;ie!==null;){if(c=ie,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:ki(9,c,c.return)}var F=c.sibling;if(F!==null){F.return=c.return,ie=F;break e}ie=c.return}}var $=e.current;for(ie=$;ie!==null;){p=ie;var D=p.child;if((p.subtreeFlags&2064)!==0&&D!==null)D.return=p,ie=D;else e:for(p=$;ie!==null;){if(x=ie,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:Ha(9,x)}}catch(fe){ot(x,x.return,fe)}if(x===p){ie=null;break e}var q=x.sibling;if(q!==null){q.return=x.return,ie=q;break e}ie=x.return}}if(je=s,un(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Qe,e)}catch{}a=!0}return a}finally{Ue=n,rr.transition=r}}return!1}function sp(e,r,n){r=No(n,r),r=kf(e,r,1),e=dn(e,r,1),r=Tt(),e!==null&&(Zo(e,1,r),Ot(e,r))}function ot(e,r,n){if(e.tag===3)sp(e,e,n);else for(;r!==null;){if(r.tag===3){sp(r,e,n);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pn===null||!pn.has(a))){e=No(n,e),e=Nf(r,e,1),r=dn(r,e,1),e=Tt(),r!==null&&(Zo(r,1,e),Ot(r,e));break}}r=r.return}}function O0(e,r,n){var a=e.pingCache;a!==null&&a.delete(r),r=Tt(),e.pingedLanes|=e.suspendedLanes&n,mt===e&&(St&n)===n&&(ft===4||ft===3&&(St&130023424)===St&&500>ze()-du?In(e,0):cu|=n),Ot(e,r)}function up(e,r){r===0&&((e.mode&1)===0?r=1:(r=na,na<<=1,(na&130023424)===0&&(na=4194304)));var n=Tt();e=jr(e,r),e!==null&&(Zo(e,r,n),Ot(e,n))}function j0(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),up(e,n)}function z0(e,r){var n=0;switch(e.tag){case 13:var a=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(r),up(e,n)}var cp;cp=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||bt.current)Rt=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return Rt=!1,P0(e,r,n);Rt=(e.flags&131072)!==0}else Rt=!1,et&&(r.flags&1048576)!==0&&Hd(r,Pa,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Ba(e,r),e=r.pendingProps;var s=xo(r,_t.current);Po(r,n),s=Hs(null,r,a,e,s,n);var c=Ws();return r.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Dt(a)?(c=!0,Ea(r)):c=!1,r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ls(r),s.updater=za,r.stateNode=s,s._reactInternals=r,Ys(r,a,e,n),r=Zs(null,r,a,!0,c,n)):(r.tag=0,et&&c&&Ps(r),$t(null,r,s,n),r=r.child),r;case 16:a=r.elementType;e:{switch(Ba(e,r),e=r.pendingProps,s=a._init,a=s(a._payload),r.type=a,s=r.tag=B0(a),e=dr(a,e),s){case 0:r=Js(null,r,a,e,n);break e;case 1:r=Of(null,r,a,e,n);break e;case 11:r=Mf(null,r,a,e,n);break e;case 14:r=bf(null,r,a,dr(a.type,e),n);break e}throw Error(i(306,a,""))}return r;case 0:return a=r.type,s=r.pendingProps,s=r.elementType===a?s:dr(a,s),Js(e,r,a,s,n);case 1:return a=r.type,s=r.pendingProps,s=r.elementType===a?s:dr(a,s),Of(e,r,a,s,n);case 3:e:{if(jf(r),e===null)throw Error(i(387));a=r.pendingProps,c=r.memoizedState,s=c.element,qd(e,r),Ma(r,a,null,n);var p=r.memoizedState;if(a=p.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},r.updateQueue.baseState=c,r.memoizedState=c,r.flags&256){s=No(Error(i(423)),r),r=zf(e,r,a,n,s);break e}else if(a!==s){s=No(Error(i(424)),r),r=zf(e,r,a,n,s);break e}else for(Ut=an(r.stateNode.containerInfo.firstChild),Wt=r,et=!0,cr=null,n=Yd(r,null,a,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Eo(),a===s){r=Ar(e,r,n);break e}$t(e,r,a,n)}r=r.child}return r;case 5:return ef(r),e===null&&$s(r),a=r.type,s=r.pendingProps,c=e!==null?e.memoizedProps:null,p=s.children,xs(a,s)?p=null:c!==null&&xs(a,c)&&(r.flags|=32),Lf(e,r),$t(e,r,p,n),r.child;case 6:return e===null&&$s(r),null;case 13:return Af(e,r,n);case 4:return Os(r,r.stateNode.containerInfo),a=r.pendingProps,e===null?r.child=_o(r,null,a,n):$t(e,r,a,n),r.child;case 11:return a=r.type,s=r.pendingProps,s=r.elementType===a?s:dr(a,s),Mf(e,r,a,s,n);case 7:return $t(e,r,r.pendingProps,n),r.child;case 8:return $t(e,r,r.pendingProps.children,n),r.child;case 12:return $t(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(a=r.type._context,s=r.pendingProps,c=r.memoizedProps,p=s.value,Ye($a,a._currentValue),a._currentValue=p,c!==null)if(ur(c.value,p)){if(c.children===s.children&&!bt.current){r=Ar(e,r,n);break e}}else for(c=r.child,c!==null&&(c.return=r);c!==null;){var x=c.dependencies;if(x!==null){p=c.child;for(var C=x.firstContext;C!==null;){if(C.context===a){if(c.tag===1){C=zr(-1,n&-n),C.tag=2;var L=c.updateQueue;if(L!==null){L=L.shared;var K=L.pending;K===null?C.next=C:(C.next=K.next,K.next=C),L.pending=C}}c.lanes|=n,C=c.alternate,C!==null&&(C.lanes|=n),Ds(c.return,n,r),x.lanes|=n;break}C=C.next}}else if(c.tag===10)p=c.type===r.type?null:c.child;else if(c.tag===18){if(p=c.return,p===null)throw Error(i(341));p.lanes|=n,x=p.alternate,x!==null&&(x.lanes|=n),Ds(p,n,r),p=c.sibling}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===r){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}$t(e,r,s.children,n),r=r.child}return r;case 9:return s=r.type,a=r.pendingProps.children,Po(r,n),s=er(s),a=a(s),r.flags|=1,$t(e,r,a,n),r.child;case 14:return a=r.type,s=dr(a,r.pendingProps),s=dr(a.type,s),bf(e,r,a,s,n);case 15:return Df(e,r,r.type,r.pendingProps,n);case 17:return a=r.type,s=r.pendingProps,s=r.elementType===a?s:dr(a,s),Ba(e,r),r.tag=1,Dt(a)?(e=!0,Ea(r)):e=!1,Po(r,n),Cf(r,a,s),Ys(r,a,s,n),Zs(null,r,a,!0,e,n);case 19:return If(e,r,n);case 22:return Rf(e,r,n)}throw Error(i(156,r.tag))};function dp(e,r){return Xe(e,r)}function A0(e,r,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nr(e,r,n,a){return new A0(e,r,n,a)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function B0(e){if(typeof e=="function")return xu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pe)return 11;if(e===Ke)return 14}return 2}function yn(e,r){var n=e.alternate;return n===null?(n=nr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qa(e,r,n,a,s,c){var p=2;if(a=e,typeof e=="function")xu(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case N:return Wn(n.children,s,c,r);case J:p=8,s|=8;break;case ge:return e=nr(12,n,r,s|2),e.elementType=ge,e.lanes=c,e;case Re:return e=nr(13,n,r,s),e.elementType=Re,e.lanes=c,e;case Oe:return e=nr(19,n,r,s),e.elementType=Oe,e.lanes=c,e;case Fe:return Ja(n,s,c,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:p=10;break e;case Te:p=9;break e;case Pe:p=11;break e;case Ke:p=14;break e;case Ge:p=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return r=nr(p,n,r,s),r.elementType=e,r.type=a,r.lanes=c,r}function Wn(e,r,n,a){return e=nr(7,e,a,r),e.lanes=n,e}function Ja(e,r,n,a){return e=nr(22,e,a,r),e.elementType=Fe,e.lanes=n,e.stateNode={isHidden:!1},e}function wu(e,r,n){return e=nr(6,e,null,r),e.lanes=n,e}function Su(e,r,n){return r=nr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function I0(e,r,n,a,s){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=a,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Eu(e,r,n,a,s,c,p,x,C){return e=new I0(e,r,n,x,C),r===1?(r=1,c===!0&&(r|=8)):r=0,c=nr(3,null,null,r),e.current=c,c.stateNode=e,c.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ls(c),e}function H0(e,r,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:a==null?null:""+a,children:e,containerInfo:r,implementation:n}}function fp(e){if(!e)return sn;e=e._reactInternals;e:{if(ae(e)!==e||e.tag!==1)throw Error(i(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Dt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(e.tag===1){var n=e.type;if(Dt(n))return Ad(e,n,r)}return r}function pp(e,r,n,a,s,c,p,x,C){return e=Eu(n,a,!0,e,s,c,p,x,C),e.context=fp(null),n=e.current,a=Tt(),s=mn(n),c=zr(a,s),c.callback=r??null,dn(n,c,s),e.current.lanes=s,Zo(e,s,a),Ot(e,a),e}function Za(e,r,n,a){var s=r.current,c=Tt(),p=mn(s);return n=fp(n),r.context===null?r.context=n:r.pendingContext=n,r=zr(c,p),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=dn(s,r,p),e!==null&&(hr(e,s,p,c),Fa(e,s,p)),p}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hp(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function _u(e,r){hp(e,r),(e=e.alternate)&&hp(e,r)}function W0(){return null}var mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cu(e){this._internalRoot=e}tl.prototype.render=Cu.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(i(409));Za(e,r,null,null)},tl.prototype.unmount=Cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Bn(function(){Za(null,e,null,null)}),r[Dr]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var r=qc();e={blockedOn:null,target:e,priority:r};for(var n=0;n<rn.length&&r!==0&&r<rn[n].priority;n++);rn.splice(n,0,e),n===0&&ed(e)}};function Pu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gp(){}function U0(e,r,n,a,s){if(s){if(typeof a=="function"){var c=a;a=function(){var L=el(p);c.call(L)}}var p=pp(r,a,e,0,null,!1,!1,"",gp);return e._reactRootContainer=p,e[Dr]=p.current,pi(e.nodeType===8?e.parentNode:e),Bn(),p}for(;s=e.lastChild;)e.removeChild(s);if(typeof a=="function"){var x=a;a=function(){var L=el(C);x.call(L)}}var C=Eu(e,0,!1,null,null,!1,!1,"",gp);return e._reactRootContainer=C,e[Dr]=C.current,pi(e.nodeType===8?e.parentNode:e),Bn(function(){Za(r,C,n,a)}),C}function nl(e,r,n,a,s){var c=n._reactRootContainer;if(c){var p=c;if(typeof s=="function"){var x=s;s=function(){var C=el(p);x.call(C)}}Za(r,p,e,s)}else p=U0(n,r,e,s,a);return el(p)}Yc=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Jo(r.pendingLanes);n!==0&&(Yl(r,n|1),Ot(r,ze()),(je&6)===0&&(Fo=ze()+500,un()))}break;case 13:Bn(function(){var a=jr(e,1);if(a!==null){var s=Tt();hr(a,e,1,s)}}),_u(e,1)}},Xl=function(e){if(e.tag===13){var r=jr(e,134217728);if(r!==null){var n=Tt();hr(r,e,134217728,n)}_u(e,134217728)}},Xc=function(e){if(e.tag===13){var r=mn(e),n=jr(e,r);if(n!==null){var a=Tt();hr(n,e,r,a)}_u(e,r)}},qc=function(){return Ue},Jc=function(e,r){var n=Ue;try{return Ue=e,r()}finally{Ue=n}},lo=function(e,r,n){switch(r){case"input":if(Bt(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var a=n[r];if(a!==e&&a.form===e.form){var s=wa(a);if(!s)throw Error(i(90));Ie(a),Bt(a,s)}}}break;case"textarea":wr(e,n);break;case"select":r=n.value,r!=null&&Qr(e,!!n.multiple,r,!1)}},Xo=gu,$n=Bn;var V0={usingClientEntryPoint:!1,Events:[gi,yo,wa,Yo,Zi,gu]},Fi={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K0={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=We(e),e===null?null:e.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||W0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Qe=ol.inject(K0),xt=ol}catch{}}return jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V0,jt.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pu(r))throw Error(i(200));return H0(e,r,null,n)},jt.createRoot=function(e,r){if(!Pu(e))throw Error(i(299));var n=!1,a="",s=mp;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),r=Eu(e,1,!1,null,null,n,!1,a,s),e[Dr]=r.current,pi(e.nodeType===8?e.parentNode:e),new Cu(r)},jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=We(r),e=e===null?null:e.stateNode,e},jt.flushSync=function(e){return Bn(e)},jt.hydrate=function(e,r,n){if(!rl(r))throw Error(i(200));return nl(null,e,r,!0,n)},jt.hydrateRoot=function(e,r,n){if(!Pu(e))throw Error(i(405));var a=n!=null&&n.hydratedSources||null,s=!1,c="",p=mp;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),r=pp(r,null,e,1,n??null,s,!1,c,p),e[Dr]=r.current,pi(e),a)for(e=0;e<a.length;e++)n=a[e],s=n._getVersion,s=s(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,s]:r.mutableSourceEagerHydrationData.push(n,s);return new tl(r)},jt.render=function(e,r,n){if(!rl(r))throw Error(i(200));return nl(null,e,r,!1,n)},jt.unmountComponentAtNode=function(e){if(!rl(e))throw Error(i(40));return e._reactRootContainer?(Bn(function(){nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Dr]=null})}),!0):!1},jt.unstable_batchedUpdates=gu,jt.unstable_renderSubtreeIntoContainer=function(e,r,n,a){if(!rl(n))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return nl(e,r,n,!1,a)},jt.version="18.3.1-next-f1338f8080-20240426",jt}var Cp;function Ih(){if(Cp)return $u.exports;Cp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(o){console.error(o)}}return t(),$u.exports=ey(),$u.exports}var Pp;function ty(){if(Pp)return il;Pp=1;var t=Ih();return il.createRoot=t.createRoot,il.hydrateRoot=t.hydrateRoot,il}var ry=ty();const ny=Ec(ry);var Mu={exports:{}},bu={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function oy(){if(kp)return bu;kp=1;var t=Fl();function o(h,v){return h===v&&(h!==0||1/h===1/v)||h!==h&&v!==v}var i=typeof Object.is=="function"?Object.is:o,l=t.useSyncExternalStore,u=t.useRef,d=t.useEffect,f=t.useMemo,m=t.useDebugValue;return bu.useSyncExternalStoreWithSelector=function(h,v,y,g,w){var k=u(null);if(k.current===null){var M={hasValue:!1,value:null};k.current=M}else M=k.current;k=f(function(){function b(I){if(!B){if(B=!0,A=I,I=g(I),w!==void 0&&M.hasValue){var V=M.value;if(w(V,I))return j=V}return j=I}if(V=j,i(A,I))return V;var N=g(I);return w!==void 0&&w(V,N)?(A=I,V):(A=I,j=N)}var B=!1,A,j,H=y===void 0?null:y;return[function(){return b(v())},H===null?void 0:function(){return b(H())}]},[v,y,g,w]);var R=l(h,k[0],k[1]);return d(function(){M.hasValue=!0,M.value=R},[R]),m(R),R},bu}var Np;function iy(){return Np||(Np=1,Mu.exports=oy()),Mu.exports}var ay=iy();function ly(t){t()}function sy(){let t=null,o=null;return{clear(){t=null,o=null},notify(){ly(()=>{let i=t;for(;i;)i.callback(),i=i.next})},get(){const i=[];let l=t;for(;l;)i.push(l),l=l.next;return i},subscribe(i){let l=!0;const u=o={callback:i,next:null,prev:o};return u.prev?u.prev.next=u:t=u,function(){!l||t===null||(l=!1,u.next?u.next.prev=u.prev:o=u.prev,u.prev?u.prev.next=u.next:t=u.next)}}}}var $p={notify(){},get:()=>[]};function uy(t,o){let i,l=$p,u=0,d=!1;function f(R){y();const b=l.subscribe(R);let B=!1;return()=>{B||(B=!0,b(),g())}}function m(){l.notify()}function h(){M.onStateChange&&M.onStateChange()}function v(){return d}function y(){u++,i||(i=t.subscribe(h),l=sy())}function g(){u--,i&&u===0&&(i(),i=void 0,l.clear(),l=$p)}function w(){d||(d=!0,y())}function k(){d&&(d=!1,g())}const M={addNestedSub:f,notifyNestedSubs:m,handleChangeWrapper:h,isSubscribed:v,trySubscribe:w,tryUnsubscribe:k,getListeners:()=>l};return M}var cy=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dy=cy(),fy=()=>typeof navigator<"u"&&navigator.product==="ReactNative",py=fy(),hy=()=>dy||py?E.useLayoutEffect:E.useEffect,my=hy(),gy=Symbol.for("react-redux-context"),yy=typeof globalThis<"u"?globalThis:{};function vy(){if(!E.createContext)return{};const t=yy[gy]??=new Map;let o=t.get(E.createContext);return o||(o=E.createContext(null),t.set(E.createContext,o)),o}var _n=vy();function xy(t){const{children:o,context:i,serverState:l,store:u}=t,d=E.useMemo(()=>{const h=uy(u);return{store:u,subscription:h,getServerState:l?()=>l:void 0}},[u,l]),f=E.useMemo(()=>u.getState(),[u]);my(()=>{const{subscription:h}=d;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),f!==u.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[d,f]);const m=i||_n;return E.createElement(m.Provider,{value:d},o)}var wy=xy;function _c(t=_n){return function(){return E.useContext(t)}}var Hh=_c();function Wh(t=_n){const o=t===_n?Hh:_c(t),i=()=>{const{store:l}=o();return l};return Object.assign(i,{withTypes:()=>i}),i}var Sy=Wh();function Ey(t=_n){const o=t===_n?Sy:Wh(t),i=()=>o().dispatch;return Object.assign(i,{withTypes:()=>i}),i}var Cc=Ey(),_y=(t,o)=>t===o;function Cy(t=_n){const o=t===_n?Hh:_c(t),i=(l,u={})=>{const{equalityFn:d=_y}=typeof u=="function"?{equalityFn:u}:u,f=o(),{store:m,subscription:h,getServerState:v}=f;E.useRef(!0);const y=E.useCallback({[l.name](w){return l(w)}}[l.name],[l]),g=ay.useSyncExternalStoreWithSelector(h.addNestedSub,m.getState,v||m.getState,y,d);return E.useDebugValue(g),g};return Object.assign(i,{withTypes:()=>i}),i}var Uh=Cy();function Et(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var Py=typeof Symbol=="function"&&Symbol.observable||"@@observable",Tp=Py,Du=()=>Math.random().toString(36).substring(7).split("").join("."),ky={INIT:`@@redux/INIT${Du()}`,REPLACE:`@@redux/REPLACE${Du()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Du()}`},vl=ky;function Pc(t){if(typeof t!="object"||t===null)return!1;let o=t;for(;Object.getPrototypeOf(o)!==null;)o=Object.getPrototypeOf(o);return Object.getPrototypeOf(t)===o||Object.getPrototypeOf(t)===null}function Vh(t,o,i){if(typeof t!="function")throw new Error(Et(2));if(typeof o=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(Et(0));if(typeof o=="function"&&typeof i>"u"&&(i=o,o=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(Et(1));return i(Vh)(t,o)}let l=t,u=o,d=new Map,f=d,m=0,h=!1;function v(){f===d&&(f=new Map,d.forEach((b,B)=>{f.set(B,b)}))}function y(){if(h)throw new Error(Et(3));return u}function g(b){if(typeof b!="function")throw new Error(Et(4));if(h)throw new Error(Et(5));let B=!0;v();const A=m++;return f.set(A,b),function(){if(B){if(h)throw new Error(Et(6));B=!1,v(),f.delete(A),d=null}}}function w(b){if(!Pc(b))throw new Error(Et(7));if(typeof b.type>"u")throw new Error(Et(8));if(typeof b.type!="string")throw new Error(Et(17));if(h)throw new Error(Et(9));try{h=!0,u=l(u,b)}finally{h=!1}return(d=f).forEach(A=>{A()}),b}function k(b){if(typeof b!="function")throw new Error(Et(10));l=b,w({type:vl.REPLACE})}function M(){const b=g;return{subscribe(B){if(typeof B!="object"||B===null)throw new Error(Et(11));function A(){const H=B;H.next&&H.next(y())}return A(),{unsubscribe:b(A)}},[Tp](){return this}}}return w({type:vl.INIT}),{dispatch:w,subscribe:g,getState:y,replaceReducer:k,[Tp]:M}}function Ny(t){Object.keys(t).forEach(o=>{const i=t[o];if(typeof i(void 0,{type:vl.INIT})>"u")throw new Error(Et(12));if(typeof i(void 0,{type:vl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Et(13))})}function $y(t){const o=Object.keys(t),i={};for(let d=0;d<o.length;d++){const f=o[d];typeof t[f]=="function"&&(i[f]=t[f])}const l=Object.keys(i);let u;try{Ny(i)}catch(d){u=d}return function(f={},m){if(u)throw u;let h=!1;const v={};for(let y=0;y<l.length;y++){const g=l[y],w=i[g],k=f[g],M=w(k,m);if(typeof M>"u")throw m&&m.type,new Error(Et(14));v[g]=M,h=h||M!==k}return h=h||l.length!==Object.keys(f).length,h?v:f}}function xl(...t){return t.length===0?o=>o:t.length===1?t[0]:t.reduce((o,i)=>(...l)=>o(i(...l)))}function Ty(...t){return o=>(i,l)=>{const u=o(i,l);let d=()=>{throw new Error(Et(15))};const f={getState:u.getState,dispatch:(h,...v)=>d(h,...v)},m=t.map(h=>h(f));return d=xl(...m)(u.dispatch),{...u,dispatch:d}}}function Fy(t){return Pc(t)&&"type"in t&&typeof t.type=="string"}var Kh=Symbol.for("immer-nothing"),Fp=Symbol.for("immer-draftable"),Gt=Symbol.for("immer-state");function gr(t,...o){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Oo=Object.getPrototypeOf;function qn(t){return!!t&&!!t[Gt]}function Vr(t){return t?Qh(t)||Array.isArray(t)||!!t[Fp]||!!t.constructor?.[Fp]||bl(t)||Dl(t):!1}var My=Object.prototype.constructor.toString();function Qh(t){if(!t||typeof t!="object")return!1;const o=Oo(t);if(o===null)return!0;const i=Object.hasOwnProperty.call(o,"constructor")&&o.constructor;return i===Object?!0:typeof i=="function"&&Function.toString.call(i)===My}function wl(t,o){Ml(t)===0?Reflect.ownKeys(t).forEach(i=>{o(i,t[i],t)}):t.forEach((i,l)=>o(l,i,t))}function Ml(t){const o=t[Gt];return o?o.type_:Array.isArray(t)?1:bl(t)?2:Dl(t)?3:0}function Xu(t,o){return Ml(t)===2?t.has(o):Object.prototype.hasOwnProperty.call(t,o)}function Gh(t,o,i){const l=Ml(t);l===2?t.set(o,i):l===3?t.add(i):t[o]=i}function by(t,o){return t===o?t!==0||1/t===1/o:t!==t&&o!==o}function bl(t){return t instanceof Map}function Dl(t){return t instanceof Set}function Un(t){return t.copy_||t.base_}function qu(t,o){if(bl(t))return new Map(t);if(Dl(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const i=Qh(t);if(o===!0||o==="class_only"&&!i){const l=Object.getOwnPropertyDescriptors(t);delete l[Gt];let u=Reflect.ownKeys(l);for(let d=0;d<u.length;d++){const f=u[d],m=l[f];m.writable===!1&&(m.writable=!0,m.configurable=!0),(m.get||m.set)&&(l[f]={configurable:!0,writable:!0,enumerable:m.enumerable,value:t[f]})}return Object.create(Oo(t),l)}else{const l=Oo(t);if(l!==null&&i)return{...t};const u=Object.create(l);return Object.assign(u,t)}}function kc(t,o=!1){return Rl(t)||qn(t)||!Vr(t)||(Ml(t)>1&&(t.set=t.add=t.clear=t.delete=Dy),Object.freeze(t),o&&Object.entries(t).forEach(([i,l])=>kc(l,!0))),t}function Dy(){gr(2)}function Rl(t){return Object.isFrozen(t)}var Ry={};function Jn(t){const o=Ry[t];return o||gr(0,t),o}var Bi;function Yh(){return Bi}function Ly(t,o){return{drafts_:[],parent_:t,immer_:o,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Mp(t,o){o&&(Jn("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=o)}function Ju(t){Zu(t),t.drafts_.forEach(Oy),t.drafts_=null}function Zu(t){t===Bi&&(Bi=t.parent_)}function bp(t){return Bi=Ly(Bi,t)}function Oy(t){const o=t[Gt];o.type_===0||o.type_===1?o.revoke_():o.revoked_=!0}function Dp(t,o){o.unfinalizedDrafts_=o.drafts_.length;const i=o.drafts_[0];return t!==void 0&&t!==i?(i[Gt].modified_&&(Ju(o),gr(4)),Vr(t)&&(t=Sl(o,t),o.parent_||El(o,t)),o.patches_&&Jn("Patches").generateReplacementPatches_(i[Gt].base_,t,o.patches_,o.inversePatches_)):t=Sl(o,i,[]),Ju(o),o.patches_&&o.patchListener_(o.patches_,o.inversePatches_),t!==Kh?t:void 0}function Sl(t,o,i){if(Rl(o))return o;const l=o[Gt];if(!l)return wl(o,(u,d)=>Rp(t,l,o,u,d,i)),o;if(l.scope_!==t)return o;if(!l.modified_)return El(t,l.base_,!0),l.base_;if(!l.finalized_){l.finalized_=!0,l.scope_.unfinalizedDrafts_--;const u=l.copy_;let d=u,f=!1;l.type_===3&&(d=new Set(u),u.clear(),f=!0),wl(d,(m,h)=>Rp(t,l,u,m,h,i,f)),El(t,u,!1),i&&t.patches_&&Jn("Patches").generatePatches_(l,i,t.patches_,t.inversePatches_)}return l.copy_}function Rp(t,o,i,l,u,d,f){if(qn(u)){const m=d&&o&&o.type_!==3&&!Xu(o.assigned_,l)?d.concat(l):void 0,h=Sl(t,u,m);if(Gh(i,l,h),qn(h))t.canAutoFreeze_=!1;else return}else f&&i.add(u);if(Vr(u)&&!Rl(u)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Sl(t,u),(!o||!o.scope_.parent_)&&typeof l!="symbol"&&Object.prototype.propertyIsEnumerable.call(i,l)&&El(t,u)}}function El(t,o,i=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&kc(o,i)}function jy(t,o){const i=Array.isArray(t),l={type_:i?1:0,scope_:o?o.scope_:Yh(),modified_:!1,finalized_:!1,assigned_:{},parent_:o,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let u=l,d=Nc;i&&(u=[l],d=Ii);const{revoke:f,proxy:m}=Proxy.revocable(u,d);return l.draft_=m,l.revoke_=f,m}var Nc={get(t,o){if(o===Gt)return t;const i=Un(t);if(!Xu(i,o))return zy(t,i,o);const l=i[o];return t.finalized_||!Vr(l)?l:l===Ru(t.base_,o)?(Lu(t),t.copy_[o]=tc(l,t)):l},has(t,o){return o in Un(t)},ownKeys(t){return Reflect.ownKeys(Un(t))},set(t,o,i){const l=Xh(Un(t),o);if(l?.set)return l.set.call(t.draft_,i),!0;if(!t.modified_){const u=Ru(Un(t),o),d=u?.[Gt];if(d&&d.base_===i)return t.copy_[o]=i,t.assigned_[o]=!1,!0;if(by(i,u)&&(i!==void 0||Xu(t.base_,o)))return!0;Lu(t),ec(t)}return t.copy_[o]===i&&(i!==void 0||o in t.copy_)||Number.isNaN(i)&&Number.isNaN(t.copy_[o])||(t.copy_[o]=i,t.assigned_[o]=!0),!0},deleteProperty(t,o){return Ru(t.base_,o)!==void 0||o in t.base_?(t.assigned_[o]=!1,Lu(t),ec(t)):delete t.assigned_[o],t.copy_&&delete t.copy_[o],!0},getOwnPropertyDescriptor(t,o){const i=Un(t),l=Reflect.getOwnPropertyDescriptor(i,o);return l&&{writable:!0,configurable:t.type_!==1||o!=="length",enumerable:l.enumerable,value:i[o]}},defineProperty(){gr(11)},getPrototypeOf(t){return Oo(t.base_)},setPrototypeOf(){gr(12)}},Ii={};wl(Nc,(t,o)=>{Ii[t]=function(){return arguments[0]=arguments[0][0],o.apply(this,arguments)}});Ii.deleteProperty=function(t,o){return Ii.set.call(this,t,o,void 0)};Ii.set=function(t,o,i){return Nc.set.call(this,t[0],o,i,t[0])};function Ru(t,o){const i=t[Gt];return(i?Un(i):t)[o]}function zy(t,o,i){const l=Xh(o,i);return l?"value"in l?l.value:l.get?.call(t.draft_):void 0}function Xh(t,o){if(!(o in t))return;let i=Oo(t);for(;i;){const l=Object.getOwnPropertyDescriptor(i,o);if(l)return l;i=Oo(i)}}function ec(t){t.modified_||(t.modified_=!0,t.parent_&&ec(t.parent_))}function Lu(t){t.copy_||(t.copy_=qu(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var Ay=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(o,i,l)=>{if(typeof o=="function"&&typeof i!="function"){const d=i;i=o;const f=this;return function(h=d,...v){return f.produce(h,y=>i.call(this,y,...v))}}typeof i!="function"&&gr(6),l!==void 0&&typeof l!="function"&&gr(7);let u;if(Vr(o)){const d=bp(this),f=tc(o,void 0);let m=!0;try{u=i(f),m=!1}finally{m?Ju(d):Zu(d)}return Mp(d,l),Dp(u,d)}else if(!o||typeof o!="object"){if(u=i(o),u===void 0&&(u=o),u===Kh&&(u=void 0),this.autoFreeze_&&kc(u,!0),l){const d=[],f=[];Jn("Patches").generateReplacementPatches_(o,u,d,f),l(d,f)}return u}else gr(1,o)},this.produceWithPatches=(o,i)=>{if(typeof o=="function")return(f,...m)=>this.produceWithPatches(f,h=>o(h,...m));let l,u;return[this.produce(o,i,(f,m)=>{l=f,u=m}),l,u]},typeof t?.autoFreeze=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof t?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Vr(t)||gr(8),qn(t)&&(t=By(t));const o=bp(this),i=tc(t,void 0);return i[Gt].isManual_=!0,Zu(o),i}finishDraft(t,o){const i=t&&t[Gt];(!i||!i.isManual_)&&gr(9);const{scope_:l}=i;return Mp(l,o),Dp(void 0,l)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,o){let i;for(i=o.length-1;i>=0;i--){const u=o[i];if(u.path.length===0&&u.op==="replace"){t=u.value;break}}i>-1&&(o=o.slice(i+1));const l=Jn("Patches").applyPatches_;return qn(t)?l(t,o):this.produce(t,u=>l(u,o))}};function tc(t,o){const i=bl(t)?Jn("MapSet").proxyMap_(t,o):Dl(t)?Jn("MapSet").proxySet_(t,o):jy(t,o);return(o?o.scope_:Yh()).drafts_.push(i),i}function By(t){return qn(t)||gr(10,t),qh(t)}function qh(t){if(!Vr(t)||Rl(t))return t;const o=t[Gt];let i;if(o){if(!o.modified_)return o.base_;o.finalized_=!0,i=qu(t,o.scope_.immer_.useStrictShallowCopy_)}else i=qu(t,!0);return wl(i,(l,u)=>{Gh(i,l,qh(u))}),o&&(o.finalized_=!1),i}var Yt=new Ay,Jh=Yt.produce;Yt.produceWithPatches.bind(Yt);Yt.setAutoFreeze.bind(Yt);Yt.setUseStrictShallowCopy.bind(Yt);Yt.applyPatches.bind(Yt);Yt.createDraft.bind(Yt);Yt.finishDraft.bind(Yt);function Zh(t){return({dispatch:i,getState:l})=>u=>d=>typeof d=="function"?d(i,l,t):u(d)}var Iy=Zh(),Hy=Zh,Wy=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?xl:xl.apply(null,arguments)};function Lp(t,o){function i(...l){if(o){let u=o(...l);if(!u)throw new Error(Hr(0));return{type:t,payload:u.payload,..."meta"in u&&{meta:u.meta},..."error"in u&&{error:u.error}}}return{type:t,payload:l[0]}}return i.toString=()=>`${t}`,i.type=t,i.match=l=>Fy(l)&&l.type===t,i}var em=class Li extends Array{constructor(...o){super(...o),Object.setPrototypeOf(this,Li.prototype)}static get[Symbol.species](){return Li}concat(...o){return super.concat.apply(this,o)}prepend(...o){return o.length===1&&Array.isArray(o[0])?new Li(...o[0].concat(this)):new Li(...o.concat(this))}};function Op(t){return Vr(t)?Jh(t,()=>{}):t}function al(t,o,i){return t.has(o)?t.get(o):t.set(o,i(o)).get(o)}function Uy(t){return typeof t=="boolean"}var Vy=()=>function(o){const{thunk:i=!0,immutableCheck:l=!0,serializableCheck:u=!0,actionCreatorCheck:d=!0}=o??{};let f=new em;return i&&(Uy(i)?f.push(Iy):f.push(Hy(i.extraArgument))),f},Ky="RTK_autoBatch",jp=t=>o=>{setTimeout(o,t)},Qy=(t={type:"raf"})=>o=>(...i)=>{const l=o(...i);let u=!0,d=!1,f=!1;const m=new Set,h=t.type==="tick"?queueMicrotask:t.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:jp(10):t.type==="callback"?t.queueNotification:jp(t.timeout),v=()=>{f=!1,d&&(d=!1,m.forEach(y=>y()))};return Object.assign({},l,{subscribe(y){const g=()=>u&&y(),w=l.subscribe(g);return m.add(y),()=>{w(),m.delete(y)}},dispatch(y){try{return u=!y?.meta?.[Ky],d=!u,d&&(f||(f=!0,h(v))),l.dispatch(y)}finally{u=!0}}})},Gy=t=>function(i){const{autoBatch:l=!0}=i??{};let u=new em(t);return l&&u.push(Qy(typeof l=="object"?l:void 0)),u};function Yy(t){const o=Vy(),{reducer:i=void 0,middleware:l,devTools:u=!0,preloadedState:d=void 0,enhancers:f=void 0}=t||{};let m;if(typeof i=="function")m=i;else if(Pc(i))m=$y(i);else throw new Error(Hr(1));let h;typeof l=="function"?h=l(o):h=o();let v=xl;u&&(v=Wy({trace:!1,...typeof u=="object"&&u}));const y=Ty(...h),g=Gy(y);let w=typeof f=="function"?f(g):g();const k=v(...w);return Vh(m,d,k)}function tm(t){const o={},i=[];let l;const u={addCase(d,f){const m=typeof d=="string"?d:d.type;if(!m)throw new Error(Hr(28));if(m in o)throw new Error(Hr(29));return o[m]=f,u},addMatcher(d,f){return i.push({matcher:d,reducer:f}),u},addDefaultCase(d){return l=d,u}};return t(u),[o,i,l]}function Xy(t){return typeof t=="function"}function qy(t,o){let[i,l,u]=tm(o),d;if(Xy(t))d=()=>Op(t());else{const m=Op(t);d=()=>m}function f(m=d(),h){let v=[i[h.type],...l.filter(({matcher:y})=>y(h)).map(({reducer:y})=>y)];return v.filter(y=>!!y).length===0&&(v=[u]),v.reduce((y,g)=>{if(g)if(qn(y)){const k=g(y,h);return k===void 0?y:k}else{if(Vr(y))return Jh(y,w=>g(w,h));{const w=g(y,h);if(w===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return w}}return y},m)}return f.getInitialState=d,f}var Jy=Symbol.for("rtk-slice-createasyncthunk");function Zy(t,o){return`${t}/${o}`}function ev({creators:t}={}){const o=t?.asyncThunk?.[Jy];return function(l){const{name:u,reducerPath:d=u}=l;if(!u)throw new Error(Hr(11));const f=(typeof l.reducers=="function"?l.reducers(nv()):l.reducers)||{},m=Object.keys(f),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},v={addCase(j,H){const I=typeof j=="string"?j:j.type;if(!I)throw new Error(Hr(12));if(I in h.sliceCaseReducersByType)throw new Error(Hr(13));return h.sliceCaseReducersByType[I]=H,v},addMatcher(j,H){return h.sliceMatchers.push({matcher:j,reducer:H}),v},exposeAction(j,H){return h.actionCreators[j]=H,v},exposeCaseReducer(j,H){return h.sliceCaseReducersByName[j]=H,v}};m.forEach(j=>{const H=f[j],I={reducerName:j,type:Zy(u,j),createNotation:typeof l.reducers=="function"};iv(H)?lv(I,H,v,o):ov(I,H,v)});function y(){const[j={},H=[],I=void 0]=typeof l.extraReducers=="function"?tm(l.extraReducers):[l.extraReducers],V={...j,...h.sliceCaseReducersByType};return qy(l.initialState,N=>{for(let J in V)N.addCase(J,V[J]);for(let J of h.sliceMatchers)N.addMatcher(J.matcher,J.reducer);for(let J of H)N.addMatcher(J.matcher,J.reducer);I&&N.addDefaultCase(I)})}const g=j=>j,w=new Map,k=new WeakMap;let M;function R(j,H){return M||(M=y()),M(j,H)}function b(){return M||(M=y()),M.getInitialState()}function B(j,H=!1){function I(N){let J=N[j];return typeof J>"u"&&H&&(J=al(k,I,b)),J}function V(N=g){const J=al(w,H,()=>new WeakMap);return al(J,N,()=>{const ge={};for(const[Z,Te]of Object.entries(l.selectors??{}))ge[Z]=tv(Te,N,()=>al(k,N,b),H);return ge})}return{reducerPath:j,getSelectors:V,get selectors(){return V(I)},selectSlice:I}}const A={name:u,reducer:R,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:b,...B(d),injectInto(j,{reducerPath:H,...I}={}){const V=H??d;return j.inject({reducerPath:V,reducer:R},I),{...A,...B(V,!0)}}};return A}}function tv(t,o,i,l){function u(d,...f){let m=o(d);return typeof m>"u"&&l&&(m=i()),t(m,...f)}return u.unwrapped=t,u}var rv=ev();function nv(){function t(o,i){return{_reducerDefinitionType:"asyncThunk",payloadCreator:o,...i}}return t.withTypes=()=>t,{reducer(o){return Object.assign({[o.name](...i){return o(...i)}}[o.name],{_reducerDefinitionType:"reducer"})},preparedReducer(o,i){return{_reducerDefinitionType:"reducerWithPrepare",prepare:o,reducer:i}},asyncThunk:t}}function ov({type:t,reducerName:o,createNotation:i},l,u){let d,f;if("reducer"in l){if(i&&!av(l))throw new Error(Hr(17));d=l.reducer,f=l.prepare}else d=l;u.addCase(t,d).exposeCaseReducer(o,d).exposeAction(o,f?Lp(t,f):Lp(t))}function iv(t){return t._reducerDefinitionType==="asyncThunk"}function av(t){return t._reducerDefinitionType==="reducerWithPrepare"}function lv({type:t,reducerName:o},i,l,u){if(!u)throw new Error(Hr(18));const{payloadCreator:d,fulfilled:f,pending:m,rejected:h,settled:v,options:y}=i,g=u(t,d,y);l.exposeAction(o,g),f&&l.addCase(g.fulfilled,f),m&&l.addCase(g.pending,m),h&&l.addCase(g.rejected,h),v&&l.addMatcher(g.settled,v),l.exposeCaseReducer(o,{fulfilled:f||ll,pending:m||ll,rejected:h||ll,settled:v||ll})}function ll(){}function Hr(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const rm="tasks";function sv(){try{const t=localStorage.getItem(rm);return t?JSON.parse(t):[]}catch{return[]}}function bo(t){localStorage.setItem(rm,JSON.stringify(t))}const uv={tasks:sv(),loading:!1,error:null},nm=rv({name:"tasks",initialState:uv,reducers:{addTask(t,o){const i={...o.payload,id:Date.now().toString(),createdAt:new Date().toISOString()};t.tasks.push(i),bo(t.tasks)},updateTask(t,o){const i=t.tasks.findIndex(l=>l.id===o.payload.id);i!==-1&&(t.tasks[i]=o.payload,bo(t.tasks))},deleteTask(t,o){t.tasks=t.tasks.filter(i=>i.id!==o.payload),bo(t.tasks)},setTasks(t,o){t.tasks=o.payload,bo(t.tasks)},restoreDemoTasks(t){const o=[{id:"1",title:"Исправить баг в авторизации",description:"Ошибка при входе через Google",status:"todo",priority:"high",category:"bug",createdAt:new Date().toISOString()},{id:"2",title:"Добавить документацию",description:"--",status:"in_progress",priority:"medium",category:"documentation",createdAt:new Date().toISOString()},{id:"3",title:"Рефакторинг кода",description:"Улучшить структуру компонентов и убрать дублирование",status:"done",priority:"low",category:"refactor",createdAt:new Date().toISOString()}];t.tasks=o,bo(t.tasks)},deleteAllTasks(t){t.tasks=[],bo(t.tasks)}}}),{addTask:wE,updateTask:rc,deleteTask:cv,setTasks:SE,restoreDemoTasks:dv,deleteAllTasks:fv}=nm.actions,pv=nm.reducer,hv=Yy({reducer:{tasks:pv}});var Nt=function(){return Nt=Object.assign||function(o){for(var i,l=1,u=arguments.length;l<u;l++){i=arguments[l];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(o[d]=i[d])}return o},Nt.apply(this,arguments)};function Hi(t,o,i){if(i||arguments.length===2)for(var l=0,u=o.length,d;l<u;l++)(d||!(l in o))&&(d||(d=Array.prototype.slice.call(o,0,l)),d[l]=o[l]);return t.concat(d||Array.prototype.slice.call(o))}var Ze="-ms-",Ai="-moz-",He="-webkit-",om="comm",Ll="rule",$c="decl",mv="@import",im="@keyframes",gv="@layer",am=Math.abs,Tc=String.fromCharCode,nc=Object.assign;function yv(t,o){return yt(t,0)^45?(((o<<2^yt(t,0))<<2^yt(t,1))<<2^yt(t,2))<<2^yt(t,3):0}function lm(t){return t.trim()}function Ir(t,o){return(t=o.exec(t))?t[0]:t}function ke(t,o,i){return t.replace(o,i)}function dl(t,o,i){return t.indexOf(o,i)}function yt(t,o){return t.charCodeAt(o)|0}function jo(t,o,i){return t.slice(o,i)}function Tr(t){return t.length}function sm(t){return t.length}function Oi(t,o){return o.push(t),t}function vv(t,o){return t.map(o).join("")}function zp(t,o){return t.filter(function(i){return!Ir(i,o)})}var Ol=1,zo=1,um=0,ir=0,ut=0,Wo="";function jl(t,o,i,l,u,d,f,m){return{value:t,root:o,parent:i,type:l,props:u,children:d,line:Ol,column:zo,length:f,return:"",siblings:m}}function xn(t,o){return nc(jl("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},o)}function Do(t){for(;t.root;)t=xn(t.root,{children:[t]});Oi(t,t.siblings)}function xv(){return ut}function wv(){return ut=ir>0?yt(Wo,--ir):0,zo--,ut===10&&(zo=1,Ol--),ut}function yr(){return ut=ir<um?yt(Wo,ir++):0,zo++,ut===10&&(zo=1,Ol++),ut}function Yn(){return yt(Wo,ir)}function fl(){return ir}function zl(t,o){return jo(Wo,t,o)}function oc(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sv(t){return Ol=zo=1,um=Tr(Wo=t),ir=0,[]}function Ev(t){return Wo="",t}function Ou(t){return lm(zl(ir-1,ic(t===91?t+2:t===40?t+1:t)))}function _v(t){for(;(ut=Yn())&&ut<33;)yr();return oc(t)>2||oc(ut)>3?"":" "}function Cv(t,o){for(;--o&&yr()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return zl(t,fl()+(o<6&&Yn()==32&&yr()==32))}function ic(t){for(;yr();)switch(ut){case t:return ir;case 34:case 39:t!==34&&t!==39&&ic(ut);break;case 40:t===41&&ic(t);break;case 92:yr();break}return ir}function Pv(t,o){for(;yr()&&t+ut!==57;)if(t+ut===84&&Yn()===47)break;return"/*"+zl(o,ir-1)+"*"+Tc(t===47?t:yr())}function kv(t){for(;!oc(Yn());)yr();return zl(t,ir)}function Nv(t){return Ev(pl("",null,null,null,[""],t=Sv(t),0,[0],t))}function pl(t,o,i,l,u,d,f,m,h){for(var v=0,y=0,g=f,w=0,k=0,M=0,R=1,b=1,B=1,A=0,j="",H=u,I=d,V=l,N=j;b;)switch(M=A,A=yr()){case 40:if(M!=108&&yt(N,g-1)==58){dl(N+=ke(Ou(A),"&","&\f"),"&\f",am(v?m[v-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:N+=Ou(A);break;case 9:case 10:case 13:case 32:N+=_v(M);break;case 92:N+=Cv(fl()-1,7);continue;case 47:switch(Yn()){case 42:case 47:Oi($v(Pv(yr(),fl()),o,i,h),h);break;default:N+="/"}break;case 123*R:m[v++]=Tr(N)*B;case 125*R:case 59:case 0:switch(A){case 0:case 125:b=0;case 59+y:B==-1&&(N=ke(N,/\f/g,"")),k>0&&Tr(N)-g&&Oi(k>32?Bp(N+";",l,i,g-1,h):Bp(ke(N," ","")+";",l,i,g-2,h),h);break;case 59:N+=";";default:if(Oi(V=Ap(N,o,i,v,y,u,m,j,H=[],I=[],g,d),d),A===123)if(y===0)pl(N,o,V,V,H,d,g,m,I);else switch(w===99&&yt(N,3)===110?100:w){case 100:case 108:case 109:case 115:pl(t,V,V,l&&Oi(Ap(t,V,V,0,0,u,m,j,u,H=[],g,I),I),u,I,g,m,l?H:I);break;default:pl(N,V,V,V,[""],I,0,m,I)}}v=y=k=0,R=B=1,j=N="",g=f;break;case 58:g=1+Tr(N),k=M;default:if(R<1){if(A==123)--R;else if(A==125&&R++==0&&wv()==125)continue}switch(N+=Tc(A),A*R){case 38:B=y>0?1:(N+="\f",-1);break;case 44:m[v++]=(Tr(N)-1)*B,B=1;break;case 64:Yn()===45&&(N+=Ou(yr())),w=Yn(),y=g=Tr(j=N+=kv(fl())),A++;break;case 45:M===45&&Tr(N)==2&&(R=0)}}return d}function Ap(t,o,i,l,u,d,f,m,h,v,y,g){for(var w=u-1,k=u===0?d:[""],M=sm(k),R=0,b=0,B=0;R<l;++R)for(var A=0,j=jo(t,w+1,w=am(b=f[R])),H=t;A<M;++A)(H=lm(b>0?k[A]+" "+j:ke(j,/&\f/g,k[A])))&&(h[B++]=H);return jl(t,o,i,u===0?Ll:m,h,v,y,g)}function $v(t,o,i,l){return jl(t,o,i,om,Tc(xv()),jo(t,2,-2),0,l)}function Bp(t,o,i,l,u){return jl(t,o,i,$c,jo(t,0,l),jo(t,l+1,-1),l,u)}function cm(t,o,i){switch(yv(t,o)){case 5103:return He+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return He+t+t;case 4789:return Ai+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return He+t+Ai+t+Ze+t+t;case 5936:switch(yt(t,o+11)){case 114:return He+t+Ze+ke(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return He+t+Ze+ke(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return He+t+Ze+ke(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return He+t+Ze+t+t;case 6165:return He+t+Ze+"flex-"+t+t;case 5187:return He+t+ke(t,/(\w+).+(:[^]+)/,He+"box-$1$2"+Ze+"flex-$1$2")+t;case 5443:return He+t+Ze+"flex-item-"+ke(t,/flex-|-self/g,"")+(Ir(t,/flex-|baseline/)?"":Ze+"grid-row-"+ke(t,/flex-|-self/g,""))+t;case 4675:return He+t+Ze+"flex-line-pack"+ke(t,/align-content|flex-|-self/g,"")+t;case 5548:return He+t+Ze+ke(t,"shrink","negative")+t;case 5292:return He+t+Ze+ke(t,"basis","preferred-size")+t;case 6060:return He+"box-"+ke(t,"-grow","")+He+t+Ze+ke(t,"grow","positive")+t;case 4554:return He+ke(t,/([^-])(transform)/g,"$1"+He+"$2")+t;case 6187:return ke(ke(ke(t,/(zoom-|grab)/,He+"$1"),/(image-set)/,He+"$1"),t,"")+t;case 5495:case 3959:return ke(t,/(image-set\([^]*)/,He+"$1$`$1");case 4968:return ke(ke(t,/(.+:)(flex-)?(.*)/,He+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+He+t+t;case 4200:if(!Ir(t,/flex-|baseline/))return Ze+"grid-column-align"+jo(t,o)+t;break;case 2592:case 3360:return Ze+ke(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(l,u){return o=u,Ir(l.props,/grid-\w+-end/)})?~dl(t+(i=i[o].value),"span",0)?t:Ze+ke(t,"-start","")+t+Ze+"grid-row-span:"+(~dl(i,"span",0)?Ir(i,/\d+/):+Ir(i,/\d+/)-+Ir(t,/\d+/))+";":Ze+ke(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(l){return Ir(l.props,/grid-\w+-start/)})?t:Ze+ke(ke(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ke(t,/(.+)-inline(.+)/,He+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tr(t)-1-o>6)switch(yt(t,o+1)){case 109:if(yt(t,o+4)!==45)break;case 102:return ke(t,/(.+:)(.+)-([^]+)/,"$1"+He+"$2-$3$1"+Ai+(yt(t,o+3)==108?"$3":"$2-$3"))+t;case 115:return~dl(t,"stretch",0)?cm(ke(t,"stretch","fill-available"),o,i)+t:t}break;case 5152:case 5920:return ke(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,u,d,f,m,h,v){return Ze+u+":"+d+v+(f?Ze+u+"-span:"+(m?h:+h-+d)+v:"")+t});case 4949:if(yt(t,o+6)===121)return ke(t,":",":"+He)+t;break;case 6444:switch(yt(t,yt(t,14)===45?18:11)){case 120:return ke(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+He+(yt(t,14)===45?"inline-":"")+"box$3$1"+He+"$2$3$1"+Ze+"$2box$3")+t;case 100:return ke(t,":",":"+Ze)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(t,"scroll-","scroll-snap-")+t}return t}function _l(t,o){for(var i="",l=0;l<t.length;l++)i+=o(t[l],l,t,o)||"";return i}function Tv(t,o,i,l){switch(t.type){case gv:if(t.children.length)break;case mv:case $c:return t.return=t.return||t.value;case om:return"";case im:return t.return=t.value+"{"+_l(t.children,l)+"}";case Ll:if(!Tr(t.value=t.props.join(",")))return""}return Tr(i=_l(t.children,l))?t.return=t.value+"{"+i+"}":""}function Fv(t){var o=sm(t);return function(i,l,u,d){for(var f="",m=0;m<o;m++)f+=t[m](i,l,u,d)||"";return f}}function Mv(t){return function(o){o.root||(o=o.return)&&t(o)}}function bv(t,o,i,l){if(t.length>-1&&!t.return)switch(t.type){case $c:t.return=cm(t.value,t.length,i);return;case im:return _l([xn(t,{value:ke(t.value,"@","@"+He)})],l);case Ll:if(t.length)return vv(i=t.props,function(u){switch(Ir(u,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Do(xn(t,{props:[ke(u,/:(read-\w+)/,":"+Ai+"$1")]})),Do(xn(t,{props:[u]})),nc(t,{props:zp(i,l)});break;case"::placeholder":Do(xn(t,{props:[ke(u,/:(plac\w+)/,":"+He+"input-$1")]})),Do(xn(t,{props:[ke(u,/:(plac\w+)/,":"+Ai+"$1")]})),Do(xn(t,{props:[ke(u,/:(plac\w+)/,Ze+"input-$1")]})),Do(xn(t,{props:[u]})),nc(t,{props:zp(i,l)});break}return""})}}var Dv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kt={},Ao=typeof process<"u"&&Kt!==void 0&&(Kt.REACT_APP_SC_ATTR||Kt.SC_ATTR)||"data-styled",dm="active",fm="data-styled-version",Al="6.1.19",Fc=`/*!sc*/
`,Cl=typeof window<"u"&&typeof document<"u",Rv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==""?Kt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Kt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.SC_DISABLE_SPEEDY!==void 0&&Kt.SC_DISABLE_SPEEDY!==""&&Kt.SC_DISABLE_SPEEDY!=="false"&&Kt.SC_DISABLE_SPEEDY),Bl=Object.freeze([]),Bo=Object.freeze({});function Lv(t,o,i){return i===void 0&&(i=Bo),t.theme!==i.theme&&t.theme||o||i.theme}var pm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ov=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jv=/(^-|-$)/g;function Ip(t){return t.replace(Ov,"-").replace(jv,"")}var zv=/(a)(d)/gi,sl=52,Hp=function(t){return String.fromCharCode(t+(t>25?39:97))};function ac(t){var o,i="";for(o=Math.abs(t);o>sl;o=o/sl|0)i=Hp(o%sl)+i;return(Hp(o%sl)+i).replace(zv,"$1-$2")}var ju,hm=5381,Lo=function(t,o){for(var i=o.length;i;)t=33*t^o.charCodeAt(--i);return t},mm=function(t){return Lo(hm,t)};function gm(t){return ac(mm(t)>>>0)}function Av(t){return t.displayName||t.name||"Component"}function zu(t){return typeof t=="string"&&!0}var ym=typeof Symbol=="function"&&Symbol.for,vm=ym?Symbol.for("react.memo"):60115,Bv=ym?Symbol.for("react.forward_ref"):60112,Iv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wv=((ju={})[Bv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ju[vm]=xm,ju);function Wp(t){return("type"in(o=t)&&o.type.$$typeof)===vm?xm:"$$typeof"in t?Wv[t.$$typeof]:Iv;var o}var Uv=Object.defineProperty,Vv=Object.getOwnPropertyNames,Up=Object.getOwnPropertySymbols,Kv=Object.getOwnPropertyDescriptor,Qv=Object.getPrototypeOf,Vp=Object.prototype;function wm(t,o,i){if(typeof o!="string"){if(Vp){var l=Qv(o);l&&l!==Vp&&wm(t,l,i)}var u=Vv(o);Up&&(u=u.concat(Up(o)));for(var d=Wp(t),f=Wp(o),m=0;m<u.length;++m){var h=u[m];if(!(h in Hv||i&&i[h]||f&&h in f||d&&h in d)){var v=Kv(o,h);try{Uv(t,h,v)}catch{}}}}return t}function Zn(t){return typeof t=="function"}function Mc(t){return typeof t=="object"&&"styledComponentId"in t}function Qn(t,o){return t&&o?"".concat(t," ").concat(o):t||o||""}function lc(t,o){if(t.length===0)return"";for(var i=t[0],l=1;l<t.length;l++)i+=t[l];return i}function Wi(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function sc(t,o,i){if(i===void 0&&(i=!1),!i&&!Wi(t)&&!Array.isArray(t))return o;if(Array.isArray(o))for(var l=0;l<o.length;l++)t[l]=sc(t[l],o[l]);else if(Wi(o))for(var l in o)t[l]=sc(t[l],o[l]);return t}function bc(t,o){Object.defineProperty(t,"toString",{value:o})}function Cn(t){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Gv=function(){function t(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return t.prototype.indexOfGroup=function(o){for(var i=0,l=0;l<o;l++)i+=this.groupSizes[l];return i},t.prototype.insertRules=function(o,i){if(o>=this.groupSizes.length){for(var l=this.groupSizes,u=l.length,d=u;o>=d;)if((d<<=1)<0)throw Cn(16,"".concat(o));this.groupSizes=new Uint32Array(d),this.groupSizes.set(l),this.length=d;for(var f=u;f<d;f++)this.groupSizes[f]=0}for(var m=this.indexOfGroup(o+1),h=(f=0,i.length);f<h;f++)this.tag.insertRule(m,i[f])&&(this.groupSizes[o]++,m++)},t.prototype.clearGroup=function(o){if(o<this.length){var i=this.groupSizes[o],l=this.indexOfGroup(o),u=l+i;this.groupSizes[o]=0;for(var d=l;d<u;d++)this.tag.deleteRule(l)}},t.prototype.getGroup=function(o){var i="";if(o>=this.length||this.groupSizes[o]===0)return i;for(var l=this.groupSizes[o],u=this.indexOfGroup(o),d=u+l,f=u;f<d;f++)i+="".concat(this.tag.getRule(f)).concat(Fc);return i},t}(),hl=new Map,Pl=new Map,ml=1,ul=function(t){if(hl.has(t))return hl.get(t);for(;Pl.has(ml);)ml++;var o=ml++;return hl.set(t,o),Pl.set(o,t),o},Yv=function(t,o){ml=o+1,hl.set(t,o),Pl.set(o,t)},Xv="style[".concat(Ao,"][").concat(fm,'="').concat(Al,'"]'),qv=new RegExp("^".concat(Ao,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Jv=function(t,o,i){for(var l,u=i.split(","),d=0,f=u.length;d<f;d++)(l=u[d])&&t.registerName(o,l)},Zv=function(t,o){for(var i,l=((i=o.textContent)!==null&&i!==void 0?i:"").split(Fc),u=[],d=0,f=l.length;d<f;d++){var m=l[d].trim();if(m){var h=m.match(qv);if(h){var v=0|parseInt(h[1],10),y=h[2];v!==0&&(Yv(y,v),Jv(t,y,h[3]),t.getTag().insertRules(v,u)),u.length=0}else u.push(m)}}},Kp=function(t){for(var o=document.querySelectorAll(Xv),i=0,l=o.length;i<l;i++){var u=o[i];u&&u.getAttribute(Ao)!==dm&&(Zv(t,u),u.parentNode&&u.parentNode.removeChild(u))}};function e1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sm=function(t){var o=document.head,i=t||o,l=document.createElement("style"),u=function(m){var h=Array.from(m.querySelectorAll("style[".concat(Ao,"]")));return h[h.length-1]}(i),d=u!==void 0?u.nextSibling:null;l.setAttribute(Ao,dm),l.setAttribute(fm,Al);var f=e1();return f&&l.setAttribute("nonce",f),i.insertBefore(l,d),l},t1=function(){function t(o){this.element=Sm(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var l=document.styleSheets,u=0,d=l.length;u<d;u++){var f=l[u];if(f.ownerNode===i)return f}throw Cn(17)}(this.element),this.length=0}return t.prototype.insertRule=function(o,i){try{return this.sheet.insertRule(i,o),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},t.prototype.getRule=function(o){var i=this.sheet.cssRules[o];return i&&i.cssText?i.cssText:""},t}(),r1=function(){function t(o){this.element=Sm(o),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(o,i){if(o<=this.length&&o>=0){var l=document.createTextNode(i);return this.element.insertBefore(l,this.nodes[o]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},t.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},t}(),n1=function(){function t(o){this.rules=[],this.length=0}return t.prototype.insertRule=function(o,i){return o<=this.length&&(this.rules.splice(o,0,i),this.length++,!0)},t.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},t.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},t}(),Qp=Cl,o1={isServer:!Cl,useCSSOMInjection:!Rv},Em=function(){function t(o,i,l){o===void 0&&(o=Bo),i===void 0&&(i={});var u=this;this.options=Nt(Nt({},o1),o),this.gs=i,this.names=new Map(l),this.server=!!o.isServer,!this.server&&Cl&&Qp&&(Qp=!1,Kp(this)),bc(this,function(){return function(d){for(var f=d.getTag(),m=f.length,h="",v=function(g){var w=function(B){return Pl.get(B)}(g);if(w===void 0)return"continue";var k=d.names.get(w),M=f.getGroup(g);if(k===void 0||!k.size||M.length===0)return"continue";var R="".concat(Ao,".g").concat(g,'[id="').concat(w,'"]'),b="";k!==void 0&&k.forEach(function(B){B.length>0&&(b+="".concat(B,","))}),h+="".concat(M).concat(R,'{content:"').concat(b,'"}').concat(Fc)},y=0;y<m;y++)v(y);return h}(u)})}return t.registerId=function(o){return ul(o)},t.prototype.rehydrate=function(){!this.server&&Cl&&Kp(this)},t.prototype.reconstructWithOptions=function(o,i){return i===void 0&&(i=!0),new t(Nt(Nt({},this.options),o),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(o=function(i){var l=i.useCSSOMInjection,u=i.target;return i.isServer?new n1(u):l?new t1(u):new r1(u)}(this.options),new Gv(o)));var o},t.prototype.hasNameForId=function(o,i){return this.names.has(o)&&this.names.get(o).has(i)},t.prototype.registerName=function(o,i){if(ul(o),this.names.has(o))this.names.get(o).add(i);else{var l=new Set;l.add(i),this.names.set(o,l)}},t.prototype.insertRules=function(o,i,l){this.registerName(o,i),this.getTag().insertRules(ul(o),l)},t.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},t.prototype.clearRules=function(o){this.getTag().clearGroup(ul(o)),this.clearNames(o)},t.prototype.clearTag=function(){this.tag=void 0},t}(),i1=/&/g,a1=/^\s*\/\/.*$/gm;function _m(t,o){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(o," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(o," ")),i.props=i.props.map(function(l){return"".concat(o," ").concat(l)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=_m(i.children,o)),i})}function l1(t){var o,i,l,u=Bo,d=u.options,f=d===void 0?Bo:d,m=u.plugins,h=m===void 0?Bl:m,v=function(w,k,M){return M.startsWith(i)&&M.endsWith(i)&&M.replaceAll(i,"").length>0?".".concat(o):w},y=h.slice();y.push(function(w){w.type===Ll&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(i1,i).replace(l,v))}),f.prefix&&y.push(bv),y.push(Tv);var g=function(w,k,M,R){k===void 0&&(k=""),M===void 0&&(M=""),R===void 0&&(R="&"),o=R,i=k,l=new RegExp("\\".concat(i,"\\b"),"g");var b=w.replace(a1,""),B=Nv(M||k?"".concat(M," ").concat(k," { ").concat(b," }"):b);f.namespace&&(B=_m(B,f.namespace));var A=[];return _l(B,Fv(y.concat(Mv(function(j){return A.push(j)})))),A};return g.hash=h.length?h.reduce(function(w,k){return k.name||Cn(15),Lo(w,k.name)},hm).toString():"",g}var s1=new Em,uc=l1(),Cm=Ur.createContext({shouldForwardProp:void 0,styleSheet:s1,stylis:uc});Cm.Consumer;Ur.createContext(void 0);function Gp(){return E.useContext(Cm)}var Pm=function(){function t(o,i){var l=this;this.inject=function(u,d){d===void 0&&(d=uc);var f=l.name+d.hash;u.hasNameForId(l.id,f)||u.insertRules(l.id,f,d(l.rules,f,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=i,bc(this,function(){throw Cn(12,String(l.name))})}return t.prototype.getName=function(o){return o===void 0&&(o=uc),this.name+o.hash},t}(),u1=function(t){return t>="A"&&t<="Z"};function Yp(t){for(var o="",i=0;i<t.length;i++){var l=t[i];if(i===1&&l==="-"&&t[0]==="-")return t;u1(l)?o+="-"+l.toLowerCase():o+=l}return o.startsWith("ms-")?"-"+o:o}var km=function(t){return t==null||t===!1||t===""},Nm=function(t){var o,i,l=[];for(var u in t){var d=t[u];t.hasOwnProperty(u)&&!km(d)&&(Array.isArray(d)&&d.isCss||Zn(d)?l.push("".concat(Yp(u),":"),d,";"):Wi(d)?l.push.apply(l,Hi(Hi(["".concat(u," {")],Nm(d),!1),["}"],!1)):l.push("".concat(Yp(u),": ").concat((o=u,(i=d)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||o in Dv||o.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return l};function Xn(t,o,i,l){if(km(t))return[];if(Mc(t))return[".".concat(t.styledComponentId)];if(Zn(t)){if(!Zn(d=t)||d.prototype&&d.prototype.isReactComponent||!o)return[t];var u=t(o);return Xn(u,o,i,l)}var d;return t instanceof Pm?i?(t.inject(i,l),[t.getName(l)]):[t]:Wi(t)?Nm(t):Array.isArray(t)?Array.prototype.concat.apply(Bl,t.map(function(f){return Xn(f,o,i,l)})):[t.toString()]}function c1(t){for(var o=0;o<t.length;o+=1){var i=t[o];if(Zn(i)&&!Mc(i))return!1}return!0}var d1=mm(Al),f1=function(){function t(o,i,l){this.rules=o,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&c1(o),this.componentId=i,this.baseHash=Lo(d1,i),this.baseStyle=l,Em.registerId(i)}return t.prototype.generateAndInjectStyles=function(o,i,l){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,i,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))u=Qn(u,this.staticRulesId);else{var d=lc(Xn(this.rules,o,i,l)),f=ac(Lo(this.baseHash,d)>>>0);if(!i.hasNameForId(this.componentId,f)){var m=l(d,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,m)}u=Qn(u,f),this.staticRulesId=f}else{for(var h=Lo(this.baseHash,l.hash),v="",y=0;y<this.rules.length;y++){var g=this.rules[y];if(typeof g=="string")v+=g;else if(g){var w=lc(Xn(g,o,i,l));h=Lo(h,w+y),v+=w}}if(v){var k=ac(h>>>0);i.hasNameForId(this.componentId,k)||i.insertRules(this.componentId,k,l(v,".".concat(k),void 0,this.componentId)),u=Qn(u,k)}}return u},t}(),Ui=Ur.createContext(void 0);Ui.Consumer;function $m(){var t=E.useContext(Ui);if(!t)throw Cn(18);return t}function p1(t){var o=Ur.useContext(Ui),i=E.useMemo(function(){return function(l,u){if(!l)throw Cn(14);if(Zn(l)){var d=l(u);return d}if(Array.isArray(l)||typeof l!="object")throw Cn(8);return u?Nt(Nt({},u),l):l}(t.theme,o)},[t.theme,o]);return t.children?Ur.createElement(Ui.Provider,{value:i},t.children):null}var Au={};function h1(t,o,i){var l=Mc(t),u=t,d=!zu(t),f=o.attrs,m=f===void 0?Bl:f,h=o.componentId,v=h===void 0?function(H,I){var V=typeof H!="string"?"sc":Ip(H);Au[V]=(Au[V]||0)+1;var N="".concat(V,"-").concat(gm(Al+V+Au[V]));return I?"".concat(I,"-").concat(N):N}(o.displayName,o.parentComponentId):h,y=o.displayName,g=y===void 0?function(H){return zu(H)?"styled.".concat(H):"Styled(".concat(Av(H),")")}(t):y,w=o.displayName&&o.componentId?"".concat(Ip(o.displayName),"-").concat(o.componentId):o.componentId||v,k=l&&u.attrs?u.attrs.concat(m).filter(Boolean):m,M=o.shouldForwardProp;if(l&&u.shouldForwardProp){var R=u.shouldForwardProp;if(o.shouldForwardProp){var b=o.shouldForwardProp;M=function(H,I){return R(H,I)&&b(H,I)}}else M=R}var B=new f1(i,w,l?u.componentStyle:void 0);function A(H,I){return function(V,N,J){var ge=V.attrs,Z=V.componentStyle,Te=V.defaultProps,Pe=V.foldedComponentIds,Re=V.styledComponentId,Oe=V.target,Ke=Ur.useContext(Ui),Ge=Gp(),Fe=V.shouldForwardProp||Ge.shouldForwardProp,Q=Lv(N,Ke,Te)||Bo,G=function(me,we,_e){for(var Ce,Me=Nt(Nt({},we),{className:void 0,theme:_e}),it=0;it<me.length;it+=1){var At=Zn(Ce=me[it])?Ce(Me):Ce;for(var Ie in At)Me[Ie]=Ie==="className"?Qn(Me[Ie],At[Ie]):Ie==="style"?Nt(Nt({},Me[Ie]),At[Ie]):At[Ie]}return we.className&&(Me.className=Qn(Me.className,we.className)),Me}(ge,N,Q),Y=G.as||Oe,S={};for(var z in G)G[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&G.theme===Q||(z==="forwardedAs"?S.as=G.forwardedAs:Fe&&!Fe(z,Y)||(S[z]=G[z]));var ue=function(me,we){var _e=Gp(),Ce=me.generateAndInjectStyles(we,_e.styleSheet,_e.stylis);return Ce}(Z,G),he=Qn(Pe,Re);return ue&&(he+=" "+ue),G.className&&(he+=" "+G.className),S[zu(Y)&&!pm.has(Y)?"class":"className"]=he,J&&(S.ref=J),E.createElement(Y,S)}(j,H,I)}A.displayName=g;var j=Ur.forwardRef(A);return j.attrs=k,j.componentStyle=B,j.displayName=g,j.shouldForwardProp=M,j.foldedComponentIds=l?Qn(u.foldedComponentIds,u.styledComponentId):"",j.styledComponentId=w,j.target=l?u.target:t,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(H){this._foldedDefaultProps=l?function(I){for(var V=[],N=1;N<arguments.length;N++)V[N-1]=arguments[N];for(var J=0,ge=V;J<ge.length;J++)sc(I,ge[J],!0);return I}({},u.defaultProps,H):H}}),bc(j,function(){return".".concat(j.styledComponentId)}),d&&wm(j,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function Xp(t,o){for(var i=[t[0]],l=0,u=o.length;l<u;l+=1)i.push(o[l],t[l+1]);return i}var qp=function(t){return Object.assign(t,{isCss:!0})};function re(t){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];if(Zn(t)||Wi(t))return qp(Xn(Xp(Bl,Hi([t],o,!0))));var l=t;return o.length===0&&l.length===1&&typeof l[0]=="string"?Xn(l):qp(Xn(Xp(l,o)))}function cc(t,o,i){if(i===void 0&&(i=Bo),!o)throw Cn(1,o);var l=function(u){for(var d=[],f=1;f<arguments.length;f++)d[f-1]=arguments[f];return t(o,i,re.apply(void 0,Hi([u],d,!1)))};return l.attrs=function(u){return cc(t,o,Nt(Nt({},i),{attrs:Array.prototype.concat(i.attrs,u).filter(Boolean)}))},l.withConfig=function(u){return cc(t,o,Nt(Nt({},i),u))},l}var Tm=function(t){return cc(h1,t)},te=Tm;pm.forEach(function(t){te[t]=Tm(t)});function Fm(t){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];var l=lc(re.apply(void 0,Hi([t],o,!1))),u=gm(l);return new Pm(u,l)}const m1={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F5F5F6","Neutral/Neutral 10":"#EAEBEC","Neutral/Neutral 20":"#D7D8DA","Neutral/Neutral 30":"#B2B5B8","Neutral/Neutral 40":"#9EA0A4","Neutral/Neutral 50":"#74767B","Neutral/Neutral 60":"#67696D","Neutral/Neutral 70":"#515256","Neutral/Neutral 80":"#37383B","Neutral/Neutral 90":"#252629","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#131314","Special/Dark Static Neutral 05":"#1B1C1D","Special/Dark Static Neutral 10":"#252627","Special/Dark Static Neutral 20":"#3B3C3E","Special/Dark Static Neutral 30":"#515357","Special/Dark Static Neutral 50":"#82868B","Special/Dark Static Neutral 70":"#A8ABAF","Special/Dark Static Neutral 80":"#C9CACD","Special/Dark Static Neutral 90":"#E3E5E7","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#0000009A","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Opacity/Neutral 4":"#0000000A","Opacity/Neutral 8":"#00000014","Opacity/Neutral 12":"#0000001F","Opacity/Neutral 16":"#00000029","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},g1={"Shadow 02":`
  box-shadow: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.28);
`,"Shadow 04":`
  box-shadow: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.14), 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12);
`,"Shadow 08":`
  box-shadow: 0px 3.2px 9px 0px rgba(0, 0, 0, 0.16), 0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.10), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
`,"Shadow 12":`
  box-shadow: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.04), 0px 4px 18px 0px rgba(0, 0, 0, 0.08), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.10);
`,"Shadow 16":`
  box-shadow: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.12), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
`,"Shadow Stroke":`
  box-shadow: 0px -1px 0px 0px #D6D8DD inset;
`},Mm={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},Jp={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},imageViewer:{flipHorizontallyText:"Flip horizontally",flipVerticallyText:"Flip vertically",rotateLeftText:"Rotate left",rotateRightText:"Rotate right",zoomInText:"Zoom in",zoomOutText:"Zoom out",backwardText:"Back",forwardText:"Forward"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(t,o)=>`Page ${t} of ${o}`,pageSizeSelectLabel:(t,o)=>`Entries ${t} out of ${o}`,itemRangeText:(t,o,i)=>`${t}–${o}  entries out of ${i}`,pageRangeText:t=>`from ${t} ${t===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(t,o,i)=>`${t}–${o} entries out of ${i}`},progressStepper:{renderNextStepName:t=>`Next - ${t}`,stepName:["step","steps"],progressText:(t,o,i)=>`${t} from ${o} ${i}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"},textArea:{copyTextMessage:"Copy text",copiedMessage:"Copied"}},bm={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},imageViewer:{flipHorizontallyText:"Отразить по горизонтали",flipVerticallyText:"Отразить по вертикали",rotateLeftText:"Повернуть влево",rotateRightText:"Повернуть вправо",zoomOutText:"Уменьшить",zoomInText:"Увеличить",backwardText:"Назад",forwardText:"Вперед"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(t,o)=>`Страница ${t} из ${o}`,pageSizeSelectLabel:(t,o)=>`Записей ${t} из ${o}`,itemRangeText:(t,o,i)=>`${t}–${o} записей из ${i}`,pageRangeText:t=>`из ${t} ${t===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(t,o,i)=>`${t}–${o} записей из ${i}`},progressStepper:{renderNextStepName:t=>`Далее - ${t}`,stepName:["шаг","шагов"],progressText:(t,o,i)=>`${t} из ${o} ${i}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"},textArea:{copyTextMessage:"Копировать текст",copiedMessage:"Скопировано"}},en:Jp,"en-US":{...Jp,firstDayOfWeek:0}},vt=y1();function y1(){return{"Main/XXL":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XL":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/L":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/M":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/S":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS-bold":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L-bold":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/M":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S-bold":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/XS":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/M":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/S":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/XS":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL1":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL1, 550);
      font-size: var(--admiral-font-size-Header_HL1, 72px);
      line-height: var(--admiral-line-height-Header_HL1, 80px);
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL2":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL2, 550);
      font-size: var(--admiral-font-size-Header_HL2, 56px);
      line-height: var(--admiral-line-height-Header_HL2, 64px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL3":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 48px);
      line-height: var(--admiral-line-height-Header_HL3, 56px);
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H1":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 40px);
      line-height: var(--admiral-line-height-Header_H1, 48px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H2":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 550);
      font-size: var(--admiral-font-size-Header_H2, 34px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H3":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H4":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H4, 550);
      font-size: var(--admiral-font-size-Header_H4, 24px);
      line-height: var(--admiral-line-height-Header_H4, 32px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H5":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H6":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 1":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 2":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 3":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Long":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Short":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Long":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Short":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 1":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 2":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 1":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 2":re`
      font-family: var(--admiral-font-family, ${t=>t.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption2, 400);
      font-size: var(--admiral-font-size-Caption_Caption2, 10px);
      line-height: var(--admiral-line-height-Caption_Caption2, 12px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `}}const Dc={color:m1,shadow:g1,zIndex:Mm,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:bm,typography:vt,fontFamily:"'VTB Group UI', sans-serif"},v1={"Neutral/Neutral 00":"#1B1C1D","Neutral/Neutral 05":"#131314","Neutral/Neutral 10":"#252627","Neutral/Neutral 20":"#3B3C3E","Neutral/Neutral 30":"#515357","Neutral/Neutral 40":"#5F6166","Neutral/Neutral 50":"#82868B","Neutral/Neutral 60":"#92969B","Neutral/Neutral 70":"#A8ABAF","Neutral/Neutral 80":"#C9CACD","Neutral/Neutral 90":"#E3E5E7","Primary/Primary 10":"#1F2024","Primary/Primary 20":"#162B67","Primary/Primary 30":"#022D9A","Primary/Primary 40":"#0142D3","Primary/Primary 50":"#0062FF","Primary/Primary 60 Main":"#3984FF","Primary/Primary 70":"#5290FF","Primary/Primary 80":"#689FFF","Special/Static White":"#FFFFFF","Special/Elevated BG":"#1B1C1D","Special/Dark Static Neutral 00":"#131314","Special/Dark Static Neutral 05":"#1B1C1D","Special/Dark Static Neutral 10":"#252627","Special/Dark Static Neutral 20":"#3B3C3E","Special/Dark Static Neutral 30":"#515357","Special/Dark Static Neutral 50":"#82868B","Special/Dark Static Neutral 70":"#A8ABAF","Special/Dark Static Neutral 80":"#C9CACD","Special/Dark Static Neutral 90":"#E3E5E7","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#FFFFFF0F","Opacity/Focus":"#FFFFFF17","Opacity/Press":"#FFFFFF1F","Opacity/Modal":"#00000099","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Opacity/Neutral 4":"#FFFFFF0A","Opacity/Neutral 8":"#FFFFFF14","Opacity/Neutral 12":"#FFFFFF1F","Opacity/Neutral 16":"#FFFFFF29","Error/Error 10":"#1F2024","Error/Error 20":"#571B1B","Error/Error 30":"#880C0C","Error/Error 40":"#A71212","Error/Error 50":"#D92020","Error/Error 60 Main":"#EA3C3C","Error/Error 70":"#F55F5F","Error/Error 80":"#FA7979","Success/Success 10":"#1F2024","Success/Success 20":"#0E3B1E","Success/Success 30":"#055320","Success/Success 40":"#0C7431","Success/Success 50 Main":"#16913F","Success/Success 60":"#1FA951","Success/Success 70":"#2FC063","Warning/Warning 10":"#1F2024","Warning/Warning 20":"#591C04","Warning/Warning 30":"#902C06","Warning/Warning 40":"#BC3B0D","Warning/Warning 50 Main":"#EF5018","Warning/Warning 60":"#FF662F","Warning/Warning 70":"#FF8559","Attention/Attention 10":"#1F2024","Attention/Attention 20":"#CA9B00","Attention/Attention 30":"#DFAB00","Attention/Attention 40":"#F0B902","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#FDD14C","Attention/Attention 70":"#FDDD77","Purple/Purple 10":"#1F2024","Purple/Purple 20":"#391968","Purple/Purple 30":"#491D8B","Purple/Purple 40":"#6929C4","Purple/Purple 50":"#8A3FFC","Purple/Purple 60 Main":"#A065FE","Purple/Purple 70":"#B587FF","Purple/Purple 80":"#CEB1FF","Magenta/Magenta 10":"#1F2024","Magenta/Magenta 20":"#510224","Magenta/Magenta 30":"#740937","Magenta/Magenta 40":"#9F1853","Magenta/Magenta 50":"#D02670","Magenta/Magenta 60 Main":"#E84A8E","Magenta/Magenta 70":"#F970AB","Magenta/Magenta 80":"#FEA2CA","Cyan/Cyan 10":"#1F2024","Cyan/Cyan 20":"#002D56","Cyan/Cyan 30":"#003A6D","Cyan/Cyan 40":"#00539A","Cyan/Cyan 50":"#0072C3","Cyan/Cyan 60 Main":"#0E8CE1","Cyan/Cyan 70":"#28A6F6","Cyan/Cyan 80":"#70C7FD","Teal/Teal 10":"#1F2024","Teal/Teal 20":"#023136","Teal/Teal 30":"#004144","Teal/Teal 40":"#005D5D","Teal/Teal 50":"#007D79","Teal/Teal 60 Main":"#009692","Teal/Teal 70":"#06B2AF","Teal/Teal 80":"#2FD2CF"},x1={"Shadow 02":`
  box-shadow: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.42);
`,"Shadow 04":`
  box-shadow: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.22), 0px 0.2px 1px 0.4px rgba(0, 0, 0, 0.20);
`,"Shadow 08":`
  box-shadow: 0px 3.2px 16px 0px rgba(0, 0, 0, 0.28), 0px 0.6px 2px 0px rgba(0, 0, 0, 0.16), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.09);
`,"Shadow 12":`
  box-shadow: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.06), 0px 4px 18px 0px rgba(0, 0, 0, 0.20), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.16);
`,"Shadow 16":`
  box-shadow: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.24), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.12);
`,"Shadow Stroke":`
  box-shadow: 0px -1px 0px 0px #3A3C41 inset;
`},w1={color:v1,shadow:x1,zIndex:Mm,name:"dark",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:bm,typography:vt,fontFamily:"'VTB Group UI', sans-serif"},S1="Neutral/Neutral 90";function kl(t){switch(t.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function Dm(t){switch(t.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function E1(t){switch(t.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}function _1(t,o){Rm(t,o,"data-container",!0)}function C1(t,o){Rm(t,o,"data-field",!1)}function Rm(t,o,i,l){Object.keys(t).forEach(u=>{typeof u=="string"&&u.startsWith(i)&&(o[u]=t[u],l&&delete t[u])})}const Lm=t=>{let o=t;return o=o.replace("box-shadow: ",""),o=o.replace(";",""),o},P1=(t,o)=>{return(i=t,Object.keys(i)).some(l=>t[l]!==o[l]);var i};function Om(t,o){const i={};return{observe(){i.rafId&&cancelAnimationFrame(i.rafId);const l=()=>{if(i.isObserving){const{scrollHeight:u,scrollLeft:d,scrollTop:f,scrollWidth:m}=t,{bottom:h,height:v,left:y,right:g,top:w,width:k,x:M,y:R}=t.getBoundingClientRect(),b={bottom:h,height:v,left:y,right:g,top:w,width:k,x:M||y,y:R||w,scrollHeight:u,scrollLeft:d,scrollTop:f,scrollWidth:m};P1(b,i.rect||{})&&(i.rect=b,o(b)),i.rafId=requestAnimationFrame(l)}};i.rafId=requestAnimationFrame(l),i.isObserving=!0},unobserve(){i.rafId&&cancelAnimationFrame(i.rafId),i.isObserving&&(i.isObserving=!1)}}}var Il=Ih();const k1=Ec(Il),N1=Bh({__proto__:null,default:k1},[Il]),$1=te.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:t})=>t.zIndex.dropdown});
`,T1=({targetElement:t,rootRef:o,fullContainerWidth:i,...l})=>{const u=E.useRef(null);return E.useEffect(()=>{const d=u.current;if(d&&t){const f=Om(t,m=>{if(m){const{x:h,y:v,height:y,width:g}=m,{style:w}=d;w.top=`${v}px`,w.left=i?"0px":`${h}px`,w.height=`${y}px`,w.width=i?"100%":`${g}px`}});return f.observe(),()=>{f.unobserve()}}},[t,i]),Il.createPortal(P.jsx($1,{ref:u,...l}),o?.current||document.body)};function ro(...t){return o=>{t.forEach(i=>{i&&(typeof i=="function"?i(o):i.current=o)})}}const jm=E.createContext({}),F1=({rootRef:t,...o})=>{const[i,l]=E.useState([]),[u,d]=E.useState(void 0),f=E.useCallback(g=>{d(g)},[]),m=E.useCallback(g=>{d(w=>w===g?void 0:w)},[]),h=E.useCallback(g=>{l(w=>{const k=w.indexOf(g);return k>-1?w.slice(0,k):w})},[]),v=E.useCallback(g=>{l(w=>[...w,g])},[]),y=E.useMemo(()=>({addDropdown:v,removeDropdown:h,dropdowns:i,rootRef:t,activateMenu:f,deactivateMenu:m,currentActiveMenu:u}),[v,h,i,t,f,m,u]);return P.jsx(jm.Provider,{value:y,children:o.children})};function M1(...t){return o=>t.forEach(i=>function(l,u){typeof l=="function"?l(u):l!=null&&(l.current=u)}(i,o))}function dc(...t){return E.useCallback(M1(...t),t)}function Rc(t){return E.forwardRef(t)}const Lc=re`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,b1=te.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,D1=te.div`
  ${Lc}
`,R1=te.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 10px;
`,L1=te.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 10px;
`,O1=te.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  border-block: 4px solid transparent;
`,j1=te.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-inline: 4px solid transparent;
`,z1=te.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${t=>t.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,A1=te.div`
  pointer-events: all;
  position: relative;
  height: 6px;
  border-radius: 6px;
  background-color: ${t=>t.theme.color["Opacity/Neutral 16"]};
  width: var(${"--horizontal-thumb-width"}, 20px);
`,B1=te.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${t=>t.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,I1=te.div`
  pointer-events: all;
  position: relative;
  width: 6px;
  border-radius: 6px;
  background-color: ${t=>t.theme.color["Opacity/Neutral 16"]};
  height: var(${"--vertical-thumb-height"}, 20px);
`;Rc(({children:t,verticalScrollProps:o,horizontalScrollProps:i,minThumbSize:l=20,contentBlockProps:u={},...d},f)=>{const m=E.useMemo(()=>u.id?u.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[u.id]),[h,v]=E.useState(null),y=dc(u.ref,g=>v(g));return P.jsxs(b1,{ref:f,...d,children:[P.jsx(D1,{...u,id:m,ref:y,children:t}),P.jsx(zm,{contentNode:h,verticalScrollProps:o,horizontalScrollProps:i,minThumbSize:l})]})});const zm=({verticalScrollProps:t={},horizontalScrollProps:o={},contentNode:i,minThumbSize:l=20})=>{const u=E.useMemo(()=>i?.id?i?.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[i?.id]),[d,f]=E.useState(null),[m,h]=E.useState(null),[v,y]=E.useState(null),[g,w]=E.useState(null),[k,M]=E.useState(null),[R,b]=E.useState(null),[B,A]=E.useState(!1),[j,H]=E.useState(!1),[I,V]=E.useState(0),[N,J]=E.useState(0),[ge,Z]=E.useState(0),[Te,Pe]=E.useState(0),[Re,Oe]=E.useState(0),[Ke,Ge]=E.useState(0),Fe=dc(t.ref,G=>f(G)),Q=dc(o.ref,G=>y(G));return E.useLayoutEffect(()=>{if(i&&k&&R&&d&&v&&m&&g){const{observe:G,unobserve:Y}=Om(i,S=>{if(S){const z=function(pt){const{clientHeight:Bt,scrollHeight:Xt}=pt;return Xt-Bt>=1}(i),ue=function(pt){const{clientWidth:Bt,scrollWidth:Xt}=pt;return Xt-Bt>=1}(i),he=Math.min(Math.max(0,S.scrollTop),S.scrollHeight-S.height),me=Math.min(Math.max(0,S.scrollLeft),S.scrollWidth-S.width);i.style.setProperty("--vertical-content-scroll",`${he}px`),i.style.setProperty("--horizontal-content-scroll",`${me}px`),d.style.setProperty("display",z?null:"none"),d.style.setProperty("bottom",ue?"10px":null),v.style.setProperty("display",ue?null:"none"),v.style.setProperty("right",z?"10px":null);const we=function(pt,Bt){const{clientHeight:Xt,scrollHeight:xr}=pt,{clientHeight:ar}=Bt;return Math.max(Math.round(Xt*ar/xr),l)}(i,m),_e=function(pt,Bt){const{clientWidth:Xt,scrollWidth:xr}=pt,{clientWidth:ar}=Bt;return Math.max(Math.round(Xt*ar/xr),l)}(i,g);k.style.setProperty("--vertical-thumb-height",`${we}px`),R.style.setProperty("--horizontal-thumb-width",`${_e}px`);const{scrollTop:Ce,scrollLeft:Me,scrollHeight:it,scrollWidth:At}=i,{clientHeight:Ie}=m,{clientWidth:Mt}=g,Kr=Math.round(Math.min(Ce/it*Ie,Ie-we)),oo=Math.round(Math.min(Me/At*Mt,Mt-_e));k.style.top=`${Kr}px`,R.style.left=`${oo}px`}});return G(),Y}},[i,k,R,d,v,m,g]),E.useEffect(()=>{function G(S){S.preventDefault(),S.stopPropagation(),B&&A(!1),j&&H(!1)}function Y(S){if(i){if(S.preventDefault(),S.stopPropagation(),B){const{scrollHeight:z,clientHeight:ue}=i,he=(S.clientY-I)*(z/ue),me=Math.round(Math.min(ge+he,z-ue));i.scrollTop=me}if(j){const{scrollWidth:z,clientWidth:ue}=i,he=(S.clientX-N)*(z/ue),me=Math.round(Math.min(Te+he,z-ue));i.scrollLeft=me}}}if(B||j)return document.addEventListener("mousemove",Y),document.addEventListener("mouseup",G),()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",G)}},[i,B,j,ge,Te,I,N]),E.useEffect(()=>{if(i){const{scrollHeight:G,clientHeight:Y}=i,S=Math.round(Re*G-Y/2);i.scrollTo({top:S,behavior:"smooth"})}},[Re]),E.useEffect(()=>{if(i){const{scrollWidth:G,clientWidth:Y}=i,S=Math.round(Ke*G-Y/2);i.scrollTo({left:S,behavior:"smooth"})}},[Ke]),E.useEffect(()=>{document.body.style.setProperty("cursor",B||j?"grabbing":null)},[B,j]),P.jsxs(P.Fragment,{children:[P.jsxs(R1,{...t,ref:Fe,role:"scrollbar","aria-controls":u,children:[P.jsx(B1,{onClick:function(G){if(G.preventDefault(),G.stopPropagation(),i){const{clientHeight:Y}=i,{top:S}=i.getBoundingClientRect();Oe((G.clientY-S)/Y)}}}),P.jsx(O1,{ref:G=>h(G),children:P.jsx(I1,{ref:M,onMouseDown:function(G){G.preventDefault(),G.stopPropagation(),V(G.clientY),i&&Z(i.scrollTop),A(!0)},style:{cursor:B?"grabbing":"grab"}})})]}),P.jsxs(L1,{...o,ref:Q,role:"scrollbar","aria-controls":u,children:[P.jsx(z1,{onClick:function(G){if(G.preventDefault(),G.stopPropagation(),i){const{clientWidth:Y}=i,{left:S}=i.getBoundingClientRect();Ge((G.clientX-S)/Y)}}}),P.jsx(j1,{ref:G=>w(G),children:P.jsx(A1,{ref:b,onMouseDown:function(G){G.preventDefault(),G.stopPropagation(),J(G.clientX),i&&Pe(i.scrollLeft),H(!0)},style:{cursor:j?"grabbing":"grab"}})})]})]})};var Zp;function fc(){return fc=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var l in i)({}).hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},fc.apply(null,arguments)}var Am=function(t){return E.createElement("svg",fc({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t),Zp||(Zp=E.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};function Vi(t){switch(t){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function Bm(t){switch(t){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function eh(t){return Vi(t)+2*Bm(t)}const H1=re`
  & *[fill^='#'] {
    fill: ${t=>{switch(t.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${t.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${t.theme.color["Neutral/Neutral 50"]})`;default:return t.$iconColor}}};
  }
`,W1=te.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${H1}

  & > svg {
    height: ${t=>Vi(t.$dimension)}px;
    width: ${t=>Vi(t.$dimension)}px;
  }
`,ji=te.div`
  width: ${t=>eh(t.$dimension)}px;
  height: ${t=>eh(t.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,U1=re`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${ji} {
      background-color: ${t=>t.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${t.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${ji} {
      background-color: var(--admiral-color-Opacity_Hover, ${t=>t.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${ji} {
      background-color: var(--admiral-color-Opacity_Press, ${t=>t.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${ji} {
      background-color: transparent;
    }
  }
`,V1=te.button`
  position: relative;
  padding: 0;
  margin: ${t=>Bm(t.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${t=>Vi(t.$dimension)}px;
  width: ${t=>Vi(t.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${t=>kl(t.theme.shape)});
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    }
  }
  &:not(:disabled) {
    ${U1}
  }
`,K1=E.forwardRef(({type:t="button",dimension:o="lBig",disabled:i=!1,highlightFocus:l=!0,appearance:u,children:d,...f},m)=>{const h=typeof u=="object"?u.iconColor?u.iconColor:"secondary":u;return P.jsxs(V1,{ref:m,type:t,$dimension:o,disabled:i,$highlightFocus:l,...f,children:[P.jsx(ji,{$dimension:o,"aria-hidden":!0}),P.jsx(W1,{$dimension:o,$iconColor:h,"aria-hidden":!0,children:d})]})}),Q1=E.forwardRef(({className:t,...o},i)=>P.jsx(K1,{ref:i,className:`close-button ${t||""}`,...o,children:P.jsx(Am,{"aria-hidden":!0})}));var th,rh,nh,oh,ih,ah;function pc(){return pc=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var l in i)({}).hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},pc.apply(null,arguments)}var G1=function(t){return E.createElement("svg",pc({xmlns:"http://www.w3.org/2000/svg",fill:"none"},t),th||(th=E.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),rh||(rh=E.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),nh||(nh=E.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),oh||(oh=E.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),ih||(ih=E.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),ah||(ah=E.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))};const Y1=Fm`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,X1=te(G1)`
  animation: ${Y1} 1s linear infinite;
  path {
    fill: ${({$inverse:t,theme:o})=>t?`var(--admiral-color-Special_StaticWhite, ${o.color["Special/Static White"]})`:`var(--admiral-color-Primary_Primary60Main, ${o.color["Primary/Primary 60 Main"]})`};
  }
  width: 100%;
  height: 100%;
`,q1=t=>Fm`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${t.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${t.theme.color["Neutral/Neutral 10"]});
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, ${t.theme.color["Neutral/Neutral 20"]});
    border-color: var(--admiral-color-Neutral_Neutral20, ${t.theme.color["Neutral/Neutral 20"]});
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${t.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${t.theme.color["Neutral/Neutral 10"]});
  }
`,Oc=re`
  animation: ${t=>q1(t)} 2s ease infinite;
`,hc=()=>{let t=0;const o=document.createElement("div");return o.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,o.style.overflow="scroll",o.style.fontSize="14px",o.style.height="50px",o.style.maxHeight="50px",o.style.width="100px",o.style.position="absolute",o.style.top="-100000px",o.style.left="-100000px",document.body.appendChild(o),t=o.offsetWidth-o.clientWidth,document.body.removeChild(o),t||16},J1=te.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,Z1=te.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${t=>t.theme.color["Neutral/Neutral 80"]});
  ${t=>t.$dimension==="m"?vt["Body/Body 2 Short"]:vt["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${t=>t.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${t=>kl(t.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${t=>Lm(t.theme.shadow["Shadow 04"])});
  padding: ${t=>t.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,ex=te.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,tx=te(T1)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:t})=>t?`flex-direction: ${t};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:t})=>t.zIndex.tooltip});
`;function rx(t,o,i,l){const u=t.getBoundingClientRect(),d=o.getBoundingClientRect(),f=Object.entries(function(v){return{bottom:{check:(y,g)=>{const w=globalThis.innerHeight-y.bottom-v>8+g.height,k=y.left+y.width/2>g.width/2,M=globalThis.innerWidth-y.right-v+y.width/2>g.width/2;return w&&k&&M}},top:{check:(y,g)=>{const w=y.top>8+g.height,k=y.left+y.width/2>g.width/2,M=globalThis.innerWidth-y.right-v+y.width/2>g.width/2;return w&&k&&M}},left:{check:(y,g)=>{const w=y.left>8+g.width,k=y.top>(g.height-y.height)/2,M=globalThis.innerHeight-y.bottom-v>(g.height-y.height)/2;return w&&M&&k}},right:{check:(y,g)=>{const w=globalThis.innerWidth-y.right-v>8+g.width,k=y.top>(g.height-y.height)/2,M=globalThis.innerHeight-y.bottom-v>(g.height-y.height)/2;return w&&M&&k}},bottomRight:{check:(y,g)=>{const w=globalThis.innerHeight-y.bottom-v>8+g.height,k=globalThis.innerWidth-y.left-v>g.width;return w&&k}},bottomLeft:{check:(y,g)=>{const w=globalThis.innerHeight-y.bottom-v>8+g.height,k=y.right>g.width;return w&&k}},topRight:{check:(y,g)=>{const w=y.top>8+g.height,k=globalThis.innerWidth-y.left-v>g.width;return w&&k}},topLeft:{check:(y,g)=>{const w=y.top>8+g.height,k=y.right>g.width;return w&&k}},leftBottom:{check:(y,g)=>{const w=y.left>8+g.width,k=globalThis.innerHeight-y.top-v>g.height;return w&&k}},leftTop:{check:(y,g)=>{const w=y.left>8+g.width,k=y.bottom>g.height;return w&&k}},rightBottom:{check:(y,g)=>{const w=globalThis.innerWidth-y.right-v>8+g.width,k=globalThis.innerHeight-y.top-v>g.height;return w&&k}},rightTop:{check:(y,g)=>{const w=globalThis.innerWidth-y.right-v>8+g.width,k=y.bottom>g.height;return w&&k}},bottomPageCenter:{check:(y,g)=>{const w=globalThis.innerHeight-y.bottom-v>8+g.height,k=globalThis.innerWidth-v>=g.width;return w&&k}},topPageCenter:{check:(y,g)=>{const w=y.top>8+g.height,k=globalThis.innerWidth-v>=g.width;return w&&k}}}}(i)),m=l?f.filter(v=>v[0].includes(l)&&v[1].check(u,d)):f.filter(v=>v[1].check(u,d)),h=l||"bottom";return m.length?m[0][0]:h}const nx=1500,jc=E.forwardRef(({dimension:t="m",renderContent:o,targetElement:i,tooltipPosition:l,...u},d)=>{const f=E.useRef(null),m=E.useRef(0),{rootRef:h}=E.useContext(jm),v=E.useMemo(()=>!o()&&o()!==0,[o]),[y,g]=E.useState(),[w,k]=E.useState(!1),[M,R]=E.useState({});return E.useEffect(()=>{(b=>{const B=i;if(B&&f.current){const A=rx(B,f.current,b,l),j=f.current;switch(A){case"leftBottom":case"leftTop":case"left":g("row-reverse"),k(!1),j.style.margin="0 8px 0 0",j.style.alignSelf=A==="leftBottom"?"flex-start":A==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":g("row"),k(!1),j.style.margin="0 0 0 8px",j.style.alignSelf=A==="rightBottom"?"flex-start":A==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":g("column-reverse"),k(A==="topPageCenter"),j.style.margin="0 0 8px 0",j.style.alignSelf=A==="topLeft"?"flex-end":A==="topRight"?"flex-start":"center";break;default:g("column"),k(A==="bottomPageCenter"),j.style.margin="8px 0 0 0",j.style.alignSelf=A==="bottomLeft"?"flex-end":A==="bottomRight"?"flex-start":"center"}}})(hc())},[o(),i,l,M]),E.useLayoutEffect(()=>{if(f.current&&!v){const b=new ResizeObserver(B=>{B.forEach(A=>{m.current===0?m.current=A.contentRect.height:R({})})});return b.observe(f.current),()=>{b.disconnect()}}},[v]),E.useEffect(()=>{f.current&&!v&&(f.current.style.opacity="1")},[v]),v?null:P.jsxs(tx,{targetElement:i,rootRef:h,$flexDirection:y,fullContainerWidth:w,children:[P.jsx(ex,{}),P.jsx(J1,{ref:ro(d,f),children:P.jsx(Z1,{role:"tooltip",$dimension:t,...u,children:o()})})]})});jc.displayName="Tooltip";function ox(t){return Rc((o,i)=>{const{renderContent:l,container:u,withDelay:d,tooltipRef:f,tooltipPosition:m,tooltipDimension:h,...v}=o,y=!l()&&l()!==0,g=E.useRef(null),[w,k]=E.useState(!1),[M,R]=E.useState(null),[b,B]=E.useState();return E.useEffect(()=>{function A(){B(setTimeout(()=>k(!0),d?nx:0))}function j(){clearTimeout(b),k(!1)}if(M)return M.addEventListener("mouseenter",A),M.addEventListener("focus",A),M.addEventListener("mouseleave",j),M.addEventListener("blur",j),()=>{b&&clearTimeout(b),M.removeEventListener("mouseenter",A),M.removeEventListener("focus",A),M.removeEventListener("mouseleave",j),M.removeEventListener("blur",j)}},[M,B,k,b]),P.jsxs(P.Fragment,{children:[P.jsx(t,{...v,ref:ro(i,g,R)}),w&&!y&&P.jsx(jc,{targetElement:g.current,renderContent:l,container:u,tooltipPosition:m,dimension:h,ref:f})]})})}const lh=re`
  background-color: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Primary_Primary70, ${t=>t.theme.color["Primary/Primary 70"]});
    border-color: var(--admiral-color-Primary_Primary70, ${t=>t.theme.color["Primary/Primary 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Primary_Primary80, ${t=>t.theme.color["Primary/Primary 80"]});
    border-color: var(--admiral-color-Primary_Primary80, ${t=>t.theme.color["Primary/Primary 80"]});
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${t=>t.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${t=>t.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    }
  }
`,sh=re`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${t=>t.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${t=>t.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    &:not(.button-group > button) {
      border-color: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    }
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    }
  }
`,uh=re`
  background-color: var(--admiral-color-Opacity_Neutral8, ${t=>t.theme.color["Opacity/Neutral 8"]});
  color: var(--admiral-color-Neutral_Neutral90, ${t=>t.theme.color["Neutral/Neutral 90"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${t=>t.theme.color["Neutral/Neutral 50"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Neutral12, ${t=>t.theme.color["Opacity/Neutral 12"]});
    color: var(--admiral-color-Neutral_Neutral90, ${t=>t.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${t=>t.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Neutral16, ${t=>t.theme.color["Opacity/Neutral 16"]});
    color: var(--admiral-color-Neutral_Neutral90, ${t=>t.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${t=>t.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Opacity_Neutral8, ${t=>t.theme.color["Opacity/Neutral 8"]});
    color: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    }
  }
`,ix=re`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${t=>t.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${t=>t.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    }
  }
`,ax=re`
  background-color: transparent;
  color: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(
      --admiral-color-Opacity_DarkStaticHover,
      ${t=>t.theme.color["Opacity/Dark Static Hover"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
    }
  }

  &&&:active {
    background-color: var(
      --admiral-color-Opacity_DarkStaticPress,
      ${t=>t.theme.color["Opacity/Dark Static Press"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    border-color: var(
      --admiral-color-Special_DarkStaticNeutral30,
      ${t=>t.theme.color["Special/Dark Static Neutral 30"]}
    );
    color: var(--admiral-color-Special_DarkStaticNeutral30, ${t=>t.theme.color["Special/Dark Static Neutral 30"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral30, ${t=>t.theme.color["Special/Dark Static Neutral 30"]});
    }
  }
`,lx=re`
  background-color: var(--admiral-color-Error_Error60Main, ${t=>t.theme.color["Error/Error 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Error_Error60Main, ${t=>t.theme.color["Error/Error 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Error_Error70, ${t=>t.theme.color["Error/Error 70"]});
    border-color: var(--admiral-color-Error_Error70, ${t=>t.theme.color["Error/Error 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Error_Error80, ${t=>t.theme.color["Error/Error 80"]});
    border-color: var(--admiral-color-Error_Error80, ${t=>t.theme.color["Error/Error 80"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${t=>t.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${t=>t.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    }
  }
`,sx=re`
  background-color: var(--admiral-color-Success_Success50Main, ${t=>t.theme.color["Success/Success 50 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Success_Success50Main, ${t=>t.theme.color["Success/Success 50 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${t=>t.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Success_Success60, ${t=>t.theme.color["Success/Success 60"]});
    border-color: var(--admiral-color-Success_Success60, ${t=>t.theme.color["Success/Success 60"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Success_Success70, ${t=>t.theme.color["Success/Success 70"]});
    border-color: var(--admiral-color-Success_Success70, ${t=>t.theme.color["Success/Success 70"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${t=>t.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${t=>t.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    }
  }
`,ux=re`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,cx=re`
  &[data-appearance~='primary']:not(.button-group > button) {
    ${lh}
  }
  &[data-appearance~='secondary']:not(.button-group > button) {
    ${sh}
  }
  &[data-appearance~='tertiary']:not(.button-group > button) {
    ${uh}
  }
  &[data-appearance~='ghost']:not(.button-group > button) {
    ${ix}
  }
  &[data-appearance~='white']:not(.button-group > button) {
    ${ax}
  }
  &[data-appearance~='danger']:not(.button-group > button) {
    ${lx}
  }
  &[data-appearance~='success']:not(.button-group > button) {
    ${sx}
  }
  &:is(.button-group[data-appearance='primary'] > button) {
    ${lh}
  }
  &:is(.button-group[data-appearance='secondary'] > button) {
    ${sh}
  }
  &:is(.button-group[data-appearance='tertiary'] > button) {
    ${uh}
  }

  ${ux}
`,Io=te.div``;function Sn(t){switch(t){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}re`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${t=>!t.$displayAsSquare&&`padding-left: ${Sn("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${t=>!t.$displayAsSquare&&`padding-left: ${Sn("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${t=>!t.$displayAsSquare&&`padding-left: ${Sn("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${t=>!t.$displayAsSquare&&`padding-left: ${Sn("s")}px;`}
  }
`;re`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${t=>!t.$displayAsSquare&&`padding-right: ${Sn("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${t=>!t.$displayAsSquare&&`padding-right: ${Sn("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${t=>!t.$displayAsSquare&&`padding-right: ${Sn("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${t=>!t.$displayAsSquare&&`padding-right: ${Sn("s")}px;`}
  }
`;const ch=re`
  padding: 0;
  height: 56px;
  ${t=>t.$displayAsSquare?"width: 56px;":"padding: 0 29px;"}
  ${Io} {
    width: 24px;
    height: 24px;
  }

  ${vt["Button/Button 1"]}
`,dx=re`
  ${ch}

  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${ch}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    height: 48px;
    ${t=>t.$displayAsSquare?"width: 48px;":"padding: 0 21px;"}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    height: 40px;
    ${t=>t.$displayAsSquare?"width: 40px;":"padding: 0 17px;"}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    height: 32px;
    ${t=>t.$displayAsSquare?"width: 32px;":"padding: 0 13px;"}
    ${Io} {
      width: 20px;
      height: 20px;
    }
    ${vt["Button/Button 2"]}
  }
`,Im=te.div`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: calc(100% - ${t=>t.$addPadding}px);

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > ${Io} {
    flex: 0 0 auto;
  }

  height: 24px;
  & > svg {
    width: 24px;
    height: 24px;
  }

  .button-group[data-dimension='m'] &&,
  .button-group[data-dimension='l'] &&,
  .button-group[data-dimension='xl'] && {
    height: 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
  .button-group[data-dimension='s'] &&,
  [data-dimension='s'] & {
    height: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`,fx=te(Io)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  container-type: inline-size;
  .button-group[data-appearance='primary'] & {
    & path {
      fill: ${t=>`var(--admiral-color-Special_StaticWhite, ${t.theme.color["Special/Static White"]})`};
    }
  }
  .button-group[data-appearance='secondary'] &,
  .button-group[data-appearance='tertiary'] & {
    & path {
      fill: ${t=>`var(--admiral-color-Primary_Primary60Main, ${t.theme.color["Primary/Primary 60 Main"]})`};
    }
  }
`,dh=te.div`
  display: inline-block;
  width: 2px;
`,vr=E.forwardRef(({appearance:t="primary",dimension:o="xl",type:i="button",loading:l=!1,skeleton:u=!1,iconStart:d,iconEnd:f,icon:m,iconPlace:h="left",children:v,buttonCssMixin:y,displayAsDisabled:g,displayAsSquare:w,...k},M)=>{const R=!!d||!!m&&h==="left",b=!!f||!!m&&h==="right",B=(w||R?0:2)+(w||b?0:2);return P.jsxs(px,{ref:M,$appearance:t,$dimension:o,type:i,$loading:l,$skeleton:u,$buttonCssMixin:y,$displayAsSquare:w,$displayAsDisabled:g,...k,children:[l&&P.jsx(fx,{children:P.jsx(X1,{$inverse:t!=="secondary"&&t!=="tertiary"&&t!=="ghost"})}),!w&&!R&&P.jsx(dh,{}),P.jsxs(Im,{$addPadding:B,children:[R?P.jsx(Io,{children:d||m}):null,E.Children.toArray(v).map((A,j)=>typeof A=="string"?P.jsx("div",{children:A},A+j):A),b?P.jsx(Io,{children:f||m}):null]}),!w&&!b&&P.jsx(dh,{})]})}),px=te.button.attrs(t=>({"data-dimension":t.$dimension,"data-appearance":[t.$appearance,t.$displayAsDisabled?"disabled":void 0].filter(o=>o!==void 0).join(" ")}))`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  border: none;
  border-radius: ${t=>t.$skeleton?0:`var(--admiral-border-radius-Medium, ${Dm(t.theme.shape)})`};
  appearance: none;
  vertical-align: middle;
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  ${t=>(t.$loading||t.$skeleton)&&"pointer-events: none"};

  ${cx};
  ${dx};
  ${t=>t.$buttonCssMixin};
  ${({$skeleton:t})=>t&&Oc};

  ${Im} {
    ${t=>t.$loading||t.$skeleton?"visibility: hidden;":""}
  }
`;vr.displayName="Button";function Hm(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}const hx=re`
  height: ${({$dimension:t})=>{switch(t){case"xl":return"56px";case"s":return"32px";default:return"40px"}}};
`,Wm=re`
  ${Oc}
  & > * {
    visibility: hidden;
  }
`,Um=te.div`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: ${t=>t.$skeleton?0:`var(--admiral-border-radius-Medium, ${Dm(t.theme.shape)})`};

  pointer-events: ${t=>t.$skeleton?"none":"all"};
  ${({$skeleton:t})=>t&&Wm};
`;te(Um)`
  ${hx};
`;const mx=te.div`
  white-space: nowrap;
  ${vt["Body/Body 2 Long"]}
  color: ${t=>t.$error?`var(--admiral-color-Error_Error60Main, ${t.theme.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${t.theme.color["Neutral/Neutral 50"]})`};
  transition:
    all 0.5s,
    color 0.5s;
  opacity: ${t=>t.$transparent&&!t.$error?0:1};
  max-width: ${t=>t.$transparent&&!t.$error?0:"none"};
  overflow: hidden;
`,gx=({maxLength:t,visibilityThreshold:o=.8,inputRef:i,...l})=>{const[u,d]=E.useState(0);return E.useEffect(()=>{const f=setInterval(()=>{const m=i.current;m&&d(m.value.length)},250);return()=>clearInterval(f)},[i]),u>=t*o?P.jsxs(mx,{...l,$error:u>=t,$transparent:u<t*o,children:[u," / ",t]}):null},zc=te.label`
  display: block;
  text-align: left;
  ${vt["Body/Body 2 Short"]}
  color: var(--admiral-color-Neutral_Neutral50, ${t=>t.theme.color["Neutral/Neutral 50"]});

  [data-disabled] & {
    color: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
  }

  [data-focus-within] & {
    color: ${t=>t.disabled?"":`var(--admiral-color-Neutral_Neutral50, ${t.theme.color["Neutral/Neutral 50"]})`};
  }
  [data-required-within] &:is(label)[required]::after {
    content: ' *';
    color: var(--admiral-color-Error_Error60Main, ${t=>t.theme.color["Error/Error 60 Main"]});
  }
  margin-bottom: 8px;
`;zc.displayName="Label";const Vm=te.div``,yx=re`
  flex-direction: row;
  align-items: center;

  ${zc} {
    margin: 0 8px 0 0;
  }

  ${Vm} {
    flex: 1 1 auto;
  }
`,vx=te.div`
  display: flex;
  overflow: hidden;
  ${t=>t.$displayInline?yx:"flex-direction: column;"}
`,xx=te.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 50%;
  margin-bottom: 8px;
  ${Wm}
`,wx=te.div`
  position: relative;
  text-align: left;
`,Sx=re`
  color: transparent;
`,Ex=te(zc)`
  ${t=>t.$skeleton&&Sx};
`,_x=re`
  visibility: hidden;
`,Cx=te.div`
  display: flex;
  justify-content: space-between;
  ${t=>t.$skeleton&&_x};
`,Px=te.div`
  flex: 1 1 auto;

  padding-top: 8px;

  text-align: left;

  ${vt["Body/Body 2 Short"]}

  color: var(--admiral-color-Neutral_Neutral50, ${t=>t.theme.color["Neutral/Neutral 50"]});

  [data-disabled] & {
    color: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
  }

  [data-status='error'] & {
    color: var(--admiral-color-Error_Error60Main, ${t=>t.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] & {
    color: var(--admiral-color-Success_Success50Main, ${t=>t.theme.color["Success/Success 50 Main"]});
  }
`,kx=te(gx)`
  flex: 0 0 auto;
  padding: 8px 0 0 8px;
`,Km=E.forwardRef(({children:t,maxLength:o,inputRef:i,displayCharacterCounter:l=!0,characterCounterVisibilityThreshold:u=.8,...d},f)=>{const m=E.useRef(null),[h,v]=E.useState(!1),{className:y,style:g,displayInline:w,status:k,extraText:M,label:R,required:b,disabled:B,id:A,skeleton:j=!1,...H}=d,[I]=E.useState(Hm()),V={className:y,style:g,...H},N={htmlFor:A??I,children:R,required:b,disabled:B};return E.useEffect(()=>{const J=()=>{v(!0)},ge=()=>{v(!1)},Z=m.current;return Z&&(Z.addEventListener("focusin",J),Z.addEventListener("focusout",ge)),()=>{Z&&(Z.removeEventListener("focusin",J),Z.removeEventListener("focusout",ge))}},[]),P.jsxs(vx,{...V,$displayInline:w,"data-status":k,"data-focus-within":h?"":void 0,"data-required-within":b?"":void 0,"data-disabled":B?"":void 0,"data-read-only":!!d.readOnly||void 0,ref:ro(m,f),children:[N.children&&P.jsxs(wx,{children:[j&&P.jsx(xx,{}),P.jsx(Ex,{$skeleton:j,...N})]}),P.jsxs(Vm,{children:[t,P.jsxs(Cx,{$skeleton:j,children:[M&&P.jsx(Px,{children:M}),l&&i&&o!==void 0&&P.jsxs(P.Fragment,{children:[P.jsx("div",{}),P.jsx(kx,{maxLength:o,visibilityThreshold:u,inputRef:i})]})]})]})]})});Km.displayName="Field";function Nx(t,o){return t.value!==o.value||t.selectionStart!==o.selectionStart||t.selectionEnd!==o.selectionEnd}function Bu(t,o){const{value:i=t.value,selectionStart:l,selectionEnd:u}=o;if(Nx(t,{value:i,selectionStart:l,selectionEnd:u})){const d=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value")?.set;let f;d?.call(t,i),typeof l=="number"&&typeof u=="number"&&t.setSelectionRange(l,u),typeof Event=="function"?f=new Event("input",{bubbles:!0}):(f=document.createEvent("Event"),f.initEvent("input",!0,!0)),t.dispatchEvent(f)}}function $x({icon:t,...o}){return P.jsx(t,{...o})}const Qm=te($x)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${t=>t.theme.color["Neutral/Neutral 50"]});
  }
  cursor: pointer;

  [data-loading] &&& {
    pointer-events: none;
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
    }
  }

  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, ${t=>t.theme.color["Primary/Primary 70"]});
  }
`,fh=t=>!!t&&(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth);var ph;function mc(){return mc=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var l in i)({}).hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},mc.apply(null,arguments)}var Tx=function(t){return E.createElement("svg",mc({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},t),ph||(ph=E.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M20.65 18c0 1.66-1.35 3-3 3h-8c-1.31 0-2.43-.84-2.84-2.01q-.36-.015-.69-.12a.65.65 0 0 1-.43-.81c.1-.35.46-.54.81-.44.05.02.1.03.15.04V8c0-1.66 1.34-3 3-3h7.16a1 1 0 0 0-.04-.15.64.64 0 0 1 .43-.81c.35-.11.71.09.81.43q.09.27.12.57A3 3 0 0 1 20.65 8zm-11 1.7h8c.93 0 1.7-.76 1.7-1.7V8c0-.94-.77-1.7-1.7-1.7h-8c-.94 0-1.71.76-1.71 1.7v10c0 .94.77 1.7 1.71 1.7m-4.28-3.2c.02.06.03.12.03.19a.647.647 0 0 1-1.27.18C4.04 16.6 4 16.3 4 16v-.95c0-.35.29-.65.65-.65.35 0 .65.3.65.65V16c0 .17.02.34.07.5m-.07-4.56c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65v-1.89c0-.36.29-.65.65-.65.35 0 .65.29.65.65zm0-5c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65v-.95c0-.36.05-.72.15-1.06.11-.34.47-.54.82-.43a.64.64 0 0 1 .43.81c-.07.21-.1.45-.1.68zm1.66-3.19c-.34.1-.71-.09-.81-.44a.6.6 0 0 1-.03-.19c0-.27.18-.53.46-.62.34-.1.7-.16 1.07-.16h.64c.36 0 .65.3.65.65 0 .36-.29.65-.65.65h-.64c-.24 0-.47.04-.69.11m9.06-1.27a.64.64 0 0 1 .43.81c-.1.34-.47.53-.81.43-.16-.05-.32-.08-.5-.08h-.77c-.36 0-.65-.29-.65-.65 0-.35.29-.65.65-.65h.77c.31 0 .6.05.88.14m-5.6 1.16c-.35 0-.65-.29-.65-.65 0-.35.3-.65.65-.65h1.42c.36 0 .65.3.65.65 0 .36-.29.65-.65.65z"})))};const gc=t=>{switch(t.$dimension){case"xl":default:return 24;case"s":return 20}},Ac=t=>{switch(t.$dimension){case"xl":return 16;case"m":default:return 8;case"s":return 6}},Bc=t=>{switch(t.$dimension){case"xl":case"m":default:return 16;case"s":return 12}},Fx=re`
  padding-right: ${t=>Bc(t)+(t.$iconsAfterCount?gc(t)+8:0)}px;
`,Mx=re`
  background-color: var(--admiral-color-Neutral_Neutral10, ${t=>t.theme.color["Neutral/Neutral 10"]});
  border-color: transparent;
`,Ft=te.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid var(--admiral-color-Neutral_Neutral40, ${t=>t.theme.color["Neutral/Neutral 40"]});
  border-radius: inherit;

  [data-status='error'] &&& {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${t=>t.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] &&& {
    border: 1px solid var(--admiral-color-Success_Success50Main, ${t=>t.theme.color["Success/Success 50 Main"]});
  }

  [data-read-only] &&& {
    border-color: transparent;
  }
`,bx=re`
  background-color: var(--admiral-color-Neutral_Neutral00, ${t=>t.theme.color["Neutral/Neutral 00"]});

  &:focus + ${Ft} {
    border: 2px solid var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:disabled + ${Ft}, [data-read-only] &&& + ${Ft} {
    border-color: transparent;
  }

  &:hover:not(:focus) + ${Ft} {
    border-color: ${t=>t.disabled?"transparent":`var(--admiral-color-Neutral_Neutral60, ${t.theme.color["Neutral/Neutral 60"]})`};
  }

  &:user-invalid + ${Ft}, &:user-invalid:hover + ${Ft} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${t=>t.theme.color["Error/Error 60 Main"]});
  }

  [data-status='error']
    &&&:hover:not(:disabled)
    + ${Ft},
    &:user-invalid:hover:not(:disabled)
    + ${Ft} {
    border: 1px solid var(--admiral-color-Error_Error70, ${t=>t.theme.color["Error/Error 70"]});
  }

  [data-status='success'] &&&:hover:not(:disabled) + ${Ft} {
    border: 1px solid var(--admiral-color-Success_Success60, ${t=>t.theme.color["Success/Success 60"]});
  }

  [data-status='error']
    &&&:focus:not(:disabled)
    + ${Ft},
    &:user-invalid:focus:not(:disabled)
    + ${Ft} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${t=>t.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] &&&:focus:not(:disabled) + ${Ft} {
    border: 2px solid var(--admiral-color-Success_Success50Main, ${t=>t.theme.color["Success/Success 50 Main"]});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${Mx}
  }

  [data-read-only] &&&:hover + ${Ft}, [data-read-only] &&&:focus + ${Ft} {
    border-color: transparent;
  }
`,Dx=re`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,Gm=re`
  outline: none;
  appearance: none;
  border-radius: inherit;
  border: none;
  box-sizing: border-box;
  margin: 0;
  padding: ${Ac}px ${Bc}px;
  overflow-wrap: break-word;

  ${t=>t.$dimension==="s"?vt["Body/Body 2 Long"]:vt["Body/Body 1 Long"]}
  ${bx}
  ${Fx}
`,Rx=te.div`
  ${Lc}
  ${Gm}

  [data-disable-copying] & {
    cursor: default;
  }
`,Lx=te.textarea`
  ${Lc}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  resize: none;

  flex: 1 1 auto;
  min-width: 10px;
  background: transparent;

  color: var(--admiral-color-Neutral_Neutral90, ${t=>t.theme.color["Neutral/Neutral 90"]});

  ${t=>t.$dimension==="s"?vt["Body/Body 2 Long"]:vt["Body/Body 1 Long"]}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${t=>t.theme.color["Neutral/Neutral 50"]});
  }

  &:disabled::placeholder,
  &:disabled {
    cursor: not-allowed;
    color: var(--admiral-color-Neutral_Neutral30, ${t=>t.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  ${Gm}
  ${Dx}
`,Ox=te.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: ${Bc}px;
  padding-top: ${Ac}px;

  & > * {
    display: block;
    width: ${gc}px;
    height: ${gc}px;
  }
`;function jx(t){return t}const zx=t=>t.preventDefault(),Iu=(t,o)=>t*(o==="s"?20:24)+2*Ac({$dimension:o}),Ax=te(Um)`
  min-height: ${t=>Iu(t.$rows,t.$dimension)}px;
  ${t=>t.$maxRows?`max-height: ${Iu(t.$maxRows,t.$dimension)}px;`:""}
  ${t=>t.$autoHeight?"":`height: ${Iu(t.$rows,t.$dimension)}px;`}
  ${t=>t.disabled?"cursor: not-allowed;":""}
`,Bx=ox(E.forwardRef((t,o)=>P.jsx("div",{ref:o,children:P.jsx(Qm,{...t})})));function hh(t){return String(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/(\r?\n)$/g,"<br /><br />").replace(/\r?\n/g,"<br /> ")}const mh=()=>{},Ym=E.forwardRef(({rows:t=3,maxRows:o,value:i,displayClearIcon:l,displayCopyIcon:u,status:d,handleInput:f=jx,containerRef:m,icons:h,iconsAfter:v,children:y,className:g,autoHeight:w,skeleton:k=!1,dimension:M="m",disableCopying:R,locale:b,clearIconPropsConfig:B=mh,copyIconPropsConfig:A=mh,...j},H)=>{const I=$m()||Dc,V=E.useRef(null),[N,J]=E.useState(null),ge=E.useRef(null),Z=E.Children.toArray(v||h),Te=b?.copyTextMessage||I.locales[I.currentLocale]?.textArea?.copyTextMessage,Pe=b?.copiedMessage||I.locales[I.currentLocale]?.textArea?.copiedMessage,[Re,Oe]=E.useState(Te),Ke=Y=>{Y.preventDefault()},Ge={icon:Am,onMouseDown:Ke,onClick:()=>{V.current&&Bu(V.current,{value:""})},"aria-hidden":!0},Fe={tooltipDimension:"s",renderContent:()=>Re,icon:Tx,onMouseDown:Ke,onClick:()=>{document.hasFocus()||window.focus(),V.current&&(navigator.clipboard.writeText(V.current.value),Oe(Pe),setTimeout(()=>Oe(Te),2e3))},"aria-hidden":!0};!j.readOnly&&V?.current?.value&&(l?Z.unshift(E.createElement(Qm,{...Ge,...B(Ge),key:"clear-icon"})):u&&Z.unshift(E.createElement(Bx,{...Fe,...A(Fe),key:"copy-icon"})));const Q=Z.length,G=i!=null?f({value:String(i)}):{};return E.useLayoutEffect(()=>{function Y(){const{value:S,selectionStart:z,selectionEnd:ue}=this,he=f({value:S,selectionStart:z,selectionEnd:ue});Bu(this,he)}if(V.current){const S=V.current;S.addEventListener("input",Y);const{value:z,selectionStart:ue,selectionEnd:he}=S,me=f({value:z,selectionStart:ue,selectionEnd:he});return Bu(S,me),()=>{S.removeEventListener("input",Y)}}},[f]),E.useEffect(()=>{function Y(){const{value:S}=this,z=ge.current;z&&(z.innerHTML=hh(S),this.style.overflowY=z.clientHeight<z.scrollHeight?"":"hidden")}if(w&&V.current&&ge.current){const S=V.current;return ge.current.innerHTML=hh(S.value),S.addEventListener("input",Y),S.style.overflowY=ge.current.clientHeight<ge.current.scrollHeight?"":"hidden",()=>{S.removeEventListener("input",Y),S.style.overflowY=""}}},[w,G.value,j.defaultValue]),P.jsxs(Ax,{className:g,ref:m,"data-read-only":!!j.readOnly||void 0,"data-status":d,$skeleton:k,disabled:j.disabled,"data-disable-copying":!!R||void 0,$autoHeight:!!w,$rows:t,$maxRows:o,$dimension:M,...R&&{onMouseDown:zx},children:[P.jsx(Rx,{ref:ge,$dimension:M,disabled:j.disabled,$iconsAfterCount:Q}),P.jsx(Lx,{ref:ro(H,V,Y=>J(Y)),...j,$dimension:M,$iconsAfterCount:Q,$autoHeight:w,value:G.value}),P.jsx(Ft,{}),P.jsx(zm,{contentNode:N}),Q>0&&P.jsx(Ox,{disabled:j.disabled,$dimension:M,children:Z}),y]})});Ym.displayName="TextArea";const eo=E.forwardRef((t,o)=>{const i=E.useRef(null),{className:l,maxLength:u,displayInline:d,status:f,required:m,extraText:h,label:v,id:y=Hm(),disabled:g,displayCharacterCounter:w,characterCounterVisibilityThreshold:k,skeleton:M,...R}=t,b={className:l,extraText:h,status:f,required:m,label:v,id:y,displayInline:d,disabled:g,maxLength:u,inputRef:i,displayCharacterCounter:w,characterCounterVisibilityThreshold:k,skeleton:M,"data-field-id":y,"data-field-name":R.name};C1(R,b),_1(R,b);const B={ref:ro(o,i),id:y,"aria-required":m,status:f,disabled:g,maxLength:u,skeleton:M,...R};return P.jsx(Km,{...b,children:P.jsx(Ym,{...B})})});eo.displayName="TextField";function Ix(t){return[...(t??document).querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')].filter(o=>!o.hasAttribute("disabled"))}const Hx=re`
  background: ${({$background:t,theme:o})=>{switch(t){case"success":case"green":return`var(--admiral-color-Success_Success50Main, ${o.color["Success/Success 50 Main"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary60Main, ${o.color["Primary/Primary 60 Main"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error60Main, ${o.color["Error/Error 60 Main"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning50Main, ${o.color["Warning/Warning 50 Main"]})`;default:return t}}};
`,Wx=re`
  background: ${({$background:t,theme:o})=>{switch(t){case"success":case"green":return`var(--admiral-color-Success_Success10, ${o.color["Success/Success 10"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary10, ${o.color["Primary/Primary 10"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error10, ${o.color["Error/Error 10"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning10, ${o.color["Warning/Warning 10"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral8, ${o.color["Opacity/Neutral 8"]})`;default:return t||`var(--admiral-color-Opacity_Neutral8, ${o.color["Opacity/Neutral 8"]})`}}};
`,Ux=re`
  border: 1px solid
    ${({$border:t,theme:o})=>{switch(t){case"success":case"green":return`var(--admiral-color-Success_Success40, ${o.color["Success/Success 40"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary50, ${o.color["Primary/Primary 50"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error50, ${o.color["Error/Error 50"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning40, ${o.color["Warning/Warning 40"]})`;case"neutral":return`var(--admiral-color-Neutral_Neutral40, ${o.color["Neutral/Neutral 40"]})`;default:return t||`var(--admiral-color-Neutral_Neutral40, ${o.color["Neutral/Neutral 40"]})`}}};
`,Vx=re`
  background: ${({$backgroundHover:t,theme:o})=>{switch(t){case"success":case"green":return`var(--admiral-color-Success_Success20, ${o.color["Success/Success 20"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary20, ${o.color["Primary/Primary 20"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error20, ${o.color["Error/Error 20"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning20, ${o.color["Warning/Warning 20"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral12, ${o.color["Opacity/Neutral 12"]})`;default:return t||`var(--admiral-color-Opacity_Neutral12, ${o.color["Opacity/Neutral 12"]})`}}};
`,Kx=te.button`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;

  ${({$dimension:t})=>`
    height: ${t==="s"?20:24}px;
    padding: ${t==="s"?1:3}px ${t==="s"?5:7}px;
  `}

  ${({$width:t})=>t&&`width: ${typeof t=="number"?`${t}px`:t};`}
  border-radius: var(--admiral-border-radius-Small, ${t=>kl(t.theme.shape)});
  ${({$statusViaBackground:t,theme:o})=>t?Wx:`background: var(--admiral-color-Opacity_Neutral8, ${o.color["Opacity/Neutral 8"]});`}
  ${({$statusViaBackground:t})=>t?Ux:"border: 1px solid transparent;"}

  display: inline-flex;
  align-items: center;
  cursor: ${({$clickable:t})=>t?"pointer":"default"};

  &:hover,
  &:active {
    ${({$statusViaBackground:t,$clickable:o})=>o&&!t?"border: 1px solid transparent;":""}
    ${({$statusViaBackground:t,theme:o,$clickable:i})=>i?t?Vx:`background: var(--admiral-color-Opacity_Neutral12, ${o.color["Opacity/Neutral 12"]});`:""}
  }

  &:focus-visible {
    outline: none;

    &:before {
      content: '';
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: var(--admiral-border-radius-Small, ${t=>kl(t.theme.shape)});
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${t=>t.theme.color["Primary/Primary 60 Main"]});
    }
  }
`,Qx=te.span`
  color: var(--admiral-color-Neutral_Neutral90, ${t=>t.theme.color["Neutral/Neutral 90"]});
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${vt["Caption/Caption 1"]}
`,Gx=te.div`
  display: flex;
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  ${Hx}
`,Yx=te.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-right: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${t=>t.theme.color["Neutral/Neutral 50"]});
  }
`,Xx=te.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-left: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${t=>t.theme.color["Neutral/Neutral 50"]});
  }

  &:hover {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${t=>t.theme.color["Neutral/Neutral 50"]});
    }
  }
`,gl=E.forwardRef(({children:t,kind:o="neutral",dimension:i="m",width:l,statusViaBackground:u=!1,isBorderHidden:d=!1,icon:f,statusIcon:m,onClick:h,...v},y)=>{const g=E.useRef(null),w=E.useRef(null),[k,M]=E.useState(!1),[R,b]=E.useState(!1),B=typeof o=="object"?o.background?o.background:"neutral":o,A=d?"transparent":typeof o=="object"?o.background&&o.border?o.border:"neutral":o,j=typeof o=="object"?o.backgroundHover?o.backgroundHover:o.background?o.background:"neutral":o;return E.useLayoutEffect(()=>{const H=w.current;H&&fh(H)!==k&&M(fh(H))},[R,M]),E.useLayoutEffect(()=>{function H(){b(!0)}function I(){b(!1)}const V=g.current;if(V)return V.addEventListener("mouseenter",H),V.addEventListener("mouseleave",I),V.addEventListener("focus",H),V.addEventListener("blur",I),()=>{V.removeEventListener("mouseenter",H),V.removeEventListener("mouseleave",I),V.removeEventListener("focus",H),V.removeEventListener("blur",I)}},[b]),P.jsxs(P.Fragment,{children:[P.jsxs(Kx,{ref:ro(y,g),$width:l,onClick:h,$clickable:!!h,$statusViaBackground:u,$border:A,$background:B,$backgroundHover:j,$dimension:i,type:"button",...v,children:[B!=="neutral"&&!u&&P.jsx(Gx,{$background:B}),u&&f&&P.jsx(Yx,{children:f}),t&&P.jsx(Qx,{ref:w,children:t}),m&&P.jsx(Xx,{children:m})]}),R&&k&&P.jsx(jc,{targetElement:g.current,renderContent:()=>t})]})});gl.displayName="Tag";const yc=t=>t&&t.ownerDocument||document,vc=t=>yc(t).defaultView||window,gh=t=>parseInt(vc(t).getComputedStyle(t).paddingRight,10)||0,qx=t=>{const o=t,i=[];if((f=>{const m=yc(f);return m.body===f?vc(f).innerWidth>m.documentElement.clientWidth:f.scrollHeight>f.clientHeight})(o)){i.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${gh(o)+hc()}px`;const f=yc(o).querySelectorAll('*[style="position:fixed"]');[].forEach.call(f,m=>{i.push({value:m.style.paddingRight,property:"padding-right",el:m}),m.style.paddingRight=`${gh(m)+hc()}px`})}const l=o.parentElement,u=vc(o),d=l?.nodeName==="HTML"&&u.getComputedStyle(l).overflowY==="scroll"?l:o;return i.push({value:d.style.overflow,property:"overflow",el:d},{value:d.style.overflowX,property:"overflow-x",el:d},{value:d.style.overflowY,property:"overflow-y",el:d}),d.style.overflow="hidden",()=>{i.forEach(({value:f,el:m,property:h})=>{f?m.style.setProperty(h,f):m.style.removeProperty(h)})}};function Hu(t,o){let i=-1;return t.some((l,u)=>!!o(l)&&(i=u,!0)),i}const Wu=new class{containers;modals;constructor(){this.modals=[],this.containers=[]}add(t,o){let i=this.modals.indexOf(t);if(i!==-1)return i;i=this.modals.length,this.modals.push(t);const l=Hu(this.containers,u=>u.container===o);return l!==-1?(this.containers[l].modals.push(t),i):(this.containers.push({modals:[t],container:o,restore:null}),i)}mount(t){const o=Hu(this.containers,l=>l.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=qx(i.container))}remove(t){const o=this.modals.indexOf(t);if(o===-1)return o;const i=Hu(this.containers,u=>u.modals.indexOf(t)!==-1),l=this.containers[i];return l.modals.splice(l.modals.indexOf(t),1),this.modals.splice(o,1),l.modals.length===0&&(l.restore&&l.restore(),this.containers.splice(i,1)),o}},Jx=te.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--admiral-color-Opacity_Modal, ${t=>t.theme.color["Opacity/Modal"]});
  transition: opacity 0.3s ease 0s;
  z-index: var(--admiral-z-index-modal, ${({theme:t})=>t.zIndex.modal});
  ${t=>t.$overlayStyledCss}
  outline: none;
`,Zx=re`
  width: ${({$dimension:t,$mobile:o})=>{if(o)return"calc(100% - 32px)";switch(t){case"s":return"384px";case"m":return"488px";case"xl":return"800px";default:return"592px"}}};
`;te.h5`
  ${({$mobile:t})=>t?vt["Header/H6"]:vt["Header/H5"]};
  color: var(--admiral-color-Neutral_Neutral90, ${t=>t.theme.color["Neutral/Neutral 90"]});
  margin: 0;
  padding: ${({$mobile:t,$displayCloseIcon:o})=>t?o?"0 46px 8px 16px":"0 16px 8px":o?"0 56px 8px 24px":"0 24px 8px"};
`;te.div`
  display: flex;
  flex-direction: ${({$mobile:t})=>t?"column-reverse":"row-reverse"};
  padding: ${({$mobile:t})=>t?"16px 16px 0":"16px 24px 0"};

  & > button {
    margin: ${({$mobile:t})=>t?"0 0 16px 0":"0 16px 0 0"};
    ${({$mobile:t})=>t&&"width: 100%;"}
  }

  & > button:first-child {
    margin: 0;
  }
`;const ew=re`
  fill: ${({$status:t,theme:o})=>{switch(t){case"success":return`var(--admiral-color-Success_Success50Main, ${o.color["Success/Success 50 Main"]})`;case"warning":return`var(--admiral-color-Warning_Warning50Main, ${o.color["Warning/Warning 50 Main"]})`;case"danger":return`var(--admiral-color-Error_Error60Main, ${o.color["Error/Error 60 Main"]})`;default:return`var(--admiral-color-Primary_Primary60Main, ${o.color["Primary/Primary 60 Main"]})`}}};
`;te.div`
  margin-left: ${({$mobile:t})=>t?16:24}px;
  margin-bottom: ${({$mobile:t})=>t?6:8}px;
  width: 40px;
  height: 40px;

  & *[fill^='#'] {
    ${ew}
  }
`;const tw=te.div`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 0 24px;
  ${Zx};
  max-height: ${({$mobile:t})=>t?"84vh":"90vh"};
  background-color: var(--admiral-color-Special_ElevatedBG, ${t=>t.theme.color["Special/Elevated BG"]});
  box-shadow: var(--admiral-box-shadow-Shadow16, ${t=>Lm(t.theme.shadow["Shadow 16"])});
  border-radius: var(--admiral-border-radius-Large, ${t=>E1(t.theme.shape)});
  ${({$mobile:t})=>t?vt["Body/Body 2 Long"]:vt["Body/Body 1 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${t=>t.theme.color["Neutral/Neutral 90"]});
  outline: none;
`,rw=te(Q1)`
  position: absolute;
  top: 16px;
  right: ${({$mobile:t})=>t?12:20}px;
`,nw=re``,ow=E.createContext({mobile:!1,displayCloseIcon:!0}),iw=()=>{},Xm=E.forwardRef(({overlayStyledCss:t=nw,overlayClassName:o,overlayStyle:i,dimension:l="l",container:u,mobile:d=!1,onClose:f,closeOnEscapeKeyDown:m,closeOnOutsideClick:h,displayCloseIcon:v=!0,children:y,locale:g,closeButtonPropsConfig:w=iw,...k},M)=>{const R=$m()||Dc,b=g?.closeButtonAriaLabel||R.locales[R.currentLocale].modal.closeButtonAriaLabel,B=E.useRef(null),A=E.useRef(null),j=E.useRef(null);E.useEffect(()=>{if(B.current){j.current=document.activeElement,B.current.focus();const I={containerEl:u||document.body,modalEl:B.current};return Wu.add(I,u||document.body),Wu.mount(I),()=>{j.current.focus(),Wu.remove(I)}}},[u]);const H={dimension:"lSmall","aria-label":b,$mobile:d,onClick:I=>{I.stopPropagation(),f?.()}};return Il.createPortal(P.jsx(Jx,{ref:A,tabIndex:-1,onMouseDown:I=>{h&&I.target===A.current&&f?.()},onKeyDown:I=>{if(I.key==="Escape"&&m)I.preventDefault(),I.stopPropagation(),f?.();else if(I.key==="Tab"){const V=Ix(B.current);I.shiftKey?document.activeElement!==V[0]&&document.activeElement!==B.current||(V[V.length-1].focus(),I.preventDefault()):document.activeElement===V[V.length-1]&&(V[0].focus(),I.preventDefault())}},$overlayStyledCss:t,className:o,style:i,children:P.jsxs(tw,{ref:ro(M,B),tabIndex:-1,role:"dialog","aria-modal":!0,$dimension:l,$mobile:d,...k,children:[P.jsx(ow.Provider,{value:{mobile:d,displayCloseIcon:v},children:y}),v&&P.jsx(rw,{...H,...w(H)})]})}),u||document.body)});Xm.displayName="Modal";const aw=re`
  ${Oc};
  pointer-events: none;
`,lw=te.span`
  color: ${({$color:t,theme:o,$skeleton:i})=>{const l=`--admiral-color-${t?.replace("/","_").replaceAll(" ","")}`;return i?"transparent":t?o.color[t]?`var(${l}, ${o.color[t]})`:t:`var(--admiral-color-Neutral_Neutral90, ${o.color[S1]})`}};
  ${t=>t.theme.typography[t.$font]};
  ${t=>t.$cssMixin?t.$cssMixin:""}
  ${t=>t.$skeleton&&aw}
`,or=Rc(({font:t,color:o,cssMixin:i,skeleton:l,...u},d)=>P.jsx(lw,{ref:d,...u,$font:t,$color:o,$cssMixin:i,$skeleton:l}));or.displayName="T";const sw="/T1-homework/assets/VTBGroupUI-SemiBold-Wupg3RVc.ttf",uw="/T1-homework/assets/VTBGroupUI-Medium-CJW7SkqK.otf",cw="/T1-homework/assets/VTBGroupUI-Regular-JWIonCWQ.otf",dw=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${sw}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${uw}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${cw}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
`;function fw(t){return P.jsx("style",{type:"text/css",children:dw,...t})}/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tt(){return tt=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},tt.apply(this,arguments)}var st;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(st||(st={}));const yh="popstate";function pw(t){t===void 0&&(t={});function o(l,u){let{pathname:d,search:f,hash:m}=l.location;return Ki("",{pathname:d,search:f,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){return typeof u=="string"?u:to(u)}return mw(o,i,null,t)}function be(t,o){if(t===!1||t===null||typeof t>"u")throw new Error(o)}function Ho(t,o){if(!t){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function hw(){return Math.random().toString(36).substr(2,8)}function vh(t,o){return{usr:t.state,key:t.key,idx:o}}function Ki(t,o,i,l){return i===void 0&&(i=null),tt({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof o=="string"?Pn(o):o,{state:i,key:o&&o.key||l||hw()})}function to(t){let{pathname:o="/",search:i="",hash:l=""}=t;return i&&i!=="?"&&(o+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(o+=l.charAt(0)==="#"?l:"#"+l),o}function Pn(t){let o={};if(t){let i=t.indexOf("#");i>=0&&(o.hash=t.substr(i),t=t.substr(0,i));let l=t.indexOf("?");l>=0&&(o.search=t.substr(l),t=t.substr(0,l)),t&&(o.pathname=t)}return o}function mw(t,o,i,l){l===void 0&&(l={});let{window:u=document.defaultView,v5Compat:d=!1}=l,f=u.history,m=st.Pop,h=null,v=y();v==null&&(v=0,f.replaceState(tt({},f.state,{idx:v}),""));function y(){return(f.state||{idx:null}).idx}function g(){m=st.Pop;let b=y(),B=b==null?null:b-v;v=b,h&&h({action:m,location:R.location,delta:B})}function w(b,B){m=st.Push;let A=Ki(R.location,b,B);v=y()+1;let j=vh(A,v),H=R.createHref(A);try{f.pushState(j,"",H)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;u.location.assign(H)}d&&h&&h({action:m,location:R.location,delta:1})}function k(b,B){m=st.Replace;let A=Ki(R.location,b,B);v=y();let j=vh(A,v),H=R.createHref(A);f.replaceState(j,"",H),d&&h&&h({action:m,location:R.location,delta:0})}function M(b){let B=u.location.origin!=="null"?u.location.origin:u.location.href,A=typeof b=="string"?b:to(b);return A=A.replace(/ $/,"%20"),be(B,"No window.location.(origin|href) available to create URL for href: "+A),new URL(A,B)}let R={get action(){return m},get location(){return t(u,f)},listen(b){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(yh,g),h=b,()=>{u.removeEventListener(yh,g),h=null}},createHref(b){return o(u,b)},createURL:M,encodeLocation(b){let B=M(b);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:w,replace:k,go(b){return f.go(b)}};return R}var Ve;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ve||(Ve={}));const gw=new Set(["lazy","caseSensitive","path","id","index","children"]);function yw(t){return t.index===!0}function Nl(t,o,i,l){return i===void 0&&(i=[]),l===void 0&&(l={}),t.map((u,d)=>{let f=[...i,String(d)],m=typeof u.id=="string"?u.id:f.join("-");if(be(u.index!==!0||!u.children,"Cannot specify children on an index route"),be(!l[m],'Found a route id collision on id "'+m+`".  Route id's must be globally unique within Data Router usages`),yw(u)){let h=tt({},u,o(u),{id:m});return l[m]=h,h}else{let h=tt({},u,o(u),{id:m,children:void 0});return l[m]=h,u.children&&(h.children=Nl(u.children,o,f,l)),h}})}function Vn(t,o,i){return i===void 0&&(i="/"),yl(t,o,i,!1)}function yl(t,o,i,l){let u=typeof o=="string"?Pn(o):o,d=Uo(u.pathname||"/",i);if(d==null)return null;let f=qm(t);xw(f);let m=null;for(let h=0;m==null&&h<f.length;++h){let v=Fw(d);m=$w(f[h],v,l)}return m}function vw(t,o){let{route:i,pathname:l,params:u}=t;return{id:i.id,pathname:l,params:u,data:o[i.id],handle:i.handle}}function qm(t,o,i,l){o===void 0&&(o=[]),i===void 0&&(i=[]),l===void 0&&(l="");let u=(d,f,m)=>{let h={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:f,route:d};h.relativePath.startsWith("/")&&(be(h.relativePath.startsWith(l),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(l.length));let v=Wr([l,h.relativePath]),y=i.concat(h);d.children&&d.children.length>0&&(be(d.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),qm(d.children,o,y,v)),!(d.path==null&&!d.index)&&o.push({path:v,score:kw(v,d.index),routesMeta:y})};return t.forEach((d,f)=>{var m;if(d.path===""||!((m=d.path)!=null&&m.includes("?")))u(d,f);else for(let h of Jm(d.path))u(d,f,h)}),o}function Jm(t){let o=t.split("/");if(o.length===0)return[];let[i,...l]=o,u=i.endsWith("?"),d=i.replace(/\?$/,"");if(l.length===0)return u?[d,""]:[d];let f=Jm(l.join("/")),m=[];return m.push(...f.map(h=>h===""?d:[d,h].join("/"))),u&&m.push(...f),m.map(h=>t.startsWith("/")&&h===""?"/":h)}function xw(t){t.sort((o,i)=>o.score!==i.score?i.score-o.score:Nw(o.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}const ww=/^:[\w-]+$/,Sw=3,Ew=2,_w=1,Cw=10,Pw=-2,xh=t=>t==="*";function kw(t,o){let i=t.split("/"),l=i.length;return i.some(xh)&&(l+=Pw),o&&(l+=Ew),i.filter(u=>!xh(u)).reduce((u,d)=>u+(ww.test(d)?Sw:d===""?_w:Cw),l)}function Nw(t,o){return t.length===o.length&&t.slice(0,-1).every((l,u)=>l===o[u])?t[t.length-1]-o[o.length-1]:0}function $w(t,o,i){i===void 0&&(i=!1);let{routesMeta:l}=t,u={},d="/",f=[];for(let m=0;m<l.length;++m){let h=l[m],v=m===l.length-1,y=d==="/"?o:o.slice(d.length)||"/",g=wh({path:h.relativePath,caseSensitive:h.caseSensitive,end:v},y),w=h.route;if(!g&&v&&i&&!l[l.length-1].route.index&&(g=wh({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!g)return null;Object.assign(u,g.params),f.push({params:u,pathname:Wr([d,g.pathname]),pathnameBase:Dw(Wr([d,g.pathnameBase])),route:w}),g.pathnameBase!=="/"&&(d=Wr([d,g.pathnameBase]))}return f}function wh(t,o){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,l]=Tw(t.path,t.caseSensitive,t.end),u=o.match(i);if(!u)return null;let d=u[0],f=d.replace(/(.)\/+$/,"$1"),m=u.slice(1);return{params:l.reduce((v,y,g)=>{let{paramName:w,isOptional:k}=y;if(w==="*"){let R=m[g]||"";f=d.slice(0,d.length-R.length).replace(/(.)\/+$/,"$1")}const M=m[g];return k&&!M?v[w]=void 0:v[w]=(M||"").replace(/%2F/g,"/"),v},{}),pathname:d,pathnameBase:f,pattern:t}}function Tw(t,o,i){o===void 0&&(o=!1),i===void 0&&(i=!0),Ho(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let l=[],u="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,h)=>(l.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(l.push({paramName:"*"}),u+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?u+="\\/*$":t!==""&&t!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,o?void 0:"i"),l]}function Fw(t){try{return t.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Ho(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+o+").")),t}}function Uo(t,o){if(o==="/")return t;if(!t.toLowerCase().startsWith(o.toLowerCase()))return null;let i=o.endsWith("/")?o.length-1:o.length,l=t.charAt(i);return l&&l!=="/"?null:t.slice(i)||"/"}function Mw(t,o){o===void 0&&(o="/");let{pathname:i,search:l="",hash:u=""}=typeof t=="string"?Pn(t):t;return{pathname:i?i.startsWith("/")?i:bw(i,o):o,search:Rw(l),hash:Lw(u)}}function bw(t,o){let i=o.replace(/\/+$/,"").split("/");return t.split("/").forEach(u=>{u===".."?i.length>1&&i.pop():u!=="."&&i.push(u)}),i.length>1?i.join("/"):"/"}function Uu(t,o,i,l){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+o+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zm(t){return t.filter((o,i)=>i===0||o.route.path&&o.route.path.length>0)}function Ic(t,o){let i=Zm(t);return o?i.map((l,u)=>u===i.length-1?l.pathname:l.pathnameBase):i.map(l=>l.pathnameBase)}function Hc(t,o,i,l){l===void 0&&(l=!1);let u;typeof t=="string"?u=Pn(t):(u=tt({},t),be(!u.pathname||!u.pathname.includes("?"),Uu("?","pathname","search",u)),be(!u.pathname||!u.pathname.includes("#"),Uu("#","pathname","hash",u)),be(!u.search||!u.search.includes("#"),Uu("#","search","hash",u)));let d=t===""||u.pathname==="",f=d?"/":u.pathname,m;if(f==null)m=i;else{let g=o.length-1;if(!l&&f.startsWith("..")){let w=f.split("/");for(;w[0]==="..";)w.shift(),g-=1;u.pathname=w.join("/")}m=g>=0?o[g]:"/"}let h=Mw(u,m),v=f&&f!=="/"&&f.endsWith("/"),y=(d||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(v||y)&&(h.pathname+="/"),h}const Wr=t=>t.join("/").replace(/\/\/+/g,"/"),Dw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Rw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Lw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class $l{constructor(o,i,l,u){u===void 0&&(u=!1),this.status=o,this.statusText=i||"",this.internal=u,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}}function Qi(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const eg=["post","put","patch","delete"],Ow=new Set(eg),jw=["get",...eg],zw=new Set(jw),Aw=new Set([301,302,303,307,308]),Bw=new Set([307,308]),Vu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Iw={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},bi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Wc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hw=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),tg="remix-router-transitions";function Ww(t){const o=t.window?t.window:typeof window<"u"?window:void 0,i=typeof o<"u"&&typeof o.document<"u"&&typeof o.document.createElement<"u",l=!i;be(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let u;if(t.mapRouteProperties)u=t.mapRouteProperties;else if(t.detectErrorBoundary){let _=t.detectErrorBoundary;u=T=>({hasErrorBoundary:_(T)})}else u=Hw;let d={},f=Nl(t.routes,u,void 0,d),m,h=t.basename||"/",v=t.dataStrategy||Qw,y=t.patchRoutesOnNavigation,g=tt({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),w=null,k=new Set,M=null,R=null,b=null,B=t.hydrationData!=null,A=Vn(f,t.history.location,h),j=!1,H=null;if(A==null&&!y){let _=zt(404,{pathname:t.history.location.pathname}),{matches:T,route:O}=Mh(f);A=T,H={[O.id]:_}}A&&!t.hydrationData&&$n(A,f,t.history.location.pathname).active&&(A=null);let I;if(A)if(A.some(_=>_.route.lazy))I=!1;else if(!A.some(_=>_.route.loader))I=!0;else if(g.v7_partialHydration){let _=t.hydrationData?t.hydrationData.loaderData:null,T=t.hydrationData?t.hydrationData.errors:null;if(T){let O=A.findIndex(W=>T[W.route.id]!==void 0);I=A.slice(0,O+1).every(W=>!wc(W.route,_,T))}else I=A.every(O=>!wc(O.route,_,T))}else I=t.hydrationData!=null;else if(I=!1,A=[],g.v7_partialHydration){let _=$n(null,f,t.history.location.pathname);_.active&&_.matches&&(j=!0,A=_.matches)}let V,N={historyAction:t.history.action,location:t.history.location,matches:A,initialized:I,navigation:Vu,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||H,fetchers:new Map,blockers:new Map},J=st.Pop,ge=!1,Z,Te=!1,Pe=new Map,Re=null,Oe=!1,Ke=!1,Ge=[],Fe=new Set,Q=new Map,G=0,Y=-1,S=new Map,z=new Set,ue=new Map,he=new Map,me=new Set,we=new Map,_e=new Map,Ce;function Me(){if(w=t.history.listen(_=>{let{action:T,location:O,delta:W}=_;if(Ce){Ce(),Ce=void 0;return}Ho(_e.size===0||W!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ee=lo({currentLocation:N.location,nextLocation:O,historyAction:T});if(ee&&W!=null){let pe=new Promise(xe=>{Ce=xe});t.history.go(W*-1),Xr(ee,{state:"blocked",location:O,proceed(){Xr(ee,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),pe.then(()=>t.history.go(W))},reset(){let xe=new Map(N.blockers);xe.set(ee,bi),Ie({blockers:xe})}});return}return pt(T,O)}),i){lS(o,Pe);let _=()=>sS(o,Pe);o.addEventListener("pagehide",_),Re=()=>o.removeEventListener("pagehide",_)}return N.initialized||pt(st.Pop,N.location,{initialHydration:!0}),V}function it(){w&&w(),Re&&Re(),k.clear(),Z&&Z.abort(),N.fetchers.forEach((_,T)=>Sr(T)),N.blockers.forEach((_,T)=>ao(T))}function At(_){return k.add(_),()=>k.delete(_)}function Ie(_,T){T===void 0&&(T={}),N=tt({},N,_);let O=[],W=[];g.v7_fetcherPersist&&N.fetchers.forEach((ee,pe)=>{ee.state==="idle"&&(me.has(pe)?W.push(pe):O.push(pe))}),me.forEach(ee=>{!N.fetchers.has(ee)&&!Q.has(ee)&&W.push(ee)}),[...k].forEach(ee=>ee(N,{deletedFetchers:W,viewTransitionOpts:T.viewTransitionOpts,flushSync:T.flushSync===!0})),g.v7_fetcherPersist?(O.forEach(ee=>N.fetchers.delete(ee)),W.forEach(ee=>Sr(ee))):W.forEach(ee=>me.delete(ee))}function Mt(_,T,O){var W,ee;let{flushSync:pe}=O===void 0?{}:O,xe=N.actionData!=null&&N.navigation.formMethod!=null&&mr(N.navigation.formMethod)&&N.navigation.state==="loading"&&((W=_.state)==null?void 0:W._isRedirect)!==!0,le;T.actionData?Object.keys(T.actionData).length>0?le=T.actionData:le=null:xe?le=N.actionData:le=null;let ce=T.loaderData?Th(N.loaderData,T.loaderData,T.matches||[],T.errors):N.loaderData,oe=N.blockers;oe.size>0&&(oe=new Map(oe),oe.forEach(($e,ct)=>oe.set(ct,bi)));let ae=ge===!0||N.navigation.formMethod!=null&&mr(N.navigation.formMethod)&&((ee=_.state)==null?void 0:ee._isRedirect)!==!0;m&&(f=m,m=void 0),Oe||J===st.Pop||(J===st.Push?t.history.push(_,_.state):J===st.Replace&&t.history.replace(_,_.state));let Ee;if(J===st.Pop){let $e=Pe.get(N.location.pathname);$e&&$e.has(_.pathname)?Ee={currentLocation:N.location,nextLocation:_}:Pe.has(_.pathname)&&(Ee={currentLocation:_,nextLocation:N.location})}else if(Te){let $e=Pe.get(N.location.pathname);$e?$e.add(_.pathname):($e=new Set([_.pathname]),Pe.set(N.location.pathname,$e)),Ee={currentLocation:N.location,nextLocation:_}}Ie(tt({},T,{actionData:le,loaderData:ce,historyAction:J,location:_,initialized:!0,navigation:Vu,revalidation:"idle",restoreScrollPosition:Xo(_,T.matches||N.matches),preventScrollReset:ae,blockers:oe}),{viewTransitionOpts:Ee,flushSync:pe===!0}),J=st.Pop,ge=!1,Te=!1,Oe=!1,Ke=!1,Ge=[]}async function Kr(_,T){if(typeof _=="number"){t.history.go(_);return}let O=xc(N.location,N.matches,h,g.v7_prependBasename,_,g.v7_relativeSplatPath,T?.fromRouteId,T?.relative),{path:W,submission:ee,error:pe}=Sh(g.v7_normalizeFormMethod,!1,O,T),xe=N.location,le=Ki(N.location,W,T&&T.state);le=tt({},le,t.history.encodeLocation(le));let ce=T&&T.replace!=null?T.replace:void 0,oe=st.Push;ce===!0?oe=st.Replace:ce===!1||ee!=null&&mr(ee.formMethod)&&ee.formAction===N.location.pathname+N.location.search&&(oe=st.Replace);let ae=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,Ee=(T&&T.flushSync)===!0,$e=lo({currentLocation:xe,nextLocation:le,historyAction:oe});if($e){Xr($e,{state:"blocked",location:le,proceed(){Xr($e,{state:"proceeding",proceed:void 0,reset:void 0,location:le}),Kr(_,T)},reset(){let ct=new Map(N.blockers);ct.set($e,bi),Ie({blockers:ct})}});return}return await pt(oe,le,{submission:ee,pendingError:pe,preventScrollReset:ae,replace:T&&T.replace,enableViewTransition:T&&T.viewTransition,flushSync:Ee})}function oo(){if(Nn(),Ie({revalidation:"loading"}),N.navigation.state!=="submitting"){if(N.navigation.state==="idle"){pt(N.historyAction,N.location,{startUninterruptedRevalidation:!0});return}pt(J||N.historyAction,N.navigation.location,{overrideNavigation:N.navigation,enableViewTransition:Te===!0})}}async function pt(_,T,O){Z&&Z.abort(),Z=null,J=_,Oe=(O&&O.startUninterruptedRevalidation)===!0,Zi(N.location,N.matches),ge=(O&&O.preventScrollReset)===!0,Te=(O&&O.enableViewTransition)===!0;let W=m||f,ee=O&&O.overrideNavigation,pe=O!=null&&O.initialHydration&&N.matches&&N.matches.length>0&&!j?N.matches:Vn(W,T,h),xe=(O&&O.flushSync)===!0;if(pe&&N.initialized&&!Ke&&Zw(N.location,T)&&!(O&&O.submission&&mr(O.submission.formMethod))){Mt(T,{matches:pe},{flushSync:xe});return}let le=$n(pe,W,T.pathname);if(le.active&&le.matches&&(pe=le.matches),!pe){let{error:We,notFoundMatches:Le,route:Xe}=Er(T.pathname);Mt(T,{matches:Le,loaderData:{},errors:{[Xe.id]:We}},{flushSync:xe});return}Z=new AbortController;let ce=Ro(t.history,T,Z.signal,O&&O.submission),oe;if(O&&O.pendingError)oe=[Kn(pe).route.id,{type:Ve.error,error:O.pendingError}];else if(O&&O.submission&&mr(O.submission.formMethod)){let We=await Bt(ce,T,O.submission,pe,le.active,{replace:O.replace,flushSync:xe});if(We.shortCircuited)return;if(We.pendingActionResult){let[Le,Xe]=We.pendingActionResult;if(Qt(Xe)&&Qi(Xe.error)&&Xe.error.status===404){Z=null,Mt(T,{matches:We.matches,loaderData:{},errors:{[Le]:Xe.error}});return}}pe=We.matches||pe,oe=We.pendingActionResult,ee=Ku(T,O.submission),xe=!1,le.active=!1,ce=Ro(t.history,ce.url,ce.signal)}let{shortCircuited:ae,matches:Ee,loaderData:$e,errors:ct}=await Xt(ce,T,pe,le.active,ee,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,O&&O.initialHydration===!0,xe,oe);ae||(Z=null,Mt(T,tt({matches:Ee||pe},Fh(oe),{loaderData:$e,errors:ct})))}async function Bt(_,T,O,W,ee,pe){pe===void 0&&(pe={}),Nn();let xe=iS(T,O);if(Ie({navigation:xe},{flushSync:pe.flushSync===!0}),ee){let oe=await qr(W,T.pathname,_.signal);if(oe.type==="aborted")return{shortCircuited:!0};if(oe.type==="error"){let ae=Kn(oe.partialMatches).route.id;return{matches:oe.partialMatches,pendingActionResult:[ae,{type:Ve.error,error:oe.error}]}}else if(oe.matches)W=oe.matches;else{let{notFoundMatches:ae,error:Ee,route:$e}=Er(T.pathname);return{matches:ae,pendingActionResult:[$e.id,{type:Ve.error,error:Ee}]}}}let le,ce=zi(W,T);if(!ce.route.action&&!ce.route.lazy)le={type:Ve.error,error:zt(405,{method:_.method,pathname:T.pathname,routeId:ce.route.id})};else if(le=(await Gr("action",N,_,[ce],W,null))[ce.route.id],_.signal.aborted)return{shortCircuited:!0};if(Gn(le)){let oe;return pe&&pe.replace!=null?oe=pe.replace:oe=kh(le.response.headers.get("Location"),new URL(_.url),h)===N.location.pathname+N.location.search,await wr(_,le,!0,{submission:O,replace:oe}),{shortCircuited:!0}}if(En(le))throw zt(400,{type:"defer-action"});if(Qt(le)){let oe=Kn(W,ce.route.id);return(pe&&pe.replace)!==!0&&(J=st.Push),{matches:W,pendingActionResult:[oe.route.id,le]}}return{matches:W,pendingActionResult:[ce.route.id,le]}}async function Xt(_,T,O,W,ee,pe,xe,le,ce,oe,ae){let Ee=ee||Ku(T,pe),$e=pe||xe||Dh(Ee),ct=!Oe&&(!g.v7_partialHydration||!ce);if(W){if(ct){let Qe=xr(ae);Ie(tt({navigation:Ee},Qe!==void 0?{actionData:Qe}:{}),{flushSync:oe})}let De=await qr(O,T.pathname,_.signal);if(De.type==="aborted")return{shortCircuited:!0};if(De.type==="error"){let Qe=Kn(De.partialMatches).route.id;return{matches:De.partialMatches,loaderData:{},errors:{[Qe]:De.error}}}else if(De.matches)O=De.matches;else{let{error:Qe,notFoundMatches:xt,route:Mn}=Er(T.pathname);return{matches:xt,loaderData:{},errors:{[Mn.id]:Qe}}}}let We=m||f,[Le,Xe]=_h(t.history,N,O,$e,T,g.v7_partialHydration&&ce===!0,g.v7_skipActionErrorRevalidation,Ke,Ge,Fe,me,ue,z,We,h,ae);if(_r(De=>!(O&&O.some(Qe=>Qe.route.id===De))||Le&&Le.some(Qe=>Qe.route.id===De)),Y=++G,Le.length===0&&Xe.length===0){let De=qi();return Mt(T,tt({matches:O,loaderData:{},errors:ae&&Qt(ae[1])?{[ae[0]]:ae[1].error}:null},Fh(ae),De?{fetchers:new Map(N.fetchers)}:{}),{flushSync:oe}),{shortCircuited:!0}}if(ct){let De={};if(!W){De.navigation=Ee;let Qe=xr(ae);Qe!==void 0&&(De.actionData=Qe)}Xe.length>0&&(De.fetchers=ar(Xe)),Ie(De,{flushSync:oe})}Xe.forEach(De=>{lr(De.key),De.controller&&Q.set(De.key,De.controller)});let Fr=()=>Xe.forEach(De=>lr(De.key));Z&&Z.signal.addEventListener("abort",Fr);let{loaderResults:Fn,fetcherResults:sr}=await Ko(N,O,Le,Xe,_);if(_.signal.aborted)return{shortCircuited:!0};Z&&Z.signal.removeEventListener("abort",Fr),Xe.forEach(De=>Q.delete(De.key));let ze=cl(Fn);if(ze)return await wr(_,ze.result,!0,{replace:le}),{shortCircuited:!0};if(ze=cl(sr),ze)return z.add(ze.key),await wr(_,ze.result,!0,{replace:le}),{shortCircuited:!0};let{loaderData:qo,errors:Mr}=$h(N,O,Fn,ae,Xe,sr,we);we.forEach((De,Qe)=>{De.subscribe(xt=>{(xt||De.done)&&we.delete(Qe)})}),g.v7_partialHydration&&ce&&N.errors&&(Mr=tt({},N.errors,Mr));let Cr=qi(),br=io(Y),so=Cr||br||Xe.length>0;return tt({matches:O,loaderData:qo,errors:Mr},so?{fetchers:new Map(N.fetchers)}:{})}function xr(_){if(_&&!Qt(_[1]))return{[_[0]]:_[1].data};if(N.actionData)return Object.keys(N.actionData).length===0?null:N.actionData}function ar(_){return _.forEach(T=>{let O=N.fetchers.get(T.key),W=Di(void 0,O?O.data:void 0);N.fetchers.set(T.key,W)}),new Map(N.fetchers)}function Qr(_,T,O,W){if(l)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");lr(_);let ee=(W&&W.flushSync)===!0,pe=m||f,xe=xc(N.location,N.matches,h,g.v7_prependBasename,O,g.v7_relativeSplatPath,T,W?.relative),le=Vn(pe,xe,h),ce=$n(le,pe,xe);if(ce.active&&ce.matches&&(le=ce.matches),!le){qt(_,T,zt(404,{pathname:xe}),{flushSync:ee});return}let{path:oe,submission:ae,error:Ee}=Sh(g.v7_normalizeFormMethod,!0,xe,W);if(Ee){qt(_,T,Ee,{flushSync:ee});return}let $e=zi(le,oe),ct=(W&&W.preventScrollReset)===!0;if(ae&&mr(ae.formMethod)){Vo(_,T,oe,$e,le,ce.active,ee,ct,ae);return}ue.set(_,{routeId:T,path:oe}),Xi(_,T,oe,$e,le,ce.active,ee,ct,ae)}async function Vo(_,T,O,W,ee,pe,xe,le,ce){Nn(),ue.delete(_);function oe(Ae){if(!Ae.route.action&&!Ae.route.lazy){let Jr=zt(405,{method:ce.formMethod,pathname:O,routeId:T});return qt(_,T,Jr,{flushSync:xe}),!0}return!1}if(!pe&&oe(W))return;let ae=N.fetchers.get(_);It(_,aS(ce,ae),{flushSync:xe});let Ee=new AbortController,$e=Ro(t.history,O,Ee.signal,ce);if(pe){let Ae=await qr(ee,new URL($e.url).pathname,$e.signal,_);if(Ae.type==="aborted")return;if(Ae.type==="error"){qt(_,T,Ae.error,{flushSync:xe});return}else if(Ae.matches){if(ee=Ae.matches,W=zi(ee,O),oe(W))return}else{qt(_,T,zt(404,{pathname:O}),{flushSync:xe});return}}Q.set(_,Ee);let ct=G,Le=(await Gr("action",N,$e,[W],ee,_))[W.route.id];if($e.signal.aborted){Q.get(_)===Ee&&Q.delete(_);return}if(g.v7_fetcherPersist&&me.has(_)){if(Gn(Le)||Qt(Le)){It(_,wn(void 0));return}}else{if(Gn(Le))if(Q.delete(_),Y>ct){It(_,wn(void 0));return}else return z.add(_),It(_,Di(ce)),wr($e,Le,!1,{fetcherSubmission:ce,preventScrollReset:le});if(Qt(Le)){qt(_,T,Le.error);return}}if(En(Le))throw zt(400,{type:"defer-action"});let Xe=N.navigation.location||N.location,Fr=Ro(t.history,Xe,Ee.signal),Fn=m||f,sr=N.navigation.state!=="idle"?Vn(Fn,N.navigation.location,h):N.matches;be(sr,"Didn't find any matches after fetcher action");let ze=++G;S.set(_,ze);let qo=Di(ce,Le.data);N.fetchers.set(_,qo);let[Mr,Cr]=_h(t.history,N,sr,ce,Xe,!1,g.v7_skipActionErrorRevalidation,Ke,Ge,Fe,me,ue,z,Fn,h,[W.route.id,Le]);Cr.filter(Ae=>Ae.key!==_).forEach(Ae=>{let Jr=Ae.key,ta=N.fetchers.get(Jr),Kl=Di(void 0,ta?ta.data:void 0);N.fetchers.set(Jr,Kl),lr(Jr),Ae.controller&&Q.set(Jr,Ae.controller)}),Ie({fetchers:new Map(N.fetchers)});let br=()=>Cr.forEach(Ae=>lr(Ae.key));Ee.signal.addEventListener("abort",br);let{loaderResults:so,fetcherResults:De}=await Ko(N,sr,Mr,Cr,Fr);if(Ee.signal.aborted)return;Ee.signal.removeEventListener("abort",br),S.delete(_),Q.delete(_),Cr.forEach(Ae=>Q.delete(Ae.key));let Qe=cl(so);if(Qe)return wr(Fr,Qe.result,!1,{preventScrollReset:le});if(Qe=cl(De),Qe)return z.add(Qe.key),wr(Fr,Qe.result,!1,{preventScrollReset:le});let{loaderData:xt,errors:Mn}=$h(N,sr,so,void 0,Cr,De,we);if(N.fetchers.has(_)){let Ae=wn(Le.data);N.fetchers.set(_,Ae)}io(ze),N.navigation.state==="loading"&&ze>Y?(be(J,"Expected pending action"),Z&&Z.abort(),Mt(N.navigation.location,{matches:sr,loaderData:xt,errors:Mn,fetchers:new Map(N.fetchers)})):(Ie({errors:Mn,loaderData:Th(N.loaderData,xt,sr,Mn),fetchers:new Map(N.fetchers)}),Ke=!1)}async function Xi(_,T,O,W,ee,pe,xe,le,ce){let oe=N.fetchers.get(_);It(_,Di(ce,oe?oe.data:void 0),{flushSync:xe});let ae=new AbortController,Ee=Ro(t.history,O,ae.signal);if(pe){let Le=await qr(ee,new URL(Ee.url).pathname,Ee.signal,_);if(Le.type==="aborted")return;if(Le.type==="error"){qt(_,T,Le.error,{flushSync:xe});return}else if(Le.matches)ee=Le.matches,W=zi(ee,O);else{qt(_,T,zt(404,{pathname:O}),{flushSync:xe});return}}Q.set(_,ae);let $e=G,We=(await Gr("loader",N,Ee,[W],ee,_))[W.route.id];if(En(We)&&(We=await Uc(We,Ee.signal,!0)||We),Q.get(_)===ae&&Q.delete(_),!Ee.signal.aborted){if(me.has(_)){It(_,wn(void 0));return}if(Gn(We))if(Y>$e){It(_,wn(void 0));return}else{z.add(_),await wr(Ee,We,!1,{preventScrollReset:le});return}if(Qt(We)){qt(_,T,We.error);return}be(!En(We),"Unhandled fetcher deferred data"),It(_,wn(We.data))}}async function wr(_,T,O,W){let{submission:ee,fetcherSubmission:pe,preventScrollReset:xe,replace:le}=W===void 0?{}:W;T.response.headers.has("X-Remix-Revalidate")&&(Ke=!0);let ce=T.response.headers.get("Location");be(ce,"Expected a Location header on the redirect Response"),ce=kh(ce,new URL(_.url),h);let oe=Ki(N.location,ce,{_isRedirect:!0});if(i){let Le=!1;if(T.response.headers.has("X-Remix-Reload-Document"))Le=!0;else if(Wc.test(ce)){const Xe=t.history.createURL(ce);Le=Xe.origin!==o.location.origin||Uo(Xe.pathname,h)==null}if(Le){le?o.location.replace(ce):o.location.assign(ce);return}}Z=null;let ae=le===!0||T.response.headers.has("X-Remix-Replace")?st.Replace:st.Push,{formMethod:Ee,formAction:$e,formEncType:ct}=N.navigation;!ee&&!pe&&Ee&&$e&&ct&&(ee=Dh(N.navigation));let We=ee||pe;if(Bw.has(T.response.status)&&We&&mr(We.formMethod))await pt(ae,oe,{submission:tt({},We,{formAction:ce}),preventScrollReset:xe||ge,enableViewTransition:O?Te:void 0});else{let Le=Ku(oe,ee);await pt(ae,oe,{overrideNavigation:Le,fetcherSubmission:pe,preventScrollReset:xe||ge,enableViewTransition:O?Te:void 0})}}async function Gr(_,T,O,W,ee,pe){let xe,le={};try{xe=await Gw(v,_,T,O,W,ee,pe,d,u)}catch(ce){return W.forEach(oe=>{le[oe.route.id]={type:Ve.error,error:ce}}),le}for(let[ce,oe]of Object.entries(xe))if(eS(oe)){let ae=oe.result;le[ce]={type:Ve.redirect,response:qw(ae,O,ce,ee,h,g.v7_relativeSplatPath)}}else le[ce]=await Xw(oe);return le}async function Ko(_,T,O,W,ee){let pe=_.matches,xe=Gr("loader",_,ee,O,T,null),le=Promise.all(W.map(async ae=>{if(ae.matches&&ae.match&&ae.controller){let $e=(await Gr("loader",_,Ro(t.history,ae.path,ae.controller.signal),[ae.match],ae.matches,ae.key))[ae.match.route.id];return{[ae.key]:$e}}else return Promise.resolve({[ae.key]:{type:Ve.error,error:zt(404,{pathname:ae.path})}})})),ce=await xe,oe=(await le).reduce((ae,Ee)=>Object.assign(ae,Ee),{});return await Promise.all([nS(T,ce,ee.signal,pe,_.loaderData),oS(T,oe,W)]),{loaderResults:ce,fetcherResults:oe}}function Nn(){Ke=!0,Ge.push(..._r()),ue.forEach((_,T)=>{Q.has(T)&&Fe.add(T),lr(T)})}function It(_,T,O){O===void 0&&(O={}),N.fetchers.set(_,T),Ie({fetchers:new Map(N.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function qt(_,T,O,W){W===void 0&&(W={});let ee=Kn(N.matches,T);Sr(_),Ie({errors:{[ee.route.id]:O},fetchers:new Map(N.fetchers)},{flushSync:(W&&W.flushSync)===!0})}function Yr(_){return he.set(_,(he.get(_)||0)+1),me.has(_)&&me.delete(_),N.fetchers.get(_)||Iw}function Sr(_){let T=N.fetchers.get(_);Q.has(_)&&!(T&&T.state==="loading"&&S.has(_))&&lr(_),ue.delete(_),S.delete(_),z.delete(_),g.v7_fetcherPersist&&me.delete(_),Fe.delete(_),N.fetchers.delete(_)}function Vl(_){let T=(he.get(_)||0)-1;T<=0?(he.delete(_),me.add(_),g.v7_fetcherPersist||Sr(_)):he.set(_,T),Ie({fetchers:new Map(N.fetchers)})}function lr(_){let T=Q.get(_);T&&(T.abort(),Q.delete(_))}function Qo(_){for(let T of _){let O=Yr(T),W=wn(O.data);N.fetchers.set(T,W)}}function qi(){let _=[],T=!1;for(let O of z){let W=N.fetchers.get(O);be(W,"Expected fetcher: "+O),W.state==="loading"&&(z.delete(O),_.push(O),T=!0)}return Qo(_),T}function io(_){let T=[];for(let[O,W]of S)if(W<_){let ee=N.fetchers.get(O);be(ee,"Expected fetcher: "+O),ee.state==="loading"&&(lr(O),S.delete(O),T.push(O))}return Qo(T),T.length>0}function Go(_,T){let O=N.blockers.get(_)||bi;return _e.get(_)!==T&&_e.set(_,T),O}function ao(_){N.blockers.delete(_),_e.delete(_)}function Xr(_,T){let O=N.blockers.get(_)||bi;be(O.state==="unblocked"&&T.state==="blocked"||O.state==="blocked"&&T.state==="blocked"||O.state==="blocked"&&T.state==="proceeding"||O.state==="blocked"&&T.state==="unblocked"||O.state==="proceeding"&&T.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+T.state);let W=new Map(N.blockers);W.set(_,T),Ie({blockers:W})}function lo(_){let{currentLocation:T,nextLocation:O,historyAction:W}=_;if(_e.size===0)return;_e.size>1&&Ho(!1,"A router only supports one blocker at a time");let ee=Array.from(_e.entries()),[pe,xe]=ee[ee.length-1],le=N.blockers.get(pe);if(!(le&&le.state==="proceeding")&&xe({currentLocation:T,nextLocation:O,historyAction:W}))return pe}function Er(_){let T=zt(404,{pathname:_}),O=m||f,{matches:W,route:ee}=Mh(O);return _r(),{notFoundMatches:W,route:ee,error:T}}function _r(_){let T=[];return we.forEach((O,W)=>{(!_||_(W))&&(O.cancel(),T.push(W),we.delete(W))}),T}function Ji(_,T,O){if(M=_,b=T,R=O||null,!B&&N.navigation===Vu){B=!0;let W=Xo(N.location,N.matches);W!=null&&Ie({restoreScrollPosition:W})}return()=>{M=null,b=null,R=null}}function Yo(_,T){return R&&R(_,T.map(W=>vw(W,N.loaderData)))||_.key}function Zi(_,T){if(M&&b){let O=Yo(_,T);M[O]=b()}}function Xo(_,T){if(M){let O=Yo(_,T),W=M[O];if(typeof W=="number")return W}return null}function $n(_,T,O){if(y)if(_){if(Object.keys(_[0].params).length>0)return{active:!0,matches:yl(T,O,h,!0)}}else return{active:!0,matches:yl(T,O,h,!0)||[]};return{active:!1,matches:null}}async function qr(_,T,O,W){if(!y)return{type:"success",matches:_};let ee=_;for(;;){let pe=m==null,xe=m||f,le=d;try{await y({signal:O,path:T,matches:ee,fetcherKey:W,patch:(ae,Ee)=>{O.aborted||Ph(ae,Ee,xe,le,u)}})}catch(ae){return{type:"error",error:ae,partialMatches:ee}}finally{pe&&!O.aborted&&(f=[...f])}if(O.aborted)return{type:"aborted"};let ce=Vn(xe,T,h);if(ce)return{type:"success",matches:ce};let oe=yl(xe,T,h,!0);if(!oe||ee.length===oe.length&&ee.every((ae,Ee)=>ae.route.id===oe[Ee].route.id))return{type:"success",matches:null};ee=oe}}function ea(_){d={},m=Nl(_,u,void 0,d)}function Tn(_,T){let O=m==null;Ph(_,T,m||f,d,u),O&&(f=[...f],Ie({}))}return V={get basename(){return h},get future(){return g},get state(){return N},get routes(){return f},get window(){return o},initialize:Me,subscribe:At,enableScrollRestoration:Ji,navigate:Kr,fetch:Qr,revalidate:oo,createHref:_=>t.history.createHref(_),encodeLocation:_=>t.history.encodeLocation(_),getFetcher:Yr,deleteFetcher:Vl,dispose:it,getBlocker:Go,deleteBlocker:ao,patchRoutes:Tn,_internalFetchControllers:Q,_internalActiveDeferreds:we,_internalSetRoutes:ea},V}function Uw(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function xc(t,o,i,l,u,d,f,m){let h,v;if(f){h=[];for(let g of o)if(h.push(g),g.route.id===f){v=g;break}}else h=o,v=o[o.length-1];let y=Hc(u||".",Ic(h,d),Uo(t.pathname,i)||t.pathname,m==="path");if(u==null&&(y.search=t.search,y.hash=t.hash),(u==null||u===""||u===".")&&v){let g=Vc(y.search);if(v.route.index&&!g)y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index";else if(!v.route.index&&g){let w=new URLSearchParams(y.search),k=w.getAll("index");w.delete("index"),k.filter(R=>R).forEach(R=>w.append("index",R));let M=w.toString();y.search=M?"?"+M:""}}return l&&i!=="/"&&(y.pathname=y.pathname==="/"?i:Wr([i,y.pathname])),to(y)}function Sh(t,o,i,l){if(!l||!Uw(l))return{path:i};if(l.formMethod&&!rS(l.formMethod))return{path:i,error:zt(405,{method:l.formMethod})};let u=()=>({path:i,error:zt(400,{type:"invalid-body"})}),d=l.formMethod||"get",f=t?d.toUpperCase():d.toLowerCase(),m=og(i);if(l.body!==void 0){if(l.formEncType==="text/plain"){if(!mr(f))return u();let w=typeof l.body=="string"?l.body:l.body instanceof FormData||l.body instanceof URLSearchParams?Array.from(l.body.entries()).reduce((k,M)=>{let[R,b]=M;return""+k+R+"="+b+`
`},""):String(l.body);return{path:i,submission:{formMethod:f,formAction:m,formEncType:l.formEncType,formData:void 0,json:void 0,text:w}}}else if(l.formEncType==="application/json"){if(!mr(f))return u();try{let w=typeof l.body=="string"?JSON.parse(l.body):l.body;return{path:i,submission:{formMethod:f,formAction:m,formEncType:l.formEncType,formData:void 0,json:w,text:void 0}}}catch{return u()}}}be(typeof FormData=="function","FormData is not available in this environment");let h,v;if(l.formData)h=Sc(l.formData),v=l.formData;else if(l.body instanceof FormData)h=Sc(l.body),v=l.body;else if(l.body instanceof URLSearchParams)h=l.body,v=Nh(h);else if(l.body==null)h=new URLSearchParams,v=new FormData;else try{h=new URLSearchParams(l.body),v=Nh(h)}catch{return u()}let y={formMethod:f,formAction:m,formEncType:l&&l.formEncType||"application/x-www-form-urlencoded",formData:v,json:void 0,text:void 0};if(mr(y.formMethod))return{path:i,submission:y};let g=Pn(i);return o&&g.search&&Vc(g.search)&&h.append("index",""),g.search="?"+h,{path:to(g),submission:y}}function Eh(t,o,i){i===void 0&&(i=!1);let l=t.findIndex(u=>u.route.id===o);return l>=0?t.slice(0,i?l+1:l):t}function _h(t,o,i,l,u,d,f,m,h,v,y,g,w,k,M,R){let b=R?Qt(R[1])?R[1].error:R[1].data:void 0,B=t.createURL(o.location),A=t.createURL(u),j=i;d&&o.errors?j=Eh(i,Object.keys(o.errors)[0],!0):R&&Qt(R[1])&&(j=Eh(i,R[0]));let H=R?R[1].statusCode:void 0,I=f&&H&&H>=400,V=j.filter((J,ge)=>{let{route:Z}=J;if(Z.lazy)return!0;if(Z.loader==null)return!1;if(d)return wc(Z,o.loaderData,o.errors);if(Vw(o.loaderData,o.matches[ge],J)||h.some(Re=>Re===J.route.id))return!0;let Te=o.matches[ge],Pe=J;return Ch(J,tt({currentUrl:B,currentParams:Te.params,nextUrl:A,nextParams:Pe.params},l,{actionResult:b,actionStatus:H,defaultShouldRevalidate:I?!1:m||B.pathname+B.search===A.pathname+A.search||B.search!==A.search||rg(Te,Pe)}))}),N=[];return g.forEach((J,ge)=>{if(d||!i.some(Oe=>Oe.route.id===J.routeId)||y.has(ge))return;let Z=Vn(k,J.path,M);if(!Z){N.push({key:ge,routeId:J.routeId,path:J.path,matches:null,match:null,controller:null});return}let Te=o.fetchers.get(ge),Pe=zi(Z,J.path),Re=!1;w.has(ge)?Re=!1:v.has(ge)?(v.delete(ge),Re=!0):Te&&Te.state!=="idle"&&Te.data===void 0?Re=m:Re=Ch(Pe,tt({currentUrl:B,currentParams:o.matches[o.matches.length-1].params,nextUrl:A,nextParams:i[i.length-1].params},l,{actionResult:b,actionStatus:H,defaultShouldRevalidate:I?!1:m})),Re&&N.push({key:ge,routeId:J.routeId,path:J.path,matches:Z,match:Pe,controller:new AbortController})}),[V,N]}function wc(t,o,i){if(t.lazy)return!0;if(!t.loader)return!1;let l=o!=null&&o[t.id]!==void 0,u=i!=null&&i[t.id]!==void 0;return!l&&u?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!l&&!u}function Vw(t,o,i){let l=!o||i.route.id!==o.route.id,u=t[i.route.id]===void 0;return l||u}function rg(t,o){let i=t.route.path;return t.pathname!==o.pathname||i!=null&&i.endsWith("*")&&t.params["*"]!==o.params["*"]}function Ch(t,o){if(t.route.shouldRevalidate){let i=t.route.shouldRevalidate(o);if(typeof i=="boolean")return i}return o.defaultShouldRevalidate}function Ph(t,o,i,l,u){var d;let f;if(t){let v=l[t];be(v,"No route found to patch children into: routeId = "+t),v.children||(v.children=[]),f=v.children}else f=i;let m=o.filter(v=>!f.some(y=>ng(v,y))),h=Nl(m,u,[t||"_","patch",String(((d=f)==null?void 0:d.length)||"0")],l);f.push(...h)}function ng(t,o){return"id"in t&&"id"in o&&t.id===o.id?!0:t.index===o.index&&t.path===o.path&&t.caseSensitive===o.caseSensitive?(!t.children||t.children.length===0)&&(!o.children||o.children.length===0)?!0:t.children.every((i,l)=>{var u;return(u=o.children)==null?void 0:u.some(d=>ng(i,d))}):!1}async function Kw(t,o,i){if(!t.lazy)return;let l=await t.lazy();if(!t.lazy)return;let u=i[t.id];be(u,"No route found in manifest");let d={};for(let f in l){let h=u[f]!==void 0&&f!=="hasErrorBoundary";Ho(!h,'Route "'+u.id+'" has a static property "'+f+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+f+'" will be ignored.')),!h&&!gw.has(f)&&(d[f]=l[f])}Object.assign(u,d),Object.assign(u,tt({},o(u),{lazy:void 0}))}async function Qw(t){let{matches:o}=t,i=o.filter(u=>u.shouldLoad);return(await Promise.all(i.map(u=>u.resolve()))).reduce((u,d,f)=>Object.assign(u,{[i[f].route.id]:d}),{})}async function Gw(t,o,i,l,u,d,f,m,h,v){let y=d.map(k=>k.route.lazy?Kw(k.route,h,m):void 0),g=d.map((k,M)=>{let R=y[M],b=u.some(A=>A.route.id===k.route.id);return tt({},k,{shouldLoad:b,resolve:async A=>(A&&l.method==="GET"&&(k.route.lazy||k.route.loader)&&(b=!0),b?Yw(o,l,k,R,A,v):Promise.resolve({type:Ve.data,result:void 0}))})}),w=await t({matches:g,request:l,params:d[0].params,fetcherKey:f,context:v});try{await Promise.all(y)}catch{}return w}async function Yw(t,o,i,l,u,d){let f,m,h=v=>{let y,g=new Promise((M,R)=>y=R);m=()=>y(),o.signal.addEventListener("abort",m);let w=M=>typeof v!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+i.route.id+"]"))):v({request:o,params:i.params,context:d},...M!==void 0?[M]:[]),k=(async()=>{try{return{type:"data",result:await(u?u(R=>w(R)):w())}}catch(M){return{type:"error",result:M}}})();return Promise.race([k,g])};try{let v=i.route[t];if(l)if(v){let y,[g]=await Promise.all([h(v).catch(w=>{y=w}),l]);if(y!==void 0)throw y;f=g}else if(await l,v=i.route[t],v)f=await h(v);else if(t==="action"){let y=new URL(o.url),g=y.pathname+y.search;throw zt(405,{method:o.method,pathname:g,routeId:i.route.id})}else return{type:Ve.data,result:void 0};else if(v)f=await h(v);else{let y=new URL(o.url),g=y.pathname+y.search;throw zt(404,{pathname:g})}be(f.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+i.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){return{type:Ve.error,result:v}}finally{m&&o.signal.removeEventListener("abort",m)}return f}async function Xw(t){let{result:o,type:i}=t;if(ig(o)){let g;try{let w=o.headers.get("Content-Type");w&&/\bapplication\/json\b/.test(w)?o.body==null?g=null:g=await o.json():g=await o.text()}catch(w){return{type:Ve.error,error:w}}return i===Ve.error?{type:Ve.error,error:new $l(o.status,o.statusText,g),statusCode:o.status,headers:o.headers}:{type:Ve.data,data:g,statusCode:o.status,headers:o.headers}}if(i===Ve.error){if(bh(o)){var l,u;if(o.data instanceof Error){var d,f;return{type:Ve.error,error:o.data,statusCode:(d=o.init)==null?void 0:d.status,headers:(f=o.init)!=null&&f.headers?new Headers(o.init.headers):void 0}}return{type:Ve.error,error:new $l(((l=o.init)==null?void 0:l.status)||500,void 0,o.data),statusCode:Qi(o)?o.status:void 0,headers:(u=o.init)!=null&&u.headers?new Headers(o.init.headers):void 0}}return{type:Ve.error,error:o,statusCode:Qi(o)?o.status:void 0}}if(tS(o)){var m,h;return{type:Ve.deferred,deferredData:o,statusCode:(m=o.init)==null?void 0:m.status,headers:((h=o.init)==null?void 0:h.headers)&&new Headers(o.init.headers)}}if(bh(o)){var v,y;return{type:Ve.data,data:o.data,statusCode:(v=o.init)==null?void 0:v.status,headers:(y=o.init)!=null&&y.headers?new Headers(o.init.headers):void 0}}return{type:Ve.data,data:o}}function qw(t,o,i,l,u,d){let f=t.headers.get("Location");if(be(f,"Redirects returned/thrown from loaders/actions must have a Location header"),!Wc.test(f)){let m=l.slice(0,l.findIndex(h=>h.route.id===i)+1);f=xc(new URL(o.url),m,u,!0,f,d),t.headers.set("Location",f)}return t}function kh(t,o,i){if(Wc.test(t)){let l=t,u=l.startsWith("//")?new URL(o.protocol+l):new URL(l),d=Uo(u.pathname,i)!=null;if(u.origin===o.origin&&d)return u.pathname+u.search+u.hash}return t}function Ro(t,o,i,l){let u=t.createURL(og(o)).toString(),d={signal:i};if(l&&mr(l.formMethod)){let{formMethod:f,formEncType:m}=l;d.method=f.toUpperCase(),m==="application/json"?(d.headers=new Headers({"Content-Type":m}),d.body=JSON.stringify(l.json)):m==="text/plain"?d.body=l.text:m==="application/x-www-form-urlencoded"&&l.formData?d.body=Sc(l.formData):d.body=l.formData}return new Request(u,d)}function Sc(t){let o=new URLSearchParams;for(let[i,l]of t.entries())o.append(i,typeof l=="string"?l:l.name);return o}function Nh(t){let o=new FormData;for(let[i,l]of t.entries())o.append(i,l);return o}function Jw(t,o,i,l,u){let d={},f=null,m,h=!1,v={},y=i&&Qt(i[1])?i[1].error:void 0;return t.forEach(g=>{if(!(g.route.id in o))return;let w=g.route.id,k=o[w];if(be(!Gn(k),"Cannot handle redirect results in processLoaderData"),Qt(k)){let M=k.error;y!==void 0&&(M=y,y=void 0),f=f||{};{let R=Kn(t,w);f[R.route.id]==null&&(f[R.route.id]=M)}d[w]=void 0,h||(h=!0,m=Qi(k.error)?k.error.status:500),k.headers&&(v[w]=k.headers)}else En(k)?(l.set(w,k.deferredData),d[w]=k.deferredData.data,k.statusCode!=null&&k.statusCode!==200&&!h&&(m=k.statusCode),k.headers&&(v[w]=k.headers)):(d[w]=k.data,k.statusCode&&k.statusCode!==200&&!h&&(m=k.statusCode),k.headers&&(v[w]=k.headers))}),y!==void 0&&i&&(f={[i[0]]:y},d[i[0]]=void 0),{loaderData:d,errors:f,statusCode:m||200,loaderHeaders:v}}function $h(t,o,i,l,u,d,f){let{loaderData:m,errors:h}=Jw(o,i,l,f);return u.forEach(v=>{let{key:y,match:g,controller:w}=v,k=d[y];if(be(k,"Did not find corresponding fetcher result"),!(w&&w.signal.aborted))if(Qt(k)){let M=Kn(t.matches,g?.route.id);h&&h[M.route.id]||(h=tt({},h,{[M.route.id]:k.error})),t.fetchers.delete(y)}else if(Gn(k))be(!1,"Unhandled fetcher revalidation redirect");else if(En(k))be(!1,"Unhandled fetcher deferred data");else{let M=wn(k.data);t.fetchers.set(y,M)}}),{loaderData:m,errors:h}}function Th(t,o,i,l){let u=tt({},o);for(let d of i){let f=d.route.id;if(o.hasOwnProperty(f)?o[f]!==void 0&&(u[f]=o[f]):t[f]!==void 0&&d.route.loader&&(u[f]=t[f]),l&&l.hasOwnProperty(f))break}return u}function Fh(t){return t?Qt(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Kn(t,o){return(o?t.slice(0,t.findIndex(l=>l.route.id===o)+1):[...t]).reverse().find(l=>l.route.hasErrorBoundary===!0)||t[0]}function Mh(t){let o=t.length===1?t[0]:t.find(i=>i.index||!i.path||i.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:o}],route:o}}function zt(t,o){let{pathname:i,routeId:l,method:u,type:d,message:f}=o===void 0?{}:o,m="Unknown Server Error",h="Unknown @remix-run/router error";return t===400?(m="Bad Request",u&&i&&l?h="You made a "+u+' request to "'+i+'" but '+('did not provide a `loader` for route "'+l+'", ')+"so there is no way to handle the request.":d==="defer-action"?h="defer() is not supported in actions":d==="invalid-body"&&(h="Unable to encode submission body")):t===403?(m="Forbidden",h='Route "'+l+'" does not match URL "'+i+'"'):t===404?(m="Not Found",h='No route matches URL "'+i+'"'):t===405&&(m="Method Not Allowed",u&&i&&l?h="You made a "+u.toUpperCase()+' request to "'+i+'" but '+('did not provide an `action` for route "'+l+'", ')+"so there is no way to handle the request.":u&&(h='Invalid request method "'+u.toUpperCase()+'"')),new $l(t||500,m,new Error(h),!0)}function cl(t){let o=Object.entries(t);for(let i=o.length-1;i>=0;i--){let[l,u]=o[i];if(Gn(u))return{key:l,result:u}}}function og(t){let o=typeof t=="string"?Pn(t):t;return to(tt({},o,{hash:""}))}function Zw(t,o){return t.pathname!==o.pathname||t.search!==o.search?!1:t.hash===""?o.hash!=="":t.hash===o.hash?!0:o.hash!==""}function eS(t){return ig(t.result)&&Aw.has(t.result.status)}function En(t){return t.type===Ve.deferred}function Qt(t){return t.type===Ve.error}function Gn(t){return(t&&t.type)===Ve.redirect}function bh(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function tS(t){let o=t;return o&&typeof o=="object"&&typeof o.data=="object"&&typeof o.subscribe=="function"&&typeof o.cancel=="function"&&typeof o.resolveData=="function"}function ig(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function rS(t){return zw.has(t.toLowerCase())}function mr(t){return Ow.has(t.toLowerCase())}async function nS(t,o,i,l,u){let d=Object.entries(o);for(let f=0;f<d.length;f++){let[m,h]=d[f],v=t.find(w=>w?.route.id===m);if(!v)continue;let y=l.find(w=>w.route.id===v.route.id),g=y!=null&&!rg(y,v)&&(u&&u[v.route.id])!==void 0;En(h)&&g&&await Uc(h,i,!1).then(w=>{w&&(o[m]=w)})}}async function oS(t,o,i){for(let l=0;l<i.length;l++){let{key:u,routeId:d,controller:f}=i[l],m=o[u];t.find(v=>v?.route.id===d)&&En(m)&&(be(f,"Expected an AbortController for revalidating fetcher deferred result"),await Uc(m,f.signal,!0).then(v=>{v&&(o[u]=v)}))}}async function Uc(t,o,i){if(i===void 0&&(i=!1),!await t.deferredData.resolveData(o)){if(i)try{return{type:Ve.data,data:t.deferredData.unwrappedData}}catch(u){return{type:Ve.error,error:u}}return{type:Ve.data,data:t.deferredData.data}}}function Vc(t){return new URLSearchParams(t).getAll("index").some(o=>o==="")}function zi(t,o){let i=typeof o=="string"?Pn(o).search:o.search;if(t[t.length-1].route.index&&Vc(i||""))return t[t.length-1];let l=Zm(t);return l[l.length-1]}function Dh(t){let{formMethod:o,formAction:i,formEncType:l,text:u,formData:d,json:f}=t;if(!(!o||!i||!l)){if(u!=null)return{formMethod:o,formAction:i,formEncType:l,formData:void 0,json:void 0,text:u};if(d!=null)return{formMethod:o,formAction:i,formEncType:l,formData:d,json:void 0,text:void 0};if(f!==void 0)return{formMethod:o,formAction:i,formEncType:l,formData:void 0,json:f,text:void 0}}}function Ku(t,o){return o?{state:"loading",location:t,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function iS(t,o){return{state:"submitting",location:t,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}}function Di(t,o){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:o}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:o}}function aS(t,o){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:o?o.data:void 0}}function wn(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function lS(t,o){try{let i=t.sessionStorage.getItem(tg);if(i){let l=JSON.parse(i);for(let[u,d]of Object.entries(l||{}))d&&Array.isArray(d)&&o.set(u,new Set(d||[]))}}catch{}}function sS(t,o){if(o.size>0){let i={};for(let[l,u]of o)i[l]=[...u];try{t.sessionStorage.setItem(tg,JSON.stringify(i))}catch(l){Ho(!1,"Failed to save applied view transitions in sessionStorage ("+l+").")}}}/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},Tl.apply(this,arguments)}const Hl=E.createContext(null),ag=E.createContext(null),no=E.createContext(null),Kc=E.createContext(null),kn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),lg=E.createContext(null);function uS(t,o){let{relative:i}=o===void 0?{}:o;Yi()||be(!1);let{basename:l,navigator:u}=E.useContext(no),{hash:d,pathname:f,search:m}=ug(t,{relative:i}),h=f;return l!=="/"&&(h=f==="/"?l:Wr([l,f])),u.createHref({pathname:h,search:m,hash:d})}function Yi(){return E.useContext(Kc)!=null}function Wl(){return Yi()||be(!1),E.useContext(Kc).location}function sg(t){E.useContext(no).static||E.useLayoutEffect(t)}function Ul(){let{isDataRoute:t}=E.useContext(kn);return t?ES():cS()}function cS(){Yi()||be(!1);let t=E.useContext(Hl),{basename:o,future:i,navigator:l}=E.useContext(no),{matches:u}=E.useContext(kn),{pathname:d}=Wl(),f=JSON.stringify(Ic(u,i.v7_relativeSplatPath)),m=E.useRef(!1);return sg(()=>{m.current=!0}),E.useCallback(function(v,y){if(y===void 0&&(y={}),!m.current)return;if(typeof v=="number"){l.go(v);return}let g=Hc(v,JSON.parse(f),d,y.relative==="path");t==null&&o!=="/"&&(g.pathname=g.pathname==="/"?o:Wr([o,g.pathname])),(y.replace?l.replace:l.push)(g,y.state,y)},[o,l,f,d,t])}function dS(){let{matches:t}=E.useContext(kn),o=t[t.length-1];return o?o.params:{}}function ug(t,o){let{relative:i}=o===void 0?{}:o,{future:l}=E.useContext(no),{matches:u}=E.useContext(kn),{pathname:d}=Wl(),f=JSON.stringify(Ic(u,l.v7_relativeSplatPath));return E.useMemo(()=>Hc(t,JSON.parse(f),d,i==="path"),[t,f,d,i])}function fS(t,o,i,l){Yi()||be(!1);let{navigator:u}=E.useContext(no),{matches:d}=E.useContext(kn),f=d[d.length-1],m=f?f.params:{};f&&f.pathname;let h=f?f.pathnameBase:"/";f&&f.route;let v=Wl(),y;y=v;let g=y.pathname||"/",w=g;if(h!=="/"){let R=h.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(R.length).join("/")}let k=Vn(t,{pathname:w});return yS(k&&k.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:Wr([h,u.encodeLocation?u.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?h:Wr([h,u.encodeLocation?u.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),d,i,l)}function pS(){let t=SS(),o=Qi(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},o),i?E.createElement("pre",{style:u},i):null,null)}const hS=E.createElement(pS,null);class mS extends E.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,i){return i.location!==o.location||i.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:i.error,location:i.location,revalidation:o.revalidation||i.revalidation}}componentDidCatch(o,i){console.error("React Router caught the following error during render",o,i)}render(){return this.state.error!==void 0?E.createElement(kn.Provider,{value:this.props.routeContext},E.createElement(lg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gS(t){let{routeContext:o,match:i,children:l}=t,u=E.useContext(Hl);return u&&u.static&&u.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=i.route.id),E.createElement(kn.Provider,{value:o},l)}function yS(t,o,i,l){var u;if(o===void 0&&(o=[]),i===void 0&&(i=null),l===void 0&&(l=null),t==null){var d;if(!i)return null;if(i.errors)t=i.matches;else if((d=l)!=null&&d.v7_partialHydration&&o.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let f=t,m=(u=i)==null?void 0:u.errors;if(m!=null){let y=f.findIndex(g=>g.route.id&&m?.[g.route.id]!==void 0);y>=0||be(!1),f=f.slice(0,Math.min(f.length,y+1))}let h=!1,v=-1;if(i&&l&&l.v7_partialHydration)for(let y=0;y<f.length;y++){let g=f[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(v=y),g.route.id){let{loaderData:w,errors:k}=i,M=g.route.loader&&w[g.route.id]===void 0&&(!k||k[g.route.id]===void 0);if(g.route.lazy||M){h=!0,v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}return f.reduceRight((y,g,w)=>{let k,M=!1,R=null,b=null;i&&(k=m&&g.route.id?m[g.route.id]:void 0,R=g.route.errorElement||hS,h&&(v<0&&w===0?(_S("route-fallback"),M=!0,b=null):v===w&&(M=!0,b=g.route.hydrateFallbackElement||null)));let B=o.concat(f.slice(0,w+1)),A=()=>{let j;return k?j=R:M?j=b:g.route.Component?j=E.createElement(g.route.Component,null):g.route.element?j=g.route.element:j=y,E.createElement(gS,{match:g,routeContext:{outlet:y,matches:B,isDataRoute:i!=null},children:j})};return i&&(g.route.ErrorBoundary||g.route.errorElement||w===0)?E.createElement(mS,{location:i.location,revalidation:i.revalidation,component:R,error:k,children:A(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):A()},null)}var cg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(cg||{}),dg=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(dg||{});function vS(t){let o=E.useContext(Hl);return o||be(!1),o}function xS(t){let o=E.useContext(ag);return o||be(!1),o}function wS(t){let o=E.useContext(kn);return o||be(!1),o}function fg(t){let o=wS(),i=o.matches[o.matches.length-1];return i.route.id||be(!1),i.route.id}function SS(){var t;let o=E.useContext(lg),i=xS(dg.UseRouteError),l=fg();return o!==void 0?o:(t=i.errors)==null?void 0:t[l]}function ES(){let{router:t}=vS(cg.UseNavigateStable),o=fg(),i=E.useRef(!1);return sg(()=>{i.current=!0}),E.useCallback(function(u,d){d===void 0&&(d={}),i.current&&(typeof u=="number"?t.navigate(u):t.navigate(u,Tl({fromRouteId:o},d)))},[t,o])}const Rh={};function _S(t,o,i){Rh[t]||(Rh[t]=!0)}function CS(t,o){t?.v7_startTransition,t?.v7_relativeSplatPath===void 0&&(!o||o.v7_relativeSplatPath),o&&(o.v7_fetcherPersist,o.v7_normalizeFormMethod,o.v7_partialHydration,o.v7_skipActionErrorRevalidation)}function PS(t){let{basename:o="/",children:i=null,location:l,navigationType:u=st.Pop,navigator:d,static:f=!1,future:m}=t;Yi()&&be(!1);let h=o.replace(/^\/*/,"/"),v=E.useMemo(()=>({basename:h,navigator:d,static:f,future:Tl({v7_relativeSplatPath:!1},m)}),[h,m,d,f]);typeof l=="string"&&(l=Pn(l));let{pathname:y="/",search:g="",hash:w="",state:k=null,key:M="default"}=l,R=E.useMemo(()=>{let b=Uo(y,h);return b==null?null:{location:{pathname:b,search:g,hash:w,state:k,key:M},navigationType:u}},[h,y,g,w,k,M,u]);return R==null?null:E.createElement(no.Provider,{value:v},E.createElement(Kc.Provider,{children:i,value:R}))}new Promise(()=>{});function kS(t){let o={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(o,{element:E.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(o,{hydrateFallbackElement:E.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(o,{errorElement:E.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),o}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gi(){return Gi=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},Gi.apply(this,arguments)}function NS(t,o){if(t==null)return{};var i={},l=Object.keys(t),u,d;for(d=0;d<l.length;d++)u=l[d],!(o.indexOf(u)>=0)&&(i[u]=t[u]);return i}function $S(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function TS(t,o){return t.button===0&&(!o||o==="_self")&&!$S(t)}const FS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],MS="6";try{window.__reactRouterVersion=MS}catch{}function bS(t,o){return Ww({basename:void 0,future:Gi({},void 0,{v7_prependBasename:!0}),history:pw({window:void 0}),hydrationData:DS(),routes:t,mapRouteProperties:kS,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function DS(){var t;let o=(t=window)==null?void 0:t.__staticRouterHydrationData;return o&&o.errors&&(o=Gi({},o,{errors:RS(o.errors)})),o}function RS(t){if(!t)return null;let o=Object.entries(t),i={};for(let[l,u]of o)if(u&&u.__type==="RouteErrorResponse")i[l]=new $l(u.status,u.statusText,u.data,u.internal===!0);else if(u&&u.__type==="Error"){if(u.__subType){let d=window[u.__subType];if(typeof d=="function")try{let f=new d(u.message);f.stack="",i[l]=f}catch{}}if(i[l]==null){let d=new Error(u.message);d.stack="",i[l]=d}}else i[l]=u;return i}const LS=E.createContext({isTransitioning:!1}),OS=E.createContext(new Map),jS="startTransition",Lh=q0[jS],zS="flushSync",Oh=N1[zS];function AS(t){Lh?Lh(t):t()}function Ri(t){Oh?Oh(t):t()}class BS{constructor(){this.status="pending",this.promise=new Promise((o,i)=>{this.resolve=l=>{this.status==="pending"&&(this.status="resolved",o(l))},this.reject=l=>{this.status==="pending"&&(this.status="rejected",i(l))}})}}function IS(t){let{fallbackElement:o,router:i,future:l}=t,[u,d]=E.useState(i.state),[f,m]=E.useState(),[h,v]=E.useState({isTransitioning:!1}),[y,g]=E.useState(),[w,k]=E.useState(),[M,R]=E.useState(),b=E.useRef(new Map),{v7_startTransition:B}=l||{},A=E.useCallback(J=>{B?AS(J):J()},[B]),j=E.useCallback((J,ge)=>{let{deletedFetchers:Z,flushSync:Te,viewTransitionOpts:Pe}=ge;J.fetchers.forEach((Oe,Ke)=>{Oe.data!==void 0&&b.current.set(Ke,Oe.data)}),Z.forEach(Oe=>b.current.delete(Oe));let Re=i.window==null||i.window.document==null||typeof i.window.document.startViewTransition!="function";if(!Pe||Re){Te?Ri(()=>d(J)):A(()=>d(J));return}if(Te){Ri(()=>{w&&(y&&y.resolve(),w.skipTransition()),v({isTransitioning:!0,flushSync:!0,currentLocation:Pe.currentLocation,nextLocation:Pe.nextLocation})});let Oe=i.window.document.startViewTransition(()=>{Ri(()=>d(J))});Oe.finished.finally(()=>{Ri(()=>{g(void 0),k(void 0),m(void 0),v({isTransitioning:!1})})}),Ri(()=>k(Oe));return}w?(y&&y.resolve(),w.skipTransition(),R({state:J,currentLocation:Pe.currentLocation,nextLocation:Pe.nextLocation})):(m(J),v({isTransitioning:!0,flushSync:!1,currentLocation:Pe.currentLocation,nextLocation:Pe.nextLocation}))},[i.window,w,y,b,A]);E.useLayoutEffect(()=>i.subscribe(j),[i,j]),E.useEffect(()=>{h.isTransitioning&&!h.flushSync&&g(new BS)},[h]),E.useEffect(()=>{if(y&&f&&i.window){let J=f,ge=y.promise,Z=i.window.document.startViewTransition(async()=>{A(()=>d(J)),await ge});Z.finished.finally(()=>{g(void 0),k(void 0),m(void 0),v({isTransitioning:!1})}),k(Z)}},[A,f,y,i.window]),E.useEffect(()=>{y&&f&&u.location.key===f.location.key&&y.resolve()},[y,w,u.location,f]),E.useEffect(()=>{!h.isTransitioning&&M&&(m(M.state),v({isTransitioning:!0,flushSync:!1,currentLocation:M.currentLocation,nextLocation:M.nextLocation}),R(void 0))},[h.isTransitioning,M]),E.useEffect(()=>{},[]);let H=E.useMemo(()=>({createHref:i.createHref,encodeLocation:i.encodeLocation,go:J=>i.navigate(J),push:(J,ge,Z)=>i.navigate(J,{state:ge,preventScrollReset:Z?.preventScrollReset}),replace:(J,ge,Z)=>i.navigate(J,{replace:!0,state:ge,preventScrollReset:Z?.preventScrollReset})}),[i]),I=i.basename||"/",V=E.useMemo(()=>({router:i,navigator:H,static:!1,basename:I}),[i,H,I]),N=E.useMemo(()=>({v7_relativeSplatPath:i.future.v7_relativeSplatPath}),[i.future.v7_relativeSplatPath]);return E.useEffect(()=>CS(l,i.future),[l,i.future]),E.createElement(E.Fragment,null,E.createElement(Hl.Provider,{value:V},E.createElement(ag.Provider,{value:u},E.createElement(OS.Provider,{value:b.current},E.createElement(LS.Provider,{value:h},E.createElement(PS,{basename:I,location:u.location,navigationType:u.historyAction,navigator:H,future:N},u.initialized||i.future.v7_partialHydration?E.createElement(HS,{routes:i.routes,future:i.future,state:u}):o))))),null)}const HS=E.memo(WS);function WS(t){let{routes:o,future:i,state:l}=t;return fS(o,void 0,l,i)}const US=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",VS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,KS=E.forwardRef(function(o,i){let{onClick:l,relative:u,reloadDocument:d,replace:f,state:m,target:h,to:v,preventScrollReset:y,viewTransition:g}=o,w=NS(o,FS),{basename:k}=E.useContext(no),M,R=!1;if(typeof v=="string"&&VS.test(v)&&(M=v,US))try{let j=new URL(window.location.href),H=v.startsWith("//")?new URL(j.protocol+v):new URL(v),I=Uo(H.pathname,k);H.origin===j.origin&&I!=null?v=I+H.search+H.hash:R=!0}catch{}let b=uS(v,{relative:u}),B=QS(v,{replace:f,state:m,target:h,preventScrollReset:y,relative:u,viewTransition:g});function A(j){l&&l(j),j.defaultPrevented||B(j)}return E.createElement("a",Gi({},w,{href:M||b,onClick:R||d?l:A,ref:i,target:h}))});var jh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(jh||(jh={}));var zh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(zh||(zh={}));function QS(t,o){let{target:i,replace:l,state:u,preventScrollReset:d,relative:f,viewTransition:m}=o===void 0?{}:o,h=Ul(),v=Wl(),y=ug(t,{relative:f});return E.useCallback(g=>{if(TS(g,i)){g.preventDefault();let w=l!==void 0?l:to(v)===to(y);h(t,{replace:w,state:u,preventScrollReset:d,relative:f,viewTransition:m})}},[v,h,y,l,u,i,t,d,f,m])}const GS=te.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  min-width: 260px;
  height: 100%;
  margin-bottom: 20px; /* Добавлен внешний отступ для разделения карточек */
`,YS=te.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,XS=te.div`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  justify-content: flex-start;
  min-width: 0;
`,qS=te.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-end;
`,JS=te.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #888;
  font-size: 0.95em;
`,ZS=({task:t,language:o="ru",dict:i,onEdit:l,onDelete:u})=>{const d=Ul(),f=t.status==="todo"?"warning":t.status==="in_progress"?"attention":"success",m=t.priority==="high"?"error":t.priority==="medium"?"warning":"success",h="neutral",v={ru:{todo:"Ожидает",in_progress:"В работе",done:"Выполнено"},en:{todo:"To Do",in_progress:"In Progress",done:"Done"}},y={ru:{high:"Высокий",medium:"Средний",low:"Низкий"},en:{high:"High",medium:"Medium",low:"Low"}},g={ru:{bug:"Баг",feature:"Функция",documentation:"Документация",refactor:"Рефакторинг",test:"Тест"},en:{bug:"Bug",feature:"Feature",documentation:"Documentation",refactor:"Refactor",test:"Test"}};return P.jsxs(GS,{onClick:()=>d(`/task/${t.id}`),style:{cursor:"pointer"},children:[P.jsxs(YS,{children:[P.jsx(or,{font:"Subtitle/Subtitle 1",style:{color:"#111"},children:t.title}),t.description&&P.jsx(or,{font:"Body/Body 1 Short",as:"p",style:{color:"#111"},children:t.description}),P.jsxs(JS,{children:[P.jsx("span",{role:"img","aria-label":"calendar",children:"📅"}),i&&i.dateLabel?i.dateLabel+": ":"",t.dueDate?new Date(t.dueDate).toLocaleString():new Date(t.createdAt).toLocaleString()]}),P.jsxs(XS,{children:[P.jsx(gl,{kind:f,children:v[o][t.status]||t.status}),P.jsx(gl,{kind:h,children:g[o][t.category]||t.category}),P.jsx(gl,{kind:m,children:y[o][t.priority]||t.priority})]})]}),P.jsx(qS,{onClick:w=>w.stopPropagation(),children:P.jsx(vr,{dimension:"s",appearance:"danger",onClick:()=>u&&u(t.id),children:"🗑️"})})]})},eE=te.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px 24px;
  justify-content: center;
  align-items: stretch;
  margin: 32px 0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px 12px;
    margin: 20px 0;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px 0;
    margin: 12px 0;
  }
`,tE=({tasks:t,language:o="ru",dict:i,onEdit:l,onDelete:u})=>t.length===0?P.jsx("div",{style:{textAlign:"center",color:"#888",margin:"40px 0"},children:o==="ru"?"Нет задач":"No tasks"}):P.jsx(eE,{children:t.map(d=>P.jsx(ZS,{task:d,language:o,dict:i,onEdit:l,onDelete:u},d.id))}),Qu={padding:8,borderRadius:8,border:"1px solid #ccc",marginBottom:8},rE=({open:t,onClose:o,task:i,onChange:l,onSave:u,language:d,dict:f})=>P.jsx(Xm,{open:t,onClose:o,style:{maxWidth:520},children:P.jsxs("div",{style:{padding:32,display:"flex",flexDirection:"column",gap:20},children:[P.jsx(or,{font:"Header/H2",style:{marginBottom:8},children:d==="ru"?"Редактировать задачу":"Edit Task"}),P.jsx(eo,{label:d==="ru"?"Задача *":"Task *",value:i.title,onChange:m=>l("title",m.target.value),placeholder:d==="ru"?"Заголовок":"Title",style:{marginBottom:8}}),P.jsx(eo,{label:d==="ru"?"Описание":"Description",value:i.description||"",onChange:m=>l("description",m.target.value),placeholder:d==="ru"?"Описание":"Description",style:{marginBottom:8}}),P.jsx(or,{font:"Caption/Caption 1",children:d==="ru"?"Категория":"Category"}),P.jsxs("select",{value:i.category,onChange:m=>l("category",m.target.value),style:Qu,children:[P.jsx("option",{value:"bug",children:d==="ru"?"Баг":"Bug"}),P.jsx("option",{value:"feature",children:d==="ru"?"Функция":"Feature"}),P.jsx("option",{value:"documentation",children:d==="ru"?"Документация":"Documentation"}),P.jsx("option",{value:"refactor",children:d==="ru"?"Рефакторинг":"Refactor"}),P.jsx("option",{value:"test",children:d==="ru"?"Тест":"Test"})]}),P.jsx(or,{font:"Caption/Caption 1",children:d==="ru"?"Статус":"Status"}),P.jsxs("select",{value:i.status,onChange:m=>l("status",m.target.value),style:Qu,children:[P.jsx("option",{value:"todo",children:d==="ru"?"Ожидает":"To Do"}),P.jsx("option",{value:"in_progress",children:d==="ru"?"В работе":"In Progress"}),P.jsx("option",{value:"done",children:d==="ru"?"Выполнено":"Done"})]}),P.jsx(or,{font:"Caption/Caption 1",children:d==="ru"?"Приоритет":"Priority"}),P.jsxs("select",{value:i.priority,onChange:m=>l("priority",m.target.value),style:Qu,children:[P.jsx("option",{value:"low",children:d==="ru"?"Низкий":"Low"}),P.jsx("option",{value:"medium",children:d==="ru"?"Средний":"Medium"}),P.jsx("option",{value:"high",children:d==="ru"?"Высокий":"High"})]}),P.jsxs("div",{style:{display:"flex",gap:16,justifyContent:"flex-end",marginTop:24},children:[P.jsx(vr,{dimension:"s",appearance:"secondary",onClick:o,children:d==="ru"?"Отмена":"Cancel"}),P.jsx(vr,{dimension:"s",onClick:u,disabled:!i.title.trim(),children:d==="ru"?"Сохранить":"Save"})]})]})}),nE=te.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
  &.filters-bar {}
  @media (max-width: 900px) {
    gap: 10px;
    margin-bottom: 16px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    margin-bottom: 10px;
  }
`,oE=te.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    gap: 12px;
    margin-bottom: 16px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }
  & > button {
    width: 260px;
    min-width: 0;
    white-space: normal;
    text-align: center;
    padding: 0 16px;
  }
`,iE=te.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1em;
  width: 170px;
`,Gu=te.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1em;
  width: 140px;
`;function aE({dict:t,language:o}){const{tasks:i,loading:l,error:u}=Uh(Z=>Z.tasks),d=Cc(),[f,m]=E.useState(""),[h,v]=E.useState(""),[y,g]=E.useState(""),[w,k]=E.useState(""),[M,R]=E.useState(null),[b,B]=E.useState(null);E.useEffect(()=>{},[]);const A=Z=>{d(rc(Z))},j=(Z,Te)=>{B(Pe=>Pe&&{...Pe,[Z]:Te})},H=()=>{b&&(d(rc(b)),R(null),B(null))},I=()=>{R(null),B(null)},V=Z=>{d(cv(Z))},N=()=>{d(dv())},J=()=>{d(fv())},ge=i.filter(Z=>(!f||Z.title.toLowerCase().includes(f.toLowerCase()))&&(!h||Z.status===h)&&(!y||Z.category===y)&&(!w||Z.priority===w));return P.jsxs("div",{className:"main-container",children:[P.jsx(or,{font:"Subtitle/Subtitle 1",children:t.title}),P.jsx(or,{font:"Body/Body 1 Short",children:t.subtitle}),P.jsxs(oE,{children:[P.jsx(vr,{dimension:"m",appearance:"secondary",onClick:N,style:{whiteSpace:"normal"},children:t.restore}),P.jsx(vr,{dimension:"m",appearance:"danger",onClick:J,style:{whiteSpace:"normal"},children:t.deleteAll}),P.jsx(KS,{to:"/task/new",style:{textDecoration:"none"},children:P.jsx(vr,{dimension:"m",appearance:"primary",style:{whiteSpace:"normal"},children:t.add})})]}),P.jsxs(nE,{className:"filters-bar",children:[P.jsx(iE,{type:"text",placeholder:t.search,value:f,onChange:Z=>m(Z.target.value)}),P.jsxs(Gu,{value:h,onChange:Z=>v(Z.target.value),children:[P.jsx("option",{value:"",children:t.status}),P.jsx("option",{value:"todo",children:t.statusTodo}),P.jsx("option",{value:"in_progress",children:t.statusInProgress}),P.jsx("option",{value:"done",children:t.statusDone})]}),P.jsxs(Gu,{value:y,onChange:Z=>g(Z.target.value),children:[P.jsx("option",{value:"",children:t.category}),P.jsx("option",{value:"bug",children:t.categoryBug}),P.jsx("option",{value:"feature",children:t.categoryFeature}),P.jsx("option",{value:"documentation",children:t.categoryDocumentation}),P.jsx("option",{value:"refactor",children:t.categoryRefactor}),P.jsx("option",{value:"test",children:t.categoryTest})]}),P.jsxs(Gu,{value:w,onChange:Z=>k(Z.target.value),children:[P.jsx("option",{value:"",children:t.priority}),P.jsx("option",{value:"low",children:t.priorityLow}),P.jsx("option",{value:"medium",children:t.priorityMedium}),P.jsx("option",{value:"high",children:t.priorityHigh})]})]}),P.jsx(tE,{tasks:ge,language:o,dict:t,onEdit:A,onDelete:V}),M&&b&&P.jsx(rE,{open:!!M,onClose:I,task:b,onChange:j,onSave:H,language:o,dict:t})]})}const lE=te.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,sE=({dict:t,language:o})=>{const{id:i}=dS(),l=Ul(),u=Cc(),f=Uh(g=>g.tasks.tasks).find(g=>g.id===i),[m,h]=E.useState(null);if(E.useEffect(()=>{f&&h(f)},[f]),!m)return P.jsx(or,{font:"Body/Body 1 Short",children:"Задача не найдена"});const v=(g,w)=>{h(k=>k&&{...k,[g]:w})},y=()=>{m&&(u(rc(m)),l("/"))};return P.jsxs(lE,{children:[P.jsx(or,{font:"Subtitle/Subtitle 1",children:"Редактирование задачи"}),P.jsx(eo,{value:m.title,onChange:g=>v("title",g.target.value),placeholder:"Заголовок"}),P.jsx(eo,{value:m.description||"",onChange:g=>v("description",g.target.value),placeholder:"Описание"}),P.jsxs("select",{value:m.category,onChange:g=>v("category",g.target.value),children:[P.jsx("option",{value:"bug",children:o==="ru"?"Баг":"Bug"}),P.jsx("option",{value:"feature",children:o==="ru"?"Функция":"Feature"}),P.jsx("option",{value:"documentation",children:o==="ru"?"Документация":"Documentation"}),P.jsx("option",{value:"refactor",children:o==="ru"?"Рефакторинг":"Refactor"}),P.jsx("option",{value:"test",children:o==="ru"?"Тест":"Test"})]}),P.jsxs("select",{value:m.status,onChange:g=>v("status",g.target.value),children:[P.jsx("option",{value:"todo",children:o==="ru"?"Ожидает":"To Do"}),P.jsx("option",{value:"in_progress",children:o==="ru"?"В работе":"In Progress"}),P.jsx("option",{value:"done",children:o==="ru"?"Выполнено":"Done"})]}),P.jsxs("select",{value:m.priority,onChange:g=>v("priority",g.target.value),children:[P.jsx("option",{value:"low",children:o==="ru"?"Низкий":"Low"}),P.jsx("option",{value:"medium",children:o==="ru"?"Средний":"Medium"}),P.jsx("option",{value:"high",children:o==="ru"?"Высокий":"High"})]}),P.jsxs("div",{style:{display:"flex",gap:12},children:[P.jsx(vr,{dimension:"s",onClick:y,children:"Сохранить"}),P.jsx(vr,{dimension:"s",appearance:"secondary",onClick:()=>l("/"),children:"Отмена"})]})]})},uE=te.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,cE=({dict:t,language:o})=>{const i=Cc(),l=Ul(),[u,d]=E.useState({title:"",description:"",category:"bug",status:"todo",priority:"medium"}),f=(h,v)=>{d(y=>({...y,[h]:v}))},m=()=>{i(createTaskAsync(u)),l("/")};return P.jsxs(uE,{children:[P.jsx(or,{font:"Subtitle/Subtitle 1",children:o==="ru"?"Создать задачу":"Create Task"}),P.jsx(eo,{value:u.title,onChange:h=>f("title",h.target.value),placeholder:o==="ru"?"Заголовок":"Title"}),P.jsx(eo,{value:u.description||"",onChange:h=>f("description",h.target.value),placeholder:o==="ru"?"Описание":"Description"}),P.jsxs("select",{value:u.category,onChange:h=>f("category",h.target.value),children:[P.jsx("option",{value:"bug",children:o==="ru"?"Баг":"Bug"}),P.jsx("option",{value:"feature",children:o==="ru"?"Функция":"Feature"}),P.jsx("option",{value:"documentation",children:o==="ru"?"Документация":"Documentation"}),P.jsx("option",{value:"refactor",children:o==="ru"?"Рефакторинг":"Refactor"}),P.jsx("option",{value:"test",children:o==="ru"?"Тест":"Test"})]}),P.jsxs("select",{value:u.status,onChange:h=>f("status",h.target.value),children:[P.jsx("option",{value:"todo",children:o==="ru"?"Ожидает":"To Do"}),P.jsx("option",{value:"in_progress",children:o==="ru"?"В работе":"In Progress"}),P.jsx("option",{value:"done",children:o==="ru"?"Выполнено":"Done"})]}),P.jsxs("select",{value:u.priority,onChange:h=>f("priority",h.target.value),children:[P.jsx("option",{value:"low",children:o==="ru"?"Низкий":"Low"}),P.jsx("option",{value:"medium",children:o==="ru"?"Средний":"Medium"}),P.jsx("option",{value:"high",children:o==="ru"?"Высокий":"High"})]}),P.jsxs("div",{style:{display:"flex",gap:12},children:[P.jsx(vr,{dimension:"s",onClick:m,disabled:!u.title.trim(),children:o==="ru"?"Создать":"Create"}),P.jsx(vr,{dimension:"s",appearance:"secondary",onClick:()=>l("/"),children:o==="ru"?"Отмена":"Cancel"})]})]})};function dE(t,o){return bS([{path:"/",element:P.jsx(aE,{dict:t,language:o})},{path:"/task/new",element:P.jsx(cE,{dict:t,language:o})},{path:"/task/:id",element:P.jsx(sE,{dict:t,language:o})}])}const fE=te.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  background:rgb(56, 159, 255);
  height: 60px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 2px 8px rgba(44, 19, 80, 0.10);
  padding: 0 32px;
  @media (max-width: 900px) {
    padding: 0 8px;
    height: 54px;
  }
  @media (max-width: 600px) {
    padding: 0 4px;
    height: 48px;
  }
`,pE=te.div`
  display: flex;
  align-items: center;
  margin-right: 18px;
`,hE=te.img`
  width: 32px;
  height: 32px;
`,mE=te.div`
  display: flex;
  align-items: center;
  background: #f3f3fa;
  border-radius: 8px;
  padding: 0 10px;
  flex: 1;
  min-width: 0;
  max-width: 420px;
  margin-right: 16px;
  transition: box-shadow 0.2s;
  box-shadow: 0 1px 4px rgba(44, 19, 80, 0.04);
  &:focus-within {
    box-shadow: 0 2px 8px rgba(44, 19, 80, 0.12);
  }
  @media (max-width: 900px) {
    max-width: 220px;
    margin-right: 6px;
    padding: 0 6px;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    margin-right: 0;
    padding: 0 4px;
  }
`,gE=te.input`
  border: none;
  outline: none;
  background: none;
  flex: 1;
  font-size: 1em;
  color: #333;
  &::placeholder {
    color: #999;
  }
  @media (max-width: 900px) {
    font-size: 0.9em;
  }
  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`,Ah=te.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5em;
  margin-left: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.15s;
  border-radius: 50%;
  padding: 6px;
  &:hover {
    background: rgba(255,255,255,0.10);
  }
  @media (max-width: 900px) {
    margin-left: 8px;
    padding: 4px;
  }
  @media (max-width: 600px) {
    margin-left: 4px;
    padding: 2px;
    font-size: 1.2em;
  }
`,Yu=te.img`
  width: 22px;
  height: 22px;
`,yE=te.span`
  background: #e5e0fa;
  color:rgb(0, 0, 0);
  border-radius: 6px;
  font-size: 0.9em;
  padding: 2px 8px;
  margin-left: 8px;
`,vE=({theme:t,onToggleTheme:o,language:i,onToggleLanguage:l,dict:u})=>{const[d,f]=E.useState("");return P.jsxs(fE,{children:[P.jsx(pE,{children:P.jsx(hE,{src:"./react.svg",alt:"logo"})}),P.jsxs(mE,{children:[P.jsx(Yu,{src:"./search.svg",alt:"search"}),P.jsx(gE,{type:"text",placeholder:u.searchPlaceholder,value:d,onChange:m=>f(m.target.value)}),P.jsx(yE,{children:u.shortcut})]}),P.jsx(Ah,{title:i==="ru"?"Switch to English":"Переключить на русский",onClick:l,children:P.jsx(Yu,{src:"./globe.svg",alt:"lang"})}),P.jsx(Ah,{title:"Сменить тему",onClick:o,children:P.jsx(Yu,{src:t==="light"?"./sun.svg":"./moon.svg",alt:"theme"})})]})};te.div`
  width: 10px;
  height: 12px;
`;function xE(){const[t,o]=E.useState("light"),[i,l]=E.useState("ru"),u=t==="light"?Dc:w1,d=()=>o(v=>v==="light"?"dark":"light"),f=()=>l(v=>v==="ru"?"en":"ru"),m={ru:{searchPlaceholder:"Поиск задач...",shortcut:"⌘K",restore:"ВОССТАНОВИТЬ",deleteAll:"УДАЛИТЬ ВСЕ ЗАДАЧИ",add:"ДОБАВИТЬ ЗАДАЧУ",search:"Поиск по названию...",status:"Статус",category:"Категория",priority:"Приоритет",statusTodo:"Ожидает",statusInProgress:"В работе",statusDone:"Выполнено",categoryBug:"Баг",categoryFeature:"Функция",categoryDocumentation:"Документация",categoryRefactor:"Рефакторинг",categoryTest:"Тест",priorityLow:"Низкий",priorityMedium:"Средний",priorityHigh:"Высокий",title:"Менеджер задач",dateLabel:"Дата"},en:{searchPlaceholder:"Search tasks...",shortcut:"⌘K",restore:"RESTORE DEMO TASKS",deleteAll:"DELETE ALL TASKS",add:"+ ADD TASK",search:"Search by title...",status:"Status",category:"Category",priority:"Priority",statusTodo:"To Do",statusInProgress:"In Progress",statusDone:"Done",categoryBug:"Bug",categoryFeature:"Feature",categoryDocumentation:"Documentation",categoryRefactor:"Refactor",categoryTest:"Test",priorityLow:"Low",priorityMedium:"Medium",priorityHigh:"High",title:"Менеджер задач",dateLabel:"Date"}},h=dE(m[i],i);return E.useEffect(()=>{document.body.classList.toggle("dark-theme",t==="dark"),document.body.classList.toggle("light-theme",t==="light")},[t]),P.jsx(p1,{theme:u,children:P.jsxs(F1,{children:[P.jsx(fw,{}),P.jsx(vE,{theme:t,onToggleTheme:d,language:i,onToggleLanguage:f,dict:m[i]}),P.jsx(IS,{router:h})]})})}ny.createRoot(document.getElementById("root")).render(P.jsx(Ur.StrictMode,{children:P.jsx(wy,{store:hv,children:P.jsx(xE,{})})}));

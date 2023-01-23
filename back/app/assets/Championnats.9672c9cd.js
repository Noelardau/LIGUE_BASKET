import{r as qe,g as Ie,o as H,c as J,a as D,F as oe,d as ke,u as ue,t as fe}from"./index.552aab32.js";var Y={exports:{}},be=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},Me=be,G=Object.prototype.toString,Z=function(r){return function(e){var t=G.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return Z(t)===r}}function ee(r){return Array.isArray(r)}function L(r){return typeof r=="undefined"}function He(r){return r!==null&&!L(r)&&r.constructor!==null&&!L(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var Oe=A("ArrayBuffer");function Je(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Oe(r.buffer),e}function Ve(r){return typeof r=="string"}function We(r){return typeof r=="number"}function Ae(r){return r!==null&&typeof r=="object"}function B(r){if(Z(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var ze=A("Date"),Xe=A("File"),Ke=A("Blob"),Qe=A("FileList");function re(r){return G.call(r)==="[object Function]"}function Ye(r){return Ae(r)&&re(r.pipe)}function Ge(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||G.call(r)===e||re(r.toString)&&r.toString()===e)}var Ze=A("URLSearchParams");function er(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function rr(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function te(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),ee(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function K(){var r={};function e(n,a){B(r[a])&&B(n)?r[a]=K(r[a],n):B(n)?r[a]=K({},n):ee(n)?r[a]=n.slice():r[a]=n}for(var t=0,i=arguments.length;t<i;t++)te(arguments[t],e);return r}function tr(r,e,t){return te(e,function(n,a){t&&typeof n=="function"?r[a]=Me(n,t):r[a]=n}),r}function nr(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function ir(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function ar(r,e,t){var i,n,a,s={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)a=i[n],s[a]||(e[a]=r[a],s[a]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function sr(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function or(r){if(!r)return null;var e=r.length;if(L(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var ur=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),h={isArray:ee,isArrayBuffer:Oe,isBuffer:He,isFormData:Ge,isArrayBufferView:Je,isString:Ve,isNumber:We,isObject:Ae,isPlainObject:B,isUndefined:L,isDate:ze,isFile:Xe,isBlob:Ke,isFunction:re,isStream:Ye,isURLSearchParams:Ze,isStandardBrowserEnv:rr,forEach:te,merge:K,extend:tr,trim:er,stripBOM:nr,inherits:ir,toFlatObject:ar,kindOf:Z,kindOfTest:A,endsWith:sr,toArray:or,isTypedArray:ur,isFileList:Qe},S=h;function le(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ce=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(S.isURLSearchParams(t))n=t.toString();else{var a=[];S.forEach(t,function(f,d){f===null||typeof f=="undefined"||(S.isArray(f)?d=d+"[]":f=[f],S.forEach(f,function(l){S.isDate(l)?l=l.toISOString():S.isObject(l)&&(l=JSON.stringify(l)),a.push(le(d)+"="+le(l))}))}),n=a.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},fr=h;function F(){this.handlers=[]}F.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};F.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};F.prototype.forEach=function(e){fr.forEach(this.handlers,function(i){i!==null&&e(i)})};var lr=F,cr=h,dr=function(e,t){cr.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},Se=h;function x(r,e,t,i,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}Se.inherits(x,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var _e=x.prototype,xe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){xe[r]={value:r}});Object.defineProperties(x,xe);Object.defineProperty(_e,"isAxiosError",{value:!0});x.from=function(r,e,t,i,n,a){var s=Object.create(_e);return Se.toFlatObject(r,s,function(f){return f!==Error.prototype}),x.call(s,r.message,e,t,i,n),s.name=r.name,a&&Object.assign(s,a),s};var P=x,Te={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},R=h;function hr(r,e){e=e||new FormData;var t=[];function i(a){return a===null?"":R.isDate(a)?a.toISOString():R.isArrayBuffer(a)||R.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(R.isPlainObject(a)||R.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),R.forEach(a,function(f,d){if(!R.isUndefined(f)){var o=s?s+"."+d:d,l;if(f&&!s&&typeof f=="object"){if(R.endsWith(d,"{}"))f=JSON.stringify(f);else if(R.endsWith(d,"[]")&&(l=R.toArray(f))){l.forEach(function(v){!R.isUndefined(v)&&e.append(o,i(v))});return}}n(f,o)}}),t.pop()}else e.append(s,i(a))}return n(r),e}var Ne=hr,V=P,pr=function(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new V("Request failed with status code "+i.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},$=h,mr=$.isStandardBrowserEnv()?function(){return{write:function(t,i,n,a,s,u){var f=[];f.push(t+"="+encodeURIComponent(i)),$.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),$.isString(a)&&f.push("path="+a),$.isString(s)&&f.push("domain="+s),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),vr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Er=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},yr=vr,Rr=Er,Pe=function(e,t){return e&&!yr(t)?Rr(e,t):t},W=h,wr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],br=function(e){var t={},i,n,a;return e&&W.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),i=W.trim(u.substr(0,a)).toLowerCase(),n=W.trim(u.substr(a+1)),i){if(t[i]&&wr.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t},ce=h,Or=ce.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(a){var s=a;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(s){var u=ce.isString(s)?n(s):s;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}(),Q=P,Ar=h;function ge(r){Q.call(this,r==null?"canceled":r,Q.ERR_CANCELED),this.name="CanceledError"}Ar.inherits(ge,Q,{__CANCEL__:!0});var j=ge,Cr=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},g=h,Sr=pr,_r=mr,xr=Ce,Tr=Pe,Nr=br,Pr=Or,gr=Te,w=P,Dr=j,$r=Cr,de=function(e){return new Promise(function(i,n){var a=e.data,s=e.headers,u=e.responseType,f;function d(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}g.isFormData(a)&&g.isStandardBrowserEnv()&&delete s["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(l+":"+v)}var p=Tr(e.baseURL,e.url);o.open(e.method.toUpperCase(),xr(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function ae(){if(!!o){var y="getAllResponseHeaders"in o?Nr(o.getAllResponseHeaders()):null,C=!u||u==="text"||u==="json"?o.responseText:o.response,O={data:C,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};Sr(function(M){i(M),d()},function(M){n(M),d()},O),o=null}}if("onloadend"in o?o.onloadend=ae:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(ae)},o.onabort=function(){!o||(n(new w("Request aborted",w.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new w("Network Error",w.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",O=e.transitional||gr;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),n(new w(C,O.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,o)),o=null},g.isStandardBrowserEnv()){var se=(e.withCredentials||Pr(p))&&e.xsrfCookieName?_r.read(e.xsrfCookieName):void 0;se&&(s[e.xsrfHeaderName]=se)}"setRequestHeader"in o&&g.forEach(s,function(C,O){typeof a=="undefined"&&O.toLowerCase()==="content-type"?delete s[O]:o.setRequestHeader(O,C)}),g.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(y){!o||(n(!y||y&&y.type?new Dr:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),a||(a=null);var k=$r(p);if(k&&["http","https","file"].indexOf(k)===-1){n(new w("Unsupported protocol "+k+":",w.ERR_BAD_REQUEST,e));return}o.send(a)})},Br=null,c=h,he=dr,pe=P,Ur=Te,Lr=Ne,Fr={"Content-Type":"application/x-www-form-urlencoded"};function me(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function jr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=de),r}function qr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var q={transitional:Ur,adapter:jr(),transformRequest:[function(e,t){if(he(t,"Accept"),he(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e))return e;if(c.isArrayBufferView(e))return e.buffer;if(c.isURLSearchParams(e))return me(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=c.isObject(e),n=t&&t["Content-Type"],a;if((a=c.isFileList(e))||i&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return Lr(a?{"files[]":e}:e,s&&new s)}else if(i||n==="application/json")return me(t,"application/json"),qr(e);return e}],transformResponse:[function(e){var t=this.transitional||q.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a)throw s.name==="SyntaxError"?pe.from(s,pe.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Br},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){q.headers[e]={}});c.forEach(["post","put","patch"],function(e){q.headers[e]=c.merge(Fr)});var ne=q,Ir=h,kr=ne,Mr=function(e,t,i){var n=this||kr;return Ir.forEach(i,function(s){e=s.call(n,e,t)}),e},De=function(e){return!!(e&&e.__CANCEL__)},ve=h,z=Mr,Hr=De,Jr=ne,Vr=j;function X(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Vr}var Wr=function(e){X(e),e.headers=e.headers||{},e.data=z.call(e,e.data,e.headers,e.transformRequest),e.headers=ve.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ve.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Jr.adapter;return t(e).then(function(n){return X(e),n.data=z.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Hr(n)||(X(e),n&&n.response&&(n.response.data=z.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=h,$e=function(e,t){t=t||{};var i={};function n(o,l){return E.isPlainObject(o)&&E.isPlainObject(l)?E.merge(o,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function a(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function s(o){if(!E.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function f(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var d={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var v=d[l]||a,p=v(l);E.isUndefined(p)&&v!==f||(i[l]=p)}),i},Be={version:"0.27.2"},zr=Be.version,b=P,ie={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){ie[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var Ee={};ie.transitional=function(e,t,i){function n(a,s){return"[Axios v"+zr+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,u){if(e===!1)throw new b(n(s," has been removed"+(t?" in "+t:"")),b.ERR_DEPRECATED);return t&&!Ee[s]&&(Ee[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,s,u):!0}};function Xr(r,e,t){if(typeof r!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var a=i[n],s=e[a];if(s){var u=r[a],f=u===void 0||s(u,a,r);if(f!==!0)throw new b("option "+a+" must be "+f,b.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new b("Unknown option "+a,b.ERR_BAD_OPTION)}}var Kr={assertOptions:Xr,validators:ie},Ue=h,Qr=Ce,ye=lr,Re=Wr,I=$e,Yr=Pe,Le=Kr,_=Le.validators;function T(r){this.defaults=r,this.interceptors={request:new ye,response:new ye}}T.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=I(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&Le.assertOptions(i,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(a=a&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var s=[];this.interceptors.response.forEach(function(p){s.push(p.fulfilled,p.rejected)});var u;if(!a){var f=[Re,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var d=t;n.length;){var o=n.shift(),l=n.shift();try{d=o(d)}catch(v){l(v);break}}try{u=Re(d)}catch(v){return Promise.reject(v)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};T.prototype.getUri=function(e){e=I(this.defaults,e);var t=Yr(e.baseURL,e.url);return Qr(t,e.params,e.paramsSerializer)};Ue.forEach(["delete","get","head","options"],function(e){T.prototype[e]=function(t,i){return this.request(I(i||{},{method:e,url:t,data:(i||{}).data}))}});Ue.forEach(["post","put","patch"],function(e){function t(i){return function(a,s,u){return this.request(I(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}T.prototype[e]=t(),T.prototype[e+"Form"]=t(!0)});var Gr=T,Zr=j;function N(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,a=t._listeners.length;for(n=0;n<a;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,a=new Promise(function(s){t.subscribe(s),n=s}).then(i);return a.cancel=function(){t.unsubscribe(n)},a},r(function(n){t.reason||(t.reason=new Zr(n),e(t.reason))})}N.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};N.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};N.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};N.source=function(){var e,t=new N(function(n){e=n});return{token:t,cancel:e}};var et=N,rt=function(e){return function(i){return e.apply(null,i)}},tt=h,nt=function(e){return tt.isObject(e)&&e.isAxiosError===!0},we=h,it=be,U=Gr,at=$e,st=ne;function Fe(r){var e=new U(r),t=it(U.prototype.request,e);return we.extend(t,U.prototype,e),we.extend(t,e),t.create=function(n){return Fe(at(r,n))},t}var m=Fe(st);m.Axios=U;m.CanceledError=j;m.CancelToken=et;m.isCancel=De;m.VERSION=Be.version;m.toFormData=Ne;m.AxiosError=P;m.Cancel=m.CanceledError;m.all=function(e){return Promise.all(e)};m.spread=rt;m.isAxiosError=nt;Y.exports=m;Y.exports.default=m;var ot=Y.exports;const ut=D("div",{class:"ui header"},"Championnats ",-1),ft={class:"ui grid allChampionnat"},lt={class:"ui row"},ct=["onClick"],dt=D("div",{class:"column",align:"center",style:{display:"flex","align-items":"center"}},[D("i",{class:"add icon"})],-1),pt={setup(r){var e=qe("dfsf");Ie(()=>{ot.get("http://localhost:5000/test").then(i=>{e.value=i.data})});let t=i=>{console.log(i)};return(i,n)=>(H(),J(oe,null,[ut,D("div",ft,[D("div",lt,[(H(!0),J(oe,null,ke(ue(e),a=>(H(),J("div",{onClick:s=>ue(t)(a.idChampionnat),class:"column ui segment grey",style:{"margin-left":"50px"}},fe(a.nomChampionnat)+" "+fe(a.dateChampionnat),9,ct))),256)),dt])])],64))}};export{pt as default};
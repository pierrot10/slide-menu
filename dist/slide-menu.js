!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=51)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(5),i=n(17);t.exports=n(1)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(18)("wks"),i=n(10),o=n(0).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,e,n){var r=n(3),i=n(27),o=n(28),s=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),i=n(2),o=n(7),s=n(10)("src"),u=Function.toString,a=(""+u).split("toString");n(11).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var c="function"==typeof n;c&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(o(n,s)||i(n,s,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:u?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||u.call(this)})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n=t.exports={version:"2.6.3"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports={}},function(t,e,n){var r=n(33),i=n(20);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(18)("keys"),i=n(10);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(9),i=n(0).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){"use strict";var r=n(3);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(11),i=n(0),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(19)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(42),i=n(23);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(5).f,i=n(7),o=n(4)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){"use strict";n(26);var r=n(3),i=n(16),o=n(1),s=/./.toString,u=function(t){n(6)(RegExp.prototype,"toString",t,!0)};n(8)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?u(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=s.name&&u(function(){return s.call(this)})},function(t,e,n){n(1)&&"g"!=/./g.flags&&n(5).f(RegExp.prototype,"flags",{configurable:!0,get:n(16)})},function(t,e,n){t.exports=!n(1)&&!n(8)(function(){return 7!=Object.defineProperty(n(15)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){for(var r=n(30),i=n(21),o=n(6),s=n(0),u=n(2),a=n(12),c=n(4),l=c("iterator"),f=c("toStringTag"),p=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=i(h),m=0;m<d.length;m++){var v,E=d[m],y=h[E],g=s[E],S=g&&g.prototype;if(S&&(S[l]||u(S,l,p),S[f]||u(S,f,E),a[E]=p,y))for(v in r)S[v]||o(S,v,r[v],!0)}},function(t,e,n){"use strict";var r=n(31),i=n(32),o=n(12),s=n(13);t.exports=n(35)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(4)("unscopables"),i=Array.prototype;null==i[r]&&n(2)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(34);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";var r=n(19),i=n(36),o=n(6),s=n(2),u=n(12),a=n(39),c=n(24),l=n(47),f=n(4)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,m,v,E){a(n,e,d);var y,g,S,b=function(t){if(!p&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},A=e+" Iterator",L="values"==m,k=!1,w=t.prototype,_=w[f]||w["@@iterator"]||m&&w[m],x=_||b(m),M=m?L?b("entries"):x:void 0,C="Array"==e&&w.entries||_;if(C&&(S=l(C.call(new t)))!==Object.prototype&&S.next&&(c(S,A,!0),r||"function"==typeof S[f]||s(S,f,h)),L&&_&&"values"!==_.name&&(k=!0,x=function(){return _.call(this)}),r&&!E||!p&&!k&&w[f]||s(w,f,x),u[e]=x,u[A]=h,m)if(y={values:L?x:b("values"),keys:v?x:b("keys"),entries:M},E)for(g in y)g in w||o(w,g,y[g]);else i(i.P+i.F*(p||k),e,y);return y}},function(t,e,n){var r=n(0),i=n(11),o=n(2),s=n(6),u=n(37),a=function(t,e,n){var c,l,f,p,h=t&a.F,d=t&a.G,m=t&a.S,v=t&a.P,E=t&a.B,y=d?r:m?r[e]||(r[e]={}):(r[e]||{}).prototype,g=d?i:i[e]||(i[e]={}),S=g.prototype||(g.prototype={});for(c in d&&(n=e),n)f=((l=!h&&y&&void 0!==y[c])?y:n)[c],p=E&&l?u(f,r):v&&"function"==typeof f?u(Function.call,f):f,y&&s(y,c,f,t&a.U),g[c]!=f&&o(g,c,p),v&&S[c]!=f&&(S[c]=f)};r.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(38);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(40),i=n(17),o=n(24),s={};n(2)(s,n(4)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(3),i=n(41),o=n(23),s=n(14)("IE_PROTO"),u=function(){},a=function(){var t,e=n(15)("iframe"),r=o.length;for(e.style.display="none",n(46).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[s]=t):n=a(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(5),i=n(3),o=n(21);t.exports=n(1)?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),u=s.length,a=0;u>a;)r.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var r=n(7),i=n(13),o=n(43)(!1),s=n(14)("IE_PROTO");t.exports=function(t,e){var n,u=i(t),a=0,c=[];for(n in u)n!=s&&r(u,n)&&c.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(13),i=n(44),o=n(45);t.exports=function(t){return function(e,n,s){var u,a=r(e),c=i(a.length),l=o(s,c);if(t&&n!=n){for(;c>l;)if((u=a[l++])!=u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(22),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(22),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(7),i=n(48),o=n(14)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var r=n(20);t.exports=function(t){return Object(r(t))}},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var r,i,o;n(25),n(29),n(49);function s(t,e,n){const r=[];for(;null!==t.parentElement||void 0!==n&&r.length<n;)t instanceof HTMLElement&&t.matches(e)&&r.push(t),t=t.parentElement;return r}function u(t,e){const n=s(t,e,1);return n.length?n[0]:null}!function(t){t[t.Backward=-1]="Backward",t[t.Forward=1]="Forward"}(r||(r={})),function(t){t.Left="left",t.Right="right"}(i||(i={})),function(t){t.Back="back",t.Close="close",t.Forward="forward",t.Navigate="navigate",t.Open="open"}(o||(o={}));const a={backLinkAfter:"",backLinkBefore:"",keyClose:"",keyOpen:"",position:"right",showBackLink:!0,submenuLinkAfter:"",submenuLinkBefore:""};class c{constructor(t,e){if(null===t)throw new Error("Argument `elem` must be a valid HTML node");this.options=Object.assign({},a,e),this.menuElem=t,this.wrapperElem=document.createElement("div"),this.wrapperElem.classList.add(c.CLASS_NAMES.wrapper);const n=this.menuElem.querySelector("ul");n&&function(t,e){if(null===t.parentElement)throw Error("`elem` has no parentElement");t.parentElement.insertBefore(e,t),e.appendChild(t)}(n,this.wrapperElem),this.level=0,this.isOpen=!1,this.isAnimating=!1,this.lastAction=null,this.initMenu(),this.initSubmenus(),this.initEventHandlers(),this.menuElem._slideMenu=this}toggle(t){let e,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0===t)return this.isOpen?this.close(n):this.open(n);if(e=t?0:this.options.position===i.Left?"-100%":"100%",this.isOpen=t,n)this.moveSlider(this.menuElem,e);else{const t=this.moveSlider.bind(this,this.menuElem,e);this.runWithoutAnimation(t)}}open(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.triggerEvent(o.Open),this.toggle(!0,t)}close(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.triggerEvent(o.Close),this.toggle(!1,t)}back(){this.navigate(r.Backward)}destroy(){const t=this.options,e=t.submenuLinkAfter,n=t.submenuLinkBefore,r=t.showBackLink;(e||n)&&this.wrapperElem.querySelectorAll(`.${c.CLASS_NAMES.decorator}`).forEach(t=>{t.parentElement&&t.parentElement.removeChild(t)}),r&&this.wrapperElem.querySelectorAll(`.${c.CLASS_NAMES.control}`).forEach(t=>{const e=u(t,"li");e&&e.parentElement&&e.parentElement.removeChild(e)}),function(t){const e=t.parentElement;if(null===e)throw Error("`elem` has no parentElement");for(;t.firstChild;)e.insertBefore(t.firstChild,t);e.removeChild(t)}(this.wrapperElem),this.menuElem.style.cssText="",this.menuElem.querySelectorAll("ul").forEach(t=>t.style.cssText=""),delete this.menuElem._slideMenu}navigateTo(t){if(this.triggerEvent(o.Navigate),"string"==typeof t){const e=document.querySelector(t);if(!(e instanceof HTMLElement))throw new Error("Invalid parameter `target`. A valid query selector is required.");t=e}this.wrapperElem.querySelectorAll(`.${c.CLASS_NAMES.active}`).forEach(t=>{t.style.display="none",t.classList.remove(c.CLASS_NAMES.active)});const e=s(t,"ul"),n=e.length-1;n>-1&&n!==this.level&&(this.level=n,this.moveSlider(this.wrapperElem,100*-this.level)),e.forEach(t=>{t.style.display="block",t.classList.add(c.CLASS_NAMES.active)})}initEventHandlers(){this.menuElem.querySelectorAll("a").forEach(t=>t.addEventListener("click",t=>{const e=t.target,n=e.matches("a")?e:u(e,"a");n&&this.navigate(r.Forward,n)})),this.menuElem.addEventListener("transitionend",this.onTransitionEnd.bind(this)),this.wrapperElem.addEventListener("transitionend",this.onTransitionEnd.bind(this)),this.initKeybindings(),this.initSubmenuVisibility()}onTransitionEnd(t){t.target!==this.menuElem&&t.target!==this.wrapperElem||(this.isAnimating=!1,this.lastAction&&this.triggerEvent(this.lastAction,!0))}initKeybindings(){document.addEventListener("keydown",t=>{switch(t.key){case this.options.keyClose:this.close();break;case this.options.keyOpen:this.open();break;default:return}t.preventDefault()})}initSubmenuVisibility(){this.menuElem.addEventListener("sm.back-after",()=>{const t=`.${c.CLASS_NAMES.active} `.repeat(this.level+1),e=this.menuElem.querySelector(`ul ${t}`);e&&(e.style.display="none",e.classList.remove(c.CLASS_NAMES.active))})}triggerEvent(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.lastAction=t;const n=new CustomEvent(`sm.${t}${e?"-after":""}`);this.menuElem.dispatchEvent(n)}navigate(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.Forward,e=arguments.length>1?arguments[1]:void 0;if(this.isAnimating||t===r.Backward&&0===this.level)return;const n=-100*(this.level+t);if(e&&null!==e.parentElement&&t===r.Forward){const t=e.parentElement.querySelector("ul");if(!t)return;t.classList.add(c.CLASS_NAMES.active),t.style.display="block"}const i=t===r.Forward?o.Forward:o.Back;this.triggerEvent(i),this.level=this.level+t,this.moveSlider(this.wrapperElem,n)}moveSlider(t,e){e.toString().includes("%")||(e+="%"),t.style.transform=`translateX(${e})`,this.isAnimating=!0}initMenu(){this.runWithoutAnimation(()=>{switch(this.options.position){case i.Left:Object.assign(this.menuElem.style,{left:0,right:"auto",transform:"translateX(-100%)"});break;default:Object.assign(this.menuElem.style,{left:"auto",right:0})}this.menuElem.style.display="block"})}runWithoutAnimation(t){const e=[this.menuElem,this.wrapperElem];e.forEach(t=>t.style.transition="none"),t(),this.menuElem.offsetHeight,e.forEach(t=>t.style.removeProperty("transition")),this.isAnimating=!1}initSubmenus(){this.menuElem.querySelectorAll("a").forEach(t=>{if(null===t.parentElement)return;const e=t.parentElement.querySelector("ul");if(!e)return;t.addEventListener("click",t=>{t.preventDefault()});const n=t.textContent;if(this.addLinkDecorators(t),this.options.showBackLink){const t=this.options,r=t.backLinkBefore,i=t.backLinkAfter,s=document.createElement("a");s.innerHTML=r+n+i,s.classList.add(c.CLASS_NAMES.backlink,c.CLASS_NAMES.control),s.setAttribute("data-action",o.Back);const u=document.createElement("li");u.appendChild(s),e.insertBefore(u,e.firstChild)}})}addLinkDecorators(t){const e=this.options,n=e.submenuLinkBefore,r=e.submenuLinkAfter;if(n){const e=document.createElement("span");e.classList.add(c.CLASS_NAMES.decorator),e.innerHTML=n,t.insertBefore(e,t.firstChild)}if(r){const e=document.createElement("span");e.classList.add(c.CLASS_NAMES.decorator),e.innerHTML=r,t.appendChild(e)}return t}}c.NAMESPACE="slide-menu",c.CLASS_NAMES={active:`${c.NAMESPACE}__submenu--active`,backlink:`${c.NAMESPACE}__backlink`,control:`${c.NAMESPACE}__control`,decorator:`${c.NAMESPACE}__decorator`,wrapper:`${c.NAMESPACE}__slider`},document.addEventListener("click",t=>{const e=t.target;if(!e.className.includes(`${c.CLASS_NAMES.control}`))return;const n=e.getAttribute("data-target"),r=n&&"this"!==n?document.getElementById(n):u(e,`.${c.NAMESPACE}`);if(!r)throw new Error(`Unable to find menu ${n}`);const i=r._slideMenu,o=e.getAttribute("data-action"),s=e.getAttribute("data-arg");i&&o&&"function"==typeof i[o]&&(s?i[o](s):i[o]())}),window.SlideMenu=c}]);
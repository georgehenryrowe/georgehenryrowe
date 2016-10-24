// document.addEventListener("DOMContentLoaded", function (event) {
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function L(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(k),g.offsetWidth,e=k.value!=l,g.removeChild(k)):e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,m.innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e});var K=function(c,d){var f=c.join(""),g=d.length;y(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9,e.csstransforms3d=(j.csstransforms3d&&j.csstransforms3d.offsetLeft)===9&&j.csstransforms3d.offsetHeight===3,e.generatedcontent=(j.generatedcontent&&j.generatedcontent.offsetHeight)>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",n.join("touch-enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",n.join("transform-3d),("),h,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',l,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);s.flexbox=function(){return J("flexOrder")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){try{var d=b.createElement("canvas"),e;e=!(!a.WebGLRenderingContext||!d.getContext("experimental-webgl")&&!d.getContext("webgl")),d=c}catch(f){e=!1}return e},s.touch=function(){return e.touch},s.geolocation=function(){return!!navigator.geolocation},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){return e.fontface},s.generatedcontent=function(){return e.generatedcontent},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var M in s)C(s,M)&&(x=M.toLowerCase(),e[x]=s[M](),v.push((e[x]?"":"no-")+x));return e.input||L(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},D(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/**
 * jQuery Picture
 * http://jquerypicture.com
 * http://github.com/Abban/jQuery-Picture
 * 
 * May 2012
 * 
 * @version 0.9
 * @author Abban Dunne http://abandon.ie
 * @license MIT
 * 
 * jQuery Picture is a plugin to add support for responsive images to your layouts.
 * It supports both figure elements with some custom data attributes and the new
 * proposed picture format. This plugin will be made redundant when the format is
 * approved and implemented by browsers. Lets hope that happens soon. In the meantime
 * this plugin will be kept up to date with latest developments.
 * 
 */
(function($){

	$.fn.picture = function(args){

		var defaults = {

			container : null,
			ignorePixelRatio: false

        };
		
		var settings = $.extend({}, defaults, args);

		this.each(function(){

			var breakpoints = new Array();

			var windowWidth, currentMedia, element, timeoutOffset;

			// Check the device pixel ratio
			var PixelRatio = 1;
			if(!settings.ignorePixelRatio && window.devicePixelRatio !== undefined) PixelRatio = window.devicePixelRatio;

			// Save off the element so it can be easily used inside a function
			element = $(this);
			
			// Initialise the images
			getCurrentMedia(true);

			// Only call the image resize function 200ms after window stops being resized
			timeoutOffset = false;
			
			$(window).resize(function(){
				
				if(timeoutOffset !== false)
					clearTimeout(timeoutOffset);
				
				timeoutOffset = setTimeout(getCurrentMedia, 200);
			
			});


			/**
			 * getCurrentMedia
			 * 
			 * Checks the window width off the media query types and selects the current one.
			 * Calls the setPicture or setFigure function to set the image.
			 * 
			 */
			function getCurrentMedia(init){

				if(init){
					
					if(element.get(0).tagName.toLowerCase() == 'figure'){

						var mediaObj = element.data();

						$.each(mediaObj, function(media){

							var num;

							num = media.replace(/[^\d.]/g, '');

							if(num)
								breakpoints.push(num);

						});

					}else{

						element.find('source').each(function(){

							var media, num;

							media = $(this).attr('media');

							if(media){

								num = media.replace(/[^\d.]/g, '');

								breakpoints.push(num);
							}

						});

					}

				}

				var c = 0;
				
				// Check if user defined container, otherwise take window
				if (settings.container == null){
				
					windowWidth = ($(window).width()) * PixelRatio;
				
				}else{
				
					windowWidth = ($(settings.container).width()) * PixelRatio;
				
				}

				// Set the c variable to the current media width
				$.each(breakpoints, function(i,v){
					
					if(parseInt(windowWidth) >= parseInt(v) && parseInt(c) <= parseInt(v))
						c = v;

				});

				if(currentMedia !== c){
					currentMedia = c;

					if(element.get(0).tagName.toLowerCase() == 'figure')
						setFigure();
					else
						setPicture();
				}

			}


			/**
			 * setPicture
			 * 
			 * Pulls the image src and media attributes from the source tags and sets
			 * the src of the enclosed img tag to the appropriate one.
			 * 
			 */
			function setPicture(){

				var sizes = new Object();

				element.find('source').each(function(){

					var media, path, num;
					media = $(this).attr('media');
					path = $(this).attr('src');

					if(media)
						num = media.replace(/[^\d.]/g, '');
					else
						num = 0;

					sizes[num] = path;

				});

				if(element.find('img').length == 0){

					var prep = '<img src="' + sizes[currentMedia] + '" style="' + element.attr('style') + '" alt="' + element.attr('alt') + '">';

					if($('>a', element).length == 0){

						element.append(prep);

					}else{

						$('>a', element).append(prep);

					}

				}else{
					
					element.find('img').attr('src', sizes[currentMedia]);

				}

			}


			/**
			 * setFigure
			 * 
			 * Pulls the image src and and media values from the data attributes
			 * and sets the src of the enclosed img tag to the appropriate one.
			 * 
			 */
			function setFigure(){

				var sizes = new Object();

				var mediaObj = element.data();

				$.each(mediaObj, function(media, path){

					var num;

					num = media.replace(/[^\d.]/g, '');

					if(!num)
						num = 0;

					sizes[num] = path;

				});

				if(element.find('img').length == 0){

					var prep = '<img src="' + sizes[currentMedia] + '" alt="' + element.attr('title') + '">';

					if($('>a', element).length == 0){

						element.append(prep);

					}else{

						$('>a', element).append(prep);

					}

				}else{

					element.find('img').attr('src', sizes[currentMedia]);

				}

			}

		});

	};

})(jQuery);
!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],d=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",a=document.createElement("div");a.innerHTML='<p>x</p><style id="fit-vids-style">'+d+"</style>",r.appendChild(a.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];i.customSelector&&e.push(i.customSelector);var r=t(this).find(e.join(","));r=r.not("object object"),r.each(function(){var e=t(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),r=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),d=i/r;if(!e.attr("id")){var a="fitvid"+Math.floor(999999*Math.random());e.attr("id",a)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*d+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);


/*! p5.js v0.5.4 October 01, 2016 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.p5=e()}}(function(){var define,module,exports;return function e(t,r,n){function o(a,s){if(!r[a]){if(!t[a]){var h="function"==typeof require&&require;if(!s&&h)return h(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=r[a]={exports:{}};t[a][0].call(u.exports,function(e){var r=t[a][1][e];return o(r?r:e)},u,u.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(){},{}],2:[function(e,t,r){"use strict";r.argument=function(e,t){if(!e)throw new Error(t)},r.assert=r.argument},{}],3:[function(e,t,r){"use strict";function n(e,t,r,n,o){e.beginPath(),e.moveTo(t,r),e.lineTo(n,o),e.stroke()}r.line=n},{}],4:[function(e,t,r){"use strict";function n(e){this.font=e}function o(e){this.cmap=e}function i(e,t){this.encoding=e,this.charset=t}function a(e){var t;switch(e.version){case 1:this.names=r.standardNames.slice();break;case 2:for(this.names=new Array(e.numberOfGlyphs),t=0;t<e.numberOfGlyphs;t++)this.names[t]=e.glyphNameIndex[t]<r.standardNames.length?r.standardNames[e.glyphNameIndex[t]]:e.names[e.glyphNameIndex[t]-r.standardNames.length];break;case 2.5:for(this.names=new Array(e.numberOfGlyphs),t=0;t<e.numberOfGlyphs;t++)this.names[t]=r.standardNames[t+e.glyphNameIndex[t]];break;case 3:this.names=[]}}function s(e){for(var t,r=e.tables.cmap.glyphIndexMap,n=Object.keys(r),o=0;o<n.length;o+=1){var i=n[o],a=r[i];t=e.glyphs.get(a),t.addUnicode(parseInt(i))}for(o=0;o<e.glyphs.length;o+=1)t=e.glyphs.get(o),t.name=e.cffEncoding?e.cffEncoding.charset[o]:e.glyphNames.glyphIndexToName(o)}var h=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],l=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],u=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],p=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];n.prototype.charToGlyphIndex=function(e){var t=e.charCodeAt(0),r=this.font.glyphs;if(!r)return null;for(var n=0;n<r.length;n+=1)for(var o=r.get(n),i=0;i<o.unicodes.length;i+=1)if(o.unicodes[i]===t)return n},o.prototype.charToGlyphIndex=function(e){return this.cmap.glyphIndexMap[e.charCodeAt(0)]||0},i.prototype.charToGlyphIndex=function(e){var t=e.charCodeAt(0),r=this.encoding[t];return this.charset.indexOf(r)},a.prototype.nameToGlyphIndex=function(e){return this.names.indexOf(e)},a.prototype.glyphIndexToName=function(e){return this.names[e]},r.cffStandardStrings=h,r.cffStandardEncoding=l,r.cffExpertEncoding=u,r.standardNames=p,r.DefaultEncoding=n,r.CmapEncoding=o,r.CffEncoding=i,r.GlyphNames=a,r.addGlyphNames=s},{}],5:[function(e,t,r){"use strict";function n(e){e=e||{},this.familyName=e.familyName||" ",this.styleName=e.styleName||" ",this.designer=e.designer||" ",this.designerURL=e.designerURL||" ",this.manufacturer=e.manufacturer||" ",this.manufacturerURL=e.manufacturerURL||" ",this.license=e.license||" ",this.licenseURL=e.licenseURL||" ",this.version=e.version||"Version 0.1",this.description=e.description||" ",this.copyright=e.copyright||" ",this.trademark=e.trademark||" ",this.unitsPerEm=e.unitsPerEm||1e3,this.ascender=e.ascender,this.descender=e.descender,this.supported=!0,this.glyphs=new s.GlyphSet(this,e.glyphs||[]),this.encoding=new a.DefaultEncoding(this),this.tables={}}var o=e("./path"),i=e("./tables/sfnt"),a=e("./encoding"),s=e("./glyphset");n.prototype.hasChar=function(e){return null!==this.encoding.charToGlyphIndex(e)},n.prototype.charToGlyphIndex=function(e){return this.encoding.charToGlyphIndex(e)},n.prototype.charToGlyph=function(e){var t=this.charToGlyphIndex(e),r=this.glyphs.get(t);return r||(r=this.glyphs.get(0)),r},n.prototype.stringToGlyphs=function(e){for(var t=[],r=0;r<e.length;r+=1){var n=e[r];t.push(this.charToGlyph(n))}return t},n.prototype.nameToGlyphIndex=function(e){return this.glyphNames.nameToGlyphIndex(e)},n.prototype.nameToGlyph=function(e){var t=this.nametoGlyphIndex(e),r=this.glyphs.get(t);return r||(r=this.glyphs.get(0)),r},n.prototype.glyphIndexToName=function(e){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(e):""},n.prototype.getKerningValue=function(e,t){e=e.index||e,t=t.index||t;var r=this.getGposKerningValue;return r?r(e,t):this.kerningPairs[e+","+t]||0},n.prototype.forEachGlyph=function(e,t,r,n,o,i){if(this.supported){t=void 0!==t?t:0,r=void 0!==r?r:0,n=void 0!==n?n:72,o=o||{};for(var a=void 0===o.kerning?!0:o.kerning,s=1/this.unitsPerEm*n,h=this.stringToGlyphs(e),l=0;l<h.length;l+=1){var u=h[l];if(i(u,t,r,n,o),u.advanceWidth&&(t+=u.advanceWidth*s),a&&l<h.length-1){var p=this.getKerningValue(u,h[l+1]);t+=p*s}}}},n.prototype.getPath=function(e,t,r,n,i){var a=new o.Path;return this.forEachGlyph(e,t,r,n,i,function(e,t,r,n){var o=e.getPath(t,r,n);a.extend(o)}),a},n.prototype.draw=function(e,t,r,n,o,i){this.getPath(t,r,n,o,i).draw(e)},n.prototype.drawPoints=function(e,t,r,n,o,i){this.forEachGlyph(t,r,n,o,i,function(t,r,n,o){t.drawPoints(e,r,n,o)})},n.prototype.drawMetrics=function(e,t,r,n,o,i){this.forEachGlyph(t,r,n,o,i,function(t,r,n,o){t.drawMetrics(e,r,n,o)})},n.prototype.validate=function(){function e(e,t){e||r.push(t)}function t(t){e(n[t]&&n[t].trim().length>0,"No "+t+" specified.")}var r=[],n=this;t("familyName"),t("weightName"),t("manufacturer"),t("copyright"),t("version"),e(this.unitsPerEm>0,"No unitsPerEm specified.")},n.prototype.toTables=function(){return i.fontToTable(this)},n.prototype.toBuffer=function(){for(var e=this.toTables(),t=e.encode(),r=new ArrayBuffer(t.length),n=new Uint8Array(r),o=0;o<t.length;o++)n[o]=t[o];return r},n.prototype.download=function(){var e=this.familyName.replace(/\s/g,"")+"-"+this.styleName+".otf",t=this.toBuffer();window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem,window.requestFileSystem(window.TEMPORARY,t.byteLength,function(r){r.root.getFile(e,{create:!0},function(e){e.createWriter(function(r){var n=new DataView(t),o=new Blob([n],{type:"font/opentype"});r.write(o),r.addEventListener("writeend",function(){location.href=e.toURL()},!1)})})},function(e){throw e})},r.Font=n},{"./encoding":4,"./glyphset":7,"./path":10,"./tables/sfnt":25}],6:[function(e,t,r){"use strict";function n(e,t){var r=t||{commands:[]};return{configurable:!0,get:function(){return"function"==typeof r&&(r=r()),r},set:function(e){r=e}}}function o(e){this.bindConstructorValues(e)}var i=e("./check"),a=e("./draw"),s=e("./path");o.prototype.bindConstructorValues=function(e){this.index=e.index||0,this.name=e.name||null,this.unicode=e.unicode||void 0,this.unicodes=e.unicodes||void 0!==e.unicode?[e.unicode]:[],e.xMin&&(this.xMin=e.xMin),e.yMin&&(this.yMin=e.yMin),e.xMax&&(this.xMax=e.xMax),e.yMax&&(this.yMax=e.yMax),e.advanceWidth&&(this.advanceWidth=e.advanceWidth),Object.defineProperty(this,"path",n(this,e.path))},o.prototype.addUnicode=function(e){0===this.unicodes.length&&(this.unicode=e),this.unicodes.push(e)},o.prototype.getPath=function(e,t,r){e=void 0!==e?e:0,t=void 0!==t?t:0,r=void 0!==r?r:72;for(var n=1/this.path.unitsPerEm*r,o=new s.Path,i=this.path.commands,a=0;a<i.length;a+=1){var h=i[a];"M"===h.type?o.moveTo(e+h.x*n,t+-h.y*n):"L"===h.type?o.lineTo(e+h.x*n,t+-h.y*n):"Q"===h.type?o.quadraticCurveTo(e+h.x1*n,t+-h.y1*n,e+h.x*n,t+-h.y*n):"C"===h.type?o.curveTo(e+h.x1*n,t+-h.y1*n,e+h.x2*n,t+-h.y2*n,e+h.x*n,t+-h.y*n):"Z"===h.type&&o.closePath()}return o},o.prototype.getContours=function(){if(void 0===this.points)return[];for(var e=[],t=[],r=0;r<this.points.length;r+=1){var n=this.points[r];t.push(n),n.lastPointOfContour&&(e.push(t),t=[])}return i.argument(0===t.length,"There are still points left in the current contour."),e},o.prototype.getMetrics=function(){for(var e=this.path.commands,t=[],r=[],n=0;n<e.length;n+=1){var o=e[n];"Z"!==o.type&&(t.push(o.x),r.push(o.y)),("Q"===o.type||"C"===o.type)&&(t.push(o.x1),r.push(o.y1)),"C"===o.type&&(t.push(o.x2),r.push(o.y2))}var i={xMin:Math.min.apply(null,t),yMin:Math.min.apply(null,r),xMax:Math.max.apply(null,t),yMax:Math.max.apply(null,r),leftSideBearing:0};return i.rightSideBearing=this.advanceWidth-i.leftSideBearing-(i.xMax-i.xMin),i},o.prototype.draw=function(e,t,r,n){this.getPath(t,r,n).draw(e)},o.prototype.drawPoints=function(e,t,r,n){function o(t,r,n,o){var i=2*Math.PI;e.beginPath();for(var a=0;a<t.length;a+=1)e.moveTo(r+t[a].x*o,n+t[a].y*o),e.arc(r+t[a].x*o,n+t[a].y*o,2,0,i,!1);e.closePath(),e.fill()}t=void 0!==t?t:0,r=void 0!==r?r:0,n=void 0!==n?n:24;for(var i=1/this.path.unitsPerEm*n,a=[],s=[],h=this.path,l=0;l<h.commands.length;l+=1){var u=h.commands[l];void 0!==u.x&&a.push({x:u.x,y:-u.y}),void 0!==u.x1&&s.push({x:u.x1,y:-u.y1}),void 0!==u.x2&&s.push({x:u.x2,y:-u.y2})}e.fillStyle="blue",o(a,t,r,i),e.fillStyle="red",o(s,t,r,i)},o.prototype.drawMetrics=function(e,t,r,n){var o;t=void 0!==t?t:0,r=void 0!==r?r:0,n=void 0!==n?n:24,o=1/this.path.unitsPerEm*n,e.lineWidth=1,e.strokeStyle="black",a.line(e,t,-1e4,t,1e4),a.line(e,-1e4,r,1e4,r);var i=this.xMin||0,s=this.yMin||0,h=this.xMax||0,l=this.yMax||0,u=this.advanceWidth||0;e.strokeStyle="blue",a.line(e,t+i*o,-1e4,t+i*o,1e4),a.line(e,t+h*o,-1e4,t+h*o,1e4),a.line(e,-1e4,r+-s*o,1e4,r+-s*o),a.line(e,-1e4,r+-l*o,1e4,r+-l*o),e.strokeStyle="green",a.line(e,t+u*o,-1e4,t+u*o,1e4)},r.Glyph=o},{"./check":2,"./draw":3,"./path":10}],7:[function(e,t,r){"use strict";function n(e,t){if(this.font=e,this.glyphs={},Array.isArray(t))for(var r=0;r<t.length;r++)this.glyphs[r]=t[r];this.length=t&&t.length||0}function o(e,t){return new s.Glyph({index:t,font:e})}function i(e,t,r,n,o,i){return function(){var a=new s.Glyph({index:t,font:e});return a.path=function(){r(a,n,o);var t=i(e.glyphs,a);return t.unitsPerEm=e.unitsPerEm,t},a}}function a(e,t,r,n){return function(){var o=new s.Glyph({index:t,font:e});return o.path=function(){var t=r(e,o,n);return t.unitsPerEm=e.unitsPerEm,t},o}}var s=e("./glyph");n.prototype.get=function(e){return"function"==typeof this.glyphs[e]&&(this.glyphs[e]=this.glyphs[e]()),this.glyphs[e]},n.prototype.push=function(e,t){this.glyphs[e]=t,this.length++},r.GlyphSet=n,r.glyphLoader=o,r.ttfGlyphLoader=i,r.cffGlyphLoader=a},{"./glyph":6}],8:[function(e,t,r){"use strict";function n(e){for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n<e.length;n+=1)r[n]=e[n];return t}function o(t,r){var o=e("fs");o.readFile(t,function(e,t){return e?r(e.message):(r(null,n(t)),void 0)})}function i(e,t){var r=new XMLHttpRequest;r.open("get",e,!0),r.responseType="arraybuffer",r.onload=function(){return 200!==r.status?t("Font could not be loaded: "+r.statusText):t(null,r.response)},r.send()}function a(e){var t,r,n,o,i,a,s,u=new l.Font,c=new DataView(e,0),C=p.getFixed(c,0);if(1===C)u.outlinesFormat="truetype";else{if(C=p.getTag(c,0),"OTTO"!==C)throw new Error("Unsupported OpenType version "+C);u.outlinesFormat="cff"}for(var R=p.getUShort(c,4),E=12,A=0;R>A;A+=1){var P=p.getTag(c,E),L=p.getULong(c,E+8);switch(P){case"cmap":u.tables.cmap=f.parse(c,L),u.encoding=new h.CmapEncoding(u.tables.cmap),u.encoding||(u.supported=!1);break;case"head":u.tables.head=y.parse(c,L),u.unitsPerEm=u.tables.head.unitsPerEm,t=u.tables.head.indexToLocFormat;break;case"hhea":u.tables.hhea=v.parse(c,L),u.ascender=u.tables.hhea.ascender,u.descender=u.tables.hhea.descender,u.numberOfHMetrics=u.tables.hhea.numberOfHMetrics;break;case"hmtx":r=L;break;case"maxp":u.tables.maxp=w.parse(c,L),u.numGlyphs=u.tables.maxp.numGlyphs;break;case"name":u.tables.name=S.parse(c,L),u.familyName=u.tables.name.fontFamily,u.styleName=u.tables.name.fontSubfamily;break;case"OS/2":u.tables.os2=T.parse(c,L);break;case"post":u.tables.post=M.parse(c,L),u.glyphNames=new h.GlyphNames(u.tables.post);break;case"glyf":n=L;break;case"loca":o=L;break;case"CFF ":i=L;break;case"kern":a=L;break;case"GPOS":s=L}E+=16}if(n&&o){var I=0===t,D=b.parse(c,o,u.numGlyphs,I);u.glyphs=m.parse(c,n,D,u),x.parse(c,r,u.numberOfHMetrics,u.numGlyphs,u.glyphs),h.addGlyphNames(u)}else i?(d.parse(c,i,u),h.addGlyphNames(u)):u.supported=!1;return u.supported&&(u.kerningPairs=a?_.parse(c,a):{},s&&g.parse(c,s,u)),u}function s(e,t){var r="undefined"==typeof window,n=r?o:i;n(e,function(e,r){if(e)return t(e);var n=a(r);return n.supported?t(null,n):t("Font is not supported (is this a Postscript font?)")})}var h=e("./encoding"),l=e("./font"),u=e("./glyph"),p=e("./parse"),c=e("./path"),f=e("./tables/cmap"),d=e("./tables/cff"),m=e("./tables/glyf"),g=e("./tables/gpos"),y=e("./tables/head"),v=e("./tables/hhea"),x=e("./tables/hmtx"),_=e("./tables/kern"),b=e("./tables/loca"),w=e("./tables/maxp"),S=e("./tables/name"),T=e("./tables/os2"),M=e("./tables/post");r._parse=p,r.Font=l.Font,r.Glyph=u.Glyph,r.Path=c.Path,r.parse=a,r.load=s},{"./encoding":4,"./font":5,"./glyph":6,"./parse":9,"./path":10,"./tables/cff":12,"./tables/cmap":13,"./tables/glyf":14,"./tables/gpos":15,"./tables/head":16,"./tables/hhea":17,"./tables/hmtx":18,"./tables/kern":19,"./tables/loca":20,"./tables/maxp":21,"./tables/name":22,"./tables/os2":23,"./tables/post":24,fs:1}],9:[function(e,t,r){"use strict";function n(e,t){this.data=e,this.offset=t,this.relativeOffset=0}r.getByte=function(e,t){return e.getUint8(t)},r.getCard8=r.getByte,r.getUShort=function(e,t){return e.getUint16(t,!1)},r.getCard16=r.getUShort,r.getShort=function(e,t){return e.getInt16(t,!1)},r.getULong=function(e,t){return e.getUint32(t,!1)},r.getFixed=function(e,t){var r=e.getInt16(t,!1),n=e.getUint16(t+2,!1);return r+n/65535},r.getTag=function(e,t){for(var r="",n=t;t+4>n;n+=1)r+=String.fromCharCode(e.getInt8(n));return r},r.getOffset=function(e,t,r){for(var n=0,o=0;r>o;o+=1)n<<=8,n+=e.getUint8(t+o);return n},r.getBytes=function(e,t,r){for(var n=[],o=t;r>o;o+=1)n.push(e.getUint8(o));return n},r.bytesToString=function(e){for(var t="",r=0;r<e.length;r+=1)t+=String.fromCharCode(e[r]);return t};var o={"byte":1,uShort:2,"short":2,uLong:4,fixed:4,longDateTime:8,tag:4};n.prototype.parseByte=function(){var e=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,e},n.prototype.parseChar=function(){var e=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,e},n.prototype.parseCard8=n.prototype.parseByte,n.prototype.parseUShort=function(){var e=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,e},n.prototype.parseCard16=n.prototype.parseUShort,n.prototype.parseSID=n.prototype.parseUShort,n.prototype.parseOffset16=n.prototype.parseUShort,n.prototype.parseShort=function(){var e=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,e},n.prototype.parseF2Dot14=function(){var e=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,e},n.prototype.parseULong=function(){var e=r.getULong(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e},n.prototype.parseFixed=function(){var e=r.getFixed(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e},n.prototype.parseOffset16List=n.prototype.parseUShortList=function(e){for(var t=new Array(e),n=this.data,o=this.offset+this.relativeOffset,i=0;e>i;i++)t[i]=r.getUShort(n,o),o+=2;return this.relativeOffset+=2*e,t},n.prototype.parseString=function(e){var t=this.data,r=this.offset+this.relativeOffset,n="";this.relativeOffset+=e;for(var o=0;e>o;o++)n+=String.fromCharCode(t.getUint8(r+o));return n},n.prototype.parseTag=function(){return this.parseString(4)},n.prototype.parseLongDateTime=function(){var e=r.getULong(this.data,this.offset+this.relativeOffset+4);return this.relativeOffset+=8,e},n.prototype.parseFixed=function(){var e=r.getULong(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e/65536},n.prototype.parseVersion=function(){var e=r.getUShort(this.data,this.offset+this.relativeOffset),t=r.getUShort(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,e+t/4096/10},n.prototype.skip=function(e,t){void 0===t&&(t=1),this.relativeOffset+=o[e]*t},r.Parser=n},{}],10:[function(e,t,r){"use strict";function n(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}n.prototype.moveTo=function(e,t){this.commands.push({type:"M",x:e,y:t})},n.prototype.lineTo=function(e,t){this.commands.push({type:"L",x:e,y:t})},n.prototype.curveTo=n.prototype.bezierCurveTo=function(e,t,r,n,o,i){this.commands.push({type:"C",x1:e,y1:t,x2:r,y2:n,x:o,y:i})},n.prototype.quadTo=n.prototype.quadraticCurveTo=function(e,t,r,n){this.commands.push({type:"Q",x1:e,y1:t,x:r,y:n})},n.prototype.close=n.prototype.closePath=function(){this.commands.push({type:"Z"})},n.prototype.extend=function(e){e.commands&&(e=e.commands),Array.prototype.push.apply(this.commands,e)},n.prototype.draw=function(e){e.beginPath();for(var t=0;t<this.commands.length;t+=1){var r=this.commands[t];"M"===r.type?e.moveTo(r.x,r.y):"L"===r.type?e.lineTo(r.x,r.y):"C"===r.type?e.bezierCurveTo(r.x1,r.y1,r.x2,r.y2,r.x,r.y):"Q"===r.type?e.quadraticCurveTo(r.x1,r.y1,r.x,r.y):"Z"===r.type&&e.closePath()}this.fill&&(e.fillStyle=this.fill,e.fill()),this.stroke&&(e.strokeStyle=this.stroke,e.lineWidth=this.strokeWidth,e.stroke())},n.prototype.toPathData=function(e){function t(t){return Math.round(t)===t?""+Math.round(t):t.toFixed(e)}function r(){for(var e="",r=0;r<arguments.length;r+=1){var n=arguments[r];n>=0&&r>0&&(e+=" "),e+=t(n)}return e}e=void 0!==e?e:2;for(var n="",o=0;o<this.commands.length;o+=1){var i=this.commands[o];"M"===i.type?n+="M"+r(i.x,i.y):"L"===i.type?n+="L"+r(i.x,i.y):"C"===i.type?n+="C"+r(i.x1,i.y1,i.x2,i.y2,i.x,i.y):"Q"===i.type?n+="Q"+r(i.x1,i.y1,i.x,i.y):"Z"===i.type&&(n+="Z")}return n},n.prototype.toSVG=function(e){var t='<path d="';return t+=this.toPathData(e),t+='"',this.fill&"black"!==this.fill&&(t+=null===this.fill?' fill="none"':' fill="'+this.fill+'"'),this.stroke&&(t+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),t+="/>"},r.Path=n},{}],11:[function(e,t,r){"use strict";function n(e,t,r){var n;for(n=0;n<t.length;n+=1){var o=t[n];this[o.name]=o.value}if(this.tableName=e,this.fields=t,r){var i=Object.keys(r);for(n=0;n<i.length;n+=1){var a=i[n],s=r[a];void 0!==this[a]&&(this[a]=s)}}}var o=e("./check"),i=e("./types").encode,a=e("./types").sizeOf;n.prototype.sizeOf=function(){for(var e=0,t=0;t<this.fields.length;t+=1){var r=this.fields[t],n=this[r.name];if(void 0===n&&(n=r.value),"function"==typeof n.sizeOf)e+=n.sizeOf();else{var i=a[r.type];o.assert("function"==typeof i,"Could not find sizeOf function for field"+r.name),e+=i(n)}}return e},n.prototype.encode=function(){return i.TABLE(this)},r.Table=n},{"./check":2,"./types":26}],12:[function(e,t,r){"use strict";function n(e,t){if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r+=1)if(!n(e[r],t[r]))return!1;return!0}return!1}function o(e,t,r){var n,o,i,a=[],s=[],h=O.getCard16(e,t);if(0!==h){var l=O.getByte(e,t+2);o=t+(h+1)*l+2;var u=t+3;for(n=0;h+1>n;n+=1)a.push(O.getOffset(e,u,l)),u+=l;i=o+a[h]}else i=t+2;for(n=0;n<a.length-1;n+=1){var p=O.getBytes(e,o+a[n],o+a[n+1]);r&&(p=r(p)),s.push(p)}return{objects:s,startOffset:t,endOffset:i}}function i(e){for(var t="",r=15,n=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var o=e.parseByte(),i=o>>4,a=15&o;if(i===r)break;if(t+=n[i],a===r)break;t+=n[a]}return parseFloat(t)}function a(e,t){var r,n,o,a;if(28===t)return r=e.parseByte(),n=e.parseByte(),r<<8|n;if(29===t)return r=e.parseByte(),n=e.parseByte(),o=e.parseByte(),a=e.parseByte(),r<<24|n<<16|o<<8|a;if(30===t)return i(e);if(t>=32&&246>=t)return t-139;if(t>=247&&250>=t)return r=e.parseByte(),256*(t-247)+r+108;if(t>=251&&254>=t)return r=e.parseByte(),256*-(t-251)-r-108;throw new Error("Invalid b0 "+t)}function s(e){for(var t={},r=0;r<e.length;r+=1){var n,o=e[r][0],i=e[r][1];if(n=1===i.length?i[0]:i,t.hasOwnProperty(o))throw new Error("Object "+t+" already has key "+o);t[o]=n}return t}function h(e,t,r){t=void 0!==t?t:0;var n=new O.Parser(e,t),o=[],i=[];for(r=void 0!==r?r:e.length;n.relativeOffset<r;){var h=n.parseByte();21>=h?(12===h&&(h=1200+n.parseByte()),o.push([h,i]),i=[]):i.push(a(n,h))}return s(o)}function l(e,t){return t=390>=t?D.cffStandardStrings[t]:e[t-391]}function u(e,t,r){for(var n={},o=0;o<t.length;o+=1){var i=t[o],a=e[i.op];void 0===a&&(a=void 0!==i.value?i.value:null),"SID"===i.type&&(a=l(r,a)),n[i.name]=a}return n}function p(e,t){var r={};return r.formatMajor=O.getCard8(e,t),r.formatMinor=O.getCard8(e,t+1),r.size=O.getCard8(e,t+2),r.offsetSize=O.getCard8(e,t+3),r.startOffset=t,r.endOffset=t+4,r}function c(e,t){var r=h(e,0,e.byteLength);return u(r,F,t)}function f(e,t,r,n){var o=h(e,t,r);return u(o,G,n)}function d(e,t,r,n){var o,i,a,s=new O.Parser(e,t);r-=1;var h=[".notdef"],u=s.parseCard8();if(0===u)for(o=0;r>o;o+=1)i=s.parseSID(),h.push(l(n,i));else if(1===u)for(;h.length<=r;)for(i=s.parseSID(),a=s.parseCard8(),o=0;a>=o;o+=1)h.push(l(n,i)),i+=1;else{if(2!==u)throw new Error("Unknown charset format "+u);for(;h.length<=r;)for(i=s.parseSID(),a=s.parseCard16(),o=0;a>=o;o+=1)h.push(l(n,i)),i+=1}return h}function m(e,t,r){var n,o,i={},a=new O.Parser(e,t),s=a.parseCard8();if(0===s){var h=a.parseCard8();for(n=0;h>n;n+=1)o=a.parseCard8(),i[o]=n}else{if(1!==s)throw new Error("Unknown encoding format "+s);var l=a.parseCard8();for(o=1,n=0;l>n;n+=1)for(var u=a.parseCard8(),p=a.parseCard8(),c=u;u+p>=c;c+=1)i[c]=o,o+=1}return new D.CffEncoding(i,r)}function g(e,t,r){function n(e,t){m&&u.closePath(),u.moveTo(e,t),m=!0}function o(){var t;t=p.length%2!==0,t&&!f&&(d=p.shift()+e.nominalWidthX),c+=p.length>>1,p.length=0,f=!0
}function i(r){for(var v,x,_,b,w,S,T,M,C,R,E,A,P=0;P<r.length;){var L=r[P];switch(P+=1,L){case 1:o();break;case 3:o();break;case 4:p.length>1&&!f&&(d=p.shift()+e.nominalWidthX,f=!0),y+=p.pop(),n(g,y);break;case 5:for(;p.length>0;)g+=p.shift(),y+=p.shift(),u.lineTo(g,y);break;case 6:for(;p.length>0&&(g+=p.shift(),u.lineTo(g,y),0!==p.length);)y+=p.shift(),u.lineTo(g,y);break;case 7:for(;p.length>0&&(y+=p.shift(),u.lineTo(g,y),0!==p.length);)g+=p.shift(),u.lineTo(g,y);break;case 8:for(;p.length>0;)a=g+p.shift(),s=y+p.shift(),h=a+p.shift(),l=s+p.shift(),g=h+p.shift(),y=l+p.shift(),u.curveTo(a,s,h,l,g,y);break;case 10:w=p.pop()+e.subrsBias,S=e.subrs[w],S&&i(S);break;case 11:return;case 12:switch(L=r[P],P+=1,L){case 35:a=g+p.shift(),s=y+p.shift(),h=a+p.shift(),l=s+p.shift(),T=h+p.shift(),M=l+p.shift(),C=T+p.shift(),R=M+p.shift(),E=C+p.shift(),A=R+p.shift(),g=E+p.shift(),y=A+p.shift(),p.shift(),u.curveTo(a,s,h,l,T,M),u.curveTo(C,R,E,A,g,y);break;case 34:a=g+p.shift(),s=y,h=a+p.shift(),l=s+p.shift(),T=h+p.shift(),M=l,C=T+p.shift(),R=l,E=C+p.shift(),A=y,g=E+p.shift(),u.curveTo(a,s,h,l,T,M),u.curveTo(C,R,E,A,g,y);break;case 36:a=g+p.shift(),s=y+p.shift(),h=a+p.shift(),l=s+p.shift(),T=h+p.shift(),M=l,C=T+p.shift(),R=l,E=C+p.shift(),A=R+p.shift(),g=E+p.shift(),u.curveTo(a,s,h,l,T,M),u.curveTo(C,R,E,A,g,y);break;case 37:a=g+p.shift(),s=y+p.shift(),h=a+p.shift(),l=s+p.shift(),T=h+p.shift(),M=l+p.shift(),C=T+p.shift(),R=M+p.shift(),E=C+p.shift(),A=R+p.shift(),Math.abs(E-g)>Math.abs(A-y)?g=E+p.shift():y=A+p.shift(),u.curveTo(a,s,h,l,T,M),u.curveTo(C,R,E,A,g,y);break;default:console.log("Glyph "+t.index+": unknown operator 1200"+L),p.length=0}break;case 14:p.length>0&&!f&&(d=p.shift()+e.nominalWidthX,f=!0),m&&(u.closePath(),m=!1);break;case 18:o();break;case 19:case 20:o(),P+=c+7>>3;break;case 21:p.length>2&&!f&&(d=p.shift()+e.nominalWidthX,f=!0),y+=p.pop(),g+=p.pop(),n(g,y);break;case 22:p.length>1&&!f&&(d=p.shift()+e.nominalWidthX,f=!0),g+=p.pop(),n(g,y);break;case 23:o();break;case 24:for(;p.length>2;)a=g+p.shift(),s=y+p.shift(),h=a+p.shift(),l=s+p.shift(),g=h+p.shift(),y=l+p.shift(),u.curveTo(a,s,h,l,g,y);g+=p.shift(),y+=p.shift(),u.lineTo(g,y);break;case 25:for(;p.length>6;)g+=p.shift(),y+=p.shift(),u.lineTo(g,y);a=g+p.shift(),s=y+p.shift(),h=a+p.shift(),l=s+p.shift(),g=h+p.shift(),y=l+p.shift(),u.curveTo(a,s,h,l,g,y);break;case 26:for(p.length%2&&(g+=p.shift());p.length>0;)a=g,s=y+p.shift(),h=a+p.shift(),l=s+p.shift(),g=h,y=l+p.shift(),u.curveTo(a,s,h,l,g,y);break;case 27:for(p.length%2&&(y+=p.shift());p.length>0;)a=g+p.shift(),s=y,h=a+p.shift(),l=s+p.shift(),g=h+p.shift(),y=l,u.curveTo(a,s,h,l,g,y);break;case 28:v=r[P],x=r[P+1],p.push((v<<24|x<<16)>>16),P+=2;break;case 29:w=p.pop()+e.gsubrsBias,S=e.gsubrs[w],S&&i(S);break;case 30:for(;p.length>0&&(a=g,s=y+p.shift(),h=a+p.shift(),l=s+p.shift(),g=h+p.shift(),y=l+(1===p.length?p.shift():0),u.curveTo(a,s,h,l,g,y),0!==p.length);)a=g+p.shift(),s=y,h=a+p.shift(),l=s+p.shift(),y=l+p.shift(),g=h+(1===p.length?p.shift():0),u.curveTo(a,s,h,l,g,y);break;case 31:for(;p.length>0&&(a=g+p.shift(),s=y,h=a+p.shift(),l=s+p.shift(),y=l+p.shift(),g=h+(1===p.length?p.shift():0),u.curveTo(a,s,h,l,g,y),0!==p.length);)a=g,s=y+p.shift(),h=a+p.shift(),l=s+p.shift(),g=h+p.shift(),y=l+(1===p.length?p.shift():0),u.curveTo(a,s,h,l,g,y);break;default:32>L?console.log("Glyph "+t.index+": unknown operator "+L):247>L?p.push(L-139):251>L?(v=r[P],P+=1,p.push(256*(L-247)+v+108)):255>L?(v=r[P],P+=1,p.push(256*-(L-251)-v-108)):(v=r[P],x=r[P+1],_=r[P+2],b=r[P+3],P+=4,p.push((v<<24|x<<16|_<<8|b)/65536))}}}var a,s,h,l,u=new k.Path,p=[],c=0,f=!1,d=e.defaultWidthX,m=!1,g=0,y=0;return i(r),t.advanceWidth=d,u}function y(e){var t;return t=e.length<1240?107:e.length<33900?1131:32768}function v(e,t,r){r.tables.cff={};var n=p(e,t),i=o(e,n.endOffset,O.bytesToString),a=o(e,i.endOffset),s=o(e,a.endOffset,O.bytesToString),h=o(e,s.endOffset);r.gsubrs=h.objects,r.gsubrsBias=y(r.gsubrs);var l=new DataView(new Uint8Array(a.objects[0]).buffer),u=c(l,s.objects);r.tables.cff.topDict=u;var v=t+u["private"][1],x=f(e,v,u["private"][0],s.objects);if(r.defaultWidthX=x.defaultWidthX,r.nominalWidthX=x.nominalWidthX,0!==x.subrs){var _=v+x.subrs,b=o(e,_);r.subrs=b.objects,r.subrsBias=y(r.subrs)}else r.subrs=[],r.subrsBias=0;var w=o(e,t+u.charStrings);r.nGlyphs=w.objects.length;var S=d(e,t+u.charset,r.nGlyphs,s.objects);r.cffEncoding=0===u.encoding?new D.CffEncoding(D.cffStandardEncoding,S):1===u.encoding?new D.CffEncoding(D.cffExpertEncoding,S):m(e,t+u.encoding,S),r.encoding=r.encoding||r.cffEncoding,r.glyphs=new N.GlyphSet(r);for(var T=0;T<r.nGlyphs;T+=1){var M=w.objects[T];r.glyphs.push(T,N.cffGlyphLoader(r,T,g,M))}}function x(e,t){var r,n=D.cffStandardStrings.indexOf(e);return n>=0&&(r=n),n=t.indexOf(e),n>=0?r=n+D.cffStandardStrings.length:(r=D.cffStandardStrings.length+t.length,t.push(e)),r}function _(){return new U.Table("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function b(e){var t=new U.Table("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);t.names=[];for(var r=0;r<e.length;r+=1)t.names.push({name:"name_"+r,type:"NAME",value:e[r]});return t}function w(e,t,r){for(var o={},i=0;i<e.length;i+=1){var a=e[i],s=t[a.name];void 0===s||n(s,a.value)||("SID"===a.type&&(s=x(s,r)),o[a.op]={name:a.name,type:a.type,value:s})}return o}function S(e,t){var r=new U.Table("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=w(F,e,t),r}function T(e){var t=new U.Table("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return t.topDicts=[{name:"topDict_0",type:"TABLE",value:e}],t}function M(e){var t=new U.Table("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);t.strings=[];for(var r=0;r<e.length;r+=1)t.strings.push({name:"string_"+r,type:"STRING",value:e[r]});return t}function C(){return new U.Table("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function R(e,t){for(var r=new U.Table("Charsets",[{name:"format",type:"Card8",value:0}]),n=0;n<e.length;n+=1){var o=e[n],i=x(o,t);r.fields.push({name:"glyph_"+n,type:"SID",value:i})}return r}function E(e){var t=[],r=e.path;t.push({name:"width",type:"NUMBER",value:e.advanceWidth});for(var n=0,o=0,i=0;i<r.commands.length;i+=1){var a,s,h=r.commands[i];if("Q"===h.type){var l=1/3,u=2/3;h={type:"C",x:h.x,y:h.y,x1:l*n+u*h.x1,y1:l*o+u*h.y1,x2:l*h.x+u*h.x1,y2:l*h.y+u*h.y1}}if("M"===h.type)a=Math.round(h.x-n),s=Math.round(h.y-o),t.push({name:"dx",type:"NUMBER",value:a}),t.push({name:"dy",type:"NUMBER",value:s}),t.push({name:"rmoveto",type:"OP",value:21}),n=Math.round(h.x),o=Math.round(h.y);else if("L"===h.type)a=Math.round(h.x-n),s=Math.round(h.y-o),t.push({name:"dx",type:"NUMBER",value:a}),t.push({name:"dy",type:"NUMBER",value:s}),t.push({name:"rlineto",type:"OP",value:5}),n=Math.round(h.x),o=Math.round(h.y);else if("C"===h.type){var p=Math.round(h.x1-n),c=Math.round(h.y1-o),f=Math.round(h.x2-h.x1),d=Math.round(h.y2-h.y1);a=Math.round(h.x-h.x2),s=Math.round(h.y-h.y2),t.push({name:"dx1",type:"NUMBER",value:p}),t.push({name:"dy1",type:"NUMBER",value:c}),t.push({name:"dx2",type:"NUMBER",value:f}),t.push({name:"dy2",type:"NUMBER",value:d}),t.push({name:"dx",type:"NUMBER",value:a}),t.push({name:"dy",type:"NUMBER",value:s}),t.push({name:"rrcurveto",type:"OP",value:8}),n=Math.round(h.x),o=Math.round(h.y)}}return t.push({name:"endchar",type:"OP",value:14}),t}function A(e){for(var t=new U.Table("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),r=0;r<e.length;r+=1){var n=e.get(r),o=E(n);t.charStrings.push({name:n.name,type:"CHARSTRING",value:o})}return t}function P(e,t){var r=new U.Table("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=w(G,e,t),r}function L(e){var t=new U.Table("Private DICT INDEX",[{name:"privateDicts",type:"INDEX",value:[]}]);return t.privateDicts=[{name:"privateDict_0",type:"TABLE",value:e}],t}function I(e,t){for(var r,n=new U.Table("CFF ",[{name:"header",type:"TABLE"},{name:"nameIndex",type:"TABLE"},{name:"topDictIndex",type:"TABLE"},{name:"stringIndex",type:"TABLE"},{name:"globalSubrIndex",type:"TABLE"},{name:"charsets",type:"TABLE"},{name:"charStringsIndex",type:"TABLE"},{name:"privateDictIndex",type:"TABLE"}]),o=1/t.unitsPerEm,i={version:t.version,fullName:t.fullName,familyName:t.familyName,weight:t.weightName,fontMatrix:[o,0,0,o,0,0],charset:999,encoding:0,charStrings:999,"private":[0,999]},a={},s=[],h=1;h<e.length;h+=1)r=e.get(h),s.push(r.name);var l=[];n.header=_(),n.nameIndex=b([t.postScriptName]);var u=S(i,l);n.topDictIndex=T(u),n.globalSubrIndex=C(),n.charsets=R(s,l),n.charStringsIndex=A(e);var p=P(a,l);n.privateDictIndex=L(p),n.stringIndex=M(l);var c=n.header.sizeOf()+n.nameIndex.sizeOf()+n.topDictIndex.sizeOf()+n.stringIndex.sizeOf()+n.globalSubrIndex.sizeOf();return i.charset=c,i.encoding=0,i.charStrings=i.charset+n.charsets.sizeOf(),i.private[1]=i.charStrings+n.charStringsIndex.sizeOf(),u=S(i,l),n.topDictIndex=T(u),n}var D=e("../encoding"),N=e("../glyphset"),O=e("../parse"),k=e("../path"),U=e("../table"),F=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]}],G=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];r.parse=v,r.make=I},{"../encoding":4,"../glyphset":7,"../parse":9,"../path":10,"../table":11}],13:[function(e,t,r){"use strict";function n(e,t){var r,n={};n.version=h.getUShort(e,t),s.argument(0===n.version,"cmap table version should be 0."),n.numTables=h.getUShort(e,t+2);var o=-1;for(r=0;r<n.numTables;r+=1){var i=h.getUShort(e,t+4+8*r),a=h.getUShort(e,t+4+8*r+2);if(3===i&&(1===a||0===a)){o=h.getULong(e,t+4+8*r+4);break}}if(-1===o)return null;var l=new h.Parser(e,t+o);n.format=l.parseUShort(),s.argument(4===n.format,"Only format 4 cmap tables are supported."),n.length=l.parseUShort(),n.language=l.parseUShort();var u;n.segCount=u=l.parseUShort()>>1,l.skip("uShort",3),n.glyphIndexMap={};var p=new h.Parser(e,t+o+14),c=new h.Parser(e,t+o+16+2*u),f=new h.Parser(e,t+o+16+4*u),d=new h.Parser(e,t+o+16+6*u),m=t+o+16+8*u;for(r=0;u-1>r;r+=1)for(var g,y=p.parseUShort(),v=c.parseUShort(),x=f.parseShort(),_=d.parseUShort(),b=v;y>=b;b+=1)0!==_?(m=d.offset+d.relativeOffset-2,m+=_,m+=2*(b-v),g=h.getUShort(e,m),0!==g&&(g=g+x&65535)):g=b+x&65535,n.glyphIndexMap[b]=g;return n}function o(e,t,r){e.segments.push({end:t,start:t,delta:-(t-r),offset:0})}function i(e){e.segments.push({end:65535,start:65535,delta:1,offset:0})}function a(e){var t,r=new l.Table("cmap",[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:1},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:12},{name:"format",type:"USHORT",value:4},{name:"length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);for(r.segments=[],t=0;t<e.length;t+=1){for(var n=e.get(t),a=0;a<n.unicodes.length;a+=1)o(r,n.unicodes[a],t);r.segments=r.segments.sort(function(e,t){return e.start-t.start})}i(r);var s;s=r.segments.length,r.segCountX2=2*s,r.searchRange=2*Math.pow(2,Math.floor(Math.log(s)/Math.log(2))),r.entrySelector=Math.log(r.searchRange/2)/Math.log(2),r.rangeShift=r.segCountX2-r.searchRange;var h=[],u=[],p=[],c=[],f=[];for(t=0;s>t;t+=1){var d=r.segments[t];h=h.concat({name:"end_"+t,type:"USHORT",value:d.end}),u=u.concat({name:"start_"+t,type:"USHORT",value:d.start}),p=p.concat({name:"idDelta_"+t,type:"SHORT",value:d.delta}),c=c.concat({name:"idRangeOffset_"+t,type:"USHORT",value:d.offset}),void 0!==d.glyphId&&(f=f.concat({name:"glyph_"+t,type:"USHORT",value:d.glyphId}))}return r.fields=r.fields.concat(h),r.fields.push({name:"reservedPad",type:"USHORT",value:0}),r.fields=r.fields.concat(u),r.fields=r.fields.concat(p),r.fields=r.fields.concat(c),r.fields=r.fields.concat(f),r.length=14+2*h.length+2+2*u.length+2*p.length+2*c.length+2*f.length,r}var s=e("../check"),h=e("../parse"),l=e("../table");r.parse=n,r.make=a},{"../check":2,"../parse":9,"../table":11}],14:[function(e,t,r){"use strict";function n(e,t,r,n,o){var i;return(t&n)>0?(i=e.parseByte(),0===(t&o)&&(i=-i),i=r+i):i=(t&o)>0?r:r+e.parseShort(),i}function o(e,t,r){var o=new c.Parser(t,r);e.numberOfContours=o.parseShort(),e.xMin=o.parseShort(),e.yMin=o.parseShort(),e.xMax=o.parseShort(),e.yMax=o.parseShort();var i,a;if(e.numberOfContours>0){var s,h=e.endPointIndices=[];for(s=0;s<e.numberOfContours;s+=1)h.push(o.parseUShort());for(e.instructionLength=o.parseUShort(),e.instructions=[],s=0;s<e.instructionLength;s+=1)e.instructions.push(o.parseByte());var l=h[h.length-1]+1;for(i=[],s=0;l>s;s+=1)if(a=o.parseByte(),i.push(a),(8&a)>0)for(var p=o.parseByte(),f=0;p>f;f+=1)i.push(a),s+=1;if(u.argument(i.length===l,"Bad flags."),h.length>0){var d,m=[];if(l>0){for(s=0;l>s;s+=1)a=i[s],d={},d.onCurve=!!(1&a),d.lastPointOfContour=h.indexOf(s)>=0,m.push(d);var g=0;for(s=0;l>s;s+=1)a=i[s],d=m[s],d.x=n(o,a,g,2,16),g=d.x;var y=0;for(s=0;l>s;s+=1)a=i[s],d=m[s],d.y=n(o,a,y,4,32),y=d.y}e.points=m}else e.points=[]}else if(0===e.numberOfContours)e.points=[];else{e.isComposite=!0,e.points=[],e.components=[];for(var v=!0;v;){i=o.parseUShort();var x={glyphIndex:o.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(1&i)>0?(x.dx=o.parseShort(),x.dy=o.parseShort()):(x.dx=o.parseChar(),x.dy=o.parseChar()),(8&i)>0?x.xScale=x.yScale=o.parseF2Dot14():(64&i)>0?(x.xScale=o.parseF2Dot14(),x.yScale=o.parseF2Dot14()):(128&i)>0&&(x.xScale=o.parseF2Dot14(),x.scale01=o.parseF2Dot14(),x.scale10=o.parseF2Dot14(),x.yScale=o.parseF2Dot14()),e.components.push(x),v=!!(32&i)}}}function i(e,t){for(var r=[],n=0;n<e.length;n+=1){var o=e[n],i={x:t.xScale*o.x+t.scale01*o.y+t.dx,y:t.scale10*o.x+t.yScale*o.y+t.dy,onCurve:o.onCurve,lastPointOfContour:o.lastPointOfContour};r.push(i)}return r}function a(e){for(var t=[],r=[],n=0;n<e.length;n+=1){var o=e[n];r.push(o),o.lastPointOfContour&&(t.push(r),r=[])}return u.argument(0===r.length,"There are still points left in the current contour."),t}function s(e){var t=new f.Path;if(!e)return t;for(var r=a(e),n=0;n<r.length;n+=1){var o,i,s=r[n],h=s[0],l=s[s.length-1];h.onCurve?(o=null,i=!0):(h=l.onCurve?l:{x:(h.x+l.x)/2,y:(h.y+l.y)/2},o=h,i=!1),t.moveTo(h.x,h.y);for(var u=i?1:0;u<s.length;u+=1){var p=s[u],c=0===u?h:s[u-1];if(c.onCurve&&p.onCurve)t.lineTo(p.x,p.y);else if(c.onCurve&&!p.onCurve)o=p;else if(c.onCurve||p.onCurve){if(c.onCurve||!p.onCurve)throw new Error("Invalid state.");t.quadraticCurveTo(o.x,o.y,p.x,p.y),o=null}else{var d={x:(c.x+p.x)/2,y:(c.y+p.y)/2};t.quadraticCurveTo(c.x,c.y,d.x,d.y),o=p}}h!==l&&(o?t.quadraticCurveTo(o.x,o.y,h.x,h.y):t.lineTo(h.x,h.y))}return t.closePath(),t}function h(e,t){if(t.isComposite)for(var r=0;r<t.components.length;r+=1){var n=t.components[r],o=e.get(n.glyphIndex);if(o.points){var a=i(o.points,n);t.points=t.points.concat(a)}}return s(t.points)}function l(e,t,r,n){var i,a=new p.GlyphSet(n);for(i=0;i<r.length-1;i+=1){var s=r[i],l=r[i+1];s!==l?a.push(i,p.ttfGlyphLoader(n,i,o,e,t+s,h)):a.push(i,p.glyphLoader(n,i))}return a}var u=e("../check"),p=e("../glyphset"),c=e("../parse"),f=e("../path");r.parse=l},{"../check":2,"../glyphset":7,"../parse":9,"../path":10}],15:[function(e,t,r){"use strict";function n(e,t){for(var r=new u.Parser(e,t),n=r.parseUShort(),o=[],i=0;n>i;i++)o[r.parseTag()]={offset:r.parseUShort()};return o}function o(e,t){var r=new u.Parser(e,t),n=r.parseUShort(),o=r.parseUShort();if(1===n)return r.parseUShortList(o);if(2===n){for(var i=[];o--;)for(var a=r.parseUShort(),s=r.parseUShort(),h=r.parseUShort(),l=a;s>=l;l++)i[h++]=l;return i}}function i(e,t){var r=new u.Parser(e,t),n=r.parseUShort();if(1===n){var o=r.parseUShort(),i=r.parseUShort(),a=r.parseUShortList(i);return function(e){return a[e-o]||0}}if(2===n){for(var s=r.parseUShort(),h=[],l=[],p=[],c=0;s>c;c++)h[c]=r.parseUShort(),l[c]=r.parseUShort(),p[c]=r.parseUShort();return function(e){for(var t=0,r=h.length-1;r>t;){var n=t+r+1>>1;e<h[n]?r=n-1:t=n}return h[t]<=e&&e<=l[t]?p[t]||0:0}}}function a(e,t){var r,n,a=new u.Parser(e,t),s=a.parseUShort(),h=a.parseUShort(),l=o(e,t+h),p=a.parseUShort(),c=a.parseUShort();if(4===p&&0===c){var f={};if(1===s){for(var d=a.parseUShort(),m=[],g=a.parseOffset16List(d),y=0;d>y;y++){var v=g[y],x=f[v];if(!x){x={},a.relativeOffset=v;for(var _=a.parseUShort();_--;){var b=a.parseUShort();p&&(r=a.parseShort()),c&&(n=a.parseShort()),x[b]=r}}m[l[y]]=x}return function(e,t){var r=m[e];return r?r[t]:void 0}}if(2===s){for(var w=a.parseUShort(),S=a.parseUShort(),T=a.parseUShort(),M=a.parseUShort(),C=i(e,t+w),R=i(e,t+S),E=[],A=0;T>A;A++)for(var P=E[A]=[],L=0;M>L;L++)p&&(r=a.parseShort()),c&&(n=a.parseShort()),P[L]=r;var I={};for(A=0;A<l.length;A++)I[l[A]]=1;return function(e,t){if(I[e]){var r=C(e),n=R(t),o=E[r];return o?o[n]:void 0}}}}}function s(e,t){var r=new u.Parser(e,t),n=r.parseUShort(),o=r.parseUShort(),i=16&o,s=r.parseUShort(),h=r.parseOffset16List(s),l={lookupType:n,lookupFlag:o,markFilteringSet:i?r.parseUShort():-1};if(2===n){for(var p=[],c=0;s>c;c++)p.push(a(e,t+h[c]));l.getKerningValue=function(e,t){for(var r=p.length;r--;){var n=p[r](e,t);if(void 0!==n)return n}return 0}}return l}function h(e,t,r){var o=new u.Parser(e,t),i=o.parseFixed();l.argument(1===i,"Unsupported GPOS table version."),n(e,t+o.parseUShort()),n(e,t+o.parseUShort());var a=o.parseUShort();o.relativeOffset=a;for(var h=o.parseUShort(),p=o.parseOffset16List(h),c=t+a,f=0;h>f;f++){var d=s(e,c+p[f]);2!==d.lookupType||r.getGposKerningValue||(r.getGposKerningValue=d.getKerningValue)}}var l=e("../check"),u=e("../parse");r.parse=h},{"../check":2,"../parse":9}],16:[function(e,t,r){"use strict";function n(e,t){var r={},n=new a.Parser(e,t);return r.version=n.parseVersion(),r.fontRevision=Math.round(1e3*n.parseFixed())/1e3,r.checkSumAdjustment=n.parseULong(),r.magicNumber=n.parseULong(),i.argument(1594834165===r.magicNumber,"Font header has wrong magic number."),r.flags=n.parseUShort(),r.unitsPerEm=n.parseUShort(),r.created=n.parseLongDateTime(),r.modified=n.parseLongDateTime(),r.xMin=n.parseShort(),r.yMin=n.parseShort(),r.xMax=n.parseShort(),r.yMax=n.parseShort(),r.macStyle=n.parseUShort(),r.lowestRecPPEM=n.parseUShort(),r.fontDirectionHint=n.parseShort(),r.indexToLocFormat=n.parseShort(),r.glyphDataFormat=n.parseShort(),r}function o(e){return new s.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:0},{name:"modified",type:"LONGDATETIME",value:0},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],e)}var i=e("../check"),a=e("../parse"),s=e("../table");r.parse=n,r.make=o},{"../check":2,"../parse":9,"../table":11}],17:[function(e,t,r){"use strict";function n(e,t){var r={},n=new i.Parser(e,t);return r.version=n.parseVersion(),r.ascender=n.parseShort(),r.descender=n.parseShort(),r.lineGap=n.parseShort(),r.advanceWidthMax=n.parseUShort(),r.minLeftSideBearing=n.parseShort(),r.minRightSideBearing=n.parseShort(),r.xMaxExtent=n.parseShort(),r.caretSlopeRise=n.parseShort(),r.caretSlopeRun=n.parseShort(),r.caretOffset=n.parseShort(),n.relativeOffset+=8,r.metricDataFormat=n.parseShort(),r.numberOfHMetrics=n.parseUShort(),r}function o(e){return new a.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],e)}var i=e("../parse"),a=e("../table");r.parse=n,r.make=o},{"../parse":9,"../table":11}],18:[function(e,t,r){"use strict";function n(e,t,r,n,o){for(var a,s,h=new i.Parser(e,t),l=0;n>l;l+=1){r>l&&(a=h.parseUShort(),s=h.parseShort());var u=o.get(l);u.advanceWidth=a,u.leftSideBearing=s}}function o(e){for(var t=new a.Table("hmtx",[]),r=0;r<e.length;r+=1){var n=e.get(r),o=n.advanceWidth||0,i=n.leftSideBearing||0;t.fields.push({name:"advanceWidth_"+r,type:"USHORT",value:o}),t.fields.push({name:"leftSideBearing_"+r,type:"SHORT",value:i})}return t}var i=e("../parse"),a=e("../table");r.parse=n,r.make=o},{"../parse":9,"../table":11}],19:[function(e,t,r){"use strict";function n(e,t){var r={},n=new i.Parser(e,t),a=n.parseUShort();o.argument(0===a,"Unsupported kern table version."),n.skip("uShort",1);var s=n.parseUShort();o.argument(0===s,"Unsupported kern sub-table version."),n.skip("uShort",2);var h=n.parseUShort();n.skip("uShort",3);for(var l=0;h>l;l+=1){var u=n.parseUShort(),p=n.parseUShort(),c=n.parseShort();r[u+","+p]=c}return r}var o=e("../check"),i=e("../parse");r.parse=n},{"../check":2,"../parse":9}],20:[function(e,t,r){"use strict";function n(e,t,r,n){for(var i=new o.Parser(e,t),a=n?i.parseUShort:i.parseULong,s=[],h=0;r+1>h;h+=1){var l=a.call(i);n&&(l*=2),s.push(l)}return s}var o=e("../parse");r.parse=n},{"../parse":9}],21:[function(e,t,r){"use strict";function n(e,t){var r={},n=new i.Parser(e,t);return r.version=n.parseVersion(),r.numGlyphs=n.parseUShort(),1===r.version&&(r.maxPoints=n.parseUShort(),r.maxContours=n.parseUShort(),r.maxCompositePoints=n.parseUShort(),r.maxCompositeContours=n.parseUShort(),r.maxZones=n.parseUShort(),r.maxTwilightPoints=n.parseUShort(),r.maxStorage=n.parseUShort(),r.maxFunctionDefs=n.parseUShort(),r.maxInstructionDefs=n.parseUShort(),r.maxStackElements=n.parseUShort(),r.maxSizeOfInstructions=n.parseUShort(),r.maxComponentElements=n.parseUShort(),r.maxComponentDepth=n.parseUShort()),r}function o(e){return new a.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:e}])}var i=e("../parse"),a=e("../table");r.parse=n,r.make=o},{"../parse":9,"../table":11}],22:[function(e,t,r){"use strict";function n(e,t){var r={},n=new l.Parser(e,t);r.format=n.parseUShort();for(var o=n.parseUShort(),i=n.offset+n.parseUShort(),a=0,s=0;o>s;s++){var h=n.parseUShort(),u=n.parseUShort(),c=n.parseUShort(),f=n.parseUShort(),d=p[f],m=n.parseUShort(),g=n.parseUShort();if(3===h&&1===u&&1033===c){for(var y=[],v=m/2,x=0;v>x;x++,g+=2)y[x]=l.getShort(e,i+g);var _=String.fromCharCode.apply(null,y);d?r[d]=_:(a++,r["unknown"+a]=_)}}return 1===r.format&&(r.langTagCount=n.parseUShort()),r}function o(e,t,r,n,o,i){return new u.Table("NameRecord",[{name:"platformID",type:"USHORT",value:e},{name:"encodingID",type:"USHORT",value:t},{name:"languageID",type:"USHORT",value:r},{name:"nameID",type:"USHORT",value:n},{name:"length",type:"USHORT",value:o},{name:"offset",type:"USHORT",value:i}])}function i(e,t,r,n){var i=h.STRING(r);return e.records.push(o(1,0,0,t,i.length,n)),e.strings.push(i),n+=i.length}function a(e,t,r,n){var i=h.UTF16(r);return e.records.push(o(3,1,1033,t,i.length,n)),e.strings.push(i),n+=i.length}function s(e){var t=new u.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:0},{name:"stringOffset",type:"USHORT",value:0}]);t.records=[],t.strings=[];var r,n,o=0;for(r=0;r<p.length;r+=1)void 0!==e[p[r]]&&(n=e[p[r]],o=i(t,r,n,o));for(r=0;r<p.length;r+=1)void 0!==e[p[r]]&&(n=e[p[r]],o=a(t,r,n,o));for(t.count=t.records.length,t.stringOffset=6+12*t.count,r=0;r<t.records.length;r+=1)t.fields.push({name:"record_"+r,type:"TABLE",value:t.records[r]});for(r=0;r<t.strings.length;r+=1)t.fields.push({name:"string_"+r,type:"LITERAL",value:t.strings[r]});return t}var h=e("../types").encode,l=e("../parse"),u=e("../table"),p=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","licence","licenceURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"];r.parse=n,r.make=s},{"../parse":9,"../table":11,"../types":26}],23:[function(e,t,r){"use strict";function n(e){for(var t=0;t<h.length;t+=1){var r=h[t];if(e>=r.begin&&e<r.end)return t}return-1}function o(e,t){var r={},n=new a.Parser(e,t);r.version=n.parseUShort(),r.xAvgCharWidth=n.parseShort(),r.usWeightClass=n.parseUShort(),r.usWidthClass=n.parseUShort(),r.fsType=n.parseUShort(),r.ySubscriptXSize=n.parseShort(),r.ySubscriptYSize=n.parseShort(),r.ySubscriptXOffset=n.parseShort(),r.ySubscriptYOffset=n.parseShort(),r.ySuperscriptXSize=n.parseShort(),r.ySuperscriptYSize=n.parseShort(),r.ySuperscriptXOffset=n.parseShort(),r.ySuperscriptYOffset=n.parseShort(),r.yStrikeoutSize=n.parseShort(),r.yStrikeoutPosition=n.parseShort(),r.sFamilyClass=n.parseShort(),r.panose=[];for(var o=0;10>o;o++)r.panose[o]=n.parseByte();return r.ulUnicodeRange1=n.parseULong(),r.ulUnicodeRange2=n.parseULong(),r.ulUnicodeRange3=n.parseULong(),r.ulUnicodeRange4=n.parseULong(),r.achVendID=String.fromCharCode(n.parseByte(),n.parseByte(),n.parseByte(),n.parseByte()),r.fsSelection=n.parseUShort(),r.usFirstCharIndex=n.parseUShort(),r.usLastCharIndex=n.parseUShort(),r.sTypoAscender=n.parseShort(),r.sTypoDescender=n.parseShort(),r.sTypoLineGap=n.parseShort(),r.usWinAscent=n.parseUShort(),r.usWinDescent=n.parseUShort(),r.version>=1&&(r.ulCodePageRange1=n.parseULong(),r.ulCodePageRange2=n.parseULong()),r.version>=2&&(r.sxHeight=n.parseShort(),r.sCapHeight=n.parseShort(),r.usDefaultChar=n.parseUShort(),r.usBreakChar=n.parseUShort(),r.usMaxContent=n.parseUShort()),r}function i(e){return new s.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],e)}var a=e("../parse"),s=e("../table"),h=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];
r.unicodeRanges=h,r.getUnicodeRange=n,r.parse=o,r.make=i},{"../parse":9,"../table":11}],24:[function(e,t,r){"use strict";function n(e,t){var r,n={},o=new a.Parser(e,t);switch(n.version=o.parseVersion(),n.italicAngle=o.parseFixed(),n.underlinePosition=o.parseShort(),n.underlineThickness=o.parseShort(),n.isFixedPitch=o.parseULong(),n.minMemType42=o.parseULong(),n.maxMemType42=o.parseULong(),n.minMemType1=o.parseULong(),n.maxMemType1=o.parseULong(),n.version){case 1:n.names=i.standardNames.slice();break;case 2:for(n.numberOfGlyphs=o.parseUShort(),n.glyphNameIndex=new Array(n.numberOfGlyphs),r=0;r<n.numberOfGlyphs;r++)n.glyphNameIndex[r]=o.parseUShort();for(n.names=[],r=0;r<n.numberOfGlyphs;r++)if(n.glyphNameIndex[r]>=i.standardNames.length){var s=o.parseChar();n.names.push(o.parseString(s))}break;case 2.5:for(n.numberOfGlyphs=o.parseUShort(),n.offset=new Array(n.numberOfGlyphs),r=0;r<n.numberOfGlyphs;r++)n.offset[r]=o.parseChar()}return n}function o(){return new s.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var i=e("../encoding"),a=e("../parse"),s=e("../table");r.parse=n,r.make=o},{"../encoding":4,"../parse":9,"../table":11}],25:[function(e,t,r){"use strict";function n(e){return Math.log(e)/Math.log(2)|0}function o(e){for(;e.length%4!==0;)e.push(0);for(var t=0,r=0;r<e.length;r+=4)t+=(e[r]<<24)+(e[r+1]<<16)+(e[r+2]<<8)+e[r+3];return t%=Math.pow(2,32)}function i(e,t,r,n){return new p.Table("Table Record",[{name:"tag",type:"TAG",value:void 0!==e?e:""},{name:"checkSum",type:"ULONG",value:void 0!==t?t:0},{name:"offset",type:"ULONG",value:void 0!==r?r:0},{name:"length",type:"ULONG",value:void 0!==n?n:0}])}function a(e){var t=new p.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);t.tables=e,t.numTables=e.length;var r=Math.pow(2,n(t.numTables));t.searchRange=16*r,t.entrySelector=n(r),t.rangeShift=16*t.numTables-t.searchRange;for(var a=[],s=[],h=t.sizeOf()+i().sizeOf()*t.numTables;h%4!==0;)h+=1,s.push({name:"padding",type:"BYTE",value:0});for(var l=0;l<e.length;l+=1){var c=e[l];u.argument(4===c.tableName.length,"Table name"+c.tableName+" is invalid.");var f=c.sizeOf(),d=i(c.tableName,o(c.encode()),h,f);for(a.push({name:d.tag+" Table Record",type:"TABLE",value:d}),s.push({name:c.tableName+" table",type:"TABLE",value:c}),h+=f,u.argument(!isNaN(h),"Something went wrong calculating the offset.");h%4!==0;)h+=1,s.push({name:"padding",type:"BYTE",value:0})}return a.sort(function(e,t){return e.value.tag>t.value.tag?1:-1}),t.fields=t.fields.concat(a),t.fields=t.fields.concat(s),t}function s(e,t,r){for(var n=0;n<t.length;n+=1){var o=e.charToGlyphIndex(t[n]);if(o>0){var i=e.glyphs.get(o);return i.getMetrics()}}return r}function h(e){for(var t=0,r=0;r<e.length;r+=1)t+=e[r];return t/e.length}function l(e){for(var t,r=[],n=[],i=[],l=[],u=[],p=[],b=[],w=0,S=0,T=0,M=0,C=0,R=0;R<e.glyphs.length;R+=1){var E=e.glyphs.get(R),A=0|E.unicode;(t>A||null===t)&&(t=A),A>w&&(w=A);var P=x.getUnicodeRange(A);if(32>P)S|=1<<P;else if(64>P)T|=1<<P-32;else if(96>P)M|=1<<P-64;else{if(!(123>P))throw new Error("Unicode ranges bits > 123 are reserved for internal usage");C|=1<<P-96}if(".notdef"!==E.name){var L=E.getMetrics();r.push(L.xMin),n.push(L.yMin),i.push(L.xMax),l.push(L.yMax),p.push(L.leftSideBearing),b.push(L.rightSideBearing),u.push(E.advanceWidth)}}var I={xMin:Math.min.apply(null,r),yMin:Math.min.apply(null,n),xMax:Math.max.apply(null,i),yMax:Math.max.apply(null,l),advanceWidthMax:Math.max.apply(null,u),advanceWidthAvg:h(u),minLeftSideBearing:Math.min.apply(null,p),maxLeftSideBearing:Math.max.apply(null,p),minRightSideBearing:Math.min.apply(null,b)};I.ascender=void 0!==e.ascender?e.ascender:I.yMax,I.descender=void 0!==e.descender?e.descender:I.yMin;var D=d.make({unitsPerEm:e.unitsPerEm,xMin:I.xMin,yMin:I.yMin,xMax:I.xMax,yMax:I.yMax}),N=m.make({ascender:I.ascender,descender:I.descender,advanceWidthMax:I.advanceWidthMax,minLeftSideBearing:I.minLeftSideBearing,minRightSideBearing:I.minRightSideBearing,xMaxExtent:I.maxLeftSideBearing+(I.xMax-I.xMin),numberOfHMetrics:e.glyphs.length}),O=y.make(e.glyphs.length),k=x.make({xAvgCharWidth:Math.round(I.advanceWidthAvg),usWeightClass:500,usWidthClass:5,usFirstCharIndex:t,usLastCharIndex:w,ulUnicodeRange1:S,ulUnicodeRange2:T,ulUnicodeRange3:M,ulUnicodeRange4:C,sTypoAscender:I.ascender,sTypoDescender:I.descender,sTypoLineGap:0,usWinAscent:I.ascender,usWinDescent:-I.descender,sxHeight:s(e,"xyvw",{yMax:0}).yMax,sCapHeight:s(e,"HIKLEFJMNTZBDPRAGOQSUVWXY",I).yMax,usBreakChar:e.hasChar(" ")?32:0}),U=g.make(e.glyphs),F=c.make(e.glyphs),G=e.familyName+" "+e.styleName,B=e.familyName.replace(/\s/g,"")+"-"+e.styleName,H=v.make({copyright:e.copyright,fontFamily:e.familyName,fontSubfamily:e.styleName,uniqueID:e.manufacturer+":"+G,fullName:G,version:e.version,postScriptName:B,trademark:e.trademark,manufacturer:e.manufacturer,designer:e.designer,description:e.description,manufacturerURL:e.manufacturerURL,designerURL:e.designerURL,license:e.license,licenseURL:e.licenseURL,preferredFamily:e.familyName,preferredSubfamily:e.styleName}),V=_.make(),X=f.make(e.glyphs,{version:e.version,fullName:G,familyName:e.familyName,weightName:e.styleName,postScriptName:B,unitsPerEm:e.unitsPerEm}),q=[D,N,O,k,H,F,V,X,U],z=a(q),W=z.encode(),j=o(W),Y=z.fields,Z=!1;for(R=0;R<Y.length;R+=1)if("head table"===Y[R].name){Y[R].value.checkSumAdjustment=2981146554-j,Z=!0;break}if(!Z)throw new Error("Could not find head table with checkSum to adjust.");return z}var u=e("../check"),p=e("../table"),c=e("./cmap"),f=e("./cff"),d=e("./head"),m=e("./hhea"),g=e("./hmtx"),y=e("./maxp"),v=e("./name"),x=e("./os2"),_=e("./post");r.computeCheckSum=o,r.make=a,r.fontToTable=l},{"../check":2,"../table":11,"./cff":12,"./cmap":13,"./head":16,"./hhea":17,"./hmtx":18,"./maxp":21,"./name":22,"./os2":23,"./post":24}],26:[function(e,t,r){"use strict";function n(e){return function(){return e}}var o=e("./check"),i=32768,a=2147483648,s={},h={},l={};h.BYTE=function(e){return o.argument(e>=0&&255>=e,"Byte value should be between 0 and 255."),[e]},l.BYTE=n(1),h.CHAR=function(e){return[e.charCodeAt(0)]},l.BYTE=n(1),h.CHARARRAY=function(e){for(var t=[],r=0;r<e.length;r+=1)t.push(e.charCodeAt(r));return t},l.CHARARRAY=function(e){return e.length},h.USHORT=function(e){return[e>>8&255,255&e]},l.USHORT=n(2),h.SHORT=function(e){return e>=i&&(e=-(2*i-e)),[e>>8&255,255&e]},l.SHORT=n(2),h.UINT24=function(e){return[e>>16&255,e>>8&255,255&e]},l.UINT24=n(3),h.ULONG=function(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]},l.ULONG=n(4),h.LONG=function(e){return e>=a&&(e=-(2*a-e)),[e>>24&255,e>>16&255,e>>8&255,255&e]},l.LONG=n(4),h.FIXED=h.ULONG,l.FIXED=l.ULONG,h.FWORD=h.SHORT,l.FWORD=l.SHORT,h.UFWORD=h.USHORT,l.UFWORD=l.USHORT,h.LONGDATETIME=function(){return[0,0,0,0,0,0,0,0]},l.LONGDATETIME=n(8),h.TAG=function(e){return o.argument(4===e.length,"Tag should be exactly 4 ASCII characters."),[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]},l.TAG=n(4),h.Card8=h.BYTE,l.Card8=l.BYTE,h.Card16=h.USHORT,l.Card16=l.USHORT,h.OffSize=h.BYTE,l.OffSize=l.BYTE,h.SID=h.USHORT,l.SID=l.USHORT,h.NUMBER=function(e){return e>=-107&&107>=e?[e+139]:e>=108&&1131>=e?(e-=108,[(e>>8)+247,255&e]):e>=-1131&&-108>=e?(e=-e-108,[(e>>8)+251,255&e]):e>=-32768&&32767>=e?h.NUMBER16(e):h.NUMBER32(e)},l.NUMBER=function(e){return h.NUMBER(e).length},h.NUMBER16=function(e){return[28,e>>8&255,255&e]},l.NUMBER16=n(2),h.NUMBER32=function(e){return[29,e>>24&255,e>>16&255,e>>8&255,255&e]},l.NUMBER32=n(4),h.REAL=function(e){var t=e.toString(),r=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);if(r){var n=parseFloat("1e"+((r[2]?+r[2]:0)+r[1].length));t=(Math.round(e*n)/n).toString()}var o,i,a="";for(o=0,i=t.length;i>o;o+=1){var s=t[o];a+="e"===s?"-"===t[++o]?"c":"b":"."===s?"a":"-"===s?"e":s}a+=1&a.length?"f":"ff";var h=[30];for(o=0,i=a.length;i>o;o+=2)h.push(parseInt(a.substr(o,2),16));return h},l.REAL=function(e){return h.REAL(e).length},h.NAME=h.CHARARRAY,l.NAME=l.CHARARRAY,h.STRING=h.CHARARRAY,l.STRING=l.CHARARRAY,h.UTF16=function(e){for(var t=[],r=0;r<e.length;r+=1)t.push(0),t.push(e.charCodeAt(r));return t},l.UTF16=function(e){return 2*e.length},h.INDEX=function(e){var t,r=1,n=[r],o=[],i=0;for(t=0;t<e.length;t+=1){var a=h.OBJECT(e[t]);Array.prototype.push.apply(o,a),i+=a.length,r+=a.length,n.push(r)}if(0===o.length)return[0,0];var s=[],l=1+Math.floor(Math.log(i)/Math.log(2))/8|0,u=[void 0,h.BYTE,h.USHORT,h.UINT24,h.ULONG][l];for(t=0;t<n.length;t+=1){var p=u(n[t]);Array.prototype.push.apply(s,p)}return Array.prototype.concat(h.Card16(e.length),h.OffSize(l),s,o)},l.INDEX=function(e){return h.INDEX(e).length},h.DICT=function(e){for(var t=[],r=Object.keys(e),n=r.length,o=0;n>o;o+=1){var i=parseInt(r[o],0),a=e[i];t=t.concat(h.OPERAND(a.value,a.type)),t=t.concat(h.OPERATOR(i))}return t},l.DICT=function(e){return h.DICT(e).length},h.OPERATOR=function(e){return 1200>e?[e]:[12,e-1200]},h.OPERAND=function(e,t){var r=[];if(Array.isArray(t))for(var n=0;n<t.length;n+=1)o.argument(e.length===t.length,"Not enough arguments given for type"+t),r=r.concat(h.OPERAND(e[n],t[n]));else if("SID"===t)r=r.concat(h.NUMBER(e));else if("offset"===t)r=r.concat(h.NUMBER32(e));else if("number"===t)r=r.concat(h.NUMBER(e));else{if("real"!==t)throw new Error("Unknown operand type "+t);r=r.concat(h.REAL(e))}return r},h.OP=h.BYTE,l.OP=l.BYTE;var u="function"==typeof WeakMap&&new WeakMap;h.CHARSTRING=function(e){if(u&&u.has(e))return u.get(e);for(var t=[],r=e.length,n=0;r>n;n+=1){var o=e[n];t=t.concat(h[o.type](o.value))}return u&&u.set(e,t),t},l.CHARSTRING=function(e){return h.CHARSTRING(e).length},h.OBJECT=function(e){var t=h[e.type];return o.argument(void 0!==t,"No encoding function for type "+e.type),t(e.value)},h.TABLE=function(e){for(var t=[],r=e.fields.length,n=0;r>n;n+=1){var i=e.fields[n],a=h[i.type];o.argument(void 0!==a,"No encoding function for field type "+i.type);var s=e[i.name];void 0===s&&(s=i.value);var l=a(s);t=t.concat(l)}return t},h.LITERAL=function(e){return e},l.LITERAL=function(e){return e.length},r.decode=s,r.encode=h,r.sizeOf=l},{"./check":2}],27:[function(_dereq_,module,exports){/*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2014
  * https://github.com/ded/reqwest
  */
!function(e,t,r){"undefined"!=typeof module&&module.exports?module.exports=r():"function"==typeof define&&define.amd?define(r):t[e]=r()}("reqwest",this,function(){function succeed(e){var t=protocolRe.exec(e.url);return t=t&&t[1]||window.location.protocol,httpsRe.test(t)?twoHundo.test(e.request.status):!!e.request.response}function handleReadyState(e,t,r){return function(){return e._aborted?r(e.request):e._timedOut?r(e.request,"Request is aborted: timeout"):(e.request&&4==e.request[readyState]&&(e.request.onreadystatechange=noop,succeed(e)?t(e.request):r(e.request)),void 0)}}function setHeaders(e,t){var r,n=t.headers||{};n.Accept=n.Accept||defaultHeaders.accept[t.type]||defaultHeaders.accept["*"];var o="function"==typeof FormData&&t.data instanceof FormData;t.crossOrigin||n[requestedWith]||(n[requestedWith]=defaultHeaders.requestedWith),n[contentType]||o||(n[contentType]=t.contentType||defaultHeaders.contentType);for(r in n)n.hasOwnProperty(r)&&"setRequestHeader"in e&&e.setRequestHeader(r,n[r])}function setCredentials(e,t){"undefined"!=typeof t.withCredentials&&"undefined"!=typeof e.withCredentials&&(e.withCredentials=!!t.withCredentials)}function generalCallback(e){lastValue=e}function urlappend(e,t){return e+(/\?/.test(e)?"&":"?")+t}function handleJsonp(e,t,r,n){var o=uniqid++,i=e.jsonpCallback||"callback",a=e.jsonpCallbackName||reqwest.getcallbackPrefix(o),s=new RegExp("((^|\\?|&)"+i+")=([^&]+)"),h=n.match(s),l=doc.createElement("script"),u=0,p=-1!==navigator.userAgent.indexOf("MSIE 10.0");return h?"?"===h[3]?n=n.replace(s,"$1="+a):a=h[3]:n=urlappend(n,i+"="+a),win[a]=generalCallback,l.type="text/javascript",l.src=n,l.async=!0,"undefined"==typeof l.onreadystatechange||p||(l.htmlFor=l.id="_reqwest_"+o),l.onload=l.onreadystatechange=function(){return l[readyState]&&"complete"!==l[readyState]&&"loaded"!==l[readyState]||u?!1:(l.onload=l.onreadystatechange=null,l.onclick&&l.onclick(),t(lastValue),lastValue=void 0,head.removeChild(l),u=1,void 0)},head.appendChild(l),{abort:function(){l.onload=l.onreadystatechange=null,r({},"Request is aborted: timeout",{}),lastValue=void 0,head.removeChild(l),u=1}}}function getRequest(e,t){var r,n=this.o,o=(n.method||"GET").toUpperCase(),i="string"==typeof n?n:n.url,a=n.processData!==!1&&n.data&&"string"!=typeof n.data?reqwest.toQueryString(n.data):n.data||null,s=!1;return"jsonp"!=n.type&&"GET"!=o||!a||(i=urlappend(i,a),a=null),"jsonp"==n.type?handleJsonp(n,e,t,i):(r=n.xhr&&n.xhr(n)||xhr(n),r.open(o,i,n.async===!1?!1:!0),setHeaders(r,n),setCredentials(r,n),win[xDomainRequest]&&r instanceof win[xDomainRequest]?(r.onload=e,r.onerror=t,r.onprogress=function(){},s=!0):r.onreadystatechange=handleReadyState(this,e,t),n.before&&n.before(r),s?setTimeout(function(){r.send(a)},200):r.send(a),r)}function Reqwest(e,t){this.o=e,this.fn=t,init.apply(this,arguments)}function setType(e){return e.match("json")?"json":e.match("javascript")?"js":e.match("text")?"html":e.match("xml")?"xml":void 0}function init(o,fn){function complete(e){for(o.timeout&&clearTimeout(self.timeout),self.timeout=null;self._completeHandlers.length>0;)self._completeHandlers.shift()(e)}function success(resp){var type=o.type||resp&&setType(resp.getResponseHeader("Content-Type"));resp="jsonp"!==type?self.request:resp;var filteredResponse=globalSetupOptions.dataFilter(resp.responseText,type),r=filteredResponse;try{resp.responseText=r}catch(e){}if(r)switch(type){case"json":try{resp=win.JSON?win.JSON.parse(r):eval("("+r+")")}catch(err){return error(resp,"Could not parse JSON in response",err)}break;case"js":resp=eval(r);break;case"html":resp=r;break;case"xml":resp=resp.responseXML&&resp.responseXML.parseError&&resp.responseXML.parseError.errorCode&&resp.responseXML.parseError.reason?null:resp.responseXML}for(self._responseArgs.resp=resp,self._fulfilled=!0,fn(resp),self._successHandler(resp);self._fulfillmentHandlers.length>0;)resp=self._fulfillmentHandlers.shift()(resp);complete(resp)}function timedOut(){self._timedOut=!0,self.request.abort()}function error(e,t,r){for(e=self.request,self._responseArgs.resp=e,self._responseArgs.msg=t,self._responseArgs.t=r,self._erred=!0;self._errorHandlers.length>0;)self._errorHandlers.shift()(e,t,r);complete(e)}this.url="string"==typeof o?o:o.url,this.timeout=null,this._fulfilled=!1,this._successHandler=function(){},this._fulfillmentHandlers=[],this._errorHandlers=[],this._completeHandlers=[],this._erred=!1,this._responseArgs={};var self=this;fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){timedOut()},o.timeout)),o.success&&(this._successHandler=function(){o.success.apply(o,arguments)}),o.error&&this._errorHandlers.push(function(){o.error.apply(o,arguments)}),o.complete&&this._completeHandlers.push(function(){o.complete.apply(o,arguments)}),this.request=getRequest.call(this,success,error)}function reqwest(e,t){return new Reqwest(e,t)}function normalize(e){return e?e.replace(/\r?\n/g,"\r\n"):""}function serial(e,t){var r,n,o,i,a=e.name,s=e.tagName.toLowerCase(),h=function(e){e&&!e.disabled&&t(a,normalize(e.attributes.value&&e.attributes.value.specified?e.value:e.text))};if(!e.disabled&&a)switch(s){case"input":/reset|button|image|file/i.test(e.type)||(r=/checkbox/i.test(e.type),n=/radio/i.test(e.type),o=e.value,(!(r||n)||e.checked)&&t(a,normalize(r&&""===o?"on":o)));break;case"textarea":t(a,normalize(e.value));break;case"select":if("select-one"===e.type.toLowerCase())h(e.selectedIndex>=0?e.options[e.selectedIndex]:null);else for(i=0;e.length&&i<e.length;i++)e.options[i].selected&&h(e.options[i])}}function eachFormElement(){var e,t,r=this,n=function(e,t){var n,o,i;for(n=0;n<t.length;n++)for(i=e[byTag](t[n]),o=0;o<i.length;o++)serial(i[o],r)};for(t=0;t<arguments.length;t++)e=arguments[t],/input|select|textarea/i.test(e.tagName)&&serial(e,r),n(e,["input","select","textarea"])}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var e={};return eachFormElement.apply(function(t,r){t in e?(e[t]&&!isArray(e[t])&&(e[t]=[e[t]]),e[t].push(r)):e[t]=r},arguments),e}function buildParams(e,t,r,n){var o,i,a,s=/\[\]$/;if(isArray(t))for(i=0;t&&i<t.length;i++)a=t[i],r||s.test(e)?n(e,a):buildParams(e+"["+("object"==typeof a?i:"")+"]",a,r,n);else if(t&&"[object Object]"===t.toString())for(o in t)buildParams(e+"["+o+"]",t[o],r,n);else n(e,t)}var win=window,doc=document,httpsRe=/^http/,protocolRe=/(^\w+):\/\//,twoHundo=/^(20\d|1223)$/,byTag="getElementsByTagName",readyState="readyState",contentType="Content-Type",requestedWith="X-Requested-With",head=doc[byTag]("head")[0],uniqid=0,callbackPrefix="reqwest_"+ +new Date,lastValue,xmlHttpRequest="XMLHttpRequest",xDomainRequest="XDomainRequest",noop=function(){},isArray="function"==typeof Array.isArray?Array.isArray:function(e){return e instanceof Array},defaultHeaders={contentType:"application/x-www-form-urlencoded",requestedWith:xmlHttpRequest,accept:{"*":"text/javascript, text/html, application/xml, text/xml, */*",xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",js:"application/javascript, text/javascript"}},xhr=function(e){if(e.crossOrigin===!0){var t=win[xmlHttpRequest]?new XMLHttpRequest:null;if(t&&"withCredentials"in t)return t;if(win[xDomainRequest])return new XDomainRequest;throw new Error("Browser does not support cross-origin requests")}return win[xmlHttpRequest]?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")},globalSetupOptions={dataFilter:function(e){return e}};return Reqwest.prototype={abort:function(){this._aborted=!0,this.request.abort()},retry:function(){init.call(this,this.o,this.fn)},then:function(e,t){return e=e||function(){},t=t||function(){},this._fulfilled?this._responseArgs.resp=e(this._responseArgs.resp):this._erred?t(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):(this._fulfillmentHandlers.push(e),this._errorHandlers.push(t)),this},always:function(e){return this._fulfilled||this._erred?e(this._responseArgs.resp):this._completeHandlers.push(e),this},fail:function(e){return this._erred?e(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):this._errorHandlers.push(e),this},"catch":function(e){return this.fail(e)}},reqwest.serializeArray=function(){var e=[];return eachFormElement.apply(function(t,r){e.push({name:t,value:r})},arguments),e},reqwest.serialize=function(){if(0===arguments.length)return"";var e,t,r=Array.prototype.slice.call(arguments,0);return e=r.pop(),e&&e.nodeType&&r.push(e)&&(e=null),e&&(e=e.type),t="map"==e?serializeHash:"array"==e?reqwest.serializeArray:serializeQueryString,t.apply(null,r)},reqwest.toQueryString=function(e,t){var r,n,o=t||!1,i=[],a=encodeURIComponent,s=function(e,t){t="function"==typeof t?t():null==t?"":t,i[i.length]=a(e)+"="+a(t)};if(isArray(e))for(n=0;e&&n<e.length;n++)s(e[n].name,e[n].value);else for(r in e)e.hasOwnProperty(r)&&buildParams(r,e[r],o,s);return i.join("&").replace(/%20/g,"+")},reqwest.getcallbackPrefix=function(){return callbackPrefix},reqwest.compat=function(e,t){return e&&(e.type&&(e.method=e.type)&&delete e.type,e.dataType&&(e.type=e.dataType),e.jsonpCallback&&(e.jsonpCallbackName=e.jsonpCallback)&&delete e.jsonpCallback,e.jsonp&&(e.jsonpCallback=e.jsonp)),new Reqwest(e,t)},reqwest.ajaxSetup=function(e){e=e||{};for(var t in e)globalSetupOptions[t]=e[t]},reqwest})},{}],28:[function(e,t){"use strict";var r=e("./core/core");e("./color/p5.Color"),e("./core/p5.Element"),e("./typography/p5.Font"),e("./core/p5.Graphics"),e("./core/p5.Renderer2D"),e("./image/p5.Image"),e("./math/p5.Vector"),e("./io/p5.TableRow"),e("./io/p5.Table"),e("./io/p5.XML"),e("./color/creating_reading"),e("./color/setting"),e("./core/constants"),e("./utilities/conversion"),e("./utilities/array_functions"),e("./utilities/string_functions"),e("./core/environment"),e("./image/image"),e("./image/loading_displaying"),e("./image/pixels"),e("./io/files"),e("./events/keyboard"),e("./events/acceleration"),e("./events/mouse"),e("./utilities/time_date"),e("./events/touch"),e("./math/math"),e("./math/calculation"),e("./math/random"),e("./math/noise"),e("./math/trigonometry"),e("./core/rendering"),e("./core/2d_primitives"),e("./core/attributes"),e("./core/curves"),e("./core/vertex"),e("./core/structure"),e("./core/transform"),e("./typography/attributes"),e("./typography/loading_displaying"),e("./webgl/p5.RendererGL"),e("./webgl/p5.Geometry"),e("./webgl/p5.RendererGL.Retained"),e("./webgl/p5.RendererGL.Immediate"),e("./webgl/primitives"),e("./webgl/loading"),e("./webgl/p5.Matrix"),e("./webgl/material"),e("./webgl/light"),e("./webgl/shader"),e("./webgl/camera"),e("./webgl/interaction");var n=function(){window.PHANTOMJS||window.mocha||(window.setup&&"function"==typeof window.setup||window.draw&&"function"==typeof window.draw)&&!r.instance&&new r};"complete"===document.readyState?n():window.addEventListener("load",n,!1),t.exports=r},{"./color/creating_reading":30,"./color/p5.Color":31,"./color/setting":32,"./core/2d_primitives":33,"./core/attributes":34,"./core/constants":36,"./core/core":37,"./core/curves":38,"./core/environment":39,"./core/p5.Element":41,"./core/p5.Graphics":42,"./core/p5.Renderer2D":44,"./core/rendering":45,"./core/structure":47,"./core/transform":48,"./core/vertex":49,"./events/acceleration":50,"./events/keyboard":51,"./events/mouse":52,"./events/touch":53,"./image/image":55,"./image/loading_displaying":56,"./image/p5.Image":57,"./image/pixels":58,"./io/files":59,"./io/p5.Table":60,"./io/p5.TableRow":61,"./io/p5.XML":62,"./math/calculation":63,"./math/math":64,"./math/noise":65,"./math/p5.Vector":66,"./math/random":68,"./math/trigonometry":69,"./typography/attributes":70,"./typography/loading_displaying":71,"./typography/p5.Font":72,"./utilities/array_functions":73,"./utilities/conversion":74,"./utilities/string_functions":75,"./utilities/time_date":76,"./webgl/camera":77,"./webgl/interaction":78,"./webgl/light":79,"./webgl/loading":80,"./webgl/material":81,"./webgl/p5.Geometry":82,"./webgl/p5.Matrix":83,"./webgl/p5.RendererGL":86,"./webgl/p5.RendererGL.Immediate":84,"./webgl/p5.RendererGL.Retained":85,"./webgl/primitives":87,"./webgl/shader":88}],29:[function(e,t){"use strict";var r=e("../core/core");r.ColorConversion={},r.ColorConversion._hsbaToHSLA=function(e){var t=e[0],r=e[1],n=e[2],o=(2-r)*n/2;return 0!==o&&(1===o?r=0:.5>o?r/=2-r:r=r*n/(2-2*o)),[t,r,o,e[3]]},r.ColorConversion._hsbaToRGBA=function(e){var t=6*e[0],r=e[1],n=e[2],o=[];if(0===r)o=[n,n,n,e[3]];else{var i,a,s,h=Math.floor(t),l=n*(1-r),u=n*(1-r*(t-h)),p=n*(1-r*(1+h-t));1===h?(i=u,a=n,s=l):2===h?(i=l,a=n,s=p):3===h?(i=l,a=u,s=n):4===h?(i=p,a=l,s=n):5===h?(i=n,a=l,s=u):(i=n,a=p,s=l),o=[i,a,s,e[3]]}return o},r.ColorConversion._hslaToHSBA=function(e){var t,r=e[0],n=e[1],o=e[2];return t=.5>o?(1+n)*o:o+n-o*n,n=2*(t-o)/t,[r,n,t,e[3]]},r.ColorConversion._hslaToRGBA=function(e){var t=6*e[0],r=e[1],n=e[2],o=[];if(0===r)o=[n,n,n,e[3]];else{var i;i=.5>n?(1+r)*n:n+r-n*r;var a=2*n-i,s=function(e,t,r){return 0>e?e+=6:e>=6&&(e-=6),1>e?t+(r-t)*e:3>e?r:4>e?t+(r-t)*(4-e):t};o=[s(t+2,a,i),s(t,a,i),s(t-2,a,i),e[3]]}return o},r.ColorConversion._rgbaToHSBA=function(e){var t,r,n=e[0],o=e[1],i=e[2],a=Math.max(n,o,i),s=a-Math.min(n,o,i);return 0===s?(t=0,r=0):(r=s/a,n===a?t=(o-i)/s:o===a?t=2+(i-n)/s:i===a&&(t=4+(n-o)/s),0>t?t+=6:t>=6&&(t-=6)),[t/6,r,a,e[3]]},r.ColorConversion._rgbaToHSLA=function(e){var t,r,n=e[0],o=e[1],i=e[2],a=Math.max(n,o,i),s=Math.min(n,o,i),h=a+s,l=a-s;return 0===l?(t=0,r=0):(r=1>h?l/h:l/(2-l),n===a?t=(o-i)/l:o===a?t=2+(i-n)/l:i===a&&(t=4+(n-o)/l),0>t?t+=6:t>=6&&(t-=6)),[t/6,r,h/2,e[3]]},t.exports=r.ColorConversion},{"../core/core":37}],30:[function(e,t){"use strict";var r=e("../core/core"),n=e("../core/constants");e("./p5.Color"),r.prototype.alpha=function(e){if(e instanceof r.Color||e instanceof Array)return this.color(e)._getAlpha();throw new Error("Needs p5.Color or pixel array as argument.")},r.prototype.blue=function(e){if(e instanceof r.Color||e instanceof Array)return this.color(e)._getBlue();throw new Error("Needs p5.Color or pixel array as argument.")},r.prototype.brightness=function(e){if(e instanceof r.Color||e instanceof Array)return this.color(e)._getBrightness();throw new Error("Needs p5.Color or pixel array as argument.")},r.prototype.color=function(){return arguments[0]instanceof r.Color?arguments[0]:arguments[0]instanceof Array?this instanceof r.Renderer?new r.Color(this,arguments[0]):new r.Color(this._renderer,arguments[0]):this instanceof r.Renderer?new r.Color(this,arguments):new r.Color(this._renderer,arguments)},r.prototype.green=function(e){if(e instanceof r.Color||e instanceof Array)return this.color(e)._getGreen();throw new Error("Needs p5.Color or pixel array as argument.")},r.prototype.hue=function(e){if(e instanceof r.Color||e instanceof Array)return this.color(e)._getHue();throw new Error("Needs p5.Color or pixel array as argument.")},r.prototype.lerpColor=function(e,t,r){var o,i,a,s,h,l,u=this._renderer._colorMode,p=this._renderer._colorMaxes;if(u===n.RGB)h=e.levels.map(function(e){return e/255}),l=t.levels.map(function(e){return e/255});else if(u===n.HSB)e._getBrightness(),t._getBrightness(),h=e.hsba,l=t.hsba;else{if(u!==n.HSL)throw new Error(u+"cannot be used for interpolation.");e._getLightness(),t._getLightness(),h=e.hsla,l=t.hsla}return r=Math.max(Math.min(r,1),0),o=this.lerp(h[0],l[0],r),i=this.lerp(h[1],l[1],r),a=this.lerp(h[2],l[2],r),s=this.lerp(h[3],l[3],r),o*=p[u][0],i*=p[u][1],a*=p[u][2],s*=p[u][3],this.color(o,i,a,s)},r.prototype.lightness=function(e){if(e instanceof r.Color||e instanceof Array)return this.color(e)._getLightness();throw new Error("Needs p5.Color or pixel array as argument.")},r.prototype.red=function(e){if(e instanceof r.Color||e instanceof Array)return this.color(e)._getRed();throw new Error("Needs p5.Color or pixel array as argument.")},r.prototype.saturation=function(e){if(e instanceof r.Color||e instanceof Array)return this.color(e)._getSaturation();throw new Error("Needs p5.Color or pixel array as argument.")},t.exports=r},{"../core/constants":36,"../core/core":37,"./p5.Color":31}],31:[function(e,t){var r=e("../core/core"),n=e("../core/constants"),o=e("./color_conversion");r.Color=function(e,t){if(this.mode=e._colorMode,this.maxes=e._colorMaxes,this.mode!==n.RGB&&this.mode!==n.HSL&&this.mode!==n.HSB)throw new Error(this.mode+" is an invalid colorMode.");return this._array=r.Color._parseInputs.apply(e,t),this.levels=this._array.map(function(e){return Math.round(255*e)}),this},r.Color.prototype.toString=function(){var e=this.levels,t=this._array[3];return"rgba("+e[0]+","+e[1]+","+e[2]+","+t+")"},r.Color.prototype._getAlpha=function(){return this._array[3]*this.maxes[this.mode][3]},r.Color.prototype._getBlue=function(){return this._array[2]*this.maxes[n.RGB][2]},r.Color.prototype._getBrightness=function(){return this.hsba||(this.hsba=o._rgbaToHSBA(this._array)),this.hsba[2]*this.maxes[n.HSB][2]},r.Color.prototype._getGreen=function(){return this._array[1]*this.maxes[n.RGB][1]},r.Color.prototype._getHue=function(){return this.mode===n.HSB?(this.hsba||(this.hsba=o._rgbaToHSBA(this._array)),this.hsba[0]*this.maxes[n.HSB][0]):(this.hsla||(this.hsla=o._rgbaToHSLA(this._array)),this.hsla[0]*this.maxes[n.HSL][0])},r.Color.prototype._getLightness=function(){return this.hsla||(this.hsla=o._rgbaToHSLA(this._array)),this.hsla[2]*this.maxes[n.HSL][2]},r.Color.prototype._getRed=function(){return this._array[0]*this.maxes[n.RGB][0]},r.Color.prototype._getSaturation=function(){return this.mode===n.HSB?(this.hsba||(this.hsba=o._rgbaToHSBA(this._array)),this.hsba[1]*this.maxes[n.HSB][1]):(this.hsla||(this.hsla=o._rgbaToHSLA(this._array)),this.hsla[1]*this.maxes[n.HSL][1])};var i={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},a=/\s*/,s=/(\d{1,3})/,h=/((?:\d+(?:\.\d+)?)|(?:\.\d+))/,l=new RegExp(h.source+"%"),u={HEX3:/^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,HEX6:/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,RGB:new RegExp(["^rgb\\(",s.source,",",s.source,",",s.source,"\\)$"].join(a.source),"i"),RGB_PERCENT:new RegExp(["^rgb\\(",l.source,",",l.source,",",l.source,"\\)$"].join(a.source),"i"),RGBA:new RegExp(["^rgba\\(",s.source,",",s.source,",",s.source,",",h.source,"\\)$"].join(a.source),"i"),RGBA_PERCENT:new RegExp(["^rgba\\(",l.source,",",l.source,",",l.source,",",h.source,"\\)$"].join(a.source),"i"),HSL:new RegExp(["^hsl\\(",s.source,",",l.source,",",l.source,"\\)$"].join(a.source),"i"),HSLA:new RegExp(["^hsla\\(",s.source,",",l.source,",",l.source,",",h.source,"\\)$"].join(a.source),"i"),HSB:new RegExp(["^hsb\\(",s.source,",",l.source,",",l.source,"\\)$"].join(a.source),"i"),HSBA:new RegExp(["^hsba\\(",s.source,",",l.source,",",l.source,",",h.source,"\\)$"].join(a.source),"i")};r.Color._parseInputs=function(){var e=arguments.length,t=this._colorMode,a=this._colorMaxes,s=[];if(e>=3)return s[0]=arguments[0]/a[t][0],s[1]=arguments[1]/a[t][1],s[2]=arguments[2]/a[t][2],s[3]="number"==typeof arguments[3]?arguments[3]/a[t][3]:1,s=s.map(function(e){return Math.max(Math.min(e,1),0)}),t===n.HSL?o._hslaToRGBA(s):t===n.HSB?o._hsbaToRGBA(s):s;if(1===e&&"string"==typeof arguments[0]){var h=arguments[0].trim().toLowerCase();if(i[h])return r.Color._parseInputs.apply(this,[i[h]]);if(u.HEX3.test(h))return s=u.HEX3.exec(h).slice(1).map(function(e){return parseInt(e+e,16)/255}),s[3]=1,s;if(u.HEX6.test(h))return s=u.HEX6.exec(h).slice(1).map(function(e){return parseInt(e,16)/255}),s[3]=1,s;if(u.RGB.test(h))return s=u.RGB.exec(h).slice(1).map(function(e){return e/255}),s[3]=1,s;if(u.RGB_PERCENT.test(h))return s=u.RGB_PERCENT.exec(h).slice(1).map(function(e){return parseFloat(e)/100}),s[3]=1,s;if(u.RGBA.test(h))return s=u.RGBA.exec(h).slice(1).map(function(e,t){return 3===t?parseFloat(e):e/255});if(u.RGBA_PERCENT.test(h))return s=u.RGBA_PERCENT.exec(h).slice(1).map(function(e,t){return 3===t?parseFloat(e):parseFloat(e)/100});if(u.HSL.test(h)?(s=u.HSL.exec(h).slice(1).map(function(e,t){return 0===t?parseInt(e,10)/360:parseInt(e,10)/100}),s[3]=1):u.HSLA.test(h)&&(s=u.HSLA.exec(h).slice(1).map(function(e,t){return 0===t?parseInt(e,10)/360:3===t?parseFloat(e):parseInt(e,10)/100})),s.length)return o._hslaToRGBA(s);if(u.HSB.test(h)?(s=u.HSB.exec(h).slice(1).map(function(e,t){return 0===t?parseInt(e,10)/360:parseInt(e,10)/100}),s[3]=1):u.HSBA.test(h)&&(s=u.HSBA.exec(h).slice(1).map(function(e,t){return 0===t?parseInt(e,10)/360:3===t?parseFloat(e):parseInt(e,10)/100})),s.length)return o._hsbaToRGBA(s);s=[1,1,1,1]}else{if(1!==e&&2!==e||"number"!=typeof arguments[0])throw new Error(arguments+"is not a valid color representation.");s[0]=arguments[0]/a[t][2],s[1]=arguments[0]/a[t][2],s[2]=arguments[0]/a[t][2],s[3]="number"==typeof arguments[1]?arguments[1]/a[t][3]:1,s=s.map(function(e){return Math.max(Math.min(e,1),0)})}return s},t.exports=r.Color},{"../core/constants":36,"../core/core":37,"./color_conversion":29}],32:[function(e,t){"use strict";var r=e("../core/core"),n=e("../core/constants");e("./p5.Color"),r.prototype.background=function(){return arguments[0]instanceof r.Image?this.image(arguments[0],0,0,this.width,this.height):this._renderer.background.apply(this._renderer,arguments),this},r.prototype.clear=function(){return this._renderer.clear(),this},r.prototype.colorMode=function(){if(arguments[0]===n.RGB||arguments[0]===n.HSB||arguments[0]===n.HSL){this._renderer._colorMode=arguments[0];var e=this._renderer._colorMaxes[this._renderer._colorMode];2===arguments.length?(e[0]=arguments[1],e[1]=arguments[1],e[2]=arguments[1],e[3]=arguments[1]):4===arguments.length?(e[0]=arguments[1],e[1]=arguments[2],e[2]=arguments[3]):5===arguments.length&&(e[0]=arguments[1],e[1]=arguments[2],e[2]=arguments[3],e[3]=arguments[4])}return this},r.prototype.fill=function(){return this._renderer._setProperty("_fillSet",!0),this._renderer._setProperty("_doFill",!0),this._renderer.fill.apply(this._renderer,arguments),this},r.prototype.noFill=function(){return this._renderer._setProperty("_doFill",!1),this},r.prototype.noStroke=function(){return this._renderer._setProperty("_doStroke",!1),this},r.prototype.stroke=function(){return this._renderer._setProperty("_strokeSet",!0),this._renderer._setProperty("_doStroke",!0),this._renderer.stroke.apply(this._renderer,arguments),this},t.exports=r},{"../core/constants":36,"../core/core":37,"./p5.Color":31}],33:[function(e,t){"use strict";var r=e("./core"),n=e("./constants"),o=e("./canvas");e("./error_helpers"),r.prototype.arc=function(e,t,r,o,i,a,s){for(var h=new Array(arguments.length),l=0;l<h.length;++l)h[l]=arguments[l];if(!this._renderer._doStroke&&!this._renderer._doFill)return this;for(this._angleMode===n.DEGREES&&(i=this.radians(i),a=this.radians(a));0>i;)i+=n.TWO_PI;for(;0>a;)a+=n.TWO_PI;return i%=n.TWO_PI,a%=n.TWO_PI,a===i&&(a+=n.TWO_PI),i=i<=n.HALF_PI?Math.atan(r/o*Math.tan(i)):i>n.HALF_PI&&i<=3*n.HALF_PI?Math.atan(r/o*Math.tan(i))+n.PI:Math.atan(r/o*Math.tan(i))+n.TWO_PI,a=a<=n.HALF_PI?Math.atan(r/o*Math.tan(a)):a>n.HALF_PI&&a<=3*n.HALF_PI?Math.atan(r/o*Math.tan(a))+n.PI:Math.atan(r/o*Math.tan(a))+n.TWO_PI,i>a&&(a+=n.TWO_PI),r=Math.abs(r),o=Math.abs(o),this._renderer.arc(e,t,r,o,i,a,s),this},r.prototype.ellipse=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];if(3===e.length&&e.push(e[2]),e[2]<0&&(e[2]=Math.abs(e[2])),e[3]<0&&(e[3]=Math.abs(e[3])),!this._renderer._doStroke&&!this._renderer._doFill)return this;var r=o.modeAdjust(e[0],e[1],e[2],e[3],this._renderer._ellipseMode);return e[0]=r.x,e[1]=r.y,e[2]=r.w,e[3]=r.h,this._renderer.ellipse(e),this},//   if (!this._renderer._doStroke) {
r.prototype.line=function(){if(!this._renderer._doStroke)return this;for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];return this._renderer.isP3D?this._renderer.line(e[0],e[1],e[2],e[3],e[4],e[5]):this._renderer.line(e[0],e[1],e[2],e[3]),this},r.prototype.point=function(){if(!this._renderer._doStroke)return this;for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];return this._renderer.isP3D?this._renderer.point(e[0],e[1],e[2]):this._renderer.point(e[0],e[1]),this},r.prototype.quad=function(){if(!this._renderer._doStroke&&!this._renderer._doFill)return this;for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];return this._renderer.isP3D?this._renderer.quad(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11]):this._renderer.quad(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),this},r.prototype.rect=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];if(this._renderer._doStroke||this._renderer._doFill){var r=o.modeAdjust(e[0],e[1],e[2],e[3],this._renderer._rectMode);return e[0]=r.x,e[1]=r.y,e[2]=r.w,e[3]=r.h,this._renderer.rect(e),this}},r.prototype.triangle=function(){if(!this._renderer._doStroke&&!this._renderer._doFill)return this;for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];return this._renderer.triangle(e),this},t.exports=r},{"./canvas":35,"./constants":36,"./core":37,"./error_helpers":40}],34:[function(e,t){"use strict";var r=e("./core"),n=e("./constants");r.prototype.ellipseMode=function(e){return(e===n.CORNER||e===n.CORNERS||e===n.RADIUS||e===n.CENTER)&&(this._renderer._ellipseMode=e),this},r.prototype.noSmooth=function(){return this._renderer.noSmooth(),this},r.prototype.rectMode=function(e){return(e===n.CORNER||e===n.CORNERS||e===n.RADIUS||e===n.CENTER)&&(this._renderer._rectMode=e),this},r.prototype.smooth=function(){return this._renderer.smooth(),this},r.prototype.strokeCap=function(e){return(e===n.ROUND||e===n.SQUARE||e===n.PROJECT)&&this._renderer.strokeCap(e),this},r.prototype.strokeJoin=function(e){return(e===n.ROUND||e===n.BEVEL||e===n.MITER)&&this._renderer.strokeJoin(e),this},r.prototype.strokeWeight=function(e){return this._renderer.strokeWeight(e),this},t.exports=r},{"./constants":36,"./core":37}],35:[function(e,t){var r=e("./constants");t.exports={modeAdjust:function(e,t,n,o,i){return i===r.CORNER?{x:e,y:t,w:n,h:o}:i===r.CORNERS?{x:e,y:t,w:n-e,h:o-t}:i===r.RADIUS?{x:e-n,y:t-o,w:2*n,h:2*o}:i===r.CENTER?{x:e-.5*n,y:t-.5*o,w:n,h:o}:void 0},arcModeAdjust:function(e,t,n,o,i){return i===r.CORNER?{x:e+.5*n,y:t+.5*o,w:n,h:o}:i===r.CORNERS?{x:e,y:t,w:n+e,h:o+t}:i===r.RADIUS?{x:e,y:t,w:2*n,h:2*o}:i===r.CENTER?{x:e,y:t,w:n,h:o}:void 0}}},{"./constants":36}],36:[function(e,t){var r=Math.PI;t.exports={P2D:"p2d",WEBGL:"webgl",ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",HALF_PI:r/2,PI:r,QUARTER_PI:r/4,TAU:2*r,TWO_PI:2*r,DEGREES:"degrees",RADIANS:"radians",CORNER:"corner",CORNERS:"corners",RADIUS:"radius",RIGHT:"right",LEFT:"left",CENTER:"center",TOP:"top",BOTTOM:"bottom",BASELINE:"alphabetic",POINTS:0,LINES:1,LINE_STRIP:3,LINE_LOOP:2,TRIANGLES:4,TRIANGLE_FAN:6,TRIANGLE_STRIP:5,QUADS:"quads",QUAD_STRIP:"quad_strip",CLOSE:"close",OPEN:"open",CHORD:"chord",PIE:"pie",PROJECT:"square",SQUARE:"butt",ROUND:"round",BEVEL:"bevel",MITER:"miter",RGB:"rgb",HSB:"hsb",HSL:"hsl",AUTO:"auto",ALT:18,BACKSPACE:8,CONTROL:17,DELETE:46,DOWN_ARROW:40,ENTER:13,ESCAPE:27,LEFT_ARROW:37,OPTION:18,RETURN:13,RIGHT_ARROW:39,SHIFT:16,TAB:9,UP_ARROW:38,BLEND:"normal",ADD:"lighter",DARKEST:"darken",LIGHTEST:"lighten",DIFFERENCE:"difference",EXCLUSION:"exclusion",MULTIPLY:"multiply",SCREEN:"screen",REPLACE:"source-over",OVERLAY:"overlay",HARD_LIGHT:"hard-light",SOFT_LIGHT:"soft-light",DODGE:"color-dodge",BURN:"color-burn",THRESHOLD:"threshold",GRAY:"gray",OPAQUE:"opaque",INVERT:"invert",POSTERIZE:"posterize",DILATE:"dilate",ERODE:"erode",BLUR:"blur",NORMAL:"normal",ITALIC:"italic",BOLD:"bold",_DEFAULT_TEXT_FILL:"#000000",_DEFAULT_LEADMULT:1.25,_CTX_MIDDLE:"middle",LINEAR:"linear",QUADRATIC:"quadratic",BEZIER:"bezier",CURVE:"curve",_DEFAULT_STROKE:"#000000",_DEFAULT_FILL:"#FFFFFF"}},{}],37:[function(e,t){"use strict";e("./shim");var r=e("./constants"),n=function(e,t,r){2===arguments.length&&"boolean"==typeof t&&(r=t,t=void 0),this._setupDone=!1,this._pixelDensity=Math.ceil(window.devicePixelRatio)||1,this._userNode=t,this._curElement=null,this._elements=[],this._requestAnimId=0,this._preloadCount=0,this._isGlobal=!1,this._loop=!0,this._styles=[],this._defaultCanvasSize={width:100,height:100},this._events={mousemove:null,mousedown:null,mouseup:null,dragend:null,dragover:null,click:null,mouseover:null,mouseout:null,keydown:null,keyup:null,keypress:null,touchstart:null,touchmove:null,touchend:null,resize:null,blur:null},this._events.wheel=null,this._loadingScreenId="p5_loading",window.DeviceOrientationEvent&&(this._events.deviceorientation=null),window.DeviceMotionEvent&&!window._isNodeWebkit&&(this._events.devicemotion=null),this._start=function(){this._userNode&&"string"==typeof this._userNode&&(this._userNode=document.getElementById(this._userNode)),this.createCanvas(this._defaultCanvasSize.width,this._defaultCanvasSize.height,"p2d",!0);var e=this.preload||window.preload;if(e){var t=document.getElementById(this._loadingScreenId);if(!t){t=document.createElement("div"),t.innerHTML="Loading...",t.style.position="absolute",t.id=this._loadingScreenId;var r=this._userNode||document.body;r.appendChild(t)}for(var o in this._preloadMethods){this._preloadMethods[o]=this._preloadMethods[o]||n;var i=this._preloadMethods[o];(i===n.prototype||i===n)&&(i=this._isGlobal?window:this),this._registeredPreloadMethods[o]=i[o],i[o]=this._wrapPreload(i,o)}e(),this._runIfPreloadsAreDone()}else this._setup(),this._runFrames(),this._draw()}.bind(this),this._runIfPreloadsAreDone=function(){var e=this._isGlobal?window:this;if(0===e._preloadCount){var t=document.getElementById(e._loadingScreenId);t&&t.parentNode.removeChild(t),e._setup(),e._runFrames(),e._draw()}},this._decrementPreload=function(){var e=this._isGlobal?window:this;e._setProperty("_preloadCount",e._preloadCount-1),e._runIfPreloadsAreDone()},this._wrapPreload=function(e,t){return function(){this._incrementPreload();for(var r=new Array(arguments.length),n=0;n<r.length;++n)r[n]=arguments[n];return r.push(this._decrementPreload.bind(this)),this._registeredPreloadMethods[t].apply(e,r)}.bind(this)},this._incrementPreload=function(){var e=this._isGlobal?window:this;e._setProperty("_preloadCount",e._preloadCount+1)},this._setup=function(){var e=this._isGlobal?window:this;if("function"==typeof e.preload)for(var t in this._preloadMethods)e[t]=this._preloadMethods[t][t],e[t]&&this&&(e[t]=e[t].bind(this));"function"==typeof e.setup&&e.setup();for(var r=document.getElementsByTagName("canvas"),n=0;n<r.length;n++){var o=r[n];"true"===o.dataset.hidden&&(o.style.visibility="",delete o.dataset.hidden)}this._setupDone=!0}.bind(this),this._draw=function(){var e=window.performance.now(),t=e-this._lastFrameTime,r=1e3/this._targetFrameRate,n=5;(!this._loop||t>=r-n)&&(this._setProperty("frameCount",this.frameCount+1),this.redraw(),this._updateMouseCoords(),this._updateTouchCoords(),this._frameRate=1e3/(e-this._lastFrameTime),this._lastFrameTime=e),this._loop&&(this._requestAnimId=window.requestAnimationFrame(this._draw))}.bind(this),this._runFrames=function(){this._updateInterval&&clearInterval(this._updateInterval)}.bind(this),this._setProperty=function(e,t){this[e]=t,this._isGlobal&&(window[e]=t)}.bind(this),this.remove=function(){if(this._curElement){this._loop=!1,this._requestAnimId&&window.cancelAnimationFrame(this._requestAnimId);for(var e in this._events)window.removeEventListener(e,this._events[e]);for(var t=0;t<this._elements.length;t++){var r=this._elements[t];r.elt.parentNode&&r.elt.parentNode.removeChild(r.elt);for(var o in r._events)r.elt.removeEventListener(o,r._events[o])}var i=this;if(this._registeredMethods.remove.forEach(function(e){"undefined"!=typeof e&&e.call(i)}),this._isGlobal){for(var a in n.prototype)try{delete window[a]}catch(s){window[a]=void 0}for(var h in this)if(this.hasOwnProperty(h))try{delete window[h]}catch(s){window[h]=void 0}}}}.bind(this),this._registeredMethods.init.forEach(function(e){"undefined"!=typeof e&&e.call(this)},this);var o=this._createFriendlyGlobalFunctionBinder();if(e)e(this);else{this._isGlobal=!0,n.instance=this;for(var i in n.prototype)if("function"==typeof n.prototype[i]){var a=i.substring(2);this._events.hasOwnProperty(a)||(Math.hasOwnProperty(i)&&Math[i]===n.prototype[i]?o(i,n.prototype[i]):o(i,n.prototype[i].bind(this)))}else o(i,n.prototype[i]);for(var s in this)this.hasOwnProperty(s)&&o(s,this[s])}for(var h in this._events){var l=this["_on"+h];if(l){var u=l.bind(this);window.addEventListener(h,u),this._events[h]=u}}var p=function(){this._setProperty("focused",!0)}.bind(this),c=function(){this._setProperty("focused",!1)}.bind(this);window.addEventListener("focus",p),window.addEventListener("blur",c),this.registerMethod("remove",function(){window.removeEventListener("focus",p),window.removeEventListener("blur",c)}),r?this._start():"complete"===document.readyState?this._start():window.addEventListener("load",this._start.bind(this),!1)};n.instance=null,n.disableFriendlyErrors=!1;for(var o in r)n.prototype[o]=r[o];n.prototype._preloadMethods={loadJSON:n.prototype,loadImage:n.prototype,loadStrings:n.prototype,loadXML:n.prototype,loadShape:n.prototype,loadTable:n.prototype,loadFont:n.prototype,loadModel:n.prototype},n.prototype._registeredMethods={init:[],pre:[],post:[],remove:[]},n.prototype._registeredPreloadMethods={},n.prototype.registerPreloadMethod=function(e,t){n.prototype._preloadMethods.hasOwnProperty(e)||(n.prototype._preloadMethods[e]=t)},n.prototype.registerMethod=function(e,t){n.prototype._registeredMethods.hasOwnProperty(e)||(n.prototype._registeredMethods[e]=[]),n.prototype._registeredMethods[e].push(t)},n.prototype._createFriendlyGlobalFunctionBinder=function(e){e=e||{};var t=e.globalObject||window,r=e.log||console.log.bind(console),o={print:!0};return function(e,i){if(n.disableFriendlyErrors||"undefined"!=typeof IS_MINIFIED||"function"!=typeof i||e in n.prototype._preloadMethods)t[e]=i;else try{if(e in t&&!(e in o))throw new Error('global "'+e+'" already exists');Object.defineProperty(t,e,{configurable:!0,enumerable:!0,get:function(){return i},set:function(n){Object.defineProperty(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}),r('You just changed the value of "'+e+"\", which was a p5 function. This could cause problems later if you're not careful.")}})}catch(a){r('p5 had problems creating the global function "'+e+'", possibly because your code is already using that name as a variable. You may want to rename your variable to something else.'),t[e]=i}}},t.exports=n},{"./constants":36,"./shim":46}],38:[function(e,t){"use strict";var r=e("./core");e("./error_helpers");var n=20,o=20;r.prototype.bezier=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];return this._renderer.isP3D?this._validateParameters("bezier",e,["Number","Number","Number","Number","Number","Number","Number","Number","Number","Number","Number","Number"]):this._validateParameters("bezier",e,["Number","Number","Number","Number","Number","Number","Number","Number"]),this._renderer._doStroke?(this._renderer.isP3D?(e.push(n),this._renderer.bezier(e)):this._renderer.bezier(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),this):this},r.prototype.bezierDetail=function(e){return n=e,this},r.prototype.bezierPoint=function(e,t,r,n,o){var i=1-o;return Math.pow(i,3)*e+3*Math.pow(i,2)*o*t+3*i*Math.pow(o,2)*r+Math.pow(o,3)*n},r.prototype.bezierTangent=function(e,t,r,n,o){var i=1-o;return 3*n*Math.pow(o,2)-3*r*Math.pow(o,2)+6*r*i*o-6*t*i*o+3*t*Math.pow(i,2)-3*e*Math.pow(i,2)},r.prototype.curve=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];return this._renderer.isP3D?this._validateParameters("curve",e,["Number","Number","Number","Number","Number","Number","Number","Number","Number","Number","Number","Number"]):this._validateParameters("curve",e,["Number","Number","Number","Number","Number","Number","Number","Number"]),this._renderer._doStroke?(this._renderer.isP3D?(e.push(o),this._renderer.curve(e)):this._renderer.curve(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),this):this},r.prototype.curveDetail=function(e){return o=e,this},r.prototype.curveTightness=function(e){this._renderer._curveTightness=e},r.prototype.curvePoint=function(e,t,r,n,o){var i=o*o*o,a=o*o,s=-.5*i+a-.5*o,h=1.5*i-2.5*a+1,l=-1.5*i+2*a+.5*o,u=.5*i-.5*a;return e*s+t*h+r*l+n*u},r.prototype.curveTangent=function(e,t,r,n,o){var i=o*o,a=-3*i/2+2*o-.5,s=9*i/2-5*o,h=-9*i/2+4*o+.5,l=3*i/2-o;return e*a+t*s+r*h+n*l},t.exports=r},{"./core":37,"./error_helpers":40}],39:[function(e,t){"use strict";function r(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth||0}function n(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight||0}function o(e){var t=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled;if(!t)throw new Error("Fullscreen not enabled in this browser.");e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function i(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}var a=e("./core"),s=e("./constants"),h=[s.ARROW,s.CROSS,s.HAND,s.MOVE,s.TEXT,s.WAIT];a.prototype._frameRate=0,a.prototype._lastFrameTime=window.performance.now(),a.prototype._targetFrameRate=60;var l=window.print;a.prototype.print=window.console&&console.log?function(e){try{if(0===arguments.length)l();else if(arguments.length>1)console.log.apply(console,arguments);else{var t=JSON.parse(JSON.stringify(e));console.log(t)}}catch(r){console.log(e)}}:function(){},a.prototype.frameCount=0,/**
 * Confirms if the window a p5.js program is in is "focused," meaning that
 * the sketch will accept mouse or keyboard input. This variable is
 * "true" if the window is focused and "false" if not.
 *
 * @property focused
 * @example
 * <div><code>
 * // To demonstrate, put two windows side by side.
 * // Click on the window that the p5 sketch isn't in!
 * function draw() {
 *   background(200);
 *   noStroke();
 *   fill(0, 200, 0);
 *   ellipse(25, 25, 50, 50);
 *
 *   if (!focused) {  // or "if (focused === false)"
 *     stroke(200,0,0);
 *     line(0, 0, 100, 100);
 *     line(100, 0, 0, 100);
 *   }
 * }
 * </code></div>
 *
 * @alt
 * green 50x50 ellipse at top left. Red X covers canvas when page focus changes
 *
 */
a.prototype.focused=document.hasFocus(),a.prototype.cursor=function(e,t,r){var n="auto",o=this._curElement.elt;if(h.indexOf(e)>-1)n=e;else if("string"==typeof e){var i="";t&&r&&"number"==typeof t&&"number"==typeof r&&(i=t+" "+r),n="http://"!==e.substring(0,6)?"url("+e+") "+i+", auto":/\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(e)?"url("+e+") "+i+", auto":e}o.style.cursor=n},a.prototype.frameRate=function(e){return"number"!=typeof e||0>=e?this._frameRate:(this._setProperty("_targetFrameRate",e),this._runFrames(),this)},a.prototype.getFrameRate=function(){return this.frameRate()},a.prototype.setFrameRate=function(e){return this.frameRate(e)},a.prototype.noCursor=function(){this._curElement.elt.style.cursor="none"},a.prototype.displayWidth=screen.width,a.prototype.displayHeight=screen.height,a.prototype.windowWidth=r(),a.prototype.windowHeight=n(),a.prototype._onresize=function(e){this._setProperty("windowWidth",r()),this._setProperty("windowHeight",n());var t,o=this._isGlobal?window:this;"function"==typeof o.windowResized&&(t=o.windowResized(e),void 0===t||t||e.preventDefault())},a.prototype.width=0,a.prototype.height=0,/**
 * If argument is given, sets the sketch to fullscreen or not based on the
 * value of the argument. If no argument is given, returns the current
 * fullscreen state. Note that due to browser restrictions this can only
 * be called on user input, for example, on mouse press like the example
 * below.
 *
 * @method fullscreen
 * @param  {Boolean} [val] whether the sketch should be in fullscreen mode
 * or not
 * @return {Boolean} current fullscreen state
 * @example
 * <div>
 * <code>
 * // Clicking in the box toggles fullscreen on and off.
 * function setup() {
 *   background(200);
 * }
 * function mousePressed() {
 *   if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
 *     var fs = fullscreen();
 *     fullscreen(!fs);
 *   }
 * }
 * </code>
 * </div>
 *
 * @alt
 * no display.
 *
 */
a.prototype.fullscreen=function(e){return"undefined"==typeof e?document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement:(e?o(document.documentElement):i(),void 0)},a.prototype.pixelDensity=function(e){return"number"!=typeof e?this._pixelDensity:(this._pixelDensity=e,this.resizeCanvas(this.width,this.height,!0),void 0)},a.prototype.displayDensity=function(){return window.devicePixelRatio},a.prototype.getURL=function(){return location.href},a.prototype.getURLPath=function(){return location.pathname.split("/").filter(function(e){return""!==e})},a.prototype.getURLParams=function(){for(var e,t=/[?&]([^&=]+)(?:[&=])([^&=]+)/gim,r={};null!=(e=t.exec(location.search));)e.index===t.lastIndex&&t.lastIndex++,r[e[1]]=e[2];return r},t.exports=a},{"./constants":36,"./core":37}],40:[function(e,t){"use strict";function r(e,t,r){if(e.match(/^p5\./)){var n=e.split(".");return r instanceof s[n[1]]}return"Boolean"===e||e.toLowerCase()===t||g.indexOf(e)>-1&&m(r)}function n(e,t,r){h&&(o(),h=!1),"undefined"===f(r)?r="#B40033":"number"===f(r)&&(r=b[r])}function o(){var e="transparent",t="#ED225D",r="#ED225D",n="white";console.log("%c    _ \n /\\| |/\\ \n \\ ` ' /  \n / , . \\  \n \\/|_|\\/ \n\n%c> p5.js says: Welcome! This is your friendly debugger. To turn me off switch to using “p5.min.js”.","background-color:"+e+";color:"+t+";","background-color:"+r+";color:"+n+";")}function i(){var t={},r=function(e){return Object.getOwnPropertyNames(e).filter(function(e){return"_"===e[0]?!1:e in t?!1:(t[e]=!0,!0)}).map(function(t){var r;return r="function"==typeof e[t]?"function":t===t.toUpperCase()?"constant":"variable",{name:t,type:r}})};S=[].concat(r(s.prototype),r(e("./constants"))),S.sort(function(e,t){return t.name.length-e.name.length})}function a(e,t){t||(t=console.log.bind(console)),S||i(),//if (!('setup' in window || 'draw' in window)) {
S.some(function(r){return e.message&&-1!==e.message.indexOf(r.name)?(t("%cDid you just try to use p5.js's "+r.name+("function"===r.type?"() ":" ")+r.type+"? If so, you may want to move it into your sketch's setup() function.\n\nFor more details, see: "+T,"color: #B40033"),!0):void 0})}for(var s=e("./core"),h=!1,l={},u=l.toString,p=["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"],c=0;c<p.length;c++)l["[object "+p[c]+"]"]=p[c].toLowerCase();var f=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[u.call(e)]||"object":typeof e},d=Array.isArray||function(e){return"array"===f(e)},m=function(e){return!d(e)&&e-parseFloat(e)+1>=0},g=["Number","Integer","Number/Constant"],y=0,v=1,x=2,_=3,b=["#2D7BB6","#EE9900","#4DB200","#C83C00"];s.prototype._validateParameters=function(e,t,o){d(o[0])||(o=[o]);for(var i,a=Math.abs(t.length-o[0].length),s=0,h=1,l=o.length;l>h;h++){var u=Math.abs(t.length-o[h].length);a>=u&&(s=h,a=u)}var p="X";a>0&&(i="You wrote "+e+"(",t.length>0&&(i+=p+Array(t.length).join(","+p)),i+="). "+e+" was expecting "+o[s].length+" parameters. Try "+e+"(",o[s].length>0&&(i+=p+Array(o[s].length).join(","+p)),i+=").",o.length>1&&(i+=" "+e+" takes different numbers of parameters depending on what you want to do. Click this link to learn more: "),n(i,e,y));for(var c=0;c<o.length;c++)for(var m=0;m<o[c].length&&m<t.length;m++){var g=o[c][m],_=f(t[m]);"undefined"===_||null===_?n("It looks like "+e+" received an empty variable in spot #"+(m+1)+". If not intentional, this is often a problem with scope: [link to scope].",e,v):"*"===g||r(g,_,t[m])||(i=e+" was expecting a "+g.toLowerCase()+" for parameter #"+(m+1)+", received ",i+="string"===_?'"'+t[m]+'"':t[m],i+=" instead.",o.length>1&&(i+=" "+e+" takes different numbers of parameters depending on what you want to do. Click this link to learn more:"),n(i,e,x))}},s.prototype._validateParameters=function(){return!0};var w={0:{fileType:"image",method:"loadImage",message:" hosting the image online,"},1:{fileType:"XML file",method:"loadXML"},2:{fileType:"table file",method:"loadTable"},3:{fileType:"text file",method:"loadStrings"},4:{fileType:"font",method:"loadFont",message:" hosting the font online,"}};s._friendlyFileLoadError=function(e,t){var r=w[e],o="It looks like there was a problem loading your "+r.fileType+". Try checking if the file path%c ["+t+"] %cis correct,"+(r.message||"")+" or running a local server.";n(o,r.method,_)};var S=null,T="https://github.com/processing/p5.js/wiki/Frequently-Asked-Questions#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup";s.prototype._helpForMisusedAtTopLevelCode=a,"complete"!==document.readyState&&(window.addEventListener("error",a,!1),window.addEventListener("load",function(){window.removeEventListener("error",a,!1)})),t.exports=s},{"./constants":36,"./core":37}],41:[function(e,t){function r(e,t,r){var n=t.bind(r);r.elt.addEventListener(e,n,!1),r._events[e]=n}var n=e("./core");n.Element=function(e,t){this.elt=e,this._pInst=t,this._events={},this.width=this.elt.offsetWidth,this.height=this.elt.offsetHeight},n.Element.prototype.parent=function(e){return 0===arguments.length?this.elt.parentNode:("string"==typeof e?("#"===e[0]&&(e=e.substring(1)),e=document.getElementById(e)):e instanceof n.Element&&(e=e.elt),e.appendChild(this.elt),this)},n.Element.prototype.id=function(e){return 0===arguments.length?this.elt.id:(this.elt.id=e,this.width=this.elt.offsetWidth,this.height=this.elt.offsetHeight,this)},n.Element.prototype.class=function(e){return 0===arguments.length?this.elt.className:(this.elt.className=e,this)},n.Element.prototype.mousePressed=function(e){return r("mousedown",e,this),r("touchstart",e,this),this},n.Element.prototype.mouseWheel=function(e){return r("wheel",e,this),this},n.Element.prototype.mouseReleased=function(e){return r("mouseup",e,this),r("touchend",e,this),this},n.Element.prototype.mouseClicked=function(e){return r("click",e,this),this},n.Element.prototype.mouseMoved=function(e){return r("mousemove",e,this),r("touchmove",e,this),this},n.Element.prototype.mouseOver=function(e){return r("mouseover",e,this),this},/**
 * The .changed() function is called when the value of an
 * element is changed.
 * This can be used to attach an element specific event listener.
 *
 * @method changed
 * @param  {Function} fxn function to be fired when the value of an
 * element changes.
 * @return {p5.Element}
 * @example
 * <div><code>
 * var sel;
 *
 * function setup() {
 *   textAlign(CENTER);
 *   background(200);
 *   sel = createSelect();
 *   sel.position(10, 10);
 *   sel.option('pear');
 *   sel.option('kiwi');
 *   sel.option('grape');
 *   sel.changed(mySelectEvent);
 * }
 *
 * function mySelectEvent() {
 *   var item = sel.value();
 *   background(200);
 *   text("it's a "+item+"!", 50, 50);
 * }
 * </code></div>
 * <div><code>
 * var checkbox;
 * var cnv;
 *
 * function setup() {
 *   checkbox = createCheckbox(" fill");
 *   checkbox.changed(changeFill);
 *   cnv = createCanvas(100, 100);
 *   cnv.position(0, 30);
 *   noFill();
 * }
 *
 * function draw() {
 *   background(200);
 *   ellipse(50, 50, 50, 50);
 * }
 *
 * function changeFill() {
 *   if (checkbox.checked()) {
 *     fill(0);
 *   } else {
 *     noFill();
 *   }
 * }
 * </code></div>
 *
 * @alt
 * dropdown: pear, kiwi, grape. When selected text "its a" + selection shown.
 *
 */
n.Element.prototype.changed=function(e){return r("change",e,this),this},n.Element.prototype.input=function(e){return r("input",e,this),this},n.Element.prototype.mouseOut=function(e){return r("mouseout",e,this),this},n.Element.prototype.touchStarted=function(e){return r("touchstart",e,this),r("mousedown",e,this),this},n.Element.prototype.touchMoved=function(e){return r("touchmove",e,this),r("mousemove",e,this),this},n.Element.prototype.touchEnded=function(e){return r("touchend",e,this),r("mouseup",e,this),this},n.Element.prototype.dragOver=function(e){return r("dragover",e,this),this},n.Element.prototype.dragLeave=function(e){return r("dragleave",e,this),this},n.Element.prototype.drop=function(e,t){function o(t){var r=new n.File(t);return function(t){r.data=t.target.result,e(r)}}return window.File&&window.FileReader&&window.FileList&&window.Blob?(r("dragover",function(e){e.stopPropagation(),e.preventDefault()},this),r("dragleave",function(e){e.stopPropagation(),e.preventDefault()},this),arguments.length>1&&r("drop",t,this),r("drop",function(e){e.stopPropagation(),e.preventDefault();for(var t=e.dataTransfer.files,r=0;r<t.length;r++){var n=t[r],i=new FileReader;i.onload=o(n),n.type.indexOf("text")>-1?i.readAsText(n):i.readAsDataURL(n)}},this)):console.log("The File APIs are not fully supported in this browser."),this},n.Element.prototype._setProperty=function(e,t){this[e]=t},t.exports=n.Element},{"./core":37}],42:[function(e,t){var r=e("./core"),n=e("./constants");r.Graphics=function(e,t,o,i){var a=o||n.P2D,s=document.createElement("canvas"),h=this._userNode||document.body;h.appendChild(s),r.Element.call(this,s,i,!1),this._styles=[],this.width=e,this.height=t,this._pixelDensity=i._pixelDensity,this._renderer=a===n.WEBGL?new r.RendererGL(s,this,!1):new r.Renderer2D(s,this,!1),this._renderer.resize(e,t),this._renderer._applyDefaults(),i._elements.push(this);for(var l in r.prototype)this[l]||(this[l]="function"==typeof r.prototype[l]?r.prototype[l].bind(this):r.prototype[l]);return this},r.Graphics.prototype=Object.create(r.Element.prototype),t.exports=r.Graphics},{"./constants":36,"./core":37}],43:[function(e,t){function r(e){var t=0,r=0;if(e.offsetParent){do t+=e.offsetLeft,r+=e.offsetTop;while(e=e.offsetParent)}else t+=e.offsetLeft,r+=e.offsetTop;return[t,r]}var n=e("./core"),o=e("../core/constants");n.Renderer=function(e,t,r){n.Element.call(this,e,t),this.canvas=e,this._pInst=t,r?(this._isMainCanvas=!0,this._pInst._setProperty("_curElement",this),this._pInst._setProperty("canvas",this.canvas),this._pInst._setProperty("width",this.width),this._pInst._setProperty("height",this.height)):(this.canvas.style.display="none",this._styles=[]),this._textSize=12,this._textLeading=15,this._textFont="sans-serif",this._textStyle=o.NORMAL,this._textAscent=null,this._textDescent=null,this._rectMode=o.CORNER,this._ellipseMode=o.CENTER,this._curveTightness=0,this._imageMode=o.CORNER,this._tint=null,this._doStroke=!0,this._doFill=!0,this._strokeSet=!1,this._fillSet=!1,this._colorMode=o.RGB,this._colorMaxes={rgb:[255,255,255,255],hsb:[360,100,100,1],hsl:[360,100,100,1]}},n.Renderer.prototype=Object.create(n.Element.prototype),n.Renderer.prototype.resize=function(e,t){this.width=e,this.height=t,this.elt.width=e*this._pInst._pixelDensity,this.elt.height=t*this._pInst._pixelDensity,this.elt.style.width=e+"px",this.elt.style.height=t+"px",this._isMainCanvas&&(this._pInst._setProperty("width",this.width),this._pInst._setProperty("height",this.height))},n.Renderer.prototype.textLeading=function(e){return arguments.length&&arguments[0]?(this._setProperty("_textLeading",e),this):this._textLeading},n.Renderer.prototype.textSize=function(e){return arguments.length&&arguments[0]?(this._setProperty("_textSize",e),this._setProperty("_textLeading",e*o._DEFAULT_LEADMULT),this._applyTextProperties()):this._textSize},n.Renderer.prototype.textStyle=function(e){return arguments.length&&arguments[0]?((e===o.NORMAL||e===o.ITALIC||e===o.BOLD)&&this._setProperty("_textStyle",e),this._applyTextProperties()):this._textStyle},n.Renderer.prototype.textAscent=function(){return null===this._textAscent&&this._updateTextMetrics(),this._textAscent},n.Renderer.prototype.textDescent=function(){return null===this._textDescent&&this._updateTextMetrics(),this._textDescent},n.Renderer.prototype._applyDefaults=function(){return this},n.Renderer.prototype._isOpenType=function(e){return e=e||this._textFont,"object"==typeof e&&e.font&&e.font.supported},n.Renderer.prototype._updateTextMetrics=function(){if(this._isOpenType())return this._setProperty("_textAscent",this._textFont._textAscent()),this._setProperty("_textDescent",this._textFont._textDescent()),this;var e=document.createElement("span");e.style.fontFamily=this._textFont,e.style.fontSize=this._textSize+"px",e.innerHTML="ABCjgq|";var t=document.createElement("div");t.style.display="inline-block",t.style.width="1px",t.style.height="0px";var n=document.createElement("div");n.appendChild(e),n.appendChild(t),n.style.height="0px",n.style.overflow="hidden",document.body.appendChild(n),t.style.verticalAlign="baseline";var o=r(t),i=r(e),a=o[1]-i[1];t.style.verticalAlign="bottom",o=r(t),i=r(e);var s=o[1]-i[1],h=s-a;return document.body.removeChild(n),this._setProperty("_textAscent",a),this._setProperty("_textDescent",h),this},t.exports=n.Renderer},{"../core/constants":36,"./core":37}],44:[function(e,t){var r=e("./core"),n=e("./canvas"),o=e("./constants"),i=e("../image/filters");e("./p5.Renderer");var a="rgba(0,0,0,0)";r.Renderer2D=function(e,t,n){return r.Renderer.call(this,e,t,n),this.drawingContext=this.canvas.getContext("2d"),this._pInst._setProperty("drawingContext",this.drawingContext),this},r.Renderer2D.prototype=Object.create(r.Renderer.prototype),r.Renderer2D.prototype._applyDefaults=function(){this.drawingContext.fillStyle=o._DEFAULT_FILL,this.drawingContext.strokeStyle=o._DEFAULT_STROKE,this.drawingContext.lineCap=o.ROUND,this.drawingContext.font="normal 12px sans-serif"},r.Renderer2D.prototype.resize=function(e,t){r.Renderer.prototype.resize.call(this,e,t),this.drawingContext.scale(this._pInst._pixelDensity,this._pInst._pixelDensity)},r.Renderer2D.prototype.background=function(){if(this.drawingContext.save(),this.drawingContext.setTransform(1,0,0,1,0,0),this.drawingContext.scale(this._pInst._pixelDensity,this._pInst._pixelDensity),arguments[0]instanceof r.Image)this._pInst.image(arguments[0],0,0,this.width,this.height);else{var e=this.drawingContext.fillStyle,t=this._pInst.color.apply(this,arguments),n=t.toString();this.drawingContext.fillStyle=n,this.drawingContext.fillRect(0,0,this.width,this.height),this.drawingContext.fillStyle=e}this.drawingContext.restore()},r.Renderer2D.prototype.clear=function(){this.drawingContext.clearRect(0,0,this.width,this.height)},r.Renderer2D.prototype.fill=function(){var e=this.drawingContext,t=this._pInst.color.apply(this,arguments);e.fillStyle=t.toString()},r.Renderer2D.prototype.stroke=function(){var e=this.drawingContext,t=this._pInst.color.apply(this,arguments);e.strokeStyle=t.toString()},r.Renderer2D.prototype.image=function(e,t,n,o,i,a,s,h,l){var u;try{this._tint&&(r.MediaElement&&e instanceof r.MediaElement&&e.loadPixels(),e.canvas&&(u=this._getTintedImageCanvas(e))),u||(u=e.canvas||e.elt),this.drawingContext.drawImage(u,t,n,o,i,a,s,h,l)}catch(p){if("NS_ERROR_NOT_AVAILABLE"!==p.name)throw p}},r.Renderer2D.prototype._getTintedImageCanvas=function(e){if(!e.canvas)return e;var t=i._toPixels(e.canvas),r=document.createElement("canvas");r.width=e.canvas.width,r.height=e.canvas.height;for(var n=r.getContext("2d"),o=n.createImageData(e.canvas.width,e.canvas.height),a=o.data,s=0;s<t.length;s+=4){var h=t[s],l=t[s+1],u=t[s+2],p=t[s+3];a[s]=h*this._tint[0]/255,a[s+1]=l*this._tint[1]/255,a[s+2]=u*this._tint[2]/255,a[s+3]=p*this._tint[3]/255}return n.putImageData(o,0,0),r},r.Renderer2D.prototype.blendMode=function(e){this.drawingContext.globalCompositeOperation=e},r.Renderer2D.prototype.blend=function(){var e=this.drawingContext.globalCompositeOperation,t=arguments[arguments.length-1],r=Array.prototype.slice.call(arguments,0,arguments.length-1);this.drawingContext.globalCompositeOperation=t,this._pInst?this._pInst.copy.apply(this._pInst,r):this.copy.apply(this,r),this.drawingContext.globalCompositeOperation=e},r.Renderer2D.prototype.copy=function(){var e,t,n,o,i,a,s,h,l;if(9===arguments.length)e=arguments[0],t=arguments[1],n=arguments[2],o=arguments[3],i=arguments[4],a=arguments[5],s=arguments[6],h=arguments[7],l=arguments[8];else{if(8!==arguments.length)throw new Error("Signature not supported");e=this._pInst,t=arguments[0],n=arguments[1],o=arguments[2],i=arguments[3],a=arguments[4],s=arguments[5],h=arguments[6],l=arguments[7]}r.Renderer2D._copyHelper(e,t,n,o,i,a,s,h,l)},r.Renderer2D._copyHelper=function(e,t,r,n,o,i,a,s,h){e.canvas||e.loadPixels();var l=e.canvas.width/e.width;this.drawingContext.drawImage(e.canvas,l*t,l*r,l*n,l*o,i,a,s,h)},r.Renderer2D.prototype.get=function(e,t,n,o){if(void 0===e&&void 0===t&&void 0===n&&void 0===o?(e=0,t=0,n=this.width,o=this.height):void 0===n&&void 0===o&&(n=1,o=1),0>e+n||0>t+o||e>this.width||t>this.height)return[0,0,0,255];var i=this._pInst||this,a=i._pixelDensity;e=Math.floor(e),t=Math.floor(t);var s=e*a,h=t*a;if(1===n&&1===o){var l=this.drawingContext.getImageData(s,h,1,1).data;return[l[0],l[1],l[2],l[3]]}var u=Math.min(n,i.width),p=Math.min(o,i.height),c=u*a,f=p*a,d=new r.Image(u,p);return d.canvas.getContext("2d").drawImage(this.canvas,s,h,c,f,0,0,u,p),d},r.Renderer2D.prototype.loadPixels=function(){var e=this._pixelDensity||this._pInst._pixelDensity,t=this.width*e,r=this.height*e,n=this.drawingContext.getImageData(0,0,t,r);this._pInst?(this._pInst._setProperty("imageData",n),this._pInst._setProperty("pixels",n.data)):(this._setProperty("imageData",n),this._setProperty("pixels",n.data))},r.Renderer2D.prototype.set=function(e,t,n){if(e=Math.floor(e),t=Math.floor(t),n instanceof r.Image)this.drawingContext.save(),this.drawingContext.setTransform(1,0,0,1,0,0),this.drawingContext.scale(this._pInst._pixelDensity,this._pInst._pixelDensity),this.drawingContext.drawImage(n.canvas,e,t),this.loadPixels.call(this._pInst),this.drawingContext.restore();else{var o=this._pInst||this,i=0,a=0,s=0,h=0,l=4*(t*o._pixelDensity*this.width*o._pixelDensity+e*o._pixelDensity);if(o.imageData||o.loadPixels.call(o),"number"==typeof n)l<o.pixels.length&&(i=n,a=n,s=n,h=255);else if(n instanceof Array){if(n.length<4)throw new Error("pixel array must be of the form [R, G, B, A]");l<o.pixels.length&&(i=n[0],a=n[1],s=n[2],h=n[3])}else n instanceof r.Color&&l<o.pixels.length&&(i=n.levels[0],a=n.levels[1],s=n.levels[2],h=n.levels[3]);for(var u=0;u<o._pixelDensity;u++)for(var p=0;p<o._pixelDensity;p++)l=4*((t*o._pixelDensity+p)*this.width*o._pixelDensity+(e*o._pixelDensity+u)),o.pixels[l]=i,o.pixels[l+1]=a,o.pixels[l+2]=s,o.pixels[l+3]=h}},r.Renderer2D.prototype.updatePixels=function(e,t,r,n){var o=this._pixelDensity||this._pInst._pixelDensity;void 0===e&&void 0===t&&void 0===r&&void 0===n&&(e=0,t=0,r=this.width,n=this.height),r*=o,n*=o,this._pInst?this.drawingContext.putImageData(this._pInst.imageData,e,t,0,0,r,n):this.drawingContext.putImageData(this.imageData,e,t,0,0,r,n)},r.Renderer2D.prototype._acuteArcToBezier=function(e,t){var r=t/2,n=Math.cos(r),o=Math.sin(r),i=1/Math.tan(r),a=e+r,s=Math.cos(a),h=Math.sin(a),l=(4-n)/3,u=o+(n-l)*i;return{ax:Math.cos(e),ay:Math.sin(e),bx:l*s+u*h,by:l*h-u*s,cx:l*s-u*h,cy:l*h+u*s,dx:Math.cos(e+t),dy:Math.sin(e+t)}},r.Renderer2D.prototype.arc=function(e,t,r,i,a,s,h){for(var l=this.drawingContext,u=n.arcModeAdjust(e,t,r,i,this._ellipseMode),p=u.w/2,c=u.h/2,f=1e-5,d=0,m=[];s-a>f;)d=Math.min(s-a,o.HALF_PI),m.push(this._acuteArcToBezier(a,d)),a+=d;return this._doFill&&(l.beginPath(),m.forEach(function(e,t){0===t&&l.moveTo(u.x+e.ax*p,u.y+e.ay*c),l.bezierCurveTo(u.x+e.bx*p,u.y+e.by*c,u.x+e.cx*p,u.y+e.cy*c,u.x+e.dx*p,u.y+e.dy*c)}),(h===o.PIE||null==h)&&l.lineTo(u.x,u.y),l.closePath(),l.fill()),this._doStroke&&(l.beginPath(),m.forEach(function(e,t){0===t&&l.moveTo(u.x+e.ax*p,u.y+e.ay*c),l.bezierCurveTo(u.x+e.bx*p,u.y+e.by*c,u.x+e.cx*p,u.y+e.cy*c,u.x+e.dx*p,u.y+e.dy*c)}),h===o.PIE?(l.lineTo(u.x,u.y),l.closePath()):h===o.CHORD&&l.closePath(),l.stroke()),this},r.Renderer2D.prototype.ellipse=function(e){var t=this.drawingContext,r=this._doFill,n=this._doStroke,o=e[0],i=e[1],s=e[2],h=e[3];if(r&&!n){if(t.fillStyle===a)return this}else if(!r&&n&&t.strokeStyle===a)return this;var l=.5522847498,u=s/2*l,p=h/2*l,c=o+s,f=i+h,d=o+s/2,m=i+h/2;t.beginPath(),t.moveTo(o,m),t.bezierCurveTo(o,m-p,d-u,i,d,i),t.bezierCurveTo(d+u,i,c,m-p,c,m),t.bezierCurveTo(c,m+p,d+u,f,d,f),t.bezierCurveTo(d-u,f,o,m+p,o,m),t.closePath(),r&&t.fill(),n&&t.stroke()},r.Renderer2D.prototype.line=function(e,t,r,n){var o=this.drawingContext;return this._doStroke?o.strokeStyle===a?this:(o.lineWidth%2===1&&o.translate(.5,.5),o.beginPath(),o.moveTo(e,t),o.lineTo(r,n),o.stroke(),o.lineWidth%2===1&&o.translate(-.5,-.5),this):this},r.Renderer2D.prototype.point=function(e,t){var r=this.drawingContext,n=r.strokeStyle,i=r.fillStyle;return this._doStroke?r.strokeStyle===a?this:(e=Math.round(e),t=Math.round(t),r.fillStyle=n,r.lineWidth>1?(r.beginPath(),r.arc(e,t,r.lineWidth/2,0,o.TWO_PI,!1),r.fill()):r.fillRect(e,t,1,1),r.fillStyle=i,void 0):this},r.Renderer2D.prototype.quad=function(e,t,r,n,o,i,s,h){var l=this.drawingContext,u=this._doFill,p=this._doStroke;if(u&&!p){if(l.fillStyle===a)return this}else if(!u&&p&&l.strokeStyle===a)return this;return l.beginPath(),l.moveTo(e,t),l.lineTo(r,n),l.lineTo(o,i),l.lineTo(s,h),l.closePath(),u&&l.fill(),p&&l.stroke(),this},r.Renderer2D.prototype.rect=function(e){var t=e[0],r=e[1],n=e[2],o=e[3],i=e[4],s=e[5],h=e[6],l=e[7],u=this.drawingContext,p=this._doFill,c=this._doStroke;if(p&&!c){if(u.fillStyle===a)return this}else if(!p&&c&&u.strokeStyle===a)return this;if(this._doStroke&&u.lineWidth%2===1&&u.translate(.5,.5),u.beginPath(),"undefined"==typeof i)u.rect(t,r,n,o);else{"undefined"==typeof s&&(s=i),"undefined"==typeof h&&(h=s),"undefined"==typeof l&&(l=h);var f=n/2,d=o/2;2*i>n&&(i=f),2*i>o&&(i=d),2*s>n&&(s=f),2*s>o&&(s=d),2*h>n&&(h=f),2*h>o&&(h=d),2*l>n&&(l=f),2*l>o&&(l=d),u.beginPath(),u.moveTo(t+i,r),u.arcTo(t+n,r,t+n,r+o,s),u.arcTo(t+n,r+o,t,r+o,h),u.arcTo(t,r+o,t,r,l),u.arcTo(t,r,t+n,r,i),u.closePath()}return this._doFill&&u.fill(),this._doStroke&&u.stroke(),this._doStroke&&u.lineWidth%2===1&&u.translate(-.5,-.5),this},r.Renderer2D.prototype.triangle=function(e){var t=this.drawingContext,r=this._doFill,n=this._doStroke,o=e[0],i=e[1],s=e[2],h=e[3],l=e[4],u=e[5];if(r&&!n){if(t.fillStyle===a)return this}else if(!r&&n&&t.strokeStyle===a)return this;t.beginPath(),t.moveTo(o,i),t.lineTo(s,h),t.lineTo(l,u),t.closePath(),r&&t.fill(),n&&t.stroke()},r.Renderer2D.prototype.endShape=function(e,t,r,n,i,a,s){if(0===t.length)return this;if(!this._doStroke&&!this._doFill)return this;var h,l=e===o.CLOSE;l&&!a&&t.push(t[0]);var u,p,c=t.length;if(!r||s!==o.POLYGON&&null!==s)if(!n||s!==o.POLYGON&&null!==s)if(!i||s!==o.POLYGON&&null!==s)if(s===o.POINTS)for(u=0;c>u;u++)h=t[u],this._doStroke&&this._pInst.stroke(h[6]),this._pInst.point(h[0],h[1]);else if(s===o.LINES)for(u=0;c>u+1;u+=2)h=t[u],this._doStroke&&this._pInst.stroke(t[u+1][6]),this._pInst.line(h[0],h[1],t[u+1][0],t[u+1][1]);else if(s===o.TRIANGLES)for(u=0;c>u+2;u+=3)h=t[u],this.drawingContext.beginPath(),this.drawingContext.moveTo(h[0],h[1]),this.drawingContext.lineTo(t[u+1][0],t[u+1][1]),this.drawingContext.lineTo(t[u+2][0],t[u+2][1]),this.drawingContext.lineTo(h[0],h[1]),this._doFill&&(this._pInst.fill(t[u+2][5]),this.drawingContext.fill()),this._doStroke&&(this._pInst.stroke(t[u+2][6]),this.drawingContext.stroke()),this.drawingContext.closePath();else if(s===o.TRIANGLE_STRIP)for(u=0;c>u+1;u++)h=t[u],this.drawingContext.beginPath(),this.drawingContext.moveTo(t[u+1][0],t[u+1][1]),this.drawingContext.lineTo(h[0],h[1]),this._doStroke&&this._pInst.stroke(t[u+1][6]),this._doFill&&this._pInst.fill(t[u+1][5]),c>u+2&&(this.drawingContext.lineTo(t[u+2][0],t[u+2][1]),this._doStroke&&this._pInst.stroke(t[u+2][6]),this._doFill&&this._pInst.fill(t[u+2][5])),this._doFillStrokeClose();else if(s===o.TRIANGLE_FAN){if(c>2)for(this.drawingContext.beginPath(),this.drawingContext.moveTo(t[0][0],t[0][1]),this.drawingContext.lineTo(t[1][0],t[1][1]),this.drawingContext.lineTo(t[2][0],t[2][1]),this._doFill&&this._pInst.fill(t[2][5]),this._doStroke&&this._pInst.stroke(t[2][6]),this._doFillStrokeClose(),u=3;c>u;u++)h=t[u],this.drawingContext.beginPath(),this.drawingContext.moveTo(t[0][0],t[0][1]),this.drawingContext.lineTo(t[u-1][0],t[u-1][1]),this.drawingContext.lineTo(h[0],h[1]),this._doFill&&this._pInst.fill(h[5]),this._doStroke&&this._pInst.stroke(h[6]),this._doFillStrokeClose()}else if(s===o.QUADS)for(u=0;c>u+3;u+=4){for(h=t[u],this.drawingContext.beginPath(),this.drawingContext.moveTo(h[0],h[1]),p=1;4>p;p++)this.drawingContext.lineTo(t[u+p][0],t[u+p][1]);this.drawingContext.lineTo(h[0],h[1]),this._doFill&&this._pInst.fill(t[u+3][5]),this._doStroke&&this._pInst.stroke(t[u+3][6]),this._doFillStrokeClose()}else if(s===o.QUAD_STRIP){if(c>3)for(u=0;c>u+1;u+=2)h=t[u],this.drawingContext.beginPath(),c>u+3?(this.drawingContext.moveTo(t[u+2][0],t[u+2][1]),this.drawingContext.lineTo(h[0],h[1]),this.drawingContext.lineTo(t[u+1][0],t[u+1][1]),this.drawingContext.lineTo(t[u+3][0],t[u+3][1]),this._doFill&&this._pInst.fill(t[u+3][5]),this._doStroke&&this._pInst.stroke(t[u+3][6])):(this.drawingContext.moveTo(h[0],h[1]),this.drawingContext.lineTo(t[u+1][0],t[u+1][1])),this._doFillStrokeClose()}else{for(this.drawingContext.beginPath(),this.drawingContext.moveTo(t[0][0],t[0][1]),u=1;c>u;u++)h=t[u],h.isVert&&(h.moveTo?this.drawingContext.moveTo(h[0],h[1]):this.drawingContext.lineTo(h[0],h[1]));this._doFillStrokeClose()}else{for(this.drawingContext.beginPath(),u=0;c>u;u++)t[u].isVert?t[u].moveTo?this.drawingContext.moveTo([0],t[u][1]):this.drawingContext.lineTo(t[u][0],t[u][1]):this.drawingContext.quadraticCurveTo(t[u][0],t[u][1],t[u][2],t[u][3]);this._doFillStrokeClose()}else{for(this.drawingContext.beginPath(),u=0;c>u;u++)t[u].isVert?t[u].moveTo?this.drawingContext.moveTo(t[u][0],t[u][1]):this.drawingContext.lineTo(t[u][0],t[u][1]):this.drawingContext.bezierCurveTo(t[u][0],t[u][1],t[u][2],t[u][3],t[u][4],t[u][5]);this._doFillStrokeClose()}else if(c>3){var f=[],d=1-this._curveTightness;for(this.drawingContext.beginPath(),this.drawingContext.moveTo(t[1][0],t[1][1]),u=1;c>u+2;u++)h=t[u],f[0]=[h[0],h[1]],f[1]=[h[0]+(d*t[u+1][0]-d*t[u-1][0])/6,h[1]+(d*t[u+1][1]-d*t[u-1][1])/6],f[2]=[t[u+1][0]+(d*t[u][0]-d*t[u+2][0])/6,t[u+1][1]+(d*t[u][1]-d*t[u+2][1])/6],f[3]=[t[u+1][0],t[u+1][1]],this.drawingContext.bezierCurveTo(f[1][0],f[1][1],f[2][0],f[2][1],f[3][0],f[3][1]);l&&this.drawingContext.lineTo(t[u+1][0],t[u+1][1]),this._doFillStrokeClose()}return r=!1,n=!1,i=!1,a=!1,l&&t.pop(),this},r.Renderer2D.prototype.noSmooth=function(){return"imageSmoothingEnabled"in this.drawingContext?this.drawingContext.imageSmoothingEnabled=!1:"mozImageSmoothingEnabled"in this.drawingContext?this.drawingContext.mozImageSmoothingEnabled=!1:"webkitImageSmoothingEnabled"in this.drawingContext?this.drawingContext.webkitImageSmoothingEnabled=!1:"msImageSmoothingEnabled"in this.drawingContext&&(this.drawingContext.msImageSmoothingEnabled=!1),this},r.Renderer2D.prototype.smooth=function(){return"imageSmoothingEnabled"in this.drawingContext?this.drawingContext.imageSmoothingEnabled=!0:"mozImageSmoothingEnabled"in this.drawingContext?this.drawingContext.mozImageSmoothingEnabled=!0:"webkitImageSmoothingEnabled"in this.drawingContext?this.drawingContext.webkitImageSmoothingEnabled=!0:"msImageSmoothingEnabled"in this.drawingContext&&(this.drawingContext.msImageSmoothingEnabled=!0),this},r.Renderer2D.prototype.strokeCap=function(e){return(e===o.ROUND||e===o.SQUARE||e===o.PROJECT)&&(this.drawingContext.lineCap=e),this},r.Renderer2D.prototype.strokeJoin=function(e){return(e===o.ROUND||e===o.BEVEL||e===o.MITER)&&(this.drawingContext.lineJoin=e),this},r.Renderer2D.prototype.strokeWeight=function(e){return this.drawingContext.lineWidth="undefined"==typeof e||0===e?1e-4:e,this},r.Renderer2D.prototype._getFill=function(){return this.drawingContext.fillStyle},r.Renderer2D.prototype._getStroke=function(){return this.drawingContext.strokeStyle},r.Renderer2D.prototype.bezier=function(e,t,r,n,o,i,a,s){return this._pInst.beginShape(),this._pInst.vertex(e,t),this._pInst.bezierVertex(r,n,o,i,a,s),this._pInst.endShape(),this},r.Renderer2D.prototype.curve=function(e,t,r,n,o,i,a,s){return this._pInst.beginShape(),this._pInst.curveVertex(e,t),this._pInst.curveVertex(r,n),this._pInst.curveVertex(o,i),this._pInst.curveVertex(a,s),this._pInst.endShape(),this},r.Renderer2D.prototype._doFillStrokeClose=function(){this._doFill&&this.drawingContext.fill(),this._doStroke&&this.drawingContext.stroke(),this.drawingContext.closePath()},r.Renderer2D.prototype.applyMatrix=function(e,t,r,n,o,i){this.drawingContext.transform(e,t,r,n,o,i)},r.Renderer2D.prototype.resetMatrix=function(){return this.drawingContext.setTransform(1,0,0,1,0,0),this.drawingContext.scale(this._pInst._pixelDensity,this._pInst._pixelDensity),this},r.Renderer2D.prototype.rotate=function(e){this.drawingContext.rotate(e)},r.Renderer2D.prototype.scale=function(e,t){return this.drawingContext.scale(e,t),this},r.Renderer2D.prototype.shearX=function(e){return this._pInst._angleMode===o.DEGREES&&(e=this._pInst.degrees(e)),this.drawingContext.transform(1,0,this._pInst.tan(e),1,0,0),this},r.Renderer2D.prototype.shearY=function(e){return this._pInst._angleMode===o.DEGREES&&(e=this._pInst.degrees(e)),this.drawingContext.transform(1,this._pInst.tan(e),0,1,0,0),this},r.Renderer2D.prototype.translate=function(e,t){return this.drawingContext.translate(e,t),this},r.Renderer2D.prototype.text=function(e,t,r,n,i){var a,s,h,l,u,p,c,f,d,m,g=this._pInst,y=Number.MAX_VALUE;if(this._doFill||this._doStroke){if("string"!=typeof e&&(e=e.toString()),e=e.replace(/(\t)/g,"  "),a=e.split("\n"),"undefined"!=typeof n){for(d=0,h=0;h<a.length;h++)for(u="",f=a[h].split(" "),s=0;s<f.length;s++)p=u+f[s]+" ",c=this.textWidth(p),c>n?(u=f[s]+" ",d+=g.textLeading()):u=p;switch(this._rectMode===o.CENTER&&(t-=n/2,r-=i/2),this.drawingContext.textAlign){case o.CENTER:t+=n/2;break;case o.RIGHT:t+=n}if("undefined"!=typeof i){switch(this.drawingContext.textBaseline){case o.BOTTOM:r+=i-d;break;case o._CTX_MIDDLE:r+=(i-d)/2;break;case o.BASELINE:m=!0,this.drawingContext.textBaseline=o.TOP}y=r+i-g.textAscent()}for(h=0;h<a.length;h++){for(u="",f=a[h].split(" "),s=0;s<f.length;s++)p=u+f[s]+" ",c=this.textWidth(p),c>n&&u.length>0?(this._renderText(g,u,t,r,y),u=f[s]+" ",r+=g.textLeading()):u=p;this._renderText(g,u,t,r,y),r+=g.textLeading()}}else{var v=0,x=g.textAlign().vertical;for(x===o.CENTER?v=(a.length-1)*g.textLeading()/2:x===o.BOTTOM&&(v=(a.length-1)*g.textLeading()),l=0;l<a.length;l++)this._renderText(g,a[l],t,r-v,y),r+=g.textLeading()}return m&&(this.drawingContext.textBaseline=o.BASELINE),g}},r.Renderer2D.prototype._renderText=function(e,t,r,n,i){return n>=i?void 0:(e.push(),this._isOpenType()?this._textFont._renderPath(t,r,n,{renderer:this}):(this._doStroke&&this._strokeSet&&this.drawingContext.strokeText(t,r,n),this._doFill&&(this.drawingContext.fillStyle=this._fillSet?this.drawingContext.fillStyle:o._DEFAULT_TEXT_FILL,this.drawingContext.fillText(t,r,n))),e.pop(),e)},r.Renderer2D.prototype.textWidth=function(e){return this._isOpenType()?this._textFont._textWidth(e,this._textSize):this.drawingContext.measureText(e).width},r.Renderer2D.prototype.textAlign=function(e,t){if(arguments.length)return(e===o.LEFT||e===o.RIGHT||e===o.CENTER)&&(this.drawingContext.textAlign=e),(t===o.TOP||t===o.BOTTOM||t===o.CENTER||t===o.BASELINE)&&(this.drawingContext.textBaseline=t===o.CENTER?o._CTX_MIDDLE:t),this._pInst;var r=this.drawingContext.textBaseline;return r===o._CTX_MIDDLE&&(r=o.CENTER),{horizontal:this.drawingContext.textAlign,vertical:r}},r.Renderer2D.prototype._applyTextProperties=function(){var e,t=this._pInst;return this._setProperty("_textAscent",null),this._setProperty("_textDescent",null),e=this._textFont,this._isOpenType()&&(e=this._textFont.font.familyName,this._setProperty("_textStyle",this._textFont.font.styleName)),this.drawingContext.font=this._textStyle+" "+this._textSize+"px "+e,t},r.Renderer2D.prototype.push=function(){this.drawingContext.save()},r.Renderer2D.prototype.pop=function(){this.drawingContext.restore()},t.exports=r.Renderer2D},{"../image/filters":54,"./canvas":35,"./constants":36,"./core":37,"./p5.Renderer":43}],45:[function(e,t){var r=e("./core"),n=e("./constants");e("./p5.Graphics"),e("./p5.Renderer2D"),e("../webgl/p5.RendererGL");var o="defaultCanvas0";r.prototype.createCanvas=function(e,t,i){var a,s,h=i||n.P2D;if(arguments[3]&&(a="boolean"==typeof arguments[3]?arguments[3]:!1),h===n.WEBGL)s=document.getElementById(o),s&&s.parentNode.removeChild(s),s=document.createElement("canvas"),s.id=o;else if(a){s=document.createElement("canvas");for(var l=0;document.getElementById("defaultCanvas"+l);)l++;o="defaultCanvas"+l,s.id=o}else s=this.canvas;return this._setupDone||(s.dataset.hidden=!0,s.style.visibility="hidden"),this._userNode?this._userNode.appendChild(s):document.body.appendChild(s),h===n.WEBGL?(this._setProperty("_renderer",new r.RendererGL(s,this,!0)),this._isdefaultGraphics=!0):this._isdefaultGraphics||(this._setProperty("_renderer",new r.Renderer2D(s,this,!0)),this._isdefaultGraphics=!0),this._renderer.resize(e,t),this._renderer._applyDefaults(),a&&this._elements.push(this._renderer),this._renderer},r.prototype.resizeCanvas=function(e,t,r){if(this._renderer){var n={};for(var o in this.drawingContext){var i=this.drawingContext[o];"object"!=typeof i&&"function"!=typeof i&&(n[o]=i)}this._renderer.resize(e,t);for(var a in n)this.drawingContext[a]=n[a];r||this.redraw()}},r.prototype.noCanvas=function(){this.canvas&&this.canvas.parentNode.removeChild(this.canvas)},r.prototype.createGraphics=function(e,t,n){return new r.Graphics(e,t,n,this)},r.prototype.blendMode=function(e){if(e!==n.BLEND&&e!==n.DARKEST&&e!==n.LIGHTEST&&e!==n.DIFFERENCE&&e!==n.MULTIPLY&&e!==n.EXCLUSION&&e!==n.SCREEN&&e!==n.REPLACE&&e!==n.OVERLAY&&e!==n.HARD_LIGHT&&e!==n.SOFT_LIGHT&&e!==n.DODGE&&e!==n.BURN&&e!==n.ADD&&e!==n.NORMAL)throw new Error("Mode "+e+" not recognized.");this._renderer.blendMode(e)},t.exports=r},{"../webgl/p5.RendererGL":86,"./constants":36,"./core":37,"./p5.Graphics":42,"./p5.Renderer2D":44}],46:[function(){window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.performance=window.performance||{},window.performance.now=function(){var e=Date.now();return window.performance.now||window.performance.mozNow||window.performance.msNow||window.performance.oNow||window.performance.webkitNow||function(){return Date.now()-e}}(),/*
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/
// requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame =
      window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame =
      window[vendors[x]+'CancelAnimationFrame'] ||
      window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function()
        { callback(currTime + timeToCall); }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
}());
*/
function(){"use strict";"undefined"==typeof Uint8ClampedArray||Uint8ClampedArray.prototype.slice||Object.defineProperty(Uint8ClampedArray.prototype,"slice",{value:Array.prototype.slice,writable:!0,configurable:!0,enumerable:!1})}()},{}],47:[function(e,t){"use strict";var r=e("./core");r.prototype.exit=function(){throw"exit() not implemented, see remove()"},r.prototype.noLoop=function(){this._loop=!1},r.prototype.loop=function(){this._loop=!0,this._draw()},r.prototype.push=function(){this._renderer.push(),this._styles.push({_doStroke:this._renderer._doStroke,_strokeSet:this._renderer._strokeSet,_doFill:this._renderer._doFill,_fillSet:this._renderer._fillSet,_tint:this._renderer._tint,_imageMode:this._renderer._imageMode,_rectMode:this._renderer._rectMode,_ellipseMode:this._renderer._ellipseMode,_colorMode:this._renderer._colorMode,_textFont:this._renderer._textFont,_textLeading:this._renderer._textLeading,_textSize:this._renderer._textSize,_textStyle:this._renderer._textStyle})},r.prototype.pop=function(){this._renderer.pop();var e=this._styles.pop();for(var t in e)this._renderer[t]=e[t]},r.prototype.pushStyle=function(){throw new Error("pushStyle() not used, see push()")},r.prototype.popStyle=function(){throw new Error("popStyle() not used, see pop()")},r.prototype.redraw=function(){this.resetMatrix(),this._renderer.isP3D&&this._renderer._update();var e=1;if(1===arguments.length)try{parseInt(arguments[0])>1&&(e=parseInt(arguments[0]))}catch(t){}var r=this.setup||window.setup,n=this.draw||window.draw;if("function"==typeof n){"undefined"==typeof r&&this.scale(this._pixelDensity,this._pixelDensity);for(var o=this,i=function(e){e.call(o)},a=0;e>a;a++)this._registeredMethods.pre.forEach(i),n(),this._registeredMethods.post.forEach(i)}},r.prototype.size=function(){var e="size() is not a valid p5 function, to set the size of the ";throw e+="drawing canvas, please use createCanvas() instead"},t.exports=r},{"./core":37}],48:[function(e,t){"use strict";var r=e("./core"),n=e("./constants");r.prototype.applyMatrix=function(e,t,r,n,o,i){return this._renderer.applyMatrix(e,t,r,n,o,i),this},r.prototype.popMatrix=function(){throw new Error("popMatrix() not used, see pop()")},r.prototype.printMatrix=function(){throw new Error("printMatrix() not implemented")},r.prototype.pushMatrix=function(){throw new Error("pushMatrix() not used, see push()")},r.prototype.resetMatrix=function(){return this._renderer.resetMatrix(),this},r.prototype.rotate=function(){for(var e,t=new Array(arguments.length),r=0;r<t.length;++r)t[r]=arguments[r];return this._angleMode===n.DEGREES?e=this.radians(t[0]):this._angleMode===n.RADIANS&&(e=t[0]),t.length>1?this._renderer.rotate(e,t[1]):this._renderer.rotate(e),this},r.prototype.rotateX=function(e){for(var t=new Array(arguments.length),r=0;r<t.length;++r)t[r]=arguments[r];if(!this._renderer.isP3D)throw"not supported in p2d. Please use webgl mode";return this._validateParameters("rotateX",t,[["Number"]]),this._renderer.rotateX(e),this},r.prototype.rotateY=function(e){if(!this._renderer.isP3D)throw"not supported in p2d. Please use webgl mode";for(var t=new Array(arguments.length),r=0;r<t.length;++r)t[r]=arguments[r];return this._validateParameters("rotateY",t,[["Number"]]),this._renderer.rotateY(e),this},r.prototype.rotateZ=function(e){if(!this._renderer.isP3D)throw"not supported in p2d. Please use webgl mode";for(var t=new Array(arguments.length),r=0;r<t.length;++r)t[r]=arguments[r];return this._validateParameters("rotateZ",t,[["Number"]]),this._renderer.rotateZ(e),this},r.prototype.scale=function(){for(var e,t,n,o=new Array(arguments.length),i=0;i<o.length;i++)o[i]=arguments[i];return o[0]instanceof r.Vector?(e=o[0].x,t=o[0].y,n=o[0].z):o[0]instanceof Array?(e=o[0][0],t=o[0][1],n=o[0][2]||1):1===o.length?e=t=n=o[0]:(e=o[0],t=o[1],n=o[2]||1),this._renderer.isP3D?this._renderer.scale.call(this._renderer,e,t,n):this._renderer.scale.call(this._renderer,e,t),this},r.prototype.shearX=function(e){return this._angleMode===n.DEGREES&&(e=this.radians(e)),this._renderer.shearX(e),this},r.prototype.shearY=function(e){return this._angleMode===n.DEGREES&&(e=this.radians(e)),this._renderer.shearY(e),this},r.prototype.translate=function(e,t,r){for(var n=new Array(arguments.length),o=0;o<n.length;++o)n[o]=arguments[o];return this._renderer.isP3D?(this._validateParameters("translate",n,[["Number","Number","Number"]]),this._renderer.translate(e,t,r)):(this._validateParameters("translate",n,[["Number","Number"]]),this._renderer.translate(e,t)),this},t.exports=r},{"./constants":36,"./core":37}],49:[function(e,t){"use strict";var r=e("./core"),n=e("./constants"),o=null,i=[],a=[],s=!1,h=!1,l=!1,u=!1,p=!0;r.prototype.beginContour=function(){return a=[],u=!0,this},r.prototype.beginShape=function(e){return o=e===n.POINTS||e===n.LINES||e===n.TRIANGLES||e===n.TRIANGLE_FAN||e===n.TRIANGLE_STRIP||e===n.QUADS||e===n.QUAD_STRIP?e:null,this._renderer.isP3D?this._renderer.beginShape(e):(i=[],a=[]),this},r.prototype.bezierVertex=function(){if(0===i.length)throw"vertex() must be used once before calling bezierVertex()";s=!0;for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.isVert=!1,u?a.push(e):i.push(e),this},r.prototype.curveVertex=function(e,t){return h=!0,this.vertex(e,t),this},r.prototype.endContour=function(){var e=a[0].slice();e.isVert=a[0].isVert,e.moveTo=!1,a.push(e),p&&(i.push(i[0]),p=!1);for(var t=0;t<a.length;t++)i.push(a[t]);return this},r.prototype.endShape=function(e){if(this._renderer.isP3D)this._renderer.endShape(e,h,s,l,u,o);else{if(0===i.length)return this;if(!this._renderer._doStroke&&!this._renderer._doFill)return this;var t=e===n.CLOSE;t&&!u&&i.push(i[0]),this._renderer.endShape(e,i,h,s,l,u,o),h=!1,s=!1,l=!1,u=!1,p=!0,t&&i.pop()}return this},r.prototype.quadraticVertex=function(e,t,r,o){if(this._contourInited){var s={};return s.x=e,s.y=t,s.x3=r,s.y3=o,s.type=n.QUADRATIC,this._contourVertices.push(s),this}if(!(i.length>0))throw"vertex() must be used once before calling quadraticVertex()";l=!0;for(var h=[],p=0;p<arguments.length;p++)h[p]=arguments[p];return h.isVert=!1,u?a.push(h):i.push(h),this},r.prototype.vertex=function(e,t,r){for(var n=new Array(arguments.length),o=0;o<n.length;++o)n[o]=arguments[o];if(this._renderer.isP3D)this._validateParameters("vertex",n,[["Number","Number","Number"]]),this._renderer.vertex(arguments[0],arguments[1],arguments[2]);else{this._validateParameters("vertex",n,[["Number","Number"],["Number","Number","Number"]]);var s=[];s.isVert=!0,s[0]=e,s[1]=t,s[2]=0,s[3]=0,s[4]=0,s[5]=this._renderer._getFill(),s[6]=this._renderer._getStroke(),r&&(s.moveTo=r),u?(0===a.length&&(s.moveTo=!0),a.push(s)):i.push(s)}return this},t.exports=r},{"./constants":36,"./core":37}],50:[function(e,t){"use strict";var r=e("../core/core");r.prototype.deviceOrientation=void 0,r.prototype.accelerationX=0,r.prototype.accelerationY=0,r.prototype.accelerationZ=0,r.prototype.pAccelerationX=0,r.prototype.pAccelerationY=0,r.prototype.pAccelerationZ=0,r.prototype._updatePAccelerations=function(){this._setProperty("pAccelerationX",this.accelerationX),this._setProperty("pAccelerationY",this.accelerationY),this._setProperty("pAccelerationZ",this.accelerationZ)},r.prototype.rotationX=0,r.prototype.rotationY=0,r.prototype.rotationZ=0,r.prototype.pRotationX=0,r.prototype.pRotationY=0,r.prototype.pRotationZ=0;var n,o,i,a=0,s=0,h=0,l="clockwise",u="clockwise",p="clockwise";r.prototype._updatePRotations=function(){this._setProperty("pRotationX",this.rotationX),this._setProperty("pRotationY",this.rotationY),this._setProperty("pRotationZ",this.rotationZ)},r.prototype.turnAxis=void 0;var c=.5,f=30;r.prototype.setMoveThreshold=function(e){"number"==typeof e&&(c=e)},r.prototype.setShakeThreshold=function(e){"number"==typeof e&&(f=e)},r.prototype._ondeviceorientation=function(e){this._updatePRotations(),this._setProperty("rotationX",e.beta),this._setProperty("rotationY",e.gamma),this._setProperty("rotationZ",e.alpha),this._handleMotion()},r.prototype._ondevicemotion=function(e){this._updatePAccelerations(),this._setProperty("accelerationX",2*e.acceleration.x),this._setProperty("accelerationY",2*e.acceleration.y),this._setProperty("accelerationZ",2*e.acceleration.z),this._handleMotion()},r.prototype._handleMotion=function(){90===window.orientation||-90===window.orientation?this._setProperty("deviceOrientation","landscape"):0===window.orientation?this._setProperty("deviceOrientation","portrait"):void 0===window.orientation&&this._setProperty("deviceOrientation","undefined");var e=this.deviceMoved||window.deviceMoved;"function"==typeof e&&(Math.abs(this.accelerationX-this.pAccelerationX)>c||Math.abs(this.accelerationY-this.pAccelerationY)>c||Math.abs(this.accelerationZ-this.pAccelerationZ)>c)&&e();var t=this.deviceTurned||window.deviceTurned;if("function"==typeof t){var r=this.rotationX+180,d=this.pRotationX+180,m=a+180;r-d>0&&270>r-d||-270>r-d?l="clockwise":(0>r-d||r-d>270)&&(l="counter-clockwise"),l!==n&&(m=r),Math.abs(r-m)>90&&Math.abs(r-m)<270&&(m=r,this._setProperty("turnAxis","X"),t()),n=l,a=m-180;var g=this.rotationY+180,y=this.pRotationY+180,v=s+180;g-y>0&&270>g-y||-270>g-y?u="clockwise":(0>g-y||g-this.pRotationY>270)&&(u="counter-clockwise"),u!==o&&(v=g),Math.abs(g-v)>90&&Math.abs(g-v)<270&&(v=g,this._setProperty("turnAxis","Y"),t()),o=u,s=v-180,this.rotationZ-this.pRotationZ>0&&this.rotationZ-this.pRotationZ<270||this.rotationZ-this.pRotationZ<-270?p="clockwise":(this.rotationZ-this.pRotationZ<0||this.rotationZ-this.pRotationZ>270)&&(p="counter-clockwise"),p!==i&&(h=this.rotationZ),Math.abs(this.rotationZ-h)>90&&Math.abs(this.rotationZ-h)<270&&(h=this.rotationZ,this._setProperty("turnAxis","Z"),t()),i=p,this._setProperty("turnAxis",void 0)}var x=this.deviceShaken||window.deviceShaken;if("function"==typeof x){var _,b;null!==this.pAccelerationX&&(_=Math.abs(this.accelerationX-this.pAccelerationX),b=Math.abs(this.accelerationY-this.pAccelerationY)),_+b>f&&x()}},t.exports=r},{"../core/core":37}],51:[function(e,t){"use strict";var r=e("../core/core"),n={};r.prototype.isKeyPressed=!1,r.prototype.keyIsPressed=!1,/**
 * The system variable key always contains the value of the most recent
 * key on the keyboard that was typed. To get the proper capitalization, it
 * is best to use it within keyTyped(). For non-ASCII keys, use the keyCode
 * variable.
 *
 * @property key
 * @example
 * <div><code>
 * // Click any key to display it!
 * // (Not Guaranteed to be Case Sensitive)
 * function setup() {
 *   fill(245, 123, 158);
 *   textSize(50);
 * }
 *
 * function draw() {
 *   background(200);
 *   text(key, 33,65); // Display last key pressed.
 * }
 * </div></code>
 *
 * @alt
 * canvas displays any key value that is pressed in pink font.
 *
 */
r.prototype.key="",r.prototype.keyCode=0,r.prototype._onkeydown=function(e){if(!n[e.which]){this._setProperty("isKeyPressed",!0),this._setProperty("keyIsPressed",!0),this._setProperty("keyCode",e.which),n[e.which]=!0;var t=String.fromCharCode(e.which);t||(t=e.which),this._setProperty("key",t);var r=this.keyPressed||window.keyPressed;if("function"==typeof r&&!e.charCode){var o=r(e);o===!1&&e.preventDefault()}}},r.prototype._onkeyup=function(e){var t=this.keyReleased||window.keyReleased;this._setProperty("isKeyPressed",!1),this._setProperty("keyIsPressed",!1),this._setProperty("_lastKeyCodeTyped",null),n[e.which]=!1;var r=String.fromCharCode(e.which);if(r||(r=e.which),this._setProperty("key",r),this._setProperty("keyCode",e.which),"function"==typeof t){var o=t(e);o===!1&&e.preventDefault()}},r.prototype._onkeypress=function(e){if(e.which!==this._lastKeyCodeTyped){this._setProperty("keyCode",e.which),this._setProperty("_lastKeyCodeTyped",e.which),this._setProperty("key",String.fromCharCode(e.which));var t=this.keyTyped||window.keyTyped;if("function"==typeof t){var r=t(e);r===!1&&e.preventDefault()}}},r.prototype._onblur=function(){n={}},r.prototype.keyIsDown=function(e){return n[e]},t.exports=r},{"../core/core":37}],52:[function(e,t){"use strict";function r(e,t){var r=e.getBoundingClientRect();return{x:t.clientX-r.left,y:t.clientY-r.top,winX:t.clientX,winY:t.clientY}}var n=e("../core/core"),o=e("../core/constants");n.prototype._hasMouseInteracted=!1,n.prototype.mouseX=0,n.prototype.mouseY=0,n.prototype.pmouseX=0,n.prototype.pmouseY=0,n.prototype.winMouseX=0,n.prototype.winMouseY=0,n.prototype.pwinMouseX=0,n.prototype.pwinMouseY=0,n.prototype.mouseButton=0,n.prototype.mouseIsPressed=!1,n.prototype.isMousePressed=!1,n.prototype._updateNextMouseCoords=function(e){var t=this.mouseX,n=this.mouseY,o=this.winMouseX,i=this.winMouseY;if("touchstart"===e.type||"touchmove"===e.type||"touchend"===e.type||e.touches)t=this.touchX,n=this.touchY,o=this.winTouchX,i=this.winTouchY;else if(null!==this._curElement){var a=r(this._curElement.elt,e);t=a.x,n=a.y,o=a.winX,i=a.winY}this._setProperty("mouseX",t),this._setProperty("mouseY",n),this._setProperty("winMouseX",o),this._setProperty("winMouseY",i),this._hasMouseInteracted||(this._updateMouseCoords(),this._setProperty("_hasMouseInteracted",!0))},n.prototype._updateMouseCoords=function(){this._setProperty("pmouseX",this.mouseX),this._setProperty("pmouseY",this.mouseY),this._setProperty("pwinMouseX",this.winMouseX),this._setProperty("pwinMouseY",this.winMouseY)},n.prototype._setMouseButton=function(e){1===e.button?this._setProperty("mouseButton",o.CENTER):2===e.button?this._setProperty("mouseButton",o.RIGHT):this._setProperty("mouseButton",o.LEFT)},n.prototype._onmousemove=function(e){var t,r=this._isGlobal?window:this;this._updateNextMouseCoords(e),this._updateNextTouchCoords(e),this.isMousePressed?"function"==typeof r.mouseDragged?(t=r.mouseDragged(e),t===!1&&e.preventDefault()):"function"==typeof r.touchMoved&&(t=r.touchMoved(e),t===!1&&e.preventDefault()):"function"==typeof r.mouseMoved&&(t=r.mouseMoved(e),t===!1&&e.preventDefault())},n.prototype._onmousedown=function(e){var t,r=this._isGlobal?window:this;this._setProperty("isMousePressed",!0),this._setProperty("mouseIsPressed",!0),this._setMouseButton(e),this._updateNextMouseCoords(e),this._updateNextTouchCoords(e),"function"==typeof r.mousePressed?(t=r.mousePressed(e),t===!1&&e.preventDefault()):"function"==typeof r.touchStarted&&(t=r.touchStarted(e),t===!1&&e.preventDefault())},n.prototype._onmouseup=function(e){var t,r=this._isGlobal?window:this;this._setProperty("isMousePressed",!1),this._setProperty("mouseIsPressed",!1),"function"==typeof r.mouseReleased?(t=r.mouseReleased(e),t===!1&&e.preventDefault()):"function"==typeof r.touchEnded&&(t=r.touchEnded(e),t===!1&&e.preventDefault())},n.prototype._ondragend=n.prototype._onmouseup,n.prototype._ondragover=n.prototype._onmousemove,n.prototype._onclick=function(e){var t=this._isGlobal?window:this;if("function"==typeof t.mouseClicked){var r=t.mouseClicked(e);r===!1&&e.preventDefault()}},n.prototype._onwheel=function(e){var t=this._isGlobal?window:this;if("function"==typeof t.mouseWheel){e.delta=e.deltaY;var r=t.mouseWheel(e);r===!1&&e.preventDefault()}},t.exports=n},{"../core/constants":36,"../core/core":37}],53:[function(e,t){"use strict";function r(e,t,r){r=r||0;var n=e.getBoundingClientRect(),o=t.touches[r]||t.changedTouches[r];return{x:o.clientX-n.left,y:o.clientY-n.top,winX:o.clientX,winY:o.clientY,id:o.identifier}}var n=e("../core/core");n.prototype._hasTouchInteracted=!1,n.prototype.touchX=0,n.prototype.touchY=0,n.prototype.ptouchX=0,n.prototype.ptouchY=0,n.prototype.winTouchX=0,n.prototype.winTouchY=0,n.prototype.pwinTouchX=0,n.prototype.pwinTouchY=0,n.prototype.touches=[],n.prototype.touchIsDown=!1,n.prototype._updateNextTouchCoords=function(e){var t=this.touchX,n=this.touchY,o=this.winTouchX,i=this.winTouchY;if("mousedown"!==e.type&&"mousemove"!==e.type&&"mouseup"!==e.type&&e.touches){if(null!==this._curElement){var a=r(this._curElement.elt,e,0);t=a.x,n=a.y,o=a.winX,i=a.winY;for(var s=[],h=0;h<e.touches.length;h++)s[h]=r(this._curElement.elt,e,h);this._setProperty("touches",s)}}else t=this.mouseX,n=this.mouseY,o=this.winMouseX,i=this.winMouseY;this._setProperty("touchX",t),this._setProperty("touchY",n),this._setProperty("winTouchX",o),this._setProperty("winTouchY",i),this._hasTouchInteracted||(this._updateTouchCoords(),this._setProperty("_hasTouchInteracted",!0))},n.prototype._updateTouchCoords=function(){this._setProperty("ptouchX",this.touchX),this._setProperty("ptouchY",this.touchY),this._setProperty("pwinTouchX",this.winTouchX),this._setProperty("pwinTouchY",this.winTouchY)},n.prototype._ontouchstart=function(e){var t,r=this._isGlobal?window:this;this._updateNextTouchCoords(e),this._updateNextMouseCoords(e),this._setProperty("touchIsDown",!0),"function"==typeof r.touchStarted?(t=r.touchStarted(e),t===!1&&e.preventDefault()):"function"==typeof r.mousePressed&&(t=r.mousePressed(e),t===!1&&e.preventDefault())},n.prototype._ontouchmove=function(e){var t,r=this._isGlobal?window:this;this._updateNextTouchCoords(e),this._updateNextMouseCoords(e),"function"==typeof r.touchMoved?(t=r.touchMoved(e),t===!1&&e.preventDefault()):"function"==typeof r.mouseDragged&&(t=r.mouseDragged(e),t===!1&&e.preventDefault())},n.prototype._ontouchend=function(e){this._updateNextTouchCoords(e),this._updateNextMouseCoords(e),0===this.touches.length&&this._setProperty("touchIsDown",!1);var t,r=this._isGlobal?window:this;"function"==typeof r.touchEnded?(t=r.touchEnded(e),t===!1&&e.preventDefault()):"function"==typeof r.mouseReleased&&(t=r.mouseReleased(e),t===!1&&e.preventDefault())},t.exports=n},{"../core/core":37}],54:[function(e,t){"use strict";function r(e){var t=3.5*e|0;if(t=1>t?1:248>t?t:248,i!==t){i=t,a=1+i<<1,s=new Int32Array(a),h=new Array(a);for(var r=0;a>r;r++)h[r]=new Int32Array(256);for(var n,o,l,u,p=1,c=t-1;t>p;p++){s[t+p]=s[c]=o=c*c,l=h[t+p],u=h[c--];for(var f=0;256>f;f++)l[f]=u[f]=o*f}n=s[t]=t*t,l=h[t];for(var d=0;256>d;d++)l[d]=n*d}}function n(e,t){for(var n=o._toPixels(e),l=e.width,u=e.height,p=l*u,c=new Int32Array(p),f=0;p>f;f++)c[f]=o._getARGB(n,f);var d,m,g,y,v,x,_,b,w,S,T=new Int32Array(p),M=new Int32Array(p),C=new Int32Array(p),R=new Int32Array(p),E=0;r(t);var A,P,L,I;for(P=0;u>P;P++){for(A=0;l>A;A++){if(y=g=m=v=d=0,x=A-i,0>x)S=-x,x=0;else{if(x>=l)break;S=0}for(L=S;a>L&&!(x>=l);L++){var D=c[x+E];I=h[L],v+=I[(-16777216&D)>>>24],m+=I[(16711680&D)>>16],g+=I[(65280&D)>>8],y+=I[255&D],d+=s[L],x++}_=E+A,T[_]=v/d,M[_]=m/d,C[_]=g/d,R[_]=y/d}E+=l}for(E=0,b=-i,w=b*l,P=0;u>P;P++){for(A=0;l>A;A++){if(y=g=m=v=d=0,0>b)S=_=-b,x=A;else{if(b>=u)break;S=0,_=b,x=A+w}for(L=S;a>L&&!(_>=u);L++)I=h[L],v+=I[T[x]],m+=I[M[x]],g+=I[C[x]],y+=I[R[x]],d+=s[L],_++,x+=l;c[A+E]=v/d<<24|m/d<<16|g/d<<8|y/d}E+=l,w+=l,b++}o._setPixels(n,c)}var o={};o._toPixels=function(e){return e instanceof ImageData?e.data:e.getContext("2d").getImageData(0,0,e.width,e.height).data},o._getARGB=function(e,t){var r=4*t;return e[r+3]<<24&4278190080|e[r]<<16&16711680|e[r+1]<<8&65280|255&e[r+2]},o._setPixels=function(e,t){for(var r=0,n=0,o=e.length;o>n;n++)r=4*n,e[r+0]=(16711680&t[n])>>>16,e[r+1]=(65280&t[n])>>>8,e[r+2]=255&t[n],e[r+3]=(4278190080&t[n])>>>24},o._toImageData=function(e){return e instanceof ImageData?e:e.getContext("2d").getImageData(0,0,e.width,e.height)},o._createImageData=function(e,t){return o._tmpCanvas=document.createElement("canvas"),o._tmpCtx=o._tmpCanvas.getContext("2d"),this._tmpCtx.createImageData(e,t)},o.apply=function(e,t,r){var n=e.getContext("2d"),o=n.getImageData(0,0,e.width,e.height),i=t(o,r);i instanceof ImageData?n.putImageData(i,0,0,0,0,e.width,e.height):n.putImageData(o,0,0,0,0,e.width,e.height)},o.threshold=function(e,t){var r=o._toPixels(e);void 0===t&&(t=.5);for(var n=Math.floor(255*t),i=0;i<r.length;i+=4){var a,s=r[i],h=r[i+1],l=r[i+2],u=.2126*s+.7152*h+.0722*l;a=u>=n?255:0,r[i]=r[i+1]=r[i+2]=a}},o.gray=function(e){for(var t=o._toPixels(e),r=0;r<t.length;r+=4){var n=t[r],i=t[r+1],a=t[r+2],s=.2126*n+.7152*i+.0722*a;t[r]=t[r+1]=t[r+2]=s}},o.opaque=function(e){for(var t=o._toPixels(e),r=0;r<t.length;r+=4)t[r+3]=255;return t},o.invert=function(e){for(var t=o._toPixels(e),r=0;r<t.length;r+=4)t[r]=255-t[r],t[r+1]=255-t[r+1],t[r+2]=255-t[r+2]},o.posterize=function(e,t){var r=o._toPixels(e);if(2>t||t>255)throw new Error("Level must be greater than 2 and less than 255 for posterize");for(var n=t-1,i=0;i<r.length;i+=4){var a=r[i],s=r[i+1],h=r[i+2];r[i]=255*(a*t>>8)/n,r[i+1]=255*(s*t>>8)/n,r[i+2]=255*(h*t>>8)/n}},o.dilate=function(e){for(var t,r,n,i,a,s,h,l,u,p,c,f,d,m,g,y,v,x=o._toPixels(e),_=0,b=x.length?x.length/4:0,w=new Int32Array(b);b>_;)for(t=_,r=_+e.width;r>_;)n=i=o._getARGB(x,_),h=_-1,s=_+1,l=_-e.width,u=_+e.width,t>h&&(h=_),s>=r&&(s=_),0>l&&(l=0),u>=b&&(u=_),f=o._getARGB(x,l),c=o._getARGB(x,h),d=o._getARGB(x,u),p=o._getARGB(x,s),a=77*(n>>16&255)+151*(n>>8&255)+28*(255&n),g=77*(c>>16&255)+151*(c>>8&255)+28*(255&c),m=77*(p>>16&255)+151*(p>>8&255)+28*(255&p),y=77*(f>>16&255)+151*(f>>8&255)+28*(255&f),v=77*(d>>16&255)+151*(d>>8&255)+28*(255&d),g>a&&(i=c,a=g),m>a&&(i=p,a=m),y>a&&(i=f,a=y),v>a&&(i=d,a=v),w[_++]=i;o._setPixels(x,w)},o.erode=function(e){for(var t,r,n,i,a,s,h,l,u,p,c,f,d,m,g,y,v,x=o._toPixels(e),_=0,b=x.length?x.length/4:0,w=new Int32Array(b);b>_;)for(t=_,r=_+e.width;r>_;)n=i=o._getARGB(x,_),h=_-1,s=_+1,l=_-e.width,u=_+e.width,t>h&&(h=_),s>=r&&(s=_),0>l&&(l=0),u>=b&&(u=_),f=o._getARGB(x,l),c=o._getARGB(x,h),d=o._getARGB(x,u),p=o._getARGB(x,s),a=77*(n>>16&255)+151*(n>>8&255)+28*(255&n),g=77*(c>>16&255)+151*(c>>8&255)+28*(255&c),m=77*(p>>16&255)+151*(p>>8&255)+28*(255&p),y=77*(f>>16&255)+151*(f>>8&255)+28*(255&f),v=77*(d>>16&255)+151*(d>>8&255)+28*(255&d),a>g&&(i=c,a=g),a>m&&(i=p,a=m),a>y&&(i=f,a=y),a>v&&(i=d,a=v),w[_++]=i;o._setPixels(x,w)};var i,a,s,h;o.blur=function(e,t){n(e,t)},t.exports=o},{}],55:[function(e,t){"use strict";var r=e("../core/core"),n=[];r.prototype.createImage=function(e,t){return new r.Image(e,t)},r.prototype.saveCanvas=function(){var e,t,n;if(3===arguments.length?(e=arguments[0],t=arguments[1],n=arguments[2]):2===arguments.length?"object"==typeof arguments[0]?(e=arguments[0],t=arguments[1]):(t=arguments[0],n=arguments[1]):1===arguments.length&&("object"==typeof arguments[0]?e=arguments[0]:t=arguments[0]),e instanceof r.Element&&(e=e.elt),e instanceof HTMLCanvasElement||(e=null),n||(n=r.prototype._checkFileExtension(t,n)[1],""===n&&(n="png")),e||this._curElement&&this._curElement.elt&&(e=this._curElement.elt),r.prototype._isSafari()){var o="Hello, Safari user!\n";o+="Now capturing a screenshot...\n",o+="To save this image,\n",o+="go to File --> Save As.\n",alert(o),window.location.href=e.toDataURL()}else{var i;if("undefined"==typeof n)n="png",i="image/png";else switch(n){case"png":i="image/png";break;case"jpeg":i="image/jpeg";break;case"jpg":i="image/jpeg";break;default:i="image/png"}var a="image/octet-stream",s=e.toDataURL(i);s=s.replace(i,a),r.prototype.downloadFile(s,t,n)}},r.prototype.saveFrames=function(e,t,o,i,a){var s=o||3;s=r.prototype.constrain(s,0,15),s=1e3*s;var h=i||15;h=r.prototype.constrain(h,0,22);var l=0,u=r.prototype._makeFrame,p=this._curElement.elt,c=setInterval(function(){u(e+l,t,p),l++},1e3/h);setTimeout(function(){if(clearInterval(c),a)a(n);else for(var e=0;e<n.length;e++){var t=n[e];r.prototype.downloadFile(t.imageData,t.filename,t.ext)}n=[]},s+.01)},r.prototype._makeFrame=function(e,t,r){var o;o=this?this._curElement.elt:r;var i;if(t)switch(t.toLowerCase()){case"png":i="image/png";break;case"jpeg":i="image/jpeg";break;case"jpg":i="image/jpeg";break;default:i="image/png"}else t="png",i="image/png";var a="image/octet-stream",s=o.toDataURL(i);s=s.replace(i,a);var h={};h.imageData=s,h.filename=e,h.ext=t,n.push(h)},t.exports=r},{"../core/core":37}],56:[function(e,t){"use strict";function r(e,t){return e>0&&t>e?e:t}var n=e("../core/core"),o=e("./filters"),i=e("../core/canvas"),a=e("../core/constants");e("../core/error_helpers"),n.prototype.loadImage=function(e,t,r){var o=new Image,i=new n.Image(1,1,this),a=n._getDecrementPreload.apply(this,arguments);return o.onload=function(){i.width=i.canvas.width=o.width,i.height=i.canvas.height=o.height,i.drawingContext.drawImage(o,0,0),"function"==typeof t&&t(i),a&&t!==a&&a()},o.onerror=function(e){n._friendlyFileLoadError(0,o.src),"function"==typeof r&&r!==a&&r(e)},0!==e.indexOf("data:image/")&&(o.crossOrigin="Anonymous"),o.src=e,i},n.prototype.image=function(e,t,n,o,a,s,h,l,u){if(arguments.length<=5)if(s=t||0,h=n||0,t=0,n=0,e.elt&&e.elt.videoWidth&&!e.canvas){var p=e.elt.videoWidth,c=e.elt.videoHeight;l=o||e.elt.width,u=a||e.elt.width*c/p,o=p,a=c}else l=o||e.width,u=a||e.height,o=e.width,a=e.height;else{if(9!==arguments.length)throw"Wrong number of arguments to image()";t=t||0,n=n||0,o=r(o,e.width),a=r(a,e.height),s=s||0,h=h||0,l=l||e.width,u=u||e.height}var f=i.modeAdjust(s,h,l,u,this._renderer._imageMode);this._renderer.image(e,t,n,o,a,f.x,f.y,f.w,f.h)},n.prototype.tint=function(){var e=this.color.apply(this,arguments);this._renderer._tint=e.levels},n.prototype.noTint=function(){this._renderer._tint=null},n.prototype._getTintedImageCanvas=function(e){if(!e.canvas)return e;var t=o._toPixels(e.canvas),r=document.createElement("canvas");r.width=e.canvas.width,r.height=e.canvas.height;for(var n=r.getContext("2d"),i=n.createImageData(e.canvas.width,e.canvas.height),a=i.data,s=0;s<t.length;s+=4){var h=t[s],l=t[s+1],u=t[s+2],p=t[s+3];a[s]=h*this._renderer._tint[0]/255,a[s+1]=l*this._renderer._tint[1]/255,a[s+2]=u*this._renderer._tint[2]/255,a[s+3]=p*this._renderer._tint[3]/255}return n.putImageData(i,0,0),r},n.prototype.imageMode=function(e){(e===a.CORNER||e===a.CORNERS||e===a.CENTER)&&(this._renderer._imageMode=e)},t.exports=n},{"../core/canvas":35,"../core/constants":36,"../core/core":37,"../core/error_helpers":40,"./filters":54}],57:[function(e,t){"use strict";var r=e("../core/core"),n=e("./filters");r.Image=function(e,t){this.width=e,this.height=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.drawingContext=this.canvas.getContext("2d"),this._pixelDensity=1,this.isTexture=!1,this.pixels=[]},r.Image.prototype._setProperty=function(e,t){this[e]=t},r.Image.prototype.loadPixels=function(){r.Renderer2D.prototype.loadPixels.call(this)},r.Image.prototype.updatePixels=function(e,t,n,o){r.Renderer2D.prototype.updatePixels.call(this,e,t,n,o)},r.Image.prototype.get=function(e,t,n,o){return r.Renderer2D.prototype.get.call(this,e,t,n,o)},r.Image.prototype.set=function(e,t,n){r.Renderer2D.prototype.set.call(this,e,t,n)},r.Image.prototype.resize=function(e,t){0===e&&0===t?(e=this.canvas.width,t=this.canvas.height):0===e?e=this.canvas.width*t/this.canvas.height:0===t&&(t=this.canvas.height*e/this.canvas.width),e=Math.floor(e),t=Math.floor(t);var r=document.createElement("canvas");r.width=e,r.height=t,r.getContext("2d").drawImage(this.canvas,0,0,this.canvas.width,this.canvas.height,0,0,r.width,r.height),this.canvas.width=this.width=e,this.canvas.height=this.height=t,this.drawingContext.drawImage(r,0,0,e,t,0,0,e,t),this.pixels.length>0&&this.loadPixels()},r.Image.prototype.copy=function(){r.prototype.copy.apply(this,arguments)},r.Image.prototype.mask=function(e){void 0===e&&(e=this);var t=this.drawingContext.globalCompositeOperation,n=1;e instanceof r.Renderer&&(n=e._pInst._pixelDensity);var o=[e,0,0,n*e.width,n*e.height,0,0,this.width,this.height];this.drawingContext.globalCompositeOperation="destination-in",r.Image.prototype.copy.apply(this,o),this.drawingContext.globalCompositeOperation=t},r.Image.prototype.filter=function(e,t){n.apply(this.canvas,n[e.toLowerCase()],t)},r.Image.prototype.blend=function(){r.prototype.blend.apply(this,arguments)},r.Image.prototype.save=function(e,t){var n;if(t)switch(t.toLowerCase()){case"png":n="image/png";break;case"jpeg":n="image/jpeg";break;case"jpg":n="image/jpeg";break;default:n="image/png"}else t="png",n="image/png";var o="image/octet-stream",i=this.canvas.toDataURL(n);i=i.replace(n,o),r.prototype.downloadFile(i,e,t)},t.exports=r.Image},{"../core/core":37,"./filters":54}],58:[function(e,t){"use strict";var r=e("../core/core"),n=e("./filters");e("../color/p5.Color"),r.prototype.pixels=[],r.prototype.blend=function(){this._renderer?this._renderer.blend.apply(this._renderer,arguments):r.Renderer2D.prototype.blend.apply(this,arguments)},r.prototype.copy=function(){r.Renderer2D._copyHelper.apply(this,arguments)},r.prototype.filter=function(e,t){n.apply(this.canvas,n[e.toLowerCase()],t)},r.prototype.get=function(e,t,r,n){return this._renderer.get(e,t,r,n)},r.prototype.loadPixels=function(){this._renderer.loadPixels()},r.prototype.set=function(e,t,r){this._renderer.set(e,t,r)},r.prototype.updatePixels=function(e,t,r,n){0!==this.pixels.length&&this._renderer.updatePixels(e,t,r,n)},t.exports=r},{"../color/p5.Color":31,"../core/core":37,"./filters":54}],59:[function(e,t){"use strict";function r(e,t){var r={};if(t=t||[],"undefined"==typeof t)for(var n=0;n<e.length;n++)t[n.toString()]=n;for(var o=0;o<t.length;o++){var i=t[o],a=e[o];r[i]=a}return r}function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function o(e,t){t&&t!==!0&&"true"!==t||(t=""),e||(e="untitled");var r="";return e&&e.indexOf(".")>-1&&(r=e.split(".").pop()),t&&r!==t&&(r=t,e=e+"."+r),[e,r]}function i(e){document.body.removeChild(e.target)}var a=e("../core/core"),s=e("reqwest"),h=e("opentype.js");e("../core/error_helpers"),a._getDecrementPreload=function(){var e=arguments[arguments.length-1];return(window.preload||this&&this.preload)&&"function"==typeof e?e:null},a.prototype.loadFont=function(e,t,r){var n=new a.Font(this),o=a._getDecrementPreload.apply(this,arguments);return h.load(e,function(i,s){if(i)return"undefined"!=typeof r&&r!==o?r(i):(a._friendlyFileLoadError(4,e),console.error(i,e),void 0);n.font=s,"undefined"!=typeof t&&t(n),o&&t!==o&&o();var h,l,u=["ttf","otf","woff","woff2"],p=e.split("\\").pop().split("/").pop(),c=p.lastIndexOf("."),f=1>c?null:p.substr(c+1);u.indexOf(f)>-1&&(h=p.substr(0,c),l=document.createElement("style"),l.appendChild(document.createTextNode("\n@font-face {\nfont-family: "+h+";\nsrc: url("+e+");\n}\n")),document.head.appendChild(l))}),n},a.prototype.createInput=function(){throw"not yet implemented"},a.prototype.createReader=function(){throw"not yet implemented"},a.prototype.loadBytes=function(){throw"not yet implemented"},a.prototype.loadJSON=function(){for(var e,t=arguments[0],r=arguments[1],n=a._getDecrementPreload.apply(this,arguments),o={},i="json",h=2;h<arguments.length;h++){var l=arguments[h];"string"==typeof l?("jsonp"===l||"json"===l)&&(i=l):"function"==typeof l&&(e=l)}return s({url:t,type:i,crossOrigin:!0,error:function(t){e?e(t):console.log(t.statusText)},success:function(e){for(var t in e)o[t]=e[t];"undefined"!=typeof r&&r(e),n&&r!==n&&n()}}),o},a.prototype.loadStrings=function(e,t,r){var n=[],o=new XMLHttpRequest,i=a._getDecrementPreload.apply(this,arguments);return o.addEventListener("error",function(e){r?r(e):console.log(e.responseText)}),o.open("GET",e,!0),o.onreadystatechange=function(){if(4===o.readyState)if(200===o.status){var e=o.responseText.match(/[^\r\n]+/g);for(var a in e)n[a]=e[a];"undefined"!=typeof t&&t(n),i&&t!==i&&i()}else r?r(o):console.log(o.statusText)},o.send(null),n},a.prototype.loadTable=function(e){for(var t=null,n=[],o=!1,i=",",h=!1,l=a._getDecrementPreload.apply(this,arguments),u=1;u<arguments.length;u++)if("function"==typeof arguments[u]&&arguments[u]!==l)t=arguments[u];else if("string"==typeof arguments[u])if(n.push(arguments[u]),"header"===arguments[u]&&(o=!0),"csv"===arguments[u]){if(h)throw new Error("Cannot set multiple separator types.");i=",",h=!0}else if("tsv"===arguments[u]){if(h)throw new Error("Cannot set multiple separator types.");i="	",h=!0}var p=new a.Table;return s({url:e,crossOrigin:!0,type:"csv"}).then(function(e){e=e.responseText;for(var n,s={},h=0,c=1,f=2,d=4,m='"',g="\r",y="\n",v=[],x=0,_=null,b=function(){s.escaped=!1,_=[],S()},w=function(){s.currentState=d,v.push(_),_=null},S=function(){s.currentState=h,s.token=""},T=function(){_.push(s.token),S()};;){if(n=e[x++],null==n){if(s.escaped)throw new Error("Unclosed quote in file.");if(_){T(),w();break}}if(null===_&&b(),s.currentState===h){if(n===m){s.escaped=!0,s.currentState=c;continue}s.currentState=c}s.currentState===c&&s.escaped?n===m?e[x]===m?(s.token+=m,x++):(s.escaped=!1,s.currentState=f):s.token+=n:n===g?(e[x]===y&&x++,T(),w()):n===y?(T(),w()):n===i?T():s.currentState===c&&(s.token+=n)}if(o)p.columns=v.shift();else for(u=0;u<v[0].length;u++)p.columns[u]="null";var M;for(u=0;u<v.length&&(u!==v.length-1||1!==v[u].length||"undefined"!==v[u][0]);u++)M=new a.TableRow,M.arr=v[u],M.obj=r(v[u],p.columns),p.addRow(M);null!==t&&t(p),l&&t!==l&&l()}).fail(function(){a._friendlyFileLoadError(2,e),"function"==typeof t&&t!==l&&t(!1)}),p},a.prototype.parseXML=function(e){var t,r=new a.XML;if(e.children.length){for(t=0;t<e.children.length;t++){var n=parseXML(e.children[t]);r.addChild(n)}r.setName(e.nodeName),r._setCont(e.textContent),r._setAttributes(e);for(var o=0;o<r.children.length;o++)r.children[o].parent=r;return r}return r.setName(e.nodeName),r._setCont(e.textContent),r._setAttributes(e),r},a.prototype.loadXML=function(e,t,r){var n={},o=a._getDecrementPreload.apply(this,arguments);return s({url:e,type:"xml",crossOrigin:!0,error:function(e){r?r(e):console.log(e.statusText)}}).then(function(e){var r=parseXML(e.documentElement);for(var i in r)n[i]=r[i];"undefined"!=typeof t&&t(n),o&&t!==o&&o()}),n},a.prototype.selectFolder=function(){throw"not yet implemented"},a.prototype.selectInput=function(){throw"not yet implemented"},a.prototype.httpGet=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];e.push("GET"),a.prototype.httpDo.apply(this,e)},a.prototype.httpPost=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];e.push("POST"),a.prototype.httpDo.apply(this,e)},a.prototype.httpDo=function(){if("object"==typeof arguments[0])s(arguments[0]);else{for(var e,t,r="GET",n=arguments[0],o={},i="",a=1;a<arguments.length;a++){var h=arguments[a];"string"==typeof h?"GET"===h||"POST"===h||"PUT"===h?r=h:i=h:"object"==typeof h?o=h:"function"==typeof h&&(e?t=h:e=h)}""===i&&(i=-1!==n.indexOf("json")?"json":-1!==n.indexOf("xml")?"xml":"text"),s({url:n,method:r,data:o,type:i,crossOrigin:!0,success:function(t){"undefined"!=typeof e&&("text"===i?e(t.response):e(t))},error:function(e){t?t(e):console.log(e.statusText)}})}},window.URL=window.URL||window.webkitURL,a.prototype._pWriters=[],a.prototype.beginRaw=function(){throw"not yet implemented"},a.prototype.beginRecord=function(){throw"not yet implemented"},a.prototype.createOutput=function(){throw"not yet implemented"},a.prototype.createWriter=function(e,t){var r;for(var n in a.prototype._pWriters)if(a.prototype._pWriters[n].name===e)return r=new a.PrintWriter(e+window.millis(),t),a.prototype._pWriters.push(r),r;return r=new a.PrintWriter(e,t),a.prototype._pWriters.push(r),r},a.prototype.endRaw=function(){throw"not yet implemented"},a.prototype.endRecord=function(){throw"not yet implemented"},a.PrintWriter=function(e,t){var r=this;this.name=e,this.content="",this.print=function(e){this.content+=e},this.print=function(e){this.content+=e+"\n"},this.flush=function(){this.content=""},this.close=function(){var n=[];n.push(this.content),a.prototype.writeFile(n,e,t);for(var o in a.prototype._pWriters)a.prototype._pWriters[o].name===this.name&&a.prototype._pWriters.splice(o,1);r.flush(),r={}}},a.prototype.saveBytes=function(){throw"not yet implemented"},a.prototype.save=function(){var e=arguments,t=this._curElement.elt;if(0===e.length)return a.prototype.saveCanvas(t),void 0;if(e[0]instanceof a.Renderer||e[0]instanceof a.Graphics)return a.prototype.saveCanvas(e[0].elt,e[1],e[2]),void 0;if(1===e.length&&"string"==typeof e[0])a.prototype.saveCanvas(t,e[0]);else{var r=o(e[1],e[2])[1];switch(r){case"json":return a.prototype.saveJSON(e[0],e[1],e[2]),void 0;case"txt":return a.prototype.saveStrings(e[0],e[1],e[2]),void 0;default:e[0]instanceof Array?a.prototype.saveStrings(e[0],e[1],e[2]):e[0]instanceof a.Table?a.prototype.saveTable(e[0],e[1],e[2],e[3]):e[0]instanceof a.Image?a.prototype.saveCanvas(e[0].canvas,e[1]):e[0]instanceof a.SoundFile&&a.prototype.saveSound(e[0],e[1],e[2],e[3])}}},a.prototype.saveJSON=function(e,t,r){var n;n=r?JSON.stringify(e):JSON.stringify(e,void 0,2),console.log(n),this.saveStrings(n.split("\n"),t,"json")},a.prototype.saveJSONObject=a.prototype.saveJSON,a.prototype.saveJSONArray=a.prototype.saveJSON,a.prototype.saveStream=function(){throw"not yet implemented"},a.prototype.saveStrings=function(e,t,r){for(var n=r||"txt",o=this.createWriter(t,n),i=0;i<e.length;i++)i<e.length-1?o.print(e[i]):o.print(e[i]);o.close(),o.flush()},a.prototype.saveXML=function(){throw"not yet implemented"},a.prototype.selectOutput=function(){throw"not yet implemented"},a.prototype.saveTable=function(e,t,r){var o=this.createWriter(t,r),i=e.columns,a=",";if("tsv"===r&&(a="	"),"html"!==r){if("0"!==i[0])for(var s=0;s<i.length;s++)s<i.length-1?o.print(i[s]+a):o.print(i[s]);for(var h=0;h<e.rows.length;h++){var l;for(l=0;l<e.rows[h].arr.length;l++)l<e.rows[h].arr.length-1?o.print(e.rows[h].arr[l]+a):h<e.rows.length-1?o.print(e.rows[h].arr[l]):o.print(e.rows[h].arr[l])}}else{o.print("<html>"),o.print("<head>");var u='  <meta http-equiv="content-type" content';if(u+='="text/html;charset=utf-8" />',o.print(u),o.print("</head>"),o.print("<body>"),o.print("  <table>"),"0"!==i[0]){o.print("    <tr>");for(var p=0;p<i.length;p++){var c=n(i[p]);o.print("      <td>"+c),o.print("      </td>")}o.print("    </tr>")}for(var f=0;f<e.rows.length;f++){o.print("    <tr>");for(var d=0;d<e.columns.length;d++){var m=e.rows[f].getString(d),g=n(m);o.print("      <td>"+g),o.print("      </td>")}o.print("    </tr>")}o.print("  </table>"),o.print("</body>"),o.print("</html>")}o.close(),o.flush()},a.prototype.writeFile=function(e,t,r){var n="application/octet-stream";a.prototype._isSafari()&&(n="text/plain");var o=new Blob(e,{type:n}),i=window.URL.createObjectURL(o);a.prototype.downloadFile(i,t,r)},a.prototype.downloadFile=function(e,t,r){var n=o(t,r),s=n[0],h=n[1],l=document.createElement("a");if(l.href=e,l.download=s,l.onclick=i,l.style.display="none",document.body.appendChild(l),a.prototype._isSafari()){var u="Hello, Safari user! To download this file...\n";u+="1. Go to File --> Save As.\n",u+='2. Choose "Page Source" as the Format.\n',u+='3. Name it with this extension: ."'+h+'"',alert(u)}l.click(),e=null},a.prototype._checkFileExtension=o,a.prototype._isSafari=function(){var e=Object.prototype.toString.call(window.HTMLElement);return e.indexOf("Constructor")>0},t.exports=a},{"../core/core":37,"../core/error_helpers":40,"opentype.js":8,reqwest:27}],60:[function(e,t){"use strict";var r=e("../core/core");r.Table=function(){this.columns=[],this.rows=[]},r.Table.prototype.addRow=function(e){var t=e||new r.TableRow;if("undefined"==typeof t.arr||"undefined"==typeof t.obj)throw"invalid TableRow: "+t;return t.table=this,this.rows.push(t),t},r.Table.prototype.removeRow=function(e){this.rows[e].table=null;var t=this.rows.splice(e+1,this.rows.length);this.rows.pop(),this.rows=this.rows.concat(t)},r.Table.prototype.getRow=function(e){return this.rows[e]},r.Table.prototype.getRows=function(){return this.rows},r.Table.prototype.findRow=function(e,t){if("string"==typeof t){for(var r=0;r<this.rows.length;r++)if(this.rows[r].obj[t]===e)return this.rows[r]}else for(var n=0;n<this.rows.length;n++)if(this.rows[n].arr[t]===e)return this.rows[n];return null},r.Table.prototype.findRows=function(e,t){var r=[];if("string"==typeof t)for(var n=0;n<this.rows.length;n++)this.rows[n].obj[t]===e&&r.push(this.rows[n]);else for(var o=0;o<this.rows.length;o++)this.rows[o].arr[t]===e&&r.push(this.rows[o]);return r},r.Table.prototype.matchRow=function(e,t){if("number"==typeof t){for(var r=0;r<this.rows.length;r++)if(this.rows[r].arr[t].match(e))return this.rows[r]}else for(var n=0;n<this.rows.length;n++)if(this.rows[n].obj[t].match(e))return this.rows[n];return null},r.Table.prototype.matchRows=function(e,t){var r=[];if("number"==typeof t)for(var n=0;n<this.rows.length;n++)this.rows[n].arr[t].match(e)&&r.push(this.rows[n]);else for(var o=0;o<this.rows.length;o++)this.rows[o].obj[t].match(e)&&r.push(this.rows[o]);return r},r.Table.prototype.getColumn=function(e){var t=[];if("string"==typeof e)for(var r=0;r<this.rows.length;r++)t.push(this.rows[r].obj[e]);else for(var n=0;n<this.rows.length;n++)t.push(this.rows[n].arr[e]);return t},r.Table.prototype.clearRows=function(){delete this.rows,this.rows=[]},r.Table.prototype.addColumn=function(e){var t=e||null;this.columns.push(t)},r.Table.prototype.getColumnCount=function(){return this.columns.length},r.Table.prototype.getRowCount=function(){return this.rows.length},r.Table.prototype.removeTokens=function(e,t){for(var r=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},n=[],o=0;o<e.length;o++)n.push(r(e.charAt(o)));var i=new RegExp(n.join("|"),"g");if("undefined"==typeof t)for(var a=0;a<this.columns.length;a++)for(var s=0;s<this.rows.length;s++){var h=this.rows[s].arr[a];h=h.replace(i,""),this.rows[s].arr[a]=h,this.rows[s].obj[this.columns[a]]=h}else if("string"==typeof t)for(var l=0;l<this.rows.length;l++){var u=this.rows[l].obj[t];u=u.replace(i,""),this.rows[l].obj[t]=u;var p=this.columns.indexOf(t);this.rows[l].arr[p]=u}else for(var c=0;c<this.rows.length;c++){var f=this.rows[c].arr[t];f=f.replace(i,""),this.rows[c].arr[t]=f,this.rows[c].obj[this.columns[t]]=f}},r.Table.prototype.trim=function(e){var t=new RegExp(" ","g");if("undefined"==typeof e)for(var r=0;r<this.columns.length;r++)for(var n=0;n<this.rows.length;n++){var o=this.rows[n].arr[r];o=o.replace(t,""),this.rows[n].arr[r]=o,this.rows[n].obj[this.columns[r]]=o}else if("string"==typeof e)for(var i=0;i<this.rows.length;i++){var a=this.rows[i].obj[e];a=a.replace(t,""),this.rows[i].obj[e]=a;var s=this.columns.indexOf(e);this.rows[i].arr[s]=a}else for(var h=0;h<this.rows.length;h++){var l=this.rows[h].arr[e];l=l.replace(t,""),this.rows[h].arr[e]=l,this.rows[h].obj[this.columns[e]]=l}},r.Table.prototype.removeColumn=function(e){var t,r;"string"==typeof e?(t=e,r=this.columns.indexOf(e),console.log("string")):(r=e,t=this.columns[e]);var n=this.columns.splice(r+1,this.columns.length);this.columns.pop(),this.columns=this.columns.concat(n);for(var o=0;o<this.rows.length;o++){var i=this.rows[o].arr,a=i.splice(r+1,i.length);i.pop(),this.rows[o].arr=i.concat(a),delete this.rows[o].obj[t]}},r.Table.prototype.set=function(e,t,r){this.rows[e].set(t,r)},r.Table.prototype.setNum=function(e,t,r){this.rows[e].setNum(t,r)},r.Table.prototype.setString=function(e,t,r){this.rows[e].setString(t,r)},r.Table.prototype.get=function(e,t){return this.rows[e].get(t)
},r.Table.prototype.getNum=function(e,t){return this.rows[e].getNum(t)},r.Table.prototype.getString=function(e,t){return this.rows[e].getString(t)},r.Table.prototype.getObject=function(e){for(var t,r,n,o={},i=0;i<this.rows.length;i++)if(t=this.rows[i].obj,"string"==typeof e){if(r=this.columns.indexOf(e),!(r>=0))throw'This table has no column named "'+e+'"';n=t[e],o[n]=t}else o[i]=this.rows[i].obj;return o},r.Table.prototype.getArray=function(){for(var e=[],t=0;t<this.rows.length;t++)e.push(this.rows[t].arr);return e},t.exports=r.Table},{"../core/core":37}],61:[function(e,t){"use strict";var r=e("../core/core");r.TableRow=function(e,t){var r=[],n={};e&&(t=t||",",r=e.split(t));for(var o=0;o<r.length;o++){var i=o,a=r[o];n[i]=a}this.arr=r,this.obj=n,this.table=null},r.TableRow.prototype.set=function(e,t){if("string"==typeof e){var r=this.table.columns.indexOf(e);if(!(r>=0))throw'This table has no column named "'+e+'"';this.obj[e]=t,this.arr[r]=t}else{if(!(e<this.table.columns.length))throw"Column #"+e+" is out of the range of this table";this.arr[e]=t;var n=this.table.columns[e];this.obj[n]=t}},r.TableRow.prototype.setNum=function(e,t){var r=parseFloat(t,10);this.set(e,r)},r.TableRow.prototype.setString=function(e,t){var r=t.toString();this.set(e,r)},r.TableRow.prototype.get=function(e){return"string"==typeof e?this.obj[e]:this.arr[e]},r.TableRow.prototype.getNum=function(e){var t;if(t="string"==typeof e?parseFloat(this.obj[e],10):parseFloat(this.arr[e],10),"NaN"===t.toString())throw"Error: "+this.obj[e]+" is NaN (Not a Number)";return t},r.TableRow.prototype.getString=function(e){return"string"==typeof e?this.obj[e].toString():this.arr[e].toString()},t.exports=r.TableRow},{"../core/core":37}],62:[function(e,t){"use strict";var r=e("../core/core");r.XML=function(){this.name=null,this.attributes={},this.children=[],this.parent=null,this.content=null},r.XML.prototype.getParent=function(){return this.parent},r.XML.prototype.getName=function(){return this.name},r.XML.prototype.setName=function(e){this.name=e},r.XML.prototype.hasChildren=function(){return this.children.length>0},r.XML.prototype.listChildren=function(){return this.children.map(function(e){return e.name})},r.XML.prototype.getChildren=function(e){return e?this.children.filter(function(t){return t.name===e}):this.children},r.XML.prototype.getChild=function(e){return"string"==typeof e?this.children.find(function(t){return t.name===e}):this.children[e]},r.XML.prototype.addChild=function(e){e instanceof r.XML&&this.children.push(e)},r.XML.prototype.removeChild=function(e){var t=-1;if("string"==typeof e){for(var r=0;r<this.children.length;r++)if(this.children[r].name===e){t=r;break}}else t=e;-1!==t&&this.children.splice(t,1)},r.XML.prototype.getAttributeCount=function(){return Object.keys(this.attributes).length},r.XML.prototype.listAttributes=function(){return Object.keys(this.attributes)},r.XML.prototype.hasAttribute=function(e){return this.attributes[e]?!0:!1},r.XML.prototype.getNumber=function(e,t){return Number(this.attributes[e])||t||0},r.XML.prototype.getString=function(e,t){return String(this.attributes[e])||t||null},r.XML.prototype.setAttribute=function(e,t){this.attributes[e]&&(this.attributes[e]=t)},r.XML.prototype.getContent=function(e){return this.content||e||null},r.XML.prototype.setContent=function(e){this.children.length||(this.content=e)},r.XML.prototype._setCont=function(e){var t;t=e,t=t.replace(/\s\s+/g,","),this.content=t},r.XML.prototype._setAttributes=function(e){var t,r={};for(t=0;t<e.attributes.length;t++)r[e.attributes[t].nodeName]=e.attributes[t].nodeValue;this.attributes=r},t.exports=r.XML},{"../core/core":37}],63:[function(e,t){"use strict";var r=e("../core/core");r.prototype.abs=Math.abs,r.prototype.ceil=Math.ceil,/**
 * Constrains a value between a minimum and maximum value.
 *
 * @method constrain
 * @param  {Number} n    number to constrain
 * @param  {Number} low  minimum limit
 * @param  {Number} high maximum limit
 * @return {Number}      constrained number
 * @example
 * <div><code>
 * function draw() {
 *   background(200);
 *
 *   var leftWall = 25;
 *   var rightWall = 75;
 *
 *   // xm is just the mouseX, while
 *   // xc is the mouseX, but constrained
 *   // between the leftWall and rightWall!
 *   var xm = mouseX;
 *   var xc = constrain(mouseX, leftWall, rightWall);
 *
 *   // Draw the walls.
 *   stroke(150);
 *   line(leftWall, 0, leftWall, height);
 *   line(rightWall, 0, rightWall, height);
 *
 *   // Draw xm and xc as circles.
 *   noStroke();
 *   fill(150);
 *   ellipse(xm, 33, 9,9); // Not Constrained
 *   fill(0);
 *   ellipse(xc, 66, 9,9); // Constrained
 * }
 * </code></div>
 *
 * @alt
 * 2 vertical lines. 2 ellipses move with mouse X 1 does not move passed lines
 *
 */
r.prototype.constrain=function(e,t,r){return Math.max(Math.min(e,r),t)},/**
 * Calculates the distance between two points.
 *
 * @method dist
 * @param  {Number} x1 x-coordinate of the first point
 * @param  {Number} y1 y-coordinate of the first point
 * @param  {Number} [z1] z-coordinate of the first point
 * @param  {Number} x2 x-coordinate of the second point
 * @param  {Number} y2 y-coordinate of the second point
 * @param  {Number} [z2] z-coordinate of the second point
 * @return {Number}    distance between the two points
 * @example
 * <div><code>
 * // Move your mouse inside the canvas to see the
 * // change in distance between two points!
 * function draw() {
 *   background(200);
 *   fill(0);
 *
 *   var x1 = 10;
 *   var y1 = 90;
 *   var x2 = mouseX;
 *   var y2 = mouseY;
 *
 *   line(x1, y1, x2, y2);
 *   ellipse(x1, y1, 7, 7);
 *   ellipse(x2, y2, 7, 7);
 *
 *   // d is the length of the line
 *   // the distance from point 1 to point 2.
 *   var d = int(dist(x1, y1, x2, y2));
 *
 *   // Let's write d along the line we are drawing!
 *   push();
 *   translate( (x1+x2)/2, (y1+y2)/2 );
 *   rotate( atan2(y2-y1,x2-x1) );
 *   text(nfc(d,1,1), 0, -5);
 *   pop();
 *   // Fancy!
 * }
 * </code></div>
 *
 * @alt
 * 2 ellipses joined by line. 1 ellipse moves with mouse X&Y. Distance displayed.
 *
 */
r.prototype.dist=function(e,t,r,n,o,i){return 4===arguments.length?Math.sqrt((r-e)*(r-e)+(n-t)*(n-t)):6===arguments.length?Math.sqrt((n-e)*(n-e)+(o-t)*(o-t)+(i-r)*(i-r)):void 0},r.prototype.exp=Math.exp,r.prototype.floor=Math.floor,r.prototype.lerp=function(e,t,r){return r*(t-e)+e},r.prototype.log=Math.log,r.prototype.mag=function(e,t){return Math.sqrt(e*e+t*t)},r.prototype.map=function(e,t,r,n,o){return(e-t)/(r-t)*(o-n)+n},/**
 * Determines the largest value in a sequence of numbers, and then returns
 * that value. max() accepts any number of Number parameters, or an Array
 * of any length.
 *
 * @method max
 * @param  {Number|Array} n0 Numbers to compare
 * @return {Number}          maximum Number
 * @example
 * <div><code>
 * function setup() {
 *   // Change the elements in the array and run the sketch
 *   // to show how max() works!
 *   numArray = new Array(2,1,5,4,8,9);
 *   fill(0);
 *   noStroke();
 *   text("Array Elements", 0, 10);
 *   // Draw all numbers in the array
 *   var spacing = 15;
 *   var elemsY = 25;
 *   for(var i = 0; i < numArray.length; i++) {
 *     text(numArray[i], i * spacing, elemsY);
 *   }
 *   maxX = 33;
 *   maxY = 80;
 *   // Draw the Maximum value in the array.
 *   textSize(32);
 *   text(max(numArray), maxX, maxY);
 * }
 * </code></div>
 *
 * @alt
 * Small text at top reads: Array Elements 2 1 5 4 8 9. Large text at center: 9
 *
 */
r.prototype.max=function(){return arguments[0]instanceof Array?Math.max.apply(null,arguments[0]):Math.max.apply(null,arguments)},/**
 * Determines the smallest value in a sequence of numbers, and then returns
 * that value. min() accepts any number of Number parameters, or an Array
 * of any length.
 *
 * @method min
 * @param  {Number|Array} n0 Numbers to compare
 * @return {Number}          minimum Number
 * @example
 * <div><code>
 * function setup() {
 *   // Change the elements in the array and run the sketch
 *   // to show how min() works!
 *   numArray = new Array(2,1,5,4,8,9);
 *   fill(0);
 *   noStroke();
 *   text("Array Elements", 0, 10);
 *   // Draw all numbers in the array
 *   var spacing = 15;
 *   var elemsY = 25;
 *   for(var i = 0; i < numArray.length; i++) {
 *     text(numArray[i], i * spacing, elemsY);
 *   }
 *   maxX = 33;
 *   maxY = 80;
 *   // Draw the Minimum value in the array.
 *   textSize(32);
 *   text(min(numArray), maxX, maxY);
 * }
 * </code></div>
 *
 * @alt
 * Small text at top reads: Array Elements 2 1 5 4 8 9. Large text at center: 1
 *
 */
r.prototype.min=function(){return arguments[0]instanceof Array?Math.min.apply(null,arguments[0]):Math.min.apply(null,arguments)},r.prototype.norm=function(e,t,r){return this.map(e,t,r,0,1)},r.prototype.pow=Math.pow,r.prototype.round=Math.round,r.prototype.sq=function(e){return e*e},r.prototype.sqrt=Math.sqrt,t.exports=r},{"../core/core":37}],64:[function(e,t){"use strict";var r=e("../core/core");r.prototype.createVector=function(e,t,n){return this instanceof r?new r.Vector(this,arguments):new r.Vector(e,t,n)},t.exports=r},{"../core/core":37}],65:[function(e,t){"use strict";var r,n=e("../core/core"),o=4,i=1<<o,a=8,s=1<<a,h=4095,l=4,u=.5,p=function(e){return.5*(1-Math.cos(e*Math.PI))};n.prototype.noise=function(e,t,n){if(t=t||0,n=n||0,null==r){r=new Array(h+1);for(var c=0;h+1>c;c++)r[c]=Math.random()}0>e&&(e=-e),0>t&&(t=-t),0>n&&(n=-n);for(var f,d,m,g,y,v=Math.floor(e),x=Math.floor(t),_=Math.floor(n),b=e-v,w=t-x,S=n-_,T=0,M=.5,C=0;l>C;C++){var R=v+(x<<o)+(_<<a);f=p(b),d=p(w),m=r[R&h],m+=f*(r[R+1&h]-m),g=r[R+i&h],g+=f*(r[R+i+1&h]-g),m+=d*(g-m),R+=s,g=r[R&h],g+=f*(r[R+1&h]-g),y=r[R+i&h],y+=f*(r[R+i+1&h]-y),g+=d*(y-g),m+=p(S)*(g-m),T+=m*M,M*=u,v<<=1,b*=2,x<<=1,w*=2,_<<=1,S*=2,b>=1&&(v++,b--),w>=1&&(x++,w--),S>=1&&(_++,S--)}return T},n.prototype.noiseDetail=function(e,t){e>0&&(l=e),t>0&&(u=t)},n.prototype.noiseSeed=function(e){var t=function(){var e,t,r=4294967296,n=1664525,o=1013904223;return{setSeed:function(n){t=e=(null==n?Math.random()*r:n)>>>0},getSeed:function(){return e},rand:function(){return t=(n*t+o)%r,t/r}}}();t.setSeed(e),r=new Array(h+1);for(var n=0;h+1>n;n++)r[n]=t.rand()},t.exports=n},{"../core/core":37}],66:[function(e,t){"use strict";var r=e("../core/core"),n=e("./polargeometry"),o=e("../core/constants");r.Vector=function(){var e,t,n;arguments[0]instanceof r?(this.p5=arguments[0],e=arguments[1][0]||0,t=arguments[1][1]||0,n=arguments[1][2]||0):(e=arguments[0]||0,t=arguments[1]||0,n=arguments[2]||0),this.x=e,this.y=t,this.z=n},r.Vector.prototype.toString=function(){return"p5.Vector Object : ["+this.x+", "+this.y+", "+this.z+"]"},r.Vector.prototype.set=function(e,t,n){return e instanceof r.Vector?(this.x=e.x||0,this.y=e.y||0,this.z=e.z||0,this):e instanceof Array?(this.x=e[0]||0,this.y=e[1]||0,this.z=e[2]||0,this):(this.x=e||0,this.y=t||0,this.z=n||0,this)},r.Vector.prototype.copy=function(){return this.p5?new r.Vector(this.p5,[this.x,this.y,this.z]):new r.Vector(this.x,this.y,this.z)},r.Vector.prototype.add=function(e,t,n){return e instanceof r.Vector?(this.x+=e.x||0,this.y+=e.y||0,this.z+=e.z||0,this):e instanceof Array?(this.x+=e[0]||0,this.y+=e[1]||0,this.z+=e[2]||0,this):(this.x+=e||0,this.y+=t||0,this.z+=n||0,this)},r.Vector.prototype.sub=function(e,t,n){return e instanceof r.Vector?(this.x-=e.x||0,this.y-=e.y||0,this.z-=e.z||0,this):e instanceof Array?(this.x-=e[0]||0,this.y-=e[1]||0,this.z-=e[2]||0,this):(this.x-=e||0,this.y-=t||0,this.z-=n||0,this)},r.Vector.prototype.mult=function(e){return this.x*=e||0,this.y*=e||0,this.z*=e||0,this},r.Vector.prototype.div=function(e){return this.x/=e,this.y/=e,this.z/=e,this},r.Vector.prototype.mag=function(){return Math.sqrt(this.magSq())},r.Vector.prototype.magSq=function(){var e=this.x,t=this.y,r=this.z;return e*e+t*t+r*r},r.Vector.prototype.dot=function(e,t,n){return e instanceof r.Vector?this.dot(e.x,e.y,e.z):this.x*(e||0)+this.y*(t||0)+this.z*(n||0)},r.Vector.prototype.cross=function(e){var t=this.y*e.z-this.z*e.y,n=this.z*e.x-this.x*e.z,o=this.x*e.y-this.y*e.x;return this.p5?new r.Vector(this.p5,[t,n,o]):new r.Vector(t,n,o)},r.Vector.prototype.dist=function(e){var t=e.copy().sub(this);return t.mag()},r.Vector.prototype.normalize=function(){return 0===this.mag()?this:this.div(this.mag())},r.Vector.prototype.limit=function(e){var t=this.magSq();return t>e*e&&(this.div(Math.sqrt(t)),this.mult(e)),this},r.Vector.prototype.setMag=function(e){return this.normalize().mult(e)},r.Vector.prototype.heading=function(){var e=Math.atan2(this.y,this.x);return this.p5?this.p5._angleMode===o.RADIANS?e:n.radiansToDegrees(e):e},r.Vector.prototype.rotate=function(e){this.p5&&this.p5._angleMode===o.DEGREES&&(e=n.degreesToRadians(e));var t=this.heading()+e,r=this.mag();return this.x=Math.cos(t)*r,this.y=Math.sin(t)*r,this},r.Vector.prototype.lerp=function(e,t,n,o){return e instanceof r.Vector?this.lerp(e.x,e.y,e.z,t):(this.x+=(e-this.x)*o||0,this.y+=(t-this.y)*o||0,this.z+=(n-this.z)*o||0,this)},r.Vector.prototype.array=function(){return[this.x||0,this.y||0,this.z||0]},r.Vector.prototype.equals=function(e,t,n){var o,i,a;return e instanceof r.Vector?(o=e.x||0,i=e.y||0,a=e.z||0):e instanceof Array?(o=e[0]||0,i=e[1]||0,a=e[2]||0):(o=e||0,i=t||0,a=n||0),this.x===o&&this.y===i&&this.z===a},r.Vector.fromAngle=function(e){return this.p5&&this.p5._angleMode===o.DEGREES&&(e=n.degreesToRadians(e)),this.p5?new r.Vector(this.p5,[Math.cos(e),Math.sin(e),0]):new r.Vector(Math.cos(e),Math.sin(e),0)},r.Vector.random2D=function(){var e;return e=this.p5?this.p5._angleMode===o.DEGREES?this.p5.random(360):this.p5.random(o.TWO_PI):Math.random()*Math.PI*2,this.fromAngle(e)},r.Vector.random3D=function(){var e,t;this.p5?(e=this.p5.random(0,o.TWO_PI),t=this.p5.random(-1,1)):(e=Math.random()*Math.PI*2,t=2*Math.random()-1);var n=Math.sqrt(1-t*t)*Math.cos(e),i=Math.sqrt(1-t*t)*Math.sin(e);return this.p5?new r.Vector(this.p5,[n,i,t]):new r.Vector(n,i,t)},r.Vector.add=function(e,t,r){return r?r.set(e):r=e.copy(),r.add(t),r},r.Vector.sub=function(e,t,r){return r?r.set(e):r=e.copy(),r.sub(t),r},r.Vector.mult=function(e,t,r){return r?r.set(e):r=e.copy(),r.mult(t),r},r.Vector.div=function(e,t,r){return r?r.set(e):r=e.copy(),r.div(t),r},r.Vector.dot=function(e,t){return e.dot(t)},r.Vector.cross=function(e,t){return e.cross(t)},r.Vector.dist=function(e,t){return e.dist(t)},r.Vector.lerp=function(e,t,r,n){return n?n.set(e):n=e.copy(),n.lerp(t,r),n},r.Vector.angleBetween=function(e,t){var r=Math.acos(e.dot(t)/(e.mag()*t.mag()));return this.p5&&this.p5._angleMode===o.DEGREES&&(r=n.radiansToDegrees(r)),r},r.Vector.mag=function(e){var t=e.x,r=e.y,n=e.z,o=t*t+r*r+n*n;return Math.sqrt(o)},t.exports=r.Vector},{"../core/constants":36,"../core/core":37,"./polargeometry":67}],67:[function(e,t){t.exports={degreesToRadians:function(e){return 2*Math.PI*e/360},radiansToDegrees:function(e){return 360*e/(2*Math.PI)}}},{}],68:[function(e,t){"use strict";var r=e("../core/core"),n=!1,o=function(){var e,t,r=4294967296,n=1664525,o=1013904223;return{setSeed:function(n){t=e=(null==n?Math.random()*r:n)>>>0},getSeed:function(){return e},rand:function(){return t=(n*t+o)%r,t/r}}}();r.prototype.randomSeed=function(e){o.setSeed(e),n=!0},r.prototype.random=function(e,t){var r;if(r=n?o.rand():Math.random(),"undefined"==typeof e)return r;if("undefined"==typeof t)return e instanceof Array?e[Math.floor(r*e.length)]:r*e;if(e>t){var i=e;e=t,t=i}return r*(t-e)+e};var i,a=!1;r.prototype.randomGaussian=function(e,t){var r,n,o,s;if(a)r=i,a=!1;else{do n=this.random(2)-1,o=this.random(2)-1,s=n*n+o*o;while(s>=1);s=Math.sqrt(-2*Math.log(s)/s),r=n*s,i=o*s,a=!0}var h=e||0,l=t||1;return r*l+h},t.exports=r},{"../core/core":37}],69:[function(e,t){"use strict";var r=e("../core/core"),n=e("./polargeometry"),o=e("../core/constants");r.prototype._angleMode=o.RADIANS,r.prototype.acos=function(e){return this._angleMode===o.RADIANS?Math.acos(e):n.radiansToDegrees(Math.acos(e))},r.prototype.asin=function(e){return this._angleMode===o.RADIANS?Math.asin(e):n.radiansToDegrees(Math.asin(e))},r.prototype.atan=function(e){return this._angleMode===o.RADIANS?Math.atan(e):n.radiansToDegrees(Math.atan(e))},r.prototype.atan2=function(e,t){return this._angleMode===o.RADIANS?Math.atan2(e,t):n.radiansToDegrees(Math.atan2(e,t))},r.prototype.cos=function(e){return this._angleMode===o.RADIANS?Math.cos(e):Math.cos(this.radians(e))},r.prototype.sin=function(e){return this._angleMode===o.RADIANS?Math.sin(e):Math.sin(this.radians(e))},r.prototype.tan=function(e){return this._angleMode===o.RADIANS?Math.tan(e):Math.tan(this.radians(e))},r.prototype.degrees=function(e){return n.radiansToDegrees(e)},r.prototype.radians=function(e){return n.degreesToRadians(e)},r.prototype.angleMode=function(e){(e===o.DEGREES||e===o.RADIANS)&&(this._angleMode=e)},t.exports=r},{"../core/constants":36,"../core/core":37,"./polargeometry":67}],70:[function(e,t){"use strict";var r=e("../core/core");r.prototype.textAlign=function(){return this._renderer.textAlign.apply(this._renderer,arguments)},r.prototype.textLeading=function(){return this._renderer.textLeading.apply(this._renderer,arguments)},r.prototype.textSize=function(){return this._renderer.textSize.apply(this._renderer,arguments)},r.prototype.textStyle=function(){return this._renderer.textStyle.apply(this._renderer,arguments)},r.prototype.textWidth=function(e){return 0===e.length?0:this._renderer.textWidth.apply(this._renderer,arguments)},r.prototype.textAscent=function(){return this._renderer.textAscent()},r.prototype.textDescent=function(){return this._renderer.textDescent()},r.prototype._updateTextMetrics=function(){return this._renderer._updateTextMetrics()},t.exports=r},{"../core/core":37}],71:[function(e,t){"use strict";var r=e("../core/core"),n=e("../core/constants");e("../core/error_helpers"),r.prototype.text=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];return this._validateParameters("text",e,[["*","Number","Number"],["*","Number","Number","Number","Number"]]),this._renderer._doFill||this._renderer._doStroke?this._renderer.text.apply(this._renderer,arguments):this},r.prototype.textFont=function(e,t){if(arguments.length){if(!e)throw Error("null font passed to textFont");return this._renderer._setProperty("_textFont",e),t&&(this._renderer._setProperty("_textSize",t),this._renderer._setProperty("_textLeading",t*n._DEFAULT_LEADMULT)),this._renderer._applyTextProperties()}return this},t.exports=r},{"../core/constants":36,"../core/core":37,"../core/error_helpers":40}],72:[function(e,t){"use strict";function r(e,t){for(var r=a(t,{sampleFactor:.1,simplifyThreshold:0}),o=c(e,0,1),i=o/(o*r.sampleFactor),s=[],h=0;o>h;h+=i)s.push(c(e,h));return r.simplifyThreshold&&n(s,r.simplifyThreshold),s}function n(e,t){t="undefined"==typeof t?0:t;for(var r=0,n=e.length-1;e.length>3&&n>=0;--n)h(s(e,n-1),s(e,n),s(e,n+1),t)&&(e.splice(n%e.length,1),r++);return r}function o(e){for(var t,r=[],n=0;n<e.length;n++)"M"===e[n].type&&(t&&r.push(t),t=[]),t.push(i(e[n]));return r.push(t),r}function i(e){var t=[e.type];return"M"===e.type||"L"===e.type?t.push(e.x,e.y):"C"===e.type?t.push(e.x1,e.y1,e.x2,e.y2,e.x,e.y):"Q"===e.type&&t.push(e.x1,e.y1,e.x,e.y),t}function a(e,t){if("object"!=typeof e)e=t;else for(var r in t)"undefined"==typeof e[r]&&(e[r]=t[r]);return e}function s(e,t){var r=e.length;return e[0>t?t%r+r:t%r]}function h(e,t,r,n){if(!n)return 0===l(e,t,r);"undefined"==typeof h.tmpPoint1&&(h.tmpPoint1=[],h.tmpPoint2=[]);var o=h.tmpPoint1,i=h.tmpPoint2;o.x=t.x-e.x,o.y=t.y-e.y,i.x=r.x-t.x,i.y=r.y-t.y;var a=o.x*i.x+o.y*i.y,s=Math.sqrt(o.x*o.x+o.y*o.y),u=Math.sqrt(i.x*i.x+i.y*i.y),p=Math.acos(a/(s*u));return n>p}function l(e,t,r){return(t[0]-e[0])*(r[1]-e[1])-(r[0]-e[0])*(t[1]-e[1])}function u(e,t,r,n,o,i,a,s,h){var l=1-h,u=Math.pow(l,3),p=Math.pow(l,2),c=h*h,f=c*h,d=u*e+3*p*h*r+3*l*h*h*o+f*a,m=u*t+3*p*h*n+3*l*h*h*i+f*s,g=e+2*h*(r-e)+c*(o-2*r+e),y=t+2*h*(n-t)+c*(i-2*n+t),v=r+2*h*(o-r)+c*(a-2*o+r),x=n+2*h*(i-n)+c*(s-2*i+n),_=l*e+h*r,b=l*t+h*n,w=l*o+h*a,S=l*i+h*s,T=90-180*Math.atan2(g-v,y-x)/Math.PI;return(g>v||x>y)&&(T+=180),{x:d,y:m,m:{x:g,y:y},n:{x:v,y:x},start:{x:_,y:b},end:{x:w,y:S},alpha:T}}function p(e,t,r,n,o,i,a,s,h){return null==h?x(e,t,r,n,o,i,a,s):u(e,t,r,n,o,i,a,s,_(e,t,r,n,o,i,a,s,h))}function c(e,t,r){e=d(e);for(var n,o,i,a,s,h="",l={},c=0,f=0,m=e.length;m>f;f++){if(i=e[f],"M"===i[0])n=+i[1],o=+i[2];else{if(a=p(n,o,i[1],i[2],i[3],i[4],i[5],i[6]),c+a>t&&!r)return s=p(n,o,i[1],i[2],i[3],i[4],i[5],i[6],t-c),{x:s.x,y:s.y,alpha:s.alpha};c+=a,n=+i[5],o=+i[6]}h+=i.shift()+i}return l.end=h,s=r?c:u(n,o,i[0],i[1],i[2],i[3],i[4],i[5],1),s.alpha&&(s={x:s.x,y:s.y,alpha:s.alpha}),s}function f(e){var t=[],r=0,n=0,o=0,i=0,a=0;"M"===e[0][0]&&(r=+e[0][1],n=+e[0][2],o=r,i=n,a++,t[0]=["M",r,n]);for(var s,h,l,u=3===e.length&&"M"===e[0][0]&&"R"===e[1][0].toUpperCase()&&"Z"===e[2][0].toUpperCase(),p=a,c=e.length;c>p;p++){if(t.push(h=[]),l=e[p],l[0]!==String.prototype.toUpperCase.call(l[0]))switch(h[0]=String.prototype.toUpperCase.call(l[0]),h[0]){case"A":h[1]=l[1],h[2]=l[2],h[3]=l[3],h[4]=l[4],h[5]=l[5],h[6]=+(l[6]+r),h[7]=+(l[7]+n);break;case"V":h[1]=+l[1]+n;break;case"H":h[1]=+l[1]+r;break;case"R":s=[r,n].concat(l.slice(1));for(var f=2,d=s.length;d>f;f++)s[f]=+s[f]+r,s[++f]=+s[f]+n;t.pop(),t=t.concat(g(s,u));break;case"M":o=+l[1]+r,i=+l[2]+n;break;default:for(f=1,d=l.length;d>f;f++)h[f]=+l[f]+(f%2?r:n)}else if("R"===l[0])s=[r,n].concat(l.slice(1)),t.pop(),t=t.concat(g(s,u)),h=["R"].concat(l.slice(-2));else for(var m=0,y=l.length;y>m;m++)h[m]=l[m];switch(h[0]){case"Z":r=o,n=i;break;case"H":r=h[1];break;case"V":n=h[1];break;case"M":o=h[h.length-2],i=h[h.length-1];break;default:r=h[h.length-2],n=h[h.length-1]}}return t}function d(e,t){for(var r=f(e),n=t&&f(t),o={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},i={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},a=(function(e,t,r){var n,o,i={T:1,Q:1};if(!e)return["C",t.x,t.y,t.x,t.y,t.x,t.y];switch(e[0]in i||(t.qx=t.qy=null),e[0]){case"M":t.X=e[1],t.Y=e[2];break;case"A":e=["C"].concat(m.apply(0,[t.x,t.y].concat(e.slice(1))));break;case"S":"C"===r||"S"===r?(n=2*t.x-t.bx,o=2*t.y-t.by):(n=t.x,o=t.y),e=["C",n,o].concat(e.slice(1));break;case"T":"Q"===r||"T"===r?(t.qx=2*t.x-t.qx,t.qy=2*t.y-t.qy):(t.qx=t.x,t.qy=t.y),e=["C"].concat(v(t.x,t.y,t.qx,t.qy,e[1],e[2]));break;case"Q":t.qx=e[1],t.qy=e[2],e=["C"].concat(v(t.x,t.y,e[1],e[2],e[3],e[4]));break;case"L":e=["C"].concat(y(t.x,t.y,e[1],e[2]));break;case"H":e=["C"].concat(y(t.x,t.y,e[1],t.y));break;case"V":e=["C"].concat(y(t.x,t.y,t.x,e[1]));break;case"Z":e=["C"].concat(y(t.x,t.y,t.X,t.Y))}return e}),s=function(e,t){if(e[t].length>7){e[t].shift();for(var o=e[t];o.length;)l[t]="A",n&&(u[t]="A"),e.splice(t++,0,["C"].concat(o.splice(0,6)));e.splice(t,1),g=Math.max(r.length,n&&n.length||0)}},h=function(e,t,o,i,a){e&&t&&"M"===e[a][0]&&"M"!==t[a][0]&&(t.splice(a,0,["M",i.x,i.y]),o.bx=0,o.by=0,o.x=e[a][1],o.y=e[a][2],g=Math.max(r.length,n&&n.length||0))},l=[],u=[],p="",c="",d=0,g=Math.max(r.length,n&&n.length||0);g>d;d++){r[d]&&(p=r[d][0]),"C"!==p&&(l[d]=p,d&&(c=l[d-1])),r[d]=a(r[d],o,c),"A"!==l[d]&&"C"===p&&(l[d]="C"),s(r,d),n&&(n[d]&&(p=n[d][0]),"C"!==p&&(u[d]=p,d&&(c=u[d-1])),n[d]=a(n[d],i,c),"A"!==u[d]&&"C"===p&&(u[d]="C"),s(n,d)),h(r,n,o,i,d),h(n,r,i,o,d);var x=r[d],_=n&&n[d],b=x.length,w=n&&_.length;o.x=x[b-2],o.y=x[b-1],o.bx=parseFloat(x[b-4])||o.x,o.by=parseFloat(x[b-3])||o.y,i.bx=n&&(parseFloat(_[w-4])||i.x),i.by=n&&(parseFloat(_[w-3])||i.y),i.x=n&&_[w-2],i.y=n&&_[w-1]}return n?[r,n]:r}function m(e,t,r,n,o,i,a,s,h,l){var u,p,c,f,d,g=Math.PI,y=120*g/180,v=g/180*(+o||0),x=[],_=function(e,t,r){var n=e*Math.cos(r)-t*Math.sin(r),o=e*Math.sin(r)+t*Math.cos(r);return{x:n,y:o}};if(l)u=l[0],p=l[1],c=l[2],f=l[3];else{d=_(e,t,-v),e=d.x,t=d.y,d=_(s,h,-v),s=d.x,h=d.y;var b=(e-s)/2,w=(t-h)/2,S=b*b/(r*r)+w*w/(n*n);S>1&&(S=Math.sqrt(S),r=S*r,n=S*n);var T=r*r,M=n*n,C=(i===a?-1:1)*Math.sqrt(Math.abs((T*M-T*w*w-M*b*b)/(T*w*w+M*b*b)));c=C*r*w/n+(e+s)/2,f=C*-n*b/r+(t+h)/2,u=Math.asin(((t-f)/n).toFixed(9)),p=Math.asin(((h-f)/n).toFixed(9)),u=c>e?g-u:u,p=c>s?g-p:p,0>u&&(u=2*g+u),0>p&&(p=2*g+p),a&&u>p&&(u-=2*g),!a&&p>u&&(p-=2*g)}var R=p-u;if(Math.abs(R)>y){var E=p,A=s,P=h;p=u+y*(a&&p>u?1:-1),s=c+r*Math.cos(p),h=f+n*Math.sin(p),x=m(s,h,r,n,o,0,a,A,P,[p,E,c,f])}R=p-u;var L=Math.cos(u),I=Math.sin(u),D=Math.cos(p),N=Math.sin(p),O=Math.tan(R/4),k=4/3*r*O,U=4/3*n*O,F=[e,t],G=[e+k*I,t-U*L],B=[s+k*N,h-U*D],H=[s,h];if(G[0]=2*F[0]-G[0],G[1]=2*F[1]-G[1],l)return[G,B,H].concat(x);x=[G,B,H].concat(x).join().split(",");for(var V=[],X=0,q=x.length;q>X;X++)V[X]=X%2?_(x[X-1],x[X],v).y:_(x[X],x[X+1],v).x;return V}function g(e,t){for(var r=[],n=0,o=e.length;o-2*!t>n;n+=2){var i=[{x:+e[n-2],y:+e[n-1]},{x:+e[n],y:+e[n+1]},{x:+e[n+2],y:+e[n+3]},{x:+e[n+4],y:+e[n+5]}];t?n?o-4===n?i[3]={x:+e[0],y:+e[1]}:o-2===n&&(i[2]={x:+e[0],y:+e[1]},i[3]={x:+e[2],y:+e[3]}):i[0]={x:+e[o-2],y:+e[o-1]}:o-4===n?i[3]=i[2]:n||(i[0]={x:+e[n],y:+e[n+1]}),r.push(["C",(-i[0].x+6*i[1].x+i[2].x)/6,(-i[0].y+6*i[1].y+i[2].y)/6,(i[1].x+6*i[2].x-i[3].x)/6,(i[1].y+6*i[2].y-i[3].y)/6,i[2].x,i[2].y])}return r}function y(e,t,r,n){return[e,t,r,n,r,n]}function v(e,t,r,n,o,i){var a=1/3,s=2/3;return[a*e+s*r,a*t+s*n,a*o+s*r,a*i+s*n,o,i]}function x(e,t,r,n,o,i,a,s,h){null==h&&(h=1),h=h>1?1:0>h?0:h;for(var l=h/2,u=12,p=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],c=0,f=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0;u>d;d++){var m=l*p[d]+l,g=b(m,e,r,o,a),y=b(m,t,n,i,s),v=g*g+y*y;c+=f[d]*Math.sqrt(v)}return l*c}function _(e,t,r,n,o,i,a,s,h){if(!(0>h||x(e,t,r,n,o,i,a,s)<h)){var l,u=1,p=u/2,c=u-p,f=.01;for(l=x(e,t,r,n,o,i,a,s,c);Math.abs(l-h)>f;)p/=2,c+=(h>l?1:-1)*p,l=x(e,t,r,n,o,i,a,s,c);return c}}function b(e,t,r,n,o){var i=-3*t+9*r-9*n+3*o,a=e*i+6*t-12*r+6*n;return e*a-3*t+3*r}function w(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];t=e.length;for(var r="";t--;)r+=e[t]===Object(e[t])?JSON.stringify(e[t]):e[t];return r}var S=e("../core/core"),T=e("../core/constants");S.Font=function(e){this.parent=e,this.cache={},this.font=void 0},S.Font.prototype.list=function(){throw"not yet implemented"},S.Font.prototype.textBounds=function(e,t,r,n,o){t=void 0!==t?t:0,r=void 0!==r?r:0,n=n||this.parent._renderer._textSize;var i=o&&o.renderer&&o.renderer._pInst||this.parent,a=i._renderer.drawingContext,s=a.textAlign||T.LEFT,h=a.textBaseline||T.BASELINE,l=this.cache[w("textBounds",e,t,r,n,s,h)];if(!l){var u,p,c,f,d=[],m=[],g=this,y=this._scale(n);this.font.forEachGlyph(e,t,r,n,o,function(e,t,r){d.push(t),m.push(r);var o=e.getMetrics();"space"!==e.name?(d.push(t+o.xMax*y),m.push(r+-o.yMin*y),m.push(r+-o.yMax*y)):d.push(t+g.font.charToGlyph(" ").advanceWidth*g._scale(n))}),u=Math.min.apply(null,d),p=Math.min.apply(null,m),c=Math.max.apply(null,d),f=Math.max.apply(null,m),l={x:u,y:p,h:f-p,w:c-u,advance:u-t};var v=l.w+l.advance,x=this._handleAlignment(i,a,e,l.x,l.y,v);l.x=x.x,l.y=x.y,this.cache[w("textBounds",e,t,r,n,s,h)]=l}return l},S.Font.prototype.textToPoints=function(e,t,n,i,a){var s=0,h=[],l=this._getGlyphs(e);i=i||this.parent._renderer._textSize;for(var u=0;u<l.length;u++){for(var p=l[u].getPath(t,n,i),c=o(p.commands),f=0;f<c.length;f++)for(var d=r(c[f],a),m=0;m<d.length;m++)d[m].x+=s,h.push(d[m]);s+=l[u].advanceWidth*this._scale(i)}return h},S.Font.prototype._getGlyphs=function(e){return this.font.stringToGlyphs(e)},S.Font.prototype._getPath=function(e,t,r,n){var o=n&&n.renderer&&n.renderer._pInst||this.parent,i=o._renderer.drawingContext,a=this._handleAlignment(o,i,e,t,r);return this.font.getPath(e,a.x,a.y,o._renderer._textSize,n)},S.Font.prototype._getPathData=function(e,t,r,n){var o=3;return"string"==typeof e&&arguments.length>2?e=this._getPath(e,t,r,n):"object"==typeof t&&(n=t),n&&"number"==typeof n.decimals&&(o=n.decimals),e.toPathData(o)},S.Font.prototype._getSVG=function(e,t,r,n){var o=3;return"string"==typeof e&&arguments.length>2?e=this._getPath(e,t,r,n):"object"==typeof t&&(n=t),n&&("number"==typeof n.decimals&&(o=n.decimals),"number"==typeof n.strokeWidth&&(e.strokeWidth=n.strokeWidth),"undefined"!=typeof n.fill&&(e.fill=n.fill),"undefined"!=typeof n.stroke&&(e.stroke=n.stroke)),e.toSVG(o)},S.Font.prototype._renderPath=function(e,t,r,n){var o,i=n&&n.renderer||this.parent._renderer,a=i.drawingContext;o="object"==typeof e&&e.commands?e.commands:this._getPath(e,t,r,n).commands,a.beginPath();for(var s=0;s<o.length;s+=1){var h=o[s];"M"===h.type?a.moveTo(h.x,h.y):"L"===h.type?a.lineTo(h.x,h.y):"C"===h.type?a.bezierCurveTo(h.x1,h.y1,h.x2,h.y2,h.x,h.y):"Q"===h.type?a.quadraticCurveTo(h.x1,h.y1,h.x,h.y):"Z"===h.type&&a.closePath()}return i._doStroke&&i._strokeSet&&a.stroke(),i._doFill&&(a.fillStyle=i._fillSet?a.fillStyle:T._DEFAULT_TEXT_FILL,a.fill()),this},S.Font.prototype._textWidth=function(e,t){if(" "===e)return this.font.charToGlyph(" ").advanceWidth*this._scale(t);var r=this.textBounds(e,0,0,t);return r.w+r.advance},S.Font.prototype._textAscent=function(e){return this.font.ascender*this._scale(e)},S.Font.prototype._textDescent=function(e){return-this.font.descender*this._scale(e)},S.Font.prototype._scale=function(e){return 1/this.font.unitsPerEm*(e||this.parent._renderer._textSize)},S.Font.prototype._handleAlignment=function(e,t,r,n,o,i){var a=e._renderer._textSize,s=this._textAscent(a),h=this._textDescent(a);return i=void 0!==i?i:this._textWidth(r,a),t.textAlign===T.CENTER?n-=i/2:t.textAlign===T.RIGHT&&(n-=i),t.textBaseline===T.TOP?o+=s:t.textBaseline===T._CTX_MIDDLE?o+=s/2:t.textBaseline===T.BOTTOM&&(o-=h),{x:n,y:o}},t.exports=S.Font},{"../core/constants":36,"../core/core":37}],73:[function(e,t){"use strict";var r=e("../core/core");r.prototype.append=function(e,t){return e.push(t),e},r.prototype.arrayCopy=function(e,t,r,n,o){var i,a;"undefined"!=typeof o?(a=Math.min(o,e.length),i=n,e=e.slice(t,a+t)):("undefined"!=typeof r?(a=r,a=Math.min(a,e.length)):a=e.length,i=0,r=t,e=e.slice(0,a)),Array.prototype.splice.apply(r,[i,a].concat(e))},r.prototype.concat=function(e,t){return e.concat(t)},r.prototype.reverse=function(e){return e.reverse()},r.prototype.shorten=function(e){return e.pop(),e},r.prototype.shuffle=function(e,t){var r=ArrayBuffer&&ArrayBuffer.isView&&ArrayBuffer.isView(e);e=t||r?e:e.slice();for(var n,o,i=e.length;i>1;)n=Math.random()*i|0,o=e[--i],e[i]=e[n],e[n]=o;return e},r.prototype.sort=function(e,t){var r=t?e.slice(0,Math.min(t,e.length)):e,n=t?e.slice(Math.min(t,e.length)):[];return r="string"==typeof r[0]?r.sort():r.sort(function(e,t){return e-t}),r.concat(n)},r.prototype.splice=function(e,t,r){return Array.prototype.splice.apply(e,[r,0].concat(t)),e},r.prototype.subset=function(e,t,r){return"undefined"!=typeof r?e.slice(t,t+r):e.slice(t,e.length)},t.exports=r},{"../core/core":37}],74:[function(e,t){"use strict";var r=e("../core/core");r.prototype.float=function(e){return parseFloat(e)},r.prototype.int=function(e,t){return"string"==typeof e?(t=t||10,parseInt(e,t)):"number"==typeof e?0|e:"boolean"==typeof e?e?1:0:e instanceof Array?e.map(function(e){return r.prototype.int(e,t)}):void 0},r.prototype.str=function(e){return e instanceof Array?e.map(r.prototype.str):String(e)},r.prototype.boolean=function(e){return"number"==typeof e?0!==e:"string"==typeof e?"true"===e.toLowerCase():"boolean"==typeof e?e:e instanceof Array?e.map(r.prototype.boolean):void 0},r.prototype.byte=function(e){var t=r.prototype.int(e,10);return"number"==typeof t?(t+128)%256-128:t instanceof Array?t.map(r.prototype.byte):void 0},r.prototype.char=function(e){return"number"!=typeof e||isNaN(e)?e instanceof Array?e.map(r.prototype.char):"string"==typeof e?r.prototype.char(parseInt(e,10)):void 0:String.fromCharCode(e)},r.prototype.unchar=function(e){return"string"==typeof e&&1===e.length?e.charCodeAt(0):e instanceof Array?e.map(r.prototype.unchar):void 0},r.prototype.hex=function(e,t){if(t=void 0===t||null===t?t=8:t,e instanceof Array)return e.map(function(e){return r.prototype.hex(e,t)});if("number"==typeof e){0>e&&(e=4294967295+e+1);for(var n=Number(e).toString(16).toUpperCase();n.length<t;)n="0"+n;return n.length>=t&&(n=n.substring(n.length-t,n.length)),n}},r.prototype.unhex=function(e){return e instanceof Array?e.map(r.prototype.unhex):parseInt("0x"+e,16)},t.exports=r},{"../core/core":37}],75:[function(e,t){"use strict";function r(){var e=arguments[0],t=0>e,r=t?e.toString().substring(1):e.toString(),n=r.indexOf("."),o=-1!==n?r.substring(0,n):r,i=-1!==n?r.substring(n+1):"",a=t?"-":"";if(3===arguments.length){var s="";(-1!==n||arguments[2]-i.length>0)&&(s="."),i.length>arguments[2]&&(i=i.substring(0,arguments[2]));for(var h=0;h<arguments[1]-o.length;h++)a+="0";a+=o,a+=s,a+=i;for(var l=0;l<arguments[2]-i.length;l++)a+="0";return a}for(var u=0;u<Math.max(arguments[1]-o.length,0);u++)a+="0";return a+=r}function n(){var e=arguments[0].toString(),t=e.indexOf("."),r=-1!==t?e.substring(t):"",n=-1!==t?e.substring(0,t):e;if(n=n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),0===arguments[1])r="";else if(void 0!==arguments[1])if(arguments[1]>r.length){r+=-1===t?".":"";for(var o=arguments[1]-r.length+1,i=0;o>i;i++)r+="0"}else r=r.substring(0,arguments[1]+1);return n+r}function o(){return parseFloat(arguments[0])>0?"+"+arguments[0].toString():arguments[0].toString()}function i(){return parseFloat(arguments[0])>0?" "+arguments[0].toString():arguments[0].toString()}var a=e("../core/core");/**
 * Combines an array of Strings into one String, each separated by the
 * character(s) used for the separator parameter. To join arrays of ints or
 * floats, it's necessary to first convert them to Strings using nf() or
 * nfs().
 *
 * @method join
 * @param  {Array}  list      array of Strings to be joined
 * @param  {String} separator String to be placed between each item
 * @return {String}           joined String
 * @example
 * <div>
 * <code>
 * var array = ["Hello", "world!"]
 * var separator = " "
 * var message = join(array, separator);
 * text(message, 5, 50);
 * </code>
 * </div>
 *
 * @alt
 * "hello world!" displayed middle left of canvas.
 *
 */
a.prototype.join=function(e,t){return e.join(t)},/**
 * This function is used to apply a regular expression to a piece of text,
 * and return matching groups (elements found inside parentheses) as a
 * String array. If there are no matches, a null value will be returned.
 * If no groups are specified in the regular expression, but the sequence
 * matches, an array of length 1 (with the matched text as the first element
 * of the array) will be returned.
 * <br><br>
 * To use the function, first check to see if the result is null. If the
 * result is null, then the sequence did not match at all. If the sequence
 * did match, an array is returned.
 * <br><br>
 * If there are groups (specified by sets of parentheses) in the regular
 * expression, then the contents of each will be returned in the array.
 * Element [0] of a regular expression match returns the entire matching
 * string, and the match groups start at element [1] (the first group is [1],
 * the second [2], and so on).
 *
 * @method match
 * @param  {String} str    the String to be searched
 * @param  {String} regexp the regexp to be used for matching
 * @return {Array}         Array of Strings found
 * @example
 * <div>
 * <code>
 * var string = "Hello p5js*!"
 * var regexp = "p5js\\*"
 * var match = match(string, regexp);
 * text(match, 5, 50);
 * </code>
 * </div>
 *
 * @alt
 * "p5js*" displayed middle left of canvas.
 *
 */
a.prototype.match=function(e,t){return e.match(t)},/**
 * This function is used to apply a regular expression to a piece of text,
 * and return a list of matching groups (elements found inside parentheses)
 * as a two-dimensional String array. If there are no matches, a null value
 * will be returned. If no groups are specified in the regular expression,
 * but the sequence matches, a two dimensional array is still returned, but
 * the second dimension is only of length one.
 * <br><br>
 * To use the function, first check to see if the result is null. If the
 * result is null, then the sequence did not match at all. If the sequence
 * did match, a 2D array is returned.
 * <br><br>
 * If there are groups (specified by sets of parentheses) in the regular
 * expression, then the contents of each will be returned in the array.
 * Assuming a loop with counter variable i, element [i][0] of a regular
 * expression match returns the entire matching string, and the match groups
 * start at element [i][1] (the first group is [i][1], the second [i][2],
 * and so on).
 *
 * @method matchAll
 * @param  {String} str    the String to be searched
 * @param  {String} regexp the regexp to be used for matching
 * @return {Array}         2d Array of Strings found
 * @example
 * <div class="norender">
 * <code>
 * var string = "Hello p5js*! Hello world!"
 * var regexp = "Hello"
 * matchAll(string, regexp);
 * </code>
 * </div>

 */
a.prototype.matchAll=function(e,t){for(var r=new RegExp(t,"g"),n=r.exec(e),o=[];null!==n;)o.push(n),n=r.exec(e);return o},a.prototype.nf=function(){if(arguments[0]instanceof Array){var e=arguments[1],t=arguments[2];return arguments[0].map(function(n){return r(n,e,t)})}var n=Object.prototype.toString.call(arguments[0]);return"[object Arguments]"===n?3===arguments[0].length?this.nf(arguments[0][0],arguments[0][1],arguments[0][2]):2===arguments[0].length?this.nf(arguments[0][0],arguments[0][1]):this.nf(arguments[0][0]):r.apply(this,arguments)},a.prototype.nfc=function(){if(arguments[0]instanceof Array){var e=arguments[1];return arguments[0].map(function(t){return n(t,e)})}return n.apply(this,arguments)},a.prototype.nfp=function(){var e=this.nf.apply(this,arguments);return e instanceof Array?e.map(o):o(e)},a.prototype.nfs=function(){var e=this.nf.apply(this,arguments);return e instanceof Array?e.map(i):i(e)},a.prototype.split=function(e,t){return e.split(t)},a.prototype.splitTokens=function(){var e,t,r,n;return n=arguments[1],arguments.length>1?(r=/\]/g.exec(n),t=/\[/g.exec(n),t&&r?(n=n.slice(0,r.index)+n.slice(r.index+1),t=/\[/g.exec(n),n=n.slice(0,t.index)+n.slice(t.index+1),e=new RegExp("[\\["+n+"\\]]","g")):r?(n=n.slice(0,r.index)+n.slice(r.index+1),e=new RegExp("["+n+"\\]]","g")):t?(n=n.slice(0,t.index)+n.slice(t.index+1),e=new RegExp("["+n+"\\[]","g")):e=new RegExp("["+n+"]","g")):e=/\s/g,arguments[0].split(e).filter(function(e){return e})},a.prototype.trim=function(e){return e instanceof Array?e.map(this.trim):e.trim()},t.exports=a},{"../core/core":37}],76:[function(e,t){"use strict";var r=e("../core/core");r.prototype.day=function(){return(new Date).getDate()},r.prototype.hour=function(){return(new Date).getHours()},r.prototype.minute=function(){return(new Date).getMinutes()},r.prototype.millis=function(){return window.performance.now()},r.prototype.month=function(){return(new Date).getMonth()+1},r.prototype.second=function(){return(new Date).getSeconds()},r.prototype.year=function(){return(new Date).getFullYear()},t.exports=r},{"../core/core":37}],77:[function(e,t){"use strict";var r=e("../core/core");r.prototype.camera=function(e,t,r){for(var n=new Array(arguments.length),o=0;o<n.length;++o)n[o]=arguments[o];this._validateParameters("camera",n,["Number","Number","Number"]),this._renderer.translate(-e,-t,-r)},/**
 * Sets perspective camera
 * @method  perspective
 * @param  {Number} fovy   camera frustum vertical field of view,
 *                         from bottom to top of view, in degrees
 * @param  {Number} aspect camera frustum aspect ratio
 * @param  {Number} near   frustum near plane length
 * @param  {Number} far    frustum far plane length
 * @return {p5}            the p5 object
 * @example
 * <div>
 * <code>
 * //drag mouse to toggle the world!
 * //you will see there's a vanish point
 * function setup(){
 *   createCanvas(100, 100, WEBGL);
 *   perspective(60 / 180 * PI, width/height, 0.1, 100);
 * }
 * function draw(){
 *  background(200);
 *  orbitControl();
 *  for(var i = -1; i < 2; i++){
 *     for(var j = -2; j < 3; j++){
 *       push();
 *       translate(i*160, 0, j*160);
 *       box(40, 40, 40);
 *       pop();
 *     }
 *   }
 * }
 * </code>
 * </div>
 *
 * @alt
 * colored 3d boxes toggleable with mouse position
 *
 */
r.prototype.perspective=function(e,t,n,o){for(var i=new Array(arguments.length),a=0;a<i.length;++a)i[a]=arguments[a];this._validateParameters("perspective",i,["Number","Number","Number","Number"]),this._renderer.uPMatrix=r.Matrix.identity(),this._renderer.uPMatrix.perspective(e,t,n,o),this._renderer._curCamera="custom"},/**
 * Setup ortho camera
 * @method  ortho
 * @param  {Number} left   camera frustum left plane
 * @param  {Number} right  camera frustum right plane
 * @param  {Number} bottom camera frustum bottom plane
 * @param  {Number} top    camera frustum top plane
 * @param  {Number} near   camera frustum near plane
 * @param  {Number} far    camera frustum far plane
 * @return {p5}            the p5 object
 * @example
 * <div>
 * <code>
 * //drag mouse to toggle the world!
 * //there's no vanish point
 * function setup(){
 *   createCanvas(100, 100, WEBGL);
 *   ortho(-width/2, width/2, height/2, -height/2, 0.1, 100);
 * }
 * function draw(){
 *  background(200);
 *  orbitControl();
 *  for(var i = -1; i < 2; i++){
 *     for(var j = -2; j < 3; j++){
 *       push();
 *       translate(i*160, 0, j*160);
 *       box(40, 40, 40);
 *       pop();
 *     }
 *   }
 * }
 * </code>
 * </div>
 *
 * @alt
 * 3 3d boxes, reveal several more boxes on 3d plane when mouse used to toggle
 *
 */
r.prototype.ortho=function(e,t,n,o,i,a){for(var s=new Array(arguments.length),h=0;h<s.length;++h)s[h]=arguments[h];this._validateParameters("ortho",s,["Number","Number","Number","Number","Number","Number"]),e/=this.width,t/=this.width,o/=this.height,n/=this.height,this._renderer.uPMatrix=r.Matrix.identity(),this._renderer.uPMatrix.ortho(e,t,n,o,i,a),this._renderer._curCamera="custom"},t.exports=r},{"../core/core":37}],78:[function(e,t){"use strict";var r=e("../core/core");r.prototype.orbitControl=function(){return this.mouseIsPressed&&(this.rotateY((this.mouseX-this.width/2)/(this.width/2)),this.rotateX((this.mouseY-this.height/2)/(this.width/2))),this},t.exports=r},{"../core/core":37}],79:[function(e,t){"use strict";var r=e("../core/core");r.prototype.ambientLight=function(){var e=this._renderer.GL,t=this._renderer._getShader("lightVert","lightTextureFrag");e.useProgram(t),t.uAmbientColor=e.getUniformLocation(t,"uAmbientColor["+this._renderer.ambientLightCount+"]");var r=this._renderer._pInst.color.apply(this._renderer._pInst,arguments),n=r._array;return e.uniform3f(t.uAmbientColor,n[0],n[1],n[2]),t.uMaterialColor=e.getUniformLocation(t,"uMaterialColor"),e.uniform4f(t.uMaterialColor,1,1,1,1),this._renderer.ambientLightCount++,t.uAmbientLightCount=e.getUniformLocation(t,"uAmbientLightCount"),e.uniform1i(t.uAmbientLightCount,this._renderer.ambientLightCount),this},r.prototype.directionalLight=function(e,t,r){var n=this._renderer.GL,o=this._renderer._getShader("lightVert","lightTextureFrag");n.useProgram(o),o.uDirectionalColor=n.getUniformLocation(o,"uDirectionalColor["+this._renderer.directionalLightCount+"]");var i=this._renderer._pInst.color.apply(this._renderer._pInst,[e,t,r]),a=i._array;n.uniform3f(o.uDirectionalColor,a[0],a[1],a[2]);for(var s,h,l,u=new Array(arguments.length),p=0;p<u.length;++p)u[p]=arguments[p];if("number"==typeof u[u.length-1])s=u[u.length-3],h=u[u.length-2],l=u[u.length-1];else try{s=u[u.length-1].x,h=u[u.length-1].y,l=u[u.length-1].z}catch(c){throw c}return o.uLightingDirection=n.getUniformLocation(o,"uLightingDirection["+this._renderer.directionalLightCount+"]"),n.uniform3f(o.uLightingDirection,s,h,l),o.uMaterialColor=n.getUniformLocation(o,"uMaterialColor"),n.uniform4f(o.uMaterialColor,1,1,1,1),this._renderer.directionalLightCount++,o.uDirectionalLightCount=n.getUniformLocation(o,"uDirectionalLightCount"),n.uniform1i(o.uDirectionalLightCount,this._renderer.directionalLightCount),this},r.prototype.pointLight=function(e,t,r){var n=this._renderer.GL,o=this._renderer._getShader("lightVert","lightTextureFrag");n.useProgram(o),o.uPointLightColor=n.getUniformLocation(o,"uPointLightColor["+this._renderer.pointLightCount+"]");var i=this._renderer._pInst.color.apply(this._renderer._pInst,[e,t,r]),a=i._array;n.uniform3f(o.uPointLightColor,a[0],a[1],a[2]);for(var s,h,l,u=new Array(arguments.length),p=0;p<u.length;++p)u[p]=arguments[p];if("number"==typeof u[u.length-1])s=u[u.length-3],h=u[u.length-2],l=u[u.length-1];else try{s=u[u.length-1].x,h=u[u.length-1].y,l=u[u.length-1].z}catch(c){throw c}return o.uPointLightLocation=n.getUniformLocation(o,"uPointLightLocation["+this._renderer.pointLightCount+"]"),n.uniform3f(o.uPointLightLocation,s,h,l),o.uMaterialColor=n.getUniformLocation(o,"uMaterialColor"),n.uniform4f(o.uMaterialColor,1,1,1,1),this._renderer.pointLightCount++,o.uPointLightCount=n.getUniformLocation(o,"uPointLightCount"),n.uniform1i(o.uPointLightCount,this._renderer.pointLightCount),this},t.exports=r},{"../core/core":37}],80:[function(e,t){"use strict";function r(e,t){for(var r={v:[],vt:[],vn:[]},o={},i=0;i<t.length;++i){var a=t[i].trim().split(/\b\s+/);if(a.length>0)if("v"===a[0]||"vn"===a[0]){var s=new n.Vector(parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3]));r[a[0]].push(s)}else if("vt"===a[0]){var h=[parseFloat(a[1]),parseFloat(a[2])];r[a[0]].push(h)}else if("f"===a[0])for(var l=3;l<a.length;++l){for(var u=[],p=[1,l-1,l],c=0;c<p.length;++c){var f=a[p[c]],d=0;if(void 0!==o[f])d=o[f];else{for(var m=f.split("/"),g=0;g<m.length;g++)m[g]=parseInt(m[g])-1;d=o[f]=e.vertices.length,e.vertices.push(r.v[m[0]].copy()),r.vt[m[1]]?e.uvs.push(r.vt[m[1]].slice()):e.uvs.push([0,0]),r.vn[m[2]]&&e.vertexNormals.push(r.vn[m[2]].copy())}u.push(d)}e.faces.push(u)}}return 0===e.vertexNormals.length&&e.computeNormals(),e}var n=e("../core/core");e("./p5.Geometry"),n.prototype.loadModel=function(){var e,t,o,i=arguments[0];"boolean"==typeof arguments[1]?(e=arguments[1],t=arguments[2],o=arguments[3]):(e=!1,t=arguments[1],o=arguments[2]);var a=new n.Geometry;return a.gid=i+"|"+e,this.loadStrings(i,function(n){r(a,n),e&&a.normalize(),"function"==typeof t&&t(a)}.bind(this),o),a},n.prototype.model=function(e){e.vertices.length>0&&(this._renderer.geometryInHash(e.gid)||this._renderer.createBuffers(e.gid,e),this._renderer.drawBuffers(e.gid))},t.exports=n},{"../core/core":37,"./p5.Geometry":82}],81:[function(e,t){"use strict";var r=e("../core/core");r.prototype.normalMaterial=function(){return this._renderer._getShader("normalVert","normalFrag"),this},/**
 * Texture for geometry.  You can view other possible materials in this
 * <a href="https://p5js.org/examples/examples/3D_Materials.php">example</a>.
 * @method texture
 * @param {p5.Image | p5.MediaElement | p5.Graphics} tex 2-dimensional graphics
 *                    to render as texture
 * @return {p5}                the p5 object
 * @example
 * <div>
 * <code>
 * var img;
 * function setup(){
 *   createCanvas(100, 100, WEBGL);
 *   img = loadImage("assets/laDefense.jpg");
 * }
 *
 * function draw(){
 *   background(0);
 *   rotateZ(frameCount * 0.01);
 *   rotateX(frameCount * 0.01);
 *   rotateY(frameCount * 0.01);
 *   //pass image as texture
 *   texture(img);
 *   box(200, 200, 200);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * var pg;
 * function setup(){
 *   createCanvas(100, 100, WEBGL);
 *   pg = createGraphics(200, 200);
 *   pg.textSize(100);
 * }
 *
 * function draw(){
 *   background(0);
 *   pg.background(255);
 *   pg.text('hello!', 0, 100);
 *   //pass image as texture
 *   texture(pg);
 *   plane(200);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * var vid;
 * function preload(){
 *   vid = createVideo("assets/fingers.mov");
 *   vid.hide();
 *   vid.loop();
 * }
 * function setup(){
 *   createCanvas(100, 100, WEBGL);
 * }
 *
 * function draw(){
 *   background(0);
 *   //pass video frame as texture
 *   texture(vid);
 *   plane(200);
 * }
 * </code>
 * </div>
 *
 * @alt
 * Rotating view of many images umbrella and grid roof on a 3d plane
 * black canvas
 * black canvas
 *
 */
r.prototype.texture=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];var n=this._renderer.GL,o=this._renderer._getShader("lightVert","lightTextureFrag");n.useProgram(o);var i;if(e[0].isTexture)e[0]instanceof r.Graphics||"undefined"!=typeof r.MediaElement&&e[0]instanceof r.MediaElement?i=e[0].elt:e[0]instanceof r.Image&&(i=e[0].canvas),this._renderer._bind.call(this,e[0].tex,i);else{if(e[0]instanceof r.Image)i=e[0].canvas;else if("undefined"!=typeof r.MediaElement&&e[0]instanceof r.MediaElement){if(!e[0].loadedmetadata)return;i=e[0].elt}else e[0]instanceof r.Graphics&&(i=e[0].elt);var a=n.createTexture();e[0]._setProperty("tex",a),e[0]._setProperty("isTexture",!0),this._renderer._bind.call(this,a,i)}return n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e[0].tex),n.uniform1i(n.getUniformLocation(o,"isTexture"),!0),n.uniform1i(n.getUniformLocation(o,"uSampler"),0),this},r.RendererGL.prototype._bind=function(e,t){var r=this._renderer.GL;r.bindTexture(r.TEXTURE_2D,e),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.bindTexture(r.TEXTURE_2D,null)},r.prototype.ambientMaterial=function(){var e=this._renderer.GL,t=this._renderer._getShader("lightVert","lightTextureFrag");e.useProgram(t),t.uMaterialColor=e.getUniformLocation(t,"uMaterialColor");var r=this._renderer._applyColorBlend.apply(this._renderer,arguments);return e.uniform4f(t.uMaterialColor,r[0],r[1],r[2],r[3]),t.uSpecular=e.getUniformLocation(t,"uSpecular"),e.uniform1i(t.uSpecular,!1),e.uniform1i(e.getUniformLocation(t,"isTexture"),!1),this},r.prototype.specularMaterial=function(){var e=this._renderer.GL,t=this._renderer._getShader("lightVert","lightTextureFrag");e.useProgram(t),e.uniform1i(e.getUniformLocation(t,"isTexture"),!1),t.uMaterialColor=e.getUniformLocation(t,"uMaterialColor");var r=this._renderer._applyColorBlend.apply(this._renderer,arguments);return e.uniform4f(t.uMaterialColor,r[0],r[1],r[2],r[3]),t.uSpecular=e.getUniformLocation(t,"uSpecular"),e.uniform1i(t.uSpecular,!0),this},r.RendererGL.prototype._applyColorBlend=function(){var e=this.GL,t=this._pInst.color.apply(this._pInst,arguments),r=t._array;return r[r.length-1]<1?(e.depthMask(!1),e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA)):(e.depthMask(!0),e.disable(e.BLEND)),r},t.exports=r},{"../core/core":37}],82:[function(e,t){"use strict";var r=e("../core/core");r.Geometry=function(e,t,r){return this.vertices=[],this.vertexNormals=[],this.faces=[],this.uvs=[],this.detailX=void 0!==e?e:1,this.detailY=void 0!==t?t:1,r instanceof Function&&r.call(this),this},r.Geometry.prototype.computeFaces=function(){for(var e,t,r,n,o=this.detailX+1,i=0;i<this.detailY;i++)for(var a=0;a<this.detailX;a++)e=i*o+a,t=i*o+a+1,r=(i+1)*o+a+1,n=(i+1)*o+a,this.faces.push([e,t,n]),this.faces.push([n,t,r]);return this},r.Geometry.prototype._getFaceNormal=function(e,t){var n=this.faces[e],o=this.vertices[n[t%3]],i=this.vertices[n[(t+1)%3]],a=this.vertices[n[(t+2)%3]],s=r.Vector.cross(r.Vector.sub(i,o),r.Vector.sub(a,o)),h=r.Vector.mag(s)/(r.Vector.mag(r.Vector.sub(i,o))*r.Vector.mag(r.Vector.sub(a,o)));return s=s.normalize(),s.mult(Math.asin(h))},r.Geometry.prototype.computeNormals=function(){for(var e=0;e<this.vertices.length;e++){for(var t=new r.Vector,n=0;n<this.faces.length;n++)(this.faces[n][0]===e||this.faces[n][1]===e||this.faces[n][2]===e)&&(t=t.add(this._getFaceNormal(n,e)));t=t.normalize(),this.vertexNormals.push(t)}return this},r.Geometry.prototype.averageNormals=function(){for(var e=0;e<=this.detailY;e++){var t=this.detailX+1,n=r.Vector.add(this.vertexNormals[e*t],this.vertexNormals[e*t+this.detailX]);n=r.Vector.div(n,2),this.vertexNormals[e*t]=n,this.vertexNormals[e*t+this.detailX]=n}return this},r.Geometry.prototype.averagePoleNormals=function(){for(var e=new r.Vector(0,0,0),t=0;t<this.detailX;t++)e.add(this.vertexNormals[t]);for(e=r.Vector.div(e,this.detailX),t=0;t<this.detailX;t++)this.vertexNormals[t]=e;for(e=new r.Vector(0,0,0),t=this.vertices.length-1;t>this.vertices.length-1-this.detailX;t--)e.add(this.vertexNormals[t]);for(e=r.Vector.div(e,this.detailX),t=this.vertices.length-1;t>this.vertices.length-1-this.detailX;t--)this.vertexNormals[t]=e;return this},r.Geometry.prototype.normalize=function(){if(this.vertices.length>0){for(var e=this.vertices[0].copy(),t=this.vertices[0].copy(),n=0;n<this.vertices.length;n++)e.x=Math.max(e.x,this.vertices[n].x),t.x=Math.min(t.x,this.vertices[n].x),e.y=Math.max(e.y,this.vertices[n].y),t.y=Math.min(t.y,this.vertices[n].y),e.z=Math.max(e.z,this.vertices[n].z),t.z=Math.min(t.z,this.vertices[n].z);var o=r.Vector.lerp(e,t,.5),i=r.Vector.sub(e,t),a=Math.max(Math.max(i.x,i.y),i.z),s=200/a;for(n=0;n<this.vertices.length;n++)this.vertices[n].sub(o),this.vertices[n].mult(s)}return this},t.exports=r.Geometry},{"../core/core":37}],83:[function(e,t){"use strict";var r=e("../core/core"),n=e("../math/polargeometry"),o=e("../core/constants"),i="undefined"!=typeof Float32Array?Float32Array:Array;r.Matrix=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];return e[0]instanceof r?(this.p5=e[0],"mat3"===e[1]?this.mat3=e[2]||new i([1,0,0,0,1,0,0,0,1]):this.mat4=e[1]||new i([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])):"mat3"===e[0]?this.mat3=e[1]||new i([1,0,0,0,1,0,0,0,1]):this.mat4=e[0]||new i([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this},r.Matrix.prototype.set=function(e){return e instanceof r.Matrix?(this.mat4=e.mat4,this):e instanceof i?(this.mat4=e,this):this},r.Matrix.prototype.get=function(){return new r.Matrix(this.mat4)},r.Matrix.prototype.copy=function(){var e=new r.Matrix;return e.mat4[0]=this.mat4[0],e.mat4[1]=this.mat4[1],e.mat4[2]=this.mat4[2],e.mat4[3]=this.mat4[3],e.mat4[4]=this.mat4[4],e.mat4[5]=this.mat4[5],e.mat4[6]=this.mat4[6],e.mat4[7]=this.mat4[7],e.mat4[8]=this.mat4[8],e.mat4[9]=this.mat4[9],e.mat4[10]=this.mat4[10],e.mat4[11]=this.mat4[11],e.mat4[12]=this.mat4[12],e.mat4[13]=this.mat4[13],e.mat4[14]=this.mat4[14],e.mat4[15]=this.mat4[15],e},r.Matrix.identity=function(){return new r.Matrix},r.Matrix.prototype.transpose=function(e){var t,n,o,a,s,h;return e instanceof r.Matrix?(t=e.mat4[1],n=e.mat4[2],o=e.mat4[3],a=e.mat4[6],s=e.mat4[7],h=e.mat4[11],this.mat4[0]=e.mat4[0],this.mat4[1]=e.mat4[4],this.mat4[2]=e.mat4[8],this.mat4[3]=e.mat4[12],this.mat4[4]=t,this.mat4[5]=e.mat4[5],this.mat4[6]=e.mat4[9],this.mat4[7]=e.mat4[13],this.mat4[8]=n,this.mat4[9]=a,this.mat4[10]=e.mat4[10],this.mat4[11]=e.mat4[14],this.mat4[12]=o,this.mat4[13]=s,this.mat4[14]=h,this.mat4[15]=e.mat4[15]):e instanceof i&&(t=e[1],n=e[2],o=e[3],a=e[6],s=e[7],h=e[11],this.mat4[0]=e[0],this.mat4[1]=e[4],this.mat4[2]=e[8],this.mat4[3]=e[12],this.mat4[4]=t,this.mat4[5]=e[5],this.mat4[6]=e[9],this.mat4[7]=e[13],this.mat4[8]=n,this.mat4[9]=a,this.mat4[10]=e[10],this.mat4[11]=e[14],this.mat4[12]=o,this.mat4[13]=s,this.mat4[14]=h,this.mat4[15]=e[15]),this},r.Matrix.prototype.invert=function(e){var t,n,o,a,s,h,l,u,p,c,f,d,m,g,y,v;e instanceof r.Matrix?(t=e.mat4[0],n=e.mat4[1],o=e.mat4[2],a=e.mat4[3],s=e.mat4[4],h=e.mat4[5],l=e.mat4[6],u=e.mat4[7],p=e.mat4[8],c=e.mat4[9],f=e.mat4[10],d=e.mat4[11],m=e.mat4[12],g=e.mat4[13],y=e.mat4[14],v=e.mat4[15]):e instanceof i&&(t=e[0],n=e[1],o=e[2],a=e[3],s=e[4],h=e[5],l=e[6],u=e[7],p=e[8],c=e[9],f=e[10],d=e[11],m=e[12],g=e[13],y=e[14],v=e[15]);var x=t*h-n*s,_=t*l-o*s,b=t*u-a*s,w=n*l-o*h,S=n*u-a*h,T=o*u-a*l,M=p*g-c*m,C=p*y-f*m,R=p*v-d*m,E=c*y-f*g,A=c*v-d*g,P=f*v-d*y,L=x*P-_*A+b*E+w*R-S*C+T*M;return L?(L=1/L,this.mat4[0]=(h*P-l*A+u*E)*L,this.mat4[1]=(o*A-n*P-a*E)*L,this.mat4[2]=(g*T-y*S+v*w)*L,this.mat4[3]=(f*S-c*T-d*w)*L,this.mat4[4]=(l*R-s*P-u*C)*L,this.mat4[5]=(t*P-o*R+a*C)*L,this.mat4[6]=(y*b-m*T-v*_)*L,this.mat4[7]=(p*T-f*b+d*_)*L,this.mat4[8]=(s*A-h*R+u*M)*L,this.mat4[9]=(n*R-t*A-a*M)*L,this.mat4[10]=(m*S-g*b+v*x)*L,this.mat4[11]=(c*b-p*S-d*x)*L,this.mat4[12]=(h*C-s*E-l*M)*L,this.mat4[13]=(t*E-n*C+o*M)*L,this.mat4[14]=(g*_-m*w-y*x)*L,this.mat4[15]=(p*w-c*_+f*x)*L,this):null},r.Matrix.prototype.invert3x3=function(){var e=this.mat3[0],t=this.mat3[1],r=this.mat3[2],n=this.mat3[3],o=this.mat3[4],i=this.mat3[5],a=this.mat3[6],s=this.mat3[7],h=this.mat3[8],l=h*o-i*s,u=-h*n+i*a,p=s*n-o*a,c=e*l+t*u+r*p;return c?(c=1/c,this.mat3[0]=l*c,this.mat3[1]=(-h*t+r*s)*c,this.mat3[2]=(i*t-r*o)*c,this.mat3[3]=u*c,this.mat3[4]=(h*e-r*a)*c,this.mat3[5]=(-i*e+r*n)*c,this.mat3[6]=p*c,this.mat3[7]=(-s*e+t*a)*c,this.mat3[8]=(o*e-t*n)*c,this):null},r.Matrix.prototype.transpose3x3=function(e){var t=e[1],r=e[2],n=e[5];return this.mat3[1]=e[3],this.mat3[2]=e[6],this.mat3[3]=t,this.mat3[5]=e[7],this.mat3[6]=r,this.mat3[7]=n,this},r.Matrix.prototype.inverseTranspose=function(e){return void 0===this.mat3?console.error("sorry, this function only works with mat3"):(this.mat3[0]=e.mat4[0],this.mat3[1]=e.mat4[1],this.mat3[2]=e.mat4[2],this.mat3[3]=e.mat4[4],this.mat3[4]=e.mat4[5],this.mat3[5]=e.mat4[6],this.mat3[6]=e.mat4[8],this.mat3[7]=e.mat4[9],this.mat3[8]=e.mat4[10]),this.invert3x3().transpose3x3(this.mat3),this},r.Matrix.prototype.determinant=function(){var e=this.mat4[0]*this.mat4[5]-this.mat4[1]*this.mat4[4],t=this.mat4[0]*this.mat4[6]-this.mat4[2]*this.mat4[4],r=this.mat4[0]*this.mat4[7]-this.mat4[3]*this.mat4[4],n=this.mat4[1]*this.mat4[6]-this.mat4[2]*this.mat4[5],o=this.mat4[1]*this.mat4[7]-this.mat4[3]*this.mat4[5],i=this.mat4[2]*this.mat4[7]-this.mat4[3]*this.mat4[6],a=this.mat4[8]*this.mat4[13]-this.mat4[9]*this.mat4[12],s=this.mat4[8]*this.mat4[14]-this.mat4[10]*this.mat4[12],h=this.mat4[8]*this.mat4[15]-this.mat4[11]*this.mat4[12],l=this.mat4[9]*this.mat4[14]-this.mat4[10]*this.mat4[13],u=this.mat4[9]*this.mat4[15]-this.mat4[11]*this.mat4[13],p=this.mat4[10]*this.mat4[15]-this.mat4[11]*this.mat4[14];return e*p-t*u+r*l+n*h-o*s+i*a},r.Matrix.prototype.mult=function(e){var t=new i(16),n=new i(16);e instanceof r.Matrix?n=e.mat4:e instanceof i&&(n=e);var o=this.mat4[0],a=this.mat4[1],s=this.mat4[2],h=this.mat4[3];return t[0]=o*n[0]+a*n[4]+s*n[8]+h*n[12],t[1]=o*n[1]+a*n[5]+s*n[9]+h*n[13],t[2]=o*n[2]+a*n[6]+s*n[10]+h*n[14],t[3]=o*n[3]+a*n[7]+s*n[11]+h*n[15],o=this.mat4[4],a=this.mat4[5],s=this.mat4[6],h=this.mat4[7],t[4]=o*n[0]+a*n[4]+s*n[8]+h*n[12],t[5]=o*n[1]+a*n[5]+s*n[9]+h*n[13],t[6]=o*n[2]+a*n[6]+s*n[10]+h*n[14],t[7]=o*n[3]+a*n[7]+s*n[11]+h*n[15],o=this.mat4[8],a=this.mat4[9],s=this.mat4[10],h=this.mat4[11],t[8]=o*n[0]+a*n[4]+s*n[8]+h*n[12],t[9]=o*n[1]+a*n[5]+s*n[9]+h*n[13],t[10]=o*n[2]+a*n[6]+s*n[10]+h*n[14],t[11]=o*n[3]+a*n[7]+s*n[11]+h*n[15],o=this.mat4[12],a=this.mat4[13],s=this.mat4[14],h=this.mat4[15],t[12]=o*n[0]+a*n[4]+s*n[8]+h*n[12],t[13]=o*n[1]+a*n[5]+s*n[9]+h*n[13],t[14]=o*n[2]+a*n[6]+s*n[10]+h*n[14],t[15]=o*n[3]+a*n[7]+s*n[11]+h*n[15],this.mat4=t,this},r.Matrix.prototype.scale=function(){for(var e,t,n,o=new Array(arguments.length),a=0;a<o.length;++a)o[a]=arguments[a];o[0]instanceof r.Vector?(e=o[0].x,t=o[0].y,n=o[0].z):o[0]instanceof Array&&(e=o[0][0],t=o[0][1],n=o[0][2]);var s=new i(16);return s[0]=this.mat4[0]*e,s[1]=this.mat4[1]*e,s[2]=this.mat4[2]*e,s[3]=this.mat4[3]*e,s[4]=this.mat4[4]*t,s[5]=this.mat4[5]*t,s[6]=this.mat4[6]*t,s[7]=this.mat4[7]*t,s[8]=this.mat4[8]*n,s[9]=this.mat4[9]*n,s[10]=this.mat4[10]*n,s[11]=this.mat4[11]*n,s[12]=this.mat4[12],s[13]=this.mat4[13],s[14]=this.mat4[14],s[15]=this.mat4[15],this.mat4=s,this},r.Matrix.prototype.rotate=function(e,t){var i,a,s,h,l;this.p5?this.p5._angleMode===o.DEGREES&&(h=n.degreesToRadians(e)):h=e,t instanceof r.Vector?(i=t.x,a=t.y,s=t.z):t instanceof Array&&(i=t[0],a=t[1],s=t[2]),l=Math.sqrt(i*i+a*a+s*s),i*=1/l,a*=1/l,s*=1/l;var u=this.mat4[0],p=this.mat4[1],c=this.mat4[2],f=this.mat4[3],d=this.mat4[4],m=this.mat4[5],g=this.mat4[6],y=this.mat4[7],v=this.mat4[8],x=this.mat4[9],_=this.mat4[10],b=this.mat4[11],w=Math.sin(h),S=Math.cos(h),T=1-S,M=i*i*T+S,C=a*i*T+s*w,R=s*i*T-a*w,E=i*a*T-s*w,A=a*a*T+S,P=s*a*T+i*w,L=i*s*T+a*w,I=a*s*T-i*w,D=s*s*T+S;return this.mat4[0]=u*M+d*C+v*R,this.mat4[1]=p*M+m*C+x*R,this.mat4[2]=c*M+g*C+_*R,this.mat4[3]=f*M+y*C+b*R,this.mat4[4]=u*E+d*A+v*P,this.mat4[5]=p*E+m*A+x*P,this.mat4[6]=c*E+g*A+_*P,this.mat4[7]=f*E+y*A+b*P,this.mat4[8]=u*L+d*I+v*D,this.mat4[9]=p*L+m*I+x*D,this.mat4[10]=c*L+g*I+_*D,this.mat4[11]=f*L+y*I+b*D,this},/**
 * @todo  finish implementing this method!
 * translates
 * @param  {Array} v vector to translate by
 * @return {p5.Matrix}                    this
 */
r.Matrix.prototype.translate=function(e){var t=e[0],r=e[1],n=e[2]||0;this.mat4[12]=this.mat4[0]*t+this.mat4[4]*r+this.mat4[8]*n+this.mat4[12],this.mat4[13]=this.mat4[1]*t+this.mat4[5]*r+this.mat4[9]*n+this.mat4[13],this.mat4[14]=this.mat4[2]*t+this.mat4[6]*r+this.mat4[10]*n+this.mat4[14],this.mat4[15]=this.mat4[3]*t+this.mat4[7]*r+this.mat4[11]*n+this.mat4[15]},r.Matrix.prototype.rotateX=function(e){this.rotate(e,[1,0,0])},r.Matrix.prototype.rotateY=function(e){this.rotate(e,[0,1,0])},r.Matrix.prototype.rotateZ=function(e){this.rotate(e,[0,0,1])},r.Matrix.prototype.perspective=function(e,t,r,n){var o=1/Math.tan(e/2),i=1/(r-n);return this.mat4[0]=o/t,this.mat4[1]=0,this.mat4[2]=0,this.mat4[3]=0,this.mat4[4]=0,this.mat4[5]=o,this.mat4[6]=0,this.mat4[7]=0,this.mat4[8]=0,this.mat4[9]=0,this.mat4[10]=(n+r)*i,this.mat4[11]=-1,this.mat4[12]=0,this.mat4[13]=0,this.mat4[14]=2*n*r*i,this.mat4[15]=0,this},r.Matrix.prototype.ortho=function(e,t,r,n,o,i){var a=1/(e-t),s=1/(r-n),h=1/(o-i);return this.mat4[0]=-2*a,this.mat4[1]=0,this.mat4[2]=0,this.mat4[3]=0,this.mat4[4]=0,this.mat4[5]=-2*s,this.mat4[6]=0,this.mat4[7]=0,this.mat4[8]=0,this.mat4[9]=0,this.mat4[10]=2*h,this.mat4[11]=0,this.mat4[12]=(e+t)*a,this.mat4[13]=(n+r)*s,this.mat4[14]=(i+o)*h,this.mat4[15]=1,this},t.exports=r.Matrix},{"../core/constants":36,"../core/core":37,"../math/polargeometry":67}],84:[function(e,t){"use strict";var r=e("../core/core"),n=e("../core/constants");r.RendererGL.prototype.beginShape=function(e){return this.immediateMode.shapeMode=void 0!==e?e:n.LINE_STRIP,//immediateMode vertices & buffers, create them now!
void 0===this.immediateMode.vertexPositions?(this.immediateMode.vertexPositions=[],this.immediateMode.vertexColors=[],this.immediateMode.vertexBuffer=this.GL.createBuffer(),this.immediateMode.colorBuffer=this.GL.createBuffer()):(this.immediateMode.vertexPositions.length=0,this.immediateMode.vertexColors.length=0),this.isImmediateDrawing=!0,this},r.RendererGL.prototype.vertex=function(e,t,r){this.immediateMode.vertexPositions.push(e,t,r);var n=this.curFillColor||[.5,.5,.5,1];return this.immediateMode.vertexColors.push(n[0],n[1],n[2],n[3]),this},r.RendererGL.prototype.endShape=function(e){var t=this.GL;if(this._bindImmediateBuffers(this.immediateMode.vertexPositions,this.immediateMode.vertexColors),e)if("fill"===this.drawMode)switch(this.immediateMode.shapeMode){case n.LINE_STRIP:this.immediateMode.shapeMode=n.TRIANGLE_FAN;break;case n.LINES:this.immediateMode.shapeMode=n.TRIANGLE_FAN;break;case n.TRIANGLES:this.immediateMode.shapeMode=n.TRIANGLE_FAN}else switch(this.immediateMode.shapeMode){case n.LINE_STRIP:this.immediateMode.shapeMode=n.LINE_LOOP;break;case n.LINES:this.immediateMode.shapeMode=n.LINE_LOOP}if(this.immediateMode.shapeMode===n.QUADS||this.immediateMode.shapeMode===n.QUAD_STRIP)throw new Error("sorry, "+this.immediateMode.shapeMode+" not yet implemented in webgl mode.");return t.enable(t.BLEND),t.drawArrays(this.immediateMode.shapeMode,0,this.immediateMode.vertexPositions.length/3),this.immediateMode.vertexPositions.length=0,this.immediateMode.vertexColors.length=0,this.isImmediateDrawing=!1,this},r.RendererGL.prototype._bindImmediateBuffers=function(e,t){this._setDefaultCamera();var r=this.GL,n=this._getCurShaderId(),o=this.mHash[n];return o.vertexPositionAttribute=r.getAttribLocation(o,"aPosition"),r.enableVertexAttribArray(o.vertexPositionAttribute),r.bindBuffer(r.ARRAY_BUFFER,this.immediateMode.vertexBuffer),r.bufferData(r.ARRAY_BUFFER,new Float32Array(e),r.DYNAMIC_DRAW),r.vertexAttribPointer(o.vertexPositionAttribute,3,r.FLOAT,!1,0,0),o.vertexColorAttribute=r.getAttribLocation(o,"aVertexColor"),r.enableVertexAttribArray(o.vertexColorAttribute),r.bindBuffer(r.ARRAY_BUFFER,this.immediateMode.colorBuffer),r.bufferData(r.ARRAY_BUFFER,new Float32Array(t),r.DYNAMIC_DRAW),r.vertexAttribPointer(o.vertexColorAttribute,4,r.FLOAT,!1,0,0),this._setMatrixUniforms(n),this},r.RendererGL.prototype._getColorVertexShader=function(){var e,t=this.GL,r="immediateVert|vertexColorFrag";return this.materialInHash(r)?e=this.mHash[r]:(e=this._initShaders("immediateVert","vertexColorFrag",!0),this.mHash[r]=e,e.vertexColorAttribute=t.getAttribLocation(e,"aVertexColor"),t.enableVertexAttribArray(e.vertexColorAttribute)),e},t.exports=r.RendererGL},{"../core/constants":36,"../core/core":37}],85:[function(e,t){"use strict";function r(e){return e.length>0?e.reduce(function(e,t){return e.concat(t)}):[]}function n(e){return r(e.map(function(e){return[e.x,e.y,e.z]}))}var o=e("../core/core"),i=0;o.RendererGL.prototype._initBufferDefaults=function(e){if(i++,i>1e3){var t=Object.keys(this.gHash)[0];delete this.gHash[t],i--}var r=this.GL;this.gHash[e]={},this.gHash[e].vertexBuffer=r.createBuffer(),this.gHash[e].normalBuffer=r.createBuffer(),this.gHash[e].uvBuffer=r.createBuffer(),this.gHash[e].indexBuffer=r.createBuffer()},o.RendererGL.prototype.createBuffers=function(e,t){var o=this.GL;this._setDefaultCamera(),this._initBufferDefaults(e);var i=this.mHash[this._getCurShaderId()];this.gHash[e].numberOfItems=3*t.faces.length,o.bindBuffer(o.ARRAY_BUFFER,this.gHash[e].vertexBuffer),o.bufferData(o.ARRAY_BUFFER,new Float32Array(n(t.vertices)),o.STATIC_DRAW),i.vertexPositionAttribute=o.getAttribLocation(i,"aPosition"),o.enableVertexAttribArray(i.vertexPositionAttribute),o.vertexAttribPointer(i.vertexPositionAttribute,3,o.FLOAT,!1,0,0),o.bindBuffer(o.ARRAY_BUFFER,this.gHash[e].normalBuffer),o.bufferData(o.ARRAY_BUFFER,new Float32Array(n(t.vertexNormals)),o.STATIC_DRAW),i.vertexNormalAttribute=o.getAttribLocation(i,"aNormal"),o.enableVertexAttribArray(i.vertexNormalAttribute),o.vertexAttribPointer(i.vertexNormalAttribute,3,o.FLOAT,!1,0,0),o.bindBuffer(o.ARRAY_BUFFER,this.gHash[e].uvBuffer),o.bufferData(o.ARRAY_BUFFER,new Float32Array(r(t.uvs)),o.STATIC_DRAW),i.textureCoordAttribute=o.getAttribLocation(i,"aTexCoord"),o.enableVertexAttribArray(i.textureCoordAttribute),o.vertexAttribPointer(i.textureCoordAttribute,2,o.FLOAT,!1,0,0),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,this.gHash[e].indexBuffer),o.bufferData(o.ELEMENT_ARRAY_BUFFER,new Uint16Array(r(t.faces)),o.STATIC_DRAW)},o.RendererGL.prototype.drawBuffers=function(e){this._setDefaultCamera();var t=this.GL,r=this._getCurShaderId(),n=this.mHash[r];return t.bindBuffer(t.ARRAY_BUFFER,this.gHash[e].vertexBuffer),t.vertexAttribPointer(n.vertexPositionAttribute,3,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,this.gHash[e].normalBuffer),t.vertexAttribPointer(n.vertexNormalAttribute,3,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,this.gHash[e].uvBuffer),t.vertexAttribPointer(n.textureCoordAttribute,2,t.FLOAT,!1,0,0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.gHash[e].indexBuffer),this._setMatrixUniforms(r),t.drawElements(t.TRIANGLES,this.gHash[e].numberOfItems,t.UNSIGNED_SHORT,0),this},t.exports=o.RendererGL},{"../core/core":37}],86:[function(e,t){"use strict";var r=e("../core/core"),n=e("./shader");e("../core/p5.Renderer"),e("./p5.Matrix");var o=[],i=1e3,a={alpha:!0,depth:!0,stencil:!0,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1};r.RendererGL=function(e,t,n){return r.Renderer.call(this,e,t,n),this._initContext(),this.isP3D=!0,this.GL=this.drawingContext,this.ambientLightCount=0,this.directionalLightCount=0,this.pointLightCount=0,this._curCamera=null,this.uMVMatrix=new r.Matrix,this.uPMatrix=new r.Matrix,this.uNMatrix=new r.Matrix("mat3"),this.gHash={},this.mHash={},this.isImmediateDrawing=!1,this.immediateMode={},this.curFillColor=[.5,.5,.5,1],this.curStrokeColor=[.5,.5,.5,1],this.pointSize=5,this},r.RendererGL.prototype=Object.create(r.Renderer.prototype),r.RendererGL.prototype._initContext=function(){try{if(this.drawingContext=this.canvas.getContext("webgl",a)||this.canvas.getContext("experimental-webgl",a),null===this.drawingContext)throw new Error("Error creating webgl context");console.log("p5.RendererGL: enabled webgl context");var e=this.drawingContext;e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight)}catch(t){throw new Error(t)}},r.RendererGL.prototype._setDefaultCamera=function(){if(null===this._curCamera){var e=this.width,t=this.height;this.uPMatrix=r.Matrix.identity(),this.uPMatrix.perspective(60/180*Math.PI,e/t,.1,100),this._curCamera="default"}},r.RendererGL.prototype._update=function(){this.uMVMatrix=r.Matrix.identity(),this.translate(0,0,-(this.height/2)/Math.tan(30*Math.PI/180)),this.ambientLightCount=0,this.directionalLightCount=0,this.pointLightCount=0},r.RendererGL.prototype.background=function(){var e=this.GL,t=this._pInst.color.apply(this._pInst,arguments),r=t.levels[0]/255,n=t.levels[1]/255,o=t.levels[2]/255,i=t.levels[3]/255;e.clearColor(r,n,o,i),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)},r.RendererGL.prototype._initShaders=function(e,t,r){var o=this.GL,i=o.createShader(o.VERTEX_SHADER);if(o.shaderSource(i,n[e]),o.compileShader(i),!o.getShaderParameter(i,o.COMPILE_STATUS))return alert("Yikes! An error occurred compiling the shaders:"+o.getShaderInfoLog(i)),null;var a=o.createShader(o.FRAGMENT_SHADER);if(o.shaderSource(a,n[t]),o.compileShader(a),!o.getShaderParameter(a,o.COMPILE_STATUS))return alert("Darn! An error occurred compiling the shaders:"+o.getShaderInfoLog(a)),null;var s=o.createProgram();return o.attachShader(s,i),o.attachShader(s,a),o.linkProgram(s),o.getProgramParameter(s,o.LINK_STATUS)||alert("Snap! Error linking shader program"),this._getLocation(s,r),s},r.RendererGL.prototype._getLocation=function(e,t){var r=this.GL;r.useProgram(e),e.uResolution=r.getUniformLocation(e,"uResolution"),r.uniform1f(e.uResolution,i),e.uPMatrixUniform=r.getUniformLocation(e,"uProjectionMatrix"),e.uMVMatrixUniform=r.getUniformLocation(e,"uModelViewMatrix"),void 0===t&&(e.uNMatrixUniform=r.getUniformLocation(e,"uNormalMatrix"),e.samplerUniform=r.getUniformLocation(e,"uSampler"))},r.RendererGL.prototype._setUniform1f=function(e,t,r){var n=this.GL,o=this.mHash[e];return n.useProgram(o),o[t]=n.getUniformLocation(o,t),n.uniform1f(o[t],r),this},r.RendererGL.prototype._setMatrixUniforms=function(e){var t=this.GL,r=this.mHash[e];t.useProgram(r),t.uniformMatrix4fv(r.uPMatrixUniform,!1,this.uPMatrix.mat4),t.uniformMatrix4fv(r.uMVMatrixUniform,!1,this.uMVMatrix.mat4),this.uNMatrix.inverseTranspose(this.uMVMatrix),t.uniformMatrix3fv(r.uNMatrixUniform,!1,this.uNMatrix.mat3)},r.RendererGL.prototype._getShader=function(e,t,r){var n=e+"|"+t;if(!this.materialInHash(n)){var o=this._initShaders(e,t,r);this.mHash[n]=o}return this.curShaderId=n,this.mHash[this.curShaderId]},r.RendererGL.prototype._getCurShaderId=function(){var e,t;return"fill"!==this.drawMode&&void 0===this.curShaderId?(e="normalVert|normalFrag",t=this._initShaders("normalVert","normalFrag"),this.mHash[e]=t,this.curShaderId=e):this.isImmediateDrawing&&"fill"===this.drawMode&&(e="immediateVert|vertexColorFrag",t=this._initShaders("immediateVert","vertexColorFrag"),this.mHash[e]=t,this.curShaderId=e),this.curShaderId},r.RendererGL.prototype.fill=function(){var e,t=this.GL,r=this._applyColorBlend.apply(this,arguments);return this.curFillColor=r,this.drawMode="fill",this.isImmediateDrawing?(e=this._getShader("immediateVert","vertexColorFrag"),t.useProgram(e)):(e=this._getShader("normalVert","basicFrag"),t.useProgram(e),e.uMaterialColor=t.getUniformLocation(e,"uMaterialColor"),t.uniform4f(e.uMaterialColor,r[0],r[1],r[2],r[3])),this},r.RendererGL.prototype.stroke=function(){var e=this._pInst.color.apply(this._pInst,arguments),t=e._array;return this.curStrokeColor=t,this.drawMode="stroke",this},r.RendererGL.prototype._strokeCheck=function(){if("stroke"===this.drawMode)throw new Error("stroke for shapes in 3D not yet implemented, use fill for now :(")},r.RendererGL.prototype.strokeWeight=function(e){return this.pointSize=e,this},r.RendererGL.prototype.geometryInHash=function(e){return void 0!==this.gHash[e]},r.RendererGL.prototype.materialInHash=function(e){return void 0!==this.mHash[e]},r.RendererGL.prototype.resize=function(e,t){var n=this.GL;r.Renderer.prototype.resize.call(this,e,t),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),"default"===this._curCamera&&(this._curCamera=null,this._setDefaultCamera())},r.RendererGL.prototype.clear=function(){var e=this.GL;e.clearColor(arguments[0],arguments[1],arguments[2],arguments[3]),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)},r.RendererGL.prototype.translate=function(e,t,r){return e/=i,t=-t/i,r/=i,this.uMVMatrix.translate([e,t,r]),this},r.RendererGL.prototype.scale=function(e,t,r){return this.uMVMatrix.scale([e,t,r]),this},r.RendererGL.prototype.rotate=function(e,t){return this.uMVMatrix.rotate(e,t),this},r.RendererGL.prototype.rotateX=function(e){return this.rotate(e,[1,0,0]),this},r.RendererGL.prototype.rotateY=function(e){return this.rotate(e,[0,1,0]),this},r.RendererGL.prototype.rotateZ=function(e){return this.rotate(e,[0,0,1]),this},r.RendererGL.prototype.push=function(){o.push(this.uMVMatrix.copy())},r.RendererGL.prototype.pop=function(){if(0===o.length)throw new Error("Invalid popMatrix!");this.uMVMatrix=o.pop()},r.RendererGL.prototype.resetMatrix=function(){return this.uMVMatrix=r.Matrix.identity(),this.translate(0,0,-800),this},r.RendererGL.prototype._applyTextProperties=function(){console.error("text commands not yet implemented in webgl")},t.exports=r.RendererGL},{"../core/core":37,"../core/p5.Renderer":43,"./p5.Matrix":83,"./shader":88}],87:[function(e,t){"use strict";var r=e("../core/core");e("./p5.Geometry"),r.prototype.plane=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];var n=e[0]||50,o=e[1]||n,i="number"==typeof e[2]?e[2]:1,a="number"==typeof e[3]?e[3]:1,s="plane|"+n+"|"+o+"|"+i+"|"+a;if(!this._renderer.geometryInHash(s)){var h=function(){for(var e,t,i,a=0;a<=this.detailY;a++){t=a/this.detailY;for(var s=0;s<=this.detailX;s++)e=s/this.detailX,i=new r.Vector(n*e-n/2,o*t-o/2,0),this.vertices.push(i),this.uvs.push([e,t])}},l=new r.Geometry(i,a,h);l.computeFaces().computeNormals(),this._renderer.createBuffers(s,l)}this._renderer.drawBuffers(s)},r.prototype.box=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];var n=e[0]||50,o=e[1]||n,i=e[2]||n,a="number"==typeof e[3]?e[3]:4,s="number"==typeof e[4]?e[4]:4,h="box|"+n+"|"+o+"|"+i+"|"+a+"|"+s;if(!this._renderer.geometryInHash(h)){var l=function(){for(var e=[[0,4,2,6],[1,3,5,7],[0,1,4,5],[2,6,3,7],[0,2,1,3],[4,5,6,7]],t=0,a=0;a<e.length;a++){for(var s=e[a],h=4*a,l=0;4>l;l++){var u=s[l],p=new r.Vector((2*(1&u)-1)*n/2,((2&u)-1)*o/2,((4&u)/2-1)*i/2);this.vertices.push(p),this.uvs.push([1&l,(2&l)/2]),t++}this.faces.push([h,h+1,h+2]),this.faces.push([h+2,h+1,h+3])}},u=new r.Geometry(a,s,l);u.computeNormals(),this._renderer.createBuffers(h,u)}return this._renderer.drawBuffers(h),this},r.prototype.sphere=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];var n=e[0]||50,o="number"==typeof e[1]?e[1]:24,i="number"==typeof e[2]?e[2]:16,a="sphere|"+n+"|"+o+"|"+i;if(!this._renderer.geometryInHash(a)){var s=function(){for(var e,t,o,i=0;i<=this.detailY;i++){t=i/this.detailY;for(var a=0;a<=this.detailX;a++){e=a/this.detailX;var s=2*Math.PI*e,h=Math.PI*t-Math.PI/2;o=new r.Vector(n*Math.cos(h)*Math.sin(s),n*Math.sin(h),n*Math.cos(h)*Math.cos(s)),this.vertices.push(o),this.uvs.push([e,t])}}},h=new r.Geometry(o,i,s);h.computeFaces().computeNormals().averageNormals().averagePoleNormals(),this._renderer.createBuffers(a,h)}return this._renderer.drawBuffers(a),this};var n=function(e,t,n,o,i,a,s){o=3>o?3:o,i=1>i?1:i,a=void 0===a?!0:a,s=void 0===s?!0:s;var h,l,u=(a?2:0)+(s?2:0),p=o+1,c=Math.atan2(e-t,n),f=a?-2:0,d=i+(s?2:0);for(h=f;d>=h;++h){var m,g=h/i,y=n*g;for(0>h?(y=0,g=1,m=e):h>i?(y=n,g=1,m=t):m=e+(t-e)*(h/i),(-2===h||h===i+2)&&(m=0,g=0),y-=n/2,l=0;p>l;++l)this.vertices.push(new r.Vector(Math.sin(l*Math.PI*2/o)*m,y,Math.cos(l*Math.PI*2/o)*m)),this.vertexNormals.push(new r.Vector(0>h||h>i?0:Math.sin(l*Math.PI*2/o)*Math.cos(c),0>h?-1:h>i?1:Math.sin(c),0>h||h>i?0:Math.cos(l*Math.PI*2/o)*Math.cos(c))),this.uvs.push([l/o,g])}for(h=0;i+u>h;++h)for(l=0;o>l;++l)this.faces.push([p*(h+0)+0+l,p*(h+0)+1+l,p*(h+1)+1+l]),this.faces.push([p*(h+0)+0+l,p*(h+1)+1+l,p*(h+1)+0+l])};r.prototype.cylinder=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];var o=e[0]||50,i=e[1]||o,a="number"==typeof e[2]?e[2]:24,s="number"==typeof e[3]?e[3]:16,h="cylinder|"+o+"|"+i+"|"+a+"|"+s;if(!this._renderer.geometryInHash(h)){var l=new r.Geometry(a,s);n.call(l,o,o,i,a,s,!0,!0),l.computeNormals(),this._renderer.createBuffers(h,l)}return this._renderer.drawBuffers(h),this},r.prototype.cone=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];var o=e[0]||50,i=e[1]||o,a="number"==typeof e[2]?e[2]:24,s="number"==typeof e[3]?e[3]:16,h="cone|"+o+"|"+i+"|"+a+"|"+s;if(!this._renderer.geometryInHash(h)){var l=new r.Geometry(a,s);n.call(l,o,0,i,a,s,!0,!0),l.computeNormals(),this._renderer.createBuffers(h,l)}return this._renderer.drawBuffers(h),this},r.prototype.ellipsoid=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];var n="number"==typeof e[3]?e[3]:24,o="number"==typeof e[4]?e[4]:24,i=e[0]||50,a=e[1]||i,s=e[2]||i,h="ellipsoid|"+i+"|"+a+"|"+s+"|"+n+"|"+o;if(!this._renderer.geometryInHash(h)){var l=function(){for(var e,t,n,o=0;o<=this.detailY;o++){t=o/this.detailY;for(var h=0;h<=this.detailX;h++){e=h/this.detailX;var l=2*Math.PI*e,u=Math.PI*t-Math.PI/2;n=new r.Vector(i*Math.cos(u)*Math.sin(l),a*Math.sin(u),s*Math.cos(u)*Math.cos(l)),this.vertices.push(n),this.uvs.push([e,t])}}},u=new r.Geometry(n,o,l);u.computeFaces().computeNormals(),this._renderer.createBuffers(h,u)}return this._renderer.drawBuffers(h),this},r.prototype.torus=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];var n="number"==typeof e[2]?e[2]:24,o="number"==typeof e[3]?e[3]:16,i=e[0]||50,a=e[1]||10,s="torus|"+i+"|"+a+"|"+n+"|"+o;if(!this._renderer.geometryInHash(s)){var h=function(){for(var e,t,n,o=0;o<=this.detailY;o++){t=o/this.detailY;for(var s=0;s<=this.detailX;s++){e=s/this.detailX;var h=2*Math.PI*e,l=2*Math.PI*t;n=new r.Vector((i+a*Math.cos(l))*Math.cos(h),(i+a*Math.cos(l))*Math.sin(h),a*Math.sin(l)),this.vertices.push(n),this.uvs.push([e,t])}}},l=new r.Geometry(n,o,h);l.computeFaces().computeNormals().averageNormals(),this._renderer.createBuffers(s,l)}return this._renderer.drawBuffers(s),this},r.RendererGL.prototype.point=function(){return console.log("point not yet implemented in webgl"),this},r.RendererGL.prototype.triangle=function(e){var t=e[0],n=e[1],o=e[2],i=e[3],a=e[4],s=e[5],h="tri|"+t+"|"+n+"|"+o+"|"+i+"|"+a+"|"+s;if(!this.geometryInHash(h)){var l=function(){var e=[];e.push(new r.Vector(t,n,0)),e.push(new r.Vector(o,i,0)),e.push(new r.Vector(a,s,0)),this.vertices=e,this.faces=[[0,1,2]],this.uvs=[[0,0],[0,1],[1,1]]},u=new r.Geometry(1,1,l);u.computeNormals(),this.createBuffers(h,u)}return this.drawBuffers(h),this},r.RendererGL.prototype.ellipse=function(e){var t=e[0],n=e[1],o=e[2],i=e[3],a=e[4]||24,s=e[5]||16,h="ellipse|"+e[0]+"|"+e[1]+"|"+e[2]+"|"+e[3];if(!this.geometryInHash(h)){var l=function(){for(var e,a,s,h=t+.5*o,l=n+.5*i,u=0;u<=this.detailY;u++){a=u/this.detailY;for(var p=0;p<=this.detailX;p++){e=p/this.detailX;var c=2*Math.PI*e;if(0===a)s=new r.Vector(h,l,0);else{var f=h+.5*o*Math.cos(c),d=l+.5*i*Math.sin(c);s=new r.Vector(f,d,0)}this.vertices.push(s),this.uvs.push([e,a])}}},u=new r.Geometry(a,s,l);u.computeFaces().computeNormals(),this.createBuffers(h,u)}return this.drawBuffers(h),this},r.RendererGL.prototype.rect=function(e){var t="rect|"+e[0]+"|"+e[1]+"|"+e[2]+"|"+e[3],n=e[0],o=e[1],i=e[2],a=e[3],s=e[4]||24,h=e[5]||16;if(!this.geometryInHash(t)){var l=function(){for(var e,t,s,h=0;h<=this.detailY;h++){t=h/this.detailY;for(var l=0;l<=this.detailX;l++)e=l/this.detailX,s=new r.Vector(n+i*e,o+a*t,0),this.vertices.push(s),this.uvs.push([e,t])}},u=new r.Geometry(s,h,l);u.computeFaces().computeNormals(),this.createBuffers(t,u)}return this.drawBuffers(t),this},r.RendererGL.prototype.quad=function(){for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];var n=e[0],o=e[1],i=e[2],a=e[3],s=e[4],h=e[5],l=e[6],u=e[7],p="quad|"+n+"|"+o+"|"+i+"|"+a+"|"+s+"|"+h+"|"+l+"|"+u;if(!this.geometryInHash(p)){var c=function(){this.vertices.push(new r.Vector(n,o,0)),this.vertices.push(new r.Vector(i,a,0)),this.vertices.push(new r.Vector(s,h,0)),this.vertices.push(new r.Vector(l,u,0)),this.uvs.push([0,0],[1,0],[1,1],[0,1])},f=new r.Geometry(2,2,c);f.computeNormals(),f.faces=[[0,1,2],[2,3,0]],this.createBuffers(p,f)}return this.drawBuffers(p),this},r.RendererGL.prototype.bezier=function(e){var t=e[12]||20;this.beginShape();for(var r=[0,0,0,0],n=[0,0,0],o=0;t>=o;o++)r[0]=Math.pow(1-o/t,3),r[1]=3*(o/t)*Math.pow(1-o/t,2),r[2]=3*Math.pow(o/t,2)*(1-o/t),r[3]=Math.pow(o/t,3),n[0]=e[0]*r[0]+e[3]*r[1]+e[6]*r[2]+e[9]*r[3],n[1]=e[1]*r[0]+e[4]*r[1]+e[7]*r[2]+e[10]*r[3],n[2]=e[2]*r[0]+e[5]*r[1]+e[8]*r[2]+e[11]*r[3],this.vertex(n[0],n[1],n[2]);return this.endShape(),this},r.RendererGL.prototype.curve=function(e){var t=e[12];this.beginShape();for(var r=[0,0,0,0],n=[0,0,0],o=0;t>=o;o++)r[0]=.5*Math.pow(o/t,3),r[1]=.5*Math.pow(o/t,2),r[2]=o/t*.5,r[3]=.5,n[0]=r[0]*(-e[0]+3*e[3]-3*e[6]+e[9])+r[1]*(2*e[0]-5*e[3]+4*e[6]-e[9])+r[2]*(-e[0]+e[6])+2*r[3]*e[3],n[1]=r[0]*(-e[1]+3*e[4]-3*e[7]+e[10])+r[1]*(2*e[1]-5*e[4]+4*e[7]-e[10])+r[2]*(-e[1]+e[7])+2*r[3]*e[4],n[2]=r[0]*(-e[2]+3*e[5]-3*e[8]+e[11])+r[1]*(2*e[2]-5*e[5]+4*e[8]-e[11])+r[2]*(-e[2]+e[8])+2*r[3]*e[5],this.vertex(n[0],n[1],n[2]);return this.endShape(),this},t.exports=r},{"../core/core":37,"./p5.Geometry":82}],88:[function(e,t){t.exports={immediateVert:"attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\nuniform float uPointSize;\n\nvarying vec4 vColor;\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution *vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n  gl_PointSize = uPointSize;\n}\n",vertexColorVert:"attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n}\n",vertexColorFrag:"precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}",normalVert:"attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform float uResolution;\n\nvarying vec3 vVertexNormal;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vVertexNormal = vec3( uNormalMatrix * aNormal );\n  vVertTexCoord = aTexCoord;\n}\n",normalFrag:"precision mediump float;\nvarying vec3 vVertexNormal;\nvoid main(void) {\n  gl_FragColor = vec4(vVertexNormal, 1.0);\n}",basicFrag:"precision mediump float;\nvarying vec3 vVertexNormal;\nuniform vec4 uMaterialColor;\nvoid main(void) {\n  gl_FragColor = uMaterialColor;\n}",lightVert:"attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform float uResolution;\nuniform int uAmbientLightCount;\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nuniform vec3 uAmbientColor[8];\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nvarying vec3 vVertexNormal;\nvarying vec2 vVertTexCoord;\nvarying vec3 vLightWeighting;\n\nvec3 ambientLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 directionalLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor2 = vec3(0.0, 0.0, 0.0);\n\nvoid main(void){\n\n  vec4 positionVec4 = vec4(aPosition / uResolution, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\n  vec3 vertexNormal = vec3( uNormalMatrix * aNormal );\n  vVertexNormal = vertexNormal;\n  vVertTexCoord = aTexCoord;\n\n  vec4 mvPosition = uModelViewMatrix * vec4(aPosition / uResolution, 1.0);\n  vec3 eyeDirection = normalize(-mvPosition.xyz);\n\n  float shininess = 32.0;\n  float specularFactor = 2.0;\n  float diffuseFactor = 0.3;\n\n  for(int i = 0; i < 8; i++){\n    if(uAmbientLightCount == i) break;\n    ambientLightFactor += uAmbientColor[i];\n  }\n\n  for(int j = 0; j < 8; j++){\n    if(uDirectionalLightCount == j) break;\n    vec3 dir = uLightingDirection[j];\n    float directionalLightWeighting = max(dot(vertexNormal, dir), 0.0);\n    directionalLightFactor += uDirectionalColor[j] * directionalLightWeighting;\n  }\n\n  for(int k = 0; k < 8; k++){\n    if(uPointLightCount == k) break;\n    vec3 loc = uPointLightLocation[k];\n    //loc = loc / uResolution;\n    vec3 lightDirection = normalize(loc - mvPosition.xyz);\n\n    float directionalLightWeighting = max(dot(vertexNormal, lightDirection), 0.0);\n    pointLightFactor += uPointLightColor[k] * directionalLightWeighting;\n\n    //factor2 for specular\n    vec3 reflectionDirection = reflect(-lightDirection, vertexNormal);\n    float specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n\n    pointLightFactor2 += uPointLightColor[k] * (specularFactor * specularLightWeighting\n      +  directionalLightWeighting * diffuseFactor);\n  }\n\n  if(!uSpecular){\n    vLightWeighting =  ambientLightFactor + directionalLightFactor + pointLightFactor;\n  }else{\n    vLightWeighting = ambientLightFactor + directionalLightFactor + pointLightFactor2;\n  }\n\n}\n",lightTextureFrag:"precision mediump float;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\n\nvarying vec3 vLightWeighting;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  if(!isTexture){\n    gl_FragColor = vec4(vec3(uMaterialColor.rgb * vLightWeighting), uMaterialColor.a);\n  }else{\n    vec4 textureColor = texture2D(uSampler, vVertTexCoord);\n    if(vLightWeighting == vec3(0., 0., 0.)){\n      gl_FragColor = textureColor;\n    }else{\n      gl_FragColor = vec4(vec3(textureColor.rgb * vLightWeighting), textureColor.a);\n    }\n  }\n}"}},{}]},{},[28])(28)});
/*
Created by http://benmoren.com
Some functions and code modified version from http://www.jeffreythompson.org/collision-detection
GNU LGPL 2.1 License
Version 0.1 | January 10th, 2016
*/
console.log("### p5.collide ###")

p5.prototype._collideDebug = false;

p5.prototype.collideDebug = function(debugMode){
    _collideDebug = debugMode;
}

/*~++~+~+~++~+~++~++~+~+~ 2D ~+~+~++~+~++~+~+~+~+~+~+~+~+~+~+*/

p5.prototype.collideRectRect = function (x, y, w, h, x2, y2, w2, h2) {
  //2d
  //add in a thing to detect rectMode CENTER
  if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
        return true;
  }
  return false;
};

p5.prototype.collideRectCircle = function (rx, ry, rw, rh, cx, cy, diameter) {
  //2d
  // temporary variables to set edges for testing
  var testX = cx;
  var testY = cy;

  // which edge is closest?
  if (cx < rx){         testX = rx       // left edge
  }else if (cx > rx+rw){ testX = rx+rw  }   // right edge

  if (cy < ry){         testY = ry       // top edge
  }else if (cy > ry+rh){ testY = ry+rh }   // bottom edge

  // // get distance from closest edges
  var distance = dist(cx,cy,testX,testY)

  // if the distance is less than the radius, collision!
  if (distance <= diameter/2) {
    return true;
  }
  return false;
};

p5.prototype.collideCircleCircle = function (x, y,d, x2, y2, d2) {
//2d
  if( dist(x,y,x2,y2) <= (d/2)+(d2/2) ){
    return true;
  }
  return false;
};

p5.prototype.collidePointCircle = function (x, y, cx, cy, d) {
//2d
if( dist(x,y,cx,cy) <= d/2 ){
  return true;
}
return false;
};

p5.prototype.collidePointRect = function (pointX, pointY, x, y, xW, yW) {
//2d
if (pointX >= x &&         // right of the left edge AND
    pointX <= x + xW &&    // left of the right edge AND
    pointY >= y &&         // below the top AND
    pointY <= y + yW) {    // above the bottom
        return true;
}
return false;
};

p5.prototype.collidePointLine = function(px,py,x1,y1,x2,y2, buffer){
  // get distance from the point to the two ends of the line
var d1 = dist(px,py, x1,y1);
var d2 = dist(px,py, x2,y2);

// get the length of the line
var lineLen = dist(x1,y1, x2,y2);

// since floats are so minutely accurate, add a little buffer zone that will give collision
if (buffer === undefined){ buffer = 0.1; }   // higher # = less accurate

// if the two distances are equal to the line's length, the point is on the line!
// note we use the buffer here to give a range, rather than one #
if (d1+d2 >= lineLen-buffer && d1+d2 <= lineLen+buffer) {
  return true;
}
return false;
}

p5.prototype.collideLineCircle = function( x1,  y1,  x2,  y2,  cx,  cy,  diameter) {
  // is either end INSIDE the circle?
  // if so, return true immediately
  var inside1 = collidePointCircle(x1,y1, cx,cy,diameter);
  var inside2 = collidePointCircle(x2,y2, cx,cy,diameter);
  if (inside1 || inside2) return true;

  // get length of the line
  var distX = x1 - x2;
  var distY = y1 - y2;
  var len = sqrt( (distX*distX) + (distY*distY) );

  // get dot product of the line and circle
  var dot = ( ((cx-x1)*(x2-x1)) + ((cy-y1)*(y2-y1)) ) / pow(len,2);

  // find the closest point on the line
  var closestX = x1 + (dot * (x2-x1));
  var closestY = y1 + (dot * (y2-y1));

  // is this point actually on the line segment?
  // if so keep going, but if not, return false
  var onSegment = collidePointLine(closestX,closestY,x1,y1,x2,y2);
  if (!onSegment) return false;

  // draw a debug circle at the closest point on the line
  if(_collideDebug){
    ellipse(closestX, closestY,10,10);
  }

  // get distance to closest point
  distX = closestX - cx;
  distY = closestY - cy;
  var distance = sqrt( (distX*distX) + (distY*distY) );

  if (distance <= diameter/2) {
    return true;
  }
  return false;
}

p5.prototype.collideLineLine = function(x1, y1, x2, y2, x3, y3, x4, y4,calcIntersection) {

  var intersection;

  // calculate the distance to intersection point
  var uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
  var uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));

  // if uA and uB are between 0-1, lines are colliding
  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {

    if(_collideDebug || calcIntersection){
      // calc the point where the lines meet
      var intersectionX = x1 + (uA * (x2-x1));
      var intersectionY = y1 + (uA * (y2-y1));
    }

    if(_collideDebug){
      ellipse(intersectionX,intersectionY,10,10);
    }

    if(calcIntersection){
      intersection = {
        "x":intersectionX,
        "y":intersectionY
      }
      return intersection;
    }else{
      return true;
    }
  }
  if(calcIntersection){
    intersection = {
      "x":false,
      "y":false
    }
    return intersection;
  }
  return false;
}

p5.prototype.collideLineRect = function(x1, y1, x2, y2, rx, ry, rw, rh, calcIntersection) {

  // check if the line has hit any of the rectangle's sides. uses the collideLineLine function above
  var left, right, top, bottom, intersection;

  if(calcIntersection){
     left =   collideLineLine(x1,y1,x2,y2, rx,ry,rx, ry+rh,true);
     right =  collideLineLine(x1,y1,x2,y2, rx+rw,ry, rx+rw,ry+rh,true);
     top =    collideLineLine(x1,y1,x2,y2, rx,ry, rx+rw,ry,true);
     bottom = collideLineLine(x1,y1,x2,y2, rx,ry+rh, rx+rw,ry+rh,true);
     intersection = {
        "left" : left,
        "right" : right,
        "top" : top,
        "bottom" : bottom
    }
  }else{
    //return booleans
     left =   collideLineLine(x1,y1,x2,y2, rx,ry,rx, ry+rh);
     right =  collideLineLine(x1,y1,x2,y2, rx+rw,ry, rx+rw,ry+rh);
     top =    collideLineLine(x1,y1,x2,y2, rx,ry, rx+rw,ry);
     bottom = collideLineLine(x1,y1,x2,y2, rx,ry+rh, rx+rw,ry+rh);
  }

  // if ANY of the above are true, the line has hit the rectangle
  if (left || right || top || bottom) {
    if(calcIntersection){
      return intersection;
    }
    return true;
  }
  return false;
}


p5.prototype.collidePointPoly = function(px, py, vertices) {
  var collision = false;

  // go through each of the vertices, plus the next vertex in the list
  var next = 0;
  for (var current=0; current<vertices.length; current++) {

    // get next vertex in list if we've hit the end, wrap around to 0
    next = current+1;
    if (next == vertices.length) next = 0;

    // get the PVectors at our current position this makes our if statement a little cleaner
    var vc = vertices[current];    // c for "current"
    var vn = vertices[next];       // n for "next"

    // compare position, flip 'collision' variable back and forth
    if (((vc.y > py && vn.y < py) || (vc.y < py && vn.y > py)) &&
         (px < (vn.x-vc.x)*(py-vc.y) / (vn.y-vc.y)+vc.x)) {
            collision = !collision;
    }
  }
  return collision;
}

// POLYGON/CIRCLE
p5.prototype.collideCirclePoly = function(cx, cy, diameter, vertices, interior) {

  if (interior == undefined){
    interior = false;
  }

  // go through each of the vertices, plus the next vertex in the list
  var next = 0;
  for (var current=0; current<vertices.length; current++) {

    // get next vertex in list if we've hit the end, wrap around to 0
    next = current+1;
    if (next == vertices.length) next = 0;

    // get the PVectors at our current position this makes our if statement a little cleaner
    var vc = vertices[current];    // c for "current"
    var vn = vertices[next];       // n for "next"

    // check for collision between the circle and a line formed between the two vertices
    var collision = collideLineCircle(vc.x,vc.y, vn.x,vn.y, cx,cy,diameter);
    if (collision) return true;
  }

  // test if the center of the circle is inside the polygon
  if(interior == true){
    var centerInside = collidePointPoly(cx,cy, vertices);
    if (centerInside) return true;
  }

  // otherwise, after all that, return false
  return false;
}

p5.prototype.collideRectPoly = function( rx, ry, rw, rh, vertices, interior) {
  if (interior == undefined){
    interior = false;
  }

  // go through each of the vertices, plus the next vertex in the list
  var next = 0;
  for (var current=0; current<vertices.length; current++) {

    // get next vertex in list if we've hit the end, wrap around to 0
    next = current+1;
    if (next == vertices.length) next = 0;

    // get the PVectors at our current position this makes our if statement a little cleaner
    var vc = vertices[current];    // c for "current"
    var vn = vertices[next];       // n for "next"

    // check against all four sides of the rectangle
    var collision = collideLineRect(vc.x,vc.y,vn.x,vn.y, rx,ry,rw,rh);
    if (collision) return true;

    // optional: test if the rectangle is INSIDE the polygon note that this iterates all sides of the polygon again, so only use this if you need to
    if(interior == true){
      var inside = collidePointPoly(rx,ry, vertices);
      if (inside) return true;
    }
  }

  return false;
}

p5.prototype.collideLinePoly = function(x1, y1, x2, y2, vertices) {

  // go through each of the vertices, plus the next vertex in the list
  var next = 0;
  for (var current=0; current<vertices.length; current++) {

    // get next vertex in list if we've hit the end, wrap around to 0
    next = current+1;
    if (next == vertices.length) next = 0;

    // get the PVectors at our current position extract X/Y coordinates from each
    var x3 = vertices[current].x;
    var y3 = vertices[current].y;
    var x4 = vertices[next].x;
    var y4 = vertices[next].y;

    // do a Line/Line comparison if true, return 'true' immediately and stop testing (faster)
    var hit = collideLineLine(x1, y1, x2, y2, x3, y3, x4, y4);
    if (hit) {
      return true;
    }
  }
  // never got a hit
  return false;
}

p5.prototype.collidePolyPoly = function(p1, p2, interior) {
  if (interior == undefined){
    interior = false;
  }

  // go through each of the vertices, plus the next vertex in the list
  var next = 0;
  for (var current=0; current<p1.length; current++) {

    // get next vertex in list, if we've hit the end, wrap around to 0
    next = current+1;
    if (next == p1.length) next = 0;

    // get the PVectors at our current position this makes our if statement a little cleaner
    var vc = p1[current];    // c for "current"
    var vn = p1[next];       // n for "next"

    //use these two points (a line) to compare to the other polygon's vertices using polyLine()
    var collision = collideLinePoly(vc.x,vc.y,vn.x,vn.y,p2);
    if (collision) return true;

    //check if the 2nd polygon is INSIDE the first
    if(interior == true){
      collision = collidePointPoly(p2[0].x, p2[0].y, p1);
      if (collision) return true;
    }
  }

  return false;
}

p5.prototype.collidePointTriangle = function(px, py, x1, y1, x2, y2, x3, y3) {

  // get the area of the triangle
  var areaOrig = abs( (x2-x1)*(y3-y1) - (x3-x1)*(y2-y1) );

  // get the area of 3 triangles made between the point and the corners of the triangle
  var area1 =    abs( (x1-px)*(y2-py) - (x2-px)*(y1-py) );
  var area2 =    abs( (x2-px)*(y3-py) - (x3-px)*(y2-py) );
  var area3 =    abs( (x3-px)*(y1-py) - (x1-px)*(y3-py) );

  // if the sum of the three areas equals the original, we're inside the triangle!
  if (area1 + area2 + area3 == areaOrig) {
    return true;
  }
  return false;
}

p5.prototype.collidePointPoint = function (x,y,x2,y2, buffer) {
    if(buffer == undefined){
      buffer = 0;
    }

    if(dist(x,y,x2,y2) <= buffer){
      return true;
    }

  return false;
};

/*! p5.sound.js v0.3.1 2016-09-29 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define('p5.sound', ['p5'], function (p5) { (factory(p5));});
  else if (typeof exports === 'object')
    factory(require('../p5'));
  else
    factory(root['p5']);
}(this, function (p5) {
  /**
 *  p5.sound extends p5 with <a href="http://caniuse.com/audio-api"
 *  target="_blank">Web Audio</a> functionality including audio input,
 *  playback, analysis and synthesis.
 *  <br/><br/>
 *  <a href="#/p5.SoundFile"><b>p5.SoundFile</b></a>: Load and play sound files.<br/>
 *  <a href="#/p5.Amplitude"><b>p5.Amplitude</b></a>: Get the current volume of a sound.<br/>
 *  <a href="#/p5.AudioIn"><b>p5.AudioIn</b></a>: Get sound from an input source, typically
 *    a computer microphone.<br/>
 *  <a href="#/p5.FFT"><b>p5.FFT</b></a>: Analyze the frequency of sound. Returns
 *    results from the frequency spectrum or time domain (waveform).<br/>
 *  <a href="#/p5.Oscillator"><b>p5.Oscillator</b></a>: Generate Sine,
 *    Triangle, Square and Sawtooth waveforms. Base class of
 *    <a href="#/p5.Noise">p5.Noise</a> and <a href="#/p5.Pulse">p5.Pulse</a>.
 *    <br/>
 *  <a href="#/p5.Env"><b>p5.Env</b></a>: An Envelope is a series
 *    of fades over time. Often used to control an object's
 *    output gain level as an "ADSR Envelope" (Attack, Decay,
 *    Sustain, Release). Can also modulate other parameters.<br/>
 *  <a href="#/p5.Delay"><b>p5.Delay</b></a>: A delay effect with
 *    parameters for feedback, delayTime, and lowpass filter.<br/>
 *  <a href="#/p5.Filter"><b>p5.Filter</b></a>: Filter the frequency range of a
 *    sound.
 *  <br/>
 *  <a href="#/p5.Reverb"><b>p5.Reverb</b></a>: Add reverb to a sound by specifying
 *    duration and decay. <br/>
 *  <b><a href="#/p5.Convolver">p5.Convolver</a>:</b> Extends
 *  <a href="#/p5.Reverb">p5.Reverb</a> to simulate the sound of real
 *    physical spaces through convolution.<br/>
 *  <b><a href="#/p5.SoundRecorder">p5.SoundRecorder</a></b>: Record sound for playback 
 *    / save the .wav file.
 *  <b><a href="#/p5.Phrase">p5.Phrase</a></b>, <b><a href="#/p5.Part">p5.Part</a></b> and
 *  <b><a href="#/p5.Score">p5.Score</a></b>: Compose musical sequences.
 *  <br/><br/>
 *  p5.sound is on <a href="https://github.com/therewasaguy/p5.sound/">GitHub</a>.
 *  Download the latest version 
 *  <a href="https://github.com/therewasaguy/p5.sound/blob/master/lib/p5.sound.js">here</a>.
 *  
 *  @module p5.sound
 *  @submodule p5.sound
 *  @for p5.sound
 *  @main
 */
/**
 *  p5.sound developed by Jason Sigal for the Processing Foundation, Google Summer of Code 2014. The MIT License (MIT).
 *  
 *  http://github.com/therewasaguy/p5.sound
 *
 *  Some of the many audio libraries & resources that inspire p5.sound:
 *   - TONE.js (c) Yotam Mann, 2014. Licensed under The MIT License (MIT). https://github.com/TONEnoTONE/Tone.js
 *   - buzz.js (c) Jay Salvat, 2013. Licensed under The MIT License (MIT). http://buzz.jaysalvat.com/
 *   - Boris Smus Web Audio API book, 2013. Licensed under the Apache License http://www.apache.org/licenses/LICENSE-2.0
 *   - wavesurfer.js https://github.com/katspaugh/wavesurfer.js
 *   - Web Audio Components by Jordan Santell https://github.com/web-audio-components
 *   - Wilm Thoben's Sound library for Processing https://github.com/processing/processing/tree/master/java/libraries/sound
 *   
 *   Web Audio API: http://w3.org/TR/webaudio/
 */
var sndcore;
sndcore = function () {
  'use strict';
  /* AudioContext Monkeypatch
     Copyright 2013 Chris Wilson
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
         http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
  */
  (function (global, exports, perf) {
    exports = exports || {};
    'use strict';
    function fixSetTarget(param) {
      if (!param)
        // if NYI, just return
        return;
      if (!param.setTargetAtTime)
        param.setTargetAtTime = param.setTargetValueAtTime;
    }
    if (window.hasOwnProperty('webkitAudioContext') && !window.hasOwnProperty('AudioContext')) {
      window.AudioContext = webkitAudioContext;
      if (!AudioContext.prototype.hasOwnProperty('createGain'))
        AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
      if (!AudioContext.prototype.hasOwnProperty('createDelay'))
        AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode;
      if (!AudioContext.prototype.hasOwnProperty('createScriptProcessor'))
        AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode;
      if (!AudioContext.prototype.hasOwnProperty('createPeriodicWave'))
        AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;
      AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain;
      AudioContext.prototype.createGain = function () {
        var node = this.internal_createGain();
        fixSetTarget(node.gain);
        return node;
      };
      AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay;
      AudioContext.prototype.createDelay = function (maxDelayTime) {
        var node = maxDelayTime ? this.internal_createDelay(maxDelayTime) : this.internal_createDelay();
        fixSetTarget(node.delayTime);
        return node;
      };
      AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource;
      AudioContext.prototype.createBufferSource = function () {
        var node = this.internal_createBufferSource();
        if (!node.start) {
          node.start = function (when, offset, duration) {
            if (offset || duration)
              this.noteGrainOn(when || 0, offset, duration);
            else
              this.noteOn(when || 0);
          };
        } else {
          node.internal_start = node.start;
          node.start = function (when, offset, duration) {
            if (typeof duration !== 'undefined')
              node.internal_start(when || 0, offset, duration);
            else
              node.internal_start(when || 0, offset || 0);
          };
        }
        if (!node.stop) {
          node.stop = function (when) {
            this.noteOff(when || 0);
          };
        } else {
          node.internal_stop = node.stop;
          node.stop = function (when) {
            node.internal_stop(when || 0);
          };
        }
        fixSetTarget(node.playbackRate);
        return node;
      };
      AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor;
      AudioContext.prototype.createDynamicsCompressor = function () {
        var node = this.internal_createDynamicsCompressor();
        fixSetTarget(node.threshold);
        fixSetTarget(node.knee);
        fixSetTarget(node.ratio);
        fixSetTarget(node.reduction);
        fixSetTarget(node.attack);
        fixSetTarget(node.release);
        return node;
      };
      AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter;
      AudioContext.prototype.createBiquadFilter = function () {
        var node = this.internal_createBiquadFilter();
        fixSetTarget(node.frequency);
        fixSetTarget(node.detune);
        fixSetTarget(node.Q);
        fixSetTarget(node.gain);
        return node;
      };
      if (AudioContext.prototype.hasOwnProperty('createOscillator')) {
        AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator;
        AudioContext.prototype.createOscillator = function () {
          var node = this.internal_createOscillator();
          if (!node.start) {
            node.start = function (when) {
              this.noteOn(when || 0);
            };
          } else {
            node.internal_start = node.start;
            node.start = function (when) {
              node.internal_start(when || 0);
            };
          }
          if (!node.stop) {
            node.stop = function (when) {
              this.noteOff(when || 0);
            };
          } else {
            node.internal_stop = node.stop;
            node.stop = function (when) {
              node.internal_stop(when || 0);
            };
          }
          if (!node.setPeriodicWave)
            node.setPeriodicWave = node.setWaveTable;
          fixSetTarget(node.frequency);
          fixSetTarget(node.detune);
          return node;
        };
      }
    }
    if (window.hasOwnProperty('webkitOfflineAudioContext') && !window.hasOwnProperty('OfflineAudioContext')) {
      window.OfflineAudioContext = webkitOfflineAudioContext;
    }
    return exports;
  }(window));
  // <-- end MonkeyPatch.
  // Create the Audio Context
  var audiocontext = new window.AudioContext();
  /**
   * <p>Returns the Audio Context for this sketch. Useful for users
   * who would like to dig deeper into the <a target='_blank' href=
   * 'http://webaudio.github.io/web-audio-api/'>Web Audio API
   * </a>.</p>
   *
   * @method getAudioContext
   * @return {Object}    AudioContext for this sketch
   */
  p5.prototype.getAudioContext = function () {
    return audiocontext;
  };
  // Polyfill for AudioIn, also handled by p5.dom createCapture
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  /**
   * Determine which filetypes are supported (inspired by buzz.js)
   * The audio element (el) will only be used to test browser support for various audio formats
   */
  var el = document.createElement('audio');
  p5.prototype.isSupported = function () {
    return !!el.canPlayType;
  };
  var isOGGSupported = function () {
    return !!el.canPlayType && el.canPlayType('audio/ogg; codecs="vorbis"');
  };
  var isMP3Supported = function () {
    return !!el.canPlayType && el.canPlayType('audio/mpeg;');
  };
  var isWAVSupported = function () {
    return !!el.canPlayType && el.canPlayType('audio/wav; codecs="1"');
  };
  var isAACSupported = function () {
    return !!el.canPlayType && (el.canPlayType('audio/x-m4a;') || el.canPlayType('audio/aac;'));
  };
  var isAIFSupported = function () {
    return !!el.canPlayType && el.canPlayType('audio/x-aiff;');
  };
  p5.prototype.isFileSupported = function (extension) {
    switch (extension.toLowerCase()) {
    case 'mp3':
      return isMP3Supported();
    case 'wav':
      return isWAVSupported();
    case 'ogg':
      return isOGGSupported();
    case 'aac', 'm4a', 'mp4':
      return isAACSupported();
    case 'aif', 'aiff':
      return isAIFSupported();
    default:
      return false;
    }
  };
  // if it is iOS, we have to have a user interaction to start Web Audio
  // http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
  var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
  if (iOS) {
    var iosStarted = false;
    var startIOS = function () {
      if (iosStarted)
        return;
      // create empty buffer
      var buffer = audiocontext.createBuffer(1, 1, 22050);
      var source = audiocontext.createBufferSource();
      source.buffer = buffer;
      // connect to output (your speakers)
      source.connect(audiocontext.destination);
      // play the file
      source.start(0);
      console.log('start ios!');
      if (audiocontext.state === 'running') {
        iosStarted = true;
      }
    };
    document.addEventListener('touchend', startIOS, false);
    document.addEventListener('touchstart', startIOS, false);
  }
}();
var master;
master = function () {
  'use strict';
  /**
   * Master contains AudioContext and the master sound output.
   */
  var Master = function () {
    var audiocontext = p5.prototype.getAudioContext();
    this.input = audiocontext.createGain();
    this.output = audiocontext.createGain();
    //put a hard limiter on the output
    this.limiter = audiocontext.createDynamicsCompressor();
    this.limiter.threshold.value = 0;
    this.limiter.ratio.value = 20;
    this.audiocontext = audiocontext;
    this.output.disconnect();
    // an array of input sources
    this.inputSources = [];
    // connect input to limiter
    this.input.connect(this.limiter);
    // connect limiter to output
    this.limiter.connect(this.output);
    // meter is just for global Amplitude / FFT analysis
    this.meter = audiocontext.createGain();
    this.fftMeter = audiocontext.createGain();
    this.output.connect(this.meter);
    this.output.connect(this.fftMeter);
    // connect output to destination
    this.output.connect(this.audiocontext.destination);
    // an array of all sounds in the sketch
    this.soundArray = [];
    // an array of all musical parts in the sketch
    this.parts = [];
    // file extensions to search for
    this.extensions = [];
  };
  // create a single instance of the p5Sound / master output for use within this sketch
  var p5sound = new Master();
  /**
   * Returns a number representing the master amplitude (volume) for sound
   * in this sketch.
   *
   * @method getMasterVolume
   * @return {Number} Master amplitude (volume) for sound in this sketch.
   *                  Should be between 0.0 (silence) and 1.0.
   */
  p5.prototype.getMasterVolume = function () {
    return p5sound.output.gain.value;
  };
  /**
   *  <p>Scale the output of all sound in this sketch</p>
   *  Scaled between 0.0 (silence) and 1.0 (full volume).
   *  1.0 is the maximum amplitude of a digital sound, so multiplying
   *  by greater than 1.0 may cause digital distortion. To
   *  fade, provide a <code>rampTime</code> parameter. For more
   *  complex fades, see the Env class.
   *
   *  Alternately, you can pass in a signal source such as an
   *  oscillator to modulate the amplitude with an audio signal.
   *
   *  <p><b>How This Works</b>: When you load the p5.sound module, it
   *  creates a single instance of p5sound. All sound objects in this
   *  module output to p5sound before reaching your computer's output.
   *  So if you change the amplitude of p5sound, it impacts all of the
   *  sound in this module.</p>
   *
   *  <p>If no value is provided, returns a Web Audio API Gain Node</p>
   *
   *  @method  masterVolume
   *  @param {Number|Object} volume  Volume (amplitude) between 0.0
   *                                     and 1.0 or modulating signal/oscillator
   *  @param {Number} [rampTime]  Fade for t seconds
   *  @param {Number} [timeFromNow]  Schedule this event to happen at
   *                                 t seconds in the future
   */
  p5.prototype.masterVolume = function (vol, rampTime, tFromNow) {
    if (typeof vol === 'number') {
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var now = p5sound.audiocontext.currentTime;
      var currentVol = p5sound.output.gain.value;
      p5sound.output.gain.cancelScheduledValues(now + tFromNow);
      p5sound.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
      p5sound.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
    } else if (vol) {
      vol.connect(p5sound.output.gain);
    } else {
      // return the Gain Node
      return p5sound.output.gain;
    }
  };
  /**
   *  p5.soundOut is the p5.sound master output. It sends output to
   *  the destination of this window's web audio context. It contains
   *  Web Audio API nodes including a dyanmicsCompressor (<code>.limiter</code>),
   *  and Gain Nodes for <code>.input</code> and <code>.output</code>.
   *
   *  @property p5.soundOut
   *  @type {Object}
   */
  p5.soundOut = p5sound;
  /**
   *  a silent connection to the DesinationNode
   *  which will ensure that anything connected to it
   *  will not be garbage collected
   *
   *  @private
   */
  p5.soundOut._silentNode = p5sound.audiocontext.createGain();
  p5.soundOut._silentNode.gain.value = 0;
  p5.soundOut._silentNode.connect(p5sound.audiocontext.destination);
  return p5sound;
}(sndcore);
var helpers;
helpers = function () {
  'use strict';
  var p5sound = master;
  /**
   * Returns a number representing the sample rate, in samples per second,
   * of all sound objects in this audio context. It is determined by the
   * sampling rate of your operating system's sound card, and it is not
   * currently possile to change.
   * It is often 44100, or twice the range of human hearing.
   *
   * @method sampleRate
   * @return {Number} samplerate samples per second
   */
  p5.prototype.sampleRate = function () {
    return p5sound.audiocontext.sampleRate;
  };
  /**
   *  Returns the closest MIDI note value for
   *  a given frequency.
   *  
   *  @param  {Number} frequency A freqeuncy, for example, the "A"
   *                             above Middle C is 440Hz
   *  @return {Number}   MIDI note value
   */
  p5.prototype.freqToMidi = function (f) {
    var mathlog2 = Math.log(f / 440) / Math.log(2);
    var m = Math.round(12 * mathlog2) + 57;
    return m;
  };
  /**
   *  Returns the frequency value of a MIDI note value.
   *  General MIDI treats notes as integers where middle C
   *  is 60, C# is 61, D is 62 etc. Useful for generating
   *  musical frequencies with oscillators.
   *  
   *  @method  midiToFreq
   *  @param  {Number} midiNote The number of a MIDI note
   *  @return {Number} Frequency value of the given MIDI note
   *  @example
   *  <div><code>
   *  var notes = [60, 64, 67, 72];
   *  var i = 0;
   *  
   *  function setup() {
   *    osc = new p5.Oscillator('Triangle');
   *    osc.start();
   *    frameRate(1);
   *  }
   *  
   *  function draw() {
   *    var freq = midiToFreq(notes[i]);
   *    osc.freq(freq);
   *    i++;
   *    if (i >= notes.length){
   *      i = 0;
   *    }
   *  }
   *  </code></div>
   */
  p5.prototype.midiToFreq = function (m) {
    return 440 * Math.pow(2, (m - 69) / 12);
  };
  /**
   *  List the SoundFile formats that you will include. LoadSound 
   *  will search your directory for these extensions, and will pick
   *  a format that is compatable with the client's web browser.
   *  <a href="http://media.io/">Here</a> is a free online file
   *  converter.
   *  
   *  @method soundFormats
   *  @param {String|Strings} formats i.e. 'mp3', 'wav', 'ogg'
   *  @example
   *  <div><code>
   *  function preload() {
   *    // set the global sound formats
   *    soundFormats('mp3', 'ogg');
   *    
   *    // load either beatbox.mp3, or .ogg, depending on browser
   *    mySound = loadSound('../sounds/beatbox.mp3');
   *  }
   *
   *  function setup() {
   *    mySound.play();
   *  }
   *  </code></div>
   */
  p5.prototype.soundFormats = function () {
    // reset extensions array
    p5sound.extensions = [];
    // add extensions
    for (var i = 0; i < arguments.length; i++) {
      arguments[i] = arguments[i].toLowerCase();
      if ([
          'mp3',
          'wav',
          'ogg',
          'm4a',
          'aac'
        ].indexOf(arguments[i]) > -1) {
        p5sound.extensions.push(arguments[i]);
      } else {
        throw arguments[i] + ' is not a valid sound format!';
      }
    }
  };
  p5.prototype.disposeSound = function () {
    for (var i = 0; i < p5sound.soundArray.length; i++) {
      p5sound.soundArray[i].dispose();
    }
  };
  // register removeSound to dispose of p5sound SoundFiles, Convolvers,
  // Oscillators etc when sketch ends
  p5.prototype.registerMethod('remove', p5.prototype.disposeSound);
  p5.prototype._checkFileFormats = function (paths) {
    var path;
    // if path is a single string, check to see if extension is provided
    if (typeof paths === 'string') {
      path = paths;
      // see if extension is provided
      var extTest = path.split('.').pop();
      // if an extension is provided...
      if ([
          'mp3',
          'wav',
          'ogg',
          'm4a',
          'aac'
        ].indexOf(extTest) > -1) {
        var supported = p5.prototype.isFileSupported(extTest);
        if (supported) {
          path = path;
        } else {
          var pathSplit = path.split('.');
          var pathCore = pathSplit[pathSplit.length - 1];
          for (var i = 0; i < p5sound.extensions.length; i++) {
            var extension = p5sound.extensions[i];
            var supported = p5.prototype.isFileSupported(extension);
            if (supported) {
              pathCore = '';
              if (pathSplit.length === 2) {
                pathCore += pathSplit[0];
              }
              for (var i = 1; i <= pathSplit.length - 2; i++) {
                var p = pathSplit[i];
                pathCore += '.' + p;
              }
              path = pathCore += '.';
              path = path += extension;
              break;
            }
          }
        }
      } else {
        for (var i = 0; i < p5sound.extensions.length; i++) {
          var extension = p5sound.extensions[i];
          var supported = p5.prototype.isFileSupported(extension);
          if (supported) {
            path = path + '.' + extension;
            break;
          }
        }
      }
    } else if (typeof paths === 'object') {
      for (var i = 0; i < paths.length; i++) {
        var extension = paths[i].split('.').pop();
        var supported = p5.prototype.isFileSupported(extension);
        if (supported) {
          // console.log('.'+extension + ' is ' + supported +
          //  ' supported by your browser.');
          path = paths[i];
          break;
        }
      }
    }
    return path;
  };
  /**
   *  Used by Osc and Env to chain signal math
   */
  p5.prototype._mathChain = function (o, math, thisChain, nextChain, type) {
    // if this type of math already exists in the chain, replace it
    for (var i in o.mathOps) {
      if (o.mathOps[i] instanceof type) {
        o.mathOps[i].dispose();
        thisChain = i;
        if (thisChain < o.mathOps.length - 1) {
          nextChain = o.mathOps[i + 1];
        }
      }
    }
    o.mathOps[thisChain - 1].disconnect();
    o.mathOps[thisChain - 1].connect(math);
    math.connect(nextChain);
    o.mathOps[thisChain] = math;
    return o;
  };
}(master);
var errorHandler;
errorHandler = function () {
  'use strict';
  /**
   *  Helper function to generate an error
   *  with a custom stack trace that points to the sketch
   *  and removes other parts of the stack trace.
   *  
   *  @private
   *  
   *  @param  {String} name         custom  error name
   *  @param  {String} errorTrace   custom error trace
   *  @param  {String} failedPath     path to the file that failed to load
   *  @property {String} name custom error name
   *  @property {String} message custom error message
   *  @property {String} stack trace the error back to a line in the user's sketch.
   *                           Note: this edits out stack trace within p5.js and p5.sound.
   *  @property {String} originalStack unedited, original stack trace
   *  @property {String} failedPath path to the file that failed to load
   *  @return {Error}     returns a custom Error object
   */
  var CustomError = function (name, errorTrace, failedPath) {
    var err = new Error();
    var tempStack, splitStack;
    err.name = name;
    err.originalStack = err.stack + errorTrace;
    tempStack = err.stack + errorTrace;
    err.failedPath = failedPath;
    // only print the part of the stack trace that refers to the user code:
    var splitStack = tempStack.split('\n');
    splitStack = splitStack.filter(function (ln) {
      return !ln.match(/(p5.|native code|globalInit)/g);
    });
    err.stack = splitStack.join('\n');
    return err;
  };
  return CustomError;
}();
var panner;
panner = function () {
  'use strict';
  var p5sound = master;
  var ac = p5sound.audiocontext;
  // Stereo panner
  // if there is a stereo panner node use it
  if (typeof ac.createStereoPanner !== 'undefined') {
    p5.Panner = function (input, output, numInputChannels) {
      this.stereoPanner = this.input = ac.createStereoPanner();
      input.connect(this.stereoPanner);
      this.stereoPanner.connect(output);
    };
    p5.Panner.prototype.pan = function (val, tFromNow) {
      var time = tFromNow || 0;
      var t = ac.currentTime + time;
      this.stereoPanner.pan.linearRampToValueAtTime(val, t);
    };
    p5.Panner.prototype.inputChannels = function (numChannels) {
    };
    p5.Panner.prototype.connect = function (obj) {
      this.stereoPanner.connect(obj);
    };
    p5.Panner.prototype.disconnect = function (obj) {
      this.stereoPanner.disconnect();
    };
  } else {
    // if there is no createStereoPanner object
    // such as in safari 7.1.7 at the time of writing this
    // use this method to create the effect
    p5.Panner = function (input, output, numInputChannels) {
      this.input = ac.createGain();
      input.connect(this.input);
      this.left = ac.createGain();
      this.right = ac.createGain();
      this.left.channelInterpretation = 'discrete';
      this.right.channelInterpretation = 'discrete';
      // if input is stereo
      if (numInputChannels > 1) {
        this.splitter = ac.createChannelSplitter(2);
        this.input.connect(this.splitter);
        this.splitter.connect(this.left, 1);
        this.splitter.connect(this.right, 0);
      } else {
        this.input.connect(this.left);
        this.input.connect(this.right);
      }
      this.output = ac.createChannelMerger(2);
      this.left.connect(this.output, 0, 1);
      this.right.connect(this.output, 0, 0);
      this.output.connect(output);
    };
    // -1 is left, +1 is right
    p5.Panner.prototype.pan = function (val, tFromNow) {
      var time = tFromNow || 0;
      var t = ac.currentTime + time;
      var v = (val + 1) / 2;
      var rightVal = Math.cos(v * Math.PI / 2);
      var leftVal = Math.sin(v * Math.PI / 2);
      this.left.gain.linearRampToValueAtTime(leftVal, t);
      this.right.gain.linearRampToValueAtTime(rightVal, t);
    };
    p5.Panner.prototype.inputChannels = function (numChannels) {
      if (numChannels === 1) {
        this.input.disconnect();
        this.input.connect(this.left);
        this.input.connect(this.right);
      } else if (numChannels === 2) {
        if (typeof (this.splitter === 'undefined')) {
          this.splitter = ac.createChannelSplitter(2);
        }
        this.input.disconnect();
        this.input.connect(this.splitter);
        this.splitter.connect(this.left, 1);
        this.splitter.connect(this.right, 0);
      }
    };
    p5.Panner.prototype.connect = function (obj) {
      this.output.connect(obj);
    };
    p5.Panner.prototype.disconnect = function (obj) {
      this.output.disconnect();
    };
  }
  // 3D panner
  p5.Panner3D = function (input, output) {
    var panner3D = ac.createPanner();
    panner3D.panningModel = 'HRTF';
    panner3D.distanceModel = 'linear';
    panner3D.setPosition(0, 0, 0);
    input.connect(panner3D);
    panner3D.connect(output);
    panner3D.pan = function (xVal, yVal, zVal) {
      panner3D.setPosition(xVal, yVal, zVal);
    };
    return panner3D;
  };
}(master);
var soundfile;
soundfile = function () {
  'use strict';
  var CustomError = errorHandler;
  var p5sound = master;
  var ac = p5sound.audiocontext;
  /**
   *  <p>SoundFile object with a path to a file.</p>
   *  
   *  <p>The p5.SoundFile may not be available immediately because
   *  it loads the file information asynchronously.</p>
   * 
   *  <p>To do something with the sound as soon as it loads
   *  pass the name of a function as the second parameter.</p>
   *  
   *  <p>Only one file path is required. However, audio file formats 
   *  (i.e. mp3, ogg, wav and m4a/aac) are not supported by all
   *  web browsers. If you want to ensure compatability, instead of a single
   *  file path, you may include an Array of filepaths, and the browser will
   *  choose a format that works.</p>
   * 
   *  @class p5.SoundFile
   *  @constructor
   *  @param {String/Array} path   path to a sound file (String). Optionally,
   *                               you may include multiple file formats in
   *                               an array. Alternately, accepts an object
   *                               from the HTML5 File API, or a p5.File.
   *  @param {Function} [successCallback]   Name of a function to call once file loads
   *  @param {Function} [errorCallback]   Name of a function to call if file fails to
   *                                      load. This function will receive an error or
   *                                     XMLHttpRequest object with information
   *                                     about what went wrong.
   *  @param {Function} [whileLoadingCallback]   Name of a function to call while file
   *                                             is loading. That function will
   *                                             receive progress of the request to
   *                                             load the sound file
   *                                             (between 0 and 1) as its first
   *                                             parameter. This progress
   *                                             does not account for the additional
   *                                             time needed to decode the audio data.
   *                                             
   *  @return {Object}    p5.SoundFile Object
   *  @example 
   *  <div><code>
   *  
   *  function preload() {
   *    mySound = loadSound('assets/doorbell.mp3');
   *  }
   *
   *  function setup() {
   *    mySound.setVolume(0.1);
   *    mySound.play();
   *  }
   * 
   * </code></div>
   */
  p5.SoundFile = function (paths, onload, onerror, whileLoading) {
    if (typeof paths !== 'undefined') {
      if (typeof paths == 'string' || typeof paths[0] == 'string') {
        var path = p5.prototype._checkFileFormats(paths);
        this.url = path;
      } else if (typeof paths == 'object') {
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
          // The File API isn't supported in this browser 
          throw 'Unable to load file because the File API is not supported';
        }
      }
      // if type is a p5.File...get the actual file
      if (paths.file) {
        paths = paths.file;
      }
      this.file = paths;
    }
    // private _onended callback, set by the method: onended(callback)
    this._onended = function () {
    };
    this._looping = false;
    this._playing = false;
    this._paused = false;
    this._pauseTime = 0;
    // cues for scheduling events with addCue() removeCue()
    this._cues = [];
    //  position of the most recently played sample
    this._lastPos = 0;
    this._counterNode;
    this._scopeNode;
    // array of sources so that they can all be stopped!
    this.bufferSourceNodes = [];
    // current source
    this.bufferSourceNode = null;
    this.buffer = null;
    this.playbackRate = 1;
    this.gain = 1;
    this.input = p5sound.audiocontext.createGain();
    this.output = p5sound.audiocontext.createGain();
    this.reversed = false;
    // start and end of playback / loop
    this.startTime = 0;
    this.endTime = null;
    this.pauseTime = 0;
    // "restart" would stop playback before retriggering
    this.mode = 'sustain';
    // time that playback was started, in millis
    this.startMillis = null;
    // stereo panning
    this.panPosition = 0;
    this.panner = new p5.Panner(this.output, p5sound.input, 2);
    // it is possible to instantiate a soundfile with no path
    if (this.url || this.file) {
      this.load(onload, onerror);
    }
    // add this p5.SoundFile to the soundArray
    p5sound.soundArray.push(this);
    if (typeof whileLoading === 'function') {
      this._whileLoading = whileLoading;
    } else {
      this._whileLoading = function () {
      };
    }
  };
  // register preload handling of loadSound
  p5.prototype.registerPreloadMethod('loadSound', p5.prototype);
  /**
   *  loadSound() returns a new p5.SoundFile from a specified
   *  path. If called during preload(), the p5.SoundFile will be ready
   *  to play in time for setup() and draw(). If called outside of
   *  preload, the p5.SoundFile will not be ready immediately, so
   *  loadSound accepts a callback as the second parameter. Using a
   *  <a href="https://github.com/processing/p5.js/wiki/Local-server">
   *  local server</a> is recommended when loading external files.
   *  
   *  @method loadSound
   *  @param  {String/Array}   path     Path to the sound file, or an array with
   *                                    paths to soundfiles in multiple formats
   *                                    i.e. ['sound.ogg', 'sound.mp3'].
   *                                    Alternately, accepts an object: either
   *                                    from the HTML5 File API, or a p5.File.
   *  @param {Function} [successCallback]   Name of a function to call once file loads
   *  @param {Function} [errorCallback]   Name of a function to call if there is
   *                                      an error loading the file.
   *  @param {Function} [whileLoading] Name of a function to call while file is loading.
   *                                 This function will receive the percentage loaded
   *                                 so far, from 0.0 to 1.0.
   *  @return {SoundFile}            Returns a p5.SoundFile
   *  @example 
   *  <div><code>
   *  function preload() {
   *   mySound = loadSound('assets/doorbell.mp3');
   *  }
   *
   *  function setup() {
   *    mySound.setVolume(0.1);
   *    mySound.play();
   *  }
   *  </code></div>
   */
  p5.prototype.loadSound = function (path, callback, onerror, whileLoading) {
    // if loading locally without a server
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }
    var s = new p5.SoundFile(path, callback, onerror, whileLoading);
    return s;
  };
  /**
   * This is a helper function that the p5.SoundFile calls to load
   * itself. Accepts a callback (the name of another function)
   * as an optional parameter.
   *
   * @private
   * @param {Function} [successCallback]   Name of a function to call once file loads
   * @param {Function} [errorCallback]   Name of a function to call if there is an error
   */
  p5.SoundFile.prototype.load = function (callback, errorCallback) {
    var loggedError = false;
    var self = this;
    var errorTrace = new Error().stack;
    if (this.url != undefined && this.url != '') {
      var request = new XMLHttpRequest();
      request.addEventListener('progress', function (evt) {
        self._updateProgress(evt);
      }, false);
      request.open('GET', this.url, true);
      request.responseType = 'arraybuffer';
      request.onload = function () {
        if (request.status == 200) {
          // on sucess loading file:
          ac.decodeAudioData(request.response, // success decoding buffer:
          function (buff) {
            self.buffer = buff;
            self.panner.inputChannels(buff.numberOfChannels);
            if (callback) {
              callback(self);
            }
          }, // error decoding buffer. "e" is undefined in Chrome 11/22/2015
          function (e) {
            var err = new CustomError('decodeAudioData', errorTrace, self.url);
            var msg = 'AudioContext error at decodeAudioData for ' + self.url;
            if (errorCallback) {
              err.msg = msg;
              errorCallback(err);
            } else {
              console.error(msg + '\n The error stack trace includes: \n' + err.stack);
            }
          });
        } else {
          var err = new CustomError('loadSound', errorTrace, self.url);
          var msg = 'Unable to load ' + self.url + '. The request status was: ' + request.status + ' (' + request.statusText + ')';
          if (errorCallback) {
            err.message = msg;
            errorCallback(err);
          } else {
            console.error(msg + '\n The error stack trace includes: \n' + err.stack);
          }
        }
      };
      // if there is another error, aside from 404...
      request.onerror = function (e) {
        var err = new CustomError('loadSound', errorTrace, self.url);
        var msg = 'There was no response from the server at ' + self.url + '. Check the url and internet connectivity.';
        if (errorCallback) {
          err.message = msg;
          errorCallback(err);
        } else {
          console.error(msg + '\n The error stack trace includes: \n' + err.stack);
        }
      };
      request.send();
    } else if (this.file != undefined) {
      var reader = new FileReader();
      var self = this;
      reader.onload = function () {
        ac.decodeAudioData(reader.result, function (buff) {
          self.buffer = buff;
          self.panner.inputChannels(buff.numberOfChannels);
          if (callback) {
            callback(self);
          }
        });
      };
      reader.onerror = function (e) {
        if (onerror)
          onerror(e);
      };
      reader.readAsArrayBuffer(this.file);
    }
  };
  // TO DO: use this method to create a loading bar that shows progress during file upload/decode.
  p5.SoundFile.prototype._updateProgress = function (evt) {
    if (evt.lengthComputable) {
      var percentComplete = evt.loaded / evt.total * 0.99;
      this._whileLoading(percentComplete, evt);
    } else {
      // Unable to compute progress information since the total size is unknown
      this._whileLoading('size unknown');
    }
  };
  /**
   *  Returns true if the sound file finished loading successfully.
   *  
   *  @method  isLoaded
   *  @return {Boolean} 
   */
  p5.SoundFile.prototype.isLoaded = function () {
    if (this.buffer) {
      return true;
    } else {
      return false;
    }
  };
  /**
   * Play the p5.SoundFile
   *
   * @method play
   * @param {Number} [startTime]            (optional) schedule playback to start (in seconds from now).
   * @param {Number} [rate]             (optional) playback rate
   * @param {Number} [amp]              (optional) amplitude (volume)
   *                                     of playback
   * @param {Number} [cueStart]        (optional) cue start time in seconds
   * @param {Number} [duration]          (optional) duration of playback in seconds
   */
  p5.SoundFile.prototype.play = function (time, rate, amp, _cueStart, duration) {
    var self = this;
    var now = p5sound.audiocontext.currentTime;
    var cueStart, cueEnd;
    var time = time || 0;
    if (time < 0) {
      time = 0;
    }
    time = time + now;
    // TO DO: if already playing, create array of buffers for easy stop()
    if (this.buffer) {
      // reset the pause time (if it was paused)
      this._pauseTime = 0;
      // handle restart playmode
      if (this.mode === 'restart' && this.buffer && this.bufferSourceNode) {
        var now = p5sound.audiocontext.currentTime;
        this.bufferSourceNode.stop(time);
        this._counterNode.stop(time);
      }
      // set playback rate
      if (rate)
        this.playbackRate = rate;
      // make a new source and counter. They are automatically assigned playbackRate and buffer
      this.bufferSourceNode = this._initSourceNode();
      // garbage collect counterNode and create a new one
      if (this._counterNode)
        this._counterNode = undefined;
      this._counterNode = this._initCounterNode();
      if (_cueStart) {
        if (_cueStart >= 0 && _cueStart < this.buffer.duration) {
          // this.startTime = cueStart;
          cueStart = _cueStart;
        } else {
          throw 'start time out of range';
        }
      } else {
        cueStart = 0;
      }
      if (duration) {
        // if duration is greater than buffer.duration, just play entire file anyway rather than throw an error
        duration = duration <= this.buffer.duration - cueStart ? duration : this.buffer.duration;
      } else {
        duration = this.buffer.duration - cueStart;
      }
      // TO DO: Fix this. It broke in Safari
      // 
      // method of controlling gain for individual bufferSourceNodes, without resetting overall soundfile volume
      // if (typeof(this.bufferSourceNode.gain === 'undefined' ) ) {
      //   this.bufferSourceNode.gain = p5sound.audiocontext.createGain();
      // }
      // this.bufferSourceNode.connect(this.bufferSourceNode.gain);
      // set local amp if provided, otherwise 1
      var a = amp || 1;
      // this.bufferSourceNode.gain.gain.setValueAtTime(a, p5sound.audiocontext.currentTime);
      // this.bufferSourceNode.gain.connect(this.output); 
      this.bufferSourceNode.connect(this.output);
      this.output.gain.value = a;
      // if it was paused, play at the pause position
      if (this._paused) {
        this.bufferSourceNode.start(time, this.pauseTime, duration);
        this._counterNode.start(time, this.pauseTime, duration);
      } else {
        this.bufferSourceNode.start(time, cueStart, duration);
        this._counterNode.start(time, cueStart, duration);
      }
      this._playing = true;
      this._paused = false;
      // add source to sources array, which is used in stopAll()
      this.bufferSourceNodes.push(this.bufferSourceNode);
      this.bufferSourceNode._arrayIndex = this.bufferSourceNodes.length - 1;
      // delete this.bufferSourceNode from the sources array when it is done playing:
      var clearOnEnd = function (e) {
        this._playing = false;
        this.removeEventListener('ended', clearOnEnd, false);
        // call the onended callback
        self._onended(self);
        self.bufferSourceNodes.forEach(function (n, i) {
          if (n._playing === false) {
            self.bufferSourceNodes.splice(i);
          }
        });
        if (self.bufferSourceNodes.length === 0) {
          self._playing = false;
        }
      };
      this.bufferSourceNode.onended = clearOnEnd;
    } else {
      throw 'not ready to play file, buffer has yet to load. Try preload()';
    }
    // if looping, will restart at original time
    this.bufferSourceNode.loop = this._looping;
    this._counterNode.loop = this._looping;
    if (this._looping === true) {
      var cueEnd = cueStart + duration;
      this.bufferSourceNode.loopStart = cueStart;
      this.bufferSourceNode.loopEnd = cueEnd;
      this._counterNode.loopStart = cueStart;
      this._counterNode.loopEnd = cueEnd;
    }
  };
  /**
   *  p5.SoundFile has two play modes: <code>restart</code> and
   *  <code>sustain</code>. Play Mode determines what happens to a
   *  p5.SoundFile if it is triggered while in the middle of playback.
   *  In sustain mode, playback will continue simultaneous to the
   *  new playback. In restart mode, play() will stop playback
   *  and start over. Sustain is the default mode. 
   *  
   *  @method  playMode
   *  @param  {String} str 'restart' or 'sustain'
   *  @example
   *  <div><code>
   *  function setup(){
   *    mySound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *  function mouseClicked() {
   *    mySound.playMode('sustain');
   *    mySound.play();
   *  }
   *  function keyPressed() {
   *    mySound.playMode('restart');
   *    mySound.play();
   *  }
   * 
   * </code></div>
   */
  p5.SoundFile.prototype.playMode = function (str) {
    var s = str.toLowerCase();
    // if restart, stop all other sounds from playing
    if (s === 'restart' && this.buffer && this.bufferSourceNode) {
      for (var i = 0; i < this.bufferSourceNodes.length - 1; i++) {
        var now = p5sound.audiocontext.currentTime;
        this.bufferSourceNodes[i].stop(now);
      }
    }
    // set play mode to effect future playback
    if (s === 'restart' || s === 'sustain') {
      this.mode = s;
    } else {
      throw 'Invalid play mode. Must be either "restart" or "sustain"';
    }
  };
  /**
   *  Pauses a file that is currently playing. If the file is not
   *  playing, then nothing will happen.
   *
   *  After pausing, .play() will resume from the paused
   *  position.
   *  If p5.SoundFile had been set to loop before it was paused,
   *  it will continue to loop after it is unpaused with .play().
   *
   *  @method pause
   *  @param {Number} [startTime] (optional) schedule event to occur
   *                               seconds from now
   *  @example
   *  <div><code>
   *  var soundFile;
   *  
   *  function preload() {
   *    soundFormats('ogg', 'mp3');
   *    soundFile = loadSound('assets/Damscray_-_Dancing_Tiger_02.mp3');
   *  }
   *  function setup() {
   *    background(0, 255, 0);
   *    soundFile.setVolume(0.1);
   *    soundFile.loop();
   *  }
   *  function keyTyped() {
   *    if (key == 'p') {
   *      soundFile.pause();
   *      background(255, 0, 0);
   *    }
   *  }
   *  
   *  function keyReleased() {
   *    if (key == 'p') {
   *      soundFile.play();
   *      background(0, 255, 0);
   *    }
   *  }
   *  </code>
   *  </div>
   */
  p5.SoundFile.prototype.pause = function (time) {
    var now = p5sound.audiocontext.currentTime;
    var time = time || 0;
    var pTime = time + now;
    if (this.isPlaying() && this.buffer && this.bufferSourceNode) {
      this.pauseTime = this.currentTime();
      this.bufferSourceNode.stop(pTime);
      this._counterNode.stop(pTime);
      this._paused = true;
      this._playing = false;
      this._pauseTime = this.currentTime();
    } else {
      this._pauseTime = 0;
    }
  };
  /**
   * Loop the p5.SoundFile. Accepts optional parameters to set the
   * playback rate, playback volume, loopStart, loopEnd.
   *
   * @method loop
   * @param {Number} [startTime] (optional) schedule event to occur
   *                             seconds from now
   * @param {Number} [rate]        (optional) playback rate
   * @param {Number} [amp]         (optional) playback volume
   * @param {Number} [cueLoopStart](optional) startTime in seconds
   * @param {Number} [duration]  (optional) loop duration in seconds
   */
  p5.SoundFile.prototype.loop = function (startTime, rate, amp, loopStart, duration) {
    this._looping = true;
    this.play(startTime, rate, amp, loopStart, duration);
  };
  /**
   * Set a p5.SoundFile's looping flag to true or false. If the sound
   * is currently playing, this change will take effect when it
   * reaches the end of the current playback. 
   * 
   * @param {Boolean} Boolean   set looping to true or false
   */
  p5.SoundFile.prototype.setLoop = function (bool) {
    if (bool === true) {
      this._looping = true;
    } else if (bool === false) {
      this._looping = false;
    } else {
      throw 'Error: setLoop accepts either true or false';
    }
    if (this.bufferSourceNode) {
      this.bufferSourceNode.loop = this._looping;
      this._counterNode.loop = this._looping;
    }
  };
  /**
   * Returns 'true' if a p5.SoundFile is currently looping and playing, 'false' if not.
   *
   * @return {Boolean}
   */
  p5.SoundFile.prototype.isLooping = function () {
    if (!this.bufferSourceNode) {
      return false;
    }
    if (this._looping === true && this.isPlaying() === true) {
      return true;
    }
    return false;
  };
  /**
   *  Returns true if a p5.SoundFile is playing, false if not (i.e.
   *  paused or stopped).
   *
   *  @method isPlaying
   *  @return {Boolean}
   */
  p5.SoundFile.prototype.isPlaying = function () {
    return this._playing;
  };
  /**
   *  Returns true if a p5.SoundFile is paused, false if not (i.e.
   *  playing or stopped).
   *
   *  @method  isPaused
   *  @return {Boolean}
   */
  p5.SoundFile.prototype.isPaused = function () {
    return this._paused;
  };
  /**
   * Stop soundfile playback.
   *
   * @method stop
   * @param {Number} [startTime] (optional) schedule event to occur
   *                             in seconds from now
   */
  p5.SoundFile.prototype.stop = function (timeFromNow) {
    var time = timeFromNow || 0;
    if (this.mode == 'sustain') {
      this.stopAll(time);
      this._playing = false;
      this.pauseTime = 0;
      this._paused = false;
    } else if (this.buffer && this.bufferSourceNode) {
      var now = p5sound.audiocontext.currentTime;
      var t = time || 0;
      this.pauseTime = 0;
      this.bufferSourceNode.stop(now + t);
      this._counterNode.stop(now + t);
      this._playing = false;
      this._paused = false;
    }
  };
  /**
   *  Stop playback on all of this soundfile's sources.
   *  @private
   */
  p5.SoundFile.prototype.stopAll = function (_time) {
    var now = p5sound.audiocontext.currentTime;
    var time = _time || 0;
    if (this.buffer && this.bufferSourceNode) {
      for (var i = 0; i < this.bufferSourceNodes.length; i++) {
        if (typeof this.bufferSourceNodes[i] != undefined) {
          try {
            this.bufferSourceNodes[i].onended = function () {
            };
            this.bufferSourceNodes[i].stop(now + time);
          } catch (e) {
          }
        }
      }
      this._counterNode.stop(now + time);
      this._onended(this);
    }
  };
  /**
   *  Multiply the output volume (amplitude) of a sound file
   *  between 0.0 (silence) and 1.0 (full volume).
   *  1.0 is the maximum amplitude of a digital sound, so multiplying
   *  by greater than 1.0 may cause digital distortion. To
   *  fade, provide a <code>rampTime</code> parameter. For more
   *  complex fades, see the Env class.
   *
   *  Alternately, you can pass in a signal source such as an
   *  oscillator to modulate the amplitude with an audio signal.
   *
   *  @method  setVolume
   *  @param {Number|Object} volume  Volume (amplitude) between 0.0
   *                                     and 1.0 or modulating signal/oscillator
   *  @param {Number} [rampTime]  Fade for t seconds
   *  @param {Number} [timeFromNow]  Schedule this event to happen at
   *                                 t seconds in the future
   */
  p5.SoundFile.prototype.setVolume = function (vol, rampTime, tFromNow) {
    if (typeof vol === 'number') {
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var now = p5sound.audiocontext.currentTime;
      var currentVol = this.output.gain.value;
      this.output.gain.cancelScheduledValues(now + tFromNow);
      this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
      this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
    } else if (vol) {
      vol.connect(this.output.gain);
    } else {
      // return the Gain Node
      return this.output.gain;
    }
  };
  // same as setVolume, to match Processing Sound
  p5.SoundFile.prototype.amp = p5.SoundFile.prototype.setVolume;
  // these are the same thing
  p5.SoundFile.prototype.fade = p5.SoundFile.prototype.setVolume;
  p5.SoundFile.prototype.getVolume = function () {
    return this.output.gain.value;
  };
  /**
   * Set the stereo panning of a p5.sound object to
   * a floating point number between -1.0 (left) and 1.0 (right).
   * Default is 0.0 (center).
   *
   * @method pan
   * @param {Number} [panValue]     Set the stereo panner
   * @param  {Number} timeFromNow schedule this event to happen
   *                                seconds from now
   * @example
   * <div><code>
   *
   *  var ball = {};
   *  var soundFile;
   *
   *  function setup() {
   *    soundFormats('ogg', 'mp3');
   *    soundFile = loadSound('assets/beatbox.mp3');
   *  }
   *  
   *  function draw() {
   *    background(0);
   *    ball.x = constrain(mouseX, 0, width);
   *    ellipse(ball.x, height/2, 20, 20)
   *  }
   *  
   *  function mousePressed(){
   *    // map the ball's x location to a panning degree 
   *    // between -1.0 (left) and 1.0 (right)
   *    var panning = map(ball.x, 0., width,-1.0, 1.0);
   *    soundFile.pan(panning);
   *    soundFile.play();
   *  }
   *  </div></code>
   */
  p5.SoundFile.prototype.pan = function (pval, tFromNow) {
    this.panPosition = pval;
    this.panner.pan(pval, tFromNow);
  };
  /**
   * Returns the current stereo pan position (-1.0 to 1.0)
   *
   * @return {Number} Returns the stereo pan setting of the Oscillator
   *                          as a number between -1.0 (left) and 1.0 (right).
   *                          0.0 is center and default.
   */
  p5.SoundFile.prototype.getPan = function () {
    return this.panPosition;
  };
  /**
   *  Set the playback rate of a sound file. Will change the speed and the pitch.
   *  Values less than zero will reverse the audio buffer.
   *
   *  @method rate
   *  @param {Number} [playbackRate]     Set the playback rate. 1.0 is normal,
   *                                     .5 is half-speed, 2.0 is twice as fast.
   *                                     Values less than zero play backwards.
   *  @example
   *  <div><code>
   *  var song;
   *  
   *  function preload() {
   *    song = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup() {
   *    song.loop();
   *  }
   *
   *  function draw() {
   *    background(200);
   *    
   *    // Set the rate to a range between 0.1 and 4
   *    // Changing the rate also alters the pitch
   *    var speed = map(mouseY, 0.1, height, 0, 2);
   *    speed = constrain(speed, 0.01, 4);
   *    song.rate(speed);
   *    
   *    // Draw a circle to show what is going on
   *    stroke(0);
   *    fill(51, 100);
   *    ellipse(mouseX, 100, 48, 48);
   *  }
   *  
   * </code>
   * </div>
   *  
   */
  p5.SoundFile.prototype.rate = function (playbackRate) {
    if (this.playbackRate === playbackRate && this.bufferSourceNode) {
      if (this.bufferSourceNode.playbackRate.value === playbackRate) {
        return;
      }
    }
    this.playbackRate = playbackRate;
    var rate = playbackRate;
    if (this.playbackRate === 0 && this._playing) {
      this.pause();
    }
    if (this.playbackRate < 0 && !this.reversed) {
      var cPos = this.currentTime();
      var cRate = this.bufferSourceNode.playbackRate.value;
      // this.pause();
      this.reverseBuffer();
      rate = Math.abs(playbackRate);
      var newPos = (cPos - this.duration()) / rate;
      this.pauseTime = newPos;
    } else if (this.playbackRate > 0 && this.reversed) {
      this.reverseBuffer();
    }
    if (this.bufferSourceNode) {
      var now = p5sound.audiocontext.currentTime;
      this.bufferSourceNode.playbackRate.cancelScheduledValues(now);
      this.bufferSourceNode.playbackRate.linearRampToValueAtTime(Math.abs(rate), now);
      this._counterNode.playbackRate.cancelScheduledValues(now);
      this._counterNode.playbackRate.linearRampToValueAtTime(Math.abs(rate), now);
    }
  };
  // TO DO: document this
  p5.SoundFile.prototype.setPitch = function (num) {
    var newPlaybackRate = midiToFreq(num) / midiToFreq(60);
    this.rate(newPlaybackRate);
  };
  p5.SoundFile.prototype.getPlaybackRate = function () {
    return this.playbackRate;
  };
  /**
   * Returns the duration of a sound file in seconds.
   *
   * @method duration
   * @return {Number} The duration of the soundFile in seconds.
   */
  p5.SoundFile.prototype.duration = function () {
    // Return Duration
    if (this.buffer) {
      return this.buffer.duration;
    } else {
      return 0;
    }
  };
  /**
   * Return the current position of the p5.SoundFile playhead, in seconds.
   * Note that if you change the playbackRate while the p5.SoundFile is
   * playing, the results may not be accurate.
   *
   * @method currentTime
   * @return {Number}   currentTime of the soundFile in seconds.
   */
  p5.SoundFile.prototype.currentTime = function () {
    // TO DO --> make reverse() flip these values appropriately
    if (this._pauseTime > 0) {
      return this._pauseTime;
    } else {
      return this._lastPos / ac.sampleRate;
    }
  };
  /**
   * Move the playhead of the song to a position, in seconds. Start
   * and Stop time. If none are given, will reset the file to play
   * entire duration from start to finish.
   *
   * @method jump
   * @param {Number} cueTime    cueTime of the soundFile in seconds.
   * @param {Number} duration    duration in seconds.
   */
  p5.SoundFile.prototype.jump = function (cueTime, duration) {
    if (cueTime < 0 || cueTime > this.buffer.duration) {
      throw 'jump time out of range';
    }
    if (duration > this.buffer.duration - cueTime) {
      throw 'end time out of range';
    }
    var cTime = cueTime || 0;
    var eTime = duration || this.buffer.duration - cueTime;
    if (this.isPlaying()) {
      this.stop();
    }
    this.play(0, this.playbackRate, this.output.gain.value, cTime, eTime);
  };
  /**
  * Return the number of channels in a sound file.
  * For example, Mono = 1, Stereo = 2.
  *
  * @method channels
  * @return {Number} [channels]
  */
  p5.SoundFile.prototype.channels = function () {
    return this.buffer.numberOfChannels;
  };
  /**
  * Return the sample rate of the sound file.
  *
  * @method sampleRate
  * @return {Number} [sampleRate]
  */
  p5.SoundFile.prototype.sampleRate = function () {
    return this.buffer.sampleRate;
  };
  /**
  * Return the number of samples in a sound file.
  * Equal to sampleRate * duration.
  *
  * @method frames
  * @return {Number} [sampleCount]
  */
  p5.SoundFile.prototype.frames = function () {
    return this.buffer.length;
  };
  /**
   * Returns an array of amplitude peaks in a p5.SoundFile that can be
   * used to draw a static waveform. Scans through the p5.SoundFile's
   * audio buffer to find the greatest amplitudes. Accepts one
   * parameter, 'length', which determines size of the array.
   * Larger arrays result in more precise waveform visualizations.
   * 
   * Inspired by Wavesurfer.js.
   * 
   * @method  getPeaks
   * @params {Number} [length] length is the size of the returned array.
   *                          Larger length results in more precision.
   *                          Defaults to 5*width of the browser window.
   * @returns {Float32Array} Array of peaks.
   */
  p5.SoundFile.prototype.getPeaks = function (length) {
    if (this.buffer) {
      // set length to window's width if no length is provided
      if (!length) {
        length = window.width * 5;
      }
      if (this.buffer) {
        var buffer = this.buffer;
        var sampleSize = buffer.length / length;
        var sampleStep = ~~(sampleSize / 10) || 1;
        var channels = buffer.numberOfChannels;
        var peaks = new Float32Array(Math.round(length));
        for (var c = 0; c < channels; c++) {
          var chan = buffer.getChannelData(c);
          for (var i = 0; i < length; i++) {
            var start = ~~(i * sampleSize);
            var end = ~~(start + sampleSize);
            var max = 0;
            for (var j = start; j < end; j += sampleStep) {
              var value = chan[j];
              if (value > max) {
                max = value;
              } else if (-value > max) {
                max = value;
              }
            }
            if (c === 0 || Math.abs(max) > peaks[i]) {
              peaks[i] = max;
            }
          }
        }
        return peaks;
      }
    } else {
      throw 'Cannot load peaks yet, buffer is not loaded';
    }
  };
  /**
   *  Reverses the p5.SoundFile's buffer source.
   *  Playback must be handled separately (see example).
   *
   *  @method  reverseBuffer
   *  @example
   *  <div><code>
   *  var drum;
   *  
   *  function preload() {
   *    drum = loadSound('assets/drum.mp3');
   *  }
   *
   *  function setup() {
   *    drum.reverseBuffer();
   *    drum.play();
   *  }
   *  
   * </code>
   * </div>
   */
  p5.SoundFile.prototype.reverseBuffer = function () {
    var curVol = this.getVolume();
    this.setVolume(0, 0.01, 0);
    this.pause();
    if (this.buffer) {
      for (var i = 0; i < this.buffer.numberOfChannels; i++) {
        Array.prototype.reverse.call(this.buffer.getChannelData(i));
      }
      // set reversed flag
      this.reversed = !this.reversed;
    } else {
      throw 'SoundFile is not done loading';
    }
    this.setVolume(curVol, 0.01, 0.0101);
    this.play();
  };
  /**
   *  Schedule an event to be called when the soundfile
   *  reaches the end of a buffer. If the soundfile is
   *  playing through once, this will be called when it
   *  ends. If it is looping, it will be called when
   *  stop is called.
   *  
   *  @method  onended
   *  @param  {Function} callback function to call when the
   *                              soundfile has ended.
   */
  p5.SoundFile.prototype.onended = function (callback) {
    this._onended = callback;
    return this;
  };
  p5.SoundFile.prototype.add = function () {
  };
  p5.SoundFile.prototype.dispose = function () {
    var now = p5sound.audiocontext.currentTime;
    // remove reference to soundfile
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.stop(now);
    if (this.buffer && this.bufferSourceNode) {
      for (var i = 0; i < this.bufferSourceNodes.length - 1; i++) {
        if (this.bufferSourceNodes[i] !== null) {
          this.bufferSourceNodes[i].disconnect();
          try {
            this.bufferSourceNodes[i].stop(now);
          } catch (e) {
          }
          this.bufferSourceNodes[i] = null;
        }
      }
      if (this.isPlaying()) {
        try {
          this._counterNode.stop(now);
        } catch (e) {
          console.log(e);
        }
        this._counterNode = null;
      }
    }
    if (this.output) {
      this.output.disconnect();
      this.output = null;
    }
    if (this.panner) {
      this.panner.disconnect();
      this.panner = null;
    }
  };
  /**
   * Connects the output of a p5sound object to input of another
   * p5.sound object. For example, you may connect a p5.SoundFile to an
   * FFT or an Effect. If no parameter is given, it will connect to
   * the master output. Most p5sound objects connect to the master
   * output when they are created.
   *
   * @method connect
   * @param {Object} [object] Audio object that accepts an input
   */
  p5.SoundFile.prototype.connect = function (unit) {
    if (!unit) {
      this.panner.connect(p5sound.input);
    } else {
      if (unit.hasOwnProperty('input')) {
        this.panner.connect(unit.input);
      } else {
        this.panner.connect(unit);
      }
    }
  };
  /**
   * Disconnects the output of this p5sound object.
   *
   * @method disconnect
   */
  p5.SoundFile.prototype.disconnect = function () {
    this.panner.disconnect();
  };
  /**
   */
  p5.SoundFile.prototype.getLevel = function (smoothing) {
    console.warn('p5.SoundFile.getLevel has been removed from the library. Use p5.Amplitude instead');
  };
  /**
   *  Reset the source for this SoundFile to a
   *  new path (URL).
   *
   *  @method  setPath
   *  @param {String}   path     path to audio file
   *  @param {Function} callback Callback
   */
  p5.SoundFile.prototype.setPath = function (p, callback) {
    var path = p5.prototype._checkFileFormats(p);
    this.url = path;
    this.load(callback);
  };
  /**
   *  Replace the current Audio Buffer with a new Buffer.
   *  
   *  @param {Array} buf Array of Float32 Array(s). 2 Float32 Arrays
   *                     will create a stereo source. 1 will create
   *                     a mono source.
   */
  p5.SoundFile.prototype.setBuffer = function (buf) {
    var numChannels = buf.length;
    var size = buf[0].length;
    var newBuffer = ac.createBuffer(numChannels, size, ac.sampleRate);
    if (!buf[0] instanceof Float32Array) {
      buf[0] = new Float32Array(buf[0]);
    }
    for (var channelNum = 0; channelNum < numChannels; channelNum++) {
      var channel = newBuffer.getChannelData(channelNum);
      channel.set(buf[channelNum]);
    }
    this.buffer = newBuffer;
    // set numbers of channels on input to the panner
    this.panner.inputChannels(numChannels);
  };
  //////////////////////////////////////////////////
  // script processor node with an empty buffer to help
  // keep a sample-accurate position in playback buffer.
  // Inspired by Chinmay Pendharkar's technique for Sonoport --> http://bit.ly/1HwdCsV
  // Copyright [2015] [Sonoport (Asia) Pte. Ltd.],
  // Licensed under the Apache License http://apache.org/licenses/LICENSE-2.0
  ////////////////////////////////////////////////////////////////////////////////////
  // initialize counterNode, set its initial buffer and playbackRate
  p5.SoundFile.prototype._initCounterNode = function () {
    var self = this;
    var now = ac.currentTime;
    var cNode = ac.createBufferSource();
    // dispose of scope node if it already exists
    if (self._scopeNode) {
      self._scopeNode.disconnect();
      self._scopeNode.onaudioprocess = undefined;
      self._scopeNode = null;
    }
    self._scopeNode = ac.createScriptProcessor(256, 1, 1);
    // create counter buffer of the same length as self.buffer
    cNode.buffer = _createCounterBuffer(self.buffer);
    cNode.playbackRate.setValueAtTime(self.playbackRate, now);
    cNode.connect(self._scopeNode);
    self._scopeNode.connect(p5.soundOut._silentNode);
    self._scopeNode.onaudioprocess = function (processEvent) {
      var inputBuffer = processEvent.inputBuffer.getChannelData(0);
      // update the lastPos
      self._lastPos = inputBuffer[inputBuffer.length - 1] || 0;
      // do any callbacks that have been scheduled
      self._onTimeUpdate(self._lastPos);
    };
    return cNode;
  };
  // initialize sourceNode, set its initial buffer and playbackRate
  p5.SoundFile.prototype._initSourceNode = function () {
    var self = this;
    var now = ac.currentTime;
    var bufferSourceNode = ac.createBufferSource();
    bufferSourceNode.buffer = self.buffer;
    bufferSourceNode.playbackRate.value = self.playbackRate;
    return bufferSourceNode;
  };
  var _createCounterBuffer = function (buffer) {
    var array = new Float32Array(buffer.length);
    var audioBuf = ac.createBuffer(1, buffer.length, 44100);
    for (var index = 0; index < buffer.length; index++) {
      array[index] = index;
    }
    audioBuf.getChannelData(0).set(array);
    return audioBuf;
  };
  /**
   *  processPeaks returns an array of timestamps where it thinks there is a beat.
   *
   *  This is an asynchronous function that processes the soundfile in an offline audio context,
   *  and sends the results to your callback function.
   *
   *  The process involves running the soundfile through a lowpass filter, and finding all of the
   *  peaks above the initial threshold. If the total number of peaks are below the minimum number of peaks,
   *  it decreases the threshold and re-runs the analysis until either minPeaks or minThreshold are reached.
   *  
   *  @method  processPeaks
   *  @param  {Function} callback       a function to call once this data is returned
   *  @param  {Number}   [initThreshold] initial threshold defaults to 0.9
   *  @param  {Number}   [minThreshold]   minimum threshold defaults to 0.22
   *  @param  {Number}   [minPeaks]       minimum number of peaks defaults to 200
   *  @return {Array}                  Array of timestamped peaks
   */
  p5.SoundFile.prototype.processPeaks = function (callback, _initThreshold, _minThreshold, _minPeaks) {
    var bufLen = this.buffer.length;
    var sampleRate = this.buffer.sampleRate;
    var buffer = this.buffer;
    var initialThreshold = _initThreshold || 0.9, threshold = initialThreshold, minThreshold = _minThreshold || 0.22, minPeaks = _minPeaks || 200;
    // Create offline context
    var offlineContext = new OfflineAudioContext(1, bufLen, sampleRate);
    // create buffer source
    var source = offlineContext.createBufferSource();
    source.buffer = buffer;
    // Create filter. TO DO: allow custom setting of filter
    var filter = offlineContext.createBiquadFilter();
    filter.type = 'lowpass';
    source.connect(filter);
    filter.connect(offlineContext.destination);
    // start playing at time:0
    source.start(0);
    offlineContext.startRendering();
    // Render the song
    // act on the result
    offlineContext.oncomplete = function (e) {
      var data = {};
      var filteredBuffer = e.renderedBuffer;
      var bufferData = filteredBuffer.getChannelData(0);
      // step 1: 
      // create Peak instances, add them to array, with strength and sampleIndex
      do {
        allPeaks = getPeaksAtThreshold(bufferData, threshold);
        threshold -= 0.005;
      } while (Object.keys(allPeaks).length < minPeaks && threshold >= minThreshold);
      // step 2:
      // find intervals for each peak in the sampleIndex, add tempos array
      var intervalCounts = countIntervalsBetweenNearbyPeaks(allPeaks);
      // step 3: find top tempos
      var groups = groupNeighborsByTempo(intervalCounts, filteredBuffer.sampleRate);
      // sort top intervals
      var topTempos = groups.sort(function (intA, intB) {
        return intB.count - intA.count;
      }).splice(0, 5);
      // set this SoundFile's tempo to the top tempo ??
      this.tempo = topTempos[0].tempo;
      // step 4:
      // new array of peaks at top tempo within a bpmVariance
      var bpmVariance = 5;
      var tempoPeaks = getPeaksAtTopTempo(allPeaks, topTempos[0].tempo, filteredBuffer.sampleRate, bpmVariance);
      callback(tempoPeaks);
    };
  };
  // process peaks
  var Peak = function (amp, i) {
    this.sampleIndex = i;
    this.amplitude = amp;
    this.tempos = [];
    this.intervals = [];
  };
  var allPeaks = [];
  // 1. for processPeaks() Function to identify peaks above a threshold
  // returns an array of peak indexes as frames (samples) of the original soundfile
  function getPeaksAtThreshold(data, threshold) {
    var peaksObj = {};
    var length = data.length;
    for (var i = 0; i < length; i++) {
      if (data[i] > threshold) {
        var amp = data[i];
        var peak = new Peak(amp, i);
        peaksObj[i] = peak;
        // Skip forward ~ 1/8s to get past this peak.
        i += 6000;
      }
      i++;
    }
    return peaksObj;
  }
  // 2. for processPeaks()
  function countIntervalsBetweenNearbyPeaks(peaksObj) {
    var intervalCounts = [];
    var peaksArray = Object.keys(peaksObj).sort();
    for (var index = 0; index < peaksArray.length; index++) {
      // find intervals in comparison to nearby peaks
      for (var i = 0; i < 10; i++) {
        var startPeak = peaksObj[peaksArray[index]];
        var endPeak = peaksObj[peaksArray[index + i]];
        if (startPeak && endPeak) {
          var startPos = startPeak.sampleIndex;
          var endPos = endPeak.sampleIndex;
          var interval = endPos - startPos;
          // add a sample interval to the startPeek in the allPeaks array
          if (interval > 0) {
            startPeak.intervals.push(interval);
          }
          // tally the intervals and return interval counts
          var foundInterval = intervalCounts.some(function (intervalCount, p) {
            if (intervalCount.interval === interval) {
              intervalCount.count++;
              return intervalCount;
            }
          });
          // store with JSON like formatting
          if (!foundInterval) {
            intervalCounts.push({
              interval: interval,
              count: 1
            });
          }
        }
      }
    }
    return intervalCounts;
  }
  // 3. for processPeaks --> find tempo
  function groupNeighborsByTempo(intervalCounts, sampleRate) {
    var tempoCounts = [];
    intervalCounts.forEach(function (intervalCount, i) {
      try {
        // Convert an interval to tempo
        var theoreticalTempo = Math.abs(60 / (intervalCount.interval / sampleRate));
        theoreticalTempo = mapTempo(theoreticalTempo);
        var foundTempo = tempoCounts.some(function (tempoCount) {
          if (tempoCount.tempo === theoreticalTempo)
            return tempoCount.count += intervalCount.count;
        });
        if (!foundTempo) {
          if (isNaN(theoreticalTempo)) {
            return;
          }
          tempoCounts.push({
            tempo: Math.round(theoreticalTempo),
            count: intervalCount.count
          });
        }
      } catch (e) {
        throw e;
      }
    });
    return tempoCounts;
  }
  // 4. for processPeaks - get peaks at top tempo
  function getPeaksAtTopTempo(peaksObj, tempo, sampleRate, bpmVariance) {
    var peaksAtTopTempo = [];
    var peaksArray = Object.keys(peaksObj).sort();
    // TO DO: filter out peaks that have the tempo and return
    for (var i = 0; i < peaksArray.length; i++) {
      var key = peaksArray[i];
      var peak = peaksObj[key];
      for (var j = 0; j < peak.intervals.length; j++) {
        var intervalBPM = Math.round(Math.abs(60 / (peak.intervals[j] / sampleRate)));
        intervalBPM = mapTempo(intervalBPM);
        var dif = intervalBPM - tempo;
        if (Math.abs(intervalBPM - tempo) < bpmVariance) {
          // convert sampleIndex to seconds
          peaksAtTopTempo.push(peak.sampleIndex / 44100);
        }
      }
    }
    // filter out peaks that are very close to each other
    peaksAtTopTempo = peaksAtTopTempo.filter(function (peakTime, index, arr) {
      var dif = arr[index + 1] - peakTime;
      if (dif > 0.01) {
        return true;
      }
    });
    return peaksAtTopTempo;
  }
  // helper function for processPeaks
  function mapTempo(theoreticalTempo) {
    // these scenarios create infinite while loop
    if (!isFinite(theoreticalTempo) || theoreticalTempo == 0) {
      return;
    }
    // Adjust the tempo to fit within the 90-180 BPM range
    while (theoreticalTempo < 90)
      theoreticalTempo *= 2;
    while (theoreticalTempo > 180 && theoreticalTempo > 90)
      theoreticalTempo /= 2;
    return theoreticalTempo;
  }
  /*** SCHEDULE EVENTS ***/
  /**
   *  Schedule events to trigger every time a MediaElement
   *  (audio/video) reaches a playback cue point.
   *
   *  Accepts a callback function, a time (in seconds) at which to trigger
   *  the callback, and an optional parameter for the callback.
   *
   *  Time will be passed as the first parameter to the callback function,
   *  and param will be the second parameter.
   *
   *
   *  @method  addCue
   *  @param {Number}   time     Time in seconds, relative to this media
   *                             element's playback. For example, to trigger
   *                             an event every time playback reaches two
   *                             seconds, pass in the number 2. This will be
   *                             passed as the first parameter to
   *                             the callback function.
   *  @param {Function} callback Name of a function that will be
   *                             called at the given time. The callback will
   *                             receive time and (optionally) param as its
   *                             two parameters.
   *  @param {Object} [value]    An object to be passed as the
   *                             second parameter to the
   *                             callback function.
   *  @return {Number} id ID of this cue,
   *                      useful for removeCue(id)
   *  @example
   *  <div><code>
   *  function setup() {
   *    background(0);
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *    
   *    mySound = loadSound('assets/beat.mp3');
   *
   *    // schedule calls to changeText
   *    mySound.addCue(0.50, changeText, "hello" );
   *    mySound.addCue(1.00, changeText, "p5" );
   *    mySound.addCue(1.50, changeText, "what" );
   *    mySound.addCue(2.00, changeText, "do" );
   *    mySound.addCue(2.50, changeText, "you" );
   *    mySound.addCue(3.00, changeText, "want" );
   *    mySound.addCue(4.00, changeText, "to" );
   *    mySound.addCue(5.00, changeText, "make" );
   *    mySound.addCue(6.00, changeText, "?" );
   *  }
   *
   *  function changeText(val) {
   *    background(0);
   *    text(val, width/2, height/2);
   *  }
   *
   *  function mouseClicked() {
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      if (mySound.isPlaying() ) {
   *        mySound.stop();
   *      } else {
   *        mySound.play();
   *      }
   *    }
   *  }
   *  </code></div>
   */
  p5.SoundFile.prototype.addCue = function (time, callback, val) {
    var id = this._cueIDCounter++;
    var cue = new Cue(callback, time, id, val);
    this._cues.push(cue);
    // if (!this.elt.ontimeupdate) {
    //   this.elt.ontimeupdate = this._onTimeUpdate.bind(this);
    // }
    return id;
  };
  /**
   *  Remove a callback based on its ID. The ID is returned by the
   *  addCue method.
   *
   *  @method removeCue
   *  @param  {Number} id ID of the cue, as returned by addCue
   */
  p5.SoundFile.prototype.removeCue = function (id) {
    var cueLength = this._cues.length;
    for (var i = 0; i < cueLength; i++) {
      var cue = this._cues[i];
      if (cue.id === id) {
        this.cues.splice(i, 1);
      }
    }
    if (this._cues.length === 0) {
    }
  };
  /**
   *  Remove all of the callbacks that had originally been scheduled
   *  via the addCue method.
   *
   *  @method  clearCues
   */
  p5.SoundFile.prototype.clearCues = function () {
    this._cues = [];
  };
  // private method that checks for cues to be fired if events
  // have been scheduled using addCue(callback, time).
  p5.SoundFile.prototype._onTimeUpdate = function (position) {
    var playbackTime = position / this.buffer.sampleRate;
    var cueLength = this._cues.length;
    for (var i = 0; i < cueLength; i++) {
      var cue = this._cues[i];
      var callbackTime = cue.time;
      var val = cue.val;
      if (this._prevTime < callbackTime && callbackTime <= playbackTime) {
        // pass the scheduled callbackTime as parameter to the callback
        cue.callback(val);
      }
    }
    this._prevTime = playbackTime;
  };
  // Cue inspired by JavaScript setTimeout, and the
  // Tone.js Transport Timeline Event, MIT License Yotam Mann 2015 tonejs.org
  var Cue = function (callback, time, id, val) {
    this.callback = callback;
    this.time = time;
    this.id = id;
    this.val = val;
  };
}(sndcore, errorHandler, master);
var amplitude;
amplitude = function () {
  'use strict';
  var p5sound = master;
  /**
   *  Amplitude measures volume between 0.0 and 1.0.
   *  Listens to all p5sound by default, or use setInput()
   *  to listen to a specific sound source. Accepts an optional
   *  smoothing value, which defaults to 0. 
   *
   *  @class p5.Amplitude
   *  @constructor
   *  @param {Number} [smoothing] between 0.0 and .999 to smooth
   *                             amplitude readings (defaults to 0)
   *  @return {Object}    Amplitude Object
   *  @example
   *  <div><code>
   *  var sound, amplitude, cnv;
   *  
   *  function preload(){
   *    sound = loadSound('assets/beat.mp3');
   *  }
   *  function setup() {
   *    cnv = createCanvas(100,100);
   *    amplitude = new p5.Amplitude();
   *
   *    // start / stop the sound when canvas is clicked
   *    cnv.mouseClicked(function() {
   *      if (sound.isPlaying() ){
   *        sound.stop();
   *      } else {
   *        sound.play();
   *      }
   *    });
   *  }
   *  function draw() {
   *    background(0);
   *    fill(255);
   *    var level = amplitude.getLevel();
   *    var size = map(level, 0, 1, 0, 200);
   *    ellipse(width/2, height/2, size, size);
   *  }
   *
   *  </code></div>
   */
  p5.Amplitude = function (smoothing) {
    // Set to 2048 for now. In future iterations, this should be inherited or parsed from p5sound's default
    this.bufferSize = 2048;
    // set audio context
    this.audiocontext = p5sound.audiocontext;
    this.processor = this.audiocontext.createScriptProcessor(this.bufferSize, 2, 1);
    // for connections
    this.input = this.processor;
    this.output = this.audiocontext.createGain();
    // smoothing defaults to 0
    this.smoothing = smoothing || 0;
    // the variables to return
    this.volume = 0;
    this.average = 0;
    this.stereoVol = [
      0,
      0
    ];
    this.stereoAvg = [
      0,
      0
    ];
    this.stereoVolNorm = [
      0,
      0
    ];
    this.volMax = 0.001;
    this.normalize = false;
    this.processor.onaudioprocess = this._audioProcess.bind(this);
    this.processor.connect(this.output);
    this.output.gain.value = 0;
    // this may only be necessary because of a Chrome bug
    this.output.connect(this.audiocontext.destination);
    // connect to p5sound master output by default, unless set by input()
    p5sound.meter.connect(this.processor);
    // add this p5.SoundFile to the soundArray
    p5sound.soundArray.push(this);
  };
  /**
   *  Connects to the p5sound instance (master output) by default.
   *  Optionally, you can pass in a specific source (i.e. a soundfile).
   *
   *  @method setInput
   *  @param {soundObject|undefined} [snd] set the sound source
   *                                       (optional, defaults to
   *                                       master output)
   *  @param {Number|undefined} [smoothing] a range between 0.0 and 1.0
   *                                        to smooth amplitude readings
   *  @example
   *  <div><code>
   *  function preload(){
   *    sound1 = loadSound('assets/beat.mp3');
   *    sound2 = loadSound('assets/drum.mp3');
   *  }
   *  function setup(){
   *    amplitude = new p5.Amplitude();
   *    sound1.play();
   *    sound2.play();
   *    amplitude.setInput(sound2);
   *  }
   *  function draw() {
   *    background(0);
   *    fill(255);
   *    var level = amplitude.getLevel();
   *    var size = map(level, 0, 1, 0, 200);
   *    ellipse(width/2, height/2, size, size);
   *  }
   *  function mouseClicked(){
   *    sound1.stop();
   *    sound2.stop();
   *  }
   *  </code></div>
   */
  p5.Amplitude.prototype.setInput = function (source, smoothing) {
    p5sound.meter.disconnect();
    if (smoothing) {
      this.smoothing = smoothing;
    }
    // connect to the master out of p5s instance if no snd is provided
    if (source == null) {
      console.log('Amplitude input source is not ready! Connecting to master output instead');
      p5sound.meter.connect(this.processor);
    } else if (source instanceof p5.Signal) {
      source.output.connect(this.processor);
    } else if (source) {
      source.connect(this.processor);
      this.processor.disconnect();
      this.processor.connect(this.output);
    } else {
      p5sound.meter.connect(this.processor);
    }
  };
  p5.Amplitude.prototype.connect = function (unit) {
    if (unit) {
      if (unit.hasOwnProperty('input')) {
        this.output.connect(unit.input);
      } else {
        this.output.connect(unit);
      }
    } else {
      this.output.connect(this.panner.connect(p5sound.input));
    }
  };
  p5.Amplitude.prototype.disconnect = function (unit) {
    this.output.disconnect();
  };
  // TO DO make this stereo / dependent on # of audio channels
  p5.Amplitude.prototype._audioProcess = function (event) {
    for (var channel = 0; channel < event.inputBuffer.numberOfChannels; channel++) {
      var inputBuffer = event.inputBuffer.getChannelData(channel);
      var bufLength = inputBuffer.length;
      var total = 0;
      var sum = 0;
      var x;
      for (var i = 0; i < bufLength; i++) {
        x = inputBuffer[i];
        if (this.normalize) {
          total += Math.max(Math.min(x / this.volMax, 1), -1);
          sum += Math.max(Math.min(x / this.volMax, 1), -1) * Math.max(Math.min(x / this.volMax, 1), -1);
        } else {
          total += x;
          sum += x * x;
        }
      }
      var average = total / bufLength;
      // ... then take the square root of the sum.
      var rms = Math.sqrt(sum / bufLength);
      this.stereoVol[channel] = Math.max(rms, this.stereoVol[channel] * this.smoothing);
      this.stereoAvg[channel] = Math.max(average, this.stereoVol[channel] * this.smoothing);
      this.volMax = Math.max(this.stereoVol[channel], this.volMax);
    }
    // add volume from all channels together
    var self = this;
    var volSum = this.stereoVol.reduce(function (previousValue, currentValue, index) {
      self.stereoVolNorm[index - 1] = Math.max(Math.min(self.stereoVol[index - 1] / self.volMax, 1), 0);
      self.stereoVolNorm[index] = Math.max(Math.min(self.stereoVol[index] / self.volMax, 1), 0);
      return previousValue + currentValue;
    });
    // volume is average of channels
    this.volume = volSum / this.stereoVol.length;
    // normalized value
    this.volNorm = Math.max(Math.min(this.volume / this.volMax, 1), 0);
  };
  /**
   *  Returns a single Amplitude reading at the moment it is called.
   *  For continuous readings, run in the draw loop.
   *
   *  @method getLevel
   *  @param {Number} [channel] Optionally return only channel 0 (left) or 1 (right)
   *  @return {Number}       Amplitude as a number between 0.0 and 1.0
   *  @example
   *  <div><code>
   *  function preload(){
   *    sound = loadSound('assets/beat.mp3');
   *  }
   *  function setup() { 
   *    amplitude = new p5.Amplitude();
   *    sound.play();
   *  }
   *  function draw() {
   *    background(0);
   *    fill(255);
   *    var level = amplitude.getLevel();
   *    var size = map(level, 0, 1, 0, 200);
   *    ellipse(width/2, height/2, size, size);
   *  }
   *  function mouseClicked(){
   *    sound.stop();
   *  }
   *  </code></div>
   */
  p5.Amplitude.prototype.getLevel = function (channel) {
    if (typeof channel !== 'undefined') {
      if (this.normalize) {
        return this.stereoVolNorm[channel];
      } else {
        return this.stereoVol[channel];
      }
    } else if (this.normalize) {
      return this.volNorm;
    } else {
      return this.volume;
    }
  };
  /**
   * Determines whether the results of Amplitude.process() will be
   * Normalized. To normalize, Amplitude finds the difference the
   * loudest reading it has processed and the maximum amplitude of
   * 1.0. Amplitude adds this difference to all values to produce
   * results that will reliably map between 0.0 and 1.0. However,
   * if a louder moment occurs, the amount that Normalize adds to
   * all the values will change. Accepts an optional boolean parameter
   * (true or false). Normalizing is off by default.
   *
   * @method toggleNormalize
   * @param {boolean} [boolean] set normalize to true (1) or false (0)
   */
  p5.Amplitude.prototype.toggleNormalize = function (bool) {
    if (typeof bool === 'boolean') {
      this.normalize = bool;
    } else {
      this.normalize = !this.normalize;
    }
  };
  /**
   *  Smooth Amplitude analysis by averaging with the last analysis 
   *  frame. Off by default.
   *
   *  @method smooth
   *  @param {Number} set smoothing from 0.0 <= 1
   */
  p5.Amplitude.prototype.smooth = function (s) {
    if (s >= 0 && s < 1) {
      this.smoothing = s;
    } else {
      console.log('Error: smoothing must be between 0 and 1');
    }
  };
  p5.Amplitude.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.input.disconnect();
    this.output.disconnect();
    this.input = this.processor = undefined;
    this.output = undefined;
  };
}(master);
var fft;
fft = function () {
  'use strict';
  var p5sound = master;
  /**
   *  <p>FFT (Fast Fourier Transform) is an analysis algorithm that
   *  isolates individual
   *  <a href="https://en.wikipedia.org/wiki/Audio_frequency">
   *  audio frequencies</a> within a waveform.</p>
   *
   *  <p>Once instantiated, a p5.FFT object can return an array based on
   *  two types of analyses: <br> • <code>FFT.waveform()</code> computes
   *  amplitude values along the time domain. The array indices correspond
   *  to samples across a brief moment in time. Each value represents
   *  amplitude of the waveform at that sample of time.<br>
   *  • <code>FFT.analyze() </code> computes amplitude values along the
   *  frequency domain. The array indices correspond to frequencies (i.e.
   *  pitches), from the lowest to the highest that humans can hear. Each
   *  value represents amplitude at that slice of the frequency spectrum.
   *  Use with <code>getEnergy()</code> to measure amplitude at specific
   *  frequencies, or within a range of frequencies. </p>
   *
   *  <p>FFT analyzes a very short snapshot of sound called a sample
   *  buffer. It returns an array of amplitude measurements, referred
   *  to as <code>bins</code>. The array is 1024 bins long by default.
   *  You can change the bin array length, but it must be a power of 2
   *  between 16 and 1024 in order for the FFT algorithm to function
   *  correctly. The actual size of the FFT buffer is twice the 
   *  number of bins, so given a standard sample rate, the buffer is
   *  2048/44100 seconds long.</p>
   *  
   * 
   *  @class p5.FFT
   *  @constructor
   *  @param {Number} [smoothing]   Smooth results of Freq Spectrum.
   *                                0.0 < smoothing < 1.0.
   *                                Defaults to 0.8.
   *  @param {Number} [bins]    Length of resulting array.
   *                            Must be a power of two between
   *                            16 and 1024. Defaults to 1024.
   *  @return {Object}    FFT Object
   *  @example
   *  <div><code>
   *  function preload(){
   *    sound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *  
   *  function setup(){
   *    var cnv = createCanvas(100,100);
   *    cnv.mouseClicked(togglePlay);
   *    fft = new p5.FFT();
   *    sound.amp(0.2);
   *  }
   *  
   *  function draw(){
   *    background(0);
   *  
   *    var spectrum = fft.analyze(); 
   *    noStroke();
   *    fill(0,255,0); // spectrum is green
   *    for (var i = 0; i< spectrum.length; i++){
   *      var x = map(i, 0, spectrum.length, 0, width);
   *      var h = -height + map(spectrum[i], 0, 255, height, 0);
   *      rect(x, height, width / spectrum.length, h )
   *    }
   *  
   *    var waveform = fft.waveform();
   *    noFill();
   *    beginShape();
   *    stroke(255,0,0); // waveform is red
   *    strokeWeight(1);
   *    for (var i = 0; i< waveform.length; i++){
   *      var x = map(i, 0, waveform.length, 0, width);
   *      var y = map( waveform[i], -1, 1, 0, height);
   *      vertex(x,y);
   *    }
   *    endShape();
   *  
   *    text('click to play/pause', 4, 10);
   *  }
   *  
   *  // fade sound if mouse is over canvas
   *  function togglePlay() {
   *    if (sound.isPlaying()) {
   *      sound.pause();
   *    } else {
   *      sound.loop();
   *    }
   *  }
   *  </code></div>
   */
  p5.FFT = function (smoothing, bins) {
    this.smoothing = smoothing || 0.8;
    this.bins = bins || 1024;
    var FFT_SIZE = bins * 2 || 2048;
    this.input = this.analyser = p5sound.audiocontext.createAnalyser();
    // default connections to p5sound fftMeter
    p5sound.fftMeter.connect(this.analyser);
    this.analyser.smoothingTimeConstant = this.smoothing;
    this.analyser.fftSize = FFT_SIZE;
    this.freqDomain = new Uint8Array(this.analyser.frequencyBinCount);
    this.timeDomain = new Uint8Array(this.analyser.frequencyBinCount);
    // predefined frequency ranages, these will be tweakable
    this.bass = [
      20,
      140
    ];
    this.lowMid = [
      140,
      400
    ];
    this.mid = [
      400,
      2600
    ];
    this.highMid = [
      2600,
      5200
    ];
    this.treble = [
      5200,
      14000
    ];
    // add this p5.SoundFile to the soundArray
    p5sound.soundArray.push(this);
  };
  /**
   *  Set the input source for the FFT analysis. If no source is
   *  provided, FFT will analyze all sound in the sketch.
   *
   *  @method  setInput
   *  @param {Object} [source] p5.sound object (or web audio API source node)
   */
  p5.FFT.prototype.setInput = function (source) {
    if (!source) {
      p5sound.fftMeter.connect(this.analyser);
    } else {
      if (source.output) {
        source.output.connect(this.analyser);
      } else if (source.connect) {
        source.connect(this.analyser);
      }
      p5sound.fftMeter.disconnect();
    }
  };
  /**
   *  Returns an array of amplitude values (between -1.0 and +1.0) that represent
   *  a snapshot of amplitude readings in a single buffer. Length will be
   *  equal to bins (defaults to 1024). Can be used to draw the waveform
   *  of a sound. 
   *  
   *  @method waveform
   *  @param {Number} [bins]    Must be a power of two between
   *                            16 and 1024. Defaults to 1024.
   *  @param {String} [precision] If any value is provided, will return results
   *                              in a Float32 Array which is more precise
   *                              than a regular array.
   *  @return {Array}  Array    Array of amplitude values (-1 to 1)
   *                            over time. Array length = bins.
   *
   */
  p5.FFT.prototype.waveform = function () {
    var bins, mode, normalArray;
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
        bins = arguments[i];
        this.analyser.fftSize = bins * 2;
      }
      if (typeof arguments[i] === 'string') {
        mode = arguments[i];
      }
    }
    // getFloatFrequencyData doesnt work in Safari as of 5/2015
    if (mode && !p5.prototype._isSafari()) {
      timeToFloat(this, this.timeDomain);
      this.analyser.getFloatTimeDomainData(this.timeDomain);
      return this.timeDomain;
    } else {
      timeToInt(this, this.timeDomain);
      this.analyser.getByteTimeDomainData(this.timeDomain);
      var normalArray = new Array();
      for (var i = 0; i < this.timeDomain.length; i++) {
        var scaled = p5.prototype.map(this.timeDomain[i], 0, 255, -1, 1);
        normalArray.push(scaled);
      }
      return normalArray;
    }
  };
  /**
   *  Returns an array of amplitude values (between 0 and 255)
   *  across the frequency spectrum. Length is equal to FFT bins
   *  (1024 by default). The array indices correspond to frequencies
   *  (i.e. pitches), from the lowest to the highest that humans can
   *  hear. Each value represents amplitude at that slice of the
   *  frequency spectrum. Must be called prior to using
   *  <code>getEnergy()</code>.
   *
   *  @method analyze
   *  @param {Number} [bins]    Must be a power of two between
   *                             16 and 1024. Defaults to 1024.
   *  @param {Number} [scale]    If "dB," returns decibel
   *                             float measurements between
   *                             -140 and 0 (max).
   *                             Otherwise returns integers from 0-255.
   *  @return {Array} spectrum    Array of energy (amplitude/volume)
   *                              values across the frequency spectrum.
   *                              Lowest energy (silence) = 0, highest
   *                              possible is 255.
   *  @example
   *  <div><code>
   *  var osc;
   *  var fft;
   *
   *  function setup(){
   *    createCanvas(100,100);
   *    osc = new p5.Oscillator();
   *    osc.amp(0);
   *    osc.start();
   *    fft = new p5.FFT();
   *  }
   *
   *  function draw(){
   *    background(0);
   *
   *    var freq = map(mouseX, 0, 800, 20, 15000);
   *    freq = constrain(freq, 1, 20000);
   *    osc.freq(freq);
   *
   *    var spectrum = fft.analyze(); 
   *    noStroke();
   *    fill(0,255,0); // spectrum is green
   *    for (var i = 0; i< spectrum.length; i++){
   *      var x = map(i, 0, spectrum.length, 0, width);
   *      var h = -height + map(spectrum[i], 0, 255, height, 0);
   *      rect(x, height, width / spectrum.length, h );
   *    }
   *
   *    stroke(255);
   *    text('Freq: ' + round(freq)+'Hz', 10, 10); 
   *
   *    isMouseOverCanvas();
   *  }
   *
   *  // only play sound when mouse is over canvas
   *  function isMouseOverCanvas() {
   *    var mX = mouseX, mY = mouseY;
   *    if (mX > 0 && mX < width && mY < height && mY > 0) {
   *      osc.amp(0.5, 0.2);
   *    } else {
   *      osc.amp(0, 0.2);
   *    }
   *  }
   *  </code></div>
   *                                   
   *
   */
  p5.FFT.prototype.analyze = function () {
    var bins, mode;
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
        bins = this.bins = arguments[i];
        this.analyser.fftSize = this.bins * 2;
      }
      if (typeof arguments[i] === 'string') {
        mode = arguments[i];
      }
    }
    if (mode && mode.toLowerCase() === 'db') {
      freqToFloat(this);
      this.analyser.getFloatFrequencyData(this.freqDomain);
      return this.freqDomain;
    } else {
      freqToInt(this, this.freqDomain);
      this.analyser.getByteFrequencyData(this.freqDomain);
      var normalArray = Array.apply([], this.freqDomain);
      normalArray.length === this.analyser.fftSize;
      normalArray.constructor === Array;
      return normalArray;
    }
  };
  /**
   *  Returns the amount of energy (volume) at a specific
   *  <a href="en.wikipedia.org/wiki/Audio_frequency" target="_blank">
   *  frequency</a>, or the average amount of energy between two
   *  frequencies. Accepts Number(s) corresponding
   *  to frequency (in Hz), or a String corresponding to predefined
   *  frequency ranges ("bass", "lowMid", "mid", "highMid", "treble").
   *  Returns a range between 0 (no energy/volume at that frequency) and
   *  255 (maximum energy). 
   *  <em>NOTE: analyze() must be called prior to getEnergy(). Analyze()
   *  tells the FFT to analyze frequency data, and getEnergy() uses
   *  the results determine the value at a specific frequency or
   *  range of frequencies.</em></p>
   *  
   *  @method  getEnergy
   *  @param  {Number|String} frequency1   Will return a value representing
   *                                energy at this frequency. Alternately,
   *                                the strings "bass", "lowMid" "mid",
   *                                "highMid", and "treble" will return
   *                                predefined frequency ranges.
   *  @param  {Number} [frequency2] If a second frequency is given,
   *                                will return average amount of
   *                                energy that exists between the
   *                                two frequencies.
   *  @return {Number}   Energy   Energy (volume/amplitude) from
   *                              0 and 255.
   *                                       
   */
  p5.FFT.prototype.getEnergy = function (frequency1, frequency2) {
    var nyquist = p5sound.audiocontext.sampleRate / 2;
    if (frequency1 === 'bass') {
      frequency1 = this.bass[0];
      frequency2 = this.bass[1];
    } else if (frequency1 === 'lowMid') {
      frequency1 = this.lowMid[0];
      frequency2 = this.lowMid[1];
    } else if (frequency1 === 'mid') {
      frequency1 = this.mid[0];
      frequency2 = this.mid[1];
    } else if (frequency1 === 'highMid') {
      frequency1 = this.highMid[0];
      frequency2 = this.highMid[1];
    } else if (frequency1 === 'treble') {
      frequency1 = this.treble[0];
      frequency2 = this.treble[1];
    }
    if (typeof frequency1 !== 'number') {
      throw 'invalid input for getEnergy()';
    } else if (!frequency2) {
      var index = Math.round(frequency1 / nyquist * this.freqDomain.length);
      return this.freqDomain[index];
    } else if (frequency1 && frequency2) {
      // if second is higher than first
      if (frequency1 > frequency2) {
        var swap = frequency2;
        frequency2 = frequency1;
        frequency1 = swap;
      }
      var lowIndex = Math.round(frequency1 / nyquist * this.freqDomain.length);
      var highIndex = Math.round(frequency2 / nyquist * this.freqDomain.length);
      var total = 0;
      var numFrequencies = 0;
      // add up all of the values for the frequencies
      for (var i = lowIndex; i <= highIndex; i++) {
        total += this.freqDomain[i];
        numFrequencies += 1;
      }
      // divide by total number of frequencies
      var toReturn = total / numFrequencies;
      return toReturn;
    } else {
      throw 'invalid input for getEnergy()';
    }
  };
  // compatability with v.012, changed to getEnergy in v.0121. Will be deprecated...
  p5.FFT.prototype.getFreq = function (freq1, freq2) {
    console.log('getFreq() is deprecated. Please use getEnergy() instead.');
    var x = this.getEnergy(freq1, freq2);
    return x;
  };
  /**
   *  Returns the 
   *  <a href="http://en.wikipedia.org/wiki/Spectral_centroid" target="_blank">
   *  spectral centroid</a> of the input signal.
   *  <em>NOTE: analyze() must be called prior to getCentroid(). Analyze()
   *  tells the FFT to analyze frequency data, and getCentroid() uses
   *  the results determine the spectral centroid.</em></p>
   *  
   *  @method  getCentroid
   *  @return {Number}   Spectral Centroid Frequency   Frequency of the spectral centroid in Hz.
   * 
   *
   * @example
   *  <div><code>
   *
   *
   *function setup(){
   *  cnv = createCanvas(800,400);
   *  sound = new p5.AudioIn();
   *  sound.start();
   *  fft = new p5.FFT();
   *  sound.connect(fft);
   *}
   *
   *
   *function draw(){
   *
   *  var centroidplot = 0.0;
   *  var spectralCentroid = 0;
   *  
   *  
   *  background(0);
   *  stroke(0,255,0);
   *  var spectrum = fft.analyze(); 
   *  fill(0,255,0); // spectrum is green
   *  
   *  //draw the spectrum
   *  
   *  for (var i = 0; i< spectrum.length; i++){
   *    var x = map(log(i), 0, log(spectrum.length), 0, width);
   *    var h = map(spectrum[i], 0, 255, 0, height);
   *    var rectangle_width = (log(i+1)-log(i))*(width/log(spectrum.length));
   *    rect(x, height, rectangle_width, -h )
   *  }
  
   *  var nyquist = 22050;
   *  
   *  // get the centroid
   *  spectralCentroid = fft.getCentroid();
   *  
   *  // the mean_freq_index calculation is for the display.
   *  var mean_freq_index = spectralCentroid/(nyquist/spectrum.length);
   *
   *  centroidplot = map(log(mean_freq_index), 0, log(spectrum.length), 0, width);
   *
   *
   *  stroke(255,0,0); // the line showing where the centroid is will be red
   *  
   *  rect(centroidplot, 0, width / spectrum.length, height)
   *  noStroke();
   *  fill(255,255,255);  // text is white
   *  textSize(40);
   *  text("centroid: "+round(spectralCentroid)+" Hz", 10, 40);
   *}
   * </code></div>
   */
  p5.FFT.prototype.getCentroid = function () {
    var nyquist = p5sound.audiocontext.sampleRate / 2;
    var cumulative_sum = 0;
    var centroid_normalization = 0;
    for (var i = 0; i < this.freqDomain.length; i++) {
      cumulative_sum += i * this.freqDomain[i];
      centroid_normalization += this.freqDomain[i];
    }
    var mean_freq_index = 0;
    if (centroid_normalization != 0) {
      mean_freq_index = cumulative_sum / centroid_normalization;
    }
    var spec_centroid_freq = mean_freq_index * (nyquist / this.freqDomain.length);
    return spec_centroid_freq;
  };
  /**
   *  Smooth FFT analysis by averaging with the last analysis frame.
   *  
   *  @method smooth
   *  @param {Number} smoothing    0.0 < smoothing < 1.0.
   *                               Defaults to 0.8.
   */
  p5.FFT.prototype.smooth = function (s) {
    if (s) {
      this.smoothing = s;
    }
    this.analyser.smoothingTimeConstant = s;
  };
  p5.FFT.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.analyser.disconnect();
    this.analyser = undefined;
  };
  // helper methods to convert type from float (dB) to int (0-255)
  var freqToFloat = function (fft) {
    if (fft.freqDomain instanceof Float32Array === false) {
      fft.freqDomain = new Float32Array(fft.analyser.frequencyBinCount);
    }
  };
  var freqToInt = function (fft) {
    if (fft.freqDomain instanceof Uint8Array === false) {
      fft.freqDomain = new Uint8Array(fft.analyser.frequencyBinCount);
    }
  };
  var timeToFloat = function (fft) {
    if (fft.timeDomain instanceof Float32Array === false) {
      fft.timeDomain = new Float32Array(fft.analyser.frequencyBinCount);
    }
  };
  var timeToInt = function (fft) {
    if (fft.timeDomain instanceof Uint8Array === false) {
      fft.timeDomain = new Uint8Array(fft.analyser.frequencyBinCount);
    }
  };
}(master);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Tone;
Tone_core_Tone = function () {
  'use strict';
  function isUndef(val) {
    return val === void 0;
  }
  function isFunction(val) {
    return typeof val === 'function';
  }
  var audioContext;
  if (isUndef(window.AudioContext)) {
    window.AudioContext = window.webkitAudioContext;
  }
  if (isUndef(window.OfflineAudioContext)) {
    window.OfflineAudioContext = window.webkitOfflineAudioContext;
  }
  if (!isUndef(AudioContext)) {
    audioContext = new AudioContext();
  } else {
    throw new Error('Web Audio is not supported in this browser');
  }
  if (!isFunction(AudioContext.prototype.createGain)) {
    AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
  }
  if (!isFunction(AudioContext.prototype.createDelay)) {
    AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode;
  }
  if (!isFunction(AudioContext.prototype.createPeriodicWave)) {
    AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;
  }
  if (!isFunction(AudioBufferSourceNode.prototype.start)) {
    AudioBufferSourceNode.prototype.start = AudioBufferSourceNode.prototype.noteGrainOn;
  }
  if (!isFunction(AudioBufferSourceNode.prototype.stop)) {
    AudioBufferSourceNode.prototype.stop = AudioBufferSourceNode.prototype.noteOff;
  }
  if (!isFunction(OscillatorNode.prototype.start)) {
    OscillatorNode.prototype.start = OscillatorNode.prototype.noteOn;
  }
  if (!isFunction(OscillatorNode.prototype.stop)) {
    OscillatorNode.prototype.stop = OscillatorNode.prototype.noteOff;
  }
  if (!isFunction(OscillatorNode.prototype.setPeriodicWave)) {
    OscillatorNode.prototype.setPeriodicWave = OscillatorNode.prototype.setWaveTable;
  }
  AudioNode.prototype._nativeConnect = AudioNode.prototype.connect;
  AudioNode.prototype.connect = function (B, outNum, inNum) {
    if (B.input) {
      if (Array.isArray(B.input)) {
        if (isUndef(inNum)) {
          inNum = 0;
        }
        this.connect(B.input[inNum]);
      } else {
        this.connect(B.input, outNum, inNum);
      }
    } else {
      try {
        if (B instanceof AudioNode) {
          this._nativeConnect(B, outNum, inNum);
        } else {
          this._nativeConnect(B, outNum);
        }
      } catch (e) {
        throw new Error('error connecting to node: ' + B);
      }
    }
  };
  var Tone = function (inputs, outputs) {
    if (isUndef(inputs) || inputs === 1) {
      this.input = this.context.createGain();
    } else if (inputs > 1) {
      this.input = new Array(inputs);
    }
    if (isUndef(outputs) || outputs === 1) {
      this.output = this.context.createGain();
    } else if (outputs > 1) {
      this.output = new Array(inputs);
    }
  };
  Tone.prototype.set = function (params, value, rampTime) {
    if (this.isObject(params)) {
      rampTime = value;
    } else if (this.isString(params)) {
      var tmpObj = {};
      tmpObj[params] = value;
      params = tmpObj;
    }
    for (var attr in params) {
      value = params[attr];
      var parent = this;
      if (attr.indexOf('.') !== -1) {
        var attrSplit = attr.split('.');
        for (var i = 0; i < attrSplit.length - 1; i++) {
          parent = parent[attrSplit[i]];
        }
        attr = attrSplit[attrSplit.length - 1];
      }
      var param = parent[attr];
      if (isUndef(param)) {
        continue;
      }
      if (Tone.Signal && param instanceof Tone.Signal || Tone.Param && param instanceof Tone.Param) {
        if (param.value !== value) {
          if (isUndef(rampTime)) {
            param.value = value;
          } else {
            param.rampTo(value, rampTime);
          }
        }
      } else if (param instanceof AudioParam) {
        if (param.value !== value) {
          param.value = value;
        }
      } else if (param instanceof Tone) {
        param.set(value);
      } else if (param !== value) {
        parent[attr] = value;
      }
    }
    return this;
  };
  Tone.prototype.get = function (params) {
    if (isUndef(params)) {
      params = this._collectDefaults(this.constructor);
    } else if (this.isString(params)) {
      params = [params];
    }
    var ret = {};
    for (var i = 0; i < params.length; i++) {
      var attr = params[i];
      var parent = this;
      var subRet = ret;
      if (attr.indexOf('.') !== -1) {
        var attrSplit = attr.split('.');
        for (var j = 0; j < attrSplit.length - 1; j++) {
          var subAttr = attrSplit[j];
          subRet[subAttr] = subRet[subAttr] || {};
          subRet = subRet[subAttr];
          parent = parent[subAttr];
        }
        attr = attrSplit[attrSplit.length - 1];
      }
      var param = parent[attr];
      if (this.isObject(params[attr])) {
        subRet[attr] = param.get();
      } else if (Tone.Signal && param instanceof Tone.Signal) {
        subRet[attr] = param.value;
      } else if (Tone.Param && param instanceof Tone.Param) {
        subRet[attr] = param.value;
      } else if (param instanceof AudioParam) {
        subRet[attr] = param.value;
      } else if (param instanceof Tone) {
        subRet[attr] = param.get();
      } else if (!isFunction(param) && !isUndef(param)) {
        subRet[attr] = param;
      }
    }
    return ret;
  };
  Tone.prototype._collectDefaults = function (constr) {
    var ret = [];
    if (!isUndef(constr.defaults)) {
      ret = Object.keys(constr.defaults);
    }
    if (!isUndef(constr._super)) {
      var superDefs = this._collectDefaults(constr._super);
      for (var i = 0; i < superDefs.length; i++) {
        if (ret.indexOf(superDefs[i]) === -1) {
          ret.push(superDefs[i]);
        }
      }
    }
    return ret;
  };
  Tone.prototype.toString = function () {
    for (var className in Tone) {
      var isLetter = className[0].match(/^[A-Z]$/);
      var sameConstructor = Tone[className] === this.constructor;
      if (isFunction(Tone[className]) && isLetter && sameConstructor) {
        return className;
      }
    }
    return 'Tone';
  };
  Tone.context = audioContext;
  Tone.prototype.context = Tone.context;
  Tone.prototype.bufferSize = 2048;
  Tone.prototype.blockTime = 128 / Tone.context.sampleRate;
  Tone.prototype.dispose = function () {
    if (!this.isUndef(this.input)) {
      if (this.input instanceof AudioNode) {
        this.input.disconnect();
      }
      this.input = null;
    }
    if (!this.isUndef(this.output)) {
      if (this.output instanceof AudioNode) {
        this.output.disconnect();
      }
      this.output = null;
    }
    return this;
  };
  var _silentNode = null;
  Tone.prototype.noGC = function () {
    this.output.connect(_silentNode);
    return this;
  };
  AudioNode.prototype.noGC = function () {
    this.connect(_silentNode);
    return this;
  };
  Tone.prototype.connect = function (unit, outputNum, inputNum) {
    if (Array.isArray(this.output)) {
      outputNum = this.defaultArg(outputNum, 0);
      this.output[outputNum].connect(unit, 0, inputNum);
    } else {
      this.output.connect(unit, outputNum, inputNum);
    }
    return this;
  };
  Tone.prototype.disconnect = function (outputNum) {
    if (Array.isArray(this.output)) {
      outputNum = this.defaultArg(outputNum, 0);
      this.output[outputNum].disconnect();
    } else {
      this.output.disconnect();
    }
    return this;
  };
  Tone.prototype.connectSeries = function () {
    if (arguments.length > 1) {
      var currentUnit = arguments[0];
      for (var i = 1; i < arguments.length; i++) {
        var toUnit = arguments[i];
        currentUnit.connect(toUnit);
        currentUnit = toUnit;
      }
    }
    return this;
  };
  Tone.prototype.connectParallel = function () {
    var connectFrom = arguments[0];
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        var connectTo = arguments[i];
        connectFrom.connect(connectTo);
      }
    }
    return this;
  };
  Tone.prototype.chain = function () {
    if (arguments.length > 0) {
      var currentUnit = this;
      for (var i = 0; i < arguments.length; i++) {
        var toUnit = arguments[i];
        currentUnit.connect(toUnit);
        currentUnit = toUnit;
      }
    }
    return this;
  };
  Tone.prototype.fan = function () {
    if (arguments.length > 0) {
      for (var i = 0; i < arguments.length; i++) {
        this.connect(arguments[i]);
      }
    }
    return this;
  };
  AudioNode.prototype.chain = Tone.prototype.chain;
  AudioNode.prototype.fan = Tone.prototype.fan;
  Tone.prototype.defaultArg = function (given, fallback) {
    if (this.isObject(given) && this.isObject(fallback)) {
      var ret = {};
      for (var givenProp in given) {
        ret[givenProp] = this.defaultArg(fallback[givenProp], given[givenProp]);
      }
      for (var fallbackProp in fallback) {
        ret[fallbackProp] = this.defaultArg(given[fallbackProp], fallback[fallbackProp]);
      }
      return ret;
    } else {
      return isUndef(given) ? fallback : given;
    }
  };
  Tone.prototype.optionsObject = function (values, keys, defaults) {
    var options = {};
    if (values.length === 1 && this.isObject(values[0])) {
      options = values[0];
    } else {
      for (var i = 0; i < keys.length; i++) {
        options[keys[i]] = values[i];
      }
    }
    if (!this.isUndef(defaults)) {
      return this.defaultArg(options, defaults);
    } else {
      return options;
    }
  };
  Tone.prototype.isUndef = isUndef;
  Tone.prototype.isFunction = isFunction;
  Tone.prototype.isNumber = function (arg) {
    return typeof arg === 'number';
  };
  Tone.prototype.isObject = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Object]' && arg.constructor === Object;
  };
  Tone.prototype.isBoolean = function (arg) {
    return typeof arg === 'boolean';
  };
  Tone.prototype.isArray = function (arg) {
    return Array.isArray(arg);
  };
  Tone.prototype.isString = function (arg) {
    return typeof arg === 'string';
  };
  Tone.noOp = function () {
  };
  Tone.prototype._readOnly = function (property) {
    if (Array.isArray(property)) {
      for (var i = 0; i < property.length; i++) {
        this._readOnly(property[i]);
      }
    } else {
      Object.defineProperty(this, property, {
        writable: false,
        enumerable: true
      });
    }
  };
  Tone.prototype._writable = function (property) {
    if (Array.isArray(property)) {
      for (var i = 0; i < property.length; i++) {
        this._writable(property[i]);
      }
    } else {
      Object.defineProperty(this, property, { writable: true });
    }
  };
  Tone.State = {
    Started: 'started',
    Stopped: 'stopped',
    Paused: 'paused'
  };
  Tone.prototype.equalPowerScale = function (percent) {
    var piFactor = 0.5 * Math.PI;
    return Math.sin(percent * piFactor);
  };
  Tone.prototype.dbToGain = function (db) {
    return Math.pow(2, db / 6);
  };
  Tone.prototype.gainToDb = function (gain) {
    return 20 * (Math.log(gain) / Math.LN10);
  };
  Tone.prototype.now = function () {
    return this.context.currentTime;
  };
  Tone.extend = function (child, parent) {
    if (isUndef(parent)) {
      parent = Tone;
    }
    function TempConstructor() {
    }
    TempConstructor.prototype = parent.prototype;
    child.prototype = new TempConstructor();
    child.prototype.constructor = child;
    child._super = parent;
  };
  var newContextCallbacks = [];
  Tone._initAudioContext = function (callback) {
    callback(Tone.context);
    newContextCallbacks.push(callback);
  };
  Tone.setContext = function (ctx) {
    Tone.prototype.context = ctx;
    Tone.context = ctx;
    for (var i = 0; i < newContextCallbacks.length; i++) {
      newContextCallbacks[i](ctx);
    }
  };
  Tone.startMobile = function () {
    var osc = Tone.context.createOscillator();
    var silent = Tone.context.createGain();
    silent.gain.value = 0;
    osc.connect(silent);
    silent.connect(Tone.context.destination);
    var now = Tone.context.currentTime;
    osc.start(now);
    osc.stop(now + 1);
  };
  Tone._initAudioContext(function (audioContext) {
    Tone.prototype.blockTime = 128 / audioContext.sampleRate;
    _silentNode = audioContext.createGain();
    _silentNode.gain.value = 0;
    _silentNode.connect(audioContext.destination);
  });
  Tone.version = 'r7-dev';
  return Tone;
}();
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_SignalBase;
Tone_signal_SignalBase = function (Tone) {
  'use strict';
  Tone.SignalBase = function () {
  };
  Tone.extend(Tone.SignalBase);
  Tone.SignalBase.prototype.connect = function (node, outputNumber, inputNumber) {
    if (Tone.Signal && Tone.Signal === node.constructor || Tone.Param && Tone.Param === node.constructor || Tone.TimelineSignal && Tone.TimelineSignal === node.constructor) {
      node._param.cancelScheduledValues(0);
      node._param.value = 0;
      node.overridden = true;
    } else if (node instanceof AudioParam) {
      node.cancelScheduledValues(0);
      node.value = 0;
    }
    Tone.prototype.connect.call(this, node, outputNumber, inputNumber);
    return this;
  };
  return Tone.SignalBase;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_WaveShaper;
Tone_signal_WaveShaper = function (Tone) {
  'use strict';
  Tone.WaveShaper = function (mapping, bufferLen) {
    this._shaper = this.input = this.output = this.context.createWaveShaper();
    this._curve = null;
    if (Array.isArray(mapping)) {
      this.curve = mapping;
    } else if (isFinite(mapping) || this.isUndef(mapping)) {
      this._curve = new Float32Array(this.defaultArg(mapping, 1024));
    } else if (this.isFunction(mapping)) {
      this._curve = new Float32Array(this.defaultArg(bufferLen, 1024));
      this.setMap(mapping);
    }
  };
  Tone.extend(Tone.WaveShaper, Tone.SignalBase);
  Tone.WaveShaper.prototype.setMap = function (mapping) {
    for (var i = 0, len = this._curve.length; i < len; i++) {
      var normalized = i / len * 2 - 1;
      this._curve[i] = mapping(normalized, i);
    }
    this._shaper.curve = this._curve;
    return this;
  };
  Object.defineProperty(Tone.WaveShaper.prototype, 'curve', {
    get: function () {
      return this._shaper.curve;
    },
    set: function (mapping) {
      this._curve = new Float32Array(mapping);
      this._shaper.curve = this._curve;
    }
  });
  Object.defineProperty(Tone.WaveShaper.prototype, 'oversample', {
    get: function () {
      return this._shaper.oversample;
    },
    set: function (oversampling) {
      if ([
          'none',
          '2x',
          '4x'
        ].indexOf(oversampling) !== -1) {
        this._shaper.oversample = oversampling;
      } else {
        throw new Error('invalid oversampling: ' + oversampling);
      }
    }
  });
  Tone.WaveShaper.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._shaper.disconnect();
    this._shaper = null;
    this._curve = null;
    return this;
  };
  return Tone.WaveShaper;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Type;
Tone_core_Type = function (Tone) {
  'use strict';
  Tone.Type = {
    Default: 'number',
    Time: 'time',
    Frequency: 'frequency',
    NormalRange: 'normalRange',
    AudioRange: 'audioRange',
    Decibels: 'db',
    Interval: 'interval',
    BPM: 'bpm',
    Positive: 'positive',
    Cents: 'cents',
    Degrees: 'degrees',
    MIDI: 'midi',
    TransportTime: 'transportTime',
    Ticks: 'tick',
    Note: 'note',
    Milliseconds: 'milliseconds',
    Notation: 'notation'
  };
  Tone.prototype.isNowRelative = function () {
    var nowRelative = new RegExp(/^\s*\+(.)+/i);
    return function (note) {
      return nowRelative.test(note);
    };
  }();
  Tone.prototype.isTicks = function () {
    var tickFormat = new RegExp(/^\d+i$/i);
    return function (note) {
      return tickFormat.test(note);
    };
  }();
  Tone.prototype.isNotation = function () {
    var notationFormat = new RegExp(/^[0-9]+[mnt]$/i);
    return function (note) {
      return notationFormat.test(note);
    };
  }();
  Tone.prototype.isTransportTime = function () {
    var transportTimeFormat = new RegExp(/^(\d+(\.\d+)?\:){1,2}(\d+(\.\d+)?)?$/i);
    return function (transportTime) {
      return transportTimeFormat.test(transportTime);
    };
  }();
  Tone.prototype.isNote = function () {
    var noteFormat = new RegExp(/^[a-g]{1}(b|#|x|bb)?-?[0-9]+$/i);
    return function (note) {
      return noteFormat.test(note);
    };
  }();
  Tone.prototype.isFrequency = function () {
    var freqFormat = new RegExp(/^\d*\.?\d+hz$/i);
    return function (freq) {
      return freqFormat.test(freq);
    };
  }();
  function getTransportBpm() {
    if (Tone.Transport && Tone.Transport.bpm) {
      return Tone.Transport.bpm.value;
    } else {
      return 120;
    }
  }
  function getTransportTimeSignature() {
    if (Tone.Transport && Tone.Transport.timeSignature) {
      return Tone.Transport.timeSignature;
    } else {
      return 4;
    }
  }
  Tone.prototype.notationToSeconds = function (notation, bpm, timeSignature) {
    bpm = this.defaultArg(bpm, getTransportBpm());
    timeSignature = this.defaultArg(timeSignature, getTransportTimeSignature());
    var beatTime = 60 / bpm;
    if (notation === '1n') {
      notation = '1m';
    }
    var subdivision = parseInt(notation, 10);
    var beats = 0;
    if (subdivision === 0) {
      beats = 0;
    }
    var lastLetter = notation.slice(-1);
    if (lastLetter === 't') {
      beats = 4 / subdivision * 2 / 3;
    } else if (lastLetter === 'n') {
      beats = 4 / subdivision;
    } else if (lastLetter === 'm') {
      beats = subdivision * timeSignature;
    } else {
      beats = 0;
    }
    return beatTime * beats;
  };
  Tone.prototype.transportTimeToSeconds = function (transportTime, bpm, timeSignature) {
    bpm = this.defaultArg(bpm, getTransportBpm());
    timeSignature = this.defaultArg(timeSignature, getTransportTimeSignature());
    var measures = 0;
    var quarters = 0;
    var sixteenths = 0;
    var split = transportTime.split(':');
    if (split.length === 2) {
      measures = parseFloat(split[0]);
      quarters = parseFloat(split[1]);
    } else if (split.length === 1) {
      quarters = parseFloat(split[0]);
    } else if (split.length === 3) {
      measures = parseFloat(split[0]);
      quarters = parseFloat(split[1]);
      sixteenths = parseFloat(split[2]);
    }
    var beats = measures * timeSignature + quarters + sixteenths / 4;
    return beats * (60 / bpm);
  };
  Tone.prototype.ticksToSeconds = function (ticks, bpm) {
    if (this.isUndef(Tone.Transport)) {
      return 0;
    }
    ticks = parseFloat(ticks);
    bpm = this.defaultArg(bpm, getTransportBpm());
    var tickTime = 60 / bpm / Tone.Transport.PPQ;
    return tickTime * ticks;
  };
  Tone.prototype.frequencyToSeconds = function (freq) {
    return 1 / parseFloat(freq);
  };
  Tone.prototype.samplesToSeconds = function (samples) {
    return samples / this.context.sampleRate;
  };
  Tone.prototype.secondsToSamples = function (seconds) {
    return seconds * this.context.sampleRate;
  };
  Tone.prototype.secondsToTransportTime = function (seconds, bpm, timeSignature) {
    bpm = this.defaultArg(bpm, getTransportBpm());
    timeSignature = this.defaultArg(timeSignature, getTransportTimeSignature());
    var quarterTime = 60 / bpm;
    var quarters = seconds / quarterTime;
    var measures = Math.floor(quarters / timeSignature);
    var sixteenths = quarters % 1 * 4;
    quarters = Math.floor(quarters) % timeSignature;
    var progress = [
      measures,
      quarters,
      sixteenths
    ];
    return progress.join(':');
  };
  Tone.prototype.secondsToFrequency = function (seconds) {
    return 1 / seconds;
  };
  Tone.prototype.toTransportTime = function (time, bpm, timeSignature) {
    var seconds = this.toSeconds(time);
    return this.secondsToTransportTime(seconds, bpm, timeSignature);
  };
  Tone.prototype.toFrequency = function (freq, now) {
    if (this.isFrequency(freq)) {
      return parseFloat(freq);
    } else if (this.isNotation(freq) || this.isTransportTime(freq)) {
      return this.secondsToFrequency(this.toSeconds(freq, now));
    } else if (this.isNote(freq)) {
      return this.noteToFrequency(freq);
    } else {
      return freq;
    }
  };
  Tone.prototype.toTicks = function (time) {
    if (this.isUndef(Tone.Transport)) {
      return 0;
    }
    var bpm = Tone.Transport.bpm.value;
    var plusNow = 0;
    if (this.isNowRelative(time)) {
      time = time.replace('+', '');
      plusNow = Tone.Transport.ticks;
    } else if (this.isUndef(time)) {
      return Tone.Transport.ticks;
    }
    var seconds = this.toSeconds(time);
    var quarter = 60 / bpm;
    var quarters = seconds / quarter;
    var tickNum = quarters * Tone.Transport.PPQ;
    return Math.round(tickNum + plusNow);
  };
  Tone.prototype.toSamples = function (time) {
    var seconds = this.toSeconds(time);
    return Math.round(seconds * this.context.sampleRate);
  };
  Tone.prototype.toSeconds = function (time, now) {
    now = this.defaultArg(now, this.now());
    if (this.isNumber(time)) {
      return time;
    } else if (this.isString(time)) {
      var plusTime = 0;
      if (this.isNowRelative(time)) {
        time = time.replace('+', '');
        plusTime = now;
      }
      var betweenParens = time.match(/\(([^)(]+)\)/g);
      if (betweenParens) {
        for (var j = 0; j < betweenParens.length; j++) {
          var symbol = betweenParens[j].replace(/[\(\)]/g, '');
          var symbolVal = this.toSeconds(symbol);
          time = time.replace(betweenParens[j], symbolVal);
        }
      }
      if (time.indexOf('@') !== -1) {
        var quantizationSplit = time.split('@');
        if (!this.isUndef(Tone.Transport)) {
          var toQuantize = quantizationSplit[0].trim();
          if (toQuantize === '') {
            toQuantize = undefined;
          }
          if (plusTime > 0) {
            toQuantize = '+' + toQuantize;
            plusTime = 0;
          }
          var subdivision = quantizationSplit[1].trim();
          time = Tone.Transport.quantize(toQuantize, subdivision);
        } else {
          throw new Error('quantization requires Tone.Transport');
        }
      } else {
        var components = time.split(/[\(\)\-\+\/\*]/);
        if (components.length > 1) {
          var originalTime = time;
          for (var i = 0; i < components.length; i++) {
            var symb = components[i].trim();
            if (symb !== '') {
              var val = this.toSeconds(symb);
              time = time.replace(symb, val);
            }
          }
          try {
            time = eval(time);
          } catch (e) {
            throw new EvalError('cannot evaluate Time: ' + originalTime);
          }
        } else if (this.isNotation(time)) {
          time = this.notationToSeconds(time);
        } else if (this.isTransportTime(time)) {
          time = this.transportTimeToSeconds(time);
        } else if (this.isFrequency(time)) {
          time = this.frequencyToSeconds(time);
        } else if (this.isTicks(time)) {
          time = this.ticksToSeconds(time);
        } else {
          time = parseFloat(time);
        }
      }
      return time + plusTime;
    } else {
      return now;
    }
  };
  Tone.prototype.toNotation = function (time, bpm, timeSignature) {
    var testNotations = [
      '1m',
      '2n',
      '4n',
      '8n',
      '16n',
      '32n',
      '64n',
      '128n'
    ];
    var retNotation = toNotationHelper.call(this, time, bpm, timeSignature, testNotations);
    var testTripletNotations = [
      '1m',
      '2n',
      '2t',
      '4n',
      '4t',
      '8n',
      '8t',
      '16n',
      '16t',
      '32n',
      '32t',
      '64n',
      '64t',
      '128n'
    ];
    var retTripletNotation = toNotationHelper.call(this, time, bpm, timeSignature, testTripletNotations);
    if (retTripletNotation.split('+').length < retNotation.split('+').length) {
      return retTripletNotation;
    } else {
      return retNotation;
    }
  };
  function toNotationHelper(time, bpm, timeSignature, testNotations) {
    var seconds = this.toSeconds(time);
    var threshold = this.notationToSeconds(testNotations[testNotations.length - 1], bpm, timeSignature);
    var retNotation = '';
    for (var i = 0; i < testNotations.length; i++) {
      var notationTime = this.notationToSeconds(testNotations[i], bpm, timeSignature);
      var multiple = seconds / notationTime;
      var floatingPointError = 0.000001;
      if (1 - multiple % 1 < floatingPointError) {
        multiple += floatingPointError;
      }
      multiple = Math.floor(multiple);
      if (multiple > 0) {
        if (multiple === 1) {
          retNotation += testNotations[i];
        } else {
          retNotation += multiple.toString() + '*' + testNotations[i];
        }
        seconds -= multiple * notationTime;
        if (seconds < threshold) {
          break;
        } else {
          retNotation += ' + ';
        }
      }
    }
    if (retNotation === '') {
      retNotation = '0';
    }
    return retNotation;
  }
  Tone.prototype.fromUnits = function (val, units) {
    if (this.convert || this.isUndef(this.convert)) {
      switch (units) {
      case Tone.Type.Time:
        return this.toSeconds(val);
      case Tone.Type.Frequency:
        return this.toFrequency(val);
      case Tone.Type.Decibels:
        return this.dbToGain(val);
      case Tone.Type.NormalRange:
        return Math.min(Math.max(val, 0), 1);
      case Tone.Type.AudioRange:
        return Math.min(Math.max(val, -1), 1);
      case Tone.Type.Positive:
        return Math.max(val, 0);
      default:
        return val;
      }
    } else {
      return val;
    }
  };
  Tone.prototype.toUnits = function (val, units) {
    if (this.convert || this.isUndef(this.convert)) {
      switch (units) {
      case Tone.Type.Decibels:
        return this.gainToDb(val);
      default:
        return val;
      }
    } else {
      return val;
    }
  };
  var noteToScaleIndex = {
    'cbb': -2,
    'cb': -1,
    'c': 0,
    'c#': 1,
    'cx': 2,
    'dbb': 0,
    'db': 1,
    'd': 2,
    'd#': 3,
    'dx': 4,
    'ebb': 2,
    'eb': 3,
    'e': 4,
    'e#': 5,
    'ex': 6,
    'fbb': 3,
    'fb': 4,
    'f': 5,
    'f#': 6,
    'fx': 7,
    'gbb': 5,
    'gb': 6,
    'g': 7,
    'g#': 8,
    'gx': 9,
    'abb': 7,
    'ab': 8,
    'a': 9,
    'a#': 10,
    'ax': 11,
    'bbb': 9,
    'bb': 10,
    'b': 11,
    'b#': 12,
    'bx': 13
  };
  var scaleIndexToNote = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
  ];
  Tone.A4 = 440;
  Tone.prototype.noteToFrequency = function (note) {
    var parts = note.split(/(-?\d+)/);
    if (parts.length === 3) {
      var index = noteToScaleIndex[parts[0].toLowerCase()];
      var octave = parts[1];
      var noteNumber = index + (parseInt(octave, 10) + 1) * 12;
      return this.midiToFrequency(noteNumber);
    } else {
      return 0;
    }
  };
  Tone.prototype.frequencyToNote = function (freq) {
    var log = Math.log(freq / Tone.A4) / Math.LN2;
    var noteNumber = Math.round(12 * log) + 57;
    var octave = Math.floor(noteNumber / 12);
    if (octave < 0) {
      noteNumber += -12 * octave;
    }
    var noteName = scaleIndexToNote[noteNumber % 12];
    return noteName + octave.toString();
  };
  Tone.prototype.intervalToFrequencyRatio = function (interval) {
    return Math.pow(2, interval / 12);
  };
  Tone.prototype.midiToNote = function (midiNumber) {
    var octave = Math.floor(midiNumber / 12) - 1;
    var note = midiNumber % 12;
    return scaleIndexToNote[note] + octave;
  };
  Tone.prototype.noteToMidi = function (note) {
    var parts = note.split(/(\d+)/);
    if (parts.length === 3) {
      var index = noteToScaleIndex[parts[0].toLowerCase()];
      var octave = parts[1];
      return index + (parseInt(octave, 10) + 1) * 12;
    } else {
      return 0;
    }
  };
  Tone.prototype.midiToFrequency = function (midi) {
    return Tone.A4 * Math.pow(2, (midi - 69) / 12);
  };
  return Tone;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Param;
Tone_core_Param = function (Tone) {
  'use strict';
  Tone.Param = function () {
    var options = this.optionsObject(arguments, [
      'param',
      'units',
      'convert'
    ], Tone.Param.defaults);
    this._param = this.input = options.param;
    this.units = options.units;
    this.convert = options.convert;
    this.overridden = false;
    if (!this.isUndef(options.value)) {
      this.value = options.value;
    }
  };
  Tone.extend(Tone.Param);
  Tone.Param.defaults = {
    'units': Tone.Type.Default,
    'convert': true,
    'param': undefined
  };
  Object.defineProperty(Tone.Param.prototype, 'value', {
    get: function () {
      return this._toUnits(this._param.value);
    },
    set: function (value) {
      var convertedVal = this._fromUnits(value);
      this._param.value = convertedVal;
    }
  });
  Tone.Param.prototype._fromUnits = function (val) {
    if (this.convert || this.isUndef(this.convert)) {
      switch (this.units) {
      case Tone.Type.Time:
        return this.toSeconds(val);
      case Tone.Type.Frequency:
        return this.toFrequency(val);
      case Tone.Type.Decibels:
        return this.dbToGain(val);
      case Tone.Type.NormalRange:
        return Math.min(Math.max(val, 0), 1);
      case Tone.Type.AudioRange:
        return Math.min(Math.max(val, -1), 1);
      case Tone.Type.Positive:
        return Math.max(val, 0);
      default:
        return val;
      }
    } else {
      return val;
    }
  };
  Tone.Param.prototype._toUnits = function (val) {
    if (this.convert || this.isUndef(this.convert)) {
      switch (this.units) {
      case Tone.Type.Decibels:
        return this.gainToDb(val);
      default:
        return val;
      }
    } else {
      return val;
    }
  };
  Tone.Param.prototype._minOutput = 0.00001;
  Tone.Param.prototype.setValueAtTime = function (value, time) {
    value = this._fromUnits(value);
    this._param.setValueAtTime(value, this.toSeconds(time));
    return this;
  };
  Tone.Param.prototype.setRampPoint = function (now) {
    now = this.defaultArg(now, this.now());
    var currentVal = this._param.value;
    this._param.setValueAtTime(currentVal, now);
    return this;
  };
  Tone.Param.prototype.linearRampToValueAtTime = function (value, endTime) {
    value = this._fromUnits(value);
    this._param.linearRampToValueAtTime(value, this.toSeconds(endTime));
    return this;
  };
  Tone.Param.prototype.exponentialRampToValueAtTime = function (value, endTime) {
    value = this._fromUnits(value);
    value = Math.max(this._minOutput, value);
    this._param.exponentialRampToValueAtTime(value, this.toSeconds(endTime));
    return this;
  };
  Tone.Param.prototype.exponentialRampToValue = function (value, rampTime) {
    var now = this.now();
    var currentVal = this.value;
    this.setValueAtTime(Math.max(currentVal, this._minOutput), now);
    this.exponentialRampToValueAtTime(value, now + this.toSeconds(rampTime));
    return this;
  };
  Tone.Param.prototype.linearRampToValue = function (value, rampTime) {
    var now = this.now();
    this.setRampPoint(now);
    this.linearRampToValueAtTime(value, now + this.toSeconds(rampTime));
    return this;
  };
  Tone.Param.prototype.setTargetAtTime = function (value, startTime, timeConstant) {
    value = this._fromUnits(value);
    value = Math.max(this._minOutput, value);
    timeConstant = Math.max(this._minOutput, timeConstant);
    this._param.setTargetAtTime(value, this.toSeconds(startTime), timeConstant);
    return this;
  };
  Tone.Param.prototype.setValueCurveAtTime = function (values, startTime, duration) {
    for (var i = 0; i < values.length; i++) {
      values[i] = this._fromUnits(values[i]);
    }
    this._param.setValueCurveAtTime(values, this.toSeconds(startTime), this.toSeconds(duration));
    return this;
  };
  Tone.Param.prototype.cancelScheduledValues = function (startTime) {
    this._param.cancelScheduledValues(this.toSeconds(startTime));
    return this;
  };
  Tone.Param.prototype.rampTo = function (value, rampTime) {
    rampTime = this.defaultArg(rampTime, 0);
    if (this.units === Tone.Type.Frequency || this.units === Tone.Type.BPM) {
      this.exponentialRampToValue(value, rampTime);
    } else {
      this.linearRampToValue(value, rampTime);
    }
    return this;
  };
  Tone.Param.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._param = null;
    return this;
  };
  return Tone.Param;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Gain;
Tone_core_Gain = function (Tone) {
  'use strict';
  Tone.Gain = function () {
    var options = this.optionsObject(arguments, [
      'gain',
      'units'
    ], Tone.Gain.defaults);
    this.input = this.output = this._gainNode = this.context.createGain();
    this.gain = new Tone.Param({
      'param': this._gainNode.gain,
      'units': options.units,
      'value': options.gain,
      'convert': options.convert
    });
    this._readOnly('gain');
  };
  Tone.extend(Tone.Gain);
  Tone.Gain.defaults = {
    'gain': 1,
    'convert': true
  };
  Tone.Gain.prototype.dispose = function () {
    Tone.Param.prototype.dispose.call(this);
    this._gainNode.disconnect();
    this._gainNode = null;
    this._writable('gain');
    this.gain.dispose();
    this.gain = null;
  };
  return Tone.Gain;
}(Tone_core_Tone, Tone_core_Param);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Signal;
Tone_signal_Signal = function (Tone) {
  'use strict';
  Tone.Signal = function () {
    var options = this.optionsObject(arguments, [
      'value',
      'units'
    ], Tone.Signal.defaults);
    this.output = this._gain = this.context.createGain();
    options.param = this._gain.gain;
    Tone.Param.call(this, options);
    this.input = this._param = this._gain.gain;
    Tone.Signal._constant.chain(this._gain);
  };
  Tone.extend(Tone.Signal, Tone.Param);
  Tone.Signal.defaults = {
    'value': 0,
    'units': Tone.Type.Default,
    'convert': true
  };
  Tone.Signal.prototype.connect = Tone.SignalBase.prototype.connect;
  Tone.Signal.prototype.dispose = function () {
    Tone.Param.prototype.dispose.call(this);
    this._param = null;
    this._gain.disconnect();
    this._gain = null;
    return this;
  };
  Tone.Signal._constant = null;
  Tone._initAudioContext(function (audioContext) {
    var buffer = audioContext.createBuffer(1, 128, audioContext.sampleRate);
    var arr = buffer.getChannelData(0);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = 1;
    }
    Tone.Signal._constant = audioContext.createBufferSource();
    Tone.Signal._constant.channelCount = 1;
    Tone.Signal._constant.channelCountMode = 'explicit';
    Tone.Signal._constant.buffer = buffer;
    Tone.Signal._constant.loop = true;
    Tone.Signal._constant.start(0);
    Tone.Signal._constant.noGC();
  });
  return Tone.Signal;
}(Tone_core_Tone, Tone_signal_WaveShaper, Tone_core_Type, Tone_core_Param);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Add;
Tone_signal_Add = function (Tone) {
  'use strict';
  Tone.Add = function (value) {
    Tone.call(this, 2, 0);
    this._sum = this.input[0] = this.input[1] = this.output = this.context.createGain();
    this._param = this.input[1] = new Tone.Signal(value);
    this._param.connect(this._sum);
  };
  Tone.extend(Tone.Add, Tone.Signal);
  Tone.Add.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._sum.disconnect();
    this._sum = null;
    this._param.dispose();
    this._param = null;
    return this;
  };
  return Tone.Add;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Multiply;
Tone_signal_Multiply = function (Tone) {
  'use strict';
  Tone.Multiply = function (value) {
    Tone.call(this, 2, 0);
    this._mult = this.input[0] = this.output = this.context.createGain();
    this._param = this.input[1] = this.output.gain;
    this._param.value = this.defaultArg(value, 0);
  };
  Tone.extend(Tone.Multiply, Tone.Signal);
  Tone.Multiply.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._mult.disconnect();
    this._mult = null;
    this._param = null;
    return this;
  };
  return Tone.Multiply;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_Scale;
Tone_signal_Scale = function (Tone) {
  'use strict';
  Tone.Scale = function (outputMin, outputMax) {
    this._outputMin = this.defaultArg(outputMin, 0);
    this._outputMax = this.defaultArg(outputMax, 1);
    this._scale = this.input = new Tone.Multiply(1);
    this._add = this.output = new Tone.Add(0);
    this._scale.connect(this._add);
    this._setRange();
  };
  Tone.extend(Tone.Scale, Tone.SignalBase);
  Object.defineProperty(Tone.Scale.prototype, 'min', {
    get: function () {
      return this._outputMin;
    },
    set: function (min) {
      this._outputMin = min;
      this._setRange();
    }
  });
  Object.defineProperty(Tone.Scale.prototype, 'max', {
    get: function () {
      return this._outputMax;
    },
    set: function (max) {
      this._outputMax = max;
      this._setRange();
    }
  });
  Tone.Scale.prototype._setRange = function () {
    this._add.value = this._outputMin;
    this._scale.value = this._outputMax - this._outputMin;
  };
  Tone.Scale.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._add.dispose();
    this._add = null;
    this._scale.dispose();
    this._scale = null;
    return this;
  };
  return Tone.Scale;
}(Tone_core_Tone, Tone_signal_Add, Tone_signal_Multiply);
var signal;
signal = function () {
  'use strict';
  // Signal is built with the Tone.js signal by Yotam Mann
  // https://github.com/TONEnoTONE/Tone.js/
  var Signal = Tone_signal_Signal;
  var Add = Tone_signal_Add;
  var Mult = Tone_signal_Multiply;
  var Scale = Tone_signal_Scale;
  var Tone = Tone_core_Tone;
  var p5sound = master;
  Tone.setContext(p5sound.audiocontext);
  /**
   *  <p>p5.Signal is a constant audio-rate signal used by p5.Oscillator
   *  and p5.Envelope for modulation math.</p>
   *
   *  <p>This is necessary because Web Audio is processed on a seprate clock.
   *  For example, the p5 draw loop runs about 60 times per second. But
   *  the audio clock must process samples 44100 times per second. If we
   *  want to add a value to each of those samples, we can't do it in the
   *  draw loop, but we can do it by adding a constant-rate audio signal.</p.
   *  
   *  <p>This class mostly functions behind the scenes in p5.sound, and returns
   *  a Tone.Signal from the Tone.js library by Yotam Mann.
   *  If you want to work directly with audio signals for modular
   *  synthesis, check out
   *  <a href='http://bit.ly/1oIoEng' target=_'blank'>tone.js.</a></p>
   *
   *  @class  p5.Signal
   *  @constructor
   *  @return {Tone.Signal} A Signal object from the Tone.js library
   *  @example
   *  <div><code>
   *  function setup() {
   *    carrier = new p5.Oscillator('sine');
   *    carrier.amp(1); // set amplitude
   *    carrier.freq(220); // set frequency
   *    carrier.start(); // start oscillating
   *    
   *    modulator = new p5.Oscillator('sawtooth');
   *    modulator.disconnect();
   *    modulator.amp(1);
   *    modulator.freq(4);
   *    modulator.start();
   *
   *    // Modulator's default amplitude range is -1 to 1.
   *    // Multiply it by -200, so the range is -200 to 200
   *    // then add 220 so the range is 20 to 420
   *    carrier.freq( modulator.mult(-200).add(220) );
   *  }
   *  </code></div>
   */
  p5.Signal = function (value) {
    var s = new Signal(value);
    // p5sound.soundArray.push(s);
    return s;
  };
  /**
   *  Fade to value, for smooth transitions
   *
   *  @method  fade
   *  @param  {Number} value          Value to set this signal
   *  @param  {[Number]} secondsFromNow Length of fade, in seconds from now
   */
  Signal.prototype.fade = Signal.prototype.linearRampToValueAtTime;
  Mult.prototype.fade = Signal.prototype.fade;
  Add.prototype.fade = Signal.prototype.fade;
  Scale.prototype.fade = Signal.prototype.fade;
  /**
   *  Connect a p5.sound object or Web Audio node to this
   *  p5.Signal so that its amplitude values can be scaled.
   *  
   *  @param {Object} input
   */
  Signal.prototype.setInput = function (_input) {
    _input.connect(this);
  };
  Mult.prototype.setInput = Signal.prototype.setInput;
  Add.prototype.setInput = Signal.prototype.setInput;
  Scale.prototype.setInput = Signal.prototype.setInput;
  // signals can add / mult / scale themselves
  /**
   *  Add a constant value to this audio signal,
   *  and return the resulting audio signal. Does
   *  not change the value of the original signal,
   *  instead it returns a new p5.SignalAdd.
   *  
   *  @method  add
   *  @param {Number} number
   *  @return {p5.SignalAdd} object
   */
  Signal.prototype.add = function (num) {
    var add = new Add(num);
    // add.setInput(this);
    this.connect(add);
    return add;
  };
  Mult.prototype.add = Signal.prototype.add;
  Add.prototype.add = Signal.prototype.add;
  Scale.prototype.add = Signal.prototype.add;
  /**
   *  Multiply this signal by a constant value,
   *  and return the resulting audio signal. Does
   *  not change the value of the original signal,
   *  instead it returns a new p5.SignalMult.
   *  
   *  @method  mult
   *  @param {Number} number to multiply
   *  @return {Tone.Multiply} object
   */
  Signal.prototype.mult = function (num) {
    var mult = new Mult(num);
    // mult.setInput(this);
    this.connect(mult);
    return mult;
  };
  Mult.prototype.mult = Signal.prototype.mult;
  Add.prototype.mult = Signal.prototype.mult;
  Scale.prototype.mult = Signal.prototype.mult;
  /**
   *  Scale this signal value to a given range,
   *  and return the result as an audio signal. Does
   *  not change the value of the original signal,
   *  instead it returns a new p5.SignalScale.
   *  
   *  @method  scale
   *  @param {Number} number to multiply
   *  @param  {Number} inMin  input range minumum
   *  @param  {Number} inMax  input range maximum
   *  @param  {Number} outMin input range minumum
   *  @param  {Number} outMax input range maximum
   *  @return {p5.SignalScale} object
   */
  Signal.prototype.scale = function (inMin, inMax, outMin, outMax) {
    var mapOutMin, mapOutMax;
    if (arguments.length === 4) {
      mapOutMin = p5.prototype.map(outMin, inMin, inMax, 0, 1) - 0.5;
      mapOutMax = p5.prototype.map(outMax, inMin, inMax, 0, 1) - 0.5;
    } else {
      mapOutMin = arguments[0];
      mapOutMax = arguments[1];
    }
    var scale = new Scale(mapOutMin, mapOutMax);
    this.connect(scale);
    return scale;
  };
  Mult.prototype.scale = Signal.prototype.scale;
  Add.prototype.scale = Signal.prototype.scale;
  Scale.prototype.scale = Signal.prototype.scale;
}(Tone_signal_Signal, Tone_signal_Add, Tone_signal_Multiply, Tone_signal_Scale, Tone_core_Tone, master);
var oscillator;
oscillator = function () {
  'use strict';
  var p5sound = master;
  var Signal = Tone_signal_Signal;
  var Add = Tone_signal_Add;
  var Mult = Tone_signal_Multiply;
  var Scale = Tone_signal_Scale;
  /**
   *  <p>Creates a signal that oscillates between -1.0 and 1.0.
   *  By default, the oscillation takes the form of a sinusoidal
   *  shape ('sine'). Additional types include 'triangle',
   *  'sawtooth' and 'square'. The frequency defaults to
   *  440 oscillations per second (440Hz, equal to the pitch of an
   *  'A' note).</p> 
   *
   *  <p>Set the type of oscillation with setType(), or by creating a
   *  specific oscillator.</p> For example:
   *  <code>new p5.SinOsc(freq)</code>
   *  <code>new p5.TriOsc(freq)</code>
   *  <code>new p5.SqrOsc(freq)</code>
   *  <code>new p5.SawOsc(freq)</code>.
   *  </p>
   *  
   *  @class p5.Oscillator
   *  @constructor
   *  @param {Number} [freq] frequency defaults to 440Hz
   *  @param {String} [type] type of oscillator. Options:
   *                         'sine' (default), 'triangle',
   *                         'sawtooth', 'square'
   *  @return {Object}    Oscillator object
   *  @example
   *  <div><code>
   *  var osc;
   *  var playing = false;
   *  
   *  function setup() {
   *    backgroundColor = color(255,0,255);
   *    textAlign(CENTER);
   *    
   *    osc = new p5.Oscillator();
   *    osc.setType('sine');
   *    osc.freq(240);
   *    osc.amp(0);
   *    osc.start();
   *  }
   *
   *  function draw() {
   *    background(backgroundColor)
   *    text('click to play', width/2, height/2);
   *  }
   *
   *  function mouseClicked() {
   *    if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
   *      if (!playing) {
   *        // ramp amplitude to 0.5 over 0.1 seconds
   *        osc.amp(0.5, 0.05);
   *        playing = true;
   *        backgroundColor = color(0,255,255);
   *      } else {
   *        // ramp amplitude to 0 over 0.5 seconds
   *        osc.amp(0, 0.5);
   *        playing = false;
   *        backgroundColor = color(255,0,255);
   *      }
   *    }
   *  }
   *  </code> </div>
   */
  p5.Oscillator = function (freq, type) {
    if (typeof freq === 'string') {
      var f = type;
      type = freq;
      freq = f;
    }
    if (typeof type === 'number') {
      var f = type;
      type = freq;
      freq = f;
    }
    this.started = false;
    // components
    this.phaseAmount = undefined;
    this.oscillator = p5sound.audiocontext.createOscillator();
    this.f = freq || 440;
    // frequency
    this.oscillator.type = type || 'sine';
    this.oscillator.frequency.setValueAtTime(this.f, p5sound.audiocontext.currentTime);
    var o = this.oscillator;
    // connections
    this.output = p5sound.audiocontext.createGain();
    this._freqMods = [];
    // modulators connected to this oscillator's frequency
    // set default output gain to 0.5
    this.output.gain.value = 0.5;
    this.output.gain.setValueAtTime(0.5, p5sound.audiocontext.currentTime);
    this.oscillator.connect(this.output);
    // stereo panning
    this.panPosition = 0;
    this.connection = p5sound.input;
    // connect to p5sound by default
    this.panner = new p5.Panner(this.output, this.connection, 1);
    //array of math operation signal chaining
    this.mathOps = [this.output];
    // add to the soundArray so we can dispose of the osc later
    p5sound.soundArray.push(this);
  };
  /**
   *  Start an oscillator. Accepts an optional parameter to
   *  determine how long (in seconds from now) until the
   *  oscillator starts.
   *
   *  @method  start
   *  @param  {Number} [time] startTime in seconds from now.
   *  @param  {Number} [frequency] frequency in Hz.
   */
  p5.Oscillator.prototype.start = function (time, f) {
    if (this.started) {
      var now = p5sound.audiocontext.currentTime;
      this.stop(now);
    }
    if (!this.started) {
      var freq = f || this.f;
      var type = this.oscillator.type;
      // set old osc free to be garbage collected (memory)
      if (this.oscillator) {
        this.oscillator.disconnect();
        this.oscillator = undefined;
      }
      // var detune = this.oscillator.frequency.value;
      this.oscillator = p5sound.audiocontext.createOscillator();
      this.oscillator.frequency.exponentialRampToValueAtTime(Math.abs(freq), p5sound.audiocontext.currentTime);
      this.oscillator.type = type;
      // this.oscillator.detune.value = detune;
      this.oscillator.connect(this.output);
      time = time || 0;
      this.oscillator.start(time + p5sound.audiocontext.currentTime);
      this.freqNode = this.oscillator.frequency;
      // if other oscillators are already connected to this osc's freq
      for (var i in this._freqMods) {
        if (typeof this._freqMods[i].connect !== 'undefined') {
          this._freqMods[i].connect(this.oscillator.frequency);
        }
      }
      this.started = true;
    }
  };
  /**
   *  Stop an oscillator. Accepts an optional parameter
   *  to determine how long (in seconds from now) until the
   *  oscillator stops.
   *
   *  @method  stop
   *  @param  {Number} secondsFromNow Time, in seconds from now.
   */
  p5.Oscillator.prototype.stop = function (time) {
    if (this.started) {
      var t = time || 0;
      var now = p5sound.audiocontext.currentTime;
      this.oscillator.stop(t + now);
      this.started = false;
    }
  };
  /**
   *  Set the amplitude between 0 and 1.0. Or, pass in an object
   *  such as an oscillator to modulate amplitude with an audio signal.
   *
   *  @method  amp
   *  @param  {Number|Object} vol between 0 and 1.0
   *                              or a modulating signal/oscillator
   *  @param {Number} [rampTime] create a fade that lasts rampTime 
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   *  @return  {AudioParam} gain  If no value is provided,
   *                              returns the Web Audio API
   *                              AudioParam that controls
   *                              this oscillator's
   *                              gain/amplitude/volume)
   */
  p5.Oscillator.prototype.amp = function (vol, rampTime, tFromNow) {
    var self = this;
    if (typeof vol === 'number') {
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var now = p5sound.audiocontext.currentTime;
      var currentVol = this.output.gain.value;
      this.output.gain.cancelScheduledValues(now);
      this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
      this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
    } else if (vol) {
      vol.connect(self.output.gain);
    } else {
      // return the Gain Node
      return this.output.gain;
    }
  };
  // these are now the same thing
  p5.Oscillator.prototype.fade = p5.Oscillator.prototype.amp;
  p5.Oscillator.prototype.getAmp = function () {
    return this.output.gain.value;
  };
  /**
   *  Set frequency of an oscillator to a value. Or, pass in an object
   *  such as an oscillator to modulate the frequency with an audio signal.
   *
   *  @method  freq
   *  @param  {Number|Object} Frequency Frequency in Hz
   *                                        or modulating signal/oscillator
   *  @param  {Number} [rampTime] Ramp time (in seconds)
   *  @param  {Number} [timeFromNow] Schedule this event to happen
   *                                   at x seconds from now
   *  @return  {AudioParam} Frequency If no value is provided,
   *                                  returns the Web Audio API
   *                                  AudioParam that controls
   *                                  this oscillator's frequency
   *  @example
   *  <div><code>
   *  var osc = new p5.Oscillator(300);
   *  osc.start();
   *  osc.freq(40, 10);
   *  </code></div>
   */
  p5.Oscillator.prototype.freq = function (val, rampTime, tFromNow) {
    if (typeof val === 'number' && !isNaN(val)) {
      this.f = val;
      var now = p5sound.audiocontext.currentTime;
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      // var currentFreq = this.oscillator.frequency.value;
      // this.oscillator.frequency.cancelScheduledValues(now);
      if (rampTime == 0) {
        this.oscillator.frequency.cancelScheduledValues(now);
        this.oscillator.frequency.setValueAtTime(val, tFromNow + now);
      } else {
        if (val > 0) {
          this.oscillator.frequency.exponentialRampToValueAtTime(val, tFromNow + rampTime + now);
        } else {
          this.oscillator.frequency.linearRampToValueAtTime(val, tFromNow + rampTime + now);
        }
      }
      // reset phase if oscillator has a phase
      if (this.phaseAmount) {
        this.phase(this.phaseAmount);
      }
    } else if (val) {
      if (val.output) {
        val = val.output;
      }
      val.connect(this.oscillator.frequency);
      // keep track of what is modulating this param
      // so it can be re-connected if 
      this._freqMods.push(val);
    } else {
      // return the Frequency Node
      return this.oscillator.frequency;
    }
  };
  p5.Oscillator.prototype.getFreq = function () {
    return this.oscillator.frequency.value;
  };
  /**
   *  Set type to 'sine', 'triangle', 'sawtooth' or 'square'.
   *
   *  @method  setType
   *  @param {String} type 'sine', 'triangle', 'sawtooth' or 'square'.
   */
  p5.Oscillator.prototype.setType = function (type) {
    this.oscillator.type = type;
  };
  p5.Oscillator.prototype.getType = function () {
    return this.oscillator.type;
  };
  /**
   *  Connect to a p5.sound / Web Audio object.
   *
   *  @method  connect
   *  @param  {Object} unit A p5.sound or Web Audio object
   */
  p5.Oscillator.prototype.connect = function (unit) {
    if (!unit) {
      this.panner.connect(p5sound.input);
    } else if (unit.hasOwnProperty('input')) {
      this.panner.connect(unit.input);
      this.connection = unit.input;
    } else {
      this.panner.connect(unit);
      this.connection = unit;
    }
  };
  /**
   *  Disconnect all outputs
   *
   *  @method  disconnect
   */
  p5.Oscillator.prototype.disconnect = function (unit) {
    this.output.disconnect();
    this.panner.disconnect();
    this.output.connect(this.panner);
    this.oscMods = [];
  };
  /**
   *  Pan between Left (-1) and Right (1)
   *
   *  @method  pan
   *  @param  {Number} panning Number between -1 and 1
   *  @param  {Number} timeFromNow schedule this event to happen
   *                                seconds from now
   */
  p5.Oscillator.prototype.pan = function (pval, tFromNow) {
    this.panPosition = pval;
    this.panner.pan(pval, tFromNow);
  };
  p5.Oscillator.prototype.getPan = function () {
    return this.panPosition;
  };
  // get rid of the oscillator
  p5.Oscillator.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    if (this.oscillator) {
      var now = p5sound.audiocontext.currentTime;
      this.stop(now);
      this.disconnect();
      this.panner = null;
      this.oscillator = null;
    }
    // if it is a Pulse
    if (this.osc2) {
      this.osc2.dispose();
    }
  };
  /**
   *  Set the phase of an oscillator between 0.0 and 1.0.
   *  In this implementation, phase is a delay time
   *  based on the oscillator's current frequency.
   *  
   *  @method  phase
   *  @param  {Number} phase float between 0.0 and 1.0
   */
  p5.Oscillator.prototype.phase = function (p) {
    var delayAmt = p5.prototype.map(p, 0, 1, 0, 1 / this.f);
    var now = p5sound.audiocontext.currentTime;
    this.phaseAmount = p;
    if (!this.dNode) {
      // create a delay node
      this.dNode = p5sound.audiocontext.createDelay();
      // put the delay node in between output and panner
      this.oscillator.disconnect();
      this.oscillator.connect(this.dNode);
      this.dNode.connect(this.output);
    }
    // set delay time to match phase:
    this.dNode.delayTime.setValueAtTime(delayAmt, now);
  };
  // ========================== //
  // SIGNAL MATH FOR MODULATION //
  // ========================== //
  // return sigChain(this, scale, thisChain, nextChain, Scale);
  var sigChain = function (o, mathObj, thisChain, nextChain, type) {
    var chainSource = o.oscillator;
    // if this type of math already exists in the chain, replace it
    for (var i in o.mathOps) {
      if (o.mathOps[i] instanceof type) {
        chainSource.disconnect();
        o.mathOps[i].dispose();
        thisChain = i;
        // assume nextChain is output gain node unless...
        if (thisChain < o.mathOps.length - 2) {
          nextChain = o.mathOps[i + 1];
        }
      }
    }
    if (thisChain == o.mathOps.length - 1) {
      o.mathOps.push(nextChain);
    }
    // assume source is the oscillator unless i > 0
    if (i > 0) {
      chainSource = o.mathOps[i - 1];
    }
    chainSource.disconnect();
    chainSource.connect(mathObj);
    mathObj.connect(nextChain);
    o.mathOps[thisChain] = mathObj;
    return o;
  };
  /**
   *  Add a value to the p5.Oscillator's output amplitude,
   *  and return the oscillator. Calling this method again
   *  will override the initial add() with a new value.
   *  
   *  @method  add
   *  @param {Number} number Constant number to add
   *  @return {p5.Oscillator} Oscillator Returns this oscillator
   *                                     with scaled output
   *  
   */
  p5.Oscillator.prototype.add = function (num) {
    var add = new Add(num);
    var thisChain = this.mathOps.length - 1;
    var nextChain = this.output;
    return sigChain(this, add, thisChain, nextChain, Add);
  };
  /**
   *  Multiply the p5.Oscillator's output amplitude
   *  by a fixed value (i.e. turn it up!). Calling this method
   *  again will override the initial mult() with a new value.
   *  
   *  @method  mult
   *  @param {Number} number Constant number to multiply
   *  @return {p5.Oscillator} Oscillator Returns this oscillator
   *                                     with multiplied output
   */
  p5.Oscillator.prototype.mult = function (num) {
    var mult = new Mult(num);
    var thisChain = this.mathOps.length - 1;
    var nextChain = this.output;
    return sigChain(this, mult, thisChain, nextChain, Mult);
  };
  /**
   *  Scale this oscillator's amplitude values to a given
   *  range, and return the oscillator. Calling this method
   *  again will override the initial scale() with new values.
   *  
   *  @method  scale
   *  @param  {Number} inMin  input range minumum
   *  @param  {Number} inMax  input range maximum
   *  @param  {Number} outMin input range minumum
   *  @param  {Number} outMax input range maximum
   *  @return {p5.Oscillator} Oscillator Returns this oscillator
   *                                     with scaled output
   */
  p5.Oscillator.prototype.scale = function (inMin, inMax, outMin, outMax) {
    var mapOutMin, mapOutMax;
    if (arguments.length === 4) {
      mapOutMin = p5.prototype.map(outMin, inMin, inMax, 0, 1) - 0.5;
      mapOutMax = p5.prototype.map(outMax, inMin, inMax, 0, 1) - 0.5;
    } else {
      mapOutMin = arguments[0];
      mapOutMax = arguments[1];
    }
    var scale = new Scale(mapOutMin, mapOutMax);
    var thisChain = this.mathOps.length - 1;
    var nextChain = this.output;
    return sigChain(this, scale, thisChain, nextChain, Scale);
  };
  // ============================== //
  // SinOsc, TriOsc, SqrOsc, SawOsc //
  // ============================== //
  /**
   *  Constructor: <code>new p5.SinOsc()</code>.
   *  This creates a Sine Wave Oscillator and is
   *  equivalent to <code> new p5.Oscillator('sine')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('sine')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @method  p5.SinOsc
   *  @param {[Number]} freq Set the frequency
   */
  p5.SinOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'sine');
  };
  p5.SinOsc.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Constructor: <code>new p5.TriOsc()</code>.
   *  This creates a Triangle Wave Oscillator and is
   *  equivalent to <code>new p5.Oscillator('triangle')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('triangle')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @method  p5.TriOsc
   *  @param {[Number]} freq Set the frequency
   */
  p5.TriOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'triangle');
  };
  p5.TriOsc.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Constructor: <code>new p5.SawOsc()</code>.
   *  This creates a SawTooth Wave Oscillator and is
   *  equivalent to <code> new p5.Oscillator('sawtooth')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('sawtooth')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @method  p5.SawOsc
   *  @param {[Number]} freq Set the frequency
   */
  p5.SawOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'sawtooth');
  };
  p5.SawOsc.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Constructor: <code>new p5.SqrOsc()</code>.
   *  This creates a Square Wave Oscillator and is
   *  equivalent to <code> new p5.Oscillator('square')
   *  </code> or creating a p5.Oscillator and then calling
   *  its method <code>setType('square')</code>.
   *  See p5.Oscillator for methods.
   *
   *  @method  p5.SqrOsc
   *  @param {[Number]} freq Set the frequency
   */
  p5.SqrOsc = function (freq) {
    p5.Oscillator.call(this, freq, 'square');
  };
  p5.SqrOsc.prototype = Object.create(p5.Oscillator.prototype);
}(master, Tone_signal_Signal, Tone_signal_Add, Tone_signal_Multiply, Tone_signal_Scale);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Timeline;
Tone_core_Timeline = function (Tone) {
  'use strict';
  Tone.Timeline = function () {
    var options = this.optionsObject(arguments, ['memory'], Tone.Timeline.defaults);
    this._timeline = [];
    this._toRemove = [];
    this._iterating = false;
    this.memory = options.memory;
  };
  Tone.extend(Tone.Timeline);
  Tone.Timeline.defaults = { 'memory': Infinity };
  Object.defineProperty(Tone.Timeline.prototype, 'length', {
    get: function () {
      return this._timeline.length;
    }
  });
  Tone.Timeline.prototype.addEvent = function (event) {
    if (this.isUndef(event.time)) {
      throw new Error('events must have a time attribute');
    }
    event.time = this.toSeconds(event.time);
    if (this._timeline.length) {
      var index = this._search(event.time);
      this._timeline.splice(index + 1, 0, event);
    } else {
      this._timeline.push(event);
    }
    if (this.length > this.memory) {
      var diff = this.length - this.memory;
      this._timeline.splice(0, diff);
    }
    return this;
  };
  Tone.Timeline.prototype.removeEvent = function (event) {
    if (this._iterating) {
      this._toRemove.push(event);
    } else {
      var index = this._timeline.indexOf(event);
      if (index !== -1) {
        this._timeline.splice(index, 1);
      }
    }
    return this;
  };
  Tone.Timeline.prototype.getEvent = function (time) {
    time = this.toSeconds(time);
    var index = this._search(time);
    if (index !== -1) {
      return this._timeline[index];
    } else {
      return null;
    }
  };
  Tone.Timeline.prototype.getEventAfter = function (time) {
    time = this.toSeconds(time);
    var index = this._search(time);
    if (index + 1 < this._timeline.length) {
      return this._timeline[index + 1];
    } else {
      return null;
    }
  };
  Tone.Timeline.prototype.getEventBefore = function (time) {
    time = this.toSeconds(time);
    var index = this._search(time);
    if (index - 1 >= 0) {
      return this._timeline[index - 1];
    } else {
      return null;
    }
  };
  Tone.Timeline.prototype.cancel = function (after) {
    if (this._timeline.length > 1) {
      after = this.toSeconds(after);
      var index = this._search(after);
      if (index >= 0) {
        this._timeline = this._timeline.slice(0, index);
      } else {
        this._timeline = [];
      }
    } else if (this._timeline.length === 1) {
      if (this._timeline[0].time >= after) {
        this._timeline = [];
      }
    }
    return this;
  };
  Tone.Timeline.prototype.cancelBefore = function (time) {
    if (this._timeline.length) {
      time = this.toSeconds(time);
      var index = this._search(time);
      if (index >= 0) {
        this._timeline = this._timeline.slice(index + 1);
      }
    }
    return this;
  };
  Tone.Timeline.prototype._search = function (time) {
    var beginning = 0;
    var len = this._timeline.length;
    var end = len;
    while (beginning <= end && beginning < len) {
      var midPoint = Math.floor(beginning + (end - beginning) / 2);
      var event = this._timeline[midPoint];
      if (event.time === time) {
        for (var i = midPoint; i < this._timeline.length; i++) {
          var testEvent = this._timeline[i];
          if (testEvent.time === time) {
            midPoint = i;
          }
        }
        return midPoint;
      } else if (event.time > time) {
        end = midPoint - 1;
      } else if (event.time < time) {
        beginning = midPoint + 1;
      }
    }
    return beginning - 1;
  };
  Tone.Timeline.prototype._iterate = function (callback, lowerBound, upperBound) {
    this._iterating = true;
    lowerBound = this.defaultArg(lowerBound, 0);
    upperBound = this.defaultArg(upperBound, this._timeline.length - 1);
    for (var i = lowerBound; i <= upperBound; i++) {
      callback(this._timeline[i]);
    }
    this._iterating = false;
    if (this._toRemove.length > 0) {
      for (var j = 0; j < this._toRemove.length; j++) {
        var index = this._timeline.indexOf(this._toRemove[j]);
        if (index !== -1) {
          this._timeline.splice(index, 1);
        }
      }
      this._toRemove = [];
    }
  };
  Tone.Timeline.prototype.forEach = function (callback) {
    this._iterate(callback);
    return this;
  };
  Tone.Timeline.prototype.forEachBefore = function (time, callback) {
    time = this.toSeconds(time);
    var upperBound = this._search(time);
    if (upperBound !== -1) {
      this._iterate(callback, 0, upperBound);
    }
    return this;
  };
  Tone.Timeline.prototype.forEachAfter = function (time, callback) {
    time = this.toSeconds(time);
    var lowerBound = this._search(time);
    this._iterate(callback, lowerBound + 1);
    return this;
  };
  Tone.Timeline.prototype.forEachFrom = function (time, callback) {
    time = this.toSeconds(time);
    var lowerBound = this._search(time);
    while (lowerBound >= 0 && this._timeline[lowerBound].time >= time) {
      lowerBound--;
    }
    this._iterate(callback, lowerBound + 1);
    return this;
  };
  Tone.Timeline.prototype.forEachAtTime = function (time, callback) {
    time = this.toSeconds(time);
    var upperBound = this._search(time);
    if (upperBound !== -1) {
      this._iterate(function (event) {
        if (event.time === time) {
          callback(event);
        }
      }, 0, upperBound);
    }
    return this;
  };
  Tone.Timeline.prototype.dispose = function () {
    Tone.prototype.dispose.call(this);
    this._timeline = null;
    this._toRemove = null;
  };
  return Tone.Timeline;
}(Tone_core_Tone);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_signal_TimelineSignal;
Tone_signal_TimelineSignal = function (Tone) {
  'use strict';
  Tone.TimelineSignal = function () {
    var options = this.optionsObject(arguments, [
      'value',
      'units'
    ], Tone.Signal.defaults);
    Tone.Signal.apply(this, options);
    options.param = this._param;
    Tone.Param.call(this, options);
    this._events = new Tone.Timeline(10);
    this._initial = this._fromUnits(this._param.value);
  };
  Tone.extend(Tone.TimelineSignal, Tone.Param);
  Tone.TimelineSignal.Type = {
    Linear: 'linear',
    Exponential: 'exponential',
    Target: 'target',
    Set: 'set'
  };
  Object.defineProperty(Tone.TimelineSignal.prototype, 'value', {
    get: function () {
      return this._toUnits(this._param.value);
    },
    set: function (value) {
      var convertedVal = this._fromUnits(value);
      this._initial = convertedVal;
      this._param.value = convertedVal;
    }
  });
  Tone.TimelineSignal.prototype.setValueAtTime = function (value, startTime) {
    value = this._fromUnits(value);
    startTime = this.toSeconds(startTime);
    this._events.addEvent({
      'type': Tone.TimelineSignal.Type.Set,
      'value': value,
      'time': startTime
    });
    this._param.setValueAtTime(value, startTime);
    return this;
  };
  Tone.TimelineSignal.prototype.linearRampToValueAtTime = function (value, endTime) {
    value = this._fromUnits(value);
    endTime = this.toSeconds(endTime);
    this._events.addEvent({
      'type': Tone.TimelineSignal.Type.Linear,
      'value': value,
      'time': endTime
    });
    this._param.linearRampToValueAtTime(value, endTime);
    return this;
  };
  Tone.TimelineSignal.prototype.exponentialRampToValueAtTime = function (value, endTime) {
    value = this._fromUnits(value);
    value = Math.max(this._minOutput, value);
    endTime = this.toSeconds(endTime);
    this._events.addEvent({
      'type': Tone.TimelineSignal.Type.Exponential,
      'value': value,
      'time': endTime
    });
    this._param.exponentialRampToValueAtTime(value, endTime);
    return this;
  };
  Tone.TimelineSignal.prototype.setTargetAtTime = function (value, startTime, timeConstant) {
    value = this._fromUnits(value);
    value = Math.max(this._minOutput, value);
    timeConstant = Math.max(this._minOutput, timeConstant);
    startTime = this.toSeconds(startTime);
    this._events.addEvent({
      'type': Tone.TimelineSignal.Type.Target,
      'value': value,
      'time': startTime,
      'constant': timeConstant
    });
    this._param.setTargetAtTime(value, startTime, timeConstant);
    return this;
  };
  Tone.TimelineSignal.prototype.cancelScheduledValues = function (after) {
    this._events.cancel(after);
    this._param.cancelScheduledValues(this.toSeconds(after));
    return this;
  };
  Tone.TimelineSignal.prototype.setRampPoint = function (time) {
    time = this.toSeconds(time);
    var val = this.getValueAtTime(time);
    var after = this._searchAfter(time);
    if (after) {
      this.cancelScheduledValues(time);
      if (after.type === Tone.TimelineSignal.Type.Linear) {
        this.linearRampToValueAtTime(val, time);
      } else if (after.type === Tone.TimelineSignal.Type.Exponential) {
        this.exponentialRampToValueAtTime(val, time);
      }
    }
    this.setValueAtTime(val, time);
    return this;
  };
  Tone.TimelineSignal.prototype.linearRampToValueBetween = function (value, start, finish) {
    this.setRampPoint(start);
    this.linearRampToValueAtTime(value, finish);
    return this;
  };
  Tone.TimelineSignal.prototype.exponentialRampToValueBetween = function (value, start, finish) {
    this.setRampPoint(start);
    this.exponentialRampToValueAtTime(value, finish);
    return this;
  };
  Tone.TimelineSignal.prototype._searchBefore = function (time) {
    return this._events.getEvent(time);
  };
  Tone.TimelineSignal.prototype._searchAfter = function (time) {
    return this._events.getEventAfter(time);
  };
  Tone.TimelineSignal.prototype.getValueAtTime = function (time) {
    var after = this._searchAfter(time);
    var before = this._searchBefore(time);
    var value = this._initial;
    if (before === null) {
      value = this._initial;
    } else if (before.type === Tone.TimelineSignal.Type.Target) {
      var previous = this._events.getEventBefore(before.time);
      var previouVal;
      if (previous === null) {
        previouVal = this._initial;
      } else {
        previouVal = previous.value;
      }
      value = this._exponentialApproach(before.time, previouVal, before.value, before.constant, time);
    } else if (after === null) {
      value = before.value;
    } else if (after.type === Tone.TimelineSignal.Type.Linear) {
      value = this._linearInterpolate(before.time, before.value, after.time, after.value, time);
    } else if (after.type === Tone.TimelineSignal.Type.Exponential) {
      value = this._exponentialInterpolate(before.time, before.value, after.time, after.value, time);
    } else {
      value = before.value;
    }
    return value;
  };
  Tone.TimelineSignal.prototype.connect = Tone.SignalBase.prototype.connect;
  Tone.TimelineSignal.prototype._exponentialApproach = function (t0, v0, v1, timeConstant, t) {
    return v1 + (v0 - v1) * Math.exp(-(t - t0) / timeConstant);
  };
  Tone.TimelineSignal.prototype._linearInterpolate = function (t0, v0, t1, v1, t) {
    return v0 + (v1 - v0) * ((t - t0) / (t1 - t0));
  };
  Tone.TimelineSignal.prototype._exponentialInterpolate = function (t0, v0, t1, v1, t) {
    v0 = Math.max(this._minOutput, v0);
    return v0 * Math.pow(v1 / v0, (t - t0) / (t1 - t0));
  };
  Tone.TimelineSignal.prototype.dispose = function () {
    Tone.Signal.prototype.dispose.call(this);
    Tone.Param.prototype.dispose.call(this);
    this._events.dispose();
    this._events = null;
  };
  return Tone.TimelineSignal;
}(Tone_core_Tone, Tone_signal_Signal);
var env;
env = function () {
  'use strict';
  var p5sound = master;
  var Add = Tone_signal_Add;
  var Mult = Tone_signal_Multiply;
  var Scale = Tone_signal_Scale;
  var TimelineSignal = Tone_signal_TimelineSignal;
  var Tone = Tone_core_Tone;
  Tone.setContext(p5sound.audiocontext);
  /**
   *  <p>Envelopes are pre-defined amplitude distribution over time.
   *  Typically, envelopes are used to control the output volume
   *  of an object, a series of fades referred to as Attack, Decay,
   *  Sustain and Release (
   *  <a href="https://upload.wikimedia.org/wikipedia/commons/e/ea/ADSR_parameter.svg">ADSR</a>
   *  ). Envelopes can also control other Web Audio Parameters—for example, a p5.Env can
   *  control an Oscillator's frequency like this: <code>osc.freq(env)</code>.</p>
   *  <p>Use <code><a href="#/p5.Env/setRange">setRange</a></code> to change the attack/release level.
   *  Use <code><a href="#/p5.Env/setADSR">setADSR</a></code> to change attackTime, decayTime, sustainPercent and releaseTime.</p>
   *  <p>Use the <code><a href="#/p5.Env/play">play</a></code> method to play the entire envelope,
   *  the <code><a href="#/p5.Env/ramp">ramp</a></code> method for a pingable trigger,
   *  or <code><a href="#/p5.Env/triggerAttack">triggerAttack</a></code>/
   *  <code><a href="#/p5.Env/triggerRelease">triggerRelease</a></code> to trigger noteOn/noteOff.</p>
   *
   *  @class p5.Env
   *  @constructor
   *  @example
   *  <div><code>
   *  var attackLevel = 1.0;
   *  var releaseLevel = 0;
   *
   *  var attackTime = 0.001
   *  var decayTime = 0.2;
   *  var susPercent = 0.2;
   *  var releaseTime = 0.5;
   *
   *  var env, triOsc;
   *
   *  function setup() {
   *    var cnv = createCanvas(100, 100);
   *
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.start();
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(playEnv);
   *  }
   *
   *  function playEnv(){
   *    env.play();
   *  }
   *  </code></div>
   */
  p5.Env = function (t1, l1, t2, l2, t3, l3) {
    var now = p5sound.audiocontext.currentTime;
    /**
     * Time until envelope reaches attackLevel
     * @property attackTime
     */
    this.aTime = t1 || 0.1;
    /**
     * Level once attack is complete.
     * @property attackLevel
     */
    this.aLevel = l1 || 1;
    /**
     * Time until envelope reaches decayLevel.
     * @property decayTime
     */
    this.dTime = t2 || 0.5;
    /**
     * Level after decay. The envelope will sustain here until it is released.
     * @property decayLevel
     */
    this.dLevel = l2 || 0;
    /**
     * Duration of the release portion of the envelope.
     * @property releaseTime
     */
    this.rTime = t3 || 0;
    /**
     * Level at the end of the release.
     * @property releaseLevel
     */
    this.rLevel = l3 || 0;
    this._rampHighPercentage = 0.98;
    this._rampLowPercentage = 0.02;
    this.output = p5sound.audiocontext.createGain();
    this.control = new TimelineSignal();
    this._init();
    // this makes sure the envelope starts at zero
    this.control.connect(this.output);
    // connect to the output
    this.connection = null;
    // store connection
    //array of math operation signal chaining
    this.mathOps = [this.control];
    //whether envelope should be linear or exponential curve
    this.isExponential = false;
    // oscillator or buffer source to clear on env complete
    // to save resources if/when it is retriggered
    this.sourceToClear = null;
    // set to true if attack is set, then false on release
    this.wasTriggered = false;
    // add to the soundArray so we can dispose of the env later
    p5sound.soundArray.push(this);
  };
  // this init function just smooths the starting value to zero and gives a start point for the timeline
  // - it was necessary to remove glitches at the beginning.
  p5.Env.prototype._init = function () {
    var now = p5sound.audiocontext.currentTime;
    var t = now;
    this.control.setTargetAtTime(0.00001, t, 0.001);
    //also, compute the correct time constants
    this._setRampAD(this.aTime, this.dTime);
  };
  /**
   *  Reset the envelope with a series of time/value pairs.
   *
   *  @method  set
   *  @param {Number} attackTime     Time (in seconds) before level
   *                                 reaches attackLevel
   *  @param {Number} attackLevel    Typically an amplitude between
   *                                 0.0 and 1.0
   *  @param {Number} decayTime      Time
   *  @param {Number} decayLevel   Amplitude (In a standard ADSR envelope,
   *                                 decayLevel = sustainLevel)
   *  @param {Number} releaseTime   Release Time (in seconds)
   *  @param {Number} releaseLevel  Amplitude
   *  @example
   *  <div><code>
   *  var t1 = 0.1; // attack time in seconds
   *  var l1 = 0.7; // attack level 0.0 to 1.0
   *  var t2 = 0.3; // decay time in seconds
   *  var l2 = 0.1; // decay level  0.0 to 1.0
   *  var t3 = 0.2; // sustain time in seconds
   *  var l3 = dL; // sustain level  0.0 to 1.0
   *  // release level defaults to zero
   *
   *  var env;
   *  var triOsc;
   *
   *  function setup() {
   *    background(0);
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env(t1, l1, t2, l2, t3, l3);
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env); // give the env control of the triOsc's amp
   *    triOsc.start();
   *  }
   *
   *  // mouseClick triggers envelope if over canvas
   *  function mouseClicked() {
   *    // is mouse over canvas?
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      env.play(triOsc);
   *    }
   *  }
   *  </code></div>
   *
   */
  p5.Env.prototype.set = function (t1, l1, t2, l2, t3, l3) {
    this.aTime = t1;
    this.aLevel = l1;
    this.dTime = t2 || 0;
    this.dLevel = l2 || 0;
    this.rTime = t3 || 0;
    this.rLevel = l3 || 0;
    // set time constants for ramp
    this._setRampAD(t1, t2);
  };
  /**
   *  Set values like a traditional
   *  <a href="https://en.wikipedia.org/wiki/Synthesizer#/media/File:ADSR_parameter.svg">
   *  ADSR envelope
   *  </a>.
   *
   *  @method  setADSR
   *  @param {Number} attackTime    Time (in seconds before envelope
   *                                reaches Attack Level
   *  @param {Number} [decayTime]    Time (in seconds) before envelope
   *                                reaches Decay/Sustain Level
   *  @param {Number} [susRatio]    Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,
   *                                where 1.0 = attackLevel, 0.0 = releaseLevel.
   *                                The susRatio determines the decayLevel and the level at which the
   *                                sustain portion of the envelope will sustain.
   *                                For example, if attackLevel is 0.4, releaseLevel is 0,
   *                                and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is
   *                                increased to 1.0 (using <code>setRange</code>),
   *                                then decayLevel would increase proportionally, to become 0.5.
   *  @param {Number} [releaseTime]   Time in seconds from now (defaults to 0)
   *  @example
   *  <div><code>
   *  var attackLevel = 1.0;
   *  var releaseLevel = 0;
   *
   *  var attackTime = 0.001
   *  var decayTime = 0.2;
   *  var susPercent = 0.2;
   *  var releaseTime = 0.5;
   *
   *  var env, triOsc;
   *
   *  function setup() {
   *    var cnv = createCanvas(100, 100);
   *
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.start();
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(playEnv);
   *  }
   *
   *  function playEnv(){
   *    env.play();
   *  }
   *  </code></div>
   */
  p5.Env.prototype.setADSR = function (aTime, dTime, sPercent, rTime) {
    this.aTime = aTime;
    this.dTime = dTime || 0;
    // lerp
    this.sPercent = sPercent || 0;
    this.dLevel = typeof sPercent !== 'undefined' ? sPercent * (this.aLevel - this.rLevel) + this.rLevel : 0;
    this.rTime = rTime || 0;
    // also set time constants for ramp
    this._setRampAD(aTime, dTime);
  };
  /**
   *  Set max (attackLevel) and min (releaseLevel) of envelope.
   *
   *  @method  setRange
   *  @param {Number} aLevel attack level (defaults to 1)
   *  @param {Number} rLevel release level (defaults to 0)
   *  @example
   *  <div><code>
   *  var attackLevel = 1.0;
   *  var releaseLevel = 0;
   *
   *  var attackTime = 0.001
   *  var decayTime = 0.2;
   *  var susPercent = 0.2;
   *  var releaseTime = 0.5;
   *
   *  var env, triOsc;
   *
   *  function setup() {
   *    var cnv = createCanvas(100, 100);
   *
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.start();
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(playEnv);
   *  }
   *
   *  function playEnv(){
   *    env.play();
   *  }
   *  </code></div>
   */
  p5.Env.prototype.setRange = function (aLevel, rLevel) {
    this.aLevel = aLevel || 1;
    this.rLevel = rLevel || 0;
  };
  //  private (undocumented) method called when ADSR is set to set time constants for ramp
  //
  //  Set the <a href="https://en.wikipedia.org/wiki/RC_time_constant">
  //  time constants</a> for simple exponential ramps.
  //  The larger the time constant value, the slower the
  //  transition will be.
  //
  //  method  _setRampAD
  //  param {Number} attackTimeConstant  attack time constant
  //  param {Number} decayTimeConstant   decay time constant
  //
  p5.Env.prototype._setRampAD = function (t1, t2) {
    this._rampAttackTime = this.checkExpInput(t1);
    this._rampDecayTime = this.checkExpInput(t2);
    var TCDenominator = 1;
    /// Aatish Bhatia's calculation for time constant for rise(to adjust 1/1-e calculation to any percentage)
    TCDenominator = Math.log(1 / this.checkExpInput(1 - this._rampHighPercentage));
    this._rampAttackTC = t1 / this.checkExpInput(TCDenominator);
    TCDenominator = Math.log(1 / this._rampLowPercentage);
    this._rampDecayTC = t2 / this.checkExpInput(TCDenominator);
  };
  // private method
  p5.Env.prototype.setRampPercentages = function (p1, p2) {
    //set the percentages that the simple exponential ramps go to
    this._rampHighPercentage = this.checkExpInput(p1);
    this._rampLowPercentage = this.checkExpInput(p2);
    var TCDenominator = 1;
    //now re-compute the time constants based on those percentages
    /// Aatish Bhatia's calculation for time constant for rise(to adjust 1/1-e calculation to any percentage)
    TCDenominator = Math.log(1 / this.checkExpInput(1 - this._rampHighPercentage));
    this._rampAttackTC = this._rampAttackTime / this.checkExpInput(TCDenominator);
    TCDenominator = Math.log(1 / this._rampLowPercentage);
    this._rampDecayTC = this._rampDecayTime / this.checkExpInput(TCDenominator);
  };
  /**
   *  Assign a parameter to be controlled by this envelope.
   *  If a p5.Sound object is given, then the p5.Env will control its
   *  output gain. If multiple inputs are provided, the env will
   *  control all of them.
   *
   *  @method  setInput
   *  @param  {Object} unit         A p5.sound object or
   *                                Web Audio Param.
   */
  p5.Env.prototype.setInput = function (unit) {
    for (var i = 0; i < arguments.length; i++) {
      this.connect(arguments[i]);
    }
  };
  /**
   *  Set whether the envelope ramp is linear (default) or exponential.
   *  Exponential ramps can be useful because we perceive amplitude
   *  and frequency logarithmically.
   *
   *  @method  setExp
   *  @param {Boolean} isExp true is exponential, false is linear
   */
  p5.Env.prototype.setExp = function (isExp) {
    this.isExponential = isExp;
  };
  //helper method to protect against zero values being sent to exponential functions
  p5.Env.prototype.checkExpInput = function (value) {
    if (value <= 0) {
      value = 1e-8;
    }
    return value;
  };
  /**
   *  Play tells the envelope to start acting on a given input.
   *  If the input is a p5.sound object (i.e. AudioIn, Oscillator,
   *  SoundFile), then Env will control its output volume.
   *  Envelopes can also be used to control any <a href="
   *  http://docs.webplatform.org/wiki/apis/webaudio/AudioParam">
   *  Web Audio Audio Param.</a>
   *
   *  @method  play
   *  @param  {Object} unit         A p5.sound object or
   *                                Web Audio Param.
   *  @param  {Number} [startTime]  time from now (in seconds) at which to play
   *  @param  {Number} [sustainTime] time to sustain before releasing the envelope
   *  @example
   *  <div><code>
   *  var attackLevel = 1.0;
   *  var releaseLevel = 0;
   *
   *  var attackTime = 0.001
   *  var decayTime = 0.2;
   *  var susPercent = 0.2;
   *  var releaseTime = 0.5;
   *
   *  var env, triOsc;
   *
   *  function setup() {
   *    var cnv = createCanvas(100, 100);
   *
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.start();
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(playEnv);
   *  }
   *
   *  function playEnv(){
   *    // trigger env on triOsc, 0 seconds from now
   *    // After decay, sustain for 0.2 seconds before release
   *    env.play(triOsc, 0, 0.2);
   *  }
   *  </code></div>
   */
  p5.Env.prototype.play = function (unit, secondsFromNow, susTime) {
    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var susTime = susTime || 0;
    if (unit) {
      if (this.connection !== unit) {
        this.connect(unit);
      }
    }
    this.triggerAttack(unit, tFromNow);
    this.triggerRelease(unit, tFromNow + this.aTime + this.dTime + susTime);
  };
  /**
   *  Trigger the Attack, and Decay portion of the Envelope.
   *  Similar to holding down a key on a piano, but it will
   *  hold the sustain level until you let go. Input can be
   *  any p5.sound object, or a <a href="
   *  http://docs.webplatform.org/wiki/apis/webaudio/AudioParam">
   *  Web Audio Param</a>.
   *
   *  @method  triggerAttack
   *  @param  {Object} unit p5.sound Object or Web Audio Param
   *  @param  {Number} secondsFromNow time from now (in seconds)
   *  @example
   *  <div><code>
   *
   *  var attackLevel = 1.0;
   *  var releaseLevel = 0;
   *
   *  var attackTime = 0.001
   *  var decayTime = 0.3;
   *  var susPercent = 0.4;
   *  var releaseTime = 0.5;
   *
   *  var env, triOsc;
   *
   *  function setup() {
   *    var cnv = createCanvas(100, 100);
   *    background(200);
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.start();
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(envAttack);
   *  }
   *
   *  function envAttack(){
   *    console.log('trigger attack');
   *    env.triggerAttack();
   *
   *    background(0,255,0);
   *    text('attack!', width/2, height/2);
   *  }
   *
   *  function mouseReleased() {
   *    env.triggerRelease();
   *
   *    background(200);
   *    text('click to play', width/2, height/2);
   *  }
   *  </code></div>
   */
  p5.Env.prototype.triggerAttack = function (unit, secondsFromNow) {
    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var t = now + tFromNow;
    this.lastAttack = t;
    this.wasTriggered = true;
    if (unit) {
      if (this.connection !== unit) {
        this.connect(unit);
      }
    }
    // get and set value (with linear ramp) to anchor automation
    var valToSet = this.control.getValueAtTime(t);
    this.control.cancelScheduledValues(t);
    // not sure if this is necessary
    if (this.isExponential == true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(valToSet), t);
    } else {
      this.control.linearRampToValueAtTime(valToSet, t);
    }
    // after each ramp completes, cancel scheduled values
    // (so they can be overridden in case env has been re-triggered)
    // then, set current value (with linearRamp to avoid click)
    // then, schedule the next automation...
    // attack
    t += this.aTime;
    if (this.isExponential == true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(this.aLevel), t);
      valToSet = this.checkExpInput(this.control.getValueAtTime(t));
      this.control.cancelScheduledValues(t);
      this.control.exponentialRampToValueAtTime(valToSet, t);
    } else {
      this.control.linearRampToValueAtTime(this.aLevel, t);
      valToSet = this.control.getValueAtTime(t);
      this.control.cancelScheduledValues(t);
      this.control.linearRampToValueAtTime(valToSet, t);
    }
    // decay to decay level (if using ADSR, then decay level == sustain level)
    t += this.dTime;
    if (this.isExponential == true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(this.dLevel), t);
      valToSet = this.checkExpInput(this.control.getValueAtTime(t));
      this.control.cancelScheduledValues(t);
      this.control.exponentialRampToValueAtTime(valToSet, t);
    } else {
      this.control.linearRampToValueAtTime(this.dLevel, t);
      valToSet = this.control.getValueAtTime(t);
      this.control.cancelScheduledValues(t);
      this.control.linearRampToValueAtTime(valToSet, t);
    }
  };
  /**
   *  Trigger the Release of the Envelope. This is similar to releasing
   *  the key on a piano and letting the sound fade according to the
   *  release level and release time.
   *
   *  @method  triggerRelease
   *  @param  {Object} unit p5.sound Object or Web Audio Param
   *  @param  {Number} secondsFromNow time to trigger the release
   *  @example
   *  <div><code>
   *
   *  var attackLevel = 1.0;
   *  var releaseLevel = 0;
   *
   *  var attackTime = 0.001
   *  var decayTime = 0.3;
   *  var susPercent = 0.4;
   *  var releaseTime = 0.5;
   *
   *  var env, triOsc;
   *
   *  function setup() {
   *    var cnv = createCanvas(100, 100);
   *    background(200);
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
   *    env.setRange(attackLevel, releaseLevel);
   *
   *    triOsc = new p5.Oscillator('triangle');
   *    triOsc.amp(env);
   *    triOsc.start();
   *    triOsc.freq(220);
   *
   *    cnv.mousePressed(envAttack);
   *  }
   *
   *  function envAttack(){
   *    console.log('trigger attack');
   *    env.triggerAttack();
   *
   *    background(0,255,0);
   *    text('attack!', width/2, height/2);
   *  }
   *
   *  function mouseReleased() {
   *    env.triggerRelease();
   *
   *    background(200);
   *    text('click to play', width/2, height/2);
   *  }
   *  </code></div>
   */
  p5.Env.prototype.triggerRelease = function (unit, secondsFromNow) {
    // only trigger a release if an attack was triggered
    if (!this.wasTriggered) {
      // this currently causes a bit of trouble:
      // if a later release has been scheduled (via the play function)
      // a new earlier release won't interrupt it, because
      // this.wasTriggered has already been set to false.
      // If we want new earlier releases to override, then we need to
      // keep track of the last release time, and if the new release time is
      // earlier, then use it.
      return;
    }
    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var t = now + tFromNow;
    if (unit) {
      if (this.connection !== unit) {
        this.connect(unit);
      }
    }
    // get and set value (with linear or exponential ramp) to anchor automation
    var valToSet = this.control.getValueAtTime(t);
    this.control.cancelScheduledValues(t);
    // not sure if this is necessary
    if (this.isExponential == true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(valToSet), t);
    } else {
      this.control.linearRampToValueAtTime(valToSet, t);
    }
    // release
    t += this.rTime;
    if (this.isExponential == true) {
      this.control.exponentialRampToValueAtTime(this.checkExpInput(this.rLevel), t);
      valToSet = this.checkExpInput(this.control.getValueAtTime(t));
      this.control.cancelScheduledValues(t);
      this.control.exponentialRampToValueAtTime(valToSet, t);
    } else {
      this.control.linearRampToValueAtTime(this.rLevel, t);
      valToSet = this.control.getValueAtTime(t);
      this.control.cancelScheduledValues(t);
      this.control.linearRampToValueAtTime(valToSet, t);
    }
    this.wasTriggered = false;
  };
  /**
   *  Exponentially ramp to a value using the first two
   *  values from <code><a href="#/p5.Env/setADSR">setADSR(attackTime, decayTime)</a></code>
   *  as <a href="https://en.wikipedia.org/wiki/RC_time_constant">
   *  time constants</a> for simple exponential ramps.
   *  If the value is higher than current value, it uses attackTime,
   *  while a decrease uses decayTime.
   *
   *  @method  ramp
   *  @param  {Object} unit           p5.sound Object or Web Audio Param
   *  @param  {Number} secondsFromNow When to trigger the ramp
   *  @param  {Number} v              Target value
   *  @param  {Number} [v2]           Second target value (optional)
   *  @example
   *  <div><code>
   *  var env, osc, amp, cnv;
   *
   *  var attackTime = 0.001;
   *  var decayTime = 0.2;
   *  var attackLevel = 1;
   *  var decayLevel = 0;
   *
   *  function setup() {
   *    cnv = createCanvas(100, 100);
   *    fill(0,255,0);
   *    noStroke();
   *
   *    env = new p5.Env();
   *    env.setADSR(attackTime, decayTime);
   *
   *    osc = new p5.Oscillator();
   *    osc.amp(env);
   *    osc.start();
   *
   *    amp = new p5.Amplitude();
   *
   *    cnv.mousePressed(triggerRamp);
   *  }
   *
   *  function triggerRamp() {
   *    env.ramp(osc, 0, attackLevel, decayLevel);
   *  }
   *
   *  function draw() {
   *    background(20,20,20);
   *    text('click me', 10, 20);
   *    var h = map(amp.getLevel(), 0, 0.4, 0, height);;
   *
   *    rect(0, height, width, -h);
   *  }
   *  </code></div>
   */
  p5.Env.prototype.ramp = function (unit, secondsFromNow, v1, v2) {
    var now = p5sound.audiocontext.currentTime;
    var tFromNow = secondsFromNow || 0;
    var t = now + tFromNow;
    var destination1 = this.checkExpInput(v1);
    var destination2 = typeof v2 !== 'undefined' ? this.checkExpInput(v2) : undefined;
    // connect env to unit if not already connected
    if (unit) {
      if (this.connection !== unit) {
        this.connect(unit);
      }
    }
    //get current value
    var currentVal = this.checkExpInput(this.control.getValueAtTime(t));
    this.control.cancelScheduledValues(t);
    //if it's going up
    if (destination1 > currentVal) {
      this.control.setTargetAtTime(destination1, t, this._rampAttackTC);
      t += this._rampAttackTime;
    } else if (destination1 < currentVal) {
      this.control.setTargetAtTime(destination1, t, this._rampDecayTC);
      t += this._rampDecayTime;
    }
    // Now the second part of envelope begins
    if (destination2 === undefined)
      return;
    //if it's going up
    if (destination2 > destination1) {
      this.control.setTargetAtTime(destination2, t, this._rampAttackTC);
    } else if (destination2 < destination1) {
      this.control.setTargetAtTime(destination2, t, this._rampDecayTC);
    }
  };
  p5.Env.prototype.connect = function (unit) {
    this.connection = unit;
    // assume we're talking about output gain
    // unless given a different audio param
    if (unit instanceof p5.Oscillator || unit instanceof p5.SoundFile || unit instanceof p5.AudioIn || unit instanceof p5.Reverb || unit instanceof p5.Noise || unit instanceof p5.Filter || unit instanceof p5.Delay) {
      unit = unit.output.gain;
    }
    if (unit instanceof AudioParam) {
      //set the initial value
      unit.setValueAtTime(0, p5sound.audiocontext.currentTime);
    }
    if (unit instanceof p5.Signal) {
      unit.setValue(0);
    }
    this.output.connect(unit);
  };
  p5.Env.prototype.disconnect = function (unit) {
    this.output.disconnect();
  };
  // Signal Math
  /**
   *  Add a value to the p5.Oscillator's output amplitude,
   *  and return the oscillator. Calling this method
   *  again will override the initial add() with new values.
   *
   *  @method  add
   *  @param {Number} number Constant number to add
   *  @return {p5.Env} Envelope Returns this envelope
   *                                     with scaled output
   */
  p5.Env.prototype.add = function (num) {
    var add = new Add(num);
    var thisChain = this.mathOps.length;
    var nextChain = this.output;
    return p5.prototype._mathChain(this, add, thisChain, nextChain, Add);
  };
  /**
   *  Multiply the p5.Env's output amplitude
   *  by a fixed value. Calling this method
   *  again will override the initial mult() with new values.
   *
   *  @method  mult
   *  @param {Number} number Constant number to multiply
   *  @return {p5.Env} Envelope Returns this envelope
   *                                     with scaled output
   */
  p5.Env.prototype.mult = function (num) {
    var mult = new Mult(num);
    var thisChain = this.mathOps.length;
    var nextChain = this.output;
    return p5.prototype._mathChain(this, mult, thisChain, nextChain, Mult);
  };
  /**
   *  Scale this envelope's amplitude values to a given
   *  range, and return the envelope. Calling this method
   *  again will override the initial scale() with new values.
   *
   *  @method  scale
   *  @param  {Number} inMin  input range minumum
   *  @param  {Number} inMax  input range maximum
   *  @param  {Number} outMin input range minumum
   *  @param  {Number} outMax input range maximum
   *  @return {p5.Env} Envelope Returns this envelope
   *                                     with scaled output
   */
  p5.Env.prototype.scale = function (inMin, inMax, outMin, outMax) {
    var scale = new Scale(inMin, inMax, outMin, outMax);
    var thisChain = this.mathOps.length;
    var nextChain = this.output;
    return p5.prototype._mathChain(this, scale, thisChain, nextChain, Scale);
  };
  // get rid of the oscillator
  p5.Env.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    var now = p5sound.audiocontext.currentTime;
    this.disconnect();
    try {
      this.control.dispose();
      this.control = null;
    } catch (e) {
    }
    for (var i = 1; i < this.mathOps.length; i++) {
      mathOps[i].dispose();
    }
  };
}(master, Tone_signal_Add, Tone_signal_Multiply, Tone_signal_Scale, Tone_signal_TimelineSignal, Tone_core_Tone);
var pulse;
pulse = function () {
  'use strict';
  var p5sound = master;
  /**
   *  Creates a Pulse object, an oscillator that implements
   *  Pulse Width Modulation.
   *  The pulse is created with two oscillators.
   *  Accepts a parameter for frequency, and to set the
   *  width between the pulses. See <a href="
   *  http://p5js.org/reference/#/p5.Oscillator">
   *  <code>p5.Oscillator</code> for a full list of methods.
   *  
   *  @class p5.Pulse
   *  @constructor
   *  @param {Number} [freq] Frequency in oscillations per second (Hz)
   *  @param {Number} [w]    Width between the pulses (0 to 1.0,
   *                         defaults to 0)
   *  @example
   *  <div><code>
   *  var pulse;
   *  function setup() {
   *    background(0);
   *    
   *    // Create and start the pulse wave oscillator
   *    pulse = new p5.Pulse();
   *    pulse.amp(0.5);
   *    pulse.freq(220);
   *    pulse.start();
   *  }
   *
   *  function draw() {
   *    var w = map(mouseX, 0, width, 0, 1);
   *    w = constrain(w, 0, 1);
   *    pulse.width(w)
   *  }
   *  </code></div>
   */
  p5.Pulse = function (freq, w) {
    p5.Oscillator.call(this, freq, 'sawtooth');
    // width of PWM, should be betw 0 to 1.0
    this.w = w || 0;
    // create a second oscillator with inverse frequency
    this.osc2 = new p5.SawOsc(freq);
    // create a delay node
    this.dNode = p5sound.audiocontext.createDelay();
    // dc offset
    this.dcOffset = createDCOffset();
    this.dcGain = p5sound.audiocontext.createGain();
    this.dcOffset.connect(this.dcGain);
    this.dcGain.connect(this.output);
    // set delay time based on PWM width
    this.f = freq || 440;
    var mW = this.w / this.oscillator.frequency.value;
    this.dNode.delayTime.value = mW;
    this.dcGain.gain.value = 1.7 * (0.5 - this.w);
    // disconnect osc2 and connect it to delay, which is connected to output
    this.osc2.disconnect();
    this.osc2.panner.disconnect();
    this.osc2.amp(-1);
    // inverted amplitude
    this.osc2.output.connect(this.dNode);
    this.dNode.connect(this.output);
    this.output.gain.value = 1;
    this.output.connect(this.panner);
  };
  p5.Pulse.prototype = Object.create(p5.Oscillator.prototype);
  /**
   *  Set the width of a Pulse object (an oscillator that implements
   *  Pulse Width Modulation).
   *
   *  @method  width
   *  @param {Number} [width]    Width between the pulses (0 to 1.0,
   *                         defaults to 0)
   */
  p5.Pulse.prototype.width = function (w) {
    if (typeof w === 'number') {
      if (w <= 1 && w >= 0) {
        this.w = w;
        // set delay time based on PWM width
        // var mW = map(this.w, 0, 1.0, 0, 1/this.f);
        var mW = this.w / this.oscillator.frequency.value;
        this.dNode.delayTime.value = mW;
      }
      this.dcGain.gain.value = 1.7 * (0.5 - this.w);
    } else {
      w.connect(this.dNode.delayTime);
      var sig = new p5.SignalAdd(-0.5);
      sig.setInput(w);
      sig = sig.mult(-1);
      sig = sig.mult(1.7);
      sig.connect(this.dcGain.gain);
    }
  };
  p5.Pulse.prototype.start = function (f, time) {
    var now = p5sound.audiocontext.currentTime;
    var t = time || 0;
    if (!this.started) {
      var freq = f || this.f;
      var type = this.oscillator.type;
      this.oscillator = p5sound.audiocontext.createOscillator();
      this.oscillator.frequency.setValueAtTime(freq, now);
      this.oscillator.type = type;
      this.oscillator.connect(this.output);
      this.oscillator.start(t + now);
      // set up osc2
      this.osc2.oscillator = p5sound.audiocontext.createOscillator();
      this.osc2.oscillator.frequency.setValueAtTime(freq, t + now);
      this.osc2.oscillator.type = type;
      this.osc2.oscillator.connect(this.osc2.output);
      this.osc2.start(t + now);
      this.freqNode = [
        this.oscillator.frequency,
        this.osc2.oscillator.frequency
      ];
      // start dcOffset, too
      this.dcOffset = createDCOffset();
      this.dcOffset.connect(this.dcGain);
      this.dcOffset.start(t + now);
      // if LFO connections depend on these oscillators
      if (this.mods !== undefined && this.mods.frequency !== undefined) {
        this.mods.frequency.connect(this.freqNode[0]);
        this.mods.frequency.connect(this.freqNode[1]);
      }
      this.started = true;
      this.osc2.started = true;
    }
  };
  p5.Pulse.prototype.stop = function (time) {
    if (this.started) {
      var t = time || 0;
      var now = p5sound.audiocontext.currentTime;
      this.oscillator.stop(t + now);
      this.osc2.oscillator.stop(t + now);
      this.dcOffset.stop(t + now);
      this.started = false;
      this.osc2.started = false;
    }
  };
  p5.Pulse.prototype.freq = function (val, rampTime, tFromNow) {
    if (typeof val === 'number') {
      this.f = val;
      var now = p5sound.audiocontext.currentTime;
      var rampTime = rampTime || 0;
      var tFromNow = tFromNow || 0;
      var currentFreq = this.oscillator.frequency.value;
      this.oscillator.frequency.cancelScheduledValues(now);
      this.oscillator.frequency.setValueAtTime(currentFreq, now + tFromNow);
      this.oscillator.frequency.exponentialRampToValueAtTime(val, tFromNow + rampTime + now);
      this.osc2.oscillator.frequency.cancelScheduledValues(now);
      this.osc2.oscillator.frequency.setValueAtTime(currentFreq, now + tFromNow);
      this.osc2.oscillator.frequency.exponentialRampToValueAtTime(val, tFromNow + rampTime + now);
      if (this.freqMod) {
        this.freqMod.output.disconnect();
        this.freqMod = null;
      }
    } else if (val.output) {
      val.output.disconnect();
      val.output.connect(this.oscillator.frequency);
      val.output.connect(this.osc2.oscillator.frequency);
      this.freqMod = val;
    }
  };
  // inspiration: http://webaudiodemos.appspot.com/oscilloscope/
  function createDCOffset() {
    var ac = p5sound.audiocontext;
    var buffer = ac.createBuffer(1, 2048, ac.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < 2048; i++)
      data[i] = 1;
    var bufferSource = ac.createBufferSource();
    bufferSource.buffer = buffer;
    bufferSource.loop = true;
    return bufferSource;
  }
}(master, oscillator);
var noise;
noise = function () {
  'use strict';
  var p5sound = master;
  /**
   *  Noise is a type of oscillator that generates a buffer with random values.
   *
   *  @class p5.Noise
   *  @constructor
   *  @param {String} type Type of noise can be 'white' (default),
   *                       'brown' or 'pink'.
   *  @return {Object}    Noise Object
   */
  p5.Noise = function (type) {
    var assignType;
    p5.Oscillator.call(this);
    delete this.f;
    delete this.freq;
    delete this.oscillator;
    if (type === 'brown') {
      assignType = _brownNoise;
    } else if (type === 'pink') {
      assignType = _pinkNoise;
    } else {
      assignType = _whiteNoise;
    }
    this.buffer = assignType;
  };
  p5.Noise.prototype = Object.create(p5.Oscillator.prototype);
  // generate noise buffers
  var _whiteNoise = function () {
    var bufferSize = 2 * p5sound.audiocontext.sampleRate;
    var whiteBuffer = p5sound.audiocontext.createBuffer(1, bufferSize, p5sound.audiocontext.sampleRate);
    var noiseData = whiteBuffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }
    whiteBuffer.type = 'white';
    return whiteBuffer;
  }();
  var _pinkNoise = function () {
    var bufferSize = 2 * p5sound.audiocontext.sampleRate;
    var pinkBuffer = p5sound.audiocontext.createBuffer(1, bufferSize, p5sound.audiocontext.sampleRate);
    var noiseData = pinkBuffer.getChannelData(0);
    var b0, b1, b2, b3, b4, b5, b6;
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0;
    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.969 * b2 + white * 0.153852;
      b3 = 0.8665 * b3 + white * 0.3104856;
      b4 = 0.55 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.016898;
      noiseData[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      noiseData[i] *= 0.11;
      // (roughly) compensate for gain
      b6 = white * 0.115926;
    }
    pinkBuffer.type = 'pink';
    return pinkBuffer;
  }();
  var _brownNoise = function () {
    var bufferSize = 2 * p5sound.audiocontext.sampleRate;
    var brownBuffer = p5sound.audiocontext.createBuffer(1, bufferSize, p5sound.audiocontext.sampleRate);
    var noiseData = brownBuffer.getChannelData(0);
    var lastOut = 0;
    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      noiseData[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = noiseData[i];
      noiseData[i] *= 3.5;
    }
    brownBuffer.type = 'brown';
    return brownBuffer;
  }();
  /**
   *  Set type of noise to 'white', 'pink' or 'brown'.
   *  White is the default.
   *
   *  @method setType
   *  @param {String} [type] 'white', 'pink' or 'brown'
   */
  p5.Noise.prototype.setType = function (type) {
    switch (type) {
    case 'white':
      this.buffer = _whiteNoise;
      break;
    case 'pink':
      this.buffer = _pinkNoise;
      break;
    case 'brown':
      this.buffer = _brownNoise;
      break;
    default:
      this.buffer = _whiteNoise;
    }
    if (this.started) {
      var now = p5sound.audiocontext.currentTime;
      this.stop(now);
      this.start(now + 0.01);
    }
  };
  p5.Noise.prototype.getType = function () {
    return this.buffer.type;
  };
  /**
   *  Start the noise
   *
   *  @method start
   */
  p5.Noise.prototype.start = function () {
    if (this.started) {
      this.stop();
    }
    this.noise = p5sound.audiocontext.createBufferSource();
    this.noise.buffer = this.buffer;
    this.noise.loop = true;
    this.noise.connect(this.output);
    var now = p5sound.audiocontext.currentTime;
    this.noise.start(now);
    this.started = true;
  };
  /**
   *  Stop the noise.
   *
   *  @method  stop
   */
  p5.Noise.prototype.stop = function () {
    var now = p5sound.audiocontext.currentTime;
    if (this.noise) {
      this.noise.stop(now);
      this.started = false;
    }
  };
  /**
   *  Pan the noise.
   *
   *  @method  pan
   *  @param  {Number} panning Number between -1 (left)
   *                           and 1 (right)
   *  @param  {Number} timeFromNow schedule this event to happen
   *                                seconds from now
   */
  /**
   *  Set the amplitude of the noise between 0 and 1.0. Or,
   *  modulate amplitude with an audio signal such as an oscillator.
   *
   *  @param  {Number|Object} volume amplitude between 0 and 1.0
   *                                     or modulating signal/oscillator
   *  @param {Number} [rampTime] create a fade that lasts rampTime
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */
  /**
   *  Send output to a p5.sound or web audio object
   *
   *  @method  connect
   *  @param  {Object} unit
   */
  /**
   *  Disconnect all output.
   *
   *  @method disconnect
   */
  p5.Noise.prototype.dispose = function () {
    var now = p5sound.audiocontext.currentTime;
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    if (this.noise) {
      this.noise.disconnect();
      this.stop(now);
    }
    if (this.output) {
      this.output.disconnect();
    }
    if (this.panner) {
      this.panner.disconnect();
    }
    this.output = null;
    this.panner = null;
    this.buffer = null;
    this.noise = null;
  };
}(master);
var audioin;
audioin = function () {
  'use strict';
  var p5sound = master;
  var CustomError = errorHandler;
  /**
   *  <p>Get audio from an input, i.e. your computer's microphone.</p>
   *
   *  <p>Turn the mic on/off with the start() and stop() methods. When the mic
   *  is on, its volume can be measured with getLevel or by connecting an
   *  FFT object.</p>
   *  
   *  <p>If you want to hear the AudioIn, use the .connect() method. 
   *  AudioIn does not connect to p5.sound output by default to prevent
   *  feedback.</p> 
   *
   *  <p><em>Note: This uses the <a href="http://caniuse.com/stream">getUserMedia/
   *  Stream</a> API, which is not supported by certain browsers. Access in Chrome browser
   *  is limited to localhost and https, but access over http may be limited.</em></p>
   *
   *  @class p5.AudioIn
   *  @constructor
   *  @param {Function} [errorCallback] A function to call if there is an error
   *                                    accessing the AudioIn. For example,
   *                                    Safari and iOS devices do not
   *                                    currently allow microphone access.
   *  @return {Object} AudioIn
   *  @example
   *  <div><code>
   *  var mic;
   *  function setup(){
   *    mic = new p5.AudioIn()
   *    mic.start();
   *  }
   *  function draw(){
   *    background(0);
   *    micLevel = mic.getLevel();
   *    ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
   *  }
   *  </code></div>
   */
  p5.AudioIn = function (errorCallback) {
    // set up audio input
    this.input = p5sound.audiocontext.createGain();
    this.output = p5sound.audiocontext.createGain();
    this.stream = null;
    this.mediaStream = null;
    this.currentSource = 0;
    /**
     *  Client must allow browser to access their microphone / audioin source.
     *  Default: false. Will become true when the client enables acces.
     *
     *  @property {Boolean} enabled
     */
    this.enabled = false;
    // create an amplitude, connect to it by default but not to master out
    this.amplitude = new p5.Amplitude();
    this.output.connect(this.amplitude.input);
    // Some browsers let developer determine their input sources
    if (typeof window.MediaStreamTrack === 'undefined') {
      if (errorCallback) {
        errorCallback();
      } else {
        window.alert('This browser does not support AudioIn');
      }
    } else if (typeof window.MediaStreamTrack.getSources === 'function') {
      // Chrome supports getSources to list inputs. Dev picks default
      window.MediaStreamTrack.getSources(this._gotSources);
    } else {
    }
    // add to soundArray so we can dispose on close
    p5sound.soundArray.push(this);
  };
  /**
   *  Start processing audio input. This enables the use of other
   *  AudioIn methods like getLevel(). Note that by default, AudioIn
   *  is not connected to p5.sound's output. So you won't hear
   *  anything unless you use the connect() method.<br/>
   *
   *  Certain browsers limit access to the user's microphone. For example,
   *  Chrome only allows access from localhost and over https. For this reason,
   *  you may want to include an errorCallback—a function that is called in case
   *  the browser won't provide mic access.
   *
   *  @method start
   *  @param {Function} successCallback Name of a function to call on
   *                                    success.
   *  @param {Function} errorCallback Name of a function to call if
   *                                    there was an error. For example,
   *                                    some browsers do not support
   *                                    getUserMedia.
   */
  p5.AudioIn.prototype.start = function (successCallback, errorCallback) {
    var self = this;
    // if stream was already started...
    // if _gotSources() i.e. developers determine which source to use
    if (p5sound.inputSources[self.currentSource]) {
      // set the audio source
      var audioSource = p5sound.inputSources[self.currentSource].id;
      var constraints = { audio: { optional: [{ sourceId: audioSource }] } };
      window.navigator.getUserMedia(constraints, this._onStream = function (stream) {
        self.stream = stream;
        self.enabled = true;
        // Wrap a MediaStreamSourceNode around the live input
        self.mediaStream = p5sound.audiocontext.createMediaStreamSource(stream);
        self.mediaStream.connect(self.output);
        if (successCallback)
          successCallback();
        // only send to the Amplitude reader, so we can see it but not hear it.
        self.amplitude.setInput(self.output);
      }, this._onStreamError = function (e) {
        if (errorCallback)
          errorCallback(e);
        else
          console.error(e);
      });
    } else {
      // if Firefox where users select their source via browser
      // if (typeof MediaStreamTrack.getSources === 'undefined') {
      // Only get the audio stream.
      window.navigator.getUserMedia({ 'audio': true }, this._onStream = function (stream) {
        self.stream = stream;
        self.enabled = true;
        // Wrap a MediaStreamSourceNode around the live input
        self.mediaStream = p5sound.audiocontext.createMediaStreamSource(stream);
        self.mediaStream.connect(self.output);
        // only send to the Amplitude reader, so we can see it but not hear it.
        self.amplitude.setInput(self.output);
        if (successCallback)
          successCallback();
      }, this._onStreamError = function (e) {
        if (errorCallback)
          errorCallback(e);
        else
          console.error(e);
      });
    }
  };
  /**
   *  Turn the AudioIn off. If the AudioIn is stopped, it cannot getLevel().
   *  If re-starting, the user may be prompted for permission access.
   *
   *  @method stop
   */
  p5.AudioIn.prototype.stop = function () {
    if (this.stream) {
      // assume only one track
      this.stream.getTracks()[0].stop();
    }
  };
  /**
   *  Connect to an audio unit. If no parameter is provided, will
   *  connect to the master output (i.e. your speakers).<br/>
   *  
   *  @method  connect
   *  @param  {Object} [unit] An object that accepts audio input,
   *                          such as an FFT
   */
  p5.AudioIn.prototype.connect = function (unit) {
    if (unit) {
      if (unit.hasOwnProperty('input')) {
        this.output.connect(unit.input);
      } else if (unit.hasOwnProperty('analyser')) {
        this.output.connect(unit.analyser);
      } else {
        this.output.connect(unit);
      }
    } else {
      this.output.connect(p5sound.input);
    }
  };
  /**
   *  Disconnect the AudioIn from all audio units. For example, if
   *  connect() had been called, disconnect() will stop sending 
   *  signal to your speakers.<br/>
   *
   *  @method  disconnect
   */
  p5.AudioIn.prototype.disconnect = function () {
    this.output.disconnect();
    // stay connected to amplitude even if not outputting to p5
    this.output.connect(this.amplitude.input);
  };
  /**
   *  Read the Amplitude (volume level) of an AudioIn. The AudioIn
   *  class contains its own instance of the Amplitude class to help
   *  make it easy to get a microphone's volume level. Accepts an
   *  optional smoothing value (0.0 < 1.0). <em>NOTE: AudioIn must
   *  .start() before using .getLevel().</em><br/>
   *  
   *  @method  getLevel
   *  @param  {Number} [smoothing] Smoothing is 0.0 by default.
   *                               Smooths values based on previous values.
   *  @return {Number}           Volume level (between 0.0 and 1.0)
   */
  p5.AudioIn.prototype.getLevel = function (smoothing) {
    if (smoothing) {
      this.amplitude.smoothing = smoothing;
    }
    return this.amplitude.getLevel();
  };
  /**
   *  Add input sources to the list of available sources.
   *  
   *  @private
   */
  p5.AudioIn.prototype._gotSources = function (sourceInfos) {
    for (var i = 0; i < sourceInfos.length; i++) {
      var sourceInfo = sourceInfos[i];
      if (sourceInfo.kind === 'audio') {
        // add the inputs to inputSources
        //p5sound.inputSources.push(sourceInfo);
        return sourceInfo;
      }
    }
  };
  /**
   *  Set amplitude (volume) of a mic input between 0 and 1.0. <br/>
   *
   *  @method  amp
   *  @param  {Number} vol between 0 and 1.0
   *  @param {Number} [time] ramp time (optional)
   */
  p5.AudioIn.prototype.amp = function (vol, t) {
    if (t) {
      var rampTime = t || 0;
      var currentVol = this.output.gain.value;
      this.output.gain.cancelScheduledValues(p5sound.audiocontext.currentTime);
      this.output.gain.setValueAtTime(currentVol, p5sound.audiocontext.currentTime);
      this.output.gain.linearRampToValueAtTime(vol, rampTime + p5sound.audiocontext.currentTime);
    } else {
      this.output.gain.cancelScheduledValues(p5sound.audiocontext.currentTime);
      this.output.gain.setValueAtTime(vol, p5sound.audiocontext.currentTime);
    }
  };
  p5.AudioIn.prototype.listSources = function () {
    console.log('listSources is deprecated - please use AudioIn.getSources');
    console.log('input sources: ');
    if (p5sound.inputSources.length > 0) {
      return p5sound.inputSources;
    } else {
      return 'This browser does not support MediaStreamTrack.getSources()';
    }
  };
  /**
   * Chrome only. Returns a list of available input sources 
   * and allows the user to set the media source. Firefox allows 
   * the user to choose from input sources in the permissions dialogue
   * instead of enumerating available sources and selecting one.
   * Note: in order to have descriptive media names your page must be 
   * served over a secure (HTTPS) connection and the page should 
   * request user media before enumerating devices. Otherwise device 
   * ID will be a long device ID number and does not specify device 
   * type. For example see 
   * https://simpl.info/getusermedia/sources/index.html vs.
   * http://simpl.info/getusermedia/sources/index.html
   *
   * @method  getSources
   * @param  {Function} callback a callback to handle the sources 
   *                               when they have been enumerated
   * @example
   *  <div><code>
   *  var audiograb;
   *      
   *  function setup(){
   *    //new audioIn
   *    audioGrab = new p5.AudioIn();
   *    
   *    audioGrab.getSources(function(sourceList) {
   *      //print out the array of available sources
   *      console.log(sourceList);
   *      //set the source to the first item in the inputSources array
   *      audioGrab.setSource(0);
   *    });
   *  }
   *  </code></div>
   */
  p5.AudioIn.prototype.getSources = function (callback) {
    if (typeof window.MediaStreamTrack.getSources === 'function') {
      window.MediaStreamTrack.getSources(function (data) {
        for (var i = 0, max = data.length; i < max; i++) {
          var sourceInfo = data[i];
          if (sourceInfo.kind === 'audio') {
            // add the inputs to inputSources
            p5sound.inputSources.push(sourceInfo);
          }
        }
        callback(p5sound.inputSources);
      });
    } else {
      console.log('This browser does not support MediaStreamTrack.getSources()');
    }
  };
  /**
   *  Set the input source. Accepts a number representing a
   *  position in the array returned by listSources().
   *  This is only available in browsers that support 
   *  MediaStreamTrack.getSources(). Instead, some browsers
   *  give users the option to set their own media source.<br/>
   *  
   *  @method setSource
   *  @param {number} num position of input source in the array
   */
  p5.AudioIn.prototype.setSource = function (num) {
    // TO DO - set input by string or # (array position)
    var self = this;
    if (p5sound.inputSources.length > 0 && num < p5sound.inputSources.length) {
      // set the current source
      self.currentSource = num;
      console.log('set source to ' + p5sound.inputSources[self.currentSource].id);
    } else {
      console.log('unable to set input source');
    }
  };
  // private method
  p5.AudioIn.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.stop();
    if (this.output) {
      this.output.disconnect();
    }
    if (this.amplitude) {
      this.amplitude.disconnect();
    }
    this.amplitude = null;
    this.output = null;
  };
}(master, errorHandler);
var filter;
filter = function () {
  'use strict';
  var p5sound = master;
  /**
   *  A p5.Filter uses a Web Audio Biquad Filter to filter
   *  the frequency response of an input source. Inheriting
   *  classes include:<br/>
   *  * <code>p5.LowPass</code> - allows frequencies below
   *  the cutoff frequency to pass through, and attenuates
   *  frequencies above the cutoff.<br/>
   *  * <code>p5.HighPass</code> - the opposite of a lowpass
   *  filter. <br/>
   *  * <code>p5.BandPass</code> -  allows a range of
   *  frequencies to pass through and attenuates the frequencies
   *  below and above this frequency range.<br/>
   *
   *  The <code>.res()</code> method controls either width of the
   *  bandpass, or resonance of the low/highpass cutoff frequency.
   *
   *  @class p5.Filter
   *  @constructor
   *  @param {[String]} type 'lowpass' (default), 'highpass', 'bandpass'
   *  @return {Object} p5.Filter
   *  @example
   *  <div><code>
   *  var fft, noise, filter;
   *
   *  function setup() {
   *    fill(255, 40, 255);
   *
   *    filter = new p5.BandPass();
   *
   *    noise = new p5.Noise();
   *    // disconnect unfiltered noise,
   *    // and connect to filter
   *    noise.disconnect();
   *    noise.connect(filter);
   *    noise.start();
   *
   *    fft = new p5.FFT();
   *  }
   *
   *  function draw() {
   *    background(30);
   *
   *    // set the BandPass frequency based on mouseX
   *    var freq = map(mouseX, 0, width, 20, 10000);
   *    filter.freq(freq);
   *    // give the filter a narrow band (lower res = wider bandpass)
   *    filter.res(50);
   *
   *    // draw filtered spectrum
   *    var spectrum = fft.analyze();
   *    noStroke();
   *    for (var i = 0; i < spectrum.length; i++) {
   *      var x = map(i, 0, spectrum.length, 0, width);
   *      var h = -height + map(spectrum[i], 0, 255, height, 0);
   *      rect(x, height, width/spectrum.length, h);
   *    }
   *    
   *    isMouseOverCanvas();
   *  }
   *
   *  function isMouseOverCanvas() {
   *    var mX = mouseX, mY = mouseY;
   *    if (mX > 0 && mX < width && mY < height && mY > 0) {
   *      noise.amp(0.5, 0.2);
   *    } else {
   *      noise.amp(0, 0.2);
   *    }
   *  }
   *  </code></div>
   */
  p5.Filter = function (type) {
    this.ac = p5sound.audiocontext;
    this.input = this.ac.createGain();
    this.output = this.ac.createGain();
    /**
     *  The p5.Filter is built with a
     *  <a href="http://www.w3.org/TR/webaudio/#BiquadFilterNode">
     *  Web Audio BiquadFilter Node</a>.
     *  
     *  @property biquadFilter
     *  @type {Object}  Web Audio Delay Node
     */
    this.biquad = this.ac.createBiquadFilter();
    this.input.connect(this.biquad);
    this.biquad.connect(this.output);
    this.connect();
    if (type) {
      this.setType(type);
    }
    // add to the soundArray
    p5sound.soundArray.push(this);
  };
  /**
   *  Filter an audio signal according to a set
   *  of filter parameters.
   *  
   *  @method  process
   *  @param  {Object} Signal  An object that outputs audio
   *  @param {[Number]} freq Frequency in Hz, from 10 to 22050
   *  @param {[Number]} res Resonance/Width of the filter frequency
   *                        from 0.001 to 1000
   */
  p5.Filter.prototype.process = function (src, freq, res) {
    src.connect(this.input);
    this.set(freq, res);
  };
  /**
   *  Set the frequency and the resonance of the filter.
   *
   *  @method  set
   *  @param {Number} freq Frequency in Hz, from 10 to 22050
   *  @param {Number} res  Resonance (Q) from 0.001 to 1000
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */
  p5.Filter.prototype.set = function (freq, res, time) {
    if (freq) {
      this.freq(freq, time);
    }
    if (res) {
      this.res(res, time);
    }
  };
  /**
   *  Set the filter frequency, in Hz, from 10 to 22050 (the range of
   *  human hearing, although in reality most people hear in a narrower
   *  range).
   *
   *  @method  freq
   *  @param  {Number} freq Filter Frequency
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   *  @return {Number} value  Returns the current frequency value
   */
  p5.Filter.prototype.freq = function (freq, time) {
    var self = this;
    var t = time || 0;
    if (freq <= 0) {
      freq = 1;
    }
    if (typeof freq === 'number') {
      self.biquad.frequency.value = freq;
      self.biquad.frequency.cancelScheduledValues(this.ac.currentTime + 0.01 + t);
      self.biquad.frequency.exponentialRampToValueAtTime(freq, this.ac.currentTime + 0.02 + t);
    } else if (freq) {
      freq.connect(this.biquad.frequency);
    }
    return self.biquad.frequency.value;
  };
  /**
   *  Controls either width of a bandpass frequency,
   *  or the resonance of a low/highpass cutoff frequency.
   *
   *  @method  res
   *  @param {Number} res  Resonance/Width of filter freq
   *                       from 0.001 to 1000
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   *  @return {Number} value Returns the current res value
   */
  p5.Filter.prototype.res = function (res, time) {
    var self = this;
    var t = time || 0;
    if (typeof res == 'number') {
      self.biquad.Q.value = res;
      self.biquad.Q.cancelScheduledValues(self.ac.currentTime + 0.01 + t);
      self.biquad.Q.linearRampToValueAtTime(res, self.ac.currentTime + 0.02 + t);
    } else if (res) {
      freq.connect(this.biquad.Q);
    }
    return self.biquad.Q.value;
  };
  /**
   *  Set the type of a p5.Filter. Possible types include: 
   *  "lowpass" (default), "highpass", "bandpass", 
   *  "lowshelf", "highshelf", "peaking", "notch",
   *  "allpass". 
   *  
   *  @method  setType
   *  @param {String}
   */
  p5.Filter.prototype.setType = function (t) {
    this.biquad.type = t;
  };
  /**
   *  Set the output level of the filter.
   *  
   *  @method  amp
   *  @param {Number} volume amplitude between 0 and 1.0
   *  @param {Number} [rampTime] create a fade that lasts rampTime 
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */
  p5.Filter.prototype.amp = function (vol, rampTime, tFromNow) {
    var rampTime = rampTime || 0;
    var tFromNow = tFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    var currentVol = this.output.gain.value;
    this.output.gain.cancelScheduledValues(now);
    this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow + 0.001);
    this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime + 0.001);
  };
  /**
   *  Send output to a p5.sound or web audio object
   *  
   *  @method connect
   *  @param  {Object} unit
   */
  p5.Filter.prototype.connect = function (unit) {
    var u = unit || p5.soundOut.input;
    this.output.connect(u);
  };
  /**
   *  Disconnect all output.
   *  
   *  @method disconnect
   */
  p5.Filter.prototype.disconnect = function () {
    this.output.disconnect();
  };
  p5.Filter.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.input.disconnect();
    this.input = undefined;
    this.output.disconnect();
    this.output = undefined;
    this.biquad.disconnect();
    this.biquad = undefined;
  };
  /**
   *  Constructor: <code>new p5.LowPass()</code> Filter.
   *  This is the same as creating a p5.Filter and then calling
   *  its method <code>setType('lowpass')</code>.
   *  See p5.Filter for methods.
   *  
   *  @method p5.LowPass
   */
  p5.LowPass = function () {
    p5.Filter.call(this, 'lowpass');
  };
  p5.LowPass.prototype = Object.create(p5.Filter.prototype);
  /**
   *  Constructor: <code>new p5.HighPass()</code> Filter.
   *  This is the same as creating a p5.Filter and then calling
   *  its method <code>setType('highpass')</code>.
   *  See p5.Filter for methods.
   *  
   *  @method p5.HighPass
   */
  p5.HighPass = function () {
    p5.Filter.call(this, 'highpass');
  };
  p5.HighPass.prototype = Object.create(p5.Filter.prototype);
  /**
   *  Constructor: <code>new p5.BandPass()</code> Filter.
   *  This is the same as creating a p5.Filter and then calling
   *  its method <code>setType('bandpass')</code>.
   *  See p5.Filter for methods. 
   *  
   *  @method p5.BandPass
   */
  p5.BandPass = function () {
    p5.Filter.call(this, 'bandpass');
  };
  p5.BandPass.prototype = Object.create(p5.Filter.prototype);
}(master);
var delay;
delay = function () {
  'use strict';
  var p5sound = master;
  var Filter = filter;
  /**
   *  Delay is an echo effect. It processes an existing sound source,
   *  and outputs a delayed version of that sound. The p5.Delay can
   *  produce different effects depending on the delayTime, feedback,
   *  filter, and type. In the example below, a feedback of 0.5 will
   *  produce a looping delay that decreases in volume by
   *  50% each repeat. A filter will cut out the high frequencies so
   *  that the delay does not sound as piercing as the original source.
   *  
   *  @class p5.Delay
   *  @constructor
   *  @return {Object} Returns a p5.Delay object
   *  @example
   *  <div><code>
   *  var noise, env, delay;
   *  
   *  function setup() {
   *    background(0);
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *    text('click to play', width/2, height/2);
   *    
   *    noise = new p5.Noise('brown');
   *    noise.amp(0);
   *    noise.start();
   *    
   *    delay = new p5.Delay();
   *
   *    // delay.process() accepts 4 parameters:
   *    // source, delayTime, feedback, filter frequency
   *    // play with these numbers!!
   *    delay.process(noise, .12, .7, 2300);
   *    
   *    // play the noise with an envelope,
   *    // a series of fades ( time / value pairs )
   *    env = new p5.Env(.01, 0.2, .2, .1);
   *  }
   *
   *  // mouseClick triggers envelope
   *  function mouseClicked() {
   *    // is mouse over canvas?
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      env.play(noise);
   *    }
   *  }
   *  </code></div>
   */
  p5.Delay = function () {
    this.ac = p5sound.audiocontext;
    this.input = this.ac.createGain();
    this.output = this.ac.createGain();
    this._split = this.ac.createChannelSplitter(2);
    this._merge = this.ac.createChannelMerger(2);
    this._leftGain = this.ac.createGain();
    this._rightGain = this.ac.createGain();
    /**
     *  The p5.Delay is built with two
     *  <a href="http://www.w3.org/TR/webaudio/#DelayNode">
     *  Web Audio Delay Nodes</a>, one for each stereo channel.
     *  
     *  @property leftDelay
     *  @type {Object}  Web Audio Delay Node
     */
    this.leftDelay = this.ac.createDelay();
    /**
     *  The p5.Delay is built with two
     *  <a href="http://www.w3.org/TR/webaudio/#DelayNode">
     *  Web Audio Delay Nodes</a>, one for each stereo channel.
     *  
     *  @property rightDelay
     *  @type {Object}  Web Audio Delay Node
     */
    this.rightDelay = this.ac.createDelay();
    this._leftFilter = new p5.Filter();
    this._rightFilter = new p5.Filter();
    this._leftFilter.disconnect();
    this._rightFilter.disconnect();
    this._leftFilter.biquad.frequency.setValueAtTime(1200, this.ac.currentTime);
    this._rightFilter.biquad.frequency.setValueAtTime(1200, this.ac.currentTime);
    this._leftFilter.biquad.Q.setValueAtTime(0.3, this.ac.currentTime);
    this._rightFilter.biquad.Q.setValueAtTime(0.3, this.ac.currentTime);
    // graph routing
    this.input.connect(this._split);
    this.leftDelay.connect(this._leftGain);
    this.rightDelay.connect(this._rightGain);
    this._leftGain.connect(this._leftFilter.input);
    this._rightGain.connect(this._rightFilter.input);
    this._merge.connect(this.output);
    this.output.connect(p5.soundOut.input);
    this._leftFilter.biquad.gain.setValueAtTime(1, this.ac.currentTime);
    this._rightFilter.biquad.gain.setValueAtTime(1, this.ac.currentTime);
    // default routing
    this.setType(0);
    this._maxDelay = this.leftDelay.delayTime.maxValue;
    // add this p5.SoundFile to the soundArray
    p5sound.soundArray.push(this);
  };
  /**
   *  Add delay to an audio signal according to a set
   *  of delay parameters.
   *  
   *  @method  process
   *  @param  {Object} Signal  An object that outputs audio
   *  @param  {Number} [delayTime] Time (in seconds) of the delay/echo.
   *                               Some browsers limit delayTime to
   *                               1 second.
   *  @param  {Number} [feedback]  sends the delay back through itself
   *                               in a loop that decreases in volume
   *                               each time.
   *  @param  {Number} [lowPass]   Cutoff frequency. Only frequencies
   *                               below the lowPass will be part of the
   *                               delay.
   */
  p5.Delay.prototype.process = function (src, _delayTime, _feedback, _filter) {
    var feedback = _feedback || 0;
    var delayTime = _delayTime || 0;
    if (feedback >= 1) {
      throw new Error('Feedback value will force a positive feedback loop.');
    }
    if (delayTime >= this._maxDelay) {
      throw new Error('Delay Time exceeds maximum delay time of ' + this._maxDelay + ' second.');
    }
    src.connect(this.input);
    this.leftDelay.delayTime.setValueAtTime(delayTime, this.ac.currentTime);
    this.rightDelay.delayTime.setValueAtTime(delayTime, this.ac.currentTime);
    this._leftGain.gain.setValueAtTime(feedback, this.ac.currentTime);
    this._rightGain.gain.setValueAtTime(feedback, this.ac.currentTime);
    if (_filter) {
      this._leftFilter.freq(_filter);
      this._rightFilter.freq(_filter);
    }
  };
  /**
   *  Set the delay (echo) time, in seconds. Usually this value will be
   *  a floating point number between 0.0 and 1.0.
   *
   *  @method  delayTime
   *  @param {Number} delayTime Time (in seconds) of the delay
   */
  p5.Delay.prototype.delayTime = function (t) {
    // if t is an audio node...
    if (typeof t !== 'number') {
      t.connect(this.leftDelay.delayTime);
      t.connect(this.rightDelay.delayTime);
    } else {
      this.leftDelay.delayTime.cancelScheduledValues(this.ac.currentTime);
      this.rightDelay.delayTime.cancelScheduledValues(this.ac.currentTime);
      this.leftDelay.delayTime.linearRampToValueAtTime(t, this.ac.currentTime);
      this.rightDelay.delayTime.linearRampToValueAtTime(t, this.ac.currentTime);
    }
  };
  /**
   *  Feedback occurs when Delay sends its signal back through its input
   *  in a loop. The feedback amount determines how much signal to send each
   *  time through the loop. A feedback greater than 1.0 is not desirable because
   *  it will increase the overall output each time through the loop,
   *  creating an infinite feedback loop.
   *  
   *  @method  feedback
   *  @param {Number|Object} feedback 0.0 to 1.0, or an object such as an
   *                                  Oscillator that can be used to
   *                                  modulate this param
   */
  p5.Delay.prototype.feedback = function (f) {
    // if f is an audio node...
    if (typeof f !== 'number') {
      f.connect(this._leftGain.gain);
      f.connect(this._rightGain.gain);
    } else if (f >= 1) {
      throw new Error('Feedback value will force a positive feedback loop.');
    } else {
      this._leftGain.gain.exponentialRampToValueAtTime(f, this.ac.currentTime);
      this._rightGain.gain.exponentialRampToValueAtTime(f, this.ac.currentTime);
    }
  };
  /**
   *  Set a lowpass filter frequency for the delay. A lowpass filter
   *  will cut off any frequencies higher than the filter frequency.
   *   
   *  @method  filter
   *  @param {Number|Object} cutoffFreq  A lowpass filter will cut off any 
   *                              frequencies higher than the filter frequency.
   *  @param {Number|Object} res  Resonance of the filter frequency
   *                              cutoff, or an object (i.e. a p5.Oscillator)
   *                              that can be used to modulate this parameter.
   *                              High numbers (i.e. 15) will produce a resonance,
   *                              low numbers (i.e. .2) will produce a slope.
   */
  p5.Delay.prototype.filter = function (freq, q) {
    this._leftFilter.set(freq, q);
    this._rightFilter.set(freq, q);
  };
  /**
   *  Choose a preset type of delay. 'pingPong' bounces the signal
   *  from the left to the right channel to produce a stereo effect.
   *  Any other parameter will revert to the default delay setting.
   *  
   *  @method  setType
   *  @param {String|Number} type 'pingPong' (1) or 'default' (0)
   */
  p5.Delay.prototype.setType = function (t) {
    if (t === 1) {
      t = 'pingPong';
    }
    this._split.disconnect();
    this._leftFilter.disconnect();
    this._rightFilter.disconnect();
    this._split.connect(this.leftDelay, 0);
    this._split.connect(this.rightDelay, 1);
    switch (t) {
    case 'pingPong':
      this._rightFilter.setType(this._leftFilter.biquad.type);
      this._leftFilter.output.connect(this._merge, 0, 0);
      this._rightFilter.output.connect(this._merge, 0, 1);
      this._leftFilter.output.connect(this.rightDelay);
      this._rightFilter.output.connect(this.leftDelay);
      break;
    default:
      this._leftFilter.output.connect(this._merge, 0, 0);
      this._leftFilter.output.connect(this._merge, 0, 1);
      this._leftFilter.output.connect(this.leftDelay);
      this._leftFilter.output.connect(this.rightDelay);
    }
  };
  /**
   *  Set the output level of the delay effect.
   *  
   *  @method  amp
   *  @param  {Number} volume amplitude between 0 and 1.0
   *  @param {Number} [rampTime] create a fade that lasts rampTime 
   *  @param {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */
  p5.Delay.prototype.amp = function (vol, rampTime, tFromNow) {
    var rampTime = rampTime || 0;
    var tFromNow = tFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    var currentVol = this.output.gain.value;
    this.output.gain.cancelScheduledValues(now);
    this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow + 0.001);
    this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime + 0.001);
  };
  /**
   *  Send output to a p5.sound or web audio object
   *  
   *  @method  connect
   *  @param  {Object} unit
   */
  p5.Delay.prototype.connect = function (unit) {
    var u = unit || p5.soundOut.input;
    this.output.connect(u);
  };
  /**
   *  Disconnect all output.
   *  
   *  @method disconnect
   */
  p5.Delay.prototype.disconnect = function () {
    this.output.disconnect();
  };
  p5.Delay.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.input.disconnect();
    this.output.disconnect();
    this._split.disconnect();
    this._leftFilter.disconnect();
    this._rightFilter.disconnect();
    this._merge.disconnect();
    this._leftGain.disconnect();
    this._rightGain.disconnect();
    this.leftDelay.disconnect();
    this.rightDelay.disconnect();
    this.input = undefined;
    this.output = undefined;
    this._split = undefined;
    this._leftFilter = undefined;
    this._rightFilter = undefined;
    this._merge = undefined;
    this._leftGain = undefined;
    this._rightGain = undefined;
    this.leftDelay = undefined;
    this.rightDelay = undefined;
  };
}(master, filter);
var reverb;
reverb = function () {
  'use strict';
  var p5sound = master;
  var CustomError = errorHandler;
  /**
   *  Reverb adds depth to a sound through a large number of decaying
   *  echoes. It creates the perception that sound is occurring in a
   *  physical space. The p5.Reverb has paramters for Time (how long does the
   *  reverb last) and decayRate (how much the sound decays with each echo)
   *  that can be set with the .set() or .process() methods. The p5.Convolver
   *  extends p5.Reverb allowing you to recreate the sound of actual physical
   *  spaces through convolution.
   *  
   *  @class p5.Reverb
   *  @constructor
   *  @example
   *  <div><code>
   *  var soundFile, reverb;
   *  function preload() {
   *    soundFile = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *
   *  function setup() {
   *    reverb = new p5.Reverb();
   *    soundFile.disconnect(); // so we'll only hear reverb...
   *
   *    // connect soundFile to reverb, process w/
   *    // 3 second reverbTime, decayRate of 2%
   *    reverb.process(soundFile, 3, 2);
   *    soundFile.play();
   *  }
   *  </code></div>
   */
  p5.Reverb = function () {
    this.ac = p5sound.audiocontext;
    this.convolverNode = this.ac.createConvolver();
    this.input = this.ac.createGain();
    this.output = this.ac.createGain();
    // otherwise, Safari distorts
    this.input.gain.value = 0.5;
    this.input.connect(this.convolverNode);
    this.convolverNode.connect(this.output);
    // default params
    this._seconds = 3;
    this._decay = 2;
    this._reverse = false;
    this._buildImpulse();
    this.connect();
    p5sound.soundArray.push(this);
  };
  /**
   *  Connect a source to the reverb, and assign reverb parameters.
   *  
   *  @method  process
   *  @param  {Object} src     p5.sound / Web Audio object with a sound
   *                           output.
   *  @param  {Number} [seconds] Duration of the reverb, in seconds.
   *                           Min: 0, Max: 10. Defaults to 3.
   *  @param  {Number} [decayRate] Percentage of decay with each echo.
   *                            Min: 0, Max: 100. Defaults to 2.
   *  @param  {Boolean} [reverse] Play the reverb backwards or forwards.
   */
  p5.Reverb.prototype.process = function (src, seconds, decayRate, reverse) {
    src.connect(this.input);
    var rebuild = false;
    if (seconds) {
      this._seconds = seconds;
      rebuild = true;
    }
    if (decayRate) {
      this._decay = decayRate;
    }
    if (reverse) {
      this._reverse = reverse;
    }
    if (rebuild) {
      this._buildImpulse();
    }
  };
  /**
   *  Set the reverb settings. Similar to .process(), but without
   *  assigning a new input.
   *  
   *  @method  set
   *  @param  {Number} [seconds] Duration of the reverb, in seconds.
   *                           Min: 0, Max: 10. Defaults to 3.
   *  @param  {Number} [decayRate] Percentage of decay with each echo.
   *                            Min: 0, Max: 100. Defaults to 2.
   *  @param  {Boolean} [reverse] Play the reverb backwards or forwards.
   */
  p5.Reverb.prototype.set = function (seconds, decayRate, reverse) {
    var rebuild = false;
    if (seconds) {
      this._seconds = seconds;
      rebuild = true;
    }
    if (decayRate) {
      this._decay = decayRate;
    }
    if (reverse) {
      this._reverse = reverse;
    }
    if (rebuild) {
      this._buildImpulse();
    }
  };
  /**
   *  Set the output level of the delay effect.
   *  
   *  @method  amp
   *  @param  {Number} volume amplitude between 0 and 1.0
   *  @param  {Number} [rampTime] create a fade that lasts rampTime 
   *  @param  {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */
  p5.Reverb.prototype.amp = function (vol, rampTime, tFromNow) {
    var rampTime = rampTime || 0;
    var tFromNow = tFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    var currentVol = this.output.gain.value;
    this.output.gain.cancelScheduledValues(now);
    this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow + 0.001);
    this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime + 0.001);
  };
  /**
   *  Send output to a p5.sound or web audio object
   *  
   *  @method  connect
   *  @param  {Object} unit
   */
  p5.Reverb.prototype.connect = function (unit) {
    var u = unit || p5.soundOut.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
   *  Disconnect all output.
   *  
   *  @method disconnect
   */
  p5.Reverb.prototype.disconnect = function () {
    this.output.disconnect();
  };
  /**
   *  Inspired by Simple Reverb by Jordan Santell
   *  https://github.com/web-audio-components/simple-reverb/blob/master/index.js
   * 
   *  Utility function for building an impulse response
   *  based on the module parameters.
   *
   *  @private
   */
  p5.Reverb.prototype._buildImpulse = function () {
    var rate = this.ac.sampleRate;
    var length = rate * this._seconds;
    var decay = this._decay;
    var impulse = this.ac.createBuffer(2, length, rate);
    var impulseL = impulse.getChannelData(0);
    var impulseR = impulse.getChannelData(1);
    var n, i;
    for (i = 0; i < length; i++) {
      n = this.reverse ? length - i : i;
      impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
      impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
    }
    this.convolverNode.buffer = impulse;
  };
  p5.Reverb.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    if (this.convolverNode) {
      this.convolverNode.buffer = null;
      this.convolverNode = null;
    }
    if (typeof this.output !== 'undefined') {
      this.output.disconnect();
      this.output = null;
    }
    if (typeof this.panner !== 'undefined') {
      this.panner.disconnect();
      this.panner = null;
    }
  };
  // =======================================================================
  //                          *** p5.Convolver ***
  // =======================================================================
  /**
   *  <p>p5.Convolver extends p5.Reverb. It can emulate the sound of real
   *  physical spaces through a process called <a href="
   *  https://en.wikipedia.org/wiki/Convolution_reverb#Real_space_simulation">
   *  convolution</a>.</p>
   *  
   *  <p>Convolution multiplies any audio input by an "impulse response"
   *  to simulate the dispersion of sound over time. The impulse response is
   *  generated from an audio file that you provide. One way to
   *  generate an impulse response is to pop a balloon in a reverberant space
   *  and record the echo. Convolution can also be used to experiment with
   *  sound.</p>
   *
   *  <p>Use the method <code>createConvolution(path)</code> to instantiate a
   *  p5.Convolver with a path to your impulse response audio file.</p>
   *  
   *  @class p5.Convolver
   *  @constructor
   *  @param  {String}   path     path to a sound file
   *  @param  {Function} [callback] function to call when loading succeeds
   *  @param  {Function} [errorCallback] function to call if loading fails.
   *                                     This function will receive an error or
   *                                     XMLHttpRequest object with information
   *                                     about what went wrong.
   *  @example
   *  <div><code>
   *  var cVerb, sound;
   *  function preload() {
   *    // We have both MP3 and OGG versions of all sound assets
   *    soundFormats('ogg', 'mp3');
   *    
   *    // Try replacing 'bx-spring' with other soundfiles like
   *    // 'concrete-tunnel' 'small-plate' 'drum' 'beatbox'
   *    cVerb = createConvolver('assets/bx-spring.mp3');
   *
   *    // Try replacing 'Damscray_DancingTiger' with
   *    // 'beat', 'doorbell', lucky_dragons_-_power_melody'
   *    sound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *  
   *  function setup() {
   *    // disconnect from master output...
   *    sound.disconnect();
   *    
   *    // ...and process with cVerb
   *    // so that we only hear the convolution
   *    cVerb.process(sound);
   *    
   *    sound.play();
   *  }
   *  </code></div>
   */
  p5.Convolver = function (path, callback, errorCallback) {
    this.ac = p5sound.audiocontext;
    /**
     *  Internally, the p5.Convolver uses the a
     *  <a href="http://www.w3.org/TR/webaudio/#ConvolverNode">
     *  Web Audio Convolver Node</a>.
     *  
     *  @property convolverNode
     *  @type {Object}  Web Audio Convolver Node
     */
    this.convolverNode = this.ac.createConvolver();
    this.input = this.ac.createGain();
    this.output = this.ac.createGain();
    // otherwise, Safari distorts
    this.input.gain.value = 0.5;
    this.input.connect(this.convolverNode);
    this.convolverNode.connect(this.output);
    if (path) {
      this.impulses = [];
      this._loadBuffer(path, callback, errorCallback);
    } else {
      // parameters
      this._seconds = 3;
      this._decay = 2;
      this._reverse = false;
      this._buildImpulse();
    }
    this.connect();
    p5sound.soundArray.push(this);
  };
  p5.Convolver.prototype = Object.create(p5.Reverb.prototype);
  p5.prototype.registerPreloadMethod('createConvolver', p5.prototype);
  /**
   *  Create a p5.Convolver. Accepts a path to a soundfile 
   *  that will be used to generate an impulse response.
   *
   *  @method  createConvolver
   *  @param  {String}   path     path to a sound file
   *  @param  {Function} [callback] function to call if loading is successful.
   *                                The object will be passed in as the argument
   *                                to the callback function.
   *  @param  {Function} [errorCallback] function to call if loading is not successful.
   *                                A custom error will be passed in as the argument
   *                                to the callback function.
   *  @return {p5.Convolver}
   *  @example
   *  <div><code>
   *  var cVerb, sound;
   *  function preload() {
   *    // We have both MP3 and OGG versions of all sound assets
   *    soundFormats('ogg', 'mp3');
   *    
   *    // Try replacing 'bx-spring' with other soundfiles like
   *    // 'concrete-tunnel' 'small-plate' 'drum' 'beatbox'
   *    cVerb = createConvolver('assets/bx-spring.mp3');
   *
   *    // Try replacing 'Damscray_DancingTiger' with
   *    // 'beat', 'doorbell', lucky_dragons_-_power_melody'
   *    sound = loadSound('assets/Damscray_DancingTiger.mp3');
   *  }
   *  
   *  function setup() {
   *    // disconnect from master output...
   *    sound.disconnect();
   *    
   *    // ...and process with cVerb
   *    // so that we only hear the convolution
   *    cVerb.process(sound);
   *    
   *    sound.play();
   *  }
   *  </code></div>
   */
  p5.prototype.createConvolver = function (path, callback, errorCallback) {
    // if loading locally without a server
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }
    var cReverb = new p5.Convolver(path, callback, errorCallback);
    cReverb.impulses = [];
    return cReverb;
  };
  /**
   *  Private method to load a buffer as an Impulse Response,
   *  assign it to the convolverNode, and add to the Array of .impulses.
   *  
   *  @param   {String}   path
   *  @param   {Function} callback
   *  @param   {Function} errorCallback
   *  @private
   */
  p5.Convolver.prototype._loadBuffer = function (path, callback, errorCallback) {
    var path = p5.prototype._checkFileFormats(path);
    var self = this;
    var errorTrace = new Error().stack;
    var ac = p5.prototype.getAudioContext();
    var request = new XMLHttpRequest();
    request.open('GET', path, true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
      if (request.status == 200) {
        // on success loading file:
        ac.decodeAudioData(request.response, function (buff) {
          var buffer = {};
          var chunks = path.split('/');
          buffer.name = chunks[chunks.length - 1];
          buffer.audioBuffer = buff;
          self.impulses.push(buffer);
          self.convolverNode.buffer = buffer.audioBuffer;
          if (callback) {
            callback(buffer);
          }
        }, // error decoding buffer. "e" is undefined in Chrome 11/22/2015
        function (e) {
          var err = new CustomError('decodeAudioData', errorTrace, self.url);
          var msg = 'AudioContext error at decodeAudioData for ' + self.url;
          if (errorCallback) {
            err.msg = msg;
            errorCallback(err);
          } else {
            console.error(msg + '\n The error stack trace includes: \n' + err.stack);
          }
        });
      } else {
        var err = new CustomError('loadConvolver', errorTrace, self.url);
        var msg = 'Unable to load ' + self.url + '. The request status was: ' + request.status + ' (' + request.statusText + ')';
        if (errorCallback) {
          err.message = msg;
          errorCallback(err);
        } else {
          console.error(msg + '\n The error stack trace includes: \n' + err.stack);
        }
      }
    };
    // if there is another error, aside from 404...
    request.onerror = function (e) {
      var err = new CustomError('loadConvolver', errorTrace, self.url);
      var msg = 'There was no response from the server at ' + self.url + '. Check the url and internet connectivity.';
      if (errorCallback) {
        err.message = msg;
        errorCallback(err);
      } else {
        console.error(msg + '\n The error stack trace includes: \n' + err.stack);
      }
    };
    request.send();
  };
  p5.Convolver.prototype.set = null;
  /**
   *  Connect a source to the reverb, and assign reverb parameters.
   *  
   *  @method  process
   *  @param  {Object} src     p5.sound / Web Audio object with a sound
   *                           output.
   *  @example
   *  <div><code>
   *  var cVerb, sound;
   *  function preload() {
   *    soundFormats('ogg', 'mp3');
   *    
   *    cVerb = createConvolver('assets/concrete-tunnel.mp3');
   *
   *    sound = loadSound('assets/beat.mp3');
   *  }
   *  
   *  function setup() {
   *    // disconnect from master output...
   *    sound.disconnect();
   *    
   *    // ...and process with (i.e. connect to) cVerb
   *    // so that we only hear the convolution
   *    cVerb.process(sound);
   *    
   *    sound.play();
   *  }
   *  </code></div>
   */
  p5.Convolver.prototype.process = function (src) {
    src.connect(this.input);
  };
  /**
   *  If you load multiple impulse files using the .addImpulse method,
   *  they will be stored as Objects in this Array. Toggle between them
   *  with the <code>toggleImpulse(id)</code> method.
   *  
   *  @property impulses
   *  @type {Array} Array of Web Audio Buffers
   */
  p5.Convolver.prototype.impulses = [];
  /**
   *  Load and assign a new Impulse Response to the p5.Convolver.
   *  The impulse is added to the <code>.impulses</code> array. Previous
   *  impulses can be accessed with the <code>.toggleImpulse(id)</code>
   *  method.
   *  
   *  @method  addImpulse
   *  @param  {String}   path     path to a sound file
   *  @param  {Function} callback function (optional)
   *  @param  {Function} errorCallback function (optional)
   */
  p5.Convolver.prototype.addImpulse = function (path, callback, errorCallback) {
    // if loading locally without a server
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }
    this._loadBuffer(path, callback, errorCallback);
  };
  /**
   *  Similar to .addImpulse, except that the <code>.impulses</code>
   *  Array is reset to save memory. A new <code>.impulses</code>
   *  array is created with this impulse as the only item. 
   *
   *  @method  resetImpulse
   *  @param  {String}   path     path to a sound file
   *  @param  {Function} callback function (optional)
   *  @param  {Function} errorCallback function (optional)
   */
  p5.Convolver.prototype.resetImpulse = function (path, callback, errorCallback) {
    // if loading locally without a server
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
      alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }
    this.impulses = [];
    this._loadBuffer(path, callback, errorCallback);
  };
  /**
   *  If you have used <code>.addImpulse()</code> to add multiple impulses
   *  to a p5.Convolver, then you can use this method to toggle between
   *  the items in the <code>.impulses</code> Array. Accepts a parameter
   *  to identify which impulse you wish to use, identified either by its
   *  original filename (String) or by its position in the <code>.impulses
   *  </code> Array (Number).<br/>
   *  You can access the objects in the .impulses Array directly. Each
   *  Object has two attributes: an <code>.audioBuffer</code> (type:
   *  Web Audio <a href="
   *  http://webaudio.github.io/web-audio-api/#the-audiobuffer-interface">
   *  AudioBuffer)</a> and a <code>.name</code>, a String that corresponds
   *  with the original filename. 
   *  
   *  @method toggleImpulse
   *  @param {String|Number} id Identify the impulse by its original filename
   *                            (String), or by its position in the
   *                            <code>.impulses</code> Array (Number).
   */
  p5.Convolver.prototype.toggleImpulse = function (id) {
    if (typeof id === 'number' && id < this.impulses.length) {
      this.convolverNode.buffer = this.impulses[id].audioBuffer;
    }
    if (typeof id === 'string') {
      for (var i = 0; i < this.impulses.length; i++) {
        if (this.impulses[i].name === id) {
          this.convolverNode.buffer = this.impulses[i].audioBuffer;
          break;
        }
      }
    }
  };
  p5.Convolver.prototype.dispose = function () {
    // remove all the Impulse Response buffers
    for (var i in this.impulses) {
      this.impulses[i] = null;
    }
    this.convolverNode.disconnect();
    this.concolverNode = null;
    if (typeof this.output !== 'undefined') {
      this.output.disconnect();
      this.output = null;
    }
    if (typeof this.panner !== 'undefined') {
      this.panner.disconnect();
      this.panner = null;
    }
  };
}(master, errorHandler, sndcore);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_TimelineState;
Tone_core_TimelineState = function (Tone) {
  'use strict';
  Tone.TimelineState = function (initial) {
    Tone.Timeline.call(this);
    this._initial = initial;
  };
  Tone.extend(Tone.TimelineState, Tone.Timeline);
  Tone.TimelineState.prototype.getStateAtTime = function (time) {
    var event = this.getEvent(time);
    if (event !== null) {
      return event.state;
    } else {
      return this._initial;
    }
  };
  Tone.TimelineState.prototype.setStateAtTime = function (state, time) {
    this.addEvent({
      'state': state,
      'time': this.toSeconds(time)
    });
  };
  return Tone.TimelineState;
}(Tone_core_Tone, Tone_core_Timeline);
/** Tone.js module by Yotam Mann, MIT License 2016  http://opensource.org/licenses/MIT **/
var Tone_core_Clock;
Tone_core_Clock = function (Tone) {
  'use strict';
  Tone.Clock = function () {
    var options = this.optionsObject(arguments, [
      'callback',
      'frequency'
    ], Tone.Clock.defaults);
    this.callback = options.callback;
    this._lookAhead = 'auto';
    this._computedLookAhead = 1 / 60;
    this._threshold = 0.5;
    this._nextTick = -1;
    this._lastUpdate = 0;
    this._loopID = -1;
    this.frequency = new Tone.TimelineSignal(options.frequency, Tone.Type.Frequency);
    this.ticks = 0;
    this._state = new Tone.TimelineState(Tone.State.Stopped);
    this._boundLoop = this._loop.bind(this);
    this._readOnly('frequency');
    this._loop();
  };
  Tone.extend(Tone.Clock);
  Tone.Clock.defaults = {
    'callback': Tone.noOp,
    'frequency': 1,
    'lookAhead': 'auto'
  };
  Object.defineProperty(Tone.Clock.prototype, 'state', {
    get: function () {
      return this._state.getStateAtTime(this.now());
    }
  });
  Object.defineProperty(Tone.Clock.prototype, 'lookAhead', {
    get: function () {
      return this._lookAhead;
    },
    set: function (val) {
      if (val === 'auto') {
        this._lookAhead = 'auto';
      } else {
        this._lookAhead = this.toSeconds(val);
      }
    }
  });
  Tone.Clock.prototype.start = function (time, offset) {
    time = this.toSeconds(time);
    if (this._state.getStateAtTime(time) !== Tone.State.Started) {
      this._state.addEvent({
        'state': Tone.State.Started,
        'time': time,
        'offset': offset
      });
    }
    return this;
  };
  Tone.Clock.prototype.stop = function (time) {
    time = this.toSeconds(time);
    if (this._state.getStateAtTime(time) !== Tone.State.Stopped) {
      this._state.setStateAtTime(Tone.State.Stopped, time);
    }
    return this;
  };
  Tone.Clock.prototype.pause = function (time) {
    time = this.toSeconds(time);
    if (this._state.getStateAtTime(time) === Tone.State.Started) {
      this._state.setStateAtTime(Tone.State.Paused, time);
    }
    return this;
  };
  Tone.Clock.prototype._loop = function (time) {
    this._loopID = requestAnimationFrame(this._boundLoop);
    if (this._lookAhead === 'auto') {
      if (!this.isUndef(time)) {
        var diff = (time - this._lastUpdate) / 1000;
        this._lastUpdate = time;
        if (diff < this._threshold) {
          this._computedLookAhead = (9 * this._computedLookAhead + diff) / 10;
        }
      }
    } else {
      this._computedLookAhead = this._lookAhead;
    }
    var now = this.now();
    var lookAhead = this._computedLookAhead * 2;
    var event = this._state.getEvent(now + lookAhead);
    var state = Tone.State.Stopped;
    if (event) {
      state = event.state;
      if (this._nextTick === -1 && state === Tone.State.Started) {
        this._nextTick = event.time;
        if (!this.isUndef(event.offset)) {
          this.ticks = event.offset;
        }
      }
    }
    if (state === Tone.State.Started) {
      while (now + lookAhead > this._nextTick) {
        if (now > this._nextTick + this._threshold) {
          this._nextTick = now;
        }
        var tickTime = this._nextTick;
        this._nextTick += 1 / this.frequency.getValueAtTime(this._nextTick);
        this.callback(tickTime);
        this.ticks++;
      }
    } else if (state === Tone.State.Stopped) {
      this._nextTick = -1;
      this.ticks = 0;
    }
  };
  Tone.Clock.prototype.getStateAtTime = function (time) {
    return this._state.getStateAtTime(time);
  };
  Tone.Clock.prototype.dispose = function () {
    cancelAnimationFrame(this._loopID);
    Tone.TimelineState.prototype.dispose.call(this);
    this._writable('frequency');
    this.frequency.dispose();
    this.frequency = null;
    this._boundLoop = Tone.noOp;
    this._nextTick = Infinity;
    this.callback = null;
    this._state.dispose();
    this._state = null;
  };
  return Tone.Clock;
}(Tone_core_Tone, Tone_signal_TimelineSignal);
var metro;
metro = function () {
  'use strict';
  var p5sound = master;
  // requires the Tone.js library's Clock (MIT license, Yotam Mann)
  // https://github.com/TONEnoTONE/Tone.js/
  var Clock = Tone_core_Clock;
  var ac = p5sound.audiocontext;
  // var upTick = false;
  p5.Metro = function () {
    this.clock = new Clock({ 'callback': this.ontick.bind(this) });
    this.syncedParts = [];
    this.bpm = 120;
    // gets overridden by p5.Part
    this._init();
    this.tickCallback = function () {
    };
  };
  var prevTick = 0;
  var tatumTime = 0;
  p5.Metro.prototype.ontick = function (tickTime) {
    var elapsedTime = tickTime - prevTick;
    var secondsFromNow = tickTime - p5sound.audiocontext.currentTime;
    if (elapsedTime - tatumTime <= -0.02) {
      return;
    } else {
      prevTick = tickTime;
      // for all of the active things on the metro:
      for (var i in this.syncedParts) {
        var thisPart = this.syncedParts[i];
        if (!thisPart.isPlaying)
          return;
        thisPart.incrementStep(secondsFromNow);
        // each synced source keeps track of its own beat number
        for (var j in thisPart.phrases) {
          var thisPhrase = thisPart.phrases[j];
          var phraseArray = thisPhrase.sequence;
          var bNum = this.metroTicks % phraseArray.length;
          if (phraseArray[bNum] !== 0 && (this.metroTicks < phraseArray.length || !thisPhrase.looping)) {
            thisPhrase.callback(secondsFromNow, phraseArray[bNum]);
          }
        }
      }
      this.metroTicks += 1;
      this.tickCallback(secondsFromNow);
    }
  };
  p5.Metro.prototype.setBPM = function (bpm, rampTime) {
    var beatTime = 60 / (bpm * this.tatums);
    var now = p5sound.audiocontext.currentTime;
    tatumTime = beatTime;
    var rampTime = rampTime || 0;
    this.clock.frequency.setValueAtTime(this.clock.frequency.value, now);
    this.clock.frequency.linearRampToValueAtTime(bpm, now + rampTime);
    this.bpm = bpm;
  };
  p5.Metro.prototype.getBPM = function (tempo) {
    return this.clock.getRate() / this.tatums * 60;
  };
  p5.Metro.prototype._init = function () {
    this.metroTicks = 0;
  };
  // clear existing synced parts, add only this one
  p5.Metro.prototype.resetSync = function (part) {
    this.syncedParts = [part];
  };
  // push a new synced part to the array
  p5.Metro.prototype.pushSync = function (part) {
    this.syncedParts.push(part);
  };
  p5.Metro.prototype.start = function (timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    this.clock.start(now + t);
    this.setBPM(this.bpm);
  };
  p5.Metro.prototype.stop = function (timeFromNow) {
    var t = timeFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    if (this.clock._oscillator) {
      this.clock.stop(now + t);
    }
  };
  p5.Metro.prototype.beatLength = function (tatums) {
    this.tatums = 1 / tatums / 4;
  };
}(master, Tone_core_Clock);
var looper;
looper = function () {
  'use strict';
  var p5sound = master;
  var bpm = 120;
  /**
   *  Set the global tempo, in beats per minute, for all
   *  p5.Parts. This method will impact all active p5.Parts.
   *
   *  @param {Number} BPM      Beats Per Minute
   *  @param {Number} rampTime Seconds from now
   */
  p5.prototype.setBPM = function (BPM, rampTime) {
    bpm = BPM;
    for (var i in p5sound.parts) {
      p5sound.parts[i].setBPM(bpm, rampTime);
    }
  };
  /**
   *  <p>A phrase is a pattern of musical events over time, i.e.
   *  a series of notes and rests.</p>
   *
   *  <p>Phrases must be added to a p5.Part for playback, and
   *  each part can play multiple phrases at the same time.
   *  For example, one Phrase might be a kick drum, another
   *  could be a snare, and another could be the bassline.</p>
   *
   *  <p>The first parameter is a name so that the phrase can be
   *  modified or deleted later. The callback is a a function that
   *  this phrase will call at every step—for example it might be
   *  called <code>playNote(value){}</code>. The array determines
   *  which value is passed into the callback at each step of the
   *  phrase. It can be numbers, an object with multiple numbers,
   *  or a zero (0) indicates a rest so the callback won't be called).</p>
   *
   *  @class p5.Phrase
   *  @constructor
   *  @param {String}   name     Name so that you can access the Phrase.
   *  @param {Function} callback The name of a function that this phrase
   *                             will call. Typically it will play a sound,
   *                             and accept two parameters: a time at which
   *                             to play the sound (in seconds from now),
   *                             and a value from the sequence array. The
   *                             time should be passed into the play() or
   *                             start() method to ensure precision.
   *  @param {Array}   sequence    Array of values to pass into the callback
   *                            at each step of the phrase.
   *  @example
   *  <div><code>
   *  var mySound, myPhrase, myPart;
   *  var pattern = [1,0,0,2,0,2,0,0];
   *  var msg = 'click to play';
   *
   *  function preload() {
   *    mySound = loadSound('assets/beatbox.mp3');
   *  }
   *
   *  function setup() {
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *    masterVolume(0.1);
   *
   *    myPhrase = new p5.Phrase('bbox', makeSound, pattern);
   *    myPart = new p5.Part();
   *    myPart.addPhrase(myPhrase);
   *    myPart.setBPM(60);
   *  }
   *
   *  function draw() {
   *    background(0);
   *    text(msg, width/2, height/2);
   *  }
   *
   *  function makeSound(time, playbackRate) {
   *    mySound.rate(playbackRate);
   *    mySound.play(time);
   *  }
   *
   *  function mouseClicked() {
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      myPart.start();
   *      msg = 'playing pattern';
   *    }
   *  }
   *
   *  </code></div>
   */
  p5.Phrase = function (name, callback, sequence) {
    this.phraseStep = 0;
    this.name = name;
    this.callback = callback;
    /**
     * Array of values to pass into the callback
     * at each step of the phrase. Depending on the callback
     * function's requirements, these values may be numbers,
     * strings, or an object with multiple parameters.
     * Zero (0) indicates a rest.
     *
     * @property sequence
     * @type {Array}
     */
    this.sequence = sequence;
  };
  /**
   *  <p>A p5.Part plays back one or more p5.Phrases. Instantiate a part
   *  with steps and tatums. By default, each step represents 1/16th note.</p>
   *
   *  <p>See p5.Phrase for more about musical timing.</p>
   *
   *  @class p5.Part
   *  @constructor
   *  @param {Number} [steps]   Steps in the part
   *  @param {Number} [tatums] Divisions of a beat (default is 1/16, a quarter note)
   *  @example
   *  <div><code>
   *  var box, drum, myPart;
   *  var boxPat = [1,0,0,2,0,2,0,0];
   *  var drumPat = [0,1,1,0,2,0,1,0];
   *  var msg = 'click to play';
   *
   *  function preload() {
   *    box = loadSound('assets/beatbox.mp3');
   *    drum = loadSound('assets/drum.mp3');
   *  }
   *
   *  function setup() {
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *    masterVolume(0.1);
   *
   *    var boxPhrase = new p5.Phrase('box', playBox, boxPat);
   *    var drumPhrase = new p5.Phrase('drum', playDrum, drumPat);
   *    myPart = new p5.Part();
   *    myPart.addPhrase(boxPhrase);
   *    myPart.addPhrase(drumPhrase);
   *    myPart.setBPM(60);
   *    masterVolume(0.1);
   *  }
   *
   *  function draw() {
   *    background(0);
   *    text(msg, width/2, height/2);
   *  }
   *
   *  function playBox(time, playbackRate) {
   *    box.rate(playbackRate);
   *    box.play(time);
   *  }
   *
   *  function playDrum(time, playbackRate) {
   *    drum.rate(playbackRate);
   *    drum.play(time);
   *  }
   *
   *  function mouseClicked() {
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      myPart.start();
   *      msg = 'playing part';
   *    }
   *  }
   *  </code></div>
   */
  p5.Part = function (steps, bLength) {
    this.length = steps || 0;
    // how many beats
    this.partStep = 0;
    this.phrases = [];
    this.isPlaying = false;
    this.noLoop();
    this.tatums = bLength || 0.0625;
    // defaults to quarter note
    this.metro = new p5.Metro();
    this.metro._init();
    this.metro.beatLength(this.tatums);
    this.metro.setBPM(bpm);
    p5sound.parts.push(this);
    this.callback = function () {
    };
  };
  /**
   *  Set the tempo of this part, in Beats Per Minute.
   *
   *  @method  setBPM
   *  @param {Number} BPM      Beats Per Minute
   *  @param {Number} [rampTime] Seconds from now
   */
  p5.Part.prototype.setBPM = function (tempo, rampTime) {
    this.metro.setBPM(tempo, rampTime);
  };
  /**
   *  Returns the Beats Per Minute of this currently part.
   *
   *  @method getBPM
   *  @return {Number}
   */
  p5.Part.prototype.getBPM = function () {
    return this.metro.getBPM();
  };
  /**
   *  Start playback of this part. It will play
   *  through all of its phrases at a speed
   *  determined by setBPM.
   *
   *  @method  start
   *  @param  {Number} [time] seconds from now
   */
  p5.Part.prototype.start = function (time) {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.metro.resetSync(this);
      var t = time || 0;
      this.metro.start(t);
    }
  };
  /**
   *  Loop playback of this part. It will begin
   *  looping through all of its phrases at a speed
   *  determined by setBPM.
   *
   *  @method  loop
   *  @param  {Number} [time] seconds from now
   */
  p5.Part.prototype.loop = function (time) {
    this.looping = true;
    // rest onended function
    this.onended = function () {
      this.partStep = 0;
    };
    var t = time || 0;
    this.start(t);
  };
  /**
   *  Tell the part to stop looping.
   *
   *  @method  noLoop
   */
  p5.Part.prototype.noLoop = function () {
    this.looping = false;
    // rest onended function
    this.onended = function () {
      this.stop();
    };
  };
  /**
   *  Stop the part and cue it to step 0.
   *
   *  @method  stop
   *  @param  {Number} [time] seconds from now
   */
  p5.Part.prototype.stop = function (time) {
    this.partStep = 0;
    this.pause(time);
  };
  /**
   *  Pause the part. Playback will resume
   *  from the current step.
   *
   *  @method  pause
   *  @param  {Number} time seconds from now
   */
  p5.Part.prototype.pause = function (time) {
    this.isPlaying = false;
    var t = time || 0;
    this.metro.stop(t);
  };
  /**
   *  Add a p5.Phrase to this Part.
   *
   *  @method  addPhrase
   *  @param {p5.Phrase}   phrase   reference to a p5.Phrase
   */
  p5.Part.prototype.addPhrase = function (name, callback, array) {
    var p;
    if (arguments.length === 3) {
      p = new p5.Phrase(name, callback, array);
    } else if (arguments[0] instanceof p5.Phrase) {
      p = arguments[0];
    } else {
      throw 'invalid input. addPhrase accepts name, callback, array or a p5.Phrase';
    }
    this.phrases.push(p);
    // reset the length if phrase is longer than part's existing length
    if (p.sequence.length > this.length) {
      this.length = p.sequence.length;
    }
  };
  /**
   *  Remove a phrase from this part, based on the name it was
   *  given when it was created.
   *
   *  @method  removePhrase
   *  @param  {String} phraseName
   */
  p5.Part.prototype.removePhrase = function (name) {
    for (var i in this.phrases) {
      if (this.phrases[i].name === name) {
        this.phrases.splice(i, 1);
      }
    }
  };
  /**
   *  Get a phrase from this part, based on the name it was
   *  given when it was created. Now you can modify its array.
   *
   *  @method  getPhrase
   *  @param  {String} phraseName
   */
  p5.Part.prototype.getPhrase = function (name) {
    for (var i in this.phrases) {
      if (this.phrases[i].name === name) {
        return this.phrases[i];
      }
    }
  };
  /**
   *  Get a phrase from this part, based on the name it was
   *  given when it was created. Now you can modify its array.
   *
   *  @method  replaceSequence
   *  @param  {String} phraseName
   *  @param  {Array} sequence  Array of values to pass into the callback
   *                            at each step of the phrase.
   */
  p5.Part.prototype.replaceSequence = function (name, array) {
    for (var i in this.phrases) {
      if (this.phrases[i].name === name) {
        this.phrases[i].sequence = array;
      }
    }
  };
  p5.Part.prototype.incrementStep = function (time) {
    if (this.partStep < this.length - 1) {
      this.callback(time);
      this.partStep += 1;
    } else {
      if (!this.looping && this.partStep == this.length - 1) {
        console.log('done');
        // this.callback(time);
        this.onended();
      }
    }
  };
  /**
   *  Fire a callback function at every step.
   *
   *  @method onStep
   *  @param  {Function} callback The name of the callback
   *                              you want to fire
   *                              on every beat/tatum.
   */
  p5.Part.prototype.onStep = function (callback) {
    this.callback = callback;
  };
  // ===============
  // p5.Score
  // ===============
  /**
   *  A Score consists of a series of Parts. The parts will
   *  be played back in order. For example, you could have an
   *  A part, a B part, and a C part, and play them back in this order
   *  <code>new p5.Score(a, a, b, a, c)</code>
   *
   *  @class p5.Score
   *  @constructor
   *  @param {p5.Part} part(s) One or multiple parts, to be played in sequence.
   *  @return {p5.Score}
   */
  p5.Score = function () {
    // for all of the arguments
    this.parts = [];
    this.currentPart = 0;
    var thisScore = this;
    for (var i in arguments) {
      this.parts[i] = arguments[i];
      this.parts[i].nextPart = this.parts[i + 1];
      this.parts[i].onended = function () {
        thisScore.resetPart(i);
        playNextPart(thisScore);
      };
    }
    this.looping = false;
  };
  p5.Score.prototype.onended = function () {
    if (this.looping) {
      // this.resetParts();
      this.parts[0].start();
    } else {
      this.parts[this.parts.length - 1].onended = function () {
        this.stop();
        this.resetParts();
      };
    }
    this.currentPart = 0;
  };
  /**
   *  Start playback of the score.
   *
   *  @method  start
   */
  p5.Score.prototype.start = function () {
    this.parts[this.currentPart].start();
    this.scoreStep = 0;
  };
  /**
   *  Stop playback of the score.
   *
   *  @method  stop
   */
  p5.Score.prototype.stop = function () {
    this.parts[this.currentPart].stop();
    this.currentPart = 0;
    this.scoreStep = 0;
  };
  /**
   *  Pause playback of the score.
   *
   *  @method  pause
   */
  p5.Score.prototype.pause = function () {
    this.parts[this.currentPart].stop();
  };
  /**
   *  Loop playback of the score.
   *
   *  @method  loop
   */
  p5.Score.prototype.loop = function () {
    this.looping = true;
    this.start();
  };
  /**
   *  Stop looping playback of the score. If it
   *  is currently playing, this will go into effect
   *  after the current round of playback completes.
   *
   *  @method  noLoop
   */
  p5.Score.prototype.noLoop = function () {
    this.looping = false;
  };
  p5.Score.prototype.resetParts = function () {
    for (var i in this.parts) {
      this.resetPart(i);
    }
  };
  p5.Score.prototype.resetPart = function (i) {
    this.parts[i].stop();
    this.parts[i].partStep = 0;
    for (var p in this.parts[i].phrases) {
      this.parts[i].phrases[p].phraseStep = 0;
    }
  };
  /**
   *  Set the tempo for all parts in the score
   *
   *  @param {Number} BPM      Beats Per Minute
   *  @param {Number} rampTime Seconds from now
   */
  p5.Score.prototype.setBPM = function (bpm, rampTime) {
    for (var i in this.parts) {
      this.parts[i].setBPM(bpm, rampTime);
    }
  };
  function playNextPart(aScore) {
    aScore.currentPart++;
    if (aScore.currentPart >= aScore.parts.length) {
      aScore.scoreStep = 0;
      aScore.onended();
    } else {
      aScore.scoreStep = 0;
      aScore.parts[aScore.currentPart - 1].stop();
      aScore.parts[aScore.currentPart].start();
    }
  }
}(master);
var soundRecorder;
soundRecorder = function () {
  'use strict';
  var p5sound = master;
  var ac = p5sound.audiocontext;
  /**
   *  <p>Record sounds for playback and/or to save as a .wav file.
   *  The p5.SoundRecorder records all sound output from your sketch,
   *  or can be assigned a specific source with setInput().</p>
   *  <p>The record() method accepts a p5.SoundFile as a parameter.
   *  When playback is stopped (either after the given amount of time,
   *  or with the stop() method), the p5.SoundRecorder will send its
   *  recording to that p5.SoundFile for playback.</p>
   *  
   *  @class p5.SoundRecorder
   *  @constructor
   *  @example
   *  <div><code>
   *  var mic, recorder, soundFile;
   *  var state = 0;
   *  
   *  function setup() {
   *    background(200);
   *    // create an audio in
   *    mic = new p5.AudioIn();
   *    
   *    // prompts user to enable their browser mic
   *    mic.start();
   *    
   *    // create a sound recorder
   *    recorder = new p5.SoundRecorder();
   *    
   *    // connect the mic to the recorder
   *    recorder.setInput(mic);
   *    
   *    // this sound file will be used to
   *    // playback & save the recording
   *    soundFile = new p5.SoundFile();
   *
   *    text('keyPress to record', 20, 20);
   *  }
   *
   *  function keyPressed() {
   *    // make sure user enabled the mic
   *    if (state === 0 && mic.enabled) {
   *    
   *      // record to our p5.SoundFile
   *      recorder.record(soundFile);
   *      
   *      background(255,0,0);
   *      text('Recording!', 20, 20);
   *      state++;
   *    }
   *    else if (state === 1) {
   *      background(0,255,0);
   *
   *      // stop recorder and
   *      // send result to soundFile
   *      recorder.stop(); 
   *      
   *      text('Stopped', 20, 20);
   *      state++;
   *    }
   *    
   *    else if (state === 2) {
   *      soundFile.play(); // play the result!
   *      save(soundFile, 'mySound.wav');
   *      state++;
   *    }
   *  }
   *  </div></code>
   */
  p5.SoundRecorder = function () {
    this.input = ac.createGain();
    this.output = ac.createGain();
    this.recording = false;
    this.bufferSize = 1024;
    this._channels = 2;
    // stereo (default)
    this._clear();
    // initialize variables
    this._jsNode = ac.createScriptProcessor(this.bufferSize, this._channels, 2);
    this._jsNode.onaudioprocess = this._audioprocess.bind(this);
    /** 
     *  callback invoked when the recording is over
     *  @private
     *  @type {function(Float32Array)}
     */
    this._callback = function () {
    };
    // connections
    this._jsNode.connect(p5.soundOut._silentNode);
    this.setInput();
    // add this p5.SoundFile to the soundArray
    p5sound.soundArray.push(this);
  };
  /**
   *  Connect a specific device to the p5.SoundRecorder.
   *  If no parameter is given, p5.SoundRecorer will record
   *  all audible p5.sound from your sketch.
   *  
   *  @method  setInput
   *  @param {Object} [unit] p5.sound object or a web audio unit
   *                         that outputs sound
   */
  p5.SoundRecorder.prototype.setInput = function (unit) {
    this.input.disconnect();
    this.input = null;
    this.input = ac.createGain();
    this.input.connect(this._jsNode);
    this.input.connect(this.output);
    if (unit) {
      unit.connect(this.input);
    } else {
      p5.soundOut.output.connect(this.input);
    }
  };
  /**
   *  Start recording. To access the recording, provide
   *  a p5.SoundFile as the first parameter. The p5.SoundRecorder
   *  will send its recording to that p5.SoundFile for playback once
   *  recording is complete. Optional parameters include duration
   *  (in seconds) of the recording, and a callback function that
   *  will be called once the complete recording has been
   *  transfered to the p5.SoundFile.
   *  
   *  @method  record
   *  @param  {p5.SoundFile}   soundFile    p5.SoundFile
   *  @param  {Number}   [duration] Time (in seconds)
   *  @param  {Function} [callback] The name of a function that will be
   *                                called once the recording completes
   */
  p5.SoundRecorder.prototype.record = function (sFile, duration, callback) {
    this.recording = true;
    if (duration) {
      this.sampleLimit = Math.round(duration * ac.sampleRate);
    }
    if (sFile && callback) {
      this._callback = function () {
        this.buffer = this._getBuffer();
        sFile.setBuffer(this.buffer);
        callback();
      };
    } else if (sFile) {
      this._callback = function () {
        this.buffer = this._getBuffer();
        sFile.setBuffer(this.buffer);
      };
    }
  };
  /**
   *  Stop the recording. Once the recording is stopped,
   *  the results will be sent to the p5.SoundFile that
   *  was given on .record(), and if a callback function
   *  was provided on record, that function will be called.
   *  
   *  @method  stop
   */
  p5.SoundRecorder.prototype.stop = function () {
    this.recording = false;
    this._callback();
    this._clear();
  };
  p5.SoundRecorder.prototype._clear = function () {
    this._leftBuffers = [];
    this._rightBuffers = [];
    this.recordedSamples = 0;
    this.sampleLimit = null;
  };
  /**
   *  internal method called on audio process
   *  
   *  @private
   *  @param   {AudioProcessorEvent} event 
   */
  p5.SoundRecorder.prototype._audioprocess = function (event) {
    if (this.recording === false) {
      return;
    } else if (this.recording === true) {
      // if we are past the duration, then stop... else:
      if (this.sampleLimit && this.recordedSamples >= this.sampleLimit) {
        this.stop();
      } else {
        // get channel data
        var left = event.inputBuffer.getChannelData(0);
        var right = event.inputBuffer.getChannelData(1);
        // clone the samples
        this._leftBuffers.push(new Float32Array(left));
        this._rightBuffers.push(new Float32Array(right));
        this.recordedSamples += this.bufferSize;
      }
    }
  };
  p5.SoundRecorder.prototype._getBuffer = function () {
    var buffers = [];
    buffers.push(this._mergeBuffers(this._leftBuffers));
    buffers.push(this._mergeBuffers(this._rightBuffers));
    return buffers;
  };
  p5.SoundRecorder.prototype._mergeBuffers = function (channelBuffer) {
    var result = new Float32Array(this.recordedSamples);
    var offset = 0;
    var lng = channelBuffer.length;
    for (var i = 0; i < lng; i++) {
      var buffer = channelBuffer[i];
      result.set(buffer, offset);
      offset += buffer.length;
    }
    return result;
  };
  p5.SoundRecorder.prototype.dispose = function () {
    this._clear();
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this._callback = function () {
    };
    if (this.input) {
      this.input.disconnect();
    }
    this.input = null;
    this._jsNode = null;
  };
  /**
   *  Save a p5.SoundFile as a .wav audio file.
   *  
   *  @method saveSound
   *  @param  {p5.SoundFile} soundFile p5.SoundFile that you wish to save
   *  @param  {String} name      name of the resulting .wav file.
   */
  p5.prototype.saveSound = function (soundFile, name) {
    var leftChannel, rightChannel;
    leftChannel = soundFile.buffer.getChannelData(0);
    // handle mono files
    if (soundFile.buffer.numberOfChannels > 1) {
      rightChannel = soundFile.buffer.getChannelData(1);
    } else {
      rightChannel = leftChannel;
    }
    var interleaved = interleave(leftChannel, rightChannel);
    // create the buffer and view to create the .WAV file
    var buffer = new ArrayBuffer(44 + interleaved.length * 2);
    var view = new DataView(buffer);
    // write the WAV container,
    // check spec at: https://ccrma.stanford.edu/courses/422/projects/WaveFormat/
    // RIFF chunk descriptor
    writeUTFBytes(view, 0, 'RIFF');
    view.setUint32(4, 36 + interleaved.length * 2, true);
    writeUTFBytes(view, 8, 'WAVE');
    // FMT sub-chunk
    writeUTFBytes(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    // stereo (2 channels)
    view.setUint16(22, 2, true);
    view.setUint32(24, 44100, true);
    view.setUint32(28, 44100 * 4, true);
    view.setUint16(32, 4, true);
    view.setUint16(34, 16, true);
    // data sub-chunk
    writeUTFBytes(view, 36, 'data');
    view.setUint32(40, interleaved.length * 2, true);
    // write the PCM samples
    var lng = interleaved.length;
    var index = 44;
    var volume = 1;
    for (var i = 0; i < lng; i++) {
      view.setInt16(index, interleaved[i] * (32767 * volume), true);
      index += 2;
    }
    p5.prototype.writeFile([view], name, 'wav');
  };
  // helper methods to save waves
  function interleave(leftChannel, rightChannel) {
    var length = leftChannel.length + rightChannel.length;
    var result = new Float32Array(length);
    var inputIndex = 0;
    for (var index = 0; index < length;) {
      result[index++] = leftChannel[inputIndex];
      result[index++] = rightChannel[inputIndex];
      inputIndex++;
    }
    return result;
  }
  function writeUTFBytes(view, offset, string) {
    var lng = string.length;
    for (var i = 0; i < lng; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }
}(sndcore, master);
var peakdetect;
peakdetect = function () {
  'use strict';
  var p5sound = master;
  /**
   *  <p>PeakDetect works in conjunction with p5.FFT to
   *  look for onsets in some or all of the frequency spectrum.
   *  </p>
   *  <p>
   *  To use p5.PeakDetect, call <code>update</code> in the draw loop
   *  and pass in a p5.FFT object.
   *  </p>
   *  <p>
   *  You can listen for a specific part of the frequency spectrum by
   *  setting the range between <code>freq1</code> and <code>freq2</code>.
   *  </p>
   *
   *  <p><code>threshold</code> is the threshold for detecting a peak,
   *  scaled between 0 and 1. It is logarithmic, so 0.1 is half as loud
   *  as 1.0.</p>
   *
   *  <p>
   *  The update method is meant to be run in the draw loop, and
   *  <b>frames</b> determines how many loops must pass before
   *  another peak can be detected.
   *  For example, if the frameRate() = 60, you could detect the beat of a
   *  120 beat-per-minute song with this equation:
   *  <code> framesPerPeak = 60 / (estimatedBPM / 60 );</code>
   *  </p>
   *
   *  <p>
   *  Based on example contribtued by @b2renger, and a simple beat detection
   *  explanation by <a
   *  href="http://www.airtightinteractive.com/2013/10/making-audio-reactive-visuals/"
   *  target="_blank">Felix Turner</a>.
   *  </p>
   *  
   *  @class  p5.PeakDetect
   *  @constructor
   *  @param {Number} [freq1]     lowFrequency - defaults to 20Hz
   *  @param {Number} [freq2]     highFrequency - defaults to 20000 Hz
   *  @param {Number} [threshold] Threshold for detecting a beat between 0 and 1
   *                            scaled logarithmically where 0.1 is 1/2 the loudness
   *                            of 1.0. Defaults to 0.35.
   *  @param {Number} [framesPerPeak]     Defaults to 20.
   *  @example
   *  <div><code>
   *  
   *  var cnv, soundFile, fft, peakDetect;
   *  var ellipseWidth = 10;
   *
   *  function setup() {
   *    background(0);
   *    noStroke();
   *    fill(255);
   *    textAlign(CENTER);
   *
   *    soundFile = loadSound('assets/beat.mp3');
   *
   *    // p5.PeakDetect requires a p5.FFT
   *    fft = new p5.FFT();
   *    peakDetect = new p5.PeakDetect();
   *
   *  }
   *
   *  function draw() {
   *    background(0);
   *    text('click to play/pause', width/2, height/2);
   *
   *    // peakDetect accepts an fft post-analysis
   *    fft.analyze();
   *    peakDetect.update(fft);
   *
   *    if ( peakDetect.isDetected ) {
   *      ellipseWidth = 50;
   *    } else {
   *      ellipseWidth *= 0.95;
   *    }
   *
   *    ellipse(width/2, height/2, ellipseWidth, ellipseWidth);
   *  }
   *
   *  // toggle play/stop when canvas is clicked
   *  function mouseClicked() {
   *    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   *      if (soundFile.isPlaying() ) {
   *        soundFile.stop();
   *      } else {
   *        soundFile.play();
   *      }
   *    }
   *  }
   *  </code></div>
   */
  p5.PeakDetect = function (freq1, freq2, threshold, _framesPerPeak) {
    var framesPerPeak;
    // framesPerPeak determines how often to look for a beat.
    // If a beat is provided, try to look for a beat based on bpm
    this.framesPerPeak = _framesPerPeak || 20;
    this.framesSinceLastPeak = 0;
    this.decayRate = 0.95;
    this.threshold = threshold || 0.35;
    this.cutoff = 0;
    // how much to increase the cutoff 
    // TO DO: document this / figure out how to make it accessible
    this.cutoffMult = 1.5;
    this.energy = 0;
    this.penergy = 0;
    // TO DO: document this property / figure out how to make it accessible
    this.currentValue = 0;
    /**
     *  isDetected is set to true when a peak is detected.
     *  
     *  @attribute isDetected
     *  @type {Boolean}
     *  @default  false
     */
    this.isDetected = false;
    this.f1 = freq1 || 40;
    this.f2 = freq2 || 20000;
    // function to call when a peak is detected
    this._onPeak = function () {
    };
  };
  /**
   *  The update method is run in the draw loop.
   *
   *  Accepts an FFT object. You must call .analyze()
   *  on the FFT object prior to updating the peakDetect
   *  because it relies on a completed FFT analysis.
   *
   *  @method  update
   *  @param  {p5.FFT} fftObject A p5.FFT object
   */
  p5.PeakDetect.prototype.update = function (fftObject) {
    var nrg = this.energy = fftObject.getEnergy(this.f1, this.f2) / 255;
    if (nrg > this.cutoff && nrg > this.threshold && nrg - this.penergy > 0) {
      // trigger callback
      this._onPeak();
      this.isDetected = true;
      // debounce
      this.cutoff = nrg * this.cutoffMult;
      this.framesSinceLastPeak = 0;
    } else {
      this.isDetected = false;
      if (this.framesSinceLastPeak <= this.framesPerPeak) {
        this.framesSinceLastPeak++;
      } else {
        this.cutoff *= this.decayRate;
        this.cutoff = Math.max(this.cutoff, this.threshold);
      }
    }
    this.currentValue = nrg;
    this.penergy = nrg;
  };
  /**
   *  onPeak accepts two arguments: a function to call when
   *  a peak is detected. The value of the peak,
   *  between 0.0 and 1.0, is passed to the callback.
   *   
   *  @method  onPeak
   *  @param  {Function} callback Name of a function that will
   *                              be called when a peak is
   *                              detected.
   *  @param  {Object}   [val]    Optional value to pass
   *                              into the function when
   *                              a peak is detected.
   *  @example
   *  <div><code>
   *  var cnv, soundFile, fft, peakDetect;
   *  var ellipseWidth = 0;
   *  
   *  function setup() {
   *    cnv = createCanvas(100,100);
   *    textAlign(CENTER);
   *  
   *    soundFile = loadSound('assets/beat.mp3');
   *    fft = new p5.FFT();
   *    peakDetect = new p5.PeakDetect();
   *  
   *    setupSound();
   *  
   *    // when a beat is detected, call triggerBeat()
   *    peakDetect.onPeak(triggerBeat);
   *  }
   *  
   *  function draw() {
   *    background(0);
   *    fill(255);
   *    text('click to play', width/2, height/2);
   *  
   *    fft.analyze();
   *    peakDetect.update(fft);
   *  
   *    ellipseWidth *= 0.95;
   *    ellipse(width/2, height/2, ellipseWidth, ellipseWidth);
   *  }
   *  
   *  // this function is called by peakDetect.onPeak
   *  function triggerBeat() {
   *    ellipseWidth = 50;
   *  }
   *  
   *  // mouseclick starts/stops sound
   *  function setupSound() {
   *    cnv.mouseClicked( function() {
   *      if (soundFile.isPlaying() ) {
   *        soundFile.stop();
   *      } else {
   *        soundFile.play();
   *      }
   *    });
   *  }
   *  </code></div>
   */
  p5.PeakDetect.prototype.onPeak = function (callback, val) {
    var self = this;
    self._onPeak = function () {
      callback(self.energy, val);
    };
  };
}(master);
var gain;
gain = function () {
  'use strict';
  var p5sound = master;
  /**
  *  A gain node is usefull to set the relative volume of sound.
  *  It's typically used to build mixers.   
  *
  *  @class p5.Gain
  *  @constructor
  *  @example
  *  <div><code>
  *
  * // load two soundfile and crossfade beetween them
  * var sound1,sound2;
  * var gain1, gain2, gain3;
  * 
  * function preload(){
  *   soundFormats('ogg', 'mp3');
  *   sound1 = loadSound('../_files/Damscray_-_Dancing_Tiger_01');
  *   sound2 = loadSound('../_files/beat.mp3');
  * }
  *
  * function setup() {
  *   createCanvas(400,200);
  *
  *   // create a 'master' gain to which we will connect both soundfiles
  *   gain3 = new p5.Gain();
  *   gain3.connect();
  *
  *   // setup first sound for playing
  *   sound1.rate(1);
  *   sound1.loop();
  *   sound1.disconnect(); // diconnect from p5 output
  *
  *   gain1 = new p5.Gain(); // setup a gain node
  *   gain1.setInput(sound1); // connect the first sound to its input
  *   gain1.connect(gain3); // connect its output to the 'master'
  *
  *   sound2.rate(1);
  *   sound2.disconnect();
  *   sound2.loop();
  *
  *   gain2 = new p5.Gain();
  *   gain2.setInput(sound2);
  *   gain2.connect(gain3);
  *
  * }
  *
  * function draw(){
  *   background(180);
  *  
  *   // calculate the horizontal distance beetween the mouse and the right of the screen
  *   var d = dist(mouseX,0,width,0);
  *
  *   // map the horizontal position of the mouse to values useable for volume control of sound1
  *   var vol1 = map(mouseX,0,width,0,1); 
  *   var vol2 = 1-vol1; // when sound1 is loud, sound2 is quiet and vice versa
  *
  *   gain1.amp(vol1,0.5,0);
  *   gain2.amp(vol2,0.5,0);
  *
  *   // map the vertical position of the mouse to values useable for 'master volume control'
  *   var vol3 = map(mouseY,0,height,0,1); 
  *   gain3.amp(vol3,0.5,0);
  * }
  *</code></div>
  *
  */
  p5.Gain = function () {
    this.ac = p5sound.audiocontext;
    this.input = this.ac.createGain();
    this.output = this.ac.createGain();
    // otherwise, Safari distorts
    this.input.gain.value = 0.5;
    this.input.connect(this.output);
    // add  to the soundArray
    p5sound.soundArray.push(this);
  };
  /**
   *  Connect a source to the gain node.
   *  
   *  @method  setInput
   *  @param  {Object} src     p5.sound / Web Audio object with a sound
   *                           output.
   */
  p5.Gain.prototype.setInput = function (src) {
    src.connect(this.input);
  };
  /**
   *  Send output to a p5.sound or web audio object
   *  
   *  @method  connect
   *  @param  {Object} unit
   */
  p5.Gain.prototype.connect = function (unit) {
    var u = unit || p5.soundOut.input;
    this.output.connect(u.input ? u.input : u);
  };
  /**
   *  Disconnect all output.
   *  
   *  @method disconnect
   */
  p5.Gain.prototype.disconnect = function () {
    this.output.disconnect();
  };
  /**
   *  Set the output level of the gain node.
   *  
   *  @method  amp
   *  @param  {Number} volume amplitude between 0 and 1.0
   *  @param  {Number} [rampTime] create a fade that lasts rampTime 
   *  @param  {Number} [timeFromNow] schedule this event to happen
   *                                seconds from now
   */
  p5.Gain.prototype.amp = function (vol, rampTime, tFromNow) {
    var rampTime = rampTime || 0;
    var tFromNow = tFromNow || 0;
    var now = p5sound.audiocontext.currentTime;
    var currentVol = this.output.gain.value;
    this.output.gain.cancelScheduledValues(now);
    this.output.gain.linearRampToValueAtTime(currentVol, now + tFromNow);
    this.output.gain.linearRampToValueAtTime(vol, now + tFromNow + rampTime);
  };
  p5.Gain.prototype.dispose = function () {
    // remove reference from soundArray
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.output.disconnect();
    this.input.disconnect();
    this.output = undefined;
    this.input = undefined;
  };
}(master, sndcore);
var distortion;
distortion = function () {
  'use strict';
  var p5sound = master;
  /*
   * Adapted from [Kevin Ennis on StackOverflow](http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion)
   */
  function makeDistortionCurve(amount) {
    var k = typeof amount === 'number' ? amount : 50;
    var n_samples = 44100;
    var curve = new Float32Array(n_samples);
    var deg = Math.PI / 180;
    var i = 0;
    var x;
    for (; i < n_samples; ++i) {
      x = i * 2 / n_samples - 1;
      curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }
  /**
   * A Distortion effect created with a Waveshaper Node,
   * with an approach adapted from
   * [Kevin Ennis](http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion)
   *
   * @class p5.Distortion
   * @constructor
   * @param {Number} [amount=0.25] Unbounded distortion amount.
   *                                Normal values range from 0-1.
   * @param {String} [oversample='none'] 'none', '2x', or '4x'.
   *
   * @return {Object}   Distortion object
   */
  p5.Distortion = function (amount, oversample) {
    if (typeof amount === 'undefined') {
      amount = 0.25;
    }
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }
    if (typeof oversample === 'undefined') {
      oversample = '2x';
    }
    if (typeof oversample !== 'string') {
      throw new Error('oversample must be a String');
    }
    var curveAmount = p5.prototype.map(amount, 0, 1, 0, 2000);
    this.ac = p5sound.audiocontext;
    this.input = this.ac.createGain();
    this.output = this.ac.createGain();
    /**
     *  The p5.Distortion is built with a
     *  <a href="http://www.w3.org/TR/webaudio/#WaveShaperNode">
     *  Web Audio WaveShaper Node</a>.
     *
     *  @property WaveShaperNode
     *  @type {Object}  AudioNode
     */
    this.waveShaperNode = this.ac.createWaveShaper();
    this.amount = curveAmount;
    this.waveShaperNode.curve = makeDistortionCurve(curveAmount);
    this.waveShaperNode.oversample = oversample;
    this.input.connect(this.waveShaperNode);
    this.waveShaperNode.connect(this.output);
    this.connect();
    // add to the soundArray
    p5sound.soundArray.push(this);
  };
  p5.Distortion.prototype.process = function (src, amount, oversample) {
    src.connect(this.input);
    this.set(amount, oversample);
  };
  /**
   * Set the amount and oversample of the waveshaper distortion.
   *
   * @method setType
   * @param {Number} [amount=0.25] Unbounded distortion amount.
   *                                Normal values range from 0-1.
   * @param {String} [oversample='none'] 'none', '2x', or '4x'.
   * @param {String}
   */
  p5.Distortion.prototype.set = function (amount, oversample) {
    if (amount) {
      var curveAmount = p5.prototype.map(amount, 0, 1, 0, 2000);
      this.amount = curveAmount;
      this.waveShaperNode.curve = makeDistortionCurve(curveAmount);
    }
    if (oversample) {
      this.waveShaperNode.oversample = oversample;
    }
  };
  /**
   *  Return the distortion amount, typically between 0-1.
   *  
   *  @method  getAmount
   *  @return {Number} Unbounded distortion amount.
   *                   Normal values range from 0-1.
   */
  p5.Distortion.prototype.getAmount = function () {
    return this.amount;
  };
  /**
   *  Return the oversampling.
   *  
   *  @return {String} Oversample can either be 'none', '2x', or '4x'.
   */
  p5.Distortion.prototype.getOversample = function () {
    return this.waveShaperNode.oversample;
  };
  /**
   *  Send output to a p5.sound or web audio object
   *
   *  @method connect
   *  @param  {Object} unit
   */
  p5.Distortion.prototype.connect = function (unit) {
    var u = unit || p5.soundOut.input;
    this.output.connect(u);
  };
  /**
   *  Disconnect all output.
   *
   *  @method disconnect
   */
  p5.Distortion.prototype.disconnect = function () {
    this.output.disconnect();
  };
  p5.Distortion.prototype.dispose = function () {
    var index = p5sound.soundArray.indexOf(this);
    p5sound.soundArray.splice(index, 1);
    this.input.disconnect();
    this.waveShaperNode.disconnect();
    this.input = null;
    this.waveShaperNode = null;
    if (typeof this.output !== 'undefined') {
      this.output.disconnect();
      this.output = null;
    }
  };
}(master);
var src_app;
src_app = function () {
  'use strict';
  var p5SOUND = sndcore;
  return p5SOUND;
}(sndcore, master, helpers, errorHandler, panner, soundfile, amplitude, fft, signal, oscillator, env, pulse, noise, audioin, filter, delay, reverb, metro, looper, soundRecorder, peakdetect, gain, distortion);
}));
var filterType;
var rects = [];
var numRects = 80;
var lives = 0;
var score = 0;
var rateChange;
var soundArray = [5];
var playSoundNumber = 0;
var randomX;

function preload() {
	drums = loadSound('../public/sounds/break.mp3');
	// drums2 = loadSound('../public/sounds/drums_2.mp3');

	noise0 = loadSound('../public/sounds/pad_flute_select.mp3');
	noise1 = loadSound('../public/sounds/pad_glow_chord.mp3');
	noise2 = loadSound('../public/sounds/pad_glow_welcome2.mp3');
	noise3 = loadSound('../public/sounds/pad_hi_note.mp3');
	noise4 = loadSound('../public/sounds/pad_up.mp3');
	noise5 = loadSound('../public/sounds/pad_space_select_01.mp3');
	noise6 = loadSound('../public/sounds/pad_space_fade_01.mp3');
	noise7 = loadSound('../public/sounds/pad_glow_welcome2.mp3');
	noise8 = loadSound('../public/sounds/pad_glow_power_off_01.mp3');
	noise9 = loadSound('../public/sounds/wavy_1.mp3');
	noise10 = loadSound('../public/sounds/wavy_2.mp3');
	noise11 = loadSound('../public/sounds/wavy_3.mp3');
	noise12 = loadSound('../public/sounds/Synth-SoggyFishstick.mp3');
	noise13 = loadSound('../public/sounds/Synth-TortoiseOne.mp3');
	noise14 = loadSound('../public/sounds/Synth-TransistoFunk.mp3');
	noise15 = loadSound('../public/sounds/Synth-Twinpeakish3.mp3');
	noise16 = loadSound('../public/sounds/Synth-Wompi.mp3');
	noise17 = loadSound('../public/sounds/Synth-Xeno.mp3');

}

function setup() { // **change** void setup() to function setup()
	// **change** size() to createCanvas()

	// if (!!$('#sketch-holder').length) {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch-holder');
	// }

	drums.loop();

	for (var i = 0; i < soundArray.length; i++) {
		soundArray[0] = noise0;
		soundArray[1] = noise1;
		soundArray[2] = noise2;
		soundArray[3] = noise3;
		soundArray[4] = noise4;
		soundArray[5] = noise5;
		soundArray[6] = noise6;
		soundArray[7] = noise7;
		soundArray[8] = noise8;
		soundArray[9] = noise9;
		soundArray[10] = noise10;
		soundArray[11] = noise11;
		soundArray[12] = noise12;
		soundArray[13] = noise13;
		soundArray[14] = noise14;
		soundArray[15] = noise15;
		soundArray[16] = noise16;
		soundArray[17] = noise17;
	}

	amplitude = new p5.Amplitude();

	for (i = 0; i < numRects; i++) {
		r = new rectObj(random(width), random(height), random(10, 100), random(10, 100)) // generate a rectObj
		rects.push(r); //add it to the array.
	}

	cir = new circleObj(50); // create a new circle object

}


function draw() {

	var level = amplitude.getLevel();
	var levelChange = map(level, 0, 0.5, 0, 300);

	var speed = map(mouseY, 0.1, height, 0.75, 1.5);
	// speed = constrain(speed, 1, 1.5);
	for (var i = 0; i < soundArray.length; i++) {
		soundArray[i].rate(speed);
	}

	background(levelChange);
	//   console.log(mySound.rate);

	// score = ceil(score + 0.01);

	for (i = 0; i < numRects; i++) {
		rects[i].disp();
		rects[i].collide(cir); //collide against the circle object
	}

	cir.disp(mouseX, mouseY); //pass the x,y pos in to the circle.

	textSize(25);
	text("Sound: " + playSoundNumber, 100, 100);
	text("Pitch: " + nfc(speed, 2), 100, 140);

	// textSize(100);
	// text(score,100,100);


	// textSize(25);
	// if (score < 200) {
	// 	text("Hit the blocks for fun", 100, 150);
	// }

	// if (score > 1000 && score < 1200) {
	// 	text("Well done! Keep going!", 100, 150);
	// }

	// if (score > 3000) {
	// 	text("Sorry, I haven't done an end yet. Might as well enter the site.", 100, 150);
	// }

	// if (lives <= 0) {
	// 	textSize(200);
	// 	// background(0);
	// 	text("GAME OVER",100,windowHeight/2);
	// 	noLoop();
	// 	}

}

function rectObj(x, y, w, h) {
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	this.color = color(random(102, 255), random(102, 255), random(102, 255))
	this.hit = false;
	this.isCollisioning = false;

	this.collide = function (obj) {

		this.hit = collideRectCircle(this.x, this.y, this.w, this.h, obj.x, obj.y, obj.dia); //collide the cir object into this rectangle object.

		if (this.hit && !this.isCollisioning) {
			this.color = color(0) //set this rectangle to be black if it gets hit
			lives++
			soundArray[playSoundNumber].play()
			playSoundNumber++
			this.isCollisioning = true
				// console.log(this.isCollisioning)
			if (playSoundNumber > 17) {
				playSoundNumber = 0;
			}
		}

	}

	var randomX = random(1, 5);

	this.disp = function () {
		noStroke();
		fill(this.color);
		this.x += randomX //move to the right!
		if (this.x > width) { //loop to the left!
			this.x = -this.w;
		}
		rect(this.x, this.y, this.w, this.h);

	}

}

function circleObj(dia) {
	this.dia = dia;
	this.color = color(random(255), random(255), random(255))
	this.x;
	this.y;

	this.disp = function (x, y) {
		this.x = x;
		this.y = y;
		noStroke();
		fill(this.color);
		ellipse(this.x, this.y, this.dia, this.dia);
	}

}







/**
 * Add Modernizr test for box sizing
 */
Modernizr.addTest("boxsizing", function () {
	return Modernizr.testAllProps("boxSizing") && (document.documentMode === undefined || document.documentMode > 7);
});

/**
 * Change the width of all elements to account for border-box
 */
$(function () {
	if (!($('html').hasClass('boxsizing'))) {
		$('*').each(function () {
			if ($(this).css('display') == 'block') {
				var f, a, n;
				f = $(this).outerWidth();
				a = $(this).width();
				n = a - (f - a);
				$(this).css('width', n);
			}
		});
	}
});

/**
 * Make images responsive using jQuery Picture
 */
$(function () {
	$('figure.responsive').picture({
		container: $('#content')
	});
});

// var $theCanvas = $("#defaultCanvas0");
if ($('#defaultCanvas0').width() < 200) {
	$('#defaultCanvas0').remove()
}
// });
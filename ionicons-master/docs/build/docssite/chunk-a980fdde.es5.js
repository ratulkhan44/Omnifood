/*! Built with http://stenciljs.com */
DocsSite.loadBundle("chunk-a980fdde.js",["exports"],function(e){var t=window.DocsSite.h,n="/",r="./",i=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function o(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e){return e&&e.sensitive?"":"i"}function s(e,t,c){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(s(e[i],t,n).source);return new RegExp("(?:"+r.join("|")+")",u(n))}(e,t,c):function(e,t,s){return function(e,t,i){for(var o=(i=i||{}).strict,s=!1!==i.end,c=a(i.delimiter||n),h=i.delimiters||r,f=[].concat(i.endsWith||[]).map(a).concat("$").join("|"),l="",p=!1,d=0;d<e.length;d++){var v=e[d];if("string"==typeof v)l+=a(v),p=d===e.length-1&&h.indexOf(v[v.length-1])>-1;else{var m=a(v.prefix),g=v.repeat?"(?:"+v.pattern+")(?:"+m+"(?:"+v.pattern+"))*":v.pattern;t&&t.push(v),l+=v.optional?v.partial?m+"("+g+")?":"(?:"+m+"("+g+"))?":m+"("+g+")"}}return s?(o||(l+="(?:"+c+")?"),l+="$"===f?"$":"(?="+f+")"):(o||(l+="(?:"+c+"(?="+f+"))?"),p||(l+="(?="+c+"|"+f+")")),new RegExp("^"+l,u(i))}(function(e,t){for(var u,s=[],c=0,h=0,f="",l=t&&t.delimiter||n,p=t&&t.delimiters||r,d=!1;null!==(u=i.exec(e));){var v=u[0],m=u[1],g=u.index;if(f+=e.slice(h,g),h=g+v.length,m)f+=m[1],d=!0;else{var y="",w=e[h],O=u[2],x=u[3],b=u[4],E=u[5];if(!d&&f.length){var A=f.length-1;p.indexOf(f[A])>-1&&(y=f[A],f=f.slice(0,A))}f&&(s.push(f),f="",d=!1);var j=y||l,R=x||b;s.push({name:O||c++,prefix:y,delimiter:j,optional:"?"===E||"*"===E,repeat:"+"===E||"*"===E,partial:""!==y&&void 0!==w&&w!==y,pattern:R?o(R):"[^"+a(j)+"]+?"})}}return(f||h<e.length)&&s.push(f+e.substr(h)),s}(e,s),t,s)}(e,t,c)}function c(e,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e)}function h(e){return"/"===e.charAt(0)}function f(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}function l(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(Array.isArray(e))return Array.isArray(t)&&e.length===t.length&&e.every(function(e,n){return l(e,t[n])});var n=typeof e;if(n!==typeof t)return!1;if("object"===n){var r=e.valueOf(),i=t.valueOf();if(r!==e||i!==t)return l(r,i);var a=Object.keys(e),o=Object.keys(t);return a.length===o.length&&a.every(function(n){return l(e[n],t[n])})}return!1}var p={},d=0;function v(e,n){return t("context-consumer",{subscribe:e,renderer:n})}var m=function(e,n){void 0===n&&(n=v);var r=new Map,i={historyType:"browser",location:null,titleSuffix:"",root:"/",history:null,routeViewsUpdated:function(){}};function a(e,t){Array.isArray(e)?e.slice().forEach(function(e){t[e]=i[e]}):t[e]=Object.assign({},i),t.forceUpdate()}function o(e){return function(t){r.has(t)||(r.set(t,e),a(e,t))}}function u(e,t){return o(t)(e),function(){r.delete(e)}}return{Provider:function(e){var t=e.children;return i=e.state,r.forEach(a),t},Consumer:function(e){return n(u,e.children[0])},wrapConsumer:function(e,n){var r=e.is;return function(e){var i=e.children,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n}(e,["children"]);return t(r,Object.assign({ref:o(n)},a),i)}},injectProps:function(e,t){var n=null,r=Object.keys(e.properties).find(function(t){return 1==e.properties[t].elementRef});if(null==r)throw new Error("Please ensure that your Component "+e.is+' has an attribtue with "@Element" decorator. This is required to be able to inject properties.');var i=e.prototype.componentWillLoad;e.prototype.componentWillLoad=function(){if(n=u(this[r],t),i)return i.bind(this)()};var a=e.prototype.componentDidUnload;e.prototype.componentDidUnload=function(){if(n(),a)return a.bind(this)()}}}}(),g=!("undefined"==typeof window||!window.document||!window.document.createElement);e.matchPath=function(e,t){void 0===t&&(t={}),"string"==typeof t&&(t={path:t});var n=t.path,r=void 0===n?"/":n,i=t.exact,a=void 0!==i&&i,o=t.strict,u=function(e,t){var n=""+t.end+t.strict,r=p[n]||(p[n]={}),i=JSON.stringify(e);if(r[i])return r[i];var a=[],o={re:s(e,a,t),keys:a};return d<1e4&&(r[i]=o,d+=1),o}(r,{end:a,strict:void 0!==o&&o}),c=u.keys,h=u.re.exec(e);if(!h)return null;var f=h[0],l=h.slice(1),v=e===f;return a&&!v?null:{path:r,url:"/"===r&&""===f?"/":f,isExact:v,params:c.reduce(function(e,t,n){return e[t.name]=l[n],e},{})}},e.matchesAreEqual=function(e,t){return null==e&&null==t||null!=t&&e&&t&&e.path===t.path&&e.url===t.url&&l(e.params,t.params)},e.ActiveRouter=m,e.storageAvailable=function(e){try{var t=window[e],n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}},e.createLocation=function(e,t,n,r){var i,a;"string"==typeof e?(i=function(e){var t=e||"/",n="",r="",i=t.indexOf("#");-1!==i&&(r=t.substr(i),t=t.substr(0,i));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(i=Object.assign({},e)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==t&&void 0===i.state&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(i.key=n),r?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],i=t&&t.split("/")||[],a=e&&h(e),o=t&&h(t),u=a||o;if(e&&h(e)?i=r:r.length&&(i.pop(),i=i.concat(r)),!i.length)return"/";if(i.length){var s=i[i.length-1];n="."===s||".."===s||""===s}else n=!1;for(var c=0,l=i.length;l>=0;l--){var p=i[l];"."===p?f(i,l):".."===p?(f(i,l),c++):c&&(f(i,l),c--)}if(!u)for(;c--;c)i.unshift("..");!u||""===i[0]||i[0]&&h(i[0])||i.unshift("");var d=i.join("/");return n&&"/"!==d.substr(-1)&&(d+="/"),d}(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i.query=(a=i.search)?(/^[?#]/.test(a)?a.slice(1):a).split("&").reduce(function(e,t){var n=t.split("="),r=n[1];return e[n[0]]=r?decodeURIComponent(r.replace(/\+/g," ")):"",e},{}):{},i},e.addLeadingSlash=function(e){return"/"===e.charAt(0)?e:"/"+e},e.stripTrailingSlash=function(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e},e.hasBasename=c,e.stripBasename=function(e,t){return c(e,t)?e.substr(t.length):e},e.createPath=function(e){var t=e.search,n=e.hash,r=e.pathname||"/";return t&&"?"!==t&&(r+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(r+="#"===n.charAt(0)?n:"#"+n),r},e.canUseDOM=g,e.addEventListener=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},e.removeEventListener=function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},e.getConfirmation=function(e,t){return t(window.confirm(e))},e.supportsHistory=function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history},e.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},e.isExtraneousPopstateEvent=function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")},e.locationsAreEqual=function(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&l(e.state,t.state)},e.stripLeadingSlash=function(e){return"/"===e.charAt(0)?e.substr(1):e},e.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},e.isModifiedEvent=function(e){return e.metaKey||e.altKey||e.ctrlKey||e.shiftKey}});
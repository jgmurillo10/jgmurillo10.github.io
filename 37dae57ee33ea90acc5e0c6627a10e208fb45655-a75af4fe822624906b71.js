(self.webpackChunkjgmurillo10=self.webpackChunkjgmurillo10||[]).push([[958],{86148:function(e,t,n){"use strict";n.d(t,{P:function(){return o},u:function(){return s}});var r=n(20342);const o=e=>{var t;let{data:n,location:o}=e;const{language:s}=(0,r.e)({doc:n.prismicProject,location:o}),a=n.allPrismicProject.edges[0].node.data;return{project:(null===(t=n.allPrismicProject.edges.find((e=>e.node.lang===s.current)))||void 0===t?void 0:t.node.data)||a}},s=e=>{var t;let{data:n,location:o}=e;const{language:s}=(0,r.e)({doc:n.prismicPost,location:o}),a=n.allPrismicPost.edges[0].node.data;return{post:(null===(t=n.allPrismicPost.edges.find((e=>e.node.lang===s.current)))||void 0===t?void 0:t.node.data)||a}}},25198:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(74316),o=n(67294),s=n(70365),a=n.n(s),c=n(77635),i=n.n(c),u=function(e){var t=e.status,n=e.message,r=e.className,s=e.style,a=e.onSubmitted,c=void 0;return o.createElement("div",{className:r,style:s},"sending"===t&&o.createElement("div",{style:{color:"blue"}},"sending..."),"error"===t&&o.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&o.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:n}}),o.createElement("input",{ref:function(e){return c=e},type:"email",placeholder:"Your email"}),o.createElement("button",{onClick:function(){return c&&c.value.indexOf("@")>-1&&a({EMAIL:c.value})}},"Submit"))};function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,s=Array(o),c=0;c<o;c++)s[c]=arguments[c];return n=r=l(this,e.call.apply(e,[this].concat(s))),r.state={status:null,message:null},r.subscribe=function(e){var t=i()(e),n=function(e){return e.replace("/post?","/post-json?")}(r.props.url)+"&"+t;r.setState({status:"sending",message:null},(function(){return a()(n,{param:"c"},(function(e,t){e?r.setState({status:"error",message:e}):"success"!==t.result?r.setState({status:"error",message:t.msg}):r.setState({status:"success",message:t.msg})}))}))},l(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.props.render({subscribe:this.subscribe,status:this.state.status,message:this.state.message})},t}(o.Component);f.propTypes={},f.defaultProps={render:function(e){var t=e.subscribe,n=e.status,r=e.message;return o.createElement(u,{status:n,message:r,onSubmitted:function(e){return t(e)}})}};var d=f,p=n(70917);const m=(0,r.Z)("div",{target:"ean24eo0"})({name:"117jwmh",styles:"box-shadow:0px 9px 24px rgb(0 0 0 / 6%);margin:90px auto 0;max-width:550px;padding:24px;h4{padding:12px;}button{background-color:#73abff;border:none;color:white;font-size:1rem;font-weight:600;margin:12px;outline:none;padding:1em 2em;width:100%;&:focus{outline:auto 5px -webkit-focus-ring-color;}}input{border:none;border-bottom:1px solid #ccc;font-size:1rem;margin:12px;padding:8px;width:100%;}>div{display:flex;flex-wrap:wrap;justify-content:space-between;>div{display:block;margin:12px;width:100%;}}"});var g=e=>{let{body:t}=e;return(0,p.tZ)(m,null,(0,p.tZ)("h4",null,t),(0,p.tZ)(d,{url:"https://juanmurillo.us20.list-manage.com/subscribe/post?u=8099ac62ba887740228d614c1&id=1ffbb498a4"}))}},70365:function(e,t,n){var r=n(81445)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var a,c,i=t.prefix||"__jp",u=t.name||i+o++,l=t.param||"callback",f=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;f&&(c=setTimeout((function(){m(),n&&n(new Error("Timeout"))}),f));function m(){a.parentNode&&a.parentNode.removeChild(a),window[u]=s,c&&clearTimeout(c)}return window[u]=function(e){r("jsonp got",e),m(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+d(u)).replace("?&","?"),r('jsonp req "%s"',e),(a=document.createElement("script")).src=e,p.parentNode.insertBefore(a,p),function(){window[u]&&m()}};var o=0;function s(){}},81445:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG),e}(t=e.exports=n(84805)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))})),e.splice(s,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},84805:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,s=o-(r||o);e.diff=s,e.prev=r,e.curr=o,r=o;for(var a=new Array(arguments.length),c=0;c<a.length;c++)a[c]=arguments[c];a[0]=t.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var i=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;i++;var o=t.formatters[r];if("function"==typeof o){var s=a[i];n=o.call(e,s),a.splice(i,1),i--}return n})),t.formatArgs.call(e,a),(n.log||t.log||console.log.bind(console)).apply(e,a)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(20971),t.names=[],t.skips=[],t.formatters={}},20971:function(e){var t=1e3,n=60*t,r=60*n,o=24*r,s=365.25*o;function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,c){c=c||{};var i,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===u&&!1===isNaN(e))return c.long?a(i=e,o,"day")||a(i,r,"hour")||a(i,n,"minute")||a(i,t,"second")||i+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},77635:function(e){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}e.r(t),e.d(t,{default:()=>c});var r=encodeURIComponent;function o(e,t,o,s,c){var i=s&&c.arrayPrefix||"";if("object"===n(t)){var u="".concat(e).concat(i).concat(o&&"]","[");return"".concat(a(t,"".concat(o).concat(u),c))}return o&&o.length?"".concat(o).concat(e,"]").concat(i,"=").concat(r(t)):"".concat(e).concat(i,"=").concat(r(t))}function s(e,t,n,r){return t.map((function(t){return o(e,t,n,!0,r)})).join("&")}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(Array.isArray(e)?e.map((function(e,r){return o("".concat(r),e,t,!0,n)})):Object.keys(e).filter((function(t){return void 0!==e[t]})).map((function(r){return e[r]&&Array.isArray(e[r])?s("".concat(r),e[r],t,n):o(r,e[r],t,!1,n)}))).join("&").replace(/%20/g,"+")}const c=a;return t})()}}]);
//# sourceMappingURL=37dae57ee33ea90acc5e0c6627a10e208fb45655-a75af4fe822624906b71.js.map
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52210,(e,t,r)=>{"use strict";var a="function"==typeof Symbol&&Symbol.for,n=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,s=a?Symbol.for("react.strict_mode"):60108,c=a?Symbol.for("react.profiler"):60114,l=a?Symbol.for("react.provider"):60109,d=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.async_mode"):60111,u=a?Symbol.for("react.concurrent_mode"):60111,m=a?Symbol.for("react.forward_ref"):60112,p=a?Symbol.for("react.suspense"):60113,g=a?Symbol.for("react.suspense_list"):60120,h=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,b=a?Symbol.for("react.block"):60121,v=a?Symbol.for("react.fundamental"):60117,x=a?Symbol.for("react.responder"):60118,w=a?Symbol.for("react.scope"):60119;function j(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case u:case i:case c:case s:case p:return e;default:switch(e=e&&e.$$typeof){case d:case m:case y:case h:case l:return e;default:return t}}case o:return t}}}function S(e){return j(e)===u}r.AsyncMode=f,r.ConcurrentMode=u,r.ContextConsumer=d,r.ContextProvider=l,r.Element=n,r.ForwardRef=m,r.Fragment=i,r.Lazy=y,r.Memo=h,r.Portal=o,r.Profiler=c,r.StrictMode=s,r.Suspense=p,r.isAsyncMode=function(e){return S(e)||j(e)===f},r.isConcurrentMode=S,r.isContextConsumer=function(e){return j(e)===d},r.isContextProvider=function(e){return j(e)===l},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return j(e)===m},r.isFragment=function(e){return j(e)===i},r.isLazy=function(e){return j(e)===y},r.isMemo=function(e){return j(e)===h},r.isPortal=function(e){return j(e)===o},r.isProfiler=function(e){return j(e)===c},r.isStrictMode=function(e){return j(e)===s},r.isSuspense=function(e){return j(e)===p},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===c||e===s||e===p||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===l||e.$$typeof===d||e.$$typeof===m||e.$$typeof===v||e.$$typeof===x||e.$$typeof===w||e.$$typeof===b)},r.typeOf=j},79684,(e,t,r)=>{"use strict";t.exports=e.r(52210)},98437,(e,t,r)=>{"use strict";var a=e.r(79684),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return a.isMemo(e)?i:s[e.$$typeof]||n}s[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[a.Memo]=i;var l=Object.defineProperty,d=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;t.exports=function e(t,r,a){if("string"!=typeof r){if(p){var n=m(r);n&&n!==p&&e(t,n,a)}var i=d(r);f&&(i=i.concat(f(r)));for(var s=c(t),g=c(r),h=0;h<i.length;++h){var y=i[h];if(!o[y]&&!(a&&a[y])&&!(g&&g[y])&&!(s&&s[y])){var b=u(r,y);try{l(t,y,b)}catch(e){}}}}return t}},10891,(e,t,r)=>{"use strict";var a,n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen");function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case c:case s:case m:case p:return e;default:switch(e=e&&e.$$typeof){case f:case d:case u:case h:case g:case l:return e;default:return t}}case o:return t}}}a=Symbol.for("react.module.reference"),r.ContextConsumer=d,r.ContextProvider=l,r.Element=n,r.ForwardRef=u,r.Fragment=i,r.Lazy=h,r.Memo=g,r.Portal=o,r.Profiler=c,r.StrictMode=s,r.Suspense=m,r.SuspenseList=p,r.isAsyncMode=function(){return!1},r.isConcurrentMode=function(){return!1},r.isContextConsumer=function(e){return b(e)===d},r.isContextProvider=function(e){return b(e)===l},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return b(e)===u},r.isFragment=function(e){return b(e)===i},r.isLazy=function(e){return b(e)===h},r.isMemo=function(e){return b(e)===g},r.isPortal=function(e){return b(e)===o},r.isProfiler=function(e){return b(e)===c},r.isStrictMode=function(e){return b(e)===s},r.isSuspense=function(e){return b(e)===m},r.isSuspenseList=function(e){return b(e)===p},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===s||e===m||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===g||e.$$typeof===l||e.$$typeof===d||e.$$typeof===u||e.$$typeof===a||void 0!==e.getModuleId)||!1},r.typeOf=b},98414,(e,t,r)=>{"use strict";t.exports=e.r(10891)},22368,e=>{"use strict";var t,r,a,n=e.i(43476),o=e.i(71645),i=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t));var t,r=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{a.insertRule(e,a.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),s=Math.abs,c=String.fromCharCode,l=Object.assign;function d(e,t,r){return e.replace(t,r)}function f(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function m(e,t,r){return e.slice(t,r)}function p(e){return e.length}function g(e,t){return t.push(e),e}var h=1,y=1,b=0,v=0,x=0,w="";function j(e,t,r,a,n,o,i){return{value:e,root:t,parent:r,type:a,props:n,children:o,line:h,column:y,length:i,return:""}}function S(e,t){return l(j("",null,null,"",null,null,0),e,{length:-e.length},t)}function C(){return x=v<b?u(w,v++):0,y++,10===x&&(y=1,h++),x}function k(){return u(w,v)}function _(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O(e){return h=y=1,b=p(w=e),v=0,[]}function $(e){var t,r;return(t=v-1,r=function e(t){for(;C();)switch(x){case t:return v;case 34:case 39:34!==t&&39!==t&&e(x);break;case 40:41===t&&e(t);break;case 92:C()}return v}(91===e?e+2:40===e?e+1:e),m(w,t,r)).trim()}var P="-ms-",N="-moz-",z="-webkit-",E="comm",M="rule",A="decl",I="@keyframes";function R(e,t){for(var r="",a=e.length,n=0;n<a;n++)r+=t(e[n],n,e,t)||"";return r}function D(e,t,r,a){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case A:return e.return=e.return||e.value;case E:return"";case I:return e.return=e.value+"{"+R(e.children,a)+"}";case M:e.value=e.props.join(",")}return p(r=R(e.children,a))?e.return=e.value+"{"+r+"}":""}function V(e,t,r,a,n,o,i,c,l,f,u){for(var p=n-1,g=0===n?o:[""],h=g.length,y=0,b=0,v=0;y<a;++y)for(var x=0,w=m(e,p+1,p=s(b=i[y])),S=e;x<h;++x)(S=(b>0?g[x]+" "+w:d(w,/&\f/g,g[x])).trim())&&(l[v++]=S);return j(e,t,r,0===n?M:c,l,f,u)}function T(e,t,r,a){return j(e,t,r,A,m(e,0,a),m(e,a+1,-1),a)}var F=function(e,t,r){for(var a=0,n=0;a=n,n=k(),38===a&&12===n&&(t[r]=1),!_(n);)C();return m(w,e,v)},L=function(e,t){var r=-1,a=44;do switch(_(a)){case 0:38===a&&12===k()&&(t[r]=1),e[r]+=F(v-1,t,r);break;case 2:e[r]+=$(a);break;case 4:if(44===a){e[++r]=58===k()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=c(a)}while(a=C())return e},U=function(e,t){var r;return r=L(O(e),t),w="",r},Y=new WeakMap,X=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,a=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Y.get(r))&&!a){Y.set(e,!0);for(var n=[],o=U(t,n),i=r.props,s=0,c=0;s<o.length;s++)for(var l=0;l<i.length;l++,c++)e.props[c]=n[s]?o[s].replace(/&\f/g,i[l]):i[l]+" "+o[s]}}},G=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},B=[function(e,t,r,a){if(e.length>-1&&!e.return)switch(e.type){case A:e.return=function e(t,r){switch(45^u(t,0)?(((r<<2^u(t,0))<<2^u(t,1))<<2^u(t,2))<<2^u(t,3):0){case 5103:return z+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return z+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return z+t+N+t+P+t+t;case 6828:case 4268:return z+t+P+t+t;case 6165:return z+t+P+"flex-"+t+t;case 5187:return z+t+d(t,/(\w+).+(:[^]+)/,z+"box-$1$2"+P+"flex-$1$2")+t;case 5443:return z+t+P+"flex-item-"+d(t,/flex-|-self/,"")+t;case 4675:return z+t+P+"flex-line-pack"+d(t,/align-content|flex-|-self/,"")+t;case 5548:return z+t+P+d(t,"shrink","negative")+t;case 5292:return z+t+P+d(t,"basis","preferred-size")+t;case 6060:return z+"box-"+d(t,"-grow","")+z+t+P+d(t,"grow","positive")+t;case 4554:return z+d(t,/([^-])(transform)/g,"$1"+z+"$2")+t;case 6187:return d(d(d(t,/(zoom-|grab)/,z+"$1"),/(image-set)/,z+"$1"),t,"")+t;case 5495:case 3959:return d(t,/(image-set\([^]*)/,z+"$1$`$1");case 4968:return d(d(t,/(.+:)(flex-)?(.*)/,z+"box-pack:$3"+P+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+z+t+t;case 4095:case 3583:case 4068:case 2532:return d(t,/(.+)-inline(.+)/,z+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(p(t)-1-r>6)switch(u(t,r+1)){case 109:if(45!==u(t,r+4))break;case 102:return d(t,/(.+:)(.+)-([^]+)/,"$1"+z+"$2-$3$1"+N+(108==u(t,r+3)?"$3":"$2-$3"))+t;case 115:return~f(t,"stretch")?e(d(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==u(t,r+1))break;case 6444:switch(u(t,p(t)-3-(~f(t,"!important")&&10))){case 107:return d(t,":",":"+z)+t;case 101:return d(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+z+(45===u(t,14)?"inline-":"")+"box$3$1"+z+"$2$3$1"+P+"$2box$3")+t}break;case 5936:switch(u(t,r+11)){case 114:return z+t+P+d(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return z+t+P+d(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return z+t+P+d(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return z+t+P+t+t}return t}(e.value,e.length);break;case I:return R([S(e,{value:d(e.value,"@","@"+z)})],a);case M:if(e.length){var n,o;return n=e.props,o=function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return R([S(e,{props:[d(t,/:(read-\w+)/,":"+N+"$1")]})],a);case"::placeholder":return R([S(e,{props:[d(t,/:(plac\w+)/,":"+z+"input-$1")]}),S(e,{props:[d(t,/:(plac\w+)/,":"+N+"$1")]}),S(e,{props:[d(t,/:(plac\w+)/,P+"input-$1")]})],a)}return""},n.map(o).join("")}}}];function W(e,t,r){var a="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(a+=r+" ")}),a}e.i(98437);var H=function(e,t,r){var a=e.key+"-"+t.name;!1===r&&void 0===e.registered[a]&&(e.registered[a]=t.styles)},q=function(e,t,r){H(e,t,r);var a=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var n=t;do e.insert(t===n?"."+a:"",n,e.sheet,!0),n=n.next;while(void 0!==n)}},J={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},K=/[A-Z]|^ms/g,Q=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Z=function(e){return 45===e.charCodeAt(1)},ee=function(e){return null!=e&&"boolean"!=typeof e},et=(t=function(e){return Z(e)?e:e.replace(K,"-$&").toLowerCase()},r=Object.create(null),function(e){return void 0===r[e]&&(r[e]=t(e)),r[e]}),er=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Q,function(e,t,r){return a={name:t,styles:r,next:a},t})}return 1===J[e]||Z(e)||"number"!=typeof t||0===t?t:t+"px"};function ea(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return a={name:r.name,styles:r.styles,next:a},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)a={name:n.name,styles:n.styles,next:a},n=n.next;return r.styles+";"}return function(e,t,r){var a="";if(Array.isArray(r))for(var n=0;n<r.length;n++)a+=ea(e,t,r[n])+";";else for(var o in r){var i=r[o];if("object"!=typeof i)null!=t&&void 0!==t[i]?a+=o+"{"+t[i]+"}":ee(i)&&(a+=et(o)+":"+er(o,i)+";");else if(Array.isArray(i)&&"string"==typeof i[0]&&(null==t||void 0===t[i[0]]))for(var s=0;s<i.length;s++)ee(i[s])&&(a+=et(o)+":"+er(o,i[s])+";");else{var c=ea(e,t,i);switch(o){case"animation":case"animationName":a+=et(o)+":"+c+";";break;default:a+=o+"{"+c+"}"}}}return a}(e,t,r);case"function":if(void 0!==e){var o=a,i=r(e);return a=o,ea(e,t,i)}}if(null==t)return r;var s=t[r];return void 0!==s?s:r}var en=/label:\s*([^\s;{]+)\s*(;|$)/g;function eo(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n,o=!0,i="";a=void 0;var s=e[0];null==s||void 0===s.raw?(o=!1,i+=ea(r,t,s)):i+=s[0];for(var c=1;c<e.length;c++)i+=ea(r,t,e[c]),o&&(i+=s[c]);en.lastIndex=0;for(var l="";null!==(n=en.exec(i));)l+="-"+n[1];return{name:function(e){for(var t,r=0,a=0,n=e.length;n>=4;++a,n-=4)t=(65535&(t=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))*0x5bd1e995+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*0x5bd1e995+((t>>>16)*59797<<16)^(65535&r)*0x5bd1e995+((r>>>16)*59797<<16);switch(n){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(i)+l,styles:i,next:a}}var ei=!!o.useInsertionEffect&&o.useInsertionEffect,es=ei||function(e){return e()};ei||o.useLayoutEffect;var ec=o.createContext("u">typeof HTMLElement?function(e){var t,r,a,n,o,s=e.key;if("css"===s){var l=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(l,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var b=e.stylisPlugins||B,S={},P=[];n=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+s+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)S[t[r]]=!0;P.push(e)});var N=(r=(t=[X,G].concat(b,[D,(a=function(e){o.insert(e)},function(e){!e.root&&(e=e.return)&&a(e)})])).length,function(e,a,n,o){for(var i="",s=0;s<r;s++)i+=t[s](e,a,n,o)||"";return i}),z=function(e){var t,r;return R((r=function e(t,r,a,n,o,i,s,l,b){for(var S,O=0,P=0,N=s,z=0,M=0,A=0,I=1,R=1,D=1,F=0,L="",U=o,Y=i,X=n,G=L;R;)switch(A=F,F=C()){case 40:if(108!=A&&58==u(G,N-1)){-1!=f(G+=d($(F),"&","&\f"),"&\f")&&(D=-1);break}case 34:case 39:case 91:G+=$(F);break;case 9:case 10:case 13:case 32:G+=function(e){for(;x=k();)if(x<33)C();else break;return _(e)>2||_(x)>3?"":" "}(A);break;case 92:G+=function(e,t){for(var r;--t&&C()&&!(x<48)&&!(x>102)&&(!(x>57)||!(x<65))&&(!(x>70)||!(x<97)););return r=v+(t<6&&32==k()&&32==C()),m(w,e,r)}(v-1,7);continue;case 47:switch(k()){case 42:case 47:g((S=function(e,t){for(;C();)if(e+x===57)break;else if(e+x===84&&47===k())break;return"/*"+m(w,t,v-1)+"*"+c(47===e?e:C())}(C(),v),j(S,r,a,E,c(x),m(S,2,-2),0)),b);break;default:G+="/"}break;case 123*I:l[O++]=p(G)*D;case 125*I:case 59:case 0:switch(F){case 0:case 125:R=0;case 59+P:-1==D&&(G=d(G,/\f/g,"")),M>0&&p(G)-N&&g(M>32?T(G+";",n,a,N-1):T(d(G," ","")+";",n,a,N-2),b);break;case 59:G+=";";default:if(g(X=V(G,r,a,O,P,o,l,L,U=[],Y=[],N),i),123===F)if(0===P)e(G,r,X,X,U,i,N,l,Y);else switch(99===z&&110===u(G,3)?100:z){case 100:case 108:case 109:case 115:e(t,X,X,n&&g(V(t,X,X,0,0,o,l,L,o,U=[],N),Y),o,Y,N,l,n?U:Y);break;default:e(G,X,X,X,[""],Y,0,l,Y)}}O=P=M=0,I=D=1,L=G="",N=s;break;case 58:N=1+p(G),M=A;default:if(I<1){if(123==F)--I;else if(125==F&&0==I++&&125==(x=v>0?u(w,--v):0,y--,10===x&&(y=1,h--),x))continue}switch(G+=c(F),F*I){case 38:D=P>0?1:(G+="\f",-1);break;case 44:l[O++]=(p(G)-1)*D,D=1;break;case 64:45===k()&&(G+=$(C())),z=k(),P=N=p(L=G+=function(e){for(;!_(k());)C();return m(w,e,v)}(v)),F++;break;case 45:45===A&&2==p(G)&&(I=0)}}return i}("",null,null,null,[""],t=O(t=e),0,[0],t),w="",r),N)},M={key:s,sheet:new i({key:s,container:n,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:S,registered:{},insert:function(e,t,r,a){o=r,z(e?e+"{"+t.styles+"}":t.styles),a&&(M.inserted[t.name]=!0)}};return M.sheet.hydrate(P),M}({key:"css"}):null);ec.Provider;var el=function(e){return(0,o.forwardRef)(function(t,r){return e(t,(0,o.useContext)(ec),r)})},ed=o.createContext({}),ef={}.hasOwnProperty,eu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",em=function(e,t){var r={};for(var a in t)ef.call(t,a)&&(r[a]=t[a]);return r[eu]=e,r},ep=function(e){var t=e.cache,r=e.serialized,a=e.isStringTag;return H(t,r,a),es(function(){return q(t,r,a)}),null},eg=el(function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var n=e[eu],i=[a],s="";"string"==typeof e.className?s=W(t.registered,i,e.className):null!=e.className&&(s=e.className+" ");var c=eo(i,void 0,o.useContext(ed));s+=t.key+"-"+c.name;var l={};for(var d in e)ef.call(e,d)&&"css"!==d&&d!==eu&&(l[d]=e[d]);return l.className=s,r&&(l.ref=r),o.createElement(o.Fragment,null,o.createElement(ep,{cache:t,serialized:c,isStringTag:"string"==typeof n}),o.createElement(n,l))}),eh=n.Fragment;function ey(e,t,r){return ef.call(t,"css")?n.jsx(eg,em(e,t),r):n.jsx(e,t,r)}function eb(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return eo(t)}var ev=function(){var e=eb.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},ex=function e(t){for(var r=t.length,a=0,n="";a<r;a++){var o=t[a];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=e(o);else for(var s in i="",o)o[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=o}i&&(n&&(n+=" "),n+=i)}}return n},ew=function(e){var t=e.cache,r=e.serializedArr;return es(function(){for(var e=0;e<r.length;e++)q(t,r[e],!1)}),null},ej=el(function(e,t){var r=!1,a=[],n=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var o=eo(r,t.registered);return a.push(o),H(t,o,!1),t.key+"-"+o.name},i={css:n,cx:function(){for(var e,r,a,o,i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return e=t.registered,o=W(e,a=[],r=ex(s)),a.length<2?r:o+n(a)},theme:o.useContext(ed)},s=e.children(i);return r=!0,o.createElement(o.Fragment,null,o.createElement(ew,{cache:t,serializedArr:a}),s)}),eS=e.i(54513),eC=e.i(98414);ev`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,ev`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,ev`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,ev`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,ev`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,ev`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,ev`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,ev`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,ev`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,ev`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,ev`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,ev`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,ev`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;let ek=ev`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,e_=ev`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eO=ev`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e$=ev`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eP=ev`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eN=ev`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ez=ev`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eE=ev`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eM=ev`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eA=ev`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eI=ev`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eR=ev`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eD=ev`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function eV(e){var t;return t=()=>null,r=>r?e():t()}function eT(e){return eV(()=>({opacity:0}))(e)}let eF=e=>{let{cascade:t=!1,damping:r=.5,delay:a=0,duration:n=1e3,fraction:i=0,keyframes:s=eN,triggerOnce:c=!1,className:l,style:d,childClassName:f,childStyle:u,children:m,onVisibilityChange:p}=e,g=(0,o.useMemo)(()=>(function({duration:e=1e3,delay:t=0,timingFunction:r="ease",keyframes:a=eN,iterationCount:n=1}){return eb`
    animation-duration: ${e}ms;
    animation-timing-function: ${r};
    animation-delay: ${t}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:s,duration:n}),[n,s]);return void 0==m?null:"string"==typeof m||"number"==typeof m||"boolean"==typeof m?ey(eU,{...e,animationStyles:g,children:String(m)}):(0,eC.isFragment)(m)?ey(eY,{...e,animationStyles:g}):ey(eh,{children:o.Children.map(m,(s,m)=>{if(!(0,o.isValidElement)(s))return null;let h=a+(t?m*n*r:0);switch(s.type){case"ol":case"ul":return ey(ej,{children:({cx:t})=>ey(s.type,{...s.props,className:t(l,s.props.className),style:Object.assign({},d,s.props.style),children:ey(eF,{...e,children:s.props.children})})});case"li":return ey(eS.InView,{threshold:i,triggerOnce:c,onChange:p,children:({inView:e,ref:t})=>ey(ej,{children:({cx:r})=>ey(s.type,{...s.props,ref:t,className:r(f,s.props.className),css:eV(()=>g)(e),style:Object.assign({},u,s.props.style,eT(!e),{animationDelay:h+"ms"})})})});default:return ey(eS.InView,{threshold:i,triggerOnce:c,onChange:p,children:({inView:e,ref:t})=>ey("div",{ref:t,className:l,css:eV(()=>g)(e),style:Object.assign({},d,eT(!e),{animationDelay:h+"ms"}),children:ey(ej,{children:({cx:e})=>ey(s.type,{...s.props,className:e(f,s.props.className),style:Object.assign({},u,s.props.style)})})})})}})})},eL={display:"inline-block",whiteSpace:"pre"},eU=e=>{var t,r;let{animationStyles:a,cascade:n=!1,damping:o=.5,delay:i=0,duration:s=1e3,fraction:c=0,triggerOnce:l=!1,className:d,style:f,children:u,onVisibilityChange:m}=e,{ref:p,inView:g}=(0,eS.useInView)({triggerOnce:l,threshold:c,onChange:m});return(t=()=>ey("div",{ref:p,className:d,style:Object.assign({},f,eL),children:u.split("").map((e,t)=>ey("span",{css:eV(()=>a)(g),style:{animationDelay:i+t*s*o+"ms"},children:e},t))}),r=()=>ey(eY,{...e,children:u}),e=>e?t():r())(n)},eY=e=>{let{animationStyles:t,fraction:r=0,triggerOnce:a=!1,className:n,style:o,children:i,onVisibilityChange:s}=e,{ref:c,inView:l}=(0,eS.useInView)({triggerOnce:a,threshold:r,onChange:s});return ey("div",{ref:c,className:n,css:eV(()=>t)(l),style:Object.assign({},o,eT(!l)),children:i})};ev`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,ev`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ev`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ev`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ev`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ev`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,ev`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,ev`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,ev`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,ev`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;let eX=ev`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,eG=ev`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,eB=ev`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,eW=ev`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,eH=ev`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,eq=ev`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,eJ=ev`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,eK=ev`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,eQ=ev`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,eZ=ev`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,e0=ev`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,e1=ev`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,e3=ev`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,e5=e=>{let{big:t=!1,direction:r,reverse:a=!1,...n}=e;return ey(eF,{keyframes:(0,o.useMemo)(()=>(function(e,t,r){switch(r){case"bottom-left":return t?eG:e_;case"bottom-right":return t?eB:eO;case"down":return e?t?eH:eP:t?eW:e$;case"left":return e?t?eJ:ez:t?eq:eN;case"right":return e?t?eQ:eM:t?eK:eE;case"top-left":return t?eZ:eA;case"top-right":return t?e0:eI;case"up":return e?t?e3:eD:t?e1:eR;default:return t?eX:ek}})(t,a,r),[t,r,a]),...n})};ev`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,ev`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,ev`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,ev`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,ev`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,ev`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,ev`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,ev`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ev`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,ev`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,ev`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,ev`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,ev`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,ev`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,ev`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,ev`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,ev`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,ev`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,ev`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,ev`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ev`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ev`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ev`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ev`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,ev`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,ev`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,ev`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,ev`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,ev`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ev`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ev`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ev`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ev`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,ev`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ev`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,ev`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,ev`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,e.s(["Fade",()=>e5],22368)},2190,54513,e=>{"use strict";var t=e.i(71645),r=t,a=Object.defineProperty,n=(e,t,r)=>{let n;return(n="symbol"!=typeof t?t+"":t)in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r},o=new Map,i=new WeakMap,s=0,c=void 0;function l(e,t,r={},a=c){if(void 0===window.IntersectionObserver&&void 0!==a){let n=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:n,observer:d,elements:f}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?!(r=e.root)?"0":(i.has(r)||(s+=1,i.set(r,s.toString())),i.get(r)):e[t]}`}).toString(),r=o.get(t);if(!r){let a,n=new Map,i=new IntersectionObserver(t=>{t.forEach(t=>{var r;let o=t.isIntersecting&&a.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach(e=>{e(o,t)})})},e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:i,elements:n},o.set(t,r)}return r}(r),u=f.get(e)||[];return f.has(e)||f.set(e,u),u.push(t),d.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(f.delete(e),d.unobserve(e)),0===f.size&&(d.disconnect(),o.delete(n))}}var d=class extends r.Component{constructor(e){super(e),n(this,"node",null),n(this,"_unobserveCb",null),n(this,"handleNode",e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),n(this,"handleChange",(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),"function"==typeof this.props.children&&this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:t,rootMargin:r,trackVisibility:a,delay:n,fallbackInView:o}=this.props;this._unobserveCb=l(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:a,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:e}=this.props;if("function"==typeof e){let{inView:t,entry:r}=this.state;return e({inView:t,entry:r,ref:this.handleNode})}let{as:t,triggerOnce:a,threshold:n,root:o,rootMargin:i,onChange:s,skip:c,trackVisibility:l,delay:d,initialInView:f,fallbackInView:u,...m}=this.props;return r.createElement(t||"div",{ref:this.handleNode,...m},e)}};function f({threshold:e,delay:t,trackVisibility:a,rootMargin:n,root:o,triggerOnce:i,skip:s,initialInView:c,fallbackInView:d,onChange:u}={}){var m;let[p,g]=r.useState(null),h=r.useRef(),[y,b]=r.useState({inView:!!c,entry:void 0});h.current=u,r.useEffect(()=>{let r;if(!s&&p)return r=l(p,(e,t)=>{b({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&i&&r&&(r(),r=void 0)},{root:o,rootMargin:n,threshold:e,trackVisibility:a,delay:t},d),()=>{r&&r()}},[Array.isArray(e)?e.toString():e,p,o,n,i,s,a,d,t]);let v=null==(m=y.entry)?void 0:m.target,x=r.useRef();p||!v||i||s||x.current===v||(x.current=v,b({inView:!!c,entry:void 0}));let w=[g,y.inView,y.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}e.s(["InView",()=>d,"useInView",()=>f],54513);var u=e.i(21204);function m(e,r=.75){let{ref:a,inView:n}=f({threshold:r}),{setActiveSection:o,timeOfLastClick:i}=(0,u.useActiveSectionContext)();return(0,t.useEffect)(()=>{n&&Date.now()-i>1e3&&o(e)},[n,o,i,e]),{ref:a}}e.s(["useSectionInView",()=>m],2190)},28154,e=>{"use strict";var t=e.i(43476),r=e.i(46932),a=e.i(22368),n=e.i(2190);function o(){let{ref:e}=(0,n.useSectionInView)("#home",.5);return(0,t.jsx)("section",{id:"home",ref:e,className:"mb-28 max-w-[75rem] mx-auto scroll-mt-20 px-4",children:(0,t.jsxs)(r.motion.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:120,damping:20},className:" relative rounded-3xl border border-teal-300/40 bg-gradient-to-br from-teal-100/60 via-sky-200/40 to-violet-200/30 backdrop-blur-xl backdrop-saturate-150 shadow-[0_30px_90px_rgba(56,189,248,0.35)] px-10 py-14 text-center ",children:[(0,t.jsx)("div",{className:" pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/70 to-transparent opacity-25 "}),(0,t.jsx)(a.Fade,{direction:"up",delay:300,cascade:!0,damping:.1,triggerOnce:!0,children:(0,t.jsxs)("h1",{className:"relative z-10 mb-8",children:[(0,t.jsx)("span",{className:" block text-4xl sm:text-5xl font-playfair font-bold tracking-tight text-slate-900 ",children:(0,t.jsx)("span",{className:"relative inline-block",children:(0,t.jsx)("span",{className:"relative",children:"Nouman Hafeez"})})}),(0,t.jsx)("p",{className:" mt-8 max-w-3xl mx-auto text-[17px] font-inter font-medium text-slate-800 leading-relaxed ",children:"Hello! Glad to see you here. This is a collection of my personal projects created during my MS studies, combining what I learned in class with my own curiosity and creativity."})]})})]})})}e.s(["default",()=>o])},88143,(e,t,r)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:r,blurHeight:a,blurDataURL:n,objectFit:o}){let i=r?40*r:e,s=a?40*a:t,c=i&&s?`viewBox='0 0 ${i} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return i}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let o=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return l}}),e.r(33525);let a=e.r(43369),n=e.r(88143),o=e.r(87690),i=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function c(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l({src:e,sizes:t,unoptimized:r=!1,priority:l=!1,preload:d=!1,loading:f,className:u,quality:m,width:p,height:g,fill:h=!1,style:y,overrideSrc:b,onLoad:v,onLoadingComplete:x,placeholder:w="empty",blurDataURL:j,fetchPriority:S,decoding:C="async",layout:k,objectFit:_,objectPosition:O,lazyBoundary:$,lazyRoot:P,...N},z){var E;let M,A,I,{imgConf:R,showAltText:D,blurComplete:V,defaultLoader:T}=z,F=R||o.imageConfigDefault;if("allSizes"in F)M=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t),r=F.qualities?.sort((e,t)=>e-t);M={...F,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===T)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let L=N.loader||T;delete N.loader,delete N.srcSet;let U="__next_img_default"in L;if(U){if("custom"===M.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=L;L=t=>{let{config:r,...a}=t;return e(a)}}if(k){"fill"===k&&(h=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(y={...y,...e});let r={responsive:"100vw",fill:"100vw"}[k];r&&!t&&(t=r)}let Y="",X=c(p),G=c(g);if((E=e)&&"object"==typeof E&&(s(E)||void 0!==E.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(A=t.blurWidth,I=t.blurHeight,j=j||t.blurDataURL,Y=t.src,!h)if(X||G){if(X&&!G){let e=X/t.width;G=Math.round(t.height*e)}else if(!X&&G){let e=G/t.height;X=Math.round(t.width*e)}}else X=t.width,G=t.height}let B=!l&&!d&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:Y)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,B=!1),M.unoptimized&&(r=!0),U&&!M.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let W=c(m),H=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:_,objectPosition:O}:{},D?{}:{color:"transparent"},y),q=V||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:X,heightInt:G,blurWidth:A,blurHeight:I,blurDataURL:j||"",objectFit:H.objectFit})}")`:`url("${w}")`,J=i.includes(H.objectFit)?"fill"===H.objectFit?"100% 100%":"cover":H.objectFit,K=q?{backgroundSize:J,backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},Q=function({config:e,src:t,unoptimized:r,width:n,quality:o,sizes:i,loader:s}){if(r){let e=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let r=t.includes("?")?"&":"?";t=`${t}${r}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:c,kind:l}=function({deviceSizes:e,allSizes:t},r,a){if(a){let r=/(^|\s)(1?\d?\d)vw/g,n=[];for(let e;e=r.exec(a);)n.push(parseInt(e[2]));if(n.length){let r=.01*Math.min(...n);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,n,i),d=c.length-1;return{sizes:i||"w"!==l?i:"100vw",srcSet:c.map((r,a)=>`${s({config:e,src:t,quality:o,width:r})} ${"w"===l?r:a+1}${l}`).join(", "),src:s({config:e,src:t,quality:o,width:c[d]})}}({config:M,src:e,unoptimized:r,width:X,quality:W,sizes:t,loader:L}),Z=B?"lazy":f;return{props:{...N,loading:Z,fetchPriority:S,width:X,height:G,decoding:C,className:u,style:{...H,...K},sizes:Q.sizes,srcSet:Q.srcSet,src:b||Q.src},meta:{unoptimized:r,preload:d||l,placeholder:w,fill:h}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let a=e.r(71645),n="u"<typeof window,o=n?()=>{}:a.useLayoutEffect,i=n?()=>{}:a.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return n&&(t?.mountedInstances?.add(e.children),s()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return g},defaultHead:function(){return f}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let o=e.r(55682),i=e.r(90809),s=e.r(43476),c=i._(e.r(71645)),l=o._(e.r(98879)),d=e.r(42732);function f(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let m=["name","httpEquiv","charSet","itemProp"];function p(e){let t,r,a,n;return e.reduce(u,[]).reverse().concat(f().reverse()).filter((t=new Set,r=new Set,a=new Set,n={},e=>{let o=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?o=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?o=!1:r.add(e.type);break;case"meta":for(let t=0,r=m.length;t<r;t++){let r=m[t];if(e.props.hasOwnProperty(r))if("charSet"===r)a.has(r)?o=!1:a.add(r);else{let t=e.props[r],a=n[r]||new Set;("name"!==r||!i)&&a.has(t)?o=!1:(a.add(t),n[r]=a)}}}return o})).reverse().map((e,t)=>{let r=e.key||t;return c.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,c.useContext)(d.HeadManagerContext);return(0,s.jsx)(l.default,{reduceComponentsToState:p,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let a=e.r(55682)._(e.r(71645)),n=e.r(87690),o=a.default.createContext(n.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function a(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return a}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i}});let a=e.r(70965),n=e.r(43369);function o({config:e,src:t,width:r,quality:o}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let i=(0,a.findClosestQuality)(o,e),s=(0,n.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${i}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}o.__next_img_default=!0;let i=o},85437,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return x}});let a=e.r(55682),n=e.r(90809),o=e.r(43476),i=n._(e.r(71645)),s=a._(e.r(74080)),c=a._(e.r(25633)),l=e.r(8927),d=e.r(87690),f=e.r(18556);e.r(33525);let u=e.r(65856),m=a._(e.r(1948)),p=e.r(18581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,a,n,o,i){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function y(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,i.forwardRef)(({src:e,srcSet:t,sizes:r,height:a,width:n,decoding:s,className:c,style:l,fetchPriority:d,placeholder:f,loading:u,unoptimized:m,fill:g,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:x,setShowAltText:w,sizesInput:j,onLoad:S,onError:C,...k},_)=>{let O=(0,i.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&h(e,f,b,v,x,m,j))},[e,f,b,v,x,C,m,j]),$=(0,p.useMergedRef)(_,O);return(0,o.jsx)("img",{...k,...y(d),loading:u,width:n,height:a,decoding:s,"data-nimg":g?"fill":"1",className:c,style:l,sizes:r,srcSet:t,src:e,ref:$,onLoad:e=>{h(e.currentTarget,f,b,v,x,m,j)},onError:e=>{w(!0),"empty"!==f&&x(!0),C&&C(e)}})});function v({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...y(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,o.jsx)(c.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let x=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(u.RouterContext),a=(0,i.useContext)(f.ImageConfigContext),n=(0,i.useMemo)(()=>{let e=g||a||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),n=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:n,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:s,onLoadingComplete:c}=e,p=(0,i.useRef)(s);(0,i.useEffect)(()=>{p.current=s},[s]);let h=(0,i.useRef)(c);(0,i.useEffect)(()=>{h.current=c},[c]);let[y,x]=(0,i.useState)(!1),[w,j]=(0,i.useState)(!1),{props:S,meta:C}=(0,l.getImgProps)(e,{defaultLoader:m.default,imgConf:n,blurComplete:y,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...S,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:x,setShowAltText:j,sizesInput:e.sizes,ref:t}),C.preload?(0,o.jsx)(v,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return d},getImageProps:function(){return l}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let o=e.r(55682),i=e.r(8927),s=e.r(85437),c=o._(e.r(1948));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let d=s.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},20608,e=>{"use strict";var t=e.i(43476),r=e.i(57688),a=e.i(2190),n=e.i(46932),o=e.i(22368);function i(){let{ref:e}=(0,a.useSectionInView)("#about");return(0,t.jsx)("section",{id:"about",ref:e,className:"mb-28 max-w-[75rem] mx-auto scroll-mt-20 px-4",children:(0,t.jsxs)(n.motion.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:120,damping:20},className:" relative rounded-3xl border border-teal-300/30 bg-gradient-to-br from-teal-100/40 via-sky-100/30 to-violet-100/20 backdrop-blur-xl backdrop-saturate-150 shadow-[0_30px_90px_rgba(56,189,248,0.25)] px-10 py-14 ",children:[(0,t.jsx)("div",{className:" pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/50 to-transparent opacity-25 "}),(0,t.jsxs)("div",{className:"relative z-10 text-center",children:[(0,t.jsx)(o.Fade,{direction:"up",delay:300,cascade:!0,damping:.1,triggerOnce:!0,children:(0,t.jsx)("h2",{className:"text-3xl font-bold text-slate-900",children:"About Me"})}),(0,t.jsxs)("div",{className:"grid xl:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] gap-8 mt-8 items-center",children:[(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(o.Fade,{direction:"left",delay:400,cascade:!0,damping:.1,triggerOnce:!0,children:(0,t.jsx)(r.default,{src:"/me.jpeg",alt:"About Me",width:"500",height:"200",quality:100,priority:!0,className:"rounded-3xl object-cover w-[350px] h-[480px]"})})}),(0,t.jsx)("div",{className:"text-lg text-left",children:(0,t.jsxs)(o.Fade,{direction:"up",delay:500,cascade:!0,damping:.1,triggerOnce:!0,children:[(0,t.jsxs)("p",{className:"mt-2 leading-relaxed text-slate-900 text-base",children:["I’m Nouman Hafeez, a passionate and detail-oriented software engineer currently pursuing a Master’s in Computer Science at"," ",(0,t.jsx)("strong",{children:"FAST NUCES"}),", Lahore. I have hands-on experience in machine learning, web scraping, and mobile application development. Over the years, I’ve worked on diverse projects involving Machine Learning, Scrapy, and React Native that are not only functional but also efficient and scalable."]}),(0,t.jsxs)("p",{className:"mt-4 leading-relaxed text-slate-900 text-base",children:["I thrive on exploring new technologies, solving complex challenges, and writing clean, maintainable code. Beyond academics, I’ve gained valuable industry experience through internship, including working as a"," ",(0,t.jsx)("strong",{children:"Machine Learning Intern at Arbisoft"})," and as a"," ",(0,t.jsx)("strong",{children:"Associate Software Engineer at Sortup Dev"}),". These roles have allowed me to bridge the gap between data-driven intelligence and user-friendly applications. My mission is to contribute to impactful, innovative projects while continually growing as a developer—and to make the journey as enjoyable as the destination."]}),(0,t.jsxs)("p",{className:"mt-6 text-base text-slate-900",children:["Feel free to reach out to me at"," ",(0,t.jsx)("a",{href:"mailto:noumanhafeez@email.com",className:"text-blue-600 hover:underline",children:(0,t.jsx)("strong",{children:"noumanhafeez@email.com"})})]})]})})]}),(0,t.jsx)("hr",{className:"mt-32 border-t-2 border-gray-300 w-1/2 mx-auto"})]})]})})}e.s(["default",()=>i])},80976,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(57688),n=e.i(46932);function o({title:e,description:o,imageUrl:i,link:s}){let[c,l]=(0,r.useState)(!1);return(0,t.jsx)(n.motion.div,{className:"relative rounded-lg overflow-hidden shadow-lg cursor-pointer h-64",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),whileHover:{scale:1.03},transition:{duration:.3},children:(0,t.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(a.default,{src:i,alt:e,fill:!0,style:{objectFit:"cover"},className:"transition-transform duration-300"}),(0,t.jsxs)(n.motion.div,{initial:{opacity:0},animate:{opacity:+!!c},transition:{duration:.3},className:"absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-4",children:[(0,t.jsx)("h3",{className:"text-white text-lg font-bold",children:e}),(0,t.jsx)("p",{className:"text-white text-sm mt-2",children:o})]})]})})}let i=[{title:"Machine Learning Specialization by Andrew Ng",description:"",tags:["Certifications"],imageUrl:"/machine_learning.png",link:"https://coursera.org/share/f9bcd7be95aaf6073d4f5f798f63d523"},{title:"Deep Learning Specialization by Andrew Ng",description:"",tags:["Certifications"],imageUrl:"/Deep_learning.png",link:"https://coursera.org/share/4cdb2ab9b6238c3ac01e0b9308ee2b6d"},{title:"Google Data Analytics Professional Certificate",description:"",tags:["Certifications"],imageUrl:"/data_analytics.png",link:"https://coursera.org/share/c77a904040320faad7d8dbc4edbfe968"},{title:"Introduction to TensorFlow",description:"",tags:["Certifications"],imageUrl:"/tensorflow.png",link:"https://coursera.org/share/44d233ddf7c6bdaf2464717f78c4c83b"},{title:"Pyhton for Everybody",description:"",tags:["Certifications"],imageUrl:"/python.jpg",link:"https://example.com/climate"},{title:"Data Science Orientation",description:"",tags:["Certifications"],imageUrl:"/orientation.png",link:"https://coursera.org/share/18cb4108cf750008b5799f7dceab87e2"},{title:"Introduction to Databases",description:"",tags:["Certifications"],imageUrl:"/meta.jpg",link:"https://coursera.org/share/856512bbf239f1957d9c5cb67c5a42b5"},{title:"Introduction to TensorFlow",description:"",tags:["Certifications"],imageUrl:"/tensorflow.png",link:"https://coursera.org/share/44d233ddf7c6bdaf2464717f78c4c83b"},{title:"Data Structures and Algorithms",description:"",tags:["Certifications"],imageUrl:"/algo.png",link:"https://certificate.algoexpert.io/AE-89974bae0a"},{title:"Siameese Neural Networks with triplet loss",description:"",tags:["Coursera Projects"],imageUrl:"/coursera.png",link:"https://coursera.org/share/d76292fe26adb112d0fcb2934da7492c"},{title:"Linear Regression with multiple variables",description:"",tags:["Coursera Projects"],imageUrl:"/cor.png",link:"https://coursera.org/share/7210f28bd5966f55d4c6bb639a743a28"},{title:"Neural Network Visualizer",description:"",tags:["Coursera Projects"],imageUrl:"/coursera.png",link:"https://coursera.org/share/d4065f9510248ce941ffff73b9f85b09"},{title:"Diabetic Retinopathy Detection",description:"",tags:["Coursera Projects"],imageUrl:"/cor.png",link:"https://coursera.org/share/8cc1f74eaff2860fba79cd5bf21964fa"},{title:"Accident Visualization Using Streamlit",description:"",tags:["Coursera Projects"],imageUrl:"/coursera.png",link:"https://coursera.org/share/f6fa0cdc5277bf85cb024b7e96c8bce9"}],s=["All Categories","Certifications","Coursera Projects","Data Visualization","Data Science"];function c(){let[e,a]=(0,r.useState)("All Categories"),n="All Categories"===e?i:i.filter(t=>t.tags.some(t=>t.toLowerCase()===e.toLowerCase())),c=["Data Visualization","Data Science"].includes(e);return(0,t.jsxs)("section",{className:"flex flex-col items-center min-h-[900px] px-4 sm:px-6 max-w-[75rem] mx-auto scroll-mt-20",children:[(0,t.jsx)("div",{className:"w-full mb-8",children:(0,t.jsxs)("div",{className:" relative rounded-3xl border border-teal-300/30 bg-gradient-to-br from-teal-100/40 via-sky-100/30 to-violet-100/20 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_60px_rgba(56,189,248,0.25)] px-6 py-4 flex justify-center overflow-x-auto ",children:[(0,t.jsx)("div",{className:"flex flex-wrap sm:flex-nowrap justify-center sm:justify-between space-x-4 sm:space-x-8 font-bold text-xs sm:text-sm uppercase tracking-wide",children:s.map(r=>(0,t.jsx)("button",{onClick:()=>a(r),className:`whitespace-nowrap transition-colors ${e===r?"text-pink-600":"text-black hover:text-gray-700"}`,children:r},r))}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent opacity-20"})]})}),(0,t.jsx)("div",{className:"w-full",children:c?(0,t.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,t.jsxs)("p",{className:"text-gray-600 text-lg font-medium animate-pulse",children:["🚧 ",e," projects coming soon!"]})}):(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((e,r)=>(0,t.jsxs)("div",{className:" relative rounded-3xl border border-teal-200/30 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_60px_rgba(56,189,248,0.15)] overflow-hidden transition-transform hover:scale-[1.02] ",children:[(0,t.jsx)(o,{...e}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent opacity-20"})]},r))})}),(0,t.jsx)("hr",{className:"mt-32 border-t-2 border-gray-300 w-3/4 mx-auto"})]})}e.s(["default",()=>c],80976)},14255,e=>{"use strict";var t=e.i(43476),r=e.i(46932),a=e.i(2190);function n({children:e}){return(0,t.jsx)("h2",{className:"text-3xl capitalize mb-8 font-bold text-black text-center",children:e})}var o=e.i(71645),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=o.default.createContext&&o.default.createContext(i),c=["attr","size","title"];function l(){return(l=Object.assign.bind()).apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){var a,n,o;a=e,n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in a?Object.defineProperty(a,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>o.default.createElement(m,l({attr:f({},e.attr)},t),function e(t){return t&&t.map((t,r)=>o.default.createElement(t.tag,f({key:r},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var r,{attr:a,size:n,title:i}=e,s=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,c),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.default.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:f(f({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&o.default.createElement("title",null,i),e.children)};return void 0!==s?o.default.createElement(s.Consumer,null,e=>t(e)):t(i)}function p(e){return u({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function g(e){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function h(e){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"},child:[]}]})(e)}function y(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}let b={initial:{opacity:0,y:50},animate:e=>({opacity:1,y:0,transition:{delay:.05*e}})};function v(){let{ref:e}=(0,a.useSectionInView)("#connect"),o=[{name:"LinkedIn",url:"https://www.linkedin.com/in/nouman-hafeez/",icon:(0,t.jsx)(g,{size:28}),color:"text-blue-600"},{name:"GitHub",url:"https://github.com/noumanhafeez",icon:(0,t.jsx)(p,{size:28}),color:"text-gray-900"},{name:"Medium",url:"https://medium.com/@noumanhafeez095",icon:(0,t.jsx)(h,{size:28}),color:"text-black"},{name:"Twitter",url:"https://x.com/Nouman1256",icon:(0,t.jsx)(y,{size:28}),color:"text-sky-500"}];return(0,t.jsxs)("section",{id:"connect",ref:e,className:"mb-28 max-w-[53rem] mx-auto scroll-mt-28 px-4 text-center",children:[(0,t.jsx)(n,{children:"Connect With Me"}),(0,t.jsx)("ul",{className:"flex flex-wrap justify-center gap-6",children:o.map((e,a)=>(0,t.jsx)(r.motion.li,{variants:b,initial:"initial",whileInView:"animate",viewport:{once:!0},custom:a,children:(0,t.jsxs)("div",{onClick:()=>window.open(e.url,"_blank"),className:" relative rounded-3xl px-6 py-4 flex items-center gap-2 cursor-pointer bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/30 shadow-[0_15px_40px_rgba(56,189,248,0.15)] transition-transform duration-300 hover:scale-105 ",children:[(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/50 to-transparent opacity-20"}),(0,t.jsxs)("div",{className:`relative z-10 flex items-center gap-2 ${e.color}`,children:[e.icon,(0,t.jsx)("span",{className:"text-lg font-medium",children:e.name})]})]})},e.name))})]})}e.s(["default",()=>v],14255)}]);
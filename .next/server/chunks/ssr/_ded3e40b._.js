module.exports=[13089,(a,b,c)=>{"use strict";var d="function"==typeof Symbol&&Symbol.for,e=d?Symbol.for("react.element"):60103,f=d?Symbol.for("react.portal"):60106,g=d?Symbol.for("react.fragment"):60107,h=d?Symbol.for("react.strict_mode"):60108,i=d?Symbol.for("react.profiler"):60114,j=d?Symbol.for("react.provider"):60109,k=d?Symbol.for("react.context"):60110,l=d?Symbol.for("react.async_mode"):60111,m=d?Symbol.for("react.concurrent_mode"):60111,n=d?Symbol.for("react.forward_ref"):60112,o=d?Symbol.for("react.suspense"):60113,p=d?Symbol.for("react.suspense_list"):60120,q=d?Symbol.for("react.memo"):60115,r=d?Symbol.for("react.lazy"):60116,s=d?Symbol.for("react.block"):60121,t=d?Symbol.for("react.fundamental"):60117,u=d?Symbol.for("react.responder"):60118,v=d?Symbol.for("react.scope"):60119;function w(a){if("object"==typeof a&&null!==a){var b=a.$$typeof;switch(b){case e:switch(a=a.type){case l:case m:case g:case i:case h:case o:return a;default:switch(a=a&&a.$$typeof){case k:case n:case r:case q:case j:return a;default:return b}}case f:return b}}}function x(a){return w(a)===m}c.AsyncMode=l,c.ConcurrentMode=m,c.ContextConsumer=k,c.ContextProvider=j,c.Element=e,c.ForwardRef=n,c.Fragment=g,c.Lazy=r,c.Memo=q,c.Portal=f,c.Profiler=i,c.StrictMode=h,c.Suspense=o,c.isAsyncMode=function(a){return x(a)||w(a)===l},c.isConcurrentMode=x,c.isContextConsumer=function(a){return w(a)===k},c.isContextProvider=function(a){return w(a)===j},c.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===e},c.isForwardRef=function(a){return w(a)===n},c.isFragment=function(a){return w(a)===g},c.isLazy=function(a){return w(a)===r},c.isMemo=function(a){return w(a)===q},c.isPortal=function(a){return w(a)===f},c.isProfiler=function(a){return w(a)===i},c.isStrictMode=function(a){return w(a)===h},c.isSuspense=function(a){return w(a)===o},c.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===g||a===m||a===i||a===h||a===o||a===p||"object"==typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===j||a.$$typeof===k||a.$$typeof===n||a.$$typeof===t||a.$$typeof===u||a.$$typeof===v||a.$$typeof===s)},c.typeOf=w},66539,(a,b,c)=>{"use strict";b.exports=a.r(13089)},32344,(a,b,c)=>{"use strict";var d=a.r(66539),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},f={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h={};function i(a){return d.isMemo(a)?g:h[a.$$typeof]||e}h[d.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},h[d.Memo]=g;var j=Object.defineProperty,k=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,n=Object.getPrototypeOf,o=Object.prototype;b.exports=function a(b,c,d){if("string"!=typeof c){if(o){var e=n(c);e&&e!==o&&a(b,e,d)}var g=k(c);l&&(g=g.concat(l(c)));for(var h=i(b),p=i(c),q=0;q<g.length;++q){var r=g[q];if(!f[r]&&!(d&&d[r])&&!(p&&p[r])&&!(h&&h[r])){var s=m(c,r);try{j(b,r,s)}catch(a){}}}}return b}},77518,(a,b,c)=>{function d(){return b.exports=d=Object.assign.bind(),b.exports.__esModule=!0,b.exports.default=b.exports,d.apply(null,arguments)}b.exports=d,b.exports.__esModule=!0,b.exports.default=b.exports},28786,(a,b,c)=>{"use strict";var d,e=Symbol.for("react.element"),f=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),k=Symbol.for("react.context"),l=Symbol.for("react.server_context"),m=Symbol.for("react.forward_ref"),n=Symbol.for("react.suspense"),o=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),r=Symbol.for("react.offscreen");function s(a){if("object"==typeof a&&null!==a){var b=a.$$typeof;switch(b){case e:switch(a=a.type){case g:case i:case h:case n:case o:return a;default:switch(a=a&&a.$$typeof){case l:case k:case m:case q:case p:case j:return a;default:return b}}case f:return b}}}d=Symbol.for("react.module.reference"),c.ContextConsumer=k,c.ContextProvider=j,c.Element=e,c.ForwardRef=m,c.Fragment=g,c.Lazy=q,c.Memo=p,c.Portal=f,c.Profiler=i,c.StrictMode=h,c.Suspense=n,c.SuspenseList=o,c.isAsyncMode=function(){return!1},c.isConcurrentMode=function(){return!1},c.isContextConsumer=function(a){return s(a)===k},c.isContextProvider=function(a){return s(a)===j},c.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===e},c.isForwardRef=function(a){return s(a)===m},c.isFragment=function(a){return s(a)===g},c.isLazy=function(a){return s(a)===q},c.isMemo=function(a){return s(a)===p},c.isPortal=function(a){return s(a)===f},c.isProfiler=function(a){return s(a)===i},c.isStrictMode=function(a){return s(a)===h},c.isSuspense=function(a){return s(a)===n},c.isSuspenseList=function(a){return s(a)===o},c.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===g||a===i||a===h||a===n||a===o||a===r||"object"==typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===j||a.$$typeof===k||a.$$typeof===m||a.$$typeof===d||void 0!==a.getModuleId)||!1},c.typeOf=s},13225,(a,b,c)=>{"use strict";b.exports=a.r(28786)},7543,a=>{"use strict";var b,c,d,e=a.i(87924),f=a.i(72131),g=function(){function a(a){var b=this;this._insertTag=function(a){var c;c=0===b.tags.length?b.insertionPoint?b.insertionPoint.nextSibling:b.prepend?b.container.firstChild:b.before:b.tags[b.tags.length-1].nextSibling,b.container.insertBefore(a,c),b.tags.push(a)},this.isSpeedy=void 0===a.speedy||a.speedy,this.tags=[],this.ctr=0,this.nonce=a.nonce,this.key=a.key,this.container=a.container,this.prepend=a.prepend,this.insertionPoint=a.insertionPoint,this.before=null}var b=a.prototype;return b.hydrate=function(a){a.forEach(this._insertTag)},b.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(((b=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&b.setAttribute("nonce",this.nonce),b.appendChild(document.createTextNode("")),b.setAttribute("data-s",""),b));var b,c=this.tags[this.tags.length-1];if(this.isSpeedy){var d=function(a){if(a.sheet)return a.sheet;for(var b=0;b<document.styleSheets.length;b++)if(document.styleSheets[b].ownerNode===a)return document.styleSheets[b]}(c);try{d.insertRule(a,d.cssRules.length)}catch(a){}}else c.appendChild(document.createTextNode(a));this.ctr++},b.flush=function(){this.tags.forEach(function(a){var b;return null==(b=a.parentNode)?void 0:b.removeChild(a)}),this.tags=[],this.ctr=0},a}(),h=Math.abs,i=String.fromCharCode,j=Object.assign;function k(a,b,c){return a.replace(b,c)}function l(a,b){return a.indexOf(b)}function m(a,b){return 0|a.charCodeAt(b)}function n(a,b,c){return a.slice(b,c)}function o(a){return a.length}function p(a,b){return b.push(a),a}var q=1,r=1,s=0,t=0,u=0,v="";function w(a,b,c,d,e,f,g){return{value:a,root:b,parent:c,type:d,props:e,children:f,line:q,column:r,length:g,return:""}}function x(a,b){return j(w("",null,null,"",null,null,0),a,{length:-a.length},b)}function y(){return u=t<s?m(v,t++):0,r++,10===u&&(r=1,q++),u}function z(){return m(v,t)}function A(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(a){return q=r=1,s=o(v=a),t=0,[]}function C(a){var b,c;return(b=t-1,c=function a(b){for(;y();)switch(u){case b:return t;case 34:case 39:34!==b&&39!==b&&a(u);break;case 40:41===b&&a(b);break;case 92:y()}return t}(91===a?a+2:40===a?a+1:a),n(v,b,c)).trim()}var D="-ms-",E="-moz-",F="-webkit-",G="comm",H="rule",I="decl",J="@keyframes";function K(a,b){for(var c="",d=a.length,e=0;e<d;e++)c+=b(a[e],e,a,b)||"";return c}function L(a,b,c,d){switch(a.type){case"@layer":if(a.children.length)break;case"@import":case I:return a.return=a.return||a.value;case G:return"";case J:return a.return=a.value+"{"+K(a.children,d)+"}";case H:a.value=a.props.join(",")}return o(c=K(a.children,d))?a.return=a.value+"{"+c+"}":""}function M(a){var b=a.length;return function(c,d,e,f){for(var g="",h=0;h<b;h++)g+=a[h](c,d,e,f)||"";return g}}function N(a){var b;return b=function a(b,c,d,e,f,g,h,j,s){for(var x,B=0,D=0,E=h,F=0,H=0,I=0,J=1,K=1,L=1,M=0,N="",Q=f,R=g,S=e,T=N;K;)switch(I=M,M=y()){case 40:if(108!=I&&58==m(T,E-1)){-1!=l(T+=k(C(M),"&","&\f"),"&\f")&&(L=-1);break}case 34:case 39:case 91:T+=C(M);break;case 9:case 10:case 13:case 32:T+=function(a){for(;u=z();)if(u<33)y();else break;return A(a)>2||A(u)>3?"":" "}(I);break;case 92:T+=function(a,b){for(var c;--b&&y()&&!(u<48)&&!(u>102)&&(!(u>57)||!(u<65))&&(!(u>70)||!(u<97)););return c=t+(b<6&&32==z()&&32==y()),n(v,a,c)}(t-1,7);continue;case 47:switch(z()){case 42:case 47:p((x=function(a,b){for(;y();)if(a+u===57)break;else if(a+u===84&&47===z())break;return"/*"+n(v,b,t-1)+"*"+i(47===a?a:y())}(y(),t),w(x,c,d,G,i(u),n(x,2,-2),0)),s);break;default:T+="/"}break;case 123*J:j[B++]=o(T)*L;case 125*J:case 59:case 0:switch(M){case 0:case 125:K=0;case 59+D:-1==L&&(T=k(T,/\f/g,"")),H>0&&o(T)-E&&p(H>32?P(T+";",e,d,E-1):P(k(T," ","")+";",e,d,E-2),s);break;case 59:T+=";";default:if(p(S=O(T,c,d,B,D,f,j,N,Q=[],R=[],E),g),123===M)if(0===D)a(T,c,S,S,Q,g,E,j,R);else switch(99===F&&110===m(T,3)?100:F){case 100:case 108:case 109:case 115:a(b,S,S,e&&p(O(b,S,S,0,0,f,j,N,f,Q=[],E),R),f,R,E,j,e?Q:R);break;default:a(T,S,S,S,[""],R,0,j,R)}}B=D=H=0,J=L=1,N=T="",E=h;break;case 58:E=1+o(T),H=I;default:if(J<1){if(123==M)--J;else if(125==M&&0==J++&&125==(u=t>0?m(v,--t):0,r--,10===u&&(r=1,q--),u))continue}switch(T+=i(M),M*J){case 38:L=D>0?1:(T+="\f",-1);break;case 44:j[B++]=(o(T)-1)*L,L=1;break;case 64:45===z()&&(T+=C(y())),F=z(),D=E=o(N=T+=function(a){for(;!A(z());)y();return n(v,a,t)}(t)),M++;break;case 45:45===I&&2==o(T)&&(J=0)}}return g}("",null,null,null,[""],a=B(a),0,[0],a),v="",b}function O(a,b,c,d,e,f,g,i,j,l,m){for(var o=e-1,p=0===e?f:[""],q=p.length,r=0,s=0,t=0;r<d;++r)for(var u=0,v=n(a,o+1,o=h(s=g[r])),x=a;u<q;++u)(x=(s>0?p[u]+" "+v:k(v,/&\f/g,p[u])).trim())&&(j[t++]=x);return w(a,b,c,0===e?H:i,j,l,m)}function P(a,b,c,d){return w(a,b,c,I,n(a,0,d),n(a,d+1,-1),d)}function Q(a){var b=Object.create(null);return function(c){return void 0===b[c]&&(b[c]=a(c)),b[c]}}var R="u">typeof document,S=function(a,b,c){for(var d=0,e=0;d=e,e=z(),38===d&&12===e&&(b[c]=1),!A(e);)y();return n(v,a,t)},T=function(a,b){var c=-1,d=44;do switch(A(d)){case 0:38===d&&12===z()&&(b[c]=1),a[c]+=S(t-1,b,c);break;case 2:a[c]+=C(d);break;case 4:if(44===d){a[++c]=58===z()?"&\f":"",b[c]=a[c].length;break}default:a[c]+=i(d)}while(d=y())return a},U=function(a,b){var c;return c=T(B(a),b),v="",c},V=new WeakMap,W=function(a){if("rule"===a.type&&a.parent&&!(a.length<1)){for(var b=a.value,c=a.parent,d=a.column===c.column&&a.line===c.line;"rule"!==c.type;)if(!(c=c.parent))return;if((1!==a.props.length||58===b.charCodeAt(0)||V.get(c))&&!d){V.set(a,!0);for(var e=[],f=U(b,e),g=c.props,h=0,i=0;h<f.length;h++)for(var j=0;j<g.length;j++,i++)a.props[i]=e[h]?f[h].replace(/&\f/g,g[j]):g[j]+" "+f[h]}}},X=function(a){if("decl"===a.type){var b=a.value;108===b.charCodeAt(0)&&98===b.charCodeAt(2)&&(a.return="",a.value="")}},Y=R?void 0:(b=function(){return Q(function(){var a={};return function(b){return a[b]}})},c=new WeakMap,function(a){if(c.has(a))return c.get(a);var d=b(a);return c.set(a,d),d}),Z=[function(a,b,c,d){if(a.length>-1&&!a.return)switch(a.type){case I:a.return=function a(b,c){switch(45^m(b,0)?(((c<<2^m(b,0))<<2^m(b,1))<<2^m(b,2))<<2^m(b,3):0){case 5103:return F+"print-"+b+b;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+b+b;case 5349:case 4246:case 4810:case 6968:case 2756:return F+b+E+b+D+b+b;case 6828:case 4268:return F+b+D+b+b;case 6165:return F+b+D+"flex-"+b+b;case 5187:return F+b+k(b,/(\w+).+(:[^]+)/,F+"box-$1$2"+D+"flex-$1$2")+b;case 5443:return F+b+D+"flex-item-"+k(b,/flex-|-self/,"")+b;case 4675:return F+b+D+"flex-line-pack"+k(b,/align-content|flex-|-self/,"")+b;case 5548:return F+b+D+k(b,"shrink","negative")+b;case 5292:return F+b+D+k(b,"basis","preferred-size")+b;case 6060:return F+"box-"+k(b,"-grow","")+F+b+D+k(b,"grow","positive")+b;case 4554:return F+k(b,/([^-])(transform)/g,"$1"+F+"$2")+b;case 6187:return k(k(k(b,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),b,"")+b;case 5495:case 3959:return k(b,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return k(k(b,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+b+b;case 4095:case 3583:case 4068:case 2532:return k(b,/(.+)-inline(.+)/,F+"$1$2")+b;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(o(b)-1-c>6)switch(m(b,c+1)){case 109:if(45!==m(b,c+4))break;case 102:return k(b,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+E+(108==m(b,c+3)?"$3":"$2-$3"))+b;case 115:return~l(b,"stretch")?a(k(b,"stretch","fill-available"),c)+b:b}break;case 4949:if(115!==m(b,c+1))break;case 6444:switch(m(b,o(b)-3-(~l(b,"!important")&&10))){case 107:return k(b,":",":"+F)+b;case 101:return k(b,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(45===m(b,14)?"inline-":"")+"box$3$1"+F+"$2$3$1"+D+"$2box$3")+b}break;case 5936:switch(m(b,c+11)){case 114:return F+b+D+k(b,/[svh]\w+-[tblr]{2}/,"tb")+b;case 108:return F+b+D+k(b,/[svh]\w+-[tblr]{2}/,"tb-rl")+b;case 45:return F+b+D+k(b,/[svh]\w+-[tblr]{2}/,"lr")+b}return F+b+D+b+b}return b}(a.value,a.length);break;case J:return K([x(a,{value:k(a.value,"@","@"+F)})],d);case H:if(a.length){var e,f;return e=a.props,f=function(b){var c;switch(c=b,(c=/(::plac\w+|:read-\w+)/.exec(c))?c[0]:c){case":read-only":case":read-write":return K([x(a,{props:[k(b,/:(read-\w+)/,":"+E+"$1")]})],d);case"::placeholder":return K([x(a,{props:[k(b,/:(plac\w+)/,":"+F+"input-$1")]}),x(a,{props:[k(b,/:(plac\w+)/,":"+E+"$1")]}),x(a,{props:[k(b,/:(plac\w+)/,D+"input-$1")]})],d)}return""},e.map(f).join("")}}}],$=function(a){var b=a.key;if(R&&"css"===b){var c=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(c,function(a){-1!==a.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(a),a.setAttribute("data-s",""))})}var d=a.stylisPlugins||Z,e={},f=[];R&&(j=a.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+b+' "]'),function(a){for(var b=a.getAttribute("data-emotion").split(" "),c=1;c<b.length;c++)e[b[c]]=!0;f.push(a)}));var h=[W,X];if(R){var i,j,k,l,m=[L,(i=function(a){l.insert(a)},function(a){!a.root&&(a=a.return)&&i(a)})],n=M(h.concat(d,m));k=function(a,b,c,d){l=c,K(N(a?a+"{"+b.styles+"}":b.styles),n),d&&(r.inserted[b.name]=!0)}}else{var o=M(h.concat(d,[L])),p=Y(d)(b),q=function(a,b){var c=b.name;return void 0===p[c]&&(p[c]=K(N(a?a+"{"+b.styles+"}":b.styles),o)),p[c]};k=function(a,b,c,d){var e=b.name,f=q(a,b);return void 0===r.compat?(d&&(r.inserted[e]=!0),f):d?void(r.inserted[e]=f):f}}var r={key:b,sheet:new g({key:b,container:j,nonce:a.nonce,speedy:a.speedy,prepend:a.prepend,insertionPoint:a.insertionPoint}),nonce:a.nonce,inserted:e,registered:{},insert:k};return r.sheet.hydrate(f),r};a.i(32344);var _="u">typeof document;function aa(a,b,c){var d="";return c.split(" ").forEach(function(c){void 0!==a[c]?b.push(a[c]+";"):c&&(d+=c+" ")}),d}var ab=function(a,b,c){var d=a.key+"-"+b.name;(!1===c||!1===_&&void 0!==a.compat)&&void 0===a.registered[d]&&(a.registered[d]=b.styles)},ac=function(a,b,c){ab(a,b,c);var d=a.key+"-"+b.name;if(void 0===a.inserted[b.name]){var e="",f=b;do{var g=a.insert(b===f?"."+d:"",f,a.sheet,!0);_||void 0===g||(e+=g),f=f.next}while(void 0!==f)if(!_&&0!==e.length)return e}},ad={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ae=/[A-Z]|^ms/g,af=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ag=function(a){return 45===a.charCodeAt(1)},ah=function(a){return null!=a&&"boolean"!=typeof a},ai=Q(function(a){return ag(a)?a:a.replace(ae,"-$&").toLowerCase()}),aj=function(a,b){switch(a){case"animation":case"animationName":if("string"==typeof b)return b.replace(af,function(a,b,c){return d={name:b,styles:c,next:d},b})}return 1===ad[a]||ag(a)||"number"!=typeof b||0===b?b:b+"px"};function ak(a,b,c){if(null==c)return"";if(void 0!==c.__emotion_styles)return c;switch(typeof c){case"boolean":return"";case"object":if(1===c.anim)return d={name:c.name,styles:c.styles,next:d},c.name;if(void 0!==c.styles){var e=c.next;if(void 0!==e)for(;void 0!==e;)d={name:e.name,styles:e.styles,next:d},e=e.next;return c.styles+";"}return function(a,b,c){var d="";if(Array.isArray(c))for(var e=0;e<c.length;e++)d+=ak(a,b,c[e])+";";else for(var f in c){var g=c[f];if("object"!=typeof g)null!=b&&void 0!==b[g]?d+=f+"{"+b[g]+"}":ah(g)&&(d+=ai(f)+":"+aj(f,g)+";");else if(Array.isArray(g)&&"string"==typeof g[0]&&(null==b||void 0===b[g[0]]))for(var h=0;h<g.length;h++)ah(g[h])&&(d+=ai(f)+":"+aj(f,g[h])+";");else{var i=ak(a,b,g);switch(f){case"animation":case"animationName":d+=ai(f)+":"+i+";";break;default:d+=f+"{"+i+"}"}}}return d}(a,b,c);case"function":if(void 0!==a){var f=d,g=c(a);return d=f,ak(a,b,g)}}if(null==b)return c;var h=b[c];return void 0!==h?h:c}var al=/label:\s*([^\s;{]+)\s*(;|$)/g;function am(a,b,c){if(1===a.length&&"object"==typeof a[0]&&null!==a[0]&&void 0!==a[0].styles)return a[0];var e,f=!0,g="";d=void 0;var h=a[0];null==h||void 0===h.raw?(f=!1,g+=ak(c,b,h)):g+=h[0];for(var i=1;i<a.length;i++)g+=ak(c,b,a[i]),f&&(g+=h[i]);al.lastIndex=0;for(var j="";null!==(e=al.exec(g));)j+="-"+e[1];return{name:function(a){for(var b,c=0,d=0,e=a.length;e>=4;++d,e-=4)b=(65535&(b=255&a.charCodeAt(d)|(255&a.charCodeAt(++d))<<8|(255&a.charCodeAt(++d))<<16|(255&a.charCodeAt(++d))<<24))*0x5bd1e995+((b>>>16)*59797<<16),b^=b>>>24,c=(65535&b)*0x5bd1e995+((b>>>16)*59797<<16)^(65535&c)*0x5bd1e995+((c>>>16)*59797<<16);switch(e){case 3:c^=(255&a.charCodeAt(d+2))<<16;case 2:c^=(255&a.charCodeAt(d+1))<<8;case 1:c^=255&a.charCodeAt(d),c=(65535&c)*0x5bd1e995+((c>>>16)*59797<<16)}return c^=c>>>13,(((c=(65535&c)*0x5bd1e995+((c>>>16)*59797<<16))^c>>>15)>>>0).toString(36)}(g)+j,styles:g,next:d}}var an="u">typeof document,ao=!!f.useInsertionEffect&&f.useInsertionEffect,ap=an&&ao||function(a){return a()};ao||f.useLayoutEffect;var aq="u">typeof document,ar=f.createContext("u">typeof HTMLElement?$({key:"css"}):null);ar.Provider;var as=function(a){return(0,f.forwardRef)(function(b,c){return a(b,(0,f.useContext)(ar),c)})};aq||(as=function(a){return function(b){var c=(0,f.useContext)(ar);return null===c?(c=$({key:"css"}),f.createElement(ar.Provider,{value:c},a(b,c))):a(b,c)}});var at=f.createContext({}),au={}.hasOwnProperty,av="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",aw=function(a,b){var c={};for(var d in b)au.call(b,d)&&(c[d]=b[d]);return c[av]=a,c},ax=function(a){var b=a.cache,c=a.serialized,d=a.isStringTag;ab(b,c,d);var e=ap(function(){return ac(b,c,d)});if(!aq&&void 0!==e){for(var g,h=c.name,i=c.next;void 0!==i;)h+=" "+i.name,i=i.next;return f.createElement("style",((g={})["data-emotion"]=b.key+" "+h,g.dangerouslySetInnerHTML={__html:e},g.nonce=b.sheet.nonce,g))}return null},ay=as(function(a,b,c){var d=a.css;"string"==typeof d&&void 0!==b.registered[d]&&(d=b.registered[d]);var e=a[av],g=[d],h="";"string"==typeof a.className?h=aa(b.registered,g,a.className):null!=a.className&&(h=a.className+" ");var i=am(g,void 0,f.useContext(at));h+=b.key+"-"+i.name;var j={};for(var k in a)au.call(a,k)&&"css"!==k&&k!==av&&(j[k]=a[k]);return j.className=h,c&&(j.ref=c),f.createElement(f.Fragment,null,f.createElement(ax,{cache:b,serialized:i,isStringTag:"string"==typeof e}),f.createElement(e,j))});a.i(77518);var az=e.Fragment;function aA(a,b,c){return au.call(b,"css")?e.jsx(ay,aw(a,b),c):e.jsx(a,b,c)}function aB(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return am(b)}var aC=function(){var a=aB.apply(void 0,arguments),b="animation-"+a.name;return{name:b,styles:"@keyframes "+b+"{"+a.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},aD=function a(b){for(var c=b.length,d=0,e="";d<c;d++){var f=b[d];if(null!=f){var g=void 0;switch(typeof f){case"boolean":break;case"object":if(Array.isArray(f))g=a(f);else for(var h in g="",f)f[h]&&h&&(g&&(g+=" "),g+=h);break;default:g=f}g&&(e&&(e+=" "),e+=g)}}return e},aE=function(a){var b,c=a.cache,d=a.serializedArr,e=ap(function(){for(var a="",b=0;b<d.length;b++){var e=ac(c,d[b],!1);aq||void 0===e||(a+=e)}if(!aq)return a});return aq||0===e.length?null:f.createElement("style",((b={})["data-emotion"]=c.key+" "+d.map(function(a){return a.name}).join(" "),b.dangerouslySetInnerHTML={__html:e},b.nonce=c.sheet.nonce,b))},aF=as(function(a,b){var c=!1,d=[],e=function(){for(var a=arguments.length,c=Array(a),e=0;e<a;e++)c[e]=arguments[e];var f=am(c,b.registered);return d.push(f),ab(b,f,!1),b.key+"-"+f.name},g={css:e,cx:function(){for(var a,c,d,f,g=arguments.length,h=Array(g),i=0;i<g;i++)h[i]=arguments[i];return a=b.registered,f=aa(a,d=[],c=aD(h)),d.length<2?c:f+e(d)},theme:f.useContext(at)},h=a.children(g);return c=!0,f.createElement(f.Fragment,null,f.createElement(aE,{cache:b,serializedArr:d}),h)}),aG=a.i(61832),aH=a.i(13225);aC`
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
`,aC`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`;let aI=aC`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,aJ=aC`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aK=aC`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aL=aC`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aM=aC`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aN=aC`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aO=aC`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aP=aC`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aQ=aC`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aR=aC`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aS=aC`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aT=aC`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aU=aC`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function aV(a){var b;return b=()=>null,c=>c?a():b()}function aW(a){return aV(()=>({opacity:0}))(a)}let aX=a=>{let{cascade:b=!1,damping:c=.5,delay:d=0,duration:e=1e3,fraction:g=0,keyframes:h=aN,triggerOnce:i=!1,className:j,style:k,childClassName:l,childStyle:m,children:n,onVisibilityChange:o}=a,p=(0,f.useMemo)(()=>(function({duration:a=1e3,delay:b=0,timingFunction:c="ease",keyframes:d=aN,iterationCount:e=1}){return aB`
    animation-duration: ${a}ms;
    animation-timing-function: ${c};
    animation-delay: ${b}ms;
    animation-name: ${d};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${e};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:h,duration:e}),[e,h]);return void 0==n?null:"string"==typeof n||"number"==typeof n||"boolean"==typeof n?aA(aZ,{...a,animationStyles:p,children:String(n)}):(0,aH.isFragment)(n)?aA(a$,{...a,animationStyles:p}):aA(az,{children:f.Children.map(n,(h,n)=>{if(!(0,f.isValidElement)(h))return null;let q=d+(b?n*e*c:0);switch(h.type){case"ol":case"ul":return aA(aF,{children:({cx:b})=>aA(h.type,{...h.props,className:b(j,h.props.className),style:Object.assign({},k,h.props.style),children:aA(aX,{...a,children:h.props.children})})});case"li":return aA(aG.InView,{threshold:g,triggerOnce:i,onChange:o,children:({inView:a,ref:b})=>aA(aF,{children:({cx:c})=>aA(h.type,{...h.props,ref:b,className:c(l,h.props.className),css:aV(()=>p)(a),style:Object.assign({},m,h.props.style,aW(!a),{animationDelay:q+"ms"})})})});default:return aA(aG.InView,{threshold:g,triggerOnce:i,onChange:o,children:({inView:a,ref:b})=>aA("div",{ref:b,className:j,css:aV(()=>p)(a),style:Object.assign({},k,aW(!a),{animationDelay:q+"ms"}),children:aA(aF,{children:({cx:a})=>aA(h.type,{...h.props,className:a(l,h.props.className),style:Object.assign({},m,h.props.style)})})})})}})})},aY={display:"inline-block",whiteSpace:"pre"},aZ=a=>{var b,c;let{animationStyles:d,cascade:e=!1,damping:f=.5,delay:g=0,duration:h=1e3,fraction:i=0,triggerOnce:j=!1,className:k,style:l,children:m,onVisibilityChange:n}=a,{ref:o,inView:p}=(0,aG.useInView)({triggerOnce:j,threshold:i,onChange:n});return(b=()=>aA("div",{ref:o,className:k,style:Object.assign({},l,aY),children:m.split("").map((a,b)=>aA("span",{css:aV(()=>d)(p),style:{animationDelay:g+b*h*f+"ms"},children:a},b))}),c=()=>aA(a$,{...a,children:m}),a=>a?b():c())(e)},a$=a=>{let{animationStyles:b,fraction:c=0,triggerOnce:d=!1,className:e,style:f,children:g,onVisibilityChange:h}=a,{ref:i,inView:j}=(0,aG.useInView)({triggerOnce:d,threshold:c,onChange:h});return aA("div",{ref:i,className:e,css:aV(()=>b)(j),style:Object.assign({},f,aW(!j)),children:g})};aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,aC`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,aC`
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
`;let a_=aC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,a0=aC`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,a1=aC`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,a2=aC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,a3=aC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,a4=aC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,a5=aC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,a6=aC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,a7=aC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,a8=aC`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,a9=aC`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ba=aC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,bb=aC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,bc=a=>{let{big:b=!1,direction:c,reverse:d=!1,...e}=a;return aA(aX,{keyframes:(0,f.useMemo)(()=>(function(a,b,c){switch(c){case"bottom-left":return b?a0:aJ;case"bottom-right":return b?a1:aK;case"down":return a?b?a3:aM:b?a2:aL;case"left":return a?b?a5:aO:b?a4:aN;case"right":return a?b?a7:aQ:b?a6:aP;case"top-left":return b?a8:aR;case"top-right":return b?a9:aS;case"up":return a?b?bb:aU:b?ba:aT;default:return b?a_:aI}})(b,d,c),[b,c,d]),...e})};aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,aC`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,aC`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,aC`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,aC`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,aC`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,aC`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,aC`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,aC`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,aC`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,aC`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,aC`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,aC`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,aC`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,aC`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,aC`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,aC`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,aC`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,aC`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,aC`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
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
`,aC`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,aC`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,aC`
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
`,a.s(["Fade",()=>bc],7543)},69325,61832,a=>{"use strict";var b=a.i(72131),c=b,d=Object.defineProperty,e=(a,b,c)=>{let e;return(e="symbol"!=typeof b?b+"":b)in a?d(a,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[e]=c},f=new Map,g=new WeakMap,h=0,i=void 0;function j(a,b,c={},d=i){if(void 0===window.IntersectionObserver&&void 0!==d){let e=a.getBoundingClientRect();return b(d,{isIntersecting:d,target:a,intersectionRatio:"number"==typeof c.threshold?c.threshold:0,time:0,boundingClientRect:e,intersectionRect:e,rootBounds:e}),()=>{}}let{id:e,observer:k,elements:l}=function(a){let b=Object.keys(a).sort().filter(b=>void 0!==a[b]).map(b=>{var c;return`${b}_${"root"===b?!(c=a.root)?"0":(g.has(c)||(h+=1,g.set(c,h.toString())),g.get(c)):a[b]}`}).toString(),c=f.get(b);if(!c){let d,e=new Map,g=new IntersectionObserver(b=>{b.forEach(b=>{var c;let f=b.isIntersecting&&d.some(a=>b.intersectionRatio>=a);a.trackVisibility&&void 0===b.isVisible&&(b.isVisible=f),null==(c=e.get(b.target))||c.forEach(a=>{a(f,b)})})},a);d=g.thresholds||(Array.isArray(a.threshold)?a.threshold:[a.threshold||0]),c={id:b,observer:g,elements:e},f.set(b,c)}return c}(c),m=l.get(a)||[];return l.has(a)||l.set(a,m),m.push(b),k.observe(a),function(){m.splice(m.indexOf(b),1),0===m.length&&(l.delete(a),k.unobserve(a)),0===l.size&&(k.disconnect(),f.delete(e))}}var k=class extends c.Component{constructor(a){super(a),e(this,"node",null),e(this,"_unobserveCb",null),e(this,"handleNode",a=>{this.node&&(this.unobserve(),a||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=a||null,this.observeNode()}),e(this,"handleChange",(a,b)=>{a&&this.props.triggerOnce&&this.unobserve(),"function"==typeof this.props.children&&this.setState({inView:a,entry:b}),this.props.onChange&&this.props.onChange(a,b)}),this.state={inView:!!a.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(a){(a.rootMargin!==this.props.rootMargin||a.root!==this.props.root||a.threshold!==this.props.threshold||a.skip!==this.props.skip||a.trackVisibility!==this.props.trackVisibility||a.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:a,root:b,rootMargin:c,trackVisibility:d,delay:e,fallbackInView:f}=this.props;this._unobserveCb=j(this.node,this.handleChange,{threshold:a,root:b,rootMargin:c,trackVisibility:d,delay:e},f)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:a}=this.props;if("function"==typeof a){let{inView:b,entry:c}=this.state;return a({inView:b,entry:c,ref:this.handleNode})}let{as:b,triggerOnce:d,threshold:e,root:f,rootMargin:g,onChange:h,skip:i,trackVisibility:j,delay:k,initialInView:l,fallbackInView:m,...n}=this.props;return c.createElement(b||"div",{ref:this.handleNode,...n},a)}};function l({threshold:a,delay:b,trackVisibility:d,rootMargin:e,root:f,triggerOnce:g,skip:h,initialInView:i,fallbackInView:k,onChange:m}={}){var n;let[o,p]=c.useState(null),q=c.useRef(),[r,s]=c.useState({inView:!!i,entry:void 0});q.current=m,c.useEffect(()=>{let c;if(!h&&o)return c=j(o,(a,b)=>{s({inView:a,entry:b}),q.current&&q.current(a,b),b.isIntersecting&&g&&c&&(c(),c=void 0)},{root:f,rootMargin:e,threshold:a,trackVisibility:d,delay:b},k),()=>{c&&c()}},[Array.isArray(a)?a.toString():a,o,f,e,g,h,d,k,b]);let t=null==(n=r.entry)?void 0:n.target,u=c.useRef();o||!t||g||h||u.current===t||(u.current=t,s({inView:!!i,entry:void 0}));let v=[p,r.inView,r.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}a.s(["InView",()=>k,"useInView",()=>l],61832);var m=a.i(56044);function n(a,c=.75){let{ref:d,inView:e}=l({threshold:c}),{setActiveSection:f,timeOfLastClick:g}=(0,m.useActiveSectionContext)();return(0,b.useEffect)(()=>{e&&Date.now()-g>1e3&&f(a)},[e,f,g,a]),{ref:d}}a.s(["useSectionInView",()=>n],69325)},56324,a=>{"use strict";var b=a.i(87924),c=a.i(46271),d=a.i(7543),e=a.i(69325);function f(){let{ref:a}=(0,e.useSectionInView)("#home",.5);return(0,b.jsx)("section",{id:"home",ref:a,className:"mb-28 max-w-[75rem] mx-auto scroll-mt-20 px-4",children:(0,b.jsxs)(c.motion.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:120,damping:20},className:" relative rounded-3xl border border-teal-300/40 bg-gradient-to-br from-teal-100/60 via-sky-200/40 to-violet-200/30 backdrop-blur-xl backdrop-saturate-150 shadow-[0_30px_90px_rgba(56,189,248,0.35)] px-10 py-14 text-center ",children:[(0,b.jsx)("div",{className:" pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/70 to-transparent opacity-25 "}),(0,b.jsx)(d.Fade,{direction:"up",delay:300,cascade:!0,damping:.1,triggerOnce:!0,children:(0,b.jsxs)("h1",{className:"relative z-10 mb-8",children:[(0,b.jsx)("span",{className:" block text-4xl sm:text-5xl font-playfair font-bold tracking-tight text-slate-900 ",children:(0,b.jsx)("span",{className:"relative inline-block",children:(0,b.jsx)("span",{className:"relative",children:"Nouman Hafeez"})})}),(0,b.jsx)("p",{className:" mt-8 max-w-3xl mx-auto text-[17px] font-inter font-medium text-slate-800 leading-relaxed ",children:"Hello! Glad to see you here. This is a collection of my personal projects created during my MS studies, combining what I learned in class with my own curiosity and creativity."})]})})]})})}a.s(["default",()=>f])},33354,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},4987,(a,b,c)=>{"use strict";function d({widthInt:a,heightInt:b,blurWidth:c,blurHeight:d,blurDataURL:e,objectFit:f}){let g=c?40*c:a,h=d?40*d:b,i=g&&h?`viewBox='0 0 ${g} ${h}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${i}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${i?"none":"contain"===f?"xMidYMid":"cover"===f?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${e}'/%3E%3C/svg%3E`}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImageBlurSvg",{enumerable:!0,get:function(){return d}})},345,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={VALID_LOADERS:function(){return f},imageConfigDefault:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=["default","imgix","cloudinary","akamai","custom"],g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},94915,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImgProps",{enumerable:!0,get:function(){return j}}),a.r(92434);let d=a.r(68063),e=a.r(4987),f=a.r(345),g=["-moz-initial","fill","none","scale-down",void 0];function h(a){return void 0!==a.default}function i(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function j({src:a,sizes:b,unoptimized:c=!1,priority:j=!1,preload:k=!1,loading:l,className:m,quality:n,width:o,height:p,fill:q=!1,style:r,overrideSrc:s,onLoad:t,onLoadingComplete:u,placeholder:v="empty",blurDataURL:w,fetchPriority:x,decoding:y="async",layout:z,objectFit:A,objectPosition:B,lazyBoundary:C,lazyRoot:D,...E},F){var G;let H,I,J,{imgConf:K,showAltText:L,blurComplete:M,defaultLoader:N}=F,O=K||f.imageConfigDefault;if("allSizes"in O)H=O;else{let a=[...O.deviceSizes,...O.imageSizes].sort((a,b)=>a-b),b=O.deviceSizes.sort((a,b)=>a-b),c=O.qualities?.sort((a,b)=>a-b);H={...O,allSizes:a,deviceSizes:b,qualities:c}}if(void 0===N)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let P=E.loader||N;delete E.loader,delete E.srcSet;let Q="__next_img_default"in P;if(Q){if("custom"===H.loader)throw Object.defineProperty(Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let a=P;P=b=>{let{config:c,...d}=b;return a(d)}}if(z){"fill"===z&&(q=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];a&&(r={...r,...a});let c={responsive:"100vw",fill:"100vw"}[z];c&&!b&&(b=c)}let R="",S=i(o),T=i(p);if((G=a)&&"object"==typeof G&&(h(G)||void 0!==G.src)){let b=h(a)?a.default:a;if(!b.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!b.height||!b.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(I=b.blurWidth,J=b.blurHeight,w=w||b.blurDataURL,R=b.src,!q)if(S||T){if(S&&!T){let a=S/b.width;T=Math.round(b.height*a)}else if(!S&&T){let a=T/b.height;S=Math.round(b.width*a)}}else S=b.width,T=b.height}let U=!j&&!k&&("lazy"===l||void 0===l);(!(a="string"==typeof a?a:R)||a.startsWith("data:")||a.startsWith("blob:"))&&(c=!0,U=!1),H.unoptimized&&(c=!0),Q&&!H.dangerouslyAllowSVG&&a.split("?",1)[0].endsWith(".svg")&&(c=!0);let V=i(n),W=Object.assign(q?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:B}:{},L?{}:{color:"transparent"},r),X=M||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,e.getImageBlurSvg)({widthInt:S,heightInt:T,blurWidth:I,blurHeight:J,blurDataURL:w||"",objectFit:W.objectFit})}")`:`url("${v}")`,Y=g.includes(W.objectFit)?"fill"===W.objectFit?"100% 100%":"cover":W.objectFit,Z=X?{backgroundSize:Y,backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},$=function({config:a,src:b,unoptimized:c,width:e,quality:f,sizes:g,loader:h}){if(c){let a=(0,d.getDeploymentId)();if(b.startsWith("/")&&!b.startsWith("//")&&a){let c=b.includes("?")?"&":"?";b=`${b}${c}dpl=${a}`}return{src:b,srcSet:void 0,sizes:void 0}}let{widths:i,kind:j}=function({deviceSizes:a,allSizes:b},c,d){if(d){let c=/(^|\s)(1?\d?\d)vw/g,e=[];for(let a;a=c.exec(d);)e.push(parseInt(a[2]));if(e.length){let c=.01*Math.min(...e);return{widths:b.filter(b=>b>=a[0]*c),kind:"w"}}return{widths:b,kind:"w"}}return"number"!=typeof c?{widths:a,kind:"w"}:{widths:[...new Set([c,2*c].map(a=>b.find(b=>b>=a)||b[b.length-1]))],kind:"x"}}(a,e,g),k=i.length-1;return{sizes:g||"w"!==j?g:"100vw",srcSet:i.map((c,d)=>`${h({config:a,src:b,quality:f,width:c})} ${"w"===j?c:d+1}${j}`).join(", "),src:h({config:a,src:b,quality:f,width:i[k]})}}({config:H,src:a,unoptimized:c,width:S,quality:V,sizes:b,loader:P}),_=U?"lazy":l;return{props:{...E,loading:_,fetchPriority:x,width:S,height:T,decoding:y,className:m,style:{...W,...Z},sizes:$.sizes,srcSet:$.srcSet,src:s||$.src},meta:{unoptimized:c,preload:k||j,placeholder:v,fill:q}}}},94613,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return f}});let d=a.r(72131),e=()=>{};function f(a){let{headManager:b,reduceComponentsToState:c}=a;function f(){if(b&&b.mountedInstances){let a=d.Children.toArray(Array.from(b.mountedInstances).filter(Boolean));b.updateHead(c(a))}}return b?.mountedInstances?.add(a.children),f(),e(()=>(b?.mountedInstances?.add(a.children),()=>{b?.mountedInstances?.delete(a.children)})),e(()=>(b&&(b._pendingUpdate=f),()=>{b&&(b._pendingUpdate=f)})),null}},92966,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.HeadManagerContext},58018,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return p},defaultHead:function(){return l}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(46058),h=a.r(87924),i=g._(a.r(72131)),j=f._(a.r(94613)),k=a.r(92966);function l(){return[(0,h.jsx)("meta",{charSet:"utf-8"},"charset"),(0,h.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===i.default.Fragment?a.concat(i.default.Children.toArray(b.props.children).reduce((a,b)=>"string"==typeof b||"number"==typeof b?a:a.concat(b),[])):a.concat(b)}a.r(92434);let n=["name","httpEquiv","charSet","itemProp"];function o(a){let b,c,d,e;return a.reduce(m,[]).reverse().concat(l().reverse()).filter((b=new Set,c=new Set,d=new Set,e={},a=>{let f=!0,g=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){g=!0;let c=a.key.slice(a.key.indexOf("$")+1);b.has(c)?f=!1:b.add(c)}switch(a.type){case"title":case"base":c.has(a.type)?f=!1:c.add(a.type);break;case"meta":for(let b=0,c=n.length;b<c;b++){let c=n[b];if(a.props.hasOwnProperty(c))if("charSet"===c)d.has(c)?f=!1:d.add(c);else{let b=a.props[c],d=e[c]||new Set;("name"!==c||!g)&&d.has(b)?f=!1:(d.add(b),e[c]=d)}}}return f})).reverse().map((a,b)=>{let c=a.key||b;return i.default.cloneElement(a,{key:c})})}let p=function({children:a}){let b=(0,i.useContext)(k.HeadManagerContext);return(0,h.jsx)(j.default,{reduceComponentsToState:o,headManager:b,children:a})};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},4486,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.ImageConfigContext},53773,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.RouterContext},35444,(a,b,c)=>{"use strict";function d(a,b){let c=a||75;return b?.qualities?.length?b.qualities.reduce((a,b)=>Math.abs(b-c)<Math.abs(a-c)?b:a,0):c}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"findClosestQuality",{enumerable:!0,get:function(){return d}})},2305,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return g}});let d=a.r(35444),e=a.r(68063);function f({config:a,src:b,width:c,quality:f}){if(b.startsWith("/")&&b.includes("?")&&a.localPatterns?.length===1&&"**"===a.localPatterns[0].pathname&&""===a.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let g=(0,d.findClosestQuality)(f,a),h=(0,e.getDeploymentId)();return`${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${g}${b.startsWith("/")&&h?`&dpl=${h}`:""}`}f.__next_img_default=!0;let g=f},67161,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"Image",{enumerable:!0,get:function(){return u}});let d=a.r(33354),e=a.r(46058),f=a.r(87924),g=e._(a.r(72131)),h=d._(a.r(35112)),i=d._(a.r(58018)),j=a.r(94915),k=a.r(345),l=a.r(4486);a.r(92434);let m=a.r(53773),n=d._(a.r(2305)),o=a.r(8591),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function q(a,b,c,d,e,f,g){let h=a?.src;a&&a["data-loaded-src"]!==h&&(a["data-loaded-src"]=h,("decode"in a?a.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(a.parentElement&&a.isConnected){if("empty"!==b&&e(!0),c?.current){let b=new Event("load");Object.defineProperty(b,"target",{writable:!1,value:a});let d=!1,e=!1;c.current({...b,nativeEvent:b,currentTarget:a,target:a,isDefaultPrevented:()=>d,isPropagationStopped:()=>e,persist:()=>{},preventDefault:()=>{d=!0,b.preventDefault()},stopPropagation:()=>{e=!0,b.stopPropagation()}})}d?.current&&d.current(a)}}))}function r(a){return g.use?{fetchPriority:a}:{fetchpriority:a}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let s=(0,g.forwardRef)(({src:a,srcSet:b,sizes:c,height:d,width:e,decoding:h,className:i,style:j,fetchPriority:k,placeholder:l,loading:m,unoptimized:n,fill:p,onLoadRef:s,onLoadingCompleteRef:t,setBlurComplete:u,setShowAltText:v,sizesInput:w,onLoad:x,onError:y,...z},A)=>{let B=(0,g.useCallback)(a=>{a&&(y&&(a.src=a.src),a.complete&&q(a,l,s,t,u,n,w))},[a,l,s,t,u,y,n,w]),C=(0,o.useMergedRef)(A,B);return(0,f.jsx)("img",{...z,...r(k),loading:m,width:e,height:d,decoding:h,"data-nimg":p?"fill":"1",className:i,style:j,sizes:c,srcSet:b,src:a,ref:C,onLoad:a=>{q(a.currentTarget,l,s,t,u,n,w)},onError:a=>{v(!0),"empty"!==l&&u(!0),y&&y(a)}})});function t({isAppRouter:a,imgAttributes:b}){let c={as:"image",imageSrcSet:b.srcSet,imageSizes:b.sizes,crossOrigin:b.crossOrigin,referrerPolicy:b.referrerPolicy,...r(b.fetchPriority)};return a&&h.default.preload?(h.default.preload(b.src,c),null):(0,f.jsx)(i.default,{children:(0,f.jsx)("link",{rel:"preload",href:b.srcSet?void 0:b.src,...c},"__nimg-"+b.src+b.srcSet+b.sizes)})}let u=(0,g.forwardRef)((a,b)=>{let c=(0,g.useContext)(m.RouterContext),d=(0,g.useContext)(l.ImageConfigContext),e=(0,g.useMemo)(()=>{let a=p||d||k.imageConfigDefault,b=[...a.deviceSizes,...a.imageSizes].sort((a,b)=>a-b),c=a.deviceSizes.sort((a,b)=>a-b),e=a.qualities?.sort((a,b)=>a-b);return{...a,allSizes:b,deviceSizes:c,qualities:e,localPatterns:d?.localPatterns}},[d]),{onLoad:h,onLoadingComplete:i}=a,o=(0,g.useRef)(h);(0,g.useEffect)(()=>{o.current=h},[h]);let q=(0,g.useRef)(i);(0,g.useEffect)(()=>{q.current=i},[i]);let[r,u]=(0,g.useState)(!1),[v,w]=(0,g.useState)(!1),{props:x,meta:y}=(0,j.getImgProps)(a,{defaultLoader:n.default,imgConf:e,blurComplete:r,showAltText:v});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{...x,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:o,onLoadingCompleteRef:q,setBlurComplete:u,setShowAltText:w,sizesInput:a.sizes,ref:b}),y.preload?(0,f.jsx)(t,{isAppRouter:!c,imgAttributes:x}):null]})});("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},33095,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(94915),h=a.r(67161),i=f._(a.r(2305));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},71987,(a,b,c)=>{b.exports=a.r(33095)},87787,a=>{"use strict";var b=a.i(87924),c=a.i(71987),d=a.i(69325),e=a.i(46271),f=a.i(7543);function g(){let{ref:a}=(0,d.useSectionInView)("#about");return(0,b.jsx)("section",{id:"about",ref:a,className:"mb-28 max-w-[75rem] mx-auto scroll-mt-20 px-4",children:(0,b.jsxs)(e.motion.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:120,damping:20},className:" relative rounded-3xl border border-teal-300/30 bg-gradient-to-br from-teal-100/40 via-sky-100/30 to-violet-100/20 backdrop-blur-xl backdrop-saturate-150 shadow-[0_30px_90px_rgba(56,189,248,0.25)] px-10 py-14 ",children:[(0,b.jsx)("div",{className:" pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/50 to-transparent opacity-25 "}),(0,b.jsxs)("div",{className:"relative z-10 text-center",children:[(0,b.jsx)(f.Fade,{direction:"up",delay:300,cascade:!0,damping:.1,triggerOnce:!0,children:(0,b.jsx)("h2",{className:"text-3xl font-bold text-slate-900",children:"About Me"})}),(0,b.jsxs)("div",{className:"grid xl:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] gap-8 mt-8 items-center",children:[(0,b.jsx)("div",{className:"flex justify-center",children:(0,b.jsx)(f.Fade,{direction:"left",delay:400,cascade:!0,damping:.1,triggerOnce:!0,children:(0,b.jsx)(c.default,{src:"/me.jpeg",alt:"About Me",width:"500",height:"200",quality:100,priority:!0,className:"rounded-3xl object-cover w-[350px] h-[480px]"})})}),(0,b.jsx)("div",{className:"text-lg text-left",children:(0,b.jsxs)(f.Fade,{direction:"up",delay:500,cascade:!0,damping:.1,triggerOnce:!0,children:[(0,b.jsxs)("p",{className:"mt-2 leading-relaxed text-slate-900 text-base",children:["I’m Nouman Hafeez, a passionate and detail-oriented software engineer currently pursuing a Master’s in Computer Science at"," ",(0,b.jsx)("strong",{children:"FAST NUCES"}),", Lahore. I have hands-on experience in machine learning, web scraping, and mobile application development. Over the years, I’ve worked on diverse projects involving Machine Learning, Scrapy, and React Native that are not only functional but also efficient and scalable."]}),(0,b.jsxs)("p",{className:"mt-4 leading-relaxed text-slate-900 text-base",children:["I thrive on exploring new technologies, solving complex challenges, and writing clean, maintainable code. Beyond academics, I’ve gained valuable industry experience through internship, including working as a"," ",(0,b.jsx)("strong",{children:"Machine Learning Intern at Arbisoft"})," and as a"," ",(0,b.jsx)("strong",{children:"Associate Software Engineer at Sortup Dev"}),". These roles have allowed me to bridge the gap between data-driven intelligence and user-friendly applications. My mission is to contribute to impactful, innovative projects while continually growing as a developer—and to make the journey as enjoyable as the destination."]}),(0,b.jsxs)("p",{className:"mt-6 text-base text-slate-900",children:["Feel free to reach out to me at"," ",(0,b.jsx)("a",{href:"mailto:noumanhafeez@email.com",className:"text-blue-600 hover:underline",children:(0,b.jsx)("strong",{children:"noumanhafeez@email.com"})})]})]})})]}),(0,b.jsx)("hr",{className:"mt-32 border-t-2 border-gray-300 w-1/2 mx-auto"})]})]})})}a.s(["default",()=>g])},39916,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(71987),e=a.i(46271);function f({title:a,description:f,imageUrl:g,link:h}){let[i,j]=(0,c.useState)(!1);return(0,b.jsx)(e.motion.div,{className:"relative rounded-lg overflow-hidden shadow-lg cursor-pointer h-64",onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),whileHover:{scale:1.03},transition:{duration:.3},children:(0,b.jsxs)("a",{href:h,target:"_blank",rel:"noopener noreferrer",children:[(0,b.jsx)(d.default,{src:g,alt:a,fill:!0,style:{objectFit:"cover"},className:"transition-transform duration-300"}),(0,b.jsxs)(e.motion.div,{initial:{opacity:0},animate:{opacity:+!!i},transition:{duration:.3},className:"absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-4",children:[(0,b.jsx)("h3",{className:"text-white text-lg font-bold",children:a}),(0,b.jsx)("p",{className:"text-white text-sm mt-2",children:f})]})]})})}let g=[{title:"Machine Learning Specialization by Andrew Ng",description:"",tags:["Certifications"],imageUrl:"/machine_learning.png",link:"https://coursera.org/share/f9bcd7be95aaf6073d4f5f798f63d523"},{title:"Deep Learning Specialization by Andrew Ng",description:"",tags:["Certifications"],imageUrl:"/Deep_learning.png",link:"https://coursera.org/share/4cdb2ab9b6238c3ac01e0b9308ee2b6d"},{title:"Google Data Analytics Professional Certificate",description:"",tags:["Certifications"],imageUrl:"/data_analytics.png",link:"https://coursera.org/share/c77a904040320faad7d8dbc4edbfe968"},{title:"Introduction to TensorFlow",description:"",tags:["Certifications"],imageUrl:"/tensorflow.png",link:"https://coursera.org/share/44d233ddf7c6bdaf2464717f78c4c83b"},{title:"Pyhton for Everybody",description:"",tags:["Certifications"],imageUrl:"/python.jpg",link:"https://example.com/climate"},{title:"Data Science Orientation",description:"",tags:["Certifications"],imageUrl:"/orientation.png",link:"https://coursera.org/share/18cb4108cf750008b5799f7dceab87e2"},{title:"Introduction to Databases",description:"",tags:["Certifications"],imageUrl:"/meta.jpg",link:"https://coursera.org/share/856512bbf239f1957d9c5cb67c5a42b5"},{title:"Introduction to TensorFlow",description:"",tags:["Certifications"],imageUrl:"/tensorflow.png",link:"https://coursera.org/share/44d233ddf7c6bdaf2464717f78c4c83b"},{title:"Data Structures and Algorithms",description:"",tags:["Certifications"],imageUrl:"/algo.png",link:"https://certificate.algoexpert.io/AE-89974bae0a"},{title:"Siameese Neural Networks with triplet loss",description:"",tags:["Coursera Projects"],imageUrl:"/coursera.png",link:"https://coursera.org/share/d76292fe26adb112d0fcb2934da7492c"},{title:"Linear Regression with multiple variables",description:"",tags:["Coursera Projects"],imageUrl:"/cor.png",link:"https://coursera.org/share/7210f28bd5966f55d4c6bb639a743a28"},{title:"Neural Network Visualizer",description:"",tags:["Coursera Projects"],imageUrl:"/coursera.png",link:"https://coursera.org/share/d4065f9510248ce941ffff73b9f85b09"},{title:"Diabetic Retinopathy Detection",description:"",tags:["Coursera Projects"],imageUrl:"/cor.png",link:"https://coursera.org/share/8cc1f74eaff2860fba79cd5bf21964fa"},{title:"Accident Visualization Using Streamlit",description:"",tags:["Coursera Projects"],imageUrl:"/coursera.png",link:"https://coursera.org/share/f6fa0cdc5277bf85cb024b7e96c8bce9"}],h=["All Categories","Certifications","Coursera Projects","Data Visualization","Data Science"];function i(){let[a,d]=(0,c.useState)("All Categories"),e="All Categories"===a?g:g.filter(b=>b.tags.some(b=>b.toLowerCase()===a.toLowerCase())),i=["Data Visualization","Data Science"].includes(a);return(0,b.jsxs)("section",{className:"flex flex-col items-center min-h-[900px] px-4 sm:px-6 max-w-[75rem] mx-auto scroll-mt-20",children:[(0,b.jsx)("div",{className:"w-full mb-8",children:(0,b.jsxs)("div",{className:" relative rounded-3xl border border-teal-300/30 bg-gradient-to-br from-teal-100/40 via-sky-100/30 to-violet-100/20 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_60px_rgba(56,189,248,0.25)] px-6 py-4 flex justify-center overflow-x-auto ",children:[(0,b.jsx)("div",{className:"flex flex-wrap sm:flex-nowrap justify-center sm:justify-between space-x-4 sm:space-x-8 font-bold text-xs sm:text-sm uppercase tracking-wide",children:h.map(c=>(0,b.jsx)("button",{onClick:()=>d(c),className:`whitespace-nowrap transition-colors ${a===c?"text-pink-600":"text-black hover:text-gray-700"}`,children:c},c))}),(0,b.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent opacity-20"})]})}),(0,b.jsx)("div",{className:"w-full",children:i?(0,b.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,b.jsxs)("p",{className:"text-gray-600 text-lg font-medium animate-pulse",children:["🚧 ",a," projects coming soon!"]})}):(0,b.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map((a,c)=>(0,b.jsxs)("div",{className:" relative rounded-3xl border border-teal-200/30 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_60px_rgba(56,189,248,0.15)] overflow-hidden transition-transform hover:scale-[1.02] ",children:[(0,b.jsx)(f,{...a}),(0,b.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent opacity-20"})]},c))})}),(0,b.jsx)("hr",{className:"mt-32 border-t-2 border-gray-300 w-3/4 mx-auto"})]})}a.s(["default",()=>i],39916)},36386,a=>{"use strict";var b=a.i(87924),c=a.i(46271),d=a.i(69325);function e({children:a}){return(0,b.jsx)("h2",{className:"text-3xl capitalize mb-8 font-bold text-black text-center",children:a})}var f=a.i(72131),g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=f.default.createContext&&f.default.createContext(g),i=["attr","size","title"];function j(){return(j=Object.assign.bind()).apply(this,arguments)}function k(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function l(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?k(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):k(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function m(a){return b=>f.default.createElement(n,j({attr:l({},a.attr)},b),function a(b){return b&&b.map((b,c)=>f.default.createElement(b.tag,l({key:c},b.attr),a(b.child)))}(a.child))}function n(a){var b=b=>{var c,{attr:d,size:e,title:g}=a,h=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){if(b.indexOf(d)>=0)continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,i),k=e||b.size||"1em";return b.className&&(c=b.className),a.className&&(c=(c?c+" ":"")+a.className),f.default.createElement("svg",j({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,d,h,{className:c,style:l(l({color:a.color||b.color},b.style),a.style),height:k,width:k,xmlns:"http://www.w3.org/2000/svg"}),g&&f.default.createElement("title",null,g),a.children)};return void 0!==h?f.default.createElement(h.Consumer,null,a=>b(a)):b(g)}function o(a){return m({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(a)}function p(a){return m({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(a)}function q(a){return m({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"},child:[]}]})(a)}function r(a){return m({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(a)}let s={initial:{opacity:0,y:50},animate:a=>({opacity:1,y:0,transition:{delay:.05*a}})};function t(){let{ref:a}=(0,d.useSectionInView)("#connect"),f=[{name:"LinkedIn",url:"https://www.linkedin.com/in/nouman-hafeez/",icon:(0,b.jsx)(p,{size:28}),color:"text-blue-600"},{name:"GitHub",url:"https://github.com/noumanhafeez",icon:(0,b.jsx)(o,{size:28}),color:"text-gray-900"},{name:"Medium",url:"https://medium.com/@noumanhafeez095",icon:(0,b.jsx)(q,{size:28}),color:"text-black"},{name:"Twitter",url:"https://x.com/Nouman1256",icon:(0,b.jsx)(r,{size:28}),color:"text-sky-500"}];return(0,b.jsxs)("section",{id:"connect",ref:a,className:"mb-28 max-w-[53rem] mx-auto scroll-mt-28 px-4 text-center",children:[(0,b.jsx)(e,{children:"Connect With Me"}),(0,b.jsx)("ul",{className:"flex flex-wrap justify-center gap-6",children:f.map((a,d)=>(0,b.jsx)(c.motion.li,{variants:s,initial:"initial",whileInView:"animate",viewport:{once:!0},custom:d,children:(0,b.jsxs)("div",{onClick:()=>window.open(a.url,"_blank"),className:" relative rounded-3xl px-6 py-4 flex items-center gap-2 cursor-pointer bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/30 shadow-[0_15px_40px_rgba(56,189,248,0.15)] transition-transform duration-300 hover:scale-105 ",children:[(0,b.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/50 to-transparent opacity-20"}),(0,b.jsxs)("div",{className:`relative z-10 flex items-center gap-2 ${a.color}`,children:[a.icon,(0,b.jsx)("span",{className:"text-lg font-medium",children:a.name})]})]})},a.name))})]})}a.s(["default",()=>t],36386)}];

//# sourceMappingURL=_ded3e40b._.js.map
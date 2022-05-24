!function(){"use strict";var n="omnisend-dynamic-container",e="omnisend-forms-tracking-pixels-container",t=function(){return t=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},t.apply(this,arguments)},o={},r=function(n){var e=i(),o=e.shop,r=e.brand,c=e.user,a=e.cookies,u=e.navigation;return function(n){return new URLSearchParams((e=n,Object.keys(e).filter((function(n){return null!==e[n]&&void 0!==e[n]&&""!==e[n]})).reduce((function(n,o){var r;return t(t({},n),((r={})[o]=e[o],r))}),{}))).toString();var e}({timestamp:(new Date).getTime().toString(),shopType:o.getShopType(),shopID:o.getShopID(),shopHostname:o.getShopHostName(),brandID:r.getBrandID(),formID:n,anonymousID:c.getAnonymousID(),sessionID:c.getSessionID(),contactID:a.get("omnisendContactID"),pageTitle:u.getPageTitle(),pageURL:u.getPageUrl()})};function i(){var n=window._omnisend.config.formsAPIHost;return{brand:{getBrandID:function(){var n;return null===(n=window._omnisend.brandSettings)||void 0===n?void 0:n.brandID}},forms:{checkIfWindowIsClear:function(){return window._omnisend.forms.isWindowClear},setWindowClearance:function(n){window._omnisend.forms.isWindowClear=n},getApiHost:function(){return n},getFormsLoadEndpoint:function(e){return"".concat(n,"REST/forms/v1/renderedForms?brandID=").concat(e)},getTrackViewEndpoint:function(e){return"".concat(n,"REST/forms/v1/track/view?").concat(r(e))},getTrackInteractionEndpoint:function(e){return"".concat(n,"REST/forms/v1/track/interaction?").concat(r(e))}},navigation:{redirect:function(n){window.location.href=n},getPageTitle:function(){return window.document.title},getPageUrl:function(){return window.location.href}},cookies:{set:function(n,e,t){var r=void 0===t?{}:t,i=r.expiration,c=void 0===i?365*window._omnisend.cookies.DAY:i,a=r.sessionOnly;window._omnisend.cookies.set(n,e,a?void 0:c),o[n]=e},get:function(n){var e;return null!==(e=window._omnisend.cookies.get(n))&&void 0!==e?e:null==o?void 0:o[n]}},shop:{getShopType:function(){return window._omnisend.shopType},getShopID:function(){return window._omnisend.shopID},getShopHostName:function(){return window._omnisend.shopHostname}},user:{getAnonymousID:function(){return window._omnisend.user.anonymousID},getSessionID:function(){return window._omnisend.user.sessionID}}}}var c={triedToClose:!1,loadTime:Date.now(),pageViewCount:0,scrolledPercent:u()},a=[];function u(){return Math.round(100*window.scrollY/(document.documentElement.scrollHeight-document.documentElement.clientHeight))||0}var s=function(n){return"omnisend-form-".concat(n)};function l(n){return void 0!==n}function d(n){var e=i().cookies.get("".concat(s(n.id),"-closed-at"));return e?new Date(e).getTime():0}function f(n){var e,t=null===(e=n.targeting)||void 0===e?void 0:e.urlMatch;if(!t)return!0;var o=t.includes,r=void 0===o?[]:o,i=t.excludes,c=void 0===i?[]:i,a=window.location.href,u=!r.length||r.some((function(n){return a.includes(n)})),s=!c.length||c.every((function(n){return!a.includes(n)}));return u&&s}function m(n){var e,t=null===(e=n.targeting)||void 0===e?void 0:e.display;if(!t)return!0;if(!Object.keys(t).length)return!0;var o=c,r=o.scrolledPercent,i=o.loadTime,a=o.pageViewCount,u=o.triedToClose,s=t.afterScrollDown,d=t.afterTime,f=t.afterViewedPageCount,m=t.onExit;return[function(){return l(s)&&s<=r},function(){return l(d)&&i+d<=Date.now()},function(){return l(f)&&a>=f},function(){return l(m)&&m===u}].some((function(n){return n()}))}function v(n){var e,t=null===(e=n.targeting)||void 0===e?void 0:e.frequency,o=d(n);return t?o+t<=Date.now():!o}var p,w=function(n){return new Promise((function(t,o){var r=document.createElement("img");r.setAttribute("src",n),r.addEventListener("load",(function(){t(null),r.remove()})),r.addEventListener("error",(function(){o()})),document.getElementById(e).appendChild(r)}))},h=function(n){return w(i().forms.getTrackInteractionEndpoint(n))},g=function(n){i().cookies.set("".concat(s(n),"-closed-at"),(new Date).toISOString())},y=function(n){document.getElementById(s(n)).setAttribute("style","display: none"),i().forms.setWindowClearance(!0),g(n)};function b(n){try{n()}catch(n){console.error(n)}}function k(n,e,t){void 0===t&&(t=!1),n.addEventListener("click",(function o(r){r.preventDefault(),e(),t&&n.removeEventListener("click",o)})),n.addEventListener("keydown",(function o(r){"Enter"!==r.key&&" "!==r.key||(r.preventDefault(),e(),t&&n.removeEventListener("keydown",o))}))}function E(n){var e=n.form,t=n.element,o=n.additionalActions,r=void 0===o?[]:o,c=e.actions,a=e.id;c&&c.forEach((function(n){var e,o,c=t.querySelector((e=a,o=n.targetID,"#omnisend-form-".concat(e,"-action-").concat(o)));n.type===p.redirect&&c&&k(c,(function(){!function(n,e){var t,o,r,c;t=void 0,o=void 0,c=function(){return function(n,e){var t,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((r=(r=c.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(n,c)}catch(n){i=[6,n],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(t){switch(t.label){case 0:return g(e),[4,h(e)];case 1:return t.sent(),i().navigation.redirect(n),[2]}}))},new((r=Promise)||(r=Promise))((function(n,e){function i(n){try{u(c.next(n))}catch(n){e(n)}}function a(n){try{u(c.throw(n))}catch(n){e(n)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(n){n(t)}))).then(i,a)}u((c=c.apply(t,o||[])).next())}))}(n.settings.url,a),r.map(b)}))}))}function I(n){var e,t,o=function(n){var e=document.createElement("div");return e.setAttribute("id",s(n.id)),e.setAttribute("style","display: none"),e.innerHTML=n.html,e}(n),r=(e=null,{lock:function(n){t(),e=function(n){var e=Array.from(n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')),t=function(n){var t,o,r,i,c,a,u;"Tab"===n.key&&(e.length?(r=(t={elementList:e,navigatingBack:n.shiftKey}).navigatingBack,i=function(n){return n[n.length-1]}(o=t.elementList),c=function(n){return n[0]}(o),a=r?c:i,u=r?i:c,!(o.some((function(n){return document.activeElement===n}))&&document.activeElement!==a||(u.focus(),0))&&n.preventDefault()):n.preventDefault())};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}(n)},clear:t=function(){e&&(e(),e=null)}}),i=[function(){r.clear()}];return{data:n,element:o,show:function(){E({form:n,element:o,additionalActions:i}),function(n){var e=n.form,t=n.element,o=n.additionalActions,r=void 0===o?[]:o,i=e.id,c=t.querySelector("#".concat(s(i),"-close-action"));c&&k(c,(function(){y(i),r.map(b)}),!0)}({form:n,element:o,additionalActions:i}),function(n){var e=n.additionalActions,t=void 0===e?[]:e,o=n.form.id;document.addEventListener("keydown",(function n(e){"Escape"===e.key&&(e.preventDefault(),y(o),t.map(b),document.removeEventListener("keydown",n))}))}({form:n,additionalActions:i}),o.setAttribute("style",""),r.lock(o)}}}!function(n){n.redirect="redirect"}(p||(p={}));var D,S;function T(n){var e=i();i().forms.checkIfWindowIsClear()&&n.filter((function(n){return function(n){return n.targeting?[f,m,v].every((function(e){return e(n)})):!d(n)}(n.data)})).forEach((function(n){var t;e.forms.checkIfWindowIsClear()&&(e.forms.setWindowClearance(!1),n.show(),t=n.data.id,w(i().forms.getTrackViewEndpoint(t)))}))}S=function(){var t,o,r;return function(n,e){var t,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((r=(r=c.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(n,c)}catch(n){i=[6,n],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(s){switch(s.label){case 0:return[4,(f=void 0,m=void 0,v=Promise,p=function(){var n,e,t,o;return function(n,e){var t,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((r=(r=c.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(n,c)}catch(n){i=[6,n],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(r){switch(r.label){case 0:return n=i(),e=n.brand,t=n.forms,(o=e.getBrandID())?[4,fetch(t.getFormsLoadEndpoint(o))]:[2,Promise.resolve([])];case 1:return[2,r.sent().json()]}}))},new(v||(v=Promise))((function(n,e){function t(n){try{r(p.next(n))}catch(n){e(n)}}function o(n){try{r(p.throw(n))}catch(n){e(n)}}function r(e){var r;e.done?n(e.value):(r=e.value,r instanceof v?r:new v((function(n){n(r)}))).then(t,o)}r((p=p.apply(f,m||[])).next())})))];case 1:return(t=s.sent().filter((function(n){return!!n.html}))).length?(h=document.getElementById(n),(g=document.createElement("div")).setAttribute("id","omnisend-forms-container"),h.appendChild(g),o={add:function(n){g.appendChild(n.element)}},window.addEventListener("mouseout",(function(n){n.y<0&&(c.triedToClose=!0,a.forEach((function(n){return n(c)})))})),window.addEventListener("scroll",(function(){var n=u();n<=c.scrolledPercent||(c.scrolledPercent=n,a.forEach((function(n){return n(c)})))})),l=i().cookies,d=(parseInt(l.get("page-views"),10)||0)+1,l.set("page-views",d.toString(),{sessionOnly:!0}),c.pageViewCount=d,function(){var t=document.getElementById(n),o=document.createElement("div");o.setAttribute("id",e),t.appendChild(o)}(),r=t.map((function(n){var e=I(n);return o.add(e),e})),w=function(){return T(r)},a.push(w),setInterval((function(){T(r)}),1e3),[2]):[2]}var l,d,f,m,v,p,w,h,g}))},new((D=Promise)||(D=Promise))((function(n,e){function t(n){try{r(S.next(n))}catch(n){e(n)}}function o(n){try{r(S.throw(n))}catch(n){e(n)}}function r(e){var r;e.done?n(e.value):(r=e.value,r instanceof D?r:new D((function(n){n(r)}))).then(t,o)}r((S=S.apply(void 0,[])).next())}))}();
//# sourceMappingURL=main.js.map
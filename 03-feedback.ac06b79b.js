!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function y(e,t,n){var o,i,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function h(e){return c=e,f=setTimeout(w,t),s?y(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=b();if(j(e))return T(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function T(e){return f=void 0,m&&o?y(e):(o=i=void 0,u)}function O(){var e=b(),n=j(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return h(l);if(d)return f=setTimeout(w,t),y(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=S(t)||0,p(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},O.flush=function(){return void 0===f?u:T(b())},O}function p(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var h=document.querySelector(".feedback-form"),j=document.querySelector("input"),w=document.querySelector("textarea"),T={email:j.value,message:w.value};h.addEventListener("input",e(t)((function(e){try{var t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value;T.email=t,T.message=n;var o=JSON.stringify(T);localStorage.setItem("feedback-form-state",o)}catch(e){}}),500)),window.onload=function(e){try{if(localStorage.getItem("feedback-form-state")){var t=localStorage.getItem("feedback-form-state");T=JSON.parse(t),j.value=T.email,w.value=T.message}else j.value=T.email;w.value=T.message}catch(e){console.log(e.message)}},h.addEventListener("submit",(function(e){e.preventDefault(),localStorage.getItem("feedback-form-state")&&(console.log(T),localStorage.removeItem("feedback-form-state"));j.value="",w.value=""}))}();
//# sourceMappingURL=03-feedback.ac06b79b.js.map
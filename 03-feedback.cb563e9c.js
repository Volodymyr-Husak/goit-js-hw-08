!function(){var e=document.querySelector(".feedback-form"),t=document.querySelector("input"),a=document.querySelector("textarea"),l={email:t.value,message:a.value};e.addEventListener("input",_.throttle((function(e){try{var t=e.currentTarget.elements.email.value,a=e.currentTarget.elements.message.value;l.email=t,l.message=a;var o=JSON.stringify(l);localStorage.setItem("feedback-form-state",o)}catch(e){}}),500)),window.onload=function(e){localStorage.getItem("feedback-form-state")?(inputElValueObj=localStorage.getItem("feedback-form-state"),console.log(inputElValueObj),l=JSON.parse(inputElValueObj),console.log(l),t.value=l.email,a.value=l.message):console.log(l),t.value=l.email,a.value=l.message},e.addEventListener("submit",(function(e){e.preventDefault(),console.log(l),localStorage.getItem("feedback-form-state")&&localStorage.removeItem("feedback-form-state");t.value="",a.value=""}))}();
//# sourceMappingURL=03-feedback.cb563e9c.js.map

!function(){var e=document.querySelector(".feedback-form"),t=document.querySelector("input"),a=document.querySelector("textarea"),l={email:t.value,message:a.value};e.addEventListener("input",_.throttle((function(e){try{var t=e.currentTarget.elements.email.value,a=e.currentTarget.elements.message.value;l.email=t,l.message=a;var o=JSON.stringify(l);localStorage.setItem("feedback-form-state",o)}catch(e){}}),500)),window.onload=function(e){console.log("веб-сторінку завантажено");try{if(localStorage.getItem("feedback-form-state")){var o=localStorage.getItem("feedback-form-state");l=JSON.parse(o),t.value=l.email,a.value=l.message}else t.value=l.email;a.value=l.message}catch(e){console.log(e.message)}},e.addEventListener("submit",(function(e){e.preventDefault(),localStorage.getItem("feedback-form-state")&&(console.log(l),localStorage.removeItem("feedback-form-state"));t.value="",a.value=""}))}();
//# sourceMappingURL=03-feedback.2caab9c8.js.map

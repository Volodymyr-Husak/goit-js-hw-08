const e=document.querySelector(".feedback-form"),t=document.querySelector("input"),a=document.querySelector("textarea");let o={email:t.value,message:a.value};e.addEventListener("input",_.throttle((function(e){try{const t=e.currentTarget.elements.email.value,a=e.currentTarget.elements.message.value;o.email=t,o.message=a;const l=JSON.stringify(o);localStorage.setItem("feedback-form-state",l)}catch(e){}}),500)),window.onload=function(e){try{if(localStorage.getItem("feedback-form-state")){const e=localStorage.getItem("feedback-form-state");o=JSON.parse(e),t.value=o.email,a.value=o.message}else t.value=o.email;a.value=o.message}catch(e){console.log(e.message)}},e.addEventListener("submit",(function(e){e.preventDefault(),localStorage.getItem("feedback-form-state")&&(console.log(o),localStorage.removeItem("feedback-form-state"));t.value="",a.value=""}));
//# sourceMappingURL=03-feedback.3f60749d.js.map

// var _ = require('lodash.throttle');
// var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');

const inputEl = document.querySelector('input');
// console.log(inputEl);
const textareaEl = document.querySelector('textarea');
// console.log(textareaEl);

let feedbackFormState = {
  email: inputEl.value,
  message: textareaEl.value,
};

formEl.addEventListener('input', _.throttle(onForm, 500));

function onForm(event) {
  try {
    // Code that may throw a runtime error
    const emailValue = event.currentTarget.elements.email.value;
    const messageValue = event.currentTarget.elements.message.value;

    feedbackFormState.email = emailValue;
    feedbackFormState.message = messageValue;
    // debugger;
    // try {
    const feedbackFormStateStr = JSON.stringify(feedbackFormState);
    localStorage.setItem('feedback-form-state', feedbackFormStateStr);
  } catch (error) {
    // Error handling
    // console.log('Error');
  }
}

window.onload = function (e) {
  //   console.log('веб-сторінку завантажено');
  // debugger;
  // try {
  // Code that may throw a runtime error
  if (localStorage.getItem('feedback-form-state')) {
    inputElValueObj = localStorage.getItem('feedback-form-state');
    console.log(inputElValueObj);
    feedbackFormState = JSON.parse(inputElValueObj);
    console.log(feedbackFormState);
    inputEl.value = feedbackFormState.email;
    textareaEl.value = feedbackFormState.message;
  } else console.log(feedbackFormState);
  inputEl.value = feedbackFormState.email;
  textareaEl.value = feedbackFormState.message;
  // } catch (error) {
  //   // Error handling
  // }
};

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(feedbackFormState);
  if (localStorage.getItem('feedback-form-state')) {
    localStorage.removeItem('feedback-form-state');
  }
  inputEl.value = '';
  textareaEl.value = '';
  // feedbackFormState = null;
}

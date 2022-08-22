// // var _ = require('lodash.throttle');
// // var throttle = require('lodash.throttle');

// const formEl = document.querySelector('.feedback-form');

// const inputEl = document.querySelector('input');
// // console.log(inputEl);
// const textareaEl = document.querySelector('textarea');
// // console.log(textareaEl);

// let feedbackFormState = {
//   email: inputEl.value,
//   message: textareaEl.value,
// };

// formEl.addEventListener('input', _.throttle(onForm, 500));

// function onForm(event) {
//   try {
//     // Code that may throw a runtime error
//     const emailValue = event.currentTarget.elements.email.value;
//     const messageValue = event.currentTarget.elements.message.value;

//     feedbackFormState.email = emailValue;
//     feedbackFormState.message = messageValue;
//     // debugger;
//     // try {
//     const feedbackFormStateStr = JSON.stringify(feedbackFormState);
//     localStorage.setItem('feedback-form-state', feedbackFormStateStr);
//   } catch (error) {
//     // Error handling
//     // console.log('Error');
//   }
// }

// window.onload = function (e) {
//   console.log('веб-сторінку завантажено');
//   // debugger;
//   // try {
//   // Code that may throw a runtime error
//   if (localStorage.getItem('feedback-form-state')) {
//     inputElValueObj = localStorage.getItem('feedback-form-state');
//     console.log(inputElValueObj);
//     feedbackFormState = JSON.parse(inputElValueObj);
//     console.log(feedbackFormState);
//     inputEl.value = feedbackFormState.email;
//     textareaEl.value = feedbackFormState.message;
//   } else console.log(feedbackFormState);
//   inputEl.value = feedbackFormState.email;
//   textareaEl.value = feedbackFormState.message;
//   // } catch (error) {
//   //   // Error handling
//   // }
// };

// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log(feedbackFormState);
//   if (localStorage.getItem('feedback-form-state')) {
//     // localStorage.setItem('feedback-form-state', feedbackFormStateStr);
//     localStorage.removeItem('feedback-form-state');
//   }
//   inputEl.value = '';
//   textareaEl.value = '';
//   // feedbackFormState = null;
// }

// ======================================================================================================
// ==============================================V2========================================================
// ======================================================================================================
// var _ = require('lodash.throttle');
// var throttle = require('lodash.throttle');
// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// };

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };
// const remove = key => {
//   try {
//     const serializedState = localStorage.removeItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };
// ================================================================================
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
  console.log('веб-сторінку завантажено');
  // debugger;
  try {
    // Code that may throw a runtime error
    if (localStorage.getItem('feedback-form-state')) {
      const inputElValueObj = localStorage.getItem('feedback-form-state');
      // load('feedback-form-state');
      // console.log(inputElValueObj);
      feedbackFormState = JSON.parse(inputElValueObj);
      // console.log(feedbackFormState);
      inputEl.value = feedbackFormState.email;
      textareaEl.value = feedbackFormState.message;
    }
    // console.log(feedbackFormState);
    else inputEl.value = feedbackFormState.email;
    textareaEl.value = feedbackFormState.message;
  } catch (error) {
    //   // Error handling
    console.log(error.message);
  }
};

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // console.log(feedbackFormState);
  if (localStorage.getItem('feedback-form-state')) {
    // localStorage.setItem('feedback-form-state', feedbackFormStateStr);
    console.log(feedbackFormState);
    localStorage.removeItem('feedback-form-state');
  }
  inputEl.value = '';
  textareaEl.value = '';
  // feedbackFormState = null;
}
// console.log(localStorage.getItem('feedback-form-state'));

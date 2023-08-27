// Działający kod

const { throttle } = require('lodash');

// (͡° ͜ʖ ͡°)

const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

input.addEventListener('input', function (e) {
  const emailOutput = (input.textContent = e.currentTarget.value);
  localStorage.setItem('email', emailOutput);
});

textArea.addEventListener('input', function (e) {
  const messageOutput = (input.textContent = e.currentTarget.value);
  localStorage.setItem('message', messageOutput);
});

const formOutput = {
  email: emailOutput,
  message: messageOutput,
};

// const formOutput = {
//   email: localStorage.getItem('email'),
//   message: localStorage.getItem('message'),
// };

localStorage.setItem('feedback-form-state', JSON.stringify(formOutput));
const savedForm = localStorage.getItem('feedback-form-state');
// console.log(savedForm);
const parsedForm = JSON.parse(savedForm);
// console.log(parsedForm);

const emailOutput = localStorage.getItem('email');
const messageOutput = localStorage.getItem('message');

window.onload = function () {
  document.getElementById('email_input').value = emailOutput;
  document.getElementById('message_input').value = messageOutput;
};

const registerForm = document.getElementById('submit_button');
registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(emailOutput);
  console.log(messageOutput);
}
console.log(localStorage);
// localStorage.removeItem('feedback-form-state');

// (,,◕　⋏　◕,,)

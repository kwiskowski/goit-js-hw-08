// Działający kod

const { throttle } = require('lodash');

// (͡° ͜ʖ ͡°)
// document.localStorage.getItem_.throttle(func, [(wait = 500)], [(options = {})]);

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

const emailOutput = localStorage.getItem('email');
const messageOutput = localStorage.getItem('message');

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

window.onload = function () {
  document.getElementById('email_input').value = emailOutput;
  document.getElementById('message_input').value = messageOutput;
};

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById('email_input').value = '';
  document.getElementById('message_input').value = '';
  console.log(savedForm);
  localStorage.clear();
}

const registerForm = document.querySelector('.feedback-form');
registerForm.addEventListener('submit', handleSubmit);

console.log(localStorage);

// (,,◕　⋏　◕,,)

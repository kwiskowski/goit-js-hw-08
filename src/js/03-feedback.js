// Działający kod

const { throttle } = require('lodash');

// (͡° ͜ʖ ͡°)
throttle(localStorage.setItem, [(wait = 500)]);

const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

input.addEventListener('input', e => {
  const emailOutput = (input.textContent = e.currentTarget.value);
  localStorage.setItem('email', emailOutput);
});

textArea.addEventListener('input', e => {
  const messageOutput = (input.textContent = e.currentTarget.value);
  localStorage.setItem('message', messageOutput);
});

const emailOutput = localStorage.getItem('email');
const messageOutput = localStorage.getItem('message');

const formOutput = {
  email: emailOutput,
  message: messageOutput,
};

localStorage.setItem('feedback-form-state', JSON.stringify(formOutput));
const savedForm = localStorage.getItem('feedback-form-state');
const parsedForm = JSON.parse(savedForm);

// console.log(typeof savedForm);
// console.log(typeof parsedForm);

window.onload = function () {
  document.getElementById('email_input').value =
    parsedForm.document.getElementById('message_input').value =
      localStorage.getItem('message');
};
localStorage.removeItem('email');
localStorage.removeItem('message');

function handleSubmit(event) {
  event.preventDefault();
  console.log(savedForm);
  document.getElementById('email_input').value = '';
  document.getElementById('message_input').value = '';
}

const registerForm = document.querySelector('.feedback-form');
registerForm.addEventListener('submit', handleSubmit);

console.log('local Storage', localStorage);

// (,,◕　⋏　◕,,)

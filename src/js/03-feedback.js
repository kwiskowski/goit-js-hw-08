// Działający kod

const { throttle } = require('lodash');

// (͡° ͜ʖ ͡°)
throttle(localStorage.setItem, [(wait = 500)]);

const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

const emailOutput = localStorage.getItem('email');
const messageOutput = localStorage.getItem('message');

const formOutput = {
  email: emailOutput,
  message: messageOutput,
};

input.addEventListener('input', e => {
  const emailOutput = (input.textContent = e.currentTarget.value);
  localStorage.setItem('email', emailOutput);
});

textArea.addEventListener('input', e => {
  const messageOutput = (input.textContent = e.currentTarget.value);
  localStorage.setItem('message', messageOutput);
});

localStorage.setItem('feedback-form-state', JSON.stringify(formOutput));
const savedForm = localStorage.getItem('feedback-form-state');
localStorage.removeItem('email');
localStorage.removeItem('message');
const parsedForm = JSON.parse(savedForm);

window.onload = function () {
  document.getElementById('email_input').value = emailOutput;
  document.getElementById('message_input').value = messageOutput;
};

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById('email_input').value = '';
  document.getElementById('message_input').value = '';
  console.log(savedForm);
  const promise = new Promise((resolve, reject) => {
    localStorage.clear();
    setTimeout(() => {}, 2000);
  });
}

const registerForm = document.querySelector('.feedback-form');
registerForm.addEventListener('submit', handleSubmit);

console.log('parsed form', parsedForm);
console.log('local Storage', localStorage);
console.log('feedback form state', localStorage.getItem('feedback-form-state'));

// (,,◕　⋏　◕,,)

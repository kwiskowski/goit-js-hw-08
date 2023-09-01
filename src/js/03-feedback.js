// Działający kod
import _ from 'lodash';
const trottled = _.throttle(InputEvent, 500);

// (͡° ͜ʖ ͡°)

const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

input.addEventListener('input', e => {
  const emailOutput = (input.textContent = e.currentTarget.value);
  localStorage.setItem('email', emailOutput);
  console.log(emailOutput);
});

textArea.addEventListener('input', e => {
  const messageOutput = (input.textContent = e.currentTarget.value);
  localStorage.setItem('message', messageOutput);
  console.log(messageOutput);
});

const emailOutput = localStorage.getItem('email');
const messageOutput = localStorage.getItem('message');

const formOutput = {
  email: emailOutput,
  message: messageOutput,
};

console.log(formOutput);

localStorage.setItem('feedback-form-state', JSON.stringify(formOutput));
const savedForm = localStorage.getItem('feedback-form-state');
const parsedForm = JSON.parse(savedForm);

// console.log(typeof savedForm);
// console.log(typeof parsedForm);

window.onload = function () {
  document.getElementById('email_input').value = parsedForm.email;
  document.getElementById('message_input').value = parsedForm.message;
};
localStorage.removeItem('email');
localStorage.removeItem('message');

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById('email_input').value = parsedForm.email;
  document.getElementById('message_input').value = parsedForm.message;
  console.log(parsedForm);
  localStorage.removeItem('feedback-form-state');
}

const registerForm = document.querySelector('.feedback-form');
registerForm.addEventListener('submit', handleSubmit);

console.log(localStorage.getItem('feedback-form-state'));

// (,,◕　⋏　◕,,)

// Działający kod
import _ from 'lodash';

// (͡° ͜ʖ ͡°)

const input = document.querySelector('form');

// Trottle start
const trottedFunction = _.throttle(e => {
  input.addEventListener('input', trottedFunction);

  const emailOutput = e.currentTarget.value;
  const messageOutput = e.currentTarget.value;

  const formOutput = {
    email: emailOutput,
    message: messageOutput,
  };
  // const formOutput { email, message } = e.target.elements;

  localStorage.setItem('feedback-form-state', JSON.stringify(formOutput));
}, 500);
// Trottle stop

const savedForm = localStorage.getItem('feedback-form-state');
const parsedForm = JSON.parse(savedForm);

window.onload = function () {
  if (localStorage.getItem('feedback-form-state') !== null) {
    document.getElementById('email_input').value = parsedForm.email;
    document.getElementById('message_input').value = parsedForm.message;
  }
  return;
};

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById('email_input').value = '';
  document.getElementById('message_input').value = '';
  localStorage.getItem('feedback-form-state');
  console.log(parsedForm);
  localStorage.removeItem('feedback-form-state');
}

const registerForm = document.querySelector('.feedback-form');
registerForm.addEventListener('submit', handleSubmit);

console.log(
  'feedback-form-state:',
  localStorage.getItem('feedback-form-state')
);

// (,,◕　⋏　◕,,)

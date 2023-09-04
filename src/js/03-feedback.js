import _ from 'lodash';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(getInputData, 500));

const { email, message } = form.elements;

function getInputData(event) {
  const inputData = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}
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
  localStorage.getItem('feedback-form-state');
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem('feedback-form-state');
}

const registerForm = document.querySelector('.feedback-form');
registerForm.addEventListener('submit', handleSubmit);

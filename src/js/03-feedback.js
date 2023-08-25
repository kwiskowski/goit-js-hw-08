// Działający kod

// const input = document.querySelector('input');
// const textArea = document.querySelector('textarea');

// input.addEventListener('input', function (e) {
//   console.log('input listener');
//   const emailOutput = (input.textContent = e.currentTarget.value);
//   localStorage.setItem('email', emailOutput);
// });
// console.log(localStorage.getItem('email'));

// textArea.addEventListener('input', function (e) {
//   console.log('message listener');
//   const messageOutput = (input.textContent = e.currentTarget.value);
//   localStorage.setItem('message', messageOutput);
// });
// console.log(localStorage.getItem('message'));

const form = document.getElementsByClassName('feedback-form');

document.addEventListener('input', function (e) {
  const emailOutput = (form.textContent = e.currentTarget.value);
  const messageOutput = (form.textContent = e.currentTarget.value);
  const formOutput = {
    email: emailOutput,
    message: messageOutput,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formOutput));
});

const savedForm = localStorage.getItem('feedback-form-state');
const parsedForm = JSON.parse(savedForm);

console.log(localStorage.getItem('feedback-form-state'));
console.log(parsedForm);

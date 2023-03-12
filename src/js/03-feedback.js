import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form'); 
const emailInput = document.querySelector('input'); 
const textarea = document.querySelector('textarea'); 

form.addEventListener("submit", handleFormSubmit);
form.addEventListener('input', throttle(handleFormChange, 500));

try {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    emailInput.value = formData.email;
    textarea.value = formData.message;
  }
} catch (error) {
  console.log(error.message);
}

function handleFormChange(e) {
  const email = emailInput.value;
  const message = textarea.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email, message })
  );
}

function handleFormSubmit(event) {
  event.preventDefault();
  
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  form.reset()
  localStorage.removeItem('feedback-form-state');
}







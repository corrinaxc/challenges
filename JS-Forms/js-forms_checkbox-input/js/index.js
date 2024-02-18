console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

function showSuccesMessage() {
  successMessage.removeAttribute("hidden");
}

hideTosError();
hideSuccessMessage();

tosCheckbox.addEventListener('input', event => {
  event.target.checked ? hideTosError() : showTosError();
})


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  if(!data.tos){
    showTosError();
    return}
  alert("Form submitted");
  event.target.reset();
  showSuccesMessage();
});
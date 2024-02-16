console.clear();
/*# Handle Form Submit

Use JavaScript to react to the form submission.

Log all form data (in object form) into the console in the submit event handler.

Make sure the form is reset and the First Name input is focused after submission.*/

const form = document.querySelector('[data-js="form"]');
const button = document.querySelector('[data-js="submit-button"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    console.log(userData);
    event.target.elements.firstName.focus();
    event.target.reset();
});



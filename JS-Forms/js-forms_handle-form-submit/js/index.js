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
    const ageBadnessSum = (parseInt(event.target.elements.age.value) + parseInt(event.target.elements.badness.value))
    console.log(`The age-badness-sum of ${event.target.elements.firstName.value} is ${ageBadnessSum}`)
    event.target.elements.firstName.focus();
    event.target.reset();
});

/* The formula is: `age + badness`

Log to the console _(replace the values between the quotes)_:

> The age-badness-sum of "firstName" is "age-badness-sum" */

// ``
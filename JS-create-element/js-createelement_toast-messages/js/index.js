console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newToastMessage = document.createElement('li'); //created list element
  newToastMessage.textContent = "toastie toast"; // assigned text value to list element
  newToastMessage.classList.add("toast-container__message"); //added style class to new element
  toastContainer.append(newToastMessage); // append text to paragraph element 
  console.log(toastContainer);
});

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  toastContainer.innerHTML = ""; //clear list
});


/* const newToastMessage = document.createElement('p'); //created paragraph element
  newToastMessage.textContent = "toastie toast"; // assigned text value to paragraph element
  toastContainer.append(newToastMessage); // append text to paragraph element 
});*/
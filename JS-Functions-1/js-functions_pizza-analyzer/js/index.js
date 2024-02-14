console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
   const pizzaSize1 = pizzaInput1.value;
   const pizzaSize2 = pizzaInput2.value;
   calculatePizzaGain(pizzaSize1, pizzaSize2);
   updatePizzaDisplay(pizza1, pizzaSize1);
   updateOutputColor(pizzaSize1, pizzaSize2)
});

pizzaInput2.addEventListener("input", () => {
   const pizzaSize1 = pizzaInput1.value;
   const pizzaSize2 = pizzaInput2.value;
   calculatePizzaGain(pizzaSize1, pizzaSize2);
   updatePizzaDisplay(pizza2, pizzaSize2);
   updateOutputColor(pizzaSize1, pizzaSize2)
});

function calculatePizzaGain(diameter1, diameter2) {
   const area1 = (diameter1/2) * (diameter1/2) * Math.PI;
   const area2 = (diameter2/2) * (diameter2/2) * Math.PI;
   const pizzaGain = Math.round((area2 - area1) / area1 * 100);
   output.value = pizzaGain
 }

 function updatePizzaDisplay(pizzaElement, newSize) {
   const newDisplaySize = (newSize / 24) * 100;
   pizzaElement.style.width = newDisplaySize + "px";
 }
 
function updateOutputColor(size1, size2) {
   if (size1 <= size2) {
      outputSection.style.backgroundColor = "var(--green)"
   } else {
      outputSection.style.backgroundColor = "var(--red)"
   }
}

 /* 1. Write a function `updateOutputColor` with two parameters: `size1` and `size2`.
 2. Set the background color of the `outputSection` to "var(--red)", if we loose pizza. Otherwise, the background color should be set to "var(--green)"
 3. Use this function in both event listeners with the correct sizes as arguments.
 
    > 💡 `var(--<variable-name>)` is how you can use predefined variables in CSS. In this case, both color codes are stored in the variables `--red` and `--green` on the `:root` element of the HTML document (have a look into the CSS file!).*/



// Task 3
// define the function updateOutputColor here

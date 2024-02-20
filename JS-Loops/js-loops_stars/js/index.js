console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(x) {

  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let i = 1; i <= 5; i++) {
    let star = document.createElement("img");
    if (x >= i) {
      star.src = ("assets/star-filled.svg");}
    else {
      star.src = ("assets/star-empty.svg")
    }
    starContainer.append(star);

  //--^-- your code here --^--
}}

renderStars(0);

/* Now we want to render a certain number of filled stars, depending on the argument given to the function:

- Add a new parameter to the `renderStars` function, named `filledStars`. Expect its value to be a number.
- Inside the loop, as you create each star, use the value of `filledStars` to decide if a filled or an empty star should be created.
  💡 Use the counter variable of the for loop to check which star is currently being created (the first, second, third...)
- Depending on whether a filled or an empty star should be created, set the `src` of the image element to the filled or empty star image URL.
- Change the code that calls `renderStars`: pass in a number between 0 and 5 as an argument, and see if it works as expected!*/
console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {

  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let i = 1; i <= 5; i++) {
    let star = document.createElement("img");
    star.src = ("assets/star-empty.svg");
    starContainer.append(star);

  //--^-- your code here --^--
}}

renderStars();

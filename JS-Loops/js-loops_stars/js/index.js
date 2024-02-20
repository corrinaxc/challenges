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
    star.addEventListener("click", () => {
      renderStars(i); 
    })
    starContainer.append(star);

  //--^-- your code here --^--
}}

renderStars();
// Store the cards in a global state
// import { cards } from "./lib/global.js";
import { Header } from "./lib/header.js"
// import { handleFormSubmit } from "./lib/handleFormSubmit.js";
import { Form } from "./lib/Form.js";
// import { Bookmark } from "./lib/Bookmark.js";
// import { handleAnswerButtonClick } from "./lib/handleBookmarkButtonClick.js";
// import { Card } from "./lib/card.js";
import { CardList } from "./lib/cardList.js";

function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();


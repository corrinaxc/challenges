import "./App.css";

export default function App() {
  return < HelloWorldArticle/>
}

function HelloWorldArticle() {
  return <article>
    <h1>This is a React generated article!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusamus!</p>
  </article>
}

// Render an HTML `article` tag containing a heading and a paragraph to the browser. To do so, create a component called `HelloWorldArticle`.

// Use the following hints as guideline:

// - In the [App.jsx](src/App.jsx), create a new function called `HelloWorldArticle()`.
// - `HelloWorldArticle()` should return an HTML `article` tag as a wrapper which contains;
//   - an `h1` heading
//   - at least one `p` tag
//   - Note: Add whatever tags you like, but the predefined styles are limited ;)
// - In the return statement of your `App` function, replace the `div` with your `HelloWorldArticle` component.
// - Once again, look at the browser and be amazed!
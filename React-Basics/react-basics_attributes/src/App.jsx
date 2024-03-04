import "./App.css";

export default function App() {
  return <CreateArticle />
}

function CreateArticle() {
  return <article className="article">
    <h2 className="article__title">Red Pandas</h2>
    <label id="red-pandas" htmlFor="red-pandas" >Input</label>
    <input type="text-box" id="red-pandas"/>
    <a className="article__link" href="https://en.wikipedia.org/wiki/Red_panda">Click here to learn more about the Red Panda!</a>
  </article>
}


// Your component should contain the following parts:

// - an `<article>` as a wrapper HTML element with the class `article`
// - an `<h2>` with the class `article__title` and a text of your choice
// - a `<label>` and `<input>` tag connected with `id` and `htmlFor` (!) attributes
// - an `<a>` tag with the class `article__link` as well as text content and `href` attribute of your choice (What about a Wikipedia article?)

// ## Notes

// - You rendered Article component does not have any styling? Remember that you need to use `className` instead of `class` in JSX.
// - You only have to touch the [App.jsx](src/App.jsx) file.
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
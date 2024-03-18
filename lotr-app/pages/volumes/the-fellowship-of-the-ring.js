import { volumes } from "../../resources 3/lib/data.js";
import Link from "next/link";

export default function Fellowship() {
    const volume = volumes.find(({slug}) => slug === "the-fellowship-of-the-ring");
    if (!volume) {
        return <div> Volume not found </div>
    }
const {title, description, books } = volume;
        return(
        <div>
        <Link href="/volumes">All Volumes</Link>
        <h1>{ title }</h1>
        <p>{ description }</p>
        <ul>
            <li>
                {books[0].ordinal} - 
                 {books[0].title}
            </li>
            <li>{books[1].ordinal} -
             {books[1].title}</li>
        </ul>
        </div>
    )
}
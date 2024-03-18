import { volumes } from "../../resources 3/lib/data.js";
import Link from "next/link";
import Image from "next/image.js";

export default function TwoTowers() {
    const volume = volumes.find(({slug}) => slug === "the-two-towers");
    if (!volume) {
        return <div> Volume not found </div>
    }
const {title, description, books } = volume;
        return(
        <div>
        <Link href="/volumes">All Volumes</Link>
        <h1>{ title }</h1>
        <p>{ description }</p>
        <Image src={volume.cover}
        height={230}
        width={140}
        alt="book cover of fellowship of the two towers"/>
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
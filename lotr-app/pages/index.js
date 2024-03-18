import Link from "next/link";
import { introduction } from "../resources 3/lib/data.js";


export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p> { introduction } </p>
      <h2>All Volumes</h2>
      <ul>
      <li><Link href="/volumes">All Volumes</Link></li>
      <li><Link href="/volumes/the-fellowship-of-the-ring">The Fellowship of The Ring</Link></li>
      <li><Link href="/volumes/the-two-towers">The Two Towers</Link></li>
      <li><Link href="/volumes/the-return-of-the-king">The Return of the King</Link></li>
      </ul>
    </div>
  );
}

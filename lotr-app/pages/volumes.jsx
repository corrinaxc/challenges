import Link from "next/link"
import { useState } from "react";
import { volumes } from "@/resources 3/lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
const router = useRouter();
    function handleClick({event}) {
        const randomIndex = Math.floor(Math.random() * volumes.length);
        const randomVolumeSlug = volumes[randomIndex].slug
        router.push(`/volumes/${randomVolumeSlug}`);
        }

    return (
        <div>
        <h1>Volumes</h1>
        <ul>
            <li><Link href="volumes/the-fellowship-of-the-ring">The Fellowship of the Ring</Link></li>
            <li><Link href="volumes/the-two-towers">The Two Towers</Link></li>
            <li><Link href="volumes/the-return-of-the-king">The Return of the King</Link></li>
            <p> </p>
            <button onClick={handleClick}>Get Random Volume</button>
        </ul>
        </div>
    )
}
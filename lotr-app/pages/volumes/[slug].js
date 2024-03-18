import React from "react";
import Head from "next/head";
import Image from "next/image";
import { volumes } from "@/resources 3/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";

export default function VolumeDetail() {
    const router = useRouter();
    const {slug} = router.query;

    let volume = volumes.find((volume) => slug === volume.slug);

    if (!volume) {
        return <div>Volume not found</div>;
    }

    const { title, description, cover, books } = volume;

    return (
            <div>
            <Link href="/volumes">All Volumes</Link>
            <h1>{ volume.title }</h1>
            <p>{ volume.description }</p>
            <Image src={volume.cover}
            height={230}
            width={140}
            alt="book cover of fellowship of the ring"/>
        <ul>
        {books.map((book, index) => (
                    <li key={index}>
                        {book.ordinal} - {book.title}
                    </li>
                ))}
        </ul>
            </div>
        );
}
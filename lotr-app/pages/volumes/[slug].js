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

    function handleNext() {
        const currentIndex = volumes.findIndex((volume) => volume.slug === slug );
        const nextIndex = currentIndex + 1
        const nextVolume = nextIndex < volumes.length ? volumes[nextIndex] : null;
        if (nextVolume) {
            router.push(`/volumes/${nextVolume.slug}`);
        } else {
            console.log("End of Series");
        }
    }

    function handlePrev() {
        const currentIndex = volumes.findIndex((volume) => volume.slug === slug );
        const prevIndex = currentIndex - 1
        const prevVolume = prevIndex < volumes.length ? volumes[prevIndex] : null;
        if (prevVolume) {
            router.push(`/volumes/${prevVolume.slug}`);
        } else {
            console.log("Beginning of Series");
        }
    }

    return (
            <div>
            <Link href="/volumes">All Volumes</Link>
            <h1>{ volume.title }</h1>
            <p>{ volume.description }</p>
            <Image src={volume.cover}
            height={230}
            width={140}
            alt={`book cover of ${volume.title}`}/>
        <ul>
        {books.map((book, index) => (
                    <li key={index}>
                        {book.ordinal} - {book.title}
                    </li>
                ))}
        </ul>
        <p> </p>
        <button onClick={handlePrev}>Previous Volume</button>
        <button onClick={handleNext}>Next Volume</button>
        </div>
        );
}
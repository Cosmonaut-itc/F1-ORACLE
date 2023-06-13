import React from "react";
import Image from "next/image";

export default function LandingPage() {
    return (
        <div>
            <Image
                src="/Oracle-Red-Bull-Racing-Logo (1).png"
                alt="Red Bull"
                width={220}
                height={220}
                className=" mx-auto self-center"
            />
            <h1>Landing Page</h1>
        </div>
    )
}

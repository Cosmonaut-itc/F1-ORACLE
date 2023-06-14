import React from "react";
import Link from "next/link";

export default function LandingPageButton({ text }) {
    return (
        <button className="container flex bg-[#E2051E] text-white text-base font-light items-center rounded-md px-4 py-2 mt-12 mx-auto justify-center w-48 h-16">
            {text}
        </button>
    )
}
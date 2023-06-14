import React from "react";
import Image from "next/image";
import LandingPageButton from "./LandingPageButton";

export default function LandingPage() {
    return (
        <div >
            <Image
                src="/Oracle-Red-Bull-Racing-Logo (1).png"
                alt="Red Bull"
                width={220}
                height={220}
                className="mx-auto"
            />
            <LandingPageButton text="Reglas" />
            <LandingPageButton text="Predecir Carreras" />
            <LandingPageButton text="Pilotos" />
            <LandingPageButton text="Equipos" />
        </div>
    )
}

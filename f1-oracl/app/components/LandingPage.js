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
            <LandingPageButton text="Reglas" link="/f1/reglas" />
            <LandingPageButton text="Predecir Carreras" link="/f1/prediccion" />
            <LandingPageButton text="Pilotos" link="/f1/pilotos" />
            <LandingPageButton text="Equipos" link="/f1/equipos" />
        </div>
    )
}

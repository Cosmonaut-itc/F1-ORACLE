'use client'
import React from "react";
import ListaPilotos from "./components/list";

export default function Pilotos(){
    return(
        <div>
            <h1 className="text-4xl font-bold text-start mt-9 mx-4">Pilotos</h1>
            <ListaPilotos />
        </div>
    )
}
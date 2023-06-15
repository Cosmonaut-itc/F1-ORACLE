'use client'
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';

const pilots = [
    {
        id: 1,
        name: 'Checo Perez',
        team: 'Red Bull Racing',
        imageUr2:
            '/checo.png',
        imageUrl:
            'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1920.medium.jpg/1677069773437.jpg',
        countryURL:
            'PLACEHOLDER',  
        href: '/f1/pilotos/info'
    },
    {
        id: 2,
        name: 'Max Verstappen',
        team: 'Red Bull Racing',
        imageUrl:
            'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.640.medium.jpg/1677069646195.jpg',
        imageUrl2:
            '/verstappen.png',
        countryURL:
            'PLACEHOLDER',  
        href: '/f1/pilotos/info'  
    },
    {
        id: 3,
        name: 'Lewis Hamilton',
        team: 'Mercedez AMG Petronas',
        imageUrl:
            'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1536.high.jpg',
        imageUrl2:
            '/hamilton.png',
        countryURL:
            'PLACEHOLDER',  
        href: '/f1/pilotos/info' 

    },
    {
        id: 4,
        name: 'Valtteri Bottas',
        team: 'Alpha Romeo Racing',
        imageUrl:
            'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/bottas.jpg.img.1920.medium.jpg/1677069810695.jpg',
        imageUrl2:
            '/bottas.png',
        countryURL:
            'PLACEHOLDER',  
        href: '/f1/pilotos/info' 
    },
    {
        id: 5,
        name: 'Charles Leclerc',
        team: 'Ferrarri',
        imageUrl:
            'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/leclerc.jpg.img.1920.medium.jpg/1677069223130.jpg',
        imageUrl2:
            '/lecrerc.png',
        countryURL:
            'PLACEHOLDER',  
        href: '/f1/pilotos/info' 

    },
    {
        id: 6,
        name: 'Carlos Sainz',
        team: 'Ferrari',
        imageUrl:
            'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/sainz.jpg.img.1920.medium.jpg/1677069189406.jpg',
        imageUrl2:
            '/sainz.png',
        countryURL:
            'PLACEHOLDER',  
        href: '/f1/pilotos/info' 

    },
]
export default function Pilotos(){
    var searchParams = useSearchParams();
    const data = searchParams.get('ID')
    console.log(pilots);
    console.log(data)

    return(
        <div>
            <h1 className="text-4xl font-bold text-start mt-9 mx-4">{pilots[data-1].name}</h1>

            <img className=" flex-none rounded-full bg-gray-50" src={pilots[data-1].imageUrl} alt="" width={100} height={100}/>
            <Image className='mt-4 mx-auto' src={pilots[data-1].imageUr2} height={500} width={500}/>
        </div>
    )
}
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'


const people = [
    {
        id: 1,
        name: 'Checo Perez',
        team: 'Red Bull Racing',
        imageUrl:
            'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1920.medium.jpg/1677069773437.jpg',
        countryURL:
            'https://flagcdn.com/w40/mx.png',    
        href: '/f1/pilotos/info'
    },
    {
        id: 2,
        name: 'Max Verstappen',
        team: 'Red Bull Racing',
        imageUrl:
            'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.640.medium.jpg/1677069646195.jpg',
        countryURL:
            'https://flagcdn.com/w40/nl.png',  
        href: '/f1/pilotos/info'  
    },
    {
        id: 3,
        name: 'Lewis Hamilton',
        team: 'Mercedez AMG Petronas',
        imageUrl:
            'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1536.high.jpg',
        countryURL:
            'https://flagcdn.com/w40/gb.png',
        href: '/f1/pilotos/info' 

    },
    {
        id: 4,
        name: 'Valtteri Bottas',
        team: 'Alpha Romeo Racing',
        imageUrl:
            'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/bottas.jpg.img.1920.medium.jpg/1677069810695.jpg',
        countryURL:
            'https://flagcdn.com/w40/fi.png',
        href: '/f1/pilotos/info' 
    },
    {
        id: 5,
        name: 'Charles Leclerc',
        team: 'Ferrarri',
        imageUrl:
            'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/leclerc.jpg.img.1920.medium.jpg/1677069223130.jpg',
        countryURL:
            'https://flagcdn.com/w40/mc.png',
        href: '/f1/pilotos/info' 

    },
    {
        id: 6,
        name: 'Carlos Sainz',
        team: 'Ferrari',
        imageUrl:
            'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/sainz.jpg.img.1920.medium.jpg/1677069189406.jpg',
        countryURL:
            'https://flagcdn.com/w40/es.png',
        href: '/f1/pilotos/info' 

    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }

//En vez de usar el <ChevronRightIcon /> cambienlo por una imagen del pais del piloto

export default function ListaPilotos() {
    return (
    <ul
    role="list"
    className="divide-y divide-gray-100 divide overflow-hidden shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl overflow-y-scroll"
    >
    {people.map((person) => (
        <li key={person.name} className="relative flex justify-between gap-x-6 px-4 py-7 cursor-pointer sm:px-6">
            <div className="flex gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-white">
                    <Link
                        href={{
                            pathname: person.href,
                            query: {ID:person.id} // the data
                        }}>
                            <span className="absolute inset-x-0 -top-px bottom-0" />
                            {person.name}
                    </Link>
                        
                    </p>
                    <p className="mt-1 flex text-xs leading-5 text-gray-400">
                        {person.team}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-x-4">
                <img className="flex-none bg-transparent" src={person.countryURL} alt="" />
            </div>
        </li>
    ))}
    </ul>
)
}
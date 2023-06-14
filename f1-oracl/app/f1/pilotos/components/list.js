import { ChevronRightIcon } from '@heroicons/react/20/solid'


const people = [
    {
        name: 'Checo Perez',
        team: 'Red Bull Racing',
        imageUrl:
            'https://i.ibb.co/XYwkM0C/checo.png',
        countryURL:
            'PLACEHOLDER',  
    },
    {
        name: 'Max Verstappen',
        team: 'Red Bull Racing',
        imageUrl:
            'https://i.ibb.co/wdLNLRr/verstappen.png',
        countryURL:
            'PLACEHOLDER',  
    },
    {
        name: 'Lewis Hamilton',
        team: 'Mercedez AMG Petronas',
        imageUrl:
            'https://i.ibb.co/bN8TtPJ/hamilton.png',
        countryURL:
            'PLACEHOLDER',  

    },
    {
        name: 'Valtteri Bottas',
        team: 'Alpha Romeo Racing',
        imageUrl:
            'https://i.ibb.co/bHJyrjt/bottas.png',
        countryURL:
            'PLACEHOLDER',  
    },
    {
        name: 'Charles Leclerc',
        team: 'Ferrarri',
        imageUrl:
            'https://i.ibb.co/b1Gc29k/leclerc.png',
        countryURL:
            'PLACEHOLDER',  

    },
    {
        name: 'Carlos Sainz',
        team: 'Ferrari',
        imageUrl:
            'https://i.ibb.co/ZV0mZC8/sainz.png',
        countryURL:
            'PLACEHOLDER',  

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
                        <a href={person.href}>
                            <span className="absolute inset-x-0 -top-px bottom-0" />
                                {person.name}
                        </a>
                    </p>
                    <p className="mt-1 flex text-xs leading-5 text-gray-400">
                        {person.team}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-x-4">
                <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" /> 
            </div>
        </li>
    ))}
    </ul>
)
}
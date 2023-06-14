import { ChevronRightIcon } from '@heroicons/react/20/solid'


const people = [
    {
        name: 'Checo Perez',
        team: 'Red Bull Racing',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        countryURL:
            'PLACEHOLDER',  
    },
    {
        name: 'Max Verstappen',
        team: 'Red Bull Racing',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        countryURL:
            'PLACEHOLDER',  
    },
    {
        name: 'Lewis Hamilton',
        team: 'Mercedez AMG Petronas',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        countryURL:
            'PLACEHOLDER',  

    },
    {
        name: 'Valtteri Bottas',
        team: 'Alpha Romeo Racing',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        countryURL:
            'PLACEHOLDER',  
    },
    {
        name: 'Charles Leclerc',
        team: 'Ferrarri',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        countryURL:
            'PLACEHOLDER',  

    },
    {
        name: 'Carlos Sainz',
        team: 'Ferrari',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
        <li key={person.team} className="relative flex justify-between gap-x-6 px-4 py-7 cursor-pointer sm:px-6">
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
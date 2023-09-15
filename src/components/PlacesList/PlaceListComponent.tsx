import { motion } from "framer-motion";
import {useState} from "react";
import {City} from "../../App.tsx";
const places = [
    {
        id: 1,
        name: 'Paris',
        description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.',
        image: 'https://imageio.forbes.com/specials-images/imageserve/6468ea7be5b5bee9d12e9948/eiffel-tour-and-Paris-cityscape/0x0.jpg?format=jpg&height=1835&width=2767',
        address: 'Capital of France',
    },
    {
        id: 2,
        name: 'Rome, Italy',
        description: 'Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale',
        image: 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg',
        address: 'Capital of Italy',
    },
    {
        id: 3,
        name: 'Rio de Janeiro, Brazil',
        description: 'Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. ',
        image: 'https://a.cdn-hotels.com/gdcs/production143/d357/42fb6908-dcd5-4edb-9f8c-76208494af80.jpg?impolicy=fcrop&w=800&h=533&q=medium',
        address: 'City in Brazil',
    },
    {
        id: 4,
        name: 'Vancouver',
        description: 'Vancouver, a bustling west coast seaport in British Columbia, is among Canada’s densest, most ethnically diverse cities.',
        image: 'https://lp-cms-production.imgix.net/2021-04/GettyRF_1124659884.jpg',
        address: 'City in Canada',
    },
    {
        id: 5,
        name: 'Hong Kong',
        description: 'Hong Kong, officially the Hong Kong Special Administrative Region of the People\'s Republic of China, is a city and a special administrative region in China',
        image: 'https://cdn.britannica.com/75/156475-050-D97BBA64/Skyline-Hong-Kong.jpg',
        address: 'Special administrative regions of China',
    },
    {
        id: 6,
        name: 'Venice',
        description: 'Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces.',
        image: 'https://cdn.britannica.com/62/153462-050-3D4F41AF/Grand-Canal-Venice.jpg',
        address: 'City in Italy',
    }
]

interface PlaceListComponentProps {
    setCity: (city: City) => void;
}
// By Andres Sanabria
const PlaceListComponent = (props: PlaceListComponentProps) => {
    const [cityVoted, setCityVoted] = useState(
        localStorage.getItem('city') ? JSON.parse(localStorage.getItem('city') ??'') : null
    )
    const voteCity = (city: City) => {
        localStorage.setItem('city', JSON.stringify(city))
        setCityVoted(city);
    };
    return(
        <div
            className='w-full mx-auto grid sm:grid-cols-2 gap-2 grid-cols-2 max-w-screen-md md:grid-cols-3'>
            {places.map((place, index) => (
                <motion.div key={index} onClick={() => props.setCity(place)} className='flex hover:border-gray-300 cursor-pointer border-solid border border-gray-100 flex-col justify-center items-center rounded-md gap-2 p-3'>
                    <img src={place.image} alt={place.name} className='w-full h-32 rounded-md'/>
                    <div className='flex flex-col'>
                        <div>
                            <h1 className='text-lg font-medium'>{place.name}</h1>
                            <p className='text-[0.8rem] line-clamp-1 -my-1 text-gray-500'>{place.address}</p>
                        </div>
                        <p className='text-sm line-clamp-2 my-3'>{place.description}</p>
                    </div>
                    <div className={"flex w-full gap-2"}>
                        <button className="bg-black py-1.5 text-[0.8rem] px-2 rounded-md text-white w-full">View</button>
                        <button onClick={event => {
                            event.stopPropagation();
                            voteCity(place);
                        }} className="bg-white py-1.5 text-[0.8rem] px-2 border-solid border border-black rounded-md w-full">{
                            cityVoted && cityVoted.id === place.id ? 'Voted' : 'Vote'
                        }</button>
                    </div>
                </motion.div>
            ))}
        </div>
    )
};
export default PlaceListComponent;

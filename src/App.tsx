import {PlaceList} from "./components/PlacesList";
import CityDetail from "./components/CityDetail/CityDetail.tsx";
import {useState} from "react";
import {motion} from "framer-motion";

export interface City {
    name: string;
    description: string;
    image: string;
}

function App() {
  const [city, setCity] = useState<City | null>(null)
  return (
      <div className={"flex w-full h-screen"}>
        <motion.div
            initial={{
            width: '100%',
            }}
            animate={{
            width: city ? '60%' : '100%',
        }} className={` px-12`}>
          <div className="my-12">
            <h1 className={'text-center text-3xl font-medium'}>Six beautiful cities in the world</h1>
            <p className={"text-center text-sm mt-3 text-gray-500"}>By Andres Sanabria</p>
          </div>
          <PlaceList setCity={setCity}/>
        </motion.div>
        {city && (
          <CityDetail city={city} setCity={setCity}/>
        )}
      </div>
  )
}

export default App

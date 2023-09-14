import { motion } from "framer-motion";
const CityDetail = ({city, setCity}) => {
    return(
        <motion.div
            initial={{
            x: 100,
            opacity: 0}}
            animate={{
            x: 0,
            opacity: 1
            }}
            className={"border-l border-solid border-gray-200 w-[40%]"}>
            <div className='p-3 mt-3'>
                <button className={"text-gray-500 py-1 text-sm px-4 hover:border-gray-400 border border-solid border-gray-300 rounded-md hover:text-gray-700"} onClick={() => setCity(null)}>
                    Close
                </button>
            </div>
            <div style={{ backgroundImage: `url('${city.image}')`}} className="bg-cover relative m-3 rounded-md overflow-hidden bg-center h-[22rem]">
                <div className="absolute right-0 top-0 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,.4)_0,rgba(0,0,0,.1)+20%,transparent_50%,rgba(0,0,0,.1)_75%,#00000090)]"></div>
            </div>
            <div className="p-3 pt-5">
                <h2 className='text-3xl'>{city.name}</h2>
                <p className="text-base mt-4 text-gray-500">{city.description}</p>
            </div>
        </motion.div>
    )
};
export default CityDetail;
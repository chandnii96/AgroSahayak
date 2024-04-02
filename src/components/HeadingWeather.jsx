import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';


const HeadingWeather = () => {
    return (
        <div className="h-200  bg-white  border-t-2 border-b-2 border-green-800 flex flex-row items-center">
            <div className="">
                <Link to="/" className=" h-6 w-6"><IoIosArrowBack className=" h-8 w-8 rounded-full bg-green-700" /></Link>
            </div>
            <div className="p-4 ml-[12vh]">
                <p className="text-2xl text-green-800 font-orelega font-extrabold">Weather</p>
            </div>


        </div>
    )
}

export default HeadingWeather
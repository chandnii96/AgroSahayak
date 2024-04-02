import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from 'react-router-dom';


const HeadingCommunity = () => {
    return (
        <div className="h-200  bg-white  border-t-2 border-b-2 border-green-800 flex flex-row items-center">
            <div className="">
            <Link to="/" ><IoIosArrowDropleftCircle className="fill-green-900 w-10 h-10"/></Link>
            </div>
            <div className="p-4 ml-[12vh]">
                <p className="text-2xl text-green-800 font-orelega font-extrabold">Community</p>
            </div>


        </div>
    )
}

export default HeadingCommunity
import HeadingMarketPrice from "../components/HeadingMarketPrice"
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

const MarketPrice = () => {
    return (
        <div className="bg-blue-500 w-full h-screen">
            <div className="bg-blue-500 min-h-screen flex justify-center items-center">
                <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4 ">
                <HeadingMarketPrice/>
                <div className="flex space-x-5">
                    <div>
                        <div className="ml-6 font-bold pb-1">Category</div>
                        <div className="bg-white w-28 h-10 rounded-lg flex p-4 space-x-4 border-2 border-black">
                            <div className="  flex justify-center items-center ">
                                <p className=" justify-center items-center mr- text-left">All</p>
                                <Link to="/" ><IoIosArrowDown className="  w-10 h-10 ml-9  "/></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex ml-6 font-bold pb-1">Crop</div>
                        <div className="bg-white w-28 h-10 rounded-lg flex p-4 space-x-4 border-2 border-black">
                            <div className="  flex justify-center items-center ">
                                <p className=" justify-center items-center mr- text-left">All</p>
                                <Link to="/" ><IoIosArrowDown className="  w-10 h-10 ml-9  "/></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="ml-6 font-bold pb-1">State</div>
                        <div className="bg-white w-28 h-10 rounded-lg flex p-4 space-x-4 border-2 border-black">
                            <div className="flex justify-center items-center ">
                                <p className=" justify-center items-center mr- text-left">All</p>
                                <Link to="/" ><IoIosArrowDown className="  w-10 h-10 ml-9  "/></Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="bg-green-300 w-340 h-123 rounded-lg p-4 border-2 border-black">
                        <Link to="/cropmarketprice" className="flex">
                            <p className=" font-bold text-2xl">Paddy Basmati </p>
                            <p className=" font-bold text-xl mr-5"> ₹2135/Q</p>
                            <div className="bg-green-900 w-28 h-10 rounded-full p-2 flex items-center justify-center border-black">
                                <FaLongArrowAltUp className="  w-10 h-8 fill-white "/>
                                <p className=" justify-center items-center  text-left text-white font-bold text-2xl ml-0">0.48%</p>   
                            </div>
                        </Link>
                        <p>West Champaran</p>
                    </div>


                    <div className="bg-green-300 w-340 h-123 rounded-lg p-4 border-2 border-black">
                        <div className="flex ">
                            <p className=" font-bold text-2xl">Tomato </p>
                            <p className=" font-bold text-xl ml-12"> ₹5000/Q</p>
                            <div className="bg-yellow-600 w-28 h-10 rounded-full p-2 flex items-center justify-center border-black ml-7">
                                <FaArrowsAltH className="  w-10 h-8 fill-white "/>
                                <p className=" justify-center items-center  text-left text-white font-bold text-2xl ml-0">0%</p>   
                            </div>
                        </div>
                        <p>Gurgaon</p>
                    </div>


                    <div className="bg-green-300 w-340 h-123 rounded-lg p-4 border-2 border-black">
                        <div className="flex">
                            <p className=" font-bold text-2xl ">Capsicum</p>
                            <p className=" font-bold text-xl ml-7"> ₹3000/Q</p>
                            <div className="bg-red-600 w-28 h-10 rounded-full p-2 flex items-center justify-center border-black ml-6">
                                <FaLongArrowAltDown className=" w-10 h-8 fill-white "/>
                                <p className=" justify-center items-center  text-left text-white font-bold text-2xl ml-0">4%</p>   
                            </div>
                        </div>
                        <p>Gurgaon</p>
                    </div>


                    <div className="bg-green-300 w-340 h-123 rounded-lg p-4 border-2 border-black">
                        <div className="flex justify-center space-x-7 ">
                            <p className=" font-bold text-2xl">Bottle Gourd</p>
                            <p className=" font-bold text-xl "> ₹1000/Q</p>
                            <div className="bg-green-900 w-28 h-10 rounded-full p-2 flex items-center justify-center border-black">
                                <FaLongArrowAltUp className="  w-10 h-8 fill-white "/>
                                <p className=" justify-center items-center  text-left text-white font-bold text-2xl ml-0">10%</p>   
                            </div>
                        </div>
                        <p>Gurgaon</p>
                    </div>


                    <div className="bg-green-300 w-340 h-123 rounded-lg p-4 border-2 border-black">
                        <div className="flex">
                            <p className=" font-bold text-2xl">Banana</p>
                            <p className=" font-bold text-xl ml-12"> ₹2655/Q</p>
                            <div className="bg-green-900 w-28 h-10 rounded-full p-2 flex items-center justify-center border-black ml-8">
                                <FaLongArrowAltUp className="  w-10 h-8 fill-white "/>
                                <p className=" justify-center items-center  text-left text-white font-bold text-2xl ml-0">34%</p>   
                            </div>
                        </div>
                        <p>Gurgaon</p>
                    </div>


                    <div className="bg-green-300 w-340 h-123 rounded-lg p-4 border-2 border-black">
                        <div className="flex">
                            <p className=" font-bold text-2xl">Apple </p>
                            <p className=" font-bold text-xl ml-16"> ₹8500/Q</p>
                            <div className="bg-red-600 w-28 h-10 rounded-full p-2 flex items-center justify-center border-black ml-8">
                                <FaLongArrowAltDown className="  w-10 h-8 fill-white "/>
                                <p className=" justify-center items-center  text-left text-white font-bold text-2xl ml-0">32%</p>   
                            </div>
                        </div>
                        <p>Gurgaon</p>
                    </div>


               

                

                

    


                </div>
            </div>
        </div>
    
    )
  }
  
  export default MarketPrice
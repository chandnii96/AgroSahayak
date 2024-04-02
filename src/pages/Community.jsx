import Heading from "../components/HeadingCommunity"
import { Link } from 'react-router-dom';
import {IoSearchSharp} from "react-icons/io5";
import { BsFilterCircle } from "react-icons/bs";
import { FaComments, FaUserLarge } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";

const Community = () => {
    return (
        <div className="bg-blue-500 w-full h-screen">
            <div className="bg-blue-500 min-h-screen flex justify-center items-center">
                <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4">
                    <Heading/>
                    <div className="flex flex-row align items-center">
                        <div className="w-[37vh] h-8 rounded-full border solid border-2 border-black flex flex-row">
                            <p className="ml-3 font-bold mt-1">Search...</p>
                            <IoSearchSharp className="w-6 h-6 mt-1 ml-[21vh] " />
                        </div>
                        <div className="">
                            <BsFilterCircle className=" ml-4 h-8 w-8 rounded-full bg-green-500" />
                        </div>
                        <div className="ml-4 font-semibold  text-xl ">
                            <p>Filter</p>
                        </div>
                    </div>
                    <div className="w-15 h-[6vh] flex flex-row font-semibold text-xl border solid border-black border-l-0 border-r-0  ">
                        <div className="w-[28vh]  rounded-t-lg rounded-t-2xl  bg-green-400">
                            <p className="ml-[6vh] mt-1 ">All Posts</p>
                        </div> 
                        <Link to="/Mypost" className="ml-[5vh] mt-1">My Posts</Link>  
     
                    </div>
                    <div className="">
                        <div className="">
                               <div className="flex flex-row">
                                    <FaUserLarge className="h-8 w-8 rounded-full bg-white border solid border-black"/>
                                    <p className="ml-2 mt-1 font-medium">Chandani kumari</p>
                                </div>  
                            <div className="border solid bg-green-400 w-340 h-[20vh] flex flex-row rounded-2xl border solid border-black mt-2">
                                        <div className="w-[30vh] h-[30vh] mt-2 ml-2">
                                            <img src="https://www.scidev.net/global/wp-content/uploads/2020/11/Rust_leaves_MAIN.jpg" className="rounded-3xl object-contain  "/>
                                        </div>    
                                        <div className="bg-color">
                                            <div className="border solid border-black bg-white rounded-2xl mt-2 text-xs ml-4">
                                                <p className="ml-3">What is happening to my crop?</p>
                                            </div>
                                        <div className=" flex flex-col justify-end ml-[17vh] ">
                                            <p className="text-xs">15m ago</p>
                                            <AiFillLike className=" ml-6 mt-5" />
                                            <FaComments className=" ml-6" />
                                            </div> 
                                        </div>
                                             
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex flex-row">
                                <FaUserLarge className="h-8 w-8 rounded-full bg-white border solid border-black" />
                                <p className="ml-2 mt-1 font-medium">Sandhya Yadav</p>
                            </div>
                            <div className="border solid bg-green-400 w-340 h-[20vh] flex flex-row rounded-2xl border solid border-black mt-2">
                                <div className="w-[30vh] h-[30vh] mt-2 ml-2">
                                    <img src="https://www.springwise.com/wp-content/uploads/2018/04/Saillog_Agrio_app_diagnosis_of_crop_disease_Springwise.jpg" className="rounded-3xl object-contain  " />
                                </div>
                                <div className="bg-color">
                                    <div className="border solid border-black bg-white rounded-2xl mt-2 text-xs ml-4">
                                        <p className="ml-3">How should I treat this disease?</p>
                                    </div>
                                    <div className=" flex flex-col justify-end ml-[17vh] ">
                                        <p className="text-xs">2hr ago</p>
                                        <AiFillLike className=" ml-6 mt-5" />
                                        <FaComments className=" ml-6" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex flex-row">
                                <FaUserLarge className="h-8 w-8 rounded-full bg-white border solid border-black" />
                                <p className="ml-2 mt-1 font-medium">Avispsa Pradhan</p>
                            </div>
                            <div className="border solid bg-green-400 w-340 h-[20vh] flex flex-row rounded-2xl border solid border-black mt-2">
                                <div className="w-[30vh] h-[30vh] mt-2 ml-2">
                                    <img src="https://earthsally.com/wp-content/uploads/2021/03/diseasebanner.jpg" className="rounded-3xl object-contain  " />
                                </div>
                                <div className="bg-color">
                                    <div className="border solid border-black bg-white rounded-2xl mt-2 text-xs ml-4">
                                        <p className="ml-3">What is happening to my crop?</p>
                                    </div>
                                    <div className=" flex flex-col justify-end ml-[17vh] ">
                                        <p className="text-xs">6d ago</p>
                                        <AiFillLike className=" ml-6 mt-5" />
                                        <FaComments className=" ml-6" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> 
                </div> 
            </div>    
        </div> 
    )   
}
export default Community
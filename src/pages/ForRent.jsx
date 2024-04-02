import { IoIosArrowForward } from "react-icons/io";
import Heading from "../components/Heading"
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Link } from 'react-router-dom';

const ForRent = () => {
    return (
        <div className="bg-blue-500 w-full h-screen ">
            <div className="bg-blue-500 min-h-screen flex justify-center items-center">
                <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4 px-0 pb-0">
                <Heading className="m-0 p-0"/>
                <div className="flex items-center justify-center gap-28 border-b-2 border-green-800 mt-0 p-0 h-[8vh]">
                    <Link to='/forsale' className="font-medium text-2xl ">For Sale</Link>
                    <p className="font-extrabold text-2xl ">For Rent</p>
                </div>
                <div className="rounded-lg flex p-4 space-x-4 border-2 border-green-300 mx-5 pb-3 ">
                <div className="w-80 space-y-2 flex flex-row justify-between gap-10">

                    <div className="w-1/3">
                        <img src="https://5.imimg.com/data5/OL/WU/MY-34642013/bio-p-fertilizer-500x500.jpg" alt="criyagen" />
                    </div>


                    <div className="">
                    <p className='flex items-center justify-start font-bold text-xl'>Criyagen</p>
                    <p className='flex items-center justify-start'>00-00-50</p>

                    <div className="flex flex-row justify-center gap-10">
                        <p className="">₹230</p>
                        <p className="">₹800</p>
                    </div>


                    < div className="flex flex-row items-center justify-between mt-10 px-0">
                        <p className="text-green-800 text-bold">View Details</p>
                        <IoIosArrowForward className="fill-green-800"/>
                    </div>

                    </div>
                </div>

                </div>


                <div className="rounded-lg flex p-4 space-x-4 border-2 border-green-300 mx-5 pb-3 ">
                <div className="w-80 space-y-2 flex flex-row justify-between gap-10">

                    <div className="w-1/3">
                        <img src="https://5.imimg.com/data5/OL/WU/MY-34642013/bio-p-fertilizer-500x500.jpg" alt="criyagen" />
                    </div>


                    <div className="">
                    <p className='flex items-center justify-start font-bold text-xl'>Criyagen</p>
                    <p className='flex items-center justify-start'>00-00-50</p>

                    <div className="flex flex-row justify-center gap-10">
                        <p className="">₹230</p>
                        <p className="">₹800</p>
                    </div>


                    < div className="flex flex-row items-center justify-between mt-10 px-0">
                        <p className="text-green-800 text-bold">View Details</p>
                        <IoIosArrowForward className="fill-green-800"/>
                    </div>

                    </div>
                </div>

                </div>


                   <div className="rounded-lg flex p-4 space-x-4 border-2 border-green-300 mx-5 pb-3 ">
                <div className="w-80 space-y-2 flex flex-row justify-between gap-10">

                    <div className="w-1/3">
                        <img src="https://5.imimg.com/data5/OL/WU/MY-34642013/bio-p-fertilizer-500x500.jpg" alt="criyagen" />
                    </div>


                    <div className="">
                    <p className='flex items-center justify-start font-bold text-xl'>Criyagen</p>
                    <p className='flex items-center justify-start'>00-00-50</p>

                    <div className="flex flex-row justify-center gap-10">
                        <p className="">₹230</p>
                        <p className="">₹800</p>
                    </div>


                    < div className="flex flex-row items-center justify-between mt-10 px-0">
                        <p className="text-green-800 text-bold">View Details</p>
                        <IoIosArrowForward className="fill-green-800"/>
                    </div>

                    </div>
                </div>

                </div>
                

                <div className="rounded-lg flex p-4 space-x-4 border-2 border-green-300 mx-5 pb-3 ">
                <div className="w-80 space-y-2 flex flex-row justify-between gap-10">

                    <div className="w-1/3">
                        <img src="https://5.imimg.com/data5/OL/WU/MY-34642013/bio-p-fertilizer-500x500.jpg" alt="criyagen" />
                    </div>


                    <div className="">
                    <p className='flex items-center justify-start font-bold text-xl'>Criyagen</p>
                    <p className='flex items-center justify-start'>00-00-50</p>

                    <div className="flex flex-row justify-center gap-10">
                        <p className="">₹230</p>
                        <p className="">₹800</p>
                    </div>


                    < div className="flex flex-row items-center justify-between mt-10 px-0">
                        <p className="text-green-800 text-bold">View Details</p>
                        <IoIosArrowForward className="fill-green-800"/>
                    </div>

                    </div>
                </div>

                </div>
                <Link to='/mydukaan'>
                <Button/>
                </Link>
                
                <Footer className=""/>
                </div>
            </div>
        </div>
    
    )
  }
  
  export default ForRent
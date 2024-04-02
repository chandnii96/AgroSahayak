import { IoIosArrowForward } from "react-icons/io";
import Heading from "../components/Heading"
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const ForSale = () => {
    return (
        <div className="bg-blue-500 w-full h-screen ">
            <div className="bg-blue-500 min-h-screen flex justify-center items-center">
                <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4 px-0 pb-0">
                <Heading className="m-0 p-0"/>
                <div className="flex items-center justify-center m-4 gap-28 border-b-2 border-green-800 mt-0 p-0 h-[8vh]">
                    <p className="font-extrabold text-2xl ">For Sale</p>
                    <Link to='/forrent' className="font-medium text-2xl ">For Rent</Link>
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
                        <p className="mr-16">₹230</p>
                    </div>


                    < div className="flex flex-row items-center justify-between mt-2">
                        <p className="text-green-800 text-bold ">View Details</p>
                        <IoIosArrowForward className="fill-green-800 "/>
                    </div>

                    </div>
                </div>

                </div>


                <div className="rounded-lg flex p-4 space-x-4 border-2 border-green-300 mx-5 pb-3 ">
                <div className="w-80 space-y-2 flex flex-row justify-between gap-10">

                    <div className="w-1/3">
                        <img src="https://5.imimg.com/data5/WC/UT/MV/SELLER-95569923/crystal-phosphate-ltd-abacin-500x500.jpg" alt="criyagen" />
                    </div>


                    <div className="">
                    <p className='flex items-center justify-start font-bold text-xl'>Crystal Abacin</p>
                    <p className='flex items-center justify-start'>00-00-50</p>

                    <div className="flex flex-row justify-center gap-10">
                        <p className="mr-28">₹280</p>
                    </div>


                    < div className="flex flex-row items-center justify-between mt-2">
                    <p className="text-green-800 text-bold ml-12">View Details</p>
                        <IoIosArrowForward className="fill-green-800"/>
                    </div>

                    </div>
                </div>

                </div>


                   <div className="rounded-lg flex p-4 space-x-4 border-2 border-green-300 mx-5 pb-3 ">
                <div className="w-80 space-y-2 flex flex-row justify-between gap-10">

                    <div className="w-1/3">
                        <img src="https://5.imimg.com/data5/SELLER/Default/2023/3/292846222/EM/IK/YH/160966530/img20230306121000-copy-1000x1000.jpg" alt="criyagen" />
                    </div>


                    <div className="">
                    <p className='flex items-center justify-start font-bold text-xl'>Dhanuka Mycore</p>
                    <p className='flex items-center justify-start'>00-00-50</p>

                    <div className="flex flex-row justify-center gap-10">
                        <p className="mr-32">₹230</p>
                    </div>


                    < div className="flex flex-row items-center justify-between mt-10 px-0">
                    <p className="text-green-800 text-bold ml-16">View Details</p>
                        <IoIosArrowForward className="fill-green-800"/>
                    </div>

                    </div>
                </div>

                </div>
                

                <div className="rounded-lg flex p-4 space-x-4 border-2 border-green-300 mx-5 pb-3 ">
                <div className="w-80 space-y-2 flex flex-row justify-between gap-10">

                    <div className="w-1/3">
                        <img src="https://5.imimg.com/data5/SE/YV/OB/GLADMIN-3061/dhanuka-dhanzyme-gold-granules-500x500.png" alt="criyagen" />
                    </div>


                    <div className="">
                    <p className='flex items-center justify-start font-bold text-xl'>Dhanuka Mycore</p>
                    <p className='flex items-center justify-start'>00-00-50</p>

                    <div className="flex flex-row justify-center gap-10">
                        <p className="mr-36">₹80</p>
                    </div>


                    < div className="flex flex-row items-center justify-between mt-10 px-0">
                    <p className="text-green-800 text-bold ml-16">View Details</p>
                        <IoIosArrowForward className="fill-green-800"/>
                    </div>

                    </div>
                </div>

                </div>
                
                
                <Footer className="mb-0"/>
                </div>
            </div>
        </div>
    
    )
  }
  
  export default ForSale
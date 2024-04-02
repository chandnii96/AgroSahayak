import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import HeadingMyDukaan from "../components/HeadingMyDukaan"
import Footer from "../components/Footer";

const MyDukaan = () => {
    return (
        <div className="bg-blue-500 w-full h-screen ">
            <div className="bg-blue-500 min-h-screen flex justify-center items-center">
                <div className="bg-white max-w-md w-full h-[100vh] p-8 rounded-lg shadow-lg space-y-4 px-0 pb-0">
                <HeadingMyDukaan className="m-0 p-0"/>
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
                <div className="w-14 h-12 rounded-full border-solid border-2 border-black ml-80">
                  <div className="ml-1 ">
                    <AiOutlinePlus className="h-11 w-11" />
                  </div>
                </div>
                <div className="w-12 h-56 "></div>


                
                
                
                <Footer className="mb-0"/>
                </div>
                
            </div>
               
        </div>
        
    
    )
  }
  
  export default MyDukaan
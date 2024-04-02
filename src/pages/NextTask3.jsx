import HeadingCropPlan from "../components/HeadingCropPlan"
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const NextTask1 = () => {
    return (
        <div className="bg-blue-500 w-full h-screen">
            <div className="bg-blue-500 min-h-screen flex justify-center items-center">
                <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4">
                    <HeadingCropPlan />
                    <div className="bg-white w-300 h-50 flex flex-row ml-5">
                        <div className="mr-4">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/agriculture-farming-gardening/grain-rice-icon.svg" className="w-14 h-12 rounded-full border-solid border-2 border-green-600 " />
                            <h className="ml-1">Wheat</h>
                        </div>
                        <div className="mr-4">
                            <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-paddy-png-image_2390874.jpg" className="w-14 h-12 rounded-full border-solid border-2 border-black" />
                            <h className="ml-1">Paddy</h>
                        </div>
                        <div className="mr-4">
                            <img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-clean-smooth-soil-free-vegetable-potatoes-png-image_5546916.jpg" className="w-14 h-12 rounded-full border-solid border-2 border-black" />
                            <h className="ml-1">Potato</h>
                        </div>
                        <div className="mr-4">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/fruits-vegetables/tomato-icon.svg" className="w-14 h-12 rounded-full border-solid border-2 border-black" />
                            <h className="ml-1">Tomato</h>
                        </div>
                        <div className="w-14 h-12 rounded-full mr-4 border-solid border-2 border-black">
                            <div className="ml-1">
                                <AiOutlinePlus className="h-11 w-11" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-300 w-340 h-123 rounded-t-lg p-2  border-2 border-black flex flex-row ">
                        <div className="w-80 space-y-2 flex flex-row justify-start align items-center ">
                            <IoIosArrowBack className=" h-4 w-11 font-bold " />
                            <Link to="/NextTask2" className=" mb- h-5 w-">Previous Task</Link>
                        </div>
                        <div className="w-80 space-y-2 flex flex-row justify-end align items-center">
                            <Link to="/NextTask4" className="h-5 w- ">Next Task</Link>
                            <IoIosArrowForward className="  h-4 w-11 font-bold " />
                        </div>
                    </div>
                    <div className="bg-green-300 w- h-50 relative bottom-4 p-2 rounded-none p-2 border-2 border-t-0 border-black">
                        <div className="w-80 space-y-2  ">
                            <p className="flex justify-center font-bold text-xl">Next Task</p>
                            <p className="flex justify-center font-bold text-xl">Pre-Irrigation</p>
                            <p className="flex justify-center">(10-6 days before sowing)</p>
                        </div>
                    </div>
                    <div className="bg-green-300 w- h-[64vh] relative bottom-8 p-2 rounded-b-lg  border-2 border-t-0 border-black">
                        <p className="mb=50 mt-2">For irrigated land, do a pre-sowing irrigation for better germination and uniform growth of wheat crop. At the germination stage adequate soil moisture is required for healthy crop. </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default NextTask1
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
                            <Link to="/NextTask3" className=" mb- h-5 w-">Previous Task</Link>
                        </div>
                        <div className="w-80 space-y-2 flex flex-row justify-end align items-center">
                            <Link to="/NextTask5" className="h-5 w- ">Next Task</Link>
                            <IoIosArrowForward className="  h-4 w-11 font-bold " />
                        </div>
                    </div>
                    <div className="bg-green-300 w- h-50 relative bottom-4 p-2 rounded-none p-2 border-2 border-t-0 border-black">
                        <div className="w-80 space-y-2  ">
                            <p className="flex justify-center font-bold text-xl">Next Task</p>
                            <p className="flex justify-center font-bold text-xl">Seed Preparation</p>
                            <p className="flex justify-center">(5-1 days before sowing)</p>
                        </div>
                    </div>
                    <div className="bg-green-300 w- h-[64vh] relative bottom-8 p-2 rounded-b-lg  border-2 border-t-0 border-black">
                        <p className="mb=2 mt-2">One-acre area requires 45kg of seed for sowing, Select a suitable variety for your area and conditions. Do not grow varieties from other regions, as they can be disease prone. Use Floatation test to check quality of the seed. Soak the seed in 2% salt solution for 15 minutes. Poor quality seeds will float, while good seeds will sink to the bottom. Discard the floating seeds. Wash the remaining seeds to remove the salt solution before sowing</p>
                        <p className="mb-2 mt-2">3 days before sowing, treat the seeds with Trichoderma viride 4g per kg of seed. One day before sowing treat with Carboxin 37.5% + Thiram 37.5% WP 2g per kg of seed.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default NextTask1
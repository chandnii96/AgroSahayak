import React from 'react'
import HeadingCropCure from "../components/HeadingCropCure"
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const CropCure = () => {
  return (
    <div className="bg-blue-500 w-full h-screen">
     <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4">
      <HeadingCropCure/>
      <Link to="/cropcuresolution" className="flex justify-center items-center">
        <div className="w-48 bg-green-300 rounded-full flex  p-4 border-2 border-black text-lg font-bold">Upload an Image</div>
      </Link>
      <p className="text-lg font-bold">Past Solutions</p>
      <div className="w-full flex bg-green-300 rounded-lg p-2 border-2 border-black">
            <div className="w-16 h-16 bg-white rounded-full border-solid mt-1 ml-3">
            <img src="https://previews.123rf.com/images/ylivdesign/ylivdesign1801/ylivdesign180103621/94109639-winter-wheat-icon-cartoon-style.jpg" className="w-12 h-12 rounded-full ml-2 mt-2"></img>
            </div>
            <div >
                <div className="ml-5 text-lg font-semibold">False Smut</div>
                <div className="ml-5">Paddy</div>
                <div className="ml-5">3 Aug 2023</div>
            </div>
            <IoIosArrowForward className="fill-green-900 w-10 h-10 ml-32 mt-4"/>
      </div>
      <div className="justify-center items-center space-y-4">
        <div className="w-full flex bg-green-300 rounded-lg p-2 border-2 border-black">
            <div className="w-16 h-16 bg-white rounded-full border-solid mt-1 ml-2">
                <img src="https://t3.ftcdn.net/jpg/01/20/60/34/360_F_120603456_sLLQRuIEqtzJBzpNvINCjCAId2AHvMqd.jpg" className="w-12 h-12 rounded-full ml-2 mt-2"></img>
            </div>
            <div >
                <div className="ml-5 text-lg font-semibold">Anthracnose</div>
                <div className="ml-5">Tomato</div>
                <div className="ml-5">1 Aug 2023</div>
            </div>
            <IoIosArrowForward className="fill-green-900 w-10 h-10 ml-32 mt-4"/>
        </div>
        <div className="w-full flex bg-green-300 rounded-lg p-2 border-2 border-black">
            <div className="w-16 h-16 bg-white rounded-full border-solid mt-1 ml-2">
            <img src="https://media.istockphoto.com/id/1159542271/vector/yummy-red-purple-onion-ring.jpg?b=1&s=612x612&w=0&k=20&c=RTS42l-_njXfvs0ZrGxYhilPPUgW9Y98Al7whCbE-fg=" className="w-12 h-12 rounded-full ml-2 mt-2"></img>
            </div>
            <div >
                <div className="ml-5 text-lg font-semibold">White Rot</div>
                <div className="ml-5">Onion</div>
                <div className="ml-5">28 Jul 2023</div>
            </div>
            <IoIosArrowForward className="fill-green-900 w-10 h-10 ml-36 mt-4"/>
        </div>
        <div className="w-full flex bg-green-300 rounded-lg p-2 border-2 border-black">
            <div className="w-16 h-16 bg-white rounded-full border-solid mt-1 ml-2">
            <img src="https://media.istockphoto.com/id/1316653172/vector/millet-grass-cereal-crops-or-grains.jpg?s=612x612&w=0&k=20&c=JQaLYn4A9omUPFjfB_gw1SqVR0NOWmS45wr-siqbygQ=" className="w-12 h-12 rounded-full ml-2 mt-2"></img>
            </div>
            <div >
                <div className="ml-5 text-lg font-semibold">Blast</div>
                <div className="ml-5">Finger Millet</div>
                <div className="ml-5">25 Jul 2023</div>
            </div>
            <IoIosArrowForward className="fill-green-900 w-10 h-10 ml-36 mt-4"/>
        </div>
        <div className="w-full flex bg-green-300 rounded-lg p-2 border-2 border-black">
            <div className="w-16 h-16 bg-white rounded-full border-solid mt-1 ml-2">
            <img src="https://t3.ftcdn.net/jpg/01/36/33/48/360_F_136334861_pBHpG4hSvyN66ddSqs0ddtKXG8Eoq3NW.jpg" className="w-12 h-12 rounded-full ml-2 mt-2"></img>
            </div>
            <div >
                <div className="ml-5 text-lg font-semibold">Anthracnose</div>
                <div className="ml-5">Mango</div>
                <div className="ml-5">20 July 2023</div>
            </div>
            <IoIosArrowForward className="fill-green-900 w-10 h-10 ml-32 mt-4"/>
        </div>
        
      </div>
      


        
      </div>
     </div>
    </div>
  )
}

export default CropCure

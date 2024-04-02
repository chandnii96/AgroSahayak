import React from 'react'
import HeadingMarketPrice from "../components/HeadingMarketPrice"
import { FaLocationDot } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { FaArrowsAltH } from "react-icons/fa";


const CropMarketPrice = () => {
  return (
    <div className="bg-blue-500 w-full h-screen">
     <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4">
      <HeadingMarketPrice/>
      <div className="h-200  bg-white border-b-2 border-slate-400 ">
        <p className='text-xl font-bold p-1'>Paddy Basmati</p>
        <div className="flex p-1">
            <p className='font-semibold'>20 Aug 2023</p>
            <FaLocationDot className='mt-0.5 ml-36'/>
            <p className='font-semibold'>West Champaran</p>
        </div>
        <div className="flex p-1 pb-3">
            <p className='font-semibold'>₹ 2135/Q</p>
            <div className="bg-green-900 w-24 h-6 rounded-full p-1 flex border-black ml-48">
                <div className=" flex  items-center">
                    <FaLongArrowAltUp className="  w-8 h-6 fill-white "/>
                    <p className="  text-white font-bold text-lg">0.48%</p>
                </div>
            </div>
        </div>
      </div>
      <div className="flex">
            <p className="text-lg p-1 font-semibold">Price Trend</p>
            <AiOutlineRise  className='w-8 h-8 mt-1 ml-1'/>
      </div>
      <div className="border-b-2 border-slate-400">
            <img src="https://www.shutterstock.com/shutterstock/videos/22300138/thumb/9.jpg?ip=x480" className="rounded-lg "></img>
      </div>
      <div className="space-y-2">
        <p className="text-lg p-1 font-semibold">Past Solutions</p>
        <div className="bg-green-300 w-340 h-123 rounded-lg flex items-center justify-center p-2 space-x-12 border-2 border-black">
            <p className="text-lg ">18 August  </p>
            <p className="text-lg "> ₹2135/Q</p>
            <div className="bg-green-900 w-24 h-6 rounded-full p-1 flex border-black items-center justify-center">
                <FaLongArrowAltUp className="  w-8 h-5 fill-white "/>
                <p className="  text-white font-bold text-lg mr-2">0.48%</p>
            </div>
        </div>
        <div className="bg-green-300 w-340 h-123 rounded-lg flex items-center justify-center p-2 space-x-12 border-2 border-black">
            <p className="text-lg ">17 August  </p>
            <p className="text-lg "> ₹2125/Q</p>
            <div className="bg-yellow-600 w-24 h-6 rounded-full p-1 flex border-black items-center justify-center">
            <FaArrowsAltH className="  w-8 h-5 fill-white "/>
                <p className="  text-white font-bold text-lg mr-2">0%</p>
            </div>
        </div>
        <div className="bg-green-300 w-340 h-123 rounded-lg flex items-center justify-center p-2 space-x-12 border-2 border-black">
            <p className="text-lg ">16 August  </p>
            <p className="text-lg "> ₹2125/Q</p>
            <div className="bg-green-900 w-24 h-6 rounded-full p-1 flex border-black items-center justify-center">
                <FaLongArrowAltUp className="  w-8 h-5 fill-white "/>
                <p className="  text-white font-bold text-lg mr-2">0.72%</p>
            </div>
        </div>
        <div className="bg-green-300 w-340 h-123 rounded-lg flex items-center justify-center p-2 space-x-12 border-2 border-black">
            <p className="text-lg ">14 August  </p>
            <p className="text-lg "> ₹2085/Q</p>
            <div className="bg-green-900 w-24 h-6 rounded-full p-1 flex border-black items-center justify-center">
                <FaLongArrowAltUp className="  w-8 h-5 fill-white "/>
                <p className="  text-white font-bold text-lg mr-2">1.20%</p>
            </div>
        </div>
        <div className="bg-green-300 w-340 h-123 rounded-lg flex items-center justify-center p-2 space-x-12 border-2 border-black">
            <p className="text-lg ">11 August  </p>
            <p className="text-lg "> ₹2075/Q</p>
            <div className="bg-green-900 w-24 h-6 rounded-full p-1 flex border-black items-center justify-center">
                <FaLongArrowAltUp className="  w-8 h-5 fill-white "/>
                <p className="  text-white font-bold text-lg mr-2">0.49%</p>
            </div>
        </div>
      </div>
      

      
      

      
      
      </div>
     </div>
    </div>
  )
}

export default CropMarketPrice
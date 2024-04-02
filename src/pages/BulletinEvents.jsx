import React from 'react'
import { IoIosShareAlt } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import HeadingEvents from "../components/HeadingEvents"
const BulletinEvents = () => {
  return (
    <div className="bg-blue-500 w-full h-screen">
     <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4">
      <HeadingEvents/>
      <div className="h-200  bg-white border-b-2 border-slate-400 p-2 ">
        <div className="flex space-x-4">
            <img src="https://www.hindustantimes.com/ht-img/img/2023/06/03/550x309/Farmers-will-learn-traditional-Indian-alternatives_1685817918119.jpg" className="w-32 h-30 rounded-lg"></img>
            <div>
              <p>Workshop for farmers on ancient agri knowledge, animal ayurveda</p>
              <p className="text-slate-500">13h ago</p>
            </div>    
        </div>
        <div className="flex">
          <div className='flex'>
            <IoIosShareAlt className='fill-green-900 w-7 h-7 mt-0.5'/>
            <p className="mt-1 text-green-900 font-semibold">Share</p>
          </div>
          <div className='flex ml-48'>
            <p className="mt-1 text-green-900 font-semibold">Read More</p>
            <IoIosArrowForward className="fill-green-900 w-7 h-7 mt-1"/>
          </div>  
        </div>   
      </div>
      <div className="h-200  bg-white border-b-2 border-slate-400 p-2 ">
        <div className="flex space-x-4">
            <img src="https://www.deccanchronicle.com/_next/image?url=https%3A%2F%2Fs3.ap-southeast-1.amazonaws.com%2Fimages.deccanchronicle.com%2Fdc-Cover-f2cnn4ff0p3v91p31pd3004723-20180320052921.Medi.jpeg&w=1080&q=75" className="w-32 h-30 rounded-lg"></img>
            <div>
              <p>G20 Technical Workshop on Climate Resilient Agriculture in Hyderabad</p>
              <p className="text-slate-500">20h ago</p>
            </div>    
        </div>
        <div className="flex">
          <div className='flex'>
            <IoIosShareAlt className='fill-green-900 w-7 h-7 mt-0.5'/>
            <p className="mt-1 text-green-900 font-semibold">Share</p>
          </div>
          <div className='flex ml-48'>
            <p className="mt-1 text-green-900 font-semibold">Read More</p>
            <IoIosArrowForward className="fill-green-900 w-7 h-7 mt-1"/>
          </div>  
        </div>   
      </div>
      <div className="h-200  bg-white border-b-2 border-slate-400 p-2 ">
        <div className="flex space-x-4">
            <img src="https://www.en.krishakjagat.org/wp-content/uploads/2023/12/Untitled-1-37.jpg" className="w-32 h-30 rounded-lg"></img>
            <div>
              <p>Advancing Towards Net Zero: International Workshop at BITS Pilani Goa sheds Light on Forestry and Agroforestry Strategies</p>
              <p className="text-slate-500">23h ago</p>
            </div>    
        </div>
        <div className="flex">
          <div className='flex'>
            <IoIosShareAlt className='fill-green-900 w-7 h-7 mt-0.5'/>
            <p className="mt-1 text-green-900 font-semibold">Share</p>
          </div>
          <div className='flex ml-48'>
            <p className="mt-1 text-green-900 font-semibold">Read More</p>
            <IoIosArrowForward className="fill-green-900 w-7 h-7 mt-1"/>
          </div>  
        </div>   
      </div>
      <div className="h-200  bg-white border-b-2 border-slate-400 p-2 ">
        <div className="flex space-x-4">
            <img src="https://www.en.krishakjagat.org/wp-content/uploads/2023/11/Untitled-1-copy-82.jpg" className="w-32 h-30 rounded-lg"></img>
            <div>
              <p>Farmer First National Workshop at CSKHPAU: Dr U.S.Gautam, DDG, ICAR exhorts scientists to develop strategy for effective technology transfer</p>
              <p className="text-slate-500">1d ago</p>
            </div>    
        </div>
        <div className="flex">
          <div className='flex'>
            <IoIosShareAlt className='fill-green-900 w-7 h-7 mt-0.5'/>
            <p className="mt-1 text-green-900 font-semibold">Share</p>
          </div>
          <div className='flex ml-48'>
            <p className="mt-1 text-green-900 font-semibold">Read More</p>
            <IoIosArrowForward className="fill-green-900 w-7 h-7 mt-1"/>
          </div>  
        </div>   
      </div>
      <div className="h-200  bg-white border-b-2 border-slate-400 p-2 ">
        <div className="flex space-x-4">
            <img src="https://kjcdn.gumlet.io/media/90573/workshop-on-digital-crop-survey.jpg?w=720&dpr=1.3" className="w-32 h-30 rounded-lg"></img>
            <div>
              <p>Agri Ministry Organizes 'Workshop on Digital Crop Survey' to Provide One Verified Source About Farmer & his/her Crop-Sown Data</p>
              <p className="text-slate-500">1d ago</p>
            </div>    
        </div>
        <div className="flex">
          <div className='flex'>
            <IoIosShareAlt className='fill-green-900 w-7 h-7 mt-0.5'/>
            <p className="mt-1 text-green-900 font-semibold">Share</p>
          </div>
          <div className='flex ml-48'>
            <p className="mt-1 text-green-900 font-semibold">Read More</p>
            <IoIosArrowForward className="fill-green-900 w-7 h-7 mt-1"/>
          </div>  
        </div>   
      </div>
      </div>
     </div>
    </div>
  )
}

export default BulletinEvents
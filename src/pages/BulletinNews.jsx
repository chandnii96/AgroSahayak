import React from 'react'
import { IoIosShareAlt } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import HeadingBulletin from "../components/HeadingBulletin"
const BulletinNews = () => {
  return (
    <div className="bg-blue-500 w-full h-screen">
     <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4">
      <HeadingBulletin/>
      <div className="h-200  bg-white border-b-2 border-slate-400 p-2 ">
        <div className="flex space-x-4">
            <img src="https://eco-business.imgix.net/ebmedia/fileuploads/6314791981_a4f2ff742c_b.jpg?ar=16%3A10&auto=format&dpr=2&fit=crop&ixlib=django-1.2.0&q=45&width=480" className="w-32 h-30 rounded-lg"></img>
            <div>
              <p className="">Indian farmers rack up carbon credits with climate-conscious ways</p>
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
            <img src="https://cdn.inc42.com/wp-content/uploads/2023/12/Time-To-Build-Climate-Stack-For-Indian-Agriculture-Feature-760x570.png" className="w-32 h-30 rounded-lg"></img>
            <div>
              <p className="">Time To Build Climate-Stack For Indian Agriculture</p>
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
            <img src="https://dims.apnews.com/dims4/default/962b9a0/2147483647/strip/true/crop/5906x3935+0+1/resize/767x511!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F8e%2F6f%2F1e7fcc85554a736ba80e2ff17d28%2F3ad5bc0bca6947a58a51746d55191be3" className="w-32 h-30 rounded-lg"></img>
            <div>
              <p>Cows in Rotterdam harbor, seedlings on rafts in India; are floating farms the future?</p>
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
            <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16A45/production/_131014729_img-20230811-wa0011.jpg.webp" className="w-32 h-30 rounded-lg"></img>
            <div>
              <p className="">Can tech stop India wasting so much of its harvest?</p>
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
            <img src="https://images.deccanherald.com/deccanherald%2F2023-12%2F2242e32c-c7ae-4ed1-b6bf-2d5131cd920a%2FIMG_20231211_165606.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=720&dpr=1.3" className="w-32 h-30 rounded-lg"></img>
            <div>
              <p className="">Lenovo sows seeds of millet farming revival in Kerala's Kanthalloor</p>
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

export default BulletinNews
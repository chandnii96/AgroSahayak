import { Link } from 'react-router-dom';
import Heading from "../components/Heading"
import { PiPottedPlantFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { PiListBulletsFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { BsCloudUploadFill } from "react-icons/bs";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { BiSolidFirstAid } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-blue-500 w-full h-screen ">
            <div className="bg-blue-500 min-h-screen flex justify-center items-center">
                <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4 px-0 pb-0">
                <Heading className="m-0 p-0"/>

        <Link to="/weather" className="bg-green-300 w-340 h-123 rounded-lg flex m-4 p-4 space-x-4 border-2 border-black">
          <div className="w-80 space-y-2">
            <p>Gurugram, 27 Jul</p>
            <p className="font-bold text-2xl">35°C</p>
            <p >35°C/28°C</p>
            <p>Precipitation:14%</p>
          </div>
          <div className="w-30">
            <img className="w-40 rounded-full border-2 border-blue-800" src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png" alt="" />
            <div className="border-solid border-2 rounded-md mt-2 border-black text-black text-center ">
              Partly Cloudy
            </div>
          </div>
        </Link>

        <Link to="/soilanalysis" className="bg-green-300 w-340 h-123 rounded-lg flex m-4 p-4 space-x-4 border-2 border-black">
          <div className="w-80 mt-10">
            <div className="bg-amber-950  h-8 text-white text-center rounded-full mx-7 ">
              <Link to="/soilanalysis" className="text-xl">Soil Analysis</Link>
            </div>
          </div>
          <div className="w-30">
            <img className="w-40 rounded-full border-2 border-green-800" src="https://www.caro.ca/wp-content/uploads/2020/06/soiltesting-CARO.png" alt="" />
          </div>
        </Link>

        <div className="bg-white m-4 w-300 h-50 flex flex-row ml-12">
          <div className="mr-4">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/agriculture-farming-gardening/grain-rice-icon.svg" className="w-14 h-12 rounded-full border-solid border-2 border-black "/>
            <h className="ml-1">Wheat</h>
          </div>
          <div className="mr-4">
            <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-paddy-png-image_2390874.jpg" className="w-14 h-12 rounded-full border-solid border-2 border-black"/>
            <h className="ml-1">Paddy</h>
          </div>
          <div className="mr-4">
            <img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-clean-smooth-soil-free-vegetable-potatoes-png-image_5546916.jpg" className="w-14 h-12 rounded-full border-solid border-2 border-black"/>
            <h className="ml-1">Potato</h>
          </div>
          <div className="mr-4">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/fruits-vegetables/tomato-icon.svg" className="w-14 h-12 rounded-full border-solid border-2 border-black"/>
            <h className="ml-1">Tomato</h>
          </div>
          <div className="w-14 h-12 rounded-full mr-4 border-solid border-2 border-black">
            <div className="ml-1">
              <AiOutlinePlus className="h-11 w-11" />
              <Link to="/CropPlan" className="h-11 w-11 ml-1 mt-2">Add</Link>
            </div>
          </div>
        </div>

        <Link to="/CropPlan">
        <div className="bg-green-300 w-340 h-123 rounded-t-lg m-4 p-2 space-x-4 border-2 border-black">
          <div className="w-300 space-x-4 flex flex-row">
            <div className="w-80 space-y-3">
              <div className="flex flex-row">
                <div className="mt-4">
                  <PiPottedPlantFill/>    
                </div>
                <p className="mt-2.5 ml-1.5 text-lg">Wheat</p>
              </div>
              <div className="flex flex-row">
                <div className="mt-2">
                  <SlCalender/>    
                </div>
                <p className="mt-0.5 ml-1.5 text-lg">50-41 days before sowing</p>
              </div>
              <div className="flex flex-row">
                <div className="mt-1.5">
                  <PiListBulletsFill/>    
                </div >
                <p className="ml-1.5 text-lg">Introduction</p>
              </div>
            </div>
            <div className="w-30">
              <img className="object-contain w-30 h-30" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/forecasting-crop-yield-6016438-5048173.png" alt="" />
            </div>
          </div>    
        </div>
        </Link>
        
        <Link to="/marketprice" className="bg-blue-300 w- h-50 relative bottom-4 m-4 p-2 rounded-b-lg flex flex-row border-2 border-t-0 border-black">
            <div>
              <div className="flex flex-row">
                <FaLocationDot/>
                <p>Khandsa road</p>
              </div>
              <p className="text-lg font-bold ">Sabji Mandi</p>
            </div>
            
            <div>
              <p className="text-blue-900 font-bold ml-9 mt-3">Market Price:₹2200/Q</p>
            </div>
            <div className="mt-4 ml-1">
              <FaArrowDown/>
            </div>
        </Link>
        
        
        <Link to="/cropcure" className="bg-green-300 w-340 h-123 rounded-lg flex m-4 p-2 space-x-4 bottom-4 relative border-2 border-black">
          <div className="w-80">
            <div className="bg-green-800 w-20 text-white pl-1 rounded-md ">
              <a href="https://plant-disease-recognition-app-agro.streamlit.app/Prediction">Crop cure</a>
            </div>
            <div>
              <div className="flex flex-row">
                <div className="mt-1">
                  <BsCloudUploadFill/>
                </div>
                <p className="ml-2">Upload picture of crop</p>
              </div>
              <div className="ml-10">
                <BsArrowDown/>
              </div>
              <div className="flex flex-row">
                <div className="mt-1">
                  <BsFillClipboardCheckFill/>
                </div>
                <p className="ml-2">See Diagnosis</p>
              </div>
              <div className="ml-10">
                <BsArrowDown/>
              </div>
              <div className="flex flex-row">
                <div className="mt-1">
                  <BiSolidFirstAid/>
                </div>
                <p className="ml-2">Get treatment</p>
              </div>
            </div>  
          </div>
          <div className="w-40 mt-3 ">
            <img className="w-40 h-30 rounded-full border-2 border-green-800" src="https://as2.ftcdn.net/v2/jpg/01/32/18/81/1000_F_132188136_kwCGATtnrW0pjZ4ZVaUZsjrqZHrL0hzb.jpg" alt="" />
          </div>
        </Link>

        <Link to="/forsale" className=" h-123 rounded-lg flex m-4 p-2 space-x-4 bottom-4 relative border-2 border-black">
          <div >
            <div className="bg-green-800 w-16 text-white pl-1 rounded-md ">
              Dukaan
            </div>
            <div className='flex flex-row gap-7 p-4 overflow-x-auto '>
             <div>
              <img className="w-28 h-28" src="https://casadeamor.in/cdn/shop/files/1.png?v=1685438879&width=1445" />
              <p className="text-xs">NPK 19:19:19 Fertilizer</p>
              <p className="text-xs">₹75/kg</p>
             </div>
             
             <div>
              <img className="w-24 h-28" src="https://www.bombaysuperseeds.com/images/prod/wheat/Wheat-GW-496-New-2020.webp" />
              <p className="text-xs">Wheat seeds (2kg)</p>
              <p className="text-xs">₹549</p>
             </div>
             <div>
              <img className="w-20 h-28" src="https://5.imimg.com/data5/SELLER/Default/2022/4/BD/VU/YC/14731277/rice-seeds.jpeg" />
              <p className="text-xs">Rice seeds (2kg)</p>
              <p className="text-xs">₹200</p>
             </div>
            </div>
            
          </div>
          
        </Link>


        <Link to="/community" className="bg-green-300 h-123 rounded-lg flex m-4 p-2 space-x-4 bottom-4 relative border-2 border-black">
          <div className="w-80">
            <div className="bg-green-800 w-[100px] text-white pl-1 rounded-md">
              Community
            </div>
            <p className='text-lg'>Join our community to connect with farmers</p>
            <img src="src/assets/Community-removebg-preview.png" className='h-44 w-60 ml-40'/>
          </div>
          
        </Link>


        <Link to="/bulletinnews" className="bg-green-300 h-123 rounded-lg flex m-4 p-2 space-x-4 bottom-4 relative border-2 border-black overflow-auto">
          <div >
            <div className="bg-green-800 w-[80px] text-white pl-1 rounded-md">
              Headlines
            </div>
            <div className='flex flex-row gap-5 p-4'>
             <div>
              <img src="https://www.hindustantimes.com/ht-img/img/2023/06/03/550x309/Farmers-will-learn-traditional-Indian-alternatives_1685817918119.jpg" className='h-24 w-36 ml-4'/>
              <div className="bg-black rounded-lg bg-opacity-70 mt-1">
                <p className="text-xs text-white ml-1">Workshop for farmers on ancient agri knowledge, animal ayurveda</p>
              </div>
             </div>
             
             <div>
             <img src="https://eco-business.imgix.net/ebmedia/fileuploads/6314791981_a4f2ff742c_b.jpg?ar=16%3A10&auto=format&dpr=2&fit=crop&ixlib=django-1.2.0&q=45&width=480" className='h-24 w-36 ml-3'/>
             <div className="bg-black rounded-lg bg-opacity-70 mt-1">
             <p className="text-xs text-white ml-1">Indian farmers rack up carbon credits with climate-conscious ways</p>
             </div>
             
             </div>

             

            


            </div>
            
          </div>
          
        </Link>
        <Footer className="mb-0"/>
      </div>
     </div>
    </div>
  )
}

export default Home
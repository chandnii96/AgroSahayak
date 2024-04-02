import HeadingCropCureSolution from "../components/HeadingCropCureSolution"
import { Link } from 'react-router-dom';


const CropCureSolution = () => {
    return (
        <div className="bg-blue-500 w-full h-screen">
            <div className="bg-blue-500 min-h-screen flex justify-center items-center">
                <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4">
                <HeadingCropCureSolution/>   

                <div className="font-bold text-2xl text-red-700 font-orelega">False Smut</div> 
                <div className="bg-green-300 w-500 h-40  object-contain rounded-lg flex space-x-4 border-2 border-black">
          
                    <img className="flex  w-[70vh] custom-image-class" src="https://www.iaea.org/sites/default/files/styles/original_image_size/public/falsesmutd23032.jpg?itok=E62K_AB8" alt="" />
            
                </div>

                <div className="bg-emerald-300 ml-40 h-7 w-30 text-white text-center rounded-full  ">
                    <div className="flex font-bold items-center justify-center text-black">Paddy</div>
                </div>

                <div className="w-80 space-y-2">
                   <p className="font-bold text-2xl">Symptoms</p>
                   <p class> - Velvety fungal mass</p>
                   <p> - Yellow to orange spore balls turns dark green black</p>
                </div>

                <div className="bg-emerald-300 mr-40 h-7 w-20 text-white text-center rounded-full  ">
                    <div className="flex font-bold items-center justify-center text-black">Solution</div>
                </div>

                <div className="w-80 space-y-2">
                    <p className="font-bold text-3xl">Chemical Solution</p>
                    <p class>Apply any one of the following chemical; if the disease is not controlled, please follow up with other chemical from the list below based on the specific duration of the previously applied chemical.</p>
                    <div className="flex space-x-2">
                    <Link to="/cropcureproductdetail" className=" w-40 h-250 rounded-lg p-4 border-2 border-black">
                        <div className="w-30 bg-stone-200 "> 
                            <img className=" flex items-center justify-center " src="https://www.napanta.com/app-img/product/godrej_kontrol.png" alt="" />
                            
                        </div>
                        <div className="font-bold text-lg ">Kontrol(Godrej)</div>
                    </Link>
                    

                    <div className=" w-40 h-250 rounded-lg p-4 border-2 border-black">
                        <div className="w-30 bg-stone-200"> 
                            <img className=" flex items-center justify-center " src="https://www.napanta.com/app-img/product/parijat_jimita.png" alt="" />
                            
                        </div>
                        <div className="font-bold text-lg">Jimita(Parijat)</div>
                    </div>
                    
                    </div>
                    
                </div>

                <div className="w-80 space-y-2">
                    <p className="font-bold text-3xl">Biological Solution</p>
                    <p class>Apply any one of the following bioagents in the early morning or evening for better results. If the disease is not controlled, please follow up with alternative bioagents (formulations) mentioned in the list below.</p>
                    <div className="flex space-x-2">
                    <div className=" w-40 h-250 rounded-lg p-4 border-2 border-black">
                        <div className="w-30 bg-stone-200 "> 
                            <img className=" flex items-center justify-center " src="https://tse2.mm.bing.net/th?id=OIP.Lw_RHiZLMFqMCBduj-ZM0QHaJ3&pid=Api&P=0&h=180" alt="" />
                            
                        </div>
                        <div className="font-bold text-lg ">Neemazal Technical (Parry's Bio)</div>
                    </div>
                    

                    <div className=" w-40 h-250 rounded-lg p-4 border-2 border-black">
                        <div className="w-30 bg-stone-200"> 
                            <img className=" flex items-center justify-center " src="https://5.imimg.com/data5/FW/IC/GG/SELLER-9070624/neem-plus-1000x1000.jpg" alt="" />
                            
                        </div>
                        <div className="font-bold text-lg">Neem Plus (Jain Agro)</div>
                    </div>
                    
                    </div>
                    
                </div>


                </div>
            </div>
        </div>
    
    )
  }
  
  export default CropCureSolution
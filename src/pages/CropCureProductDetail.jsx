import { Link } from 'react-router-dom';
import HeadingChemicalSolution from "../components/HeadingChemicalSolution"

const CropCureProductDetail = () => {
    return (
        <div className="bg-blue-500 w-full h-screen">
            <div className="bg-blue-500 min-h-screen flex justify-center items-center">
                <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4">
                <HeadingChemicalSolution/>
                <div className="flex items-center justify-center">
                   <img className="w-40 h-100 " src="https://www.napanta.com/app-img/product/godrej_kontrol.png" alt="" />
                </div>
                <div className="flex items-center justify-center">
                    <p className="font-bold text-3xl ">Kontrol (Godrej)</p>
                </div>
                <div className="bg-green-300  rounded-lg flex p-4 space-x-4 border-2 border-black   ">
                <div className="w-80 space-y-2">
                    <p className='flex items-center justify-center font-bold text-4xl'>200 ml/Acre</p>
                    <p className='flex items-center justify-center'>Recommended Quantity</p>
                </div>

                </div>
                

                <div className='bg-green-100 w-340 h-123 rounded-lg flex  p-4 space-x-4 border-2 border-black'>
                    <div className="w-80 space-y-2">
                        <p className=' flex  font-bold text-2xl'>How to Apply</p>
                        <p>Spray uniformly on the plant when the first symptoms of the disease are noticed. However, spray interval depends on the severity of the disease. Repeat spray at an interval of 14 days if the infection is severe or after 21 days in case of moderate infection.

Dilute the recommended dosage of chemical with 200 liters of water per acre. Shake the chemical container properly before use. Take the required amount of chemical and dilute with few liters of water in a bucket and then pour into a spray tank and add remaining amount of water with continuous stirring. Avoid mixing alkaline water. Do constant agitation in the spray tank. The spray volume of solution. may vary depending on crop growth stage and spacing.

You can mix this with commonly used pesticides but do not combine this with lime, sulphur and Bordeaux mixture or alkaline solutions.</p>
     
                    </div>   
                </div>
                

                </div>
            </div>
        </div>
    
    )
  }
  
  export default CropCureProductDetail
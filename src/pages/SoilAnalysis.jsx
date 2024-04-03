import HeadingSoil from "../components/HeadingSoil"
import { useState } from 'react';


const SoilAnalysis = () => {
  // State variables to store user input values
  const [N, setN] = useState('');
  const [P, setP] = useState('');
  const [K, setK] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [predictedCrop, setPredictedCrop] = useState('');
  
  // Function to fetch the prediction from the API
  const fetchPrediction = async () => {
    const response = await fetch('https://avipsapradhan.pythonanywhere.com/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ N, P, K, temperature, humidity })
    });
    const data = await response.json();
    const capitalizedPrediction = data.prediction.charAt(0).toUpperCase() + data.prediction.slice(1);

    setPredictedCrop(capitalizedPrediction);

  };
  return (
    <div className="bg-blue-500 w-full h-screen">
     <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4">
      <HeadingSoil/>
       

      <div className="bg-green-800 w-340 h-123 rounded-lg flex  p-4 space-x-4">
        <div className="w-80">
          <h1 className="font-inter flex flex-row text-2xl font-bold text-white">How to connect Hardware to Software : Tutorial </h1>
               
        </div>
      </div>





      <div className="bg-white-300 w-340 h-123 rounded-lg flex flex-col space-x-4">
          <p className="text-xl font-bold ">Soil Analysis Status</p>
          <p className="font-bold text-green-900 text-lg">Parameter</p> 
          <div className="h-200 bg-white flex justify-center flex-col items-center">
    
            <div className="border-b-2 w-full border-green-800 pl-1">
              <div className="text-lg flex justify-around items-center">
                <label className="w-40">Moisture: </label>
                <input type="number" value={humidity} onChange={(e) => setHumidity(e.target.value)} className="border rounded border-black w-40 mx-4 my-2 p-1" />
              </div>     
            </div>

            <div className="border-b-2 w-full border-green-800 pl-1">
              <div className="text-lg flex justify-around items-center">
                <label className="w-40">Nitrogen: </label>
                <input type="number" value={N} onChange={(e) => setN(e.target.value)} className="border rounded border-black w-40 mx-4 my-2 p-1" />
              </div>    
            </div>

            <div className="border-b-2 w-full border-green-800 pl-1">
              <div className="text-lg flex justify-around items-center">
                <label className="w-40">Phosphorus: </label>
                <input type="number" value={P} onChange={(e) => setP(e.target.value)} className="border rounded border-black w-40 mx-4 my-2 p-1" />
              </div>        
            </div>

            <div className="border-b-2 w-full border-green-800 pl-1">
              <div className="text-lg flex justify-around items-center">
                <label className="w-40">Potassium: </label>
                <input type="number" value={K} onChange={(e) => setK(e.target.value)} className="border rounded border-black w-40 mx-4 my-2 p-1" />
              </div>   
            </div>
            <div className="border-b-2 w-full border-green-800 pl-1">
              <div className="text-lg flex justify-around items-center">
                <label className="w-40">Temperature: </label>
                <input type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)} className="border rounded border-black w-40 mx-4 my-2 p-1" />
              </div>   
            </div>
          </div>  
        </div>
        <div className="flex justify-center items-center ">
          <button onClick={fetchPrediction} className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
            Get Prediction
          </button>
        </div>
        <div className="bg-gray-3">
          <p className="mt-4 font-bold text-xl">Recommended Crops</p>
            <div className="w-300 h-50 content mt-3 bg-green-200 rounded-lg border-2 border-green-500">
                <div className="flex flex-row">
                  <img src="https://previews.123rf.com/images/fad82/fad821609/fad82160900049/64141482-green-sprout-icon.jpg" className="w-14 h-14 rounded-full p-2"/>
                  <div className="paddy content ">
                    <p className="text-xl mt-3 ml-2">{predictedCrop}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SoilAnalysis

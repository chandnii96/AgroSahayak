import './App.css'
import SoilAnalysis from './pages/SoilAnalysis'
import Home from './pages/Home'
import CropPlan from './pages/CropPlan'
import NextTask1 from './pages/NextTask1'
import NextTask2 from './pages/NextTask2'
import NextTask3 from './pages/NextTask3'
import NextTask4 from './pages/NextTask4'
import NextTask5 from './pages/NextTask5'
import NextTask6 from './pages/NextTask6'
import NextTask7 from './pages/NextTask7'
import Community from './pages/Community'
import Mypost from './pages/Mypost'
import { Route, Routes } from "react-router-dom"
import BulletinNews from './pages/BulletinNews'
import BulletinEvents from './pages/BulletinEvents';
import BulletinSchemes from './pages/BulletinSchemes'
import CropMarketPrice from './pages/CropMarketPrice'
import MarketPrice from './pages/MarketPrice'
import CropCureSolution from './pages/CropCureSolution'
import CropCure from './pages/CropCure'
import CropCureProductDetail from './pages/CropCureProductDetail'
import Weather from './pages/Weather'
import ForSale from './pages/ForSale'
import ForRent from './pages/ForRent'
import MyDukaan from './pages/MyDukaan'


function App() {

  return (
    <>
        <div>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/soilanalysis" element={<SoilAnalysis/>}/>
        <Route path="/CropPlan" element={<CropPlan/>}/>
        <Route path="/NextTask1" element={<NextTask1/>}/>
        <Route path="/NextTask2" element={<NextTask2/>} />
        <Route path="/NextTask3" element={<NextTask3 />} />
        <Route path="/NextTask4" element={<NextTask4 />} />
        <Route path="/NextTask5" element={<NextTask5 />} />
        <Route path="/NextTask6" element={<NextTask6/>} />
        <Route path="/NextTask7" element={<NextTask7 />} />
        <Route path="/Community" element={<Community/>} />
        <Route path="/Mypost" element={<Mypost/>}/>
        <Route path="/CropCureProductDetail" element={<CropCureProductDetail />} />
        <Route path="/Weather" element={<Weather/>}/>
        <Route path="/CropCure" element={<CropCure/>}/>
        <Route path="/CropCureSolution" element={<CropCureSolution/>}/>
        <Route path="/MarketPrice" element={<MarketPrice/>}/>
        <Route path="/CropMarketPrice" element={<CropMarketPrice/>}/>
        <Route path="/BulletinSchemes" element={<BulletinSchemes/>}/>
        <Route path="/BulletinEvents" element={<BulletinEvents/>}/>
        <Route path="/BulletinNews" element={<BulletinNews/>}/>
        <Route path="/Forsale" element={<ForSale/>}/>
        <Route path="/ForRent" element={<ForRent/>}/>
        <Route path="/MyDukaan" element={<MyDukaan/>}/>
        

      </Routes>
      </div>
    </>
  )
}

export default App

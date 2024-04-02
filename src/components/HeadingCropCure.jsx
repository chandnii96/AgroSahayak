import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
const HeadingCropCure = () => {
    return (
      <div className="h-200  bg-white flex justify-center items-center border-t-2 border-b-2 border-green-800 p-2">
        <Link to="/" ><IoIosArrowDropleftCircle className="fill-green-900 w-10 h-10 mr-20"/></Link>
        <div className="text-2xl text-green-800 font-orelega font-extrabold mr-32">Crop Cure</div>
      </div>
    )
  }
  
  export default HeadingCropCure
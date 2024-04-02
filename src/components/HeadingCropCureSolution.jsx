import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
const HeadingCropCureSolution = () => {
    return (
      <div className="h-200  bg-white flex justify-center items-center border-t-2 border-b-2 border-green-800 p-2">
        <Link to="/cropcure" ><IoIosArrowDropleftCircle className="fill-green-900 w-10 h-10 mr-24"/></Link>
        <div className="text-2xl text-green-800 font-orelega font-extrabold mr-36">Solution</div>
      </div>
    )
  }
  
  export default HeadingCropCureSolution
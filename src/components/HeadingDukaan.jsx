import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
const HeadingDukaan = () => {
    return (
      <div>
        <div className="h-200 flex bg-white justify-center items-center border-t-2 border-b-2 border-green-800 p-2">
          <Link to="/" ><IoIosArrowDropleftCircle className="fill-green-900 w-10 h-10 mr-24"/></Link>
          <div className="text-2xl text-green-800 font-orelega font-extrabold mr-36">Dukaan</div>
        </div>
      </div>
      
    )
  }
  
  export default HeadingDukaan
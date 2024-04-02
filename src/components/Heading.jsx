import { MdMenu } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
const Heading = () => {
  return (
    <div className="h-200 bg-white flex justify-between items-center border-t-2 border-b-2 border-green-800">
      <div className="w-20 h-20 flex items-center">
        <MdMenu className="fill-green-900 w-10 h-10 ml-4"/>
      </div>
      
      <div className="p-4 flex flex-row">
      
        <p className="text-3xl text-green-800 font-orelega font-extrabold">AgroSahayak</p>
      </div>
      <div className="w-20 h-20 flex items-center ">
        <IoMdNotifications className="fill-green-900 w-10 h-10 ml-6"/>
      </div>
    </div>
  )
}

export default Heading
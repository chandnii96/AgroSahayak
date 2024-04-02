import { AiFillHome } from "react-icons/ai";
import { PiPlantBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsNewspaper } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-b-lg sticky bottom-0">
  <div className="container mx-auto flex justify-center items-center">
    <div className="flex space-x-8">
      
      <div className="text-white">
      <AiFillHome />
      </div>

      
      <div className="text-white">
      <PiPlantBold />
      </div>

      
      <div className="text-white">
      <FaShoppingCart />
      </div>

      
      <div className="text-white">
      <IoIosPeople />
      </div>

      
      <div className="text-white">
      <BsNewspaper />
      </div>

      
      <div className="text-white">
      <BsGraphUpArrow />
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer
import { IoMdAddCircleOutline } from "react-icons/io";

const Button = () => {
  return (
    <div className="bg-green-800 rounded-md h-[30px] w-[150px] sticky flex flex-row items-center justify-between p-5 m-3 bottom-[75px]">
        <button className="text-white">My Dukaan</button>
        <IoMdAddCircleOutline className="fill-white h-7 w-7"/>
    </div>
  )
}

export default Button
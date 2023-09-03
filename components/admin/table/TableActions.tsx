import { BsTrash } from "react-icons/bs";
import { MdOutlineEdit, MdOutlineRemoveRedEye } from "react-icons/md";

export default function TableActions() {
  return (
    <td className="flex justify-center space-x-3">
      <button className="w-5 transition-all hover:text-green-700 hover:scale-125 md:w-6">
        <MdOutlineRemoveRedEye className="w-5 md:w-7" />
      </button>
      <button className="transition-all hover:text-blue-700 hover:scale-125">
        <MdOutlineEdit className="w-5 md:w-7" />
      </button>
      <button className="w-5 transition-all hover:text-red-700 hover:scale-125 md:w-6">
        <BsTrash className="w-5 md:w-7" />
      </button>
    </td>
  )
}

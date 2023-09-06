"use client";

import { BsTrash } from "react-icons/bs";
import { MdOutlineEdit, MdOutlineRemoveRedEye } from "react-icons/md";


interface Props {
  id: string
}

export default function TableActions({ id }: Props) {


  const onEdit = () => {
    alert(`shore Edit Category: ${id}`)

  }

  const onDelete = () => {
    alert(`shore Deleted Category: ${id}`)
  }


  return (
    <td className="">
      <button className="transition-all hover:text-green-700 hover:scale-125 p-1.5">
        <MdOutlineRemoveRedEye size={30} />
      </button>
      <button onClick={onEdit} className="transition-all hover:text-blue-700 hover:scale-125 p-1.5">
        <MdOutlineEdit size={30} />
      </button>
      <button onClick={onDelete} className="transition-all hover:text-red-700 hover:scale-125 p-1.5">
        <BsTrash size={30} />
      </button>
    </td>
  )
}

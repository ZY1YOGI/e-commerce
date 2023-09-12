"use client";

import { BsTrash } from "react-icons/bs";
import { MdOutlineEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import Swal from 'sweetalert2'
import axios from "axios";

interface Props {
  id: string;
  name: string;
}

export default function TableActions({ id, name }: Props) {


  const onEdit = () => {
    Swal.fire(`shore Edit: ${name}`)

  }

  const onDelete = () => {
    Swal.fire({
      title: 'Are you sure to delete?',
      text: `Deleted: ${name}`,
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axios.delete('/api/category', { data: { _id: "64f5e2ae142b001b3cf6cbd4" } })
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
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

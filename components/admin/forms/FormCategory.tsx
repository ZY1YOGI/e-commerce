"use client";

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg'
import { TagsInput } from "react-tag-input-component"; 

interface IFormInput {
  name: string;
  keywords: string;
  description: string;
}

export default function FormCategory() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<IFormInput>();
  const [loading, setLoading] = useState<boolean>(false)
  const [keywords, setKeywords] = useState<string[]>([]);

  const onSubmit = async (data: IFormInput) => {
    setLoading(true)



    console.log('====================================');
    console.log(data);
    console.log('====================================');
    // const response = await axios.post('/api/category', {
    //   name: data.name
    // })

    // if (response.data.status == 422) {
    //   setError('name', { message: "Error" })
    //   setError('description', { message: "Error" })
    // }

    setLoading(false)
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 mt-8 gap-x-5 gap-y-8 max-md:grid-cols-1">
      <div className='space-y-3'>
        <label htmlFor="input-name" className="x-label">Enter The Name Category <span className='requeued'>*</span></label>
        <input {...register("name", { required: "The Name Category is Requeued" })} id="input-name" className="x-input" placeholder="Name" />
        <span className="block text-red-500">{errors.name && (errors.name.message)}</span>
      </div>
      <div className='space-y-3'>
        <label htmlFor="input-name" className="x-label">Enter The keywords Category <span className='requeued'>*</span></label>
        <TagsInput value={keywords} onChange={setKeywords} name="tags" placeHolder="tags" />
        <span className="block text-red-500">{errors.keywords && (errors.keywords.message)}</span>
      </div>
      <div className='space-y-3'>
        <label htmlFor="input-description" className="x-label">Enter The Description Category <span className='requeued'>*</span></label>
        <textarea {...register("description", { required: "The Description Category is Requeued" })} id="input-description" className="x-input" placeholder="Description" />
        <span className="block text-red-500">{errors.description && (errors.description.message)}</span>
      </div>
      <div className='flex items-center justify-center'>
        <button className="btn-create-update" disabled={loading}>
          {loading ?
            <CgSpinner className="w-12 h-8 mx-auto animate-spin" />
            : "Create Category"}
        </button>
      </div>
    </form>
  )
}
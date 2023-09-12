"use client";

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg'

interface IFormInput {
  name: string;
  keywords: string;
  description: string;
  image: any;
}

export default function FormBrand() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<IFormInput>();
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (dataInput: IFormInput) => {
    setLoading(true)

    console.log('====================================');
    console.log(dataInput.image);
    console.log('====================================');

    try {
      const { data } = await axios.post('/api/brand', { ...dataInput })
      console.log(data.message);

      if (data.errors) {
        setError('name', { message: data.errors.name?.message })
        setError('keywords', { message: data.errors.keywords?.message })
        setError('description', { message: data.errors.description?.message })
      }

    } catch (error) {
      console.error('================= Res.error ===================');
      console.error(error);
    }

    setLoading(false)
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 mt-8 gap-x-5 gap-y-8 max-md:grid-cols-1">
        <div className='space-y-3'>
          <label htmlFor="input-name" className="x-label">Enter The Name Brand <span className='requeued'>*</span></label>
          <input {...register("name")} type='text' id="input-name" className="x-input" placeholder="Name" />
          <span className="block text-red-500">{errors.name && (errors.name.message)}</span>
        </div>
        <div className='space-y-3'>
          <label htmlFor="input-keywords" className="x-label">Enter The Keywords Brand <span className='requeued'>*</span></label>
          <input {...register("keywords")} type='text' id="input-keywords" className="x-input" placeholder="Keywords" />
          <span className="block text-red-500">{errors.keywords && (errors.keywords.message)}</span>
        </div>
        <div className='space-y-3'>
          <label htmlFor="input-description" className="x-label">Enter The Description Brand <span className='requeued'>*</span></label>
          <textarea {...register("description")} id="input-description" className="x-input" placeholder="Description" />
          <span className="block text-red-500">{errors.description && (errors.description.message)}</span>
        </div>
        <div className='b-t flex bg-white rounded-lg'>
          <label htmlFor="input-image" className='b-t w-full h-full'>
            <input {...register("image")} type="file" id="input-image" onChange={(e) => { console.log(e) }} />
          </label>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <button className="btn-create-update" disabled={loading}>
          {loading ?
            <CgSpinner className="w-12 h-8 mx-auto animate-spin" />
            : "Create Brand"}
        </button>
      </div>
    </form>
  )
}
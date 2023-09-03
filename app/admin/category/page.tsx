import type { Metadata } from 'next'
import axios from 'axios';
import FormCategory from '@admin-components/forms/FormCategory';
import { TableActions } from '@admin-components/table';



export const metadata: Metadata = {
  title: 'Category',
  description: 'Category Page'
}

export default async function Category() {

  const getCategories = await axios.get('/api/category')
  const categories = getCategories.data.categories


  return (
    <>

      <h1 className="text-6xl font-bold tracking-widest text-center blur-[.5px] max-md:text-4xl">CATEGORY</h1>

      <section className="container">
        <div className="container p-5 mx-auto my-8 bg-white rounded-lg shadow-lg bg-opacity-30 dark:text-white dark:bg-gray-900">
          <h1 className="text-4xl font-bold text-center blur-[.8px]">Add Category</h1>
          <FormCategory />
        </div>
      </section>


      <section className="container p-5 mx-auto my-8 bg-white rounded-lg shadow-lg bg-opacity-30 dark:text-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-center blur-[.8px]">Show Category</h1>
        <table className='w-full mt-8'>
          <thead className='border-b-4 border-b-blue-500 md:text-3xl dark:text-gray-200'>
            <tr>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody className='text-lg text-center md:text-2xl'>
            {categories.map((category: { id: string, name: string, description: string }) => (
              <tr className='border-b' key={category.id}>
                <td>{category.name}</td>
                <td className='w-full'>{category.description}</td>
                <TableActions />
              </tr>
            ))}
          </tbody>

        </table>

      </section>

    </>
  );
}

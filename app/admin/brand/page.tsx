import type { Metadata } from 'next'
import axios from 'axios';
import FormBrand from '@admin-components/forms/FormBrand';
import { TableActions } from '@admin-components/table';



export const metadata: Metadata = {
  title: 'Brand',
  description: 'Brand Page'
}

export default async function BrandPage() {

  // const getBrands = await axios.get('/api/brand')


  // const brands = getBrands.data.brands || []
  const brands = [
    {
      _id: "1D5ddw5W9M1bd165AW",
      name: "Trips Brand",
      keywords: "A,B,C,D,E,F",
      description: "Test The Brand  Description Description Brand The Test"
    }
  ] as any

  return (
    <main>

      <h1 className="text-6xl font-bold tracking-widest text-center blur-[.5px] max-md:text-4xl">BRAND</h1>

      <section className="container">
        <div className="container p-5 my-12 bg-white rounded-lg shadow-lg bg-opacity-30 dark:text-white dark:bg-gray-900">
          <h1 className="text-4xl font-bold text-center blur-[.8px]">Add Brand</h1>
          <FormBrand />
        </div>
      </section>


      <section className="container p-5 my-20 bg-white rounded-lg shadow-lg bg-opacity-30 dark:text-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-center blur-[.8px] my-8">Show Brand</h1>
        <table className='table-auto w-full'>
          <thead className='border-b-4 border-b-blue-500 md:text-3xl dark:text-gray-200'>
            <tr>
              <th>NAME</th>
              <th className='max-md:hidden'>KEYWORDS</th>
              <th className='max-md:hidden'>DESCRIPTION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody className='text-lg md:text-2xl text-center'>
            {brands.map((brand: { _id: string, name: string, keywords: string, description: string }) => (
              <tr className='border-b w-full' key={brand._id}>
                <td className='flex items-center space-x-1'><img className="w-10 h-10 rounded-full" src="https://cdn.wallpapersafari.com/79/73/TvuM20.jpg" alt="img user" /><h1>{brand.name}</h1></td>
                <td className='max-md:hidden'>{brand.keywords}</td>
                <td className='max-md:hidden max-w-sm truncate'>{brand.description}</td>
                <TableActions id={brand._id} />
              </tr>
            ))}
          </tbody>

        </table>

      </section>

    </main>
  );
}

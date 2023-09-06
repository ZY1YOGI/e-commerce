
export default function HomePage() {
  return (
    <main className='container space-y-12'>

      <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2">
        <div className="w-full h-36 rounded-lg shadow-lg shadow-slate-500"></div>
        <div className="w-full h-36 rounded-lg shadow-lg shadow-slate-500"></div>
        <div className="w-full h-36 rounded-lg shadow-lg shadow-slate-500"></div>
        <div className="w-full h-36 rounded-lg shadow-lg shadow-slate-500"></div>
      </div>

      <div className="flex justify-between gap-6 max-md:flex-col">
        <div className="w-full h-80 rounded-lg shadow-lg shadow-slate-500"></div>
        <div className="w-full h-80 rounded-lg shadow-lg shadow-slate-500"></div>
      </div>

      <div className="flex justify-between gap-6 max-md:flex-col">
        <div className="w-full h-60  flex gap-6">
          <div className="w-full h-full rounded-lg shadow-lg shadow-slate-400"></div>
          <div className="w-full h-full rounded-lg shadow-lg shadow-slate-400"></div>
        </div>
        <div className="w-full h-60 rounded-lg shadow-lg shadow-slate-500"></div>
      </div>


    </main>
  )
}
import './index.css'
import { Header, Sidebar } from '@admin-components/index';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Sidebar />
      <div className='min-h-screen mt-5 ml-16 dark:text-white'>
        {children}
      </div>
    </>
  )
}
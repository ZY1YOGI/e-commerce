import './index.css';
import type { Metadata } from 'next'



export const metadata: Metadata = {
  robots: "index, follow",
}

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}

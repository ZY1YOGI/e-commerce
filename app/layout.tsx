import './globals.css'
import type { Metadata } from 'next'
// import Head from 'next/head'

export const metadata: Metadata = {

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" data-theme="light">
      {/* <Head>
        <link rel="canonical" href="" />
      </Head> */}
      <body className="antialiased bg-body-light dark:bg-body-dark">
        {children}
      </body>
    </html>
  )
}

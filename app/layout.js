import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './shared/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Movie Database',
  description: 'IMDB-like clone built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-zinc-900"}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}

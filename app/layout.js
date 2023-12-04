import { Inter } from 'next/font/google'
import './globals.css'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'homepage',
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
     {children}
        <Footer /> 
    
        </body>
    </html>
  )
}

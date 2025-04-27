// import Header from '@/Components/Header'
import { Inter } from 'next/font/google';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css'
import Header from '@/Components/Home1/Header';
import Footer from '@/Components/Home1/Footer';


const inter = Inter({ subsets: ['latin'] });
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['800'],
  display: 'swap',
  variable: '--font-bricolage',
});


export const metadata = {
  title: 'GTS',
  description: 'GTS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body className={inter.className}>
       <Header/>
        {children}
        <Footer/>
      

        
        </body>
    </html>
  )
}

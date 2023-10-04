import Image from 'next/image'
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '@/Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import Banner from '@/Components/Banner/Banner'
// import ProductProvider from '@/Components/Product/ProductProvider';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header/>
     <Nav/>
     <Banner />
     {/* <ProductProvider/> */}
     
    </main>
  )
}

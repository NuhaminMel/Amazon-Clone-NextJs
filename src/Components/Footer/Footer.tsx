import Image from "next/image";
import logo from '../../Images/amazon.png';

function Footer() {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
        <Image className="w-24" src={logo} alt="logo"/>
        <p className="text-xs -mt-4">All rights reserved Nuhamin</p>
    </div>
  )
}

export default Footer
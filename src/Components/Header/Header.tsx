import React from "react";
import logo from "../../Images/amazon.png";
import Image from "next/image";
import Link from "next/link";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import cart from '../../Images/cart1.png'
import flag from '../../Images/flag.png'

function Header() {
  return (
    <header className="w-full h-15 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/* logo section */}
        <div className="py-5 px-2">
          {/* <Link
            href={"/"}
            className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
          >
            <Image className="w-28 mt-1 object-cover" src={logo} alt="logo" />
          </Link> */}
          <Link
            href={"/"}
            className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
          >
            <Image
              className="w-28 object-cover mt-1"
              src={logo}
              alt="logoImg"
            />
          </Link>
        </div>
        {/* delivery Section */}
        {/* <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
          <SlLocationPin />
          <div>
            <p>Delivery Location</p>
          </div>
        </div> */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">ETH</p>
          </div>
        </div>
        
        {/* search */}
        <div className="text-black flex-1 h-10 md:inline-flex items-center justify-between relative hidden md:d-flex">
          <select className="bg=[#E6E6E6] h-full border-transparent outline-none focus-visible:border-amazon_yellow">
            <option>All</option>
            <option>This</option>
            <option>Deals</option>

          </select>
          <input
            className="w-full h-full px-2 placeholder::text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search Amazon"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>

        <div>
          <Image className="w-6 mt-1 object-cover" src={flag} alt="logo" />
        </div>

        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
          <span className="text-sm">Hello</span>
          <span className="text-sm">Account & List</span>
          <span className="">
            <BiCaretDown />
          </span>
        </div>
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] text-sm">
          <span className="">Returns </span>
          <span className=""> & Orders</span>
        </div>
        <Link href={"/"}>
          <div className="flex items-center justify-center ">
            <Image
              className="w-28 mt-1 object-cover bg-black"
              src={cart}
              alt="cart"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
     

export default Header;

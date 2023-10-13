import React, { useEffect } from "react";
import logo from "../../Images/amazon.png";
import Image from "next/image";
import Link from "next/link";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import cart from "../../Images/cartIcon.png";
import flag from "../../Images/flag.png";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import { useSession, signIn, signOut } from "next-auth/react";
import { addUser } from "@/Store/nextSlice";

const Header = () => {
  const { data: session } = useSession();

  const { productData, favoriteData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  //  console.log(session);
  const dispatch = useDispatch();
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);

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

          {/* Amazon LOGO */}
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
        {/* Delivery Section */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Delivery Location</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>

        {/* Search */}
        <div className="text-black flex-1 h-10 md:inline-flex items-center justify-between relative hidden md:d-flex">
          <input
            className="w-full h-full rounded-md px-2 placeholder::text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search Amazon"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>

        {/* Flag & language */}

        {/* <div>
          <Image className="w-6 mt-1 object-cover" src={flag} alt="logo" />
        </div> */}

        {/* Sign In */}
        {userInfo ? (
          <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
            <img
              src={userInfo.image}
              alt="userImage"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-xs text-gray-100 flex flex-col justify-between">
              <p className="text-white font-bold">{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="text-xs text-grey-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
          >
            <p>Hello, sign in</p>
            <p className="text-white font-bold flex items-center">
              Accounts & List
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        )}

        {/* Favorites */}
        <Link
          href={"/favorite"}
          className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <p>Marked</p>
          <p className="text-white font-bold">& Favorites</p>
          {favoriteData.length > 0 && (
            <span className="absolute right-2 top-0 w-5 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
              {favoriteData.length}
            </span>
          )}
        </Link>

        {/* Return & Orders */}
        {/* <div className="text-xs text-grey-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
          <p>Returns </p>
          <p className="text-white font-bold"> & Orders</p>
        </div> */}

        {/* Shopping Cart */}
        <Link
          href={"/cart"}
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image className="w-auto object-cover h-8" src={cart} alt="cart" />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-xs top-1 left-[31px] font-semibold">
            {productData ? productData.length : 0}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

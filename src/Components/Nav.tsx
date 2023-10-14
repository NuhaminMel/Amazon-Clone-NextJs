import { LuMenu } from "react-icons/lu";
import { BiCaretDown } from "react-icons/bi";
import { StateProps } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "next-auth/react";
import { removeUser } from "@/Store/nextSlice";

function Nav() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: StateProps) => state.next);
  const handleSignOut = () => {
    signOut();
    dispatch(removeUser());
  };
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
      <p className="flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        <LuMenu className="text-xl" /> All
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Medical Care <BiCaretDown />
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Amazon Basics
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Prime
        <BiCaretDown />
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Help Center
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Today&lsquo;s Deals
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Fashion
      </p>
      {userInfo && (
        <button
          onClick={handleSignOut}
          className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300"
        >
          Sign Out
        </button>
      )}
    </div>
  );
}

export default Nav;

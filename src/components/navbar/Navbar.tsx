import React from "react";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <header
      className=" fixed w-full py-5 z-40 text-white
     bg-primary-700"
    >
      <div
        className=" container flex justify-between items-center
      gap-5 font-bold"
      >
        <div className="text-3xl font-bold">
          MIKE
          <span
            className=" text-accent-500
           "
          >
            SHOP
          </span>
        </div>

        <form className="flex">
          <input
            type="text"
            placeholder="search"
            className="py-2 px-2 border-none
            w-[300px]  "
          />
          <button
            type="submit"
            className="
             bg-accent-400 py-2 
             px-5 border-none cursor-pointer"
          >
            search
          </button>
        </form>
        <div
          className=" flex items-center
         gap-5"
        >
          <nav>
            <ul
              className="flex items-center
         gap-5 font-bold"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Link href="/cart">
            <BsCart3 size={30} color="white" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

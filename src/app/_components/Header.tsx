'use client'
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { Menu, Search, ShoppingBagIcon } from "lucide-react";

interface HeaderProps {
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Responsive navigation bar component for a web application.
 * @param {Object} props - Props for the Header component.
 * @param {Function} props.setSidebarToggle - Function to toggle sidebar visibility.
 * @returns {JSX.Element} Header component.
 */
const Header = ({ setSidebarToggle }: HeaderProps): JSX.Element => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  return (
    <div className="shadow-md flex justify-between">
      <div className="flex items-center gap-8 md:gap-32">
        <Image
          src="/images/supermarket_logo.png"
          alt="LOGO"
          width={100}
          height={80}
        />
        <Menu
          className="block md:hidden w-10 h-8 cursor-pointer"
          onClick={() => setSidebarToggle((prev) => !prev)}
        />
        <div
          className={`md:flex gap-3 items-center border rounded-full p-2 px-5 ${
            isSearchVisible ? "block" : "hidden"
          }`}
        >
          <Search color="grey" />
          <input
            type="search"
            placeholder="Search"
            className="outline-none"
            onFocus={() => setSearchVisible(true)}
            onBlur={() => setSearchVisible(false)}
          />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex">
          <ShoppingBagIcon />0
        </h2>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;

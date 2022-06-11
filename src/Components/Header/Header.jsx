import React, { useState } from "react";
// import Logo from "./logo192.png";
import Logo from "../../assets/logo.png";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

export default function Header() {
  const [open, setopen] = useState(false);

  return (
    <>
      <nav className="bg-slate-900 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid">
            <div className="flex justify-between ">
              <div>
                <CustomLink to="/" className="flex items-center py-3">
                  <img src={Logo} alt="Logo" className="w-32" />
                </CustomLink>
              </div>
              {/* Primary Navbar items */}
              <div>
                <div
                  className={`md:flex mt-4 font-semibold text-lg ${
                    open ? "block" : "hidden"
                  }`}
                >
                  <CustomLink
                    to="/"
                    className="md:py-4  px-0 md:px-2 text-green-500   border-green-500 font-semibold "
                  >
                    Home
                  </CustomLink>
                  <CustomLink
                    to="/coins"
                    className="py-0 md:py-4  px-0 md:px-2 text-gray-500 font-semibold   hover:text-green-500 transition duration-300"
                  >
                    Coins
                  </CustomLink>
                  <CustomLink
                    to="contact"
                    className="py-0 md:py-4  px-0 md:px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >
                    Contact
                  </CustomLink>
                  <CustomLink
                    to="about"
                    className="py-0 md:py-4  px-0 md:px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >
                    About
                  </CustomLink>
                </div>
                <div
                  onClick={() => setopen(!open)}
                  className="w-8 h-8 text-slate-300 mt-3 block md:hidden cursor-pointer"
                >
                  {open ? <XIcon /> : <MenuAlt1Icon />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

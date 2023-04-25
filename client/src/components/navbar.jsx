import React from "react";
import { ReactComponent as Wink } from "../assets/icons/wink2.svg";
import { ReactComponent as Menu } from "../assets/icons/menu.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center sm:px-4 px-8 py-4 h-20 bg-primary border-b border-slate-500 z-10 shadow-lg sticky w-full top-0">
      <Link to="/chatterbox/chat" id="logo" className="flex flex-row gap-2">
        <Wink />
        <h1 className="font-handrawn text-2xl font-semibold text-white">
          Chatterbox
        </h1>
      </Link>
      <div id="menu" className="">
        <Menu />
      </div>
    </header>
  );
};

export default Navbar;

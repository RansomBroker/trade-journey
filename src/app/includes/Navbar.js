/** @format */
"use client";
import { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SidebarContext } from "../context/SidebarContext";

const Navbar = () => {
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <nav className="w-full min-h-12 flex bg-white p-4 mb-6 rounded-lg shadow-md justify-between">
      <button
        onClick={() => setSidebar(!sidebar)}
        className="text-xl font-bold sidebar-open hover:bg-cyan-100 rounded-full p-2"
      >
        <AiOutlineMenu className="inline" />
      </button>
    </nav>
  );
};

export default Navbar;

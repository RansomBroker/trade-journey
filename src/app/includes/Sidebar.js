/** @format */
"use client";
import { useContext } from "react";
import {
  AiOutlineDashboard,
  AiOutlineBarChart,
  AiFillExperiment,
  AiFillEdit,
  AiFillBackward,
} from "react-icons/ai";
import { SidebarContext } from "../context/SidebarContext";
import Link from "next/link";

export default function Sidebar() {
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <nav
      aria-label="Sidebar"
      className={` w-64 lg:block lg:flex-shrink-0 lg:bg-white shadow-lg lg:overflow-y-auto p-4 lg:p-8 ${
        sidebar ? "active" : "deactive"
      }`}
    >
      {/* Sidebar brand */}
      <p className="font-bold text-zinc-950 tracking-widest text-xl">
        Trade Journey
      </p>
      {/* Sidebar content */}
      <div className="py-8">
        <Link
          href="/"
          className="flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3"
        >
          <AiOutlineDashboard className="inline me-3" /> Dashboard
        </Link>
        {/* section */}
        <p className="mb-6 text-slate-400 uppercase text-xs">Trading Journal</p>
        <Link
          href="/my-strategy"
          className="flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3"
        >
          <AiFillExperiment className="inline me-3" /> My Strategy
        </Link>
        <Link
          href="/mynote"
          className="flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3"
        >
          <AiFillEdit className="inline me-3" /> My Note
        </Link>
        <Link
          href="/my-journal"
          className="flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3"
        >
          <AiOutlineBarChart className="inline me-3" /> My Journal
        </Link>
        {/* section */}
        <p className="mb-6 text-slate-400 uppercase text-xs">Testing</p>
        <Link
          href="/backtest"
          className="flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3"
        >
          <AiFillBackward className="inline me-3" /> Backtest
        </Link>
      </div>
    </nav>
  );
}

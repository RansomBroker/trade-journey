/** @format */
"use client";
import { useContext, useState } from "react";
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
  const [tabActive, setTabActive] = useState("dashboard");

  console.log(tabActive);
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
          onClick={() => setTabActive("dashboard")}
          href="/"
          className={`flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3 ${
            tabActive == "dashboard" ? "bg-cyan-100" : ""
          } `}
        >
          <AiOutlineDashboard className="inline me-3" /> Dashboard
        </Link>
        {/* section */}
        <p className="mb-6 text-slate-400 uppercase text-xs">Trading Journal</p>
        <Link
          onClick={() => setTabActive("mystrategy")}
          href="/my-strategy"
          className={`flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3 ${
            tabActive == "mystrategy" ? "bg-cyan-100" : ""
          } `}
        >
          <AiFillExperiment className="inline me-3" /> My Strategy
        </Link>
        <Link
          onClick={() => setTabActive("mynote")}
          href="/mynote"
          className={`flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3 ${
            tabActive == "mynote" ? "bg-cyan-100" : ""
          } `}
        >
          <AiFillEdit className="inline me-3" /> My Note
        </Link>
        <Link
          onClick={() => setTabActive("myjournal")}
          href="/my-journal"
          className={`flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3 ${
            tabActive == "myjournal" ? "bg-cyan-100" : ""
          } `}
        >
          <AiOutlineBarChart className="inline me-3" /> My Journal
        </Link>
        {/* section */}
        <p className="mb-6 text-slate-400 uppercase text-xs">Testing</p>
        <Link
          onClick={() => setTabActive("backtest")}
          href="/backtest"
          className={`flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3 ${
            tabActive == "backtest" ? "bg-cyan-100" : ""
          } `}
        >
          <AiFillBackward className="inline me-3" /> Backtest
        </Link>
      </div>
    </nav>
  );
}

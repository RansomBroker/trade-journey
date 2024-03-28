/** @format */

import {
  AiOutlineDashboard,
  AiOutlineBarChart,
  AiFillExperiment,
  AiFillEdit,
  AiFillBackward,
} from "react-icons/ai";

export default function Sidebar() {
  return (
    <nav
      aria-label="Sidebar"
      className="w-64 lg:block lg:flex-shrink-0 lg:bg-white shadow-lg lg:overflow-y-auto p-4 lg:p-8"
    >
      {/* Sidebar brand */}
      <p className="font-bold text-zinc-950 tracking-widest text-xl">
        Trade Journey
      </p>
      {/* Sidebar content */}
      <div className="py-8">
        <a
          href=""
          className="flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3"
        >
          <AiOutlineDashboard className="inline me-3" /> Dashboard
        </a>
        {/* section */}
        <p className="mb-6 text-slate-400 uppercase text-xs">Trading Journal</p>
        <a
          href=""
          className="flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3"
        >
          <AiFillExperiment className="inline me-3" /> My Strategy
        </a>
        <a
          href=""
          className="flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3"
        >
          <AiFillEdit className="inline me-3" /> My Note
        </a>
        <a
          href=""
          className="flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3"
        >
          <AiOutlineBarChart className="inline me-3" /> My Journal
        </a>
        {/* section */}
        <p className="mb-6 text-slate-400 uppercase text-xs">Testing</p>
        <a
          href=""
          className="flex items-center text-slate-900 mb-6 text-sm hover:bg-cyan-100 rounded-md p-3"
        >
          <AiFillBackward className="inline me-3" /> Backtest
        </a>
      </div>
    </nav>
  );
}

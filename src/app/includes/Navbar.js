/** @format */

import { AiOutlineMenu } from "react-icons/ai";

export default function Sidebar() {
  return (
    <nav className="w-full min-h-12 flex bg-white p-4 mb-6 rounded-lg shadow-md justify-between">
      <button className="text-xl font-bold sidebar-open hover:bg-cyan-100 rounded-full p-2">
        <AiOutlineMenu className="inline" />
      </button>
    </nav>
  );
}

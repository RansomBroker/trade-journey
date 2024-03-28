/** @format */
import Sidebar from "./includes/Sidebar";
import Navbar from "./includes/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-stretch">
      <main className="min-h-0 flex-1 flex overflow-hidden">
        <Sidebar />
        <div className="p-4 lg:p-10 w-full">
          <Navbar />
        </div>
      </main>
    </main>
  );
}

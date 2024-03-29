/** @format */
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export const metadata = {
  title: "Trade Journey | My Strategy",
  description: "My Strategy",
};

const page = () => {
  return (
    <div>
      <h1 className="text-2xl text-slate-500 mb-4">My Strategy</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* add new strategy */}
        <div className="w-full bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl text-slate-500 mb-4">Add New Strategy</h2>
        </div>
        {/* strategy list */}
        <div className="w-full bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl text-slate-500 mb-4">Strategy</h2>
          <table className="table-fixed w-full text-slate-500 text-sm">
            <thead>
              <tr>
                <th className="font-normal">Strategy</th>
                <th className="font-normal">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem ipsum</td>
                <td>
                  <div className="flex justify-center">
                    <button className="hover:bg-cyan-100 me-4 rounded-full p-4">
                      <AiFillEdit />
                    </button>
                    <button className="hover:bg-cyan-100 rounded-full p-4">
                      <AiFillDelete />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;

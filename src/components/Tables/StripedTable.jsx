import React from "react";

const StripedTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border-2 border-black bg-[#f3e8bc] text-left">
        <thead>
          <tr className="bg-[#57c9f6]">
            <th className="p-4 border-2 border-black">#</th>
            <th className="p-4 border-2 border-black">Name</th>
            <th className="p-4 border-2 border-black">Email</th>
            <th className="p-4 border-2 border-black">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#c8ebf1]">
            <td className="p-4 border-2 border-black">1</td>
            <td className="p-4 border-2 border-black">John Doe</td>
            <td className="p-4 border-2 border-black">johndoe@example.com</td>
            <td className="p-4 border-2 border-black">Admin</td>
          </tr>
          <tr className="bg-[#c8ebf1]">
            <td className="p-4 border-2 border-black">2</td>
            <td className="p-4 border-2 border-black">Jane Smith</td>
            <td className="p-4 border-2 border-black">janesmith@example.com</td>
            <td className="p-4 border-2 border-black">User</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StripedTable;

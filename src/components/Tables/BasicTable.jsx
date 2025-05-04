import React from "react";

// Dummy data
const data = [
  {
    id: 1,
    name: "John Michael",
    email: "john@creative-tim.com",
    function: "Manager",
    department: "Organization",
    employedDate: "23/04/18",
  },
  {
    id: 2,
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    function: "Designer",
    department: "Marketing",
    employedDate: "23/04/18",
  },
  {
    id: 3,
    name: "James Smith",
    email: "james@creative-tim.com",
    function: "Developer",
    department: "Engineering",
    employedDate: "15/05/19",
  },
];

const BasicTable = () => {
  return (
    <div className="relative w-full p-4 bg-gradient-to-br from-purple-600 to-blue-400 rounded-lg shadow-lg overflow-x-auto">
      <h2 className="text-3xl font-serif text-white text-center mb-4">
        Employees List
      </h2>

      <table className="min-w-full table-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-neon/35 text-black">
            <th className="p-4 text-center text-lg font-bold border-b border-black">
              Name
            </th>
            <th className="p-4 text-center text-lg font-bold border-b border-black">
              Email
            </th>
            <th className="p-4 text-center text-lg font-bold border-b border-black">
              Function
            </th>
            <th className="p-4 text-center text-lg font-bold border-b border-black">
              Department
            </th>
            <th className="p-4 text-center text-lg font-bold border-b border-black">
              Employed Date
            </th>
          </tr>
        </thead>
        <tbody className="text-black">
          {data.map((employee) => (
            <tr
              key={employee.id}
              className="hover:bg-gray-200 transition-colors duration-300"
            >
              <td className="p-4 border-b border-black text-lg font-mono text-center">
                {employee.name}
              </td>
              <td className="p-4 border-b border-black text-lg font-mono text-center">
                {employee.email}
              </td>
              <td className="p-4 border-b border-black text-lg font-mono text-center">
                {employee.function}
              </td>
              <td className="p-4 border-b border-black text-lg font-mono text-center">
                {employee.department}
              </td>
              <td className="p-4 border-b border-black text-lg font-mono text-center">
                {employee.employedDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;

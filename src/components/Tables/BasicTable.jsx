import React from "react";

const data = [
  { id: 1, name: "John Michael", email: "john@retro.dev", role: "Manager", dept: "Org", date: "23/04/18" },
  { id: 2, name: "Alexa Liras", email: "alexa@retro.dev", role: "Designer", dept: "Marketing", date: "23/04/18" },
  { id: 3, name: "James Smith", email: "james@retro.dev", role: "Developer", dept: "Engineering", date: "15/05/19" },
];

const BasicTable = () => {
  return (
    <div className="w-full font-mono bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] p-5">
      <div className="text-center border-b-4 border-double border-black pb-2 mb-4">
        <p className="text-[10px] tracking-[0.4em] uppercase opacity-60">
          VOL. 27 · STAFF DIRECTORY · Q2
        </p>
        <h2 className="text-3xl font-black uppercase tracking-tighter">
          The Personnel Gazette
        </h2>
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">
          ★ ALL HANDS ON DECK ★
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-y-4 border-double border-black">
              {["Name", "Email", "Role", "Dept", "Joined"].map((h) => (
                <th
                  key={h}
                  className="p-3 text-left text-[10px] font-black uppercase tracking-widest"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.id}
                className={`border-b border-dashed border-black/40 hover:bg-yellow-100 transition-colors ${
                  i % 2 ? "bg-black/[0.025]" : ""
                }`}
              >
                <td className="p-3 font-bold">{row.name}</td>
                <td className="p-3 opacity-80">{row.email}</td>
                <td className="p-3">
                  <span className="inline-block bg-black text-[#f5f1e6] text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5">
                    {row.role}
                  </span>
                </td>
                <td className="p-3 opacity-80">{row.dept}</td>
                <td className="p-3 opacity-60">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-center text-[10px] tracking-[0.3em] uppercase opacity-50">
        — End of issue —
      </p>
    </div>
  );
};

export default BasicTable;

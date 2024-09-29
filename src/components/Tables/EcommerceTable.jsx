import React from "react";

// Dummy data for products
const products = [
  {
    id: 1,
    name: "Retro Game Console",
    price: "$199.99",
    category: "Gaming",
    stock: 50,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Vintage Record Player",
    price: "$299.99",
    category: "Music",
    stock: 20,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Classic Leather Jacket",
    price: "$149.99",
    category: "Fashion",
    stock: 15,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Old-School Polaroid Camera",
    price: "$89.99",
    category: "Photography",
    stock: 10,
    rating: 4.7,
  },
];

const EcommerceTable = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-[#e3b1f8] to-[#f8c3b1] rounded-lg shadow-lg overflow-x-auto">
      <h2 className="text-4xl font-bold text-center text-[#3f3053] mb-4 font-sans tracking-wider">
        E-Commerce Products
      </h2>
      <button
        className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-black bg-[#f3c736] border-4 border-black cursor-pointer select-none
      shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-150 ease-out mb-4"
      >
        Add Product
      </button>
      <table className="min-w-full bg-white border-4 border-[#3f3053] shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-150 ease-out">
        <thead className="bg-[#3f3053] text-white text-left">
          <tr>
            <th className="px-6 py-4 border-b-2 border-[#f3c736] text-lg font-semibold">
              Product Name
            </th>
            <th className="px-6 py-4 border-b-2 border-[#f3c736] text-lg font-semibold">
              Price
            </th>
            <th className="px-6 py-4 border-b-2 border-[#f3c736] text-lg font-semibold">
              Category
            </th>
            <th className="px-6 py-4 border-b-2 border-[#f3c736] text-lg font-semibold">
              Stock
            </th>
            <th className="px-6 py-4 border-b-2 border-[#f3c736] text-lg font-semibold">
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="hover:bg-[#f9e3b1] transition-all duration-300 ease-in-out transform hover:scale-102"
            >
              <td className="px-6 py-4 border-b border-[#3f3053] font-sans text-lg font-medium">
                {product.name}
              </td>
              <td className="px-6 py-4 border-b border-[#3f3053] font-sans text-lg font-medium">
                {product.price}
              </td>
              <td className="px-6 py-4 border-b border-[#3f3053] font-sans text-lg font-medium">
                {product.category}
              </td>
              <td className="px-6 py-4 border-b border-[#3f3053] font-sans text-lg font-medium">
                {product.stock}
              </td>
              <td className="px-6 py-4 border-b border-[#3f3053] font-sans text-lg font-medium">
                {product.rating} ⭐
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EcommerceTable;

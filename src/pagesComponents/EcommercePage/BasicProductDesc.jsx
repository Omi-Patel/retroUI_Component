import React, { useState } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";

export default function BasicProductDesc() {
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-[500px] bg-yellow-50 flex items-center justify-center p-2 sm:p-4 font-mono">
      <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4 sm:p-8 bg-blue-100 flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-yellow-200 rounded-full transform -rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Retro Radio"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl transform rotate-3 transition-transform hover:rotate-0 duration-300"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-3 sm:p-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">
              Vintage Melody Maker
            </h1>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
              <span className="ml-2 text-blue-600">(42 reviews)</span>
            </div>
            <p className="text-blue-700 mb-6">
              Transport yourself to the golden age of radio with our Vintage
              Melody Maker. This beautifully crafted radio combines classic
              aesthetics with modern technology, delivering crystal-clear sound
              in a nostalgic package.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-blue-800">
                ${(129.99 * quantity).toFixed(2)}
              </span>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-yellow-200 text-blue-800 px-3 py-1 rounded-l-full hover:bg-yellow-300 transition-colors"
                >
                  -
                </button>
                <span className="bg-yellow-100 text-blue-800 px-4 py-1">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-yellow-200 text-blue-800 px-3 py-1 rounded-r-full hover:bg-yellow-300 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`bg-yellow-200 text-blue-800 p-2 rounded-full hover:bg-yellow-300 transition-colors transform ${
                  isLiked ? "scale-110" : "scale-100"
                }`}
                style={{
                  transition: "transform 0.2s",
                }}
              >
                <Heart
                  className={`w-6 h-6 ${
                    isLiked ? "fill-current text-blue-500" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

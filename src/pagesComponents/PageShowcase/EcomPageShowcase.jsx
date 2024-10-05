import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ProductsPage from "../EcommercePage/ProducsPage";
import ModernProduct from "../EcommercePage/ModernProduct";
import BasicProductDesc from "../EcommercePage/BasicProductDesc";
import RetroDesc from "../EcommercePage/RetroDesc";

const componentCode = {
  ProductsPage: `
import React, { useState, useEffect } from "react";
import { ShoppingBag, Heart, X, Plus, Minus, Trash2 } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vintage Polaroid Camera",
    price: 129.99,
    image: "https://via.placeholder.com/300x200?text=Camera",
    description:
      "Capture moments in classic style with this refurbished Polaroid camera from the 1970s.",
  },
  {
    id: 2,
    name: "Retro Vinyl Record Player",
    price: 189.99,
    image: "https://via.placeholder.com/300x200?text=Player",
    description:
      "Experience the warm sound of vinyl with this beautifully crafted record player, featuring modern connectivity.",
  },
  {
    id: 3,
    name: "Antique Brass Telescope",
    price: 79.99,
    image: "https://via.placeholder.com/300x200?text=Telescope",
    description:
      "Gaze at the stars or use as a stunning decorative piece. This brass telescope is a true conversation starter.",
  },
  {
    id: 4,
    name: "Classic Leather-bound Journal",
    price: 39.99,
    image: "https://via.placeholder.com/300x200?text=Journal",
    description:
      "Write your thoughts in style with this handcrafted leather journal, featuring high-quality paper and a timeless design.",
  },
  {
    id: 5,
    name: "Vintage Typewriter",
    price: 249.99,
    image: "https://via.placeholder.com/300x200?text=Typewriter",
    description:
      "Create with a touch of nostalgia using this fully restored vintage typewriter. Perfect for writers and collectors alike.",
  },
  {
    id: 6,
    name: "Antique World Globe",
    price: 89.99,
    image: "https://via.placeholder.com/300x200?text=Globe",
    description:
      "Explore the world from your study with this beautifully detailed antique-style world globe on a wooden stand.",
  },
];

export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [likes, setLikes] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setCartTotal(newTotal);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const toggleLike = (productId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [productId]: !prevLikes[productId],
    }));
  };

  return (
    <div className="min-h-screen bg-[#f3e5ab] text-[#4a4e69] font-mono">
      <header className="bg-[#4a3f35] py-4 px-6  top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#c99700] tracking-wide">
            RetroShop
          </h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-[#f3e5ab] hover:text-[#c99700] transition-colors duration-300"
          >
            <ShoppingBag size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ef8354] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto py-8 px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#4a4e69]">
          Timeless Retro Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#fff6e1] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 p-2 bg-[#f3e5ab] rounded-full shadow-md hover:bg-[#ef8354] transition-colors duration-300"
                >
                  <Heart
                    size={20}
                    className={\`\${
                      likes[product.id]
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400"
                    }\`}
                  />
                </button>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#4a4e69]">
                  {product.name}
                </h3>
                <p className="text-[#6d6875] mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl font-bold text-[#ef8354]">
                    \${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#c99700] text-white px-4 py-2 rounded-full hover:bg-[#e8ac2f] transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full max-w-md p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#4a4e69]">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-[#6d6875] hover:text-[#ef8354]"
              >
                <X size={24} />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-[#6d6875] text-center">Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center mb-4 pb-4 border-b border-[#e0e0e0]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-[#4a4e69]">
                        {item.name}
                      </h3>
                      <p className="text-[#6d6875]">\${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="text-[#6d6875] hover:text-[#c99700]"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-2 text-[#4a4e69]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="text-[#6d6875] hover:text-[#c99700]"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-[#6d6875] hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
                <div className="mt-6 text-right">
                  <span className="text-xl font-bold text-[#ef8354]">
                    Total: \${cartTotal.toFixed(2)}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

  `,
  ModernProduct: `
import React, { useState, useEffect } from "react";
import { ShoppingBag, Heart, X, Plus, Minus, Trash2 } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vintage Polaroid Camera",
    price: 129.99,
    image: "https://via.placeholder.com/300x200?text=Camera",
    description:
      "Capture moments in classic style with this refurbished Polaroid camera from the 1970s.",
  },
  {
    id: 2,
    name: "Retro Vinyl Record Player",
    price: 189.99,
    image: "https://via.placeholder.com/300x200?text=Player",
    description:
      "Experience the warm sound of vinyl with this beautifully crafted record player, featuring modern connectivity.",
  },
  {
    id: 3,
    name: "Antique Brass Telescope",
    price: 79.99,
    image: "https://via.placeholder.com/300x200?text=Telescope",
    description:
      "Gaze at the stars or use as a stunning decorative piece. This brass telescope is a true conversation starter.",
  },
  {
    id: 4,
    name: "Classic Leather-bound Journal",
    price: 39.99,
    image: "https://via.placeholder.com/300x200?text=Journal",
    description:
      "Write your thoughts in style with this handcrafted leather journal, featuring high-quality paper and a timeless design.",
  },
  {
    id: 5,
    name: "Vintage Typewriter",
    price: 249.99,
    image: "https://via.placeholder.com/300x200?text=Typewriter",
    description:
      "Create with a touch of nostalgia using this fully restored vintage typewriter. Perfect for writers and collectors alike.",
  },
  {
    id: 6,
    name: "Antique World Globe",
    price: 89.99,
    image: "https://via.placeholder.com/300x200?text=Globe",
    description:
      "Explore the world from your study with this beautifully detailed antique-style world globe on a wooden stand.",
  },
];

export default function ModernProduct() {
  const [cart, setCart] = useState([]);
  const [likes, setLikes] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setCartTotal(newTotal);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const toggleLike = (productId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [productId]: !prevLikes[productId],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="bg-white shadow-md py-4 px-6  top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">ModernRetro</h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
          >
            <ShoppingBag size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto py-8 px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Our Curated Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-indigo-100 transition-colors duration-300"
                >
                  <Heart
                    size={20}
                    className={\`\${
                      likes[product.id]
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400"
                    }\`}
                  />
                </button>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl font-bold text-indigo-600">
                    \${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full max-w-md p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center mb-4 pb-4 border-b border-gray-200"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">\${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="text-gray-500 hover:text-indigo-600"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-2 text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="text-gray-500 hover:text-indigo-600"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 ml-4"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-semibold text-gray-800">
                      Total:
                    </span>
                    <span className="text-2xl font-bold text-indigo-600">
                      \${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <footer className="bg-gray-800 text-white py-8 px-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 ModernRetro. All rights reserved.</p>
          <p className="mt-2 text-gray-400">
            Bringing the past into the future, one product at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}

  `,
  BasicProductDesc: `
import React, { useState } from "react";
import { Motion, spring } from "react-motion";
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
                \${(129.99 * quantity).toFixed(2)}
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
              <Motion style={{ scale: spring(isLiked ? 1.2 : 1) }}>
                {({ scale }) => (
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="bg-yellow-200 text-blue-800 p-2 rounded-full hover:bg-yellow-300 transition-colors"
                    style={{ transform: \`scale(\${scale})\` }}
                  >
                    <Heart
                      className={\`w-6 h-6 \${
                        isLiked ? "fill-current text-red-500" : ""
                      }\`}
                    />
                  </button>
                )}
              </Motion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  `,
  RetroDesc: `
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Volume2, Zap, ShoppingCart } from "lucide-react";

export default function RetroDesc() {
  const [activeTab, setActiveTab] = useState("description");
  const [isHovering, setIsHovering] = useState(false);

  const features = [
    { icon: Radio, text: "AM/FM radio" },
    { icon: Volume2, text: "High-fidelity sound" },
    { icon: Zap, text: "Bluetooth connectivity" },
  ];

  return (
    <div className="min-h-[500px] bg-blue-50 flex items-center justify-center p-2 sm:p-4 font-sans">
      <div className="max-w-4xl w-full bg-yellow-100 rounded-lg overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 relative overflow-hidden flex justify-center items-center">
            <motion.div
              className="absolute inset-0 bg-blue-200 rounded-full "
              animate={{ scale: isHovering ? 1.2 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            ></motion.div>
            <motion.img
              src="https://images.unsplash.com/photo-1558537348-c0f8e733989d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Retro Radio"
              className="relative z-10 w-full h-auto rounded-lg shadow-lg "
              whileHover={{ rotate: 5, scale: 1.05 }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            />
            <div className="absolute bottom-4 right-4 bg-yellow-300 text-blue-800 px-4 py-2 rounded-full font-bold shadow-lg z-10">
              $129.99
            </div>
          </div>
          <div className="lg:w-1/2 p-2 sm:p-8 bg-white">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
              RetroWave Radio
            </h1>
            <div className="flex space-x-2 mb-6">
              {["description", "features", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={\`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-sm font-medium transition-colors \${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : "bg-yellow-200 text-blue-800 hover:bg-yellow-300"
                  }\`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "description" && (
                  <p className="text-blue-700 mb-6">
                    Step back in time with our RetroWave Radio, a perfect blend
                    of vintage aesthetics and modern technology. This stunning
                    piece not only looks like it's straight out of the 1960s but
                    also packs all the features you need for today's listening
                    experience.
                  </p>
                )}
                {activeTab === "features" && (
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-blue-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <feature.icon className="w-6 h-6 mr-2 text-yellow-500" />
                        {feature.text}
                      </motion.li>
                    ))}
                  </ul>
                )}
                {activeTab === "reviews" && (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-1 h-2 bg-yellow-200 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-blue-600"></div>
                      </div>
                      <span className="ml-2 text-blue-700">4.5/5</span>
                    </div>
                    <p className="text-blue-700 italic">
                      "This radio is a fantastic addition to my vintage-inspired
                      living room. The sound quality is superb!" - Happy
                      Customer
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 w-full bg-blue-600 text-white py-3 px-6 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <ShoppingCart className="w-6 h-6 mr-2" />
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

  `,
};

const EcomPageShowcase = () => {
  const [activeTabs, setActiveTabs] = useState({
    ProductsPage: "preview",
    ModernProduct: "preview",
    BasicProductDesc: "preview",
    RetroDesc: "preview",
  });
  const [copySuccess, setCopySuccess] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const installationCopyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setInstallSuccess(true);
    setTimeout(() => setInstallSuccess(false), 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-2 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Ecommerce Page Components
      </h1>

      {/* Installation Guide  */}
      <h1 className="text-2xl my-2 font-medium tracking-wide">
        # Installation
      </h1>
      <div className="flex justify-between p-2 mb-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
        <SyntaxHighlighter
          language="jsx"
          style={atomDark}
          className="rounded-md w-full"
        >
          npm lucide-react react-motion
        </SyntaxHighlighter>
        <button
          onClick={() =>
            installationCopyToClipboard("npm install lucide-react react-motion")
          }
          className="text-white p-1 sm:p-4"
        >
          {installSuccess ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-green-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          )}
        </button>
      </div>

      {Object.keys(componentCode).map((componentName) => (
        <div key={componentName} className="mb-8">
          <h2 className="text-2xl sm:text-3xl mb-4">
            {componentName.replace(/([A-Z])/g, " $1").trim()}
          </h2>

          <div className="flex border-b border-gray-700 mb-6">
            <button
              onClick={() =>
                setActiveTabs((prev) => ({
                  ...prev,
                  [componentName]: "preview",
                }))
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTabs[componentName] === "preview"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() =>
                setActiveTabs((prev) => ({ ...prev, [componentName]: "code" }))
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTabs[componentName] === "code"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400"
              }`}
            >
              Code
            </button>
          </div>

          <div className="p-2 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
            {activeTabs[componentName] === "preview" && (
              <div className="mb-4">
                {componentName === "ProductsPage" && <ProductsPage />}
                {componentName === "ModernProduct" && <ModernProduct />}
                {componentName === "BasicProductDesc" && <BasicProductDesc />}
                {componentName === "RetroDesc" && <RetroDesc />}
              </div>
            )}
            {activeTabs[componentName] === "code" && (
              <div className="relative overflow-x-auto h-[600px]">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  className="rounded-md"
                >
                  {componentCode[componentName]}
                </SyntaxHighlighter>
                <button
                  onClick={() => copyToClipboard(componentCode[componentName])}
                  className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {copySuccess ? "Copied!" : "Copy Code"}
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EcomPageShowcase;

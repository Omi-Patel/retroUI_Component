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
                    className={`${
                      likes[product.id]
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400"
                    }`}
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
                    ${product.price.toFixed(2)}
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
                      <p className="text-[#6d6875]">${item.price.toFixed(2)}</p>
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
                    Total: ${cartTotal.toFixed(2)}
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

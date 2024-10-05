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
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : "bg-yellow-200 text-blue-800 hover:bg-yellow-300"
                  }`}
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

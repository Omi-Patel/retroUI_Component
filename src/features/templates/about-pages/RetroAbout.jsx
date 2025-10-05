import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function RetroAbout() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900 font-mono">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-amber-100">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Founded in the digital age with a love for the analog past, we
              blend modern technology with vintage aesthetics. Our journey began
              in a small garage, much like the tech giants of yesteryear, fueled
              by a passion for creating experiences that resonate with both the
              young and the young at heart.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              We strive to bridge the gap between the nostalgia of the past and
              the innovations of the future. Our goal is to create products and
              experiences that not only function flawlessly but also tell a
              story, evoking memories while pushing boundaries.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Jane Retro", "John Vintage", "Alice Analog"].map(
                (name, index) => (
                  <motion.div
                    key={name}
                    className="bg-amber-100 p-4 rounded-lg text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={`https://via.placeholder.com/300x200?text=${name.charAt(
                        0
                      )}`}
                      alt={name}
                      className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-amber-700">Retro Enthusiast</p>
                  </motion.div>
                )
              )}
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Get in Touch
            </h2>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="#"
                className="text-amber-900 hover:text-amber-700"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-amber-900 hover:text-amber-700"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-amber-900 hover:text-amber-700"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <motion.footer
        className="py-6 px-4 sm:px-6 lg:px-8 bg-amber-100 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>
          &copy; {new Date().getFullYear()} Retro Innovations. All rights
          reserved.
        </p>
      </motion.footer>
    </div>
  );
}

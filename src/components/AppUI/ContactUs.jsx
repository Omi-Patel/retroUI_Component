"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Show success message
    setIsSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzAgMzBoMzB2MzBoLTMwem0wLTMwaDMwdjMwaC0zMHptLTMwIDBoMzB2MzBoLTMwem0wIDMwaDMwdjMwaC0zMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 dark:opacity-10 -z-10"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl font-bold text-gray-900 dark:text-gray-300 sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
              Us
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400"
          >
            Have questions about RetroUI? We're here to help. Reach out to us
            and we'll respond as soon as we can.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg border-2 border-black dark:border-gray-700"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full">
                  <MapPin
                    className="h-6 w-6 text-teal-600 dark:text-teal-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-4 text-base text-gray-900 dark:text-gray-200">
                  <p className="font-medium">Our Location</p>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    123 RetroUI Street
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Bilimora, Navsari 123908
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg border-2 border-black dark:border-gray-700"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-full">
                  <Phone
                    className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-4 text-base text-gray-900 dark:text-gray-200">
                  <p className="font-medium">Phone Number</p>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    +91 97263 68386
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Mon-Fri, 9am-6pm IST
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg border-2 border-black dark:border-gray-700"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <Mail
                    className="h-6 w-6 text-purple-600 dark:text-purple-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-4 text-base text-gray-900 dark:text-gray-200">
                  <p className="font-medium">Email Address</p>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    support@retroui.com
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    We reply within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="bg-white dark:bg-gray-800 shadow-lg overflow-hidden rounded-lg border-2 border-black dark:border-gray-700">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-6">
                Send us a message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-medium text-green-800 dark:text-green-300 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-green-700 dark:text-green-400">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-black dark:border-gray-700 rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] text-base font-medium text-teal-400 bg-black dark:bg-zinc-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Send Message
                      <Send className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 w-full z-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center py-6">
        <ul className="flex space-x-8 px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="text-white text-lg font-medium hover:text-gray-300 transition-all"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-6 right-5 z-50">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="p-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30"
        >
          {navOpen ? <AiOutlineClose size={28} className="text-white" /> : <AiOutlineMenu size={28} className="text-white" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.path}
                className="text-2xl text-white font-semibold hover:text-gray-300 transition-all"
                onClick={() => setNavOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                {link.title}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

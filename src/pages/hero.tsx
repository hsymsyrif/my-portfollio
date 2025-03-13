import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const generateStars = (count: number) => {
  return Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 3 + 1;
    return (
      <motion.div
        key={i}
        className="absolute bg-white rounded-full"
        style={{
          width: size,
          height: size,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random(),
        }}
        animate={{
          y: [0, Math.random() * 50 - 25],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{ duration: Math.random() * 5 + 2, repeat: Infinity }}
      />
    );
  });
};

const LandingPage: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white px-4 overflow-hidden">
      {/* Nebula Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-black to-black opacity-80"></div>
      
      {/* Starry Background */}
      <div className="absolute inset-0 overflow-hidden">{generateStars(150)}</div>

      {/* Hero Content */}
      <div className="text-center max-w-lg relative z-10 p-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mt-4 text-blue-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-white">Your Name</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg opacity-80 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A fullstack developer crafting seamless user experiences across the web.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-400 transition-transform transform hover:scale-105"
          >
            <FaEnvelope /> Contact Me
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-105"
          >
            <FaLinkedin /> View Work
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
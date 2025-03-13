import React, { useState, useEffect } from "react";
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
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "easeInOut" }}
      />
    );
  });
};

const LandingPage: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [fallingStars, setFallingStars] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const newStar = { x: e.clientX, y: e.clientY, id: Date.now() };
      setFallingStars((prevStars) => [...prevStars, newStar]);

      setTimeout(() => {
        setFallingStars((prevStars) => prevStars.filter(star => star.id !== newStar.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white px-4 overflow-hidden">
      {/* Nebula Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-black to-black opacity-80"></div>

      {/* Starry Background */}
      <div className="absolute inset-0 overflow-hidden">{generateStars(150)}</div>

      {/* Falling Stars Effect */}
      {fallingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{ width: 4, height: 4, top: star.y, left: star.x }}
          animate={{ y: [0, 50], opacity: [1, 0] }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}

      {/* Elegant Purple Portal */}
      <motion.div
        className="absolute w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full bg-transparent border-4 border-purple-500 opacity-70"
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          boxShadow: "0px 0px 30px rgba(191, 0, 255, 0.7)",
          background: "radial-gradient(circle, rgba(191, 0, 255, 0.15) 10%, transparent 60%)",
        }}
      ></motion.div>

      {/* Hero Content */}
      <div className="text-center max-w-lg relative z-10 p-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mt-4 text-purple-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I am <span className="text-white">Hisyam</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg opacity-80 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Fullstack Developer.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-400 transition-transform transform hover:scale-105"
          >
            <FaEnvelope /> Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/hisyamsyarif/"
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

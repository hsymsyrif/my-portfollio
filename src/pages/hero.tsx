import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import LetterGlitch from "../Backgrounds/LetterGlitch/LetterGlitch";
import GlitchText from "../TextAnimations/GlitchText/GlitchText";
import RotatingText from "../TextAnimations/RotatingText/RotatingText";

const LandingPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white px-4 overflow-hidden">
      {/* Nebula Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-black to-black opacity-60"></div>

      {/* LetterGlitch Background */}
      <div className="absolute inset-0 z-0" style={{ opacity: 0.6, mixBlendMode: "screen" }}>
        <LetterGlitch
          glitchColors={["rgba(0, 212, 255, 0.2)", "rgba(255, 0, 255, 0.2)"]}
          glitchSpeed={0.6}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Popup Hello */}
      {showPopup && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <GlitchText speed={1} enableShadows={true} enableOnHover={false} className="text-5xl md:text-7xl text-white">Hello👋</GlitchText>
        </motion.div>
      )}

      {/* Futuristic Portal */}
      <motion.div
        className="absolute w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full border-4 border-blue-500 opacity-70"
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          boxShadow: "0px 0px 50px rgba(0, 191, 255, 0.7)",
          background: "radial-gradient(circle, rgba(0, 191, 255, 0.2) 10%, transparent 60%)",
        }}
      ></motion.div>

      {/* Hero Content */}
      <div className="text-center max-w-lg relative z-10 p-6">
      <div className="flex items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
        <span className="text-white">I'm a</span>
        <RotatingText
          texts={['Developer', 'Designer', 'Freelancer']}
          mainClassName="px-3 py-1 bg-blue-500 text-white rounded-lg shadow-lg whitespace-nowrap"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-400 transition-transform transform hover:scale-110"
          >
            <FaEnvelope /> Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/hisyamsyarif/"
            target="_blank"
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-110"
          >
            <FaLinkedin /> View Work
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
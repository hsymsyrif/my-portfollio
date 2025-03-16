"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const logos = [
  "/images/logo-framer-motion.png",
  "/images/logo-javascript.png",
  "/images/logo-nextjs.png",
  "/images/logo-nodejs.png",
  "/images/logo-react.png",
  "/images/logo-tailwind.png",
  "/images/logo-typescript.png",
  "/images/logo-mongodb.svg",
  "/images/logo-mysql.png",
  "/images/logo-java.png",
  "/images/logo-mendix.png",
  "/images/logo-php.png",
  "/images/logo-laravel.png",
  "/images/logo-wordpress.png",
  "/images/logo-threejs.png",
  "/images/logo-vite.png",
  "/images/logo-vue.png",
  "/images/logo-rust.png",
  "/images/logo-python.png",
  "/images/logo-c++.png",
  "/images/logo-golang.png",
  "/images/logo-boostrap.png",
];

export const LogoTicker = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
      className="py-6 md:py-10 bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="relative flex overflow-hidden w-full lg:[mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-8 sm:gap-10 md:gap-14 flex-none pr-8 md:pr-14"
            animate={{ translateX: "-100%" }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Company logo"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LogoTicker;
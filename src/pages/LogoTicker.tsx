import { motion } from "framer-motion";

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
  "/images/",
];

export const LogoTicker = () => {
  return (
    <div className="py-6 md:py-10 bg-white">
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
    </div>
  );
};
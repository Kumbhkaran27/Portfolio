import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const isMobile = window.innerWidth < 768;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={isMobile ? undefined : { opacity: 0, y: 20 }}
          animate={isMobile ? undefined : (inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={isMobile ? undefined : { opacity: 0, x: -50 }}
            animate={isMobile ? undefined : (inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 })}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm rounded-lg overflow-hidden shadow-xl"
            style={{ aspectRatio: "3/4" }}
          >
            <img
              src="abtme.png"
              alt="Pankaj Jagtap"
              className="w-full h-auto object-contain rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={isMobile ? undefined : { opacity: 0, x: 50 }}
            animate={isMobile ? undefined : (inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 })}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Rest of the text section */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

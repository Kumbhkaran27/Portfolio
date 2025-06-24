import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "../hooks/useMediaQuery";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.001,
  });
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={isMobile ? {} : { opacity: 0, y: 20 }}
          animate={
            isMobile
              ? { opacity: 1, y: 0 }
              : inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
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
            initial={isMobile ? {} : { opacity: 0, x: -50 }}
            animate={
              isMobile
                ? { opacity: 1, x: 0 }
                : inView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm rounded-lg overflow-hidden shadow-xl"
            style={{ aspectRatio: "3/4" }}
          >
            <img
              src="/Portfolio/abtme.png"
              alt="Pankaj Jagtap"
              className="w-full h-auto object-contain rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={isMobile ? {} : { opacity: 0, x: 50 }}
            animate={
              isMobile
                ? { opacity: 1, x: 0 }
                : inView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-pink-700">Software Developer</h3>
            <p className="text-gray-600 mb-6">
              I am a driven Software Engineer with 2 years of professional experience and a Master's in Computer Science from the Illinois Institute of Technology.
              With a strong foundation in Java, Spring Boot, and backend development, I specialize in building scalable APIs and high-performance systems.
            </p>
            <p className="text-gray-600 mb-6">
              My experience includes roles at Accenture and a backend internship at Hyphenova, where I optimized system performance, improved database efficiency, and deployed microservices on AWS using Docker and Kubernetes. 
              I’ve also led projects involving secure banking systems and time-series forecasting platforms using modern cloud and ML tools. 
              Passionate about system architecture, cloud-native solutions, and full-stack innovation, I strive to design solutions that are both efficient and impactful.
            </p>

            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-gray-600">Pankaj Jagtap</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-gray-600">jagtappankaj1727@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-gray-600">Chicago, IL</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

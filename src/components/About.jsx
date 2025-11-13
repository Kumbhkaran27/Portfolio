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
            <h3 className="text-2xl font-bold mb-4 text-pink-700">
              Software Developer • Full-Stack Java
            </h3>

            <p className="text-gray-600 mb-6">
  I’m a Software Engineer with <span className="font-semibold">around 3 years</span> of experience building scalable, cloud-native applications. My core strengths are in <span className="font-semibold">Java, Spring Boot, Python, REST APIs, and SQL</span>, and I focus on designing clean architectures, reliable systems, and production-ready backend services.
</p>

<p className="text-gray-600 mb-6">
  At <span className="font-semibold">Accenture</span>, I optimized SQL performance, improved backend workflows, and supported global web applications across Brazil, the U.S., and Portugal. At <span className="font-semibold">Hyphenova</span>, I refactored monolithic logic into FastAPI microservices, integrated Redis caching, and deployed containerized services on <span className="font-semibold">AWS using Docker and Kubernetes</span>.
</p>

<p className="text-gray-600 mb-6">
  I’m currently designing a full-stack application for a physical therapy clinic using <span className="font-semibold">React, Tailwind CSS, and Python</span>, collaborating directly with the client on architecture and product requirements. I enjoy solving complex backend problems, improving system performance, and building dependable software that brings real business value.
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
              <div>
                <p className="font-medium">Experience:</p>
                <p className="text-gray-600">~3 years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

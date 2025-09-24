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
              I’m a Full-Stack Java Developer with <span className="font-semibold">3+ years</span> of experience
              building enterprise-grade, cloud-native applications. I work primarily with{" "}
              <span className="font-semibold">Java, Spring Boot, and REST APIs</span> on the backend and{" "}
              <span className="font-semibold">React.js</span> on the frontend, with a strong focus on performance,
              reliability, and clean architecture.
            </p>

            <p className="text-gray-600 mb-6">
              Currently at <span className="font-semibold">BNY Mellon</span>, I contribute to backend service layers and
              code quality within large-scale systems. Previously at <span className="font-semibold">Hyphenova</span>, I
              built FastAPI services with Redis caching on <span className="font-semibold">AWS</span> (Docker,
              Kubernetes), and at <span className="font-semibold">Accenture</span> & <span className="font-semibold">Dell</span>
              I optimized data access paths, shipped microservices, and improved CI/CD and testing practices. I enjoy
              solving hard performance problems and delivering stable, scalable systems.
            </p>

            <p className="text-gray-600 mb-6">
              Tooling & platforms I use regularly: <span className="font-semibold">AWS, Google Cloud, Docker,
              Kubernetes, PostgreSQL/MySQL/SQL Server, Jenkins, Git/GitHub</span>. I’m comfortable across the stack and
              love collaborating in agile teams to turn ideas into reliable software.
            </p>

            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-gray-600">Pankaj Jagtap</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-gray-600">pankajjagtap2025@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-gray-600">Chicago, IL</p>
              </div>
              <div>
                <p className="font-medium">Experience:</p>
                <p className="text-gray-600">3+ years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

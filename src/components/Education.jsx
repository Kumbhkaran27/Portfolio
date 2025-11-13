import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "Illinois Institute of Technology",
      location: "Chicago, IL",
      year: "2023 - 2025",
    },
    {
      degree: "Bachelor of Engineering in Electronics and Telecommunication",
      institution: "Savitribai Phule Pune University",
      location: "Pune, Maharashtra",
      year: "2017 – 2021",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 mx-auto"></div>

          <TypeAnimation
            sequence={[
              "", 1000,
              "Master of Computer Science at IIT Chicago", 2000,
              "Bachelor of Engineering in ENTC from Pune", 2000,
              "From Electronics to Software", 2000,
              "India 🇮🇳 → USA 🇺🇸", 2000,
            ]}
            speed={50}
            wrapper="p"
            repeat={Infinity}
            className="mt-4 text-gray-600 text-lg"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="border border-purple-300 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-3">
                <GraduationCap className="h-6 w-6 text-pink-700 mr-3" />
                <h3 className="text-xl font-bold text-pink-800">{edu.degree}</h3>
              </div>
              <p className="text-gray-700 font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-500 italic">{edu.location}</p>
              <p className="text-sm text-purple-700 mt-1">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

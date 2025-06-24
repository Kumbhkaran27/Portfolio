import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "Hyphenova",
      location: "North Hollywood, CA",
      period: "Feb 2025 – Apr 2025",
      skills: [
        "Redis", "PostgreSQL", "AWS", "Kubernetes", "Docker", "CI/CD", "Microservices"
      ]
    },
    {
      title: "Software Engineer 2",
      company: "Accenture India Pvt. Ltd",
      location: "Pune, Maharashtra",
      period: "Mar 2023 – Aug 2023",
      skills: [
        "Java", "MySQL", "Microsoft SQL Server", "Performance Tuning", "Spring Boot"
      ]
    },
    {
      title: "Software Engineer",
      company: "Accenture India Pvt. Ltd",
      location: "Pune, Maharashtra",
      period: "Aug 2021 – Feb 2023",
      skills: [
        "Spring Boot", "JUnit", "Microsoft Office", "Technical Documentation", "Log Analysis"
      ]
    }
  ];

  const ExperienceCard = ({ experience, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ scale: 1.03 }}
      className="relative pl-8 pb-12 last:pb-0 border-l-4 border-pink-700"
    >
      <div className="absolute left-[-10px] top-1 w-5 h-5 bg-gradient-to-tr from-pink-700 via-pink-600 to-purple-800 rounded-full border-4 border-white shadow-lg"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-pink-700">{experience.title}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{experience.period}</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="text-purple-800 font-medium">{experience.company}</div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{experience.location}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gradient-to-tr from-pink-100 via-pink-200 to-purple-200 text-pink-900 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 mx-auto"></div>

          <TypeAnimation
            sequence={[
              "", 1000,
              "My professional journey has equipped me with valuable experience across different roles and technologies."
            ]}
            wrapper="p"
            speed={50}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
            repeat={0}
          />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

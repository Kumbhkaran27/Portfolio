import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Wrench, Globe, Cloud, Brain, Cpu } from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const skills = [
    {
      category: "Languages",
      icon: <Code className="h-6 w-6" />,
      items: ["Java", "C", "C++", "Python", "SQL", "Dart", "Flask", "FastAPI"],
    },
    {
      category: "Frameworks & Tools",
      icon: <Wrench className="h-6 w-6" />,
      items: [
        "Spring Boot", "Flutter", "Docker", "Kubernetes",
        "Jenkins", "Maven", "Git", "Jira",
        "VS Code", "JUnit", "Selenium",
      ],
    },
    {
      category: "Web & Databases",
      icon: <Globe className="h-6 w-6" />,
      items: [
        "REST API", "HTML", "CSS", "JavaScript", "React",
        "SQL Server", "PostgreSQL", "NoSQL",
      ],
    },
    {
      category: "Analytics & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      items: [
        "Google Cloud", "AWS", "Power BI", "Tableau",
        "Apache Kafka", "Pandas", "Matplotlib", "NetworkX", "Excel",
      ],
    },
    {
      category: "AI / Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      items: [
        "TensorFlow", "ElasticSearch", "OpenCV",
        "Computer Vision", "Machine Learning",
      ],
    },
    {
      category: "Core CS Concepts & Advanced Skills",
      icon: <Cpu className="h-6 w-6" />,
      items: [
        "System Design", "Design Pattern", "Data Structures & Algorithms",
        "Multithreading", "Performance Optimization",
      ],
    },
  ];

  const SkillCard = ({ category, icon, items, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ scale: 1.03 }}
      className="bg-white border border-pink-700 rounded-xl p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-pink-100 rounded-lg text-pink-700 mr-3">{icon}</div>
        <h3 className="text-xl font-bold text-pink-700">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gradient-to-tr from-pink-100 via-pink-200 to-purple-200 text-pink-900 rounded-full text-sm font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My technical toolkit includes a diverse range of programming languages, frameworks, and tools that I've mastered throughout my academic and professional journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} category={skill.category} icon={skill.icon} items={skill.items} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";

import { motion } from "framer-motion";

const SkillsSection = () => {
  const technologies = [
    { key: "html", label: "HTML" },
    { key: "css", label: "CSS" },
    { key: "javascript", label: "JavaScript" },
    { key: "typescript", label: "TypeScript" },
    { key: "bootstrap", label: "Bootstrap" },
    { key: "tailwind", label: "Tailwind CSS" },
    { key: "react", label: "React JS" },
    { key: "next", label: "Next JS" },
    { key: "node", label: "Node.js" },
    { key: "express", label: "Express.js" },
    { key: "mongodb", label: "MongoDB" },
    { key: "firebase", label: "Firebase" },
    { key: "stripe", label: "Stripe" },
  ];
  return (
    <section className="w-full py-16 dark:bg-gray-950 bg-white text-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-[35px] md:text-4xl font-semibold text-gray-900 dark:text-gray-300">
            My Skills
          </h3>
          <div className="flex mt-2 justify-center">
            <div className="w-20 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.key}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center cursor-pointer justify-center 
                      bg-gray-100 dark:bg-gray-800 
                      p-4 rounded-md  border 
                      border-gray-300 dark:border-gray-700 
                      hover:border-blue-500 dark:hover:hover:border-blue-400 transition text-gray-900 dark:text-white"
            >
              <div className="text-lg md:text-xl font-semibold">
                {tech.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

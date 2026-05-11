"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "AI / ML",
    skills: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face", "Computer Vision", "NLP"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"]
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase"]
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-card/30 border-y border-border/50">
      <div className="container px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Technologies and tools I use to build robust and scalable solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-white/5 text-muted hover:text-white hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

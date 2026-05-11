"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Cpu } from "lucide-react";

const experienceData = [
  {
    title: "My Development Journey",
    company: "Continuous Learning",
    date: "2025 - 2026",
    description: "• Started learning Python\n• Built first automation project\n• Started AI experiments\n• Built full stack applications\n• Exploring intelligent systems",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    title: "Open Source Contributor",
    company: "Various Projects",
    date: "2025 - 2026",
    description: "Active contributor to major open-source AI repositories and work in 50+ opensource platforms. Implemented critical bug fixes and optimized data loading pipelines.",
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "Smart Hardware & Devices",
    company: "Future Goals",
    date: "2025 - 2026",
    description: "Interested in building futuristic hardware products such as AI assistants, smart speakers, wearable devices, and fully automated home systems.",
    icon: <Cpu className="w-5 h-5" />
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6 md:px-12 max-w-4xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Experience & Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg"
          >
            My professional path and notable achievements.
          </motion.p>
        </div>

        <div className="relative border-l border-border/50 ml-4 md:ml-0 md:pl-8 space-y-12">
          {experienceData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute -left-[41px] md:-left-[49px] top-1 p-2 bg-card border border-accent rounded-full text-accent">
                {item.icon}
              </div>
              
              <div className="bg-card/50 border border-border/50 rounded-xl p-6 hover:border-accent/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-accent font-medium">{item.company}</span>
                  </div>
                  <div className="text-sm text-muted bg-white/5 px-3 py-1 rounded-full w-fit">
                    {item.date}
                  </div>
                </div>
                <p className="text-muted leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

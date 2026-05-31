"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

import { projects } from "../data/projects";
import { useRouter } from "next/navigation";

export function Projects() {
  const router = useRouter();

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6 md:px-12">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl"
          >
            A selection of my recent work in AI, web development, and mobile applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="h-full flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-colors duration-300 group cursor-pointer"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-accent transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-muted">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 text-muted hover:text-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 pt-4 border-t border-border/50">
                  <div onClick={(e) => e.stopPropagation()} className="flex-1">
                    <Link href={project.github} target="_blank" className="w-full">
                      <Button variant="outline" className="w-full gap-2 border-border/50 bg-transparent hover:bg-white/5">
                        <Github className="w-4 h-4" /> Code
                      </Button>
                    </Link>
                  </div>
                  <div onClick={(e) => e.stopPropagation()} className="flex-1">
                    <Link href={project.demo} target="_blank" className="w-full">
                      <Button className="w-full gap-2 bg-accent/90 hover:bg-accent text-white">
                        <ExternalLink className="w-4 h-4" /> Demo
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

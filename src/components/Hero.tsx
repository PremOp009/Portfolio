"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import myPhoto from "../../portfolio photo.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10 pointer-events-none" />

      <div className="container px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium w-fit border border-accent/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-white">
            Building Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              AI Experiences
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-lg leading-relaxed">
            Hi, I’m Prem Patel. I build AI-powered applications, modern web experiences, and intelligent digital products focused on performance, design, and innovation.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link href="#projects">
              <Button size="lg" className="gap-2 rounded-full font-medium">
                View My Work <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://github.com/PremOp009" target="_blank">
              <Button variant="outline" size="lg" className="gap-2 rounded-full font-medium bg-transparent border-border hover:bg-card">
                <Github className="w-4 h-4" /> GitHub
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-b from-accent/50 to-transparent">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-card bg-card flex items-center justify-center relative z-10">
               <img 
                 src={myPhoto.src} 
                 alt="Prem Patel" 
                 className="w-full h-full object-cover object-top scale-110"
               />
               {/* Fallback avatar shape if image is missing */}
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-blue-500/20 mix-blend-overlay"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

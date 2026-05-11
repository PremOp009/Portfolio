"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // The preloader takes roughly 2.8s total. We remove the initial animation delay after this.
    const timer = setTimeout(() => setIsMounted(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide navbar if scrolling down and we've scrolled past 100px
    if (latest > previous && latest > 100) {
      setHidden(true);
    } 
    // Show navbar if scrolling up
    else if (latest < previous) {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={hidden ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.4, 
        ease: "easeOut", 
        delay: isMounted || hidden ? 0 : 2.0 
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/70 border-b border-border/40"
    >
      <Link href="/" className="text-xl font-display font-bold text-white tracking-tight">
        Prem<span className="text-accent">.</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
        <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
        <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
        <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
        <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="https://github.com/PremOp009" target="_blank" className="text-muted hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </Link>
        <Link href="https://www.linkedin.com/in/prem-patel-b60411378/" target="_blank" className="text-muted hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=prem.patel000009@gmail.com" target="_blank" className="hidden md:flex text-muted hover:text-white transition-colors">
          <Mail className="w-5 h-5" />
        </Link>
      </div>
    </motion.header>
  );
}

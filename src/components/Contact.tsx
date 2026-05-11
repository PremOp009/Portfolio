"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-accent/10 rounded-full blur-[128px] -z-10 pointer-events-none" />
      
      <div className="container px-6 md:px-12 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Let's Build Something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              Extraordinary
            </span>
          </h2>
          
          <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prem.patel000009@gmail.com" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full h-14 px-8 text-lg">
                <Mail className="w-5 h-5" /> Say Hello
              </Button>
            </a>
            <a href="https://linkedin.com/in/prem-patel-b60411378/" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
               <Button variant="outline" size="lg" className="w-full gap-2 rounded-full h-14 px-8 text-lg bg-card/50 border-border hover:bg-white/5">
                 <Send className="w-5 h-5" /> Let's Connect
               </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

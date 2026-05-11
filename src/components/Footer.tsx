import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
      <div className="container px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-display font-bold text-white">
            Prem<span className="text-accent">.</span>
          </Link>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Prem Patel. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://github.com/PremOp009" target="_blank" className="text-muted hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/prem-patel-b60411378/" target="_blank" className="text-muted hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://x.com/premop00" target="_blank" className="text-muted hover:text-white transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col py-24 relative container px-6 md:px-12 mt-12 mx-auto">
        <Link href="/" className="inline-flex items-center text-muted hover:text-white mb-8 transition-colors w-fit">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-xl overflow-hidden border border-border/50 bg-card/50">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </div>
          
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">{project.title}</h1>
            <p className="text-xl text-muted">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent hover:bg-accent/30">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-4 pt-4 border-t border-border/50">
              <Link href={project.github} target="_blank" className="flex-1">
                <Button variant="outline" className="w-full gap-2 border-border/50 bg-transparent hover:bg-white/5">
                  <Github className="w-5 h-5" /> View Source
                </Button>
              </Link>
              <Link href={project.demo} target="_blank" className="flex-1">
                <Button className="w-full gap-2 bg-accent/90 hover:bg-accent text-white">
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-border/50 pb-2">Overview</h2>
            <p className="text-muted leading-relaxed text-lg">{project.content.overview}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-border/50 pb-2">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.content.features.map((feature, i) => (
                <li key={i} className="flex items-start text-muted text-lg">
                  <span className="text-accent mr-3">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-border/50 pb-2">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.content.techStack.map(tech => (
                <Badge key={tech} variant="outline" className="border-border/50 text-muted-foreground bg-card/50 text-base py-1 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

// Map project index → image path in /public (0=App, 1=Website, 2=Recipe)
const PROJECT_IMAGES: Record<number, string> = {
  0: "/appcake.png",
  1: "/web.png",
  2: "/webna.png",
};


export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="space-y-24">
          {t.projects.items.map((project, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Project Image/Preview */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                  <Card className="relative overflow-hidden rounded-2xl glass-card border-white/10 aspect-video flex items-center justify-center bg-muted/20">
                    {PROJECT_IMAGES[index] ? (
                      <Image
                        src={PROJECT_IMAGES[index]}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                        <div className="text-center p-6 relative z-10">
                          <h4 className="text-2xl font-bold text-foreground/80">{project.title}</h4>
                          <p className="text-muted-foreground mt-2">{t.projects.preview}</p>
                        </div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 z-10">
                      {project.links?.live && (
                        <Link
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform interactive"
                        >
                          <ExternalLink size={24} />
                        </Link>
                      )}
                      {project.links?.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-secondary text-secondary-foreground rounded-full hover:scale-110 transition-transform interactive"
                        >
                          <GithubIcon width={24} height={24} />
                        </Link>
                      )}
                    </div>
                  </Card>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.map((tag, i) => (
                        <Badge key={i} variant="outline" className="border-primary/30 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col gap-1 mb-4 text-sm text-muted-foreground bg-muted/30 p-4 rounded-xl border border-border/50">
                      <p><strong className="text-foreground">{t.projects.metaLabels.type}:</strong> {project.meta?.type}</p>
                      <p><strong className="text-foreground">{t.projects.metaLabels.duration}:</strong> {project.meta?.duration}</p>
                      <p><strong className="text-foreground">{t.projects.metaLabels.tech}:</strong> {project.meta?.tech}</p>
                      <p><strong className="text-foreground">{t.projects.metaLabels.role}:</strong> {project.meta?.role}</p>
                    </div>

                    <div className="space-y-4 mb-6 text-muted-foreground text-lg leading-relaxed">
                      {project.problem && <p className="whitespace-pre-line"><strong className="text-foreground">Vấn đề:</strong> {project.problem.replace(/^(Bối cảnh & Thách thức:|Mục tiêu:)\s*/i, '')}</p>}
                      {project.solution && <p className="whitespace-pre-line"><strong className="text-foreground">Giải pháp:</strong> {project.solution.replace(/^(Giải pháp:|Kiến trúc Kỹ thuật:)\s*/i, '')}</p>}
                      {project.description && !project.problem && !project.solution && <p>{project.description}</p>}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 uppercase tracking-wider text-sm">{t.projects.highlights}</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

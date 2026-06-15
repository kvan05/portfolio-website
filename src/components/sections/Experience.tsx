"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { useLanguage } from "@/components/language-provider";

export function Experience() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-24 bg-muted/30" ref={containerRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.experience.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
          {/* Animated SVG Timeline Line */}
          <div className="absolute left-[39px] md:left-[50%] top-0 bottom-0 w-1 -translate-x-1/2">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 4 100"
              fill="none"
            >
              {/* Background Line */}
              <line x1="2" y1="0" x2="2" y2="100" stroke="currentColor" strokeWidth="4" className="text-border" />
              {/* Progress Line */}
              <motion.line
                x1="2"
                y1="0"
                x2="2"
                y2="100"
                stroke="currentColor"
                strokeWidth="4"
                className="text-primary"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className="space-y-16">
            {t.experience.items.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-center md:justify-between w-full group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-4px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10 group-hover:scale-150 transition-transform duration-300" />

                  {/* Left Side (Desktop) */}
                  <div className={`hidden md:block w-[45%] ${isEven ? "text-right pr-8" : "order-last pl-8"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {isEven ? (
                        <>
                          <h3 className="text-2xl font-bold">{exp.title}</h3>
                          <span className="text-primary font-mono text-sm inline-block my-2">{exp.year}</span>
                          <p className="text-muted-foreground">{exp.description}</p>
                        </>
                      ) : (
                        <div className="text-left">
                           <span className="text-primary font-mono text-sm inline-block my-2">{exp.year}</span>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Right Side (Desktop) */}
                  <div className={`hidden md:block w-[45%] ${isEven ? "order-last pl-8" : "text-right pr-8"}`}>
                     <motion.div
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {!isEven ? (
                        <>
                          <h3 className="text-2xl font-bold">{exp.title}</h3>
                          <span className="text-primary font-mono text-sm inline-block my-2">{exp.year}</span>
                          <p className="text-muted-foreground">{exp.description}</p>
                        </>
                      ) : (
                        <div className="text-left">
                           <span className="text-primary font-mono text-sm inline-block my-2">{exp.year}</span>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Mobile Layout */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="md:hidden ml-8 p-6 glass-card rounded-2xl w-full"
                  >
                    <span className="text-primary font-mono text-sm mb-2 block">{exp.year}</span>
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

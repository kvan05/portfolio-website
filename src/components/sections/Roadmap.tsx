"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Flag } from "lucide-react";

const icons = [Target, TrendingUp, Flag];

export function Roadmap() {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.roadmap.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.roadmap.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.roadmap.phases.map((phase, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="glass-card p-8 h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none group-hover:scale-150 transform origin-center">
                    <Icon size={120} />
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mb-6 text-sm font-semibold">
                    <Icon size={16} />
                    {phase.year}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-primary font-medium mb-4">{phase.role}</p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

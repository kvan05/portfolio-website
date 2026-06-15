"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Smartphone, Globe, Database, Wrench, Star } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const skillIcons = [Smartphone, Globe, Database, Wrench];
const skillColors = [
  "from-pink-500/20 to-rose-500/20",
  "from-violet-500/20 to-purple-500/20",
  "from-blue-500/20 to-cyan-500/20",
  "from-amber-500/20 to-orange-500/20",
];
export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-muted/30 to-transparent">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] translate-x-1/2" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-3xl mb-4 block">🎯</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.skills.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.skills.categories.map((category, index) => {
            const Icon = skillIcons[index % skillIcons.length];
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-br from-card to-primary/3">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${skillColors[index]} group-hover:scale-110 transition-all duration-300`}>
                        <Icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{category.title}</h3>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          {category.proficiency}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`transition-colors duration-300 ${
                            i < category.stars 
                              ? "text-yellow-400 fill-yellow-400 drop-shadow-[0_0_3px_rgba(250,204,21,0.5)]" 
                              : "text-muted-foreground/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Core Tech */}
                  <div className="mb-4 p-3 rounded-xl bg-muted/50 border border-border/50">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Core Technologies</p>
                    <p className="text-sm text-primary font-mono font-medium">{category.core}</p>
                  </div>

                  {/* Application */}
                  <div className="mt-auto pt-3 border-t border-border/30">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.application}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

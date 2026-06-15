"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { BookOpen, Code2, Layers, Lightbulb, User, Calendar, Phone, Mail, MapPin, Target, Heart } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Card } from "@/components/ui/card";

const strengthIcons = [Lightbulb, BookOpen, Code2, Layers];

export function About() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-24 relative" ref={containerRef}>
      {/* Cute background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-violet-200/20 dark:from-pink-500/5 dark:to-violet-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-peach-200/20 to-rose-200/20 dark:from-orange-500/5 dark:to-rose-500/5 rounded-full blur-[80px]" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Heart className="w-5 h-5 fill-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider">About Me</span>
            <Heart className="w-5 h-5 fill-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.about.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start bg-gradient-to-br from-card to-primary/5 border-primary/20 shadow-xl shadow-primary/5">
            <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-3xl overflow-hidden border-4 border-primary/20 shrink-0 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <User size={64} className="text-primary/50" />
              </div>
            </div>
            <div className="flex-1 w-full">
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">{t.about.profile.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex items-center gap-3 group">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.about.profile.labels.dob}</p>
                    <p className="font-medium">{t.about.profile.dob}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.about.profile.labels.phone}</p>
                    <p className="font-medium">{t.about.profile.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.about.profile.labels.email}</p>
                    <p className="font-medium truncate max-w-[200px]" title={t.about.profile.email}>{t.about.profile.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.about.profile.labels.location}</p>
                    <p className="font-medium">{t.about.profile.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Career Goals Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <Card className="p-6 md:p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/15">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <Target size={20} />
              </div>
              <h3 className="text-xl font-bold text-primary">{t.about.goalsTitle}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {t.about.goalsDesc}
            </p>
          </Card>
        </motion.div>

        {/* Personal Strengths */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            <span className="mr-2">✨</span>
            {t.about.strengthsTitle}
            <span className="ml-2">✨</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.about.steps.map((step, index) => {
            const Icon = strengthIcons[index % strengthIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full group hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-card to-primary/3 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
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

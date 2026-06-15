"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Card } from "@/components/ui/card";
import { ExternalLink, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import Link from "next/link";

export function Achievements() {
  const { t } = useLanguage();

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes("github")) return GithubIcon;
    if (title.toLowerCase().includes("linkedin") || title.toLowerCase().includes("mạng lưới")) return LinkedinIcon;
    return Award;
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.achievements.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.achievements.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.achievements.items.map((item, index) => {
            const Icon = getIcon(item.title);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card p-6 h-full flex flex-col group hover:border-primary/50 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {item.description}
                  </p>
                  
                  {item.link ? (
                    <Link 
                      href={item.link} 
                      target="_blank"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline w-fit interactive"
                    >
                      {item.linkText}
                      <ExternalLink size={16} />
                    </Link>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-primary/70 font-medium">
                      <Award size={16} />
                      {item.linkText}
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

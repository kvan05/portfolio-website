"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { useLanguage } from "@/components/language-provider";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-8 md:p-12 overflow-hidden relative">
             {/* Background glow */}
             <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[60px]" />
             
             <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between">
                <div className="w-full md:w-1/2 space-y-8">
                  <h3 className="text-3xl font-bold">{t.contact.header}</h3>
                  
                  <div className="space-y-6">
                    <a href="mailto:khanhvank05@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors interactive group">
                      <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Mail size={24} />
                      </div>
                      <span className="text-lg">khanhvank05@gmail.com</span>
                    </a>
                    
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="p-4 rounded-full bg-primary/10 text-primary">
                        <MapPin size={24} />
                      </div>
                      <span className="text-lg">{t.contact.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-border/50">
                    <a href="https://github.com/kvan05" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors interactive">
                      <GithubIcon width={24} height={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors interactive">
                      <LinkedinIcon width={24} height={24} />
                    </a>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                  <a href="mailto:khanhvank05@gmail.com" className={buttonVariants({ variant: "default", size: "lg", className: "w-full md:w-auto rounded-full text-lg h-14 px-8 gap-2 interactive" })}>
                    {t.contact.sayHello} <Send size={20} />
                  </a>
                </div>
             </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

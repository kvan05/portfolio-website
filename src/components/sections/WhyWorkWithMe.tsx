"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Users, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

const icons = [Brain, Zap, Users, ShieldCheck];



export function WhyWorkWithMe() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-muted/10">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.whyWork.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.whyWork.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.whyWork.items.map((reason, index) => {
            const Icon = icons[index];
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card p-8 h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </Card>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

function AnimatedCounter({ value, text }: { value: number; text: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 glass-card rounded-2xl hover:-translate-y-2 transition-transform duration-300">
      <div className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 flex items-center">
        {count}
        <span className="text-primary ml-1">+</span>
      </div>
      <p className="text-muted-foreground text-center font-medium uppercase tracking-wider text-sm">{text}</p>
    </div>
  );
}

export function Statistics() {
  const { t } = useLanguage();
  const stats = [
    { value: 3, text: t.statistics.projects },
    { value: 5, text: t.statistics.frameworks },
    { value: 2, text: t.statistics.mobile },
    { value: 4, text: t.statistics.databases },
  ];

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCounter value={stat.value} text={stat.text} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function TechSphere() {
  const { t } = useLanguage();
  const technologies = [
    "React", "Next.js", "Flutter", "TypeScript", 
    "PostgreSQL", "SQL Server", "Git", "Tailwind CSS",
    "Node.js", "Framer Motion", "Prisma"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.techSphere.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.techSphere.subtitle}
          </p>
        </motion.div>

        {/* Floating tech cloud */}
        <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
           {/* Center Core */}
           <div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-[40px] animate-pulse" />
           
           {technologies.map((tech, index) => {
             // Generate random but distributed positions
             const angle = (index / technologies.length) * Math.PI * 2;
             const radius = 120 + Math.random() * 80; // Between 120 and 200px from center
             const x = Math.cos(angle) * radius;
             const y = Math.sin(angle) * radius;
             
             // Random animation values
             const duration = 15 + Math.random() * 15;
             const delay = Math.random() * 5;

             return (
               <motion.div
                 key={index}
                 className="absolute glass px-4 py-2 rounded-full font-medium text-foreground whitespace-nowrap shadow-lg border-primary/20"
                 initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 animate={{
                   x: [x, x + 20, x],
                   y: [y, y - 20, y],
                 }}
                 transition={{
                   duration: duration,
                   repeat: Infinity,
                   ease: "easeInOut",
                   delay: delay,
                   opacity: { duration: 1 },
                   scale: { duration: 1 }
                 }}
               >
                 {tech}
               </motion.div>
             );
           })}
        </div>
      </div>
    </section>
  );
}

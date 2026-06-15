"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Code2, Database, Smartphone, Globe, GitBranch, Terminal, Layers, Server } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import Link from "next/link";

const floatingIcons = [
  { Icon: Code2,      top: "12%",  left: "6%",   delay: 0,   size: 22, amp: 14 },
  { Icon: Database,   top: "65%",  left: "8%",   delay: 1.8, size: 20, amp: 10 },
  { Icon: Server,     top: "38%",  left: "3%",   delay: 3.2, size: 20, amp: 12 },
  { Icon: GitBranch,  top: "80%",  left: "22%",  delay: 0.9, size: 18, amp: 8  },
  { Icon: Globe,      top: "10%",  right: "8%",  delay: 1.2, size: 22, amp: 14 },
  { Icon: Terminal,   top: "28%",  right: "4%",  delay: 2.6, size: 20, amp: 10 },
  { Icon: Smartphone, top: "58%",  right: "7%",  delay: 0.4, size: 20, amp: 12 },
  { Icon: Layers,     top: "78%",  right: "20%", delay: 2.1, size: 18, amp: 8  },
];

export function Hero() {
  const { t } = useLanguage();
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % t.hero.roles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [t.hero.roles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-300/30 to-purple-300/30 dark:from-pink-500/15 dark:to-purple-500/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-peach-300/30 to-rose-300/30 dark:from-orange-500/10 dark:to-rose-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-violet-300/20 to-pink-300/20 dark:from-violet-500/10 dark:to-pink-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      {/* Floating Tech Icons — clean monochrome, float-only */}
      {floatingIcons.map(({ Icon, top, left, right, delay, size, amp }, i) => (
        <motion.div
          key={i}
          className="absolute z-10 hidden md:flex items-center justify-center text-primary/40 select-none"
          style={{ top, left, right } as React.CSSProperties}
          animate={{ y: [0, -(amp ?? 12), 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}

      <div className="container relative z-20 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 text-sm font-medium text-primary mb-8 shadow-sm"
        >
          <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
          {t.hero.available}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-400 to-violet-500 dark:from-pink-400 dark:via-rose-300 dark:to-violet-400">
            Phan Thị Khánh Vân
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg md:text-xl font-medium text-muted-foreground mb-4"
        >
          {t.hero.titlePart2} {t.hero.titlePart3} {t.hero.titlePart4}
        </motion.p>

        {/* Role Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-10 md:h-12 text-xl md:text-2xl font-medium text-muted-foreground mb-4"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="inline-block font-mono text-primary font-bold"
            >
              {"< "}{t.hero.roles[titleIndex]}{" />"}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-base md:text-lg text-muted-foreground mb-10 leading-relaxed italic"
        >
          &ldquo;{t.hero.description}&rdquo;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="#projects" className={buttonVariants({ variant: "default", size: "lg", className: "rounded-full gap-2 text-base h-12 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow" })}>
            {t.hero.viewProjects} <ArrowRight size={18} />
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full gap-2 text-base h-12 px-8 border-primary/30 bg-background/50 backdrop-blur-md hover:bg-primary/10 transition-all" })}>
            {t.hero.downloadResume} <Download size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

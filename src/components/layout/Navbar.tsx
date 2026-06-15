"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";

const navKeys = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "achievements", href: "#achievements" },
  { key: "roadmap", href: "#roadmap" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight interactive">
            Khanh<span className="text-primary">Van</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navKeys.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors interactive"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l border-border pl-4 ml-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors interactive"
                aria-label="Toggle Language"
              >
                <Globe size={16} />
                {language.toUpperCase()}
              </button>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center justify-center p-2 text-muted-foreground hover:text-foreground transition-colors interactive rounded-full hover:bg-muted"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}
              <Link href="#contact" className={buttonVariants({ variant: "default", className: "interactive rounded-full" })}>
                {t.nav.hireMe}
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2 interactive"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-24 px-6 md:hidden"
        >
          <nav className="flex flex-col gap-6 text-center">
            {navKeys.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-xl font-semibold text-foreground interactive"
                onClick={() => setIsOpen(false)}
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center justify-center gap-4 py-2 border-b border-border/50 pb-4 mb-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors interactive px-4 py-2 rounded-full hover:bg-muted"
                >
                  <Globe size={18} />
                  {language === "en" ? "Tiếng Việt" : "English"}
                </button>
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors interactive px-4 py-2 rounded-full hover:bg-muted"
                  >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </button>
                )}
              </div>
              <Link href="#contact" onClick={() => setIsOpen(false)} className={buttonVariants({ variant: "default", size: "lg", className: "interactive w-full rounded-full" })}>
                {t.nav.hireMe}
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
}

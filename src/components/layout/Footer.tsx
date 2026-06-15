"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8 md:py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-bold text-xl tracking-tight interactive">
            Khanh<span className="text-primary">Van</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            {t.footer.designedBy} &copy; {currentYear}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kvan05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors interactive p-2"
            aria-label="GitHub"
          >
            <GithubIcon width={20} height={20} />
          </a>
          <a
            href="https://linkedin.com/in/van-k-937641397/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors interactive p-2"
            aria-label="LinkedIn"
          >
            <LinkedinIcon width={20} height={20} />
          </a>
          <a
            href="mailto:khanhvank05@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors interactive p-2"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

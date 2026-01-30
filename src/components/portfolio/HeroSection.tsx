"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/data/portfolio-data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* === DEPTH LAYERS === */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />

      {/* Frosted ambient glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70" />

      {/* Subtle noise for texture (optional but elite) */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge
              variant="outline"
              className="mb-6 text-sm px-4 py-2 border-2 border-border/50 backdrop-blur-sm bg-background/60"
            >
              Available for Hire
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{
              background:
                "linear-gradient(135deg, var(--foreground), var(--primary), var(--foreground))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 2px 10px var(--background)/0.1",
            }}
          >
            Hi, I'm {portfolioData.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-muted-foreground mb-4"
          >
            {portfolioData.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {portfolioData.tagline}
          </motion.p>

          {/* === GLASS BUTTONS === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href={`mailto:${portfolioData.contact.email}`}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Button
                size="lg"
                className={`
                  gap-2 text-lg px-8 font-medium
                  bg-background/80 backdrop-blur-xl
                  border border-border/50
                  shadow-glass hover:shadow-glass-hover
                  text-foreground
                  transition-all duration-300
                  hover:bg-background/90
                `}
              >
                <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get in Touch
              </Button>
            </motion.a>

            <motion.a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Button
                size="lg"
                variant="outline"
                className={`
                  gap-2 text-lg px-8 font-medium
                  bg-transparent backdrop-blur-xl
                  border border-border/50
                  shadow-glass hover:shadow-glass-hover
                  text-foreground
                  transition-all duration-300
                  hover:bg-background/30
                `}
              >
                <Github className="h-5 w-5" />
                View GitHub
              </Button>
            </motion.a>
          </motion.div>

          {/* === SOCIAL ICONS (GLASS) === */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center gap-4"
          >
            {[
              { Icon: Github, href: portfolioData.contact.github },
              { Icon: Linkedin, href: portfolioData.contact.linkedin },
              ...(portfolioData.contact.twitter
                ? [{ Icon: Twitter, href: portfolioData.contact.twitter }]
                : []),
            ].map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                <div
                  className={`
                  h-12 w-12 rounded-full
                  flex items-center justify-center
                  bg-background/70 backdrop-blur-lg
                  border border-border/40
                  shadow-glass
                  transition-all duration-300
                  hover:bg-background/90
                `}
                >
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* === SCROLL INDICATOR (GLASS) === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className={`
            flex flex-col items-center gap-2
            text-muted-foreground
            bg-background/60 backdrop-blur-md
            px-3 py-2 rounded-full
            border border-border/30
          `}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

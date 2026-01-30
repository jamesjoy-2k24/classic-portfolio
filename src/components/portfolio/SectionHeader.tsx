"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  icon,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16 text-center relative"
    >
      {/* Ambient glow behind header (subtle depth) */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="flex items-center justify-center gap-4 mb-6">
        {icon && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className={`
              p-3 rounded-2xl
              bg-background/60 backdrop-blur-lg
              border border-border/30
              shadow-glass
              text-primary
              z-10
            `}
          >
            {icon}
          </motion.div>
        )}
        <motion.h2
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
        >
          {title}
        </motion.h2>
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* === GLASS DIVIDER === */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.45,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1], // elastic ease
        }}
        className={`
          h-1.5 mx-auto mt-8 rounded-full
          bg-gradient-to-r from-transparent via-primary to-transparent
          shadow-[0_0_12px_var(--primary)/0.3]
          origin-center
          w-24
        `}
      />
    </motion.div>
  );
}

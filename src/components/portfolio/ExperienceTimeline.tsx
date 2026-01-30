"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import ExperienceNode from "./ExperienceNode";
import { Experience } from "@/lib/types/portfolio";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    // Fallback to card layout on mobile for better UX
    return (
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <ExperienceNode
            key={exp.id}
            experience={exp}
            index={idx}
            isMobile={true}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border/30" />

      <div className="space-y-12 pl-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-16 top-1.5 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-glass">
              {experience.current ? (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-3 h-3 bg-primary-foreground rounded-full"
                />
              ) : (
                <div className="w-3 h-3 bg-primary-foreground rounded-full" />
              )}
            </div>

            <ExperienceNode
              experience={experience}
              index={index}
              isMobile={false}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

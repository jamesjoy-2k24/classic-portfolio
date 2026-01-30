"use client";

import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { SkillCategory } from "@/lib/types/portfolio";
import * as Icons from "lucide-react";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export default function SkillCard({ category, index }: SkillCardProps) {
  const IconComponent = Icons[
    category.icon as keyof typeof Icons
  ] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group"
    >
      {/* === GLASS CARD === */}
      <div
        className={`
        h-full rounded-2xl
        bg-background/70 backdrop-blur-xl
        border border-border/40
        shadow-glass group-hover:shadow-glass-hover
        p-6 transition-all duration-300
        group-hover:bg-background/80
      `}
      >
        <CardHeader className="p-0 mb-5">
          <div className="flex items-center gap-3">
            {IconComponent && (
              <div className="bg-primary/10 p-2.5 rounded-xl backdrop-blur-sm">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
            )}
            <CardTitle className="text-xl text-foreground">
              {category.category}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="p-0 space-y-5">
          {category.skills.map((skill, skillIndex) => {
            // Dynamic badge color based on skill level
            const getBadgeVariant = (level: number) => {
              if (level >= 90) return "default";
              if (level >= 70) return "secondary";
              return "outline";
            };

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + skillIndex * 0.05,
                  ease: "easeOut",
                }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm text-foreground">
                    {skill.name}
                  </span>
                  <Badge
                    variant={getBadgeVariant(skill.level)}
                    className="text-xs font-bold px-2.5 py-0.5"
                  >
                    {skill.level}%
                  </Badge>
                </div>
                <Progress value={skill.level} className="h-2.5" />
              </motion.div>
            );
          })}
        </CardContent>
      </div>
    </motion.div>
  );
}

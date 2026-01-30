"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      layout
      className="group"
    >
      {/* === GLASS CARD === */}
      <div
        className={`
        h-full flex flex-col rounded-2xl
        bg-background/70 backdrop-blur-xl
        border border-border/40
        shadow-glass group-hover:shadow-glass-hover
        p-6 transition-all duration-300
        group-hover:bg-background/80
      `}
      >
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-base text-muted-foreground">
            {project.description}
          </p>
        </div>

        {project.longDescription && (
          <p className="text-sm text-muted-foreground mb-4 flex-1">
            {project.longDescription}
          </p>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs px-2.5 py-0.5 bg-background/50 backdrop-blur-sm border-border/30"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 gap-2 font-medium"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="flex-1 gap-2 font-medium"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Live
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useState } from "react";
import { Code2, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/data/portfolio-data";

type FilterType = "all" | "featured";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects =
    filter === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Ambient depth layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Projects"
          subtitle="Featured works and side projects"
          icon={<Code2 className="h-8 w-8 text-primary" />}
        />

        <div className="max-w-7xl mx-auto">
          {/* === GLASS FILTER TOGGLE === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div
              className={`
              inline-flex items-center rounded-xl
              bg-background/70 backdrop-blur-xl
              border border-border/40
              shadow-glass p-1
            `}
            >
              <Button
                variant={filter === "all" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("all")}
                className={`
                  gap-2 px-4 font-medium
                  ${filter !== "all" ? "bg-transparent hover:bg-accent/30" : ""}
                `}
              >
                <Filter className="h-4 w-4" />
                All ({portfolioData.projects.length})
              </Button>
              <Button
                variant={filter === "featured" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("featured")}
                className={`
                  gap-2 px-4 font-medium
                  ${filter !== "featured" ? "bg-transparent hover:bg-accent/30" : ""}
                `}
              >
                Featured (
                {portfolioData.projects.filter((p) => p.featured).length})
              </Button>
            </div>
          </motion.div>

          {/* === ANIMATED PROJECT GRID === */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                No projects found for this filter.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

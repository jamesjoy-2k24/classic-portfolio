"use client";

import { Award } from "lucide-react";
import SectionHeader from "./SectionHeader";
import SkillCard from "./SkillCard";
import { portfolioData } from "@/lib/data/portfolio-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Ambient depth layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies I work with"
          icon={<Award className="h-8 w-8 text-primary" />}
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.skills.map((category, index) => (
              <SkillCard
                key={category.category}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

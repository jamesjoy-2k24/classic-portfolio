"use client";

import { Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ExperienceTimeline from "./ExperienceTimeline";
import { portfolioData } from "@/lib/data/portfolio-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Ambient depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Work Experience"
          subtitle="My professional journey"
          icon={<Briefcase className="h-8 w-8 text-primary" />}
        />

        <div className="max-w-4xl mx-auto">
          <ExperienceTimeline experiences={portfolioData.experience} />
        </div>
      </div>
    </section>
  );
}

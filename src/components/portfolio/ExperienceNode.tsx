"use client";

import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Experience } from "@/lib/types/portfolio";

interface ExperienceNodeProps {
  experience: Experience;
  index: number;
  isMobile: boolean;
}

export default function ExperienceNode({
  experience,
  isMobile,
}: ExperienceNodeProps) {
  return (
    <div
      className={`
      ${isMobile ? "" : "ml-4"}
      rounded-2xl
      bg-background/70 backdrop-blur-xl
      border border-border/40
      shadow-glass p-6
      transition-all duration-300
      hover:shadow-glass-hover hover:bg-background/80
    `}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground">
            {experience.position}
          </h3>
          <p className="text-lg font-semibold text-primary mt-1">
            {experience.company}
          </p>
        </div>

        {experience.current && !isMobile && (
          <Badge className="bg-primary text-primary-foreground font-medium px-3 py-1">
            Current
          </Badge>
        )}
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>
            {new Date(experience.startDate).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
            {" – "}
            {experience.endDate === "Present"
              ? "Present"
              : new Date(experience.endDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{experience.location}</span>
        </div>
      </div>

      {experience.current && isMobile && (
        <Badge className="bg-primary text-primary-foreground font-medium px-3 py-1 mb-4">
          Current
        </Badge>
      )}

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {experience.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs px-2.5 py-0.5 bg-background/50 backdrop-blur-sm border-border/30"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {experience.website && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="gap-2 font-medium"
          >
            <a
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Company Website
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

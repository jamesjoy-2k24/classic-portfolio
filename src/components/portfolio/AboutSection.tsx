"use client";

import { motion } from "framer-motion";
import { User, MapPin, Mail, Code2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { portfolioData } from "@/lib/data/portfolio-data";

export default function AboutSection() {
  const stats = [
    { icon: Code2, label: "Years Experience", value: "5+" },
    { icon: Code2, label: "Projects Completed", value: "20+" },
    { icon: Code2, label: "Happy Clients", value: "15+" },
    { icon: Code2, label: "Technologies", value: "30+" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/2 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="About Me"
          subtitle="Get to know me better"
          icon={<User className="h-8 w-8 text-primary" />}
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* === BIO CARD — GLASS === */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div
                className={`
                h-full rounded-2xl
                bg-background/70 backdrop-blur-xl
                border border-border/40
                shadow-glass
                p-6 transition-all duration-300
                hover:shadow-glass-hover
                hover:bg-background/80
              `}
              >
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    {portfolioData.about}
                  </p>
                  <p className="leading-relaxed">
                    I believe in writing clean, maintainable code and creating
                    intuitive user experiences. My approach combines technical
                    expertise with creative problem-solving to deliver solutions
                    that exceed expectations.
                  </p>
                  <p className="leading-relaxed">
                    When I'm not coding, you can find me contributing to
                    open-source projects, writing technical blog posts, or
                    exploring new technologies. I'm passionate about continuous
                    learning and staying up-to-date with the latest industry
                    trends.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* === INFO CARDS — GLASS STACK === */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Contact & Specialization */}
              <div
                className={`
                rounded-2xl
                bg-background/70 backdrop-blur-xl
                border border-border/40
                shadow-glass p-6
                transition-all duration-300
                hover:shadow-glass-hover
                hover:bg-background/80
              `}
              >
                <div className="space-y-5">
                  {[
                    {
                      icon: MapPin,
                      label: "Location",
                      value: portfolioData.contact.location,
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: portfolioData.contact.email,
                    },
                    {
                      icon: Code2,
                      label: "Specialization",
                      value: "Full Stack Development",
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-xl backdrop-blur-sm">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="font-medium text-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* What I Do */}
              <div
                className={`
                rounded-2xl
                bg-background/70 backdrop-blur-xl
                border border-border/40
                shadow-glass p-6
                transition-all duration-300
                hover:shadow-glass-hover
                hover:bg-background/80
              `}
              >
                <h3 className="font-semibold mb-4 text-foreground">
                  What I Do
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Build modern, responsive web applications",
                    "Design and implement RESTful APIs",
                    "Optimize performance and scalability",
                    "Mentor junior developers and lead teams",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* === STATS — LUMINOUS GLASS === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div
              className={`
              rounded-2xl
              bg-gradient-to-br from-primary/8 to-primary/15
              backdrop-blur-xl
              border border-primary/20
              shadow-glass p-6
            `}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="text-center group"
                    >
                      <div className="flex justify-center mb-3">
                        <div
                          className={`
                          bg-primary/20 p-3 rounded-xl
                          group-hover:bg-primary/30
                          transition-colors duration-300
                          backdrop-blur-sm
                        `}
                        >
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <p className="text-3xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

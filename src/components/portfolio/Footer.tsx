"use client";

import { useState } from "react";
import {
  Heart,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  BookOpen,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { portfolioData } from "@/lib/data/portfolio-data";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({ title: "Invalid email", variant: "destructive" });
      return;
    }
    // Simulate API call
    toast({
      title: "Subscribed!",
      description: "You'll receive updates on my latest projects.",
    });
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    { name: "GitHub", href: portfolioData.contact.github, icon: Github },
    { name: "LinkedIn", href: portfolioData.contact.linkedin, icon: Linkedin },
    ...(portfolioData.contact.twitter
      ? [
          {
            name: "Twitter",
            href: portfolioData.contact.twitter,
            icon: Twitter,
          },
        ]
      : []),
    { name: "Blog", href: "#", icon: BookOpen }, // Replace with real URL
    { name: "Open Source", href: "#", icon: Code }, // Replace with real URL
  ];

  return (
    <footer className="border-t border-border/30 bg-background/80 backdrop-blur-xl py-12 relative overflow-hidden">
      {/* Ambient depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/2 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-foreground">
              {portfolioData.name}
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building elegant, performant solutions at the intersection of
              design and code.
            </p>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <span>Based in</span>
              <span className="font-medium text-foreground">
                {portfolioData.contact.location}
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>{name}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Get notified about new projects, articles, and open-source
              releases.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-background/50 backdrop-blur-sm border-border/40 pr-10 text-sm"
                  required
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <Button
                type="submit"
                size="sm"
                className="w-full text-sm font-medium"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-6 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              © {currentYear} {portfolioData.name}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              Crafted with{" "}
              <motion.span
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              </motion.span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {[
              Github,
              Linkedin,
              ...(portfolioData.contact.twitter ? [Twitter] : []),
            ].map((Icon, idx) => {
              const href =
                Icon === Github
                  ? portfolioData.contact.github
                  : Icon === Linkedin
                    ? portfolioData.contact.linkedin
                    : portfolioData.contact.twitter;

              return (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  <div
                    className={`
                    h-9 w-9 rounded-lg
                    flex items-center justify-center
                    bg-background/60 backdrop-blur-md
                    border border-border/40
                    transition-all duration-300
                    hover:bg-background/80
                  `}
                  >
                    <Icon className="h-4 w-4 text-foreground" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

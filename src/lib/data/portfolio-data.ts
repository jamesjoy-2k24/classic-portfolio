import { PortfolioData } from '@/lib/types/portfolio';

export const portfolioData: PortfolioData = {
  name: "Sivasankar",
  title: "Full Stack Software Engineer",
  tagline: "Building scalable applications with modern technologies",
  about: "I'm a passionate full-stack developer with 5+ years of experience creating innovative web applications. I specialize in React, Next.js, Node.js, and cloud technologies. I love solving complex problems and turning ideas into elegant solutions.",
  
  contact: {
    email: "sivasankar.raja@gmail.com",
    github: "https://github.com/sivasankar",
    linkedin: "https://linkedin.com/in/sivasankar",
    twitter: "https://twitter.com/sivasankar",
    location: "San Francisco, CA"
  },
  
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A full-featured online store with real-time inventory and payment processing",
      longDescription: "Built a complete e-commerce solution with Next.js, Stripe integration, and PostgreSQL. Features include real-time inventory management, user authentication, order tracking, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
      image: "",
      githubUrl: "https://github.com/sivasankar/ecommerce-platform",
      liveUrl: "https://ecommerce.demo.com",
      featured: true
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      longDescription: "Developed a Trello-like application with drag-and-drop functionality, real-time collaboration via WebSocket, team workspaces, and advanced filtering options.",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      image: "",
      githubUrl: "https://github.com/sivasankar/task-manager",
      liveUrl: "https://taskmanager.demo.com",
      featured: true
    },
    {
      id: "3",
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing",
      longDescription: "Created an AI-powered chat assistant using OpenAI's GPT API with context awareness, multi-language support, and custom training capabilities.",
      technologies: ["Next.js", "Python", "OpenAI", "Redis", "Docker"],
      image: "",
      githubUrl: "https://github.com/sivasankar/ai-chatbot",
      featured: true
    },
    {
      id: "4",
      title: "Analytics Dashboard",
      description: "Real-time data visualization and analytics platform",
      longDescription: "Built a comprehensive analytics dashboard with interactive charts, custom report generation, data export capabilities, and real-time data streaming.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
      image: "",
      githubUrl: "https://github.com/sivasankar/analytics-dashboard",
      liveUrl: "https://analytics.demo.com"
    },
    {
      id: "5",
      title: "Social Media App",
      description: "Mobile-first social platform with real-time messaging",
      longDescription: "Developed a full-featured social media application with news feed, real-time messaging, image/video uploads, friend connections, and notifications.",
      technologies: ["React Native", "Firebase", "Node.js", "AWS S3"],
      image: "",
      githubUrl: "https://github.com/sivasankar/social-app"
    },
    {
      id: "6",
      title: "Developer Tools CLI",
      description: "Command-line tool for automating development workflows",
      longDescription: "Created a CLI tool for automating common development tasks including project scaffolding, code generation, deployment, and testing.",
      technologies: ["TypeScript", "Node.js", "Inquirer", "Chalk"],
      image: "",
      githubUrl: "https://github.com/sivasankar/dev-cli"
    }
  ],
  
  experience: [
    {
      id: "1",
      company: "Tech Innovations Inc.",
      position: "Senior Software Engineer",
      location: "San Francisco, CA",
      startDate: "2022-03",
      endDate: "Present",
      current: true,
      description: [
        "Led development of microservices architecture improving system scalability by 300%",
        "Mentored team of 5 junior developers, conducting code reviews and technical workshops",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Architected and built a real-time analytics platform serving 1M+ users"
      ],
      technologies: ["TypeScript", "Node.js", "AWS", "Kubernetes", "PostgreSQL"]
    },
    {
      id: "2",
      company: "Digital Solutions LLC",
      position: "Full Stack Developer",
      location: "Remote",
      startDate: "2020-01",
      endDate: "2022-02",
      current: false,
      description: [
        "Developed and maintained multiple client-facing web applications",
        "Built RESTful APIs serving 50K+ daily requests",
        "Optimized database queries reducing response time by 45%",
        "Collaborated with UX team to implement responsive and accessible designs"
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "GraphQL"]
    },
    {
      id: "3",
      company: "Startup XYZ",
      position: "Frontend Developer",
      location: "Austin, TX",
      startDate: "2019-06",
      endDate: "2019-12",
      current: false,
      description: [
        "Built responsive user interfaces using React and TypeScript",
        "Implemented state management with Redux and Context API",
        "Integrated third-party APIs including payment gateways and analytics",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["React", "TypeScript", "Redux", "CSS/Sass", "Jest"]
    }
  ],
  
  skills: [
    {
      category: "Frontend",
      icon: "Layout",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Framer Motion", level: 85 }
      ]
    },
    {
      category: "Backend",
      icon: "Server",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "Wrench",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 78 },
        { name: "CI/CD", level: 82 },
        { name: "Linux", level: 75 }
      ]
    },
    {
      category: "Testing & Quality",
      icon: "CheckCircle",
      skills: [
        { name: "Jest", level: 85 },
        { name: "Cypress", level: 78 },
        { name: "Testing Library", level: 82 },
        { name: "ESLint", level: 88 },
        { name: "Prettier", level: 85 }
      ]
    }
  ]
};

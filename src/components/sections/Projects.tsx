import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "AI-Powered Medical CRM with Agentic AI",
      date: "May 2026 – Jun 2026",
      description: "Developed an AI-powered CRM enabling medical representatives to record HCP interactions using natural language text or voice. Built an Agentic AI workflow with LangGraph and LangChain to extract doctors, products, sentiment, and structured entities. Implemented context-aware Smart Editing to update MySQL records through natural language commands using FastAPI. Built a React.js, Vite, and Redux Toolkit frontend with real-time state synchronization and integrated Groq LLaMA 3 70B for LLM inference.",
      tech: ["React.js", "FastAPI", "LangGraph", "LangChain", "MySQL", "Redux Toolkit", "Groq API"],
      links: {
        github: "https://github.com/jayanth882/AI-First-CRM-Setup.git"
      },
      gradient: "from-rose-900/80 via-pink-800/60 to-red-900/80",
      pattern: (
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-crm" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1.5" fill="currentColor" opacity="0.4" />
              <circle cx="25" cy="5" r="1.5" fill="currentColor" opacity="0.4" />
              <circle cx="15" cy="15" r="1.5" fill="currentColor" opacity="0.4" />
              <circle cx="5" cy="25" r="1.5" fill="currentColor" opacity="0.4" />
              <circle cx="25" cy="25" r="1.5" fill="currentColor" opacity="0.4" />
              <line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" strokeWidth="0.3" />
              <line x1="25" y1="5" x2="15" y2="15" stroke="currentColor" strokeWidth="0.3" />
              <line x1="5" y1="25" x2="15" y2="15" stroke="currentColor" strokeWidth="0.3" />
              <line x1="25" y1="25" x2="15" y2="15" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-crm)" className="text-rose-400" />
        </svg>
      ),
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-rose-400" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="12" r="6" />
          <circle cx="20" cy="12" r="2.5" fill="currentColor" />
          <path d="M8 30 C8 22 14 18 20 18 C26 18 32 22 32 30" />
          <path d="M20 18 L20 24" strokeDasharray="2 2" />
          <path d="M14 28 L20 24 L26 28" />
          <circle cx="14" cy="28" r="1.5" fill="currentColor" />
          <circle cx="26" cy="28" r="1.5" fill="currentColor" />
          <circle cx="20" cy="24" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Big Data Retail Sales Forecasting",
      date: "Mar 2026 – Apr 2026",
      description: "Developed a retail sales forecasting system using PySpark and Hadoop. Processed large-scale retail datasets using Spark SQL for trend analysis. Implemented ARIMA-based forecasting to analyze retail sales patterns.",
      tech: ["PySpark", "Hadoop", "Spark SQL", "ARIMA"],
      links: {} as Record<string, string>,
      gradient: "from-orange-900/80 via-amber-800/60 to-yellow-900/80",
      pattern: (
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-bigdata" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="currentColor" opacity="0.3" />
              <rect x="10" y="10" width="4" height="4" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-bigdata)" className="text-orange-400" />
        </svg>
      ),
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 36 L4 4" />
          <path d="M4 36 L36 36" />
          <path d="M8 28 L14 20 L20 24 L26 12 L32 16" />
          <circle cx="8" cy="28" r="2" fill="currentColor" />
          <circle cx="14" cy="20" r="2" fill="currentColor" />
          <circle cx="20" cy="24" r="2" fill="currentColor" />
          <circle cx="26" cy="12" r="2" fill="currentColor" />
          <circle cx="32" cy="16" r="2" fill="currentColor" />
          <path d="M8 32 L8 28" strokeDasharray="2 2" opacity="0.5" />
          <path d="M14 32 L14 20" strokeDasharray="2 2" opacity="0.5" />
          <path d="M20 32 L20 24" strokeDasharray="2 2" opacity="0.5" />
          <path d="M26 32 L26 12" strokeDasharray="2 2" opacity="0.5" />
          <path d="M32 32 L32 16" strokeDasharray="2 2" opacity="0.5" />
        </svg>
      )
    },
    {
      title: "IoT Smart Factory Monitoring System",
      date: "Feb 2026 – Mar 2026",
      description: "Built an IoT-based system to simulate and monitor machine data in near real-time using Azure cloud services. Processed data using Azure Stream Analytics, stored in Cosmos DB, and visualized via Power BI dashboards. Includes anomaly detection using failure indicators.",
      tech: ["Python", "Azure IoT Hub", "Stream Analytics", "Cosmos DB", "Power BI"],
      links: {} as Record<string, string>,
      gradient: "from-sky-900/80 via-blue-800/60 to-cyan-900/80",
      pattern: (
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-iot" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-iot)" className="text-sky-400" />
        </svg>
      ),
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="10" width="8" height="8" rx="1" />
          <rect x="16" y="6" width="8" height="8" rx="1" />
          <rect x="28" y="10" width="8" height="8" rx="1" />
          <rect x="10" y="24" width="8" height="8" rx="1" />
          <rect x="22" y="24" width="8" height="8" rx="1" />
          <line x1="12" y1="14" x2="16" y2="10" />
          <line x1="24" y1="10" x2="28" y2="14" />
          <line x1="14" y1="28" x2="16" y2="14" />
          <line x1="24" y1="14" x2="26" y2="28" />
          <circle cx="8" cy="14" r="2" fill="currentColor" />
          <circle cx="20" cy="10" r="2" fill="currentColor" />
          <circle cx="32" cy="14" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Farmer–Dealer Marketplace Platform",
      date: "Oct 2025 – Dec 2025",
      description: "A role-based online marketplace connecting farmers and dealers with bidding and negotiation functionality. JWT-based authentication, Spring Boot REST APIs, and Dockerized deployment for remote accessibility.",
      tech: ["React.js", "Spring Boot", "MySQL", "Docker", "JWT"],
      links: {
        githubFront: "https://github.com/jayanth882/Farmer-Dealer-Marketplace_Frontend.git",
        githubBack: "https://github.com/jayanth882/Farmer-Dealer-Marketplace_Backend.git"
      },
      gradient: "from-emerald-900/80 via-green-800/60 to-teal-900/80",
      pattern: (
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-farm" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="14" cy="14" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-farm)" className="text-emerald-400" />
        </svg>
      ),
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 4 C12 4 6 10 6 18 C6 26 12 32 20 32 C28 32 34 26 34 18 C34 10 28 4 20 4Z" />
          <path d="M20 32 L20 38" />
          <path d="M14 36 L26 36" />
          <path d="M20 18 L14 12" />
          <path d="M20 18 L26 12" />
          <path d="M20 18 L20 28" />
          <circle cx="20" cy="18" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "SS Photography",
      date: "March 2026",
      description: "A professional photography portfolio website showcasing beautiful imagery and services. Clean UI with smooth galleries and responsive design, deployed on Vercel.",
      tech: ["React.js", "CSS", "Vercel"],
      links: {
        github: "https://github.com/jayanth882/SS_Photography.git",
        live: "https://ssphotography-tau.vercel.app/"
      },
      gradient: "from-zinc-900/80 via-stone-800/60 to-neutral-900/80",
      pattern: (
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diag-photo" width="16" height="16" patternUnits="userSpaceOnUse">
              <line x1="0" y1="16" x2="16" y2="0" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag-photo)" className="text-amber-400" />
        </svg>
      ),
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="10" width="32" height="22" rx="3" />
          <circle cx="20" cy="21" r="6" />
          <circle cx="20" cy="21" r="3" fill="currentColor" fillOpacity="0.5" />
          <path d="M14 10 L16 6 L24 6 L26 10" />
          <circle cx="31" cy="15" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "AITECH.STUDIO",
      date: "July 2025",
      description: "A React-based platform providing AI learning resources and event management modules. Contributed during internship at Trizula Digital Solutions.",
      tech: ["React.js", "Node.js"],
      links: {
        github: "https://github.com/jayanth882/AITECH.STUDIO.git"
      },
      gradient: "from-violet-900/80 via-purple-800/60 to-fuchsia-900/80",
      pattern: (
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-ai" width="40" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q10 0 20 10 Q30 20 40 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-ai)" className="text-violet-400" />
        </svg>
      ),
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10 text-violet-400" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="20" r="6" />
          <path d="M20 6 L20 14" />
          <path d="M20 26 L20 34" />
          <path d="M6 20 L14 20" />
          <path d="M26 20 L34 20" />
          <path d="M9.4 9.4 L15.1 15.1" />
          <path d="M24.9 24.9 L30.6 30.6" />
          <path d="M30.6 9.4 L24.9 15.1" />
          <path d="M15.1 24.9 L9.4 30.6" />
          <circle cx="20" cy="20" r="2.5" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-12 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 space-y-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <Code className="w-8 h-8 text-primary" />
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Some of my recent work and personal projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full overflow-hidden"
            >
              {/* Themed visual header */}
              <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                {project.pattern}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>

              {/* Card body */}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  {project.date && (
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full shrink-0 ml-2">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-5 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary/80 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
                  {project.links.githubFront && (
                    <a href={project.links.githubFront} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" /> Frontend
                    </a>
                  )}
                  {project.links.githubBack && (
                    <a href={project.links.githubBack} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" /> Backend
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {Object.keys(project.links).length === 0 && (
                    <span className="text-xs text-muted-foreground italic">Private Repository</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border/40 bg-background/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-6">
        {/* Social Links - Prominent */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/jayanth882"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-secondary/30 text-foreground hover:bg-primary/15 hover:border-primary/50 hover:text-primary transition-all duration-300 group"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dasari-jayanth-880652350/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-secondary/30 text-foreground hover:bg-blue-500/15 hover:border-blue-500/50 hover:text-blue-500 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:2300030785cseh@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-secondary/30 text-foreground hover:bg-red-500/15 hover:border-red-500/50 hover:text-red-500 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Mail</span>
          </a>
        </div>

        <p className="text-sm text-muted-foreground font-mono">
          Built with React | Designed by Jayanth
        </p>
      </div>
    </footer>
  );
}

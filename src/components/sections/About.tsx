import { motion } from "framer-motion";
import profilePhoto from "@assets/profile.png";

export function About() {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative w-full h-full rounded-full border-4 border-background overflow-hidden shadow-2xl">
              <img
                src={profilePhoto}
                alt="Dasari Jayanth"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <div className="h-1 w-20 bg-primary mx-auto md:mx-0 rounded-full" />
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aspiring Software Development Engineer skilled in Java, Spring Boot, React.js, and cloud technologies. 
              Experienced in developing scalable full-stack applications, authentication systems, and database-driven platforms. 
              Seeking opportunities to build efficient and production-ready software solutions.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              {[
                { label: "CGPA", value: "8.56" },
                { label: "Projects", value: "4+" },
                { label: "Skills", value: "15+" }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="glass px-6 py-4 rounded-2xl border border-border/50 text-center min-w-[120px]"
                >
                  <div className="text-3xl font-black text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

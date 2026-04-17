import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "SQL"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "ReactJS", "NodeJS", "Spring Boot", "REST APIs"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Microsoft Azure", "AWS EC2 (Basic)", "Docker", "CI/CD (Basic)"]
    },
    {
      title: "Tools",
      skills: ["Spring Tool Suite", "VS Code", "GitHub", "Power BI", "Tableau", "Excel"]
    }
  ];

  return (
    <section id="skills" className="py-12 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 space-y-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Tools and technologies I use to build scalable solutions.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-4">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass rounded-2xl border border-border/50 hover:border-primary/30 transition-colors overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5">
                <div className="flex items-center gap-3 sm:min-w-[220px]">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-accent rounded-full block shrink-0" />
                  <h3 className="text-base font-semibold text-foreground whitespace-nowrap">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 + i * 0.04 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-1 text-sm font-medium bg-secondary/60 hover:bg-primary/20 hover:text-primary hover:border-primary/40 border border-transparent transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

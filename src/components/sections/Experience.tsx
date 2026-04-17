import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Data Analyst Intern",
      company: "Trizula Digital Solutions",
      period: "Jun 2025 – Jul 2025",
      description: [
        "Automated invoice data extraction by converting image-based invoices to Excel datasets using OCR",
        "Performed data preprocessing and cleaning to improve analytical accuracy",
        "Designed interactive Power BI dashboards to analyze supermarket sales and inventory trends",
        "Contributed to development of AITECH.STUDIO, a React-based platform providing AI learning resources and event management modules"
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 space-y-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Professional work and internships.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  <div className="text-xl text-primary font-medium mt-1">{exp.company}</div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full w-fit">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

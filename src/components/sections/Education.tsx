import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "B.Tech CSE",
      institution: "KL University",
      period: "2023 – 2027",
      score: "CGPA: 8.56"
    },
    {
      degree: "Intermediate",
      institution: "Sri Sai Gayatri Junior College",
      period: "2021 – 2023",
      score: "83%"
    },
    {
      degree: "SSC (CBSE)",
      institution: "Centurion Public School",
      period: "2021",
      score: "61%"
    }
  ];

  return (
    <section id="education" className="py-12 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 space-y-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey and qualifications.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50 md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background -translate-x-1/2 md:translate-y-0 mt-6 md:mt-0 z-10" />

                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.degree}</h3>
                    <h4 className="text-lg text-primary font-medium mb-4">{item.institution}</h4>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {item.score}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

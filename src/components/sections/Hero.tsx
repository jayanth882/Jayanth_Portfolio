import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Download, Mail, ChevronDown } from "lucide-react";

const RESUME_PATH = import.meta.env.BASE_URL + "resume.pdf";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const handleView = () => {
    window.open(RESUME_PATH, "_blank");
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = RESUME_PATH;
    a.download = "Dasari_Jayanth_Resume.pdf";
    a.click();
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <motion.h1 
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
          >
            Dasari <span className="text-gradient">Jayanth</span>
          </motion.h1>
          
          <motion.h2 
            variants={item}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground mb-6"
          >
            Aspiring Software Development Engineer
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Building scalable full-stack applications with modern technologies
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="rounded-full h-12 px-8 group" onClick={handleView}>
              <FileText className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              View Resume
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-8 group bg-background/50 backdrop-blur" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full h-12 px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ChevronDown className="w-8 h-8 opacity-50" />
      </motion.div>
    </section>
  );
}

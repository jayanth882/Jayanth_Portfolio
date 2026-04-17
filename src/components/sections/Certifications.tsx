import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, Download, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import oracleCert from "@assets/oracle-cert.png";
import salesforceCert from "@assets/salesforce-cert.png";
import mlCert from "@assets/ml-cert.png";

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      image: oracleCert,
      issuer: "Oracle"
    },
    {
      title: "Salesforce AI Associate",
      image: salesforceCert,
      issuer: "Salesforce"
    },
    {
      title: "Machine Learning",
      image: mlCert,
      issuer: "Internshala Trainings"
    }
  ];

  return (
    <section id="certifications" className="py-12 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 space-y-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Professional certifications and verified skills.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl border border-border/50 overflow-hidden group flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-muted/20">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Image pending
                  </div>
                )}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {cert.image && (
                    <Button size="icon" variant="secondary" className="rounded-full" onClick={() => setSelectedImage(cert.image)}>
                      <Eye className="w-4 h-4" />
                    </Button>
                  )}
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="font-bold text-lg mb-2 text-foreground line-clamp-2">{cert.title}</h3>
                <p className="text-sm text-primary font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 right-4 p-2 bg-secondary/80 rounded-full hover:bg-secondary transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage} 
              alt="Certification view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-border/50"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

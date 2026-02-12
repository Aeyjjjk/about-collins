import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, LayoutGrid, List } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Certifications = () => {
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("grid");

  const certifications = [
    {
      year: "In Progress",
      title: "Process Control and Instrumentation",
      issuer: "Industrial Automation Institute (Udemy)",
      category: "Automation",
    },
    {
      year: "2025",
      title: " HSE 1,2,3 (Certified)",
      issuer: "DUSSO Integrated Limited",
      category: "Safety",
    },
   
    {
      year: "2024",
      title: "Cybersecurity",
      issuer: "Google",
      category: "Security",
    },
    // {
    //   year: "2021",
    //   title: "Robotics & Mechatronics Design",
    //   issuer: "Robotics Engineering Institute",
    //   category: "Robotics",
    // },
    {
      year: "2024",
      title: "Flutter Mobile Development",
      issuer: "Google Developers",
      category: "Development",
    },
    {
      year: "2023",
      title: "Embedded Systems Professional Certificate",
      issuer: "Electronics Engineering Academy",
      category: "Embedded Systems",
    },
  
    {
      year: "2022",
      title: "IoT Systems & Cloud Integration",
      issuer: "Tech Innovation Center",
      category: "IoT",
    },
  
    // {
    //   year: "2020",
    //   title: "Linux System Administration",
    //   issuer: "Linux Professional Institute",
    //   category: "Linux",
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
    },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Training</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in engineering excellence
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 p-1 bg-muted rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="gap-2"
            >
              <LayoutGrid className="h-4 w-4" />
              Grid
            </Button>
            <Button
              variant={viewMode === "timeline" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("timeline")}
              className="gap-2"
            >
              <List className="h-4 w-4" />
              Timeline
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Grid View */}
          {viewMode === "grid" && (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-5 h-full hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 border border-border/50 hover:border-primary/30 bg-card group">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
                          {cert.year}
                        </Badge>
                        <Award className="h-5 w-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                      </div>
                      
                      <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-grow">
                        {cert.title}
                      </h3>
                      
                      <div className="mt-auto pt-4 border-t border-border/50">
                        <p className="text-xs text-muted-foreground flex items-center gap-1.5 mb-2">
                          <CheckCircle className="h-3 w-3 text-accent" />
                          {cert.issuer}
                        </p>
                        <Badge className="bg-accent/10 text-accent border border-accent/20 text-xs">
                          {cert.category}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Timeline View */}
          {viewMode === "timeline" && (
            <motion.div
              key="timeline"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-3xl mx-auto relative"
            >
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-20"
                  >
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />
                    
                    <Card className="p-5 hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 border border-border/50 hover:border-primary/30 bg-card group">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Award className="h-4 w-4 text-primary" />
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
                              {cert.year}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                            <CheckCircle className="h-3 w-3 text-accent" />
                            {cert.issuer}
                          </p>
                        </div>
                        <Badge className="bg-accent/10 text-accent border border-accent/20 text-xs self-start">
                          {cert.category}
                        </Badge>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

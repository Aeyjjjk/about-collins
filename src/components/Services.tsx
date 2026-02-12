import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Cpu, Zap, Smartphone, Shield, Wrench, Cog, Box, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: Cpu,
      title: "Embedded Systems Development",
      description: "Custom microcontroller solutions, firmware development, and IoT device programming",
      category: "hardware",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      icon: Box,
      title: "PCB Design & Hardware",
      description: "Circuit design, PCB layout, and hardware prototyping for industrial applications",
      category: "hardware",
      accent: "from-emerald-500 to-teal-400",
    },
    {
      icon: Cog,
      title: "PLC & HMI Programming",
      description: "Industrial automation systems, SCADA integration, and process control solutions",
      category: "industrial",
      accent: "from-violet-500 to-purple-400",
    },
    {
      icon: Zap,
      title: "Robotics & Automation",
      description: "Robotic system design, drone development, and automated control systems",
      category: "industrial",
      accent: "from-orange-500 to-amber-400",
    },
    {
      icon: Code,
      title: "IoT Systems Integration",
      description: "Smart device connectivity, sensor networks, and cloud-based monitoring systems",
      category: "software",
      accent: "from-indigo-500 to-blue-400",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Flutter-based cross-platform mobile applications with modern UI/UX",
      category: "software",
      accent: "from-pink-500 to-rose-400",
    },
    {
      icon: Code,
      title: "Java Application Development",
      description: "Enterprise-grade Java applications and backend systems",
      category: "software",
      accent: "from-red-500 to-orange-400",
    },
    {
      icon: Shield,
      title: "Safety Systems & Documentation",
      description: "QHSE documentation, safety protocols, and compliance systems",
      category: "consulting",
      accent: "from-green-500 to-emerald-400",
    },
    {
      icon: Wrench,
      title: "Instrumentation Services",
      description: "Industrial instrumentation, calibration, and measurement systems",
      category: "consulting",
      accent: "from-gray-700 to-gray-600",
    },
  ];

  const categories = [
    { id: "all", label: "All Services", count: services.length },
    { id: "software", label: "Software", count: services.filter(s => s.category === "software").length },
    { id: "hardware", label: "Hardware", count: services.filter(s => s.category === "hardware").length },
    { id: "industrial", label: "Industrial", count: services.filter(s => s.category === "industrial").length },
    { id: "consulting", label: "Consulting", count: services.filter(s => s.category === "consulting").length },
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="relative min-h-screen py-20 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-foreground/20 rounded-sm" />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with floating effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">What I Do</span>
          </div>
          
          
           <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">
              Professional
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent">
              Engineering Services
            </span>
          </h2>
          
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Tailored solutions that bridge the gap between innovation and implementation
          </p> */} 

          {/* Expand/Collapse Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 gap-3 group"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                  Hide Services
                  <ChevronUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                </>
              ) : (
                <>
                  <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                  View My Services
                  <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated expandable content area */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ 
                duration: 0.7, 
                ease: [0.4, 0, 0.2, 1],
                opacity: { duration: 0.4 }
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2 }}
                className="space-y-12"
              >
                {/* Interactive category filter - Animated entrance */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap justify-center gap-3"
                >
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      variant={activeCategory === category.id ? "default" : "outline"}
                      className={`rounded-full px-6 py-3 h-auto transition-all duration-300 ${
                        activeCategory === category.id 
                          ? "shadow-lg shadow-primary/20" 
                          : "hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <span className="font-semibold">{category.label}</span>
                      <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                        activeCategory === category.id 
                          ? "bg-background/20" 
                          : "bg-muted"
                      }`}>
                        {category.count}
                      </span>
                    </Button>
                  ))}
                </motion.div>

                {/* Dynamic service grid */}
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
                    <AnimatePresence mode="wait">
                      {filteredServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <motion.div
                            key={`${service.title}-${index}`}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.4 + (index * 0.05),
                              type: "spring",
                              stiffness: 100
                            }}
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                            className="relative group"
                          >
                            {/* Service card with gradient border */}
                            <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-background to-muted/30 border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
                              
                              {/* Animated gradient overlay */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                              
                             
                              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-primary/30 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-primary/30 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              
                              <div className="relative z-10 mb-6">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} p-0.5`}>
                                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                                    <Icon className="h-8 w-8" />
                                  </div>
                                </div>
                                <motion.div
                                  animate={{ 
                                    y: hoveredService === index ? [-2, 2, -2] : 0,
                                  }}
                                  transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    ease: "easeInOut" 
                                  }}
                                  className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full opacity-0 group-hover:opacity-100"
                                />
                              </div>
                              
                            
                              <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 leading-tight">
                                  {service.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                              
                             
                              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                  
                
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl -z-10" />
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl -z-10" />
                </div>

               
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="pt-12 border-t border-border/50"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                      { value: "15+", label: "Projects Completed" },
                      { value: "9+", label: "Service Categories" },
                      { value: "99%", label: "Client Satisfaction" },
                      { value: "24/7", label: "Technical Support" },
                    ].map((stat, index) => (
                      <div key={index} className="space-y-2">
                        <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-16 text-center"
            >
              <div className="inline-block max-w-2xl p-8 rounded-3xl bg-gradient-to-br from-background to-muted/20 border border-border/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">
                  Discover Our Comprehensive Service Portfolio
                </h3>
                <p className="text-muted-foreground mb-6">
                  From embedded systems to enterprise software, we deliver end-to-end engineering solutions
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Hardware", "Software", "Programming", "Automation"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
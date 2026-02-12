import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Download,
  MessageCircle,
  Linkedin,
  Github,
  Sparkles,
  Zap,
  Palette,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { heroData } from "@/data/portfolio-data";

export const Hero = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const isDataReady =
    heroData &&
    heroData.name &&
    heroData.profileImage &&
    heroData.skills?.length > 0;

  const techStack = [
    "Embedded Systems Development",
    "IoT Solutions & Integration",
    "Industrial Automation",
    "Flutter Mobile Applications",
    "PLC & HMI Programming",
    "Cybersecurity Implementation",
    "Robotics & Control Systems",
    "PCB Design & Hardware"
  ];

  useEffect(() => {
    if (!isAutoPlaying || !isDataReady) return;
    const interval = setInterval(
      () => setCurrentTechIndex((p) => (p + 1) % techStack.length),
      4000
    );
    return () => clearInterval(interval);
  }, [isAutoPlaying, isDataReady]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5"
    >
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary/5 to-accent/5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.sin(i) * 50, 0],
              x: [0, Math.cos(i) * 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Control Button */}
      <div className="absolute top-4 right-4 z-20">
        {/* <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="rounded-full backdrop-blur-sm border-border/40 gap-2"
        >
          {isAutoPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          <span className="text-xs hidden sm:inline">
            {isAutoPlaying ? "Pause" : "Play"}
          </span>
        </Button> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Personal Introduction */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
                {/* <Sparkles className="h-4 w-4 text-primary" /> */}
                <span className="text-sm font-semibold text-primary">{heroData?.title}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground/90">Hello, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent">
                  {heroData?.name}
                </span>
              </h1>

              <p className="text-xl text-muted-foreground">
                {heroData?.tagline}
              </p>
            </div>

            {/* Expertise Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                {/* <Zap className="h-5 w-5 text-primary" /> */}
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  I specialize in
                </span>
              </div>

              <div className="h-20 relative overflow-hidden">
                {!isDataReady ? (
                  <div className="w-full h-8 rounded bg-muted/50 animate-pulse" />
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTechIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="absolute inset-0"
                    >
                      <div className="h-full flex flex-col justify-center">
                        <h4 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
                          {techStack[currentTechIndex]}
                        </h4>
                        <div className="w-full h-1.5 bg-muted/30 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 4, ease: "linear" }}
                            className="h-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="rounded-xl px-8 py-6 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/20"
              >
                <span className="flex items-center gap-2">
                  See My Works
                  <ChevronRight className="h-5 w-5" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 py-6 text-base font-semibold border-2 hover:bg-primary/5"
                asChild
              >
                <a href={heroData?.cvLink} download>
                  <Download className="mr-2 h-5 w-5" />
                  View Full CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Profile Image Container */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto aspect-square">
                {/* Background Pattern */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10" />
                
                {/* Image Container */}
                <div className="absolute inset-8 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                  {isDataReady ? (
                    <img
                      src={heroData.profileImage}
                      alt={heroData.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted animate-pulse" />
                  )}
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-3xl"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute top-1.5 right-12 lg:top-8 lg:right-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-green-600">Available for work</span>
                </div>
              </div>
            </div>

            {/* Skills & Tools */}
            {/* Skills & Tools - Headers Only */}
<div className="space-y-6">
  {/* <div className="flex items-center gap-3">
    <Palette className="h-5 w-5 text-primary" />
    <h3 className="text-lg font-semibold">Skills & Tools</h3>
  </div> */}

  {/* Category Headers Only */}
  {/* <div className="grid grid-cols-2 gap-3">
    {[
      { category: "Hardware" },
      { category: "Software" },
      { category: "Automation" },
      { category: "IoT" },
    ].map((skillGroup, index) => (
      <div
        key={index}
        className="p-4 rounded-xl bg-card/50 border border-border/40 backdrop-blur-sm text-center"
      >
        <h4 className="text-sm font-semibold text-primary">{skillGroup.category}</h4>
      </div>
    ))}
  </div> */}
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
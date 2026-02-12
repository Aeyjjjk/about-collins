import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code2, Cpu, Wrench, Shield, Layers, Microchip, Bot, Workflow, AppWindow, ShieldCheck, X, ChevronRight, Sparkles, Target, Zap, Brain, CircuitBoard, Cog, Terminal, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const About = () => {
  const [activeStrength, setActiveStrength] = useState<any>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentBgRotation, setCurrentBgRotation] = useState(0);
  const [autoRotateIndex, setAutoRotateIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const strengths = [
    {
      icon: Microchip,
      title: "Embedded Systems",
      summary: "Developing microcontroller-based systems with a focus on stability, hardware integration, and real-world operation.",
      details: [
        "Microcontroller programming and peripheral configuration",
        "Sensor and module interfacing for data acquisition",
        "Basic circuit design, testing, and hardware troubleshooting",
      ],
      gradient: "from-blue-500 to-cyan-400",
      accentColor: "bg-blue-500/10",
      position: "left",
      number: "01",
    },
    {
      icon: Bot,
      title: "Automation & Robotics",
      summary: "Building control and automation systems for industrial and robotic applications.",
      details: [
        "PLC control logic design and implementation",
        "HMI development for monitoring and operator interaction",
        "Robotic system integration and automated workflows",
      ],
      gradient: "from-violet-500 to-purple-400",
      accentColor: "bg-violet-500/10",
      position: "right",
      number: "02",
    },
    {
      icon: AppWindow,
      title: "Application Development",
      summary: "Creating software applications.",
      details: [
        "Cross-platform mobile development using Flutter with clean UI architecture",
        "State management, API consumption, and real-time data handling",
        "Tight integration with embedded systems, IoT devices, and automation backends",
      ],
      gradient: "from-emerald-500 to-teal-400",
      accentColor: "bg-emerald-500/10",
      position: "left",
      number: "03",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      summary: "Applying security awareness across systems, networks, and applications.",
      details: [
        "System and network security assessment basics",
        "Understanding common vulnerabilities and attack surfaces",
        "Hands-on use of Kali Linux tools for security testing",
      ],
      gradient: "from-amber-500 to-orange-400",
      accentColor: "bg-amber-500/10",
      position: "right",
      number: "04",
    },
  ];

  // Continuous background rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate through strengths every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setAutoRotateIndex(prev => (prev + 1) % strengths.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, strengths.length]);

  // Auto-animated tech stack items
  const techStack = [
    { name: "C/C++", color: "from-blue-500 to-cyan-400" },
    { name: "RTOS", color: "from-violet-500 to-purple-400" },
    { name: "Arduino", color: "from-emerald-500 to-teal-400" },
    { name: "ESP32", color: "from-amber-500 to-orange-400" },
    { name: "Flutter", color: "from-pink-500 to-rose-400" },
    { name: "Dart", color: "from-indigo-500 to-blue-400" },
    { name: "Python", color: "from-green-500 to-emerald-400" },
    { name: "Kali Linux", color: "from-red-500 to-orange-400" },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Animated Abstract Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Triangles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-primary/5"
            style={{
              width: 40 + i * 40,
              height: 40 + i * 40,
              left: `${10 + i * 15}%`,
              top: `${10 + i * 10}%`,
              rotate: currentBgRotation + i * 60,
            }}
            animate={{
              rotate: [currentBgRotation + i * 60, currentBgRotation + i * 60 + 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Moving Circuit Pattern */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          animate={{
            x: [0, -20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </motion.svg>

        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-primary/3 to-accent/3 blur-xl"
            style={{
              width: 100 + Math.random() * 200,
              height: 100 + Math.random() * 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.sin(i) * 50, 0],
              y: [0, Math.cos(i) * 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Auto-animated Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 mb-20">
          <div className="lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 10px rgba(59, 130, 246, 0.1)", "0 0 0 0 rgba(59, 130, 246, 0)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"
              />
              <span className="text-sm font-semibold text-primary">Core Competencies</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-[length:200%_auto] block"
              >
                Precision
              </motion.span>
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5,
                }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent bg-[length:200%_auto]"
              >
                Engineering
              </motion.span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              We blend hardware innovation with software expertise to create integrated solutions 
              that drive industrial automation, IoT connectivity, and secure digital ecosystems.
            </p>
          </motion.div>
        </div>

        {/* Animated Timeline Layout */}
        <div className="relative">
          {/* Pulsing Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden lg:block overflow-hidden">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-primary/30 via-accent/30 to-transparent"
              animate={{
                background: [
                  "linear-gradient(to bottom, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), transparent)",
                  "linear-gradient(to bottom, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3), transparent)",
                  "linear-gradient(to bottom, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), transparent)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Moving Dot on Timeline */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"
              animate={{
                top: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          
          {/* Auto-rotating Expertise Cards */}
          <div className="space-y-16 lg:space-y-0">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              const isEven = index % 2 === 0;
              const isAutoRotated = index === autoRotateIndex;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: isAutoRotated ? 1.02 : 1,
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                  }}
                  className={`relative flex flex-col lg:flex-row items-center lg:items-start gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setIsPaused(false);
                  }}
                >
                  {/* Card Content */}
                  <div className={`lg:w-2/5 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative cursor-pointer"
                      onClick={() => {
                        setActiveStrength(strength);
                        setIsPaused(true);
                      }}
                    >
                      {/* Auto-pulsing glow for active card */}
                      {isAutoRotated && !isPaused && (
                        <motion.div
                          className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${strength.gradient} blur-xl`}
                          animate={{
                            opacity: [0.2, 0.4, 0.2],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                      
                      {/* Card with Cut Corner */}
                      <motion.div
                        animate={{
                          borderColor: isAutoRotated ? "rgba(59, 130, 246, 0.4)" : "rgba(255, 255, 255, 0.1)",
                        }}
                        className={`relative p-8 rounded-2xl ${strength.accentColor} border-2 backdrop-blur-sm 
                                  transition-all duration-300`}
                      >
                        {/* Animated Cut Corner */}
                        <motion.div
                          className="absolute top-0 right-0 w-8 h-8"
                          animate={{
                            rotate: [0, 90, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        >
                          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-2xl" />
                        </motion.div>

                        {/* Auto-rotating Number Badge */}
                        <motion.div
                          animate={{
                            rotate: isAutoRotated ? [0, 360] : 0,
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-background to-background/80 
                                    border border-border/40 flex items-center justify-center"
                        >
                          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {strength.number}
                          </span>
                        </motion.div>

                        {/* Floating Icon */}
                        <div className="relative mb-6">
                          <motion.div
                            animate={{
                              y: isAutoRotated ? [0, -10, 0] : 0,
                              rotate: isAutoRotated ? [0, 5, -5, 0] : 0,
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.3,
                            }}
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${strength.gradient} p-0.5`}
                          >
                            <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                              <motion.div
                                animate={{
                                  scale: [1, 1.1, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: index * 0.7,
                                }}
                              >
                                <Icon className="h-8 w-8" />
                              </motion.div>
                            </div>
                          </motion.div>
                          
                          {/* Pulsing Glow */}
                          <motion.div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${strength.gradient} blur-xl -z-10`}
                            animate={{
                              opacity: [0, 0.3, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.5,
                            }}
                          />
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <motion.h3
                            animate={{
                              backgroundPosition: isAutoRotated ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-[length:200%_auto]"
                          >
                            {strength.title}
                          </motion.h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {strength.summary}
                          </p>
                          
                          {/* Auto-sliding Arrow */}
                          <div className="pt-4">
                            <Button
                              variant="ghost"
                              className="group/btn p-0 h-auto text-sm font-semibold 
                                       text-muted-foreground hover:text-foreground"
                            >
                              <span className="flex items-center gap-2">
                                Learn more
                                <motion.div
                                  animate={{
                                    x: isAutoRotated ? [0, 8, 0] : hoveredIndex === index ? [0, 5, 0] : 0,
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </motion.div>
                              </span>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Pulsing Timeline Node */}
                  <div className="hidden lg:block relative">
                    <motion.div
                      animate={{
                        scale: isAutoRotated ? [1, 1.2, 1] : 1,
                        boxShadow: isAutoRotated 
                          ? ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 10px rgba(59, 130, 246, 0.1)", "0 0 0 0 rgba(59, 130, 246, 0)"]
                          : "0 0 0 0 rgba(59, 130, 246, 0)",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent 
                                border-4 border-background shadow-lg flex items-center justify-center"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-2 h-2 rounded-full bg-background"
                      />
                    </motion.div>
                    
                    {/* Animated Connection Lines */}
                    {index < strengths.length - 1 && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-16 overflow-hidden">
                        <motion.div
                          className="w-full h-full bg-gradient-to-b from-primary/50 to-accent/50"
                          animate={{
                            y: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.5,
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Empty Space for Alignment */}
                  <div className="lg:w-2/5 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Auto-scrolling Tech Stack Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24"
        >
          <div className="rounded-3xl bg-gradient-to-r from-background via-background/80 to-background/60 
                        border border-border/40 p-8 overflow-hidden relative">
            {/* Animated Background Icons */}
            <div className="absolute inset-0 opacity-[0.03]">
              {[CircuitBoard, Cog, Terminal, Lock].map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, Math.sin(i) * 20, 0],
                    y: [0, Math.cos(i) * 20, 0],
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute h-24 w-24 ${
                    i === 0 ? 'top-4 left-4' :
                    i === 1 ? 'top-4 right-4' :
                    i === 2 ? 'bottom-4 left-4' : 'bottom-4 right-4'
                  }`}
                >
                  <Icon className="h-full w-full" />
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <motion.h3
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto]"
              >
                Technology Stack & Tools
              </motion.h3>
              
              {/* Auto-scrolling Tech Tags */}
              <div className="overflow-hidden">
                <motion.div
                  animate={{
                    x: ["0%", "-100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex gap-4"
                >
                  {[...techStack, ...techStack].map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`px-4 py-3 rounded-lg bg-gradient-to-r ${tech.color} bg-opacity-10 border border-border/30 
                               backdrop-blur-sm flex items-center gap-2 min-w-[120px] justify-center`}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.5,
                        }}
                      >
                        <Code2 className="h-4 w-4" />
                      </motion.div>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Modal with Animations */}
      <AnimatePresence>
        {activeStrength && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveStrength(null);
              setIsPaused(false);
            }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -30 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-gradient-to-br from-card to-card/90 
                        rounded-3xl shadow-2xl overflow-hidden border border-border/50"
            >
              {/* Animated Modal Header */}
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className={`relative p-8 bg-gradient-to-r ${activeStrength.gradient} bg-opacity-10`}
              >
                {/* Moving Gradient Border */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto]"
                />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeStrength.gradient} p-0.5`}
                    >
                      <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                        <activeStrength.icon className="h-8 w-8" />
                      </div>
                    </motion.div>
                    <div>
                      <motion.div
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="text-sm font-semibold text-primary uppercase tracking-wider"
                      >
                        Expertise Area
                      </motion.div>
                      <motion.h3
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="text-3xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto]"
                      >
                        {activeStrength.title}
                      </motion.h3>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setActiveStrength(null);
                      setIsPaused(false);
                    }}
                    className="p-2 rounded-lg bg-background/80 border border-border/40 
                             hover:bg-background transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                </div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-muted-foreground"
                >
                  {activeStrength.summary}
                </motion.p>
              </motion.div>

              {/* Animated Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <motion.h4
                      initial={{ x: -20 }}
                      animate={{ x: 0 }}
                      className="text-xl font-bold mb-6 flex items-center gap-2"
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Zap className="h-5 w-5 text-primary" />
                      </motion.div>
                      Key Capabilities
                    </motion.h4>
                    <ul className="space-y-4">
                      {activeStrength.details.map((item: string, i: number) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, type: "spring" }}
                          whileHover={{ x: 10 }}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-background/50 to-background/30 
                                   border border-border/30 hover:border-primary/30 transition-colors"
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                            className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${activeStrength.gradient} 
                                      bg-opacity-10 flex items-center justify-center`}
                          >
                            <span className="text-sm font-bold text-foreground">
                              {i + 1}
                            </span>
                          </motion.div>
                          <span className="text-muted-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <motion.h4
                      initial={{ x: 20 }}
                      animate={{ x: 0 }}
                      className="text-xl font-bold mb-6 flex items-center gap-2"
                    >
                      <motion.div
                        animate={{
                          rotate: [0, -360],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Brain className="h-5 w-5 text-primary" />
                      </motion.div>
                      Implementation Approach
                    </motion.h4>
                    <div className="space-y-4">
                      {[
                        "Requirement analysis and system design",
                        "Proof of concept and prototyping",
                        "Development and integration",
                        "Testing and quality assurance",
                        "Deployment and maintenance"
                      ].map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-background/30 border border-border/20"
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.5, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"
                          />
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
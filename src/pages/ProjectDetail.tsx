import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Project data with multiple images for each project
  const projects: Record<string, any> = {
    "gas-robot": {
      title: "Autonomous Gas Detector and Obstacle Avoidance Robot",
      year: "2024",
      role: "Hardware & Embedded Systems Developer",
      description: "An autonomous mobile robot designed to detect and monitor hazardous gas levels in industrial environments. Features real-time data transmission and alert systems.",
      fullDescription: "This advanced robotic system combines embedded systems with sensor technology to create a comprehensive gas monitoring solution. The robot autonomously navigates through industrial facilities while continuously monitoring air quality and detecting dangerous gas concentrations. When hazardous levels are detected, the system displays real-time readings on an LCD screen, triggers an audible alarm, and autonomously moves the robot away from danger zones while avoiding obstacles.",
      tech: ["Arduino", "Gas Sensors", "Ultrasonic Sensor", "L298N Motor Controller", "C++", "DC-DC Buck Converter", "Servo Motor"],
      category: "Robotics",
      images: [
        "/images/project-more/gas-robot.jpg",
        "/images/project-more/robot-FV.jpg",
        "/images/gallery/robot-SV.jpg"
      ],
      features: [
        "Autonomous navigation system",
        "Multi-gas detection capability (CO, CO2, LPG, Methane)",
        "Real-time display of current system output on an LCD screen",
        "Automatic alert system with threshold monitoring",
        "Obstacle Avoidance System",
        "Rechargeable battery system with long runtime",
      ],
      goals: "Create a cost-effective, reliable solution for continuous gas monitoring in industrial environments where human presence may be dangerous or impractical.",
      outcomes: "Successfully deployed prototype demonstrating 95% detection accuracy, 3-hour battery life, and reliable operation in challenging industrial conditions.",
      github: "https://github.com/Aeyjjjk/autonomous-robot",
    },
    "water-level-detector": {
      title: "Water Level Detection & Alert System",
      year: "2023",
      role: "Embedded Systems & IoT Engineer",
      description: "An automated water level monitoring system that detects water depth and triggers an alarm when a predefined threshold is reached.",
      fullDescription: "This project is a water level and depth detection system designed to monitor liquid levels in tanks or reservoirs in real time. Using a sensor connected to a microcontroller, the system continuously measures the water level and compares it against a predefined setpoint. When the water reaches or exceeds the critical level, a buzzer is automatically triggered to alert users, helping to prevent overflow, equipment damage, or water wastage.",
      tech: ["Water Level Sensor", "Microcontroller", "Buzzer", "Power Supply", "Connecting Wires"],
      category: "Embedded Systems",
      images: [
        "/images/projects/waterLevel-1.jpeg",
        "/images/projects/waterLevel-2.jpeg",
        "/images/projects/waterLevel-3.jpeg",
        "/images/projects/waterLevel-4.jpeg"
      ],
      features: [
        "Real-time water level monitoring",
        "Configurable level threshold (setpoint)",
        "Automatic buzzer alert on overflow risk",
        "Fast response and reliable detection",
        "Simple and low-cost hardware design",
        "Suitable for tanks, wells, and reservoirs",
      ],
      goals: "To prevent water overflow and equipment damage by providing a simple, reliable alert system when water reaches a critical level.",
      outcomes: "Successfully detected water levels with high accuracy, triggered timely alerts at the set threshold, and demonstrated reliable performance during continuous testing.",
    },
    "flutter-apps": {
      title: "Flutter Mobile Apps",
      year: "2022-2024",
      role: "Mobile App Developer & UI/UX Designer",
      description: "Cross-platform mobile applications featuring modern UI/UX, real-time data sync, and seamless user experiences.",
      fullDescription: "A collection of professional mobile applications built with Flutter, demonstrating mastery of modern mobile development principles, state management, and API integration. Applications range from productivity tools to industrial monitoring solutions.",
      tech: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management"],
      category: "Software Development",
      images: [
        "/images/projects/flutter-app-1.jpg",
        "/images/projects/flutter-app-2.jpg",
        "/images/projects/flutter-app-3.jpg",
        "/images/projects/flutter-app-4.jpg"
      ],
      features: [
        "Cross-platform compatibility (iOS & Android)",
        "Modern, intuitive user interfaces",
        "Real-time data synchronization",
        "Offline functionality with local caching",
        "Push notifications",
        "Secure authentication systems",
      ],
      goals: "Deliver high-quality, performant mobile applications that provide excellent user experiences across all platforms.",
      outcomes: "Published multiple apps with 4.5+ star ratings, thousands of downloads, and positive user feedback on performance and design.",
    },
    "plc-systems": {
      title: "PLC & HMI Systems",
      year: "2023-Present",
      role: "Automation Engineer & PLC Programmer",
      description: "Industrial automation control systems with intuitive HMI interfaces for process monitoring and control.",
      fullDescription: "Professional PLC programming projects implementing complete automation solutions for industrial processes. Includes SCADA integration, alarm management, and comprehensive HMI development for operator interfaces.",
      tech: ["RSLogix 5000", "Ladder Logic", "FactoryTalk", "Industrial Protocols"],
      category: "Automation & Control",
      images: [
        "/images/gallery/hmi-1.PNG",
        "/images/gallery/hmi-2.PNG",
        "/images/gallery/hmi-3.PNG",
        "/images/gallery/hmi-4.PNG"
      ],
      features: [
        "Comprehensive process control logic",
        "Intuitive HMI operator interfaces",
        "Real-time monitoring and alarms",
        "Data logging and trending",
        "Remote access and diagnostics",
        "Safety interlocks and emergency stops",
      ],
      goals: "Create reliable, maintainable automation solutions that improve efficiency and safety in industrial processes.",
      outcomes: "Implemented systems controlling critical processes with 99.9% uptime, reducing manual intervention by 80%.",
    },
  };

  const project = id ? projects[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} className="mt-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {/* Hero Section */}
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 border-2">
                  {project.category}
                </Badge>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground font-medium">{project.year}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                {project.title}
              </h1>
              <p className="text-lg text-primary/80 font-medium mb-4">
                {project.role}
              </p>
              <p className="text-xl text-muted-foreground animate-fade-in">
                {project.description}
              </p>
            </div>

            {/* Main Project Image */}
            <Card className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 flex items-center justify-center mb-8 border-2 overflow-hidden relative">
              {project.images && project.images[0] && (
                <>
                  <img 
                    src={project.images[0]}
                    alt={`${project.title} - Main view`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none" />
                </>
              )}
            </Card>

            {/* Additional Images Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.images && project.images.slice(1).map((image: string, index: number) => (
                  <Card 
                    key={index} 
                    className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border-2 overflow-hidden relative group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                  >
                    <img 
                      src={image}
                      alt={`${project.title} - View ${index + 2}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
                  </Card>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, index: number) => (
                  <Badge
                    key={index}
                    className="bg-cyan/20 text-cyan border-cyan/50 border-2 px-4 py-2 hover:bg-cyan/30 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature: string, index: number) => (
                  <Card key={index} className="p-4 border-2 bg-card">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-foreground">{feature}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Goals & Outcomes */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 border-2 bg-card">
                <h3 className="text-xl font-bold mb-3 text-gradient">Project Goals</h3>
                <p className="text-muted-foreground leading-relaxed">{project.goals}</p>
              </Card>
              <Card className="p-6 border-2 bg-card">
                <h3 className="text-xl font-bold mb-3 text-gradient">Outcomes</h3>
                <p className="text-muted-foreground leading-relaxed">{project.outcomes}</p>
              </Card>
            </div>

            {/* Action Buttons */}
            {project.github && (
              <div className="flex gap-4">
                <Button className="gradient-tech text-white glow-primary" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
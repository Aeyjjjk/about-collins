
export const heroData = {
  name: "Echezonachi Collins", 
  title: "Engineer & Developer", 
  tagline: "I was born to be an engineer.", 
  profileImage: "/images/profile.jpg", 
  // heroBackgroundImage: "/images/hero-bg.jpg",
  skills: [
    "Embedded Systems",
    "Automation",
    "Flutter Dart",
    "Hardware Engineering",
    "PLC & HMI",
    "IoT",
    // "Robotics",
    "Cybersecurity",
    // "Kali Linux",
  ],
  socialLinks: {
    whatsapp: "https://wa.me/2347051264684", 
    linkedin: "https://www.linkedin.com/in/echezonachi-u-568069293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  cvLink: "/images/gallery/EchezonachiCollins_cv.pdf",
};

// ===========================================
// PROJECTS SECTIONS
// ===========================================
export const projectsData = [
  {
    id: "gas-robot",
    title: "Gas Detecting Robot",
    description: "Autonomous robot for detecting and monitoring hazardous gas levels in industrial environments.",
    tech: ["Arduino", "Gas Sensors", "Buzzer", "C++"],
    video: "/video/robotVideo.mp4", 
    isVideoPreview: true,
    // image: "/images/project-more/robot-FV.jpg",
  },
  {
    id: "water-level-detector",
    title: "Water Level Detecting System",
    description: "A system that detects the depth of water and sends output signals or notification the owner.",
    tech: ["Arduino Uno", "Level Detector", "Buzzer"],
    image: "images/projects/waterLevel.jpeg",
  },
  {
    id: "flutter-apps",
    title: "Flutter Mobile Apps",
    description: "Cross-platform mobile applications with modern UI/UX and real-time data sync.",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    image: "/images/project-more/flutter-app.jpg",
  },
  // {
  //   id: "drone-design",
  //   title: "Drone Design Project",
  //   description: "Custom quadcopter with advanced flight control, GPS navigation, and payload capabilities.",
  //   tech: ["Flight Controller", "IMU", "GPS", "Telemetry"],
  //   image: "/placeholder.svg", // TODO: Replace with "/images/projects/drone.jpg"
  // },
  // {
  //   id: "plc-systems",
  //   title: "PLC & HMI Systems",
  //   description: "Industrial automation control systems with intuitive HMI interfaces for process monitoring.",
  //   tech: ["PLC", "Ladder Logic", "HMI", "FactoryTalk"],
  //   image: "/images/gallery/hmi1.PNG", // TODO: Replace with "/images/projects/plc-systems.jpg"
  // },
  // {
  //   id: "java-apps",
  //   title: "Java Applications",
  //   description: "Enterprise-grade Java applications with robust backend systems and database integration.",
  //   tech: ["Java", "Spring", "MySQL", "REST APIs"],
  //   image: "/placeholder.svg", // TODO: Replace with "/images/projects/java-apps.jpg"
  // },
];

// ===========================================
// GALLERY SECTION
// ===========================================
export const galleryData = [
  {
    title: "Graphics  ",
    category: "Design",
    description: "Graphics Designed for some clients",
    image: "/images/gallery/graphic1.jpg",
    size: "large" as const,
    tools: ["Canva", "PhotoShop", "Pixellab",],
  },
  {
    title: "Real Estate",
    category: "Design",
    description: "Real Estate Website",
    image: "/images/gallery/realestate.png", 
    size: "small" as const,
    tools: ["React", "Vercel", "Vscode"],
  },
  {
    title: "Graphics",
    category: "Design",
    description: "More Designs",
    image: "/images/gallery/graphic2.jpg",
    size: "medium" as const,
    tools: ["Canva", "PhotoShop", "Pixellab"],
  },
  {
    title: "ToolBox",
    category: "Design",
    description: "Live Toolbox Talk",
    image: "/images/gallery/toolbox.png",
    size: "small" as const,
    tools: ["nativeR", "supabase", "vercel", "js"],
  },
  // {
  //   title: "HMI",
  //   category: "Industrial",
  //   description: "HMI screen for the Production Separator of a Project",
  //   image: "/images/gallery/hmi1.PNG", 
  //   size: "large" as const,
  //   tools: ["VM", "FactoryTalk"],
  // },
  {
    title: "Home Service",
    category: "Design",
    description: "Home Service Website",
    image: "/images/gallery/homefix.png",
    size: "medium" as const,
    tools: ["React", "node", "Python", "vercel"],
  },
  // {
  //   title: "Motor Control PCB",
  //   category: "Hardware",
  //   description: "Custom motor driver board",
  //   image: "/placeholder.svg",
  //   tools: ["Altium", "BLDC", "Gate Drivers", "EMC"],
  // },
  {
    title: "Inventory",
    category: "Design",
    description: "Tyre Management",
    image: "/images/gallery/management.png",
    size: "large" as const,
    tools: ["html", "Python", "js", "node"],
  },
  {
    title: "Robotic Arm Control",
    category: "Robotics",
    description: "6-axis robotic manipulator",
    image: "/images/gallery/graphic.jpg",
    size: "medium" as const,
    tools: ["ROS", "Inverse Kinematics", "Servo Motors"],
  },
];

// ===========================================
// TESTIMONIALS SECTION
// ===========================================
export type Platform = "linkedin" | "whatsapp" | "twitter" | "instagram" | "facebook" | "github";

export const testimonialsData = [
  {
  id: 1,
  name: "Femi Adeyemi",
  // role: "Operations Manager, Lagos Manufacturing Ltd",
  quote: "Working with him on our industrial automation upgrade completely transformed our production efficiency. The PLC integration was seamless and delivered ahead of schedule.",
  rating: 5,
  image: "/images/testimonials/client1.jpg",
  platform: "linkedin" as Platform,
},
{
  id: 2,
  name: "Chinonso Okafor",
  // role: "Founder, SmartAgro Solutions",
  quote: "The IoT monitoring system he developed for our farms gave us real-time insights that reduced losses significantly. Professional, reliable, and technically outstanding.",
  rating: 5,
  image: "/images/testimonials/client2.jpg",
  platform: "whatsapp" as Platform,
},
{
  id: 3,
  name: "Michael Thompson",
  // role: "CTO, NexaTech Systems (USA)",
  quote: "His embedded systems expertise is exceptional. The firmware optimization he delivered improved our device performance by over 30%. Highly recommended.",
  rating: 3,
  image: "/images/testimonials/client3.jpg",
  platform: "whatsapp" as Platform,
},
{
  id: 4,
  name: "Jessica Martinez",
  // role: "Product Manager, VoltEdge Technologies (USA)",
  quote: "From PCB design to deployment, the execution was flawless. Communication was clear throughout the project, and the final product exceeded expectations.",
  rating: 4,
  image: "/images/testimonials/client4.jpg",
  platform: "instagram" as Platform,
},
{
  id: 5,
  name: "Ibrahim Musa",
  // role: "Technical Director, Abuja Automation Services",
  quote: "Our robotics control system now runs with precision and stability thanks to his deep technical knowledge. A true professional in industrial automation.",
  rating: 5,
  image: "/images/testimonials/client5.jpg",
  platform: "facebook" as Platform,
},
{
  id: 6,
  name: "Daniel Brooks",
  // role: "Lead Software Engineer, SecureWave Labs (USA)",
  quote: "His cybersecurity implementation strengthened our embedded infrastructure and eliminated critical vulnerabilities. Excellent problem solver and team collaborator.",
  rating: 4,
  image: "/images/testimonials/client6.jpg",
  platform: "github" as Platform,
},
];

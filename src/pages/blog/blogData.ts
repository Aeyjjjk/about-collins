// pages/blog/blogData.ts

export type BlogPostType = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    fullContent: string[];
  };
  
  export const blogPosts: BlogPostType[] = [
    {
      slug: "iot-basics",
      title: "Getting Started with IoT: From Curiosity to First Working Device",
      excerpt:
        "IoT can feel overwhelming at first. This guide breaks it down into simple, practical steps that actually work.",
      category: "IoT",
      date: "March 15, 2024",
      readTime: "7 min read",
      fullContent: [
        "Most people hear about IoT and immediately think it is complicated or expensive. In reality, IoT simply means connecting a physical device to the internet so it can send or receive data.",
        "Every IoT system is built on three core components: sensors that collect data, a controller that processes it, and a network that transfers it to another system.",
        "Choosing the right microcontroller is critical. Boards like ESP8266 and ESP32 are popular because they include Wi-Fi and are beginner-friendly.",
        "Communication protocols such as HTTP and MQTT allow devices to exchange data reliably, even on unstable networks.",
        "Cloud services help store and visualize data, but beginners should focus on building something that works locally first.",
        "Security should never be ignored. Simple steps like encrypted communication and secure credentials make a huge difference.",
        "Once you build your first working IoT project, you realize it’s not magic — just solid engineering applied step by step."
      ],
    },
  
    {
      slug: "plc-best-practices",
      title: "PLC Programming Best Practices That Save Time and Prevent Headaches",
      excerpt:
        "PLC code isn’t just about logic — it’s about writing programs that people can understand and trust.",
      category: "Automation",
      date: "April 10, 2025",
      readTime: "6 min read",
      fullContent: [
        "PLC programming often starts simple but quickly becomes complex if structure is ignored.",
        "Good PLC code should be readable by someone who didn’t write it.",
        "Clear naming conventions make troubleshooting faster and reduce mistakes.",
        "Breaking logic into small, reusable blocks improves reliability.",
        "Safety logic must always be clear, predictable, and isolated from normal control logic.",
        "Testing and simulation help catch issues before real machines are involved.",
        "Well-structured PLC programs reduce downtime and improve operator confidence."
      ],
    },
  
    {
      slug: "embedded-security",
      title: "Embedded Systems Security: Why Small Devices Are Big Targets",
      excerpt:
        "Even simple embedded devices can be vulnerable. Understanding security early saves serious problems later.",
      category: "Security",
      date: "March 5, 2024",
      readTime: "10 min read",
      fullContent: [
        "Embedded systems are no longer isolated — most are now connected to networks.",
        "This connectivity makes them powerful, but also vulnerable to attacks.",
        "Many security issues come from unsecured firmware and unencrypted communication.",
        "Secure boot ensures that only trusted firmware runs on a device.",
        "Encryption protects data as it moves between devices and servers.",
        "Regular updates allow vulnerabilities to be fixed after deployment.",
        "Good security is about consistency, not perfection."
      ],
    },
  
    {
      slug: "robotics-basics",
      title: "Building Robots: Turning an Idea Into a Moving Machine",
      excerpt:
        "Robotics isn’t magic — it’s a series of practical engineering decisions.",
      category: "Robotics",
      date: "February 28, 2023",
      readTime: "12 min read",
      fullContent: [
        "Every robot starts with a clear purpose.",
        "Defining what the robot should do prevents unnecessary complexity.",
        "Mechanical design directly affects stability and performance.",
        "Sensors give robots awareness, while actuators provide movement.",
        "Control algorithms convert sensor data into actions.",
        "Testing is continuous throughout development.",
        "Robotics rewards patience, iteration, and problem-solving."
      ],
    },
  
    // {
    //   slug: "flutter-industrial",
    //   title: "Using Flutter for Industrial Applications: Beyond Just Mobile UI",
    //   excerpt:
    //     "Flutter can be a powerful tool for monitoring and controlling real systems.",
    //   category: "Development",
    //   date: "February 20, 2024",
    //   readTime: "7 min read",
    //   fullContent: [
    //     "Industrial applications prioritize reliability over visual effects.",
    //     "Flutter allows one codebase to serve multiple platforms.",
    //     "Real-time data visualization improves operator awareness.",
    //     "Offline support is essential in unstable network environments.",
    //     "Security and authentication protect control systems.",
    //     "Good UI design improves safety and efficiency.",
    //     "Industrial apps should assist users, not overwhelm them."
    //   ],
    // },
  
    {
      slug: "safety-systems",
      title: "Safety Systems in Engineering: Designing for People, Not Just Machines",
      excerpt:
        "Good engineering is about protecting people, equipment, and environments.",
      category: "Safety",
      date: "February 15, 2024",
      readTime: "9 min read",
      fullContent: [
        "Engineering decisions affect real human lives.",
        "Risk assessment helps identify potential hazards.",
        "Safety systems must be simple and reliable.",
        "Emergency responses should be fast and obvious.",
        "Training is as important as hardware protections.",
        "Strong safety culture reduces accidents.",
        "Good engineers design systems expecting failure."
      ],
    },
  ];
  
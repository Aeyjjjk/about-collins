import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

type AnimatedMap = Record<string, number>;

export const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.25 });

  const [animatedValues, setAnimatedValues] = useState<AnimatedMap>({});
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const skillCategories = [
    {
      category: "Automation & Control",
      gradient: "from-primary/30 via-primary/10 to-transparent",
      sound: "/sounds/automation.mp3",
      skills: [
        { name: "PLC Programming", level: 75 },
        { name: "HMI Development", level: 80 },
      ],
    },
    {
      category: "Hardware Engineering",
      gradient: "from-secondary/30 via-secondary/10 to-transparent",
      sound: "/sounds/hardware.mp3",
      skills: [
        { name: "Embedded Systems", level: 80 },
        { name: "Microcontroller Programming", level: 70 },
        { name: "Sensors & Actuators", level: 75 },
        { name: "P&ID Interpretation", level: 85 },
        { name: "Motor Control", level: 50 },
      ],
    },
    {
      category: "Robotics & IoT",
      gradient: "from-primary/30 via-secondary/10 to-transparent",
      sound: "/sounds/robotics.mp3",
      skills: [
        { name: "Autonomous Robotics", level: 90 },
        { name: "Navigation & Obstacle Avoidance", level: 87 },
        { name: "Arduino IoT Systems", level: 80 },
        { name: "MQTT Protocol", level: 50 },
        { name: "Remote Robotics", level: 70 },
      ],
    },
    {
      category: "Software Development",
      gradient: "from-secondary/30 via-primary/10 to-transparent",
      sound: "/sounds/software.mp3",
      skills: [
        { name: "Flutter & Dart", level: 70 },
        { name: "Mobile & Web Apps", level: 75 },
      ],
    },
    {
      category: "Cybersecurity",
      gradient: "from-primary/20 via-secondary/20 to-transparent",
      sound: "/sounds/cyber.mp3",
      skills: [
        { name: "Kali Linux", level: 80 },
        { name: "Network Security", level: 78 },
        { name: "Penetration Testing", level: 75 },
      ],
    },
  ];

  /* -------------------- Animation Engine -------------------- */
  const animateSkills = (categoryIndex?: number) => {
    const categories =
      categoryIndex !== undefined
        ? [skillCategories[categoryIndex]]
        : skillCategories;

    categories.forEach((category, catIndex) => {
      category.skills.forEach((skill, skillIndex) => {
        const key = `${catIndex}-${skillIndex}`;
        let value = 0;
        const step = skill.level / 40;

        const interval = setInterval(() => {
          value += step;
          if (value >= skill.level) {
            value = skill.level;
            clearInterval(interval);
          }
          setAnimatedValues((prev) => ({
            ...prev,
            [key]: Math.round(value),
          }));
        }, 20);
      });
    });
  };

  /* -------------------- Sound -------------------- */
  const playSound = (src: string) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    const audio = new Audio(src);
    audio.volume = 0.3;
    audio.play().catch(() => {});
    setCurrentAudio(audio);
  };

  useEffect(() => {
    if (isVisible) animateSkills();
  }, [isVisible]);

  useEffect(() => {
    return () => {
      currentAudio?.pause();
    };
  }, [currentAudio]);

  /* -------------------- Render -------------------- */
  return (
    <section
      id="skills"
      ref={ref}
      className="py-28 bg-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* HEADER */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on engineering experience across automation, hardware,
            robotics, software, and cybersecurity.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <Card
              key={catIndex}
              onClick={() => {
                setActiveCard(catIndex);
                animateSkills(catIndex);
                playSound(category.sound);
              }}
              className={`
                relative overflow-hidden cursor-pointer
                rounded-2xl p-6
                backdrop-blur-xl bg-background/60
                border border-border/40
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl
                ${activeCard === catIndex ? "ring-2 ring-primary/40" : ""}
              `}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-60`}
              />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-gradient">
                  {category.category}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const key = `${catIndex}-${skillIndex}`;
                    const value = animatedValues[key] || 0;

                    return (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                          <span>{skill.name}</span>
                          <span className="text-primary font-semibold">
                            {value}%
                          </span>
                        </div>

                        <div className="h-2.5 rounded-full bg-muted/60 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${value}%`,
                              background:
                                "linear-gradient(90deg, hsl(190 80% 55%), hsl(220 85% 65%))",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { projectsData } from "@/data/portfolio-data";

export const Projects = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 400000, stopOnInteraction: false })]
  );

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of engineering and software development projects spanning multiple domains
            </p>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <Card
                    className="overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-transparent hover:border-primary/30 group h-full"
                  >
                   <div className="h-48 relative overflow-hidden">
  {index === 0 ? (
    <video
      src="/video/robotVideo.mp4"
      muted
      loop
      autoPlay
      playsInline
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  ) : (
    <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
  )}

  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent pointer-events-none"></div>
</div>

                    <CardHeader>
                      <CardTitle className="group-hover:text-gradient transition-all">{project.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                        onClick={() => navigate(`/project/${project.id}`)}
                      >
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          
          <div className="flex justify-center items-center gap-3 mt-8">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/30"
                    : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

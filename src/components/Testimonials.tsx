import { useState } from "react";
import { Star, MessageSquareQuote, ChevronDown, Linkedin, Twitter, MessageCircle, Instagram, Facebook, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData, Platform } from "@/data/portfolio-data";

const platformConfig: Record<Platform, { icon: React.ElementType; label: string; color: string }> = {
  linkedin: { icon: Linkedin, label: "LinkedIn", color: "bg-[#0077B5]/10 text-[#0077B5] border-[#0077B5]/20" },
  whatsapp: { icon: MessageCircle, label: "WhatsApp", color: "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20" },
  twitter: { icon: Twitter, label: "Twitter", color: "bg-[#1DA1F2]/10 text-[#1DA1F2] border-[#1DA1F2]/20" },
  instagram: { icon: Instagram, label: "Instagram", color: "bg-[#E4405F]/10 text-[#E4405F] border-[#E4405F]/20" },
  facebook: { icon: Facebook, label: "Facebook", color: "bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/20" },
  github: { icon: Github, label: "GitHub", color: "bg-foreground/10 text-foreground border-foreground/20" },
};

export const Testimonials = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              Client Testimonials
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              What clients said about working with me
            </p>

            {/* Animated Toggle Button */}
            <div className="relative inline-block">
              {/* Animated border ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: isExpanded 
                    ? "0 0 0 2px hsl(var(--primary)/0.3)"
                    : [
                        "0 0 0 2px hsl(var(--primary)/0.2)",
                        "0 0 0 8px hsl(var(--primary)/0.1)",
                        "0 0 0 2px hsl(var(--primary)/0.2)",
                      ],
                }}
                transition={{
                  duration: 2,
                  repeat: isExpanded ? 0 : Infinity,
                  ease: "easeInOut",
                }}
              />
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                variant="outline"
                size="lg"
                className="relative z-10 gap-2 px-6 py-3 rounded-full border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <MessageSquareQuote className="w-5 h-5" />
                <span>{isExpanded ? "Hide Testimonials" : "View Client Testimonials"}</span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </Button>
            </div>
          </div>

          {/* Expandable Testimonials Grid */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
                >
                  {testimonialsData.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-1 border border-transparent hover:border-primary/20">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                              />
                              <div>
                                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>

                          {/* Platform Badge */}
                          {(() => {
                            const config = platformConfig[testimonial.platform];
                            const PlatformIcon = config.icon;
                            return (
                              <Badge 
                                variant="outline" 
                                className={`mb-4 gap-1.5 ${config.color}`}
                              >
                                <PlatformIcon className="w-3.5 h-3.5" />
                                <span className="text-xs">Met via {config.label}</span>
                              </Badge>
                            );
                          })()}

                          <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted'}`}
                              />
                            ))}
                          </div>

                          <p className="text-muted-foreground italic leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

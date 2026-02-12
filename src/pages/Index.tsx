import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Certifications } from "@/components/Certifications";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AnimatedSection animation="fade-up">
        <About />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Skills />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={200}>
        <Projects />
      </AnimatedSection>
      <AnimatedSection animation="fade-left">
        <Services />
      </AnimatedSection>
      <AnimatedSection animation="fade-right">
        <Certifications />
      </AnimatedSection>
      <AnimatedSection animation="scale">
        <Gallery />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Blog />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={200}>
        <Contact />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;

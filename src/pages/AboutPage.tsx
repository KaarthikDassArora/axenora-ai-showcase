import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Lightbulb } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To democratize AI-powered business automation, making enterprise-grade technology accessible to businesses of all sizes.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "A world where every business operates at peak efficiency through intelligent automation, allowing humans to focus on creativity and growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of AI technology, continuously evolving our solutions to deliver cutting-edge capabilities to our clients.",
  },
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${aboutHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Building the Future of{" "}
              <span className="gradient-text">AI-Driven Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              We're on a mission to transform how businesses operate through intelligent automation and AI-powered systems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="glass rounded-2xl p-8">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-surface-1">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Axenora AI was born from a simple observation: businesses of all sizes struggle to keep up with customer demands while managing growth. Traditional solutions were either too expensive or too complex.
                </p>
                <p>
                  We set out to change that. By combining cutting-edge AI technology with practical business automation, we've created solutions that work for startups, local businesses, and growing enterprises alike.
                </p>
                <p>
                  Today, Axenora AI powers hundreds of businesses, helping them automate customer engagement, streamline operations, and scale their growth — all without the complexity and cost of traditional enterprise solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden glass glow-primary">
                <img 
                  src={heroBg} 
                  alt="Axenora AI Team"
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Leadership
              </h2>
            </div>
            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl font-display font-bold text-primary-foreground">K</span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-display text-2xl font-bold mb-2">Kaarthik Arora</h3>
                  <p className="text-primary mb-4">Founder & CEO</p>
                  <p className="text-muted-foreground">
                    Kaarthik Arora is a technology-driven entrepreneur focused on building AI-powered business systems. 
                    With a passion for automation and a vision for accessible AI technology, he founded Axenora AI to help 
                    businesses of all sizes leverage the power of artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-1">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Join the AI Revolution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can transform your business with AI.
            </p>
            <Button variant="glow" size="xl" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

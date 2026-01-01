import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Palette, Rocket, TrendingUp } from "lucide-react";
import howItWorksHero from "@/assets/how-it-works-hero.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const steps = [
  {
    number: "01",
    title: "Understand Your Business",
    description: "We start with a deep dive into your business — your workflows, customer journey, pain points, and growth goals. This ensures we design an AI system that fits your unique needs.",
    icon: Search,
    image: heroBg,
  },
  {
    number: "02",
    title: "Design Your AI System",
    description: "Our team architects a custom AI solution tailored specifically to your business. We map out every automation, integration, and touchpoint to ensure seamless operation.",
    icon: Palette,
    image: heroBg,
  },
  {
    number: "03",
    title: "Deploy & Automate",
    description: "We implement the AI systems and integrate them with your existing tools. Training, testing, and refinement ensure everything works perfectly before going live.",
    icon: Rocket,
    image: heroBg,
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description: "Post-launch, we continuously monitor performance, gather insights, and optimize your AI systems. As your business grows, your AI grows with you.",
    icon: TrendingUp,
    image: heroBg,
  },
];

const HowItWorksPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${howItWorksHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              How <span className="gradient-text">Axenora AI</span> Works
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              A proven process to transform your business with intelligent AI systems — from discovery to deployment and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-display font-bold text-primary/20">{step.number}</span>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{step.title}</h2>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="rounded-2xl overflow-hidden glass glow-primary">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-auto aspect-video object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-1">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can transform your business with AI.
            </p>
            <Button variant="glow" size="xl" asChild>
              <Link to="/contact">
                Book Your Free Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;

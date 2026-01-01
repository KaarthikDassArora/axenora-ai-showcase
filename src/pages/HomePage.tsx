import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Bot, Phone, MessageSquare, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import websiteMockup from "@/assets/website-mockup.jpg";
import adsDashboard from "@/assets/ads-dashboard.jpg";
import whatsappMockup from "@/assets/whatsapp-mockup.jpg";
import chatbotMockup from "@/assets/chatbot-mockup.jpg";
import callingAgent from "@/assets/calling-agent.jpg";

const solutions = [
  {
    title: "AI Website Development",
    description: "Websites that work as 24/7 sales systems with built-in chatbots and conversion optimization.",
    icon: Globe,
    image: websiteMockup,
    href: "/solutions/website-development",
  },
  {
    title: "AI Ads & Marketing",
    description: "Automated ad campaigns that learn, optimize, and scale your marketing ROI.",
    icon: Zap,
    image: adsDashboard,
    href: "/solutions/ads-marketing",
  },
  {
    title: "WhatsApp Automation",
    description: "Turn WhatsApp into your best salesperson with instant replies and follow-ups.",
    icon: MessageSquare,
    image: whatsappMockup,
    href: "/solutions/whatsapp-automation",
  },
  {
    title: "AI Chatbots",
    description: "Intelligent chatbots that qualify leads, answer questions, and book appointments.",
    icon: Bot,
    image: chatbotMockup,
    href: "/solutions/chatbots",
  },
  {
    title: "AI Calling Agents",
    description: "Voice AI that handles calls, books appointments, and never misses a lead.",
    icon: Phone,
    image: callingAgent,
    href: "/solutions/calling-agents",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand Your Business",
    description: "We analyze your workflows, customer journey, and growth goals to design the perfect AI system.",
  },
  {
    number: "02",
    title: "Design Your AI System",
    description: "Our team architects a custom solution tailored to your specific business needs.",
  },
  {
    number: "03",
    title: "Deploy & Automate",
    description: "We implement and integrate the AI systems seamlessly into your existing operations.",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description: "Continuous monitoring and optimization to ensure maximum ROI and business growth.",
  },
];

const benefits = [
  { title: "24/7 Automation", description: "Your business runs even when you sleep" },
  { title: "Instant Response", description: "Never miss a lead with real-time engagement" },
  { title: "Scalable Growth", description: "Systems that grow with your business" },
  { title: "Data-Driven", description: "AI that learns and improves continuously" },
];

const trustedLogos = ["TechCorp", "GrowthCo", "InnovateLab", "ScaleUp", "FutureWorks", "NextGen"];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Powering the future of business automation</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              AI Systems That{" "}
              <span className="gradient-text">Build, Run & Scale</span>{" "}
              Businesses
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Axenora AI installs intelligent systems that automate customer engagement, 
              follow-ups, and business growth — so you can focus on what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 border-y border-border bg-surface-1/50">
        <div className="container-wide">
          <p className="text-center text-muted-foreground mb-8">Trusted by modern businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustedLogos.map((logo) => (
              <div key={logo} className="text-xl font-display font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              What <span className="gradient-text">Axenora AI</span> Does
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We build AI-powered business systems that automate, engage, and scale your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={solution.title}
                to={solution.href}
                className="group relative overflow-hidden rounded-2xl glass hover:border-primary/50 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <solution.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-surface-1">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A simple, systematic approach to transforming your business with AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-display font-bold text-primary/10 mb-4">
                  {step.number}
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">Axenora AI</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We don't just build tools — we build systems that transform how your business operates.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass glow-primary">
                <img 
                  src={heroBg} 
                  alt="AI Technology" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let's discuss how AI can automate your operations and accelerate your growth.
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

export default HomePage;

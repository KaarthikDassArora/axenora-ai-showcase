import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Bot, Phone, MessageSquare, Globe } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations/AnimatedSection";
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-primary/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Powering the future of business automation</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              AI Systems That{" "}
              <span className="gradient-text text-glow">Build, Run & Scale</span>{" "}
              Businesses
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Axenora AI installs intelligent systems that automate customer engagement, 
              follow-ups, and business growth — so you can focus on what matters most.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Book Demo
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/solutions">Explore Solutions</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          >
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Trusted By */}
      <AnimatedSection>
        <section className="py-16 border-y border-border bg-surface-1/50">
          <div className="container-wide">
            <p className="text-center text-muted-foreground mb-8">Trusted by modern businesses</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {trustedLogos.map((logo, index) => (
                <motion.div 
                  key={logo}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl font-display font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* What We Do */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              What <span className="gradient-text">Axenora AI</span> Does
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We build AI-powered business systems that automate, engage, and scale your operations.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <StaggerItem key={solution.title}>
                <Link
                  to={solution.href}
                  className="group relative overflow-hidden rounded-2xl glass hover:border-primary/50 transition-all duration-500 block h-full"
                >
                  <div className="aspect-video overflow-hidden">
                    <motion.img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"
                      >
                        <solution.icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-surface-1">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A simple, systematic approach to transforming your business with AI.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.15}>
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-6xl font-display font-bold text-primary/10 mb-4"
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="font-display font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">Axenora AI</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We don't just build tools — we build systems that transform how your business operates.
              </p>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <StaggerItem key={benefit.title}>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="h-2 w-2 rounded-full bg-primary" 
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
            <ScaleIn>
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square rounded-2xl overflow-hidden glass glow-primary"
                >
                  <img 
                    src={heroBg} 
                    alt="AI Technology" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </ScaleIn>
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
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let's discuss how AI can automate your operations and accelerate your growth.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="glow" size="xl" asChild>
                <Link to="/contact">
                  Book Your Free Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

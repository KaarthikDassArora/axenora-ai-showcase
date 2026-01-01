import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Bot, Users, Globe2, Database } from "lucide-react";
import chatbotMockup from "@/assets/chatbot-mockup.jpg";

const features = [
  {
    icon: Users,
    title: "Lead Qualification",
    description: "Automatically qualify leads with intelligent questions and route them to the right team.",
  },
  {
    icon: Globe2,
    title: "Multi-Language Support",
    description: "Engage customers in their preferred language with automatic translation.",
  },
  {
    icon: Database,
    title: "CRM Integration",
    description: "Seamlessly sync conversations and lead data with your existing CRM.",
  },
  {
    icon: Bot,
    title: "Natural Conversations",
    description: "AI-powered responses that feel human and build trust with customers.",
  },
];

const benefits = [
  "24/7 customer support",
  "Instant lead capture",
  "Reduced support costs",
  "Appointment booking",
  "FAQ automation",
  "Custom workflows",
];

const ChatbotsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-surface-1">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Bot className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">AI Chatbots</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
                Chatbots That Don't Just Talk —{" "}
                <span className="gradient-text">They Convert</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Deploy intelligent chatbots that qualify leads, answer questions, and book appointments — all while sounding remarkably human.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden glass glow-primary">
                <img 
                  src={chatbotMockup} 
                  alt="AI Chatbot Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Intelligent Chatbot Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              More than just automated responses — our chatbots understand context and drive results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="glass rounded-2xl p-8">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface-1">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden glass">
                <img 
                  src={chatbotMockup} 
                  alt="Chatbot Features"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Why Choose AI Chatbots?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Deploy Your AI Chatbot?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Start converting visitors into customers with intelligent conversations.
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

export default ChatbotsPage;

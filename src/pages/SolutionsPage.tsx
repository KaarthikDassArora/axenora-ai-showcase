import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, MessageSquare, Bot, Phone } from "lucide-react";
import solutionsHero from "@/assets/solutions-hero.jpg";
import websiteMockup from "@/assets/website-mockup.jpg";
import adsDashboard from "@/assets/ads-dashboard.jpg";
import whatsappMockup from "@/assets/whatsapp-mockup.jpg";
import chatbotMockup from "@/assets/chatbot-mockup.jpg";
import callingAgent from "@/assets/calling-agent.jpg";

const solutions = [
  {
    title: "AI Website Development",
    description: "Websites that work as 24/7 sales systems with built-in chatbots, conversion optimization, and AI-generated copy that converts.",
    icon: Globe,
    image: websiteMockup,
    href: "/solutions/website-development",
    features: ["AI-Generated Copy", "Conversion-Focused Design", "Built-in Chatbot"],
  },
  {
    title: "AI Ads & Marketing Automation",
    description: "Automated ad campaigns that learn from data, optimize budgets, and scale your marketing ROI without manual intervention.",
    icon: Zap,
    image: adsDashboard,
    href: "/solutions/ads-marketing",
    features: ["Smart Budget Optimization", "Creative A/B Testing", "Performance Analytics"],
  },
  {
    title: "WhatsApp Automation",
    description: "Transform WhatsApp into your best salesperson with instant replies, automated follow-ups, and seamless customer engagement.",
    icon: MessageSquare,
    image: whatsappMockup,
    href: "/solutions/whatsapp-automation",
    features: ["Instant Replies", "Automated Follow-ups", "Payment Reminders"],
  },
  {
    title: "AI Chatbots",
    description: "Intelligent chatbots that qualify leads, provide support in multiple languages, and integrate seamlessly with your CRM.",
    icon: Bot,
    image: chatbotMockup,
    href: "/solutions/chatbots",
    features: ["Lead Qualification", "Multi-Language Support", "CRM Integration"],
  },
  {
    title: "AI Calling Agents",
    description: "Voice AI agents that handle inbound and outbound calls, book appointments, and sound remarkably human.",
    icon: Phone,
    image: callingAgent,
    href: "/solutions/calling-agents",
    features: ["Natural Conversations", "Appointment Booking", "Objection Handling"],
  },
];

const SolutionsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${solutionsHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              AI Solutions Designed to{" "}
              <span className="gradient-text">Run Your Business</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              From customer engagement to sales automation, our AI solutions handle the heavy lifting so you can focus on growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div 
                key={solution.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold">{solution.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">{solution.description}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {solution.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-4 py-2 rounded-full glass text-sm text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="hero" asChild>
                    <Link to={solution.href}>
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="rounded-2xl overflow-hidden glass glow-primary">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-auto"
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
              Not Sure Which Solution Fits Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your needs and design a custom AI system for your business.
            </p>
            <Button variant="glow" size="xl" asChild>
              <Link to="/contact">
                Book a Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap, Target, Layout, MessageSquare } from "lucide-react";
import websiteMockup from "@/assets/website-mockup.jpg";

const features = [
  {
    icon: Zap,
    title: "AI-Generated Copy",
    description: "Compelling headlines and content that converts, powered by advanced AI that understands your audience.",
  },
  {
    icon: Target,
    title: "Conversion-Focused Layouts",
    description: "Every element strategically placed to guide visitors toward action and maximize conversions.",
  },
  {
    icon: Layout,
    title: "Responsive Design",
    description: "Flawless experience across all devices — desktop, tablet, and mobile.",
  },
  {
    icon: MessageSquare,
    title: "Built-in Chatbot & WhatsApp",
    description: "Engage visitors instantly with integrated AI chat and WhatsApp support.",
  },
];

const benefits = [
  "24/7 lead capture and qualification",
  "Automated appointment booking",
  "Real-time visitor analytics",
  "SEO-optimized pages",
  "Fast loading speeds",
  "Integrated CRM sync",
];

const WebsiteDevelopmentPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-surface-1">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Layout className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">AI Website Development</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
                Websites That Work Like{" "}
                <span className="gradient-text">Sales Systems</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Stop losing leads to outdated websites. Our AI-powered websites work around the clock to engage visitors, qualify leads, and book appointments.
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
                  src={websiteMockup} 
                  alt="AI Website Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              The Problem with Traditional Websites
            </h2>
            <p className="text-muted-foreground text-lg">
              Most business websites are digital brochures that sit idle while potential customers slip away. 
              They lack engagement, automation, and the ability to convert visitors into paying customers.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-surface-1">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              The Axenora AI Approach
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We build websites that actively work for your business — engaging, converting, and growing your customer base.
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
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden glass">
                <img 
                  src={websiteMockup} 
                  alt="Website Features"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Everything You Need to Convert Visitors
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
      <section className="section-padding bg-surface-1">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready for a Website That Actually Works?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's build a website that turns visitors into customers, 24/7.
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

export default WebsiteDevelopmentPage;

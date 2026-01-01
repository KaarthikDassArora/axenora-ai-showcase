import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MessageSquare, Clock, Bell, CreditCard } from "lucide-react";
import whatsappMockup from "@/assets/whatsapp-mockup.jpg";

const features = [
  {
    icon: Clock,
    title: "Instant Replies",
    description: "Respond to customer inquiries within seconds, 24/7, without human intervention.",
  },
  {
    icon: Bell,
    title: "Automated Follow-ups",
    description: "Never lose a lead with intelligent follow-up sequences that nurture prospects.",
  },
  {
    icon: CreditCard,
    title: "Payment Reminders",
    description: "Automated payment and appointment reminders to reduce no-shows and late payments.",
  },
  {
    icon: MessageSquare,
    title: "Customer Reactivation",
    description: "Re-engage dormant customers with personalized messages and offers.",
  },
];

const benefits = [
  "24/7 customer engagement",
  "Reduced response time",
  "Higher conversion rates",
  "Automated booking",
  "Broadcast messaging",
  "CRM integration",
];

const WhatsAppAutomationPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-surface-1">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">WhatsApp Automation</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
                Turn WhatsApp Into Your{" "}
                <span className="gradient-text">Best Salesperson</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Automate customer conversations, follow-ups, and engagement on the platform your customers already use and love.
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
                  src={whatsappMockup} 
                  alt="WhatsApp Automation Interface"
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
              Powerful WhatsApp Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to turn WhatsApp into a powerful sales and support channel.
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
            <div className="relative lg:order-2">
              <div className="rounded-2xl overflow-hidden glass">
                <img 
                  src={whatsappMockup} 
                  alt="WhatsApp Features"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Why Automate WhatsApp?
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
              Ready to Automate Your WhatsApp?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Start engaging customers automatically on their favorite platform.
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

export default WhatsAppAutomationPage;

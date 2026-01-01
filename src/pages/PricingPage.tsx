import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, HelpCircle } from "lucide-react";
import pricingHero from "@/assets/pricing-hero.jpg";

const plans = [
  {
    name: "Starter",
    price: "₹14,999",
    period: "/month",
    description: "Perfect for small businesses getting started with AI automation.",
    features: [
      "1 AI Solution",
      "Basic Chatbot",
      "WhatsApp Integration",
      "Email Support",
      "Monthly Reports",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹29,999",
    period: "/month",
    description: "Ideal for growing businesses ready to scale their automation.",
    features: [
      "3 AI Solutions",
      "Advanced Chatbot",
      "WhatsApp + Voice",
      "Priority Support",
      "Weekly Reports",
      "CRM Integration",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "₹59,999",
    period: "/month",
    description: "For established businesses needing comprehensive AI systems.",
    features: [
      "All AI Solutions",
      "Custom Chatbots",
      "Full Voice AI",
      "24/7 Support",
      "Real-time Analytics",
      "Custom Integrations",
      "Dedicated Manager",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs.",
    features: [
      "Unlimited Solutions",
      "Custom Development",
      "White-label Options",
      "SLA Guarantee",
      "On-site Training",
      "Custom Security",
      "API Access",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Most AI systems are deployed within 2-4 weeks, depending on complexity and integrations required.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "We offer a free demo and consultation to understand your needs. Contact us to schedule yours.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include email support. Growth and above include priority support, and Scale plans include 24/7 dedicated support.",
  },
];

const PricingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${pricingHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Simple, Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Choose the plan that fits your business. Scale up as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? "glass-strong border-2 border-primary glow-primary" 
                    : "glass"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display font-semibold text-xl mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface-1">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="glass rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss which plan is right for your business.
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

export default PricingPage;

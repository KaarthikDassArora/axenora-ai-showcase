import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, TrendingUp, Target, BarChart3, RefreshCw } from "lucide-react";
import adsDashboard from "@/assets/ads-dashboard.jpg";

const features = [
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description: "AI identifies and targets your ideal customers across platforms with precision.",
  },
  {
    icon: RefreshCw,
    title: "Automated Creative Testing",
    description: "Continuously tests ad variations to find the highest-performing creatives.",
  },
  {
    icon: TrendingUp,
    title: "Budget Optimization",
    description: "Automatically reallocates budget to best-performing campaigns in real-time.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Deep insights into campaign performance with actionable recommendations.",
  },
];

const benefits = [
  "Reduced cost per acquisition",
  "Higher ROAS",
  "Automated A/B testing",
  "Cross-platform campaigns",
  "Real-time optimization",
  "Detailed reporting",
];

const AdsMarketingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-surface-1">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">AI Ads & Marketing</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
                AI Ads That{" "}
                <span className="gradient-text">Learn, Optimize & Scale</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Stop burning ad budget on guesswork. Our AI-powered marketing automation learns what works and scales your winning campaigns automatically.
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
                  src={adsDashboard} 
                  alt="AI Marketing Dashboard"
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
              Marketing That Runs Itself
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our AI handles the complexity of modern digital advertising so you can focus on your business.
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
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Results That Speak for Themselves
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
            <div className="relative">
              <div className="rounded-2xl overflow-hidden glass">
                <img 
                  src={adsDashboard} 
                  alt="Marketing Analytics"
                  className="w-full h-auto"
                />
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
              Ready to Scale Your Marketing?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let AI handle your ads while you focus on growing your business.
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

export default AdsMarketingPage;

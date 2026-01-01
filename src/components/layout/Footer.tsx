import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const footerLinks = {
  solutions: [
    { name: "AI Website Development", href: "/solutions/website-development" },
    { name: "AI Ads & Marketing", href: "/solutions/ads-marketing" },
    { name: "WhatsApp Automation", href: "/solutions/whatsapp-automation" },
    { name: "AI Chatbots", href: "/solutions/chatbots" },
    { name: "AI Calling Agents", href: "/solutions/calling-agents" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-surface-1 border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden"
              >
                <img src={logo} alt="Axenora AI" className="h-8 w-8 object-contain" />
              </motion.div>
              <span className="font-display font-bold text-xl text-foreground">Axenora AI</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              AI systems that build, run & scale businesses. We install intelligent systems that 
              automate customer engagement, follow-ups, and business growth.
            </p>
            <div className="flex gap-4">
              <a 
                href="tel:+917814051678" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 7814051678
              </a>
              <span className="text-border">|</span>
              <a 
                href="mailto:kaarthikdassarorasahabji@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Axenora AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const solutions = [
  { name: "AI Website Development", href: "/solutions/website-development" },
  { name: "AI Ads & Marketing", href: "/solutions/ads-marketing" },
  { name: "WhatsApp Automation", href: "/solutions/whatsapp-automation" },
  { name: "AI Chatbots", href: "/solutions/chatbots" },
  { name: "AI Calling Agents", href: "/solutions/calling-agents" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions", hasDropdown: true },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="container-wide flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden"
          >
            <img src={logo} alt="Axenora AI" className="h-8 w-8 object-contain" />
          </motion.div>
          <span className="font-display font-bold text-xl text-foreground">Axenora AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.hasDropdown ? (
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname.startsWith("/solutions") ? "text-primary" : "text-muted-foreground"
                  }`}
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )}

              {item.hasDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: solutionsOpen ? 1 : 0, y: solutionsOpen ? 0 : 10 }}
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                    solutionsOpen ? "visible" : "invisible pointer-events-none"
                  }`}
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <div className="glass-strong rounded-xl p-2 min-w-[240px]">
                    {solutions.map((solution, index) => (
                      <motion.div
                        key={solution.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: solutionsOpen ? 1 : 0, x: solutionsOpen ? 0 : -10 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={solution.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-surface-3 rounded-lg transition-colors"
                        >
                          {solution.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button variant="hero" asChild>
              <Link to="/contact">Book Demo</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden glass-strong border-t border-border"
        >
          <div className="container-wide py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="space-y-2">
                    <span className="block px-4 py-2 text-sm font-medium text-foreground">
                      {item.name}
                    </span>
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        to={solution.href}
                        className="block px-8 py-2 text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book Demo
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const PortfolioHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#achievements", label: "Achievements" },
    { href: "#competencies", label: "Competencies" },
    { href: "#casestudies", label: "Case Studies" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold"
        >
          <span className="text-gradient">SK.</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className="text-muted-foreground hover:text-primary font-medium transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass-card border-t border-glass-border"
      >
        <div className="py-4 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              whileHover={{ x: 10 }}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left py-2 px-6 text-muted-foreground hover:text-primary hover:bg-muted/5 transition-all duration-300"
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default PortfolioHeader;
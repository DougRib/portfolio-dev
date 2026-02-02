import React, { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  User,
  Code2,
  Brain,
  Mail,
  Menu,
  X,
  House,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Início", icon: <House className="w-5 h-5 mr-1 text-cyan-400" /> },
    { href: "#technologies", label: "Habilidades", icon: <Brain className="w-5 h-5 mr-1 text-cyan-400" /> },
    { href: "#about", label: "Sobre mim", icon: <User className="w-5 h-5 mr-1 text-cyan-400" /> },
    { href: "#projects", label: "Projetos", icon: <Code2 className="w-5 h-5 mr-1 text-cyan-400" /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-700/30 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center h-full">
          {/* Logo with glowing effect */}
          <a
            href="#"
            className="relative group flex items-center justify-center"
          >
            {/* Full logo glow effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full blur-2xl  group-hover:opacity-10 transition-all duration-300"></div>
            </div>
            <img
              src="/lovable-uploads/e9810342-de6a-4f13-9171-0077afe8c75a.png"
              alt="Kalp Logo"
              className="h-14 w-14 relative z-10"
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            {/* Main Navigation */}
            <div className="flex px-8 py-2 bg-gray-900/30 backdrop-blur-md rounded-full border border-white/10 shadow-xl">
              <div className="flex space-x-8 items-center justify-center">
                {navItems.map((item) => (
                  <IslandNavLink key={item.href} href={item.href}>
                    {item.icon}
                    {item.label}
                  </IslandNavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Contact button (Hire Me removed) - Right side */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <a href="#contact" className="glow-button">
              <Mail className="w-4 h-4 mr-2" />
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-gray-800"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 hover:text-red-500" />
              ) : (
                <Menu className="w-6 h-6 " />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden p-4 bg-gray-900/95 border-t border-gray-800 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                {item.label}
              </MobileNavLink>
            ))}
            <MobileNavLink
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Mail className="w-4 h-4 mr-2 text-cyan-400" />
              Contato
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const IslandNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="relative px-3 py-2 text-gray-300 hover:text-white transition-all duration-300 group flex items-center"
    >
      <span className="relative z-10 flex items-center">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 opacity-0 group-hover:opacity-100 rounded-full blur-sm transition-all duration-300"></span>
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
    </a>
  );
};

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-300 hover:text-white py-2 px-4 hover:bg-gray-800 rounded-md transition-colors flex items-center"
  >
    {children}
  </a>
);

export default Navbar;

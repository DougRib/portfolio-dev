import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  User,
  Code2,
  Brain,
  Mail,
  Menu,
  X,
  House,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement | null>(null);
  const { language, setLanguage, t } = useLanguage();

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!langMenuOpen) return;
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [langMenuOpen]);

  const navItems = [
    { id: "hero", href: "#hero", label: t("navbar.home"), icon: <House className="w-5 h-5 mr-1 text-cyan-400" /> },
    { id: "technologies", href: "#technologies", label: t("navbar.skills"), icon: <Brain className="w-5 h-5 mr-1 text-cyan-400" /> },
    { id: "about", href: "#about", label: t("navbar.about"), icon: <User className="w-5 h-5 mr-1 text-cyan-400" /> },
    { id: "projects", href: "#projects", label: t("navbar.projects"), icon: <Code2 className="w-5 h-5 mr-1 text-cyan-400" /> },
  ];

  const languageOptions = [
    { value: "pt-BR", label: t("navbar.languages.pt-BR") },
    { value: "en", label: t("navbar.languages.en") },
    { value: "es", label: t("navbar.languages.es") },
    { value: "pt-PT", label: t("navbar.languages.pt-PT") },
  ];

  const handleLanguageChange = (value: string) => {
    setLanguage(value as "pt-BR" | "en" | "es" | "pt-PT");
    setLangMenuOpen(false);
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const offset = 140;
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        const contactTop = contactEl.getBoundingClientRect().top + window.scrollY;
        const contactBottom = contactTop + contactEl.offsetHeight;
        const pos = window.scrollY + offset;
        if (pos >= contactTop && pos < contactBottom) {
          setActiveSection("");
          return;
        }
      }
      const current =
        navItems
          .map((item) => {
            const el = document.getElementById(item.id);
            if (!el) return null;
            return { id: item.id, top: el.getBoundingClientRect().top + window.scrollY };
          })
          .filter(Boolean)
          .sort((a, b) => a!.top - b!.top)
          .reduce((acc, section) => {
            if (section!.top <= window.scrollY + offset) {
              return section!.id;
            }
            return acc;
          }, "hero") || "hero";

      setActiveSection(current);
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [navItems]);

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
            href="#hero"
            className="relative group flex items-center justify-center"
          >
            {/* Full logo glow effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full blur-2xl  group-hover:opacity-10 transition-all duration-300"></div>
            </div>
            <img
              src="/logo-dr.png"
              alt="DR Logo"
              className="h-10 w-12 relative z-10"
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            {/* Main Navigation */}
            <div className="flex px-8 py-2 bg-gray-900/30 backdrop-blur-md rounded-full border border-white/10 shadow-xl">
              <div className="flex space-x-8 items-center justify-center">
                {navItems.map((item) => (
                  <IslandNavLink
                    key={item.href}
                    href={item.href}
                    active={activeSection === item.id}
                  >
                    {item.icon}
                    {item.label}
                  </IslandNavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Contact button (Hire Me removed) - Right side */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setLangMenuOpen((prev) => !prev);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-gray-900/30 backdrop-blur-md text-sm text-gray-200 hover:text-white hover:border-blue-500/30 transition-all"
                aria-haspopup="listbox"
                aria-expanded={langMenuOpen}
              >
                <span className="uppercase text-xs font-semibold tracking-wider text-blue-300">
                  {language}
                </span>
                <ChevronDown className="w-4 h-4 text-blue-300" />
              </button>
              {langMenuOpen && (
                <div
                  role="listbox"
                  className="absolute right-0 mt-2 w-52 rounded-xl border border-blue-500/20 bg-gray-900/80 backdrop-blur-xl shadow-xl overflow-hidden z-50"
                >
                  {languageOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleLanguageChange(option.value)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === option.value
                          ? "bg-blue-500/10 text-blue-300"
                          : "text-gray-200 hover:bg-white/5"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a href="#contact" className="glow-button">
              <Mail className="w-4 h-4 mr-2" />
              {t("navbar.contact")}
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
                active={activeSection === item.id}
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
              {t("navbar.contact")}
            </MobileNavLink>
            <div className="pt-2 border-t border-gray-800">
              <div className="px-4 text-xs uppercase tracking-wider text-gray-400 mb-2">
                {t("navbar.language")}
              </div>
              <div className="flex flex-col gap-2">
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleLanguageChange(option.value)}
                    className={`text-left px-4 py-2 rounded-md text-sm transition-colors ${
                      language === option.value
                        ? "bg-blue-500/10 text-blue-300"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const IslandNavLink = ({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <a
      href={href}
      className={`relative px-3 py-2 transition-all duration-300 group flex items-center ${
        active ? "text-white" : "text-gray-300 hover:text-white"
      }`}
    >
      <span className="relative z-10 flex items-center">{children}</span>
      <span
        className={`absolute inset-1 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-full blur-sm transition-all duration-300 ${
          active
            ? "from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-100"
            : "opacity-0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 group-hover:opacity-100"
        }`}
      ></span>
      <span
        className={`absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 transition-all duration-300 origin-center ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      ></span>
    </a>
  );
};

const MobileNavLink = ({
  href,
  children,
  active = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`py-2 px-4 rounded-md transition-colors flex items-center ${
      active ? "text-white bg-gray-800" : "text-gray-300 hover:text-white hover:bg-gray-800"
    }`}
  >
    {children}
  </a>
);

export default Navbar;

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        // When hero bottom goes above top of viewport (<=0), user scrolled past hero section
        setScrolledPastHero(heroBottom <= 0);
      }

      // Track active section similarly as before
      const sections = ["hero", "products", "about", "contact"];
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call handleScroll once initially in case page is loaded further down
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false); // close mobile menu
    }
  };

  // Compose nav classes
  const navClasses =
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
    (scrolledPastHero
      ? "bg-white/95 backdrop-blur-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] border-t border-gray-200 py-4"
      : "bg-transparent border-none py-6");

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => scrollToSection("hero")}>
          <h1 className="text-3xl font-black gradient-text-primary hover:scale-110 transition-transform duration-300">
            NIKE
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 list-none">
          {["Home", "Products", "About", "Contact"].map((item) => {
            const sectionId = item.toLowerCase() === "home" ? "hero" : item.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(sectionId)}
                  className={`font-medium text-base link-hover transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-gray-800 hover:text-primary"
                  }`}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex gap-5">
          {[Search, Heart, ShoppingCart].map((Icon, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="text-gray-800 hover:bg-gradient-primary hover:text-white hover:-translate-y-1 transition-all duration-300 rounded-full"
            >
              <Icon className="h-5 w-5" />
            </Button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-[20px] shadow-lg px-6 py-4 space-y-4">
          {["Home", "Products", "About", "Contact"].map((item) => {
            const sectionId = item.toLowerCase() === "home" ? "hero" : item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => scrollToSection(sectionId)}
                className="block w-full text-left text-gray-800 font-medium text-lg py-2 hover:text-primary transition"
              >
                {item}
              </button>
            );
          })}

          {/* Icons in mobile */}
          <div className="flex justify-around pt-4 border-t">
            {[Search, Heart, ShoppingCart].map((Icon, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="text-gray-800 hover:bg-gradient-primary hover:text-white transition rounded-full"
              >
                <Icon className="h-5 w-5" />
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

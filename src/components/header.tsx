import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Shows", href: "#shows" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4 md:py-6"
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
              GARDUX <span className="text-pink-500">LIVE SESSIONS</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-pink-500 font-medium transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}>
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-pink-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            <Icon
              icon={
                isMenuOpen
                  ? "heroicons:x-mark"
                  : "heroicons:bars-3-bottom-right"
              }
              className="w-6 h-6"
            />
          </button>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <a
              href="https://www.youtube.com/@garduxlive"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-full hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-200">
              Ver Sesiones
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-lg w-full fixed left-0 right-0 shadow-xl top-[4rem] max-h-[calc(100vh-4rem)] overflow-y-auto -mt-px"
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            animate={{
              opacity: 1,
              height: "auto",
              maxHeight: "calc(100vh - 4rem)",
            }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}>
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base text-gray-700 hover:text-pink-500 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors active:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>
                ))}
                <a
                  href="https://www.youtube.com/@garduxlive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-2 px-4 py-2 text-center bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-lg hover:opacity-90 active:opacity-80 transition-all text-sm"
                  onClick={() => setIsMenuOpen(false)}>
                  Ver Sesiones en YouTube
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

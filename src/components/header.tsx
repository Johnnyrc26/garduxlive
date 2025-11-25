import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

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
        <div className="flex items-center justify-between relative">
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

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Button
              as="a"
              href="https://www.youtube.com/@garduxlive"
              target="_blank"
              rel="noopener noreferrer"
              variant="bordered"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 text-sm font-normal tracking-wide rounded-full border-1.5 border-white/20 hover:border-white/40 bg-gradient-to-r from-pink-500/90 to-blue-500/90 text-white/95 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
              Ver Sesiones
            </Button>
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
              <nav className="flex flex-col space-y-2 p-2">
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    variant="light"
                    fullWidth
                    className="justify-start text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}>
                    {item.name === "Instagram" ? (
                      <a
                        href="https://www.instagram.com/garduxlive/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center"
                        onClick={(e) => e.stopPropagation()}>
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </Button>
                ))}
                <Button
                  as="a"
                  href="https://www.youtube.com/@garduxlive"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="bordered"
                  fullWidth
                  className="mt-4 border-1.5 border-white/20 hover:border-white/40 bg-gradient-to-r from-pink-500/90 to-blue-500/90 text-white/95 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
                  onPress={() => setIsMenuOpen(false)}>
                  Ver Sesiones en YouTube
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

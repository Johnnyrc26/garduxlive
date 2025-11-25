import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/garduxlive",
      icon: "mdi:instagram",
      color: "text-pink-500 hover:text-pink-600",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@garduxlive",
      icon: "mdi:youtube",
      color: "text-red-500 hover:text-red-600",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/your-profile",
      icon: "mdi:spotify",
      color: "text-green-500 hover:text-green-600",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/gardux",
      icon: "mdi:soundcloud",
      color: "text-orange-500 hover:text-orange-600",
    },
  ];

  const footerLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Shows", href: "#shows" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              GARDUX LIVE SESSIONS
            </h2>
            <p className="text-gray-600 mb-4">
              Música que conecta culturas y crea experiencias inolvidables.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${social.color} transition-colors duration-300`}
                  aria-label={social.name}>
                  <Icon icon={social.icon} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-pink-500 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contacto
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center justify-center md:justify-start">
                <Icon icon="mdi:email" className="mr-2 text-pink-500" />
                <a
                  href="mailto:info@garduxlive.com"
                  className="hover:text-pink-500 transition-colors">
                  info@garduxlive.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Icon icon="mdi:map-marker" className="mr-2 text-pink-500" />
                <span>Valencia, España</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-gray-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Gardux Live Sessions. Todos los derechos
            reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

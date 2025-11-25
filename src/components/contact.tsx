import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: "mdi:email",
      title: "Email",
      value: "info@garduxlive.com",
      href: "mailto:info@garduxlive.com",
      color: "text-pink-500",
    },
    {
      icon: "mdi:phone",
      title: "Teléfono",
      value: "+34 123 456 789",
      href: "tel:+34123456789",
      color: "text-blue-500",
    },
    {
      icon: "mdi:map-marker",
      title: "Ubicación",
      value: "Valencia, España",
      href: "https://maps.google.com/?q=Valencia,Spain",
      color: "text-green-500",
    },
  ];

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

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-semibold rounded-full mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Conecta con{" "}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              nosotros
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Síguenos en nuestras redes sociales o contáctanos directamente a
            través de los siguientes medios.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Información de contacto
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                  <div
                    className={`p-2.5 rounded-lg ${method.color.replace(
                      "text-",
                      "bg-"
                    )} bg-opacity-10 mr-4`}>
                    <Icon
                      icon={method.icon}
                      className={`text-xl ${method.color}`}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      {method.title}
                    </h4>
                    <p className="text-gray-900 font-medium">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Síguenos</h3>
            <p className="text-gray-600 mb-6">
              Conéctate con nosotros en redes sociales para estar al día con
              nuestras últimas noticias y eventos.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors ${social.color}`}
                  aria-label={social.name}>
                  <Icon icon={social.icon} className="text-2xl mr-2" />
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

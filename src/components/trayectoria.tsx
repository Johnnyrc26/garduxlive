import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  description: string[];
  icon: string;
};

const timelineData: TimelineEvent[] = [
  {
    id: "1",
    year: "2015 - 2020",
    title: "Inicios Profesionales",
    description: [
      "Stage Manager (2015-2018): Operación técnica para artistas como Chino & Nacho, Jorge Drexler, Cultura Profética, Gran Combo de Puerto Rico, entre otros.",
      "Creador del Festival Urbana Rock en Barranquilla.",
      "Stage Manager en Berbetronik y Rock Miche.",
    ],
    icon: "mdi:microphone-variant",
  },
  {
    id: "2",
    year: "2018 - 2025",
    title: "Desarrollo Profesional",
    description: [
      "Booker Internacional de Caribefunk desde 2018.",
      "Productor de Gardux Live Sessions (2020-presente), organizando eventos en Veles e Vents y desarrollando el formato Ácido Tropical.",
      "Equipo de Producción en Tomorrowland durante 2022 y 2023.",
      "Tour Manager Internacional para Muerdo, Kraken y Tonada en giras europeas en 2025.",
      "Creador del Electropicnic Fest en Valencia en 2025.",
    ],
    icon: "mdi:chart-timeline-variant",
  },
];

export const Trayectoria = () => {
  return (
    <section
      id="trayectoria"
      className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Trayectoria
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="hidden md:block absolute left-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-blue-400 transform -translate-x-1/2"></div>

          {/* Línea de tiempo móvil */}
          <div className="md:hidden absolute left-4 w-1 h-full bg-gradient-to-b from-pink-400 to-blue-400 transform -translate-x-1/2"></div>

          {/* Eventos de la línea de tiempo */}
          <div className="space-y-8 md:space-y-12">
            {timelineData.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative pl-12 md:pl-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="md:flex items-stretch">
                  {/* Contenedor principal de la tarjeta */}
                  <div className="md:w-1/2 md:px-6 mb-6 md:mb-0">
                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center text-pink-500 shadow-sm">
                          <Icon
                            icon={event.icon}
                            className="text-xl md:text-2xl"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                            {event.title}
                          </h3>
                          <span className="inline-block px-2.5 py-0.5 bg-pink-50 text-pink-600 text-xs md:text-sm font-medium rounded-full">
                            {event.year}
                          </span>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2.5 pl-1">
                        {event.description.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}>
                            <span className="text-pink-500 mr-2.5 mt-1 flex-shrink-0">
                              •
                            </span>
                            <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Año en desktop */}
                  <div className="hidden md:flex md:w-1/2 px-6 items-center">
                    <div
                      className={`w-full ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}>
                      <div className="inline-block text-4xl lg:text-5xl font-black text-gray-200 bg-clip-text">
                        {event.year}
                      </div>
                    </div>
                  </div>

                  {/* Punto en la línea de tiempo (móvil) */}
                  <div className="md:hidden absolute left-0 top-3 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs shadow-md border-2 border-white">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

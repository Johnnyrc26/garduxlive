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
      className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Trayectoria
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-blue-400 transform -translate-x-1/2"></div>

          {/* Eventos de la línea de tiempo */}
          <div className="space-y-12">
            {timelineData.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative pl-8 md:pl-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}>
                <div
                  className={`md:flex ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}>
                  <div className="md:w-1/2 md:px-8 mb-6 md:mb-0">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
                          <Icon icon={event.icon} className="text-2xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {event.title}
                          </h3>
                          <span className="inline-block mb-3 px-3 py-1 bg-pink-50 text-pink-600 text-sm font-medium rounded-full">
                            {event.year}
                          </span>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2 pl-2">
                        {event.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-pink-500 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2 md:px-8">
                    <div
                      className={`text-4xl font-black ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      } text-gray-300`}>
                      {event.year}
                    </div>
                  </div>
                  <div className="md:hidden absolute -left-1 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {event.year}
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

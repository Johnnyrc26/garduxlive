import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
};

const timelineData: TimelineEvent[] = [
  {
    id: "1",
    year: "2018",
    title: "Inicios",
    description:
      "Primeras sesiones en pequeños locales de Valencia, dando a conocer nuestro sonido único.",
    icon: "mdi:music-note",
  },
  {
    id: "2",
    year: "2019",
    title: "Primer EP",
    description:
      "Lanzamiento de nuestro primer EP 'Raíces' con gran aceptación en la escena local.",
    icon: "mdi:album",
  },
  {
    id: "3",
    year: "2020",
    title: "Gira Nacional",
    description:
      "Primera gira por España, visitando más de 15 ciudades y consolidando nuestra base de fans.",
    icon: "mdi:map-marker-path",
  },
  {
    id: "4",
    year: "2022",
    title: "Colaboraciones",
    description:
      "Trabajamos con artistas internacionales, fusionando nuestro sonido con nuevas influencias.",
    icon: "mdi:account-group",
  },
  {
    id: "5",
    year: "2023",
    title: "Festivales",
    description:
      "Participación en los principales festivales de música de España y Latinoamérica.",
    icon: "mdi:festival",
  },
];

export const Trayectoria = () => {
  return (
    <section
      id="trayectoria"
      className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-semibold rounded-full mb-4">
            Nuestra Historia
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestra{" "}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Trayectoria
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un viaje de pasión por la música que sigue creciendo cada día.
          </p>
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
                      <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 mb-4">
                        <Icon icon={event.icon} className="text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">{event.description}</p>
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

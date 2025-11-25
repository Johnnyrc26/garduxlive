import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";

interface Show {
  id: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  country: string;
  ticketLink?: string;
  instagramLink?: string;
  name: string;
  imageUrl?: string;
  description?: string;
}

const sampleShows: Show[] = [
  {
    id: "1",
    name: "KRAKEN – Ruge la leyenda del titán",
    date: "2025-12-20",
    time: "22:00",
    venue: "Bourbon St.",
    city: "Barranquilla",
    country: "Colombia",
    ticketLink: "",
    instagramLink:
      "https://www.instagram.com/krakentitanoficial?igsh=MXQ3NnI5N2loZWNnaw==",
    imageUrl: "kraken.jpeg",
  },
  {
    id: "2",
    name: "El CARIBEFUNK Tour 2026",
    date: "2026-01-06",
    time: "20:00",
    venue: "Moy's",
    city: "Barranquilla",
    country: "Colombia",
    ticketLink: "",
    instagramLink:
      "https://www.instagram.com/caribefunk?igsh=MW1iazBnZmpjdXVobg==",
    imageUrl: "caribe.jpeg",
  },
  {
    id: "3",
    name: "JUEVES DE OPEN DECK",
    date: "Todos los jueves",
    time: "19:00",
    venue: "The Apartment",
    city: "Valencia",
    country: "España",
    ticketLink: undefined,
    instagramLink:
      "https://www.instagram.com/theapartment.vlc?igsh=OTFwMnN3N3l4bnV6",
    description: "Cada Jueves - 19 horas | Entrada Free",
    imageUrl: "gardux.jpeg",
  },
  {
    id: "4",
    name: "ELECTROPICNIC FEST 🍍",
    date: "Los domingos (cada 15 días)",
    time: "12:00",
    venue: "Río Turia",
    city: "Valencia",
    country: "España",
    ticketLink: undefined,
    instagramLink:
      "https://www.instagram.com/electropicnicfest?igsh=MWdrdml1c2U1cmxjYQ==",
    description: "Domingo (cada 15) - 12PM | Entrada Free",
    imageUrl: "electropicnic.jpeg",
  },
];

export const Shows = () => {
  const [selectedCity, setSelectedCity] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  // Get sort weight for date (puts recurring events after specific dates)
  const getDateWeight = (dateString: string): number => {
    if (dateString.startsWith("Todos los") || dateString.startsWith("Los")) {
      // Recurring events go to the end
      return Number.MAX_SAFE_INTEGER;
    }
    // Specific dates are sorted chronologically
    return new Date(dateString).getTime();
  };

  // Filter shows by city
  const filteredShows =
    selectedCity === "all"
      ? sampleShows
      : sampleShows.filter((show) => show.city === selectedCity);

  // Sort shows by date, with specific dates first (chronological) and recurring events last
  const sortedShows = [...filteredShows].sort((a, b) => {
    return getDateWeight(a.date) - getDateWeight(b.date);
  });

  // Scroll functions

  const scrollToIndex = (index: number) => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const cards = container.querySelectorAll("[data-index]");
      if (cards[index]) {
        const card = cards[index] as HTMLElement;
        container.scrollTo({
          left: card.offsetLeft - 16,
          behavior: "smooth",
        });
        setCurrentIndex(index);
      }
    }
  };

  // Update current index on scroll
  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handleScroll = () => {
      const containerWidth = container.offsetWidth;
      const scrollPosition = container.scrollLeft + containerWidth / 2;
      const cards = container.querySelectorAll("[data-index]");

      cards.forEach((card, index) => {
        const cardEl = card as HTMLElement;
        const cardLeft = cardEl.offsetLeft;
        const cardWidth = cardEl.offsetWidth;

        if (
          scrollPosition >= cardLeft &&
          scrollPosition < cardLeft + cardWidth
        ) {
          setCurrentIndex(index);
        }
      });
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [filteredShows]);

  // Format date - handles both specific dates and recurring events
  const formatDate = (dateString: string) => {
    // Check if it's a recurring event
    if (dateString.startsWith("Todos los") || dateString.startsWith("Los")) {
      return dateString; // Return as is for recurring events
    }

    // Handle specific dates
    try {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(dateString).toLocaleDateString("es-ES", options);
    } catch (e) {
      return dateString; // Fallback to original string if not a valid date
    }
  };

  // Get unique cities for filter
  const cities = Array.from(new Set(sampleShows.map((show) => show.city)));

  return (
    <section
      id="shows"
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-x-hidden overflow-visible">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-semibold rounded-full mb-4">
            Próximos Eventos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Próximos{" "}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Shows
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            No te pierdas nuestras próximas presentaciones en vivo.
          </p>

          {/* City filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCity === "all"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCity("all")}>
              Todas las ciudades
            </button>
            {cities.map((city) => (
              <button
                key={city}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCity === city
                    ? "bg-pink-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCity(city)}>
                {city}
              </button>
            ))}
          </div>
        </div>

        {sortedShows.length > 0 ? (
          <div className="relative">
            {/* Horizontal scroll container */}
            <div
              ref={scrollContainer}
              className="flex overflow-x-auto pb-6 mx-auto max-w-full px-16 md:px-20 scrollbar-hide w-full relative"
              style={{
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
                scrollSnapType: "x mandatory",
                scrollPadding: "0 16px",
              }}>
              <div className="flex space-x-6 min-w-max px-4 relative z-10">
                {sortedShows.map((show, index) => (
                  <motion.div
                    key={show.id}
                    data-index={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-80 flex-shrink-0 snap-center"
                    style={{ scrollSnapAlign: "start" }}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={
                            show.imageUrl ||
                            `https://source.unsplash.com/random/600x400/?concert,${show.city}`
                          }
                          alt={`Show en ${show.venue}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-1">
                                {show.name}
                              </h3>
                              <p className="text-gray-600">{show.venue}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-pink-500">
                                {formatDate(show.date)}
                              </div>
                              <div className="text-sm text-gray-500">
                                {show.time} h
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <Icon icon="mdi:map-marker" className="mr-1" />
                            <span>
                              {show.city}, {show.country}
                            </span>
                          </div>
                        </div>
                        <div className="mt-auto">
                          <div className="flex space-x-3">
                            {show.ticketLink && (
                              <a
                                href={show.ticketLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-transform duration-300 hover:bg-gray-200 hover:scale-105 whitespace-nowrap">
                                <Icon icon="mdi:ticket" className="text-lg" />
                                <span>Comprar Entradas</span>
                              </a>
                            )}
                            {show.instagramLink && (
                              <a
                                href={show.instagramLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 text-pink-500 transition-colors hover:scale-105 flex-shrink-0"
                                aria-label="Ver en Instagram">
                                <Icon
                                  icon="mdi:instagram"
                                  className="text-xl"
                                />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile navigation dots */}
            <div className="flex justify-center mt-6 space-x-2 md:hidden">
              {sortedShows.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === i ? "bg-pink-500" : "bg-gray-300"
                  }`}
                  aria-label={`Ir al show ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-inner">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-50 rounded-full mb-6">
              <Icon
                icon="mdi:calendar-edit"
                className="text-pink-500 text-4xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {selectedCity === "all"
                ? "¡Próximamente más fechas!"
                : `No hay eventos próximos en ${selectedCity}`}
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              {selectedCity === "all"
                ? "Estamos preparando nuevos shows increíbles. Mantente atento a nuestras redes sociales para no perderte nada."
                : "Prueba a buscar en otras ciudades o vuelve más tarde para ver nuevas fechas."}
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full text-pink-600 bg-pink-50 hover:bg-pink-100 transition-colors">
              <Icon icon="mdi:instagram" className="mr-2" />
              Seguir en Instagram
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

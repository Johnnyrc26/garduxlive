import { useEffect, useState } from "react";
import { Card, Button, Spinner } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import axios from "axios";

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
}

export const Shows = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        console.log('Iniciando petición a la API...');
        setIsLoading(true);

        const response = await axios.get(
          'https://api.sheetbest.com/sheets/f46a27a4-9e01-427c-9987-1dcf5d9dc606',
          {
            headers: {
              'Accept': 'application/json',
              'X-Api-Key': import.meta.env.VITE_SHEETBEST_API_KEY || 'CWcmt%jcGvUI6D_ZYU!Q@uXX_r9do$4dHaO1qMAS!lTP@0MM$E8X973_pp3n8p!_',
            },
          }
        );

        console.log('Respuesta de la API:', response.data);

        if (response.data && Array.isArray(response.data)) {
          const formattedShows = response.data
            .map((show: any, index: number) => ({
              id: show.id?.toString() || index.toString(),
              date: show.fecha || show.date || '',
              time: show.hora || show.time || '',
              venue: show.lugar || show.venue || '',
              city: show.ciudad || show.city || '',
              country: show.pais || show.country || '',
              ticketLink: show.entradas || show.ticketLink || undefined,
              instagramLink: show.instagram || show.instagramLink || undefined,
              name: show.nombre || show.name || '',
            }))
            .filter((show: Show) => show.venue && show.date);

          if (formattedShows.length === 0) {
            throw new Error('No se encontraron shows válidos en los datos de la API.');
          }

          setShows(formattedShows);
        } else {
          throw new Error('Formato de respuesta inesperado de la API.');
        }
      } catch (err) {
        console.error('Error al cargar los shows:', err);
        setError('No se pudieron cargar los shows. Por favor, intenta de nuevo más tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchShows();
  }, []);

  if (isLoading) {
    return (
      <section id="shows" className="py-20 bg-content1">
        <div className="container mx-auto px-4 text-center">
          <Spinner size="lg" />
          <p className="mt-4">Cargando shows...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="shows" className="py-20 bg-content1">
        <div className="container mx-auto px-4 text-center">
          <div className="text-red-500 mb-4">
            <Icon icon="mdi:alert-circle" className="text-4xl mx-auto" />
          </div>
          <p className="text-lg">{error}</p>
          <Button
            className="mt-4"
            color="primary"
            onClick={() => window.location.reload()}
          >
            Reintentar
          </Button>
        </div>
      </section>
    );
  }

  if (shows.length === 0) {
    return (
      <section id="shows" className="py-20 bg-content1">
        <div className="container mx-auto px-4 text-center">
          <Icon icon="mdi:calendar-remove" className="text-4xl text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">No hay shows programados</h2>
          <p className="text-gray-400">Vuelve pronto para ver nuestras próximas presentaciones.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="shows" className="py-20 bg-content1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Live Dates
          </h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
          Feel the energy. Live the rhythm. Our fusion of rock, Caribbean vibes, and electronic beats is more than music — it’s an experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {shows.map((show) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center border-r border-gray-700 pr-4">
                      <div className="text-2xl font-bold text-primary">{show.date}</div>
                      <div className="text-sm text-gray-400">{show.time}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{show.name}</h3>
                      <h3 className="text-md font-semibold">{show.venue}</h3>
                      <p className="text-gray-400 flex items-center gap-1">
                        <Icon icon="mdi:map-marker" className="text-sm" />
                        {show.city}, {show.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 sm:mt-0 justify-end">
                    {show.ticketLink && (
                      <Button
                        as="a"
                        href={show.ticketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        size="sm"
                        endContent={<Icon icon="lucide:ticket" />}
                      >
                        Entradas
                      </Button>
                    )}
                    {show.instagramLink && (
                      <Button
                        as="a"
                        href={show.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="default"
                        variant="flat"
                        size="sm"
                        isIconOnly
                        aria-label="Ver en Instagram"
                      >
                        <Icon icon="mdi:instagram" className="text-pink-500" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
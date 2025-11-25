import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

type Artist = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  social: {
    instagram?: string;
    spotify?: string;
    youtube?: string;
  };
};

const artists: Artist[] = [
  {
    id: "1",
    name: "María López",
    role: "Voz Principal",
    bio: "Con una voz poderosa y llena de alma, María es el corazón de Gardux. Su estilo único mezcla influencias de jazz, soul y música latina.",
    imageUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a5d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    social: {
      instagram: "https://instagram.com/mariavoz",
      spotify: "https://open.spotify.com/artist/example1",
      youtube: "https://youtube.com/mariavoz",
    },
  },
  {
    id: "2",
    name: "Carlos Mendez",
    role: "Guitarra y Coros",
    bio: "Maestro de la guitarra con más de 15 años de experiencia. Su estilo combina ritmos flamencos con sonidos modernos.",
    imageUrl:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    social: {
      instagram: "https://instagram.com/carlosguitar",
      spotify: "https://open.spotify.com/artist/example2",
    },
  },
  {
    id: "3",
    name: "Ana Torres",
    role: "Batería",
    bio: "La energía de Ana en la batería es contagiosa. Con su ritmo preciso y potente, da vida a las canciones de Gardux.",
    imageUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a5d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    social: {
      instagram: "https://instagram.com/anadrums",
      youtube: "https://youtube.com/anadrums",
    },
  },
  {
    id: "4",
    name: "Javier Ruiz",
    role: "Bajo",
    bio: "El sonido profundo del bajo de Javier es la columna vertebral de la banda. Su estilo único añade una dimensión especial a la música de Gardux.",
    imageUrl:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    social: {
      instagram: "https://instagram.com/jbass",
      spotify: "https://open.spotify.com/artist/example4",
    },
  },
];

export const Artistas = () => {
  return (
    <section
      id="artistas"
      className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-semibold rounded-full mb-4">
            Conoce al Equipo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Artistas
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce a los talentosos músicos que dan vida a Gardux Live Sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="h-64 overflow-hidden">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {artist.name}
                </h3>
                <p className="text-pink-500 font-medium mb-3">{artist.role}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {artist.bio}
                </p>
                <div className="flex space-x-3">
                  {artist.social.instagram && (
                    <a
                      href={artist.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-600 transition-colors"
                      aria-label={`Instagram de ${artist.name}`}>
                      <Icon icon="mdi:instagram" className="text-xl" />
                    </a>
                  )}
                  {artist.social.spotify && (
                    <a
                      href={artist.social.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600 transition-colors"
                      aria-label={`Spotify de ${artist.name}`}>
                      <Icon icon="mdi:spotify" className="text-xl" />
                    </a>
                  )}
                  {artist.social.youtube && (
                    <a
                      href={artist.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-600 transition-colors"
                      aria-label={`YouTube de ${artist.name}`}>
                      <Icon icon="mdi:youtube" className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

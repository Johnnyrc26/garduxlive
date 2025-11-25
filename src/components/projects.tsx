import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface Project {
  title: string;
  description: string;
  image: string;
  year: string;
  instagram: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Ácido Tropical",
    description:
      "Un show de música electrónica híbrida que combina elementos orgánicos, analógicos y digitales en un set único. La esencia más personal e innovadora de Gardux Live Sessions.",
    image:
      "https://images.unsplash.com/photo-1625612446042-afd3fe024131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2025",
    instagram: "_acidotropical",
    tags: ["Música Electrónica", "Show en Vivo", "Fusión"],
  },
  {
    title: "ElectroPicnic",
    description:
      "El picnic más fiestero de Valencia. Una experiencia única que combina música en vivo, gastronomía y naturaleza en un ambiente relajado y vibrante.",
    image: "/IMG_6366.png",
    year: "2025",
    instagram: "electropicnicfest",
    tags: ["Festival", "Al Aire Libre", "Comunidad"],
  },
  {
    title: "Caribbean Flow",
    description:
      "Gira internacional que llevó nuestra música a través de 15 ciudades, conectando con más de 50,000 fans y transformando nuestra visión artística.",
    image: "Screenshot 2025-05-24 at 15.28.18.png",
    year: "2020",
    instagram: "caribbeanflow_events",
    tags: ["Gira", "Internacional", "Colaboraciones"],
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group">
    <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
          {project.year}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <a
            href={`https://instagram.com/${project.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-pink-500 hover:text-pink-600 font-medium text-sm">
            <Icon icon="mdi:instagram" className="mr-1.5 text-lg" />@
            {project.instagram}
          </a>
          <a
            href={`https://instagram.com/${project.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-500 hover:text-blue-600 flex items-center">
            Ver más
            <Icon icon="heroicons:arrow-right" className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-semibold rounded-full mb-4">
            Nuestros Proyectos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Experiencias{" "}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Únicas
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre los proyectos que definen nuestra identidad y acercan la
            música a nuevas audiencias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}>
          <p className="text-gray-600 mb-6">¿Tienes un proyecto en mente?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-full hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-200">
            Hablemos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

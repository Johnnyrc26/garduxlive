import { Card, CardBody, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

const projects = [
  {
    title: "ElectroPicnic",
    description: "Somos el picnic más fiestero de Valencia 🎶🔥 Trae tu manta, tu mejor mood y déjate llevar por los beats, los sabores tropicales y la magia de un picnic que se convierte en fiesta. ¡Música, naturaleza y energía increíble! 🎧🍍🎉",
    image: "/IMG_6366.png",
    year: "2025",
    instagram: "electropicnicfest"
  },
  {
    title: "Gira Nacional: Fuego y Sombras",
    description: "Recorrimos 15 ciudades llevando nuestra música a más de 50,000 fans. Una experiencia que transformó nuestra visión artística.",
    image: "Screenshot 2025-05-24 at 15.28.18.png",
    year: "2020",
    instagram: "gardux_tour"
  },
  {
    title: "Colaboración: Voces del Abismo",
    description: "Proyecto colaborativo con artistas internacionales que fusiona géneros y rompe barreras musicales tradicionales.",
    image: "https://img.heroui.chat/image/album?w=600&h=400&u=3",
    year: "2022",
    instagram: "voces_abismo"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-4 glow-text">PROYECTOS</h2>
          <p className="text-default-500 max-w-2xl mx-auto">
            Explorando la evolución musical y artística de GARDUX a través de nuestros proyectos más emblemáticos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border border-secondary/20 bg-content1/10 backdrop-blur-sm shadow-none overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardBody className="p-6">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-6 flex-grow">{project.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs text-default-500">GARDUX</span>
                    <Link 
                      href={`https://instagram.com/${project.instagram}`}
                      isExternal
                      className="flex items-center gap-1 text-secondary hover:text-secondary-400 transition-colors"
                      underline="hover"
                    >
                      <Icon icon="logos:instagram-icon" className="text-lg" />
                      <span className="text-sm">@{project.instagram}</span>
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
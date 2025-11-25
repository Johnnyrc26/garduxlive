import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16 md:pt-0">
      {/* Full-Screen Background Image with Gradient Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1600779547877-be592ef5aad3?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gardux Live Sessions"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100/80 via-blue-50/70 to-yellow-50/90"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 h-screen flex flex-col justify-center pt-16 md:pt-0">
        <motion.div
          className="max-w-5xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          {/* Main Title with Tropical Accent */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-2 leading-tight tracking-tight"
            style={{
              background:
                "linear-gradient(45deg, #1a365d, #2c5282, #4c51bf, #9f7aea, #f687b3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}>
            <span className="block sm:inline">GARDUX</span>{" "}
            <span className="text-pink-400">LIVE SESSIONS</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}>
            {/* Tagline with Organic Feel */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-wide px-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-600">
                Música • Cultura • Conexiones
              </span>
            </h2>

            {/* Decorative Element */}
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-8 rounded-full"></div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-medium px-2">
              Conectando artistas emergentes de Latinoamérica con audiencias
              globales a través de experiencias musicales únicas y giras
              internacionales.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}>
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-200 whitespace-nowrap">
              Descubre Ácido Tropical
            </button>
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white/90 hover:bg-white text-gray-800 text-sm sm:text-base border-2 border-gray-800 hover:border-pink-500 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-100 whitespace-nowrap">
              Ver Sesiones en Vivo
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}>
        <svg
          className="w-8 h-8 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

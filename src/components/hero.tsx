import { motion } from "framer-motion";
import { Button } from "@heroui/react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16 md:pt-0">
      {/* Full-Screen Background Image + Tropical Pastel Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1600779547877-be592ef5aad3?q=80&w=2000&auto=format&fit=crop"
          alt="Gardux Live Sessions"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100/70 via-teal-50/70 to-amber-100/80"></div>
      </div>

      {/* CONTAINER */}
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center py-20 md:py-24">
        <motion.div
          className="max-w-5xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          {/* TITLE */}
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-2 tracking-tight leading-none"
            style={{
              background:
                "linear-gradient(45deg, #F59E0B, #EC4899, #06B6D4, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            GARDUX LIVE SESSIONS
          </motion.h1>

          {/* SUBTITLE */}
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-6
            bg-gradient-to-r from-pink-500 to-teal-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}>
            Música que viaja. Culturas que se encuentran.
          </motion.h2>

          {/* DECORATIVE LINE */}
          <div className="w-40 h-1 bg-gradient-to-r from-pink-400 to-teal-400 mx-auto mb-8 rounded-full" />

          {/* DESCRIPTION */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}>
            Gardux Live Sessions es una plataforma creativa que une electrónica
            híbrida, giras internacionales, sesiones audiovisuales y
            experiencias urbanas en movimiento. Desde el show{" "}
            <span className="font-semibold text-pink-600">Ácido Tropical</span>,
            hasta tours entre Latinoamérica y Europa, pasando por grabaciones en
            escenarios naturales y{" "}
            <span className="font-semibold text-teal-600">Voltafon</span>, la
            fiesta sobre ruedas que hace vibrar Valencia.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}>
            <Button
              as="a"
              href="https://www.instagram.com/garduxlive/"
              target="_blank"
              rel="noopener noreferrer"
              variant="bordered"
              className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium rounded-full border-1.5 border-white/20 hover:border-white/40 bg-gradient-to-r from-pink-500/90 to-pink-600/90 text-white/95 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
              Instagram
            </Button>

            <Button
              variant="bordered"
              className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium rounded-full border-1.5 border-gray-900/20 hover:border-teal-500/40 bg-white/90 hover:bg-white/95 text-gray-800 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
              Explora Las Sesiones
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}>
        <svg
          className="w-8 h-8 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
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

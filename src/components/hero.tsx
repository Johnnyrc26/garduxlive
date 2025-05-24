import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-16 md:pt-24 pb-20 md:pb-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-warning/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GARDUX LIVE SESSIONS
            </h1>
            <h3 className="text-foreground-600 text-lg md:text-xl mb-8 max-w-2xl font-bold tracking-tight bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300">
  Music knows no borders.
</h3>
            <p className="text-foreground-600 text-lg md:text-xl mb-8 max-w-2xl">
              We are a young team that brings upcoming artists from Latin
              America to Europe. Discover unique sounds, unforgettable events,
              and a network connecting artists, cultures, and audiences.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000&auto=format&fit=crop"
                alt="Artist performing"
                className="relative z-10 rounded-2xl object-cover w-full h-full shadow-xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

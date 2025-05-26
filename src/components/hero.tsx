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
            <div className="relative w-full aspect-auto max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-xl"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600779547877-be592ef5aad3?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Artist performing"
                  className="w-full h-full object-cover transform transition-all duration-300"
                  style={{
                    boxShadow: '0 0 25px 15px rgba(0, 0, 0, 0.15)',
                    filter: 'blur(0.5px)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)',
                  }}
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

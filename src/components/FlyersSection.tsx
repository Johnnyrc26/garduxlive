"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Flyer, flyers } from "@/data/flyers";


const FlyersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlyer, setSelectedFlyer] = useState<Flyer | null>(null);
  const [currentFlyerIndex, setCurrentFlyerIndex] = useState(0);

  const openModal = (flyer: Flyer) => {
    const index = flyers.findIndex((f) => f.id === flyer.id);
    setCurrentFlyerIndex(index);
    setSelectedFlyer(flyer);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigateFlyers = (direction: "prev" | "next") => {
    let newIndex;
    if (direction === "next") {
      newIndex = (currentFlyerIndex + 1) % flyers.length;
    } else {
      newIndex = (currentFlyerIndex - 1 + flyers.length) % flyers.length;
    }
    setCurrentFlyerIndex(newIndex);
    setSelectedFlyer(flyers[newIndex]);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === flyers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flyers.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <span className="bg-gradient-to-r from-pink-500 to-teal-600 bg-clip-text text-transparent">
            Participaciones
          </span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex flex-col cursor-pointer"
                onClick={() => openModal(flyers[currentIndex])}>
                <div className="relative flex-1 group">
                  <img
                    src={flyers[currentIndex].imageUrl}
                    
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      Ampliar
                    </div>
                  </div>
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">
                    {flyers[currentIndex].title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-200 mb-3">
                    <span className="mr-4">📅 {flyers[currentIndex].date}</span>
                    <span>📍 {flyers[currentIndex].location}</span>
                  </div>
                  <p className="text-sm text-gray-200">
                    {flyers[currentIndex].description}
                  </p>
                </div> */}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110"
            aria-label="Anterior flyer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110"
            aria-label="Siguiente flyer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {flyers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-pink-500 w-8" : "bg-gray-300"
                }`}
                aria-label={`Ir al flyer ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal para ver el flyer en grande */}
      <AnimatePresence>
        {isModalOpen && selectedFlyer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 flex flex-col items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors z-10 bg-black/50 rounded-full p-2"
                aria-label="Cerrar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="relative w-full h-full flex flex-col">
                {/* Flecha izquierda */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateFlyers("prev");
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110"
                  aria-label="Flyer anterior">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Imagen */}
                <div className="flex-1 flex items-center justify-center overflow-auto px-16">
                  <img
                    src={selectedFlyer.imageUrl}
                    
                    className="max-w-full max-h-[calc(100vh-8rem)] object-contain"
                  />
                </div>

                {/* Flecha derecha */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateFlyers("next");
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110"
                  aria-label="Siguiente flyer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FlyersSection;

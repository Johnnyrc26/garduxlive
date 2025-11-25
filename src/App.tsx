import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { useEffect } from "react";
import { Shows } from "./components/shows";
import { Trayectoria } from "./components/trayectoria";
import { Artistas } from "./components/artistas";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import FlyersSection from "./components/FlyersSection";

export default function App() {
  // Prevenir scroll horizontal en móviles
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-content2">
      <Header />
      <main>
        <Hero />
        <Trayectoria />
        <FlyersSection />
        <Shows />
        <Artistas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

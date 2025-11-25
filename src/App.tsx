import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Shows } from "./components/shows";
import { Trayectoria } from "./components/trayectoria";
import { Artistas } from "./components/artistas";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-content2">
      <Header />
      <main>
        <Hero />
        <Shows />
        <Trayectoria />
        <Artistas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

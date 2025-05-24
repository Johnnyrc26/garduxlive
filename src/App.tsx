import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Shows } from "./components/shows";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Projects } from "./components/projects";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-content2">
      <Header />
      <main>
        <Hero />
        <Shows />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

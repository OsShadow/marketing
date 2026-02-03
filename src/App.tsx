import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Gallery />
      <Contact />

    </main>
  );
}


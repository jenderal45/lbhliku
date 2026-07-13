import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Informasi from "@/sections/Informasi";
import Publikasi from "@/sections/Publikasi";
import Statistik from "@/sections/Statistik";
import HubungiKami from "@/sections/HubungiKami";
import Footer from "@/sections/Footer";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Informasi />
      <Publikasi />
      <Statistik />
      <HubungiKami />
      <Footer />
    </div>
  );
}

export default App;

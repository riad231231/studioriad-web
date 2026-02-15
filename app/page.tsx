// import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Gallery } from "@/components/Gallery";
import { Videos } from "@/components/Videos";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-white">
      {/* Navbar is now in global layout */}
      <Hero />
      <About />
      <Reviews />
      <Gallery />
      <Videos />
      <Services />
      <Footer />
    </main>
  );
}

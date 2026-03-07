// import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Gallery } from "@/components/Gallery";
import { Videos } from "@/components/Videos";
import { Services } from "@/components/Services";
import { InternalLinks } from "@/components/InternalLinks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Studioriad",
            "image": "https://studioriad.com/stills/photographe-videaste-mariage-paris.jpg",
            "@id": "https://studioriad.com",
            "url": "https://studioriad.com",
            "telephone": "+33615692839",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Vitry-sur-Seine",
              "addressLocality": "Vitry-sur-Seine",
              "postalCode": "94400",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 48.7876,
              "longitude": 2.3928
            },
            "priceRange": "$$$",
            "description": "Photographe et Vidéaste de mariage haut de gamme à Paris et en Île-de-France."
          })
        }}
      />
      {/* Navbar is now in global layout */}
      <Hero />
      <About />
      <Reviews />
      <Gallery />
      <Videos />
      <Services />
      <InternalLinks />
      <Footer />
    </main>
  );
}

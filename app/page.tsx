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
          __html: JSON.stringify([
            {
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
              "description": "Photographe et Cinéaste de prestige spécialisé dans le mariage oriental et le film cinématographique à Paris."
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Location Photobooth Mariage Paris",
              "image": "https://studioriad.com/pb-images/borne-selfies.jpg",
              "description": "Location de borne à selfies photobooth pour mariages et événements à Paris et en Île-de-France. Impressions instantanées, design élégant.",
              "sku": "PB-001",
              "offers": {
                "@type": "Offer",
                "url": "https://studioriad.com/photobooth",
                "priceCurrency": "EUR",
                "price": "290.00",
                "priceValidUntil": "2027-12-31",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "FR",
                  "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
                },
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "EUR" },
                  "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "FR", "addressRegion": "Île-de-France" }
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "12"
              },
              "review": {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Julie" },
                "datePublished": "2024-10-15",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "Le photobooth a été un véritable succès lors de notre mariage ! Qualité au top."
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Forfait Standard Mariage",
              "image": "https://studioriad.com/stills/photographe-videaste-mariage-paris.jpg",
              "description": "Livre photos 20x20cm, Film de mariage Full HD (20mn), 1 Photographe & 1 Vidéaste de Prestige.",
              "sku": "MRG-STD",
              "offers": {
                "@type": "Offer",
                "url": "https://studioriad.com/#services",
                "priceCurrency": "EUR",
                "price": "1790.00",
                "priceValidUntil": "2027-12-31",
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "FR",
                  "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
                },
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "EUR" },
                  "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "FR", "addressRegion": "Île-de-France" }
                }
              },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "34" },
              "review": {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sabrina B-Gacem" },
                "datePublished": "2024-05-20",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "Un grand merci à Riad qui a rendu notre mariage incroyable."
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Prestige Cinématique",
              "image": "https://studioriad.com/stills/photographe-videaste-mariage-paris.jpg",
              "description": "Livre photo Prestige 30x30cm, Moyen Métrage Full HD (45mn), Prise de vue aérienne (Drone).",
              "sku": "MRG-PRE",
              "offers": {
                "@type": "Offer",
                "url": "https://studioriad.com/#services",
                "priceCurrency": "EUR",
                "price": "2390.00",
                "priceValidUntil": "2027-12-31",
                "availability": "https://schema.org/InStock",
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "FR",
                  "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
                },
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "EUR" },
                  "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "FR", "addressRegion": "Île-de-France" }
                }
              },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "28" },
              "review": {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Leila B" },
                "datePublished": "2024-08-10",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "C'était tout simplement parfait ! Je recommande vivement."
              }
            }
          ])
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

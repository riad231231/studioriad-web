import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Location Photobooth Paris & Île-de-France | Borne à Selfie Mariage - Studio Riad",
    description: "Louez votre photobooth (borne à selfie) luxe à Paris et Île-de-France pour mariages et événements. Impressions instantanées, design élégant, photos illimitées.",
    alternates: {
        canonical: "/photobooth",
    },
};

export default function PhotoboothLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Location Borne à Selfie / Photobooth - Studio Riad",
        "image": "https://studioriad.com/photobooth/borne-selfies.jpg",
        "description": "Location de borne photo tactile design pour mariages et événements à Paris et Île-de-France (94400 Vitry-sur-Seine). Impressions instantanées, galerie web, qualité reflex.",
        "brand": {
            "@type": "Brand",
            "name": "Studio Riad"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://studioriad.com/photobooth",
            "priceCurrency": "EUR",
            "price": "290",
            "availability": "https://schema.org/InStock",
            "areaServed": "Île-de-France"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}

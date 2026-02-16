import type { Metadata } from 'next';
import { Camera, Check, ShieldCheck, MapPin, Phone, Car, Baby, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Photo d'identité ANTS Vitry-sur-Seine | Studioriad",
    description: "Photos d'identité agréées ANTS à Vitry-sur-Seine. Spécialiste bébés & nouveaux-nés. Permis de conduire ePhoto, passeport, carte de séjour. Satisfait ou remboursé. Déplacement domicile.",
    openGraph: {
        title: "Photo d'identité ANTS Vitry-sur-Seine | Studioriad",
        description: "Photos d'identité conformes et agréées ANTS. Spécialiste bébés. Sur RDV.",
        images: [{ url: '/images/logo.png' }], // Adjust if needed
    },
};

export default function IdentityPhotoPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Studioriad - Photos d'identité ANTS Vitry-sur-Seine",
        "description": "Photos d'identité agréées ANTS pour permis de conduire, passeport, carte de séjour. Spécialiste bébés et nouveaux-nés à Vitry-sur-Seine.",
        "image": "https://studioriad.com/images/logo.png",
        "telephone": "0615692839",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Votre adresse ici", // TODO: Mettre la vraie adresse si possible
            "addressLocality": "Vitry-sur-Seine",
            "postalCode": "94400",
            "addressCountry": "FR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.7892,
            "longitude": 2.3946
        },
        "url": "https://studioriad.com/photos-identite",
        "priceRange": "€€",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1"
        },
        "priceValidUntil": "2026-12-31",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "19:00"
            }
        ],
        "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "price": "10.00",
            "availability": "https://schema.org/InStock",
            "url": "https://studioriad.com/photos-identite",
            "priceValidUntil": "2026-12-31",
            "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "FR",
                "returnPolicyCategory": "https://schema.org/MoneyBack",
                "merchantReturnDays": "0",
                "returnMethod": "https://schema.org/ReturnInStore",
                "returnFees": "https://schema.org/FreeReturn"
            },
            "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "EUR"
                },
                "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "FR"
                }
            }
        }
    };

    return (
        <div className="bg-cream min-h-screen text-charcoal pt-20 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Hero Section */}
            <section className="relative py-20 px-6 md:px-12 text-center overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold mb-6 border border-gold/20">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-sm font-medium">Agréé ANTS & Préfecture</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-6 leading-tight">
                        Photos d'identité <span className="text-gold italic">conformes</span> à Vitry-sur-Seine
                    </h1>
                    <p className="text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto font-light">
                        Passeport, CNI, Permis de conduire, Carte de séjour. <br />
                        <span className="font-semibold text-charcoal">Spécialiste bébés et nouveaux-nés.</span>
                        <br /> Satisfait ou remboursé.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:0615692839"
                            className="px-8 py-3 bg-charcoal text-cream font-medium rounded-full hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Appeler le 06 15 69 28 39
                        </a>
                        <a
                            href="https://share.google/AFYPZjZmDsNkd0BDs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-charcoal/20 text-charcoal font-medium rounded-full hover:border-gold hover:text-gold transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <MapPin className="w-5 h-5" />
                            Voir sur Google Maps
                        </a>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -z-0 pointer-events-none" />
            </section>

            {/* Services Grid */}
            <section className="py-16 px-6 md:px-12 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-serif text-3xl text-center mb-12 text-charcoal">Nos Services Agréés</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-charcoal/5 hover:border-gold/30 transition-all group">
                            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                                <Camera className="w-6 h-6 text-gold" />
                            </div>
                            <h3 className="text-xl font-serif mb-3">Passeport & CNI</h3>
                            <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                                Photos biométriques conformes aux normes ISO/IEC 19794-5 pour carte d'identité et passeport français ou étranger.
                            </p>
                            <ul className="text-sm space-y-2 text-charcoal/60">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> Fond uni clair</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> Visage dégagé</li>
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-charcoal/5 hover:border-gold/30 transition-all group">
                            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                                <ShieldCheck className="w-6 h-6 text-gold" />
                            </div>
                            <h3 className="text-xl font-serif mb-3">Permis & ePhoto</h3>
                            <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                                Service agréé ANTS pour permis de conduire et titre de séjour avec signature numérique.
                            </p>
                            <ul className="text-sm space-y-2 text-charcoal/60">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> Code ePhoto unique</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> Signature dématérialisée</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> Transfert instantané</li>
                            </ul>
                        </div>

                        {/* Service 3: Baby Specialist */}
                        <div className="bg-white p-8 rounded-xl shadow-md border-2 border-gold/20 relative overflow-hidden group hover:border-gold/40 transition-colors">
                            <div className="absolute top-0 right-0 bg-gold text-cream font-bold text-xs px-3 py-1">POPULAIRE</div>
                            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                                <Baby className="w-6 h-6 text-gold" />
                            </div>
                            <h3 className="text-xl font-serif mb-3">Bébés & Nouveaux-nés</h3>
                            <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                                Expertise spécifique pour les tout-petits. Patience et matériel adapté pour une photo réussie du premier coup.
                            </p>
                            <ul className="text-sm space-y-2 text-charcoal/60">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> Dès la naissance</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> Studio chauffé</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> 100% Accepté en mairie</li>
                            </ul>
                        </div>

                        {/* Service 4: Home Visit */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-charcoal/5 hover:border-gold/30 transition-all group">
                            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                                <Car className="w-6 h-6 text-gold" />
                            </div>
                            <h3 className="text-xl font-serif mb-3">À Domicile / EHPAD</h3>
                            <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                                Déplacement possible pour les personnes âgées, à mobilité réduite ou en maison de retraite.
                            </p>
                            <ul className="text-sm space-y-2 text-charcoal/60">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> Vitry et alentours</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> Matériel mobile pro</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> Sur rendez-vous</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us / Guarantee */}
            <section className="py-20 px-6 md:px-12 bg-cream">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-serif text-3xl mb-12 text-charcoal">Pourquoi choisir Studioriad ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-charcoal/10">
                        <div className="p-6">
                            <div className="text-4xl font-serif text-gold mb-2">99.9%</div>
                            <div className="font-semibold mb-2">Taux d'acceptation</div>
                            <p className="text-sm text-charcoal/60">Nos photos respectent scrupuleusement les 32 points de contrôle obligatoires.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-serif text-gold mb-2">50+</div>
                            <div className="font-semibold mb-2">Avis Google</div>
                            <p className="text-sm text-charcoal/60">Une réputation bâtie sur la qualité et la satisfaction client.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-serif text-gold mb-2">0€</div>
                            <div className="font-semibold mb-2">Risque</div>
                            <p className="text-sm text-charcoal/60">Garantie "Satisfait ou Remboursé". Si la photo est refusée, on la refait gratuitement.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section (SEO Goldmine) */}
            <section className="py-16 px-6 md:px-12 bg-white/50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-serif text-3xl mb-10 text-center text-charcoal">Questions Fréquentes</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-charcoal mb-2 text-lg">Faites-vous les photos d'identité pour les bébés ?</h3>
                            <p className="text-charcoal/70">Oui, absolument. Nous sommes spécialisés dans les photos de nourrissons et bébés. C'est un exercice délicat que les photomatons ne peuvent pas réaliser correctement. Nous prenons le temps nécessaire pour que la photo soit conforme.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-charcoal mb-2 text-lg">C'est quoi une ePhoto avec code ANTS ?</h3>
                            <p className="text-charcoal/70">C'est une photo dématérialisée obligatoire pour le permis de conduire en ligne. Vous recevez une planche photo classique + un code unique à saisir sur le site de l'ANTS. Votre signature est également numérisée.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-charcoal mb-2 text-lg">Faut-il prendre rendez-vous ?</h3>
                            <p className="text-charcoal/70">Oui, nous recevons uniquement sur rendez-vous pour garantir un service de qualité et éviter l'attente. Appelez-nous au 06 15 69 28 39.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-charcoal mb-2 text-lg">Combien de temps ça prend ?</h3>
                            <p className="text-charcoal/70">La prise de vue et l'impression prennent environ 10 à 15 minutes. Vous repartez avec vos photos immédiatement.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Contact */}
            <section className="py-20 px-6 md:px-12 text-center bg-cream">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl mb-8 text-charcoal">Nous trouver</h2>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold/20 inline-block w-full max-w-2xl text-left">
                        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                            <div className="text-left space-y-6 flex-1">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold/10 p-2 rounded-full">
                                        <MapPin className="w-5 h-5 text-gold shrink-0" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-charcoal">Studioriad</h4>
                                        <p className="text-charcoal/60">Vitry-sur-Seine</p>
                                        <a href="https://share.google/AFYPZjZmDsNkd0BDs" target="_blank" className="text-gold text-sm hover:underline mt-1 block font-medium">Voir l'itinéraire</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold/10 p-2 rounded-full">
                                        <Phone className="w-5 h-5 text-gold shrink-0" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-charcoal">Téléphone</h4>
                                        <a href="tel:0615692839" className="text-charcoal/80 hover:text-gold transition-colors font-medium">06 15 69 28 39</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold/10 p-2 rounded-full">
                                        <Clock className="w-5 h-5 text-gold shrink-0" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-charcoal">Horaires</h4>
                                        <p className="text-charcoal/60">Sur rendez-vous uniquement</p>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Map Placeholder or Google Reviews badge */}
                            <div className="flex-1 w-full flex flex-col items-center justify-center gap-4 p-6 bg-charcoal text-cream rounded-xl">
                                <div className="text-center">
                                    <div className="text-2xl font-serif text-gold mb-1">Excellent</div>
                                    <div className="flex gap-1 justify-center mb-2">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm text-cream/70">Basé sur 50+ avis Google</p>
                                </div>
                                <a href="https://share.google/AFYPZjZmDsNkd0BDs" target="_blank" className="px-6 py-2 border border-gold/50 text-gold hover:bg-gold hover:text-charcoal transition-all text-sm rounded-full">
                                    Lire les avis
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <a href="tel:0615692839" className="px-10 py-4 bg-gold text-white font-medium text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-3">
                            <Phone className="w-6 h-6" />
                            Prendre rendez-vous maintenant
                        </a>
                        <p className="mt-4 text-sm text-charcoal/50 animate-pulse">
                            Réponse rapide garantie
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

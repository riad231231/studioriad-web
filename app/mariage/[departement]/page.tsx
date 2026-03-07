import { notFound } from "next/navigation";
import { departementsIDF } from "@/lib/departements-idf";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Camera, Video, Heart, MapPin } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
    return departementsIDF.map((dept) => ({
        departement: dept.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ departement: string }> }) {
    const { departement: departementSlug } = await params;
    const departement = departementsIDF.find(d => d.slug === departementSlug);

    if (!departement) {
        return {
            title: "Photographe Mariage Île-de-France | Studioriad",
        };
    }

    return {
        title: `Photographe & Cinéaste Mariage Oriental ${departement.name} (${departement.number}) | Studioriad`,
        description: `Immortalisez votre mariage maghrébin en ${departement.name} avec excellence. Photographie d&apos;art et film cinématographique à ${departement.number}.`,
    };
}

export default async function DepartementMariagePage({ params }: { params: Promise<{ departement: string }> }) {
    const { departement: departementSlug } = await params;
    const departement = departementsIDF.find(d => d.slug === departementSlug);

    if (!departement) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-cream selection:bg-gold selection:text-white">
            {/* Hero Section */}
            <section className="relative min-h-[75vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-28 md:pt-0">
                <div className="absolute inset-0 bg-charcoal/40 z-10" />
                <div className="absolute inset-0">
                    <Image
                        src="/images for blog/photographe-cameraman-mariage-maghrebin.jpg"
                        alt={`Photographe Mariage Oriental ${departement.name}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 container mx-auto px-6 text-center">
                    <div
                        className="animate-fade-in-up"
                    >
                        <span className="text-gold uppercase tracking-[0.2em] text-sm md:text-base mb-4 block">
                            {departement.name} ({departement.number}) & {departement.region}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight shadow-sm">
                            Photographe & Cinéaste <br className="hidden md:block" /> Mariage Oriental
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
                            De la narration cinématographique à la photographie d&apos;art, nous immortalisons l&apos;élégance de votre mariage maghrébin dans le {departement.name}.
                        </p>
                        <a
                            href="/#contact"
                            className="inline-block bg-gold text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-charcoal transition-all duration-300"
                        >
                            Vérifier nos disponibilités
                        </a>
                    </div>
                </div>
            </section>

            {/* SEO Text Section: Why Choose Us locally */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-6">
                            L'Expertise du Mariage Maghrébin en {departement.name} ({departement.number})
                        </h2>
                        <p className="text-charcoal/70 text-lg leading-relaxed max-w-3xl mx-auto">
                            Un mariage oriental est unique. Les tenues de la neggafa, l'entrée majestueuse en Amaria, les rythmes envoûtants de la Dakka Marrakchia... En tant que <strong>photographe et vidéaste spécialisés dans le mariage maghrébin basés en région parisienne</strong>, Studioriad se déplace partout en <strong>{departement.name}</strong> pour vous offrir des souvenirs à la hauteur de votre célébration.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 mt-16">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                                <Camera className="w-8 h-8 text-gold group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-serif text-charcoal mb-3">Photo-Reportage</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                Fini les poses figées : nous privilégions la spontanéité et l'émotion pour capturer la véritable essence de votre couple et de vos invités.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                                <Video className="w-8 h-8 text-gold group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-serif text-charcoal mb-3">Film Cinématographique</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                Notre cinéaste de mariage réalise une œuvre immersive qui retranscrit l&apos;élégance et l&apos;émotion de votre soirée.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                                <Heart className="w-8 h-8 text-gold group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-serif text-charcoal mb-3">Un Duo Complice</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                Travailler avec une équipe photo et vidéo habituée à collaborer garantit une discrétion totale et une esthétique visuelle cohérente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other local areas */}
            <section className="py-16 bg-cream border-t border-gold/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-serif text-2xl text-charcoal mb-6">Nos Autres Zones d'Intervention en Île-de-France</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/mariage" className="px-4 py-2 border border-charcoal/20 rounded-full text-sm text-charcoal/80 hover:border-gold hover:text-gold transition-colors">
                            Retour à Paris & Île-de-France globale
                        </Link>
                        {departementsIDF.filter(d => d.slug !== departement.slug).map(dept => (
                            <Link key={dept.slug} href={`/mariage/${dept.slug}`} className="px-4 py-2 bg-white rounded-full shadow-sm text-sm text-charcoal hover:bg-gold hover:text-white transition-colors">
                                {dept.name} ({dept.number})
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

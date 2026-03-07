import type { Metadata } from 'next';
import { notFound } from "next/navigation";
import { departementsIDF } from "@/lib/departements-idf";

export async function generateMetadata({ params }: { params: Promise<{ departement: string }> }): Promise<Metadata> {
    const { departement: departementSlug } = await params;
    const departement = departementsIDF.find(d => d.slug === departementSlug);

    if (!departement) {
        return {
            title: "Photographe Mariage Oriental introuvable",
        };
    }

    return {
        title: `Photographe & Cinéaste Mariage Oriental ${departement.name} (${departement.number}) | Studioriad`,
        description: `Photographe et Cinéaste de prestige spécialisés dans le mariage maghrébin (marocain, algérien, tunisien) dans le ${departement.name} (${departement.number}). Reportage photo et cinéma d'exception.`,
        openGraph: {
            title: `Photographe & Cinéaste Mariage Oriental ${departement.name} | Studioriad`,
            description: `Votre photographe et cinéaste de mariage oriental de prestige dans le ${departement.name} (${departement.number}).`,
        },
    };
}

export default function DepartementMariageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

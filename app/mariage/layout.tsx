import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Photographe Mariage Oriental Paris & Île-de-France (94)",
    description: "Studio Riad : Photographe et Cameraman spécialisés dans le mariage maghrébin (marocain, algérien, tunisien) à Paris et en Île-de-France. Reportage photo et vidéo.",
    openGraph: {
        title: "Photographe Mariage Oriental Paris & Île-de-France | Studio Riad",
        description: "Studio Riad : L'Expertise du mariage maghrébin en photo et vidéo.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

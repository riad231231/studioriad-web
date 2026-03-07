import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Photographe & Cinéaste Mariage Oriental Paris | Prestige Oriental",
    description: "Studioriad : Photographe et Cinéaste de prestige spécialisés dans le mariage maghrébin (marocain, algérien, tunisien) à Paris. Le luxe de l'image cinématographique.",
    openGraph: {
        title: "Photographe & Vidéaste de Prestige Mariage Oriental | Studioriad",
        description: "Studioriad : L'Excellence du mariage maghrébin en photo et cinéma.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

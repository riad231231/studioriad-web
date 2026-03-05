import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Location Photobooth Paris & Île-de-France | Studioriad",
    description: "Animez votre événement avec notre borne photo premium. Location de photobooth pour mariages, soirées d'entreprise et anniversaires à Paris et en Île-de-France.",
};

export default function PhotoboothLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

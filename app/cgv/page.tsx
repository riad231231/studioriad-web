import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions Générales de Vente (CGV) | Studioriad",
    description: "Conditions générales de vente et d'utilisation des services de photographie et vidéographie de Studioriad.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function CGVPage() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-serif text-charcoal mb-8 text-center">
                    Conditions Générales de Vente (CGV)
                </h1>

                <div className="prose prose-lg prose-stone mx-auto text-charcoal/80">
                    <p className="text-sm italic text-gray-500 mb-8">
                        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                    </p>

                    <h2 className="text-xl font-bold text-charcoal mt-8 mb-4">1. Objet et Champ d'application</h2>
                    <p>
                        Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre <strong>STUDIORIAD</strong> (ci-après "le Photographe/Vidéaste") et ses clients (ci-après "le Client"), dans le cadre de la vente de prestations de services photographiques, vidéographiques et de location de borne photo (Photobooth).
                    </p>
                    <p>
                        Toute réservation de séance ou commande de produits entraîne l'adhésion entière et sans réserve aux présentes CGV, sauf conditions particulières consenties par écrit entre le prestataire et le client.
                    </p>

                    <h2 className="text-xl font-bold text-charcoal mt-8 mb-4">2. Identité de l'entreprise</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Nom commercial :</strong> Studioriad</li>
                        <li><strong>Siren :</strong> 512 947 102</li>
                        <li><strong>Adresse :</strong> 23 Avenue Gambetta, 94400 Vitry-sur-Seine</li>
                        <li><strong>Téléphone :</strong> 06 15 69 28 39</li>
                        <li><strong>Email :</strong> contact@studioriad.com</li>
                    </ul>

                    <h2 className="text-xl font-bold text-charcoal mt-8 mb-4">3. Tarifs et Réservation</h2>
                    <p>
                        Les tarifs appliqués sont ceux valables à la date de la commande.
                        Pour les mariages et reportages, un devis préalable est établi. Ce devis est valable pour une durée de 30 jours.
                    </p>
                    <p>
                        La réservation d'une prestation n'est définitive qu'à réception :
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Du devis ou contrat signé (avec la mention "Bon pour accord").</li>
                        <li>Du versement d'un acompte de <strong>30%</strong> du montant total de la prestation.</li>
                    </ul>
                    <p>
                        À défaut de réception de l'acompte dans les 10 jours suivant l'accord verbal ou écrit, le prestataire se réserve le droit de remettre la date en disponibilité pour d'autres clients.
                    </p>

                    <h2 className="text-xl font-bold text-charcoal mt-8 mb-4">4. Paiement</h2>
                    <p>
                        Le solde de la prestation est dû :
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Pour les mariages :</strong> Le jour de l'événement ou au plus tard à la livraison des fichiers/supports.</li>
                        <li><strong>Pour les séances studio / identité :</strong> Le jour de la séance.</li>
                        <li><strong>Pour le Photobooth :</strong> À l'installation ou au retrait du matériel selon accord.</li>
                    </ul>
                    <p>
                        Les paiements acceptés sont : Espèces, Virement bancaire, Chèque (sous réserve d'encaissement préalable pour la livraison).
                        Tout retard de paiement pourra donner lieu à des pénalités de retard.
                    </p>

                    <h2 className="text-xl font-bold text-charcoal mt-8 mb-4">5. Annulation et Report</h2>
                    <p>
                        <strong>Annulation par le Client :</strong> En cas d'annulation par le Client (sauf cas de force majeure avéré), l'acompte versé reste acquis au Prestataire à titre de dédommagement et ne sera pas remboursé.
                    </p>
                    <p>
                        <strong>Annulation par le Prestataire :</strong> En cas d'impossibilité majeure pour le Photographe/Vidéaste d'assurer la prestation (accident, maladie grave...), il s'engage à proposer un remplaçant de qualité équivalente ou à rembourser intégralement les sommes versées, sans que le Client ne puisse réclamer de dommages et intérêts supplémentaires.
                    </p>
                    <p>
                        <strong>Report (COVID-19 ou Force Majeure) :</strong> En cas de force majeure empêchant la tenue de l'événement (confinement, interdiction administrative), l'acompte sera transformé en avoir valable 18 mois pour une nouvelle date (selon disponibilités).
                    </p>

                    <h2 className="text-xl font-bold text-charcoal mt-8 mb-4">6. Déroulement de la Prestation</h2>
                    <p>
                        Le jour de l'événement, le Photographe/Vidéaste s'engage à être présent aux horaires et lieux définis dans le contrat.
                        Le Client s'engage à faciliter le travail du prestataire (accès aux lieux, respect du planning).
                        Pour les prestations de plus de 5 heures (mariages), un repas chaud doit être prévu pour l'équipe (photographe et/ou vidéaste) aux frais du Client.
                    </p>

                    <h2 className="text-xl font-bold text-charcoal mt-8 mb-4">7. Photobooth (Borne Photo)</h2>
                    <p>
                        Dans le cadre de la location d'un Photobooth :
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Le Client est responsable du matériel dès son installation.</li>
                        <li>Une caution (chèque non encaissé) pourra être demandée.</li>
                        <li>En cas de dégradation (renversement de liquide, chute, vandalisme), les frais de réparation ou de remplacement seront intégralement facturés au Client.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-charcoal mt-8 mb-4">8. Post-traitement et Livraison</h2>
                    <p>
                        Le post-traitement (tri, retouches colorimétriques, montage vidéo) est propre au style artistique du Prestataire. Le Client reconnaît avoir pris connaissance de ce style avant la réservation. Aucune réclamation ne pourra être faite si les photos sont conformes au style habituel du photographe.
                    </p>
                    <p>
                        <strong>Fichiers bruts (RAW/Rushes) :</strong> Les fichiers bruts ne sont jamais livrés au client. Le produit fini est le résultat du travail d'auteur du prestataire.
                    </p>
                    <p>
                        <strong>Délais de livraison (indicatifs) :</strong>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Photos Mariage : 1 à 2 semaines.</li>
                            <li>Vidéo Mariage : 2 à 4 semaines (selon saison).</li>
                            <li>Photos Identité/Studio : Immédiat ou 24h.</li>
                        </ul>
                    </p>

                    <h2 className="text-xl font-bold text-charcoal mt-8 mb-4">9. Photos d'identité ANTS</h2>
                    <p>
                        Studioriad garantit la conformité des photos d'identité aux normes françaises (ANTS, Passeport, CNI).
                        En cas de refus par l'administration (sur présentation du justificatif de refus), la prestation sera refaite gratuitement ou remboursée intégralement.
                    </p>

                    <h2 className="text-xl font-bold text-charcoal mt-8 mb-4">10. Propriété Intellectuelle et Droit à l'image</h2>
                    <p>
                        Les prises de vue réalisées sont des œuvres de l'esprit protégées par le Code de la Propriété Intellectuelle.
                        Le Prestataire demeure seul titulaire des droits d'auteur sur les images.
                    </p>
                    <p>
                        <strong>Droits du Client :</strong> Le Client bénéficie d'un droit de reproduction et d'utilisation des photos pour un usage <strong>strictement privé et familial</strong>. Toute utilisation commerciale ou publication presse est interdite sans accord écrit.
                    </p>
                    <p>
                        <strong>Droit de publicité :</strong> Sauf avis contraire écrit du Client avant la prestation, le Prestataire se réserve le droit d'utiliser certaines images (hors moments gênants ou dégradants) pour la promotion de son activité (site web, réseaux sociaux, portfolio). Le respect de la vie privée reste une priorité.
                    </p>

                    <h2 className="text-xl font-bold text-charcoal mt-8 mb-4">11. Données Personnelles (RGPD)</h2>
                    <p>
                        Les informations collectées lors de la commande sont nécessaires à la bonne gestion de la prestation. Elles ne sont ni vendues ni transmises à des tiers.
                        Les fichiers numériques sont conservés par le Photographe pendant une durée de 1 an à compter de la livraison (sauvegarde de sécurité), sauf catastrophe informatique majeure. Passé ce délai, il appartient au Client de veiller à la conservation de ses souvenirs.
                    </p>

                    <h2 className="text-xl font-bold text-charcoal mt-8 mb-4">12. Loi applicable et Litiges</h2>
                    <p>
                        Les présentes CGV sont soumises à la loi française. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, le tribunal compétent sera celui du domicile du Prestataire.
                    </p>

                    <div className="mt-12 p-6 bg-cream/50 rounded-lg border border-gold/20 text-center">
                        <p className="font-serif italic text-charcoal">
                            "Capturer vos souvenirs est une responsabilité que nous prenons très au cœur."
                        </p>
                        <p className="mt-2 text-sm font-bold">— L'équipe Studioriad</p>
                    </div>

                </div>
            </div>
        </main>
    );
}

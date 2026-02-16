export function Footer() {
    return (
        <footer className="bg-charcoal text-cream py-20" id="contact">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-serif mb-8 tracking-wide">Studioriad</h2>
                <p className="font-serif italic text-xl mb-4 text-gold">
                    Videaste & photographe de mariage à Paris et région parisienne - Ile de France.
                </p>
                <p className="font-serif italic text-base mb-8 text-gold/60">
                    75000 - 94000 - 93000 - 92000 - 77000 - 78000 - 95000 - 60000
                </p>
                <p className="text-xs text-cream/20 font-sans max-w-2xl mx-auto mb-12">
                    Studioriad est votre photographe à Vitry-sur-Seine. Retrouvez aussi votre vidéaste mariage sur Mariage.net.
                </p>

                <div className="grid md:grid-cols-3 gap-12 mb-16 max-w-4xl mx-auto">
                    <div>
                        <h3 className="text-gold uppercase tracking-widest mb-4 text-sm font-semibold">Adresse</h3>
                        <p className="text-cream/80">23 Avenue Gambetta</p>
                        <p className="text-cream/80">94400 Vitry-Sur-Seine</p>
                        <p className="text-cream/80 text-sm mt-2">(Visite sur rendez-vous)</p>
                    </div>
                    <div>
                        <h3 className="text-gold uppercase tracking-widest mb-4 text-sm font-semibold">Contact</h3>
                        <p className="text-cream/80">contact@studioriad.com</p>
                        <p className="text-cream/80">06 15 69 28 39</p>
                    </div>
                    <div>
                        <h3 className="text-gold uppercase tracking-widest mb-4 text-sm font-semibold">Suivez-nous</h3>
                        <div className="flex flex-col space-y-2">
                            <a href="https://instagram.com/studioriad" target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-gold transition-colors">Instagram</a>
                            <a href="https://tiktok.com/@studioriadcinemat" target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-gold transition-colors">TikTok</a>
                            <a href="https://youtube.com/studioriad" target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-gold transition-colors">YouTube</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream/40 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Studioriad.com Tous droits réservés.</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a href="/cgv" className="hover:text-gold transition-colors">CGV & Mentions Légales</a>
                        <p>SIREN 512947102</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

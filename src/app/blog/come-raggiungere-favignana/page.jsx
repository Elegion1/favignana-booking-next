import ClientLayout from "../../../components/ClientLayout";
import Link from "next/link";

export const metadata = {
    title: "Come Raggiungere Favignana: Guida Completa Transfer Aeroporti 2025",
    description: "📍 Guida completa per raggiungere Favignana da aeroporti Trapani e Palermo. Transfer, orari traghetti, prezzi aggiornati 2025. Prenota il tuo transfer!",
    keywords: "come raggiungere favignana, aeroporto trapani favignana, transfer palermo favignana, traghetti favignana orari, prezzi transfer sicilia"
};

export default function ComeRaggiungereFavignana() {
    return (
        <ClientLayout>
            <article className="container mx-auto mt-10 p-5 max-w-4xl">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Come Raggiungere Favignana: Guida Completa 2025</h1>
                    <p className="text-lg text-gray-600">Tutto quello che devi sapere per arrivare a Favignana dagli aeroporti di Trapani e Palermo</p>
                    <div className="text-sm text-gray-500 mt-2">Aggiornato il 28 Luglio 2025</div>
                </header>

                <div className="prose max-w-none">
                    <h2 className="text-2xl font-semibold mt-8 mb-4">🛫 Dall'Aeroporto di Trapani Birgi</h2>
                    <p className="mb-4">
                        L'aeroporto di Trapani Birgi "Vincenzo Florio" è il più vicino a Favignana, distante solo 30 minuti dal porto di Trapani.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-3">Transfer Aeroporto Trapani - Porto</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Durata:</strong> 30 minuti</li>
                        <li><strong>Prezzo:</strong> da €25 (transfer condiviso) a €50 (privato)</li>
                        <li><strong>Disponibilità:</strong> 7 giorni su 7, dalle 6:00 alle 23:00</li>
                    </ul>

                    <div className="bg-c/10 p-6 rounded-lg mb-6">
                        <h4 className="font-semibold mb-2">💡 Consiglio</h4>
                        <p>Prenota in anticipo il tuo transfer per garantirti il posto e un prezzo migliore!</p>
                        <Link 
                            href="/transfer" 
                            className="inline-block mt-3 bg-c text-white px-4 py-2 rounded hover:bg-c/80"
                        >
                            Prenota Transfer da Trapani
                        </Link>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">✈️ Dall'Aeroporto di Palermo</h2>
                    <p className="mb-4">
                        L'aeroporto di Palermo "Falcone e Borsellino" dista circa 1 ora e 30 minuti dal porto di Trapani.
                    </p>

                    <h3 className="text-xl font-semibold mb-3">Transfer Aeroporto Palermo - Trapani</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Durata:</strong> 1 ora e 30 minuti</li>
                        <li><strong>Prezzo:</strong> da €100 (transfer condiviso) a €180 (privato)</li>
                        <li><strong>Disponibilità:</strong> Su prenotazione</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">🚢 Traghetti per Favignana</h2>
                    <p className="mb-4">Dal porto di Trapani partono traghetti e aliscafi per Favignana durante tutto l'anno.</p>
                    
                    <h3 className="text-xl font-semibold mb-3">Orari e Compagnie</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Liberty Lines:</strong> Aliscafi veloci (20 minuti)</li>
                        <li><strong>Siremar:</strong> Traghetti (35 minuti)</li>
                        <li><strong>Frequenza:</strong> Ogni 30-60 minuti in alta stagione</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">📅 Quando Prenotare</h2>
                    <p className="mb-4">
                        Ti consigliamo di prenotare il transfer almeno 24-48 ore prima della partenza, 
                        soprattutto in alta stagione (giugno-settembre).
                    </p>

                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mt-8">
                        <h3 className="text-xl font-semibold mb-3">🎯 Pianifica il Tuo Viaggio</h3>
                        <p className="mb-4">Vuoi organizzare il tuo transfer per Favignana? Contattaci per un preventivo personalizzato!</p>
                        <div className="flex gap-4">
                            <Link 
                                href="/transfer" 
                                className="bg-c text-white px-6 py-3 rounded hover:bg-c/80"
                            >
                                Prenota Transfer
                            </Link>
                            <Link 
                                href="/contact" 
                                className="border border-c text-c px-6 py-3 rounded hover:bg-c/10"
                            >
                                Contattaci
                            </Link>
                        </div>
                    </div>
                </div>

                <footer className="mt-12 pt-8 border-t">
                    <Link href="/blog" className="text-c hover:underline">
                        ← Torna al Blog
                    </Link>
                </footer>
            </article>
        </ClientLayout>
    );
}

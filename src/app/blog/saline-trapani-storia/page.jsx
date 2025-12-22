import ClientLayout from "../../../components/ClientLayout";
import Link from "next/link";

export const metadata = {
    title: "Le Saline di Trapani: Storia, Tradizione e Mulini a Vento",
    description: "🌅 Scopri la storia millenaria delle saline di Trapani, tra mulini a vento, paesaggi mozzafiato e la tradizione della raccolta del sale. Una delle meraviglie naturali della Sicilia occidentale.",
    keywords: "saline di trapani, storia saline, mulini a vento trapani, raccolta sale sicilia, riserva naturale saline trapani e paceco"
};

export default function SalineDiTrapaniStoria() {
    return (
        <ClientLayout>
            <article className="container mx-auto mt-10 p-5 max-w-4xl">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Le Saline di Trapani: Storia e Tradizione</h1>
                    <p className="text-lg text-gray-600">
                        Scopri la storia millenaria delle saline di Trapani, i caratteristici mulini a vento e la tradizione secolare della raccolta del sale.
                    </p>
                    <div className="text-sm text-gray-500 mt-2">Aggiornato il 25 Luglio 2025</div>
                </header>

                <div className="prose max-w-none">
                    <h2 className="text-2xl font-semibold mt-8 mb-4">🏝️ Origini Millenarie</h2>
                    <p className="mb-4">
                        Le saline di Trapani affondano le loro radici nell’antichità: furono i Fenici, oltre 2.500 anni fa,
                        a riconoscere il potenziale di queste acque poco profonde e ricche di sale. Da allora, la produzione del “oro bianco” è
                        diventata una delle principali attività economiche della zona.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">🌬️ I Mulini a Vento</h2>
                    <p className="mb-4">
                        Simbolo inconfondibile del paesaggio trapanese, i mulini a vento venivano utilizzati per pompare l’acqua tra le vasche
                        di evaporazione e per macinare il sale essiccato. Oggi, molti di questi mulini sono stati restaurati e rappresentano
                        una delle attrazioni più fotografate della Sicilia.
                    </p>

                    <div className="bg-c/10 p-6 rounded-lg mb-6">
                        <h4 className="font-semibold mb-2">💡 Curiosità</h4>
                        <p>
                            I mulini delle saline di Trapani non erano solo decorativi: il loro funzionamento era studiato per
                            sfruttare al massimo la forza del vento proveniente dal mare, tipico della zona.
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">🧂 La Raccolta del Sale</h2>
                    <p className="mb-4">
                        La raccolta del sale avviene ancora oggi in modo tradizionale, durante l’estate, quando l’acqua delle vasche
                        evapora grazie al sole e al vento. Gli “acconciatori” del sale raccolgono a mano i cristalli che si depositano
                        sul fondo, seguendo tecniche tramandate di generazione in generazione.
                    </p>

                    <h3 className="text-xl font-semibold mb-3">Un Patrimonio di Cultura e Natura</h3>
                    <p className="mb-4">
                        L’area è oggi parte della <strong>Riserva Naturale delle Saline di Trapani e Paceco</strong>, gestita dal WWF.
                        Oltre alla produzione di sale, ospita una grande varietà di specie animali, tra cui fenicotteri rosa, aironi
                        e cavalieri d’Italia, rendendola una meta ideale per gli amanti della natura e della fotografia.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">📸 Visitare le Saline</h2>
                    <p className="mb-4">
                        Le saline possono essere visitate tutto l’anno, ma il periodo migliore è tra luglio e settembre,
                        quando avviene la raccolta del sale e il paesaggio si tinge di sfumature rosa e dorate.
                        Presso il <strong>Museo del Sale</strong> potrai scoprire gli strumenti originali e la storia
                        di questo affascinante mestiere.
                    </p>

                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mt-8">
                        <h3 className="text-xl font-semibold mb-3">🎯 Pianifica la Tua Visita</h3>
                        <p className="mb-4">
                            Vuoi visitare le saline di Trapani e scoprire la tradizione della raccolta del sale da vicino?
                            Organizza il tuo tour personalizzato con partenza da Trapani o Marsala.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="/excursion"
                                className="bg-c text-white px-6 py-3 rounded hover:bg-c/80"
                            >
                                Prenota un Tour
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
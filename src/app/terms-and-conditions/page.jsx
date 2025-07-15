import ClientLayout from "@/components/ClientLayout";
import seoData from "../../../utils/seoData";

export const metadata = {
    title: seoData["/terms-and-conditions"].title,
    description: seoData["/terms-and-conditions"].description,
};


export default function TermsAndConditions() {
    return (
        <ClientLayout>
            <div className="container mx-auto mt-10 p-5">
                <h1 className="text-3xl font-bold mb-4">Termini e Condizioni</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">1. Informazioni Generali</h2>
                    <p className="mb-4">Utilizzando il nostro sito web, accetti i presenti Termini e Condizioni. Ti invitiamo a leggere attentamente questa pagina prima di effettuare una prenotazione o inviare una richiesta tramite il modulo di contatto.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">2. Raccolta dei Dati Personali</h2>
                    <p className="mb-4">Raccogliamo i dati personali dell'utente esclusivamente per finalizzare la prenotazione e rispondere alle richieste di contatto. I dati raccolti includono, ma non sono limitati a, nome, cognome, email, numero di telefono e dettagli della prenotazione.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">3. Pagamenti</h2>
                    <p className="mb-4">I pagamenti vengono gestiti tramite PayPal. Non conserviamo né elaboriamo direttamente i dati di pagamento. Per maggiori informazioni sulla gestione dei dati, consulta l’informativa sulla privacy di PayPal.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">4. Utilizzo dei Dati</h2>
                    <p className="mb-4">I dati forniti verranno utilizzati esclusivamente per:</p>
                    <ul className="list-disc pl-6">
                        <li>Gestire le prenotazioni e fornire il servizio richiesto.</li>
                        <li>Comunicare eventuali aggiornamenti o modifiche alla prenotazione.</li>
                        <li>Rispondere alle richieste inviate tramite il modulo di contatto.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">5. Protezione dei Dati</h2>
                    <p className="mb-4">Adottiamo misure di sicurezza per proteggere i dati personali raccolti. Tuttavia, non possiamo garantire la sicurezza assoluta dei dati trasmessi via Internet.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">6. Modifiche ai Termini</h2>
                    <p className="mb-4">Ci riserviamo il diritto di modificare questi Termini e Condizioni in qualsiasi momento. Le modifiche verranno pubblicate su questa pagina con effetto immediato.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">7. Contatti</h2>
                    <p className="mb-4">Per qualsiasi domanda o richiesta relativa ai Termini e Condizioni, puoi contattarci tramite il modulo presente nella sezione contatti del sito.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">8. Cookie</h2>
                    <p className="mb-4">
                        Questo sito utilizza cookie tecnici necessari al funzionamento e, previo consenso, cookie di terze parti per finalità statistiche e di marketing. Proseguendo la navigazione o cliccando su "Accetta" nel banner, acconsenti all'uso dei cookie secondo la nostra cookie policy. Per maggiori dettagli consulta la <a href="/privacy" className="underline text-c">Cookie Policy</a>.
                    </p>
                </section>

            </div>
        </ClientLayout>
    );
}
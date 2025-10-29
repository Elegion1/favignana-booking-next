import ClientLayout from "../../components/ClientLayout";
import seoData from "../../../utils/seoData";

export const metadata = {
    title: seoData["/privacy"].title,
    description: seoData["/privacy"].description,
};

export default function Privacy() {
    return (
        <ClientLayout>
            <div className="container mx-auto mt-10 p-5">
                <h1 className="text-3xl font-bold mb-4">Informativa sulla Privacy</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">1. Introduzione</h2>
                    <p className="mb-4">
                        La presente Informativa sulla Privacy descrive le modalità con cui raccogliamo, utilizziamo e proteggiamo i dati personali degli utenti che visitano il nostro sito web o utilizzano i nostri servizi.
                        L’obiettivo è garantire la massima trasparenza e il rispetto delle normative vigenti, in particolare del Regolamento (UE) 2016/679 (GDPR).
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">2. Titolare del Trattamento</h2>
                    <p className="mb-4">
                        Il titolare del trattamento dei dati è la società o il soggetto gestore del presente sito web.
                        Per qualsiasi richiesta o informazione, è possibile contattarci tramite la sezione{" "}
                        <a href="/contact" className="underline text-c">Contatti</a>.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">3. Dati Raccolti</h2>
                    <p className="mb-4">Raccogliamo esclusivamente i dati necessari per fornire i nostri servizi. In particolare:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Dati di contatto (nome, cognome, email, telefono);</li>
                        <li>Dati di prenotazione e richieste inviate tramite form;</li>
                        <li>Dati di navigazione raccolti automaticamente (indirizzo IP, tipo di browser, data e ora di accesso, cookie tecnici e di analisi).</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">4. Finalità del Trattamento</h2>
                    <p className="mb-4">I dati vengono trattati per le seguenti finalità:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Gestire le richieste di informazioni o prenotazioni;</li>
                        <li>Fornire assistenza al cliente e comunicazioni di servizio;</li>
                        <li>Migliorare l’esperienza di navigazione e analizzare l’utilizzo del sito;</li>
                        <li>Adempiere ad obblighi legali e fiscali.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">5. Base Giuridica del Trattamento</h2>
                    <p className="mb-4">
                        Il trattamento dei dati personali si basa sul consenso dell’utente, sull’esecuzione di un contratto o di misure precontrattuali, e sull’adempimento di obblighi legali da parte del titolare.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">6. Conservazione dei Dati</h2>
                    <p className="mb-4">
                        I dati personali vengono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti, o per adempiere ad obblighi di legge.
                        Al termine, i dati verranno cancellati o resi anonimi in modo permanente.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">7. Condivisione dei Dati</h2>
                    <p className="mb-4">
                        I dati personali non verranno ceduti a terzi, salvo nei casi in cui sia necessario per fornire un servizio richiesto
                        (es. fornitori di servizi di pagamento o partner di trasporto) o per adempiere a obblighi di legge.
                        In tali casi, i soggetti terzi tratteranno i dati come Responsabili esterni del trattamento.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">8. Sicurezza dei Dati</h2>
                    <p className="mb-4">
                        Adottiamo misure tecniche e organizzative per proteggere i dati personali da accessi non autorizzati, alterazioni, divulgazioni o distruzioni.
                        Tuttavia, nessuna trasmissione via Internet può considerarsi completamente sicura.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">9. Diritti dell’Interessato</h2>
                    <p className="mb-4">
                        Gli utenti possono esercitare in qualsiasi momento i diritti previsti dal GDPR, tra cui:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Accesso ai propri dati personali;</li>
                        <li>Rettifica o cancellazione dei dati;</li>
                        <li>Limitazione o opposizione al trattamento;</li>
                        <li>Portabilità dei dati;</li>
                        <li>Revoca del consenso prestato.</li>
                    </ul>
                    <p className="mb-4">
                        Per esercitare tali diritti, è possibile inviare una richiesta attraverso la sezione{" "}
                        <a href="/contact" className="underline text-c">Contatti</a>.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">10. Cookie e Strumenti di Analisi</h2>
                    <p className="mb-4">
                        Il sito utilizza cookie tecnici e, previo consenso, cookie di terze parti per fini statistici o di marketing.
                        Maggiori informazioni sono disponibili nella nostra{" "}
                        <a href="/terms-and-conditions" className="underline text-c">Cookie Policy</a>.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">11. Aggiornamenti della Privacy Policy</h2>
                    <p className="mb-4">
                        La presente informativa può essere soggetta a modifiche. Eventuali aggiornamenti verranno pubblicati su questa pagina con effetto immediato.
                    </p>
                </section>
            </div>
        </ClientLayout>
    );
}
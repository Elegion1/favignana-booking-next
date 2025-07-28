import ClientLayout from "../../components/ClientLayout";
import seoData from "../../../utils/seoData";
import Link from "next/link";

export const metadata = {
    title: "Blog e Guide | Favignana Transfer - Consigli di Viaggio Sicilia",
    description: "Guide di viaggio per Favignana, consigli sui transfer, escursioni alle saline di Trapani. Scopri i segreti della Sicilia occidentale.",
    keywords: "guida favignana, consigli viaggio sicilia, saline trapani storia, cosa vedere favignana"
};

export default function Blog() {
    const articles = [
        {
            title: "Guida Completa per Raggiungere Favignana",
            excerpt: "Tutti i modi per arrivare a Favignana: aeroporti, transfer, traghetti e consigli pratici per il tuo viaggio.",
            slug: "come-raggiungere-favignana",
            date: "2025-07-28"
        },
        {
            title: "Le Saline di Trapani: Storia e Tradizione",
            excerpt: "Scopri la storia millenaria delle saline di Trapani, i mulini a vento e l'antica tradizione della raccolta del sale.",
            slug: "saline-trapani-storia",
            date: "2025-07-25"
        },
    ];

    return (
        <ClientLayout>
            <div className="container mx-auto mt-10 p-5">
                <h1 className="text-4xl font-bold mb-6">Blog e Guide di Viaggio</h1>
                <p className="text-lg mb-8">Consigli, guide e curiosità per il tuo viaggio in Sicilia occidentale</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article, index) => (
                        <article key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-3">
                                <Link href={`/blog/${article.slug}`} className="hover:text-c">
                                    {article.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600 mb-4">{article.excerpt}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">{article.date}</span>
                                <Link 
                                    href={`/blog/${article.slug}`}
                                    className="bg-c text-white px-4 py-2 rounded hover:bg-c/80"
                                >
                                    Leggi di più
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 bg-b rounded-lg p-8">
                    <h3 className="text-2xl font-bold mb-4">Hai bisogno di aiuto?</h3>
                    <p className="mb-4">Contattaci per consigli personalizzati sul tuo viaggio</p>
                    <Link 
                        href="/contact"
                        className="bg-c text-white px-6 py-3 rounded inline-block hover:bg-c/80"
                    >
                        Contattaci
                    </Link>
                </div>
            </div>
        </ClientLayout>
    );
}

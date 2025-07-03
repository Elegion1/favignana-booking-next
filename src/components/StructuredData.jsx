export default function StructuredData() {
    const data = {
        "@context": "https://schema.org/",
        "@type": "Service",
        "serviceType": "Transfer Service",
        "provider": {
            "@type": "LocalBusiness",
            "name": "MG Transfer"
        },
        "areaServed": {
            "@type": "Region",
            "name": "Sicily, Italy"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Transfer Services",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Transfer from/to Trapani Port",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Transfer from Trapani Port to Favignana",
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Excursions to Trapani Salt Pans"
                            }
                        }
                    ]
                },
            ]
        }
    };
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
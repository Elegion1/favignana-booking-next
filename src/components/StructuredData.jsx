export default function StructuredData() {
    const data = {
        "@context": "https://schema.org/",
        "@type": "LocalBusiness",
        "name": "Favignana Transfer - MG Transfer",
        "description": "Servizi di transfer da aeroporti di Trapani e Palermo verso Favignana ed escursioni alle saline di Trapani",
        "url": "https://www.favignana-transfer.it",
        "telephone": "+39-328-365-0762", // Inserisci il numero reale
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Trapani",
            "addressRegion": "Sicilia", 
            "addressCountry": "IT"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Trapani"
            },
            {
                "@type": "City", 
                "name": "Favignana"
            },
            {
                "@type": "City",
                "name": "Palermo"
            }
        ],
        "serviceType": ["Transfer Service", "Tour Operator"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servizi Transfer ed Escursioni",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Transfer Aeroporto Trapani - Porto Trapani",
                        "description": "Servizio transfer da aeroporto Trapani Birgi V. Florio al porto di Trapani per imbarco verso Favignana"
                    },
                    "priceRange": "€25-€100"
                },
                {
                    "@type": "Offer", 
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Transfer Aeroporto Palermo - Porto Trapani",
                        "description": "Servizio transfer da aeroporto Palermo Falcone Borsellino al porto di Trapani"
                    },
                    "priceRange": "€100-€200"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "TouristTrip",
                        "name": "Escursioni Saline di Trapani",
                        "description": "Tour guidati alle storiche saline di Trapani con mulini a vento e degustazioni"
                    }
                }
            ]
        },
        "openingHours": "Mo-Su 06:00-23:00",
        "paymentAccepted": ["PayPal", "Cash", "Credit Card"]
    };
    
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
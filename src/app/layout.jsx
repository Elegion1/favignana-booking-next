import { SpeedInsights } from "@vercel/speed-insights/next"
import StructuredData from '../components/StructuredData';
import seoData from '../../utils/seoData';
import './globals.css';
import './style.css';
import { GoogleTagManager } from "@next/third-parties/google"

export const metadata = {
  title: seoData['default'].title,
  description: seoData['default'].description,
  keywords: seoData['default'].keywords,
  authors: [{ name: 'MG Transfer' }],
  generator: 'Next.js',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.favignana-transfer.it',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    title: seoData['default'].title,
    description: seoData['default'].description,
    url: 'https://www.favignana-transfer.it',
    siteName: 'Favignana Transfer',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Favignana Transfer - Servizi di transfer e escursioni',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData['default'].title,
    description: seoData['default'].description,
    images: ['/og-image.jpeg'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <GoogleTagManager gtmId="GTM-PQQNLRDN" />
        <SpeedInsights />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
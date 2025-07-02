import seoData from '../../utils/seoData';
import './globals.css';
import './style.css';

export const metadata = {
  title: seoData['default'],
  description: seoData['default'].description,
  icon: {
    rel: 'icon',
    url: '/favicon.ico',
  },
  openGraph: {
    title: seoData['default'].title,
    description: seoData['default'].description,
    url: 'https://www.favignana-transfer.it',
    siteName: 'Favignana Transfer',
    images: [
      {
        url: '/og-image.jpeg',
        width: 300,
        height: 300,
        alt: 'Favignana Transfer',
      },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
}
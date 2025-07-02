"use client";
import Masthead from './Masthead';
import Footer from './Footer';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';
import { getLabel } from '../../utils/labels';


export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const mastTitles = {
    '/': getLabel("homeMasterTitle"),
    '/transfer': getLabel("transferMasterTitle"),
    '/contact': getLabel("contactMasterTitle"),
    '/terms-and-conditions': getLabel("termsConditions"),
    '/excursion': getLabel("excursionMasterTitle"),
  };

  const title = mastTitles[pathname] || 'Page Not Found';

  return (
    <>
      {/* Meta tags should be handled in app/head.js or page.js in Next.js app dir */}
      <Navbar />
      <Masthead title={title} />
      {children}
      <Footer />
    </>
  );
}

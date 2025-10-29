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
    '/blog': getLabel("blogMasterTitle"),
    '/privacy': getLabel("privacyMasterTitle"),
  };

  const title = mastTitles[pathname] || 'Favignana Transfer';

  return (
    <>
      <header>
        <Navbar />
        <Masthead title={title} />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

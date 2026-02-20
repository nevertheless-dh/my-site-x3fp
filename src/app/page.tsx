import { siteConfig } from '@/lib/config';
import { NavHeader } from '@/components/nav-header';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <NavHeader />
      <main>
        <ContactSection config={siteConfig} />
      </main>
      <Footer />
    </>
  );
}

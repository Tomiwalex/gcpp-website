import AboutHero from '@/components/screens/about/AboutHero';
import AccordionSection from '@/components/screens/about/AccordionSection';
import TeamSection from '@/components/screens/about/TeamSection';

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AccordionSection />
            <TeamSection />
        </main>
    );
}

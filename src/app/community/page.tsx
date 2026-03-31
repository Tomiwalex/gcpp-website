import Authorpreneur from '@/components/screens/homepage/Authorpreneur';
import MembershipBenefits from '@/components/screens/community/MembershipBenefits';
import CommunityPricing from '@/components/screens/community/CommunityPricing';
import CommunityTestimonials from '@/components/screens/community/CommunityTestimonials';

export default function CommunityPage() {
    return (
        <main className="min-h-screen">
            <Authorpreneur />
            <MembershipBenefits />
            <CommunityPricing />
            <CommunityTestimonials />
        </main>
    );
}

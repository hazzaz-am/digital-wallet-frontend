import PricingCTA from "@/components/modules/pricing/PricingCTA";
import PricingHero from "@/components/modules/pricing/PricingHero";
import ServiceFees from "@/components/modules/pricing/ServiceFees";
import Subscription from "@/components/modules/pricing/Subscription";
import ValueProposition from "@/components/modules/pricing/ValueProposition";

export default function PricingPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
			<PricingHero />
			<Subscription />
			<ServiceFees />
			<ValueProposition />
			<PricingCTA />
		</div>
	);
}

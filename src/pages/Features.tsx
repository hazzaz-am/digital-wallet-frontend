import AdvancedFeatures from "@/components/modules/features/AdvancedFeatures";
import CoreFeatures from "@/components/modules/features/CoreFeatures";
import CTAFeatures from "@/components/modules/features/CTAFeatures";
import FeaturesHero from "@/components/modules/features/FeaturesHero";
import SecurityFeatures from "@/components/modules/features/SecurityFeatures";

export default function FeaturesPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
			<FeaturesHero/>
			<CoreFeatures/>
			<AdvancedFeatures/>
      <SecurityFeatures/>			
			<CTAFeatures/>
		</div>
	);
}

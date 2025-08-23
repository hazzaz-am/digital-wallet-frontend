import CTA from "@/components/modules/home/CTA";
import Features from "@/components/modules/home/Features";
import Hero from "@/components/modules/home/Hero";
import Stats from "@/components/modules/home/Stats";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
			<Hero />
			<Features />
			<Stats />
			<CTA />
		</div>
	);
}

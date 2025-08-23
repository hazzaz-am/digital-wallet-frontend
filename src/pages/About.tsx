import Hero from "@/components/modules/about/Hero";
import Mission from "@/components/modules/about/Mission";
import ServiceStory from "@/components/modules/about/ServiceStory";
import Team from "@/components/modules/about/Team";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
			<Hero />
			<ServiceStory />
			<Mission />
			<Team />
		</div>
	);
}

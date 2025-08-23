import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function PricingCTA() {
	return (
		<section className="bg-primary/5 px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-4xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
					Ready to Get Started?
				</h2>
				<p className="mt-4 text-lg text-muted-foreground">
					Join millions of users who trust our platform for their financial
					needs.
				</p>
				<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
					<Button size="lg" className="text-base font-semibold">
						<Link to="/login">Start Free Trial</Link>
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="text-base font-semibold"
					>
						<Link to="/contact">Contact Sales</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

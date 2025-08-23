import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function CTA() {
	return (
		<section className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-4xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
					Ready to Start Your Digital Journey?
				</h2>
				<p className="mt-4 text-lg text-muted-foreground">
					Join millions of users who trust our platform for their daily
					financial needs.
				</p>
				<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
					<Button size="lg" className="text-base font-semibold">
						<Link to={"/register"}>Create Free Account</Link>
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="text-base font-semibold"
					>
						<Link to="/about">Learn More</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";

export default function Team() {
	return (
		<section className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
						Meet Our Team
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						The passionate individuals behind our success, working tirelessly to
						revolutionize digital payments.
					</p>
				</div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* Team Member 1 */}
					<Card className="text-center">
						<CardHeader>
							<div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
								<span className="text-2xl font-bold text-primary">JD</span>
							</div>
							<CardTitle>John Doe</CardTitle>
							<CardDescription>Chief Executive Officer</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">
								15+ years in fintech, leading digital transformation initiatives
								at Fortune 500 companies.
							</p>
						</CardContent>
					</Card>

					{/* Team Member 2 */}
					<Card className="text-center">
						<CardHeader>
							<div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
								<span className="text-2xl font-bold text-primary">SA</span>
							</div>
							<CardTitle>Sarah Adams</CardTitle>
							<CardDescription>Chief Technology Officer</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">
								Expert in blockchain technology and cybersecurity with 12+ years
								of experience in secure payment systems.
							</p>
						</CardContent>
					</Card>

					{/* Team Member 3 */}
					<Card className="text-center">
						<CardHeader>
							<div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
								<span className="text-2xl font-bold text-primary">MJ</span>
							</div>
							<CardTitle>Michael Johnson</CardTitle>
							<CardDescription>Head of Product</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">
								Product strategist with a passion for user experience,
								previously at leading fintech startups.
							</p>
						</CardContent>
					</Card>

					{/* Team Member 4 */}
					<Card className="text-center">
						<CardHeader>
							<div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
								<span className="text-2xl font-bold text-primary">LW</span>
							</div>
							<CardTitle>Lisa Wilson</CardTitle>
							<CardDescription>Head of Security</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">
								Cybersecurity expert specializing in financial systems
								protection and compliance management.
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="mt-16 text-center">
					<h3 className="text-2xl font-bold text-foreground mb-4">
						Join Our Team
					</h3>
					<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
						We're always looking for talented individuals who share our passion
						for innovation and financial inclusion.
					</p>
					<Button size="lg" className="text-base font-semibold">
						<Link to={"/careers"}>View Open Positions</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

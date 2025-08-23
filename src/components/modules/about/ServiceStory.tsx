import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceStory() {
	return (
		<section className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
						Our Service Story
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						From a simple idea to a comprehensive digital wallet solution
						trusted by millions worldwide.
					</p>
				</div>

				<div className="grid gap-12 lg:grid-cols-2 items-center">
					<div>
						<div className="space-y-8">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
									<span className="text-primary font-bold">1</span>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										The Beginning (2020)
									</h3>
									<p className="text-muted-foreground">
										Started as a small fintech startup with a vision to make
										digital payments accessible to everyone, regardless of their
										technical expertise.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
									<span className="text-primary font-bold">2</span>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										Growth & Innovation (2021-2022)
									</h3>
									<p className="text-muted-foreground">
										Expanded our services to include international transfers,
										merchant payments, and introduced advanced security features
										like biometric authentication.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
									<span className="text-primary font-bold">3</span>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										Global Expansion (2023-Present)
									</h3>
									<p className="text-muted-foreground">
										Achieved global reach with over 1 million active users,
										processing billions in transactions while maintaining 99.9%
										uptime and industry-leading security.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:text-right">
						<Card className="max-w-md mx-auto lg:mx-0">
							<CardHeader>
								<CardTitle>Key Milestones</CardTitle>
								<CardDescription>Our journey in numbers</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">Users Served</span>
									<span className="text-2xl font-bold text-primary">1M+</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">Transactions</span>
									<span className="text-2xl font-bold text-primary">$50B+</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">Countries</span>
									<span className="text-2xl font-bold text-primary">50+</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-muted-foreground">Uptime</span>
									<span className="text-2xl font-bold text-primary">99.9%</span>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}

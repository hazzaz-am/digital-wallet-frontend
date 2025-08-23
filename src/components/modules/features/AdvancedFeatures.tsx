import { Card } from "@/components/ui/card";

export default function AdvancedFeatures() {
	return (
		<section className="bg-primary/5 px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
						Advanced Features
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Premium tools for power users and businesses looking for
						comprehensive financial management.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-2">
					{/* Left Column */}
					<div className="space-y-6">
						<Card className="p-6 hover:shadow-lg transition-all duration-300">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<svg
										className="h-6 w-6 text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										Smart Analytics
									</h3>
									<p className="text-muted-foreground">
										Get detailed insights into your spending patterns, income
										trends, and financial health with AI-powered analytics and
										personalized recommendations.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 hover:shadow-lg transition-all duration-300">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<svg
										className="h-6 w-6 text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										Business Solutions
									</h3>
									<p className="text-muted-foreground">
										Accept payments from customers, manage payroll, track
										expenses, and integrate with accounting software for
										seamless business operations.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 hover:shadow-lg transition-all duration-300">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<svg
										className="h-6 w-6 text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										Mobile App
									</h3>
									<p className="text-muted-foreground">
										Full-featured mobile apps for iOS and Android with offline
										capabilities, push notifications, and biometric
										authentication.
									</p>
								</div>
							</div>
						</Card>
					</div>

					{/* Right Column */}
					<div className="space-y-6">
						<Card className="p-6 hover:shadow-lg transition-all duration-300">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<svg
										className="h-6 w-6 text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										API Integration
									</h3>
									<p className="text-muted-foreground">
										Comprehensive RESTful APIs and SDKs for developers to
										integrate our payment solutions into their applications and
										websites.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 hover:shadow-lg transition-all duration-300">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<svg
										className="h-6 w-6 text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 17h5l-5 5-5-5h5m-5-9h5l-5-5-5 5h5z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										Auto-Save & Budgeting
									</h3>
									<p className="text-muted-foreground">
										Automatically save spare change, set spending limits, create
										budgets, and track your progress toward financial goals.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 hover:shadow-lg transition-all duration-300">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<svg
										className="h-6 w-6 text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										24/7 Support
									</h3>
									<p className="text-muted-foreground">
										Round-the-clock customer support via live chat, phone, and
										email with multilingual assistance and priority support for
										premium users.
									</p>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}

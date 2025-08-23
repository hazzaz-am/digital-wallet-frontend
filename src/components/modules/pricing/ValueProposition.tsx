import { Card } from "@/components/ui/card";

export default function ValueProposition() {
	return (
		<section className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
						Why Choose Our Platform?
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Compare what you get with our plans versus traditional banking and
						other digital wallets.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-2">
					{/* Left Column - Benefits */}
					<div className="space-y-6">
						<Card className="p-6 border-l-4 border-l-primary">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
									<svg
										className="h-5 w-5 text-green-600 dark:text-green-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
										/>
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-foreground mb-2">
										Low Cost, High Value
									</h3>
									<p className="text-muted-foreground text-sm">
										Save up to 80% compared to traditional banks with our
										competitive fees and free basic services.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 border-l-4 border-l-primary">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
									<svg
										className="h-5 w-5 text-blue-600 dark:text-blue-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-foreground mb-2">
										Lightning Fast
									</h3>
									<p className="text-muted-foreground text-sm">
										Instant transfers and real-time notifications, compared to
										1-3 days with traditional banks.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 border-l-4 border-l-primary">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
									<svg
										className="h-5 w-5 text-purple-600 dark:text-purple-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-foreground mb-2">
										Enterprise Security
									</h3>
									<p className="text-muted-foreground text-sm">
										Bank-level security with 256-bit encryption, biometric auth,
										and fraud detection.
									</p>
								</div>
							</div>
						</Card>
					</div>

					{/* Right Column - Comparison */}
					<div className="bg-primary/5 rounded-lg p-6">
						<h3 className="text-xl font-semibold text-foreground mb-6 text-center">
							Feature Comparison
						</h3>
						<div className="space-y-4">
							<div className="grid grid-cols-3 gap-4 text-sm font-medium border-b border-border pb-2">
								<span className="text-muted-foreground">Feature</span>
								<span className="text-center text-muted-foreground">
									Traditional Banks
								</span>
								<span className="text-center text-primary font-semibold">
									Our Platform
								</span>
							</div>

							<div className="grid grid-cols-3 gap-4 text-sm py-2">
								<span className="text-foreground">Transfer Speed</span>
								<span className="text-center text-muted-foreground">
									1-3 days
								</span>
								<span className="text-center text-primary font-semibold">
									Instant
								</span>
							</div>

							<div className="grid grid-cols-3 gap-4 text-sm py-2 bg-secondary/20 rounded px-2">
								<span className="text-foreground">International Fees</span>
								<span className="text-center text-muted-foreground">
									$15-25
								</span>
								<span className="text-center text-primary font-semibold">
									$2.99
								</span>
							</div>

							<div className="grid grid-cols-3 gap-4 text-sm py-2">
								<span className="text-foreground">Mobile App</span>
								<span className="text-center text-muted-foreground">Basic</span>
								<span className="text-center text-primary font-semibold">
									Advanced
								</span>
							</div>

							<div className="grid grid-cols-3 gap-4 text-sm py-2 bg-secondary/20 rounded px-2">
								<span className="text-foreground">24/7 Support</span>
								<span className="text-center text-muted-foreground">
									Limited
								</span>
								<span className="text-center text-primary font-semibold">
									Yes
								</span>
							</div>

							<div className="grid grid-cols-3 gap-4 text-sm py-2">
								<span className="text-foreground">Investment Tools</span>
								<span className="text-center text-muted-foreground">
									Separate App
								</span>
								<span className="text-center text-primary font-semibold">
									Built-in
								</span>
							</div>

							<div className="grid grid-cols-3 gap-4 text-sm py-2 bg-secondary/20 rounded px-2">
								<span className="text-foreground">API Access</span>
								<span className="text-center text-muted-foreground">❌</span>
								<span className="text-center text-primary font-semibold">
									✅
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Money Back Guarantee */}
				<div className="mt-16 text-center">
					<Card className="max-w-2xl mx-auto p-8 border-primary/20 bg-primary/5">
						<div className="flex items-center justify-center mb-4">
							<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
								<svg
									className="h-8 w-8 text-primary"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
						</div>
						<h3 className="text-2xl font-bold text-foreground mb-2">
							30-Day Money-Back Guarantee
						</h3>
						<p className="text-muted-foreground">
							Try any paid plan risk-free. If you're not completely satisfied
							within 30 days, we'll refund your money—no questions asked.
						</p>
					</Card>
				</div>
			</div>
		</section>
	);
}

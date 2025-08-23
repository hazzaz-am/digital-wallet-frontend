import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CoreFeatures() {
	return (
		<section className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
						Core Features
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Essential tools for managing your digital finances with ease and
						security.
					</p>
				</div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{/* Instant Transfers */}
					<Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
						<CardHeader>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<CardTitle>Instant Transfers</CardTitle>
							<CardDescription>
								Send and receive money instantly to anyone, anywhere in the
								world with real-time processing.
							</CardDescription>
						</CardHeader>
					</Card>

					{/* Multi-Currency Support */}
					<Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
						<CardHeader>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
									/>
								</svg>
							</div>
							<CardTitle>Multi-Currency Support</CardTitle>
							<CardDescription>
								Support for 50+ currencies with real-time exchange rates and
								automatic currency conversion.
							</CardDescription>
						</CardHeader>
					</Card>

					{/* Bank-Level Security */}
					<Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
						<CardHeader>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
							<CardTitle>Bank-Level Security</CardTitle>
							<CardDescription>
								Advanced encryption, biometric authentication, and fraud
								detection to keep your money safe.
							</CardDescription>
						</CardHeader>
					</Card>

					{/* Bill Payments */}
					<Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
						<CardHeader>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
										d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
									/>
								</svg>
							</div>
							<CardTitle>Bill Payments</CardTitle>
							<CardDescription>
								Pay utilities, subscriptions, and recurring bills automatically
								with scheduled payments.
							</CardDescription>
						</CardHeader>
					</Card>

					{/* QR Code Payments */}
					<Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
						<CardHeader>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
										d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
									/>
								</svg>
							</div>
							<CardTitle>QR Code Payments</CardTitle>
							<CardDescription>
								Quick and contactless payments using QR codes at millions of
								merchants worldwide.
							</CardDescription>
						</CardHeader>
					</Card>

					{/* Investment Tools */}
					<Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
						<CardHeader>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
										d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<CardTitle>Investment Tools</CardTitle>
							<CardDescription>
								Grow your money with built-in investment options, savings goals,
								and portfolio tracking.
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>
		</section>
	);
}

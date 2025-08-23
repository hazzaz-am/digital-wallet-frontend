import { Card } from "@/components/ui/card";

export default function ServiceFees() {
	return (
		<section className="bg-primary/5 px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
						Service Fees
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Transparent fee structure with no hidden charges. Pay only for what
						you use.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* Domestic Transfers */}
					<Card className="p-6">
						<div className="flex items-center space-x-3 mb-4">
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
										d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-foreground">
								Domestic Transfers
							</h3>
						</div>
						<div className="space-y-2">
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">Instant transfer</span>
								<span className="font-medium">$0.99</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">
									Standard (1-2 days)
								</span>
								<span className="font-medium">Free</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">Premium users</span>
								<span className="font-medium text-green-600">Free</span>
							</div>
						</div>
					</Card>

					{/* International Transfers */}
					<Card className="p-6">
						<div className="flex items-center space-x-3 mb-4">
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
										d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-foreground">
								International
							</h3>
						</div>
						<div className="space-y-2">
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">Transfer fee</span>
								<span className="font-medium">$2.99</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">
									Exchange rate markup
								</span>
								<span className="font-medium">0.5%</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">Business users</span>
								<span className="font-medium text-green-600">$1.99</span>
							</div>
						</div>
					</Card>

					{/* ATM & Card Fees */}
					<Card className="p-6">
						<div className="flex items-center space-x-3 mb-4">
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
										d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-foreground">
								ATM & Card
							</h3>
						</div>
						<div className="space-y-2">
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">ATM withdrawal</span>
								<span className="font-medium">$2.50</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">Card replacement</span>
								<span className="font-medium">$5.00</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">
									Premium card (annual)
								</span>
								<span className="font-medium">$25.00</span>
							</div>
						</div>
					</Card>

					{/* Business Services */}
					<Card className="p-6">
						<div className="flex items-center space-x-3 mb-4">
							<div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
								<svg
									className="h-5 w-5 text-orange-600 dark:text-orange-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-foreground">
								Business Services
							</h3>
						</div>
						<div className="space-y-2">
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">
									Payment processing
								</span>
								<span className="font-medium">2.9%</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">
									API requests (per 1K)
								</span>
								<span className="font-medium">$0.50</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">Bulk transfers</span>
								<span className="font-medium">$0.25 each</span>
							</div>
						</div>
					</Card>

					{/* Premium Services */}
					<Card className="p-6">
						<div className="flex items-center space-x-3 mb-4">
							<div className="flex-shrink-0 w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
								<svg
									className="h-5 w-5 text-yellow-600 dark:text-yellow-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-foreground">
								Premium Services
							</h3>
						</div>
						<div className="space-y-2">
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">Priority support</span>
								<span className="font-medium">Included</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">
									Investment advisory
								</span>
								<span className="font-medium">0.5% AUM</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">
									Custom integrations
								</span>
								<span className="font-medium">Quote based</span>
							</div>
						</div>
					</Card>

					{/* Additional Services */}
					<Card className="p-6">
						<div className="flex items-center space-x-3 mb-4">
							<div className="flex-shrink-0 w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
								<svg
									className="h-5 w-5 text-red-600 dark:text-red-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-foreground">
								Additional Services
							</h3>
						</div>
						<div className="space-y-2">
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">
									Expedited verification
								</span>
								<span className="font-medium">$15.00</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">Account recovery</span>
								<span className="font-medium">$10.00</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-muted-foreground">
									Tax document request
								</span>
								<span className="font-medium">$5.00</span>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
}

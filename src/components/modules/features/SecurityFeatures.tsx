import { Card } from "@/components/ui/card";

export default function SecurityFeatures() {
	return (
		<section className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
						Security Features
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Your security is our top priority. We use industry-leading
						technologies to protect your funds and personal information.
					</p>
				</div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<Card className="text-center p-6">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
							<svg
								className="h-6 w-6 text-green-600 dark:text-green-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
								/>
							</svg>
						</div>
						<h3 className="font-semibold text-foreground mb-2">
							256-bit Encryption
						</h3>
						<p className="text-sm text-muted-foreground">
							Military-grade encryption for all transactions and data storage
						</p>
					</Card>

					<Card className="text-center p-6">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
							<svg
								className="h-6 w-6 text-blue-600 dark:text-blue-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3 3-3M12 12l3-3-3-3"
								/>
							</svg>
						</div>
						<h3 className="font-semibold text-foreground mb-2">
							Biometric Auth
						</h3>
						<p className="text-sm text-muted-foreground">
							Fingerprint and face recognition for secure access
						</p>
					</Card>

					<Card className="text-center p-6">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
							<svg
								className="h-6 w-6 text-red-600 dark:text-red-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
								/>
							</svg>
						</div>
						<h3 className="font-semibold text-foreground mb-2">
							Fraud Detection
						</h3>
						<p className="text-sm text-muted-foreground">
							AI-powered real-time fraud monitoring and prevention
						</p>
					</Card>

					<Card className="text-center p-6">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
							<svg
								className="h-6 w-6 text-purple-600 dark:text-purple-400"
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
						<h3 className="font-semibold text-foreground mb-2">Compliance</h3>
						<p className="text-sm text-muted-foreground">
							PCI DSS certified and regulatory compliant worldwide
						</p>
					</Card>
				</div>
			</div>
		</section>
	);
}

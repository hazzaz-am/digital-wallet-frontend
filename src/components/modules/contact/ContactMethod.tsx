import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function ContactMethod() {
	return (
		<section className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
						How Can We Help?
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Choose the best way to reach us based on your needs.
					</p>
				</div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* Live Chat */}
					<Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
						<CardHeader>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
								<svg
									className="h-8 w-8 text-blue-600 dark:text-blue-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
									/>
								</svg>
							</div>
							<CardTitle>Live Chat</CardTitle>
							<CardDescription>
								Get instant help from our support team
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
								Available 24/7
							</p>
							<Button variant="outline" size="sm" className="w-full">
								Comming Soon
							</Button>
						</CardContent>
					</Card>

					{/* Email Support */}
					<Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
						<CardHeader>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
								<svg
									className="h-8 w-8 text-green-600 dark:text-green-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<CardTitle>Email Support</CardTitle>
							<CardDescription>Send us a detailed message</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground mb-2">
								support@digitalwallet.com
							</p>
							<p className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
								Response within 2 hours
							</p>
						</CardContent>
					</Card>

					{/* Phone Support */}
					<Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
						<CardHeader>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
								<svg
									className="h-8 w-8 text-purple-600 dark:text-purple-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
							</div>
							<CardTitle>Phone Support</CardTitle>
							<CardDescription>Speak directly with our team</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground mb-2">
								+1 (555) 123-4567
							</p>
							<p className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
								Mon-Fri, 9 AM - 6 PM EST
							</p>
						</CardContent>
					</Card>

					{/* Help Center */}
					<Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
						<CardHeader>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/20">
								<svg
									className="h-8 w-8 text-orange-600 dark:text-orange-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<CardTitle>Help Center</CardTitle>
							<CardDescription>Browse FAQs and guides</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground mb-2">
								Self-service resources
							</p>
							<Button variant="outline" size="sm" className="w-full">
								Visit Help Center
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

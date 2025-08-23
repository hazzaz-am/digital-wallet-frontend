import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Subscription() {
	return (
		<section className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
						Choose Your Plan
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						From basic personal use to advanced business features, we have a
						plan for everyone.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-3">
					{/* Basic Plan */}
					<Card className="relative hover:shadow-lg transition-all duration-300">
						<CardHeader className="text-center pb-8">
							<CardTitle className="text-2xl">Basic</CardTitle>
							<CardDescription>Perfect for personal use</CardDescription>
							<div className="mt-4">
								<span className="text-4xl font-bold text-foreground">Free</span>
								<span className="text-muted-foreground">/month</span>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-3">
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Up to $1,000/month transfers
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Basic bill payment
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										QR code payments
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Email support
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Mobile app access
									</span>
								</div>
							</div>
							<div className="pt-6">
								<Button variant="outline" className="w-full">
									Get Started
								</Button>
							</div>
						</CardContent>
					</Card>

					{/* Premium Plan */}
					<Card className="relative border-primary shadow-lg hover:shadow-xl transition-all duration-300">
						<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
							<span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
								Most Popular
							</span>
						</div>
						<CardHeader className="text-center pb-8 pt-8">
							<CardTitle className="text-2xl">Premium</CardTitle>
							<CardDescription>
								For active users and small businesses
							</CardDescription>
							<div className="mt-4">
								<span className="text-4xl font-bold text-foreground">
									$9.99
								</span>
								<span className="text-muted-foreground">/month</span>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-3">
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Up to $10,000/month transfers
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Advanced bill management
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Investment tools
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Smart analytics & insights
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Priority email & chat support
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Auto-save & budgeting tools
									</span>
								</div>
							</div>
							<div className="pt-6">
								<Button className="w-full">Start Premium</Button>
							</div>
						</CardContent>
					</Card>

					{/* Business Plan */}
					<Card className="relative hover:shadow-lg transition-all duration-300">
						<CardHeader className="text-center pb-8">
							<CardTitle className="text-2xl">Business</CardTitle>
							<CardDescription>
								For growing businesses and teams
							</CardDescription>
							<div className="mt-4">
								<span className="text-4xl font-bold text-foreground">
									$29.99
								</span>
								<span className="text-muted-foreground">/month</span>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-3">
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Unlimited transfers
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Multi-user team management
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										API access & integrations
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Advanced business analytics
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										24/7 phone & priority support
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg
										className="h-5 w-5 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-sm text-muted-foreground">
										Custom branding options
									</span>
								</div>
							</div>
							<div className="pt-6">
								<Button variant="outline" className="w-full">
									Contact Sales
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

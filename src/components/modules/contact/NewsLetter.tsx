import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function NewsLetter() {
	const [newsletterEmail, setNewsletterEmail] = useState("");
	const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleNewsletterSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setNewsletterSubmitted(true);
		setIsSubmitting(false);
		setNewsletterEmail("");
	};
	return (
		<section className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
						Subscribe to Our Newsletter
					</h2>
					<p className="text-lg text-muted-foreground">
						Get the latest news, updates, and financial tips delivered to your
						inbox.
					</p>
				</div>

				<div className="px-0 pb-0">
					{newsletterSubmitted ? (
						<div className="text-center py-4">
							<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
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
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<h4 className="font-semibold text-foreground mb-1">
								Subscribed Successfully!
							</h4>
							<p className="text-sm text-muted-foreground mb-3">
								Welcome to our newsletter. Check your email for confirmation.
							</p>
							<Button
								onClick={() => setNewsletterSubmitted(false)}
								variant="outline"
								size="sm"
							>
								Subscribe Another Email
							</Button>
						</div>
					) : (
						<div className="mx-auto max-w-xl">
							<form onSubmit={handleNewsletterSubmit} className="space-y-4">
								<div>
									<Label htmlFor="newsletter-email">Email Address</Label>
									<Input
										id="newsletter-email"
										type="email"
										required
										value={newsletterEmail}
										onChange={(e) => setNewsletterEmail(e.target.value)}
										placeholder="Enter your email"
										className="mt-1 bg-white"
									/>
								</div>
								<Button
									type="submit"
									className="w-full"
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<>
											<svg
												className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Subscribing...
										</>
									) : (
										"Subscribe to Newsletter"
									)}
								</Button>
								<p className="text-xs text-muted-foreground text-center">
									By subscribing, you agree to receive emails from us. You can
									unsubscribe at any time.
								</p>
							</form>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

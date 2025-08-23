import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ContactForm() {
	const [inquiryForm, setInquiryForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
		inquiryType: "general",
	});

	const [inquirySubmitted, setInquirySubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInquirySubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));

		setInquirySubmitted(true);
		setIsSubmitting(false);
		setInquiryForm({
			name: "",
			email: "",
			subject: "",
			message: "",
			inquiryType: "general",
		});
	};

	return (
		<section className="bg-primary/5 px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
						Send Us a Message
					</h2>
					<p className="text-lg text-muted-foreground">
						Fill out the form below and we'll get back to you as soon as
						possible.
					</p>
				</div>
				<div className="grid gap-12 lg:grid-cols-2 items-start">
					{/* Contact Form */}
					<div>
						{inquirySubmitted ? (
							<Card className="p-8 border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
								<div className="text-center">
									<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
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
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
										Message Sent Successfully!
									</h3>
									<p className="text-green-700 dark:text-green-300 mb-4">
										Thank you for contacting us. We'll respond within 24 hours.
									</p>
									<Button
										onClick={() => setInquirySubmitted(false)}
										variant="outline"
										size="sm"
										className="border-green-300 text-green-700 hover:bg-green-100 dark:border-green-700 dark:text-green-400"
									>
										Send Another Message
									</Button>
								</div>
							</Card>
						) : (
							<Card className="p-6">
								<form onSubmit={handleInquirySubmit} className="space-y-6">
									<div className="grid gap-4 sm:grid-cols-2">
										<div>
											<Label htmlFor="name">Full Name *</Label>
											<Input
												id="name"
												type="text"
												required
												value={inquiryForm.name}
												onChange={(e) =>
													setInquiryForm({
														...inquiryForm,
														name: e.target.value,
													})
												}
												placeholder="Your full name"
												className="mt-1"
											/>
										</div>
										<div>
											<Label htmlFor="email">Email Address *</Label>
											<Input
												id="email"
												type="email"
												required
												value={inquiryForm.email}
												onChange={(e) =>
													setInquiryForm({
														...inquiryForm,
														email: e.target.value,
													})
												}
												placeholder="your.email@example.com"
												className="mt-1"
											/>
										</div>
									</div>

									<div>
										<Label htmlFor="inquiryType">Inquiry Type</Label>
										<select
											id="inquiryType"
											value={inquiryForm.inquiryType}
											onChange={(e) =>
												setInquiryForm({
													...inquiryForm,
													inquiryType: e.target.value,
												})
											}
											className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
										>
											<option value="general">General Inquiry</option>
											<option value="technical">Technical Support</option>
											<option value="billing">Billing Question</option>
											<option value="business">Business Partnership</option>
											<option value="security">Security Concern</option>
										</select>
									</div>

									<div>
										<Label htmlFor="subject">Subject *</Label>
										<Input
											id="subject"
											type="text"
											required
											value={inquiryForm.subject}
											onChange={(e) =>
												setInquiryForm({
													...inquiryForm,
													subject: e.target.value,
												})
											}
											placeholder="Brief description of your inquiry"
											className="mt-1"
										/>
									</div>

									<div>
										<Label htmlFor="message">Message *</Label>
										<textarea
											id="message"
											required
											rows={5}
											value={inquiryForm.message}
											onChange={(e) =>
												setInquiryForm({
													...inquiryForm,
													message: e.target.value,
												})
											}
											placeholder="Please provide details about your inquiry..."
											className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
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
												Sending Message...
											</>
										) : (
											"Send Message"
										)}
									</Button>
								</form>
							</Card>
						)}
					</div>

					<div className="space-y-8 sticky top-20">
						<Card className="p-6">
							<CardHeader className="px-0 pt-0">
								<CardTitle>Contact Information</CardTitle>
								<CardDescription>Other ways to reach us</CardDescription>
							</CardHeader>
							<CardContent className="px-0 pb-0 space-y-4">
								<div className="flex items-center space-x-3">
									<div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
										<svg
											className="h-4 w-4 text-primary"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									</div>
									<div>
										<p className="text-sm font-medium text-foreground">
											Address
										</p>
										<p className="text-sm text-muted-foreground">
											123 Finance Street, Tech City, TC 12345
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-3">
									<div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
										<svg
											className="h-4 w-4 text-primary"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<div>
										<p className="text-sm font-medium text-foreground">
											Business Hours
										</p>
										<p className="text-sm text-muted-foreground">
											Monday - Friday: 9:00 AM - 6:00 PM EST
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-3">
									<div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
										<svg
											className="h-4 w-4 text-primary"
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
									<div>
										<p className="text-sm font-medium text-foreground">
											Emergency Support
										</p>
										<p className="text-sm text-muted-foreground">
											Available 24/7 for account security issues
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}

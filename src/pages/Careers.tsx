import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface JobPosition {
	id: string;
	title: string;
	department: string;
	location: string;
	type: string;
	level: string;
	description: string;
	requirements: string[];
	benefits: string[];
}

const jobPositions: JobPosition[] = [
	{
		id: "1",
		title: "Senior Frontend Developer",
		department: "Engineering",
		location: "Remote / San Francisco",
		type: "Full-time",
		level: "Senior",
		description:
			"Join our engineering team to build the next generation of digital wallet experiences. You'll work on cutting-edge fintech solutions that serve millions of users worldwide.",
		requirements: [
			"5+ years of React/TypeScript experience",
			"Experience with modern web technologies",
			"Knowledge of fintech/payments industry",
			"Strong problem-solving skills",
		],
		benefits: [
			"Competitive salary + equity",
			"Health, dental, vision insurance",
			"Flexible work arrangements",
			"Professional development budget",
		],
	},
	{
		id: "2",
		title: "Product Manager",
		department: "Product",
		location: "New York / Remote",
		type: "Full-time",
		level: "Mid-Senior",
		description:
			"Drive product strategy and roadmap for our core digital wallet platform. Work closely with engineering, design, and business teams to deliver exceptional user experiences.",
		requirements: [
			"3+ years of product management experience",
			"Experience in fintech or payments",
			"Strong analytical and communication skills",
			"Customer-centric mindset",
		],
		benefits: [
			"Stock options package",
			"Unlimited PTO policy",
			"Remote work stipend",
			"Annual learning budget",
		],
	},
	{
		id: "3",
		title: "Security Engineer",
		department: "Security",
		location: "Austin / Remote",
		type: "Full-time",
		level: "Senior",
		description:
			"Help us build and maintain the security infrastructure that protects millions of users' financial data. You'll work on fraud prevention, compliance, and security architecture.",
		requirements: [
			"5+ years in cybersecurity",
			"Experience with financial regulations",
			"Knowledge of encryption and security protocols",
			"Security certifications preferred",
		],
		benefits: [
			"Top-tier compensation",
			"Security conference attendance",
			"Certification reimbursement",
			"Flexible schedule",
		],
	},
	{
		id: "4",
		title: "UX Designer",
		department: "Design",
		location: "Los Angeles / Remote",
		type: "Full-time",
		level: "Mid-Level",
		description:
			"Design intuitive and accessible financial experiences for our digital wallet platform. Collaborate with product and engineering to create user-centered solutions.",
		requirements: [
			"3+ years of UX design experience",
			"Portfolio showcasing fintech projects",
			"Proficiency in Figma and design systems",
			"Understanding of accessibility standards",
		],
		benefits: [
			"Design tools and equipment budget",
			"Creative sabbatical program",
			"Conference and workshop attendance",
			"Collaborative work environment",
		],
	},
];

const benefits = [
	{
		icon: "💰",
		title: "Competitive Compensation",
		description:
			"Market-leading salaries, equity packages, and performance bonuses",
	},
	{
		icon: "🏥",
		title: "Health & Wellness",
		description:
			"Comprehensive health, dental, vision, and mental health benefits",
	},
	{
		icon: "🌍",
		title: "Remote-First Culture",
		description:
			"Work from anywhere with flexible hours and home office stipend",
	},
	{
		icon: "📚",
		title: "Learning & Growth",
		description:
			"Professional development budget, conferences, and mentorship programs",
	},
	{
		icon: "🎯",
		title: "Mission-Driven",
		description:
			"Build products that democratize financial services for everyone",
	},
	{
		icon: "⚖️",
		title: "Work-Life Balance",
		description: "Unlimited PTO, parental leave, and sabbatical opportunities",
	},
];

export default function CareersPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
			{/* Hero Section */}
			<section className="relative py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto text-center">
					<div className="mb-8">
						<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
									d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
								/>
							</svg>
						</div>
						<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
							Join Our{" "}
							<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								Mission
							</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
							We're building the future of digital finance. Join our team of
							passionate individuals who are democratizing financial services
							and creating innovative solutions that empower people worldwide.
						</p>
					</div>

					{/* Stats */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
						<div className="text-center">
							<div className="text-3xl font-bold text-primary">50M+</div>
							<div className="text-sm text-muted-foreground">Active Users</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-primary">200+</div>
							<div className="text-sm text-muted-foreground">Team Members</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-primary">15+</div>
							<div className="text-sm text-muted-foreground">Countries</div>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-foreground mb-4">
							Why Work With Us?
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							We believe in creating an environment where our team can do their
							best work while making a meaningful impact on the world.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{benefits.map((benefit, index) => (
							<Card
								key={index}
								className="p-6 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
							>
								<div className="text-center">
									<div className="text-4xl mb-4">{benefit.icon}</div>
									<h3 className="text-lg font-semibold text-foreground mb-2">
										{benefit.title}
									</h3>
									<p className="text-muted-foreground text-sm">
										{benefit.description}
									</p>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-foreground mb-4">
							Open Positions
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Explore opportunities to grow your career while building the
							future of finance.
						</p>
					</div>

					<div className="space-y-6">
						{jobPositions.map((job) => (
							<Card
								key={job.id}
								className="p-8 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
							>
								<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
									<div className="flex-1">
										<div className="flex flex-wrap items-center gap-3 mb-4">
											<span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
												{job.department}
											</span>
											<span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground border border-secondary/20">
												{job.type}
											</span>
											<span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border">
												{job.level}
											</span>
										</div>

										<h3 className="text-xl font-semibold text-foreground mb-2">
											{job.title}
										</h3>

										<div className="flex items-center text-sm text-muted-foreground mb-4">
											<svg
												className="w-4 h-4 mr-1"
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
											{job.location}
										</div>

										<p className="text-muted-foreground mb-6 leading-relaxed">
											{job.description}
										</p>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<h4 className="font-semibold text-foreground mb-3">
													Requirements:
												</h4>
												<ul className="space-y-2">
													{job.requirements.map((req, index) => (
														<li
															key={index}
															className="flex items-start text-sm text-muted-foreground"
														>
															<svg
																className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0"
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
															{req}
														</li>
													))}
												</ul>
											</div>

											<div>
												<h4 className="font-semibold text-foreground mb-3">
													Benefits:
												</h4>
												<ul className="space-y-2">
													{job.benefits.map((benefit, index) => (
														<li
															key={index}
															className="flex items-start text-sm text-muted-foreground"
														>
															<svg
																className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0"
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
															{benefit}
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>

									<div className="flex-shrink-0">
										<Button
											size="lg"
											disabled
											className="min-w-[140px] opacity-60 cursor-not-allowed"
										>
											<svg
												className="w-4 h-4 mr-2"
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
											Coming Soon
										</Button>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Culture Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-foreground mb-8">
						Our Culture & Values
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
						<div className="text-center">
							<div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
								<svg
									className="w-8 h-8 text-primary"
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
							<h3 className="font-semibold text-foreground mb-2">Innovation</h3>
							<p className="text-sm text-muted-foreground">
								Pushing boundaries and embracing new technologies
							</p>
						</div>

						<div className="text-center">
							<div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
								<svg
									className="w-8 h-8 text-primary"
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
							<h3 className="font-semibold text-foreground mb-2">
								Collaboration
							</h3>
							<p className="text-sm text-muted-foreground">
								Working together to achieve extraordinary results
							</p>
						</div>

						<div className="text-center">
							<div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
								<svg
									className="w-8 h-8 text-primary"
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
							<h3 className="font-semibold text-foreground mb-2">Security</h3>
							<p className="text-sm text-muted-foreground">
								Protecting our users with the highest standards
							</p>
						</div>

						<div className="text-center">
							<div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
								<svg
									className="w-8 h-8 text-primary"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</div>
							<h3 className="font-semibold text-foreground mb-2">Empathy</h3>
							<p className="text-sm text-muted-foreground">
								Understanding and caring for our users' needs
							</p>
						</div>
					</div>

					<div className="bg-background/60 border border-border/50 rounded-2xl p-8">
						<h3 className="text-xl font-semibold text-foreground mb-4">
							Ready to Make an Impact?
						</h3>
						<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
							We're always looking for talented individuals who share our
							passion for building innovative financial solutions. Even if you
							don't see the perfect role today, we'd love to hear from you.
						</p>
						<Button
							size="lg"
							disabled
							className="opacity-60 cursor-not-allowed"
						>
							<svg
								className="w-4 h-4 mr-2"
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
							Send Resume - Coming Soon
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}

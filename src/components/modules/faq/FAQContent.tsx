import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { faqData } from "@/data/faqData";
import { Link } from "react-router";

interface IProps {
	filteredFAQs: typeof faqData;
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	selectedCategory: string;
	setSelectedCategory: (category: string) => void;
	expandedItems: string[];
	toggleExpanded: (id: string) => void;
	feedback: { [x: string]: "helpful" | "not-helpful" | null };
	setFeedback: (
		value: React.SetStateAction<
			Record<string, "helpful" | "not-helpful" | null>
		>
	) => void;
	handleFeedback: (questionId: string, isHelpful: boolean) => void;
}

export default function FAQContent({
	filteredFAQs,
	setSearchTerm,
	selectedCategory,
	setSelectedCategory,
	expandedItems,
	toggleExpanded,
	feedback,
	setFeedback,
	handleFeedback,
}: IProps) {
	return (
		<section className="pb-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				{filteredFAQs.length === 0 ? (
					<Card className="p-12 text-center">
						<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
							<svg
								className="h-8 w-8 text-muted-foreground"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20.4a7.962 7.962 0 01-5.657-2.343m0 0L9 21l3-3 3 3-2.657-2.657z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold text-foreground mb-2">
							No results found
						</h3>
						<p className="text-muted-foreground mb-4">
							Try adjusting your search terms or browse different categories.
						</p>
						<Button
							onClick={() => {
								setSearchTerm("");
								setSelectedCategory("All");
							}}
						>
							Clear Filters
						</Button>
					</Card>
				) : (
					<div className="space-y-6">
						{/* Results count */}
						<div className="text-sm text-muted-foreground mb-8">
							Showing {filteredFAQs.length} of {faqData.length} questions
							{selectedCategory !== "All" && " in"}{" "}
							{selectedCategory !== "All" && (
								<span className="font-bold">"{selectedCategory}"</span>
							)}
						</div>

						{/* FAQ Items */}
						{filteredFAQs.map((item, index) => (
							<div
								key={item.id}
								className={`group relative bg-background border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 ${
									expandedItems.includes(item.id)
										? "shadow-md border-primary/50 bg-primary/5"
										: ""
								}`}
								style={{
									animationDelay: `${index * 50}ms`,
								}}
							>
								{/* Left accent line */}
								<div
									className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
										expandedItems.includes(item.id)
											? "bg-gradient-to-b from-primary to-primary/50"
											: "bg-border group-hover:bg-primary/30"
									}`}
								/>

								<button
									onClick={() => toggleExpanded(item.id)}
									className="w-full text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 cursor-pointer"
									aria-expanded={expandedItems.includes(item.id)}
									aria-controls={`answer-${item.id}`}
								>
									<div className="pl-8 pr-6 py-6 hover:bg-muted/20 transition-colors duration-200">
										<div className="flex items-start justify-between gap-4">
											<div className="flex-1 min-w-0">
												<div className="flex items-center gap-3 mb-4">
													<span
														className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
															expandedItems.includes(item.id)
																? "bg-primary text-primary-foreground border-primary"
																: "bg-background text-primary border-primary/30 group-hover:bg-primary/10"
														}`}
													>
														{item.category}
													</span>
													{expandedItems.includes(item.id) && (
														<div className="flex items-center gap-1">
															<div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
															<span className="text-xs text-primary font-medium">
																Active
															</span>
														</div>
													)}
												</div>
												<h3 className="text-lg font-semibold text-foreground leading-relaxed pr-4 group-hover:text-primary transition-colors duration-200">
													{item.question}
												</h3>
											</div>
											<div className="flex-shrink-0 mt-2">
												<div
													className={`p-3 rounded-full border transition-all duration-300 ${
														expandedItems.includes(item.id)
															? "bg-primary/10 border-primary/30 rotate-180 scale-110"
															: "bg-background border-border group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:scale-105"
													}`}
												>
													<svg
														className={`h-4 w-4 transition-colors duration-200 ${
															expandedItems.includes(item.id)
																? "text-primary"
																: "text-muted-foreground group-hover:text-primary"
														}`}
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M19 9l-7 7-7-7"
														/>
													</svg>
												</div>
											</div>
										</div>
									</div>
								</button>

								{/* Answer Section */}
								<div
									id={`answer-${item.id}`}
									className={`overflow-hidden transition-all duration-500 ease-out ${
										expandedItems.includes(item.id)
											? "max-h-[500px] opacity-100"
											: "max-h-0 opacity-0"
									}`}
								>
									<div className="pl-8 pr-6 pb-6">
										<div
											className={`border-t border-border/30 pt-6 transform transition-all duration-500 ${
												expandedItems.includes(item.id)
													? "translate-y-0 opacity-100"
													: "translate-y-4 opacity-0"
											}`}
										>
											<div className="flex gap-4">
												<div className="flex-shrink-0 mt-2">
													<div className="w-1.5 h-6 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
												</div>
												<div className="flex-1 space-y-4">
													<p className="text-muted-foreground leading-relaxed">
														{item.answer}
													</p>

													{/* Dynamic Feedback Section */}
													<div className="flex items-center justify-between pt-4 border-t border-border/20">
														<span className="text-sm text-muted-foreground">
															Was this helpful?
														</span>

														{feedback[item.id] ? (
															<div className="flex items-center gap-2">
																<span
																	className={`text-sm font-medium ${
																		feedback[item.id] === "helpful"
																			? "text-green-600"
																			: "text-orange-600"
																	}`}
																>
																	Thanks for your feedback!
																</span>
																<button
																	onClick={(e) => {
																		e.stopPropagation();
																		setFeedback((prev) => ({
																			...prev,
																			[item.id]: null,
																		}));
																	}}
																	className="text-xs text-muted-foreground hover:text-foreground underline cursor-pointer"
																>
																	Change
																</button>
															</div>
														) : (
															<div className="flex gap-2">
																<button
																	onClick={(e) => {
																		e.stopPropagation();
																		handleFeedback(item.id, true);
																	}}
																	className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg border border-transparent hover:border-green-200 dark:hover:border-green-800 transition-all duration-200 cursor-pointer"
																>
																	<svg
																		className="w-4 h-4"
																		fill="none"
																		viewBox="0 0 24 24"
																		stroke="currentColor"
																	>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth={2}
																			d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L9 6v4"
																		/>
																	</svg>
																	Yes
																</button>
																<button
																	onClick={(e) => {
																		e.stopPropagation();
																		handleFeedback(item.id, false);
																	}}
																	className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg border border-transparent hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-200 cursor-pointer"
																>
																	<svg
																		className="w-4 h-4"
																		fill="none"
																		viewBox="0 0 24 24"
																		stroke="currentColor"
																	>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth={2}
																			d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608 2.006L15 18v-4"
																		/>
																	</svg>
																	No
																</button>
															</div>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				{/* Contact Support CTA */}
				<div className="mt-16">
					<div className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-xl text-center">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
									d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18.75A.75.75 0 0112 18zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM18 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-2.25A.75.75 0 0118 12z"
								/>
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-foreground mb-2">
							Still have questions?
						</h3>
						<p className="text-muted-foreground mb-6">
							Our support team is available 24/7 to help you with any questions
							or concerns.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button className="min-w-[140px]">
								<svg
									className="mr-2 h-4 w-4"
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
								Live Chat Coming Soon
							</Button>
							<Button variant="outline" className="min-w-[140px]">
								<svg
									className="mr-2 h-4 w-4"
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
								<Link to={"/contact"}>Email Support</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

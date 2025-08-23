import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface IProps {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	categories: string[];
	selectedCategory: string;
	setSelectedCategory: (category: string) => void;
}

export default function HeroFaq({
	searchTerm,
	setSearchTerm,
	categories,
	selectedCategory,
	setSelectedCategory,
}: IProps) {
	return (
		<section className="relative py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto text-center">
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
								d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
						Frequently Asked{" "}
						<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							Questions
						</span>
					</h1>
					<p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
						Find quick answers to common questions about our digital wallet.
						Can't find what you're looking for? Contact our support team.
					</p>
				</div>

				{/* Search and Filter */}
				<div className="space-y-4 mb-12">
					<div className="relative max-w-md mx-auto">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<svg
								className="h-5 w-5 text-muted-foreground"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
						<Input
							type="text"
							placeholder="Search questions..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="pl-10 pr-4 py-2 w-full"
						/>
					</div>

					{/* Category Filter */}
					<div className="flex flex-wrap justify-center gap-2">
						{categories.map((category) => (
							<Button
								key={category}
								variant={selectedCategory === category ? "default" : "outline"}
								size="sm"
								onClick={() => setSelectedCategory(category)}
								className="text-xs"
							>
								{category}
							</Button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

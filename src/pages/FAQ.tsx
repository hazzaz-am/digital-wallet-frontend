import FAQContent from "@/components/modules/faq/FAQContent";
import HeroFaq from "@/components/modules/faq/HeroFaq";
import { faqData } from "@/data/faqData";
import { useState } from "react";

export default function FAQPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [expandedItems, setExpandedItems] = useState<string[]>([]);
	const [feedback, setFeedback] = useState<
		Record<string, "helpful" | "not-helpful" | null>
	>({});

	const categories = [
		"All",
		...Array.from(new Set(faqData.map((item) => item.category))),
	];

	const filteredFAQs = faqData.filter((item) => {
		const matchesSearch =
			item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.answer.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === "All" || item.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const toggleExpanded = (id: string) => {
		setExpandedItems((prev) => {
			return prev.includes(id) ? [] : [id];
		});
	};

	const handleFeedback = (questionId: string, isHelpful: boolean) => {
		setFeedback((prev) => ({
			...prev,
			[questionId]: isHelpful ? "helpful" : "not-helpful",
		}));
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
			<HeroFaq
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				categories={categories}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>

			<FAQContent
				filteredFAQs={filteredFAQs}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				expandedItems={expandedItems}
				toggleExpanded={toggleExpanded}
				feedback={feedback}
				setFeedback={setFeedback}
				handleFeedback={handleFeedback}
			/>
		</div>
	);
}

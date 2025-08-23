import ContactForm from "@/components/modules/contact/ContactForm";
import ContactHero from "@/components/modules/contact/ContactHero";
import ContactMethod from "@/components/modules/contact/ContactMethod";
import NewsLetter from "@/components/modules/contact/NewsLetter";

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
			<ContactHero />
			<ContactMethod />
			<ContactForm />
			<NewsLetter />
		</div>
	);
}

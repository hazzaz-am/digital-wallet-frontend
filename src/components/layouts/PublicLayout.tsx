import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
	return (
		<section className="min-h-screen flex flex-col">
			<Navbar />
			<div className="grow">{children}</div>
			<Footer />
		</section>
	);
}

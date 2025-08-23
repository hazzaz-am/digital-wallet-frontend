import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Scroll from "./Scroll";

export default function PublicLayout({ children }: { children: ReactNode }) {
	return (
		<section className="min-h-screen flex flex-col">
			<Navbar />
			<div className="grow">{children}</div>
			<Footer />
			<Scroll />
		</section>
	);
}

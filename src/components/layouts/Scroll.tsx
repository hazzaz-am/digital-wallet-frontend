import { useCallback, useEffect, useState } from "react";
import ScrollButton from "./ScrollButton";

export default function Scroll() {
	const [showScrollToTop, setShowScrollToTop] = useState(false);

/* The `updateScrollInfo` function defined using `useCallback` is responsible for calculating the
current scroll position of the window and determining whether to show the scroll-to-top button based
on the scroll percentage. */
	const updateScrollInfo = useCallback(() => {
		const currentScrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		const denom = Math.max(documentHeight - windowHeight, 1);
		const currentScrollPercentage = Math.min((currentScrollY / denom) * 100, 100);

		setShowScrollToTop(currentScrollPercentage > 20);
	}, []);

/* The `useEffect` hook in the provided code snippet is responsible for setting up event listeners for
the scroll event on the window and managing the scroll behavior. Here's a breakdown of what it does: */
	useEffect(() => {
		let rafId: number | null = null;

		const onScroll = () => {
			if (rafId !== null) return;
			rafId = requestAnimationFrame(() => {
				updateScrollInfo();
				rafId = null;
			});
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		updateScrollInfo();

		return () => {
			window.removeEventListener("scroll", onScroll);
			if (rafId !== null) cancelAnimationFrame(rafId);
		};
	}, [updateScrollInfo]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			<ScrollButton onClick={scrollToTop} visible={showScrollToTop} />
		</>
	);
}

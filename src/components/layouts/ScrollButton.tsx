interface ScrollButtonProps {
	onClick: () => void;
	visible: boolean;
}

export default function ScrollButton({ onClick, visible }: ScrollButtonProps) {
	return (
		<div className="relative">
			<button
				onClick={onClick}
				className={`fixed right-6 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg border border-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 group bottom-20 cursor-pointer ${
					visible
						? "opacity-100 translate-y-0 pointer-events-auto"
						: "opacity-0 translate-y-4 pointer-events-none"
				} `}
				aria-label={"Scroll to top"}
			>
				<svg
					className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 15l7-7 7 7"
					/>
				</svg>
				<svg
					className="absolute inset-0 w-full h-full -rotate-90"
					viewBox="0 0 44 44"
				>
					<circle
						cx="22"
						cy="22"
						r="20"
						fill="none"
						stroke="rgba(255, 255, 255, 0.2)"
						strokeWidth="2"
					/>
					<circle
						cx="22"
						cy="22"
						r="20"
						fill="none"
						stroke="rgba(255, 255, 255, 0.8)"
						strokeWidth="2"
						strokeDasharray={`${2 * Math.PI * 20}`}
						className="transition-all duration-300"
					/>
				</svg>
			</button>
		</div>
	);
}

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate("/");
	};

	const handleGoBack = () => {
		if (window.history.length > 1) {
			navigate(-1);
		} else {
			navigate("/");
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 flex items-center justify-center px-6 lg:px-8 pb-10 lg:pb-10">
			<div className="max-w-2xl mx-auto text-center">
				{/* Animated 404 Illustration */}
				<div className="mb-12 relative">
					<div className="mx-auto flex items-center justify-center">
						{/* Large 404 Text with Animation */}
						<div className="relative">
							<h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-primary/20 select-none animate-pulse">
								404
							</h1>

							{/* Floating Elements */}
							<div className="absolute top-4 -left-8 animate-bounce delay-300">
								<div className="w-4 h-4 bg-primary/30 rounded-full"></div>
							</div>
							<div className="absolute top-12 -right-6 animate-bounce delay-500">
								<div className="w-3 h-3 bg-secondary/40 rounded-full"></div>
							</div>
							<div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce delay-700">
								<div className="w-5 h-5 bg-primary/20 rounded-full"></div>
							</div>
						</div>
					</div>

					{/* Digital Wallet Icon */}
					<div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 border border-primary/20 shadow-lg animate-pulse">
						<svg
							className="h-12 w-12 text-primary"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>
				</div>

				{/* Content */}
				<div className="space-y-6">
					<div className="space-y-4">
						<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
							Page Not Found
						</h2>
						<p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
							Oops! The page you're looking for doesn't exist. It might have
							been moved, deleted, or you entered the wrong URL.
						</p>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
						<Button
							onClick={handleGoHome}
							className="min-w-[140px] bg-primary hover:bg-primary/90 cursor-pointer"
							size="lg"
						>
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
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
							Go Home
						</Button>
						<Button
							variant="outline"
							onClick={handleGoBack}
							className="min-w-[140px] cursor-pointer"
							size="lg"
						>
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
									d="M10 19l-7-7m0 0l7-7m-7 7h18"
								/>
							</svg>
							Go Back
						</Button>
					</div>
				</div>

				{/* Background Decoration */}
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
					<div className="absolute top-3/4 right-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
				</div>
			</div>
		</div>
	);
}

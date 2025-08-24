import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface NavbarSkeletonProps {
	isScrolled?: boolean;
}

export default function NavbarSkeleton({
	isScrolled = false,
}: NavbarSkeletonProps) {
	return (
		<header
			className={cn(
				"border-b px-4 md:px-6 sticky top-0 z-50 transition-all duration-300",
				isScrolled && [
					"backdrop-blur-md bg-background/30",
					"supports-[backdrop-filter]:bg-background/20",
					"border-border/40",
					"shadow-lg",
				]
			)}
		>
			<div className="flex h-16 items-center justify-between gap-4">
				{/* Left side */}
				<div className="flex items-center gap-2">
					{/* Mobile menu trigger skeleton */}
					<Skeleton className="size-8 md:hidden" />

					{/* Main nav */}
					<div className="flex items-center gap-6">
						{/* Logo skeleton */}
						<Skeleton className="h-8 w-8 rounded-full" />

						{/* Navigation menu skeleton - desktop only */}
						<div className="max-md:hidden flex items-center gap-2">
							{Array.from({ length: 6 }).map((_, index) => (
								<Skeleton key={index} className="h-8 w-16" />
							))}
						</div>
					</div>
				</div>

				{/* Right side */}
				<div className="flex items-center gap-4">
					{/* Login button skeleton */}
					<Skeleton className="h-8 w-16" />

					{/* Theme toggle skeleton */}
					<Skeleton className="size-8 rounded-full" />
				</div>
			</div>
		</header>
	);
}

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 p-6">
			<div className="max-w-4xl mx-auto space-y-6">
				{/* Header Skeleton */}
				<div className="text-center space-y-4">
					<Skeleton className="h-24 w-24 rounded-full mx-auto" />
					<Skeleton className="h-8 w-48 mx-auto" />
					<Skeleton className="h-4 w-32 mx-auto" />
				</div>

				{/* Cards Skeleton */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{Array.from({ length: 4 }).map((_, index) => (
						<Card key={index} className="p-6">
							<div className="space-y-4">
								<Skeleton className="h-5 w-32" />
								<div className="space-y-3">
									<div className="space-y-2">
										<Skeleton className="h-4 w-16" />
										<Skeleton className="h-10 w-full" />
									</div>
									<div className="space-y-2">
										<Skeleton className="h-4 w-16" />
										<Skeleton className="h-10 w-full" />
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

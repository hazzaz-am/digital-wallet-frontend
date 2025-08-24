import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AddMoneySkeleton() {
	return (
		<div className="space-y-6">
			{/* Header Skeleton */}
			<div>
				<Skeleton className="h-8 w-48 mb-2" />
				<Skeleton className="h-4 w-72" />
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				{/* Form Card Skeleton */}
				<Card>
					<CardHeader>
						<Skeleton className="h-6 w-40" />
						<Skeleton className="h-4 w-64" />
					</CardHeader>
					<CardContent className="space-y-6">
						{/* Wallet Selection Skeleton */}
						<div className="space-y-2">
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-10 w-full" />
						</div>

						{/* Amount Input Skeleton */}
						<div className="space-y-2">
							<Skeleton className="h-4 w-16" />
							<Skeleton className="h-10 w-full" />
							<Skeleton className="h-3 w-48" />
						</div>

						{/* Submit Button Skeleton */}
						<Skeleton className="h-10 w-full" />
					</CardContent>
				</Card>

				{/* Info Card Skeleton */}
				<Card>
					<CardHeader>
						<Skeleton className="h-6 w-32" />
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Skeleton className="h-4 w-24" />
							<Skeleton className="h-8 w-32" />
						</div>
						<div className="space-y-2">
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-6 w-16" />
						</div>
						<div className="pt-4 border-t">
							<Skeleton className="h-4 w-full mb-2" />
							<Skeleton className="h-3 w-3/4" />
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

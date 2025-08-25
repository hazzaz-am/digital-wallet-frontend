import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CashOutSkeleton() {
	return (
		<div className="space-y-6">
			{/* Header Skeleton */}
			<div>
				<Skeleton className="h-8 w-48 mb-2" />
				<Skeleton className="h-4 w-96" />
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				{/* Form Card Skeleton */}
				<Card className="lg:col-span-2">
					<CardHeader>
						<Skeleton className="h-6 w-40" />
						<Skeleton className="h-4 w-72" />
					</CardHeader>
					<CardContent className="space-y-6">
						{/* Agent Phone Input Skeleton */}
						<div className="space-y-2">
							<Skeleton className="h-4 w-32" />
							<div className="flex">
								<Skeleton className="h-10 w-16 rounded-r-none" />
								<Skeleton className="h-10 flex-1 rounded-l-none" />
							</div>
							<Skeleton className="h-3 w-64" />
						</div>

						{/* Amount Input Skeleton */}
						<div className="space-y-2">
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-10 w-full" />
							<Skeleton className="h-3 w-52" />
						</div>

						{/* Submit Button Skeleton */}
						<Skeleton className="h-10 w-full" />
					</CardContent>
				</Card>

				{/* Info Cards Skeleton */}
				<div className="space-y-6">
					{/* Wallet Info Card Skeleton */}
					<Card>
						<CardHeader>
							<Skeleton className="h-6 w-32" />
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Skeleton className="h-4 w-28" />
								<Skeleton className="h-8 w-32" />
							</div>
							<div className="space-y-2">
								<Skeleton className="h-4 w-20" />
								<Skeleton className="h-6 w-16" />
							</div>
						</CardContent>
					</Card>

					{/* Instructions Card Skeleton */}
					<Card>
						<CardHeader>
							<Skeleton className="h-6 w-36" />
						</CardHeader>
						<CardContent>
							<div className="space-y-2">
								<Skeleton className="h-3 w-full" />
								<Skeleton className="h-3 w-5/6" />
								<Skeleton className="h-3 w-4/5" />
								<Skeleton className="h-3 w-full" />
								<Skeleton className="h-3 w-3/4" />
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

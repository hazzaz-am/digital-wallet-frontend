import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TransactionTableSkeleton } from "./TransactionTableSkeleton";

export function TransactionsSkeleton() {
	return (
		<div className="space-y-6">
			<div>
				<Skeleton className="h-8 w-48 mb-2" />
				<Skeleton className="h-4 w-72" />
			</div>

			<div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
				<Skeleton className="h-10 w-48" />
				<div className="flex gap-4">
					<div className="text-center">
						<Skeleton className="h-6 w-20 mb-1" />
						<Skeleton className="h-4 w-16" />
					</div>
					<div className="text-center">
						<Skeleton className="h-6 w-20 mb-1" />
						<Skeleton className="h-4 w-16" />
					</div>
				</div>
			</div>

			<Card>
				<CardHeader>
					<Skeleton className="h-6 w-40" />
				</CardHeader>
				<CardContent>
					<TransactionTableSkeleton />
				</CardContent>
			</Card>
		</div>
	);
}

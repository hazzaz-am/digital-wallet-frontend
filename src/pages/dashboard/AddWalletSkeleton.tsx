import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AddWalletSkeleton() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 p-6">
			<div className="max-w-2xl mx-auto">
				{/* Header Skeleton */}
				<div className="mb-8 text-center">
					<Skeleton className="h-9 w-64 mx-auto mb-2" />
					<Skeleton className="h-5 w-80 mx-auto" />
				</div>

				{/* Main Form Card Skeleton */}
				<Card className="p-8 border-border/50">
					{/* User Information Section Skeleton */}
					<div className="bg-muted/30 rounded-lg p-4 mb-6 border border-border/20">
						<div className="flex items-center gap-2 mb-3">
							<Skeleton className="w-2 h-2 rounded-full" />
							<Skeleton className="h-5 w-48" />
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div className="space-y-2">
								<Skeleton className="h-4 w-16" />
								<Skeleton className="h-5 w-32" />
							</div>
							<div className="space-y-2">
								<Skeleton className="h-4 w-12" />
								<Skeleton className="h-5 w-28" />
							</div>
							<div className="space-y-2">
								<Skeleton className="h-4 w-20" />
								<div className="flex items-center gap-2">
									<Skeleton className="w-2 h-2 rounded-full" />
									<Skeleton className="h-5 w-16" />
								</div>
							</div>
						</div>
					</div>

					{/* Form Fields Skeleton */}
					<div className="space-y-6">
						{/* Wallet Type Field Skeleton */}
						<div className="space-y-2">
							<Skeleton className="h-4 w-24" />
							<div className="p-4 bg-muted/30 rounded-md border border-input">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<Skeleton className="w-3 h-3 rounded-full" />
										<div className="space-y-1">
											<Skeleton className="h-4 w-28" />
											<Skeleton className="h-3 w-48" />
										</div>
									</div>
									<Skeleton className="h-6 w-16 rounded" />
								</div>
							</div>
							<Skeleton className="h-4 w-64" />
						</div>

						{/* Wallet Status Field Skeleton */}
						<div className="space-y-2">
							<Skeleton className="h-4 w-28" />
							<div className="p-4 bg-muted/30 rounded-md border border-input">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<Skeleton className="w-3 h-3 rounded-full" />
										<div className="space-y-1">
											<Skeleton className="h-4 w-16" />
											<Skeleton className="h-3 w-52" />
										</div>
									</div>
									<Skeleton className="h-6 w-16 rounded" />
								</div>
							</div>
							<Skeleton className="h-4 w-72" />
						</div>

						{/* Initial Balance Field Skeleton */}
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<Skeleton className="h-4 w-28" />
								<Skeleton className="h-5 w-16 rounded-full" />
							</div>
							<Skeleton className="h-10 w-full rounded-md" />
							<div className="flex items-center justify-between">
								<Skeleton className="h-3 w-32" />
								<Skeleton className="h-3 w-20" />
							</div>
						</div>

						{/* Currency Field Skeleton */}
						<div className="space-y-2">
							<Skeleton className="h-4 w-20" />
							<div className="p-4 bg-muted/30 rounded-md border border-input">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<Skeleton className="w-8 h-8 rounded-full" />
										<div className="space-y-1">
											<Skeleton className="h-4 w-40" />
											<Skeleton className="h-3 w-56" />
										</div>
									</div>
									<Skeleton className="h-6 w-12 rounded" />
								</div>
							</div>
							<Skeleton className="h-4 w-68" />
						</div>

						{/* Form Actions Skeleton */}
						<div className="flex gap-4 pt-6 border-t border-border/20">
							<Skeleton className="h-10 flex-1 rounded-md" />
							<Skeleton className="h-10 flex-1 rounded-md" />
						</div>
					</div>
				</Card>

				{/* Information Cards Skeleton */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					<Card className="p-6 border-border/50">
						<Skeleton className="h-5 w-32 mb-3" />
						<div className="space-y-3">
							{[1, 2, 3, 4].map((i) => (
								<div key={i} className="flex items-center gap-2">
									<Skeleton className="w-1.5 h-1.5 rounded-full" />
									<Skeleton className="h-4 w-full max-w-[200px]" />
								</div>
							))}
						</div>
					</Card>

					<Card className="p-6 border-border/50">
						<Skeleton className="h-5 w-28 mb-3" />
						<div className="space-y-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-3/4" />
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}

import { Skeleton } from "@/components/ui/skeleton";

export default function LoginSkeleton() {
	return (
		<section className="">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				{/* Logo skeleton */}
				<div className="flex justify-center gap-2">
					<div className="flex items-center gap-2 font-medium">
						<Skeleton className="h-8 w-8 rounded-full" />
						<Skeleton className="h-6 w-24" />
					</div>
				</div>

				{/* Form skeleton */}
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs space-y-6">
						{/* Form title */}
						<div className="text-center space-y-2">
							<Skeleton className="h-8 w-32 mx-auto" />
							<Skeleton className="h-4 w-48 mx-auto" />
						</div>

						{/* Form fields */}
						<div className="space-y-4">
							{/* Email field */}
							<div className="space-y-2">
								<Skeleton className="h-4 w-12" />
								<Skeleton className="h-10 w-full" />
							</div>

							{/* Password field */}
							<div className="space-y-2">
								<Skeleton className="h-4 w-16" />
								<Skeleton className="h-10 w-full" />
							</div>

							{/* Remember me checkbox */}
							<div className="flex items-center space-x-2">
								<Skeleton className="h-4 w-4" />
								<Skeleton className="h-4 w-20" />
							</div>

							{/* Submit button */}
							<Skeleton className="h-10 w-full" />

							{/* Divider */}
							<div className="flex items-center space-x-2">
								<Skeleton className="h-px flex-1" />
								<Skeleton className="h-4 w-8" />
								<Skeleton className="h-px flex-1" />
							</div>

							{/* Social login buttons */}
							<div className="space-y-2">
								<Skeleton className="h-10 w-full" />
								<Skeleton className="h-10 w-full" />
							</div>

							{/* Footer links */}
							<div className="text-center space-y-2">
								<Skeleton className="h-4 w-40 mx-auto" />
								<div className="flex justify-center space-x-1">
									<Skeleton className="h-4 w-24" />
									<Skeleton className="h-4 w-16" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

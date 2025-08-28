import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetUserByIdQuery } from "@/store/features/auth/auth.api";
import { getRoleBadge } from "@/utils/getRoleBadge";
import { getStatusBadge } from "@/utils/getStatusBadge";
import { Eye } from "lucide-react";

export default function IndividualAccountPopover({
	userId,
}: {
	userId: string;
}) {
	const { data: user, isLoading } = useGetUserByIdQuery(userId);

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={"outline"} size="sm">
					<Eye height={14} width={14} />
				</Button>
			</DialogTrigger>
			<DialogContent className="w-200 p-4 mx-auto" showCloseButton={false}>
				{isLoading ? (
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<Skeleton className="h-6 w-32" />
							<Skeleton className="h-6 w-16" />
						</div>
						<Separator />
						<div className="space-y-3">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-3/4" />
							<Skeleton className="h-4 w-1/2" />
						</div>
						<Separator />
						<div className="space-y-3">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-2/3" />
						</div>
					</div>
				) : (
					<div className="space-y-4">
						<DialogHeader className="flex flex-row items-center justify-between">
							<DialogTitle className="text-lg font-semibold">
								Account Details
							</DialogTitle>
							<DialogDescription>
								<span
									className={`font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring cursor-pointer ${getRoleBadge(
										user?.data?.role || ""
									)}`}
								>
									{user?.data?.role}
								</span>
							</DialogDescription>
						</DialogHeader>

						<Separator />

						{/* User Information */}
						<div className="space-y-3">
							<div className="grid grid-cols-4 gap-2 text-sm">
								<span className="font-medium text-gray-600 col-span-2">
									Name:
								</span>
								<span className="col-span-2">{user?.data?.name || "Update Your Name"}</span>
							</div>

							<div className="grid grid-cols-4 gap-2 text-sm">
								<span className="font-medium text-gray-600 col-span-2">
									Phone:
								</span>
								<span className="col-span-2">{user?.data?.phone || "N/A"}</span>
							</div>

							<div className="grid grid-cols-4 gap-2 text-sm">
								<span className="font-medium text-gray-600 col-span-2">
									Status:
								</span>
								<div className="col-span-2">
									<span
										className={`inline-block px-2 py-1 text-xs font-medium rounded border ${
											!user?.data?.isDeleted
												? "bg-green-400/10 text-green-400 inset-ring-green-500/20"
												: "bg-red-400/10 text-red-400 inset-ring-red-500/20"
										}`}
									>
										{!user?.data?.isDeleted ? "Active" : "Deleted"}
									</span>
								</div>
							</div>

							<Separator />

							<div className="grid grid-cols-4 gap-2 text-sm">
								<span className="font-medium text-gray-600 col-span-2">
									Wallet Amount:
								</span>
								<span className="col-span-2">
									{user?.data?.walletAmount || "0"} BDT
								</span>
							</div>

							<Separator />

							<div className="grid grid-cols-4 gap-2 text-sm">
								<span className="col-span-2 font-medium text-gray-600">
									Total Transactions:
								</span>
								<span className="col-span-2">
									{user?.data?.totalTransactions || "0"}
								</span>
							</div>

							<div className="grid grid-cols-4 gap-2 text-sm">
								<span className="font-medium text-gray-600 col-span-2">
									Total Transaction Amount:
								</span>
								<span className="col-span-2">
									{user?.data?.totalTransactionAmount || "0"} BDT
								</span>
							</div>

							<Separator />

							<div className="grid grid-cols-4 gap-2 text-sm">
								<span className="font-medium text-gray-600 col-span-2">
									Joined:
								</span>
								<span className="col-span-2">
									{user?.data?.createdAt
										? formatDate(user.data.createdAt)
										: "N/A"}
								</span>
							</div>

							<div className="grid grid-cols-4 gap-2 text-sm">
								<span className="font-medium text-gray-600 col-span-2">
									Updated:
								</span>
								<span className="col-span-2">
									{user?.data?.updatedAt
										? formatDate(user.data.updatedAt)
										: "N/A"}
								</span>
							</div>
						</div>

						{/* Agent Information (Conditional) */}
						{user?.data?.role === "AGENT" && user?.data?.agentData && (
							<>
								<Separator />
								<div className="space-y-3">
									<h4 className="font-medium text-gray-800">Agent Details</h4>

									<div className="grid grid-cols-4 gap-2 text-sm">
										<span className="font-medium text-gray-600 col-span-2">
											Status:
										</span>
										<div className="col-span-2">
											<span
												className={`inline-block px-2 py-1 text-xs font-medium rounded border ${getStatusBadge(
													user.data.agentData.approvalStatus || ""
												)}`}
											>
												{user.data.agentData.approvalStatus}
											</span>
										</div>
									</div>

									<div className="grid grid-cols-4 gap-2 text-sm">
										<span className="font-medium text-gray-600 col-span-2">
											Commission:
										</span>
										<span className="col-span-2">
											{user.data.agentData.commissionRate
												? `${user.data.agentData.commissionRate}%`
												: "0.0 %"}
										</span>
									</div>
								</div>
							</>
						)}
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}

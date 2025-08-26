import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { UserProfile } from "@/types";
import { formatDate } from "@/utils/formatDate";
import { ArrowUpDown, Trash2 } from "lucide-react";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { TransactionsSkeleton } from "../dashboard/TransactionsSkeleton";
import {
	useGetAllUsersQuery,
	useUpdateUserInfoMutation,
} from "@/store/features/auth/auth.api";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function AllUsers() {
	const [currentPage, setCurrentPage] = useState(1);
	const [limit, setLimit] = useState("10");
	const [filterType, setFilterType] = useState<string>("ALL");
	const [sort, setSort] = useState<string>("-createdAt");
	const { data, isLoading, error } = useGetAllUsersQuery({
		role: filterType === "ALL" ? undefined : filterType,
		sort,
		page: currentPage,
		limit,
	});
	const [updateUserInfo] = useUpdateUserInfoMutation();

	const handleDeleteUser = async (user: UserProfile, userId: string) => {
		const toastId = toast.loading("Deleting user...");
		if (user.role === "ADMIN") {
			toast.error("You cannot delete an admin user", { id: toastId });
			return;
		}

		if (user.isDeleted) {
			toast.error("User is already deleted", { id: toastId });
			return;
		}
		try {
			const res = await updateUserInfo({
				id: userId,
				updatedData: { isDeleted: true },
			}).unwrap();
			if (res.success) {
				toast.success("User deleted successfully", { id: toastId });
			}
		} catch (error) {
			toast.error("Failed to delete user", { id: toastId });
		}
	};

	const handleWalletApproval = async (
		approvalStatus: "APPROVED" | "REJECTED",
		userId: string
	) => {
		const toastId = toast.loading("Updating agent approval...");
		try {
			const res = await updateUserInfo({
				id: userId,
				updatedData: { agentData: { approvalStatus } },
			}).unwrap();
			if (res.success) {
				toast.success("Agent approval completed successfully", { id: toastId });
			}
		} catch (error) {
			toast.error("Failed to update agent", { id: toastId });
		}
	};

	if (isLoading) {
		return <TransactionsSkeleton />;
	}

	if (error || !data?.data) {
		return (
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Users</h1>
					<p className="text-muted-foreground">All Users</p>
				</div>
				<Card>
					<CardContent className="flex items-center justify-center py-12">
						<div className="text-center space-y-2">
							<p className="text-muted-foreground">
								Failed to load users accounts
							</p>
							<p className="text-sm text-muted-foreground">
								Please try refreshing the page
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		);
	}

	const totalPage = data?.meta?.totalPage || 1;

	return (
		<div className="space-y-6">
			{/* Header */}
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Users</h1>
				<p className="text-muted-foreground">View and manage users</p>
			</div>

			<div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<label htmlFor="transaction-filter" className="text-sm font-medium">
							Filter by role:
						</label>
						<Select value={filterType} onValueChange={setFilterType}>
							<SelectTrigger className="w-48">
								<SelectValue placeholder="Select wallet type" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="ALL">All Users</SelectItem>
								<SelectItem value="USER">User</SelectItem>
								<SelectItem value="AGENT">Agent</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="flex items-center gap-2">
						<label htmlFor="transactions-limit" className="text-sm font-medium">
							Set Limit:
						</label>
						<Select value={limit} onValueChange={setLimit}>
							<SelectTrigger className="w-48">
								<SelectValue placeholder="Set Limit" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="10">10</SelectItem>
								<SelectItem value="20">20</SelectItem>
								<SelectItem value="30">30</SelectItem>
								<SelectItem value="40">40</SelectItem>
								<SelectItem value="50">50</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>

			{/* Users Table */}
			<Card>
				<CardHeader>
					<div className="flex justify-between items-center">
						<CardTitle>
							Users
							{filterType !== "ALL" && (
								<span className="ml-2 text-sm font-normal text-muted-foreground">
									({data?.data?.length}{" "}
									{filterType !== undefined &&
										filterType.replace("_", " ").toLowerCase()}{" "}
									users)
								</span>
							)}
						</CardTitle>
						{data?.data?.length > 0 && (
							<Button
								variant="outline"
								size="sm"
								onClick={() => {
									setFilterType("ALL");
									setLimit("");
								}}
								className={filterType === "ALL" ? "hidden" : ""}
							>
								Clear Filter
							</Button>
						)}
					</div>
				</CardHeader>
				<CardContent>
					{data?.data?.length === 0 ? (
						<div className="text-center py-12">
							<div className="text-muted-foreground mb-2">
								{filterType === "ALL"
									? "No users found"
									: `No ${
											filterType !== undefined &&
											filterType.replace("_", " ").toLowerCase()
									  } users found`}
							</div>
							<p className="text-sm text-muted-foreground">
								{filterType === "ALL"
									? "Users will appear here once they are created"
									: "Try selecting a different user type"}
							</p>
						</div>
					) : (
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Name</TableHead>
									<TableHead
										title="sort by date"
										onClick={() =>
											setSort((prev) =>
												prev === "createdAt"
													? "-createdAt"
													: prev === "-createdAt"
													? "createdAt"
													: "-createdAt"
											)
										}
										className="flex gap-2 items-center"
									>
										Date & Time
										<ArrowUpDown size={12} />
									</TableHead>
									<TableHead>Account ID</TableHead>
									<TableHead className="text-center">Phone</TableHead>
									<TableHead className="text-right">Account Status</TableHead>
									<TableHead className="text-right">Wallet Approval</TableHead>
									<TableHead className="text-right">Delete</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{data?.data?.map((user: UserProfile) => {
									return (
										<TableRow key={user._id}>
											<TableCell>
												<div className="flex items-center gap-2">
													<span className="font-medium text-sm">
														{user.name || (
															<span className="text-muted-foreground">
																Unknown
															</span>
														)}
													</span>
													<span className="font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring bg-yellow-400/10 text-yellow-400 inset-ring-yellow-500/20 animate-pulse">
														{user.role}
													</span>
												</div>
											</TableCell>
											<TableCell>
												<span className="text-sm">
													{formatDate(user.createdAt)}
												</span>
											</TableCell>
											<TableCell>
												<span className="font-mono text-xs text-muted-foreground">
													{user._id.slice(-8)}
												</span>
											</TableCell>
											<TableCell className="text-center">
												<span className="font-mono text-xs text-muted-foreground">
													{user.phone}
												</span>
											</TableCell>
											<TableCell className="text-right">
												<span
													className={cn(
														"font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring animate-pulse",
														user.isDeleted
															? "bg-red-400/10 text-red-400 inset-ring-red-400/20"
															: " bg-green-400/10 text-green-400 inset-ring-green-500/20"
													)}
												>
													{user.isDeleted ? "Deleted" : "Active"}
												</span>
											</TableCell>
											<TableCell className="text-right">
												{["ADMIN", "USER"].includes(user.role) && (
													<span className="font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring animate-pulse bg-green-400/10 text-green-400 inset-ring-green-500/20">
														{"APPROVED"}
													</span>
												)}
												{user.role === "AGENT" &&
													user.agentData?.approvalStatus === "PENDING" && (
														<div className="flex items-center justify-end gap-2">
															<span
																onClick={() =>
																	handleWalletApproval("APPROVED", user._id)
																}
																className="font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring animate-pulse bg-green-400/10 text-green-400 inset-ring-green-500/20 cursor-pointer"
															>
																Approve
															</span>
															<span
																onClick={() =>
																	handleWalletApproval("REJECTED", user._id)
																}
																className="font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring animate-pulse bg-red-400/10 text-red-400 inset-ring-red-400/20 cursor-pointer"
															>
																Reject
															</span>
														</div>
													)}

												{user.role === "AGENT" &&
													user.agentData?.approvalStatus === "APPROVED" && (
														<span className="font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring animate-pulse bg-green-400/10 text-green-400 inset-ring-green-500/20">
															{"APPROVED"}
														</span>
													)}
												{user.role === "AGENT" &&
													user.agentData?.approvalStatus === "REJECTED" && (
														<span className="font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring animate-pulse bg-red-400/10 text-red-400 inset-ring-red-400/20">
															{"REJECTED"}
														</span>
													)}
											</TableCell>
											<TableCell className="text-right">
												<Button
													onClick={() => handleDeleteUser(user, user._id)}
													variant={"outline"}
												>
													<Trash2 color="red" height={14} width={14} />
												</Button>
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					)}
				</CardContent>
			</Card>

			{totalPage > 1 && (
				<div className="flex justify-end mt-4">
					<div>
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious
										onClick={() => setCurrentPage((prev) => prev - 1)}
										className={
											currentPage === 1
												? "pointer-events-none opacity-50"
												: "cursor-pointer"
										}
									/>
								</PaginationItem>
								{Array.from({ length: totalPage }, (_, index) => index + 1).map(
									(page) => (
										<PaginationItem
											key={page}
											onClick={() => setCurrentPage(page)}
										>
											<PaginationLink isActive={currentPage === page}>
												{page}
											</PaginationLink>
										</PaginationItem>
									)
								)}
								<PaginationItem>
									<PaginationNext
										onClick={() => setCurrentPage((prev) => prev + 1)}
										className={
											currentPage === totalPage
												? "pointer-events-none opacity-50"
												: "cursor-pointer"
										}
									/>
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
				</div>
			)}
		</div>
	);
}

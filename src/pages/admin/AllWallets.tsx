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
import type { IWallet } from "@/types";
import { getTransactionTypeBadge } from "@/utils/getTransactionTypeBadge";
import { formatDate } from "@/utils/formatDate";
import { ArrowUpDown } from "lucide-react";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetWalletsQuery } from "@/store/features/wallet/wallet.api";
import { WALLET_TYPES } from "@/constants/walletType";
import { TransactionsSkeleton } from "../dashboard/TransactionsSkeleton";
import { cn } from "@/lib/utils";

export default function AllWallets() {
	const [currentPage, setCurrentPage] = useState(1);
	const [limit, setLimit] = useState("10");
	const [filterType, setFilterType] = useState<string>("ALL");
	const [sort, setSort] = useState<string>("-createdAt");
	const { data, isLoading, error } = useGetWalletsQuery({
		type: filterType === "ALL" ? undefined : filterType,
		sort,
		page: currentPage,
		limit,
	});

	console.log("wallets data", data);

	if (isLoading) {
		return <TransactionsSkeleton />;
	}

	if (error || !data?.data) {
		return (
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Wallets</h1>
					<p className="text-muted-foreground">All Wallets</p>
				</div>
				<Card>
					<CardContent className="flex items-center justify-center py-12">
						<div className="text-center space-y-2">
							<p className="text-muted-foreground">
								Failed to load user wallets
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
				<h1 className="text-3xl font-bold tracking-tight">Wallets</h1>
				<p className="text-muted-foreground">View and manage wallets</p>
			</div>

			<div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<label htmlFor="transaction-filter" className="text-sm font-medium">
							Filter by type:
						</label>
						<Select value={filterType} onValueChange={setFilterType}>
							<SelectTrigger className="w-48">
								<SelectValue placeholder="Select wallet type" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="ALL">All Wallets</SelectItem>
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

			{/* Wallets Table */}
			<Card>
				<CardHeader>
					<div className="flex justify-between items-center">
						<CardTitle>
							Wallets
							{filterType !== "ALL" && (
								<span className="ml-2 text-sm font-normal text-muted-foreground">
									({data?.data?.length}{" "}
									{filterType !== undefined &&
										filterType.replace("_", " ").toLowerCase()}{" "}
									wallets)
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
									? "No Wallets found"
									: `No ${
											filterType !== undefined &&
											filterType.replace("_", " ").toLowerCase()
									  } wallets found`}
							</div>
							<p className="text-sm text-muted-foreground">
								{filterType === "ALL"
									? "Wallets will appear here once you user/agent using their wallet"
									: "Try selecting a different wallet type"}
							</p>
						</div>
					) : (
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Wallet Type</TableHead>
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
									<TableHead>Wallet ID</TableHead>
									<TableHead
										title="sort by balance"
										onClick={() =>
											setSort((prev) =>
												prev === "balance"
													? "-balance"
													: prev === "-balance"
													? "balance"
													: "-balance"
											)
										}
										className="text-right flex gap-2 items-center justify-end"
									>
										Balance
										<ArrowUpDown size={12} />
									</TableHead>
									<TableHead className="text-right">Wallet Status</TableHead>
									<TableHead className="text-right">Role</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{data?.data?.map((wallet: IWallet) => {
									return (
										<TableRow key={wallet._id}>
											<TableCell>
												<div className="flex items-center gap-2">
													<span className="font-medium text-sm">
														{WALLET_TYPES[
															wallet.type as keyof typeof WALLET_TYPES
														] || wallet.type}
													</span>
													<span
														className={`px-2 py-1 rounded-full text-xs font-medium border ${getTransactionTypeBadge(
															wallet.type
														)}`}
													>
														{wallet.type}
													</span>
												</div>
											</TableCell>
											<TableCell>
												<span className="text-sm">
													{formatDate(wallet.createdAt)}
												</span>
											</TableCell>
											<TableCell>
												<span className="font-mono text-xs text-muted-foreground">
													{wallet._id.slice(-8)}
												</span>
											</TableCell>
											<TableCell className="text-right">
												<div className={`text-sm font-bold`}>
													{wallet.balance.toLocaleString()} BDT
												</div>
											</TableCell>
											<TableCell className="text-right">
												<span
													className={cn(
														"font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring",
														wallet.status === "ACTIVE" &&
															"bg-green-400/10 text-green-400 inset-ring-green-500/20",
														wallet.status === "BLOCKED" &&
															"bg-red-400/10 text-red-400 inset-ring-red-500/20"
													)}
												>
													{wallet.status}
												</span>
											</TableCell>
											<TableCell className="text-right">
												<span
													className={cn(
														"font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring",
														wallet.type === "USER" && "bg-yellow-400/10 text-yellow-400 inset-ring-yellow-500/20",
														wallet.type === "AGENT" && "bg-purple-400/10 text-purple-400 inset-ring-purple-500/20",
													)}
												>
													{wallet.type}
												</span>
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

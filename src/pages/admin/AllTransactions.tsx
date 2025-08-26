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
import { useGetAllTransactionsQuery } from "@/store/features/transaction/transaction.api";
import type { Transaction } from "@/types";
import { TRANSACTION_TYPES } from "@/constants/transactionsType";
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
import { TransactionsSkeleton } from "../dashboard/TransactionsSkeleton";
import { cn } from "@/lib/utils";

export default function AllTransactions() {
	const [currentPage, setCurrentPage] = useState(1);
	const [limit, setLimit] = useState("10");
	const [filterType, setFilterType] = useState<string>("ALL");
	const [initiatedByRole, setInitiatedByRole] = useState<string>("ALL");
	const [receiverRole, setreceiverRole] = useState<string>("ALL");
	const [sort, setSort] = useState<string>("-createdAt");
	const { data, isLoading, error } = useGetAllTransactionsQuery({
		type: filterType === "ALL" ? undefined : filterType,
		initiatedByRole: initiatedByRole === "ALL" ? undefined : initiatedByRole,
		receiverRole: receiverRole === "ALL" ? undefined : receiverRole,
		sort,
		page: currentPage,
		limit,
	});

	if (isLoading) {
		return <TransactionsSkeleton />;
	}

	if (error || !data?.data) {
		return (
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
					<p className="text-muted-foreground">Your transaction history</p>
				</div>
				<Card>
					<CardContent className="flex items-center justify-center py-12">
						<div className="text-center space-y-2">
							<p className="text-muted-foreground">
								Failed to load transactions
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
	console.log(data?.meta?.total);

	return (
		<div className="space-y-6">
			{/* Header */}
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
				<p className="text-muted-foreground">
					View and manage your transaction history
				</p>
			</div>

			<div className="flex flex-col gap-4 justify-between items-start">
				<div className="flex gap-6 text-center">
					<div>
						<div className="text-xl font-bold">
							<div className="text-muted-foreground">
								Total Transactions :{" "}
								<span className="text-blue-500">{data?.meta?.total || 0}</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex gap-2 flex-wrap">
					<div className="flex items-center gap-2">
						<label htmlFor="transaction-filter" className="text-sm font-medium">
							Filter by type:
						</label>
						<Select value={filterType} onValueChange={setFilterType}>
							<SelectTrigger className="w-48">
								<SelectValue placeholder="Select transaction type" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="ALL">All Transactions</SelectItem>
								<SelectItem value="SEND_MONEY">Send Money</SelectItem>
								<SelectItem value="TOP_UP">Top Up</SelectItem>
								<SelectItem value="CASH_OUT">Cash Out</SelectItem>
								<SelectItem value="CASH_IN">Cash In</SelectItem>
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

					<div className="flex items-center gap-2">
						<label htmlFor="transactions-limit" className="text-sm font-medium">
							Intiated by:
						</label>
						<Select value={initiatedByRole} onValueChange={setInitiatedByRole}>
							<SelectTrigger className="w-48">
								<SelectValue placeholder="Select Role" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="ALL">All</SelectItem>
								<SelectItem value="USER">User</SelectItem>
								<SelectItem value="AGENT">Agent</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="flex items-center gap-2">
						<label htmlFor="transactions-limit" className="text-sm font-medium">
							Recived by:
						</label>
						<Select value={receiverRole} onValueChange={setreceiverRole}>
							<SelectTrigger className="w-48">
								<SelectValue placeholder="Select Role" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="ALL">All</SelectItem>
								<SelectItem value="USER">User</SelectItem>
								<SelectItem value="AGENT">Agent</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>

			{/* Transactions Table */}
			<Card>
				<CardHeader>
					<div className="flex justify-between items-center">
						<CardTitle>
							Transaction History
							{filterType !== "ALL" && (
								<span className="ml-2 text-sm font-normal text-muted-foreground">
									({data?.data?.length}{" "}
									{filterType !== undefined &&
										filterType.replace("_", " ").toLowerCase()}{" "}
									transactions)
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
									? "No transactions found"
									: `No ${
											filterType !== undefined &&
											filterType.replace("_", " ").toLowerCase()
									  } transactions found`}
							</div>
							<p className="text-sm text-muted-foreground">
								{filterType === "ALL"
									? "Your transactions will appear here once you start using your wallet"
									: "Try selecting a different transaction type"}
							</p>
						</div>
					) : (
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Transaction Type</TableHead>
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
									<TableHead>Transaction ID</TableHead>
									<TableHead
										title="sort by amount"
										onClick={() =>
											setSort((prev) =>
												prev === "amount"
													? "-amount"
													: prev === "-amount"
													? "amount"
													: "amount"
											)
										}
										className="text-right flex gap-2 items-center justify-end"
									>
										Amount
										<ArrowUpDown size={12} />
									</TableHead>
									<TableHead className="text-right">Initiated By</TableHead>
									<TableHead className="text-right">Receiver</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{data?.data?.map((transaction: Transaction) => {
									return (
										<TableRow key={transaction._id}>
											<TableCell>
												<div className="flex items-center gap-2">
													<span className="font-medium text-sm">
														{TRANSACTION_TYPES[
															transaction.type as keyof typeof TRANSACTION_TYPES
														] || transaction.type}
													</span>
													<span
														className={`px-2 py-1 rounded-full text-xs font-medium border ${getTransactionTypeBadge(
															transaction.type
														)}`}
													>
														{transaction.type.replace("_", " ")}
													</span>
												</div>
											</TableCell>
											<TableCell>
												<span className="text-sm">
													{formatDate(transaction.createdAt)}
												</span>
											</TableCell>
											<TableCell>
												<span className="font-mono text-xs text-muted-foreground">
													{transaction._id.slice(-8)}
												</span>
											</TableCell>
											<TableCell className="text-right">
												<div className="font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring bg-green-400/10 text-green-400 inset-ring-green-500/20">
													{transaction.amount.toLocaleString()} BDT
												</div>
											</TableCell>
											<TableCell className="text-right">
												<span
													className={cn(
														"font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring",
														transaction.initiatedByRole === "USER" &&
															"bg-yellow-400/10 text-yellow-400 inset-ring-yellow-500/20",
														transaction.initiatedByRole === "AGENT" &&
															"bg-purple-400/10 text-purple-400 inset-ring-purple-500/20"
													)}
												>
													{transaction.initiatedByRole}
												</span>
											</TableCell>
											<TableCell className="text-right">
												<span
													className={cn(
														"font-mono px-2 py-1 text-xs font-medium inline-flex items-center rounded-md inset-ring",
														transaction.receiverRole === "USER" &&
															"bg-yellow-400/10 text-yellow-400 inset-ring-yellow-500/20",
														transaction.receiverRole === "AGENT" &&
															"bg-purple-400/10 text-purple-400 inset-ring-purple-500/20",
														!transaction?.receiverRole &&
															"bg-pink-400/10 text-pink-400 inset-ring-pink-500/20"
													)}
												>
													{transaction.receiverRole
														? transaction.receiverRole
														: "N/A"}
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

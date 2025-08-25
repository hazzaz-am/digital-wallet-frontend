import { useMemo, useState } from "react";
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
import { useMyTransactionsQuery } from "@/store/features/transaction/transaction.api";
import { TransactionsSkeleton } from "./TransactionsSkeleton";
import type { Transaction } from "@/types";
import { getTransactionDirection } from "@/utils/getTransactionDirection";
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

export default function Transactions() {
	const [currentPage, setCurrentPage] = useState(1);
	const [limit, setLimit] = useState("10");
	const [filterType, setFilterType] = useState<string>("ALL");
	const [sort, setSort] = useState<string>("-createdAt");
	const { data, isLoading, error } = useMyTransactionsQuery({
		type: filterType === "ALL" ? undefined : filterType,
		sort,
		page: currentPage,
		limit,
	});

	const stats = useMemo(() => {
		if (!data?.data) return { total: 0, sent: 0, received: 0 };

		const transactions = data.data;
		const sent = transactions
			.filter((t: Transaction) => ["SEND_MONEY", "CASH_OUT"].includes(t.type))
			.reduce((sum: number, t: Transaction) => sum + t.amount, 0);

		const received = transactions
			.filter((t: Transaction) => ["CASH_IN", "TOP_UP"].includes(t.type))
			.reduce((sum: number, t: Transaction) => sum + t.amount, 0);

		return {
			total: transactions.length,
			sent,
			received,
		};
	}, [data?.data]);

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

	return (
		<div className="space-y-6">
			{/* Header */}
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
				<p className="text-muted-foreground">
					View and manage your transaction history
				</p>
			</div>

			<div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
				<div className="flex flex-col gap-2">
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
				</div>

				{/* Quick Stats */}
				<div className="flex gap-6 text-center">
					<div>
						<div className="text-2xl font-bold text-green-600">
							+{stats.received.toLocaleString()}
						</div>
						<div className="text-xs text-muted-foreground">Received</div>
					</div>
					<div>
						<div className="text-2xl font-bold text-red-600">
							-{stats.sent.toLocaleString()}
						</div>
						<div className="text-xs text-muted-foreground">Sent</div>
					</div>
					<div>
						<div className="text-2xl font-bold text-blue-500">
							{stats.total}
						</div>
						<div className="text-xs text-muted-foreground">Total</div>
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
									<TableHead className="text-right">Role</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{data?.data?.map((transaction: Transaction) => {
									const direction = getTransactionDirection(transaction.type);

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
												<div
													className={`text-sm font-bold ${direction.amountClass}`}
												>
													{direction.prefix}
													{transaction.amount.toLocaleString()} BDT
												</div>
											</TableCell>
											<TableCell className="text-right">
												<span className="text-xs text-muted-foreground">
													{transaction.initiatedByRole}
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

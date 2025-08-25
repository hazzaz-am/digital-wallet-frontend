import LineChartComponent from "@/components/modules/dashboard/LineChart";
import PieChartComponent from "@/components/modules/dashboard/PieChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TRANSACTION_TYPES } from "@/constants/transactionsType";
import { useMyTransactionsQuery } from "@/store/features/transaction/transaction.api";
import type { Transaction } from "@/types";
import { useMemo } from "react";

export const COLORS = ["#6366f1", "#22c55e", "#f59e42", "#a21caf", "#64748b"];

function AnalyticsSkeleton() {
	return (
		<div className="space-y-6">
			<div>
				<Skeleton className="h-8 w-48 mb-2" />
				<Skeleton className="h-4 w-72" />
			</div>
			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<Skeleton className="h-6 w-40" />
					</CardHeader>
					<CardContent>
						<Skeleton className="h-72 w-full" />
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<Skeleton className="h-6 w-40" />
					</CardHeader>
					<CardContent>
						<Skeleton className="h-72 w-full" />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

function getMonthYear(date: string) {
	const d = new Date(date);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function getMonthLabel(date: string) {
	const d = new Date(date);
	return d.toLocaleString("default", { month: "short", year: "2-digit" });
}

export default function Analytics() {
	const { data, isLoading } = useMyTransactionsQuery(undefined);
	const transactions = data?.data || [];

	// Group by month for line chart
	const monthlyData = useMemo(() => {
		const map: Record<string, { month: string; total: number }> = {};
		transactions.forEach((t: Transaction) => {
			const key = getMonthYear(t.createdAt);
			if (!map[key]) {
				map[key] = { month: getMonthLabel(t.createdAt), total: 0 };
			}
			map[key].total += t.amount;
		});
		// Sort by month ascending
		return Object.values(map).sort((a, b) => a.month.localeCompare(b.month));
	}, [transactions]);

	const currentMonth = new Date().getMonth();
	const currentYear = new Date().getFullYear();
	const currentMonthTx = transactions.filter((t: Transaction) => {
		const d = new Date(t.createdAt);
		return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
	});

	const typeMap: Record<string, number> = {};
	currentMonthTx.forEach((t: Transaction) => {
		typeMap[t.type] = (typeMap[t.type] || 0) + 1;
	});

	const pieData = Object.entries(typeMap).map(([type, value]) => ({
		name: TRANSACTION_TYPES[type as keyof typeof TRANSACTION_TYPES] || type,
		value,
	}));

	// Extra: total transactions, most active type
	const totalTx = transactions.length;
	const mostActiveType = pieData.sort((a, b) => b.value - a.value)[0]?.name;

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
				<p className="text-muted-foreground">
					Visualize your transaction activity and trends
				</p>
			</div>

			{isLoading ? (
				<AnalyticsSkeleton />
			) : (
				<>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
						<Card>
							<CardContent className="py-4 flex flex-col items-center">
								<span className="text-2xl font-bold">{totalTx}</span>
								<span className="text-xs text-muted-foreground">
									Total Transactions
								</span>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="py-4 flex flex-col items-center">
								<span className="text-2xl font-bold">
									{monthlyData.at(-1)?.total?.toLocaleString() || 0}
								</span>
								<span className="text-xs text-muted-foreground">
									This Month's Volume
								</span>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="py-4 flex flex-col items-center">
								<span className="text-2xl font-bold">
									{pieData.length > 0 ? pieData[0].value : 0}
								</span>
								<span className="text-xs text-muted-foreground">
									Most Active Type
								</span>
								<span className="text-xs text-muted-foreground font-semibold">
									{mostActiveType || "-"}
								</span>
							</CardContent>
						</Card>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						{/* Line Chart Card */}
						<Card>
							<CardHeader>
								<CardTitle>Monthly Transaction Volume</CardTitle>
								<p className="text-sm text-muted-foreground">
									Total transaction amount per month
								</p>
							</CardHeader>
							<CardContent className="h-80">
								{monthlyData.length === 0 ? (
									<div className="flex items-center justify-center h-full">
										<span className="text-muted-foreground">No data</span>
									</div>
								) : (
									<LineChartComponent monthlyData={monthlyData} />
								)}
							</CardContent>
						</Card>

						<PieChartComponent pieData={pieData} />
					</div>
				</>
			)}
		</div>
	);
}

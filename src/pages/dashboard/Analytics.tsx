import LineChartComponent from "@/components/modules/dashboard/LineChart";
import PieChartComponent from "@/components/modules/dashboard/PieChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TRANSACTION_TYPES } from "@/constants/transactionsType";
import { useGetAllTransactionsStatsQuery } from "@/store/features/transaction/transaction.api";
import type { AnalyticsData } from "@/types";
import { formatAmount } from "@/utils/formatAmount";
import { useMemo } from "react";

export const COLORS = ["#6366f1", "#22c55e", "#f59e42", "#a21caf", "#64748b"];

export default function Analytics() {
	const { data, isLoading } = useGetAllTransactionsStatsQuery(undefined);
	const analyticsData: AnalyticsData = data?.data;
	const overallStats = analyticsData?.overall?.[0] || {
		totalTransactions: 0,
		totalAmount: 0,
	};

	const pieData = useMemo(() => {
		if (!analyticsData?.monthlyTypes) return [];

		return analyticsData.monthlyTypes.map((item) => ({
			name:
				TRANSACTION_TYPES[item._id as keyof typeof TRANSACTION_TYPES] ||
				item._id,
			value: item.count,
			amount: item.totalAmount,
		}));
	}, [analyticsData?.monthlyTypes]);

	const yearlyData = useMemo(() => {
		if (!analyticsData?.yearly) return [];

		return analyticsData.yearly.map((item) => ({
			month: `Month ${item._id}`,
			total: item.totalAmount,
		}));
	}, [analyticsData?.yearly]);

	const mostActiveType = useMemo(() => {
		if (pieData.length === 0) return { name: "-", value: 0 };
		return pieData.reduce((max, current) =>
			current.value > max.value ? current : max
		);
	}, [pieData]);

	if (isLoading) {
		return (
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
					<p className="text-muted-foreground">
						Visualize your transaction activity and trends
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
					{[1, 2, 3, 4].map((i) => (
						<Card key={i}>
							<CardContent className="py-4 flex flex-col items-center">
								<div className="h-8 w-16 bg-gray-200 rounded animate-pulse mb-2" />
								<div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
				<p className="text-muted-foreground">
					Visualize your transaction activity and trends
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
				<Card>
					<CardContent className="py-4 flex flex-col items-center">
						<span className="text-2xl font-bold">
							{overallStats.totalTransactions}
						</span>
						<span className="text-xs text-muted-foreground">
							Total Transactions
						</span>
					</CardContent>
				</Card>

				<Card>
					<CardContent className="py-4 flex flex-col items-center">
						<span className="text-2xl font-bold">
							{formatAmount(overallStats.totalAmount)}
						</span>
						<span className="text-xs text-muted-foreground">Total Volume</span>
					</CardContent>
				</Card>

				<Card>
					<CardContent className="py-4 flex flex-col items-center">
						<span className="text-2xl font-bold">{mostActiveType.value}</span>
						<span className="text-xs text-muted-foreground">
							Most Active Type
						</span>
						<span className="text-xs text-muted-foreground font-semibold">
							{mostActiveType.name}
						</span>
					</CardContent>
				</Card>

				<Card>
					<CardContent className="py-4 flex flex-col items-center">
						<span className="text-2xl font-bold">{pieData.length}</span>
						<span className="text-xs text-muted-foreground">
							Transaction Types
						</span>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Monthly Transaction Volume</CardTitle>
						<p className="text-sm text-muted-foreground">
							Total transaction amount per month
						</p>
					</CardHeader>
					<CardContent className="h-80">
						{yearlyData.length === 0 ? (
							<div className="flex items-center justify-center h-full">
								<span className="text-muted-foreground">No data available</span>
							</div>
						) : (
							<LineChartComponent monthlyData={yearlyData} />
						)}
					</CardContent>
				</Card>

				<PieChartComponent pieData={pieData} />
			</div>
		</div>
	);
}

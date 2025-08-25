import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COLORS } from "@/pages/dashboard/Analytics";
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";

export default function PieChartComponent({
	pieData,
}: {
	pieData: {
		name: "Top Up" | "Send Money" | "Cash In" | "Cash Out" | "All Transactions";
		value: number;
	}[];
}) {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Current Month Transaction Types</CardTitle>
					<p className="text-sm text-muted-foreground">
						Ratio of transaction types for{" "}
						{new Date().toLocaleString("default", {
							month: "long",
							year: "numeric",
						})}
					</p>
				</CardHeader>
				<CardContent className="h-80 flex flex-col items-center justify-center">
					{pieData.length === 0 ? (
						<span className="text-muted-foreground">No data</span>
					) : (
						<ResponsiveContainer width="100%" height={300}>
							<PieChart>
								<Pie
									data={pieData}
									dataKey="value"
									nameKey="name"
									cx="50%"
									cy="50%"
									outerRadius={90}
									label
								>
									{pieData.map((_entry, idx) => (
										<Cell
											key={`cell-${idx}`}
											fill={COLORS[idx % COLORS.length]}
										/>
									))}
								</Pie>
								<Tooltip />
								<Legend />
							</PieChart>
						</ResponsiveContainer>
					)}
				</CardContent>
			</Card>
		</>
	);
}

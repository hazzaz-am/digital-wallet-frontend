import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

export default function LineChartComponent({
	monthlyData,
}: {
	monthlyData: {
		month: string;
		total: number;
	}[];
}) {
	return (
		<>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={monthlyData}
					margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="total"
						stroke="#6366f1"
						strokeWidth={2}
						dot={{ r: 4 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

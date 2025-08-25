import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export function TransactionTableSkeleton() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="h-4 w-20"></TableHead>
					<TableHead className="h-4 w-20"></TableHead>
					<TableHead className="h-4 w-20"></TableHead>
					<TableHead className="text-right h-4 w-20"></TableHead>
					<TableHead className="text-right h-4 w-20"></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{[...Array(8)].map((_, i) => (
					<TableRow key={i}>
						<TableCell>
							<div className="flex items-center gap-2">
								<Skeleton className="h-4 w-20" />
								<Skeleton className="h-6 w-16 rounded-full" />
							</div>
						</TableCell>
						<TableCell>
							<Skeleton className="h-4 w-32" />
						</TableCell>
						<TableCell>
							<Skeleton className="h-4 w-16" />
						</TableCell>
						<TableCell className="text-right">
							<Skeleton className="h-5 w-20 ml-auto" />
						</TableCell>
						<TableCell className="text-right">
							<Skeleton className="h-4 w-12 ml-auto" />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

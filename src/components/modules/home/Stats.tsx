export default function Stats() {
	return (
		<section className="bg-primary/5 px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div className="text-center">
						<div className="text-3xl font-bold text-foreground sm:text-4xl">
							1M+
						</div>
						<div className="mt-2 text-sm text-muted-foreground">
							Active Users
						</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-foreground sm:text-4xl">
							$50B+
						</div>
						<div className="mt-2 text-sm text-muted-foreground">
							Transactions Processed
						</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-foreground sm:text-4xl">
							99.9%
						</div>
						<div className="mt-2 text-sm text-muted-foreground">Uptime</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-foreground sm:text-4xl">
							24/7
						</div>
						<div className="mt-2 text-sm text-muted-foreground">
							Customer Support
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

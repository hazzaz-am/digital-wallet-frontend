export default function PricingHero() {
	return (
		<section className="relative px-6 py-20 lg:px-8 lg:py-32">
			<div className="mx-auto max-w-7xl text-center">
				<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
					Simple{" "}
					<span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
						Pricing
					</span>
				</h1>
				<p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
					Transparent pricing with no hidden fees. Choose the plan that works
					best for your financial needs.
				</p>
			</div>
		</section>
	);
}

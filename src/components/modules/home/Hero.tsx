import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Hero() {
	return (
		<section className="relative px-6 py-20 lg:px-8 lg:py-32">
			<div className="mx-auto max-w-7xl text-center">
				<div className="mx-auto mb-8 flex justify-center">
					<Logo />
				</div>
				<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
					Your Digital Wallet,{" "}
					<span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
						Simplified
					</span>
				</h1>
				<p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
					Manage your finances with ease. Send, receive, and track payments
					securely with our cutting-edge digital wallet solution.
				</p>
				<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
					<Button size="lg" className="text-base font-semibold">
						<Link to="/register">Get Started Free</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { ModeToggle } from "../ui/mode-toggle";
import Hamburger from "@/assets/icons/Hamburger";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
	{ href: "/", label: "Home" },
	{ href: "/features", label: "Features" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/about", label: "About" },
	{ href: "/faq", label: "FAQ" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"border-b px-4 md:px-6 sticky top-0 z-50 transition-all duration-300",
				isScrolled && [
					"backdrop-blur-md bg-background/80",
					"supports-[backdrop-filter]:bg-background/60",
					"border-border/40",
					"shadow-lg",
				]
			)}
		>
			<div className="flex h-16 items-center justify-between gap-4">
				{/* Left side */}
				<div className="flex items-center gap-2">
					{/* Mobile menu trigger */}
					<Popover>
						<PopoverTrigger asChild>
							<Button
								className="group size-8 md:hidden"
								variant="ghost"
								size="icon"
							>
								<Hamburger />
							</Button>
						</PopoverTrigger>
						<PopoverContent align="start" className="w-36 p-1 md:hidden">
							<NavigationMenu className="max-w-none *:w-full">
								<NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
									{navigationLinks.map((link, index) => (
										<NavigationMenuItem key={index} className="w-full">
											<NavLink
												to={link.href}
												className={({ isActive }) =>
													cn(
														"block w-full px-3 py-1.5 text-left rounded-md transition-all duration-200",
														"text-muted-foreground hover:text-foreground hover:bg-accent/50",
														isActive && [
															"text-primary",
															"font-semibold",
															"shadow-xs",
														]
													)
												}
											>
												{link.label}
											</NavLink>
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
							</NavigationMenu>
						</PopoverContent>
					</Popover>
					{/* Main nav */}
					<div className="flex items-center gap-6">
						<Link to="/" className="text-primary hover:text-primary/90">
							<Logo />
						</Link>
						{/* Navigation menu */}
						<NavigationMenu className="max-md:hidden">
							<NavigationMenuList className="gap-2">
								{navigationLinks.map((link, index) => (
									<NavigationMenuItem key={index}>
										<NavLink
											to={link.href}
											className={({ isActive }) =>
												cn(
													"relative px-3 py-1.5 rounded-md font-medium transition-all duration-200",
													"text-muted-foreground hover:text-foreground",
													"hover:bg-accent/50",
													"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
													isActive && [
														"text-primary",
														"font-semibold",
														"shadow-xs",
													]
												)
											}
										>
											{link.label}
										</NavLink>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
				{/* Right side */}
				<div className="flex items-center gap-2">
					<Button asChild size="sm" className="text-sm">
						<Link to="/login">Log In</Link>
					</Button>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}

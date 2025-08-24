import Logo from "@/assets/icons/Logo";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { useUserInfoQuery } from "@/store/features/auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";
import * as React from "react";
import { Link } from "react-router";
import { AppSidebarSkeleton } from "./AppSidebarSkeleton";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { data: userData, isLoading } = useUserInfoQuery(undefined);

	// Show skeleton while loading
	if (isLoading) {
		return <AppSidebarSkeleton {...props} />;
	}

	const data = {
		navMain: getSidebarItems(userData?.data?.role),
	};

	return (
		<Sidebar {...props}>
			<SidebarHeader className="items-center">
				<Link to="/">
					<Logo />
				</Link>
			</SidebarHeader>
			<SidebarContent>
				{/* We create a SidebarGroup for each parent. */}
				{data.navMain.map((item) => (
					<SidebarGroup key={item.title}>
						<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{item.items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<Link to={item.url}>{item.title}</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}

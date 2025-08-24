import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from "react";

export function AppSidebarSkeleton({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader className="items-center">
				{/* Logo skeleton */}
				<Skeleton className="h-8 w-8 rounded-full" />
			</SidebarHeader>

			<SidebarContent>
				{/* Generate skeleton for sidebar groups */}
				{Array.from({ length: 3 }).map((_, groupIndex) => (
					<SidebarGroup key={groupIndex}>
						{/* Group label skeleton */}
						<SidebarGroupLabel>
							<Skeleton className="h-4 w-20" />
						</SidebarGroupLabel>

						<SidebarGroupContent>
							<SidebarMenu>
								{/* Generate skeleton menu items for each group */}
								{Array.from({
									length: groupIndex === 0 ? 4 : groupIndex === 1 ? 3 : 2,
								}).map((_, itemIndex) => (
									<SidebarMenuItem key={itemIndex}>
										<div className="flex items-center px-2 py-2">
											<Skeleton className="h-4 w-full max-w-32" />
										</div>
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

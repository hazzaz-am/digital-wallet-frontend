import Profile from "@/pages/dashboard/Profile";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/admin/Analytics"));
const AllUsers = lazy(() => import("@/pages/admin/AllUsers"));

export const adminSidebarItems: ISidebarItem[] = [
	{
		title: "Dashboard",
		items: [
			{
				title: "Analytics",
				url: "/admin/analytics",
				component: Analytics,
			},
		],
	},
	{
		title: "Profile",
		items: [
			{
				title: "My Profile",
				url: "/admin/me",
				component: Profile,
			},
		],
	},
	{
		title: "User Management",
		items: [
			{
				title: "Users",
				url: "/admin/users",
				component: AllUsers,
			},
		],
	},
	{
		title: "Transaction Management",
		items: [
			{
				title: "Transactions",
				url: "/admin/transactions",
				component: AllUsers,
			},
		],
	},
	{
		title: "Wallet Management",
		items: [
			{
				title: "Wallets",
				url: "/admin/wallets",
				component: AllUsers,
			},
		],
	},
];

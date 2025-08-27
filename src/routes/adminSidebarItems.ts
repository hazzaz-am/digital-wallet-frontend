import AllTransactions from "@/pages/admin/AllTransactions";
import AllUsers from "@/pages/admin/AllUsers";
import AllWallets from "@/pages/admin/AllWallets";
import Analytics from "@/pages/dashboard/Analytics";
import Profile from "@/pages/dashboard/Profile";
import type { ISidebarItem } from "@/types";

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
		title: "Account Management",
		items: [
			{
				title: "Accounts",
				url: "/admin/all-accounts",
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
				component: AllTransactions,
			},
		],
	},
	{
		title: "Wallet Management",
		items: [
			{
				title: "Wallets",
				url: "/admin/wallets",
				component: AllWallets,
			},
		],
	},
];

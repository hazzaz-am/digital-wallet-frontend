import type { ISidebarItem } from "@/types";
import { lazy } from "react";
const Analytics = lazy(() => import("@/pages/dashboard/Analytics"));
const Profile = lazy(() => import("@/pages/dashboard/Profile"));
const AddMoney = lazy(() => import("@/pages/dashboard/AddMoney"));
const AddWallet = lazy(() => import("@/pages/dashboard/AddWallet"));
const CashOut = lazy(() => import("@/pages/dashboard/CashOut"));
const MyWallet = lazy(() => import("@/pages/dashboard/MyWallet"));
const SendMoney = lazy(() => import("@/pages/dashboard/SendMoney"));
const Transactions = lazy(() => import("@/pages/dashboard/Transactions"));

export const userSidebarItems: ISidebarItem[] = [
	{
		title: "Profile",
		items: [
			{
				title: "My Profile",
				url: "/user/me",
				component: Profile,
			},
		],
	},
	{
		title: "Wallet",
		items: [
			{
				title: "New Wallet",
				url: "/user/wallets/new",
				component: AddWallet,
			},
			{
				title: "My Wallet",
				url: "/user/wallets/me",
				component: MyWallet,
			},
			{
				title: "Add Money",
				url: "/user/wallets/top-up",
				component: AddMoney,
			},
			{
				title: "Send Money",
				url: "/user/wallets/send-money",
				component: SendMoney,
			},
			{
				title: "Cash Out",
				url: "/user/wallets/cash-out",
				component: CashOut,
			},
		],
	},
	{
		title: "Dashboard",
		items: [
			{
				title: "Analytics",
				url: "/user/analytics",
				component: Analytics,
			},
			{
				title: "My Transactions",
				url: "/user/transactions",
				component: Transactions,
			},
		],
	},
];

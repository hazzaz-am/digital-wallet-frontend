import type { ISidebarItem } from "@/types";
import { lazy } from "react";
const Analytics = lazy(() => import("@/pages/user/Analytics"));
const Profile = lazy(() => import("@/pages/user/Profile"));
const AddMoney = lazy(() => import("@/pages/user/AddMoney"));
const AddWallet = lazy(() => import("@/pages/user/AddWallet"));
const CashOut = lazy(() => import("@/pages/user/CashOut"));
const MyWallet = lazy(() => import("@/pages/user/MyWallet"));
const SendMoney = lazy(() => import("@/pages/user/SendMoney"));
const Transactions = lazy(() => import("@/pages/user/Transactions"));

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
				title: "Add Wallet",
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

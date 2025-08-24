
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/agent/Analytics"));
const AddMoney = lazy(() => import("@/pages/agent/AddMoney"));
const AddWallet = lazy(() => import("@/pages/agent/AddWallet"));
const CashIn = lazy(() => import("@/pages/agent/CashIn"));
const MyWallet = lazy(() => import("@/pages/agent/MyWallet"));
const SendMoney = lazy(() => import("@/pages/agent/SendMoney"));
const Transactions = lazy(() => import("@/pages/agent/Transactions"));
const Profile = lazy(() => import("@/pages/dashboard/Profile"));

export const agentSidebarItems: ISidebarItem[] = [
	{
		title: "Dashboard",
		items: [
			{
				title: "Analytics",
				url: "/agent/analytics",
				component: Analytics,
			},
		],
	},
	{
		title: "Profile",
		items: [
			{
				title: "My Profile",
				url: "/agent/me",
				component: Profile,
			},
		],
	},
	{
		title: "Wallet",
		items: [
			{
				title: "Create New Wallet",
				url: "/agent/wallets/new",
				component: AddWallet,
			},
			{
				title: "My Wallet",
				url: "/agent/wallets/me",
				component: MyWallet,
			},
			{
				title: "Add Money",
				url: "/agent/wallets/top-up",
				component: AddMoney,
			},
			{
				title: "Send Money",
				url: "/agent/wallets/send-money",
				component: SendMoney,
			},
			{
				title: "Cash In",
				url: "/agent/wallets/cash-in",
				component: CashIn,
			},
		],
	},
	{
		title: "Transactions",
		items: [
			{
				title: "My Transactions",
				url: "/agent/transactions",
				component: Transactions,
			},
		],
	},
];

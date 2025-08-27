
import CashIn from "@/pages/agent/CashIn";
import AddMoney from "@/pages/dashboard/AddMoney";
import AddWallet from "@/pages/dashboard/AddWallet";
import Analytics from "@/pages/dashboard/Analytics";
import MyWallet from "@/pages/dashboard/MyWallet";
import Profile from "@/pages/dashboard/Profile";
import SendMoney from "@/pages/dashboard/SendMoney";
import Transactions from "@/pages/dashboard/Transactions";
import type { ISidebarItem } from "@/types";


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
				title: "New Wallet",
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

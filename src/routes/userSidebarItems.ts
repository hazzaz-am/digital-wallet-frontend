import AddMoney from "@/pages/dashboard/AddMoney";
import AddWallet from "@/pages/dashboard/AddWallet";
import Analytics from "@/pages/dashboard/Analytics";
import CashOut from "@/pages/dashboard/CashOut";
import MyWallet from "@/pages/dashboard/MyWallet";
import Profile from "@/pages/dashboard/Profile";
import SendMoney from "@/pages/dashboard/SendMoney";
import Transactions from "@/pages/dashboard/Transactions";
import type { ISidebarItem } from "@/types";

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

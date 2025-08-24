import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { ROLE } from "@/constants/role";
import AboutPage from "@/pages/About";
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";
import UnauthorizedPage from "@/pages/auth/Unauthorized";
import CareersPage from "@/pages/Careers";
import ContactPage from "@/pages/Contact";
import FAQPage from "@/pages/FAQ";
import FeaturesPage from "@/pages/Features";
import HomePage from "@/pages/Home";
import NotFoundPage from "@/pages/NotFound";
import PricingPage from "@/pages/Pricing";
import type { TRole } from "@/types";
import { generateRoutes } from "@/utils/generateRoutes";
import { WithAuth } from "@/utils/WithAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { agentSidebarItems } from "./agentSidebarItem";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{
				path: "/about",
				Component: AboutPage,
			},
			{
				path: "/careers",
				Component: CareersPage,
			},
			{
				path: "/features",
				Component: FeaturesPage,
			},
			{
				path: "/pricing",
				Component: PricingPage,
			},
			{
				path: "/contact",
				Component: ContactPage,
			},
			{
				path: "/faq",
				Component: FAQPage,
			},
			{
				path: "*",
				Component: NotFoundPage,
			},
		],
	},
	{
		Component: WithAuth(DashboardLayout, ROLE.ADMIN as TRole),
		path: "/admin",
		children: [
			{
				index: true,
				element: <Navigate to={"/admin/analytics"} />,
			},
			...generateRoutes(adminSidebarItems),
		],
	},
	{
		Component: WithAuth(DashboardLayout, ROLE.USER as TRole),
		path: "/user",
		children: [
			{
				index: true,
				element: <Navigate to={"/user/me"} />,
			},
			...generateRoutes(userSidebarItems),
		],
	},
	{
		Component: WithAuth(DashboardLayout, ROLE.AGENT as TRole),
		path: "/agent",
		children: [
			{
				index: true,
				element: <Navigate to={"/agent/me"} />,
			},
			...generateRoutes(agentSidebarItems),
		],
	},
	{
		path: "/login",
		Component: LoginPage,
	},
	{
		path: "/register",
		Component: RegisterPage,
	},
	{
		path: "/unauthorized",
		Component: UnauthorizedPage,
	},
	{
		path: "*",
		Component: NotFoundPage,
	},
]);

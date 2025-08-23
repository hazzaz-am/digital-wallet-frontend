import App from "@/App";
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
import { createBrowserRouter } from "react-router";

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

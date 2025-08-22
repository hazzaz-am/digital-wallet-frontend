import App from "@/App";
import AboutPage from "@/pages/About";
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";
import UnauthorizedPage from "@/pages/auth/Unauthorized";
import ContactPage from "@/pages/Contact";
import FAQPage from "@/pages/FAQ";
import FeaturesPage from "@/pages/Features";
import HomePage from "@/pages/Home";
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
]);

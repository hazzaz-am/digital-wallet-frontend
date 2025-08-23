import type { FAQItem } from "@/types";

export const faqData: FAQItem[] = [
	// Getting Started
	{
		id: "gs-1",
		question: "What is a digital wallet and how does it work?",
		answer:
			"A digital wallet is a secure electronic platform that stores your payment information, allowing you to make transactions without physical cards or cash. It uses encryption technology to protect your financial data and enables contactless payments through your smartphone or computer.",
		category: "Getting Started",
	},
	{
		id: "gs-2",
		question: "How do I create an account?",
		answer:
			"Creating an account is simple: 1) Click 'Sign Up' on our homepage, 2) Provide your email and create a secure password, 3) Verify your email address, 4) Complete identity verification by uploading required documents, 5) Link your bank account or card. The entire process takes less than 10 minutes.",
		category: "Getting Started",
	},
	{
		id: "gs-3",
		question: "What documents do I need for verification?",
		answer:
			"For identity verification, you'll need: a government-issued photo ID (driver's license, passport, or national ID), proof of address (utility bill or bank statement within 90 days), and your Social Security number or Tax ID. All documents are encrypted and stored securely.",
		category: "Getting Started",
	},
	{
		id: "gs-4",
		question: "Is there an age requirement to use the digital wallet?",
		answer:
			"Yes, you must be at least 18 years old to create an individual account. However, we offer supervised accounts for minors (13-17 years) with parental consent and oversight features for financial education.",
		category: "Getting Started",
	},

	// Security
	{
		id: "sec-1",
		question: "How secure is my money and personal information?",
		answer:
			"We use bank-level security including 256-bit SSL encryption, two-factor authentication, biometric login options, and fraud monitoring. Your funds are FDIC insured up to $250,000, and we never store your full payment details on our servers.",
		category: "Security",
	},
	{
		id: "sec-2",
		question: "What should I do if I suspect unauthorized activity?",
		answer:
			"Immediately: 1) Change your password, 2) Contact our 24/7 security team, 3) Review recent transactions, 4) Enable additional security features. We provide zero-liability protection for verified unauthorized transactions and will investigate within 24 hours.",
		category: "Security",
	},
	{
		id: "sec-3",
		question: "Can I use biometric authentication?",
		answer:
			"Yes! We support fingerprint, facial recognition, and voice authentication on compatible devices. Biometric data is stored locally on your device using secure hardware and never transmitted to our servers.",
		category: "Security",
	},
	{
		id: "sec-4",
		question: "How do you protect against fraud?",
		answer:
			"Our AI-powered fraud detection system monitors transactions 24/7, analyzing spending patterns, location data, and device information. We also offer real-time transaction alerts, spending limits, merchant category controls, and the ability to instantly freeze your account.",
		category: "Security",
	},

	// Payments & Transactions
	{
		id: "pay-1",
		question: "What types of payments can I make?",
		answer:
			"You can: send money to friends and family, pay bills automatically, make online and in-store purchases, withdraw cash from ATMs, schedule recurring payments, split bills with groups, and make international transfers to 50+ countries.",
		category: "Payments & Transactions",
	},
	{
		id: "pay-2",
		question: "Are there transaction limits?",
		answer:
			"Daily limits vary by verification level: Basic ($1,000), Verified ($10,000), Premium ($50,000). ATM withdrawals are limited to $500 daily. You can request temporary limit increases for large purchases through our app.",
		category: "Payments & Transactions",
	},
	{
		id: "pay-3",
		question: "How long do transfers take?",
		answer:
			"Internal transfers are instant. Bank transfers typically take 1-3 business days. International transfers take 1-5 business days depending on the destination country. We offer express options for urgent transfers.",
		category: "Payments & Transactions",
	},
	{
		id: "pay-4",
		question: "Can I cancel or reverse a payment?",
		answer:
			"Payments to other wallet users can be cancelled within 30 minutes if not yet claimed. Bank transfers can be stopped before processing (usually within 1 hour). Completed transactions require recipient cooperation or formal dispute processes.",
		category: "Payments & Transactions",
	},

	// Fees & Pricing
	{
		id: "fee-1",
		question: "What fees do you charge?",
		answer:
			"Basic transfers are free. We charge 2.9% for instant transfers, $2.50 for ATM withdrawals, 1.5% for international transfers, and $0.50 for paper statements. Premium accounts receive fee waivers and reduced rates.",
		category: "Fees & Pricing",
	},
	{
		id: "fee-2",
		question: "Are there monthly maintenance fees?",
		answer:
			"Our Basic account is completely free with no monthly fees. Premium accounts cost $9.99/month but include fee waivers, higher limits, priority support, and exclusive features that typically save more than the monthly cost.",
		category: "Fees & Pricing",
	},
	{
		id: "fee-3",
		question: "Do you charge for international transactions?",
		answer:
			"International transfers have a 1.5% fee (minimum $2.99). We use real-time exchange rates with no markup. Premium users get reduced fees (1.0%) and one free international transfer monthly.",
		category: "Fees & Pricing",
	},

	// Technical Support
	{
		id: "tech-1",
		question: "What devices and platforms are supported?",
		answer:
			"We support iOS 12+, Android 8+, and all major web browsers. Our responsive web app works on tablets and desktops. We also offer Apple Watch and Android Wear apps for quick payments and balance checks.",
		category: "Technical Support",
	},
	{
		id: "tech-2",
		question: "What if I lose my phone or it gets stolen?",
		answer:
			"Immediately log into your account from another device and use 'Device Management' to remotely log out all sessions. Contact support to temporarily freeze your account. You can restore access using backup authentication methods or identity verification.",
		category: "Technical Support",
	},
	{
		id: "tech-3",
		question: "How do I update my personal information?",
		answer:
			"Log into your account, go to Settings > Profile, and update your information. Changes to sensitive data (SSN, address) may require additional verification. Email changes require confirmation from both old and new addresses.",
		category: "Technical Support",
	},
];

import type { ComponentType } from "react";

export interface FAQItem {
	id: string;
	question: string;
	answer: string;
	category: string;
}

export type TRole = "USER" | "ADMIN" | "AGENT";

export interface ISidebarItem {
	title: string;
	items: {
		title: string;
		url: string;
		component: ComponentType;
	}[];
}

export interface AgentData {
	commissionRate: number;
	approvalStatus: "PENDING" | "APPROVED" | "REJECTED";
}

export interface UserProfile {
	_id: string;
	name?: string;
	phone: string;
	password?: string;
	isDeleted: boolean;
	role: "USER" | "AGENT" | "ADMIN";
	agentData?: AgentData;
}

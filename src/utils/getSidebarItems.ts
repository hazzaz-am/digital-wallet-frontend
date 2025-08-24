import { ROLE } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { agentSidebarItems } from "@/routes/agentSidebarItem";
import { userSidebarItems } from "@/routes/userSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
	switch (userRole) {
		case ROLE.ADMIN:
			return [...adminSidebarItems];
		case ROLE.USER:
			return [...userSidebarItems];
		case ROLE.AGENT:
			return [...agentSidebarItems];
		default:
			return [];
	}
};

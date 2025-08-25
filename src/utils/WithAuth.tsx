import { useUserInfoQuery } from "@/store/features/auth/auth.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const WithAuth = (Component: ComponentType, requiredRole?: TRole) => {
	return function AuthWrapper() {
		const { data, isLoading } = useUserInfoQuery(undefined);

		if (!isLoading && !data?.data) {
			return <Navigate to="/login" replace={true} />;
		}

		if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
			return <Navigate to="/unauthorized" replace={true} />;
		}

		return <Component />;
	};
};

import { Link, Navigate } from "react-router";
import Logo from "@/assets/icons/Logo";
import RegisterForm from "@/components/modules/auth/RegisterForm";
import LoginSkeleton from "@/components/modules/auth/LoginSkeleton";
import { useUserInfoQuery } from "@/store/features/auth/auth.api";

export default function RegisterPage() {
	const { data: userInfo, isLoading } = useUserInfoQuery(undefined);

	if (isLoading) {
		return <LoginSkeleton />;
	}

	if (userInfo?.data) {
		return <Navigate to={`/${userInfo?.data?.role.toLowerCase()}/me`} replace={true} />;
	}

	return (
		<div>
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2">
					<Link to="/" className="flex items-center gap-2 font-medium">
						<Logo />
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">
						<RegisterForm />
					</div>
				</div>
			</div>
		</div>
	);
}

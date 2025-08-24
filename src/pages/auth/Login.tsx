import Logo from "@/assets/icons/Logo";
import LoginForm from "@/components/modules/auth/LoginForm";
import LoginSkeleton from "@/components/modules/auth/LoginSkeleton";
import { useUserInfoQuery } from "@/store/features/auth/auth.api";
import { Link, Navigate } from "react-router";

export default function LoginPage() {
	const { data: userInfo, isLoading } = useUserInfoQuery(undefined);

	if (isLoading) {
		return <LoginSkeleton />;
	}

	if (userInfo?.data) {
		return <Navigate to="/" replace={true} />;
	}

	return (
		<section className="">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2">
					<Link to="/" className="flex items-center gap-2 font-medium">
						<Logo />
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">
						<LoginForm />
					</div>
				</div>
			</div>
		</section>
	);
}

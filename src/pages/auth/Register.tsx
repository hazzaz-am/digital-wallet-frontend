import { Link } from "react-router";
import Logo from "@/assets/icons/Logo";
import RegisterForm from "@/components/modules/auth/RegisterForm";

export default function RegisterPage() {
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

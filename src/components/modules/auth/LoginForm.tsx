import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import PasswordInput from "@/components/ui/password-input";
import PhoneInput from "@/components/ui/phone-input";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/store/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";

const loginFormSchema = z.object({
	phone: z
		.string()
		.min(10)
		.max(10, {
			message: "Phone number must be 10 digits",
		})
		.max(10, {
			message: "Phone number can be maximum 10 digits",
		}),
	password: z
		.string()
		.min(8, { error: "Password must be at least 8 characters long" }),
});

export default function LoginForm({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const [loginUser] = useLoginMutation();
	const navigate = useNavigate();
	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			phone: "",
			password: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
		const toastId = toast.loading("Logging in...");
		const userInfo = {
			phone: `+880${data.phone}`,
			password: data.password,
		};
		try {
			const res = await loginUser(userInfo).unwrap();
			if (res.success) {
				const account = res.data.user.role.toLowerCase();
				navigate(`/${account}/me`);
				toast.success("Logged in successfully", { id: toastId });
			}
		} catch (err: any) {

			if (err.data.message === "Password is incorrect") {
				toast.error("Password is incorrect", { id: toastId });
			} else if (err.data.message === "User not found") {
				toast.error("Account does not exist with this phone number", {
					id: toastId,
				});
			} else {
				toast.error(err?.data?.message || "Login failed. Please try again.", {
					id: toastId,
				});
			}
		}
	};

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Login to your account</h1>
				<p className="text-balance text-sm text-muted-foreground">
					Enter your phone number and password below to login to your account
				</p>
			</div>
			<div className="grid gap-6">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone</FormLabel>
									<FormControl>
										<PhoneInput {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<PasswordInput {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" className="w-full">
							Login
						</Button>
					</form>
				</Form>
			</div>
			<div className="text-center text-sm">
				Don&apos;t have an account?{" "}
				<Link to="/register" replace className="underline underline-offset-4">
					Register
				</Link>
			</div>
		</div>
	);
}

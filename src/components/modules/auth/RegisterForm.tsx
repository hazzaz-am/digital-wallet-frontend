import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordInput from "@/components/ui/password-input";
import PhoneInput from "@/components/ui/phone-input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useRegistrationMutation } from "@/store/features/auth/auth.api";
import { toast } from "sonner";

const ROLE_VALUES = ["USER", "AGENT"];

const registerSchema = z
	.object({
		phone: z
			.string()
			.min(10, {
				error: "Phone number must be 10 digits",
			})
			.max(10, {
				error: "Phone number can be maximum 10 digits",
			}),
		password: z
			.string()
			.min(8, { error: "Password is too short" })
			.regex(/^(?=.*[A-Z])/, {
				error: "Password must contain at least 1 uppercase letter.",
			})
			.regex(/^(?=.*[!@#$%^&*])/, {
				error: "Password must contain at least 1 special character.",
			})
			.regex(/^(?=.*\d)/, {
				error: "Password must contain at least 1 number.",
			}),
		role: z.enum(ROLE_VALUES, { error: "Role is required" }),
		confirmPassword: z
			.string()
			.min(8, { error: "Confirm Password is too short" })
			.regex(/^(?=.*[A-Z])/, {
				error: "Password must contain at least 1 uppercase letter.",
			})
			.regex(/^(?=.*[!@#$%^&*])/, {
				error: "Password must contain at least 1 special character.",
			})
			.regex(/^(?=.*\d)/, {
				error: "Password must contain at least 1 number.",
			}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Password do not match",
		path: ["confirmPassword"],
	});

export default function RegisterForm({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const [userRegistration] = useRegistrationMutation();
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			role: "USER",
			phone: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof registerSchema>) => {
		const toastId = toast.loading("Creating user...");
		const userInfo = {
			role: data.role,
			phone: `+880${data.phone}`,
			password: data.password,
		};
		console.log(userInfo);
		try {
			const result = await userRegistration(userInfo).unwrap();

			if (result.success) {
				toast.success("User created successfully", { id: toastId });
				navigate("/login");
			}
		} catch (error: any) {
			console.error(error.data.message);
			if (error?.data?.message === "Make sure to provide valid input") {
				toast.error("Invalid input. Please check your data.", { id: toastId });
			} else if (
				error?.data?.message === "Account already exists with this phone number"
			) {
				toast.error(
					"Account already exists, please use a different phone number or login to your account",
					{
						id: toastId,
					}
				);
			}
		}
	};

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Register your account</h1>
				<p className="text-sm text-muted-foreground">
					Enter your details to create an account
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
									<FormDescription className="sr-only">
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="role"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Role</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select a role" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="USER">User</SelectItem>
											<SelectItem value="AGENT">Agent</SelectItem>
										</SelectContent>
									</Select>
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
									<FormDescription className="sr-only">
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<PasswordInput {...field} />
									</FormControl>
									<FormDescription className="sr-only">
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							Submit
						</Button>
					</form>
				</Form>
			</div>

			<div className="text-center text-sm">
				Already have an account?{" "}
				<Link to="/login" className="underline underline-offset-4">
					Login
				</Link>
			</div>
		</div>
	);
}

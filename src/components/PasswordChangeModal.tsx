import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import PasswordInput from "./ui/password-input";
import { toast } from "sonner";
import {
	authApi,
	useChangePasswordMutation,
	useLogoutMutation,
} from "@/store/features/auth/auth.api";
import { useNavigate } from "react-router";
import { useAppDispatch } from "@/store/hooks";

const passwordChangeSchema = z
	.object({
		oldPassword: z
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
		newPassword: z
			.string()
			.min(8, { error: "New Password is too short" })
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
	.refine((data) => data.oldPassword !== data.newPassword, {
		message: "New Password must be different from Old Password",
		path: ["newPassword"],
	});

export function PasswordChangeModal() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [logout] = useLogoutMutation();
	const [changePassword] = useChangePasswordMutation();
	const form = useForm<z.infer<typeof passwordChangeSchema>>({
		resolver: zodResolver(passwordChangeSchema),
		defaultValues: {
			oldPassword: "",
			newPassword: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof passwordChangeSchema>) => {
		const toastId = toast.loading("Changing password...");
		const passInfo = {
			oldPassword: data.oldPassword,
			newPassword: data.newPassword,
		};
		try {
			const result = await changePassword(passInfo).unwrap();

			if (result.success) {
				toast.success("Password changed successfully", { id: toastId });
				await logout(undefined);
				dispatch(authApi.util.resetApiState());
				navigate("/login");
			}
		} catch (error: any) {
			toast.error(error.data.message || "Failed to change password", {
				id: toastId,
			});
		}
	};

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Change Password</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Update Password</SheetTitle>
					<SheetDescription>
						Make changes to your password here. Click save when you&apos;re
						done.
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-6 px-4">
					<Form {...form}>
						<form
							id="update-password-form"
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-6"
						>
							<FormField
								control={form.control}
								name="oldPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Old Password</FormLabel>
										<FormControl>
											<PasswordInput {...field} />
										</FormControl>
										<FormDescription className="sr-only">
											Enter your old password.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="newPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>New Password</FormLabel>
										<FormControl>
											<PasswordInput {...field} />
										</FormControl>
										<FormDescription className="sr-only">
											Enter your new password.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</div>
				<SheetFooter>
					<Button form="update-password-form" type="submit">
						Save changes
					</Button>
					<SheetClose asChild>
						<Button type="button" variant="outline">
							Close
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

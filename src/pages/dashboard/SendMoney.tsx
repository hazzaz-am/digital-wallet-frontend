import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PhoneInput from "@/components/ui/phone-input";
import { Skeleton } from "@/components/ui/skeleton";
import {
	useMyWalletQuery,
	useSendMoneyMutation,
} from "@/store/features/wallet/wallet.api";

// Schema for send money validation
export const sendMoneyZodSchema = z.object({
	phone: z
		.string({ error: "Phone Number must be string" })
		.min(10, "Phone number must be at least 10 digits")
		.max(10, "Phone number must be exactly 10 digits")
		.regex(/^\d{10}$/, "Phone number must contain only digits"),
	amount: z
		.number({ error: "Amount must be a number" })
		.positive("Amount must be greater than zero")
		.min(50, "Minimum transfer amount is 50 BDT"),
});

type SendMoneyFormData = z.infer<typeof sendMoneyZodSchema>;

// Loading Skeleton Component
function SendMoneySkeleton() {
	return (
		<div className="space-y-6">
			{/* Header Skeleton */}
			<div>
				<Skeleton className="h-8 w-48 mb-2" />
				<Skeleton className="h-4 w-80" />
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				{/* Form Card Skeleton */}
				<Card className="lg:col-span-2">
					<CardHeader>
						<Skeleton className="h-6 w-40" />
						<Skeleton className="h-4 w-64" />
					</CardHeader>
					<CardContent className="space-y-6">
						{/* Phone Input Skeleton */}
						<div className="space-y-2">
							<Skeleton className="h-4 w-24" />
							<div className="flex">
								<Skeleton className="h-10 w-16 rounded-r-none" />
								<Skeleton className="h-10 flex-1 rounded-l-none" />
							</div>
							<Skeleton className="h-3 w-56" />
						</div>

						{/* Amount Input Skeleton */}
						<div className="space-y-2">
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-10 w-full" />
							<Skeleton className="h-3 w-48" />
						</div>

						{/* Submit Button Skeleton */}
						<Skeleton className="h-10 w-full" />
					</CardContent>
				</Card>

				{/* Wallet Info Card Skeleton */}
				<Card>
					<CardHeader>
						<Skeleton className="h-6 w-32" />
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Skeleton className="h-4 w-24" />
							<Skeleton className="h-8 w-32" />
						</div>
						<div className="space-y-2">
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-6 w-16" />
						</div>
						<div className="pt-4 border-t">
							<Skeleton className="h-4 w-full mb-2" />
							<Skeleton className="h-3 w-3/4 mb-1" />
							<Skeleton className="h-3 w-2/3 mb-1" />
							<Skeleton className="h-3 w-4/5" />
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default function SendMoney() {
	const { data: walletData, isLoading: walletLoading } =
		useMyWalletQuery(undefined);
	const [sendMoney, { isLoading: isSubmitting }] = useSendMoneyMutation();

	const form = useForm<SendMoneyFormData>({
		resolver: zodResolver(sendMoneyZodSchema),
		defaultValues: {
			phone: "",
			amount: 50,
		},
	});

	const onSubmit = async (data: SendMoneyFormData) => {
		const toastId = toast.loading("Processing your request...");
		if (!walletData?.data || walletData.data.balance < data.amount) {
			toast.info("Insufficient balance", {
				description: "You don't have enough balance for this transfer.",
				id: toastId,
			});
			return;
		}

		try {
			const result = await sendMoney({
				phone: `+880${data.phone}`,
				amount: data.amount,
			}).unwrap();

			if (result.success) {
				toast.success("Money sent successfully!", {
					description: `Sent ${data.amount} BDT to +880${data.phone}.`,
					id: toastId,
				});
			}

			form.reset();
		} catch (error: any) {
			console.log(error);
			toast.error("Failed to send money", {
				description:
					error?.data?.message || "Something went wrong. Please try again.",
				id: toastId,
			});
		}
	};

	if (walletLoading) {
		return <SendMoneySkeleton />;
	}

	if (!walletData?.data) {
		return (
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Send Money</h1>
					<p className="text-muted-foreground">Transfer money to other users</p>
				</div>
				<Card>
					<CardContent className="flex items-center justify-center py-12">
						<div className="text-center space-y-2">
							<p className="text-muted-foreground">No wallet found</p>
							<p className="text-sm text-muted-foreground">
								Please create a wallet first to send money
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		);
	}

	const wallet = walletData.data;

	return (
		<div className="space-y-6">
			{/* Header */}
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Send Money</h1>
				<p className="text-muted-foreground">
					Transfer money instantly to other wallet users
				</p>
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				{/* Send Money Form */}
				<Card className="lg:col-span-2">
					<CardHeader>
						<CardTitle>Transfer Details</CardTitle>
						<p className="text-sm text-muted-foreground">
							Enter recipient's phone number and transfer amount
						</p>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-6"
							>
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

								{/* Amount Input */}
								<FormField
									control={form.control}
									name="amount"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Amount (BDT)</FormLabel>
											<FormControl>
												<Input
													type="number"
													placeholder="Enter amount to send"
													{...field}
													onChange={(e) =>
														field.onChange(Number(e.target.value))
													}
													disabled={isSubmitting}
												/>
											</FormControl>
											<p className="text-xs text-muted-foreground">
												Minimum transfer amount: 1 BDT
											</p>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Submit Button */}
								<Button
									type="submit"
									className="w-full"
									disabled={isSubmitting}
								>
									{isSubmitting ? "Sending..." : `Send`}
								</Button>
							</form>
						</Form>
					</CardContent>
				</Card>

				{/* Wallet Info & Security */}
				<div className="space-y-6">
					{/* Wallet Balance Card */}
					<Card>
						<CardHeader>
							<CardTitle>Your Wallet</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							{/* Current Balance */}
							<div className="space-y-1">
								<p className="text-sm text-muted-foreground">
									Available Balance
								</p>
								<p className="text-2xl font-bold">
									{wallet.balance?.toLocaleString() || "0"}{" "}
									<span className="text-sm font-medium text-muted-foreground">
										{wallet.currency}
									</span>
								</p>
							</div>

							{/* Wallet Status */}
							<div className="space-y-1">
								<p className="text-sm text-muted-foreground">Status</p>
								<span
									className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${
										wallet.status === "ACTIVE"
											? "bg-green-100 text-green-800 border-green-200"
											: "bg-gray-100 text-gray-800 border-gray-200"
									}`}
								>
									{wallet.status}
								</span>
							</div>
						</CardContent>
					</Card>

					{/* Security & Tips Card */}
					<Card>
						<CardHeader>
							<CardTitle>🔒 Security Tips</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="text-xs text-muted-foreground space-y-2">
								<li>• Verify recipient's phone number before sending</li>
								<li>• Double-check the amount before confirming</li>
								<li>• Transfers are instant and cannot be reversed</li>
								<li>• Keep your transaction receipts safe</li>
								<li>• Report suspicious activity immediately</li>
							</ul>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

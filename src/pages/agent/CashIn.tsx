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
import {
	useCashInMutation,
	useMyWalletQuery,
} from "@/store/features/wallet/wallet.api";
import CashOutSkeleton from "../dashboard/CashOutSkeleton";
import { useUserInfoQuery } from "@/store/features/auth/auth.api";
import { BD_PHONE_REGEX } from "@/constants/phoneNumber";

export const cashInZodSchema = z.object({
	phone: z
		.string({ error: "Phone Number must be string" })
		.min(10, "Agent phone number must be at least 10 digits")
		.max(10, "Agent phone number must be exactly 10 digits")
		.regex(/^\d{10}$/, "Agent phone number must contain only digits"),
	amount: z
		.number({ error: "Amount must be a number" })
		.positive("Amount must be greater than zero")
		.min(100, "Minimum cash out amount is 100 BDT"),
});

type CashInFormData = z.infer<typeof cashInZodSchema>;

export default function CashIn() {
	const { data: walletData, isLoading: walletLoading } =
		useMyWalletQuery(undefined);
	const { data: myProfile } = useUserInfoQuery(undefined);
	const [cashIn, { isLoading: isSubmitting }] = useCashInMutation();

	const form = useForm<CashInFormData>({
		resolver: zodResolver(cashInZodSchema),
		defaultValues: {
			phone: "",
			amount: 100,
		},
	});

	const onSubmit = async (data: CashInFormData) => {
		const formatedPhone = `+880${data.phone}`;
		if (!walletData?.data || walletData.data.balance < data.amount) {
			toast.error("Insufficient balance", {
				description: "You don't have enough balance for this cash in request.",
			});
			return;
		}

		if (data.phone) {
			if (!BD_PHONE_REGEX.test(formatedPhone)) {
				toast.error("Invalid BD phone number", {
					description:
						"Phone number must start with +880 followed by 10 digits.",
				});
				return;
			}
		}

		if (myProfile?.data?.phone === formatedPhone) {
			toast.error("Invalid phone number", {
				description: "You cannot cash in to your own account.",
			});
			return;
		}
		const toastId = toast.loading("Processing your request...");

		try {
			const result = await cashIn({
				phone: formatedPhone,
				amount: data.amount,
			}).unwrap();

			if (result.success) {
				toast.success("Cash in request submitted!", {
					description: `Request for ${data.amount} BDT sent to user +880${data.phone}.`,
					id: toastId,
				});
			}
			form.reset();
		} catch (error: any) {
			toast.error("Failed to process cash in", {
				description:
					error?.data?.message || "Something went wrong. Please try again.",
				id: toastId,
			});
		}
	};

	if (walletLoading) {
		return <CashOutSkeleton />;
	}

	if (!walletData?.data) {
		return (
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Cash In</h1>
					<p className="text-muted-foreground">Deposit cash into your wallet</p>
				</div>
				<Card>
					<CardContent className="flex items-center justify-center py-12">
						<div className="text-center space-y-2">
							<p className="text-muted-foreground">No wallet found</p>
							<p className="text-sm text-muted-foreground">
								Please create a wallet first to cash out
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
				<h1 className="text-3xl font-bold tracking-tight">Cash In</h1>
				<p className="text-muted-foreground">
					Deposit cash into your wallet through authorized agents
				</p>
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				{/* Cash In Form */}
				<Card className="lg:col-span-2">
					<CardHeader>
						<CardTitle>Cash In Request</CardTitle>
						<p className="text-sm text-muted-foreground">
							Enter user's phone number and amount to deposit
						</p>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-6"
							>
								{/* Agent Phone Number Input */}
								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>User's Phone Number</FormLabel>
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
											<FormLabel>Cash In Amount (BDT)</FormLabel>
											<FormControl>
												<Input
													type="number"
													placeholder="Enter amount to cash in"
													{...field}
													onChange={(e) =>
														field.onChange(Number(e.target.value))
													}
													disabled={isSubmitting}
												/>
											</FormControl>
											<p className="text-xs text-muted-foreground">
												Minimum cash in amount: 100 BDT
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
									{isSubmitting ? "Processing..." : `Request Cash In`}
								</Button>
							</form>
						</Form>
					</CardContent>
				</Card>

				{/* Sidebar Cards */}
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

					{/* Cash Out Instructions */}
					<Card>
						<CardHeader>
							<CardTitle>📋 How it Works</CardTitle>
						</CardHeader>
						<CardContent>
							<ol className="text-xs text-muted-foreground space-y-2 list-decimal list-inside">
								<li>Enter the authorized user's phone number</li>
								<li>Specify the amount you want add to user account</li>
								<li>Submit your cash in request</li>
								<li>User receive cash after agent confirmation</li>
							</ol>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

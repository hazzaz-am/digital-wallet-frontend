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
import {
	useMyWalletQuery,
	useTopUpWalletMutation,
} from "@/store/features/wallet/wallet.api";
import AddMoneySkeleton from "./AddMoneySkeleton";

// Schema for top-up validation
export const topUpWalletZodSchema = z.object({
	amount: z
		.number({
			error: "Amount must be a number",
		})
		.min(50, "Amount must be at least 50 BDT"),
});

type TopUpFormData = z.infer<typeof topUpWalletZodSchema>;

export default function AddMoney() {
	const { data: walletData, isLoading: walletLoading } =
		useMyWalletQuery(undefined);
	const [topUpWallet, { isLoading: isSubmitting }] = useTopUpWalletMutation();

	const form = useForm<TopUpFormData>({
		resolver: zodResolver(topUpWalletZodSchema),
		defaultValues: {
			amount: 50,
		},
	});

	const onSubmit = async (data: TopUpFormData) => {
		const toastId = toast.loading("Processing your request...");
		const topUpData = {
			walletId: walletData.data._id,
			amount: data.amount,
		};
		try {
			const result = await topUpWallet(topUpData).unwrap();

			if (result.success) {
				toast.success("Money added successfully!", {
					description: `Added ${data.amount} BDT to your wallet.`,
					id: toastId,
				});
			}

			form.reset({
				amount: 50,
			});
		} catch (error: any) {
			toast.error("Failed to add money", {
				description:
					error?.data?.message || "Something went wrong. Please try again.",
				id: toastId,
			});
		}
	};

	if (walletLoading) {
		return <AddMoneySkeleton />;
	}

	if (!walletData?.data) {
		return (
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Add Money</h1>
					<p className="text-muted-foreground">Top up your wallet balance</p>
				</div>
				<Card>
					<CardContent className="flex items-center justify-center py-12">
						<div className="text-center space-y-2">
							<p className="text-muted-foreground">No wallet found</p>
							<p className="text-sm text-muted-foreground">
								Please create a wallet first to add money
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
				<h1 className="text-3xl font-bold tracking-tight">Add Money</h1>
				<p className="text-muted-foreground">
					Top up your wallet balance securely and instantly
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				{/* Add Money Form */}
				<Card>
					<CardHeader>
						<CardTitle>Top Up Your Wallet</CardTitle>
						<p className="text-sm text-muted-foreground">
							Add money to your digital wallet
						</p>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-6"
							>
								<div className="space-y-2">
									<FormLabel>Selected Wallet</FormLabel>
									<div className="p-3 bg-muted rounded-md">
										<p className="text-sm font-medium">{wallet.type} Wallet</p>
										<p className="text-xs text-muted-foreground font-mono">
											ID: {wallet._id}
										</p>
									</div>
								</div>
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
													placeholder="Enter amount"
													min={50}
													step={1}
													{...field}
													onChange={(e) =>
														field.onChange(Number(e.target.value))
													}
													disabled={isSubmitting}
												/>
											</FormControl>
											<p className="text-xs text-muted-foreground">
												Minimum amount: 50 BDT
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
									{isSubmitting ? "Processing..." : "Add Money"}
								</Button>
							</form>
						</Form>
					</CardContent>
				</Card>

				{/* Wallet Info & Quick Stats */}
				<Card>
					<CardHeader>
						<CardTitle>Wallet Information</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						{/* Current Balance */}
						<div className="space-y-1">
							<p className="text-sm text-muted-foreground">Current Balance</p>
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

						{/* Tips */}
						<div className="pt-4 border-t">
							<h4 className="text-sm font-medium mb-2">💡 Quick Tips</h4>
							<ul className="text-xs text-muted-foreground space-y-1">
								<li>• Minimum top-up amount is 50 BDT</li>
								<li>• Money will be added instantly</li>
								<li>• All transactions are secure and encrypted</li>
								<li>• Check your transaction history for records</li>
							</ul>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

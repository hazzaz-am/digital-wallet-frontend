import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ROLE } from "@/constants/role";
import { useUserInfoQuery } from "@/store/features/auth/auth.api";
import {
	useCreateNewWalletMutation,
	useMyWalletQuery,
} from "@/store/features/wallet/wallet.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import AddWalletSkeleton from "./AddWalletSkeleton";
import { Navigate, useNavigate } from "react-router";

// Wallet Status Enum (based on your model)
export const WALLET_STATUS = {
	ACTIVE: "ACTIVE",
	INACTIVE: "INACTIVE",
	SUSPENDED: "SUSPENDED",
	BLOCKED: "BLOCKED",
} as const;

// Type definitions based on your wallet model
export type WalletType = keyof typeof ROLE;
export type WalletStatus = keyof typeof WALLET_STATUS;

// Validation schema for wallet creation
const walletSchema = z.object({
	balance: z
		.number({
			error: "Must be a number",
		})
		.min(50, "Balance cannot be less than 50"),
});

type WalletFormData = z.infer<typeof walletSchema>;

export default function AddWallet() {
	const navigate = useNavigate();
	const { data: userInfo, isLoading } = useUserInfoQuery(undefined);
	const [createNewWallet] = useCreateNewWalletMutation();
	const { data: myWallet, isLoading: isMyWalletLoading } =
		useMyWalletQuery(undefined);

	const form = useForm<WalletFormData>({
		resolver: zodResolver(walletSchema),
		defaultValues: {
			balance: 50,
		},
	});

	const onSubmit = async (data: WalletFormData) => {
		const toastId = toast.loading("Creating wallet...");
		if (!userInfo?.data?._id) {
			toast.error("User information not available");
			return;
		}

		try {
			const walletData = {
				userId: userInfo.data._id,
				balance: data.balance,
			};

			console.log("Creating wallet:", walletData);
			const res = await createNewWallet(walletData).unwrap();

			if (res.success) {
				toast.success("Wallet created successfully!", { id: toastId });
				form.reset();
				navigate(`/${userInfo?.data?.role.toLowerCase()}/wallets/me`);
			}
		} catch (error) {
			console.error("Error creating wallet:", error);
			toast.error("Failed to create wallet. Please try again.", {
				id: toastId,
			});
		}
	};

	const getWalletTypeInfo = () => {
		const role = userInfo?.data?.role;
		switch (role) {
			case "AGENT":
				return { color: "bg-purple-500", label: "Agent Wallet" };
			case "ADMIN":
				return { color: "bg-orange-500", label: "Admin Wallet" };
			default:
				return { color: "bg-blue-500", label: "User Wallet" };
		}
	};

	if (isMyWalletLoading) {
		return <AddWalletSkeleton />;
	}

	if (myWallet?.data?._id) {
		return (
			<Navigate to={`/${userInfo?.data?.role.toLowerCase()}/wallets/me`} />
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 p-6">
			<div className="max-w-2xl mx-auto">
				{/* Header */}
				<div className="mb-8 text-center">
					<h1 className="text-3xl font-bold text-foreground mb-2">
						Create New Wallet
					</h1>
					<p className="text-muted-foreground">
						Set up a new digital wallet with custom configuration
					</p>
				</div>

				{/* Wallet Form */}
				<Card className="p-8 border-border/50 hover:border-primary/30 transition-all duration-300">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							{/* User Information Display */}
							<div className="bg-muted/30 rounded-lg p-4 mb-6">
								<h3 className="font-semibold text-foreground mb-2">
									Wallet Owner
								</h3>
								<div className="flex items-center gap-4 text-sm text-muted-foreground">
									<span>Name: {userInfo?.data?.name || "Your Name"}</span>
									<span>•</span>
									<span>Phone: {userInfo?.data?.phone}</span>
									<span>•</span>
									<span>Role: {userInfo?.data?.role}</span>
								</div>
							</div>

							{/* Wallet Type - Readonly */}
							<div className="space-y-2">
								<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
									Wallet Type
								</label>
								<div className="p-3 bg-muted/30 rounded-md border border-input">
									<div className="flex items-center gap-2 text-sm">
										<div
											className={`w-2 h-2 rounded-full ${
												getWalletTypeInfo().color
											}`}
										></div>
										{getWalletTypeInfo().label}
									</div>
								</div>
								<p className="text-sm text-muted-foreground">
									Wallet type is automatically set based on your user role
								</p>
							</div>

							{/* Wallet Status - Readonly */}
							<div className="space-y-2">
								<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
									Wallet Status
								</label>
								<div className="p-3 bg-muted/30 rounded-md border border-input">
									<div className="flex items-center gap-2 text-sm">
										<div className="w-2 h-2 bg-green-500 rounded-full"></div>
										Active
									</div>
								</div>
								<p className="text-sm text-muted-foreground">
									Wallet status is set to active by default
								</p>
							</div>

							{/* Initial Balance */}
							<FormField
								control={form.control}
								name="balance"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Initial Balance</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="Enter initial balance"
												{...field}
												onChange={(e) => field.onChange(e.target.valueAsNumber)}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Currency - Readonly */}
							<div className="space-y-2">
								<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
									Currency
								</label>
								<div className="p-3 bg-muted/30 rounded-md border border-input">
									<div className="text-sm">BDT (Bangladeshi Taka)</div>
								</div>
								<p className="text-sm text-muted-foreground">
									Currency is set to BDT by default
								</p>
							</div>

							{/* Form Actions */}
							<div className="flex gap-4 pt-4">
								<Button
									type="button"
									variant="outline"
									onClick={() => form.reset()}
									disabled={isLoading}
									className="flex-1"
								>
									Reset Form
								</Button>
								<Button type="submit" disabled={isLoading} className="flex-1">
									{isLoading ? (
										<>
											<svg
												className="animate-spin -ml-1 mr-2 h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Creating Wallet...
										</>
									) : (
										"Create Wallet"
									)}
								</Button>
							</div>
						</form>
					</Form>
				</Card>

				{/* Information Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					<Card className="p-6 border-border/50">
						<h3 className="font-semibold text-foreground mb-3">
							Wallet Features
						</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
								Secure digital storage
							</li>
							<li className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
								Single currency (BDT)
							</li>
							<li className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
								Real-time balance tracking
							</li>
							<li className="flex items-center gap-2">
								<div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
								Transaction history
							</li>
						</ul>
					</Card>

					<Card className="p-6 border-border/50">
						<h3 className="font-semibold text-foreground mb-3">
							Security Notice
						</h3>
						<p className="text-sm text-muted-foreground">
							Your wallet will be created with industry-standard security
							measures including encryption, secure authentication, and
							transaction monitoring to protect your funds.
						</p>
					</Card>
				</div>
			</div>
		</div>
	);
}

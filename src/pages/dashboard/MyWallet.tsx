import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	useDeleteWalletMutation,
	useMyWalletQuery,
} from "@/store/features/wallet/wallet.api";
import { AlertTriangle, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { MyWalletSkeleton } from "./MyWalletSkeleton";
import { useNavigate } from "react-router";

// Wallet Status Enum (based on your model)
export const WALLET_STATUS = {
	ACTIVE: "ACTIVE",
	INACTIVE: "INACTIVE",
	SUSPENDED: "SUSPENDED",
	BLOCKED: "BLOCKED",
} as const;

// Status badge styling function
const getWalletStatusBadge = (status: string) => {
	const styles = {
		ACTIVE: "bg-green-100 text-green-800 border-green-200",
		INACTIVE: "bg-gray-100 text-gray-800 border-gray-200",
		SUSPENDED: "bg-yellow-100 text-yellow-800 border-yellow-200",
		BLOCKED: "bg-red-100 text-red-800 border-red-200",
	};
	return styles[status as keyof typeof styles] || styles.ACTIVE;
};

// Role badge styling function
const getRoleTypeBadge = (type: string) => {
	const styles = {
		USER: "bg-blue-100 text-blue-800 border-blue-200",
		AGENT: "bg-purple-100 text-purple-800 border-purple-200",
		ADMIN: "bg-orange-100 text-orange-800 border-orange-200",
		PUBLIC: "bg-gray-100 text-gray-800 border-gray-200",
	};
	return styles[type as keyof typeof styles] || styles.USER;
};

export default function MyWallet() {
	const { data: walletData, isLoading, error } = useMyWalletQuery(undefined);
	const [deleteWallet, { isLoading: isDeleting }] = useDeleteWalletMutation();
	const navigate = useNavigate();

	const handleDeleteWallet = async () => {
		if (!walletData?.data?._id) return;
		const toastId = toast.loading("Deleting your wallet...");

		try {
			const res = await deleteWallet(walletData.data._id).unwrap();
			if (res.success) {
				toast.success("Wallet deleted successfully!", { id: toastId });
				navigate("/agent/wallets/new");
			}
		} catch (error) {
			toast.error("Failed to delete wallet. Please try again.", {
				id: toastId,
			});
			console.error("Delete wallet error:", error);
		}
	};

	if (isLoading) {
		return <MyWalletSkeleton />;
	}

	if (error || !walletData?.data) {
		return (
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">My Wallet</h1>
					<p className="text-muted-foreground">Manage your digital wallet</p>
				</div>
				<Card>
					<CardContent className="flex items-center justify-center py-12">
						<div className="text-center space-y-2">
							<p className="text-muted-foreground">
								Failed to load wallet data or you don't have a wallet yet.
							</p>
							<p className="text-sm text-muted-foreground">
								Please try refreshing the page
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
				<h1 className="text-3xl font-bold tracking-tight">My Wallet</h1>
				<p className="text-muted-foreground">
					Manage your digital wallet and track your balance
				</p>
			</div>

			{/* Wallet Cards Grid */}
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{/* Main Wallet Card */}
				<Card className="md:col-span-2">
					<CardHeader>
						<div className="flex items-center justify-between">
							<CardTitle>Wallet Information</CardTitle>
							<span
								className={`px-2 py-1 rounded-full text-xs font-medium border ${getWalletStatusBadge(
									wallet.status
								)}`}
							>
								{wallet.status}
							</span>
						</div>
						<p className="text-sm text-muted-foreground">
							Your primary digital wallet details
						</p>
					</CardHeader>
					<CardContent className="space-y-6">
						{/* Balance Display */}
						<div className="text-center space-y-2 py-4 bg-muted/30 rounded-lg">
							<p className="text-sm text-muted-foreground">Current Balance</p>
							<p className="text-4xl font-bold">
								{wallet.balance?.toLocaleString() || "0"}{" "}
								<span className="text-lg font-medium text-muted-foreground">
									{wallet.currency}
								</span>
							</p>
						</div>

						{/* Wallet Details Grid */}
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-1">
								<p className="text-sm text-muted-foreground">Wallet Type</p>
								<span
									className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${getRoleTypeBadge(
										wallet.type
									)}`}
								>
									{wallet.type}
								</span>
							</div>
							<div className="space-y-1">
								<p className="text-sm text-muted-foreground">Currency</p>
								<p className="font-medium">{wallet.currency}</p>
							</div>
							<div className="space-y-1 col-span-2">
								<p className="text-sm text-muted-foreground">Wallet ID</p>
								<p className="text-xs font-mono bg-muted px-2 py-1 rounded">
									{wallet._id || "N/A"}
								</p>
							</div>
						</div>

						{/* Delete Wallet Section */}
						<div className="pt-4 border-t">
							<div className="flex items-center justify-between">
								<div className="space-y-1">
									<p className="text-sm font-medium text-muted-foreground">
										Danger Zone
									</p>
									<p className="text-xs text-muted-foreground">
										Permanently delete this wallet and all associated data
									</p>
								</div>
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<Button
											size="sm"
											disabled={isDeleting}
											className="bg-red-600 hover:bg-red-700 ml-4"
										>
											<Trash2 className="h-4 w-4 mr-2" />
											{isDeleting ? "Deleting..." : "Delete Wallet"}
										</Button>
									</AlertDialogTrigger>
									<AlertDialogContent>
										<AlertDialogHeader>
											<AlertDialogTitle className="flex items-center gap-2">
												<AlertTriangle className="h-5 w-5 text-red-500" />
												Delete Wallet Confirmation
											</AlertDialogTitle>
											<AlertDialogDescription className="space-y-2">
												<p>
													Are you sure you want to delete this wallet? This
													action cannot be undone.
												</p>
												<div className="bg-red-50 border border-red-200 rounded-md p-3">
													<p className="text-sm text-red-800 font-medium">
														⚠️ Warning: This will permanently delete:
													</p>
													<ul className="text-sm text-red-700 mt-2 ml-4 list-disc">
														<li>
															Your wallet balance:{" "}
															{wallet.balance?.toLocaleString()}{" "}
															{wallet.currency}
														</li>
														<li>All transaction history</li>
														<li>Wallet access and permissions</li>
													</ul>
												</div>
											</AlertDialogDescription>
										</AlertDialogHeader>
										<AlertDialogFooter>
											<AlertDialogCancel>Cancel</AlertDialogCancel>
											<AlertDialogAction
												onClick={handleDeleteWallet}
												className="bg-red-600 hover:bg-red-700"
												disabled={isDeleting}
											>
												{isDeleting ? "Deleting..." : "Yes, Delete Wallet"}
											</AlertDialogAction>
										</AlertDialogFooter>
									</AlertDialogContent>
								</AlertDialog>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

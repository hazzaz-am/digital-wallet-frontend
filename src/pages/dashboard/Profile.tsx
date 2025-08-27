import { PasswordChangeModal } from "@/components/PasswordChangeModal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BD_PHONE_REGEX } from "@/constants/phoneNumber";
import { ProfileSkeleton } from "@/pages/dashboard/ProfileSkeleton";
import {
	useUpdateUserInfoMutation,
	useUserInfoQuery,
} from "@/store/features/auth/auth.api";
import type { UserProfile } from "@/types";
import { getRoleBadge } from "@/utils/getRoleBadge";
import { getStatusBadge } from "@/utils/getStatusBadge";
import { useState } from "react";
import { toast } from "sonner";

export default function Profile() {
	const { data: userInfo, isLoading } = useUserInfoQuery(undefined);
	const [updateProfile] = useUpdateUserInfoMutation();
	const [isEditing, setIsEditing] = useState(false);
	const [editedData, setEditedData] = useState<Partial<UserProfile>>({});

	if (isLoading) {
		return <ProfileSkeleton />;
	}

	if (!userInfo?.data) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<Card className="p-8 text-center">
					<h2 className="text-xl font-semibold mb-2">Profile Not Found</h2>
					<p className="text-muted-foreground">
						Unable to load profile information.
					</p>
				</Card>
			</div>
		);
	}

	const user: UserProfile = userInfo.data;

	const handleEdit = () => {
		setIsEditing(true);
		setEditedData({
			name: user.name || "",
			phone: user.phone,
		});
	};

	const handleSave = async () => {
		if (user.name === editedData.name && user.phone === editedData.phone) {
			toast.info("No changes made to save");
			setIsEditing(false);
			return;
		}

		if (editedData.phone) {
			if (!BD_PHONE_REGEX.test(editedData.phone)) {
				toast.error("Invalid BD phone number", {
					description:
						"Phone number must start with +880 followed by 10 digits.",
				});
				setIsEditing(false);
				return;
			}
		}

		const newData = {
			id: user._id,
			updatedData: {
				...editedData,
			},
		};
		const toastId = toast.loading("Saving profile...");
		try {
			const res = await updateProfile(newData).unwrap();
			if (res.success) {
				toast.success("Profile updated successfully", { id: toastId });
			}
			setIsEditing(false);
		} catch (error: any) {
			toast.error(error?.data?.message || "Failed to update profile", { id: toastId });
		}
	};

	const handleCancel = () => {
		setIsEditing(false);
		setEditedData({});
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 p-6">
			<div className="max-w-4xl mx-auto space-y-8">
				{/* Profile Header */}
				<div className="text-center space-y-4">
					<div className="relative">
						<div className="h-24 w-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
							<svg
								className="h-12 w-12 text-primary"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
						</div>
					</div>

					<div>
						<h1 className="text-3xl font-bold text-foreground">
							{user.name || "Your Profile"}
						</h1>
						<div className="flex items-center justify-center gap-2 mt-2">
							<span
								className={`px-3 py-1 text-xs font-medium rounded-full border ${getRoleBadge(
									user.role
								)}`}
							>
								{user.role}
							</span>
							{user?.agentData?.approvalStatus && user.role === "AGENT" && (
								<span
									className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusBadge(
										user.agentData.approvalStatus
									)}`}
								>
									{user.agentData.approvalStatus}
								</span>
							)}
						</div>
					</div>
				</div>

				{/* Profile Information Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Personal Information */}
					<Card className="p-6 border-border/50 hover:border-primary/30 transition-all duration-300">
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-lg font-semibold text-foreground">
								Personal Information
							</h2>
							<Button
								variant="outline"
								size="sm"
								onClick={isEditing ? handleSave : handleEdit}
							>
								{isEditing ? "Save" : "Edit"}
							</Button>
						</div>

						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="name">Full Name</Label>
								{isEditing ? (
									<Input
										id="name"
										value={editedData.name || ""}
										onChange={(e) =>
											setEditedData({ ...editedData, name: e.target.value })
										}
										placeholder="Enter your full name"
									/>
								) : (
									<div className="p-3 bg-muted/30 rounded-md text-sm">
										{user.name || "Not provided"}
									</div>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="phone">Phone Number</Label>
								{isEditing ? (
									<Input
										id="phone"
										value={editedData.phone}
										onChange={(e) =>
											setEditedData({ ...editedData, phone: e.target.value })
										}
										placeholder="Enter your phone number"
									/>
								) : (
									<div className="p-3 bg-muted/30 rounded-md text-sm">
										{user.phone}
									</div>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="userId">User ID</Label>
								<div className="p-3 bg-muted/30 rounded-md text-sm font-mono">
									{user._id}
								</div>
							</div>
						</div>

						{isEditing && (
							<div className="flex gap-2 mt-4">
								<Button onClick={handleCancel} variant="outline" size="sm">
									Cancel
								</Button>
							</div>
						)}
					</Card>

					{/* Account Status */}
					<Card className="p-6 border-border/50 hover:border-primary/30 transition-all duration-300">
						<h2 className="text-lg font-semibold text-foreground mb-4">
							Account Status
						</h2>

						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<span className="text-sm text-muted-foreground">
									Account Role
								</span>
								<span
									className={`px-3 py-1 text-xs font-medium rounded-full border ${getRoleBadge(
										user.role
									)}`}
								>
									{user.role}
								</span>
							</div>

							<div className="flex items-center justify-between">
								<span className="text-sm text-muted-foreground">
									Account Status
								</span>
								<span
									className={`px-3 py-1 text-xs font-medium rounded-full border ${
										user.isDeleted
											? "bg-red-100 text-red-800 border-red-200"
											: "bg-green-100 text-green-800 border-green-200"
									}`}
								>
									{user.isDeleted ? "Deleted" : "Active"}
								</span>
							</div>

							<div className="flex items-center justify-between">
								<span className="text-sm text-muted-foreground">
									Phone Verified
								</span>
								<div className="flex items-center gap-2">
									<div className="h-2 w-2 bg-green-500 rounded-full"></div>
									<span className="text-sm text-green-600 font-medium">
										Verified
									</span>
								</div>
							</div>
						</div>
					</Card>

					{/* Agent Information (Only for Agents) */}
					{user.role === "AGENT" && user.agentData && (
						<Card className="p-6 border-border/50 hover:border-primary/30 transition-all duration-300">
							<h2 className="text-lg font-semibold text-foreground mb-4">
								Agent Information
							</h2>

							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<span className="text-sm text-muted-foreground">
										Commission Rate
									</span>
									<span className="text-sm font-medium text-foreground">
										{user.agentData.commissionRate}%
									</span>
								</div>

								{user.agentData.approvalStatus && (
									<div className="flex items-center justify-between">
										<span className="text-sm text-muted-foreground">
											Approval Status
										</span>
										<span
											className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusBadge(
												user.agentData.approvalStatus
											)}`}
										>
											{user.agentData.approvalStatus}
										</span>
									</div>
								)}

								{user.agentData.approvalStatus === "PENDING" && (
									<div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
										<p className="text-sm text-yellow-800">
											Your agent application is pending approval. You will
											receive a notification once it's processed.
										</p>
									</div>
								)}
							</div>
						</Card>
					)}

					{/* Security Settings */}
					<Card className="p-6 border-border/50 hover:border-primary/30 transition-all duration-300">
						<h2 className="text-lg font-semibold text-foreground mb-4">
							Security Settings
						</h2>

						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-foreground">
										Password
									</p>
									<p className="text-xs text-muted-foreground">
										Last updated recently
									</p>
								</div>
								<PasswordChangeModal />
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}

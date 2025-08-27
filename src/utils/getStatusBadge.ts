export const getStatusBadge = (status: string) => {
	const styles = {
		PENDING:  "bg-blue-400/10 text-blue-400 inset-ring-blue-500/20",
		APPROVED: "bg-green-400/10 text-green-400 inset-ring-green-500/20",
		REJECTED: "bg-red-400/10 text-red-400 inset-ring-red-500/20",
	};
	return styles[status as keyof typeof styles] || styles.PENDING;
};

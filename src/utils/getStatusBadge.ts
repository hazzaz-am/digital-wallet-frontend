export const getStatusBadge = (status: string) => {
	const styles = {
		PENDING: "bg-yellow-100 text-yellow-800 border-yellow-200",
		APPROVED: "bg-green-100 text-green-800 border-green-200",
		REJECTED: "bg-red-100 text-red-800 border-red-200",
	};
	return styles[status as keyof typeof styles] || styles.PENDING;
};

export const getTransactionTypeBadge = (type: string) => {
	const styles = {
		SEND_MONEY: "bg-blue-400/10 text-blue-400 inset-ring-blue-500/20",
		TOP_UP: "bg-green-400/10 text-green-400 inset-ring-green-500/20",
		CASH_OUT: "bg-orange-400/10 text-orange-400 inset-ring-orange-500/20",
		CASH_IN: "bg-purple-400/10 text-purple-400 inset-ring-purple-500/20",
	};
	return (
		styles[type as keyof typeof styles] ||
		"bg-gray-100 text-gray-800 border-gray-200"
	);
};

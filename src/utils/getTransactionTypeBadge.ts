export const getTransactionTypeBadge = (type: string) => {
	const styles = {
		SEND_MONEY: "bg-blue-100 text-blue-800 border-blue-200",
		TOP_UP: "bg-green-100 text-green-800 border-green-200",
		CASH_OUT: "bg-orange-100 text-orange-800 border-orange-200",
		CASH_IN: "bg-purple-100 text-purple-800 border-purple-200",
	};
	return (
		styles[type as keyof typeof styles] ||
		"bg-gray-100 text-gray-800 border-gray-200"
	);
};

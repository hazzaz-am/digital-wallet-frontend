export const getTransactionDirection = (type: string) => {
	const isOutgoing = ["SEND_MONEY", "CASH_OUT"].includes(type);
	const isIncoming = ["TOP_UP", "CASH_IN"].includes(type);

	return {
		isOutgoing,
		isIncoming,
		amountClass: isOutgoing
			? "text-red-500"
			: isIncoming
			? "text-green-500"
			: "text-blue-500",
		prefix: isOutgoing ? "-" : "+",
	};
};

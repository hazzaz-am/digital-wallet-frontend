export const getTransactionDirection = (
	type: string,
	initiatedBy: string,
	receiverId: string,
	currentUserId: string,
	initiatedByRole?: string
) => {
	let isOutgoing = false;
	let isIncoming = false;

	// SEND MONEY (User -> User)
	if (type === "SEND_MONEY") {
		isOutgoing = initiatedBy === currentUserId && receiverId !== currentUserId;
		isIncoming = receiverId === currentUserId && initiatedBy !== currentUserId;
	}

	// TOP UP (System -> User)
	if (type === "TOP_UP") {
		isIncoming = currentUserId === initiatedBy; // top up increases balance of the initiator
	}

	// CASH IN (Agent -> User)
	if (type === "CASH_IN") {
		if (initiatedByRole === "AGENT") {
			isOutgoing = initiatedBy === currentUserId; // Agent loses money
			isIncoming = receiverId === currentUserId; // User gains money
		}
	}

	// CASH OUT (User -> Agent)
	if (type === "CASH_OUT") {
		if (initiatedByRole === "USER") {
			isOutgoing = initiatedBy === currentUserId; // User loses money
			isIncoming = receiverId === currentUserId; // Agent gains money
		}
	}

	return {
		isOutgoing,
		isIncoming,
		amountClass: isOutgoing
			? "bg-red-400/10 text-red-400 inset-ring-red-500/20"
			: "bg-green-400/10 text-green-400 inset-ring-green-500/20",
	};
};

export const formatAmount = (amount: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "BDT",
		minimumFractionDigits: 0,
	})
		.format(amount)
		.replace("BDT", "৳");
};

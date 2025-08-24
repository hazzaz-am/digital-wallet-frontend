export const getRoleBadge = (role: string) => {
	const styles = {
		USER: "bg-blue-100 text-blue-800 border-blue-200",
		AGENT: "bg-purple-100 text-purple-800 border-purple-200",
		ADMIN: "bg-orange-100 text-orange-800 border-orange-200",
	};
	return styles[role as keyof typeof styles] || styles.USER;
};

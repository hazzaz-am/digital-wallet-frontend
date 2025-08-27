export const getRoleBadge = (role: string) => {
	const styles = {
		USER: "bg-yellow-400/10 text-yellow-400 inset-ring-yellow-500/20",
		AGENT:"bg-purple-400/10 text-purple-400 inset-ring-purple-500/20",
		ADMIN: "bg-pink-400/10 text-pink-400 inset-ring-pink-500/20",
	};
	return styles[role as keyof typeof styles] || styles.USER;
};

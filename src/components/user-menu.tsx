import { BoltIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";
import { authApi, useLogoutMutation } from "@/store/features/auth/auth.api";
import { useAppDispatch } from "@/store/hooks";

export default function UserMenu({
	name = "",
	phone,
	role
}: {
	name?: string;
	phone: string;
	role: string;
}) {
	const [logout] = useLogoutMutation();
	const dispatch = useAppDispatch();

	const handleLogOut = async () => {
		await logout(undefined);
		dispatch(authApi.util.resetApiState());
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
					<Avatar>
						<AvatarImage src="./avatar.jpg" alt="Profile image" />
						<AvatarFallback>KK</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="max-w-64" align="end">
				<DropdownMenuLabel className="flex min-w-0 flex-col">
					{name.trim().length > 0 && name}
					<span className="text-muted-foreground truncate text-xs font-normal">
						{phone}
					</span>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<BoltIcon size={16} className="opacity-60" aria-hidden="true" />
						<Link to={`/${role}/me`}>Dashboard</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
					<Link to="/" className="cursor-pointer" onClick={handleLogOut}>
						Logout
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

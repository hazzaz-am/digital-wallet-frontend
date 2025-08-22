import { Outlet } from "react-router";
import PublicLayout from "./components/layouts/PublicLayout";

export default function App() {
	return (
		<PublicLayout>
			<Outlet />
		</PublicLayout>
	);
}

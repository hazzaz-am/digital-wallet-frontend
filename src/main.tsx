import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "driver.js/dist/driver.css";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/index.tsx";
import { Toaster } from "sonner";
import { Provider as ReduxProvider} from "react-redux";
import { store } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ReduxProvider store={store}>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<RouterProvider router={router} />
				<Toaster richColors />
			</ThemeProvider>
		</ReduxProvider>
	</StrictMode>
);

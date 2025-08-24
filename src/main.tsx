import "driver.js/dist/driver.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import "./index.css";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { router } from "./routes/index.tsx";
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

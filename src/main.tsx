import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/react-query";
import { Toaster } from "sonner";

import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<AppRoutes />
			</QueryClientProvider>
		</BrowserRouter>

		<Toaster richColors />
	</StrictMode>
);

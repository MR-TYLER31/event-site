import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: () => {
    return {
      redirect: "/dashboard", // Redirect to /dashboard
    };
  },
});

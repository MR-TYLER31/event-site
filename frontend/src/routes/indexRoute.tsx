import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { redirect } from "@tanstack/react-router";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: () => {
    throw redirect({
      to: "/dashboard",
    });
  },
});
